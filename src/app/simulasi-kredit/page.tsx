import { Suspense } from "react";
import { getDb } from "@/lib/db";
import { SimulasiKreditClient } from "@/components/SimulasiKreditClient";

export const dynamic = "force-dynamic";

export default async function SimulasiKreditPage() {
  const db = await getDb();
  
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-xl font-bold">Memuat data...</div>}>
      <SimulasiKreditClient supportedMotorcycles={db.motorcycles} creditMatrix={db.creditMatrix} />
    </Suspense>
  );
}
