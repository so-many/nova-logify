/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/js/**/*.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  important: '.logify-scoped',
  mode: 'jit',
  darkMode: 'class',
};
