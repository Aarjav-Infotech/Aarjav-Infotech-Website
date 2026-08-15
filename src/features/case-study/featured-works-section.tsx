"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowLeft } from "lucide-react";

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
    imageSrc: "/images/case-studys-1.svg",
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
    imageSrc: "/images/case-studys-2.svg",
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
    imageSrc: "/images/case-studys-3.svg",
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

  // VIEW 1: 3 CARDS LIST VIEW (Default View)
  return (
    <section className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      {/* Eyebrow Header */}
      <div className="mb-12 flex flex-col items-center text-center md:mb-16">
        <span className="text-basic inline-block rounded-md border-b-4 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 font-semibold tracking-wide text-[#2b2bad] shadow-xl/20">
          Featured Works
        </span>
      </div>

      {/* 3 Case Study Cards */}
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
                  <div className="space-y-2 border-l-2 border-slate-300 pt-2 pl-4">
                    <h4 className="text-base font-bold text-slate-900 md:text-lg">
                      {item.subtitle}
                    </h4>
                    <p className="text-basic sm:text-basic leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Read More Trigger */}
                <div className="pt-6">
                  <button
                    type="button"
                    onClick={() => setSelectedCase(item)}
                    className="group text-basic inline-flex cursor-pointer items-center gap-2 rounded-full bg-slate-200/80 px-6 py-2.5 font-semibold text-slate-900 transition-colors hover:bg-slate-300"
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
