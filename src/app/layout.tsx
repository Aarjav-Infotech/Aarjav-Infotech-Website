import type { Metadata, Viewport } from "next";
import { Urbanist, Hubot_Sans } from "next/font/google";
import { SiteLayout } from "@/components/layout/site-layout";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants";
import { createMetadata } from "@/lib/metadata";
import { BRAND } from "@/lib/theme";

// 1. Configure Fonts

const urbanist = Urbanist({
  subsets: ["latin"],

  variable: "--font-sans-stack",
});

const hubotSans = Hubot_Sans({
  subsets: ["latin"],

  variable: "--font-hubot-sans",
});

// 2. Configure Metadata & Viewport

export const metadata: Metadata = {
  ...createMetadata(),

  title: {
    default: APP_NAME,

    template: `%s | ${APP_NAME}`,
  },

  description: APP_DESCRIPTION,

  manifest: "/site.webmanifest",

  icons: {
    icon: [
      // Light Mode browser theme: Serves the Dark Blue icon

      {
        url: "/favicon.svg?v=2",

        type: "image/svg+xml",

        media: "(prefers-color-scheme: light)",
      },

      {
        url: "/favicon-96x96.png?v=2",

        sizes: "96x96",

        type: "image/png",

        media: "(prefers-color-scheme: light)",
      },

      // Dark Mode browser theme: Serves the Light/White icon

      {
        url: "/favicon-dark.svg?v=2",

        type: "image/svg+xml",

        media: "(prefers-color-scheme: dark)",
      },

      {
        url: "/favicon-dark-96x96.png?v=2",

        sizes: "96x96",

        type: "image/png",

        media: "(prefers-color-scheme: dark)",
      },

      // Universal fallbacks

      { url: "/favicon.ico?v=2" },

      { url: "/favicon-192x192.png?v=2", sizes: "192x192", type: "image/png" },

      { url: "/favicon-512x512.png?v=2", sizes: "512x512", type: "image/png" },
    ],

    apple: [
      { url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" },
    ],
  },
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

// 3. Organization Schema for Google Knowledge Graph & Brand Search

const organizationJsonLd = {
  "@context": "https://schema.org",

  "@type": "Organization",

  name: APP_NAME,

  url: "https://aarjavinfotech.com",

  logo: "https://aarjavinfotech.com/images/logo.png",
};

// 4. Single RootLayout Export

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${urbanist.variable} ${hubotSans.variable}`}>
      <head>
        {/* Google Structured Data / Rich Snippets */}

        <script
          type="application/ld+json"

          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />

        {/* Force scroll position to top BEFORE Next.js hydrates on mobile */}

        <script
          dangerouslySetInnerHTML={{
            __html: `

              if (typeof window !== 'undefined') {

                if ('scrollRestoration' in history) {

                  history.scrollRestoration = 'manual';

                }

                window.scrollTo(0, 0);

              }

            `,
          }}
        />
      </head>

      <body className="bg-background text-foreground min-h-screen font-sans antialiased">
        <a
          href="#"

          tabIndex={-1}

          className="bg-primary text-primary-foreground focus:z-toast sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:rounded-full focus:px-4 focus:py-2"
        >
          Skip to main content
        </a>

        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
