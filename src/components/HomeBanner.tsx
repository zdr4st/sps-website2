"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HomeBanner({ banners }: { banners: string[] }) {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  );

  return (
    <section className="relative w-full bg-[#111111]">
      <Carousel 
        className="w-full"
        plugins={[plugin.current]}
        opts={{ loop: true }}
      >
        <CarouselContent className="ml-0">
          {banners.map((banner, index) => (
            <CarouselItem key={index} className="pl-0 basis-full">
              <div className="relative w-full h-[500px] md:h-[600px] bg-black overflow-hidden">
                 <Image 
                   src={banner}
                   alt={`Banner ${index + 1}`}
                   fill
                   className="object-cover"
                   priority={index === 0}
                 />
                 {/* Gradient overlay to ensure text is always readable regardless of image */}
                 <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      {/* Overlay Text */}
      <div className="absolute inset-0 pointer-events-none flex items-center">
        <div className="container mx-auto max-w-7xl px-4 py-24 md:py-32 flex flex-col items-start justify-center">
          <div className="max-w-2xl pointer-events-auto">
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight text-white drop-shadow-lg">
              One Heart. <br />
              <span className="text-primary">Satu Hati.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg font-medium leading-relaxed drop-shadow-md">
              Jelajahi inovasi dan teknologi terkini dari jajaran motor Honda. 
              Temukan partner berkendara terbaik Anda hari ini.
            </p>
            <div className="flex gap-4">
              <Link href="#katalog">
                <Button size="lg" className="h-12 px-8 font-bold text-md rounded-xl bg-primary hover:bg-primary/90 text-white shadow-lg">
                  Lihat Katalog
                </Button>
              </Link>
              <Link href="/simulasi-kredit">
                <Button size="lg" variant="outline" className="h-12 px-8 font-bold text-md rounded-xl border-white text-white hover:bg-white hover:text-black shadow-lg bg-black/20 backdrop-blur-sm">
                  Simulasi Kredit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
