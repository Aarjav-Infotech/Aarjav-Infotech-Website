import type { Metadata, Viewport } from "next";

// 1. Import Urbanist instead of Instrument_Sans
import { Urbanist } from "next/font/google";

import { SiteLayout } from "@/components/layout/site-layout";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";
import { BRAND } from "@/lib/theme";
import "@/styles/globals.css";

// 2. Configure Urbanist
const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-sans-stack", // Keeps the existing CSS variable name unbroken
});

export const metadata: Metadata = {
  ...createMetadata(),
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: BRAND.background },
    { media: "(prefers-color-scheme: dark)", color: BRAND.primary },
  ],
  width: "device-width",
  initialScale: 1,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    // 3. Apply the updated variable class
    <html lang="en" className={urbanist.variable}>
      <body className="bg-background text-foreground min-h-screen font-sans antialiased">
        <a
          href="#main-content"
          className="bg-primary text-primary-foreground focus:z-toast sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:rounded-full focus:px-4 focus:py-2"
        >
          Skip to main content
        </a>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}