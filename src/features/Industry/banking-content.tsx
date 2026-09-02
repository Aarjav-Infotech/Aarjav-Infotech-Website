"use client";

import IndustryPageLayout, {
  type IndustryConfig,
} from "@/features/Industry/industry-page-layout";

export const bankingFaqs = [
  {
    question:
      "What exactly is an Agentic OS for banking and how is it different from RPA or point AI tools?",
    answer:
      "RPA automates clicks. Point AI tools solve one task. An Agentic OS coordinates onboarding, KYC, fraud, credit, servicing, and compliance as one system, governed end-to-end.",
  },
  {
    question:
      "Do I need to replace our core banking, CRM or fraud systems to run this platform?",
    answer:
      "No. It integrates directly with your core (Temenos, Finacle, FIS, Fiserv), CRM, fraud, AML, and case management systems. It sits as an intelligent control plane above them.",
  },
  {
    question:
      "How quickly can we run a regulated banking workflow in production?",
    answer:
      "Regulated workflows go live in 4 to 8 weeks. Pre-built connectors and deterministic compliance guardrails allow risk teams to validate and sign off rapidly.",
  },
  {
    question: "How does the platform handle model risk and regulator scrutiny?",
    answer:
      "Every agent action, prompt, and API payload produces an immutable audit trail with full lineage. We enforce deterministic guardrails before transactions execute to prevent hallucinations.",
  },
];
const bankingConfig: IndustryConfig = {
  eyebrow: "",
  heroTitle: "AI That Powers Modern Banking",
  heroDescription:
    "One intelligent layer across your banking operations to protect transactions, enhance decision making, and deliver real-time financial insights.",
  stats: [
    { value: "99.5%", label: "ACCURACY RATE" },
    { value: "70%", label: "FASTER TRIAGE" },
    { value: "24/7", label: "AUTOMATED SUPPORT" },
    { value: "45K+", label: "DAILY TRANSACTIONS" },
  ],
  platformSection: {
    eyebrow: "Banking Transformation",
    title: "One Intelligent Layer Across Your Banking Operations",
    description:
      "Connect customers, employees, data, applications, and workflows through a unified AI ecosystem designed to make banking operations faster, smarter, and more efficient.",
    imageSrc: "/images/common-industries.svg",
    imageAlt: "Banking Agentic OS Control Plane Diagram",
  },
  strategySection: {
    eyebrow: "AI Strategy",
    title: "The Right Banking Strategy Changes Everything",
    cards: [
      {
        title: "Adaptive Risk Assessment",
        desc: "Evaluate loan, credit, and mortgage risks continuously using predictive financial modeling.",
      },
      {
        title: "Automated Fraud Detection",
        desc: "Detect suspicious account activities, identity spoofing, and transaction anomalies instantly.",
      },
      {
        title: "Real-time Portfolio Insights",
        desc: "Provide customers and advisors with live investment reporting driven by financial AI models.",
      },
      {
        title: "Compliant Data Governance",
        desc: "Ensure complete adherence to banking regulations, KYC standards, and data security mandates.",
      },
    ],
  },
  transformSection: {
    eyebrow: "Our Approach",
    title: "How We Transform Banking Operations",
    description:
      "We combine AI, automation, enterprise integration, and intelligent workflows to modernize banking processes without disrupting core systems.",
    steps: [
      {
        number: "01",
        title: "Understand Your Banking Ecosystem",
        desc: "We analyze your existing systems, customer journeys, workflows, data sources, and operational challenges to identify high-value opportunities.",
        highlight:
          "The Banking OS is not a core banking replacement. It's the intelligence layer that makes every system you already run work together seamlessly.",
      },
      {
        number: "02",
        title: "Build the Right AI Architecture",
        desc: "We design intelligent workflows and AI experiences around your business requirements, security standards, and long-term goals.",
        highlight:
          "Every execution in the Banking OS traces back to a stated objective and a documented compliance position.",
      },
      {
        number: "03",
        title: "Connect Your Enterprise Systems",
        desc: "We connect AI agents with core banking platforms, CRMs, ERPs, APIs, databases, and third-party applications.",
        highlight:
          "Regulators demand governance clarity. The OS answers that question with a transparent architecture, not a policy document.",
      },
      {
        number: "04",
        title: "Continuously Improve Performance",
        desc: "We monitor workflows, analyze outcomes, and continuously optimize AI systems to improve efficiency and accuracy.",
        highlight:
          "The OS builds institutional intelligence that stays in the system—credit patterns, fraud typologies, and compliance rules.",
      },
    ],
  },
  lifecycleSection: {
    eyebrow: "AI Banking Solutions",
    title: "Intelligent Solutions Across the Banking Lifecycle",
    description:
      "From customer interactions to back-office operations, connect AI and automation across critical banking processes.",
    cards: [
      {
        imageSrc: "/images/solution-1.svg",
        imageAlt: "AI Customer Support Icon",
        title: "AI-powered support for every customer interaction.",
        desc: "Deploy AI voice and chat agents that can handle customer queries, account assistance, and routine interactions 24/7.",
        capabilities: [
          "AI Voice & Chat Agents",
          "Customer Query Resolution",
          "Personalized Assistance",
          "24/7 Support",
        ],
      },
      {
        imageSrc: "/images/solution-2.svg",
        imageAlt: "Workflow Automation Icon",
        title: "Turn repetitive banking processes into intelligent workflows.",
        desc: "Automate onboarding, KYC, document verification, approvals, and internal workflows while connecting existing systems.",
        capabilities: [
          "KYC & Onboarding",
          "Document Processing",
          "Workflow Automation",
          "System Integrations",
        ],
      },
      {
        imageSrc: "/images/solution-3.svg",
        imageAlt: "Security & Risk Icon",
        title: "Make financial operations more secure and proactive.",
        desc: "Use AI to identify unusual activity, support risk assessment, monitor transactions, and streamline compliance.",
        capabilities: [
          "Fraud Detection",
          "Risk Analysis",
          "AML Monitoring",
          "Compliance Automation",
        ],
      },
      {
        imageSrc: "/images/solution-4.svg",
        imageAlt: "Analytics & Intelligence Icon",
        title: "Turn banking data into actionable intelligence.",
        desc: "Connect enterprise data and AI models to help teams understand performance and make faster, data-driven decisions.",
        capabilities: [
          "Real-Time Analytics",
          "Predictive Insights",
          "Credit & Risk Intelligence",
          "Business Dashboards",
        ],
      },
    ],
  },
  HomeFaq: {
    eyebrow: "FAQs",
    title: "Frequently Asked Questions About AI in Banking",
    faqs: bankingFaqs,
  },
};

export default function BankingContent() {
  return <IndustryPageLayout config={bankingConfig} />;
}