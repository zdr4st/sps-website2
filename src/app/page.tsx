import { Catalog } from "@/components/Catalog";
import { HomeBanner } from "@/components/HomeBanner";
import { getMotorcycles, getBanners } from "@/lib/supabase";

export default async function Home() {
  const [motorcycles, banners] = await Promise.all([
    getMotorcycles(),
    getBanners(),
  ]);
  
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <HomeBanner banners={banners} />

      {/* Catalog Grid Section (Client Component) */}
      <Catalog motorcycles={motorcycles} />
      
    </main>
  );
}
