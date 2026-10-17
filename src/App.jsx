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
      const savedTheme = localStorage.getItem('codehive-theme');
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
      localStorage.setItem('codehive-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      root.setAttribute('data-theme', 'light');
      root.style.colorScheme = 'light';
      localStorage.setItem('codehive-theme', 'light');
    }
  }, [isDarkMode]);

  const handleToggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  return (
    <div className="min-h-screen transition-colors duration-500 bg-[#f8f6f5] dark:bg-[#111215] text-[#121316] dark:text-[#f4f4f5]">
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
