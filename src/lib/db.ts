import { put, list } from '@vercel/blob';
import { mockMotorcycles, creditMatrix, Motorcycle, CreditOption } from './mock-data';

export interface Database {
  motorcycles: Motorcycle[];
  creditMatrix: Record<string, CreditOption[]>;
  homeBanners?: string[];
}

const DB_BLOB_PATHNAME = 'sps-db/db.json';

const DEFAULT_BANNERS = [
  "https://ik.imagekit.io/zlt25mb52fx/tr:q-70,pr-true,f-auto/uploads/product-draft/banner/homepage-banner-1366x573px-1-24062026-031326.jpg",
  "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=2000"
];

async function dbBlobUrl(): Promise<string | null> {
  try {
    const { blobs } = await list({ prefix: DB_BLOB_PATHNAME });
    const match = blobs.find(b => b.pathname === DB_BLOB_PATHNAME);
    return match ? match.url : null;
  } catch {
    return null;
  }
}

export async function getDb(): Promise<Database> {
  try {
    const url = await dbBlobUrl();

    if (!url) {
      // Seed the database if it doesn't exist yet in blob storage
      const initialData: Database = {
        motorcycles: mockMotorcycles,
        creditMatrix: creditMatrix,
        homeBanners: DEFAULT_BANNERS
      };
      await saveDb(initialData);
      return initialData;
    }

    const res = await fetch(url, { cache: 'no-store' });
    const db: Database = await res.json();

    if (!db.homeBanners) {
      db.homeBanners = DEFAULT_BANNERS;
      await saveDb(db);
    }
    return db;
  } catch (err) {
    console.error('getDb error:', err);
    // Fallback to mock data if blob read fails
    return {
      motorcycles: mockMotorcycles,
      creditMatrix: creditMatrix,
      homeBanners: DEFAULT_BANNERS
    };
  }
}

export async function saveDb(data: Database): Promise<void> {
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  await put(DB_BLOB_PATHNAME, blob, {
    access: 'public',
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}
