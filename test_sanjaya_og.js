const https = require('https');

function checkOgImage(url) {
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    let d = '';
    res.on('data', c => d+=c);
    res.on('end', () => {
      const match = d.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i);
      console.log(`[${res.statusCode}] ${url} -> ${match ? match[1] : 'Not found'}`);
    });
  }).on('error', console.error);
}

checkOgImage('https://hondasanjaya.com/product/beat');
checkOgImage('https://hondasanjaya.com/motor/honda-beat');
checkOgImage('https://hondasanjaya.com/honda-beat');
