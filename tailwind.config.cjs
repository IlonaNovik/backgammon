/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ["'Inconsolata', monospace", 'sans-serif'],
    },
    extend: {
      colors: {
        blue: '#2d3f48',
        'blue-light': '#34838b',
        'blue-dark': '#1f2c32',
        red: '#c5312a',
        'red-light': '#e86753',
        'red-dark': '#761d19',
        yellow: '#f5dcb2',
        'yellow-dark': '#c4b08e',
        active: '#f9cb40',
      },
    },
  },
  plugins: [],
};
