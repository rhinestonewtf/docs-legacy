import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { LiaTelegram } from "react-icons/lia";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: <span style={{ fontWeight: "bold" }}>Rhinestone Docs</span>,
  useNextSeoProps: () => {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Rhinestone Docs",
      };
    } else {
      return {
        titleTemplate: "Rhinestone Docs",
      };
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Rhinestone Docs" />
      <meta property="og:description" content="Documentation for Rhinestone" />
    </>
  ),
  project: {
    link: "https://github.com/rhinestonewtf",
  },
  docsRepositoryBase: "https://github.com/rhinestonewtf/docs/",
  footer: {
    text: "Rhinestone Docs",
  },
  faviconGlyph: "📝",
};

export default config;
