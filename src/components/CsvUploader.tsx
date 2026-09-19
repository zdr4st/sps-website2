"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { CsvPreviewModal } from "@/components/CsvPreviewModal";
import type { CsvPreviewResult } from "@/app/api/csv/preview/route";

export function CsvUploader() {
  const [status, setStatus] = useState<"idle" | "loading" | "preview" | "applying" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [preview, setPreview] = useState<CsvPreviewResult | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setStatus("loading");
    setMessage("Memproses CSV...");

    try {
      const text = await file.text();
      
      // Step 1: Preview
      const res = await fetch("/api/csv/preview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ csvText: text }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Gagal memproses CSV");
        return;
      }

      setPreview(data as CsvPreviewResult);
      setStatus("preview");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Terjadi kesalahan");
    }
  };

  const handleConfirm = async () => {
    if (!preview) return;

    setStatus("applying");

    try {
      const res = await fetch("/api/csv/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          motorcycles: preview.motorcycles,
          creditMatrix: preview.creditMatrix,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Gagal menyimpan data");
        return;
      }

      setStatus("success");
      setMessage(data.message || "Data berhasil diupdate!");
      setPreview(null);

      // Reload page after short delay to show updated data
      setTimeout(() => window.location.reload(), 1500);
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Terjadi kesalahan");
    }
  };

  const handleCancel = () => {
    setStatus("idle");
    setPreview(null);
    setMessage("");
    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };

  return (
    <div className="flex items-center gap-3">
      <input
        ref={fileRef}
        type="file"
        accept=".csv"
        onChange={handleFileSelect}
        className="hidden"
        id="csv-upload"
      />
      
      <label htmlFor="csv-upload">
        <span
          className={`inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-bold shadow-sm hover:bg-accent hover:text-accent-foreground cursor-pointer ${
            (status === "loading" || status === "applying") ? "opacity-50 pointer-events-none" : ""
          }`}
        >
          {status === "loading" ? "Memproses..." : "Upload CSV Pricelist"}
        </span>
      </label>

      {status === "success" && (
        <span className="text-sm font-medium text-green-600">{message}</span>
      )}
      {status === "error" && (
        <span className="text-sm font-medium text-red-600">{message}</span>
      )}

      {/* Preview Modal */}
      {status === "preview" && preview && (
        <CsvPreviewModal
          preview={preview}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          isApplying={false}
        />
      )}
      {status === "applying" && preview && (
        <CsvPreviewModal
          preview={preview}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          isApplying={true}
        />
      )}
    </div>
  );
}
