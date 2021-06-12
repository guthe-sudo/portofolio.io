const colors = require('tailwindcss/colors');
const variants = require('tailwindcss/stubs/defaultConfig.stub');
const tailwindcss = require("tailwindcss");

module.exports = {
  purge: [
    './resources/**/*.blade.php',
     './resources/**/*.js',
     './resources/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      cyan: colors.cyan,
      rose: colors.rose,
      lime: colors.lime,
      blue: colors.blue,
      indigo: colors.indigo,
      warmGray: colors.warmGray,
      green: colors.green,
      amber: colors.amber,
    },
    extend: {},
  },
  variants: {
    textColor: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus'],
    extend: {},
  },
  plugins: [],
}
