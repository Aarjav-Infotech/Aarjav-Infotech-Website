"use client";

import IndustryPageLayout, {
  type IndustryConfig,
} from "@/features/Industry/industry-page-layout";

const insuranceConfig: IndustryConfig = {
  eyebrow: "",
  heroTitle: "AI That Moves Insurance Forward",
  heroDescription:
    "Transform insurance operations with intelligent AI solutions that automate complex workflows, accelerate claims and underwriting, and create faster, more connected experiences for customers and teams.",
  stats: [
    { value: "70%", label: "MANUAL REDUCTION" },
    { value: "3x", label: "FASTER PROCESSING" },
    { value: "24/7", label: "AI ASSISTANCE" },
    { value: "99%", label: "DATA ACCURACY" },
  ],
  platformSection: {
    eyebrow: "Insurance Transformation",
    title: "One Policy. One Connected Insurance Ecosystem.",
    description:
      "Bring customers, policies, claims, documents, data, and AI agents together through a unified digital ecosystem that helps insurance teams operate with greater speed and intelligence.",
    imageSrc: "/images/common-industries.svg",
    imageAlt: "Insurance Agentic OS Control Plane",
  },
  strategySection: {
    eyebrow: "The Challenges",
    title: "The Right AI Strategy Changes the Entire Insurance Journey",
    description:
      "Insurance organizations manage complex processes, large volumes of information, and constantly changing customer expectations. AI connects these processes and removes the friction between them.",
    cards: [
      {
        title: "Too Much Manual Work",
        desc: "Policy processing, document handling, verification, and data extraction eat up critical capacity and valuable employee time.",
      },
      {
        title: "Slow Claims Processing",
        desc: "Manual reviews and disconnected systems make claims resolution slower and lower customer trust.",
      },
      {
        title: "Fragmented Data",
        desc: "Customer policy, claims, and operational data often sits across multiple systems, making it difficult to access a complete picture.",
      },
      {
        title: "Complex Compliance",
        desc: "Insurance teams need to maintain accuracy, traceability, and regulatory compliance while working to improve operational efficiency.",
      },
    ],
  },
  transformSection: {
    eyebrow: "Our Approach",
    title: "This Is How Insurance Operations Transform",
    description:
      "We combine AI agents, automation, document intelligence, and enterprise integrations to simplify insurance workflows—from the first customer interaction to final resolution.",
    steps: [
      {
        number: "01",
        title: "Map the Insurance Workflow",
        desc: "We identify your critical processes, systems, data, and key customer touchpoints to determine where AI will deliver the greatest value.",
        highlight:
          "The Insurance OS is not a core system replacement. It's the intelligence layer that makes every system you already run work together toward your loss ratio and growth objectives.",
      },
      {
        number: "02",
        title: "Bring Your Systems Together",
        desc: "Connect policy platforms, claims systems, CRMs, and document repositories into an enterprise ecosystem through unified integration APIs.",
        highlight:
          "Every execution traces back to a stated objective and a documented compliance position. Regulators get the audit trail they require. The business gets the outcomes it demands.",
      },
      {
        number: "03",
        title: "Let AI Handle the Work",
        desc: "Deploy intelligent agents and workflows for intake, document extraction, customer support, claims triage, and underwriting assistance.",
        highlight:
          "Agents pause and wait for authorization before proceeding with anything that could result in a coverage denial, fraud flag, or adverse decision. Human judgment steps in where it matters most.",
      },
      {
        number: "04",
        title: "Continuously Improve Performance",
        desc: "Monitor workflow performance, agent behavior, processing accuracy, and business outcomes to continuously improve your insurance operations.",
        highlight:
          "The OS builds institutional intelligence that stays in the system—claims patterns, underwriting positions, fraud typologies—so knowledge doesn't leave with any single team or adjuster.",
      },
    ],
  },
  lifecycleSection: {
    eyebrow: "AI-Powered Insurance",
    title: "Intelligence Across the Insurance Lifecycle",
    description:
      "Apply AI where it matters most—from customer interactions and claims to underwriting, documents, and operational workflows.",
    cards: [
      {
        imageSrc: "/images/solution-1.svg",
        imageAlt: "Intelligent Claims Automation Icon",
        title: "Intelligent Claims Automation",
        desc: "Accelerate claim processing by automating intake, document extraction, validation, assessment routing, and status communication.",
        capabilities: [
          "Intelligent Intake",
          "FNOL Validation",
          "Smart Triage & Routing",
        ],
      },
      {
        imageSrc: "/images/solution-2.svg",
        imageAlt: "AI-Powered Underwriting Icon",
        title: "AI-Powered Underwriting",
        desc: "Empower underwriting teams with intelligent support for screening applications, gathering information, identifying risk factors, and making faster decisions.",
        capabilities: [
          "Risk Analysis",
          "Application Review",
          "Data Extraction",
          "Decision Support",
        ],
      },
      {
        imageSrc: "/images/solution-3.svg",
        imageAlt: "Customer & Agent Assistance Icon",
        title: "Customer & Agent Assistance",
        desc: "Enable AI voice and chat agents that provide instant support for policy questions, claim updates, service requests, and routine insurance interactions.",
        capabilities: [
          "AI Voice Agents",
          "Customer Support",
          "Policy Assistance",
          "24/7 Service",
        ],
      },
      {
        imageSrc: "/images/solution-4.svg",
        imageAlt: "Policy & Document Intelligence Icon",
        title: "Policy & Document Intelligence",
        desc: "Turn unstructured insurance documents, medical records, and claims evidence into actionable, searchable data.",
        capabilities: [
          "OCR",
          "Document Classification",
          "Data Extraction",
          "Policy Processing",
        ],
      },
    ],
  },
};

export default function InsuranceContent() {
  return <IndustryPageLayout config={insuranceConfig} />;
}
