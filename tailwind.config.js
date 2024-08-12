const colors = require("tailwindcss/colors");

const makePrimaryColor =
  (l) =>
  ({ opacityValue }) => {
    return (
      `hsl(var(--nextra-primary-hue) var(--nextra-primary-saturation) ${l}%` +
      (opacityValue ? ` / ${opacityValue})` : ")")
    );
  };

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./theme.config.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        favorit: ["var(--font-ABCFavoritBook)"],
        favoritMono: ["var(--font-ABCFavoritMonoRegular)"],
      },
      colors: {
        primary: {
          50: makePrimaryColor(97),
          100: makePrimaryColor(94),
          200: makePrimaryColor(86),
          300: makePrimaryColor(77),
          400: makePrimaryColor(66),
          500: makePrimaryColor(50),
          600: makePrimaryColor(45),
          700: makePrimaryColor(39),
          750: makePrimaryColor(35),
          800: makePrimaryColor(32),
          900: makePrimaryColor(24),
        },
        dark: "#0d0926",
      },
    },
  },
  plugins: [],
};
