"use client";

import IndustryPageLayout, {
  type IndustryConfig,
} from "@/features/Industry/industry-page-layout";

const realEstateConfig: IndustryConfig = {
  eyebrow: "",
  heroTitle: (
    <>
      AI That Powers Smarter
      <br />
      Real Estate
    </>
  ),
  heroDescription:
    "Connect AI agents, property data, customer interactions, and real-estate workflows to automate operations, accelerate transactions, and deliver better experiences for buyers, sellers, agents, and property teams.",
  stats: [
    { value: "3x", label: "FASTER PROCESSING" },
    { value: "70%", label: "LESS MANUAL WORK" },
    { value: "24/7", label: "AI ASSISTANCE" },
    { value: "99%", label: "DATA ACCURACY" },
  ],
  platformSection: {
    eyebrow: "Real Estate Transformation",
    title: "One Property Objective. Every Workflow Connected.",
    description:
      "Bring property data, customer interactions, AI agents, documents, CRM systems, and operational workflows together through one intelligent real-estate ecosystem.",
    imageSrc: "/images/common-industries.svg",
    imageAlt: "Real Estate Agentic OS Control Plane Diagram",
  },
  strategySection: {
    eyebrow: "The Challenges",
    title: "The Right AI Strategy Changes Everything.",
    description:
      "Real-estate businesses manage large volumes of leads, property information, documents, inquiries, and follow-ups. Intelligent automation can connect these activities and reduce the operational workload.",
    cards: [
      {
        title: "Leads Get Lost",
        desc: "Property inquiries arrive through multiple channels, making it difficult for sales teams to respond quickly and consistently.",
      },
      {
        title: "Property Data Is Fragmented",
        desc: "Property details, availability, pricing, documents, and customer information often live across different platforms and systems.",
      },
      {
        title: "Too Much Manual Documentation",
        desc: "Property agreements, applications, verification documents, invoices, and other records require repetitive processing and review.",
      },
      {
        title: "Slow Follow-Ups",
        desc: "Agents and sales teams spend significant time qualifying prospects, scheduling visits, answering questions, and following up with potential buyers or tenants.",
      },
    ],
  },
  transformSection: {
    eyebrow: "Our Approach",
    title: "This Is How Real Estate Operations Transform",
    description:
      "Connect your existing real-estate systems with AI agents and automated workflows to make every stage of the property journey faster, more connected, and easier to manage.",
    steps: [
      {
        number: "01",
        title: "Capture Every Property Opportunity",
        desc: "Collect inquiries, leads, property requirements, documents, and customer interactions from multiple channels into connected workflows.",
        highlight:
          "Connect property listings, buyer inquiries, tenant requests, and lead data across channels so every opportunity is captured, organized, and ready for action.",
      },
      {
        number: "02",
        title: "Give AI the Right Property Context",
        desc: "AI agents can understand property information, customer requirements, documents, pricing data, availability, and business rules to deliver.",
        highlight:
          "AI brings together property details, pricing, availability, location, customer preferences, and business rules to deliver relevant recommendations and responses.",
      },
      {
        number: "03",
        title: "Let AI Handle the Repetitive Work",
        desc: "Automate lead qualification, property recommendations, follow-ups, scheduling, document processing, customer communication, and operational tasks.",
        highlight:
          "AI agents automate lead qualification, property matching, follow-ups, scheduling, document processing, and routine customer communication.",
      },
      {
        number: "04",
        title: "Turn Real Estate Data Into Better Decisions",
        desc: "Monitor workflow performance, customer activity, property demand, sales pipelines, and operational processes to continuously improve business outcomes.",
        highlight:
          "Connect sales, property, customer, and operational data to identify trends, improve performance, and make faster, data-driven real estate decisions.",
      },
    ],
  },
  lifecycleSection: {
    eyebrow: "AI Solutions",
    title: "Intelligence Across the Property Lifecycle",
    description:
      "Apply AI across the workflows that matter most—from property discovery and lead conversion to documentation and property operations.",
    cards: [
      {
        imageSrc: "/images/solution-1.svg",
        imageAlt: "Help Customers Find the Right Property Icon",
        title: "Help Customers Find the Right Property",
        desc: "AI agents can understand buyer and tenant preferences and help surface relevant properties based on location, budget, requirements, amenities, and availability.",
        capabilities: [
          "Property Search",
          "Recommendations",
          "AI Assistant",
          "Availability",
        ],
      },
      {
        imageSrc: "/images/solution-2.svg",
        imageAlt: "Turn More Inquiries Into Opportunities Icon",
        title: "Turn More Inquiries Into Opportunities",
        desc: "Automatically capture, qualify, route, and follow up with property leads while keeping sales teams focused on high-value conversations.",
        capabilities: [
          "Lead Qualification",
          "Smart Routing",
          "Follow-Ups",
          "CRM Automation",
        ],
      },
      {
        imageSrc: "/images/solution-3.svg",
        imageAlt: "Make Property Documentation Smarter Icon",
        title: "Make Property Documentation Smarter",
        desc: "Extract, classify, validate, summarize, and organize information from agreements, applications, verification documents, invoices, and transaction records.",
        capabilities: [
          "Document AI",
          "Data Extraction",
          "Verification",
          "Workflow Automation",
        ],
      },
      {
        imageSrc: "/images/solution-4.svg",
        imageAlt: "Automate the Work Behind Every Property Icon",
        title: "Automate the Work Behind Every Property",
        desc: "Connect property management workflows, tenant requests, maintenance operations, communications, and internal processes through intelligent automation.",
        capabilities: [
          "Tenant Support",
          "Maintenance",
          "Property Management",
          "Operations",
        ],
      },
    ],
  },
};

export default function RealEstateContent() {
  return <IndustryPageLayout config={realEstateConfig} />;
}
