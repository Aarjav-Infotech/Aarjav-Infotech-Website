import type { MetadataRoute } from "next";

import { APP_URL, ROUTES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = Object.values(ROUTES).map((path) => ({
    url: `${APP_URL}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === ROUTES.home ? 1 : 0.8,
  }));

  return routes;
}
