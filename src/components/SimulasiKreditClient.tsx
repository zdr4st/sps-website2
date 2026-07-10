"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Motorcycle, CreditOption } from "@/lib/mock-data";
import { formatRupiah } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const AVAILABLE_TENORS = [12, 24, 30, 36, 40, 48];

interface SimulasiKreditClientProps {
  supportedMotorcycles: Motorcycle[];
  creditMatrix: Record<string, CreditOption[]>;
}

export function SimulasiKreditClient({ supportedMotorcycles: allMotors, creditMatrix }: SimulasiKreditClientProps) {
  const searchParams = useSearchParams();
  const initialMotorId = searchParams.get("motorId");

  // Get only motorcycles that have credit matrix data
  const supportedMotorcycles = allMotors.filter((m) =>
    Object.keys(creditMatrix).includes(m.id)
  );

  const defaultMotorId =
    initialMotorId && creditMatrix[initialMotorId]
      ? initialMotorId
      : supportedMotorcycles[0]?.id;

  const [selectedMotorId, setSelectedMotorId] = useState<string>(defaultMotorId || "");
  const [selectedDpIndex, setSelectedDpIndex] = useState<number>(0);
  const [selectedTenor, setSelectedTenor] = useState<number>(36);

  // When motor changes, reset DP index to 0
  useEffect(() => {
    setSelectedDpIndex(0);
  }, [selectedMotorId]);

  const selectedMotor = supportedMotorcycles.find((m) => m.id === selectedMotorId);
  const motorMatrix = creditMatrix[selectedMotorId] || [];
  const selectedDp = motorMatrix[selectedDpIndex] || motorMatrix[0];
  
  const availableTenorsForDp = selectedDp 
    ? Object.keys(selectedDp.tenors).map(Number).sort((a,b) => a - b) 
    : AVAILABLE_TENORS;

  // Ensure selected tenor is valid for current DP
  useEffect(() => {
    if (availableTenorsForDp.length > 0 && !availableTenorsForDp.includes(selectedTenor)) {
      setSelectedTenor(availableTenorsForDp.includes(36) ? 36 : availableTenorsForDp[0]);
    }
  }, [availableTenorsForDp, selectedTenor]);

  const angsuran = selectedDp && selectedDp.tenors[selectedTenor] ? selectedDp.tenors[selectedTenor] : 0;

  if (!selectedMotor || !selectedDp) {
    return <div className="text-center py-20">Data simulasi tidak tersedia.</div>;
  }

  const handleWhatsApp = () => {
    const text = `Halo SPS Motor Ajibarang, saya tertarik dengan motor ${selectedMotor.name}. 
Saya sudah melihat simulasi kreditnya:
- DP (Total Bayar): ${formatRupiah(selectedDp.bayar)}
- Tenor: ${selectedTenor} Bulan
- Angsuran: ${formatRupiah(angsuran)} / bulan
Apakah bisa dibantu prosesnya?`;
    window.open(`https://wa.me/6282225498899?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-[#111111] text-white py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight uppercase">Simulasi Kredit</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Hitung perkiraan angsuran bulanan motor Honda impian Anda dengan perhitungan akurat dari dealer.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 mt-8 md:-mt-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form Panel */}
          <div className="flex-1 space-y-6">
            
            {/* Motor Selection */}
            <div className="bg-white p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                Pilih Motor
              </h3>
              <select 
                value={selectedMotorId} 
                onChange={(e) => {
                  setSelectedMotorId(e.target.value);
                  setSelectedDpIndex(0);
                }}
                className="w-full border border-gray-300 p-4 text-lg font-bold bg-gray-50 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              >
                {["Bebek", "Sport", "Matic", "Others"].map((category) => {
                  const categoryMotors = supportedMotorcycles.filter(m => m.type === category || m.type === category.toUpperCase());
                  if (categoryMotors.length === 0) return null;
                  return (
                    <optgroup key={category} label={`--- ${category.toUpperCase()} ---`}>
                      {categoryMotors.map((motor) => (
                        <option key={motor.id} value={motor.id}>
                          {motor.name} - {formatRupiah(motor.priceCash)}
                        </option>
                      ))}
                    </optgroup>
                  );
                })}
              </select>
            </div>

            {/* DP Selection */}
            <div className="bg-white p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="bg-gray-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                Uang Muka (DP)
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {motorMatrix.map((dpOption, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedDpIndex(index)}
                    className={`
                      p-4 text-left border-2 transition-all group
                      ${
                        selectedDpIndex === index
                          ? "border-primary bg-primary/5"
                          : "border-gray-200 hover:border-primary/50 hover:bg-gray-50"
                      }
                    `}
                  >
                    <div className="text-sm text-gray-500 font-medium mb-1 group-hover:text-gray-700">DP (Uang Muka)</div>
                    <div className={`text-lg font-black ${selectedDpIndex === index ? 'text-primary' : 'text-gray-900'}`}>
                      {formatRupiah(dpOption.dp)}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Tenor Selection */}
            <div className="bg-white p-6 border border-gray-200">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="bg-gray-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                Pilih Tenor (Bulan)
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                {availableTenorsForDp.map((tenor) => (
                  <button
                    key={tenor}
                    onClick={() => setSelectedTenor(tenor)}
                    className={`p-3 border-2 transition-all font-bold text-center ${
                      selectedTenor === tenor 
                        ? 'border-primary bg-primary/10 text-primary' 
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    {tenor}x
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Panel */}
          <div className="bg-[#111111] text-white p-6 md:p-8 flex flex-col h-full border-t-4 border-primary">
            <h3 className="text-xl font-black mb-6 uppercase tracking-wider text-gray-200">Hasil Simulasi</h3>
            
            <div className="relative h-40 w-full mb-6 bg-white/10 p-4">
              <Image 
                src={selectedMotor.images[0]} 
                alt={selectedMotor.name} 
                fill 
                className="object-contain p-2" 
              />
            </div>

            <h4 className="text-2xl font-black text-white mb-2">{selectedMotor.name}</h4>
            <p className="text-gray-400 mb-8 font-medium">Harga OTR: {formatRupiah(selectedMotor.priceCash)}</p>

            <div className="space-y-4 mb-8 flex-1">
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Total DP dibayar</span>
                <span className="font-bold text-lg">{formatRupiah(selectedDp.bayar)}</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-2">
                <span className="text-gray-400">Lama Cicilan</span>
                <span className="font-bold text-lg">{selectedTenor} Bulan</span>
              </div>
              <div className="pt-4">
                <span className="block text-gray-400 mb-1 text-sm uppercase tracking-wider">Angsuran per Bulan</span>
                <span className="block text-4xl font-black text-primary">{formatRupiah(angsuran)}</span>
              </div>
            </div>

            <Button 
              size="lg" 
              onClick={handleWhatsApp}
              className="w-full text-lg h-14 font-bold rounded-xl uppercase tracking-wider bg-primary hover:bg-primary/90 text-white"
            >
              Ajukan Kredit Sekarang
            </Button>
            <p className="text-xs text-center text-gray-500 mt-4 leading-relaxed">
              *Harga dan angsuran dapat berubah sewaktu-waktu. Hubungi dealer untuk informasi lebih pasti.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}


