import { useEffect, useState, useRef } from 'react';

export default function CursorGlow() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [trailPos, setTrailPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const requestRef = useRef(null);
  const targetPos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      setMousePos({ x: e.clientX, y: e.clientY });

      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive element safely
      const target = e.target;
      let interactiveEl = null;
      let projectCard = null;

      try {
        if (target && typeof target.closest === 'function') {
          interactiveEl = target.closest('a, button, [role="button"], input, textarea, .btn-anim, .cursor-pointer');
          projectCard = target.closest('[data-cursor="view"], [class*="group/card"], article');
        }
      } catch (err) {
        // Fallback safely if DOM query fails
      }

      if (interactiveEl) {
        setIsHovering(true);
        setCursorText('');
      } else if (projectCard) {
        setIsHovering(true);
        setCursorText('VIEW');
      } else {
        setIsHovering(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    // Smooth animation loop for the trailing ring
    const animateTrail = () => {
      // Lerp smoothing factor
      const speed = 0.18;
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * speed;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * speed;

      setTrailPos({
        x: Math.round(currentPos.current.x * 10) / 10,
        y: Math.round(currentPos.current.y * 10) / 10,
      });

      requestRef.current = requestAnimationFrame(animateTrail);
    };

    requestRef.current = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* 1. Large Ambient Spotlight that softly illuminates behind the mouse */}
      <div
        className="fixed pointer-events-none z-10 transition-opacity duration-300"
        style={{
          left: `${trailPos.x}px`,
          top: `${trailPos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(245,166,35,0.08)_0%,rgba(8,16,33,0.06)_40%,transparent_70%)] blur-[50px]" />
      </div>

      {/* 2. Trailing Smooth Interactive Ring / Magnetic Bubble */}
      <div
        className={`fixed pointer-events-none z-50 flex items-center justify-center transition-[width,height,background-color,border-color,transform] duration-200 ease-out ${
          isHovering
            ? cursorText
              ? 'w-16 h-16 bg-[#f5a623] text-[#050814] font-bold text-[10px] tracking-wider rounded-full shadow-lg shadow-[#f5a623]/40 scale-100 font-mono'
              : 'w-12 h-12 border-2 border-[#f5a623] bg-[#f5a623]/15 rounded-full scale-100 backdrop-blur-[2px]'
            : 'w-8 h-8 border border-[#f5a623]/60 rounded-full scale-90'
        }`}
        style={{
          left: `${trailPos.x}px`,
          top: `${trailPos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {cursorText && (
          <span className="font-mono uppercase font-bold tracking-widest animate-pulse">{cursorText}</span>
        )}
      </div>

      {/* 3. Snappy Instant Center Dot */}
      <div
        className={`fixed pointer-events-none z-50 w-2 h-2 rounded-full bg-[#f5a623] transition-opacity duration-150 ${
          isHovering ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
}
