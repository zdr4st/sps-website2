const cheerio = require('cheerio');
const https = require('https');

https.get('https://hondasanjaya.com/', {
  headers: { 'User-Agent': 'Mozilla/5.0' }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const $ = cheerio.load(data);
    const scripts = [];
    $('script').each((i, el) => {
      const src = $(el).attr('src');
      if (src) {
         scripts.push(src.startsWith('http') ? src : `https://hondasanjaya.com${src.startsWith('/') ? '' : '/'}${src}`);
      }
    });
    console.log(JSON.stringify(scripts, null, 2));
    
    // Fetch each script and regex for imagekit
    scripts.forEach(scriptUrl => {
        https.get(scriptUrl, (res2) => {
            let sData = '';
            res2.on('data', chunk => sData += chunk);
            res2.on('end', () => {
                const regex = /https:\/\/ik\.imagekit\.io\/azisnurhamid\/[^"'\s\\]+/g;
                const matches = sData.match(regex);
                if (matches && matches.length > 0) {
                    console.log(`Found in ${scriptUrl}:`);
                    const unique = [...new Set(matches)];
                    console.log(JSON.stringify(unique, null, 2));
                }
            });
        }).on('error', () => {});
    });
  });
}).on('error', console.error);
