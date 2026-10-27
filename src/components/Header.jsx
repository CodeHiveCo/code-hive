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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#f3f6fc]/90 dark:bg-[#050814]/90 backdrop-blur-xl border-b border-black/10 dark:border-[#f5a623]/15 shadow-xl shadow-black/5 dark:shadow-black/60'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-[1720px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
          {/* Brand Logo with User's code-hive.jpeg */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative w-11 h-11 rounded-2xl overflow-hidden bg-[#070b19] border border-black/10 dark:border-[#f5a623]/30 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-[#f5a623] shadow-md dark:shadow-lg dark:shadow-[#050814]">
              <img
                src="/code-hive.jpeg"
                alt="HiveMind Official Logo"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#f5a623] animate-ping" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#f5a623]" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-xl font-bold tracking-tight text-[#050814] dark:text-white flex items-center gap-1 transition-colors">
                HiveMind<span className="text-[#f5a623]">.</span>
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#64748b] dark:text-[#94a3b8] font-semibold">
                SYSTEMS // STUDIO
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Futuristic HUD Pill */}
          <nav className="hidden lg:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-[#0c162e]/90 border border-black/10 dark:border-[#f5a623]/20 backdrop-blur-md shadow-sm">
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
                className="btn-anim px-4 py-2 text-xs font-mono font-medium text-neutral-600 dark:text-[#94a3b8] hover:text-neutral-950 dark:hover:text-[#f5a623] transition-colors rounded-full hover:bg-black/5 dark:hover:bg-[#122040]"
              >
                <span className="btn-caption">
                  <span className="btn-anim__block">{link.name}</span>
                  <span className="btn-anim__block text-[#f5a623] font-semibold">{link.name}</span>
                </span>
              </a>
            ))}
          </nav>

          {/* Action Controls & Say Hello Button */}
          <div className="flex items-center gap-3.5">
            {/* Theme Toggle Button */}
            <button
              type="button"
              id="theme-toggle-btn"
              onClick={onToggleTheme}
              aria-label="Toggle Theme"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-[#0d172e] hover:bg-neutral-100 dark:hover:bg-[#122040] border border-black/10 dark:border-[#f5a623]/30 text-neutral-800 dark:text-[#f5a623] hover:text-[#f5a623] transition-all duration-300 hover:rotate-45 shadow-sm cursor-pointer"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-[#f5a623]" />
              ) : (
                <Moon className="w-4 h-4 text-neutral-800" />
              )}
            </button>

            {/* Sliding Say Hello Button */}
            <button
              onClick={onOpenContact}
              className="btn-anim group hidden sm:inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#f5a623] hover:bg-[#ffbe3b] text-[#050814] border border-[#f5a623] transition-all duration-300 font-bold text-xs font-mono uppercase tracking-wider shadow-lg shadow-[#f5a623]/25"
            >
              <span className="btn-caption">
                <span className="btn-anim__block">Initiate Contact</span>
                <span className="btn-anim__block">Initiate Contact</span>
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-11 h-11 rounded-full flex lg:hidden items-center justify-center bg-white dark:bg-[#0d172e] border border-black/10 dark:border-[#f5a623]/30 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-[#122040] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X className="w-5 h-5 text-[#f5a623]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile / Mega Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#f3f6fc]/98 dark:bg-[#050814]/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 lg:hidden animate-fadeIn">
          <div className="max-w-md mx-auto w-full flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5a623]/15 border border-[#f5a623]/30 text-[#050814] dark:text-[#f5a623] text-xs font-mono font-medium w-fit">
                <Sparkles className="w-3.5 h-3.5" /> [ SYS // ARCHITECTURE_STUDIO ]
              </div>

              {/* Mobile theme toggle */}
              <button
                type="button"
                onClick={onToggleTheme}
                className="px-3 py-1.5 rounded-full bg-white dark:bg-[#0d172e] border border-black/10 dark:border-[#f5a623]/30 text-xs font-mono font-medium flex items-center gap-2 text-neutral-800 dark:text-white"
              >
                {isDarkMode ? <Sun className="w-3.5 h-3.5 text-[#f5a623]" /> : <Moon className="w-3.5 h-3.5" />}
                <span>{isDarkMode ? 'Light' : 'Dark'}</span>
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
                  className="font-display text-3xl font-semibold text-neutral-900 dark:text-[#f8fafc] hover:text-[#f5a623] dark:hover:text-[#f5a623] transition-colors flex items-center justify-between group"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-6 h-6 opacity-40 group-hover:opacity-100 group-hover:text-[#f5a623] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
              ))}
            </nav>

            <button
              onClick={() => {
                setIsMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-4 rounded-full bg-[#f5a623] text-[#050814] font-bold text-sm font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#f5a623]/25 hover:bg-[#ffbe3b] transition-all"
            >
              <span>Initiate Project</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>

          <div className="max-w-md mx-auto w-full pt-6 border-t border-black/10 dark:border-[#f5a623]/20 flex items-center justify-between text-xs font-mono text-[#64748b] dark:text-[#94a3b8]">
            <p>HiveMind © 2026. All rights reserved.</p>
            <p className="text-[#050814] dark:text-[#f5a623] font-medium">support.HiveMind@gmail.com</p>
          </div>
        </div>
      )}
    </>
  );
}
