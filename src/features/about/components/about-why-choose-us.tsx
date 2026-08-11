"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  Network,
  ShieldCheck,
  Cpu,
  Users,
  Layers,
  Sparkles,
  Key,
} from "lucide-react";

interface FeatureDetail {
  icon: React.ElementType;
  title: string;
  description: string;
}

interface FeatureTab {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  details: FeatureDetail[];
}

const REASONS_DATA: FeatureTab[] = [
  {
    id: "architect",
    number: "01",
    title: "Architect",
    headline: "Architect: build any agent, no code needed.",
    description:
      "Describe what you need in plain language. Architect builds the full agent logic, integrations, access controls, UI, and delivers something your team can use from day one.",
    details: [
      {
        icon: MessageSquare,
        title: "Conversation to application",
        description:
          "Describe your workflow in plain English. Architect converts it into a working agent stack.",
      },
      {
        icon: Network,
        title: "Connects to your existing systems",
        description:
          "ERP, CRM, HRIS, documents. Architect wires them in without custom development.",
      },
      {
        icon: ShieldCheck,
        title: "Governed from the start",
        description:
          "Role-based access, audit logging, and compliance controls built in, not bolted on.",
      },
    ],
  },
  {
    id: "platform-people",
    number: "02",
    title: "Platform + People",
    headline: "Platform + People: elite engineering on demand.",
    description:
      "Get access to dedicated AI architects and engineers alongside powerful infrastructure to accelerate deployment.",
    details: [
      {
        icon: Users,
        title: "Dedicated AI Engineers",
        description:
          "Embedded technical expertise working directly alongside your team.",
      },
      {
        icon: Cpu,
        title: "Continuous Maintenance",
        description:
          "24/7 monitoring, evaluation pipelines, and model fine-tuning.",
      },
      {
        icon: ShieldCheck,
        title: "Enterprise SLA",
        description:
          "Guaranteed response times and production reliability standards.",
      },
    ],
  },
  {
    id: "prebuilt-agents",
    number: "03",
    title: "Pre-built Agents",
    headline: "Pre-built Agents: instant value out of the box.",
    description:
      "Deploy domain-specific agents for finance, customer support, legal, and HR that are pre-trained on industry standards.",
    details: [
      {
        icon: Layers,
        title: "Modular Templates",
        description:
          "Ready-to-use workflows tailored for high-impact operational tasks.",
      },
      {
        icon: Sparkles,
        title: "Rapid Deployment",
        description:
          "Go live in days rather than months with verified baseline capabilities.",
      },
      {
        icon: Network,
        title: "Seamless Scaling",
        description:
          "Easily expand agent capability across new business units.",
      },
    ],
  },
  {
    id: "simulation-improvement",
    number: "04",
    title: "Simulation + Improvement",
    headline: "Simulation + Improvement: rigorous evaluations.",
    description:
      "Test agent performance in simulated production environments before full deployment to eliminate hallucination risk.",
    details: [
      {
        icon: Cpu,
        title: "Automated Testing",
        description:
          "Stress test models against hundreds of edge cases automatically.",
      },
      {
        icon: Sparkles,
        title: "Eval Dashboards",
        description:
          "Real-time feedback metrics on accuracy, latency, and cost efficiency.",
      },
      {
        icon: ShieldCheck,
        title: "Guardrails & Alignment",
        description:
          "Enforce safety bounds so agents never violate business guidelines.",
      },
    ],
  },
  {
    id: "no-lockin",
    number: "05",
    title: "No Lock-in, Own Your IP",
    headline: "No Lock-in, Own Your IP: full ownership & control.",
    description:
      "You retain 100% ownership of your custom workflows, data, fine-tuned weights, and code with complete portability.",
    details: [
      {
        icon: Key,
        title: "Complete Data Sovereignty",
        description:
          "Your data never trains public models or leaves your cloud boundaries.",
      },
      {
        icon: Network,
        title: "Open Stack Integration",
        description:
          "Export configurations or run on your own infrastructure anytime.",
      },
      {
        icon: ShieldCheck,
        title: "Zero Proprietary Lock-in",
        description:
          "Full code transparency with modular open-standard architecture.",
      },
    ],
  },
];

export function AboutWhyChooseUs() {
  const defaultTab = REASONS_DATA[0]!;
  const [activeTab, setActiveTab] = useState<string>(defaultTab.id);

  const currentTab =
    REASONS_DATA.find((tab) => tab.id === activeTab) ?? defaultTab;

  return (
    <section className="w-full bg-[#FAFAFC] py-12 sm:py-12">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Header Badge & Title */}
        <div className="flex flex-col items-center text-center">
          <div className="text-basic inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 font-semibold text-[#002688] shadow-sm">
            <span className="size-1.5 rounded-full bg-[#002688]" />
            Why Choose Us
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-[56px]">
            Five reasons enterprises pick Us.
          </h2>
        </div>

        {/* Interactive Layout Grid */}
        <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Side: Menu List */}
          <div className="flex flex-col gap-5 lg:col-span-4">
            {REASONS_DATA.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group relative flex items-center justify-between rounded-full px-6 py-4 text-left transition-all duration-300 ${
                    isActive
                      ? "bg-[linear-gradient(180deg,#002688_0%,#0053FA_100%)] text-white shadow-[0_10px_25px_rgba(0,38,136,0.35)]"
                      : "bg-transparent text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  <span className="text-base font-bold sm:text-lg">
                    {tab.title}
                  </span>
                  <span
                    className={`text-basic font-semibold ${
                      isActive ? "text-white/90" : "text-slate-950"
                    }`}
                  >
                    {tab.number}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Side: Tab Details Card */}
          <div className="lg:col-span-8">
            <div className="rounded-[28px] border border-slate-200/80 bg-[#F2F4F7] p-6 shadow-xl sm:rounded-[36px] sm:p-8 lg:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTab.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {/* Headline */}
                  <h3 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                    {currentTab.headline}
                  </h3>

                  {/* Overview Description */}
                  <p className="mt-2 text-base leading-relaxed text-slate-600 sm:text-lg">
                    {currentTab.description}
                  </p>

                  <div className="my-2 h-[1px] w-full bg-slate-300/60" />

                  {/* Bullet / Icon List */}
                  <div className="flex flex-col gap-4">
                    {currentTab.details.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <div key={index} className="flex items-start gap-4">
                          <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#002688] shadow-sm">
                            <IconComponent className="size-5" />
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-slate-900 sm:text-lg">
                              {item.title}
                            </h4>
                            <p className="text-basic mt-1 leading-relaxed text-slate-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutWhyChooseUs;
