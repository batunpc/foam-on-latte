// tailwind.config.js
/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        fredoka: ['Fredoka', 'sans-serif'],
      },
      colors: {
        primary: '#fff3e0',
      },
    },
  },
  plugins: [],
};
