const https = require('https');

https.get('https://hondasanjaya.com/', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'
  }
}, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const regex = /https:\/\/ik\.imagekit\.io\/azisnurhamid\/[^"'\s]+/g;
    const matches = data.match(regex);
    if (matches) {
      const unique = [...new Set(matches)];
      console.log(JSON.stringify(unique, null, 2));
    } else {
      console.log('No matches found');
    }
  });
}).on('error', (err) => {
  console.error(err);
});
