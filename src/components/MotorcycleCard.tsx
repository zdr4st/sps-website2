import Image from "next/image";
import Link from "next/link";
import { Motorcycle } from "@/lib/mock-data";
import { formatRupiah, generateWhatsAppLink } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface MotorcycleCardProps {
  motorcycle: Motorcycle;
}

export function MotorcycleCard({ motorcycle }: MotorcycleCardProps) {
  return (
    <Card className="group flex flex-col overflow-hidden border-gray-200 shadow-none hover:shadow-xl transition-all duration-300 rounded-2xl bg-white">
      <div className="relative h-56 w-full bg-gray-50 p-4">
        <Image
          src={motorcycle.images[0]}
          alt={motorcycle.name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardHeader className="p-5 pb-2 border-t border-gray-100 flex flex-col items-center text-center">
        <div className="flex flex-col gap-1 w-full">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{motorcycle.brand} - {motorcycle.type}</span>
          <h3 className="text-xl font-black text-gray-900 group-hover:text-primary transition-colors">{motorcycle.name}</h3>
        </div>
      </CardHeader>
      <CardContent className="p-5 pt-0 flex-1 flex flex-col items-center text-center">
        <p className="text-lg font-bold text-primary mt-2">
          {formatRupiah(motorcycle.priceCash)}
        </p>
      </CardContent>
      <CardFooter className="p-5 flex gap-3 pt-4 border-t border-gray-50 bg-gray-50/50">
        <Link href={`/motorcycle/${motorcycle.id}`} className="flex-1">
          <Button variant="outline" className="w-full rounded-xl border-gray-300 text-gray-700 font-bold hover:bg-white hover:text-primary hover:border-primary transition-all">
            Detail
          </Button>
        </Link>
        <Link 
          href={generateWhatsAppLink(motorcycle.name)} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button className="w-full rounded-xl font-bold bg-primary hover:bg-primary/90 text-white shadow-md transition-all hover:shadow-lg">
            Hubungi
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
