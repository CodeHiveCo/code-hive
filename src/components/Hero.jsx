import { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Play, Pause, Star, Sparkles, Code2 } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

export default function Hero({ onOpenContact }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const canvasRef = useRef(null);

  // 60FPS Interactive Waveform Animation Canvas in Right Hero Card
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let step = 0;

    const resize = () => {
      if (canvas && canvas.offsetWidth && canvas.offsetHeight) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }
    };
    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      if (width === 0 || height === 0) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);
      const centerY = height / 2;

      const lines = [
        { color: 'rgba(245, 166, 35, 0.95)', glow: 'rgba(245, 166, 35, 0.5)', speed: 0.035, freq: 0.015, amp: isPlaying ? 38 : 10 },
        { color: 'rgba(255, 190, 59, 0.75)', glow: 'rgba(255, 190, 59, 0.35)', speed: 0.022, freq: 0.012, amp: isPlaying ? 30 : 7 },
        { color: 'rgba(255, 255, 255, 0.4)', glow: 'rgba(255, 255, 255, 0.2)', speed: 0.028, freq: 0.02, amp: isPlaying ? 22 : 4 },
      ];

      lines.forEach((line) => {
        ctx.beginPath();
        ctx.lineWidth = 2.4;
        ctx.strokeStyle = line.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = line.glow;

        for (let x = 0; x < width; x += 3) {
          const y =
            centerY +
            Math.sin(x * line.freq + step * line.speed) *
              line.amp *
              Math.sin((x / width) * Math.PI);

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();

        // Draw traveling glowing energy node along waveform
        if (isPlaying) {
          const beadX = ((step * 2.5) % Math.max(width - 40, 10)) + 20;
          const beadY =
            centerY +
            Math.sin(beadX * line.freq + step * line.speed) *
              line.amp *
              Math.sin((beadX / width) * Math.PI);
          ctx.beginPath();
          ctx.arc(beadX, beadY, 4.5, 0, Math.PI * 2);
          ctx.fillStyle = '#f5a623';
          ctx.shadowBlur = 14;
          ctx.shadowColor = '#f5a623';
          ctx.fill();
        }
      });

      // Reset shadow blur for performance
      ctx.shadowBlur = 0;
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
      {/* Background Ambient Glows (Strict Dark Yellow & Dark Navy) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#f5a623]/10 dark:bg-[#f5a623]/8 rounded-full blur-[140px] pointer-events-none animate-glow" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#0d172e]/80 dark:bg-[#0d172e]/90 rounded-full blur-[160px] pointer-events-none animate-glow" />

      {/* Top Headline + Social Proof Stack */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 md:mb-20">
        <div className="lg:col-span-8 xl:col-span-9 overflow-hidden">
          {/* Futuristic Telemetry Label */}
          <div className="flex items-center gap-2 mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-[#f5a623]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623] animate-ping" />
            <span>[ SYSTEM // ACTIVE_STATION : 01 ]</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-bold tracking-tight leading-[0.95] text-[#050814] dark:text-white transition-colors duration-400">
            {/* Headline Row 1 - Immediately Visible without vanishing flash */}
            <span className="block">
              Shaping ideas
            </span>

            {/* Headline Row 2 */}
            <span className="flex flex-wrap items-center gap-3 sm:gap-6 mt-1 sm:mt-2">
              <span className="inline-flex items-center justify-center w-12 h-12 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#0d172e] border border-black/10 dark:border-[#f5a623]/40 text-[#f5a623] shadow-xl hover:rotate-180 hover:scale-115 transition-all duration-700 cursor-pointer group shadow-[#050814]">
                {/* 4-point Brand Star SVG with gentle pulse & spin on hover */}
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7 sm:w-11 sm:h-11 group-hover:rotate-180 group-hover:scale-110 transition-transform duration-700 text-[#f5a623] animate-pulse"
                  fill="currentColor"
                >
                  <path d="M12 0C12 7 7 12 0 12C7 12 12 17 12 24C12 17 17 12 24 12C17 12 12 7 12 0Z" />
                </svg>
              </span>
              <span className="bg-gradient-to-r from-neutral-900 via-[#f5a623] to-neutral-900 dark:from-white dark:via-[#f5a623] dark:to-white bg-[length:200%_auto] animate-shimmer bg-clip-text text-transparent italic font-normal">
                into real code
              </span>
            </span>
          </h1>
        </div>

      </div>

      {/* Dual Split Hero Showcase (Rayo signature layout) with Reveal Animations */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Left Card: Featured Showcase Banner */}
        <RevealOnScroll
          animation="fade-up"
          delay={150}
          className="lg:col-span-7 xl:col-span-7 group relative rounded-[2.5rem] overflow-hidden bg-white dark:bg-[#0d172e] border border-black/10 dark:border-[#f5a623]/20 min-h-[440px] sm:min-h-[520px] flex flex-col justify-between p-8 sm:p-12 transition-all duration-500 hover:border-[#f5a623] shadow-xl shadow-black/5 dark:shadow-2xl hover:-translate-y-1.5"
        >
          {/* Card Ambient Background Image / Mesh */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1573164713712-03790a178651?w=1600&auto=format&fit=crop&q=80"
              alt="HiveMind Works Showcase"
              className="w-full h-full object-cover opacity-50 dark:opacity-30 group-hover:scale-110 group-hover:opacity-50 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/50 to-transparent dark:from-[#050814] dark:via-[#050814]/70 dark:to-transparent" />
          </div>

          {/* Top Tags inside Card */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 dark:bg-[#081021]/90 backdrop-blur-md border border-black/10 dark:border-[#f5a623]/30 text-xs font-mono font-semibold text-[#050814] dark:text-[#f5a623] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#f5a623] animate-spin-slow" /> [ CREATIVE_WEB // AI_ARCHITECTURE ]
            </div>
            <span className="text-xs font-mono text-[#64748b] dark:text-[#94a3b8] tracking-widest uppercase">
              EDITION 2026.4
            </span>
          </div>

          {/* Bottom Content inside Left Card */}
          <div className="relative z-10 pt-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="max-w-md">
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#050814] dark:text-white leading-tight mb-2">
                Turning bold ideas into powerful digital experiences
              </p>
              <p className="text-sm text-[#475569] dark:text-[#94a3b8]">
                We combine technology, design, and strategic development to help businesses build, grow, and thrive in a digital-first world.
              </p>
            </div>

            <a
              href="#works"
              className="btn-anim group/btn inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#f5a623] text-[#050814] hover:bg-[#ffbe3b] transition-colors duration-300 font-bold font-mono text-xs uppercase tracking-wider whitespace-nowrap shadow-xl shadow-[#f5a623]/20 flex-shrink-0"
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
          className="lg:col-span-5 xl:col-span-5 relative rounded-[2.5rem] overflow-hidden bg-white dark:bg-[#0d172e] border border-black/10 dark:border-[#f5a623]/20 min-h-[440px] sm:min-h-[520px] flex flex-col justify-between p-8 sm:p-10 transition-all duration-500 hover:border-[#f5a623] shadow-xl shadow-black/5 dark:shadow-2xl hover:-translate-y-1.5"
        >
          {/* Live Interactive Waveform Canvas */}
          <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-[#050814] border border-black/10 dark:border-[#f5a623]/20 flex items-center justify-center group shadow-inner">
            <canvas
              ref={canvasRef}
              className="w-full h-full absolute inset-0 pointer-events-none"
            />

            {/* Overlay Grid lines */}
            <div className="absolute inset-0 bg-[radial-gradient(#f5a623_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />

            {/* Central Play/Pause Toggle with magnetic hover */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="relative z-10 w-16 h-16 rounded-full bg-[#f5a623] hover:bg-[#ffbe3b] text-[#050814] flex items-center justify-center transition-all duration-300 hover:scale-115 shadow-2xl shadow-[#f5a623]/40 group-hover:rotate-12 cursor-pointer"
              aria-label={isPlaying ? 'Pause Waveform' : 'Play Waveform'}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 fill-current" />
              ) : (
                <Play className="w-6 h-6 fill-current ml-0.5" />
              )}
            </button>

            {/* Live Status indicator */}
            <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#081021]/90 backdrop-blur-md border border-[#f5a623]/30 text-[11px] font-mono text-[#f5a623] flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full bg-[#f5a623] ${isPlaying ? 'animate-ping' : ''}`} />
              <span>{isPlaying ? 'TELEMETRY: LIVE' : 'PAUSED'} • 60 FPS</span>
            </div>
          </div>

          {/* Description Block */}
          <div className="pt-6">
            <div className="flex items-center gap-2 mb-3">
              <Code2 className="w-4 h-4 text-[#f5a623] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#f5a623] font-semibold">
                [ CAPABILITIES // CORE_SPEC ]
              </span>
            </div>
            <p className="font-display text-lg sm:text-xl text-neutral-800 dark:text-[#f8fafc] leading-relaxed">
              Ideas into systems. Vision into reality. From concept to execution, we transform challenges into opportunities and build solutions that endure.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
