"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export interface LayerData {
  id: string;
  layerNumber: string;
  title: string;
  description: string;
  bullets: string[];
  tags: string[];
  iconSrc: string;
}

const LAYERS: LayerData[] = [
  {
    id: "layer-01",
    layerNumber: "LAYER 01",
    title: "Connect agents from anywhere",
    description:
      "Agents built on AWS, Azure, GCP, LangChain, competitors, custom stacks, all connected to one control plane. No migration. No rewrite. Just connect and govern.",
    bullets: [
      "Any cloud: AWS, Azure, GCP, on-prem",
      "Any framework: LangChain, CrewAI, custom",
      "Competitors' agents, no lock-in required",
    ],
    tags: ["AWS Bedrock", "Azure AI", "GCP Vertex", "LangChain", "On-prem"],
    iconSrc: "/images/layer-1.svg",
  },
  {
    id: "layer-02",
    layerNumber: "LAYER 02",
    title: "Agentic Security & Compliance",
    description:
      "Enforce granular permissions, secret management, and compliance rules across every agent interaction automatically.",
    bullets: [
      "Real-time policy enforcement",
      "SOC2 & HIPAA compliant auditing",
      "Zero-trust credential delegation",
    ],
    tags: ["OAuth2", "Vault", "IAM", "Compliance"],
    iconSrc: "/images/layer-2.svg",
  },
  {
    id: "layer-03",
    layerNumber: "LAYER 03",
    title: "Orchestration & Workflow Routing",
    description:
      "Route tasks intelligently between specialized LLMs, local models, and autonomous agents based on cost and latency.",
    bullets: [
      "Dynamic cost-optimized routing",
      "Fallback & redundancy pipelines",
      "Sub-second execution speeds",
    ],
    tags: ["LlamaIndex", "AutoGPT", "FastAPI"],
    iconSrc: "/images/layer-3.svg",
  },
  {
    id: "layer-04",
    layerNumber: "LAYER 04",
    title: "Document & Context Processing",
    description:
      "Transform unstructured PDF documents, audio streams, and raw database entries into structured vector embeddings.",
    bullets: [
      "Multimodal document extraction",
      "Semantic chunking & indexing",
      "Real-time ETL data pipelines",
    ],
    tags: ["Pinecone", "Unstructured", "Milvus"],
    iconSrc: "/images/layer-4.svg",
  },
  {
    id: "layer-05",
    layerNumber: "LAYER 05",
    title: "Unified Memory & Knowledge Graph",
    description:
      "Provide long-term contextual memory across user sessions and cross-agent communication channels seamlessly.",
    bullets: [
      "Persistent state management",
      "Graph-based relationship mapping",
      "Privacy-first memory encryption",
    ],
    tags: ["Neo4j", "Redis", "MemGPT"],
    iconSrc: "/images/layer-5.svg",
  },
  {
    id: "layer-06",
    layerNumber: "LAYER 06",
    title: "Autonomous Action Engine",
    description:
      "Safely execute external API calls, database mutations, and web automation tools with human-in-the-loop controls.",
    bullets: [
      "Sandboxed tool execution",
      "Human approval triggers for high-risk actions",
      "Full rollback & undo history",
    ],
    tags: ["Zapier", "REST APIs", "Playwright"],
    iconSrc: "/images/layer-6.svg",
  },
  {
    id: "layer-07",
    layerNumber: "LAYER 07",
    title: "Monitoring, Observability & Analytics",
    description:
      "Track LLM token costs, latency bottlenecks, and output hallucination rates with real-time telemetry dashboards.",
    bullets: [
      "Token cost attribution per team",
      "Evals & hallucination tracking",
      "Custom telemetry webhooks",
    ],
    tags: ["Datadog", "OpenTelemetry", "PostHog"],
    iconSrc: "/images/layer-7.svg",
  },
];

