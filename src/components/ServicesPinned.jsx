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
    accentColor: '#9f8be7',
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
    accentColor: '#ddf160',
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
    accentColor: '#ddf160',
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
    accentColor: '#9f8be7',
  },
];

export default function ServicesPinned({ onOpenContact }) {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section id="services" className="py-24 sm:py-36 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto relative">
      <RevealOnScroll animation="fade-up" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-[#9f8be7] dark:text-[#ddf160] mb-3 block font-semibold">
            CORE CAPABILITIES
          </span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-semibold text-neutral-900 dark:text-white tracking-tight">
            Services & Expertise
          </h2>
        </div>
        <p className="max-w-md text-sm sm:text-base text-neutral-600 dark:text-[#a1a1aa] leading-relaxed">
          Full-spectrum creative engineering: from bespoke visual identity and UI/UX design to robust cloud systems and AI agents.
        </p>
      </RevealOnScroll>

      {/* Main Interactive Split Layout (Pinned on Desktop) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
        {/* Sticky Visual Showcase on Left */}
        <RevealOnScroll animation="fade-up" delay={100} className="lg:col-span-5 xl:col-span-5 lg:sticky lg:top-28">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-white dark:bg-[#181a20] border border-black/10 dark:border-white/10 p-4 sm:p-6 shadow-2xl shadow-black/5 dark:shadow-black/50 group transition-all duration-500">
            {/* Visual Preview Image */}
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden mb-6 bg-black">
              <img
                src={activeService.image}
                alt={activeService.title}
                key={activeService.id}
                className="w-full h-full object-cover transition-all duration-700 animate-fadeIn group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
              
              {/* Floating Pill on image */}
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-xs font-mono text-[#ddf160]">
                0{activeService.id} / 04
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs font-mono text-[#9f8be7] uppercase tracking-wider mb-1">
                  {activeService.subtitle}
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  {activeService.title}
                </h3>
              </div>
            </div>

            {/* Feature Checkpoints */}
            <div className="space-y-3 px-2">
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-[#8e8e99] mb-3">
                Key Deliverables
              </p>
              {activeService.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-neutral-800 dark:text-[#d4d4d8] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#9f8be7] dark:text-[#ddf160] flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
              <span className="text-xs text-neutral-500 dark:text-[#8e8e99]">Ready to discuss scope?</span>
              <button
                onClick={onOpenContact}
                className="btn-anim group/sbtn inline-flex items-center gap-2 px-5 py-2 rounded-full bg-neutral-900 text-white dark:bg-[#ddf160] dark:text-[#111215] font-semibold text-xs hover:bg-[#ddf160] hover:text-[#111215] dark:hover:bg-[#c8df46] transition-colors"
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
                      ? 'bg-white dark:bg-[#181a20] border-[#ddf160] shadow-xl shadow-black/5 dark:shadow-black/50 translate-x-3 scale-[1.01]'
                      : 'bg-white/70 dark:bg-[#14151a]/60 border-black/5 dark:border-white/5 hover:border-black/15 dark:hover:border-white/15 hover:bg-white dark:hover:bg-[#181a20]/40 hover:translate-x-1'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 ${
                          isSelected
                            ? 'bg-[#ddf160] text-neutral-950 dark:bg-[#ddf160]/10 dark:border-[#ddf160]/30 dark:text-[#ddf160] rotate-6 scale-110 shadow-lg'
                            : 'bg-neutral-100 dark:bg-white/5 border-black/10 dark:border-white/10 text-neutral-600 dark:text-[#8e8e99]'
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-neutral-400 dark:text-[#8e8e99]">0{srv.id}</span>
                        <h3 className="font-display text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-white tracking-tight">
                          {srv.title}
                        </h3>
                      </div>
                    </div>
                    <div
                      className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-neutral-900 dark:bg-[#ddf160] border-neutral-900 dark:border-[#ddf160] text-white dark:text-[#111215] rotate-45 scale-110'
                          : 'border-black/10 dark:border-white/10 text-neutral-400 dark:text-[#8e8e99]'
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
                        className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 dark:bg-white/5 border border-black/5 dark:border-white/10 text-neutral-700 dark:text-[#a1a1aa]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm sm:text-base text-neutral-600 dark:text-[#a1a1aa] leading-relaxed">
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
