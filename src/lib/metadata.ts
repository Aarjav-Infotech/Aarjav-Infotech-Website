import type { Metadata } from "next";
import { APP_DESCRIPTION, APP_NAME, APP_URL } from "./constants";
import { getOpenGraphImageForPath } from "./opengraph-images";

export interface PageMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}

/**
 * Builds consistent page metadata with Open Graph and Twitter Card support.
 */
export function createMetadata({
  title,
  description = APP_DESCRIPTION,
  path = "",
  noIndex = false,
}: PageMetadataOptions = {}): Metadata {
  const pageTitle = title ? `${title} | ${APP_NAME}` : APP_NAME;
  const url = `${APP_URL}${path}`;
  const ogImage = getOpenGraphImageForPath(path);

  return {
    title: {
      absolute: pageTitle,
    },
    description,
    metadataBase: new URL(APP_URL),
    alternates: {
      canonical: url,
      types: {
        "text/markdown":
          path === "/" || path === "" ? "/index.md" : `${path}.md`,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: APP_NAME,
      title: pageTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [ogImage.url],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
