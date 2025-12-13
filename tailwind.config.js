/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0A1F44',
          gold: '#C9A94A',
          white: '#FFFFFF',
          gray: '#E5E5E5',
          dark: '#051024', // Darker shade for backgrounds
          goldhover: '#B0933F', // Hover state for gold
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Bebas Neue"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
