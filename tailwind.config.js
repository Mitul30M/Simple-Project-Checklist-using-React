/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT"); // Ensure this import is correct according to your setup

module.exports = withMT({
  darkMode: ['class', '[data-mode="dark"]'],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        tahiti: {
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          light: '#67e8f9',
          DEFAULT: '#06b6d4',
          dark: '#0e7490',
        },
      },
    },
  },
  plugins: [],
});
