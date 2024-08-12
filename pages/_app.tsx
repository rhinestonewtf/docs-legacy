import type { ReactElement } from "react";
import type { AppProps } from "next/app";
import "../public/styles.css";
import localFont from "next/font/local";

const favorit = localFont({
  src: [
    {
      path: "../public/fonts/ABCFavorit-Book.woff",
    },
  ],
  variable: "--font-ABCFavoritBook",
});

const favoritMono = localFont({
  src: [
    {
      path: "../public/fonts/ABCFavoritMono-Regular.woff",
    },
  ],
  variable: "--font-ABCFavoritMonoRegular",
});

export default function Nextra({
  Component,
  pageProps,
}: AppProps): ReactElement {
  // return <Component {...pageProps} />;
  return (
    <div className={`${favorit.variable} ${favoritMono.variable}`}>
      <div className="font-favorit">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
