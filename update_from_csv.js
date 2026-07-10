const fs = require('fs');

const csvText = fs.readFileSync('Simulasi credit.csv', 'utf8');
const lines = csvText.split('\n').map(l => l.trim().split(','));

const motorcycles = [];
const creditMatrix = {};

const parseValue = (val) => {
  if (!val || val === '-' || val === '#REF!' || val.trim() === '' || val.trim() === '.') return null;
  return parseInt(val.replace(/\./g, ''), 10) * 1000;
};

const parseGroup = (colOffset, categoryNameOverride = null) => {
  let currentCategory = categoryNameOverride || '';
  let currentMotorId = '';
  let currentMotorName = '';
  let currentPrice = 0;

  for (let i = 1; i < lines.length; i++) {
    const row = lines[i];
    if (row.length <= colOffset) continue;
    
    let nameCol = row[colOffset];
    if (nameCol) nameCol = nameCol.trim();
    
    if (nameCol === 'BEBEK' || nameCol === 'SPORT' || nameCol === 'MATIC' || nameCol === 'OTHERS' || nameCol === 'CBR 250') {
      currentCategory = nameCol === 'CBR 250' ? 'Sport' : 
                        nameCol === 'OTHERS' ? 'Others' : 
                        nameCol.charAt(0).toUpperCase() + nameCol.slice(1).toLowerCase();
      continue;
    }
    // Handle EV category properly
    if (nameCol === 'EV') {
      currentCategory = 'EV';
      continue;
    }

    if (nameCol === '' && row[colOffset + 1] === '') continue;

    const isPrice = /^[0-9.]+$/.test(nameCol);
    if (nameCol && !isPrice && nameCol !== '.' && nameCol !== 'DP' && nameCol !== 'ANGSURAN' && nameCol !== '12' && nameCol !== 'Bayar' && nameCol !== 'Matrix') {
      currentMotorName = nameCol;
      currentMotorId = 'm-' + currentMotorName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      currentPrice = 0;
      
      const nextRow = lines[i+1];
      if (nextRow && nextRow.length > colOffset) {
         let nextNameCol = nextRow[colOffset];
         if (nextNameCol && /^[0-9.]+$/.test(nextNameCol.trim())) {
             currentPrice = parseInt(nextNameCol.trim().replace(/\./g, ''), 10);
         }
      }

      if (!motorcycles.find(m => m.id === currentMotorId) && currentMotorName.indexOf('#REF!') === -1) {
         motorcycles.push({
           id: currentMotorId,
           name: currentMotorName,
           brand: "Honda",
           type: currentCategory,
           priceCash: currentPrice
         });
        creditMatrix[currentMotorId] = [];
      }
    }

    if (currentMotorId && row.length > colOffset + 7) {
      const dpStr = row[colOffset + 1];
      const bayarStr = row[colOffset + 2];
      
      if (dpStr && bayarStr && dpStr !== 'DP' && bayarStr !== 'Bayar' && dpStr.indexOf('#REF!') === -1 && bayarStr.indexOf('#REF!') === -1) {
        const dp = parseValue(dpStr);
        const bayar = parseValue(bayarStr);
        
        if (dp !== null && bayar !== null) {
          const tenors = {};
          const t12 = parseValue(row[colOffset + 3]);
          const t24 = parseValue(row[colOffset + 4]);
          const t30 = parseValue(row[colOffset + 5]);
          const t36 = parseValue(row[colOffset + 6]);
          const t40 = parseValue(row[colOffset + 7]);
          const t48 = parseValue(row[colOffset + 8]);
          
          if (t12 !== null) tenors[12] = t12;
          if (t24 !== null) tenors[24] = t24;
          if (t30 !== null) tenors[30] = t30;
          if (t36 !== null) tenors[36] = t36;
          if (t40 !== null) tenors[40] = t40;
          if (t48 !== null) tenors[48] = t48;

          if (Object.keys(tenors).length > 0 && creditMatrix[currentMotorId]) {
            creditMatrix[currentMotorId].push({ dp, bayar, tenors });
          }
        }
      }
    }
  }
};

parseGroup(1);
parseGroup(11);

// Now update db.json
let db = { motorcycles: [], creditMatrix: {}, homeBanners: [] };
if (fs.existsSync('data/db.json')) {
  db = JSON.parse(fs.readFileSync('data/db.json', 'utf8'));
}

motorcycles.forEach(newMotor => {
  const existing = db.motorcycles.find(m => m.id === newMotor.id);
  if (existing) {
    existing.priceCash = newMotor.priceCash;
    if (newMotor.type && newMotor.type !== '') {
      existing.type = newMotor.type;
    }
  } else {
    // We don't add completely new motors here unless we want to, 
    // but typically we should. Wait, if it's in the CSV, it should be in the DB.
    db.motorcycles.push({
      ...newMotor,
      description: "Motor unggulan dari Honda.",
      images: ["https://ik.imagekit.io/zlt25mb52fx/uploads/page/meta/logo-ahm-3-21072023-032305.png"],
      featureDetails: [{ name: "Fitur Unggulan Honda", description: "Motor dengan teknologi terdepan dari Honda." }]
    });
  }
});

// Update credit matrix entirely from CSV
Object.keys(creditMatrix).forEach(id => {
  if (creditMatrix[id].length > 0) {
    db.creditMatrix[id] = creditMatrix[id];
  }
});

// Ensure all motorcycles have a credit matrix, otherwise remove them or keep them?
// Let's just keep them.
db.motorcycles.forEach(m => {
  if (m.priceCash === 0) m.priceCash = 20000000;
});

fs.writeFileSync('data/db.json', JSON.stringify(db, null, 2));
console.log('Updated data/db.json');

// Also update mock-data.ts's creditMatrix object
let tsCode = fs.readFileSync('src/lib/mock-data.ts', 'utf8');
const creditMatrixStart = tsCode.indexOf('export const creditMatrix: Record<string, CreditOption[]> = {');
if (creditMatrixStart > -1) {
  const creditMatrixEndStr = '};\n';
  let endIdx = tsCode.indexOf(creditMatrixEndStr, creditMatrixStart);
  if (endIdx > -1) {
    const newCreditMatrixCode = 'export const creditMatrix: Record<string, CreditOption[]> = ' + JSON.stringify(db.creditMatrix, null, 2) + ';\n';
    tsCode = tsCode.substring(0, creditMatrixStart) + newCreditMatrixCode + tsCode.substring(endIdx + creditMatrixEndStr.length);
  }
}

// Update prices in mock-data.ts mockMotorcycles array
db.motorcycles.forEach(m => {
  const priceRegex = new RegExp(`("id":\\s*"${m.id}"[\\s\\S]*?"priceCash":\\s*)\\d+`);
  tsCode = tsCode.replace(priceRegex, `$1${m.priceCash}`);
});

fs.writeFileSync('src/lib/mock-data.ts', tsCode, 'utf8');
console.log('Updated src/lib/mock-data.ts');
