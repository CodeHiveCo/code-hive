import { useEffect, useRef, useState } from 'react';

export default function RevealOnScroll({
  children,
  animation = 'fade-up', // 'fade-up', 'fade-in', 'scale-up', 'slide-left', 'slide-right'
  delay = 0,
  className = '',
}) {
  // Always render visible on mobile (< 768px) or coarse pointers to prevent any hiding/covering glitches
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768 || window.matchMedia('(pointer: coarse)').matches) {
        return true;
      }
    }
    return false;
  });

  const domRef = useRef(null);

  useEffect(() => {
    // If already visible (e.g. mobile or already revealed), skip observer
    if (isVisible) return;

    // Check if element is already in viewport on mount
    if (domRef.current) {
      const rect = domRef.current.getBoundingClientRect();
      if (rect.top <= (window.innerHeight || document.documentElement.clientHeight) + 100) {
        setIsVisible(true);
        return;
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      },
      {
        threshold: 0,
        rootMargin: '120px 0px 120px 0px',
      }
    );

    const currentTarget = domRef.current;
    if (currentTarget) observer.observe(currentTarget);

    // Bulletproof safety fallback: ensure content is NEVER trapped in opacity-0
    const safetyTimer = setTimeout(() => {
      setIsVisible(true);
    }, 800);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
      clearTimeout(safetyTimer);
    };
  }, [isVisible]);

  // Animation styles only applied on desktop (md:) so mobile content is ALWAYS 100% visible and unshifted
  const getAnimationStyles = () => {
    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return 'opacity-100 md:opacity-0 md:translate-y-8';
        case 'scale-up':
          return 'opacity-100 md:opacity-0 md:scale-95 md:translate-y-6';
        case 'slide-left':
          return 'opacity-100 md:opacity-0 md:-translate-x-8';
        case 'slide-right':
          return 'opacity-100 md:opacity-0 md:translate-x-8';
        case 'fade-in':
        default:
          return 'opacity-100 md:opacity-0';
      }
    }

    return 'opacity-100 translate-y-0 translate-x-0 scale-100';
  };

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${getAnimationStyles()} ${className}`}
    >
      {children}
    </div>
  );
}
