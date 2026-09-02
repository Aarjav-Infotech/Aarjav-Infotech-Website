"use client";

import React from "react";
import Image from "next/image";

export default function AiVoiceCoreCapabilitiesSection() {
  const eyebrow = "Core Capabilities";

  return (
    <section className="bg-white py-12 sm:py-12">
      <div className="mx-auto max-w-7xl">
        {/* Header Block */}
        <div className="mb-16 text-center">
          <div className="flex flex-col items-center text-center">
            {eyebrow && (
              <div className="mb-6 inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200  px-3.5 py-1 text-xs font-bold text-[#2b2bad] shadow-sm sm:mb-10 sm:border-b-4 sm:text-[14px]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2b2bad]" />
                {eyebrow}
              </div>
            )}
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Intelligent Voice AI Capabilities
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-500 sm:text-base">
            From answering customer calls to integrating with enterprise
            systems, our AI Voice Agents deliver human-like conversations that
            scale with your business.
          </p>
        </div>

        {/* Top 4 Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* CARD 1: Natural Voice Conversations */}
          <div className="flex flex-col justify-between rounded-[2.5rem] border border-neutral-100 shadow-xl p-8 transition-all duration-300 ">
            <div className="relative mb-6 h-48 w-full overflow-hidden rounded-2xl border border-neutral-100 bg-white">
              <Image
                src="/images/voice-agent-1.png"
                alt="Natural Voice Conversations"
                fill
                className="object-contain p-4"
              />
            </div>
            <div>
              <h3 className="mb-3 text-2xl font-bold tracking-tight text-neutral-900">
                Natural Voice Conversations
              </h3>
              <p className="text-sm leading-relaxed text-neutral-500">
                Engage customers with AI voices that understand context, intent,
                interruptions, and multiple languages for natural, human-like
                communication.
              </p>
            </div>
          </div>

          {/* CARD 2: Intelligent Call Automation */}
          <div className="flex flex-col justify-between rounded-[2.5rem] border border-neutral-100 p-8 shadow-xl transition-all duration-300 ">
            <div className="relative mb-6 h-48 w-full overflow-hidden rounded-2xl border border-neutral-100 ">
              <Image
                src="/images/voice-agent-2.png"
                alt="Intelligent Call Automation"
                fill
                className="object-contain p-4"
              />
            </div>
            <div>
              <h3 className="mb-3 text-2xl font-bold tracking-tight text-neutral-900">
                Intelligent Call Automation
              </h3>
              <p className="text-sm leading-relaxed text-neutral-500">
                Automate appointment scheduling, FAQs, lead qualification,
                customer verification, order tracking, and outbound reminders
                without human intervention.
              </p>
            </div>
          </div>

          {/* CARD 3: Live Agent Handoff */}
          <div className="flex flex-col justify-between rounded-[2.5rem] border border-neutral-100 shadow-xl p-8 transition-all duration-300   lg:row-span-2">
            <div className="relative mb-6 min-h-[300px] w-full flex-1 overflow-hidden rounded-2xl border border-neutral-100 bg-white">
              <Image
                src="/images/voice-agent-5.png"
                alt="Live Agent Handoff"
                fill
                className="object-contain p-4"
              />
            </div>
            <div>
              <h3 className="mb-3 text-2xl font-bold tracking-tight text-neutral-900">
                Live Agent Handoff
              </h3>
              <p className="text-sm leading-relaxed text-neutral-500">
                Transfer complex conversations to human agents with complete
                customer history and conversation context for a smooth support
                experience.
              </p>
            </div>
          </div>

          {/* CARD 4: CRM & Business Integration */}
          <div className="flex flex-col justify-between rounded-[2.5rem] border border-neutral-100 shadow-xl p-8 transition-all duration-300  md:col-span-2">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-2xl font-bold tracking-tight text-neutral-900">
                  CRM & Business Integration
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500">
                  Connect seamlessly with CRM, ERP, calendars, telephony
                  providers, APIs, and internal databases for real-time
                  information during every conversation.
                </p>
              </div>
              <div className="relative h-48 w-full overflow-hidden rounded-2xl border border-neutral-100 bg-white">
                <Image
                  src="/images/voice-agent-4.png"
                  alt="CRM & Business Integration"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 50/50 Row - Cards 5 & 6 with Horizontal Internal Layout */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* CARD 5: Analytics & Call Insights */}
          <div className="flex flex-col justify-center rounded-[2.5rem] border border-neutral-100 shadow-xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5">
            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-2xl font-bold tracking-tight text-neutral-900">
                  Analytics & Call Insights
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500">
                  Track call volumes, customer sentiment, conversation quality,
                  response times, and performance through real-time dashboards.
                </p>
              </div>
              <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-neutral-100 ">
                <Image
                  src="/images/voice-agent-6.png"
                  alt="Analytics & Call Insights"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>

          {/* CARD 6: Secure Enterprise Deployment */}
          <div className="flex flex-col justify-center rounded-[2.5rem] border border-neutral-100 shadow-xl  p-8 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5">
            <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-3 text-2xl font-bold tracking-tight text-neutral-900">
                  Secure Enterprise Deployment
                </h3>
                <p className="text-sm leading-relaxed text-neutral-500">
                  Deploy AI Voice Agents with enterprise-grade security,
                  scalable infrastructure, compliance, monitoring, and
                  continuous optimization.
                </p>
              </div>
              <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-neutral-100 ">
                <Image
                  src="/images/voice-agent-3.png"
                  alt="Secure Enterprise Deployment"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
