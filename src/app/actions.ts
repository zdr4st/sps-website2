"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  verifyAdmin,
  setSessionCookie,
  clearSessionCookie,
} from "@/lib/supabase-server";
import {
  getMotorcycleById,
  updateMotorcycle,
  bulkUpsertFromCsv,
  saveBannersToDb,
  uploadImage,
} from "@/lib/supabase";
import type { Motorcycle, CreditOption } from "@/lib/types";
import { getDefaultImageUrl } from "@/lib/types";

export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Email dan password harus diisi." };
  }

  const result = await verifyAdmin(email, password);

  if (result.success && result.token) {
    await setSessionCookie(result.token);
    redirect("/admin");
  }

  return { error: result.error || "Email atau password salah!" };
}

export async function logout() {
  await clearSessionCookie();
  redirect("/admin/login");
}

export async function uploadCsv(csvText: string) {
  try {
    const lines = csvText.split('\n').map(l => l.trim().split(','));
    const motorcycles: Motorcycle[] = [];
    const creditMatrix: Record<string, CreditOption[]> = {};

    const parseValue = (val: string | undefined) => {
      if (!val || val === '-' || val === '#REF!' || val.trim() === '' || val.trim() === '.') return null;
      return parseInt(val.replace(/\./g, ''), 10) * 1000;
    };

    const parseGroup = (colOffset: number, categoryNameOverride: string | null = null) => {
      let currentCategory = categoryNameOverride || '';
      let currentMotorId = '';
      let currentMotorName = '';
      let currentPrice = 0;

      for (let i = 1; i < lines.length; i++) {
        const row = lines[i];
        if (row.length <= colOffset) continue;
        
        let nameCol = row[colOffset];
        if (nameCol) nameCol = nameCol.trim();
        
        if (nameCol === 'BEBEK' || nameCol === 'SPORT' || nameCol === 'MATIC' || nameCol === 'OTHERS' || nameCol === 'CBR 250') {
          currentCategory = nameCol === 'CBR 250' ? 'Sport' : 
                            nameCol === 'OTHERS' ? 'Others' : 
                            nameCol.charAt(0).toUpperCase() + nameCol.slice(1).toLowerCase();
          continue;
        }
        if (nameCol === 'EV') {
          currentCategory = 'EV';
          continue;
        }
        if (nameCol === '' && row[colOffset + 1] === '') continue;

        const isPrice = /^[0-9.]+$/.test(nameCol);
        if (nameCol && !isPrice && nameCol !== '.' && nameCol !== 'DP' && nameCol !== 'ANGSURAN' && nameCol !== '12' && nameCol !== 'Bayar' && nameCol !== 'Matrix') {
          currentMotorName = nameCol;
          currentMotorId = 'm-' + currentMotorName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
          currentPrice = 0;
          
          const nextRow = lines[i+1];
          if (nextRow && nextRow.length > colOffset) {
             const nextNameCol = nextRow[colOffset];
             if (nextNameCol && /^[0-9.]+$/.test(nextNameCol.trim())) {
                 currentPrice = parseInt(nextNameCol.trim().replace(/\./g, ''), 10);
             }
          }

          if (!motorcycles.find(m => m.id === currentMotorId) && currentMotorName.indexOf('#REF!') === -1) {
             motorcycles.push({
               id: currentMotorId,
               name: currentMotorName,
               brand: "Honda",
               type: currentCategory,
               priceCash: currentPrice,
               description: "Motor unggulan dari Honda.",
               images: [getDefaultImageUrl(currentMotorName)],
               featureDetails: [{ name: "Fitur Unggulan Honda", description: "Motor dengan teknologi terdepan dari Honda." }]
             });
            creditMatrix[currentMotorId] = [];
          }
        }

        if (currentMotorId && row.length > colOffset + 7) {
          const dpStr = row[colOffset + 1];
          const bayarStr = row[colOffset + 2];
          
          if (dpStr && bayarStr && dpStr !== 'DP' && bayarStr !== 'Bayar' && dpStr.indexOf('#REF!') === -1 && bayarStr.indexOf('#REF!') === -1) {
            const dp = parseValue(dpStr);
            const bayar = parseValue(bayarStr);
            
            if (dp !== null && bayar !== null) {
              const tenors: Record<number, number> = {};
              const t12 = parseValue(row[colOffset + 3]);
              const t24 = parseValue(row[colOffset + 4]);
              const t30 = parseValue(row[colOffset + 5]);
              const t36 = parseValue(row[colOffset + 6]);
              const t40 = parseValue(row[colOffset + 7]);
              const t48 = parseValue(row[colOffset + 8]);
              
              if (t12 !== null) tenors[12] = t12;
              if (t24 !== null) tenors[24] = t24;
              if (t30 !== null) tenors[30] = t30;
              if (t36 !== null) tenors[36] = t36;
              if (t40 !== null) tenors[40] = t40;
              if (t48 !== null) tenors[48] = t48;

              if (Object.keys(tenors).length > 0 && creditMatrix[currentMotorId]) {
                creditMatrix[currentMotorId].push({ dp, bayar, tenors });
              }
            }
          }
        }
      }
    };

    parseGroup(1);
    parseGroup(11);
    parseGroup(21);

    const validMotorcycles = motorcycles.filter(m => creditMatrix[m.id] && creditMatrix[m.id].length > 0);
    validMotorcycles.forEach(m => {
       if (m.priceCash === 0) {
          m.priceCash = 20000000; // fallback
       }
    });

    // Bulk upsert to Supabase (preserves existing images/descriptions)
    await bulkUpsertFromCsv(validMotorcycles, creditMatrix);

    revalidatePath("/");
    
    return { success: true };
  } catch (err) {
    console.error("uploadCsv error:", err);
    return { error: "Failed to parse CSV" };
  }
}

