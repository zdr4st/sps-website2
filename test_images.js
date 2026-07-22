const https = require('https');

const models = ['Beat', 'Scoopy', 'Vario', 'PCX', 'ADV', 'Revo', 'Supra'];
const extensions = ['.png', '.jpg', '.jpeg'];
const baseUrl = 'https://ik.imagekit.io/azisnurhamid/Dealer%20Motor%20Honda/Gambar/Product/';

models.forEach(model => {
  extensions.forEach(ext => {
    const url = baseUrl + model + ext;
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        console.log(`Found: ${url}`);
      }
    }).on('error', () => {});
    
    const urlLower = baseUrl + model.toLowerCase() + ext;
    https.get(urlLower, (res) => {
      if (res.statusCode === 200) {
        console.log(`Found: ${urlLower}`);
      }
    }).on('error', () => {});
  });
});
