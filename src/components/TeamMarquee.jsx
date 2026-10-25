import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const teamPhotos = [
  {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80',
    caption: 'Collaborative Sprint Room',
    code: 'UNIT // 01',
  },
  {
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&auto=format&fit=crop&q=80',
    caption: 'Product Design Workshop',
    code: 'UNIT // 02',
  },
  {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=80',
    caption: 'Architecture Review',
    code: 'UNIT // 03',
  },
  {
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&auto=format&fit=crop&q=80',
    caption: 'Rapid AI Prototyping',
    code: 'UNIT // 04',
  },
];

export default function TeamMarquee({ onOpenContact }) {
  return (
    <section id="culture" className="py-24 sm:py-32 overflow-hidden border-t border-black/5 dark:border-[#f5a623]/10 relative bg-neutral-100/50 dark:bg-[#081021]/60">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-[#d48806] dark:text-[#f5a623] mb-2 block font-semibold">
            [ 05 // CULTURE ]
          </span>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-semibold text-neutral-900 dark:text-white tracking-tight">
            We Think Boldly. <br className="hidden sm:inline" />
            <span className="text-[#d48806] dark:text-[#f5a623]">We Build Intentionally.</span> <br className="hidden sm:inline" />
            We Grow Together.
          </h2>
        </div>
        <p className="max-w-xl text-sm sm:text-base text-neutral-600 dark:text-[#94a3b8] font-sans leading-relaxed">
          At HiveMind, we believe great work comes from curious minds, bold ideas, and a shared commitment to excellence. We foster a culture of creativity, collaboration, and continuous learning, where challenges inspire innovation and every idea has the opportunity to grow. When people work together with intention, technology becomes a force for meaningful progress.
        </p>
      </div>

      {/* Edge Fade Masks for clean carousel aesthetic */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#f6f8fd] dark:from-[#050814] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#f6f8fd] dark:from-[#050814] to-transparent z-10 pointer-events-none" />

      {/* Horizontal Scroller Carousel */}
      <div className="flex w-max items-center marquee-track-container group/marquee">
        {[...Array(2)].map((_, loopIdx) => (
          <div
            key={loopIdx}
            className="flex items-center gap-6 sm:gap-8 pr-6 sm:pr-8 shrink-0 animate-marquee group-hover/marquee:[animation-play-state:paused]"
          >
            {/* Card 1: Typographic Statement Card */}
            <div className="w-80 sm:w-96 h-96 sm:h-[420px] rounded-[2rem] bg-white dark:bg-gradient-to-br dark:from-[#0d172e] dark:to-[#081021] border border-black/10 dark:border-[#f5a623]/20 p-8 sm:p-10 flex flex-col justify-between flex-shrink-0 shadow-xl shadow-black/5 dark:shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#f5a623]/10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Sparkles className="w-6 h-6 text-[#d48806] dark:text-[#f5a623] animate-pulse" />
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#94a3b8] dark:text-[#f5a623]/70">
                    // VALUE_01
                  </span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl font-semibold text-neutral-900 dark:text-white leading-tight">
                  Curious minds, <br />
                  <span className="text-[#d48806] dark:text-[#f5a623]">bold ideas.</span>
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-neutral-500 dark:text-[#94a3b8] font-sans">
                  A shared commitment to excellence and continuous learning.
                </p>
              </div>
              <button
                onClick={onOpenContact}
                className="btn-anim group/btn inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-neutral-900 text-white dark:bg-[#f5a623] dark:text-[#050814] hover:bg-[#f5a623] hover:text-[#050814] dark:hover:bg-[#ffbe3b] border border-black/10 dark:border-[#f5a623]/40 transition-colors text-xs font-semibold w-fit shadow-lg shadow-[#f5a623]/10 cursor-pointer"
              >
                <span className="btn-caption">
                  <span className="btn-anim__block">Start With Us</span>
                  <span className="btn-anim__block">Start With Us</span>
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Photo Card 1 */}
            <div className="w-80 sm:w-96 h-96 sm:h-[420px] rounded-[2rem] overflow-hidden border border-black/10 dark:border-white/10 dark:hover:border-[#f5a623]/40 relative flex-shrink-0 group shadow-md transition-colors">
              <img
                src={teamPhotos[0].image}
                alt={teamPhotos[0].caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050814]/90 via-[#050814]/20 to-transparent flex flex-col justify-end p-6">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#f5a623] mb-1">
                  {teamPhotos[0].code}
                </span>
                <span className="text-sm font-medium text-white">{teamPhotos[0].caption}</span>
              </div>
            </div>

            {/* Photo Card 2 */}
            <div className="w-80 sm:w-96 h-96 sm:h-[420px] rounded-[2rem] overflow-hidden border border-black/10 dark:border-white/10 dark:hover:border-[#f5a623]/40 relative flex-shrink-0 group shadow-md transition-colors">
              <img
                src={teamPhotos[1].image}
                alt={teamPhotos[1].caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050814]/90 via-[#050814]/20 to-transparent flex flex-col justify-end p-6">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#f5a623] mb-1">
                  {teamPhotos[1].code}
                </span>
                <span className="text-sm font-medium text-white">{teamPhotos[1].caption}</span>
              </div>
            </div>

            {/* Card 2: Typographic Statement Card */}
            <div className="w-80 sm:w-96 h-96 sm:h-[420px] rounded-[2rem] bg-white dark:bg-gradient-to-br dark:from-[#0d172e] dark:to-[#081021] border border-black/10 dark:border-[#f5a623]/20 p-8 sm:p-10 flex flex-col justify-between flex-shrink-0 shadow-xl shadow-black/5 dark:shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#f5a623]/10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <Sparkles className="w-6 h-6 text-[#d48806] dark:text-[#f5a623] animate-pulse" />
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#94a3b8] dark:text-[#f5a623]/70">
                    // VALUE_02
                  </span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl font-semibold text-neutral-900 dark:text-white leading-tight">
                  Build intentionally, <br />
                  <span className="text-[#d48806] dark:text-[#f5a623]">grow together.</span>
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-neutral-500 dark:text-[#94a3b8] font-sans">
                  Clear communication, purposeful execution, and meaningful progress.
                </p>
              </div>
              <button
                onClick={onOpenContact}
                className="btn-anim group/btn inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-neutral-900 text-white dark:bg-[#f5a623] dark:text-[#050814] hover:bg-[#f5a623] hover:text-[#050814] dark:hover:bg-[#ffbe3b] border border-black/10 dark:border-[#f5a623]/40 transition-colors text-xs font-semibold w-fit shadow-lg shadow-[#f5a623]/10 cursor-pointer"
              >
                <span className="btn-caption">
                  <span className="btn-anim__block">Join The Hive</span>
                  <span className="btn-anim__block">Join The Hive</span>
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Photo Card 3 */}
            <div className="w-80 sm:w-96 h-96 sm:h-[420px] rounded-[2rem] overflow-hidden border border-black/10 dark:border-white/10 dark:hover:border-[#f5a623]/40 relative flex-shrink-0 group shadow-md transition-colors">
              <img
                src={teamPhotos[2].image}
                alt={teamPhotos[2].caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050814]/90 via-[#050814]/20 to-transparent flex flex-col justify-end p-6">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#f5a623] mb-1">
                  {teamPhotos[2].code}
                </span>
                <span className="text-sm font-medium text-white">{teamPhotos[2].caption}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
