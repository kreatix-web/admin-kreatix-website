/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#1E1E24',
          surface: '#26262C',
          card: '#2E2E35',
          border: '#4A4A55',
        },
        accent: {
          DEFAULT: '#CDEA68',
          dim: '#CDEA68B3',
        },
        muted: '#A0A0AC',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-scale': 'fadeInScale 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};
