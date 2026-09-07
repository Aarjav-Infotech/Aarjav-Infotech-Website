import React from "react";
import Image from "next/image";
import { Plus, ArrowUp } from "lucide-react";

interface AIBusinessAssistantSectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

const featureCards = [
  {
    image: "/images/ai-assistant-1.svg",
    title: "Natural Language",
    description: "Just ask questions like you would to a colleague.",
  },
  {
    image: "/images/ai-assistant-2.svg",
    title: "Instant Insights",
    description: "Get complex data analyzed in seconds.",
  },
  {
    image: "/images/ai-assistant-3.svg",
    title: "Predictive Analysis",
    description: "Forecast trends based on historical data.",
  },
  {
    image: "/images/ai-assistant-4.svg",
    title: "Proactive Alerts",
    description: "AI notifies you of anomalies or opportunities.",
  },
];

export default function AIBusinessAssistantSection({
  eyebrow = "AI Assistant",
  title = "Meet Your AI Business Assistant",
  subtitle = "Talk to your data naturally.",
}: AIBusinessAssistantSectionProps) {
  return (
    <section className="relative w-full overflow-hidden rounded-[40px] border-b-10 border-[#E3E3E3] bg-gradient-to-b from-[#ffffff] via-[#cae2fe] via-[#ebf4ff] via-[45%] via-[75%] to-[#a8ceff] px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center">
          {eyebrow && (
            <div className="mb-6 inline-flex items-center gap-1.5 rounded border-b-4 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-base font-semibold text-[#2b2bad] shadow-sm sm:text-[14px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2b2bad]" />
              {eyebrow}
            </div>
          )}

          <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-sm text-slate-600 sm:text-base">
              {subtitle}
            </p>
          )}
        </div>

        {/* Main Content Grid */}
        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: AI Chat Simulation Card */}
          <div className="flex min-h-[420px] flex-col justify-between rounded-[32px] bg-white p-6 shadow-[0_10px_35px_rgba(0,0,0,0.04)] ring-1 ring-slate-100/80 sm:p-8 lg:col-span-6">
            {/* Conversation Flow */}
            <div className="space-y-6">
              {/* User Question */}
              <div className="flex justify-end">
                <div className="max-w-[85%] rounded-[20px] rounded-tr-md bg-[#0038b8] px-5 py-3.5 text-xs leading-relaxed font-medium text-white shadow-sm sm:text-sm">
                  How are our sales looking today compared to last week?
                </div>
              </div>

              {/* AI Response */}
              <div className="flex items-start gap-3">
                <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0038b8] p-1.5 text-white shadow-sm">
                  <Image
                    src="/images/ai-avatar.svg"
                    alt="AI Avatar"
                    width={20}
                    height={20}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="max-w-[85%] rounded-[20px] rounded-tl-md bg-[#eef4ff] px-5 py-3.5 text-xs leading-relaxed text-slate-800 sm:text-sm">
                  Today's sales are up 15% compared to last week. We've moved 45
                  carats of polished diamonds, primarily in the 1-2ct range
                  (VS1-VVS2). Would you like a detailed breakdown?
                </div>
              </div>
            </div>

            {/* Chat Input Bar */}
            <div className="mt-8 flex items-center justify-between rounded-full border border-slate-200 bg-[#f8fafc] px-4 py-2 shadow-inner">
              <div className="flex flex-1 items-center gap-2.5">
                <button
                  type="button"
                  aria-label="Add attachment"
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-slate-400 transition hover:text-slate-600"
                >
                  <Plus className="h-4 w-4" />
                </button>
                <input
                  type="text"
                  placeholder="Type a message or share an image..."
                  readOnly
                  className="w-full bg-transparent text-xs text-slate-700 placeholder-slate-400 focus:outline-none sm:text-sm"
                />
              </div>

              <button
                type="button"
                aria-label="Send message"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0038b8] text-white shadow-sm transition hover:bg-[#002b8f]"
              >
                <ArrowUp className="h-3.5 w-3.5 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Right Column: 2x2 Feature Cards Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6 lg:gap-6">
            {featureCards.map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-[28px] bg-white p-6 shadow-[0_10px_35px_rgba(0,0,0,0.04)] ring-1 ring-slate-100/80 transition duration-200 hover:shadow-md"
              >
                <div>
                  <div className="relative mb-5 flex h-10 w-10 items-center justify-center">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={36}
                      height={36}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 sm:text-lg">
                    {card.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
