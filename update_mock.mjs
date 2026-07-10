import fs from 'fs';
import path from 'path';

const file = path.join(process.cwd(), 'src/lib/mock-data.ts');
let code = fs.readFileSync(file, 'utf-8');

const imageMap = {
  "revo-fit": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-product-2-24012022-110536.png",
  "revo-x": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-product-2-24012022-110536.png",
  "supra-x-125-d": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thumbnail-new-supra-x-5-04032022-102907.png",
  "supra-x-125-cw": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thumbnail-new-supra-x-5-04032022-102907.png",
  "supra-gtr-sporty": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/supra-gtr-150-4-27052021-092133.png",
  "supra-gtr-exc": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/supra-gtr-150-4-27052021-092133.png",
  "sonic": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/supra-gtr-150-4-27052021-092133.png",
  "sonic-special-edition": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/supra-gtr-150-4-27052021-092133.png",
  "cb-verza-d": "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/thumbnail-product-cb150x-2-12112021-075912.png",
  "cb-verza-cw": "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/thumbnail-product-cb150x-2-12112021-075912.png",
  "cb-150-r": "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/thumbnail-product-cb150x-2-12112021-075912.png",
  "cb-150-r-se": "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/thumbnail-product-cb150x-2-12112021-075912.png",
  "cbr-150-r": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/crf-250-web-banner-product-thumbnail-400x300px-16062025-032317.png",
  "crf-150-l": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/crf-250-web-banner-product-thumbnail-400x300px-16062025-032317.png",
  "monkey": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/product-thumbnail-408-03072026-061409.png",
  "beat-cbs": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/new-thumbnail-beat-1-26062026-055630.png",
  "beat-cbs-iss": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/new-thumbnail-beat-1-26062026-055630.png",
  "beat-deluxe": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/new-thumbnail-beat-1-26062026-055630.png",
  "beat-street": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/new-thumbnail-beat-street-1-26062026-055644.png",
  "genio-cbs": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thumbnail-genio-new-3-29102025-075221.png",
  "genio-cbs-iss": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thumbnail-genio-new-3-29102025-075221.png",
  "scoopy-fashion": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/product-thumbnail-400x300-copy-1-13112025-030828.png",
  "scoopy-sporty": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/product-thumbnail-400x300-copy-1-13112025-030828.png",
  "scoopy-prestige": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/product-thumbnail-400x300-copy-1-13112025-030828.png",
  "scoopy-stylish": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/product-thumbnail-400x300-copy-1-13112025-030828.png",
  "vario-125-cbs": "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/sideview-advance-blue-400x300pxl-copy-07042026-080156.png",
  "vario-125-cbs-iss": "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/sideview-advance-blue-400x300pxl-copy-07042026-080156.png",
  "vario-125-cbs-iss-spc": "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/sideview-advance-blue-400x300pxl-copy-07042026-080156.png",
  "vario-160-cbs": "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/product-thumbnail-400x300px-6-24062026-031459.png",
  "vario-160-abs": "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/product-thumbnail-400x300px-6-24062026-031459.png",
  "pcx-cbs": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/product-thumbnail-400x300-4-11022026-041017.png",
  "pcx-abs": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/product-thumbnail-400x300-4-11022026-041017.png",
  "pcx-e-hev": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/product-thumbnail-400x300-4-11022026-041017.png",
  "adv-150-cbs": "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/product-thumbnail-400x300px-08092025-030701.png",
  "adv-150-abs": "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/product-thumbnail-400x300px-08092025-030701.png",
  "forza": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/product-thumbnail-400x300-4-11022026-041017.png",
  "cbr-250-rr": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/crf-250-web-banner-product-thumbnail-400x300px-16062025-032317.png",
  "cbr-250-rr-sp": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/crf-250-web-banner-product-thumbnail-400x300px-16062025-032317.png",
  "cbr-250-rr-sp-qs": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/crf-250-web-banner-product-thumbnail-400x300px-16062025-032317.png",
};

let currentId = null;

// The regex will match either the id property or the images array property
const newCode = code.replace(/"id":\s*"([^"]+)"|("images":\s*\[\s*"[^"]+"\s*\])/g, (match, id, imgBlock) => {
  if (id) {
    currentId = id;
    return match;
  }
  
  if (imgBlock && currentId) {
    const slug = currentId.replace(/^m-/, '');
    
    let newUrl = imageMap[slug];
    if (!newUrl) {
       for (const [key, u] of Object.entries(imageMap)) {
         if (slug.includes(key)) {
           newUrl = u; break;
         }
       }
    }
    if (!newUrl) {
      newUrl = "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/new-thumbnail-beat-1-26062026-055630.png";
    }

    return `"images": [\n      "${newUrl}"\n    ]`;
  }
  
  return match;
});

fs.writeFileSync(file, newCode, 'utf-8');
console.log('Successfully updated mock-data.ts images array');
