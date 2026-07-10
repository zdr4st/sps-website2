"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { getDb, saveDb, Database } from "@/lib/db";
import { Motorcycle, CreditOption, getDefaultImageUrl } from "@/lib/mock-data";

export async function login(formData: FormData) {
  const password = formData.get("password");
  
  if (password === "admin123") {
    const cookieStore = await cookies();
    cookieStore.set("admin_token", "authorized", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });
    redirect("/admin");
  } else {
    return { error: "Password salah!" };
  }
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_token");
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
             let nextNameCol = nextRow[colOffset];
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

    const db = await getDb();
    
    // We only update the ones present in the CSV, leaving existing details (like descriptions/images) intact if they match by ID
    validMotorcycles.forEach(newMotor => {
      const existing = db.motorcycles.find(m => m.id === newMotor.id);
      if (existing) {
         // Keep existing images, description, featureDetails
         newMotor.images = existing.images;
         newMotor.description = existing.description;
         newMotor.featureDetails = existing.featureDetails;
         // Only update price & type from CSV
      }
    });

    db.motorcycles = validMotorcycles;
    db.creditMatrix = creditMatrix;
    
    await saveDb(db);
    revalidatePath("/");
    
    return { success: true };
  } catch (err) {
    return { error: "Failed to parse CSV" };
  }
}

export async function saveMotorcycle(id: string, formData: FormData) {
  try {
    const db = await getDb();
    const motorIndex = db.motorcycles.findIndex(m => m.id === id);
    if (motorIndex === -1) return { error: "Motorcycle not found" };

    const name = formData.get("name") as string;
    const type = formData.get("type") as string;
    const description = formData.get("description") as string;
    
    // Parse image URLs (comma separated)
    const imagesStr = formData.get("images") as string;
    const images = imagesStr ? imagesStr.split(",").map(s => s.trim()).filter(Boolean) : [];

    // Parse featureDetails from JSON submitted by the admin form
    let featureDetails = db.motorcycles[motorIndex].featureDetails;
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

    db.motorcycles[motorIndex] = {
      ...db.motorcycles[motorIndex],
      name,
      type,
      description,
      images: images.length > 0 ? images : db.motorcycles[motorIndex].images,
      featureDetails,
    };

    await saveDb(db);
    revalidatePath("/");
    revalidatePath(`/motorcycle/${id}`);
    revalidatePath("/admin");
    
    return { success: true };
  } catch (error) {
    return { error: "Gagal menyimpan data" };
  }
}

export async function saveBanners(formData: FormData) {
  try {
    const db = await getDb();
    
    const urlsStr = formData.get("urls") as string;
    const bannerUrls = urlsStr ? urlsStr.split("\n").map(s => s.trim()).filter(Boolean) : [];

    db.homeBanners = bannerUrls;
    
    await saveDb(db);
    revalidatePath("/");
    revalidatePath("/admin/banners");
    
    return { success: true };
  } catch (error) {
    return { error: "Gagal menyimpan banner" };
  }
}

