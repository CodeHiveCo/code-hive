import { ArrowUpRight, Eye } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const insights = [
  {
    id: 1,
    title: 'The Era of Agentic UI: Designing Beyond Static Dashboards',
    date: 'Oct 14, 2026',
    readTime: '5 min read',
    tags: ['AI Agents', 'UI Architecture'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    title: 'Mastering 60fps Web Performance in Modern Frontend Stacks',
    date: 'Sep 29, 2026',
    readTime: '8 min read',
    tags: ['Performance', 'Engineering'],
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=900&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    title: 'Brand Identity as Code: How Design Systems Scale Companies',
    date: 'Sep 12, 2026',
    readTime: '4 min read',
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
          <span className="text-xs font-mono uppercase tracking-widest text-[#9f8be7] dark:text-[#ddf160] mb-3 block font-semibold">
            THOUGHT LEADERSHIP
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-semibold text-neutral-900 dark:text-white tracking-tight">
            Recent Insights
          </h2>
        </div>

        <div className="lg:col-span-4">
          <p className="text-sm sm:text-base text-neutral-600 dark:text-[#a1a1aa] leading-relaxed">
            Inspiring ideas, architectural blueprints, and the latest breakthroughs in design systems and artificial intelligence.
          </p>
        </div>

        <div className="lg:col-span-3 flex lg:justify-end">
          <a
            href="#insights"
            className="btn-anim group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white dark:bg-[#181a20] hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-[#111215] text-neutral-900 dark:text-white border border-black/10 dark:border-white/10 transition-colors text-sm font-medium shadow-sm hover:scale-105"
          >
            <span className="btn-caption">
              <span className="btn-anim__block">All Articles</span>
              <span className="btn-anim__block">All Articles</span>
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
            <article className="group cursor-pointer rounded-[2rem] overflow-hidden bg-white dark:bg-[#181a20] border border-black/10 dark:border-white/10 hover:border-[#ddf160] dark:hover:border-[#ddf160]/40 transition-all duration-400 flex flex-col justify-between shadow-xl shadow-black/5 dark:shadow-2xl hover:-translate-y-2 hover:shadow-2xl">
              {/* Image Preview with Hover Eye Icon */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 opacity-90 group-hover:opacity-100 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                {/* Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {post.tags.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-black/60 backdrop-blur-md border border-white/15 text-white"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Hover Eye Icon (Rayo signature) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                  <div className="w-12 h-12 rounded-full bg-[#ddf160] text-[#111215] flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform shadow-lg group-hover:rotate-12">
                    <Eye className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>
              </div>

              {/* Content & Title */}
              <div className="p-7 flex flex-col justify-between flex-grow">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-500 dark:text-[#8e8e99] mb-3">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-white group-hover:text-[#9f8be7] dark:group-hover:text-[#ddf160] transition-colors leading-snug">
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
