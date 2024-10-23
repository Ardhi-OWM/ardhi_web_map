/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector', // Enables dark mode based on a class, allowing you to toggle it manually
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ourGreen: '#2ecc40',
      },
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'space-mono': ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
