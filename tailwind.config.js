/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'niyantran-blue': '#0B3D91',
        'niyantran-deep-blue': '#001F54',
        'niyantran-orange': '#FF6B35',
        'niyantran-gold': '#FFB627',
        'niyantran-light-blue': '#E8F1F8',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
