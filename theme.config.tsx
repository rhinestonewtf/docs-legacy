import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { SiFarcaster } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { useRouter } from "next/router";
import { Separator } from "./components/Separator";

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
      <svg
        width="25"
        height="25"
        viewBox="0 0 96 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="96" height="96" rx="20" fill="#EFEDFE" />
        <g clipPath="url(#clip0_947_2635)">
          <path
            opacity="0.5"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M58.5503 75.0295C55.8944 77.0974 52.8648 78.7894 49.0745 79.0187C48.3924 79.06 47.7085 79.06 47.0265 79.0187C43.2362 78.7894 40.2066 77.0974 37.5506 75.0295C35.0838 73.1089 32.3759 70.4006 29.295 67.3193C29.2096 67.2339 29.1239 67.1482 29.038 67.0623C28.952 66.9763 28.8663 66.8906 28.7809 66.8052C25.6996 63.7244 22.9913 61.0165 21.0706 58.5496C19.0027 55.8937 17.3107 52.8641 17.0814 49.0739C17.0402 48.3918 17.0402 47.7079 17.0814 47.0258C17.3107 43.2356 19.0027 40.206 21.0706 37.5501C22.9913 35.0832 25.6996 32.3753 28.7809 29.2945C28.8663 29.2091 28.952 29.1234 29.038 29.0374C29.1239 28.9515 29.2096 28.8658 29.295 28.7804C32.3759 25.6991 35.0838 22.9908 37.5506 21.0702C40.2066 19.0023 43.2362 17.3103 47.0265 17.081C47.7085 17.0397 48.3924 17.0397 49.0745 17.081C52.8648 17.3103 55.8944 19.0023 58.5503 21.0702C61.0172 22.9908 63.7251 25.6991 66.806 28.7804C66.8914 28.8658 66.977 28.9515 67.063 29.0374C67.149 29.1234 67.2346 29.2091 67.32 29.2945C70.4013 32.3753 73.1096 35.0832 75.0303 37.5501C77.0982 40.206 78.7903 43.2356 79.0195 47.0258C79.0608 47.7079 79.0608 48.3918 79.0195 49.0739C78.7903 52.8641 77.0982 55.8937 75.0303 58.5496C73.1096 61.0165 70.4013 63.7244 67.32 66.8052C67.2346 66.8906 67.149 66.9763 67.063 67.0623C66.977 67.1482 66.8914 67.2339 66.806 67.3193C63.7251 70.4006 61.0172 73.1089 58.5503 75.0295ZM23.275 48.6992C23.5213 52.7706 26.8227 56.072 33.4255 62.6748C40.0283 69.2775 43.3297 72.5789 47.4011 72.8252C47.8336 72.8514 48.2673 72.8514 48.6999 72.8252C52.7713 72.5789 56.0727 69.2775 62.6755 62.6748C69.2783 56.072 72.5797 52.7706 72.826 48.6992C72.8521 48.2667 72.8521 47.833 72.826 47.4005C72.5797 43.3291 69.2783 40.0277 62.6755 33.4249C56.0727 26.8222 52.7713 23.5208 48.6999 23.2745C48.2673 23.2483 47.8336 23.2483 47.4011 23.2745C43.3297 23.5208 40.0283 26.8222 33.4255 33.4249C26.8227 40.0277 23.5213 43.3291 23.275 47.4005C23.2488 47.833 23.2488 48.2667 23.275 48.6992Z"
            fill="#4F41EF"
          />
          <path
            d="M31.5029 48.0499C31.5029 47.374 31.9812 46.7959 32.6385 46.6387C35.9728 45.8413 38.5985 44.5934 40.8029 42.6404C41.4516 42.0657 42.065 41.4524 42.6397 40.8037C44.5927 38.5992 45.8406 35.9735 46.638 32.6393C46.7952 31.982 47.3733 31.5037 48.0492 31.5037C48.7252 31.5037 49.3033 31.982 49.4605 32.6393C50.2579 35.9735 51.5058 38.5992 53.4588 40.8037C54.0335 41.4524 54.6469 42.0657 55.2955 42.6404C57.5 44.5934 60.1257 45.8413 63.46 46.6387C64.1173 46.7959 64.5956 47.374 64.5956 48.0499C64.5956 48.7258 64.1173 49.304 63.46 49.4612C60.1257 50.2586 57.5 51.5065 55.2955 53.4595C54.6469 54.0342 54.0335 54.6475 53.4588 55.2962C51.5058 57.5007 50.2579 60.1263 49.4605 63.4605C49.3033 64.1179 48.7252 64.5962 48.0492 64.5962C47.3733 64.5962 46.7952 64.1179 46.638 63.4605C45.8406 60.1263 44.5927 57.5007 42.6397 55.2962C42.065 54.6475 41.4516 54.0342 40.8029 53.4595C38.5985 51.5065 35.9728 50.2586 32.6385 49.4612C31.9812 49.304 31.5029 48.7258 31.5029 48.0499Z"
            fill="#4F41EF"
          />
        </g>
        <defs>
          <clipPath id="clip0_947_2635">
            <rect
              width="62"
              height="62"
              fill="white"
              transform="translate(17 17)"
            />
          </clipPath>
        </defs>
      </svg>
      <span style={{ fontWeight: "bold", marginLeft: "8px" }}>
        Rhinestone Docs
      </span>
    </>
  ),
  project: {
    link: "https://github.com/rhinestonewtf",
  },
  navbar: {
    extraContent: (
      <div className="flex flex-row">
        <a href="https://x.com/rhinestonewtf" target="_blank" className="mr-4">
          <BsTwitterX size={24} />
        </a>
        <a href="https://warpcast.com/rhinestone" target="_blank" className="">
          <SiFarcaster size={24} />
        </a>
      </div>
    ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 2,
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <Separator title={title} />;
      }
      return <div>{title}</div>;
    },
  },
  primaryHue: {
    light: 244.83,
    dark: 245.57,
  },
  primarySaturation: {
    light: 72.8,
    dark: 38.04,
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
          <a href="https://blog.rhinestone.wtf" target="_blank">
            Blog
          </a>
          <a href="https://twitter.com/rhinestonewtf" target="_blank">
            Twitter
          </a>
        </div>
      </div>
    ),
  },
  editLink: { component: null },
};

export default config;
