import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ShieldCheck, Zap, Award, Sparkles } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

function CounterItem({ endValue, prefix = '', suffix = '', duration = 1600 }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // If mobile or coarse pointer, trigger counter immediately
    if (typeof window !== 'undefined' && (window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches)) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0, rootMargin: '100px 0px 100px 0px' }
    );

    if (ref.current) observer.observe(ref.current);

    const safetyTimer = setTimeout(() => {
      setHasStarted(true);
    }, 1200);

    return () => {
      observer.disconnect();
      clearTimeout(safetyTimer);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const target = parseFloat(endValue);
    const startTime = performance.now();

    const updateCounter = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic: 1 - pow(1 - progress, 3)
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = target * easeProgress;

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [hasStarted, endValue, duration]);

  const formatted = endValue.includes('.') ? count.toFixed(1) : Math.floor(count);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {hasStarted ? formatted : '0'}
      {suffix}
    </span>
  );
}

const stats = [
  { value: '99.8', suffix: '%', label: 'Client Satisfaction', icon: ShieldCheck },
  { value: '140', suffix: '+', label: 'Shipped Digital Platforms', icon: Zap },
  { value: '28', suffix: '', label: 'Design & Code Awards', icon: Award },
  { value: '0.4', prefix: '<', suffix: 's', label: 'Average Interaction Latency', icon: Sparkles },
];

export default function Manifesto({ onOpenContact }) {
  return (
    <section id="about" className="py-24 sm:py-36 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto relative">
      {/* Visual Divider / Ambient Accent Bar */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#f5a623]/20 to-transparent mb-20" />

      {/* Manifesto Headline & Statement with RevealOnScroll */}
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        <RevealOnScroll animation="scale-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f5a623]/15 border border-[#f5a623]/30 text-xs font-mono font-semibold text-[#050814] dark:text-[#f5a623] mb-8 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#f5a623] animate-spin-slow" /> [ 02 // MANIFESTO_FRAMEWORK ]
          </div>
        </RevealOnScroll>

        <RevealOnScroll animation="fade-up" delay={150}>
          <div className="mb-4">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#f5a623] font-semibold">
              Ideas into systems. Vision into reality.
            </span>
          </div>
          <p className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.25] text-[#050814] dark:text-white tracking-tight mb-8 transition-colors">
            At HiveMind, we turn{' '}
            <span className="relative inline-block text-[#f5a623] font-medium group">
              bold ideas
              <svg
                viewBox="0 0 240 18"
                className="absolute left-0 -bottom-2 w-full h-3 text-[#f5a623] overflow-visible pointer-events-none opacity-90"
                fill="none"
              >
                <path
                  d="M2 9 C 20 2, 40 16, 60 9 C 80 2, 100 16, 120 9 C 140 2, 160 16, 180 9 C 200 2, 220 16, 238 9"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  className="animate-pulse"
                />
              </svg>
            </span>{' '}
            into{' '}
            <span className="relative inline-block text-[#ffbe3b] font-medium group">
              powerful digital experiences
              <svg
                viewBox="0 0 320 18"
                className="absolute left-0 -bottom-2 w-full h-3 text-[#f5a623]/80 overflow-visible pointer-events-none opacity-80"
                fill="none"
              >
                <path
                  d="M2 9 C 30 2, 60 16, 90 9 C 120 2, 150 16, 180 9 C 210 2, 240 16, 270 9 C 295 2, 310 16, 318 9"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  className="animate-pulse"
                />
              </svg>
            </span>
            .
          </p>
          <p className="max-w-3xl mx-auto text-base sm:text-xl text-neutral-600 dark:text-[#94a3b8] leading-relaxed mb-12 font-sans">
            Through innovative technology, thoughtful design, and strategic development, we help businesses build, grow, and thrive in a digital-first world. From concept to execution, we transform challenges into opportunities and visions into reality.
          </p>
          <div className="inline-block p-4 sm:p-5 rounded-2xl bg-[#f5a623]/10 border border-[#f5a623]/30 text-neutral-900 dark:text-white font-medium text-sm sm:text-base mb-10">
            Have an idea worth building? <span className="text-[#f5a623] font-bold">Let’s bring it to life.</span> Start your project with HiveMind today.
          </div>
        </RevealOnScroll>

        <RevealOnScroll animation="fade-up" delay={300} className="flex flex-wrap items-center justify-center gap-5">
          <a
            href="#services"
            className="btn-anim group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white dark:bg-[#0d172e] hover:bg-[#081021] hover:text-[#f5a623] text-[#050814] dark:text-white border border-black/10 dark:border-[#f5a623]/30 hover:border-[#f5a623] transition-all duration-300 font-mono text-xs font-semibold uppercase tracking-wider shadow-lg shadow-black/5 dark:shadow-xl hover:scale-105"
          >
            <span className="btn-caption">
              <span className="btn-anim__block">Discover Services</span>
              <span className="btn-anim__block text-[#f5a623]">Discover Services</span>
            </span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#f5a623]" />
          </a>

          <button
            onClick={onOpenContact}
            className="btn-anim group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#f5a623] hover:bg-[#ffbe3b] text-[#050814] transition-all duration-300 font-mono text-xs font-bold uppercase tracking-wider shadow-xl shadow-[#f5a623]/25 hover:shadow-2xl hover:scale-105 border border-[#f5a623]"
          >
            <span className="btn-caption">
              <span className="btn-anim__block">Start Your Project</span>
              <span className="btn-anim__block">Start Your Project</span>
            </span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </RevealOnScroll>
      </div>

      {/* Stats Cards Grid with dynamic counter animation */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-20 pt-16 border-t border-black/5 dark:border-[#f5a623]/15">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <RevealOnScroll
              key={idx}
              animation="fade-up"
              delay={idx * 120}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0d172e] border border-black/10 dark:border-[#f5a623]/20 hover:border-[#f5a623] transition-all duration-500 group hover:-translate-y-2 shadow-md shadow-black/5 dark:shadow-none hover:shadow-2xl hover:shadow-[#f5a623]/10"
            >
              <div className="flex items-center justify-between mb-4">
                <Icon className="w-6 h-6 text-[#f5a623] group-hover:scale-115 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-mono text-[10px] text-[#64748b] dark:text-[#94a3b8]">0{idx + 1}</span>
              </div>
              <div className="font-display text-4xl sm:text-5xl font-bold text-[#050814] dark:text-white tracking-tight mb-2 group-hover:text-[#f5a623] transition-colors">
                <CounterItem
                  endValue={stat.value}
                  prefix={stat.prefix || ''}
                  suffix={stat.suffix || ''}
                />
              </div>
              <div className="font-mono text-xs text-[#64748b] dark:text-[#94a3b8] uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
