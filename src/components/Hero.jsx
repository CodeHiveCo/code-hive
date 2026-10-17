import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Play, Pause, Star, Sparkles, Code2 } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

export default function Hero({ onOpenContact }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // 60FPS Interactive Waveform Animation Canvas in Right Hero Card
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let step = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;

      const lines = [
        { color: 'rgba(221, 241, 96, 0.75)', speed: 0.03, freq: 0.015, amp: isPlaying ? 35 : 12 },
        { color: 'rgba(159, 139, 231, 0.65)', speed: 0.02, freq: 0.012, amp: isPlaying ? 28 : 8 },
        { color: 'rgba(255, 255, 255, 0.35)', speed: 0.025, freq: 0.02, amp: isPlaying ? 20 : 5 },
      ];

      lines.forEach((line) => {
        ctx.beginPath();
        ctx.lineWidth = 2.2;
        ctx.strokeStyle = line.color;

        for (let x = 0; x < width; x += 3) {
          const y =
            centerY +
            Math.sin(x * line.freq + step * line.speed) *
              line.amp *
              Math.sin((x / width) * Math.PI); // Envelope to taper edges

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      });

      step += 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPlaying]);

  return (
    <section className="relative pt-32 sm:pt-40 pb-20 md:pb-28 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#ddf160]/10 dark:bg-[#ddf160]/5 rounded-full blur-[140px] pointer-events-none animate-glow" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#9f8be7]/15 dark:bg-[#9f8be7]/10 rounded-full blur-[160px] pointer-events-none animate-glow" />

      {/* Top Headline + Social Proof Stack */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 md:mb-20">
        <div className="lg:col-span-8 xl:col-span-9 overflow-hidden">
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-semibold tracking-tight leading-[0.95] text-neutral-900 dark:text-white transition-colors duration-400">
            {/* Staggered load reveal for Headline Row 1 */}
            <span
              className={`block transition-all duration-1000 ease-out transform ${
                hasMounted ? 'translate-y-0 opacity-100' : 'translate-y-14 opacity-0'
              }`}
            >
              Shaping ideas
            </span>

            {/* Staggered load reveal for Headline Row 2 */}
            <span
              className={`flex flex-wrap items-center gap-3 sm:gap-6 mt-1 sm:mt-2 transition-all duration-1000 delay-200 ease-out transform ${
                hasMounted ? 'translate-y-0 opacity-100' : 'translate-y-14 opacity-0'
              }`}
            >
              <span className="inline-flex items-center justify-center w-12 h-12 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-neutral-100 dark:bg-gradient-to-tr dark:from-[#1f222b] dark:to-[#2c303d] border border-black/10 dark:border-white/10 text-neutral-900 dark:text-[#ddf160] shadow-xl hover:rotate-90 hover:scale-115 transition-all duration-700 cursor-pointer group">
                {/* 4-point Rayo Star SVG with continuous gentle pulse */}
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7 sm:w-11 sm:h-11 animate-pulse"
                  fill="currentColor"
                >
                  <path d="M12 0C12 7 7 12 0 12C7 12 12 17 12 24C12 17 17 12 24 12C17 12 12 7 12 0Z" />
                </svg>
              </span>
              <span className="bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-500 dark:from-white dark:via-[#f4f4f5] dark:to-[#a1a1aa] bg-clip-text text-transparent italic font-normal">
                into real code
              </span>
            </span>
          </h1>
        </div>

        {/* Floating Social Proof Stack with subtle float animation */}
        <div className="lg:col-span-4 xl:col-span-3 flex lg:justify-end">
          <div
            className={`animate-float p-4 sm:p-5 rounded-3xl bg-white/90 dark:glass-panel border border-black/10 dark:border-white/10 flex items-center gap-4 shadow-xl shadow-black/5 dark:shadow-black/30 backdrop-blur-md transition-all duration-1000 delay-300 transform ${
              hasMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            {/* Avatar Stack */}
            <div className="flex -space-x-3 items-center">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
                alt="Client avatar"
                className="w-11 h-11 rounded-full border-2 border-white dark:border-[#111215] object-cover shadow-sm hover:scale-110 transition-transform"
              />
              <div className="w-11 h-11 rounded-full bg-neutral-900 dark:bg-[#1e2029] border-2 border-white dark:border-[#111215] flex items-center justify-center text-[#ddf160] shadow-inner animate-pulse">
                <Star className="w-5 h-5 fill-[#ddf160]" />
              </div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80"
                alt="Client avatar"
                className="w-11 h-11 rounded-full border-2 border-white dark:border-[#111215] object-cover shadow-sm hover:scale-110 transition-transform"
              />
            </div>
            <div className="text-left leading-snug">
              <p className="text-xs uppercase tracking-wider text-neutral-500 dark:text-[#8e8e99] font-medium">Trusted by</p>
              <a href="#about" className="text-sm font-semibold text-neutral-900 dark:text-white hover:text-[#9f8be7] dark:hover:text-[#ddf160] transition-colors flex items-center gap-1">
                120+ Founders <ArrowUpRight className="w-3.5 h-3.5 text-neutral-900 dark:text-[#ddf160]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Dual Split Hero Showcase (Rayo signature layout) with Reveal Animations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Left Card: Featured Showcase Banner */}
        <RevealOnScroll
          animation="fade-up"
          delay={150}
          className="lg:col-span-7 xl:col-span-7 group relative rounded-[2.5rem] overflow-hidden bg-white dark:bg-[#181a20] border border-black/10 dark:border-white/10 min-h-[440px] sm:min-h-[520px] flex flex-col justify-between p-8 sm:p-12 transition-all duration-500 hover:border-[#ddf160] shadow-xl shadow-black/5 dark:shadow-2xl hover:-translate-y-1.5"
        >
          {/* Card Ambient Background Image / Mesh */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&auto=format&fit=crop&q=80"
              alt="CodeHive Works Showcase"
              className="w-full h-full object-cover opacity-50 dark:opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/50 to-transparent dark:from-[#111215] dark:via-[#111215]/60 dark:to-transparent" />
          </div>

          {/* Top Tags inside Card */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-md border border-black/10 dark:border-white/10 text-xs font-semibold text-neutral-900 dark:text-[#ddf160] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#9f8be7] dark:text-[#ddf160] animate-spin-slow" /> Creative Web & AI Architecture
            </div>
            <span className="text-xs font-mono text-neutral-500 dark:text-[#8e8e99] tracking-widest uppercase">
              EDITION 2026
            </span>
          </div>

          {/* Bottom Content inside Left Card */}
          <div className="relative z-10 pt-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-md">
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-neutral-900 dark:text-white leading-tight mb-2">
                Blending radical creativity with robust engineering
              </p>
              <p className="text-sm text-neutral-600 dark:text-[#a1a1aa]">
                Custom web solutions built with React 19, intelligent agentic workflows, and fluid micro-interactions.
              </p>
            </div>

            <a
              href="#works"
              className="btn-anim group/btn inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-[#111215] hover:bg-[#ddf160] hover:text-[#111215] dark:hover:bg-[#ddf160] transition-colors duration-300 font-semibold text-sm whitespace-nowrap shadow-xl flex-shrink-0"
            >
              <span className="btn-caption">
                <span className="btn-anim__block">Explore Works</span>
                <span className="btn-anim__block">Explore Works</span>
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          </div>
        </RevealOnScroll>

        {/* Right Card: LIVE 60FPS Interactive Audio/Neural Canvas Waveform */}
        <RevealOnScroll
          animation="fade-up"
          delay={300}
          className="lg:col-span-5 xl:col-span-5 relative rounded-[2.5rem] overflow-hidden bg-white dark:bg-[#181a20] border border-black/10 dark:border-white/10 min-h-[440px] sm:min-h-[520px] flex flex-col justify-between p-8 sm:p-10 transition-all duration-500 hover:border-[#9f8be7] shadow-xl shadow-black/5 dark:shadow-2xl hover:-translate-y-1.5"
        >
          {/* Live Interactive Waveform Canvas */}
          <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-[#0d0e12] border border-black/10 dark:border-white/10 flex items-center justify-center group shadow-inner">
            <canvas
              ref={canvasRef}
              className="w-full h-full absolute inset-0 pointer-events-none"
            />

            {/* Overlay Grid lines */}
            <div className="absolute inset-0 bg-[radial-gradient(#ddf160_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

            {/* Central Play/Pause Toggle with magnetic hover */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="relative z-10 w-16 h-16 rounded-full bg-[#ddf160] hover:bg-[#c8df46] text-[#111215] flex items-center justify-center transition-all duration-300 hover:scale-115 shadow-2xl shadow-[#ddf160]/40 group-hover:rotate-12 cursor-pointer"
              aria-label={isPlaying ? 'Pause Waveform' : 'Play Waveform'}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 fill-current" />
              ) : (
                <Play className="w-6 h-6 fill-current ml-0.5" />
              )}
            </button>

            {/* Live Status indicator */}
            <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-mono text-white flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full bg-[#ddf160] ${isPlaying ? 'animate-ping' : ''}`} />
              <span>{isPlaying ? 'LIVE INTERACTIVE WAVE' : 'PAUSED'} • 60 FPS</span>
            </div>
          </div>

          {/* Description Block */}
          <div className="pt-6">
            <div className="flex items-center gap-2 mb-3">
              <Code2 className="w-4 h-4 text-[#9f8be7] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#9f8be7] font-semibold">
                AGENCY CAPABILITIES
              </span>
            </div>
            <p className="font-display text-lg sm:text-xl text-neutral-800 dark:text-[#f4f4f5] leading-relaxed">
              We are an elite creative digital agency specializing in avant-garde design, bespoke modern software development, and transformative AI systems.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
