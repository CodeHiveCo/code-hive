import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Sun, Moon, Sparkles, Phone, Mail } from 'lucide-react';

export default function Header({ isDarkMode, onToggleTheme, onOpenContact }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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

  const navLinks = [
    { name: 'Works', href: '#works', num: '01' },
    { name: 'Services', href: '#services', num: '02' },
    { name: 'About', href: '#about', num: '03' },
    { name: 'Culture', href: '#culture', num: '04' },
    { name: 'Insights', href: '#insights', num: '05' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-3 sm:py-3.5 bg-[#f3f6fc]/90 dark:bg-[#050814]/90 backdrop-blur-xl border-b border-black/10 dark:border-[#f5a623]/15 shadow-xl shadow-black/5 dark:shadow-black/60'
            : 'py-4 sm:py-6 bg-transparent'
        }`}
      >
        <div className="max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-between">
          {/* Brand Logo with User's code-hive.jpeg */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl overflow-hidden bg-[#070b19] border border-black/10 dark:border-[#f5a623]/30 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:border-[#f5a623] shadow-md dark:shadow-lg dark:shadow-[#050814] flex-shrink-0">
              <img
                src="/code-hive.jpeg"
                alt="HiveMind Official Logo"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#f5a623] animate-ping" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#f5a623]" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#050814] dark:text-white flex items-center gap-1 transition-colors">
                HiveMind<span className="text-[#f5a623]">.</span>
              </span>
              <span className="hidden sm:block font-mono text-[9px] uppercase tracking-[0.25em] text-[#64748b] dark:text-[#94a3b8] font-semibold">
                SYSTEMS // STUDIO
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Futuristic HUD Pill (lg: 1024px+) */}
          <nav className="hidden lg:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-[#0c162e]/90 border border-black/10 dark:border-[#f5a623]/20 backdrop-blur-md shadow-sm">
            {navLinks.map((link) => (
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

          {/* Action Controls & Contact Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
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

            {/* Desktop Initiate Contact CTA Button (Hidden on tablet/mobile to prevent clutter) */}
            <button
              onClick={onOpenContact}
              className="hidden lg:inline-flex btn-anim group items-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-[#f5a623] hover:bg-[#ffbe3b] text-[#050814] border border-[#f5a623] transition-all duration-300 font-bold text-xs font-mono uppercase tracking-wider shadow-lg shadow-[#f5a623]/25 cursor-pointer"
            >
              <span className="btn-caption">
                <span className="btn-anim__block">Initiate Contact</span>
                <span className="btn-anim__block">Initiate Contact</span>
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile / Tablet Hamburger Toggle (Visible below lg: 1024px) */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full flex lg:hidden items-center justify-center bg-white dark:bg-[#0d172e] border border-black/10 dark:border-[#f5a623]/30 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-[#122040] transition-colors cursor-pointer shadow-sm"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5 text-[#f5a623]" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-[#f3f6fc] dark:bg-[#050814] flex flex-col justify-between overflow-y-auto overscroll-contain animate-fadeIn">
          {/* Top Bar inside Mobile Drawer */}
          <div className="px-5 sm:px-8 py-5 border-b border-black/10 dark:border-[#f5a623]/20 flex items-center justify-between sticky top-0 bg-[#f3f6fc]/95 dark:bg-[#050814]/95 backdrop-blur-xl z-10">
            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-[#070b19] border border-black/10 dark:border-[#f5a623]/30 flex items-center justify-center shadow-md">
                <img
                  src="/code-hive.jpeg"
                  alt="HiveMind Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-[#050814] dark:text-white">
                HiveMind<span className="text-[#f5a623]">.</span>
              </span>
            </a>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onToggleTheme}
                aria-label="Toggle Theme"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-[#0d172e] border border-black/10 dark:border-[#f5a623]/30 text-neutral-800 dark:text-[#f5a623] cursor-pointer"
              >
                {isDarkMode ? <Sun className="w-4 h-4 text-[#f5a623]" /> : <Moon className="w-4 h-4" />}
              </button>

              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white dark:bg-[#0d172e] border border-black/10 dark:border-[#f5a623]/30 text-neutral-900 dark:text-[#f5a623] hover:rotate-90 transition-transform cursor-pointer"
                aria-label="Close Navigation Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Drawer Content */}
          <div className="px-6 sm:px-10 py-8 max-w-lg mx-auto w-full flex flex-col gap-6 flex-grow">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5a623]/15 border border-[#f5a623]/30 text-[#050814] dark:text-[#f5a623] text-xs font-mono font-medium w-fit">
              <Sparkles className="w-3.5 h-3.5" /> [ SYS // DIRECTORY ]
            </div>

            <nav className="flex flex-col gap-3 my-2">
              {[
                { name: 'Featured Works', href: '#works', num: '01' },
                { name: 'Services & Expertise', href: '#services', num: '02' },
                { name: 'Manifesto & About', href: '#about', num: '03' },
                { name: 'Team & Culture', href: '#culture', num: '04' },
                { name: 'Insights & Blog', href: '#insights', num: '05' },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex items-center justify-between py-2 text-xl sm:text-2xl font-display font-semibold text-neutral-900 dark:text-[#f8fafc] hover:text-[#f5a623] dark:hover:text-[#f5a623] transition-colors border-b border-black/5 dark:border-white/5"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#f5a623] opacity-60 group-hover:opacity-100">
                      {link.num}
                    </span>
                    <span>{link.name}</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:text-[#f5a623] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
              ))}
            </nav>

            <button
              onClick={() => {
                setIsMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3.5 rounded-full bg-[#f5a623] text-[#050814] font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#f5a623]/25 hover:bg-[#ffbe3b] transition-all cursor-pointer mt-2"
            >
              <span>Initiate Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Drawer Footer */}
          <div className="px-6 sm:px-10 py-6 border-t border-black/10 dark:border-[#f5a623]/20 bg-black/[0.02] dark:bg-black/30">
            <div className="max-w-lg mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-[#64748b] dark:text-[#94a3b8]">
              <div className="flex flex-col gap-1">
                <a href="mailto:support.HiveMind@gmail.com" className="hover:text-[#f5a623] flex items-center gap-1.5 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#f5a623]" /> support.HiveMind@gmail.com
                </a>
                <a href="tel:09130435885" className="hover:text-[#f5a623] flex items-center gap-1.5 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#f5a623]" /> 09130435885
                </a>
              </div>
              <p className="text-[11px] opacity-75">HiveMind © 2026</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
