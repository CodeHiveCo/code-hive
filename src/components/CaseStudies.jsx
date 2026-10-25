import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const projects = [
  {
    id: 1,
    title: 'Pulse Commerce & Monetization',
    subtitle: 'High-conversion web architecture with optimized ad yield and sub-second load times',
    tags: ['Web Development', 'Monetization', 'SEO'],
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
    span: 'col-span-1 xl:col-span-6',
  },
  {
    id: 2,
    title: 'FinEdge Treasury Portal',
    subtitle: 'Modern corporate website redesign & custom financial dashboard system',
    tags: ['Redesign', 'Corporate', 'Optimization'],
    category: 'Custom Solutions',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
    span: 'col-span-1 xl:col-span-6',
  },
  {
    id: 3,
    title: 'Nexus Spatial UI System',
    subtitle: 'Intuitive spatial design system, wireframing, and interactive prototype suite',
    tags: ['UI/UX Design', 'Design Systems', 'Prototypes'],
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&auto=format&fit=crop&q=80',
    span: 'col-span-1 xl:col-span-6',
  },
  {
    id: 4,
    title: 'AdSense Multi-Niche Media Hub',
    subtitle: 'High-RPM publishing platform engineered for organic discoverability and compliance',
    tags: ['Google AdSense', 'Monetization', 'Publishing'],
    category: 'Digital Products',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200&auto=format&fit=crop&q=80',
    span: 'col-span-1 xl:col-span-6',
  },
  {
    id: 5,
    title: 'Aura Social Brand Engine',
    subtitle: 'Multi-channel social presence, creative direction, and audience engagement pipeline',
    tags: ['Social Media', 'Content Strategy', 'Growth'],
    category: 'Digital Products',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&auto=format&fit=crop&q=80',
    span: 'col-span-1 xl:col-span-6',
  },
  {
    id: 6,
    title: 'Enterprise Process Automation',
    subtitle: 'Custom internal tools, workflow simplification, and practical cloud integrations',
    tags: ['Custom Solutions', 'Automation', 'Efficiency'],
    category: 'Custom Solutions',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80',
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
          <span className="text-xs font-mono uppercase tracking-widest text-[#f5a623] mb-3 block font-semibold">
            [ 04 // SELECTED_WORKS ]
          </span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-[#050814] dark:text-white tracking-tight">
            Selected Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#475569] dark:text-[#94a3b8] max-w-xl">
            Turning bold ideas into functional, scalable, and impactful digital products across web development, UI/UX, and monetization.
          </p>
        </div>

        {/* Filter Pills with smooth active states */}
        <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-2">
          {['All', 'Web Development', 'UI/UX Design', 'Digital Products', 'Custom Solutions'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 shadow-sm cursor-pointer ${
                filter === cat
                  ? 'bg-[#f5a623] text-[#050814] font-bold scale-105 shadow-md shadow-[#f5a623]/25'
                  : 'bg-white dark:bg-[#0d172e] border border-black/10 dark:border-[#f5a623]/20 text-[#64748b] dark:text-[#94a3b8] hover:text-[#050814] dark:hover:text-[#f5a623] hover:border-[#f5a623]/50'
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
            <div
              data-cursor="view"
              onClick={onOpenContact}
              className="group/card cursor-pointer relative rounded-[2.5rem] overflow-hidden bg-white dark:bg-[#0d172e] border border-black/10 dark:border-[#f5a623]/20 hover:border-[#f5a623] transition-all duration-500 shadow-xl shadow-black/5 dark:shadow-2xl flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#f5a623]/10"
            >
              {/* Project Image Container */}
              <div className="relative h-80 sm:h-[440px] w-full overflow-hidden bg-[#050814]">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 opacity-90 group-hover/card:opacity-100 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-transparent to-[#050814]/30" />

                {/* Tag Pills floating top */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-10">
                  {proj.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3.5 py-1 rounded-full text-xs font-mono font-medium bg-[#081021]/80 backdrop-blur-md border border-[#f5a623]/30 text-[#f5a623] transition-transform group-hover/card:translate-x-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover Overlay Arrow Button */}
                <div className="absolute bottom-6 right-6 z-10 w-14 h-14 rounded-full bg-[#f5a623] text-[#050814] flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-all duration-400 transform translate-y-3 group-hover/card:translate-y-0 shadow-2xl shadow-[#f5a623]/40 group-hover/card:rotate-45">
                  <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
                </div>
              </div>

              {/* Project Metadata & Title */}
              <div className="p-8 sm:p-10 pt-6 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#f5a623] block mb-1 font-semibold">
                    PROJECT // 0{proj.id}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#050814] dark:text-white group-hover/card:text-[#f5a623] transition-colors mb-2">
                    {proj.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#475569] dark:text-[#94a3b8] leading-relaxed">
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
          className="group relative w-44 h-44 sm:w-56 sm:h-56 rounded-full flex items-center justify-center focus:outline-none cursor-pointer"
          aria-label="Start new project"
        >
          {/* Orbiting Rotating Text SVG with acceleration on hover */}
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full animate-spin-badge group-hover:[animation-duration:3.5s] transition-all select-none pointer-events-none"
          >
            <path
              id="circlePath"
              d="M 100, 100 m -72, 0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
              fill="none"
            />
            <text className="font-mono text-[11px] uppercase tracking-[0.24em] fill-[#050814]/70 dark:fill-[#94a3b8] group-hover:fill-[#f5a623] transition-colors font-semibold">
              <textPath href="#circlePath">
                LET'S START NEW PROJECT ✦ HiveMind STUDIO ✦
              </textPath>
            </text>
          </svg>

          {/* Central Pulsing Interactive Button */}
          <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#f5a623] hover:bg-[#ffbe3b] text-[#050814] border border-[#f5a623] flex items-center justify-center transition-all duration-300 group-hover:scale-115 shadow-2xl shadow-[#f5a623]/35">
            <ArrowUpRight className="w-8 h-8 stroke-[2.5] group-hover:rotate-45 transition-transform" />
          </div>
        </button>
      </RevealOnScroll>
    </section>
  );
}
