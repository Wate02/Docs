import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Wate02</span>,
  project: {
    link: "https://github.com/Wate02/Docs",
  },
  chat: {
    link: "https://github.com/Wate02/Docs",
  },
  docsRepositoryBase: "https://github.com/Wate02/Docs",
  footer: {
    text: "© 2025 Wate02",
  },
  useNextSeoProps() {
    return {
      title: ">",
      openGraph: {
        title: "> >",
        description: "---",
        url: "#",
        images: [
          {
            url: "#",
            width: 1200,
            height: 630,
            alt: ">",
          },
        ],
      },
    };
  },
};

export default config;