import { APP_NAME } from "./constants";

const OG_IMAGE_DIR = "/images/opengraph";
const DEFAULT_OG_FILENAME = "home-opengraph.png";

/** Public route → opengraph asset filename in `public/images/opengraph/`. */
export const OG_IMAGE_FILES_BY_PATH: Readonly<Record<string, string>> = {
  "/": DEFAULT_OG_FILENAME,
  "/about": "About Us.png",
  "/contact": "Contact Us.png",
  "/case-study": "Case Study.png",
  "/services/ai-workflow-automation": "AI Workflow Automation.png",
  "/services/support-triage-ticketing": "Support Triage & Ticketing.png",
  "/services/ai-document-processing": "AI Document Processing.png",
  "/services/ai-voice-agent": "AI Voice Agent Deployment.png",
  "/services/enterprise-ai-page": "Enterprise AI Ecosystem.png",
};

export function openGraphImageUrl(filename: string): string {
  return `${OG_IMAGE_DIR}/${encodeURIComponent(filename)}`;
}

export function getOpenGraphImageForPath(path = "/") {
  const normalizedPath = path === "" ? "/" : path;
  const filename =
    OG_IMAGE_FILES_BY_PATH[normalizedPath] ?? DEFAULT_OG_FILENAME;

  return {
    url: openGraphImageUrl(filename),
    width: 1200,
    height: 600,
    alt: `${APP_NAME} — enterprise AI automation`,
  };
}
