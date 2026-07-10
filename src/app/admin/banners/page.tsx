import Link from "next/link";
import { getDb } from "@/lib/db";
import { saveBanners } from "@/app/actions";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default async function AdminBanners() {
  const db = await getDb();
  const banners = db.homeBanners || [];

  async function handleSubmit(formData: FormData) {
    "use server";
    await saveBanners(formData);
  }

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

        <form action={handleSubmit} className="space-y-6 pt-6 border-t">
          <div>
            <label className="block text-sm font-medium text-gray-700">Edit Susunan URL Banner (Pisahkan dengan Enter / Baris Baru)</label>
            <textarea 
              name="urls" 
              defaultValue={banners.join("\n")}
              rows={6}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary text-sm font-mono whitespace-pre" 
            />
            <p className="text-xs text-gray-500 mt-1">Masukkan URL gambar dari ImageKit astra-honda.com atau sumber lain. Hapus URL untuk menghapus banner.</p>
          </div>

          <div className="flex justify-end pt-4">
            <Button type="submit" className="font-bold text-white bg-primary hover:bg-primary/90 px-8">
              Simpan Perubahan
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
