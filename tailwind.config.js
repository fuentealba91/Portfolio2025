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
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        blink: 'blink 1s steps(1, start) infinite',
      },
    },
  },
  plugins: [],
};
