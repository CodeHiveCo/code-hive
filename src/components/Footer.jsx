import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';

export default function Footer({ onOpenContact }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer id="contact" className="pt-20 pb-12 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto border-t border-black/5 dark:border-[#f5a623]/15 relative">
      {/* Monumental Typographic Wordmark: CODEHIVE */}
      <RevealOnScroll animation="fade-up">
        <div className="w-full overflow-hidden select-none mb-16 sm:mb-24">
          <div className="font-display font-extrabold text-[14vw] leading-none tracking-tighter text-neutral-900/[0.04] dark:text-[#f5a623]/[0.05] hover:text-neutral-900/[0.08] dark:hover:text-[#f5a623]/[0.10] transition-colors duration-500 text-center uppercase whitespace-nowrap">
            CODEHIVE
          </div>
        </div>
      </RevealOnScroll>

      {/* 3-Column Card Architecture */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Column 1: Navigation Links Card */}
        <RevealOnScroll animation="fade-up" delay={100} className="lg:col-span-4 h-full">
          <div className="h-full p-8 sm:p-10 rounded-[2.5rem] bg-white dark:bg-[#0d172e] border border-black/10 dark:border-[#f5a623]/20 flex flex-col justify-between shadow-xl shadow-black/5 dark:shadow-2xl">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl overflow-hidden bg-[#050814] border border-black/10 dark:border-[#f5a623]/40 flex items-center justify-center shadow-sm">
                  <img
                    src="/code-hive.jpeg"
                    alt="CodeHive Official Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-display text-lg font-bold tracking-tight text-neutral-900 dark:text-white">
                  codehive<span className="text-[#d48806] dark:text-[#f5a623]">.</span>
                </span>
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#d48806] dark:text-[#f5a623] mb-4 block font-semibold">
                [ DIRECTORY // 01 ]
              </span>
              <ul className="space-y-4">
                {[
                  { name: 'Home', href: '#' },
                  { name: 'Selected Works', href: '#works' },
                  { name: 'Agency Services', href: '#services' },
                  { name: 'Manifesto & About', href: '#about' },
                  { name: 'Culture & Team', href: '#culture' },
                  { name: 'Recent Insights', href: '#insights' },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="font-display text-2xl font-medium text-neutral-800 dark:text-[#f4f4f5] hover:text-[#d48806] dark:hover:text-[#f5a623] transition-colors flex items-center justify-between group"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#d48806] dark:text-[#f5a623]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-10 mt-10 border-t border-black/5 dark:border-white/5 flex items-center gap-6 text-xs font-mono text-neutral-500 dark:text-[#94a3b8]">
              <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">PRIVACY_POLICY</a>
              <span>•</span>
              <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">TERMS_OF_SERVICE</a>
            </div>
          </div>
        </RevealOnScroll>

        {/* Column 2: Direct Contact & Newsletter Card */}
        <RevealOnScroll animation="fade-up" delay={200} className="lg:col-span-4 h-full">
          <div className="space-y-6 flex flex-col justify-between h-full">
            <div className="p-8 rounded-[2rem] bg-white dark:bg-[#0d172e] border border-black/10 dark:border-[#f5a623]/20 shadow-xl shadow-black/5 dark:shadow-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#d48806] dark:text-[#f5a623] mb-2 block font-semibold">
                [ COMMS // DIRECT_INQUIRIES ]
              </span>
              <a
                href="mailto:hello@codehive.studio"
                className="font-display text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-white hover:text-[#d48806] dark:hover:text-[#f5a623] transition-colors block"
              >
                hello@codehive.studio
              </a>
            </div>

            <div className="p-8 rounded-[2rem] bg-white dark:bg-[#0d172e] border border-black/10 dark:border-[#f5a623]/20 shadow-xl shadow-black/5 dark:shadow-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#d48806] dark:text-[#f5a623] mb-2 block font-semibold">
                [ COMMS // OFFICE_STATION ]
              </span>
              <a
                href="tel:+15558394483"
                className="font-display text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-white hover:text-[#d48806] dark:hover:text-[#f5a623] transition-colors block"
              >
                +1 (555) 839-4483
              </a>
            </div>

            {/* Newsletter Box */}
            <div className="p-8 rounded-[2rem] bg-white dark:bg-[#0d172e] border border-black/10 dark:border-[#f5a623]/20 shadow-xl shadow-black/5 dark:shadow-2xl flex-grow flex flex-col justify-between">
              <div>
                <p className="font-display text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                  Subscribe to telemetry:
                </p>
                <p className="text-xs text-neutral-600 dark:text-[#94a3b8] mb-4 font-sans">
                  Curated thoughts on modern software architecture and AI engineering once a month.
                </p>
              </div>

              {subscribed ? (
                <div className="p-4 rounded-xl bg-[#f5a623]/20 border border-[#f5a623] text-neutral-900 dark:text-[#f5a623] text-sm flex items-center gap-2 font-medium">
                  <Check className="w-4 h-4" /> Subscription confirmed.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="relative flex items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    required
                    className="w-full bg-neutral-100 dark:bg-[#050814] border border-black/10 dark:border-[#f5a623]/30 rounded-full px-5 py-3.5 pr-14 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-[#94a3b8] focus:outline-none focus:border-[#f5a623] transition-colors"
                  />
                  <button
                    type="submit"
                    aria-label="Submit Email"
                    className="absolute right-2 w-10 h-10 rounded-full bg-neutral-900 text-white dark:bg-[#f5a623] dark:text-[#050814] hover:bg-[#f5a623] hover:text-[#050814] dark:hover:bg-[#ffbe3b] flex items-center justify-center transition-colors shadow-md"
                  >
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </RevealOnScroll>

        {/* Column 3: Ecosystem Card */}
        <RevealOnScroll animation="fade-up" delay={300} className="lg:col-span-4 h-full">
          <div className="h-full p-8 sm:p-10 rounded-[2.5rem] bg-white dark:bg-[#0d172e] border border-black/10 dark:border-[#f5a623]/20 flex flex-col justify-between shadow-xl shadow-black/5 dark:shadow-2xl">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#d48806] dark:text-[#f5a623] mb-6 block font-semibold">
                [ ECOSYSTEM // 03 ]
              </span>
              <ul className="space-y-4">
                {[
                  { name: 'GitHub', href: 'https://github.com' },
                  { name: 'Dribbble', href: 'https://dribbble.com' },
                  { name: 'Behance', href: 'https://behance.net' },
                  { name: 'X / Twitter', href: 'https://twitter.com' },
                  { name: 'LinkedIn', href: 'https://linkedin.com' },
                  { name: 'Figma Community', href: 'https://figma.com' },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-display text-xl font-medium text-neutral-800 dark:text-[#f4f4f5] hover:text-[#d48806] dark:hover:text-[#f5a623] transition-colors flex items-center justify-between group"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#d48806] dark:text-[#f5a623]" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-10 mt-10 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs font-mono text-neutral-500 dark:text-[#94a3b8]">
              <span>CODEHIVE_STUDIO © 2026</span>
              <span className="text-neutral-900 dark:text-[#f5a623] font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f5a623] animate-ping" />
                SYSTEMS_OPTIMAL
              </span>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </footer>
  );
}
