import { NextRequest } from 'next/server';
import type { Motorcycle, CreditOption } from '@/lib/types';
import { getDefaultImageUrl } from '@/lib/types';
import { supabase } from '@/lib/supabase';

export interface CsvPreviewResult {
  newMotorcycles: { id: string; name: string; type: string; priceCash: number }[];
  updatedMotorcycles: { id: string; name: string; oldPrice: number; newPrice: number }[];
  removedMotorcycles: { id: string; name: string }[];
  totalCreditOptions: number;
  motorcycles: Motorcycle[];
  creditMatrix: Record<string, CreditOption[]>;
}

function parseCsvData(csvText: string) {
  const lines = csvText.split('\n').map(l => l.trim().split(','));
  const motorcycles: Motorcycle[] = [];
  const creditMatrix: Record<string, CreditOption[]> = {};

  const parseValue = (val: string | undefined) => {
    if (!val || val === '-' || val === '#REF!' || val.trim() === '' || val.trim() === '.') return null;
    return parseInt(val.replace(/\./g, ''), 10) * 1000;
  };

  const parseGroup = (colOffset: number, categoryNameOverride: string | null = null) => {
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
           const nextNameCol = nextRow[colOffset];
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
             priceCash: currentPrice,
             description: "Motor unggulan dari Honda.",
             images: [getDefaultImageUrl(currentMotorName)],
             featureDetails: [{ name: "Fitur Unggulan Honda", description: "Motor dengan teknologi terdepan dari Honda." }]
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
            const tenors: Record<number, number> = {};
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
  parseGroup(21);

  const validMotorcycles = motorcycles.filter(m => creditMatrix[m.id] && creditMatrix[m.id].length > 0);
  validMotorcycles.forEach(m => {
     if (m.priceCash === 0) {
        m.priceCash = 20000000;
     }
  });

  return { motorcycles: validMotorcycles, creditMatrix };
}

export async function POST(request: NextRequest) {
  try {
    const { csvText } = await request.json();
    
    if (!csvText || typeof csvText !== 'string') {
      return Response.json({ error: 'CSV text is required' }, { status: 400 });
    }

    // Parse CSV
    const { motorcycles, creditMatrix } = parseCsvData(csvText);

    if (motorcycles.length === 0) {
      return Response.json({ error: 'Tidak ada data motor yang valid dalam CSV' }, { status: 400 });
    }

    // Get existing motorcycles for diff
    const { data: existingRows } = await supabase
      .from('motorcycles')
      .select('id, name, price_cash');

    const existingMap = new Map<string, { name: string; price_cash: number }>();
    if (existingRows) {
      for (const row of existingRows) {
        existingMap.set(row.id, { name: row.name, price_cash: row.price_cash });
      }
    }

    // Calculate diff
    const newMotorcycles: CsvPreviewResult['newMotorcycles'] = [];
    const updatedMotorcycles: CsvPreviewResult['updatedMotorcycles'] = [];
    const csvIds = new Set(motorcycles.map(m => m.id));

    for (const motor of motorcycles) {
      const existing = existingMap.get(motor.id);
      if (!existing) {
        newMotorcycles.push({
          id: motor.id,
          name: motor.name,
          type: motor.type,
          priceCash: motor.priceCash,
        });
      } else if (existing.price_cash !== motor.priceCash) {
        updatedMotorcycles.push({
          id: motor.id,
          name: motor.name,
          oldPrice: existing.price_cash,
          newPrice: motor.priceCash,
        });
      }
    }

    const removedMotorcycles: CsvPreviewResult['removedMotorcycles'] = [];
    for (const [id, data] of existingMap) {
      if (!csvIds.has(id)) {
        removedMotorcycles.push({ id, name: data.name });
      }
    }

    // Count total credit options
    let totalCreditOptions = 0;
    for (const options of Object.values(creditMatrix)) {
      totalCreditOptions += options.length;
    }

    const result: CsvPreviewResult = {
      newMotorcycles,
      updatedMotorcycles,
      removedMotorcycles,
      totalCreditOptions,
      motorcycles,
      creditMatrix,
    };

    return Response.json(result);
  } catch (err) {
    console.error('CSV preview error:', err);
    return Response.json({ error: 'Gagal memproses CSV' }, { status: 500 });
  }
}
