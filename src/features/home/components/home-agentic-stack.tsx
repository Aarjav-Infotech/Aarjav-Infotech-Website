"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface LayerData {
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

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      // Strictly target Desktop (1024px and wider) for scroll calculations
      if (window.innerWidth < 1024 || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollHeight =
        containerRef.current.clientHeight - window.innerHeight;

      if (totalScrollHeight <= 0) return;

      const scrollProgress = Math.min(
        Math.max(-rect.top / totalScrollHeight, 0),
        1,
      );

      const nextIndex = Math.min(
        Math.floor(scrollProgress * LAYERS.length),
        LAYERS.length - 1,
      );

      setActiveLayer(nextIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll active tab into view center when clicked on mobile
  useEffect(() => {
    if (isMounted && window.innerWidth < 1024) {
      const activeTab = mobileTabRefs.current[activeLayer];
      if (activeTab) {
        activeTab.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  }, [activeLayer, isMounted]);

  // Fallback assignment prevents TypeScript "possibly undefined" errors
  const currentData = (LAYERS[activeLayer] ?? LAYERS[0]) as LayerData;
  return (
    <section
      ref={containerRef}
      className="relative h-auto w-full px-4 py-8 sm:px-6 lg:h-[420vh] lg:px-12"
    >
      <div className="relative mx-auto flex w-full max-w-full flex-col justify-center lg:sticky lg:top-8 lg:min-h-[calc(100vh-4rem)]">
        {/* Outer Container */}
        <div className="relative overflow-hidden rounded-[24px] bg-[url('/images/layersection-bg.svg')] bg-cover bg-center bg-no-repeat p-5 sm:rounded-[32px] sm:p-8 lg:p-12">
          {/* Header with Custom Eyebrow */}
          <div className="mx-auto mb-6 flex max-w-3xl flex-col items-center text-center sm:mb-10">
            <div className="text-basic mb-6 inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 font-semibold text-[#2b2bad] shadow-sm sm:mb-8 sm:border-b-4 sm:text-[14px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2b2bad]" />
              7-LAYER STACK
            </div>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Layer of the agentic stack
            </h2>
          </div>

          {/* Mobile Selector Container (< lg): Pure Click Mode */}
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
                    onClick={() => setActiveLayer(index)}
                    className={`flex items-center justify-center rounded-full px-3.5 py-1 font-bold whitespace-nowrap transition-all ${
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
                      <div
                        className={`relative size-full transition-all duration-300 ease-out ${
                          isActive
                            ? "-translate-y-1.5 opacity-100 drop-shadow-[0_10px_20px_rgba(59,130,246,0.5)]"
                            : "translate-y-0 opacity-100"
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

                      {isActive && (
                        <div className="pointer-events-none absolute top-1/2 left-[95%] z-40 flex -translate-y-1/2 items-center transition-all duration-300">
                          <div className="size-2.5 rounded-full bg-[#002688] shadow-sm ring-4 ring-blue-50" />
                          <div className="h-[2px] w-40 border-t-2 border-dotted border-[#002688]" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Active Card Details */}
            <div className="lg:col-span-7">
              <div className="flex flex-col rounded-[20px] border border-slate-200/10 bg-white p-5 shadow-lg transition-all duration-300 sm:rounded-[28px] sm:p-8 lg:min-h-[545px]">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
