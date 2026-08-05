"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MoveRight } from "lucide-react";

export interface IndustrySolution {
  id: string;
  name: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  link: string;
}

const defaultIndustries: IndustrySolution[] = [
  {
    id: "banking",
    name: "Banking",
    title: "Finance and Banking Solutions",
    description:
      "Empower your financial institution with secure, innovative, and scalable digital solutions. From AI-driven fraud detection to blockchain-enabled transactions, we deliver technology that enhances efficiency and builds trust. Transform customer experiences and streamline operations with our cutting-edge banking platforms.",
    image: "/images/tabbing-1.svg",
    features: [
      "Digital Banking Platforms",
      "Blockchain Security Solutions",
      "Mobile and Web Banking Applications",
      "AI-Enhanced Fraud Detection",
      "Real-Time Payment Processing",
      "Regulatory Compliance Automation",
    ],
    link: "/solutions/banking",
  },
  {
    id: "insurance",
    name: "Insurance",
    title: "Insurance & Risk Solutions",
    description:
      "Automate claims processing, underwriting workflows, and policy management with intelligent automation to boost speed and accuracy.",
    image: "/images/tabbing-1.svg",
    features: [
      "Automated Claims Processing",
      "AI Underwriting Models",
      "Policy Management Systems",
      "Customer Self-Service Portals",
      "Fraud Pattern Analytics",
      "Regulatory Auditing Tools",
    ],
    link: "/solutions/insurance",
  },
  {
    id: "government",
    name: "Government",
    title: "Government & Public Sector",
    description:
      "Deploy sovereign, air-gapped ready AI architectures and secure citizen services designed for high security and compliance demands.",
    image: "/images/tabbing-1.svg",
    features: [
      "Sovereign Data Environments",
      "Air-Gapped AI Deployments",
      "Citizen Portal Automation",
      "Secure Identity Systems",
      "Audit & Compliance Tracking",
      "Document Intelligence",
    ],
    link: "/solutions/government",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    title: "Healthcare & Life Sciences",
    description:
      "Streamline clinical data workflows, patient management systems, and medical AI models while maintaining strict HIPAA compliance.",
    image: "/images/tabbing-1.svg",
    features: [
      "HIPAA-Compliant AI Workflows",
      "Patient Data Processing",
      "EHR Automation & Insights",
      "Clinical Trial Analytics",
      "Telehealth Extensions",
      "Diagnostic Assistant Tools",
    ],
    link: "/solutions/healthcare",
  },
  {
    id: "real-estate",
    name: "Real Estate",
    title: "Real Estate & PropTech",
    description:
      "Accelerate property valuation, lease management, and customer acquisition with predictive analytics and smart automation.",
    image: "/images/tabbing-1.svg",
    features: [
      "Automated Lease Processing",
      "Predictive Valuation Models",
      "Virtual Property Showcases",
      "Tenant Portal Automation",
      "Portfolio Risk Analytics",
      "CRM & Lead Intelligence",
    ],
    link: "/solutions/real-estate",
  },
  {
    id: "industrial",
    name: "Industrial",
    title: "Industrial & Manufacturing",
    description:
      "Optimize supply chains, automate quality inspection, and enable predictive maintenance using domain-specific machine learning.",
    image: "/images/tabbing-1.svg",
    features: [
      "Predictive Equipment Maintenance",
      "Automated Quality Control",
      "Supply Chain Optimization",
      "IoT Sensor Data Analytics",
      "Factory Floor Insights",
      "Inventory Forecasting",
    ],
    link: "/solutions/industrial",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    title: "Enterprise Systems",
    description:
      "Scalable digital infrastructure built to unify complex enterprise software, reduce operational overhead, and drive growth.",
    image: "/images/tabbing-1.svg",
    features: [
      "Enterprise Service Bus",
      "Custom Microservices",
      "Workflow Automation",
      "Multi-Cloud Management",
      "Data Warehouse Integration",
      "Legacy System Modernization",
    ],
    link: "/solutions/enterprise",
  },
];

interface HomeIndustriesProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  industries?: IndustrySolution[];
}

