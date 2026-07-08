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

export function MotorcycleGallery({ images, name }: { images: string[]; name: string }) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel 
      className="w-full"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
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
  );
}