export function AgenticStackSection() {
  const [activeLayer, setActiveLayer] = useState<number>(0);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileTabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const isUserClicked = useRef<boolean>(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    setIsMounted(true);

    const updateScrollProgress = () => {
      if (window.innerWidth < 1024 || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollHeight =
        containerRef.current.clientHeight - window.innerHeight;

      if (totalScrollHeight <= 0) return;

      const rawProgress = -rect.top / totalScrollHeight;
      const scrollProgress = Math.min(Math.max(rawProgress, 0), 0.9999);

      const calculatedIndex = Math.floor(scrollProgress * LAYERS.length);
      const nextIndex = Math.min(
        Math.max(calculatedIndex, 0),
        LAYERS.length - 1,
      );

      setActiveLayer((prev) => (prev !== nextIndex ? nextIndex : prev));
    };

    const handleScroll = () => {
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(updateScrollProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  useEffect(() => {
    if (isMounted && isUserClicked.current && window.innerWidth < 1024) {
      const activeTab = mobileTabRefs.current[activeLayer];
      if (activeTab) {
        activeTab.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
      isUserClicked.current = false;
    }
  }, [activeLayer, isMounted]);

  const handleTabClick = (index: number) => {
    isUserClicked.current = true;
    setActiveLayer(index);
  };

  const currentData = (LAYERS[activeLayer] ?? LAYERS[0]) as LayerData;

  return (
    <section
      ref={containerRef}
      className="relative h-auto w-full px-4 py-8 sm:px-6 lg:h-[480vh] lg:px-12"
    >
      <div className="relative mx-auto flex w-full max-w-full flex-col justify-center lg:sticky lg:top-8 lg:min-h-[calc(100vh-4rem)]">
        {/* Outer Container */}
        <div className="relative overflow-hidden rounded-[24px] bg-[url('/images/layersection-bg.svg')] bg-cover bg-center bg-no-repeat p-5 sm:rounded-[32px] sm:p-8 lg:p-12">
          {/* Header */}
          <div className="mx-auto mb-6 flex max-w-3xl flex-col items-center text-center sm:mb-10">
            <div className="text-basic mb-6 inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 font-semibold text-[#2b2bad] shadow-sm sm:mb-8 sm:border-b-4 sm:text-[14px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2b2bad]" />
              7-Layer Stack
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Layer of the agentic stack
            </h2>
          </div>

          {/* Mobile Selector Container (< lg) */}
          <div className="mt-4 flex w-full scrollbar-none overflow-x-auto scroll-smooth pb-2 lg:hidden">
            <div className="flex gap-2">
              {LAYERS.map((layer, index) => {
                const isActive = activeLayer === index;
                return (
                  <button
                    key={layer.id}
                    ref={(el) => {
                      mobileTabRefs.current[index] = el;
                    }}
                    type="button"
                    tabIndex={isMounted ? 0 : -1}
                    onClick={() => handleTabClick(index)}
                    className={`flex items-center justify-center rounded-full px-3.5 py-1 font-bold whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? "scale-105 bg-[#0052FF] text-white shadow-md"
                        : "bg-slate-100 text-slate-700 active:scale-95"
                    }`}
                  >
                    {layer.layerNumber}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid Content */}
          <div className="mt-6 grid grid-cols-1 items-center gap-6 lg:mt-8 lg:grid-cols-12 lg:gap-10">
            {/* Left 3D Isometric Stack Diagram */}
            <div className="relative hidden flex-col items-center justify-center lg:col-span-5 lg:flex">
              <div className="relative flex w-[200px] flex-col items-center lg:h-[445px]">
                <div className="absolute top-4 bottom-4 left-1/2 -z-0 w-px -translate-x-1/2 border-r-2 border-dotted border-slate-300" />

                {LAYERS.map((layer, index) => {
                  const isActive = activeLayer === index;
                  const strictZIndex = LAYERS.length - index;

                  return (
                    <div
                      key={layer.id}
                      className={`relative h-[110px] w-[200px] transition-all duration-300 ease-out ${
                        index > 0 ? "-mt-[55px]" : ""
                      }`}
                      style={{ zIndex: strictZIndex }}
                    >
                      {/* Fully Opaque Solid Container: Only translates up on active */}
                      <div
                        className={`relative size-full opacity-100 transition-transform duration-300 ease-out ${
                          isActive ? "-translate-y-2.5" : "translate-y-0"
                        }`}
                      >
                        <Image
                          src={layer.iconSrc}
                          alt={layer.title}
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>

                      {/* Active Indicator Line & Dot */}
                      {isActive && (
                        <motion.div
                          layoutId="activePointer"
                          transition={{
                            type: "spring",
                            stiffness: 350,
                            damping: 30,
                          }}
                          className="pointer-events-none absolute top-1/2 left-[95%] z-40 flex -translate-y-1/2 items-center"
                        >
                          <div className="size-2.5 rounded-full bg-[#002688] shadow-sm ring-4 ring-blue-100" />
                          <div className="h-[2px] w-40 border-t-2 border-dotted border-[#002688]" />
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Active Card Details */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-[20px] border border-slate-200/20 bg-white p-5 shadow-lg sm:rounded-[28px] sm:p-8 lg:min-h-[545px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentData.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2.5 font-extrabold tracking-widest text-[#002688]">
                        <span className="h-4 w-1 rounded-full bg-[#002688]" />
                        {currentData.layerNumber}
                      </div>

                      <h3 className="text-basic mt-3 font-bold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
                        {currentData.title}
                      </h3>

                      <p className="sm:text-basic mt-3 text-sm leading-relaxed text-slate-500">
                        {currentData.description}
                      </p>

                      <ul className="sm:text-basic mt-5 space-y-2 text-sm text-slate-700 sm:mt-6 sm:space-y-2.5">
                        {currentData.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="mt-2 size-1 shrink-0 rounded-full bg-slate-800" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-2 sm:gap-2.5">
                      {currentData.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="inline-block rounded-full bg-gradient-to-b from-[#0031a5] to-[#0052e0] p-[3px]"
                        >
                          <span className="block rounded-full bg-white px-2.5 py-1 font-semibold text-[#2B2BAD] sm:px-4 sm:py-1.5">
                            {tag}
                          </span>
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
