const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  console.log('Starting puppeteer...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  const images = new Set();
  
  page.on('response', async (response) => {
    const url = response.url();
    if (url.includes('ik.imagekit.io') || url.includes('.jpg') || url.includes('.png') || url.includes('.webp')) {
      images.add(url);
    }
  });

  console.log('Navigating to hondasanjaya.com...');
  await page.goto('https://hondasanjaya.com/', { waitUntil: 'networkidle0', timeout: 60000 });
  
  // Also try to extract img src directly from the DOM
  const domImages = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img')).map(img => img.src);
  });
  
  domImages.forEach(img => images.add(img));

  console.log(`Found ${images.size} images.`);
  fs.writeFileSync('scraped_images.json', JSON.stringify(Array.from(images), null, 2));
  
  await browser.close();
  console.log('Done!');
})();
