const fs = require('fs');
const db = JSON.parse(fs.readFileSync('data/db.json', 'utf8'));
db.homeBanners = [
  "https://ik.imagekit.io/zlt25mb52fx/tr:q-70,pr-true,f-auto/uploads/product-draft/banner/homepage-banner-1366x573px-1-24062026-031326.jpg",
  "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=2000"
];
fs.writeFileSync('data/db.json', JSON.stringify(db, null, 2));
console.log("Fixed db.json");
