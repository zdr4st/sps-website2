import { put, list } from '@vercel/blob';
import { mockMotorcycles, creditMatrix, Motorcycle, CreditOption } from './mock-data';
import fs from 'fs';
import path from 'path';

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

let cachedBlobUrl: string | null = null;

async function dbBlobUrl(): Promise<string | null> {
  if (cachedBlobUrl) return cachedBlobUrl;
  try {
    const { blobs } = await list({ prefix: DB_BLOB_PATHNAME });
    const match = blobs.find(b => b.pathname === DB_BLOB_PATHNAME);
    if (match) {
      cachedBlobUrl = match.url;
      return match.url;
    }
    return null;
  } catch {
    return null;
  }
}

export async function getDb(): Promise<Database> {
  try {
    const url = await dbBlobUrl();

    if (!url) {
      let initialData: Database;
      try {
        const localData = fs.readFileSync(path.join(process.cwd(), 'data', 'db.json'), 'utf8');
        initialData = JSON.parse(localData);
        // Ensure default banners exist
        if (!initialData.homeBanners) {
          initialData.homeBanners = DEFAULT_BANNERS;
        }
      } catch {
        initialData = {
          motorcycles: mockMotorcycles,
          creditMatrix: creditMatrix,
          homeBanners: DEFAULT_BANNERS
        };
      }
      return initialData;
    }

    const res = await fetch(`${url}?t=${Date.now()}`, { cache: 'no-store' });
    const db: Database = await res.json();

    if (!db.homeBanners) {
      db.homeBanners = DEFAULT_BANNERS;
      try {
        await saveDb(db);
      } catch {
        // ignore save error
      }
    }
    return db;
  } catch (err) {
    console.error('getDb error:', err);
    try {
      const localData = fs.readFileSync(path.join(process.cwd(), 'data', 'db.json'), 'utf8');
      return JSON.parse(localData);
    } catch {
      return {
        motorcycles: mockMotorcycles,
        creditMatrix: creditMatrix,
        homeBanners: DEFAULT_BANNERS
      };
    }
  }
}

export async function saveDb(data: Database): Promise<void> {
  if (!data.homeBanners) {
    data.homeBanners = DEFAULT_BANNERS;
  }
  try {
    const blob = JSON.stringify(data);
    const result = await put(DB_BLOB_PATHNAME, blob, {
      access: 'public',
      addRandomSuffix: false,
      allowOverwrite: true,
    });
    cachedBlobUrl = result.url;
  } catch (err) {
    console.error('Vercel Blob save failed, falling back to local filesystem:', err);
    try {
      const dataDir = path.join(process.cwd(), 'data');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const dataStr = JSON.stringify(data, null, 2);
      fs.writeFileSync(path.join(dataDir, 'db.json'), dataStr, 'utf8');
    } catch (fsErr) {
      console.error('Local save also failed:', fsErr);
      throw err;
    }
  }
}
