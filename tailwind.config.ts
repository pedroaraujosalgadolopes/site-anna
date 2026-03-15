import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E8',
        'warm-white': '#FDFAF4',
        gold: '#B8964A',
        'gold-light': '#D4B06A',
        charcoal: '#2C2C2C',
        mid: '#6B6B6B',
        'light-border': '#E0D8C8',
        'section-bg': '#F9F5EE',
        'footer-dark': '#1a1814',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'],
        jost: ['var(--font-jost)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
