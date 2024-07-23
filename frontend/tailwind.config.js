/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'saira': ['Saira', 'sans-serif'],
        'Logo': ['Saira Stencil One', 'sans-serif'],
      }
    },
  },
  plugins: [],
}