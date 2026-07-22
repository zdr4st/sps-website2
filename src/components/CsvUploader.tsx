"use client";

import { useState } from "react";
import { uploadCsv } from "@/app/actions";
import { Button } from "@/components/ui/button";

export function CsvUploader() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setMessage(null);

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const text = event.target?.result as string;
        const res = await uploadCsv(text);
        if (res.error) {
          setMessage({ type: "error", text: res.error });
        } else {
          setMessage({ type: "success", text: "Berhasil mengupdate katalog dari CSV!" });
        }
      } catch {
        setMessage({ type: "error", text: "Terjadi kesalahan saat mengunggah file." });
      } finally {
        setLoading(false);
        e.target.value = ""; // Reset input
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="flex flex-col items-end gap-2">
      <div className="relative">
        <input 
          type="file" 
          accept=".csv"
          onChange={handleFileChange}
          disabled={loading}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
          title="Upload CSV"
        />
        <Button disabled={loading}>
          {loading ? "Memproses..." : "Upload CSV Baru"}
        </Button>
      </div>
      {message && (
        <p className={`text-sm font-medium ${message.type === 'error' ? 'text-red-600' : 'text-green-600'}`}>
          {message.text}
        </p>
      )}
    </div>
  );
}
