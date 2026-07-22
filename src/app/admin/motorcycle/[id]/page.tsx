import Link from "next/link";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import { getDb } from "@/lib/db";
import { saveMotorcycle } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { MotorcycleColorEditor } from "@/components/MotorcycleColorEditor";

export default async function AdminMotorcycleEdit({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const db = await getDb();
  const motor = db.motorcycles.find((m) => m.id === resolvedParams.id);

  if (!motor) {
    notFound();
  }

  // Server Action wrapper to handle the form submission
  async function handleSubmit(formData: FormData) {
    "use server";
    const res = await saveMotorcycle(resolvedParams.id, formData);
    if (!res.error) {
      redirect("/admin");
    } else {
      console.error(res.error);
    }
  }

  // Serialize featureDetails as JSON string for the textarea
  const featureDetailsJson = JSON.stringify(motor.featureDetails ?? [], null, 2);

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Edit Motor: {motor.name}</h1>
        <Link href="/admin">
          <Button variant="outline">&larr; Kembali</Button>
        </Link>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <form action={handleSubmit} className="space-y-6" encType="multipart/form-data">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Nama Motor</label>
              <input 
                type="text" 
                name="name" 
                defaultValue={motor.name}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Kategori</label>
              <input 
                type="text" 
                name="type" 
                defaultValue={motor.type}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary" 
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Deskripsi</label>
              <textarea 
                name="description" 
                defaultValue={motor.description}
                rows={4}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary" 
              />
            </div>
            <div className="md:col-span-2 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Upload Gambar Baru (Vercel Blob)</label>
                <input 
                  type="file" 
                  accept="image/*"
                  name="imageFile" 
                  className="mt-1 block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-primary file:text-white
                    hover:file:bg-primary/90
                  " 
                />
                <p className="text-xs text-gray-500 mt-1">Upload gambar dari komputer Anda. Ini akan langsung tersimpan di Vercel Blob dan otomatis menjadi gambar utama.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Atau Gunakan Image URLs Manual</label>
                <textarea 
                  name="images" 
                  defaultValue={motor.images.join("\n")}
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary text-sm" 
                />
                <p className="text-xs text-gray-500 mt-1">Satu URL per baris. Pisahkan dengan enter (baris baru) jika lebih dari satu.</p>
              </div>

              {motor.images.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preview Gambar Saat Ini</label>
                  <div className="flex gap-4 overflow-x-auto pb-2">
                    {motor.images.map((img, idx) => (
                      <div key={idx} className="relative w-32 h-32 flex-shrink-0 rounded-md overflow-hidden border border-gray-200">
                        <Image 
                          src={img} 
                          alt={`Preview ${idx}`}
                          fill
                          className="object-contain"
                          unoptimized={img.includes('/api/images')}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Feature Details editor */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Fitur Detail (JSON)
              </label>
              <p className="text-xs text-gray-500 mt-0.5 mb-1">
                Format: array of <code className="bg-gray-100 px-1 rounded">{"{ name, description, image? }"}</code> objects.
              </p>
              <textarea
                name="featureDetails"
                defaultValue={featureDetailsJson}
                rows={12}
                spellCheck={false}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary text-xs font-mono bg-gray-50"
              />
              <p className="text-xs text-gray-400 mt-1">
                Kolom <code className="bg-gray-100 px-1 rounded">image</code> bersifat opsional. Jika dikosongkan, kartu fitur akan menampilkan ikon default.
              </p>
            </div>
            
            <div className="md:col-span-2">
              <MotorcycleColorEditor initialColors={motor.colors} />
            </div>
          </div>
          
          <div className="flex justify-end pt-4 border-t border-gray-200">
            <Button type="submit" className="font-bold text-white bg-primary hover:bg-primary/90 px-8">
              Simpan Perubahan
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
