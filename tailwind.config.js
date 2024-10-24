/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: 'selector',  // Enables dark mode based on a class, allowing you to toggle it manually

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'purple-green': '0 4px 10px rgba(128, 0, 128, 0.5), 0 6px 25px rgba(16, 185, 129, 0.5)',  // Purple and green shadow
      },
      colors: {
        ourGreen: '#2ecc40',
        1: "#AC6AFF",
        2: "#FFC876",
        3: "#FF776F",
        4: "#7ADB78",
        5: "#858DFF",
        6: "#FF98E2",
      },
      stroke: {
        1: "#26242C",
      },
      n: {
        1: "#FFFFFF",
        2: "#CAC6DD",
        3: "#ADA8C3",
        4: "#757185",
        5: "#3F3A52",
        6: "#252134",
        7: "#15131D",
        8: "#0E0C15",
        9: "#474060",
        10: "#43435C",
        11: "#1B1B2E",
        12: "#2E2A41",
        13: "#6C7275",
      },
    },
    fontFamily: {
      'space-grotesk': ['Space Grotesk', 'sans-serif'],
      'space-mono': ['Space Mono', 'monospace'],
      sans: ["var(--font-sora)", ...fontFamily.sans],
      code: "var(--font-code)",
      grotesk: "var(--font-grotesk)",
      'source-code': ['Source Code Pro', 'monospace'],
      'sora': ['Sora', 'sans-serif'],
    },
    letterSpacing: {
      tagline: ".15em",
    },
    opacity: {
      15: ".15",
    },
    zIndex: {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
    },
    borderWidth: {
      DEFAULT: "0.0625rem",
    },
  },
  corePlugins: {
    letterSpacing: true,  // Ensure that letter-spacing utilities are enabled
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        "@layer components": {
          ".container": {
            "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
              {},
          },
          ".h1": {
            "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
              {},
          },
          ".h2": {
            "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
              {},
          },
          ".h3": {
            "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
          },
          ".h4": {
            "@apply text-[2rem] leading-normal": {},
          },
          ".h5": {
            "@apply text-2xl leading-normal": {},
          },
          ".h6": {
            "@apply font-semibold text-lg leading-8": {},
          },
          ".body-1": {
            "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
              {},
          },
          ".body-2": {
            "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
          },
          ".body-3": {
            "@apply font-thin text-[0.875rem] leading-3 md:text-base": {},
          },
          ".caption": {
            "@apply text-sm": {},
          },
          ".tagline": {
            "@apply font-grotesk font-light text-xs tracking-tagline uppercase":
              {},
          },
          ".quote": {
            "@apply font-code text-lg leading-normal": {},
          },
          ".button": {
            "@apply font-code text-xs font-bold uppercase tracking-wider": {},  // Use inside @layer
            letterSpacing: ".1em",
          },
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};
