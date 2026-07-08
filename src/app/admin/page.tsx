import Link from "next/link";
import Image from "next/image";
import { getDb } from "@/lib/db";
import { formatRupiah } from "@/lib/utils";
import { CsvUploader } from "@/components/CsvUploader";

export default async function AdminDashboard() {
  const db = await getDb();
  const motors = db.motorcycles;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <CsvUploader />
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Katalog Motor ({motors.length})</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Klik pada motor untuk mengedit detailnya.</p>
        </div>
        
        <ul className="divide-y divide-gray-200">
          {motors.map((motor) => (
            <li key={motor.id}>
              <Link href={`/admin/motorcycle/${motor.id}`} className="block hover:bg-gray-50 transition-colors">
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="min-w-0 flex-1 flex items-center">
                    <div className="flex-shrink-0 relative h-12 w-12 bg-gray-100 rounded-md overflow-hidden p-1">
                      <Image src={motor.images[0]} alt={motor.name} fill className="object-contain" />
                    </div>
                    <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                      <div>
                        <p className="text-sm font-bold text-primary truncate">{motor.name}</p>
                        <p className="mt-2 flex items-center text-sm text-gray-500">
                          <span className="truncate">{motor.type}</span>
                        </p>
                      </div>
                      <div className="hidden md:block">
                        <div>
                          <p className="text-sm text-gray-900">
                            {formatRupiah(motor.priceCash)}
                          </p>
                          <p className="mt-2 flex items-center text-sm text-gray-500">
                            {db.creditMatrix[motor.id]?.length || 0} Opsi DP
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-400">Edit &rarr;</span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
