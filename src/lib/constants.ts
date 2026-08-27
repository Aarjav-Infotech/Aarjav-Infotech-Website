import { MOTION } from "./theme";

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME ?? "Aarjav Infotech";

/** Canonical public origin used in sitemap, robots, Open Graph, and JSON-LD. */
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://aarjavinfotech.com";

export const APP_DESCRIPTION =
  "Aarjav Infotech is an AI-native agency in Surat, India that designs and deploys secure enterprise AI agents, workflow automation, document processing, and voice AI for regulated industries.";

export const ROUTES = {
  home: "/",
  about: "/about",
  services: "/services",
  contact: "/contact",
  privacy: "/privacy",
  docs: "/docs",
  docsApi: "/docs/api",
  openApi: "/openapi.json",
  llms: "/llms.txt",
  mcp: "/mcp",
  caseStudy: "/case-study",
} as const;

export const NAV_LINKS = [
  { href: "/ai-services", label: "AI Services", hasDropdown: true },
  { href: "/digital-products", label: "Digital Products", hasDropdown: true },
  { href: "/industries", label: "Industries", hasDropdown: true },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About", hasDropdown: true },
] as const;

export const CONTACT_INFO = {
  email: "business@aarjavinfotech.com",
  phone: "+91 99649 19000",
  address:
    "526, Mahek IT Park, Kshanagar, Old GIDC, Katargam, Surat, Gujarat 395004, India",
  streetAddress: "526, Mahek IT Park, Kshanagar, Old GIDC, Katargam",
  addressLocality: "Surat",
  addressRegion: "Gujarat",
  postalCode: "395004",
  addressCountry: "IN",
} as const;

/** Social profiles — update when official URLs are confirmed. */
export const SOCIAL_LINKS = {
  linkedin: "",
  twitter: "",
} as const;

export const ANIMATION = {
  duration: MOTION.duration,
  ease: MOTION.easing.standard,
  stagger: MOTION.stagger,
} as const;

export const API_ROUTES = {
  web3forms: "https://api.web3forms.com/submit",
  newsletter: "/api/newsletter",
} as const;

/** Homepage copy kept server-readable for AI crawlers (no JS required). */
export const HOME_SSR_COPY = {
  h1: "Aarjav Infotech - Power Your Enterprise with Next-Generation AI",
  lead: "Aarjav Infotech delivers intelligent automation across every workflow using secure AI agents, advanced document processing, voice AI, and custom enterprise solutions built to scale for banking, healthcare, insurance, government, and industrial teams.",
  body: [
    "Aarjav Infotech helps enterprises replace brittle manual processes with production-ready AI systems. We design agentic workflows that triage support tickets, extract data from documents, orchestrate multi-step business processes, and answer customers over voice channels — all with security, evaluation, and monitoring built in from day one.",
    "Our AI Workflow Automation practice turns repetitive operations into autonomous pipelines. Support Triage and Ticketing connects email, WhatsApp, and web channels into one AI system that classifies, responds, and resolves. Document Processing extracts structured data from invoices, claims, and forms. Voice AI agents handle inbound and outbound calls with enterprise guardrails. Enterprise AI Ecosystem work connects agents, ERP, and data pipelines into one controlled platform.",
    "Choose Aarjav Infotech when you need an implementation partner — not a slide deck — for regulated or high-stakes AI rollouts. We ship with clear success metrics, human-in-the-loop controls, and documentation your security and compliance teams can audit.",
  ].join(" "),
} as const;
