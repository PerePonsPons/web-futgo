import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,

    description: siteConfig.description,

    start_url: "/",

    display: "standalone",

    background_color: "#FFFFFF",

    theme_color: "#0F766E",

    lang: siteConfig.locale,

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
