"use client";

import React from "react";
import Image from "next/image";

// Navigate relative to the component file
import iconDocumentCapture from "../../../../public/images/document-core-1.png";
import iconWorkflow from "../../../../public/images/document-core-2.png";
import iconSmartClassification from "../../../../public/images/document-core-3.png";
import iconDataExtraction from "../../../../public/images/document-core-4.png";
import iconSecurity from "../../../../public/images/document-core-5.png";
import iconAnalytics from "../../../../public/images/document-core-6.png";

export default function AiCapabilities() {
  const eyebrow = "Core Capabilities";

  return (
    <section className="bg-[#fcfcfd] px-6 py-16 sm:py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Header Block */}
        <div className="mb-14 text-center sm:mb-20">
          <div className="flex flex-col items-center text-center">
            {eyebrow && (
              <div className="mb-6 inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-xs font-bold text-[#2b2bad] shadow-sm sm:mb-10 sm:border-b-4 sm:text-[14px]">
                <span className="h-1.5 w-1.5 rounded bg-[#2b2bad]" />
                {eyebrow}
              </div>
            )}
          </div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
            Intelligent Voice AI Capabilities
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-neutral-500 sm:text-lg">
            From answering customer calls to integrating with enterprise
            systems, our AI Voice Agents deliver human-like conversations that
            scale with your business.
          </p>
        </div>

        {/* 3-Column Masonry Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* COLUMN 1 */}
          <div className="flex flex-col gap-8">
            {/* Card 1: Intelligent Document Capture */}
            <div className="flex flex-col justify-between rounded-[2.5rem] border border-neutral-100 bg-white p-8 shadow-sm transition hover:shadow-md sm:p-10">
              <div className="relative mb-0 h-64 w-full overflow-hidden rounded-2xl">
                <Image
                  src={iconDocumentCapture}
                  alt="Intelligent Document Capture"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-semibold tracking-tight text-neutral-900">
                  Intelligent Document Capture
                </h3>
                <p className="text-basic leading-relaxed text-neutral-500">
                  Import documents from email, scanners, cloud storage, APIs, or
                  enterprise systems. Supports PDFs, images, handwritten forms,
                  and digital files.
                </p>
              </div>
            </div>

            {/* Card 4: AI Data Extraction */}
            <div className="flex flex-col justify-between rounded-[2.5rem] border border-neutral-100 bg-white p-8 shadow-sm transition hover:shadow-md sm:p-10">
              <div className="relative mb-0 h-90 w-full overflow-hidden rounded-2xl">
                <Image
                  src={iconDataExtraction}
                  alt="AI Data Extraction"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-semibold tracking-tight text-neutral-900">
                  AI Data Extraction
                </h3>
                <p className="text-basic leading-relaxed text-neutral-500">
                  Automatically identify and extract key information such as
                  names, invoice numbers, dates, purchase orders, addresses,
                  totals, and more.
                </p>
              </div>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col gap-8">
            {/* Card 2: Workflow Automation & Integrations */}
            <div className="flex flex-col justify-between rounded-[2.5rem] border border-neutral-100 bg-white p-8 shadow-sm transition hover:shadow-md sm:p-10">
              <div className="relative mb-0 h-40 w-full overflow-hidden rounded-2xl">
                <Image
                  src={iconWorkflow}
                  alt="Workflow Automation & Integrations"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-semibold tracking-tight text-neutral-900">
                  Workflow Automation & Integrations
                </h3>
                <p className="text-basic leading-relaxed text-neutral-500">
                  Automatically route processed documents to ERP, CRM, finance,
                  HR, or document management systems through secure integrations
                  and APIs.
                </p>
              </div>
            </div>

            {/* Card 5: Compliance & Security */}
            <div className="flex flex-col justify-between rounded-[2.5rem] border border-neutral-100 bg-white p-8 shadow-sm transition hover:shadow-md sm:p-10">
              <div className="relative mb-0 h-[425px] w-full overflow-hidden rounded-2xl">
                <Image
                  src={iconSecurity}
                  alt="Compliance & Security"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-semibold tracking-tight text-neutral-900">
                  Compliance & Security
                </h3>
                <p className="text-basic leading-relaxed text-neutral-500">
                  Protect sensitive business information with encrypted
                  processing, role-based access, audit trails, and
                  enterprise-grade compliance standards.
                </p>
              </div>
            </div>
          </div>

          {/* COLUMN 3 */}
          <div className="flex flex-col gap-8">
            {/* Card 3: Smart Classification & Validation */}
            <div className="flex flex-col justify-between rounded-[2.5rem] border border-neutral-100 bg-white p-8 shadow-sm transition hover:shadow-md sm:p-10">
              <div className="relative mb-0 h-90 w-full overflow-hidden rounded-2xl">
                <Image
                  src={iconSmartClassification}
                  alt="Smart Classification & Validation"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-semibold tracking-tight text-neutral-900">
                  Smart Classification & Validation
                </h3>
                <p className="text-basic leading-relaxed text-neutral-500">
                  Classify documents by type, validate extracted data against
                  business rules, and flag exceptions for human review only when
                  required.
                </p>
              </div>
            </div>

            {/* Card 6: Analytics & Processing Insights */}
            <div className="flex flex-col justify-between rounded-[2.5rem] border border-neutral-100 bg-white p-8 shadow-sm transition hover:shadow-md sm:p-10">
              <div className="relative mb-0 h-56 w-full overflow-hidden rounded-2xl">
                <Image
                  src={iconAnalytics}
                  alt="Analytics & Processing Insights"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-semibold tracking-tight text-neutral-900">
                  Analytics & Processing Insights
                </h3>
                <p className="text-basic leading-relaxed text-neutral-500">
                  Monitor document volumes, processing accuracy, turnaround
                  times, exception rates, and workflow performance through
                  real-time dashboards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
