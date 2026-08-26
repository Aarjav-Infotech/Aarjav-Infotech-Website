import HomeContent from "@/features/home/components/home-content";
import { HomeSsrContent } from "@/features/home/components/home-ssr-content";
import { HomeScrollReset } from "@/features/home/components/home-scroll-reset";
import { JsonLd } from "@/components/common/json-ld";
import { getOrganizationJsonLd, getWebSiteJsonLd } from "@/lib/json-ld";
import { createMetadata } from "@/lib/metadata";
import { HOME_SSR_COPY } from "@/lib/constants";

export const metadata = createMetadata({
  title: undefined,
  description: HOME_SSR_COPY.lead,
  path: "/",
});

export default function HomePage() {
  return (
    <main id="main-content" className="w-full">
      <JsonLd data={[getOrganizationJsonLd(), getWebSiteJsonLd()]} />
      <HomeSsrContent />
      <HomeScrollReset />
      <HomeContent />
    </main>
  );
}
