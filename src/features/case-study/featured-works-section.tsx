"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, type Variants } from "framer-motion";
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
    imageSrc: asset("/images/case-studys-1.png"),
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
    imageSrc: asset("/images/case-studys-2.png"),
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
    imageSrc: asset("/images/case-studys-3.png"),
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
      "Zeeva Chemical LLP required a modern corporate website to strengthen its digital presence and professionally showcase its chemical and aerosol product portfolio.",
    imageSrc: asset("/images/case-studys-4.png"),
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
      "Zeeva Chemical LLP required a modern corporate website to strengthen its digital presence and professionally showcase its chemical and aerosol product portfolio.",
    ],
    projectResearchText: [
      "Before starting the design, we studied Zeeva Chemical LLP’s business model, product categories, and target customers.",
    ],
    projectResultsText: [
      "The redesigned website gave Zeeva Chemical LLP a more professional and credible digital identity.",
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
      "A modern academic portfolio platform presenting research, publications, and books with AI assistance.",
    imageSrc: asset("/images/case-studys-5.png"),
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
      "Professor Andrew Caplin required a modern academic portfolio website to present his research in an accessible digital format.",
    ],
    projectResearchText: [
      "The research phase focused on understanding how students and researchers interact with academic platforms.",
    ],
    projectResultsText: [
      "The completed platform transformed the traditional academic portfolio into a more interactive experience.",
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
      "A conversion-focused Shopify storefront showcasing fine jewelry collections with smooth animations.",
    imageSrc: asset("/images/case-studys-6.png"),
    imageAlt: "The Custom Club Preview",
    industry: "Jewelry & E-commerce",
    technologies: [
      "Shopify",
      "UI/UX Design",
      "UI Animation",
      "Responsive Design",
    ],
    projectDetailsText: [
      "The Custom Club required a modern, conversion-focused e-commerce experience.",
    ],
    projectResearchText: [
      "The research focused on understanding customer browsing patterns in luxury jewelry.",
    ],
    projectResultsText: [
      "The redesigned storefront created an engaging digital purchasing flow.",
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
      "A full-stack centralized management portal providing SKU-based inventory tracking and order workflows.",
    imageSrc: asset("/images/case-studys-7.png"),
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
      "SalePulse is an end-to-end imitation jewelry management platform designed to simplify inventory and sales.",
    ],
    projectResearchText: [
      "Focused on reducing operational friction across warehouse and shipping teams.",
    ],
    projectResultsText: [
      "Centralized order fulfillment cycles and improved real-time stock sync.",
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
      "A unified textile ERP linking accounting, procurement, manufacturing, and inventory workflows.",
    imageSrc: asset("/images/case-studys-8.png"),
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
      "TEXONE is a comprehensive Textile ERP platform designed to centralize and streamline complex operations.",
    ],
    projectResearchText: [
      "Studied the entire lifecycle from raw fiber procurement to wholesale shipments.",
    ],
    projectResultsText: [
      "Created unified visibility across multi-department operations.",
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
      "A centralized PO management solution offering multi-type PO support and role-based approval hierarchies.",
    imageSrc: asset("/images/case-studys-9.png"),
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
      "Procure Flow is a centralized purchase order management platform designed to simplify procurement approvals.",
    ],
    projectResearchText: [
      "Identified repetitive bottlenecks in traditional PO review loops.",
    ],
    projectResultsText: [
      "Cut down administrative approval latency across enterprise divisions.",
    ],
    metrics: [
      { value: "Automated", label: "PO WORKFLOWS" },
      { value: "Role-Based", label: "APPROVAL SYSTEM" },
      { value: "Real-Time", label: "NOTIFICATIONS" },
    ],
  },
];

// Reusable animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const tagItemAnim: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

function FeaturedWorksContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const requestedId = searchParams.get("id");

  const [selectedCase, setSelectedCase] = useState<CaseStudyItem | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const projectDetailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (requestedId) {
      const match = CASE_STUDIES.find((item) => item.id === requestedId);
      if (match) {
        setSelectedCase(match);
        setTimeout(() => {
          projectDetailsRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 100);
      }
    }
  }, [requestedId]);

  const handleSelectCase = (item: CaseStudyItem) => {
    setSelectedCase(item);
    router.replace(`/case-study?id=${item.id}`, { scroll: false });
    setTimeout(() => {
      projectDetailsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 60);
  };

  const handleBackToList = () => {
    setSelectedCase(null);
    router.replace("/case-study", { scroll: false });
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 40);
  };

  // VIEW 2: CASE STUDY DETAIL VIEW
  if (selectedCase) {
    return (
      <section
        ref={sectionRef}
        className="mx-auto max-w-[1180px] bg-white px-4 py-12 text-slate-900 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10 flex justify-start"
        >
          <button
            type="button"
            onClick={handleBackToList}
            className="group inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-[#F8F9FA] px-4 py-2 text-sm font-semibold text-slate-700 shadow-xs transition-all hover:bg-slate-200 hover:text-slate-900"
          >
            <ArrowLeft className="size-4 text-[#0053FA] transition-transform group-hover:-translate-x-1" />
            <span>Back to Case Studies</span>
          </button>
        </motion.div>

        {/* Project Details Grid */}
        <div
          ref={projectDetailsRef}
          className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55 }}
            className="relative h-[300px] w-full transform-gpu overflow-hidden rounded-[24px] sm:h-[380px] md:h-[420px] lg:col-span-6"
          >
            <Image
              src={selectedCase.imageSrc}
              alt={selectedCase.imageAlt}
              fill
              className="object-cover object-center"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="flex flex-col justify-start space-y-4 text-left lg:col-span-6"
          >
            <h2 className="text-3xl font-bold tracking-tight text-[#0B0F19] md:text-4xl">
              Project Details
            </h2>
            {selectedCase.projectDetailsText.map((p, idx) => (
              <p
                key={idx}
                className="text-basic leading-relaxed text-[#64748B]"
              >
                {p}
              </p>
            ))}
          </motion.div>
        </div>

        {/* Tech Stack & Industry */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 grid grid-cols-1 items-start gap-8 border-t border-slate-100 pt-8 lg:grid-cols-12"
        >
          <div className="text-left lg:col-span-7">
            <span className="mb-3 block text-sm font-semibold tracking-wide text-[#64748B] uppercase">
              Technology
            </span>
            <div className="flex flex-wrap gap-2.5">
              {selectedCase.technologies.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="inline-block rounded-full border border-[#0053FA]/30 bg-blue-50/50 px-4 py-1.5 text-xs font-semibold text-[#003BDE] shadow-xs"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="text-left lg:col-span-5">
            <span className="mb-3 block text-sm font-semibold tracking-wide text-[#64748B] uppercase">
              INDUSTRY
            </span>
            <span className="inline-block rounded-full bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] px-5 py-2 text-sm font-semibold text-white shadow-sm">
              {selectedCase.industry}
            </span>
          </div>
        </motion.div>

        {/* Project Research */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="mt-14 space-y-4 text-left"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#0B0F19] md:text-4xl">
            Project Research
          </h2>
          {selectedCase.projectResearchText.map((p, idx) => (
            <p key={idx} className="text-basic leading-relaxed text-[#64748B]">
              {p}
            </p>
          ))}
        </motion.div>

        {/* Project Results */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55 }}
          className="mt-14 space-y-4 text-left"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#0B0F19] md:text-4xl">
            Project Results
          </h2>
          {selectedCase.projectResultsText.map((p, idx) => (
            <p key={idx} className="text-basic leading-relaxed text-[#64748B]">
              {p}
            </p>
          ))}
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 border-t border-b border-slate-200 py-8"
        >
          <div className="grid grid-cols-3 divide-x divide-slate-200">
            {selectedCase.metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="px-4 text-center"
              >
                <div className="text-2xl font-bold text-[#0B0F19] sm:text-3xl md:text-4xl">
                  {metric.value}
                </div>
                <div className="mt-2 text-xs font-semibold tracking-widest text-[#94A3B8] uppercase sm:text-sm">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    );
  }

  // VIEW 1: CARDS LIST VIEW
  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-[1280px] scroll-mt-24 px-4 py-16 sm:px-6 md:py-24 lg:px-8"
    >
      {/* Header Pill with subtle entrance */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mb-12 flex flex-col items-center text-center md:mb-16"
      >
        <span className="text-basic inline-block rounded-md border-b-4 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 font-semibold tracking-wide text-[#2b2bad] shadow-xl/20">
          Featured Works
        </span>
      </motion.div>

      {/* Case Studies Staggered List */}
      <div className="space-y-12 md:space-y-16">
        {CASE_STUDIES.map((item, index) => {
          const isEven = index % 2 !== 0;

          return (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeInUp}
              className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8"
            >
              {/* Image Preview with slide & zoom on scroll */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`group relative h-[280px] w-full transform-gpu overflow-hidden rounded-[28px] bg-slate-100 sm:h-[360px] md:h-[420px] lg:col-span-5 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  priority={index === 0}
                />
              </motion.div>

              {/* Content Card with subtle elevation */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className={`flex transform-gpu flex-col justify-between rounded-[32px] bg-[#F3F4F6] p-6 shadow-xs transition-shadow duration-300 hover:shadow-md sm:p-8 md:p-10 lg:col-span-7 lg:min-h-[420px] ${
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

                  {/* Staggered tags */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.05 }}
                    className="flex flex-wrap gap-2"
                  >
                    {item.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        variants={tagItemAnim}
                        className="rounded-full border border-slate-200/60 bg-white px-3 py-1 text-xs font-bold tracking-wider text-slate-700 uppercase shadow-2xs sm:text-sm"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>

                  <div className="space-y-2 border-l-4 border-white pt-2 pl-4">
                    <h4 className="text-base font-bold text-black md:text-xl">
                      {item.subtitle}
                    </h4>
                    <p className="text-basic leading-relaxed text-black">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => handleSelectCase(item)}
                    className="inline-flex cursor-pointer items-center gap-2 rounded-full border-b bg-[#d6d6d666] px-4 py-2 font-bold text-black shadow-[0_4px_0_#d8dbe0,0_10px_20px_rgba(0,0,0,0.12),0_4px_6px_rgba(0,0,0,0.06)] transition-colors hover:bg-white active:translate-y-[2px] active:shadow-[0_2px_0_#d8dbe0,0_4px_8px_rgba(0,0,0,0.1)] sm:gap-2.5 sm:px-6 sm:py-2.5 sm:text-base"
                  >
                    <span>Read More</span>
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export function FeaturedWorksSection() {
  return (
    <Suspense
      fallback={
        <div className="py-20 text-center text-slate-400">
          Loading case studies...
        </div>
      }
    >
      <FeaturedWorksContent />
    </Suspense>
  );
}

export default FeaturedWorksSection;
