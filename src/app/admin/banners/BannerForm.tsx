"use client";

import { useTransition, useState } from "react";
import { Button } from "@/components/ui/button";
import { saveBanners } from "@/app/actions";

export default function BannerForm({ initialUrls }: { initialUrls: string }) {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState("");

  function onSubmit(formData: FormData) {
    setMessage("");
    startTransition(async () => {
      const res = await saveBanners(formData);
      if (res?.error) {
        setMessage("Error: " + res.error);
      } else {
        setMessage("Berhasil disimpan!");
      }
    });
  }

  return (
    <form action={onSubmit} className="space-y-6 pt-6 border-t">
      <div>
        <label className="block text-sm font-medium text-gray-700">Edit Susunan URL Banner (Pisahkan dengan Enter / Baris Baru)</label>
        <textarea 
          name="urls" 
          defaultValue={initialUrls}
          rows={6}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary text-sm font-mono whitespace-pre text-black" 
        />
        <p className="text-xs text-gray-500 mt-1">Masukkan URL gambar dari ImageKit astra-honda.com atau sumber lain. Hapus URL untuk menghapus banner.</p>
      </div>

      {message && (
        <div className={`p-4 text-sm font-bold rounded ${message.startsWith("Error") ? "bg-red-100 text-red-700 border border-red-300" : "bg-green-100 text-green-700 border border-green-300"}`}>
          {message}
        </div>
      )}

      <div className="flex justify-end pt-4">
        <Button type="submit" disabled={isPending} className="font-bold text-white bg-primary hover:bg-primary/90 px-8">
          {isPending ? "Menyimpan..." : "Simpan Perubahan"}
        </Button>
      </div>
    </form>
  );
}
