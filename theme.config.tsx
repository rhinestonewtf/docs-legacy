import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { SiFarcaster } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { useRouter } from "next/router";
import { Separator } from "./components/Separator";
import { Logo } from "./components/Logo";

const config: DocsThemeConfig = {
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
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  logo: (
    <>
      <Logo width={22} height={22} />
      <div className="font-favorit normal-case ml-2 font-bold text-xl">
        rhinestone <span className="text-[#8479FF] text-lg">Docs</span>
      </div>
    </>
  ),
  project: {
    link: "https://github.com/rhinestonewtf",
  },
  navbar: {
    // extraContent: (
    //   <div className="flex flex-row">
    //     <a href="https://x.com/rhinestonewtf" target="_blank" className="mr-4">
    //       <BsTwitterX size={24} />
    //     </a>
    //     <a href="https://warpcast.com/rhinestone" target="_blank" className="">
    //       <SiFarcaster size={24} />
    //     </a>
    //   </div>
    // ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 2,
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <Separator title={title} />;
      }
      return <div className="">{title}</div>;
    },
  },
  primaryHue: {
    light: 244.83,
    dark: 245,
  },
  primarySaturation: {
    light: 72.8,
    dark: 74,
  },
  docsRepositoryBase: "https://github.com/rhinestonewtf/docs/",
  footer: {
    text: (
      <div className="flex flex-row justify-between w-full">
        <span>
          Copyright {new Date().getFullYear()}{" "}
          <a href="https://rhinestone.wtf" target="_blank">
            Rhinestone
          </a>
        </span>
        <div className="flex flex-row justify-between gap-x-4">
          <a href="https://rhinestone.wtf" target="_blank">
            About us
          </a>
          <a href="https://blog.rhinestone.wtf" target="_blank">
            Blog
          </a>
          <a href="https://twitter.com/rhinestonewtf" target="_blank">
            Twitter
          </a>
          <a href="https://warpcast.com/rhinestone" target="_blank">
            Warpcast
          </a>
        </div>
      </div>
    ),
  },
  editLink: { component: null },
};

export default config;
