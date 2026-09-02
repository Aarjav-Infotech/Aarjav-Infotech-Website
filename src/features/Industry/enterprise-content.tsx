"use client";

import IndustryPageLayout, {
  type IndustryConfig,
} from "@/features/Industry/industry-page-layout";

const enterpriseFaqs = [
  {
    question:
      "What exactly is an Enterprise Agentic OS and how is it different from standard RPA or point AI tools?",
    answer:
      "RPA automates repetitive clicks on fixed UIs. Point AI tools solve single, isolated prompts. An Enterprise Agentic OS coordinates cross-departmental operations—from ERP data sync and invoice processing to multi-agent approvals—governed by unified enterprise security.",
  },
  {
    question:
      "Do we need to replace our current ERP, CRM, or data warehouse infrastructure?",
    answer:
      "No. The platform deploys as an intelligent orchestration plane directly above your existing systems (SAP, Oracle, Salesforce, Microsoft Dynamics, Snowflake), connecting them via bi-directional, authenticated APIs without disrupting business continuity.",
  },
  {
    question:
      "How quickly can we deploy and run an enterprise AI workflow in production?",
    answer:
      "Production-ready workflows deploy in 4 to 6 weeks. Standardized pre-built enterprise connectors and role-based validation checkpoints allow IT and security teams to review, audit, and sign off rapidly.",
  },
  {
    question:
      "Who owns the enterprise data, custom agents, and fine-tuned models?",
    answer:
      "Your organization retains 100% data and model ownership. Everything runs in your sovereign VPC or private cloud environment. Proprietary records and internal communications never leave your perimeter or train public third-party models.",
  },
];

const enterpriseConfig: IndustryConfig = {
  eyebrow: "",
  heroTitle: (
    <>
      AI That Powers the <br /> Modern Enterprise
    </>
  ),
  heroDescription:
    "Connect AI agents, enterprise applications, business data, and workflows to automate operations, improve decision-making, and build a more intelligent organization.",
  stats: [
    { value: "3x", label: "FASTER PROCESSING" },
    { value: "70%", label: "LESS MANUAL WORK" },
    { value: "24/7", label: "AI ASSISTANCE" },
    { value: "99%", label: "DATA ACCURACY" },
  ],
  platformSection: {
    eyebrow: "The Architecture",
    title: "One Business Objective. Every System Connected.",
    description:
      "Bring enterprise applications, AI agents, data pipelines, documents, business processes, and decision-making workflows together through one intelligent ecosystem.",
    imageSrc: "/images/common-industries.svg",
    imageAlt: "Enterprise Agentic OS Control Plane Diagram",
  },
  strategySection: {
    eyebrow: "The Challenges",
    title: "The Right AI Strategy Changes Everything.",
    description:
      "Large organizations operate across departments, applications, teams, and data sources. AI can connect these fragmented workflows and turn operational complexity into intelligent processes.",
    cards: [
      {
        title: "Disconnected Systems",
        desc: "Enterprise data is spread across ERP, CRM, HR, finance, operational tools, and custom applications, making it difficult to maintain a unified view.",
      },
      {
        title: "Repetitive Operations",
        desc: "Teams spend significant time on manual data entry, document processing, reporting, approvals, customer requests, and administrative workflows.",
      },
      {
        title: "Slow Decision-Making",
        desc: "Important decisions often require information from multiple departments and systems before teams can take action.",
      },
      {
        title: "Complex Scaling",
        desc: "As organizations grow, processes become harder to standardize, monitor, and optimize across departments and locations.",
      },
    ],
  },
  transformSection: {
    eyebrow: "Our Approach",
    title: "This Is How Enterprises Transform With AI",
    description:
      "Connect your existing technology with AI agents and intelligent workflows to make operations more connected, automated, and scalable.",
    steps: [
      {
        number: "01",
        title: "Bring Every Business System Together",
        desc: "Connect enterprise applications, data sources, documents, APIs, and workflows into one intelligent operating layer.",
        highlight:
          "Connect ERP platforms, CRM systems, data sources, documents, APIs, and internal applications into one connected enterprise environment.",
      },
      {
        number: "02",
        title: "Give AI the Full Business Context",
        desc: "AI agents can understand business data, processes, documents, customer information, operational rules, and organizational context before taking action.",
        highlight:
          "Bring together operational data, customer information, documents, workflows, policies, and organizational knowledge so AI can understand the complete business context.",
      },
      {
        number: "03",
        title: "Let AI Run the Repetitive Work",
        desc: "Automate approvals, reporting, document processing, customer support, data movement, employee workflows, and cross-system processes.",
        highlight:
          "AI agents automate approvals, reporting, document processing, employee workflows, customer support, and routine cross-system tasks—reducing manual effort across teams.",
      },
      {
        number: "04",
        title: "Turn Enterprise Data Into Better Decisions",
        desc: "Monitor processes, identify bottlenecks, understand performance, and continuously improve workflows across the organization.",
        highlight:
          "Connect data across departments to uncover trends, monitor performance, identify bottlenecks, and help teams make faster, more informed business decisions.",
      },
    ],
  },
  lifecycleSection: {
    eyebrow: "AI Solutions",
    title: "Intelligence Across Every Business Function",
    description:
      "Deploy AI where it can create the greatest operational impact—from customer experience and finance to internal operations and decision-making.",
    cards: [
      {
        imageSrc: "/images/solution-1.svg",
        imageAlt: "Automate Work Across Departments Icon",
        title: "Automate Work Across Departments",
        desc: "Connect business processes and automate repetitive workflows across operations, finance, HR, sales, customer service, and administration.",
        capabilities: [
          "Process Automation",
          "Approvals",
          "Task Automation",
          "Cross-System Workflows",
        ],
      },
      {
        imageSrc: "/images/solution-2.svg",
        imageAlt: "Give Every Team an Intelligent Assistant Icon",
        title: "Give Every Team an Intelligent Assistant",
        desc: "Deploy specialized AI agents that can answer questions, perform tasks, retrieve information, and support employees across business functions.",
        capabilities: [
          "AI Assistants",
          "Task Agents",
          "Knowledge Agents",
          "Multi-Agent Workflows",
        ],
      },
      {
        imageSrc: "/images/solution-3.svg",
        imageAlt: "Turn Business Data Into Action Icon",
        title: "Turn Business Data Into Action",
        desc: "Process documents, connect data sources, extract insights, and make enterprise information accessible to both people and AI systems.",
        capabilities: [
          "Document AI",
          "Data Extraction",
          "Data Pipelines",
          "Knowledge Systems",
        ],
      },
      {
        imageSrc: "/images/solution-4.svg",
        imageAlt: "Build Around Your Enterprise Icon",
        title: "Build Around Your Enterprise",
        desc: "Extend existing ERP and business platforms with AI-powered modules, custom workflows, intelligent dashboards, and purpose-built enterprise applications.",
        capabilities: [
          "ERP Solutions",
          "CRM Integration",
          "Custom Platforms",
          "Business Applications",
        ],
      },
    ],
  },
  HomeFaq: {
    eyebrow: "FAQs",
    title: "Frequently Asked Questions About Enterprise AI",
    faqs: enterpriseFaqs,
  },
};

export default function EnterpriseContent() {
  return <IndustryPageLayout config={enterpriseConfig} />;
}