import { createClient } from '@supabase/supabase-js';
import { unstable_cache } from 'next/cache';
import type { Motorcycle, CreditOption } from './types';

// ─── Supabase Clients ─────────────────────────────────────────────────────────

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Public client (for read operations, can be used client-side)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Admin client (for write operations, server-side only)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

// ─── Database row types (matches Supabase schema) ─────────────────────────────

interface MotorcycleRow {
  id: string;
  name: string;
  brand: string;
  type: string;
  price_cash: number;
  description: string;
  images: string[];
  colors: { name: string; image: string }[] | null;
  feature_details: { name: string; description: string; image?: string }[] | null;
  created_at: string;
  updated_at: string;
}

interface CreditOptionRow {
  id: number;
  motorcycle_id: string;
  dp: number;
  bayar: number;
  tenors: Record<string, number>;
}

// ─── Row → App type converters ────────────────────────────────────────────────

function rowToMotorcycle(row: MotorcycleRow): Motorcycle {
  return {
    id: row.id,
    name: row.name,
    brand: row.brand,
    type: row.type,
    priceCash: row.price_cash,
    description: row.description || '',
    images: row.images || [],
    colors: row.colors || undefined,
    featureDetails: row.feature_details || [],
  };
}

function rowToCreditOption(row: CreditOptionRow): CreditOption {
  // Convert string keys back to number keys
  const tenors: Record<number, number> = {};
  for (const [key, value] of Object.entries(row.tenors)) {
    tenors[Number(key)] = value;
  }
  return {
    dp: row.dp,
    bayar: row.bayar,
    tenors,
  };
}

// ─── Read Queries (with caching) ──────────────────────────────────────────────

/**
 * Get all motorcycles for catalog page.
 * Lightweight: only fetches columns needed for the card grid.
 * Cached for 60 seconds.
 */
export const getMotorcycles = unstable_cache(
  async (): Promise<Motorcycle[]> => {
    const { data, error } = await supabase
      .from('motorcycles')
      .select('id, name, brand, type, price_cash, images')
      .order('name');

    if (error) {
      console.error('getMotorcycles error:', error);
      return [];
    }

    return (data as MotorcycleRow[]).map(row => ({
      id: row.id,
      name: row.name,
      brand: row.brand,
      type: row.type,
      priceCash: row.price_cash,
      description: '',
      images: row.images || [],
      featureDetails: [],
    }));
  },
  ['motorcycles-catalog'],
  { revalidate: 60, tags: ['motorcycles'] }
);

/**
 * Get a single motorcycle by ID (for detail page).
 * Full data including colors and feature_details.
 * Cached for 60 seconds per ID.
 */
export const getMotorcycleById = unstable_cache(
  async (id: string): Promise<Motorcycle | null> => {
    const { data, error } = await supabase
      .from('motorcycles')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('getMotorcycleById error:', error);
      return null;
    }

    return rowToMotorcycle(data as MotorcycleRow);
  },
  ['motorcycle-detail'],
  { revalidate: 60, tags: ['motorcycles'] }
);

/**
 * Get credit options for a specific motorcycle.
 * Cached for 60 seconds.
 */
export const getCreditOptionsForMotorcycle = unstable_cache(
  async (motorcycleId: string): Promise<CreditOption[]> => {
    const { data, error } = await supabase
      .from('credit_options')
      .select('*')
      .eq('motorcycle_id', motorcycleId)
      .order('dp');

    if (error) {
      console.error('getCreditOptions error:', error);
      return [];
    }

    return (data as CreditOptionRow[]).map(rowToCreditOption);
  },
  ['credit-options'],
  { revalidate: 60, tags: ['credit-options'] }
);

/**
 * Get full credit matrix for all motorcycles (for simulasi kredit page).
 * Cached for 60 seconds.
 */
