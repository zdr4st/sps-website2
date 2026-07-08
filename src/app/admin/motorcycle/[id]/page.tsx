import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getDb } from "@/lib/db";
import { saveMotorcycle } from "@/app/actions";
import { Button } from "@/components/ui/button";

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
        <form action={handleSubmit} className="space-y-6">
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
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Images (Existing URLs)</label>
              <textarea 
                name="images" 
                defaultValue={motor.images.join(", ")}
                rows={2}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary text-sm" 
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700">Upload New Images (Local)</label>
              <input 
                type="file" 
                name="new_images" 
                multiple
                accept="image/*"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary text-sm bg-gray-50" 
              />
              <p className="text-xs text-gray-500 mt-1">Gambar yang diupload akan ditambahkan ke gambar yang sudah ada.</p>
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
