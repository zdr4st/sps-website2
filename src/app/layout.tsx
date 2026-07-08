import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SPS Motor Ajibarang - Dealer Resmi Motor Honda",
  description: "Temukan motor Honda impian Anda di SPS Motor Ajibarang. Dapatkan promo menarik dan kemudahan simulasi kredit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="container mx-auto max-w-7xl px-4 h-16 sm:h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 sm:gap-4 shrink-0">
              {/* Honda Logo */}
              <img 
                src="https://ik.imagekit.io/zlt25mb52fx/assets/images/logo/honda.svg" 
                alt="Honda Logo" 
                className="h-6 sm:h-8 md:h-10 w-auto shrink-0 object-contain" 
              />
              
              <div className="h-6 sm:h-8 border-l-2 border-gray-200 mx-1 sm:mx-2 shrink-0"></div>

              {/* SPS Motor Logo */}
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <div className="relative h-10 sm:h-12 md:h-14 w-10 sm:w-12 md:w-14 flex items-center justify-center shrink-0">
                  <img 
                    src="/sps-logo.png" 
                    alt="SPS Motor Logo" 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="font-black text-sm md:text-base text-gray-800 hidden lg:flex flex-col leading-none tracking-tight">
                  <span>SPS MOTOR</span>
                  <span className="text-xs text-primary font-bold mt-1">AJIBARANG</span>
                </span>
              </div>
            </Link>
            
            <nav className="hidden md:flex gap-6 text-sm font-bold text-gray-700">
              <Link href="/" className="hover:text-primary transition-colors">
                Katalog Motor
              </Link>
              <Link href="/simulasi-kredit" className="hover:text-primary transition-colors">
                Simulasi Kredit
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Promo
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1">
          {children}
        </div>

        {/* Footer */}
        <footer className="bg-[#111111] text-white py-12">
          <div className="container mx-auto max-w-7xl px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SPS Motor Ajibarang</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Dealer resmi sepeda motor Honda melayani penjualan tunai dan kredit dengan pelayanan terbaik.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-200">Layanan</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Katalog Motor</Link></li>
                <li><Link href="/simulasi-kredit" className="hover:text-white transition-colors">Simulasi Kredit</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Service Berkala</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-gray-200">Hubungi Kami</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Jl. Raya Ajibarang, Banyumas</li>
                <li>Telepon: 0812-3456-7890</li>
                <li>Buka: Senin - Sabtu (08:00 - 16:30)</li>
              </ul>
            </div>
          </div>
          <div className="container mx-auto max-w-7xl px-4 mt-12 pt-8 border-t border-gray-800 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} SPS Motor Ajibarang. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex gap-4">
              <Link href="#" className="hover:text-white">Privacy Policy</Link>
              <Link href="#" className="hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
