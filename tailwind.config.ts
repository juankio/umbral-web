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
          black: '#070707',
          dark: '#1C1C1C',
          charcoal: '#141414',
          card: '#151515',
          footer: '#0B0B0B',
          gray: '#5E5E5E',
          muted: '#A3A3A3',
          border: '#D9D9D9',
          borderDark: '#2E2E2E',
          light: '#FAFAFA',
          paper: '#F6F6F6',
          offwhite: '#EDEDED',
          terracotta: '#E16A5F',
          green: '#13650F',
          purple: '#7B4680',
          iceblue: '#A5BCD5',
          amber: '#E69D37',
          gold: '#F6D152'
        }
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.02em',
      },
      opacity: {
        45: '0.45',
      }
    }
  }
}
