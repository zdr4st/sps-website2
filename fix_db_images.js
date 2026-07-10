const fs = require('fs');

const KNOWN_IMAGES = {
  // Bebek
  "revo-x": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-product-2-24012022-110536.png",
  "revo-fit": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-product-2-24012022-110536.png", // Assume same as revo-x
  "supra-x-125-d": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thumbnail-new-supra-x-5-04032022-102907.png",
  "supra-x-125-cw": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thumbnail-new-supra-x-5-04032022-102907.png",
  "supra-gtr-sporty": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/supra-gtr-150-4-27052021-092133.png",
  "supra-gtr-exc": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/supra-gtr-150-4-27052021-092133.png",
  // Matic
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
  // EV
  "em1-e": "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/em1-silver-samping-400x300-tr-1-21122023-045042.png",
  "icon-e": "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/ahm-light-sideview-blue-4-08102024-032201-1-09102024-051128.png",
  "cuv-e": "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/a01-p01-2025-cuve-mat-pearl-crater-white-rh-side-std-1-08102024-044120-1-09102024-053640.png",
  // Sport
  "crf-250-rally": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/crf-250-web-banner-product-thumbnail-400x300px-16062025-032317.png",
  "monkey": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/product-thumbnail-408-03072026-061409.png",
  "cb-150-x": "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/thumbnail-product-cb150x-2-12112021-075912.png",
  "stylo": "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/stylo-red-400x300pxl-1-02042026-044510.png",
};

const LOGO = "https://ik.imagekit.io/zlt25mb52fx/uploads/page/meta/logo-ahm-3-21072023-032305.png";

function getUrl(name) {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  if (KNOWN_IMAGES[slug]) return KNOWN_IMAGES[slug];
  
  if (slug.includes('stylo')) return KNOWN_IMAGES["stylo"];
  if (slug.includes('crf-250') || slug.includes('crf250')) return KNOWN_IMAGES["crf-250-rally"];
  if (slug.includes('cb-150-x') || slug.includes('cb150x')) return KNOWN_IMAGES["cb-150-x"];
  if (slug.includes('gtr')) return KNOWN_IMAGES["supra-gtr-sporty"];
  if (slug.includes('supra')) return KNOWN_IMAGES["supra-x-125-d"];
  if (slug.includes('revo')) return KNOWN_IMAGES["revo-x"];
  if (slug.includes('pcx')) return KNOWN_IMAGES["pcx-cbs"];
  if (slug.includes('adv')) return KNOWN_IMAGES["adv-150-cbs"];
  if (slug.includes('vario-160') || slug.includes('vario-evo') || slug.includes('vario160')) return KNOWN_IMAGES["vario-160-cbs"];
  if (slug.includes('vario')) return KNOWN_IMAGES["vario-125-cbs"];
  if (slug.includes('scoopy')) return KNOWN_IMAGES["scoopy-sporty"];
  if (slug.includes('genio')) return KNOWN_IMAGES["genio-cbs"];
  if (slug.includes('beat-street')) return KNOWN_IMAGES["beat-street"];
  if (slug.includes('beat')) return KNOWN_IMAGES["beat-cbs"];
  if (slug.includes('monkey')) return KNOWN_IMAGES["monkey"];
  if (slug.includes('em1')) return KNOWN_IMAGES["em1-e"];
  if (slug.includes('icon')) return KNOWN_IMAGES["icon-e"];
  if (slug.includes('cuv')) return KNOWN_IMAGES["cuv-e"];
  
  // Explicitly returning LOGO for CBR, CRF150, Sonic, CB150R, Verza, etc.
  return LOGO;
}

// 1. Update data/db.json
try {
  const dbJson = fs.readFileSync('data/db.json', 'utf8');
  const db = JSON.parse(dbJson);
  let dbUpdated = false;
  
  db.motorcycles.forEach(m => {
    const correctUrl = getUrl(m.name);
    // don't overwrite if it's already a good URL that we manually set earlier maybe?
    // actually, let's just enforce correctness to prevent wrong images
    if (!m.images || !m.images[0] || m.images[0] !== correctUrl) {
      m.images = [correctUrl];
      dbUpdated = true;
    }
  });
  
  if (dbUpdated) {
    fs.writeFileSync('data/db.json', JSON.stringify(db, null, 2), 'utf8');
    console.log('Fixed data/db.json');
  }
} catch (e) {
  console.log('No data/db.json found or err:', e.message);
}

// 2. Update src/lib/mock-data.ts function
let tsCode = fs.readFileSync('src/lib/mock-data.ts', 'utf8');
const fnStart = tsCode.indexOf('export function getDefaultImageUrl(motorName: string): string {');
const fnEnd = tsCode.indexOf('// ─── Motorcycle catalog');

