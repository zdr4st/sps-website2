"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ColorVariant } from "@/lib/mock-data";

export function MotorcycleGallery({ images, name, colors }: { images: string[]; name: string; colors?: ColorVariant[] }) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const [activeColorImage, setActiveColorImage] = React.useState<string | null>(null);

  // If a color is active, we just display that single image instead of the carousel.
  if (activeColorImage) {
    return (
      <div className="space-y-6">
        <div className="relative h-80 md:h-[500px] w-full bg-gray-50 border border-gray-100 flex items-center justify-center p-8 rounded-2xl overflow-hidden">
          <Image
            src={activeColorImage}
            alt={`${name} - Color`}
            fill
            className="object-contain p-8"
            priority
          />
        </div>
        {colors && colors.length > 0 && (
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-bold text-gray-900">Pilihan Warna</h4>
            <div className="flex flex-wrap gap-2 md:gap-3">
              <button 
                onClick={() => setActiveColorImage(null)}
                className="px-4 py-2 rounded-full border border-gray-300 text-xs font-bold text-gray-600 hover:bg-gray-100 transition-colors"
              >
                Tampilkan Semua
              </button>
              {colors.map((c, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveColorImage(c.image)}
                  className={`px-4 py-2 rounded-full border text-xs font-bold transition-all ${
                    activeColorImage === c.image 
                      ? "border-primary bg-primary text-white shadow-md" 
                      : "border-gray-200 text-gray-600 hover:border-primary hover:text-primary"
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Carousel 
        className="w-full"
        // eslint-disable-next-line react-hooks/refs
        plugins={[plugin.current]}
        // eslint-disable-next-line react-hooks/refs
        onMouseEnter={plugin.current.stop}
        // eslint-disable-next-line react-hooks/refs
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {images.map((img, idx) => (
            <CarouselItem key={idx}>
              <div className="relative h-80 md:h-[500px] w-full bg-gray-50 border border-gray-100 flex items-center justify-center p-8 rounded-2xl overflow-hidden">
                <Image
                  src={img}
                  alt={`${name} - ${idx}`}
                  fill
                  className="object-contain p-8"
                  priority={idx === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {images.length > 1 && (
          <>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </>
        )}
      </Carousel>
      
      {colors && colors.length > 0 && (
        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-bold text-gray-900">Pilihan Warna</h4>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {colors.map((c, idx) => (
              <button
                key={idx}
                onClick={() => setActiveColorImage(c.image)}
                className="px-4 py-2 rounded-full border border-gray-200 text-xs font-bold text-gray-600 hover:border-primary hover:text-primary transition-all"
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
