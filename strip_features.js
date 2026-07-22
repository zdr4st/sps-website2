const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'src', 'lib', 'mock-data.ts');
let content = fs.readFileSync(file, 'utf8');

// Strip out image keys in feature details since Astra deleted them (404s)
// e.g., image: "https://ik.imagekit.io/zlt25mb52fx/tr:q-90,f-auto,pr-true/uploads/product/feature/..."
content = content.replace(/\s*image:\s*"https:\/\/ik\.imagekit\.io\/zlt25mb52fx[^"]+",?/g, '');

fs.writeFileSync(file, content);
console.log("Stripped dead feature images");
