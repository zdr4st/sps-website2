// Find remaining product slugs
const missingSlugs = [
  // Revo Fit
  'honda-revo', 'revo', 'new-revo-fit',
  // Sonic
  'sonic-150', 'new-sonic-150r',
  // CB Verza
  'verza', 'cb-verza-150', 'new-cb-verza-150',
  // CB150R
  'new-cb150r', 'all-new-cb150r-streetfire', 'cb150r-streetfire-new',
  // CBR150R
  'all-new-cbr150r', 'new-cbr-150r', 'cbr-150',
  // CRF150L
  'new-crf150l', 'crf-150', 'crf150',
  // CB150X
  'new-cb150x', 'cb-150-x',
  // CT125
  'ct-125-hunter-cub', 'hunter-cub-ct125', 'new-ct125',
  // PCX
  'pcx', 'new-pcx160', 'pcx-160-new', 'all-new-pcx-160', 'pcx 160',
  // CBR250RR
  'all-new-cbr250rr', 'new-cbr-250rr', 'cbr250', 'cbr-250',
];

async function fetchImage(slug) {
  try {
    const url = `https://www.astra-honda.com/product/${slug}`;
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html',
      },
    });
    if (!res.ok) return { slug, status: res.status };
    const html = await res.text();
    const titleMatch = html.match(/<title>(.*?)<\/title>/);
    const title = titleMatch ? titleMatch[1] : '';

    const ldMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
    if (ldMatch) {
      try {
        const ld = JSON.parse(ldMatch[1]);
        if (ld.image) return { slug, name: ld.name, image: ld.image, source: 'ld+json', title };
      } catch {}
    }
    const ogMatch = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/);
    if (ogMatch && ogMatch[1] && !ogMatch[1].includes('logo-ahm')) {
      return { slug, image: ogMatch[1], source: 'og:image', title };
    }
    return { slug, image: null, title };
  } catch (e) {
    return { slug, error: e.message };
  }
}

(async () => {
  for (const slug of missingSlugs) {
    const r = await fetchImage(slug);
    if (r.image) {
      console.log(`✅ ${slug}: ${r.image} (${r.title})`);
    } else {
      console.log(`❌ ${slug}: ${r.status || r.title || 'NO IMAGE'}`);
    }
  }
})();
