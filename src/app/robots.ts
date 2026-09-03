// src/app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/images/", "/icon"],
    },
    sitemap: "https://aarjavinfotech.com/sitemap.xml",
  };
}
