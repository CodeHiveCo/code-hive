import React from 'react';

const primaryItems = [
  'Design Systems',
  'Full-Stack Engineering',
  'Generative AI',
  'Web Applications',
  'Mobile Apps',
  'Cloud Architecture',
  'Interactive 3D',
  'Brand Identity',
  'Performance Auditing',
];

export default function Marquee({ text = null, reverse = false }) {
  const items = text ? Array(8).fill(text) : primaryItems;

  return (
    <div className="w-full py-6 sm:py-8 border-y border-black/5 dark:border-white/5 bg-neutral-200/50 dark:bg-[#14151a]/60 backdrop-blur-sm overflow-hidden select-none transition-colors">
      <div className="flex w-max items-center">
        {/* Animated Track Container */}
        <div
          className={`flex items-center shrink-0 ${
            reverse ? 'animate-marquee-reverse' : 'animate-marquee'
          } hover:[animation-play-state:paused]`}
        >
          {items.map((item, idx) => (
            <div key={`track1-${idx}`} className="flex items-center mx-6 sm:mx-10 group cursor-default">
              <span className="font-display text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-800 dark:text-white/80 group-hover:text-[#9f8be7] dark:group-hover:text-[#ddf160] transition-colors whitespace-nowrap">
                {item}
              </span>
              <span className="ml-6 sm:ml-10 inline-block text-[#9f8be7] dark:text-[#ddf160] group-hover:rotate-45 transition-transform duration-300">
                {/* Rayo 4-point Sparkle SVG */}
                <svg viewBox="0 0 20 20" className="w-4 h-4 sm:w-6 sm:h-6 fill-current animate-spin-slow">
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
              <span className="font-display text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-800 dark:text-white/80 group-hover:text-[#9f8be7] dark:group-hover:text-[#ddf160] transition-colors whitespace-nowrap">
                {item}
              </span>
              <span className="ml-6 sm:ml-10 inline-block text-[#9f8be7] dark:text-[#ddf160] group-hover:rotate-45 transition-transform duration-300">
                <svg viewBox="0 0 20 20" className="w-4 h-4 sm:w-6 sm:h-6 fill-current animate-spin-slow">
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
