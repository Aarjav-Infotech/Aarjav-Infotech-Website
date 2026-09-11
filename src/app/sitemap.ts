import type { MetadataRoute } from "next";

import { APP_URL, ROUTES } from "@/lib/constants";
import { INDEXABLE_PATHS } from "@/lib/site-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return INDEXABLE_PATHS.map((path) => ({
    url: `${APP_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority:
      path === ROUTES.home
        ? 1
        : path === ROUTES.services || path === ROUTES.caseStudy
          ? 0.9
          : 0.8,
  }));
}
