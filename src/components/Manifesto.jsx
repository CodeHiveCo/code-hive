import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ShieldCheck, Zap, Award, Sparkles } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

function CounterItem({ endValue, prefix = '', suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const target = parseFloat(endValue);
    const stepTime = 25;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, endValue, duration]);

  const formatted =
    endValue.includes('.')
      ? count.toFixed(1)
      : Math.floor(count);

  return (
    <span ref={ref}>
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
      <div className="w-full h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/15 to-transparent mb-20" />

      {/* Manifesto Headline & Statement with RevealOnScroll */}
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        <RevealOnScroll animation="scale-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ddf160]/20 dark:bg-[#ddf160]/10 border border-[#ddf160]/30 text-xs font-semibold text-neutral-900 dark:text-[#ddf160] mb-8 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#9f8be7] dark:text-[#ddf160] animate-spin-slow" /> OUR MANIFESTO
          </div>
        </RevealOnScroll>

        <RevealOnScroll animation="fade-up" delay={150}>
          <p className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.25] text-neutral-900 dark:text-white tracking-tight mb-12 transition-colors">
            We are a creative web & software agency specializing in{' '}
            <span className="text-[#9f8be7] dark:text-[#ddf160] font-medium underline decoration-[#ddf160]/50 decoration-wavy transition-colors">
              innovative design
            </span>{' '}
            and{' '}
            <span className="text-[#7a63ce] dark:text-[#9f8be7] font-medium transition-colors">
              cutting-edge development
            </span>
            . We help businesses stand out and every aspect of our projects is crafted with the highest standards of quality.
          </p>
        </RevealOnScroll>

        <RevealOnScroll animation="fade-up" delay={300} className="flex flex-wrap items-center justify-center gap-5">
          <a
            href="#services"
            className="btn-anim group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white dark:bg-[#181a20] hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-[#111215] text-neutral-900 dark:text-white border border-black/10 dark:border-white/15 transition-all duration-300 font-medium text-sm shadow-lg shadow-black/5 dark:shadow-xl hover:scale-105"
          >
            <span className="btn-caption">
              <span className="btn-anim__block">Discover Our Services</span>
              <span className="btn-anim__block font-semibold">Discover Our Services</span>
            </span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <button
            onClick={onOpenContact}
            className="btn-anim group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#ddf160] hover:bg-[#c8df46] text-[#111215] transition-all duration-300 font-semibold text-sm shadow-xl shadow-[#ddf160]/25 hover:shadow-2xl hover:scale-105"
          >
            <span className="btn-caption">
              <span className="btn-anim__block">Start Collaboration</span>
              <span className="btn-anim__block">Start Collaboration</span>
            </span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </RevealOnScroll>
      </div>

      {/* Stats Cards Grid with dynamic counter animation */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-20 pt-16 border-t border-black/5 dark:border-white/5">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <RevealOnScroll
              key={idx}
              animation="fade-up"
              delay={idx * 120}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#181a20]/60 border border-black/10 dark:border-white/5 hover:border-[#ddf160] dark:hover:border-[#ddf160]/40 transition-all duration-500 group hover:-translate-y-2 shadow-md shadow-black/5 dark:shadow-none hover:shadow-2xl"
            >
              <Icon className="w-6 h-6 text-neutral-400 dark:text-[#8e8e99] group-hover:text-[#9f8be7] dark:group-hover:text-[#ddf160] transition-colors mb-4 group-hover:rotate-12 group-hover:scale-115 duration-300" />
              <div className="font-display text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight mb-2 group-hover:translate-x-1 transition-transform">
                <CounterItem
                  endValue={stat.value}
                  prefix={stat.prefix || ''}
                  suffix={stat.suffix || ''}
                />
              </div>
              <div className="text-xs sm:text-sm text-neutral-600 dark:text-[#8e8e99] font-medium">
                {stat.label}
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
