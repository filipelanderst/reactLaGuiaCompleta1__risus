const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['index.html', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      sky: colors.sky,
      yellow: colors.yellow,
      blue: colors.blue,
      red: colors.red,
      sky: colors.sky,
      cyan: colors.cyan,
      rose: colors.rose,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
