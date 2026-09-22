"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { asset } from "@/lib/cdn";

interface CaseStudyItem {
  id: string;
  number: string;
  title: string;
  tags: string[];
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  industry: string;
  technologies: string[];
  projectDetailsText: string[];
  projectResearchText: string[];
  projectResultsText: string[];
  metrics: { label: string; value: string }[];
}

const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "sahaj-construction",
    number: "01",
    title: "Sahaj Construction",
    tags: ["REACT", "NODE.JS", "POSTGRESQL", "TAILWIND CSS", "UI/UX DESIGN"],
    subtitle: "Full-Stack Construction Website",
    description:
      "A complete full-stack construction company website built with Vite, React, Tailwind CSS, and Node.js. Designed to showcase projects, services, and company credentials with a modern, responsive layout optimised for mobile, tablet, and desktop.",
    imageSrc: asset("/images/case-studys-1.svg"),
    imageAlt: "Sahaj Construction Website Preview",
    industry: "Construction & Infrastructure",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "UI/UX Design",
    ],
    projectDetailsText: [
      "Sahaj Construction required a modern digital presence to showcase its large-scale infrastructure projects, government partnerships, and engineering expertise. The objective was to create a responsive website that reflects the company's credibility while making it easier for clients, stakeholders, and partners to explore its services and completed projects.",
      "We designed and developed a high-performance full-stack website with a clean, modern interface that highlights the company's portfolio, business capabilities, certifications, and ongoing initiatives. Built with React, Node.js, PostgreSQL, and Tailwind CSS, the platform delivers a seamless experience across desktop, tablet, and mobile devices while providing a scalable foundation for future growth.",
    ],
    projectResearchText: [
      "Before development began, we conducted a detailed analysis of Sahaj Construction's business objectives, target audience, and existing digital presence. The research focused on understanding how government agencies, enterprise clients, and project stakeholders interact with infrastructure companies online and what information they expect during their decision-making process.",
      "The website architecture was designed to prioritize project visibility, company credibility, and easy navigation. We introduced a structured content hierarchy, allowing users to quickly access services, completed projects, certifications, company information, and contact details. Special attention was given to responsive design, accessibility, page performance, and scalability to ensure the platform remains effective as the company continues to expand its portfolio.",
    ],
    projectResultsText: [
      "The new website significantly enhanced Sahaj Construction's digital presence by presenting its engineering capabilities through a modern and professional interface. The improved information architecture made it easier for visitors to explore projects, understand services, and engage with the company across all devices. The responsive design, optimized performance, and scalable full-stack architecture provide a reliable foundation for future business growth. With improved usability, stronger visual branding, and a seamless browsing experience, the platform now better represents the company's expertise while strengthening credibility among government agencies, enterprise clients, and infrastructure partners.",
    ],
    metrics: [
      { value: "On-time", label: "DELIVERY" },
      { value: "100%", label: "RESPONSIVE" },
      { value: "Full", label: "STACK" },
    ],
  },
  {
    id: "glamora-jewels",
    number: "02",
    title: "Glamora Jewels",
    tags: ["REACT", "NODE.JS", "POSTGRESQL", "CONTENT SEO"],
    subtitle: "Luxury Jewelry Landing Page",
    description:
      "A high-converting landing page for a fine jewelry brand focused on showcasing 10K, 14K & 18K gold with lab-grown diamonds. Delivered with fast load performance, optimised SEO, and a conversion-driven UI/UX across all devices.",
    imageSrc: asset("/images/case-studys-2.svg"),
    imageAlt: "Glamora Jewels Landing Page Preview",
    industry: "Luxury Retail & E-Commerce",
    technologies: ["React", "Node.js", "PostgreSQL", "Content SEO"],
    projectDetailsText: [
      "Glamora Jewels needed a high-converting digital storefront to showcase fine lab-grown diamond jewelry lines and communicate brand quality directly to buyers.",
      "We built a tailored high-performance web experience focused on swift page transitions, mobile responsiveness, and high-resolution visual storytelling.",
    ],
    projectResearchText: [
      "Conducted research across luxury retail platforms to optimize high-density image delivery without sacrificing frame rate or page speed scores.",
    ],
    projectResultsText: [
      "Achieved a 40% boost in online inquiries and improved mobile engagement by over 50% within the first two months.",
    ],
    metrics: [
      { value: "On-time", label: "DELIVERY" },
      { value: "100%", label: "RESPONSIVE" },
      { value: "Top 3", label: "SEO RANK" },
    ],
  },
  {
    id: "delfa-pattern-generator",
    number: "03",
    title: "Delfa Pattern Generator",
    tags: ["NEXT.JS", "MACHINE LEARNING", "GAN", "PYTHON", "AI PLATFORM"],
    subtitle: "AI-Powered Textile Design Platform",
    description:
      "An AI-powered platform generating production-ready textile patterns using ML models trained on domain-specific datasets. Users customise parameters to create unique designs dynamically. Includes layer separation, image upscaling, and a credit-based system for controlled monetization.",
    imageSrc: asset("/images/case-studys-3.svg"),
    imageAlt: "Delfa Pattern Generator Preview",
    industry: "AI & Textile Technology",
    technologies: [
      "Next.js",
      "Machine Learning",
      "GAN",
      "Python",
      "AI Platform",
    ],
    projectDetailsText: [
      "An end-to-end web platform leveraging generative adversarial networks (GANs) to assist textile designers in instantly creating high-resolution patterns.",
    ],
    projectResearchText: [
      "Focused on reducing generative model inferencing latencies and creating an intuitive UI for layered color separation controls.",
    ],
    projectResultsText: [
      "Accelerated designer turnaround time from days to minutes, processing thousands of generated variations daily.",
    ],
    metrics: [
      { value: "Real-time", label: "PROCESSING" },
      { value: "100%", label: "RESPONSIVE" },
      { value: "Custom", label: "AI ENGINE" },
    ],
  },
  {
    id: "zeeva-chemical-llp",
    number: "04",
    title: "Zeeva Chemical LLP",
    tags: [
      "NEXT.JS",
      "NODE.JS",
      "UI/UX DESIGN",
      "BRAND DESIGN",
      "RESPONSIVE WEB",
    ],
    subtitle: "Modern Corporate & Chemical Portfolio Website",
    description:
      "Zeeva Chemical LLP required a modern corporate website to strengthen its digital presence and professionally showcase its chemical and aerosol product portfolio. The objective was to create a clean, trustworthy platform that communicates the company’s manufacturing capabilities, industries served, product expertise, and brand values while making information easy to discover.",
    imageSrc: asset("/images/case-studys-1.svg"),
    imageAlt: "Zeeva Chemical LLP Website Preview",
    industry: "Chemical Manufacturing & Aerosol Products",
    technologies: [
      "Next.js",
      "Node.js",
      "UI/UX Design",
      "Brand Design",
      "Responsive Web",
    ],
    projectDetailsText: [
      "Zeeva Chemical LLP required a modern corporate website to strengthen its digital presence and professionally showcase its chemical and aerosol product portfolio. The objective was to create a clean, trustworthy platform that communicates the company’s manufacturing capabilities, industries served, product expertise, and brand values while making information easy to discover.",
      "We designed and developed a responsive, product-focused website with a clear information hierarchy and intuitive navigation. Special attention was given to product presentation, corporate credibility, visual consistency, and usability across desktop, tablet, and mobile devices. The overall experience was designed to help potential customers, distributors, and business partners quickly understand Zeeva Chemical LLP and explore its offerings.",
    ],
    projectResearchText: [
      "Before starting the design, we studied Zeeva Chemical LLP’s business model, product categories, target customers, and existing brand presence. The research focused on understanding how customers and business partners evaluate chemical manufacturers online and what information helps establish credibility during the decision-making process.",
      "One of the key challenges was presenting technical and product-related information without making the website feel complex or overwhelming. We therefore created a structured content hierarchy that separates company information, industries, products, partnerships, and contact information into clearly defined journeys.",
      "The visual direction was kept clean and corporate, using strong typography, generous spacing, structured product layouts, and consistent brand elements. Responsive behaviour and accessibility were also considered to ensure that users could comfortably explore the website across different screen sizes.",
    ],
    projectResultsText: [
      "The redesigned website gave Zeeva Chemical LLP a more professional and credible digital identity while making its product portfolio significantly easier to explore. Clear navigation and structured product pages help visitors understand the company’s capabilities without navigating through unnecessary information.",
      "The new responsive experience also creates greater consistency across desktop, tablet, and mobile devices. Combined with improved content hierarchy, brand presentation, and optimized page structure, the website now provides Zeeva Chemical LLP with a scalable digital foundation that can accommodate additional products, industries, and company information as the business grows.",
    ],
    metrics: [
      { value: "Product-Focused", label: "EXPERIENCE" },
      { value: "100%", label: "RESPONSIVE" },
      { value: "Scalable", label: "ARCHITECTURE" },
    ],
  },
  {
    id: "professor-andrew-caplin",
    number: "05",
    title: "Professor Andrew Caplin Website",
    tags: ["REACT", "NODE.JS", "OPENAI API", "GOOGLE ANALYTICS", "AI CHATBOT"],
    subtitle: "Interactive Academic Portfolio & AI Support Platform",
    description:
      "A modern academic portfolio platform presenting research, publications, and books, featuring interactive questionnaires, an economics Q&A forum, and an AI-powered contextual chatbot.",
    imageSrc: asset("/images/case-studys-2.svg"),
    imageAlt: "Professor Andrew Caplin Website Preview",
    industry: "Education & Academic Research",
    technologies: [
      "React",
      "Node.js",
      "OpenAI API",
      "Google Analytics",
      "AI Chatbot",
    ],
    projectDetailsText: [
      "Professor Andrew Caplin required a modern academic portfolio website to present his research, publications, books, and economics-related work in a more accessible digital format. The platform was designed to serve students, researchers, and readers while providing an organized space for academic content and discussions.",
      "We developed a full-stack website with interactive features including a book launch platform, questionnaires, an economics Q&A forum, and an AI-powered chatbot. The chatbot uses the OpenAI API to help users understand book concepts and receive contextual support for economics-related questions.",
    ],
    projectResearchText: [
      "The research phase focused on understanding how students, researchers, and general readers interact with academic websites. The key requirement was to organize a large amount of research, publication, book, and educational content without making the platform difficult to navigate.",
      "We created a structured information architecture that separates academic content, books, research resources, questionnaires, and discussions into clear user journeys. Special attention was given to making complex economics content easier to discover and understand.",
    ],
    projectResultsText: [
      "The completed platform transformed the traditional academic portfolio into a more interactive digital experience. Users can explore Professor Andrew Caplin’s work, participate in book-related questionnaires, engage in economics discussions, and access research content through a clear and organized interface.",
      "The AI chatbot further improves the experience by providing contextual explanations for book topics and economics-related questions. The scalable architecture also makes it easier to expand the platform with new research, publications, educational resources, and interactive features in the future.",
    ],
    metrics: [
      { value: "AI-Powered", label: "LEARNING SUPPORT" },
      { value: "100%", label: "RESPONSIVE" },
      { value: "Full Stack", label: "DEVELOPMENT" },
    ],
  },
  {
    id: "the-custom-club",
    number: "06",
    title: "The Custom Club",
    tags: ["SHOPIFY", "UI/UX DESIGN", "UI ANIMATION", "RESPONSIVE DESIGN"],
    subtitle: "High-End E-Commerce Jewelry Storefront",
    description:
      "A conversion-focused Shopify storefront showcasing fine jewelry collections with smooth UI animations, product-first visual storytelling, and frictionless navigation across devices.",
    imageSrc: asset("/images/case-studys-3.svg"),
    imageAlt: "The Custom Club Preview",
    industry: "Jewelry & E-commerce",
    technologies: [
      "Shopify",
      "UI/UX Design",
      "UI Animation",
      "Responsive Design",
    ],
    projectDetailsText: [
      "The Custom Club required a modern, conversion-focused e-commerce experience to showcase its jewelry collections and strengthen its online brand presence. The objective was to create a visually refined shopping experience where customers could easily discover products while maintaining the premium character of the brand.",
      "We designed and developed the experience using Shopify, focusing on responsive layouts, engaging product presentation, smooth UI interactions, and simplified navigation. The interface was optimized across devices to create a consistent shopping journey from product discovery through purchase.",
    ],
    projectResearchText: [
      "The research focused on understanding how customers browse and evaluate jewelry online. Since product visuals play an important role in purchase decisions, the experience needed to keep products at the center while avoiding unnecessary visual distractions.",
      "We created a clear content hierarchy for collections, product information, pricing, offers, and calls to action. The layouts were designed to make browsing effortless while maintaining a premium and minimal visual identity across the website.",
    ],
    projectResultsText: [
      "The redesigned experience created a cleaner and more engaging digital storefront for The Custom Club. Improved product presentation and simplified navigation allow customers to discover collections and understand product details more efficiently.",
      "Responsive layouts, optimized interactions, and lightweight UI elements provide a consistent experience across desktop and mobile devices. The scalable Shopify structure also allows the brand to easily introduce new products, collections, campaigns, and promotional content.",
    ],
    metrics: [
      { value: "Product-First", label: "SHOPPING EXPERIENCE" },
      { value: "100%", label: "RESPONSIVE" },
      { value: "Shopify", label: "E-COMMERCE" },
    ],
  },
  {
    id: "salepulse",
    number: "07",
    title: "SalePulse",
    tags: ["REACT", "DJANGO", "REDIS", "ORDER MANAGEMENT", "E-COMMERCE"],
    subtitle: "Imitation Jewelry Inventory & Order Management Platform",
    description:
      "A full-stack centralized management portal providing SKU-based inventory tracking, real-time stock updates, order processing, delivery management, and return workflows.",
    imageSrc: asset("/images/case-studys-1.svg"),
    imageAlt: "SalePulse Management Platform Preview",
    industry: "Jewelry & Retail Management",
    technologies: [
      "React",
      "Django",
      "Redis",
      "Order Management",
      "E-commerce",
    ],
    projectDetailsText: [
      "SalePulse is an end-to-end imitation jewelry management platform designed to simplify inventory, sales, orders, deliveries, returns, and refunds from a single system. The objective was to replace fragmented operational processes with a centralized platform that provides better visibility across the complete sales lifecycle.",
      "We developed a full-stack management portal with SKU-based inventory tracking, real-time stock updates, order processing, delivery management, and return workflows. The system was structured to reduce repetitive manual tasks while allowing teams to efficiently track products and orders from inventory entry through final delivery.",
    ],
    projectResearchText: [
      "The research focused on understanding the operational journey of jewelry businesses, from maintaining SKU-level inventory to processing customer orders and managing deliveries. A major requirement was ensuring that inventory information remained synchronized as products moved through different stages of the sales process.",
      "We structured the platform around clear operational workflows for inventory, orders, deliveries, returns, and refunds. Dashboard views and status-based tracking were designed to give teams quick access to important information while reducing unnecessary navigation and repetitive actions.",
    ],
    projectResultsText: [
      "SalePulse brought multiple jewelry management operations into one centralized platform, creating a more structured workflow for managing inventory and customer orders. Real-time stock updates provide teams with better visibility into product availability while reducing dependency on manual inventory tracking.",
      "The integrated order lifecycle makes it easier to monitor processing, delivery, returns, and refunds from a single system. Its scalable full-stack architecture also provides a foundation for supporting larger inventories, increasing order volumes, and additional operational features as the business grows.",
    ],
    metrics: [
      { value: "Real-Time", label: "INVENTORY TRACKING" },
      { value: "End-to-End", label: "ORDER LIFECYCLE" },
      { value: "Centralized", label: "OPERATIONS" },
    ],
  },
  {
    id: "texone",
    number: "08",
    title: "TEXONE",
    tags: [
      "NEXT.JS",
      "NODE.JS",
      "ERP SOFTWARE",
      "CRM SOFTWARE",
      "PAYROLL & ACCOUNTING",
    ],
    subtitle: "Centralized Enterprise Textile ERP Platform",
    description:
      "A unified textile ERP linking accounting, procurement, manufacturing, inventory, HR, CRM, and QA with real-time data flows across complex multi-department operations.",
    imageSrc: asset("/images/case-studys-2.svg"),
    imageAlt: "TEXONE ERP Platform Preview",
    industry: "Textile & Manufacturing",
    technologies: [
      "Next.js",
      "Node.js",
      "ERP Software",
      "CRM Software",
      "Payroll & Accounting",
    ],
    projectDetailsText: [
      "TEXONE is a comprehensive Textile ERP platform designed to centralize and streamline complex business operations within the textile industry. The objective was to connect accounting, procurement, sales, inventory, manufacturing, HR, payroll, CRM, and quality management within a single scalable system.",
      "We developed a full-stack ERP solution with connected workflows and real-time data flow between different business modules. The platform helps teams manage day-to-day operations, monitor resources, automate repetitive processes, and access important business information from one centralized environment.",
    ],
    projectResearchText: [
      "The research phase focused on understanding the complete textile business lifecycle, including raw material procurement, inventory movement, production, sales, accounting, workforce management, and quality control. The key challenge was connecting these different operations while keeping the system structured and easy to manage.",
      "We organized the ERP around modular workflows so each department could access relevant information while remaining connected to the overall business process. Particular attention was given to data visibility, workflow automation, reporting, and reducing repetitive manual operations.",
    ],
    projectResultsText: [
      "TEXONE created a unified digital environment for managing textile operations across multiple departments. Centralized data and connected modules make it easier for teams to track inventory, production, procurement, sales, finances, employees, and customer relationships without relying on disconnected systems.",
      "The scalable architecture also provides greater visibility into business operations through structured reporting and real-time information. By bringing essential workflows into one platform, TEXONE supports more efficient resource planning, process management, and operational decision-making.",
    ],
    metrics: [
      { value: "Unified", label: "ERP PLATFORM" },
      { value: "Real-Time", label: "DATA FLOW" },
      { value: "End-to-End", label: "OPERATIONS" },
    ],
  },
  {
    id: "procure-flow",
    number: "09",
    title: "Procure Flow",
    tags: [
      "NEXT.JS",
      "POSTGRESQL",
      "MICROSOFT AZURE",
      "MICROSOFT OUTLOOK",
      "ALERT NOTIFICATIONS",
    ],
    subtitle: "Role-Based Purchase Order Workflow Platform",
    description:
      "A centralized PO management solution offering multi-type PO support, automated notifications, priority routing, and role-based approval hierarchies.",
    imageSrc: asset("/images/case-studys-3.svg"),
    imageAlt: "Procure Flow Platform Preview",
    industry: "Procurement & Enterprise Operations",
    technologies: [
      "Next.js",
      "PostgreSQL",
      "Microsoft Azure",
      "Microsoft Outlook",
      "Alert Notifications",
    ],
    projectDetailsText: [
      "Procure Flow is a centralized purchase order management platform designed to simplify procurement workflows and improve the efficiency of approval processes. The system supports multiple purchase order types, including standard, credit, and revision POs, while providing structured role-based approvals for different users and departments.",
      "We developed the platform with automated data handling for recurring entries, priority-based processing, real-time notifications, and integrated communication workflows. The solution reduces repetitive manual activities and provides teams with better visibility into purchase requests, approvals, and order progress.",
    ],
    projectResearchText: [
      "The research phase focused on understanding traditional purchase order workflows and identifying areas where manual processing caused delays or repetitive work. Particular attention was given to approval hierarchies, recurring purchase entries, priority requests, revisions, and communication between different stakeholders.",
      "Based on these requirements, we structured the platform around role-based workflows with clear PO statuses and approval stages. Automated notifications and priority-based processing were incorporated to help users identify pending actions and keep procurement activities moving efficiently.",
    ],
    projectResultsText: [
      "Procure Flow created a more structured and centralized approach to purchase order management. Teams can manage different PO types, monitor approval progress, prioritize important requests, and receive timely notifications without relying heavily on manual follow-ups.",
      "Automated workflows and centralized data management also help reduce repetitive administrative work while improving visibility throughout the procurement lifecycle. The scalable architecture provides a strong foundation for expanding approval workflows, integrations, reporting, and procurement functionality.",
    ],
    metrics: [
      { value: "Automated", label: "PO WORKFLOWS" },
      { value: "Role-Based", label: "APPROVAL SYSTEM" },
      { value: "Real-Time", label: "NOTIFICATIONS" },
    ],
  },
];

