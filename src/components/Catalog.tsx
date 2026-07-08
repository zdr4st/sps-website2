"use client";

import { useState } from "react";
import { MotorcycleCard } from "@/components/MotorcycleCard";
import { Motorcycle } from "@/lib/mock-data";

interface CatalogProps {
  motorcycles: Motorcycle[];
}

export function Catalog({ motorcycles }: CatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const categories = ["Semua", "Matic", "Bebek", "Sport", "Others"];

  const filteredMotors = selectedCategory === "Semua" 
    ? motorcycles 
    : motorcycles.filter(m => m.type === selectedCategory || m.type === selectedCategory.toUpperCase());

  return (
    <section id="katalog" className="flex-1 container mx-auto max-w-7xl px-4 py-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b pb-4 border-gray-200">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight uppercase">Daftar Motor</h2>
          <p className="text-gray-500 mt-2 font-medium">Pilih dari berbagai kategori motor impian Anda.</p>
        </div>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 font-bold text-sm uppercase tracking-wider transition-colors ${
              selectedCategory === cat 
                ? 'bg-primary text-white' 
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
        {filteredMotors.map((motor) => (
          <MotorcycleCard key={motor.id} motorcycle={motor} />
        ))}
      </div>
      
      {filteredMotors.length === 0 && (
        <div className="text-center py-20 text-gray-500 font-medium">
          Tidak ada motor dalam kategori ini.
        </div>
      )}
    </section>
  );
}
