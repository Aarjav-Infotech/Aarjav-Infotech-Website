"use client";

import React from "react";

export default function DocumentProcessSection() {
  const eyebrow = "The process we follow";

  const processSteps = [
    {
      number: "01",
      title: "Capture Documents",
      description:
        "Collect documents from multiple enterprise sources including email, scanners, cloud storage, APIs, ERP systems, shared folders, and business applications. Our platform supports invoices, contracts, purchase orders, receipts, forms, PDFs, images, and handwritten documents, creating a centralized intake process for every document type.",
    },
    {
      number: "02",
      title: "Extract & Understand",
      description:
        "Using advanced OCR, Natural Language Processing (NLP), and AI models, the system automatically reads documents, identifies their type, understands the content, and extracts critical business information such as customer details, invoice numbers, dates, addresses, totals, signatures, line items, and custom fields with high accuracy.",
    },
    {
      number: "03",
      title: "Integrate & Automate",
      description:
        "Validated data is seamlessly pushed into enterprise platforms such as ERP, CRM, finance, HR, procurement, and document management systems through secure APIs. Automated workflows can trigger approvals, notifications, record creation, payment processes, or other downstream business actions without manual intervention.",
    },
    {
      number: "04",
      title: "Monitor & Optimize",
      description:
        "Track document processing performance through real-time dashboards with insights into processing accuracy, turnaround time, exception rates, workflow status, and system utilization. AI continuously learns from corrections and feedback to improve extraction accuracy, optimize workflows, and scale with growing business demands.",
    },
  ];

  return (
    <section className="bg-white px-6 py-16 sm:py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex flex-col items-center text-center">
            {eyebrow && (
              <div className="mb-6 inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-xs font-bold text-[#2b2bad] shadow-sm sm:mb-10 sm:border-b-4 sm:text-[14px]">
                <span className="h-1.5 w-1.5 rounded bg-[#2b2bad]" />
                {eyebrow}
              </div>
            )}
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            How We Process Documents with AI
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-500 sm:text-base">
            From document capture to business system integration, our AI-powered
            workflow ensures every document is processed accurately, securely,
            and efficiently.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-12 md:gap-y-12">
          {processSteps.map((step, index) => (
            <div key={index} className="relative pt-4">
              {/* Outer Frame with Blue Border & Light Background Gap */}
              <div className="relative rounded-[2.5rem] border-[6px] border-[#004ce6] bg-[#f4f5f8] p-3 shadow-sm sm:p-4">
                {/* Inner Floating White Card */}
                <div className="rounded-[1.8rem] bg-white p-6 shadow-[0_4px_25px_rgba(0,0,0,0.05)] sm:p-8">
                  <div className="pr-12 sm:pr-16">
                    <h3 className="mb-4 text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Top-Right Overlapping Number Badge */}
                <div className="absolute -top-11 -right-10 flex h-30 w-30 items-center justify-center rounded-[32px] border-15 border-[#f4f5f8] bg-[linear-gradient(180deg,#003cb3_0%,#0055ff_100%)] text-3xl font-extrabold text-white">
                  {step.number}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
