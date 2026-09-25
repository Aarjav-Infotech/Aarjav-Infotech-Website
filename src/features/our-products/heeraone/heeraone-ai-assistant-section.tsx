"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Plus, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { asset } from "@/lib/cdn";

interface AIBusinessAssistantSectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

const featureCards = [
  {
    image: asset("/images/ai-assistant-1.svg"),
    title: "Natural Language",
    description: "Just ask questions like you would to a colleague.",
  },
  {
    image: asset("/images/ai-assistant-2.svg"),
    title: "Instant Insights",
    description: "Get complex data analyzed in seconds.",
  },
  {
    image: asset("/images/ai-assistant-3.svg"),
    title: "Predictive Analysis",
    description: "Forecast trends based on historical data.",
  },
  {
    image: asset("/images/ai-assistant-4.svg"),
    title: "Proactive Alerts",
    description: "AI notifies you of anomalies or opportunities.",
  },
];

export default function AIBusinessAssistantSection({
  eyebrow = "AI Assistant",
  title = "Meet Your AI Business Assistant",
  subtitle = "Talk to your data naturally.",
}: AIBusinessAssistantSectionProps) {
  const userTextFull = "How are our sales looking today compared to last week?";
  const aiTextFull =
    "Today's sales are up 15% compared to last week. We've moved 45 carats of polished diamonds, primarily in the 1-2ct range (VS1-VVS2). Would you like a detailed breakdown?";

  // Typing states
  const [userTypedText, setUserTypedText] = useState("");
  const [isUserTypingDone, setIsUserTypingDone] = useState(false);
  const [showRobot, setShowRobot] = useState(false);
  const [aiTypedText, setAiTypedText] = useState("");
  const [isAiTypingDone, setIsAiTypingDone] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let userTimer: NodeJS.Timeout;
    let aiTimer: NodeJS.Timeout;
    let pauseTimer: NodeJS.Timeout;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        // Clear all active intervals & timeouts
        clearInterval(userTimer);
        clearInterval(aiTimer);
        clearTimeout(pauseTimer);

        if (entry.isIntersecting) {
          // Reset states
          setUserTypedText("");
          setIsUserTypingDone(false);
          setShowRobot(false);
          setAiTypedText("");
          setIsAiTypingDone(false);

          // STEP 1: Type user question
          let userIndex = 0;
          userTimer = setInterval(() => {
            if (userIndex < userTextFull.length) {
              setUserTypedText(userTextFull.slice(0, userIndex + 1));
              userIndex++;
            } else {
              clearInterval(userTimer);
              setIsUserTypingDone(true);

              // STEP 2: Robot avatar pops in after brief pause
              pauseTimer = setTimeout(() => {
                setShowRobot(true);

                // STEP 3: Type AI answer
                let aiIndex = 0;
                aiTimer = setInterval(() => {
                  if (aiIndex < aiTextFull.length) {
                    setAiTypedText(aiTextFull.slice(0, aiIndex + 1));
                    aiIndex++;
                  } else {
                    clearInterval(aiTimer);
                    setIsAiTypingDone(true);
                  }
                }, 18);
              }, 300);
            }
          }, 24);
        } else {
          // Reset when scrolled out of screen center
          setUserTypedText("");
          setIsUserTypingDone(false);
          setShowRobot(false);
          setAiTypedText("");
          setIsAiTypingDone(false);
        }
      },
      {
        rootMargin: "-30% 0px -30% 0px", // Trigger when the element enters viewport center
        threshold: 0,
      },
    );

    observer.observe(el);

    return () => {
      clearInterval(userTimer);
      clearInterval(aiTimer);
      clearTimeout(pauseTimer);
      observer.disconnect();
    };
  }, [userTextFull, aiTextFull]);

  return (
    <section className="relative w-full overflow-hidden rounded-[28px] border-b-8 border-[#E3E3E3] bg-gradient-to-b from-[#ffffff] via-[#cae2fe] via-[#ebf4ff] via-[45%] via-[75%] to-[#a8ceff] px-4 py-12 sm:rounded-[36px] sm:border-b-10 sm:px-6 sm:py-16 md:py-20 lg:rounded-[40px] lg:px-8">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center">
          {eyebrow && (
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border-b-2 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-xs font-semibold text-[#2b2bad] shadow-sm sm:mb-6 sm:border-b-4 sm:text-base">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2b2bad]" />
              {eyebrow}
            </div>
          )}

          <h2 className="max-w-3xl text-2xl font-bold tracking-tight text-[#0f172a] sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-xs text-slate-600 sm:mt-3 sm:text-base">
              {subtitle}
            </p>
          )}
        </div>

        {/* Main Content Grid */}
        <div
          ref={sectionRef}
          className="mt-8 grid grid-cols-1 items-stretch gap-6 sm:mt-12 lg:grid-cols-12 lg:gap-8"
        >
          {/* Left Column: AI Chat Simulation Card */}
          <div className="flex min-h-[380px] flex-col justify-between rounded-[24px] bg-white p-5 shadow-[0_10px_35px_rgba(0,0,0,0.04)] ring-1 ring-slate-100/80 sm:min-h-[420px] sm:rounded-[32px] sm:p-7 md:p-8 lg:col-span-6">
            {/* Conversation Flow */}
            <div className="space-y-5 sm:space-y-6">
              {/* User Question (Step 1: Typewriter) */}
              <div className="flex justify-end">
                <div className="min-h-[44px] w-full max-w-[85%] rounded-[18px] rounded-tr-sm bg-[#0038b8] px-4 py-3 text-xs leading-relaxed font-medium text-white shadow-sm sm:rounded-[20px] sm:rounded-tr-md sm:px-5 sm:py-3.5 sm:text-sm">
                  {userTypedText}
                  {!isUserTypingDone && (
                    <span className="ml-0.5 inline-block h-3.5 w-[2px] animate-pulse bg-white align-middle sm:h-4" />
                  )}
                </div>
              </div>

              {/* AI Response (Step 2: Robot Avatar Pop, Step 3: Typewriter) */}
              <div className="flex items-start gap-2.5 sm:gap-3">
                <div className="relative flex h-10 w-10 shrink-0 items-center justify-center p-1 sm:h-12 sm:w-12 md:h-14 md:w-14">
                  {showRobot && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                      className="h-full w-full"
                    >
                      <Image
                        src={asset("/icons/avatar-robot.svg")}
                        alt="AI Avatar"
                        width={36}
                        height={36}
                        className="h-full w-full object-contain"
                      />
                    </motion.div>
                  )}
                </div>

                <div
                  className={`min-h-[85px] w-full max-w-[85%] rounded-[18px] rounded-tl-sm px-4 py-3 text-xs leading-relaxed text-slate-800 shadow-sm transition-opacity duration-300 sm:min-h-[95px] sm:rounded-[20px] sm:rounded-tl-md sm:px-5 sm:py-3.5 sm:text-sm ${
                    showRobot
                      ? "bg-[#eef4ff] opacity-100"
                      : "bg-transparent opacity-0"
                  }`}
                >
                  <p className="inline font-normal">
                    {aiTypedText}
                    {showRobot && !isAiTypingDone && (
                      <span className="ml-0.5 inline-block h-3.5 w-[2px] animate-pulse bg-[#0038b8] align-middle sm:h-4" />
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Chat Input Bar */}
            <div className="mt-6 flex items-center justify-between rounded-full border border-slate-200 bg-[#f8fafc] px-3.5 py-1.5 shadow-inner sm:mt-8 sm:px-4 sm:py-2">
              <div className="flex flex-1 items-center gap-2 sm:gap-2.5">
                <button
                  type="button"
                  aria-label="Add attachment"
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-slate-400 transition hover:text-slate-600"
                >
                  <Plus className="h-4 w-4" />
                </button>
                <input
                  type="text"
                  placeholder="Type..."
                  readOnly
                  className="w-full bg-transparent text-xs text-slate-700 placeholder-slate-400 focus:outline-none sm:text-sm"
                />
              </div>

              <button
                type="button"
                aria-label="Send message"
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0038b8] text-white shadow-sm transition hover:bg-[#002b8f] sm:h-7 sm:w-7"
              >
                <ArrowUp className="h-3.5 w-3.5 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Right Column: 2x2 Feature Cards Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6 lg:gap-5">
            {featureCards.map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-[22px] bg-white p-5 shadow-[0_10px_35px_rgba(0,0,0,0.04)] ring-1 ring-slate-100/80 transition duration-200 hover:shadow-md sm:rounded-[28px] sm:p-6"
              >
                <div>
                  <div className="relative mb-3.5 flex h-9 w-9 items-center justify-center sm:mb-5 sm:h-10 sm:w-10">
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
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-500 sm:mt-2 sm:text-sm">
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
