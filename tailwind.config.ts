import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#060606',
        surface: '#111010',
        surfaceAlt: '#181515',
        line: 'rgba(255,255,255,0.08)',
        crimson: '#b3202d',
        ember: '#d63a3a',
        mist: '#f4efe6',
      },
      fontFamily: {
        sans: ['Yu Gothic UI', 'Segoe UI', 'sans-serif'],
        display: ['Yu Mincho', 'Hiragino Mincho ProN', 'MS PMincho', 'serif'],
      },
      boxShadow: {
        card: '0 20px 50px rgba(0, 0, 0, 0.28)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
      },
      letterSpacing: {
        heroic: '0.14em',
      },
      animation: {
        fadeUp: 'fadeUp 0.8s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
