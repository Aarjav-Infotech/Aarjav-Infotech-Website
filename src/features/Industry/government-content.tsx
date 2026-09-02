"use client";

import IndustryPageLayout, {
  type IndustryConfig,
} from "@/features/Industry/industry-page-layout";

const governmentFaqs = [
  {
    question:
      "What exactly is an Agentic OS for government and how is it different from standard citizen portals or RPA?",
    answer:
      "Citizen portals only display static forms, and RPA handles simple automated entries. An Agentic OS orchestrates multi-agency workflows, cross-references records, validates submitted documentation, and automates public service triage with full regulatory oversight.",
  },
  {
    question:
      "Do we need to replace our existing case management, ERP, or legacy government databases?",
    answer:
      "No. The platform deploys as an orchestration and intelligence plane directly over your existing infrastructure, connecting through secure APIs and FedRAMP-grade connectors without altering core agency systems of record.",
  },
  {
    question:
      "How does the system ensure statutory compliance and maintain public accountability?",
    answer:
      "Every workflow produces an immutable, time-stamped audit trail tracking data provenance and decisions. Critical actions involving benefit allocations, citizen rights, or legal interpretations require explicit human-in-the-loop authorization.",
  },
  {
    question:
      "Who controls the sovereign data, agency policies, and deployed agents?",
    answer:
      "Your agency retains 100% data ownership. Systems run inside isolated, sovereign government cloud enclaves or on-premise infrastructure. Citizen records and public intelligence never cross institutional boundaries or train commercial models.",
  },
];

const governmentConfig: IndustryConfig = {
  eyebrow: "",
  heroTitle: "AI That Makes Government Operations Smarter",
  heroDescription:
    "Transform public sector operations with intelligent AI solutions that automate complex workflows, accelerate citizen services, and create faster, more connected experiences for agencies and communities.",
  stats: [
    { value: "40%", label: "FASTER PROCESSING" },
    { value: "60%", label: "LESS MANUAL WORK" },
    { value: "24/7", label: "AI ASSISTANCE" },
    { value: "99%", label: "DATA ACCURACY" },
  ],
  platformSection: {
    eyebrow: "AI in Government",
    title: "One Connected Platform for Every Public Service",
    description:
      "Bring AI agents, government applications, enterprise data, documents, and operational workflows together in an intelligent ecosystem.",
    imageSrc: "/images/common-industries.svg",
    imageAlt: "Government Agentic OS Control Plane Diagram",
  },
  strategySection: {
    eyebrow: "The Challenges",
    title: "The Right AI Strategy Changes Everything",
    description:
      "Government organizations manage large volumes of information, complex processes, and high-service expectations. AI can help remove operational bottlenecks while keeping teams focused on higher-value work.",
    cards: [
      {
        title: "Manual Administrative Work",
        desc: "Teams spend significant time handling repetitive requests, forms, documents, approvals, and data entry tasks.",
      },
      {
        title: "Disconnected Systems",
        desc: "Information sits across multiple systems and departments, making it difficult to access a complete view of operations.",
      },
      {
        title: "Slow Service Delivery",
        desc: "Manual workflows and lengthy approval processes can delay services and create unnecessary friction for citizens and employees.",
      },
      {
        title: "Complex Compliance",
        desc: "Public sector operations require strong governance, traceability, security, and adherence to regulatory mandates.",
      },
    ],
  },
  transformSection: {
    eyebrow: "Our Approach",
    title: "Transforming Government Operations with AI",
    description:
      "We identify high-impact processes, connect your existing technology, and deploy AI-powered workflows that improve efficiency without disrupting the systems already in place.",
    steps: [
      {
        number: "01",
        title: "Identify Where AI Creates Value",
        desc: "Understand existing processes, operational bottlenecks, data sources, and user journeys to identify the workflows with the greatest automation potential.",
        highlight:
          "The Government OS is not a case management replacement. It's the intelligence layer that makes every system your agency runs work toward your mission objectives.",
      },
      {
        number: "02",
        title: "Bring Systems Together",
        desc: "Connect government applications, databases, CRMs, ERPs, document repositories, APIs, and other enterprise systems into a unified workflow.",
        highlight:
          "Every agent action traces back to a stated mission objective and a documented compliance position. Health and human services get the trail they require.",
      },
      {
        number: "03",
        title: "Put AI Agents to Work",
        desc: "Deploy AI agents to handle information requests, document processing, workflow routing, service automation, and administrative tasks.",
        highlight:
          "Agents pause for human authorization on every decision affecting citizen rights, benefit determinations, and policy interpretations.",
      },
      {
        number: "04",
        title: "Continuously Optimize Operations",
        desc: "Monitor performance, identify bottlenecks, measure outcomes, and continuously improve your workflows as operational requirements evolve.",
        highlight:
          "Service outcomes lead every service delivery cycle. The OS builds institutional knowledge that stays in the system.",
      },
    ],
  },
  lifecycleSection: {
    eyebrow: "AI Solutions",
    title: "How AI Transforms Government Operations",
    description:
      "From citizen services to internal administration, apply AI across the workflows that matter most.",
    cards: [
      {
        imageSrc: "/images/solution-1.svg",
        imageAlt: "Citizen Service Automation Icon",
        title: "Citizen Service Automation",
        desc: "AI voice and chat agents provide instant assistance for citizen questions, service requests, status updates, and routine inquiries.",
        capabilities: ["Citizen Support", "AI Voice & Chat Agents"],
      },
      {
        imageSrc: "/images/solution-2.svg",
        imageAlt: "Document & Data Processing Icon",
        title: "Document & Data Processing",
        desc: "Extract, classify, validate, and organize information from license applications, reports, and other government documents.",
        capabilities: ["OCR", "Data Extraction", "Classification"],
      },
      {
        imageSrc: "/images/solution-3.svg",
        imageAlt: "Workflow Automation Icon",
        title: "Workflow Automation",
        desc: "Automate approvals, routing, notifications, case management, and repetitive administrative processes across agency teams.",
        capabilities: ["Approvals", "Routing", "Case Management"],
      },
      {
        imageSrc: "/images/solution-4.svg",
        imageAlt: "Enterprise Integration Icon",
        title: "Enterprise Integration",
        desc: "Connect AI agents with existing government applications, CRMs, databases, ERPs, and legacy systems.",
        capabilities: ["APIs", "ERP/CRM Integration", "Data Syncing"],
      },
    ],
  },
  HomeFaq: {
    eyebrow: "FAQs",
    title: "Frequently Asked Questions About AI in Government",
    faqs: governmentFaqs,
  },
};

export default function GovernmentContent() {
  return <IndustryPageLayout config={governmentConfig} />;
}