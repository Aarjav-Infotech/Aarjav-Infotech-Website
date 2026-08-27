import {
  APP_DESCRIPTION,
  APP_NAME,
  APP_URL,
  CONTACT_INFO,
  SOCIAL_LINKS,
} from "./constants";

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: APP_NAME,
    legalName: "Aarjav Infotech",
    url: APP_URL,
    description: APP_DESCRIPTION,
    logo: `${APP_URL}/svg/logo.svg`,
    image: `${APP_URL}/images/hero-background.png`,
    email: CONTACT_INFO.email,
    telephone: CONTACT_INFO.phone,
    ...(SOCIAL_LINKS.linkedin || SOCIAL_LINKS.twitter
      ? {
          sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.twitter].filter(Boolean),
        }
      : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT_INFO.streetAddress,
      addressLocality: CONTACT_INFO.addressLocality,
      addressRegion: CONTACT_INFO.addressRegion,
      postalCode: CONTACT_INFO.postalCode,
      addressCountry: CONTACT_INFO.addressCountry,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: CONTACT_INFO.email,
        telephone: CONTACT_INFO.phone,
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: CONTACT_INFO.email,
        telephone: CONTACT_INFO.phone,
      },
    ],
    knowsAbout: [
      "Enterprise AI agents",
      "AI workflow automation",
      "Document processing",
      "Voice AI",
      "Support triage",
    ],
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: APP_NAME,
    url: APP_URL,
    description: APP_DESCRIPTION,
    publisher: {
      "@type": "Organization",
      name: APP_NAME,
      url: APP_URL,
    },
  };
}
