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
        slideInFromLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInFromRight: {
          '0%': { opacity: '0', transform: 'translateX(50%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        blink: 'blink 1s steps(1, start) infinite',
        slideInFromLeft: 'slideInFromLeft 0.5s ease-out',
        slideInFromRight: 'slideInFromRight 0.5s ease-out',
      },
    },
  },
  plugins: [],
};
