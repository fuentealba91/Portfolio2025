/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'grid-pattern': "url('@assets/grid-pattern.webp')",
        'spotlight': "url('@assets/spotlight.webp')",
      },
    },
  },
  plugins: [],
};
