require('dotenv').config({ path: '.env.local' });
const { put, list } = require('@vercel/blob');
const fs = require('fs');

async function repair() {
  console.log("Fetching blobs...");
  const { blobs } = await list();
  const dbBlob = blobs.find(b => b.pathname === 'sps-db/db.json');
  
  if (!dbBlob) {
    console.log("No db blob found.");
    return;
  }
  
  console.log("Downloading DB...");
  const res = await fetch(dbBlob.url);
  const db = await res.json();
  
  let modified = false;
  
  db.motorcycles.forEach(motor => {
    // Repair images array
    const originalLength = motor.images.length;
    motor.images = motor.images.filter(img => !img.startsWith('f-auto') && !img.startsWith('w-550'));
    
    if (motor.images.length < originalLength) {
      console.log(`Repaired ${motor.name}: Removed broken image parts.`);
      modified = true;
      // Re-add the known good image if empty
      if (motor.images.length === 0) {
          const slug = motor.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
          const defaultImage = `https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-product-2-24012022-110536.png`;
          motor.images = [defaultImage];
      }
    }
  });
  
  if (modified) {
    console.log("Uploading repaired DB...");
    await put("sps-db/db.json", JSON.stringify(db, null, 2), {
      access: "public",
      addRandomSuffix: false,
    });
    console.log("Repair complete!");
  } else {
    console.log("No broken images found. DB is clean.");
  }
}

repair().catch(console.error);
