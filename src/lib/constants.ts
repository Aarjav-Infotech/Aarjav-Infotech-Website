export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME ?? "Aarjav Infotech";

export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

export const APP_DESCRIPTION =
  "Aarjav Infotech delivers innovative technology solutions for modern businesses.";

export const ROUTES = {
  home: "/",
  about: "/about",
  services: "/services",
  contact: "/contact",
} as const;

export const NAV_LINKS = [
  { href: ROUTES.home, label: "Home" },
  { href: ROUTES.about, label: "About" },
  { href: ROUTES.services, label: "Services" },
  { href: ROUTES.contact, label: "Contact" },
] as const;

export const CONTACT_INFO = {
  email: "hello@aarjavinfotech.com",
  phone: "+91 98765 43210",
  address: "Ahmedabad, Gujarat, India",
} as const;

export const ANIMATION = {
  duration: {
    fast: 0.15,
    normal: 0.25,
    slow: 0.3,
  },
  ease: [0.25, 0.1, 0.25, 1] as const,
  stagger: 0.08,
} as const;

export const API_ROUTES = {
  contact: "/api/contact",
  newsletter: "/api/newsletter",
} as const;
