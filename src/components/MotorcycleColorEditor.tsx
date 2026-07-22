"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ColorVariant } from "@/lib/mock-data";

export function MotorcycleColorEditor({ initialColors }: { initialColors?: ColorVariant[] }) {
  const [colors, setColors] = useState<ColorVariant[]>(initialColors || []);

  const addColor = () => setColors([...colors, { name: "", image: "" }]);
  const removeColor = (idx: number) => setColors(colors.filter((_, i) => i !== idx));

  return (
    <div className="space-y-4 border border-gray-200 rounded-lg p-5 bg-gray-50/30">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="text-sm font-bold text-gray-900">Varian Warna</h3>
          <p className="text-xs text-gray-500">Kelola pilihan warna dan gambar untuk model ini.</p>
        </div>
      </div>

      {colors.map((c, idx) => (
        <div key={idx} className="flex flex-col md:flex-row gap-4 p-4 border border-gray-200 bg-white rounded-md items-start md:items-center">
          <div className="flex-1 w-full">
            <label className="block text-xs font-semibold text-gray-700 mb-1">Nama Warna</label>
            <input 
              type="text" 
              name={`colorName_${idx}`} 
              defaultValue={c.name} 
              className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary text-sm" 
              placeholder="Contoh: Matte Black"
              required 
            />
          </div>
          
          <div className="flex-1 w-full">
            <label className="block text-xs font-semibold text-gray-700 mb-1">Upload Gambar Varian</label>
            <input 
              type="file" 
              name={`colorFile_${idx}`} 
              accept="image/*" 
              className="block w-full text-xs text-gray-500
                file:mr-3 file:py-1.5 file:px-3
                file:rounded-md file:border-0
                file:text-xs file:font-semibold
                file:bg-primary file:text-white
                hover:file:bg-primary/90
              " 
            />
            {/* Store existing image URL so server action knows it if no new file is selected */}
            <input type="hidden" name={`colorUrl_${idx}`} value={c.image} />
          </div>

          {c.image && (
            <div className="w-14 h-14 relative flex-shrink-0 border border-gray-100 rounded bg-gray-50">
               <Image 
                  src={c.image} 
                  alt={c.name} 
                  fill 
                  className="object-contain p-1" 
                  unoptimized={c.image.includes('/api/images')}
                />
            </div>
          )}

          <Button 
            type="button" 
            variant="ghost" 
            className="text-red-500 hover:text-red-700 hover:bg-red-50 text-xs mt-4 md:mt-0"
            onClick={() => removeColor(idx)}
          >
            Hapus
          </Button>
        </div>
      ))}

      {colors.length === 0 && (
        <p className="text-sm text-gray-500 italic py-2">Belum ada varian warna ditambahkan.</p>
      )}

      <Button type="button" variant="outline" size="sm" onClick={addColor} className="text-xs">
        + Tambah Varian Warna
      </Button>

      {/* Tell server how many colors to process */}
      <input type="hidden" name="colorCount" value={colors.length} />
    </div>
  );
}
