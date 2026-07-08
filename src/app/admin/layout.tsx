import Link from "next/link";
import { logout } from "@/app/actions";
import { Button } from "@/components/ui/button";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-6">
              <Link href="/admin" className="text-xl font-bold text-primary">
                SPS Motor Admin
              </Link>
              <div className="hidden md:flex items-center gap-4">
                <Link href="/admin" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                  Katalog Motor
                </Link>
                <Link href="/admin/banners" className="text-sm font-medium text-gray-600 hover:text-gray-900">
                  Kelola Banner
                </Link>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/" target="_blank" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                Lihat Website
              </Link>
              <form action={logout}>
                <Button variant="outline" size="sm" type="submit">
                  Logout
                </Button>
              </form>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}
