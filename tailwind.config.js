const { addIconSelectors } = require('@iconify/tailwind')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'selector',
  theme: {
    extend: {},
  },
  plugins: [
    addIconSelectors(['mdi', 'mdi-light', 'logos','simple-icons']),
  ],
}
