/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  // The brand stylesheet (src/index.css) owns the reset and base typography.
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        bg: '#F5F1E8',
        paper: '#FBF8F1',
        cream: '#FBF6E9',
        ink: { DEFAULT: '#1F3354', 2: '#2C4570' },
        muted: '#6C7A8F',
        line: { DEFAULT: '#E3DCC8', 2: '#EFE8D5' },
        brand: { DEFAULT: '#F26B2C', dark: '#D9551A', warm: '#F18650', deep: '#C24E15' },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Times New Roman"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: { wrap: '1360px' },
    },
  },
  plugins: [],
};