if (fnStart > -1 && fnEnd > -1) {
  const newFn = "export function getDefaultImageUrl(motorName: string): string {\n" +
  "  const slug = motorName\n" +
  "    .toLowerCase()\n" +
  "    .replace(/[^a-z0-9]+/g, '-')\n" +
  "    .replace(/^-|-$/g, '');\n" +
  "  \n" +
  "  if (KNOWN_IMAGES[slug]) return KNOWN_IMAGES[slug];\n\n" +
  "  if (slug.includes('stylo')) return \"https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/stylo-red-400x300pxl-1-02042026-044510.png\";\n" +
  "  if (slug.includes('crf-250') || slug.includes('crf250')) return KNOWN_IMAGES[\"crf-250-rally\"];\n" +
  "  if (slug.includes('cb-150-x') || slug.includes('cb150x')) return \"https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/thumbnail-product-cb150x-2-12112021-075912.png\";\n" +
  "  if (slug.includes('gtr')) return KNOWN_IMAGES[\"supra-gtr-sporty\"];\n" +
  "  if (slug.includes('supra')) return KNOWN_IMAGES[\"supra-x-125-d\"];\n" +
  "  if (slug.includes('revo')) return KNOWN_IMAGES[\"revo-x\"];\n" +
  "  if (slug.includes('pcx')) return KNOWN_IMAGES[\"pcx-cbs\"];\n" +
  "  if (slug.includes('adv')) return KNOWN_IMAGES[\"adv-150-cbs\"];\n" +
  "  if (slug.includes('vario-160') || slug.includes('vario-evo') || slug.includes('vario160')) return KNOWN_IMAGES[\"vario-160-cbs\"];\n" +
  "  if (slug.includes('vario')) return KNOWN_IMAGES[\"vario-125-cbs\"];\n" +
  "  if (slug.includes('scoopy')) return KNOWN_IMAGES[\"scoopy-sporty\"];\n" +
  "  if (slug.includes('genio')) return KNOWN_IMAGES[\"genio-cbs\"];\n" +
  "  if (slug.includes('beat-street')) return KNOWN_IMAGES[\"beat-street\"];\n" +
  "  if (slug.includes('beat')) return KNOWN_IMAGES[\"beat-cbs\"];\n" +
  "  if (slug.includes('monkey')) return KNOWN_IMAGES[\"monkey\"];\n" +
  "  if (slug.includes('em1')) return \"https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/em1-silver-samping-400x300-tr-1-21122023-045042.png\";\n" +
  "  if (slug.includes('icon')) return \"https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/ahm-light-sideview-blue-4-08102024-032201-1-09102024-051128.png\";\n" +
  "  if (slug.includes('cuv')) return \"https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/a01-p01-2025-cuve-mat-pearl-crater-white-rh-side-std-1-08102024-044120-1-09102024-053640.png\";\n\n" +
  "  return \"https://ik.imagekit.io/zlt25mb52fx/uploads/page/meta/logo-ahm-3-21072023-032305.png\";\n" +
  "}\n\n";
  tsCode = tsCode.substring(0, fnStart) + newFn + tsCode.substring(fnEnd);
}

// 3. Update KNOWN_IMAGES in mock-data.ts
// Just replace it entirely
const kiStart = tsCode.indexOf('export const KNOWN_IMAGES: Record<string, string> = {');
const kiEnd = tsCode.indexOf('};', kiStart) + 2;

if (kiStart > -1 && kiEnd > -1) {
  const newKi = `export const KNOWN_IMAGES: Record<string, string> = ${JSON.stringify(KNOWN_IMAGES, null, 2)};`;
  tsCode = tsCode.substring(0, kiStart) + newKi + tsCode.substring(kiEnd);
}

// 4. Update images inside mock-data.ts's array
let currentId = null;
tsCode = tsCode.replace(/"id":\s*"([^"]+)"|("images":\s*\[\s*"[^"]+"\s*\])/g, (match, id, imgBlock) => {
  if (id) {
    currentId = id;
    return match;
  }
  
  if (imgBlock && currentId) {
    const nameSlug = currentId.replace(/^m-/, '').replace(/-/g, ' ');
    const correctUrl = getUrl(nameSlug);
    return '"images": [\n      "' + correctUrl + '"\n    ]';
  }
  return match;
});

fs.writeFileSync('src/lib/mock-data.ts', tsCode, 'utf8');
console.log('Fixed src/lib/mock-data.ts');
