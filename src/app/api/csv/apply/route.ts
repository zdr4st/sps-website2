import { NextRequest } from 'next/server';
import { bulkUpsertFromCsv } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';
import type { Motorcycle, CreditOption } from '@/lib/types';

export async function POST(request: NextRequest) {
  try {
    const { motorcycles, creditMatrix } = await request.json() as {
      motorcycles: Motorcycle[];
      creditMatrix: Record<string, CreditOption[]>;
    };
    
    if (!motorcycles || !Array.isArray(motorcycles) || motorcycles.length === 0) {
      return Response.json({ error: 'Data motor tidak valid' }, { status: 400 });
    }

    if (!creditMatrix || typeof creditMatrix !== 'object') {
      return Response.json({ error: 'Data kredit tidak valid' }, { status: 400 });
    }

    // Apply the changes
    await bulkUpsertFromCsv(motorcycles, creditMatrix);

    // Revalidate all pages
    revalidatePath("/");
    revalidatePath("/simulasi-kredit");
    revalidatePath("/admin");
    
    return Response.json({ 
      success: true,
      message: `Berhasil mengupdate ${motorcycles.length} motor dengan ${Object.values(creditMatrix).flat().length} opsi kredit.`
    });
  } catch (err) {
    console.error('CSV apply error:', err);
    return Response.json({ error: 'Gagal menyimpan data ke database' }, { status: 500 });
  }
}
