// ─── Shared types for the SPS Motor application ──────────────────────────────

export interface ColorVariant {
  name: string;
  image: string;
}

export interface FeatureDetail {
  name: string;
  description: string;
  image?: string;
}

export interface Motorcycle {
  id: string;
  name: string;
  brand: string;
  type: string;
  priceCash: number;
  description: string;
  images: string[];
  colors?: ColorVariant[];
  featureDetails: FeatureDetail[];
}

export interface CreditOption {
  dp: number;
  bayar: number;
  tenors: {
    [months: number]: number;
  };
}

// Map of known motor slug → ImageKit thumbnail URL (used as fallback during CSV upload)
export const KNOWN_IMAGES: Record<string, string> = {
  "revo-x": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-product-2-24012022-110536.png",
  "revo-fit": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-product-2-24012022-110536.png",
  "supra-x-125-d": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thumbnail-new-supra-x-5-04032022-102907.png",
  "supra-x-125-cw": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thumbnail-new-supra-x-5-04032022-102907.png",
  "supra-gtr-sporty": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/supra-gtr-150-4-27052021-092133.png",
  "supra-gtr-exc": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/supra-gtr-150-4-27052021-092133.png",
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
  "em1-e": "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/em1-silver-samping-400x300-tr-1-21122023-045042.png",
  "icon-e": "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/ahm-light-sideview-blue-4-08102024-032201-1-09102024-051128.png",
  "cuv-e": "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/a01-p01-2025-cuve-mat-pearl-crater-white-rh-side-std-1-08102024-044120-1-09102024-053640.png",
  "crf-250-rally": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/crf-250-web-banner-product-thumbnail-400x300px-16062025-032317.png",
  "monkey": "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/product-thumbnail-408-03072026-061409.png",
  "cb-150-x": "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/thumbnail-product-cb150x-2-12112021-075912.png",
  "stylo": "https://ik.imagekit.io/zlt25mb52fx/uploads/product-draft/meta/stylo-red-400x300pxl-1-02042026-044510.png"
};

/**
 * Generates a fallback image URL from ImageKit based on motor name slug.
 * Used during CSV import when no explicit image URL is available.
 */
export function getDefaultImageUrl(motorName: string): string {
  const slug = motorName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  
  // Try to find a known image first
  if (KNOWN_IMAGES[slug]) {
    return KNOWN_IMAGES[slug];
  }

  // Try partial matches
  for (const [key, url] of Object.entries(KNOWN_IMAGES)) {
    if (slug.includes(key) || key.includes(slug)) {
      return url;
    }
  }

  // Fallback to a default Honda image
  return "https://ik.imagekit.io/zlt25mb52fx/tr:w-550,f-auto/uploads/product/thumbnail/thmbnail-product-2-24012022-110536.png";
}
