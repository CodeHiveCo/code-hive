import { ArrowUpRight, Sparkles } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

export default function PromoCta({ onOpenContact }) {
  return (
    <section className="py-16 sm:py-24 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto relative overflow-hidden">
      <RevealOnScroll animation="scale-up">
        <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-white via-neutral-50 to-neutral-100 dark:from-[#1a1c24] dark:via-[#14151b] dark:to-[#0e0f12] border border-black/10 dark:border-white/10 p-10 sm:p-16 lg:p-24 shadow-2xl shadow-black/5 dark:shadow-2xl transition-all duration-500 hover:shadow-3xl">
          {/* Glow Spheres with breathing animation */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ddf160]/15 dark:bg-[#ddf160]/10 rounded-full blur-[130px] pointer-events-none animate-glow" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#9f8be7]/20 dark:bg-[#9f8be7]/15 rounded-full blur-[140px] pointer-events-none animate-glow" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-semibold text-neutral-900 dark:text-[#ddf160] mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#9f8be7] dark:text-[#ddf160] animate-spin-slow" /> READY FOR NEXT STAGE
              </div>
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-neutral-900 dark:text-white tracking-tight leading-[1.05]">
                Let's talk about <br className="hidden sm:inline" />
                <span className="text-[#9f8be7] dark:text-[#ddf160] italic">your project!</span>
              </h2>
              <p className="mt-6 text-base sm:text-xl text-neutral-600 dark:text-[#a1a1aa] max-w-xl leading-relaxed">
                Whether you need to architect a flagship digital product, re-engineer your core web application, or integrate bespoke AI models — we are ready.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                onClick={onOpenContact}
                className="btn-anim group inline-flex items-center gap-3.5 px-10 py-5 rounded-full bg-neutral-900 text-white dark:bg-[#ddf160] dark:text-[#111215] hover:bg-[#ddf160] hover:text-[#111215] dark:hover:bg-[#c8df46] font-bold text-base sm:text-lg shadow-2xl shadow-black/20 dark:shadow-[#ddf160]/25 transition-all duration-300 transform hover:scale-110"
              >
                <span className="btn-caption">
                  <span className="btn-anim__block">Start Collaboration</span>
                  <span className="btn-anim__block">Start Collaboration</span>
                </span>
                <ArrowUpRight className="w-6 h-6 stroke-[2.5] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45" />
              </button>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
