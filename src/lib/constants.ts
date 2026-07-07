import { MOTION } from "@/lib/theme";

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
  { href: "/ai-services", label: "AI Services", hasDropdown: true },
  { href: "/digital-products", label: "Digital Products", hasDropdown: true },
  { href: "/industries", label: "Industries", hasDropdown: true },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About", hasDropdown: true },
] as const;

export const CONTACT_INFO = {
  email: "hello@aarjavinfotech.com",
  phone: "+91 98765 43210",
  address: "Ahmedabad, Gujarat, India",
} as const;

export const ANIMATION = {
  duration: MOTION.duration,
  ease: MOTION.easing.standard,
  stagger: MOTION.stagger,
} as const;

export const API_ROUTES = {
  contact: "/api/contact",
  newsletter: "/api/newsletter",
} as const;
