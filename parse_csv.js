const fs = require('fs');

const csvPath = 'Simulasi credit.csv';
const csvData = fs.readFileSync(csvPath, 'utf8');
const lines = csvData.split('\n').map(l => l.trim().split(','));

const motorcycles = [];
const creditMatrix = {};

const parseValue = (val) => {
  if (!val || val === '-' || val === '#REF!' || val.trim() === '' || val.trim() === '.') return null;
  // It has dots as thousands separators, remove them
  return parseInt(val.replace(/\./g, ''), 10) * 1000; // Multiply by 1000 because data is in thousands
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
    
    // Check if it's a category header
    if (nameCol === 'BEBEK' || nameCol === 'SPORT' || nameCol === 'MATIC' || nameCol === 'OTHERS' || nameCol === 'CBR 250') {
      currentCategory = nameCol === 'CBR 250' ? 'Sport' : 
                        nameCol === 'OTHERS' ? 'Others' : 
                        nameCol.charAt(0).toUpperCase() + nameCol.slice(1).toLowerCase();
      continue;
    }
    if (nameCol === '' && row[colOffset + 1] === '') {
      continue; // empty row
    }

    // Check if it's a motor name (not a number)
    const isPrice = /^[0-9.]+$/.test(nameCol);
    if (nameCol && !isPrice && nameCol !== '.' && nameCol !== 'DP' && nameCol !== 'ANGSURAN' && nameCol !== '12' && nameCol !== 'Bayar' && nameCol !== 'Matrix') {
      currentMotorName = nameCol;
      currentMotorId = 'm-' + currentMotorName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      currentPrice = 0; // reset price
      
      // Look ahead for price (usually on the next line in the same column, but sometimes not provided or provided weirdly)
      const nextRow = lines[i+1];
      if (nextRow && nextRow.length > colOffset) {
         let nextNameCol = nextRow[colOffset];
         if (nextNameCol && /^[0-9.]+$/.test(nextNameCol.trim())) {
             currentPrice = parseInt(nextNameCol.trim().replace(/\./g, ''), 10);
         }
      }

      if (!motorcycles.find(m => m.id === currentMotorId) && currentMotorName.indexOf('#REF!') === -1) {
        let image = "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800";
        if (currentCategory === 'Sport') image = "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&q=80&w=800";
        if (currentCategory === 'Matic') image = "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fd?auto=format&fit=crop&q=80&w=800";

        motorcycles.push({
          id: currentMotorId,
          name: currentMotorName,
          brand: "Honda",
          type: currentCategory,
          priceCash: currentPrice, // already in full rupiah because the parsing didn't multiply by 1000 yet, wait, the CSV price is e.g. "19.200.000" which IS full rupiah, not thousands.
          description: "Motor unggulan dari Honda.",
          images: [image],
          features: ["Fitur Unggulan Honda"]
        });
        creditMatrix[currentMotorId] = [];
      }
    }

    // Parse DP, Bayar, and Tenors
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

// Column offset 1: Bebek/Sport/Others
parseGroup(1);
// Column offset 11: Matic
parseGroup(11);
// Column offset 21: BeAT POP (which we want to ignore due to #REF, but just in case)
parseGroup(21);

// Remove motorcycles that ended up having no credit options
const validMotorcycles = motorcycles.filter(m => creditMatrix[m.id] && creditMatrix[m.id].length > 0);
validMotorcycles.forEach(m => {
   // Ensure the price is set correctly if it failed to parse initially
   if (m.priceCash === 0) {
      m.priceCash = 20000000; // fallback
   }
});

const tsFileContent = `
export interface Motorcycle {
  id: string;
  name: string;
  brand: string;
  type: string;
  priceCash: number;
  description: string;
  images: string[];
  features: string[];
}

export const mockMotorcycles: Motorcycle[] = ${JSON.stringify(validMotorcycles, null, 2)};

export interface CreditOption {
  dp: number;
  bayar: number;
  tenors: {
    [months: number]: number;
  };
}

export const creditMatrix: Record<string, CreditOption[]> = ${JSON.stringify(creditMatrix, null, 2)};
`;

fs.writeFileSync('src/lib/mock-data.ts', tsFileContent);
console.log('Successfully generated mock-data.ts with', validMotorcycles.length, 'motorcycles.');
