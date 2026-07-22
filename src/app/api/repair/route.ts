import { NextResponse } from "next/server";
import { put, list } from "@vercel/blob";

export async function GET() {
  try {
    const { blobs } = await list();
    const dbBlob = blobs.find(b => b.pathname === 'sps-db/db.json');
    
    if (!dbBlob) {
      return NextResponse.json({ error: "No db blob found" });
    }
    
    const res = await fetch(dbBlob.url);
    const db = await res.json();
    
    let modified = false;
    
    db.motorcycles.forEach((motor: any) => {
      const originalLength = motor.images.length;
      motor.images = motor.images.filter((img: string) => !img.startsWith('f-auto') && !img.startsWith('w-550'));
      
      if (motor.images.length < originalLength) {
        modified = true;
        if (motor.images.length === 0) {
          const defaultImage = `https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-product-2-24012022-110536.png`;
          motor.images = [defaultImage];
        }
      }
      
      if (motor.colors) {
        motor.colors.forEach((c: any) => {
            if (c.image.startsWith('f-auto') || c.image.startsWith('w-550')) {
                c.image = `https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-product-2-24012022-110536.png`;
                modified = true;
            }
        });
      }
    });
    
    if (modified) {
      await put("sps-db/db.json", JSON.stringify(db, null, 2), {
        access: "public",
        addRandomSuffix: false,
      });
      return NextResponse.json({ success: true, message: "Repair complete!" });
    } else {
      return NextResponse.json({ success: true, message: "No broken images found. DB is clean." });
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}