export function HomeIndustries({
  eyebrow = "Digital Solutions",
  title = "Built for your industry",
  subtitle = "Explore our suite of AI-powered products designed to automate operations, improve accuracy, and drive growth across industries.",
  industries = defaultIndustries,
}: HomeIndustriesProps) {
  const activeIndustries =
    industries && industries.length > 0 ? industries : defaultIndustries;

  const [activeTab, setActiveTab] = useState<string>(
    activeIndustries[0]?.id ?? "banking",
  );

  const currentIndustry: IndustrySolution =
    activeIndustries.find((item) => item.id === activeTab) ??
    activeIndustries[0] ??
    defaultIndustries[0]!;

  return (
    <section className="relative w-full py-8 sm:py-4">
      {/* Outer Gradient Container */}
      <div className="mx-auto max-w-full overflow-hidden rounded-[24px] bg-gradient-to-b from-[#f4f7fc] via-[#e6eeeb]/50 to-[#92b4f2] p-4 shadow-lg sm:rounded-[36px] sm:p-8 lg:p-14">
        {/* Header Section */}
        <div className="mx-auto mb-6 flex max-w-3xl flex-col items-center text-center sm:mb-10">
          {eyebrow && (
            <div className="boder-slate-200 mb-10 inline-flex items-center gap-1.5 rounded border-b-4 bg-[#F5F5F5] px-3.5 py-1 text-[14px] font-semibold text-[#2b2bad] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2b2bad]" />
              {eyebrow}
            </div>
          )}

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[46px] lg:leading-tight">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-2 overflow-hidden text-lg leading-relaxed text-ellipsis whitespace-nowrap text-slate-600 sm:mt-3 sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>

        {/* Full-Width Exact Match Tab Switcher Bar */}
        <div className="no-scrollbar mx-auto mb-10 w-full max-w-full overflow-x-auto rounded-[60px] border border-slate-100/80 bg-white p-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] sm:mb-14 sm:p-2">
          <div className="flex min-w-max items-center justify-between gap-1 px-2 sm:gap-2">
            {activeIndustries.map((ind) => {
              const isActive = activeTab === ind.id;

              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveTab(ind.id)}
                  className={`text-basic sm:text-basic relative flex-1 rounded-[50px] px-6 py-3 text-center font-semibold transition-all duration-100 sm:px-8 ${
                    isActive ? "font-bold text-white" : "text-slate-900"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeIndustryTab"
                      className="absolute inset-0 rounded-[50px] bg-[linear-gradient(180deg,#0031a5_0%,#0052e0_100%)] shadow-[0_8px_16px_rgba(0,38,136,0.35)]"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{ind.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Card Container with Stacking Slide & Scale Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndustry.id}
            initial={{ opacity: 0, x: 100, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.95 }}
            transition={{
              duration: 0.5,
              ease: [0.25, 1, 0.5, 1],
            }}
            className="relative mx-auto max-w-full overflow-hidden rounded-[20px] sm:rounded-[28px]"
          >
            <div className="relative flex flex-col items-center lg:flex-row">
              {/* Left Side: Taller Image Container */}
              <motion.div
                initial={{ opacity: 0, x: -40, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative h-[280px] w-full overflow-hidden rounded-[20px] shadow-2xl sm:h-[380px] sm:rounded-[28px] lg:h-[540px] lg:w-1/2"
              >
                <Image
                  src={currentIndustry.image}
                  alt={currentIndustry.title}
                  fill
                  className="object-cover object-center sm:object-left"
                  priority
                />
              </motion.div>

              {/* Right Side: Exact Hugging White Card */}
              <motion.div
                initial={{ opacity: 0, x: 60, scale: 0.92 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative z-10 -mt-6 flex min-h-auto w-full flex-col justify-between rounded-[24px] bg-white/95 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] sm:-mt-10 sm:rounded-[32px] sm:bg-white/90 sm:p-8 lg:mt-0 lg:-ml-28 lg:h-[477px] lg:w-[58%] lg:p-11"
              >
                <div>
                  {/* Title */}
                  <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-2xl">
                    {currentIndustry.title}
                  </h3>

                  {/* Description */}
                  <p className="text-basic sm:text-basic mt-2 leading-[30] leading-relaxed text-black sm:mt-3">
                    {currentIndustry.description}
                  </p>

                  {/* Features List */}
                  <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:mt-6 sm:grid-cols-2 sm:gap-y-4">
                    {currentIndustry.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 + idx * 0.05 }}
                        className="flex items-center gap-2 sm:gap-2.5"
                      >
                        <span className="size-1.5 shrink-0 rounded-full bg-slate-900 sm:size-2" />
                        <span className="text-basic sm:text-basic font-semibold text-slate-900">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Read More Pill Button */}
                <div className="mt-6 flex justify-start sm:mt-8">
                  <Link
                    href={currentIndustry.link}
                    className="text-basic sm:text-basic inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-[#f3f4f6] px-4 py-2 font-bold text-slate-900 shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all hover:bg-slate-200 sm:gap-2.5 sm:px-6 sm:py-2.5"
                  >
                    Read More
                    <MoveRight className="size-3.5 sm:size-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
