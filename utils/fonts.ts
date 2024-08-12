import localFont from "next/font/local";

export const favorit = localFont({
  src: [
    {
      path: "../public/fonts/ABCFavorit-Book.woff",
    },
  ],
  variable: "--font-ABCFavoritBook",
});

export const favoritMono = localFont({
  src: [
    {
      path: "../public/fonts/ABCFavoritMono-Regular.woff",
    },
  ],
  variable: "--font-ABCFavoritMonoRegular",
});
