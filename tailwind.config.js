// tailwind.config.js

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#887BB0',
        secondary: '#FFF4BD',
      },
    },
  },
  plugins: [],
};
