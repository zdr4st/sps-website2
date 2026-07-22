import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const model = searchParams.get("model");

  if (!model) {
    return new NextResponse("Model parameter is required", { status: 400 });
  }

  // Common mapping to handle astra-honda slugs
  const slugMap: Record<string, string> = {
    'revo-fit': 'new-revo-fit',
    'revo-x': 'new-revo-fit', // fallback
    'supra-x-125': 'supra-x-125-fi',
    'supra-x-125-d': 'supra-x-125-fi',
    'supra-x-125-cw': 'supra-x-125-fi',
    'supra-gtr-sporty': 'supra-gtr-150',
    'supra-gtr-exc': 'supra-gtr-150',
    'beat-cbs': 'honda-beat',
    'beat-cbs-iss': 'honda-beat',
    'beat-deluxe': 'honda-beat',
    'beat-street': 'honda-beat-street',
    'genio-cbs': 'genio',
    'genio-cbs-iss': 'genio',
    'scoopy-fashion': 'scoopy',
    'scoopy-sporty': 'scoopy',
    'scoopy-prestige': 'scoopy',
    'scoopy-stylish': 'scoopy',
    'vario-125-cbs': 'vario-125',
    'vario-125-cbs-iss': 'vario-125',
    'vario-125-cbs-iss-spc': 'vario-125',
    'vario-160-cbs': 'vario-160',
    'vario-160-abs': 'vario-160',
    'pcx-cbs': 'pcx',
    'pcx-abs': 'pcx',
    'pcx-e-hev': 'pcx-e-hev',
    'adv-150-cbs': 'adv160',
    'adv-150-abs': 'adv160',
    'em1-e': 'em1-e',
    'icon-e': 'icon-e',
    'cuv-e': 'cuv-e',
    'crf-250-rally': 'crf250rally',
    'monkey': 'honda-monkey',
    'cb-150-x': 'cb150x',
    'stylo': 'stylo-160',
    'sonic': 'sonic-150',
    'verza': 'cb-verza-150',
    'cb150r': 'cb150r-streetfire-new',
    'cbr150r': 'cbr-150',
    'crf150l': 'crf150',
    'ct125': 'ct-125-hunter-cub',
    'cbr250rr': 'cbr-250'
  };

  // Find base slug
  let targetSlug = model;
  for (const key of Object.keys(slugMap)) {
    if (model.includes(key)) {
      targetSlug = slugMap[key];
      break;
    }
  }

  try {
    // 1. We proxy fetch from astra-honda.com to bypass ImageKit's 403 / 404 client-side blocking
    const pageUrl = `https://www.astra-honda.com/product/${targetSlug}`;
    
    const pageRes = await fetch(pageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Accept': 'text/html'
      },
      next: { revalidate: 86400 } // Cache for 1 day
    });

    if (pageRes.ok) {
      const html = await pageRes.text();
      
      let imageUrl = null;

      // Try ld+json first
      const ldMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
      if (ldMatch) {
        try {
          const ld = JSON.parse(ldMatch[1]);
          if (ld.image) imageUrl = ld.image;
        } catch {}
      }
      
      // Try og:image fallback
      if (!imageUrl) {
        const ogMatch = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/);
        if (ogMatch && ogMatch[1] && !ogMatch[1].includes('logo-ahm')) {
          imageUrl = ogMatch[1];
        }
      }

      if (imageUrl) {
        // Stream the image through our API to bypass ImageKit blocks
        const imageRes = await fetch(imageUrl, {
          headers: {
            'User-Agent': 'Mozilla/5.0',
            'Referer': 'https://www.astra-honda.com/'
          }
        });

        if (imageRes.ok) {
          const buffer = await imageRes.arrayBuffer();
          return new NextResponse(buffer, {
            headers: {
              'Content-Type': imageRes.headers.get('content-type') || 'image/jpeg',
              'Cache-Control': 'public, max-age=86400'
            }
          });
        }
      }
    }

    // Fallback image if not found or blocked
    const fallbackImage = `https://placehold.co/600x400/eeeeee/333333?text=${encodeURIComponent(model.toUpperCase())}`;
    const fallbackRes = await fetch(fallbackImage);
    const fallbackBuffer = await fallbackRes.arrayBuffer();
    
    return new NextResponse(fallbackBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=3600'
      }
    });

  } catch (error) {
    console.error("Image proxy error:", error);
    return new NextResponse("Failed to fetch image", { status: 500 });
  }
}