export const getCreditMatrix = unstable_cache(
  async (): Promise<Record<string, CreditOption[]>> => {
    const { data, error } = await supabase
      .from('credit_options')
      .select('*')
      .order('dp');

    if (error) {
      console.error('getCreditMatrix error:', error);
      return {};
    }

    const matrix: Record<string, CreditOption[]> = {};
    for (const row of data as CreditOptionRow[]) {
      if (!matrix[row.motorcycle_id]) {
        matrix[row.motorcycle_id] = [];
      }
      matrix[row.motorcycle_id].push(rowToCreditOption(row));
    }

    return matrix;
  },
  ['credit-matrix'],
  { revalidate: 60, tags: ['credit-options'] }
);

/**
 * Get home banners from site_settings.
 * Cached for 5 minutes.
 */
export const getBanners = unstable_cache(
  async (): Promise<string[]> => {
    const { data, error } = await supabase
      .from('site_settings')
      .select('value')
      .eq('key', 'home_banners')
      .single();

    if (error || !data) {
      return [
        "https://ik.imagekit.io/zlt25mb52fx/tr:q-70,pr-true,f-auto/uploads/product-draft/banner/homepage-banner-1366x573px-1-24062026-031326.jpg",
        "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=2000"
      ];
    }

    return data.value as string[];
  },
  ['banners'],
  { revalidate: 300, tags: ['banners'] }
);

// ─── Write Queries (use supabaseAdmin for service_role bypass of RLS) ──────────

/**
 * Update a motorcycle record.
 */
export async function updateMotorcycle(
  id: string,
  updates: {
    name?: string;
    type?: string;
    description?: string;
    images?: string[];
    colors?: { name: string; image: string }[];
    featureDetails?: { name: string; description: string; image?: string }[];
  }
): Promise<{ success: boolean; error?: string }> {
  const updateData: Record<string, unknown> = {};

  if (updates.name !== undefined) updateData.name = updates.name;
  if (updates.type !== undefined) updateData.type = updates.type;
  if (updates.description !== undefined) updateData.description = updates.description;
  if (updates.images !== undefined) updateData.images = updates.images;
  if (updates.colors !== undefined) updateData.colors = updates.colors;
  if (updates.featureDetails !== undefined) updateData.feature_details = updates.featureDetails;

  const { error } = await supabaseAdmin
    .from('motorcycles')
    .update(updateData)
    .eq('id', id);

  if (error) {
    console.error('updateMotorcycle error:', error);
    return { success: false, error: error.message };
  }

  return { success: true };
}

/**
 * Upsert a motorcycle (insert or update).
 * Used during CSV import.
 */
export async function upsertMotorcycle(motor: {
  id: string;
  name: string;
  brand: string;
  type: string;
  priceCash: number;
  description: string;
  images: string[];
  featureDetails: { name: string; description: string; image?: string }[];
}): Promise<void> {
  const { error } = await supabaseAdmin
    .from('motorcycles')
    .upsert({
      id: motor.id,
      name: motor.name,
      brand: motor.brand,
      type: motor.type,
      price_cash: motor.priceCash,
      description: motor.description,
      images: motor.images,
      feature_details: motor.featureDetails,
    }, { onConflict: 'id' });

  if (error) {
    console.error('upsertMotorcycle error:', error);
    throw error;
  }
}

/**
 * Replace all credit options for a motorcycle.
 */
export async function replaceCreditOptions(
  motorcycleId: string,
  options: CreditOption[]
): Promise<void> {
  // Delete existing options
  await supabaseAdmin
    .from('credit_options')
    .delete()
    .eq('motorcycle_id', motorcycleId);

  if (options.length === 0) return;

  // Insert new options
  const rows = options.map(opt => ({
    motorcycle_id: motorcycleId,
    dp: opt.dp,
    bayar: opt.bayar,
    tenors: opt.tenors,
  }));

  const { error } = await supabaseAdmin
    .from('credit_options')
    .insert(rows);

  if (error) {
    console.error('replaceCreditOptions error:', error);
    throw error;
  }
}

