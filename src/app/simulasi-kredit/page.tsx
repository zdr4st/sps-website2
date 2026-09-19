import { Suspense } from "react";
import { getMotorcycles, getCreditMatrix } from "@/lib/supabase";
import { SimulasiKreditClient } from "@/components/SimulasiKreditClient";


export default async function SimulasiKreditPage() {
  const [motorcycles, creditMatrix] = await Promise.all([
    getMotorcycles(),
    getCreditMatrix(),
  ]);
  
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-xl font-bold">Memuat data...</div>}>
      <SimulasiKreditClient supportedMotorcycles={motorcycles} creditMatrix={creditMatrix} />
    </Suspense>
  );
}
