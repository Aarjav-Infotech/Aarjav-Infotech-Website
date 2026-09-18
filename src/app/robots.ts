import type { MetadataRoute } from "next";

import { APP_URL } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/images/"],
        disallow: ["/api/", "/mcp", "/*?q=", "/*?*q=*"],
      },
    ],
    sitemap: `${APP_URL}/sitemap.xml`,
    host: new URL(APP_URL).host,
  };
}
