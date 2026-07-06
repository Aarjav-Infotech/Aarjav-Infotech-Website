import type { Metadata } from "next";
import { APP_DESCRIPTION, APP_NAME, APP_URL } from "@/lib/constants";

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

  return {
    title: pageTitle,
    description,
    metadataBase: new URL(APP_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName: APP_NAME,
      title: pageTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
