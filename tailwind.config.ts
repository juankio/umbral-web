import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './app/**/*.{vue,js,ts}',
    './error.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow Condensed"', 'sans-serif'],
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      colors: {
        umbral: {
          black: '#000000',
          dark: '#1C1C1C',
          charcoal: '#141414',
          card: '#151515',
          footer: '#0B0B0B',
          gray: '#5E5E5E',
          muted: '#A3A3A3',
          border: '#D9D9D9',
          borderDark: '#2E2E2E',
          light: '#FAFAFA',
          paper: '#F5F5F5',
          offwhite: '#F5F5F5',
          terracotta: '#F36059',
          green: '#02A843',
          purple: '#834384',
          iceblue: '#A0BDD7',
          amber: '#F39800',
          gold: '#FDCF2C',
          pink: '#DD8DA1'
        }
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      },
      opacity: {
        45: '0.45',
      }
    }
  }
}