export async function saveMotorcycle(id: string, formData: FormData) {
  try {
    const existingMotor = await getMotorcycleById(id);
    if (!existingMotor) return { error: "Motorcycle not found" };

    const name = formData.get("name") as string;
    const type = formData.get("type") as string;
    const description = formData.get("description") as string;
    
    // Parse image URLs (one per line)
    const imagesStr = formData.get("images") as string;
    const images = imagesStr 
      ? imagesStr.split(/\r?\n|, /).map(s => s.trim()).filter(Boolean) 
      : [];

    // Handle uploaded file
    const imageFile = formData.get("imageFile") as File | null;
    if (imageFile && imageFile.size > 0) {
      try {
        const uploadedUrl = await uploadImage(imageFile, 'motorcycles');
        images.unshift(uploadedUrl);
      } catch (err) {
        console.error("Image upload failed:", err);
        // Continue without the uploaded image
      }
    }

    // Parse featureDetails from JSON submitted by the admin form
    let featureDetails = existingMotor.featureDetails;
    const featureDetailsRaw = formData.get("featureDetails") as string;
    if (featureDetailsRaw) {
      try {
        const parsed = JSON.parse(featureDetailsRaw);
        if (Array.isArray(parsed)) {
          featureDetails = parsed;
        }
      } catch {
        // keep existing featureDetails if JSON is invalid
      }
    }

    // Process color variants
    const colors: { name: string; image: string }[] = [];
    const colorCountStr = formData.get("colorCount") as string;
    const colorCount = parseInt(colorCountStr || "0", 10);
    
    for (let i = 0; i < colorCount; i++) {
      const colorName = formData.get(`colorName_${i}`) as string;
      const colorFile = formData.get(`colorFile_${i}`) as File | null;
      const colorUrl = formData.get(`colorUrl_${i}`) as string;
      
      if (!colorName) continue;
      
      let finalImageUrl = colorUrl || "";
      if (colorFile && colorFile.size > 0) {
        try {
          finalImageUrl = await uploadImage(colorFile, 'colors');
        } catch (err) {
          console.error("Color image upload failed:", err);
        }
      }
      
      colors.push({ name: colorName, image: finalImageUrl });
    }

    const result = await updateMotorcycle(id, {
      name,
      type,
      description,
      images: images.length > 0 ? images : undefined,
      colors: colors.length > 0 ? colors : undefined,
      featureDetails,
    });

    if (!result.success) {
      return { error: result.error || "Gagal menyimpan data" };
    }

    revalidatePath("/");
    revalidatePath(`/motorcycle/${id}`);
    revalidatePath("/admin");
    
    return { success: true };
  } catch (err) {
    console.error("saveMotorcycle error:", err);
    return { error: err instanceof Error ? err.message : "Gagal menyimpan data" };
  }
}

export async function saveBanners(formData: FormData) {
  try {
    const urlsStr = formData.get("urls") as string;
    const bannerUrls = urlsStr ? urlsStr.split("\n").map(s => s.trim()).filter(Boolean) : [];

    const result = await saveBannersToDb(bannerUrls);
    
    if (!result.success) {
      return { error: result.error || "Gagal menyimpan banner" };
    }

    revalidatePath("/");
    revalidatePath("/admin/banners");
    
    return { success: true };
  } catch (error) {
    console.error("saveBanners error:", error);
    return { error: error instanceof Error ? error.message : "Gagal menyimpan banner" };
  }
}
