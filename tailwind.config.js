/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' if you prefer system preference
  theme: {
    extend: {
      colors: {
        'black-a': '#1a1a1a', // A dark gray-black color for backgrounds/borders
        'black-b': '#2d2d2d', // A slightly lighter dark gray for backgrounds/borders
      }
    },
  },
  plugins: [],
}