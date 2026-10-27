import { useState, useEffect, useRef } from 'react';
import {
  Code2,
  Palette,
  Sparkles,
  Rocket,
  TrendingUp,
  Share2,
  Cpu,
  Compass,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

const services = [
  {
    id: 1,
    title: 'Web Development',
    subtitle: 'Modern & Responsive Digital Presence',
    tags: ['Websites', 'Web Apps', 'Corporate', 'Responsive'],
    description:
      'We design and develop modern, responsive websites that bring brands to life and establish a strong digital presence. From corporate websites to custom web applications, we build functional, visually engaging digital experiences tailored to business goals.',
    features: [
      'Tailored corporate websites & portals',
      'Custom high-performance web applications',
      'Fluid responsiveness across all screen sizes',
      'SEO-ready architecture & fast load speeds',
    ],
    image: 'https://images.unsplash.com/photo-1573166613605-3b4dfcbf1268?w=1200&auto=format&fit=crop&q=80',
    icon: Code2,
  },
  {
    id: 2,
    title: 'UI/UX Design',
    subtitle: 'Human-Centered Digital Experiences',
    tags: ['Interface Design', 'UX Planning', 'Wireframing', 'Prototyping'],
    description:
      'We create intuitive and visually compelling digital experiences centred on the people who use them. Through interface design, user experience planning, wireframing, and prototyping, we make digital products easier to navigate, understand, and use.',
    features: [
      'Human-centric interface design (UI)',
      'User journey mapping & UX research',
      'Interactive wireframes & rapid prototyping',
      'Consistent design systems & guidelines',
    ],
    image: 'https://images.unsplash.com/photo-1573496358007-6fe62e3d9010?w=1200&auto=format&fit=crop&q=80',
    icon: Palette,
  },
  {
    id: 3,
    title: 'Digital Product Development',
    subtitle: 'Strategic Planning to Technical Execution',
    tags: ['Product Strategy', 'MVP Development', 'Scalable Systems', 'Execution'],
    description:
      'We transform ideas into functional digital products through strategic planning, thoughtful design, and technical execution. Our focus is on developing solutions that address real-world needs, deliver value, and support future growth.',
    features: [
      'End-to-end product scoping & roadmapping',
      'Robust & scalable system architectures',
      'Validation against real-world customer needs',
      'Sustainable foundation for long-term growth',
    ],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&auto=format&fit=crop&q=80',
    icon: Sparkles,
  },
  {
    id: 4,
    title: 'Website Redesign & Optimization',
    subtitle: 'Modernization, Usability & Speed',
    tags: ['Site Redesign', 'Navigation', 'Optimization', 'Conversion'],
    description:
      'We improve existing websites through modern design, enhanced navigation, responsive layouts, and performance optimization. We help businesses create more effective online experiences that communicate their value and encourage visitors to take action.',
    features: [
      'Visual overhaul & modern aesthetic elevation',
      'Streamlined navigation & information hierarchy',
      'Speed, Core Web Vitals & asset optimization',
      'Conversion-focused layout enhancements',
    ],
    image: 'https://images.unsplash.com/photo-1521790609145-bacea5940bde?w=1200&auto=format&fit=crop&q=80',
    icon: Rocket,
  },
  {
    id: 5,
    title: 'Google AdSense & Website Monetization',
    subtitle: 'Sustainable Advertising Revenue',
    tags: ['AdSense Readiness', 'Policy Guidance', 'Ad Placement', 'RPM Growth'],
    description:
      'We help website owners explore and establish sustainable advertising revenue opportunities through Google AdSense. From monetization readiness and implementation to policy compliance guidance, ad placement optimization, and performance analysis, we help clients make better use of their website traffic and advertising potential.',
    features: [
      'Monetization eligibility & readiness assessment',
      'Google publisher policy compliance guidance',
      'High-impact, non-intrusive ad unit placement',
      'Traffic quality, RPM & revenue performance analysis',
    ],
    image: 'https://images.unsplash.com/photo-1573496773905-f5b17e717f05?w=1200&auto=format&fit=crop&q=80',
    icon: TrendingUp,
  },
  {
    id: 6,
    title: 'Social Media Management',
    subtitle: 'Consistent, Engaging Presence Across Channels',
    tags: ['Instagram', 'LinkedIn', 'TikTok & X', 'Content Strategy'],
    description:
      "We help businesses build a consistent and engaging presence across social media platforms, including Instagram, Facebook, TikTok, LinkedIn, X, and other relevant channels. Our services can include content planning, post scheduling, creative direction, audience engagement, account management, and performance reporting, tailored to each brand's goals and audience.",
    features: [
      'Multi-platform content planning & scheduling',
      'Bespoke creative direction & brand aesthetics',
      'Community management & authentic audience engagement',
      'Insightful performance & growth reporting',
    ],
    image: 'https://images.unsplash.com/photo-1573164574230-db1d5e960238?w=1200&auto=format&fit=crop&q=80',
    icon: Share2,
  },
  {
    id: 7,
    title: 'Custom Digital Solutions',
    subtitle: 'Tailored Tools, Automations & Systems',
    tags: ['Custom Tools', 'Process Automation', 'Efficiency', 'Systems'],
    description:
      'We develop tailored digital tools, features, and systems designed around specific business challenges. By understanding how a business operates, we identify opportunities to simplify processes, improve efficiency, and deliver practical technology-driven solutions.',
    features: [
      'Tailored internal portals, tools & dashboards',
      'Business process automation & workflow simplification',
      'Seamless API & third-party integrations',
      'Practical solutions engineered around your workflows',
    ],
    image: 'https://images.unsplash.com/photo-1573164713712-03790a178651?w=1200&auto=format&fit=crop&q=80',
    icon: Cpu,
  },
  {
    id: 8,
    title: 'Digital Strategy & Consulting',
    subtitle: 'Clarity, Requirements & Informed Growth',
    tags: ['Consulting', 'Scoping', 'Audits', 'Growth Strategy'],
    description:
      'We help businesses identify digital opportunities, define project requirements, and make informed decisions about their online presence. By aligning business objectives with technology, design, and digital growth strategies, we help clients move forward with greater clarity and purpose.',
    features: [
      'Digital opportunity identification & technical audits',
      'Clear project requirement definitions & scoping',
      'Alignment of business goals with modern technology',
      'Actionable roadmaps for long-term digital growth',
    ],
    image: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?w=1200&auto=format&fit=crop&q=80',
    icon: Compass,
  },
];

export default function ServicesPinned({ onOpenContact }) {
  const [activeService, setActiveService] = useState(services[0]);
  const cardRefs = useRef([]);

  // Smooth scrollspy using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-index'));
            if (!isNaN(idx) && services[idx]) {
              setActiveService(services[idx]);
            }
          }
        });
      },
      {
        rootMargin: '-10% 0px -30% 0px',
        threshold: 0.1,
      }
    );

    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 sm:py-36 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto relative">
      <RevealOnScroll animation="fade-up" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24">
        <div className="max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-[#f5a623] mb-3 block font-semibold">
            [ 03 // SERVICES & EXPERTISE ]
          </span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-[#050814] dark:text-white tracking-tight">
            Services & Expertise
          </h2>
        </div>
        <div className="max-w-xl text-sm sm:text-base text-[#475569] dark:text-[#94a3b8] leading-relaxed font-sans space-y-2">
          <p>
            We combine technology, design, and strategic thinking to create digital solutions that solve real problems and drive business growth. From building engaging websites to crafting intuitive user experiences, our expertise helps businesses turn ideas into functional, scalable, and impactful digital products.
          </p>
          <p className="font-medium text-neutral-900 dark:text-white">
            Have a project in mind?{' '}
            <button
              type="button"
              onClick={onOpenContact}
              className="text-[#f5a623] hover:underline font-semibold inline-flex items-center gap-1 cursor-pointer"
            >
              Let's build something meaningful together <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </p>
        </div>
      </RevealOnScroll>

      {/* Main Interactive Split Layout (Pinned on Desktop) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 relative">
        {/* Sticky Visual Showcase on Left (Stretches track of grid, pinned at top-24) */}
        <div className="lg:col-span-5 xl:col-span-5 lg:sticky lg:top-24 xl:top-28 self-start z-20">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-white dark:bg-[#0d172e] border border-black/10 dark:border-[#f5a623]/25 p-5 sm:p-6 shadow-2xl shadow-black/5 dark:shadow-black/60 transition-colors duration-300">
            {/* Stepper Tabs Bar for 8 services */}
              <div className="grid grid-cols-8 gap-1.5 mb-4">
                {services.map((srv) => (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => setActiveService(srv)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      srv.id === activeService.id
                        ? 'bg-[#f5a623] shadow-sm shadow-[#f5a623]/50'
                        : 'bg-black/10 dark:bg-white/10 hover:bg-[#f5a623]/40'
                    }`}
                    title={`View 0${srv.id}. ${srv.title}`}
                  />
                ))}
              </div>

              {/* Visual Preview Image with Butter-Smooth Crossfade - optimized height so entire card fits comfortably on all screens */}
              <div className="relative h-60 sm:h-64 lg:h-64 xl:h-72 w-full rounded-2xl overflow-hidden mb-5 bg-[#050814]">
                {services.map((srv) => (
                  <img
                    key={srv.id}
                    src={srv.image}
                    alt={srv.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
                      srv.id === activeService.id ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-transparent to-[#050814]/40 z-20 pointer-events-none" />

                {/* Floating Index Pill */}
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#081021]/80 backdrop-blur-md border border-[#f5a623]/30 text-xs font-mono text-[#f5a623] z-20">
                  INDEX // 0{activeService.id} OF 08
                </div>

                {/* Service Title & Subtitle */}
                <div className="absolute bottom-4 left-4 right-4 text-white z-20">
                  <p className="text-xs font-mono text-[#f5a623] uppercase tracking-wider mb-1 font-semibold transition-opacity duration-300">
                    {activeService.subtitle}
                  </p>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white transition-opacity duration-300">
                    0{activeService.id}. {activeService.title}
                  </h3>
                </div>
              </div>

              {/* Feature Checkpoints */}
              <div className="space-y-2.5 px-1 sm:px-2">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[11px] font-mono uppercase tracking-widest text-[#64748b] dark:text-[#94a3b8] font-semibold">
                    CORE DELIVERABLES
                  </p>
                  <span className="text-[10px] font-mono text-[#f5a623] tracking-widest">
                    SERVICE // 0{activeService.id}
                  </span>
                </div>
                {activeService.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-xs sm:text-sm text-[#050814] dark:text-[#f8fafc] font-medium transition-colors duration-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#f5a623] flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Inquire Action */}
              <div className="mt-6 pt-5 border-t border-black/10 dark:border-[#f5a623]/15 flex items-center justify-between">
                <span className="text-xs font-mono text-[#64748b] dark:text-[#94a3b8]">START WITH HiveMind</span>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="btn-anim group/sbtn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f5a623] hover:bg-[#ffbe3b] text-[#050814] font-bold font-mono text-xs uppercase tracking-wider transition-colors shadow-md shadow-[#f5a623]/20 cursor-pointer"
                >
                  <span className="btn-caption">
                    <span className="btn-anim__block">Inquire Service</span>
                    <span className="btn-anim__block">Inquire Service</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        {/* Services List on Right (All 8 Official Services) */}
        <div className="lg:col-span-7 xl:col-span-7 space-y-6">
          {services.map((srv, srvIdx) => {
            const isSelected = activeService.id === srv.id;
            const Icon = srv.icon;

            return (
              <div
                key={srv.id}
                data-index={srvIdx}
                ref={(el) => (cardRefs.current[srvIdx] = el)}
                onClick={() => setActiveService(srv)}
                className={`cursor-pointer p-8 sm:p-10 rounded-[2rem] transition-all duration-300 border relative overflow-hidden ${
                  isSelected
                    ? 'bg-white dark:bg-[#0d172e] border-[#f5a623] shadow-lg shadow-black/5 dark:shadow-[#f5a623]/10'
                    : 'bg-white/70 dark:bg-[#081021]/60 border-black/10 dark:border-[#f5a623]/15 hover:border-[#f5a623]/40 hover:bg-white dark:hover:bg-[#0d172e]/50'
                }`}
              >
                {/* Active indicator accent bar */}
                <div
                  className={`absolute top-0 left-0 bottom-0 w-1.5 bg-[#f5a623] transition-opacity duration-300 ${
                    isSelected ? 'opacity-100' : 'opacity-0'
                  }`}
                />

                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-colors duration-300 ${
                        isSelected
                          ? 'bg-[#f5a623] text-[#050814] border-[#f5a623]'
                          : 'bg-neutral-100 dark:bg-[#111f3d] border-black/10 dark:border-[#f5a623]/20 text-neutral-600 dark:text-[#94a3b8]'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-[#f5a623] font-semibold">0{srv.id} // EXPERTISE</span>
                        {isSelected && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#f5a623]/20 text-[#f5a623] font-bold tracking-wider">
                            ACTIVE
                          </span>
                        )}
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#050814] dark:text-white tracking-tight">
                        0{srv.id}. {srv.title}
                      </h3>
                    </div>
                  </div>
                  <div
                    className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#f5a623] border-[#f5a623] text-[#050814] rotate-45 shadow-sm'
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
                      className={`px-3 py-1 rounded-full text-xs font-mono font-medium transition-colors duration-300 ${
                        isSelected
                          ? 'bg-[#f5a623]/15 border border-[#f5a623]/40 text-[#f5a623]'
                          : 'bg-black/5 dark:bg-[#f5a623]/10 border border-black/5 dark:border-[#f5a623]/20 text-neutral-600 dark:text-[#f5a623]'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-sm sm:text-base text-[#475569] dark:text-[#94a3b8] leading-relaxed">
                  {srv.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
