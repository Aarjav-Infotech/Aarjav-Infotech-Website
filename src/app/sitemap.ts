import type { MetadataRoute } from "next";

import { APP_URL, ROUTES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const paths = [
    ROUTES.home,
    ROUTES.about,
    ROUTES.services,
    ROUTES.contact,
    ROUTES.privacy,
    ROUTES.docs,
    ROUTES.docsApi,
    ROUTES.caseStudy,
  ];

  return paths.map((path) => ({
    url: `${APP_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === ROUTES.home ? 1 : path === ROUTES.docs ? 0.9 : 0.8,
  }));
}