/**
 * Bulk replace motorcycles and credit matrix (CSV import).
 * Preserves existing images/descriptions/featureDetails if they exist.
 */
export async function bulkUpsertFromCsv(
  motorcycles: Motorcycle[],
  creditMatrix: Record<string, CreditOption[]>
): Promise<void> {
  // Get existing motorcycles to preserve their images/descriptions
  const { data: existingRows } = await supabaseAdmin
    .from('motorcycles')
    .select('id, images, description, feature_details, colors');

  const existingMap = new Map<string, MotorcycleRow>();
  if (existingRows) {
    for (const row of existingRows as MotorcycleRow[]) {
      existingMap.set(row.id, row);
    }
  }

  // Upsert each motorcycle
  for (const motor of motorcycles) {
    const existing = existingMap.get(motor.id);

    const upsertData = {
      id: motor.id,
      name: motor.name,
      brand: motor.brand,
      type: motor.type,
      price_cash: motor.priceCash,
      // Preserve existing data if available
      description: existing?.description || motor.description,
      images: existing?.images?.length ? existing.images : motor.images,
      feature_details: existing?.feature_details?.length ? existing.feature_details : motor.featureDetails,
      colors: existing?.colors || null,
    };

    const { error } = await supabaseAdmin
      .from('motorcycles')
      .upsert(upsertData, { onConflict: 'id' });

    if (error) {
      console.error(`upsert motorcycle ${motor.id} error:`, error);
    }
  }

  // Delete old motorcycles not in the new list
  const newIds = motorcycles.map(m => m.id);
  if (newIds.length > 0) {
    await supabaseAdmin
      .from('motorcycles')
      .delete()
      .not('id', 'in', `(${newIds.join(',')})`);
  }

  // Replace all credit options
  // First delete all existing credit options
  await supabaseAdmin.from('credit_options').delete().neq('id', 0);

  // Insert all new credit options in batches
  const allCreditRows: { motorcycle_id: string; dp: number; bayar: number; tenors: Record<number, number> }[] = [];
  for (const [motorcycleId, options] of Object.entries(creditMatrix)) {
    for (const opt of options) {
      allCreditRows.push({
        motorcycle_id: motorcycleId,
        dp: opt.dp,
        bayar: opt.bayar,
        tenors: opt.tenors,
      });
    }
  }

  // Insert in batches of 500
  const BATCH_SIZE = 500;
  for (let i = 0; i < allCreditRows.length; i += BATCH_SIZE) {
    const batch = allCreditRows.slice(i, i + BATCH_SIZE);
    const { error } = await supabaseAdmin
      .from('credit_options')
      .insert(batch);

    if (error) {
      console.error(`batch insert credit_options error (batch ${i / BATCH_SIZE}):`, error);
    }
  }
}

/**
 * Save home banners.
 */
export async function saveBannersToDb(banners: string[]): Promise<{ success: boolean; error?: string }> {
  const { error } = await supabaseAdmin
    .from('site_settings')
    .upsert({
      key: 'home_banners',
      value: banners,
    }, { onConflict: 'key' });

  if (error) {
    console.error('saveBanners error:', error);
    return { success: false, error: error.message };
  }

  return { success: true };
}

/**
 * Upload image to Supabase Storage.
 */
export async function uploadImage(file: File, folder: string = 'motorcycles'): Promise<string> {
  const fileName = `${folder}/${Date.now()}-${file.name}`;

  const { error } = await supabaseAdmin.storage
    .from('sps-images')
    .upload(fileName, file, {
      cacheControl: '31536000', // 1 year cache
      upsert: false,
    });

  if (error) {
    console.error('uploadImage error:', error);
    throw error;
  }

  const { data: urlData } = supabaseAdmin.storage
    .from('sps-images')
    .getPublicUrl(fileName);

  return urlData.publicUrl;
}
