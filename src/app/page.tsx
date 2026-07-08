import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Catalog } from "@/components/Catalog";
import { HomeBanner } from "@/components/HomeBanner";
import { getDb } from "@/lib/db";

export default async function Home() {
  const db = await getDb();
  
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section */}
      <HomeBanner banners={db.homeBanners || []} />

      {/* Catalog Grid Section (Client Component) */}
      <Catalog motorcycles={db.motorcycles} />
      
    </main>
  );
}
