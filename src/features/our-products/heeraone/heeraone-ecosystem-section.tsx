import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  TrendingUp,
  Zap,
  Box,
  MoveRight,
} from "lucide-react";

interface ConnectedEcosystemSectionProps {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  subtitle?: string;
  bannerTitle?: string;
  bannerSubtitle?: string;
  bannerButtonText?: string;
  bannerButtonLink?: string;
  serverImage?: string;
}

const keyFeatures = [
  {
    image: "/images/ecosystem-1.svg",
    title: "Centralized Data",
    description:
      "Bring all your business data into one secure source of truth.",
  },
  {
    image: "/images/ecosystem-2.svg",
    title: "Connected Operations",
    description:
      "Link purchase, stock, manufacturing, inventory, and sales in one continuous flow.",
  },
  {
    image: "/images/ecosystem-3.svg",
    title: "AI-Powered Intelligence",
    description:
      "Use connected data and AI insights to make smarter decisions, faster.",
  },
];

const _miniBadges = [
  {
    icon: ShieldCheck,
    title: "Unified",
    subtitle: "Operations",
  },
  {
    icon: Lock,
    title: "Secure",
    subtitle: "& Reliable",
  },
  {
    icon: TrendingUp,
    title: "Scalable",
    subtitle: "Growth",
  },
  {
    icon: Zap,
    title: "Real-time",
    subtitle: "Insights",
  },
];

export default function ConnectedEcosystemSection({
  eyebrow = "Connected Ecosystem",
  titleLine1 = "Everything Connected.",
  titleLine2 = "One Intelligent Platform.",
  subtitle = "Connect your diamond business operations, data, ERP systems, inventory, manufacturing, and AI into one unified business ecosystem.",
  bannerTitle = "One connected foundation for every diamond operation.",
  bannerSubtitle = "Simplify complexity. Connect everything. Grow without limits.",
  bannerButtonText = "Explore Platform",
  bannerButtonLink = "/platform",
  serverImage = "/images/ecosystem.svg",
}: ConnectedEcosystemSectionProps) {
  return (
    <section className="relative w-full px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Main Card Container */}
        <div className="relative overflow-hidden rounded-[36px] bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.04)] ring-1 ring-slate-100 sm:p-10 lg:p-14">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Left Column: Eyebrow, Heading, Paragraph & 3 Feature Points */}
            <div className="flex flex-col items-start lg:col-span-6">
              {/* Eyebrow */}
              {eyebrow && (
                <div className="mb-6 inline-flex items-center gap-1.5 rounded border-b-4 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-base font-semibold text-[#2b2bad] shadow-sm sm:text-[14px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2b2bad]" />
                  {eyebrow}
                </div>
              )}

              {/* Headings */}
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[44px] lg:leading-[1.15]">
                <span>{titleLine1}</span>
                <br />
                <span>{titleLine2}</span>
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
                {subtitle}
              </p>

              {/* 3 Feature Items with Images */}
              <div className="mt-8 space-y-6">
                {keyFeatures.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={25}
                        height={25}
                        className="h-10 w-10 object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-slate-500 sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Isometric Graphic Stage */}
            <div className="flex flex-col items-center justify-center lg:col-span-6">
              <div className="relative flex w-full items-center justify-center p-2 sm:p-4">
                <Image
                  src={serverImage}
                  alt="Connected Platform Ecosystem"
                  width={756}
                  height={545}
                  className="h-auto max-h-[500px] w-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Call-to-Action Floating Banner */}
        <div className="mt-6 flex flex-col items-center justify-between gap-6 rounded-[28px] bg-white px-6 py-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] ring-1 ring-slate-100 sm:flex-row sm:px-8 sm:py-6">
          {/* Left Title & Description with Cube Icon */}
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] text-white shadow-[0_4px_0_#001a5e,0_10px_20px_rgba(0,38,136,0.35)]">
              <Box className="h-6 w-6 stroke-[2]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 sm:text-lg">
                {bannerTitle}
              </h4>
              <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
                {bannerSubtitle}
              </p>
            </div>
          </div>

          {/* Right Action Button */}
          <Link
            href={bannerButtonLink}
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_0_#001a5e,0_10px_20px_rgba(0,38,136,0.35)] transition-all duration-150 hover:brightness-105 active:translate-y-[2px] active:shadow-[0_2px_0_#001a5e,0_4px_8px_rgba(0,38,136,0.25)]"
          >
            <span>{bannerButtonText}</span>
            <MoveRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
