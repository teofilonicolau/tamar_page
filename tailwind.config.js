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
          navy: '#0E0024', // Now serves as the main dark background (Purple Dark)
          gold: '#8C45FF', // Now serves as Primary Purple
          white: '#FFFFFF',
          gray: '#E5E5E5',
          dark: '#020005', // Deepest Purple Black
          goldhover: '#7A35EB', // Hover state for primary purple
          secondary: '#B894FF', // Light Violet
          accent: '#180036', // Secondary Dark
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