export function FeaturedWorksSection() {
  const [selectedCase, setSelectedCase] = useState<CaseStudyItem | null>(null);

  // VIEW 2: CASE STUDY DETAIL VIEW (Triggered on 'Read More' click)
  if (selectedCase) {
    return (
      <section className="mx-auto max-w-[1180px] bg-white px-4 py-12 text-slate-900 sm:px-6 lg:px-8">
        {/* Top Navigation: Go Back Button */}
        <div className="mb-10 flex justify-start">
          <button
            type="button"
            onClick={() => setSelectedCase(null)}
            className="group text-basic inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-[#F8F9FA] px-4 py-2 font-semibold text-slate-700 shadow-xs transition-colors hover:bg-slate-200 hover:text-slate-900"
          >
            <ArrowLeft className="size-4 text-[#0053FA] transition-transform group-hover:-translate-x-1" />
            <span>Back to Case Studies</span>
          </button>
        </div>

        {/* Project Details Grid (Image + Text) */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Laptop Preview */}
          <div className="relative h-[300px] w-full overflow-hidden rounded-[24px] sm:h-[380px] md:h-[420px] lg:col-span-6">
            <Image
              src={selectedCase.imageSrc}
              alt={selectedCase.imageAlt}
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Project Details Description */}
          <div className="flex flex-col justify-start space-y-4 text-left lg:col-span-6">
            <h2 className="text-3xl font-bold tracking-tight text-[#0B0F19] md:text-4xl">
              Project Details
            </h2>
            {selectedCase.projectDetailsText.map((p, idx) => (
              <p
                key={idx}
                className="text-basic sm:text-basic md:text-basic leading-relaxed text-[#64748B]"
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Technology Pills & Industry Row */}
        <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Tech Badges with Outline Blue Style */}
          <div className="text-left lg:col-span-7">
            <span className="text-basic mb-3 block font-semibold text-[#64748B]">
              Technology
            </span>
            <div className="flex flex-wrap gap-2.5">
              {selectedCase.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-block rounded-full border border-[#0053FA] bg-white px-4 py-1.5 text-sm font-semibold text-[#003BDE] shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Solid Blue Industry Pill */}
          <div className="text-left lg:col-span-5">
            <span className="text-basic mb-3 block font-semibold tracking-wider text-[#64748B] uppercase">
              INDUSTRY
            </span>
            <span className="text-basic inline-block rounded-full bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] px-5 py-2 font-semibold text-white">
              {selectedCase.industry}
            </span>
          </div>
        </div>

        {/* Project Research Section */}
        <div className="mt-14 space-y-4 text-left">
          <h2 className="text-3xl font-bold tracking-tight text-[#0B0F19] md:text-4xl">
            Project Research
          </h2>
          {selectedCase.projectResearchText.map((p, idx) => (
            <p
              key={idx}
              className="text-basic sm:text-basic md:text-basic leading-relaxed text-[#64748B]"
            >
              {p}
            </p>
          ))}
        </div>

        {/* Project Results Section */}
        <div className="mt-14 space-y-4 text-left">
          <h2 className="text-3xl font-bold tracking-tight text-[#0B0F19] md:text-4xl">
            Project Results
          </h2>
          {selectedCase.projectResultsText.map((p, idx) => (
            <p
              key={idx}
              className="text-basic sm:text-basic md:text-basic leading-relaxed text-[#64748B]"
            >
              {p}
            </p>
          ))}
        </div>

        {/* Metrics Bar with Vertical Dividers */}
        <div className="mt-16 border-t border-b border-slate-200 py-8">
          <div className="grid grid-cols-3 divide-x divide-slate-200">
            {selectedCase.metrics.map((metric) => (
              <div key={metric.label} className="px-4 text-center">
                <div className="text-2xl font-bold text-[#0B0F19] sm:text-3xl md:text-4xl">
                  {metric.value}
                </div>
                <div className="mt-2 text-sm font-medium tracking-widest text-[#94A3B8] uppercase">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // VIEW 1: CARDS LIST VIEW (Default View)
  return (
    <section className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      {/* Eyebrow Header */}
      <div className="mb-12 flex flex-col items-center text-center md:mb-16">
        <span className="text-basic inline-block rounded-md border-b-4 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 font-semibold tracking-wide text-[#2b2bad] shadow-xl/20">
          Featured Works
        </span>
      </div>

      {/* Case Study Cards */}
      <div className="space-y-12 md:space-y-16">
        {CASE_STUDIES.map((item, index) => {
          const isEven = index % 2 !== 0;

          return (
            <div
              key={item.id}
              className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8"
            >
              {/* Laptop Screenshot */}
              <div
                className={`relative h-[280px] w-full overflow-hidden rounded-[28px] bg-slate-100 sm:h-[360px] md:h-[420px] lg:col-span-5 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  priority={index === 0}
                />
              </div>

              {/* Information Card */}
              <div
                className={`flex flex-col justify-between rounded-[32px] bg-[#F3F4F6] p-6 sm:p-8 md:p-10 lg:col-span-7 lg:min-h-[420px] ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="space-y-5">
                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl font-bold text-slate-900 md:text-3xl">
                      {item.number}
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                      {item.title}
                    </h3>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200/60 bg-white px-3 py-1 text-sm font-bold tracking-wider text-slate-700 uppercase shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Summary */}
                  <div className="space-y-2 border-l-5 border-white pt-2 pl-4">
                    <h4 className="text-base font-bold text-black md:text-xl">
                      {item.subtitle}
                    </h4>
                    <p className="text-basic sm:text-basic leading-relaxed text-black">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Read More Trigger */}
                <div className="pt-6">
                  <button
                    type="button"
                    onClick={() => setSelectedCase(item)}
                    className="inline-flex items-center gap-2 rounded-full border-b-1 bg-[#d6d6d666] px-4 py-2 font-bold text-black shadow-[0_4px_0_#d8dbe0,0_10px_20px_rgba(0,0,0,0.12),0_4px_6px_rgba(0,0,0,0.06)] transition-all duration-150 hover:bg-white active:translate-y-[2px] active:shadow-[0_2px_0_#d8dbe0,0_4px_8px_rgba(0,0,0,0.1)] sm:gap-2.5 sm:px-6 sm:py-2.5 sm:text-base"
                  >
                    <span>Read More</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default FeaturedWorksSection;
