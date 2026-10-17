import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const projects = [
  {
    id: 1,
    title: 'NeuroFlow AI',
    subtitle: 'Autonomous agent workspace & intelligence dashboard',
    tags: ['AI & LLMs', 'Next.js 15', 'Neural Canvas'],
    category: 'AI & Cloud',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
    span: 'col-span-1 xl:col-span-6',
  },
  {
    id: 2,
    title: 'Hyperion Pay',
    subtitle: 'Borderless financial treasury & high-throughput checkout',
    tags: ['FinTech', 'Architecture', 'Security'],
    category: 'FinTech',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
    span: 'col-span-1 xl:col-span-6',
  },
  {
    id: 3,
    title: 'Lumina Spatial',
    subtitle: 'Interactive 3D WebGL brand universe and digital gallery',
    tags: ['3D WebGL', 'Motion', 'Spatial UI'],
    category: '3D / WebGL',
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&auto=format&fit=crop&q=80',
    span: 'col-span-1 xl:col-span-6',
  },
  {
    id: 4,
    title: 'Vektor Clinical',
    subtitle: 'Real-time diagnostic intelligence & clinical data pipeline',
    tags: ['HealthTech', 'React Native', 'Data Viz'],
    category: 'AI & Cloud',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&auto=format&fit=crop&q=80',
    span: 'col-span-1 xl:col-span-6',
  },
  {
    id: 5,
    title: 'Apex Protocol',
    subtitle: 'Decentralized liquidity engine with sub-millisecond execution',
    tags: ['Web3', 'WebSockets', 'Trading UI'],
    category: 'FinTech',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&auto=format&fit=crop&q=80',
    span: 'col-span-1 xl:col-span-6',
  },
  {
    id: 6,
    title: 'Aura Luxury',
    subtitle: 'Headless global flagship storefront with sub-second page transitions',
    tags: ['E-Commerce', 'Shopify Plus', 'Custom Tokenization'],
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&auto=format&fit=crop&q=80',
    span: 'col-span-1 xl:col-span-6',
  },
];

export default function CaseStudies({ onOpenContact }) {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="works" className="py-24 sm:py-36 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto relative">
      {/* Section Header with RevealOnScroll */}
      <RevealOnScroll animation="fade-up" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-20">
        <div className="lg:col-span-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#9f8be7] dark:text-[#ddf160] mb-3 block font-semibold">
            SELECTED WORKS
          </span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-semibold text-neutral-900 dark:text-white tracking-tight">
            Case Studies
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-[#a1a1aa] max-w-xl">
            Explore a curated selection of digital products, AI architectures, and interactive flagship experiences engineered by CodeHive.
          </p>
        </div>

        {/* Filter Pills with smooth active states */}
        <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-2">
          {['All', 'AI & Cloud', 'FinTech', 'E-Commerce', '3D / WebGL'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 shadow-sm ${
                filter === cat
                  ? 'bg-neutral-900 text-white dark:bg-[#ddf160] dark:text-[#111215] font-semibold scale-105'
                  : 'bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 text-neutral-600 dark:text-[#a1a1aa] hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </RevealOnScroll>

      {/* Projects Grid with Staggered Scroll Reveal */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 sm:gap-10">
        {filteredProjects.map((proj, idx) => (
          <RevealOnScroll
            key={proj.id}
            animation="fade-up"
            delay={idx * 100}
            className={`${proj.span}`}
          >
            <div className="group relative rounded-[2.5rem] overflow-hidden bg-white dark:bg-[#181a20] border border-black/10 dark:border-white/10 hover:border-[#ddf160] dark:hover:border-[#ddf160]/50 transition-all duration-500 shadow-xl shadow-black/5 dark:shadow-2xl flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl">
              {/* Project Image Container */}
              <div className="relative h-80 sm:h-[440px] w-full overflow-hidden bg-black">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 opacity-90 group-hover:opacity-100 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30" />

                {/* Tag Pills floating top */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-10">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3.5 py-1 rounded-full text-xs font-semibold bg-black/70 backdrop-blur-md border border-white/15 text-white transition-transform group-hover:translate-x-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover Overlay Arrow Button */}
                <div className="absolute bottom-6 right-6 z-10 w-14 h-14 rounded-full bg-[#ddf160] text-[#111215] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 transform translate-y-3 group-hover:translate-y-0 shadow-2xl group-hover:rotate-45">
                  <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
                </div>
              </div>

              {/* Project Metadata & Title */}
              <div className="p-8 sm:p-10 pt-6 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#9f8be7] block mb-1 font-semibold">
                    PROJECT 0{proj.id}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-white group-hover:text-[#9f8be7] dark:group-hover:text-[#ddf160] transition-colors mb-2">
                    {proj.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-[#a1a1aa] leading-relaxed">
                    {proj.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {/* Rotating Circular Text Badge with Magnetic Pulse */}
      <RevealOnScroll animation="scale-up" delay={200} className="mt-20 flex justify-center">
        <button
          onClick={onOpenContact}
          className="group relative w-44 h-44 sm:w-52 sm:h-52 rounded-full flex items-center justify-center focus:outline-none cursor-pointer"
          aria-label="Start new project"
        >
          {/* Orbiting Rotating Text SVG with acceleration on hover */}
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full animate-spin-slow group-hover:[animation-duration:10s] transition-all select-none pointer-events-none"
          >
            <path
              id="circlePath"
              d="M 100, 100 m -72, 0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
              fill="none"
            />
            <text className="font-display text-[12.5px] uppercase tracking-[0.24em] fill-neutral-900 dark:fill-white/80 group-hover:fill-[#9f8be7] dark:group-hover:fill-[#ddf160] transition-colors font-medium">
              <textPath href="#circlePath">
                LET'S START NEW PROJECT ✦ CODEHIVE STUDIO ✦
              </textPath>
            </text>
          </svg>

          {/* Central Pulsing Interactive Button */}
          <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white dark:bg-[#1e2029] group-hover:bg-[#ddf160] border border-black/10 dark:border-white/15 group-hover:border-[#ddf160] flex items-center justify-center transition-all duration-300 group-hover:scale-115 shadow-2xl">
            <ArrowUpRight className="w-8 h-8 text-neutral-900 dark:text-[#ddf160] group-hover:text-[#111215] transition-colors stroke-[2.5] group-hover:rotate-45" />
          </div>
        </button>
      </RevealOnScroll>
    </section>
  );
}
