const cheerio = require('cheerio');
const https = require('https');

https.get('https://hondasanjaya.com/', {
  headers: { 'User-Agent': 'Mozilla/5.0' }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const $ = cheerio.load(data);
    const images = [];
    $('img').each((i, el) => {
      images.push($(el).attr('src'));
    });
    console.log(JSON.stringify(images, null, 2));
    
    // Also look for inline scripts that might contain data
    const scripts = [];
    $('script').each((i, el) => {
      const src = $(el).attr('src');
      if (!src) {
         scripts.push($(el).html().substring(0, 500));
      }
    });
    console.log("Scripts: ", scripts.length);
  });
}).on('error', console.error);
