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
        sans: ['"Funnel Sans"', 'Outfit', 'system-ui', 'sans-serif'],
        display: ['"Funnel Display"', 'Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          bg: '#111215',
          card: '#181a20',
          cardLighter: '#22252e',
          lime: '#ddf160',
          limeHover: '#c8df46',
          violet: '#9f8be7',
          violetHover: '#8a74db',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(221, 241, 96, 0.3)',
          text: '#f4f4f6',
          muted: '#8e8e99',
        }
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.5rem',
        '5xl': '3.5rem',
      },
      animation: {
        'spin-slow': 'spin 22s linear infinite',
        'spin-reverse': 'spin-reverse 26s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 28s linear infinite',
        'marquee-reverse': 'marquee-reverse 28s linear infinite',
      },
      keyframes: {
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}
