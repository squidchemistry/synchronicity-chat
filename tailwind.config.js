/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],

  extend: {
  animation: {
    'fade-in': 'fadeIn 1s ease-out forwards',
    'fade-in-delay': 'fadeIn 1s ease-out 0.5s forwards',
    'fade-in-delay-more': 'fadeIn 1s ease-out 1s forwards',
  },
  keyframes: {
    fadeIn: {
      '0%': { opacity: 0, transform: 'translateY(20px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
    },
  },
}
}
