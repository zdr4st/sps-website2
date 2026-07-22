import Link from "next/link";
import { notFound } from "next/navigation";
import { getDb } from "@/lib/db";
import { formatRupiah, generateWhatsAppLink } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { MotorcycleGallery } from "@/components/MotorcycleGallery";
import { FeatureShowcase } from "@/components/FeatureShowcase";

export const dynamic = "force-dynamic";

export default async function MotorcycleDetail({
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

  return (
    <main className="min-h-screen bg-white">
      {/* Detail Header Banner */}
      <div className="bg-[#111111] py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
            <span>&larr;</span> Kembali
          </Link>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div className="space-y-6">
            <MotorcycleGallery images={motor.images} name={motor.name} />
          </div>

          {/* Details */}
          <div className="flex flex-col pt-4">
            <div className="mb-4">
              <span className="text-primary text-sm font-black uppercase tracking-[0.2em] border-b-2 border-primary pb-1">
                {motor.brand} {motor.type}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">{motor.name}</h1>
            
            <div className="bg-gray-50 p-6 border-l-4 border-primary mb-8">
              <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-1">Harga Mulai</p>
              <p className="text-3xl md:text-4xl font-black text-gray-900">
                {formatRupiah(motor.priceCash)}
              </p>
            </div>

            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              {motor.description}
            </p>

            <div className="mt-auto flex flex-col sm:flex-row gap-4">
              <Link
                href={generateWhatsAppLink(motor.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button size="lg" className="w-full text-lg h-14 font-bold rounded-xl uppercase tracking-wider shadow-lg bg-primary hover:bg-primary/90 text-white">
                  Hubungi Dealer
                </Button>
              </Link>
              <Link
                href={`/simulasi-kredit?motorId=${motor.id}`}
                className="flex-1"
              >
                <Button size="lg" variant="outline" className="w-full text-lg h-14 font-bold rounded-xl uppercase tracking-wider border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors">
                  Simulasi Kredit
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Feature Showcase — full width below the main grid */}
        {motor.featureDetails && motor.featureDetails.length > 0 && (
          <FeatureShowcase features={motor.featureDetails} />
        )}
      </div>
    </main>
  );
}
