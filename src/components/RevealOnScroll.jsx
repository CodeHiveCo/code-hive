import { useEffect, useRef, useState } from 'react';

export default function RevealOnScroll({
  children,
  animation = 'fade-up', // 'fade-up', 'fade-in', 'scale-up', 'slide-left', 'slide-right'
  delay = 0,
  className = '',
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once revealed, keep it visible
          if (domRef.current) observer.unobserve(domRef.current);
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentTarget = domRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, []);

  const getAnimationStyles = () => {
    const baseTransition = `transition: all 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms;`;

    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return 'opacity-0 translate-y-12';
        case 'scale-up':
          return 'opacity-0 scale-90 translate-y-8';
        case 'slide-left':
          return 'opacity-0 -translate-x-12';
        case 'slide-right':
          return 'opacity-0 translate-x-12';
        case 'fade-in':
        default:
          return 'opacity-0';
      }
    }

    return 'opacity-100 translate-y-0 translate-x-0 scale-100';
  };

  return (
    <div
      ref={domRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${getAnimationStyles()} ${className}`}
    >
      {children}
    </div>
  );
}
