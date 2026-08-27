import { ROUTES } from "./constants";

/** Public HTML URLs that should appear in sitemap.xml for Google indexing. */
export const INDEXABLE_PATHS: readonly string[] = [
  ROUTES.home,
  ROUTES.about,
  ROUTES.services,
  "/services/ai-workflow-automation",
  "/services/support-triage-ticketing",
  "/services/ai-document-processing",
  "/services/ai-voice-agent",
  "/services/enterprise-ai-page",
  "/industries/banking",
  "/industries/insurance",
  "/industries/healthcare",
  "/industries/government",
  "/industries/enterprise",
  "/industries/industrial",
  "/industries/real-estate",
  ROUTES.caseStudy,
  ROUTES.contact,
  ROUTES.privacy,
  ROUTES.docs,
  ROUTES.docsApi,
];
