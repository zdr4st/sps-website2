import Link from "next/link";
import { getDb } from "@/lib/db";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import BannerForm from "./BannerForm";

export const dynamic = "force-dynamic";

export default async function AdminBanners() {
  const db = await getDb();
  const banners = db.homeBanners || [];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Kelola Banner Homepage</h1>
        <Link href="/admin">
          <Button variant="outline">&larr; Kembali ke Dashboard</Button>
        </Link>
      </div>

      <div className="bg-white shadow rounded-lg p-6 mb-8">
        <h3 className="text-lg font-medium mb-4">Daftar Banner Saat Ini</h3>
        <div className="space-y-4 mb-6">
          {banners.length === 0 ? (
            <p className="text-gray-500">Belum ada banner.</p>
          ) : (
            banners.map((url, i) => (
              <div key={i} className="flex items-center gap-4 border p-4 rounded-xl">
                <div className="relative w-40 h-20 bg-gray-100 rounded overflow-hidden">
                  <Image src={url} alt={`Banner ${i+1}`} fill className="object-cover" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="text-sm font-mono truncate text-gray-600">{url}</p>
                </div>
              </div>
            ))
          )}
        </div>

        <BannerForm initialUrls={banners.join("\n")} />
      </div>
    </div>
  );
}
