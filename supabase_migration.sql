-- ============================================
-- SPS Motor Website - Supabase Migration SQL
-- Run this in Supabase SQL Editor (Dashboard → SQL Editor → New Query)
-- ============================================

-- 1. Create motorcycles table
CREATE TABLE IF NOT EXISTS motorcycles (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  brand TEXT NOT NULL DEFAULT 'Honda',
  type TEXT NOT NULL,
  price_cash INTEGER NOT NULL DEFAULT 0,
  description TEXT DEFAULT '',
  images TEXT[] DEFAULT '{}',
  colors JSONB DEFAULT '[]',
  feature_details JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create credit_options table
CREATE TABLE IF NOT EXISTS credit_options (
  id SERIAL PRIMARY KEY,
  motorcycle_id TEXT NOT NULL REFERENCES motorcycles(id) ON DELETE CASCADE,
  dp INTEGER NOT NULL,
  bayar INTEGER NOT NULL,
  tenors JSONB NOT NULL DEFAULT '{}'
);

-- 3. Create site_settings table (for banners, etc.)
CREATE TABLE IF NOT EXISTS site_settings (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL DEFAULT '{}',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_motorcycles_type ON motorcycles(type);
CREATE INDEX IF NOT EXISTS idx_motorcycles_brand ON motorcycles(brand);
CREATE INDEX IF NOT EXISTS idx_credit_motorcycle ON credit_options(motorcycle_id);

-- 5. Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- 6. Apply trigger to motorcycles
DROP TRIGGER IF EXISTS set_updated_at ON motorcycles;
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON motorcycles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- 7. Apply trigger to site_settings
DROP TRIGGER IF EXISTS set_updated_at ON site_settings;
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON site_settings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- 8. Enable Row Level Security
ALTER TABLE motorcycles ENABLE ROW LEVEL SECURITY;
ALTER TABLE credit_options ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- 9. RLS Policies - Allow public read access
CREATE POLICY "Public read motorcycles" ON motorcycles
  FOR SELECT USING (true);

CREATE POLICY "Public read credit_options" ON credit_options
  FOR SELECT USING (true);

CREATE POLICY "Public read site_settings" ON site_settings
  FOR SELECT USING (true);

-- 10. RLS Policies - Allow service role full access (for admin operations)
CREATE POLICY "Service role full access motorcycles" ON motorcycles
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role full access credit_options" ON credit_options
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role full access site_settings" ON site_settings
  FOR ALL USING (auth.role() = 'service_role');

-- 11. Insert default banners
INSERT INTO site_settings (key, value) VALUES (
  'home_banners',
  '["https://ik.imagekit.io/zlt25mb52fx/tr:q-70,pr-true,f-auto/uploads/product-draft/banner/homepage-banner-1366x573px-1-24062026-031326.jpg", "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=2000"]'::jsonb
) ON CONFLICT (key) DO NOTHING;

-- 12. Create storage bucket for images (run separately if needed)
-- INSERT INTO storage.buckets (id, name, public) 
-- VALUES ('sps-images', 'sps-images', true)
-- ON CONFLICT (id) DO NOTHING;
