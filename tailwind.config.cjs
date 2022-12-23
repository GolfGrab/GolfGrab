/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--montserrat-font)', ...fontFamily.sans],

      },
    },
  },
  daisyui: {
    themes: [
      {
        black: {
          "primary": "#f3f4f6",
          "secondary": "#e5e7eb",
          "accent": "#d1d5db",
          "neutral": "#FFFFFF",
          "base-100": "#0D0D0D",
          "base-200": "#1A1919",
          "base-300": "#262626",
          "info": "#bae6fd",
          "success": "#DCEDC1",
          "warning": "#FFD3B6",
          "error": "#FFAAA5",
        },
        white: {
          "primary": "#0D0D0D",
          "secondary": "#1A1919",
          "accent": "#262626",
          "neutral": "#000000",
          "base-100": "#f3f4f6",
          "base-200": "#e5e7eb",
          "base-300": "#d1d5db",
          "info": "#bae6fd",
          "success": "#DCEDC1",
          "warning": "#FFD3B6",
          "error": "#FFAAA5",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
