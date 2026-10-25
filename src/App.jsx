import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Manifesto from './components/Manifesto';
import ServicesPinned from './components/ServicesPinned';
import CaseStudies from './components/CaseStudies';
import TeamMarquee from './components/TeamMarquee';
import Insights from './components/Insights';
import PromoCta from './components/PromoCta';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import CursorGlow from './components/CursorGlow';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('HiveMind-theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return true; // Default to dark mode
    }
    return true;
  });

  const [isContactOpen, setIsContactOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      root.setAttribute('data-theme', 'dark');
      root.style.colorScheme = 'dark';
      localStorage.setItem('HiveMind-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      root.setAttribute('data-theme', 'light');
      root.style.colorScheme = 'light';
      localStorage.setItem('HiveMind-theme', 'light');
    }
  }, [isDarkMode]);

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  return (
    <div className="relative min-h-screen transition-colors duration-500 bg-[#f3f6fc] dark:bg-[#050814] text-[#050814] dark:text-[#f8fafc] overflow-x-hidden selection:bg-[#f5a623] selection:text-[#050814] bg-cyber-grid">
      {/* Interactive Cursor Follower & Ambient Spotlight */}
      <CursorGlow />

      {/* Living Ambient Aurora Floating Gradients (Cyber Dark Blue & Dark Yellow) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-70 dark:opacity-35">
        <div className="absolute -top-[10%] -left-[10%] w-[600px] sm:w-[850px] h-[600px] sm:h-[850px] rounded-full bg-gradient-to-tr from-[#f5a623]/12 to-[#0d172e]/80 blur-[140px] animate-aurora-1" />
        <div className="absolute top-[45%] -right-[15%] w-[500px] sm:w-[750px] h-[500px] sm:h-[750px] rounded-full bg-gradient-to-bl from-[#081021] to-[#f5a623]/15 blur-[150px] animate-aurora-2" />
        <div className="absolute -bottom-[10%] left-[20%] w-[550px] sm:w-[800px] h-[550px] sm:h-[800px] rounded-full bg-gradient-to-r from-[#f5a623]/10 to-[#101f3d] blur-[160px] animate-aurora-1" />
      </div>

      {/* Navigation Header */}
      <Header
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
        onOpenContact={handleOpenContact}
      />

      {/* Hero Section */}
      <main>
        <Hero onOpenContact={handleOpenContact} />

        {/* Primary Marquee Ticker */}
        <Marquee />

        {/* Agency Manifesto & Stats */}
        <Manifesto onOpenContact={handleOpenContact} />

        {/* Pinned Services Section */}
        <ServicesPinned onOpenContact={handleOpenContact} />

        {/* Secondary Industry Marquee Ticker (Reverse) */}
        <Marquee text="Understanding Your Industry" reverse={true} />

        {/* Selected Works / Case Studies with Rotating Circular Badge */}
        <CaseStudies onOpenContact={handleOpenContact} />

        {/* Culture & Team Showcase Scroller */}
        <TeamMarquee onOpenContact={handleOpenContact} />

        {/* Recent Insights & Editorial Articles */}
        <Insights />

        {/* Grand Promo CTA Banner */}
        <PromoCta onOpenContact={handleOpenContact} />
      </main>

      {/* Monumental Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Interactive Contact / Inquiry Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={handleCloseContact}
      />
    </div>
  );
}

export default App;
