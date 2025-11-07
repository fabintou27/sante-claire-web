/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#A8D8C7',
        'brand-blue': '#BEE3F8',
        'brand-white': '#FFFFFF',
        'brand-dark': '#2D3748',
        'brand-gray': '#718096',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}