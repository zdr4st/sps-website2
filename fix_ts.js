const fs = require('fs');

let db = JSON.parse(fs.readFileSync('data/db.json', 'utf8'));

// Update mock-data.ts's creditMatrix object
let tsCode = fs.readFileSync('src/lib/mock-data.ts', 'utf8');
const creditMatrixStart = tsCode.indexOf('export const creditMatrix: Record<string, CreditOption[]> = {');

if (creditMatrixStart > -1) {
  const newCreditMatrixCode = 'export const creditMatrix: Record<string, CreditOption[]> = ' + JSON.stringify(db.creditMatrix, null, 2) + ';\n';
  // Since it's the last export in the file, we can just slice it!
  tsCode = tsCode.substring(0, creditMatrixStart) + newCreditMatrixCode;
  
  // Update prices in mock-data.ts mockMotorcycles array
  db.motorcycles.forEach(m => {
    const priceRegex = new RegExp(`("id":\\s*"${m.id}"[\\s\\S]*?"priceCash":\\s*)\\d+`);
    tsCode = tsCode.replace(priceRegex, `$1${m.priceCash}`);
  });
  
  fs.writeFileSync('src/lib/mock-data.ts', tsCode, 'utf8');
  console.log('Successfully updated src/lib/mock-data.ts!');
} else {
  console.log('Could not find creditMatrixStart');
}
