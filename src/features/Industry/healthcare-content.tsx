"use client";

import IndustryPageLayout, {
  type IndustryConfig,
} from "@/features/Industry/industry-page-layout";

const healthcareFaqs = [
  {
    question:
      "What exactly is an Agentic OS for healthcare and how is it different from RPA or point AI tools?",
    answer:
      "RPA automates clicks on screens. Point AI tools solve one task like transcribing notes. A Healthcare Agentic OS coordinates patient intake, scheduling, documentation synthesis, prior authorization, and denial management as one system, governed end-to-end.",
  },
  {
    question:
      "Do I need to replace our EHR, CRM, or revenue cycle systems to run this platform?",
    answer:
      "No. It integrates directly with your core EHR (Epic, Cerner, Athenahealth, Allscripts), billing engines, CRMs, and payer portals via FHIR/HL7 standards and secure APIs. It sits as an intelligent control plane above them.",
  },
  {
    question:
      "How quickly can we run a regulated healthcare workflow in production?",
    answer:
      "Regulated clinical and administrative workflows go live in 4 to 8 weeks. Pre-built connectors and deterministic compliance guardrails allow risk, clinical, and compliance teams to validate and sign off rapidly.",
  },
  {
    question:
      "How does the platform ensure HIPAA compliance and prevent model hallucinations?",
    answer:
      "The system runs inside your sovereign, HIPAA-compliant VPC with strict BAA safeguards and zero data retention for model training. Deterministic guardrails enforce that human clinicians retain final sign-off on any outputs affecting diagnosis, treatment, or coverage.",
  },
];

const healthcareConfig: IndustryConfig = {
  eyebrow: "",
  heroTitle: "AI That Powers Smarter Healthcare Operations",
  heroDescription:
    "Connect AI agents, healthcare workflows, and enterprise systems to automate operations, support care teams, improve patient experiences, and turn complex healthcare processes into intelligent workflows.",
  stats: [
    { value: "13 hrs", label: "ADMIN TIME SAVED" },
    { value: "70%", label: "LESS MANUAL WORK" },
    { value: "24/7", label: "AI ASSISTANCE" },
    { value: "99%", label: "DATA ACCURACY" },
  ],
  platformSection: {
    eyebrow: "Healthcare Transformation",
    title: "One Healthcare Objective. Every Workflow Connected.",
    description:
      "Bring patient information, clinical systems, AI agents, documents, operational workflows, and enterprise applications together through one intelligent ecosystem.",
    imageSrc: "/images/common-industries.svg",
    imageAlt: "Healthcare Agentic OS Control Plane Diagram",
  },
  strategySection: {
    eyebrow: "The Challenges",
    title: "The Right AI Strategy Changes Healthcare Operations",
    description:
      "Healthcare teams deal with fragmented systems, documentation-heavy processes, administrative pressure, and increasing expectations for faster patient service.",
    cards: [
      {
        title: "Manual Administrative Work",
        desc: "Clinicians and staff spend valuable time on documentation, forms, verification, scheduling, and repetitive administrative tasks instead of patient-focused work.",
      },
      {
        title: "Complex Patient Journeys",
        desc: "Patients often move between departments, providers, appointments, and follow-ups. Disconnected workflows can make these transitions slower and harder to manage.",
      },
      {
        title: "Revenue Cycle Friction",
        desc: "Coding, billing, claims, prior authorization, and denial management involve large amounts of manual review and documentation.",
      },
      {
        title: "Disconnected Healthcare Data",
        desc: "Important information can sit across EHRs, documents, databases, CRM systems, and other applications, making it difficult to access the right information at the right time.",
      },
    ],
  },
  transformSection: {
    eyebrow: "Our Approach",
    title: "This Is How Healthcare Operations Transform",
    description:
      "We connect your existing healthcare systems with purpose-built AI agents and automated workflows to improve operational efficiency without forcing teams to replace the tools they already use.",
    steps: [
      {
        number: "01",
        title: "Bring Your Healthcare Systems Together",
        desc: "Connect EHRs, CRMs, ERPs, databases, APIs, document repositories, and other healthcare applications into a connected technology ecosystem.",
        highlight:
          "The Healthcare OS is not an EHR replacement. It's the intelligence layer that makes every system in your clinical and operational stack work together toward your patient and financial objectives.",
      },
      {
        number: "02",
        title: "Give AI the Right Context",
        desc: "AI agents access the relevant documents, records, workflows, and business rules required to perform their assigned tasks accurately and responsibly.",
        highlight:
          "Every execution traces back to a stated clinical or operational objective and a documented compliance position. CMS examiners and accreditation bodies get the audit trail they require.",
      },
      {
        number: "03",
        title: "Let AI Handle the Workflow",
        desc: "Deploy AI agents to automate repetitive administrative processes, document processing, patient communication, scheduling, claims support, and operational tasks.",
        highlight:
          "Agents handle the data gathering, documentation processing, and draft outputs. Clinicians and compliance teams make the final calls on anything that affects patient care or coverage decisions.",
      },
      {
        number: "04",
        title: "Improve With Every Workflow",
        desc: "Track performance, monitor outcomes, maintain auditability, and continuously optimize your AI-powered healthcare operations.",
        highlight:
          "The OS builds operational intelligence that stays in the system: denial patterns, payer behavior, documentation gaps—so knowledge doesn't depend on any individual staff member's experience.",
      },
    ],
  },
  lifecycleSection: {
    eyebrow: "AI Solutions",
    title: "Intelligence Across the Healthcare Lifecycle",
    description:
      "Apply AI where it can make the biggest operational difference—from patient engagement and clinical documentation to revenue cycle and care coordination.",
    cards: [
      {
        imageSrc: "/images/solution-1.svg",
        imageAlt: "Make Every Patient Interaction Smarter Icon",
        title: "Make Every Patient Interaction Smarter",
        desc: "AI voice and chat agents can support appointment scheduling, patient questions, reminders, follow-ups, and routine service requests around the clock.",
        capabilities: [
          "AI Voice Agents",
          "Patient Support",
          "Scheduling",
          "Follow-ups",
        ],
      },
      {
        imageSrc: "/images/solution-2.svg",
        imageAlt: "Turn Healthcare Information Into Action Icon",
        title: "Turn Healthcare Information Into Action",
        desc: "Process clinical documents and unstructured information to extract, summarize, classify, and organize data for healthcare teams.",
        capabilities: [
          "Document AI",
          "Clinical Summaries",
          "Data Extraction",
          "Information Search",
        ],
      },
      {
        imageSrc: "/images/solution-3.svg",
        imageAlt: "Simplify the Healthcare Revenue Cycle Icon",
        title: "Simplify the Healthcare Revenue Cycle",
        desc: "Automate and streamline processes around coding support, claims, billing workflows, prior authorization, and denial management.",
        capabilities: [
          "Coding Support",
          "Claims",
          "Prior Authorization",
          "Denials",
        ],
      },
      {
        imageSrc: "/images/solution-4.svg",
        imageAlt: "Connect Teams Around Better Care Icon",
        title: "Connect Teams Around Better Care",
        desc: "Coordinate referrals, patient transitions, follow-ups, internal workflows, and operational tasks through intelligent AI-powered orchestration.",
        capabilities: [
          "Care Coordination",
          "Referrals",
          "Workflow Automation",
          "Operations",
        ],
      },
    ],
  },
  HomeFaq: {
    eyebrow: "Healthcare FAQs",
    title: "Frequently Asked Questions About AI in Healthcare",
    faqs: healthcareFaqs,
  },
};

export default function HealthcareContent() {
  return <IndustryPageLayout config={healthcareConfig} />;
}