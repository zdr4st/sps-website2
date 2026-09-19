"use client";

import { Button } from "@/components/ui/button";
import type { CsvPreviewResult } from "@/app/api/csv/preview/route";

function formatRupiah(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

interface CsvPreviewModalProps {
  preview: CsvPreviewResult;
  onConfirm: () => void;
  onCancel: () => void;
  isApplying: boolean;
}

export function CsvPreviewModal({ preview, onConfirm, onCancel, isApplying }: CsvPreviewModalProps) {
  const hasChanges = preview.newMotorcycles.length > 0 || 
                     preview.updatedMotorcycles.length > 0 || 
                     preview.removedMotorcycles.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Preview Perubahan CSV</h2>
          <p className="text-sm text-gray-500 mt-1">
            Total: {preview.motorcycles.length} motor, {preview.totalCreditOptions} opsi kredit
          </p>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {!hasChanges && (
            <div className="text-center py-8 text-gray-500">
              <p className="text-lg font-medium">Tidak ada perubahan yang terdeteksi</p>
              <p className="text-sm mt-1">Data CSV sama dengan data yang sudah ada di database.</p>
            </div>
          )}

          {/* New Motorcycles */}
          {preview.newMotorcycles.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-green-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Motor Baru ({preview.newMotorcycles.length})
              </h3>
              <div className="bg-green-50 border border-green-200 rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-green-100/50">
                      <th className="text-left p-3 font-semibold text-green-800">Nama Motor</th>
                      <th className="text-left p-3 font-semibold text-green-800">Tipe</th>
                      <th className="text-right p-3 font-semibold text-green-800">Harga</th>
                    </tr>
                  </thead>
                  <tbody>
                    {preview.newMotorcycles.map(m => (
                      <tr key={m.id} className="border-t border-green-100">
                        <td className="p-3 font-medium text-green-900">{m.name}</td>
                        <td className="p-3 text-green-700">{m.type}</td>
                        <td className="p-3 text-right font-mono text-green-900">{formatRupiah(m.priceCash)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Updated Motorcycles */}
          {preview.updatedMotorcycles.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-blue-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Harga Berubah ({preview.updatedMotorcycles.length})
              </h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-blue-100/50">
                      <th className="text-left p-3 font-semibold text-blue-800">Nama Motor</th>
                      <th className="text-right p-3 font-semibold text-blue-800">Harga Lama</th>
                      <th className="text-right p-3 font-semibold text-blue-800">Harga Baru</th>
                    </tr>
                  </thead>
                  <tbody>
                    {preview.updatedMotorcycles.map(m => (
                      <tr key={m.id} className="border-t border-blue-100">
                        <td className="p-3 font-medium text-blue-900">{m.name}</td>
                        <td className="p-3 text-right font-mono text-gray-500 line-through">{formatRupiah(m.oldPrice)}</td>
                        <td className="p-3 text-right font-mono font-bold text-blue-900">{formatRupiah(m.newPrice)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Removed Motorcycles */}
          {preview.removedMotorcycles.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-red-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                Akan Dihapus ({preview.removedMotorcycles.length})
              </h3>
              <div className="bg-red-50 border border-red-200 rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-red-100/50">
                      <th className="text-left p-3 font-semibold text-red-800">Nama Motor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {preview.removedMotorcycles.map(m => (
                      <tr key={m.id} className="border-t border-red-100">
                        <td className="p-3 font-medium text-red-900">{m.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 flex gap-3 justify-end">
          <Button
            variant="outline"
            onClick={onCancel}
            disabled={isApplying}
            className="font-bold"
          >
            Batal
          </Button>
          <Button
            onClick={onConfirm}
            disabled={isApplying || !hasChanges}
            className="font-bold bg-primary hover:bg-primary/90 text-white"
          >
            {isApplying ? "Menyimpan..." : "Terapkan Perubahan"}
          </Button>
        </div>
      </div>
    </div>
  );
}
