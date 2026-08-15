"use client";

import React from "react";

export default function AIProcessSection() {
  const eyebrow = "The process we follow";

  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-12 font-sans md:px-8 md:py-20">
      <div className="mx-auto max-w-[1280px]">
        {/* Header Block */}
        <div className="mb-8 flex flex-col items-center text-center md:mb-12">
          {eyebrow && (
            <div className="text-basic mb-4 inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 font-bold text-[#2b2bad] shadow-xs sm:mb-6 sm:border-b-4 sm:text-[14px]">
              <span className="h-1.5 w-1.5 rounded bg-[#2b2bad]" />
              {eyebrow}
            </div>
          )}

          <h2 className="mb-4 text-3xl font-bold tracking-tight text-black sm:text-4xl md:text-5xl">
            How We Build Your AI Ecosystem
          </h2>

          <p className="max-w-2xl px-2 text-xs leading-relaxed text-gray-600 sm:text-sm md:text-base">
            We follow a structured integration approach to connect your
            applications, data, AI agents, and enterprise systems into one
            scalable, intelligent ecosystem.
          </p>
        </div>

        {/* Desktop Canvas */}
        <div className="relative mx-auto hidden aspect-[1100/620] w-full max-w-[1100px] md:block">
          {/* 1. BADGES ARC */}
          <div className="absolute top-[8%] left-[18%] z-10 h-[45%] w-[64%]">
            {/* Badge 1: Moon */}
            <div className="absolute top-[0%] left-[3%] transition-transform hover:scale-105">
              <img
                src="/images/badge-1.svg"
                alt="Assess & Plan"
                className="h-auto w-[110px] lg:w-[150px]"
              />
            </div>

            {/* Badge 2: Sparkle */}
            <div className="absolute top-[40%] left-[14%] transition-transform hover:scale-105">
              <img
                src="/images/badge-2.svg"
                alt="Design Architecture"
                className="h-auto w-[110px] lg:w-[150px]"
              />
            </div>

            {/* Badge 3: Main Blue Stack */}
            <div className="absolute top-[0%] left-[44%] z-20 -translate-x-1/2 transition-transform hover:scale-105">
              <img
                src="/images/middel-badge.svg"
                alt="AI Ecosystem Core"
                className="h-auto w-[130px] drop-shadow-xl lg:w-[155px]"
              />
            </div>

            {/* Badge 4: Upward Arrows */}
            <div className="absolute top-[58%] left-[44.5%] z-10 -translate-x-1/2 transition-transform hover:scale-105">
              <img
                src="/images/badge-3.svg"
                alt="Connect & Integrate"
                className="h-auto w-[110px] lg:w-[150px]"
              />
            </div>

            {/* Badge 5: Headset */}
            <div className="absolute top-[40%] right-[25.5%] transition-transform hover:scale-105">
              <img
                src="/images/badge-4.svg"
                alt="Automate & Orchestrate"
                className="h-auto w-[110px] lg:w-[150px]"
              />
            </div>

            {/* Badge 6: Star */}
            <div className="absolute top-[0%] right-[15%] transition-transform hover:scale-105">
              <img
                src="/images/badge-5.svg"
                alt="Monitor & Scale"
                className="h-auto w-[110px] lg:w-[150px]"
              />
            </div>
          </div>

          {/* 2. DOODLE ARROWS */}
          <svg
            className="pointer-events-none absolute inset-0 z-20 h-full w-full overflow-visible"
            viewBox="0 0 1100 620"
            fill="none"
            stroke="#000000"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Arrow 1: Assess & Plan */}
            <g transform="translate(120, 150) scale(0.95)">
              <path
                d="M1.28978 53.2381L1.15137 36.9966L16.6925 43.6983"
                stroke="black"
                strokeWidth="2.27214"
                strokeMiterlimit="10"
              />
              <path
                d="M129.944 24.5785C125.403 35.5317 115.606 42.9613 104.751 43.6341C91.4658 44.4573 77.2062 35.1229 75.6919 22.2244C74.4278 11.4564 81.7849 1.61595 90.6738 1.15395C99.0082 0.721288 106.768 8.27371 109.102 16.8326C114.393 36.2385 98.0741 62.5908 75.4929 71.0874C53.1831 79.4822 25.4127 70.2037 8.2041 47.3622"
                stroke="black"
                strokeWidth="2.27214"
                strokeMiterlimit="10"
              />
            </g>

            {/* Arrow 2: Design the Architecture */}
            <g transform="translate(1, 5) scale(0.95)">
              <path d="M 350 280 Q 320 280, 290 320 T 245 350" />
              <path d="M 250 342 L 240 360 L 261 360" />
            </g>

            {/* Arrow 3: Connect & Integrate */}
            <g>
              <path d="M 500 330 Q 470 405, 520 425 T 518 470" />
              <path d="M 510 460 L 518 480 L 530 470" />
            </g>

            {/* Arrow 4: Automate & Orchestrate (Exact Provided SVG) */}
            <g transform="translate(700, 260) scale(0.95)">
              <path
                d="M92.7549 139.236L109.525 138.153L102.043 123.679"
                stroke="black"
                strokeWidth="2.27214"
                strokeMiterlimit="10"
              />
              <path
                d="M1.10352 0.269531C4.50802 14.2038 12.2374 35.9865 30.9796 55.0138C40.2599 64.4353 67.803 92.3964 95.633 83.8824C109.041 79.7803 113.572 70.0856 112.04 62.2069C110.31 53.3033 97.9631 45.5327 84.0536 52.9009C67.3996 61.7229 64.6038 89.9012 73.7448 108.678C80.5602 122.678 92.9536 129.281 97.9631 131.612"
                stroke="black"
                strokeWidth="2.27214"
                strokeMiterlimit="10"
              />
            </g>

            {/* Arrow 5: Monitor & Scale (Exact Provided SVG) */}
            <g transform="translate(780, 100) scale(0.95)">
              <path
                d="M0.707031 49.8556C12.2662 59.047 29.8048 64.4746 42.0982 56.7003C59.2518 45.8516 52.2549 16.0865 71.944 4.57223C80.2389 -0.278775 103.646 -3.68603 117.698 21.1272"
                stroke="black"
                strokeWidth="2.27214"
                strokeMiterlimit="10"
              />
              <path
                d="M107.745 22.6963L122.183 31.4404L124.662 16.2109"
                stroke="black"
                strokeWidth="2.27214"
                strokeMiterlimit="10"
              />
            </g>
          </svg>

          {/* 3. TEXT COLUMNS */}

          {/* Step 1: Assess & Plan */}
          <div className="absolute top-[10%] -left-[10%] w-[25%] text-left">
            <h3 className="mb-2 text-base font-bold text-black lg:text-lg">
              Assess & Plan
            </h3>
            <p className="text-[12px] leading-relaxed text-gray-600 lg:text-sm">
              Evaluate your existing applications, business processes, data
              architecture, and integration requirements to identify
              opportunities for AI-driven transformation.
            </p>
          </div>

          {/* Step 2: Design the Architecture */}
          <div className="absolute top-[55%] left-[1%] w-[25%] text-left">
            <h3 className="mb-2 text-base font-bold text-black lg:text-lg">
              Design the Architecture
            </h3>
            <p className="text-[12px] leading-relaxed text-gray-600 lg:text-sm">
              Create a scalable enterprise architecture that defines how AI
              agents, ERP systems, applications, APIs, and data pipelines
              communicate securely and efficiently.
            </p>
          </div>

          {/* Step 3: Connect & Integrate */}
          <div className="absolute top-[76%] left-[50%] w-[25%] -translate-x-1/2 text-left">
            <h3 className="mb-2 text-base font-bold text-black lg:text-lg">
              Connect & Integrate
            </h3>
            <p className="text-[12px] leading-relaxed text-gray-600 lg:text-sm">
              Integrate enterprise applications, cloud services, databases, AI
              models, APIs, and third-party platforms to establish a unified
              operational environment.
            </p>
          </div>

          {/* Step 4: Automate & Orchestrate */}
          <div className="absolute top-[65%] right-[2%] w-[25%] text-left">
            <h3 className="mb-2 text-base font-bold text-black lg:text-lg">
              Automate & Orchestrate
            </h3>
            <p className="text-[12px] leading-relaxed text-gray-600 lg:text-sm">
              Build intelligent workflows that coordinate AI agents, business
              systems, and operational processes to automate tasks, approvals,
              notifications, and decision-making.
            </p>
          </div>

          {/* Step 5: Monitor & Scale */}
          <div className="absolute top-[22%] -right-[7%] w-[28%] text-left">
            <h3 className="mb-2 text-base font-bold text-black lg:text-lg">
              Monitor & Scale
            </h3>
            <p className="text-[12px] leading-relaxed text-gray-600 lg:text-sm">
              Continuously monitor integrations, data flows, AI performance, and
              system health while optimizing the ecosystem to support future
              growth and evolving business needs.
            </p>
          </div>
        </div>

        {/* Mobile View */}
        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 md:hidden">
          {[
            {
              title: "Assess & Plan",
              desc: "Evaluate your existing applications, business processes, data architecture, and integration requirements to identify opportunities for AI-driven transformation.",
              img: "/images/badge-1.svg",
            },
            {
              title: "Design the Architecture",
              desc: "Create a scalable enterprise architecture that defines how AI agents, ERP systems, applications, APIs, and data pipelines communicate securely and efficiently.",
              img: "/images/badge-2.svg",
            },
            {
              title: "Connect & Integrate",
              desc: "Integrate enterprise applications, cloud services, databases, AI models, APIs, and third-party platforms to establish a unified operational environment.",
              img: "/images/badge-3.svg",
            },
            {
              title: "Automate & Orchestrate",
              desc: "Build intelligent workflows that coordinate AI agents, business systems, and operational processes to automate tasks, approvals, notifications, and decision-making.",
              img: "/images/badge-4.svg",
            },
            {
              title: "Monitor & Scale",
              desc: "Continuously monitor integrations, data flows, AI performance, and system health while optimizing the ecosystem to support future growth and evolving business needs.",
              img: "/images/badge-5.svg",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center rounded-xl border border-gray-100 bg-gray-50/50 p-4 text-center"
            >
              <img
                src={item.img}
                alt={item.title}
                className="mb-3 h-auto w-20"
              />
              <h3 className="mb-1.5 text-base font-bold text-black">
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
