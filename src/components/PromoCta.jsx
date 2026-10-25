import { ArrowUpRight, Sparkles } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

export default function PromoCta({ onOpenContact }) {
  return (
    <section className="py-16 sm:py-24 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto relative overflow-hidden">
      <RevealOnScroll animation="scale-up">
        <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-white via-neutral-50 to-neutral-100 dark:from-[#0d172e] dark:via-[#081021] dark:to-[#050814] border border-black/10 dark:border-[#f5a623]/25 p-10 sm:p-16 lg:p-24 shadow-2xl shadow-black/5 dark:shadow-2xl transition-all duration-500 hover:shadow-[#f5a623]/10">
          {/* Cyber grid & Glow ambient */}
          <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#f5a623]/15 dark:bg-[#f5a623]/10 rounded-full blur-[130px] pointer-events-none animate-glow" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#081021]/60 dark:bg-[#081021]/80 rounded-full blur-[140px] pointer-events-none animate-glow" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/5 dark:bg-[#f5a623]/10 border border-black/10 dark:border-[#f5a623]/30 text-xs font-mono tracking-wider font-semibold text-neutral-900 dark:text-[#f5a623] mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#d48806] dark:text-[#f5a623] animate-spin-slow" /> [ HiveMind // IDEAS INTO SYSTEMS. VISION INTO REALITY. ]
              </div>
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-neutral-900 dark:text-white tracking-tight leading-[1.05]">
                Let's Build Something <br className="hidden sm:inline" />
                <span className="text-[#d48806] dark:text-[#f5a623] italic">Meaningful.</span>
              </h2>
              <p className="mt-6 text-base sm:text-xl text-neutral-600 dark:text-[#94a3b8] max-w-2xl leading-relaxed font-sans">
                Whether you want to launch a website, develop a digital product, grow your social media presence, or explore website monetization, HiveMind is ready to help you take the next step.
              </p>
              <p className="mt-3 text-sm sm:text-base font-medium text-neutral-900 dark:text-white">
                Have a project in mind? Let's talk about how we can bring it to life.
              </p>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                type="button"
                onClick={onOpenContact}
                className="btn-anim group inline-flex items-center gap-3.5 px-10 py-5 rounded-full bg-neutral-900 text-white dark:bg-[#f5a623] dark:text-[#050814] hover:bg-[#f5a623] hover:text-[#050814] dark:hover:bg-[#ffbe3b] font-bold text-base sm:text-lg shadow-2xl shadow-black/20 dark:shadow-[#f5a623]/25 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <span className="btn-caption">
                  <span className="btn-anim__block">Start Conversation</span>
                  <span className="btn-anim__block">Start Conversation</span>
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
