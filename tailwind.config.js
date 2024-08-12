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
    },
  },
  plugins: [],
};
