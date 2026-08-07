"use client";

import { useState, useRef, useEffect } from "react";
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
  sectionBackgroundImage?: string;
}

export function _IndustryCardSkeleton() {
  return (
    <div className="relative mx-auto max-w-full overflow-hidden rounded-[20px] sm:rounded-[28px]">
      <div className="relative flex flex-col items-center lg:flex-row">
        <div className="relative h-[220px] w-full overflow-hidden rounded-[20px] bg-slate-200 sm:h-[340px] sm:rounded-[40px] lg:h-[540px] lg:w-1/2">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        </div>
        <div className="relative z-10 -mt-6 flex min-h-auto w-full flex-col justify-between rounded-[24px] bg-white/95 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] sm:-mt-10 sm:rounded-[32px] sm:p-8 lg:mt-0 lg:-ml-28 lg:h-[477px] lg:w-[58%] lg:p-11">
          <div>
            <div className="h-6 w-3/4 animate-pulse rounded-md bg-slate-200 sm:h-8" />
            <div className="mt-4 space-y-2">
              <div className="h-4 w-full animate-pulse rounded-md bg-slate-200" />
              <div className="h-4 w-5/6 animate-pulse rounded-md bg-slate-200" />
              <div className="h-4 w-2/3 animate-pulse rounded-md bg-slate-200" />
            </div>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="size-2 animate-pulse rounded-full bg-slate-200" />
                  <div className="h-4 w-4/5 animate-pulse rounded-md bg-slate-200" />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 sm:mt-8">
            <div className="h-10 w-32 animate-pulse rounded-full bg-slate-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function HomeIndustries({
  eyebrow = "Digital Solutions",
  title = "Built for your industry",
  subtitle = "Explore our suite of AI-powered products designed to automate operations, improve accuracy, and drive growth across industries.",
  industries = defaultIndustries,
  sectionBackgroundImage = "/images/common-blue-background.svg",
}: HomeIndustriesProps) {
  const activeIndustries =
    industries && industries.length > 0 ? industries : defaultIndustries;

  const [activeTab, setActiveTab] = useState<string>(
    activeIndustries[0]?.id ?? "banking",
  );
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);

  const tabsRef = useRef<Record<string, HTMLButtonElement | null>>({});

  const currentIndustry: IndustrySolution =
    activeIndustries.find((item) => item.id === activeTab) ??
    activeIndustries[0] ??
    defaultIndustries[0]!;

  const handleTabChange = (tabId: string) => {
    if (tabId !== activeTab) {
      setIsImageLoading(true);
      setActiveTab(tabId);
    }
  };

  const isMounted = useRef(false);

  useEffect(() => {
    // Prevent scrolling into view on initial mount/refresh
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    const activeNode = tabsRef.current[activeTab];
    if (activeNode) {
      activeNode.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [activeTab]);

  return (
    <section className="relative w-full py-8 sm:py-4">
      {/* Outer Container with Constant CSS Background Image */}
      <div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[24px] bg-[#f4f7fc] bg-cover bg-center bg-no-repeat p-4 shadow-lg sm:rounded-[36px] sm:p-8 lg:p-14"
        style={{
          backgroundImage: `url(${sectionBackgroundImage})`,
        }}
      >
        {/* Content Container Above Background */}
        <div className="relative z-10 pb-10 sm:pb-0">
          {/* Header Section */}
          <div className="mx-auto mb-6 flex max-w-3xl flex-col items-center text-center sm:mb-10">
            {eyebrow && (
              <div className="mb-6 inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-xs font-semibold text-[#2b2bad] shadow-sm sm:mb-8 sm:border-b-4 sm:text-lg">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2b2bad]" />
                {eyebrow}
              </div>
            )}

            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[46px] lg:leading-tight">
              {title}
            </h2>

            {subtitle && (
              <p className="sm:text-basic mt-2 text-sm leading-relaxed whitespace-normal text-slate-600 sm:mt-3 md:text-lg">
                {subtitle}
              </p>
            )}
          </div>

          {/* Tab Switcher Bar - Hidden Scrollbar & Auto Centered */}
          <div className="mx-auto mb-8 w-full max-w-full [scrollbar-width:none] overflow-x-auto rounded-[60px] border border-slate-100/80 bg-white p-2 shadow-[0_4px_20px_rgba(0,0,0,0.04)] [-ms-overflow-style:none] sm:mb-14 sm:p-2.5 [&::-webkit-scrollbar]:hidden">
            <div className="flex min-w-max items-center justify-between gap-1 px-1 sm:gap-2 sm:px-2">
              {activeIndustries.map((ind) => {
                const isActive = activeTab === ind.id;

                return (
                  <button
                    key={ind.id}
                    ref={(el) => {
                      tabsRef.current[ind.id] = el;
                    }}
                    onClick={() => handleTabChange(ind.id)}
                    className={`lg:text-basic relative flex-1 rounded-[50px] px-4 py-2.5 text-center text-sm font-semibold transition-all duration-100 sm:px-8 sm:py-3 ${
                      isActive ? "font-bold text-white" : "text-slate-900"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeIndustryTab"
                        className="absolute inset-0 rounded-[50px] bg-[linear-gradient(180deg,#0031a5_0%,#0052e0_100%)] whitespace-nowrap shadow-[0_8px_16px_rgba(0,38,136,0.35)]"
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

          {/* Card Content Container */}
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
                {/* Image Container with Integrated Skeleton Loader */}
                <motion.div
                  initial={{ opacity: 0, x: -40, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative h-[220px] w-full overflow-hidden rounded-[20px] bg-slate-200/80 shadow-2xl sm:h-[340px] sm:rounded-[28px] lg:h-[540px] lg:w-1/2"
                >
                  {isImageLoading && (
                    <div className="absolute inset-0 z-20 overflow-hidden bg-slate-200">
                      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-slate-100/60 to-transparent" />
                    </div>
                  )}

                  <Image
                    src={currentIndustry.image}
                    alt={currentIndustry.title}
                    fill
                    className={`object-cover object-center transition-opacity duration-500 sm:object-left ${
                      isImageLoading ? "opacity-0" : "opacity-100"
                    }`}
                    onLoad={() => setIsImageLoading(false)}
                    priority
                  />
                </motion.div>

                {/* Right Side: Content Box */}
                <motion.div
                  initial={{ opacity: 0, x: 60, scale: 0.92 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative z-10 -mt-6 flex min-h-auto w-full flex-col justify-between rounded-[24px] bg-white/95 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] sm:-mt-10 sm:rounded-[32px] sm:bg-white/90 sm:p-8 lg:mt-0 lg:-ml-20 lg:h-[477px] lg:w-[58%] lg:p-11"
                >
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-2xl">
                      {currentIndustry.title}
                    </h3>

                    <p className="sm:text-basic mt-2 text-sm leading-relaxed text-slate-700 sm:mt-3">
                      {currentIndustry.description}
                    </p>

                    <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2.5 sm:mt-6 sm:grid-cols-2 sm:gap-y-4">
                      {currentIndustry.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.2 + idx * 0.05,
                          }}
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

                  <div className="mt-6 flex justify-start sm:mt-8">
                    <Link
                      href={currentIndustry.link}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-[#f3f4f6] px-4 py-2 text-sm font-bold text-slate-900 shadow-[0_4px_12px_rgba(0,0,0,0.06)] transition-all hover:bg-slate-200 sm:gap-2.5 sm:px-6 sm:py-2.5 sm:text-sm"
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
      </div>
    </section>
  );
}
