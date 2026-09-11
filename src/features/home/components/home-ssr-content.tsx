import { HOME_SSR_COPY } from "@/lib/constants";

/**
 * Always-present semantic homepage content for AI crawlers that do not run JS.
 * Visually hidden but present in raw HTML (not display:none).
 */
export function HomeSsrContent() {
  return (
    <section
      className="sr-only"
      aria-label="Aarjav Infotech company overview"
      data-agent-content="true"
    >
      <p className="font-semibold">{HOME_SSR_COPY.h1}</p>
      <p>{HOME_SSR_COPY.lead}</p>
      <p>{HOME_SSR_COPY.body}</p>
      <h2>Aarjav Infotech services</h2>
      <ul>
        <li>AI Workflow Automation</li>
        <li>Support Triage and Ticketing</li>
        <li>AI Document Processing</li>
        <li>AI Voice Agents</li>
        <li>Enterprise AI Ecosystem</li>
      </ul>
    </section>
  );
}
