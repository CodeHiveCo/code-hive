/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'Outfit', 'system-ui', 'sans-serif'],
        display: ['Syne', '"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brand: {
          bg: '#050814',
          card: '#0d172e',
          cardLighter: '#111f3d',
          yellow: '#f5a623',
          yellowHover: '#ffbe3b',
          yellowDark: '#d48806',
          navy: '#081021',
          navyBorder: 'rgba(245, 166, 35, 0.15)',
          borderHover: 'rgba(245, 166, 35, 0.5)',
          text: '#f8fafc',
          muted: '#94a3b8',
        }
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.5rem',
        '5xl': '3.5rem',
      },
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        'spin-reverse': 'spin-reverse 22s linear infinite',
        'spin-badge': 'spin 12s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 32s linear infinite',
        'marquee-reverse': 'marquee-reverse 32s linear infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'shimmer': 'shimmer 4s linear infinite',
        'glow-pulse': 'glowPulse 5s ease-in-out infinite',
        'aurora-1': 'auroraFloat1 20s ease-in-out infinite alternate',
        'aurora-2': 'auroraFloat2 25s ease-in-out infinite alternate',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.12)' },
        },
        auroraFloat1: {
          '0%': { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
          '50%': { transform: 'translate(80px, 40px) rotate(180deg) scale(1.15)' },
          '100%': { transform: 'translate(-40px, 80px) rotate(360deg) scale(0.95)' },
        },
        auroraFloat2: {
          '0%': { transform: 'translate(0px, 0px) rotate(0deg) scale(1)' },
          '50%': { transform: 'translate(-90px, -50px) rotate(-180deg) scale(1.2)' },
          '100%': { transform: 'translate(50px, -60px) rotate(-360deg) scale(0.9)' },
        },
      }
    },
  },
  plugins: [],
}
