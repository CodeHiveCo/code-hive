import { ArrowUpRight, Eye } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const insights = [
  {
    id: 1,
    title: 'The Era of Agentic UI: Designing Beyond Static Dashboards',
    date: 'OCT // 14.2026',
    readTime: '05 MIN READ',
    tags: ['AI Agents', 'UI Architecture'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Mastering 60fps Web Performance in Modern Frontend Stacks',
    date: 'SEP // 29.2026',
    readTime: '08 MIN READ',
    tags: ['Performance', 'Engineering'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=900&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Brand Identity as Code: How Design Systems Scale Companies',
    date: 'SEP // 12.2026',
    readTime: '04 MIN READ',
    tags: ['Design Systems', 'Strategy'],
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=900&auto=format&fit=crop&q=80',
  },
];

export default function Insights() {
  return (
    <section id="insights" className="py-24 sm:py-36 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto relative">
      {/* Header */}
      <RevealOnScroll animation="fade-up" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-20">
        <div className="lg:col-span-5">
          <span className="text-xs font-mono uppercase tracking-widest text-[#d48806] dark:text-[#f5a623] mb-3 block font-semibold">
            [ 06 // INTEL_FEED ]
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-semibold text-neutral-900 dark:text-white tracking-tight">
            Recent Insights<span className="text-[#d48806] dark:text-[#f5a623]">.</span>
          </h2>
        </div>

        <div className="lg:col-span-4">
          <p className="text-sm sm:text-base text-neutral-600 dark:text-[#94a3b8] leading-relaxed font-sans">
            Architectural blueprints, runtime performance analyses, and the latest breakthroughs in design systems and autonomous AI.
          </p>
        </div>

        <div className="lg:col-span-3 flex lg:justify-end">
          <a
            href="#insights"
            className="btn-anim group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white dark:bg-[#0d172e] hover:bg-[#f5a623] hover:text-[#050814] dark:hover:bg-[#f5a623] dark:hover:text-[#050814] text-neutral-900 dark:text-white border border-black/10 dark:border-[#f5a623]/30 transition-colors text-sm font-medium shadow-sm hover:scale-105"
          >
            <span className="btn-caption">
              <span className="btn-anim__block">All Publications</span>
              <span className="btn-anim__block">All Publications</span>
            </span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </RevealOnScroll>

      {/* Articles Cards Grid with staggered scroll reveal */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {insights.map((post, idx) => (
          <RevealOnScroll
            key={post.id}
            animation="fade-up"
            delay={idx * 150}
          >
            <article className="group cursor-pointer rounded-[2rem] overflow-hidden bg-white dark:bg-[#0d172e] border border-black/10 dark:border-[#f5a623]/20 hover:border-[#f5a623] dark:hover:border-[#f5a623] transition-all duration-400 flex flex-col justify-between shadow-xl shadow-black/5 dark:shadow-2xl hover:-translate-y-2 hover:shadow-[#f5a623]/10 relative">
              {/* Image Preview with Hover Eye Icon */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#050814]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 opacity-90 group-hover:opacity-100 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050814]/90 via-transparent to-[#050814]/40" />

                {/* Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {post.tags.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase font-semibold bg-[#050814]/80 backdrop-blur-md border border-[#f5a623]/30 text-[#f5a623]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Hover Eye Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#050814]/50 backdrop-blur-[2px]">
                  <div className="w-12 h-12 rounded-full bg-[#f5a623] text-[#050814] flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform shadow-lg group-hover:rotate-12">
                    <Eye className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>
              </div>

              {/* Content & Title */}
              <div className="p-7 flex flex-col justify-between flex-grow">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-500 dark:text-[#94a3b8] mb-3">
                  <span>{post.date}</span>
                  <span className="text-[#d48806] dark:text-[#f5a623]">{post.readTime}</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-white group-hover:text-[#d48806] dark:group-hover:text-[#f5a623] transition-colors leading-snug">
                  {post.title}
                </h3>
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
