const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-heading)', ...fontFamily.serif],  // Playfair Display
        body: ['var(--font-body)', ...fontFamily.sans],       // Inter
        mono: ['var(--font-mono)', ...fontFamily.mono],
      },
      fontSize: {
        display: ['clamp(28px, 4.5vw, 54px)', { lineHeight: '1.1', letterSpacing: '0.04em' }],
        h1: ['clamp(22px, 4vw, 40px)', { lineHeight: '1.2', letterSpacing: '0.04em' }],
        h2: ['clamp(20px, 2.5vw, 28px)', { lineHeight: '1.3', letterSpacing: '0.03em' }],
        h3: ['22px', { lineHeight: '1.4' }],
        body: ['16px', { lineHeight: '1.75' }],
        meta: ['13px', { lineHeight: '1.5' }],
        small: ['12px', { lineHeight: '1.5' }],
      },
      maxWidth: {
        content: '1200px',
        prose: '720px',
      },
      spacing: {
        section: '80px',
      },
    },
  },
  plugins: [],
}
