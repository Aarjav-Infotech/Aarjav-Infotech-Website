export type FaqItem = {
  question: string;
  answer: string;
};

/** Shared FAQ copy for the UI accordion and FAQPage JSON-LD. */
export const SITE_FAQS: FaqItem[] = [
  {
    question: "Why should we trust our mission-critical data with you?",
    answer:
      "We treat security as a foundational architecture, not an afterthought. For government and enterprise projects, we deploy air-gapped ready systems and sovereign data environments that ensure your proprietary intelligence never touches the public internet. Our code is built to be audited, and our infrastructure is built to be impenetrable.",
  },
  {
    question:
      "How does your engineering approach differ from standard agencies?",
    answer:
      "We don't just build software — we engineer systems designed for longevity, compliance, and scale. Every project follows a structured methodology rooted in enterprise-grade architecture, rigorous testing, and future-proof design principles.",
  },
  {
    question:
      "Can you handle projects at government or global enterprise scale?",
    answer:
      "Absolutely. We've built and deployed solutions for government bodies, defense-adjacent programs, and multinational enterprises. Our team understands procurement cycles, regulatory compliance, and the operational rigor these environments demand.",
  },
  {
    question: "How do you ensure long-term system evolution?",
    answer:
      "We design modular, well-documented systems that evolve with your needs. Our architecture supports iterative upgrades, version-controlled deployments, and seamless integration of emerging technologies without costly rewrites.",
  },
];
