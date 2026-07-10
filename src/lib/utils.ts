import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatRupiah(number: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
}

export function generateWhatsAppLink(motorName: string, phoneNumber: string = "6282225498899") {
  const text = `Halo SPS Motor Ajibarang, saya tertarik dengan motor ${motorName}. Bisa minta info lebih lanjut?`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
}
