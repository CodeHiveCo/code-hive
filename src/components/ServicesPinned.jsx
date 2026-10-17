import { useState } from 'react';
import { Palette, Code2, Sparkles, Rocket, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const services = [
  {
    id: 1,
    title: 'Digital art and graphic design',
    subtitle: 'UI/UX & Modern Spatial Design',
    tags: ['UI/UX', 'Web design', 'Motion', '3D models'],
    description:
      'We create visually compelling designs that elevate user experience. We make sure your brand’s visuals resonate deeply with your audience and evoke effortless trust.',
    features: ['High-conversion design systems', 'Fluid 60fps micro-animations', 'Interactive 3D prototypes', 'Design tokens & multi-brand setups'],
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&auto=format&fit=crop&q=80',
    icon: Palette,
    accentColor: '#f5a623',
  },
  {
    id: 2,
    title: 'Creative development',
    subtitle: 'High-Velocity Frontend & Backend',
    tags: ['Frontend', 'Interactions', 'Backend', 'E-Commerce'],
    description:
      'We build high-performance websites and applications using modern web technologies. Our codebases are engineered to be modular, scalable, and optimized for sub-second page loads.',
    features: ['React 19, Next.js & Vite', 'Headless CMS & Commerce integrations', 'Sub-second serverless APIs', 'Tailwind & CSS architecture'],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80',
    icon: Code2,
    accentColor: '#f5a623',
  },
  {
    id: 3,
    title: 'Brand identity & systems',
    subtitle: 'Signature Strategy & Expression',
    tags: ['Brand strategy', 'Logo design', 'Guidelines', 'Visual identity'],
    description:
      'From distinctive logomarks to comprehensive enterprise brand guidelines, we ensure your business commands market authority with memorable aesthetic positioning across all touchpoints.',
    features: ['Custom typographic systems', 'Adaptive logo marks & iconography', 'Comprehensive brand rulebooks', 'Marketing collateral & decks'],
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=1200&auto=format&fit=crop&q=80',
    icon: Sparkles,
    accentColor: '#f5a623',
  },
  {
    id: 4,
    title: 'Digital marketing & AI solutions',
    subtitle: 'Autonomous Growth & Visibility',
    tags: ['AI Agents', 'SEO Optimization', 'Growth Campaigns', 'Automation'],
    description:
      'Harness next-generation generative AI workflows, automated customer pipelines, and data-driven organic marketing to expand customer acquisition and multiply retention.',
    features: ['Custom LLM integration & RAG', 'Technical SEO & Core Web Vitals', 'Automated CRM & outreach flows', 'Performance analytics dashboards'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80',
    icon: Rocket,
    accentColor: '#f5a623',
  },
];

export default function ServicesPinned({ onOpenContact }) {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section id="services" className="py-24 sm:py-36 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto relative">
      <RevealOnScroll animation="fade-up" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#f5a623] mb-3 block font-semibold">
            [ 03 // CORE_EXPERTISE ]
          </span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-[#050814] dark:text-white tracking-tight">
            Services & Expertise
          </h2>
        </div>
        <p className="max-w-md text-sm sm:text-base text-[#475569] dark:text-[#94a3b8] leading-relaxed font-sans">
          Full-spectrum creative engineering: from bespoke visual identity and UI/UX systems to robust cloud infrastructure and autonomous AI agents.
        </p>
      </RevealOnScroll>

      {/* Main Interactive Split Layout (Pinned on Desktop) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
        {/* Sticky Visual Showcase on Left */}
        <RevealOnScroll animation="fade-up" delay={100} className="lg:col-span-5 xl:col-span-5 lg:sticky lg:top-28">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-white dark:bg-[#0d172e] border border-black/10 dark:border-[#f5a623]/25 p-4 sm:p-6 shadow-2xl shadow-black/5 dark:shadow-black/60 group transition-all duration-500">
            {/* Visual Preview Image */}
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden mb-6 bg-[#050814]">
              <img
                src={activeService.image}
                alt={activeService.title}
                key={activeService.id}
                className="w-full h-full object-cover transition-all duration-700 animate-fadeIn group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-transparent to-[#050814]/40" />
              
              {/* Floating Pill on image */}
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#081021]/80 backdrop-blur-md border border-[#f5a623]/30 text-xs font-mono text-[#f5a623]">
                INDEX // 0{activeService.id} OF 04
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-mono text-[#f5a623] uppercase tracking-wider mb-1 font-semibold">
                  {activeService.subtitle}
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  {activeService.title}
                </h3>
              </div>
            </div>

            {/* Feature Checkpoints */}
            <div className="space-y-3 px-2">
              <p className="text-xs font-mono uppercase tracking-widest text-[#64748b] dark:text-[#94a3b8] mb-3 font-semibold">
                SYSTEM DELIVERABLES
              </p>
              {activeService.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-[#050814] dark:text-[#f8fafc] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#f5a623] flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-black/10 dark:border-[#f5a623]/15 flex items-center justify-between">
              <span className="text-xs font-mono text-[#64748b] dark:text-[#94a3b8]">SPEC // INQUIRY</span>
              <button
                onClick={onOpenContact}
                className="btn-anim group/sbtn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f5a623] hover:bg-[#ffbe3b] text-[#050814] font-bold font-mono text-xs uppercase tracking-wider transition-colors shadow-md shadow-[#f5a623]/20"
              >
                <span className="btn-caption">
                  <span className="btn-anim__block">Inquire Service</span>
                  <span className="btn-anim__block">Inquire Service</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </RevealOnScroll>

        {/* Services List on Right */}
        <div className="lg:col-span-7 xl:col-span-7 space-y-6">
          {services.map((srv, srvIdx) => {
            const isSelected = activeService.id === srv.id;
            const Icon = srv.icon;

            return (
              <RevealOnScroll
                key={srv.id}
                animation="fade-up"
                delay={srvIdx * 120}
              >
                <div
                  onClick={() => setActiveService(srv)}
                  className={`cursor-pointer p-8 sm:p-10 rounded-[2rem] transition-all duration-400 border ${
                    isSelected
                      ? 'bg-white dark:bg-[#0d172e] border-[#f5a623] shadow-xl shadow-black/5 dark:shadow-[#f5a623]/10 translate-x-3 scale-[1.01]'
                      : 'bg-white/80 dark:bg-[#081021]/60 border-black/10 dark:border-[#f5a623]/15 hover:border-[#f5a623]/50 hover:bg-white dark:hover:bg-[#0d172e]/50 hover:translate-x-1'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                          isSelected
                            ? 'bg-[#f5a623] text-[#050814] dark:bg-[#f5a623]/20 dark:border-[#f5a623] dark:text-[#f5a623] rotate-6 scale-110 shadow-lg'
                            : 'bg-neutral-100 dark:bg-[#111f3d] border-black/10 dark:border-[#f5a623]/20 text-neutral-600 dark:text-[#94a3b8]'
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-[#f5a623]">0{srv.id} // SYS</span>
                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#050814] dark:text-white tracking-tight">
                          {srv.title}
                        </h3>
                      </div>
                    </div>
                    <div
                      className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-[#f5a623] border-[#f5a623] text-[#050814] rotate-45 scale-110'
                          : 'border-black/10 dark:border-[#f5a623]/20 text-neutral-400 dark:text-[#94a3b8]'
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {srv.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#f5a623]/10 border border-[#f5a623]/20 text-[#f5a623]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm sm:text-base text-[#475569] dark:text-[#94a3b8] leading-relaxed">
                    {srv.description}
                  </p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
