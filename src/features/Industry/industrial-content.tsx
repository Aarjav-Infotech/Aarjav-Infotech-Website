"use client";

import IndustryPageLayout, {
  type IndustryConfig,
} from "@/features/Industry/industry-page-layout";

const industrialConfig: IndustryConfig = {
  eyebrow: "Industries - Industrial",
  heroTitle: (
    <>
      AI That Powers Smarter <br /> Industrial Operations
    </>
  ),
  heroDescription:
    "Connect AI agents, industrial data, enterprise systems, and operational workflows to automate processes, improve productivity, and make industrial operations more intelligent.",
  stats: [
    { value: "3x", label: "FASTER PROCESSING" },
    { value: "70%", label: "LESS MANUAL WORK" },
    { value: "24/7", label: "AI ASSISTANCE" },
    { value: "99%", label: "DATA ACCURACY" },
  ],
  platformSection: {
    eyebrow: "The Architecture",
    title: "One Industrial Objective. Every Operation Connected.",
    description:
      "Bring production data, machines, enterprise applications, AI agents, documents, and operational workflows together through one intelligent industrial ecosystem.",
    imageSrc: "/images/common-industries.svg",
    imageAlt: "Industrial Agentic OS Control Plane Diagram",
  },
  strategySection: {
    eyebrow: "The Challenges",
    title: "The Right AI Strategy Changes Everything.",
    description:
      "Industrial businesses operate across complex processes, disconnected systems, equipment, suppliers, and large volumes of operational data. AI can bring these workflows together and reduce the burden of manual operations.",
    cards: [
      {
        title: "Disconnected Operations",
        desc: "Production, inventory, procurement, maintenance, and business data often live across different systems, making it difficult to maintain a unified operational view.",
      },
      {
        title: "Manual Processes",
        desc: "Teams spend valuable time handling production reports, purchase orders, quality records, maintenance requests, and operational documentation manually.",
      },
      {
        title: "Reactive Maintenance",
        desc: "Equipment issues can lead to unexpected downtime when maintenance teams rely primarily on scheduled checks or manual monitoring.",
      },
      {
        title: "Slow Decision-Making",
        desc: "Operational decisions often require information from multiple systems, teams, and data sources before action can be taken.",
      },
    ],
  },
  transformSection: {
    eyebrow: "Our Approach",
    title: "This Is How Industrial Operations Transform",
    description:
      "Connect your existing industrial systems with AI agents and automated workflows to make operations faster, more predictive, and easier to manage.",
    steps: [
      {
        number: "01",
        title: "Connect Industrial Data Streams",
        desc: "Connect telemetry, machine sensors, inventory logs, supply chain feeds, and maintenance records into unified operational pipelines.",
        highlight:
          "The Industrial OS bridges existing SCADA, MES, and ERP systems without disrupting live factory floor and warehouse operations.",
      },
      {
        number: "02",
        title: "Give AI Operational Context",
        desc: "Train AI agents on operational guidelines, standard operating procedures (SOPs), safety protocols, and machine spec sheets.",
        highlight:
          "Every AI-driven action is bounded by deterministic safety limits and strict engineering tolerances for guaranteed reliability.",
      },
      {
        number: "03",
        title: "Automate Repetitive Workflows",
        desc: "Deploy AI agents for automated shift logging, purchase order triage, spare parts requisition, and compliance reporting.",
        highlight:
          "Autonomous workflows alert human supervisors for critical deviations, allowing technicians to focus on high-value machinery upkeep.",
      },
      {
        number: "04",
        title: "Continuous Plant & Supply Optimization",
        desc: "Continuously monitor throughput, defect rates, energy consumption, and equipment uptime to optimize operational efficiency.",
        highlight:
          "Institutional knowledge—from machine calibration nuances to supplier reliability patterns—is preserved indefinitely in the OS.",
      },
    ],
  },
  lifecycleSection: {
    eyebrow: "AI Solutions",
    title: "Intelligence Across Industrial Operations",
    description:
      "Apply AI across key industrial touchpoints—from predictive maintenance and quality inspection to supply chain orchestration.",
    cards: [
      {
        imageSrc: "/images/solution-1.svg",
        imageAlt: "Predictive Maintenance & Health Icon",
        title: "Predictive Maintenance & Monitoring",
        desc: "Analyze machine telemetry, vibration data, and temperature logs to detect anomalies and predict equipment failure before downtime happens.",
        capabilities: [
          "Vibration & Sensor Analysis",
          "Downtime Prediction",
          "Automated Work Orders",
          "24/7 Asset Health",
        ],
      },
      {
        imageSrc: "/images/solution-2.svg",
        imageAlt: "Intelligent Supply Chain & Inventory Icon",
        title: "Intelligent Supply Chain & Inventory",
        desc: "Automate purchase orders, reorder point triggers, supplier communications, and material delivery tracking across plants.",
        capabilities: [
          "Dynamic Reorder Triggers",
          "Supplier Order Automation",
          "Inventory Forecasting",
          "ERP Sync",
        ],
      },
      {
        imageSrc: "/images/solution-3.svg",
        imageAlt: "Automated Quality Inspection & Safety Icon",
        title: "Automated Quality Inspection & Safety",
        desc: "Extract, classify, and summarize defect logs, compliance certifications, and environmental safety audits instantly.",
        capabilities: [
          "Visual Quality Triage",
          "Defect Classification",
          "Safety Audit Summarization",
          "Regulatory Compliance",
        ],
      },
      {
        imageSrc: "/images/solution-4.svg",
        imageAlt: "Connected Plant Orchestration Icon",
        title: "Connected Plant & Shift Orchestration",
        desc: "Connect field teams, technicians, and operations managers with AI assistants for shift handovers, SOP search, and fast troubleshooting.",
        capabilities: [
          "Interactive SOP Assistant",
          "Shift Handover Reports",
          "Cross-Plant Analytics",
          "Unified Executive Dashboards",
        ],
      },
    ],
  },
};

export default function IndustrialContent() {
  return <IndustryPageLayout config={industrialConfig} />;
}
