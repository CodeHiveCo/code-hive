import React from 'react';

const primaryItems = [
  '01 // DESIGN SYSTEMS',
  '02 // FULL-STACK ARCHITECTURE',
  '03 // GENERATIVE AI',
  '04 // WEB APPLICATIONS',
  '05 // CLOUD INFRASTRUCTURE',
  '06 // AGENTIC PIPELINES',
  '07 // BRAND SYSTEMS',
  '08 // SUB-SECOND LATENCY',
];

export default function Marquee({ text = null, reverse = false }) {
  const items = text ? Array(8).fill(text) : primaryItems;

  return (
    <div className="relative w-full py-5 sm:py-7 border-y border-black/10 dark:border-[#f5a623]/15 bg-[#eef2f9]/60 dark:bg-[#081021]/70 backdrop-blur-sm overflow-hidden select-none transition-colors">
      {/* Edge Fade Masks for clean agency ticker aesthetic */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#f3f6fc] dark:from-[#050814] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#f3f6fc] dark:from-[#050814] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max items-center">
        {/* Animated Track Container */}
        <div
          className={`flex items-center shrink-0 ${
            reverse ? 'animate-marquee-reverse' : 'animate-marquee'
          } hover:[animation-play-state:paused]`}
        >
          {items.map((item, idx) => (
            <div key={`track1-${idx}`} className="flex items-center mx-6 sm:mx-10 group cursor-default">
              <span className="font-display text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#050814]/80 dark:text-white/80 group-hover:text-[#f5a623] transition-colors whitespace-nowrap">
                {item}
              </span>
              <span className="ml-6 sm:ml-10 inline-block text-[#f5a623] group-hover:rotate-45 transition-transform duration-300">
                {/* 4-point Brand Sparkle SVG */}
                <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 sm:w-5 sm:h-5 fill-current animate-spin-slow">
                  <path d="M10 0C10 5.5 5.5 10 0 10C5.5 10 10 14.5 10 20C10 14.5 14.5 10 20 10C14.5 10 10 5.5 10 0Z" />
                </svg>
              </span>
            </div>
          ))}
        </div>

        {/* Duplicate track for seamless infinite loop */}
        <div
          aria-hidden="true"
          className={`flex items-center shrink-0 ${
            reverse ? 'animate-marquee-reverse' : 'animate-marquee'
          } hover:[animation-play-state:paused]`}
        >
          {items.map((item, idx) => (
            <div key={`track2-${idx}`} className="flex items-center mx-6 sm:mx-10 group cursor-default">
              <span className="font-display text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#050814]/80 dark:text-white/80 group-hover:text-[#f5a623] transition-colors whitespace-nowrap">
                {item}
              </span>
              <span className="ml-6 sm:ml-10 inline-block text-[#f5a623] group-hover:rotate-45 transition-transform duration-300">
                <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 sm:w-5 sm:h-5 fill-current animate-spin-slow">
                  <path d="M10 0C10 5.5 5.5 10 0 10C5.5 10 10 14.5 10 20C10 14.5 14.5 10 20 10C14.5 10 10 5.5 10 0Z" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
