"use client";

import Image from "next/image";
import { FeatureDetail } from "@/lib/mock-data";

interface FeatureShowcaseProps {
  features: FeatureDetail[];
}

export function FeatureShowcase({ features }: FeatureShowcaseProps) {
  return (
    <section className="mt-16 border-t border-gray-100 pt-12">
      <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase tracking-tight mb-8">
        Fitur Utama
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            {/* Feature image */}
            {feature.image ? (
              <div className="relative h-44 w-full bg-gray-50 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            ) : (
              <div className="relative h-44 w-full bg-gradient-to-br from-primary/10 via-primary/5 to-gray-50 overflow-hidden flex items-center justify-center">
                {/* Decorative icon for features without images */}
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                {/* Number badge */}
                <span className="absolute top-3 right-3 text-xs font-black text-primary/40 tabular-nums">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
            )}

            {/* Content */}
            <div className="flex flex-col flex-1 p-5">
              {/* Accent bar */}
              <div className="w-8 h-1 bg-primary rounded-full mb-3 group-hover:w-12 transition-all duration-300" />
              <h3 className="font-black text-base text-gray-900 mb-2 leading-snug group-hover:text-primary transition-colors duration-200">
                {feature.name}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
