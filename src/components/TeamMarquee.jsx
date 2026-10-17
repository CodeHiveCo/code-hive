import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const teamPhotos = [
  {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80',
    caption: 'Collaborative Sprint Room',
  },
  {
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&auto=format&fit=crop&q=80',
    caption: 'Product Design Workshop',
  },
  {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=80',
    caption: 'Architecture Review',
  },
  {
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&auto=format&fit=crop&q=80',
    caption: 'Rapid AI Prototyping',
  },
];

export default function TeamMarquee({ onOpenContact }) {
  return (
    <section id="culture" className="py-24 sm:py-32 overflow-hidden border-t border-black/5 dark:border-white/5 relative bg-neutral-200/30 dark:bg-[#131419]/40">
      <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#9f8be7] mb-2 block font-semibold">
            CULTURE & ARCHITECTURE
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-neutral-900 dark:text-white tracking-tight">
            Creative Minds. Uncompromised Code.
          </h2>
        </div>
        <p className="max-w-md text-sm text-neutral-600 dark:text-[#8e8e99]">
          A world-class collective of systems architects, creative developers, and product designers united by a passion for technical perfection.
        </p>
      </div>

      {/* Horizontal Scroller Carousel */}
      <div className="flex w-max items-center animate-marquee hover:[animation-play-state:paused]">
        {[...Array(2)].map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center gap-6 sm:gap-8 pr-6 sm:pr-8">
            {/* Card 1: Typographic Statement Card */}
            <div className="w-80 sm:w-96 h-96 sm:h-[420px] rounded-[2rem] bg-white dark:bg-gradient-to-br dark:from-[#1d1f27] dark:to-[#14151b] border border-black/10 dark:border-white/10 p-8 sm:p-10 flex flex-col justify-between flex-shrink-0 shadow-xl shadow-black/5 dark:shadow-2xl">
              <div>
                <Sparkles className="w-6 h-6 text-[#9f8be7] dark:text-[#ddf160] mb-6 animate-pulse" />
                <h3 className="font-display text-4xl sm:text-5xl font-semibold text-neutral-900 dark:text-white leading-tight">
                  Inspiring <br />
                  <span className="text-[#9f8be7] dark:text-[#ddf160]">ideas.</span>
                </h3>
              </div>
              <button
                onClick={onOpenContact}
                className="btn-anim group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-neutral-900 text-white dark:bg-white/10 hover:bg-[#ddf160] hover:text-[#111215] dark:hover:bg-[#ddf160] dark:hover:text-[#111215] border border-black/10 dark:border-white/10 transition-colors text-xs font-semibold w-fit"
              >
                <span className="btn-caption">
                  <span className="btn-anim__block">Meet Our Team</span>
                  <span className="btn-anim__block">Meet Our Team</span>
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Photo Card 1 */}
            <div className="w-80 sm:w-96 h-96 sm:h-[420px] rounded-[2rem] overflow-hidden border border-black/10 dark:border-white/10 relative flex-shrink-0 group shadow-md">
              <img
                src={teamPhotos[0].image}
                alt={teamPhotos[0].caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-sm font-medium text-white">{teamPhotos[0].caption}</span>
              </div>
            </div>

            {/* Photo Card 2 */}
            <div className="w-80 sm:w-96 h-96 sm:h-[420px] rounded-[2rem] overflow-hidden border border-black/10 dark:border-white/10 relative flex-shrink-0 group shadow-md">
              <img
                src={teamPhotos[1].image}
                alt={teamPhotos[1].caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-sm font-medium text-white">{teamPhotos[1].caption}</span>
              </div>
            </div>

            {/* Card 2: Typographic Statement Card */}
            <div className="w-80 sm:w-96 h-96 sm:h-[420px] rounded-[2rem] bg-white dark:bg-gradient-to-br dark:from-[#1d1f27] dark:to-[#14151b] border border-black/10 dark:border-white/10 p-8 sm:p-10 flex flex-col justify-between flex-shrink-0 shadow-xl shadow-black/5 dark:shadow-2xl">
              <div>
                <Sparkles className="w-6 h-6 text-[#9f8be7] mb-6 animate-pulse" />
                <h3 className="font-display text-4xl sm:text-5xl font-semibold text-neutral-900 dark:text-white leading-tight">
                  Creative <br />
                  <span className="text-[#9f8be7]">minds.</span>
                </h3>
              </div>
              <button
                onClick={onOpenContact}
                className="btn-anim group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-neutral-900 text-white dark:bg-white/10 hover:bg-[#9f8be7] hover:text-white dark:hover:bg-[#9f8be7] dark:hover:text-[#111215] border border-black/10 dark:border-white/10 transition-colors text-xs font-semibold w-fit"
              >
                <span className="btn-caption">
                  <span className="btn-anim__block">Join The Hive</span>
                  <span className="btn-anim__block">Join The Hive</span>
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Photo Card 3 */}
            <div className="w-80 sm:w-96 h-96 sm:h-[420px] rounded-[2rem] overflow-hidden border border-black/10 dark:border-white/10 relative flex-shrink-0 group shadow-md">
              <img
                src={teamPhotos[2].image}
                alt={teamPhotos[2].caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <span className="text-sm font-medium text-white">{teamPhotos[2].caption}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
