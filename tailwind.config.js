/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  content: [
    // Include Shopify template files here
    './templates/**/*.liquid',
    './sections/**/*.liquid',
    './snippets/**/*.liquid',
    './assets/**/*.js',
    './assets/**/*.liquid',
    './layouts/**/*.liquid',
  ],
  theme: {
    extend: {
      colors: {
        'shopify-primary': '#00A9E0', // Custom Shopify primary color
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      spacing: {
        '128': '32rem', // Add custom spacing values
      },
    },
  },
  plugins: [],
};
