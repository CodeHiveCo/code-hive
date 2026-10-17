import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

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
    <footer id="contact" className="pt-20 pb-12 px-6 sm:px-10 lg:px-16 max-w-[1720px] mx-auto border-t border-black/5 dark:border-white/5 relative">
      {/* Rayo Monumental Typographic Wordmark: CODEHIVE (Adaptive light/dark) */}
      <div className="w-full overflow-hidden select-none mb-16 sm:mb-24">
        <div className="font-display font-extrabold text-[14vw] leading-none tracking-tighter text-neutral-900/[0.05] dark:text-white/[0.04] hover:text-neutral-900/[0.09] dark:hover:text-white/[0.08] transition-colors duration-500 text-center uppercase whitespace-nowrap">
          CODEHIVE
        </div>
      </div>

      {/* 3-Column Card Architecture */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Column 1: Navigation Links Card */}
        <div className="lg:col-span-4 p-8 sm:p-10 rounded-[2.5rem] bg-white dark:bg-[#181a20] border border-black/10 dark:border-white/10 flex flex-col justify-between shadow-xl shadow-black/5 dark:shadow-2xl">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl overflow-hidden bg-[#070b19] border border-black/10 dark:border-white/10 flex items-center justify-center shadow-sm">
                <img
                  src="/code-hive.jpeg"
                  alt="CodeHive Official Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-neutral-900 dark:text-white">
                codehive<span className="text-[#ddf160]">.</span>
              </span>
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-[#8e8e99] mb-4 block font-semibold">
              DIRECTORY
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
                    className="font-display text-2xl font-medium text-neutral-800 dark:text-[#f4f4f5] hover:text-[#9f8be7] dark:hover:text-[#ddf160] transition-colors flex items-center justify-between group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#9f8be7] dark:text-[#ddf160]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-10 mt-10 border-t border-black/5 dark:border-white/5 flex items-center gap-6 text-xs text-neutral-500 dark:text-[#8e8e99]">
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

        {/* Column 2: Direct Contact & Newsletter Card */}
        <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
          <div className="p-8 rounded-[2rem] bg-white dark:bg-[#181a20] border border-black/10 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-[#8e8e99] mb-2 block font-semibold">
              DIRECT INQUIRIES
            </span>
            <a
              href="mailto:hello@codehive.studio"
              className="font-display text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-white hover:text-[#9f8be7] dark:hover:text-[#ddf160] transition-colors block"
            >
              hello@codehive.studio
            </a>
          </div>

          <div className="p-8 rounded-[2rem] bg-white dark:bg-[#181a20] border border-black/10 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-[#8e8e99] mb-2 block font-semibold">
              OFFICE CALLS
            </span>
            <a
              href="tel:+15558394483"
              className="font-display text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-white hover:text-[#9f8be7] dark:hover:text-[#ddf160] transition-colors block"
            >
              +1 (555) 839-4483
            </a>
          </div>

          {/* Newsletter Box */}
          <div className="p-8 rounded-[2rem] bg-white dark:bg-[#181a20] border border-black/10 dark:border-white/10 shadow-xl shadow-black/5 dark:shadow-2xl flex-grow flex flex-col justify-between">
            <div>
              <p className="font-display text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                Subscribe to our insights:
              </p>
              <p className="text-xs text-neutral-600 dark:text-[#8e8e99] mb-4">
                Curated thoughts on modern software architecture and AI engineering once a month.
              </p>
            </div>

            {subscribed ? (
              <div className="p-4 rounded-xl bg-[#ddf160]/20 border border-[#ddf160] text-neutral-900 dark:text-[#ddf160] text-sm flex items-center gap-2 font-medium">
                <Check className="w-4 h-4" /> Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email"
                  required
                  className="w-full bg-neutral-100 dark:bg-[#111215] border border-black/10 dark:border-white/10 rounded-full px-5 py-3.5 pr-14 text-sm text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-[#8e8e99] focus:outline-none focus:border-[#9f8be7] dark:focus:border-[#ddf160] transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Submit Email"
                  className="absolute right-2 w-10 h-10 rounded-full bg-neutral-900 text-white dark:bg-[#ddf160] dark:text-[#111215] hover:bg-[#ddf160] hover:text-[#111215] dark:hover:bg-[#c8df46] flex items-center justify-center transition-colors shadow-md"
                >
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Column 3: Ecosystem Card */}
        <div className="lg:col-span-4 p-8 sm:p-10 rounded-[2.5rem] bg-white dark:bg-[#181a20] border border-black/10 dark:border-white/10 flex flex-col justify-between shadow-xl shadow-black/5 dark:shadow-2xl">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-[#8e8e99] mb-6 block font-semibold">
              ECOSYSTEM
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
                    className="font-display text-xl font-medium text-neutral-800 dark:text-[#f4f4f5] hover:text-[#9f8be7] transition-colors flex items-center justify-between group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#9f8be7]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-10 mt-10 border-t border-black/5 dark:border-white/5 flex items-center justify-between text-xs text-neutral-500 dark:text-[#8e8e99]">
            <span>CodeHive Studio © 2026</span>
            <span className="text-neutral-900 dark:text-[#ddf160] font-medium">All systems optimal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
