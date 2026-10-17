import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Sun, Moon, Sparkles } from 'lucide-react';

export default function Header({ isDarkMode, onToggleTheme, onOpenContact }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#f8f6f5]/90 dark:bg-[#111215]/90 backdrop-blur-xl border-b border-black/5 dark:border-white/5 shadow-xl shadow-black/5 dark:shadow-black/40'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          {/* Brand Logo with User's code-hive.jpeg */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 rounded-2xl overflow-hidden bg-[#070b19] border border-black/10 dark:border-white/10 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-[#ddf160] shadow-md dark:shadow-lg">
              <img
                src="/code-hive.jpeg"
                alt="CodeHive Official Logo"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#ddf160] animate-ping" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#ddf160]" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-xl font-bold tracking-tight text-neutral-900 dark:text-white flex items-center gap-1 transition-colors">
                codehive<span className="text-[#ddf160]">.</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 dark:text-[#8e8e99] font-medium">
                digital agency
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 dark:bg-[#181a20]/70 border border-black/5 dark:border-white/5 backdrop-blur-md shadow-sm">
            {[
              { name: 'Works', href: '#works' },
              { name: 'Services', href: '#services' },
              { name: 'About', href: '#about' },
              { name: 'Culture', href: '#culture' },
              { name: 'Insights', href: '#insights' },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="btn-anim px-4 py-2 text-sm font-medium text-neutral-600 dark:text-[#a1a1aa] hover:text-neutral-950 dark:hover:text-white transition-colors rounded-full hover:bg-black/5 dark:hover:bg-white/5"
              >
                <span className="btn-caption">
                  <span className="btn-anim__block">{link.name}</span>
                  <span className="btn-anim__block text-[#9f8be7] dark:text-[#ddf160] font-semibold">{link.name}</span>
                </span>
              </a>
            ))}
          </nav>

          {/* Action Controls & Say Hello Button */}
          <div className="flex items-center gap-3.5">
            {/* Rock-solid Theme Toggle Button */}
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label="Toggle Theme"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-[#181a20] hover:bg-neutral-100 dark:hover:bg-[#20232b] border border-black/10 dark:border-white/10 text-neutral-800 dark:text-[#ddf160] hover:text-neutral-950 transition-all duration-300 hover:rotate-45 shadow-sm cursor-pointer"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-[#ddf160]" />
              ) : (
                <Moon className="w-4 h-4 text-neutral-800" />
              )}
            </button>

            {/* Rayo Signature Sliding Say Hello Button */}
            <button
              onClick={onOpenContact}
              className="btn-anim group hidden sm:inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-neutral-900 dark:bg-[#181a20] hover:bg-[#ddf160] dark:hover:bg-[#ddf160] text-white hover:text-[#111215] dark:hover:text-[#111215] border border-black/10 dark:border-white/15 hover:border-[#ddf160] transition-all duration-300 font-medium text-sm shadow-md"
            >
              <span className="btn-caption">
                <span className="btn-anim__block">Say Hello</span>
                <span className="btn-anim__block font-semibold">Say Hello</span>
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#ddf160] group-hover:text-[#111215]" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-11 h-11 rounded-full flex lg:hidden items-center justify-center bg-white dark:bg-white/5 border border-black/10 dark:border-white/10 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X className="w-5 h-5 text-[#9f8be7] dark:text-[#ddf160]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile / Mega Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#f8f6f5]/98 dark:bg-[#111215]/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 lg:hidden animate-fadeIn">
          <div className="max-w-md mx-auto w-full flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ddf160]/20 dark:bg-[#ddf160]/10 border border-[#ddf160]/30 text-neutral-900 dark:text-[#ddf160] text-xs font-medium w-fit">
                <Sparkles className="w-3.5 h-3.5" /> Creative engineering studio
              </div>

              {/* Mobile theme toggle */}
              <button
                type="button"
                onClick={onToggleTheme}
                className="px-3 py-1.5 rounded-full bg-white dark:bg-[#181a20] border border-black/10 dark:border-white/10 text-xs font-medium flex items-center gap-2 text-neutral-800 dark:text-white"
              >
                {isDarkMode ? <Sun className="w-3.5 h-3.5 text-[#ddf160]" /> : <Moon className="w-3.5 h-3.5" />}
                <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>

            <nav className="flex flex-col gap-3 my-4">
              {[
                { name: 'Home', href: '#' },
                { name: 'Featured Works', href: '#works' },
                { name: 'Agency Services', href: '#services' },
                { name: 'Manifesto & About', href: '#about' },
                { name: 'Team & Culture', href: '#culture' },
                { name: 'Insights & Blog', href: '#insights' },
              ].map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-display text-3xl font-medium text-neutral-900 dark:text-[#f4f4f5] hover:text-[#9f8be7] dark:hover:text-[#ddf160] transition-colors flex items-center justify-between group"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-6 h-6 opacity-40 group-hover:opacity-100 group-hover:text-[#ddf160] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
              ))}
            </nav>

            <button
              onClick={() => {
                setIsMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-4 rounded-full bg-[#ddf160] text-[#111215] font-semibold text-base flex items-center justify-center gap-2 shadow-xl shadow-[#ddf160]/20 hover:bg-[#c8df46] transition-all"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>

          <div className="max-w-md mx-auto w-full pt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-xs text-neutral-500 dark:text-[#8e8e99]">
            <p>CodeHive © 2026. All rights reserved.</p>
            <p className="text-neutral-900 dark:text-[#ddf160] font-medium">hello@codehive.studio</p>
          </div>
        </div>
      )}
    </>
  );
}
