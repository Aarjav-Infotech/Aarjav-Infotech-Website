import React from "react";
import Image from "next/image";
import { asset } from "@/lib/cdn";

interface MovementProcessSectionProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

const tableRows = [
  {
    id: "#DIA-1042",
    type: "Rough",
    carat: "12.50",
    movement: "Purchase → Assortment",
    status: "In Progress",
    statusClass: "bg-[#d5ede7] text-[#145a50]",
  },
  {
    id: "#DIA-0891",
    type: "Polished",
    carat: "1.05",
    movement: "Manufacturing → Stock",
    status: "Completed",
    statusClass: "bg-[#ebe4dc] text-[#5c4a3b]",
  },
  {
    id: "#DIA-0922",
    type: "Polished",
    carat: "3.20",
    movement: "Stock → Sales",
    status: "Pending",
    statusClass: "bg-[#fae2db] text-[#8c351f]",
  },
];

export default function MovementProcessSection({
  eyebrow = "The process we follow",
  title = "From Purchase to Sale Every Movement, Tracked",
  subtitle = "Track every stone from rough to retail.",
}: MovementProcessSectionProps) {
  return (
    <section className="relative w-full overflow-hidden rounded-[40px] border-b-10 border-[#E3E3E3] bg-gradient-to-b from-[#ffffff] via-[#cae2fe] via-[#ebf4ff] via-[45%] via-[75%] to-[#a8ceff] px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative z-10 mx-auto max-w-full">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          {eyebrow && (
            <div className="mb-6 inline-flex items-center gap-1.5 rounded border-b-4 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-base font-semibold text-[#2b2bad] shadow-sm sm:text-[14px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2b2bad]" />
              {eyebrow}
            </div>
          )}

          <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-2 text-sm text-slate-500 sm:text-base">
              {subtitle}
            </p>
          )}
        </div>

        {/* Process Flow Cards (Step 1 to Step 6) */}
        <div className="relative mt-12 space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Top Row: Steps 01 -> 02 -> 03 (Facing Right) */}
          <div className="relative grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            {/* Step 01 */}
            <div className="flex items-center gap-3 rounded-3xl bg-[#f8f9fa] px-4 py-3 shadow-[0_4px_0_#d8dbe0,0_8px_16px_rgba(0,0,0,0.06)] ring-1 ring-white">
              <span className="flex size-[50px] shrink-0 items-center justify-center rounded-[16px] bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] text-xl font-bold text-white shadow-sm">
                01
              </span>
              <span className="text-sm font-semibold text-slate-900">
                Purchase
              </span>
            </div>

            {/* Arrow between 01 and 02 */}
            <div className="absolute top-1/2 left-[31.5%] z-10 hidden -translate-y-1/2 items-center justify-center md:flex">
              <Image
                src={asset("/images/the-arrow.svg")}
                alt="arrow"
                width={30}
                height={20}
                className="opacity-70"
              />
            </div>

            {/* Step 02 */}
            <div className="flex items-center gap-3 rounded-3xl bg-[#f8f9fa] px-4 py-3 shadow-[0_4px_0_#d8dbe0,0_8px_16px_rgba(0,0,0,0.06)] ring-1 ring-white">
              <span className="flex size-[50px] shrink-0 items-center justify-center rounded-[16px] bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] text-xl font-bold text-white shadow-sm">
                02
              </span>
              <span className="text-sm font-semibold text-slate-900">
                Assortment
              </span>
            </div>

            {/* Arrow between 02 and 03 */}
            <div className="absolute top-1/2 left-[65.5%] z-10 hidden -translate-y-1/2 items-center justify-center md:flex">
              <Image
                src={asset("/images/the-arrow.svg")}
                alt="arrow"
                width={30}
                height={20}
                className="opacity-70"
              />
            </div>

            {/* Step 03 */}
            <div className="flex items-center gap-3 rounded-3xl bg-[#f8f9fa] px-4 py-3 shadow-[0_4px_0_#d8dbe0,0_8px_16px_rgba(0,0,0,0.06)] ring-1 ring-white">
              <span className="flex size-[50px] shrink-0 items-center justify-center rounded-[16px] bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] text-xl font-bold text-white shadow-sm">
                03
              </span>
              <span className="text-sm font-semibold text-slate-900">
                Manufacturing
              </span>
            </div>
          </div>

          {/* Vertical Turn Arrow: Step 03 Down to Step 04 (Rotated 90deg Downwards) */}
          <div className="absolute top-[85px] right-[13.5%] z-10 hidden items-center justify-center md:flex">
            <Image
              src={asset("/images/the-arrow.svg")}
              alt="arrow down"
              width={30}
              height={20}
              className="rotate-90 opacity-70"
            />
          </div>

          {/* Bottom Row: Steps 06 <- 05 <- 04 (Reverse Flow, Arrows Rotated 180deg Facing Left) */}
          <div className="relative grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            {/* Step 06 (Finance) */}
            <div className="flex items-center gap-3 rounded-3xl bg-[#f8f9fa] px-4 py-3 shadow-[0_4px_0_#d8dbe0,0_8px_16px_rgba(0,0,0,0.06)] ring-1 ring-white">
              <span className="flex size-[50px] shrink-0 items-center justify-center rounded-[16px] bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] text-xl font-bold text-white shadow-sm">
                06
              </span>
              <span className="text-sm font-semibold text-slate-900">
                Finance
              </span>
            </div>

            {/* Horizontal Left Arrow between 05 and 06 */}
            <div className="absolute top-1/2 left-[31.5%] z-10 hidden -translate-y-1/2 items-center justify-center md:flex">
              <Image
                src={asset("/images/the-arrow.svg")}
                alt="arrow left"
                width={30}
                height={20}
                className="rotate-180 opacity-70"
              />
            </div>

            {/* Step 05 (Sales) */}
            <div className="flex items-center gap-3 rounded-3xl bg-[#f8f9fa] px-4 py-3 shadow-[0_4px_0_#d8dbe0,0_8px_16px_rgba(0,0,0,0.06)] ring-1 ring-white">
              <span className="flex size-[50px] shrink-0 items-center justify-center rounded-[16px] bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] text-xl font-bold text-white shadow-sm">
                05
              </span>
              <span className="text-sm font-semibold text-slate-900">
                Sales
              </span>
            </div>

            {/* Horizontal Left Arrow between 04 and 05 */}
            <div className="absolute top-1/2 left-[65.5%] z-10 hidden -translate-y-1/2 items-center justify-center md:flex">
              <Image
                src={asset("/images/the-arrow.svg")}
                alt="arrow left"
                width={30}
                height={20}
                className="rotate-180 opacity-70"
              />
            </div>

            {/* Step 04 (Stock) */}
            <div className="flex items-center gap-3 rounded-3xl bg-[#f8f9fa] px-4 py-3 shadow-[0_4px_0_#d8dbe0,0_8px_16px_rgba(0,0,0,0.06)] ring-1 ring-white">
              <span className="flex size-[50px] shrink-0 items-center justify-center rounded-[16px] bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] text-xl font-bold text-white shadow-sm">
                04
              </span>
              <span className="text-sm font-semibold text-slate-900">
                Stock
              </span>
            </div>
          </div>
        </div>

        {/* Connected Flow Table Card - Figma Matched */}
        <div className="mt-10 w-full overflow-hidden rounded-[26px] bg-[#E3E3E3] shadow-[0_12px_36px_rgba(0,0,0,0.06)]">
          {/* Top Header Bar - #E3E3E3 with 1px border #E0E3E5 at 50% opacity */}
          <div className="w-full border-b border-[#E0E3E5]/50 py-4 text-center">
            <h4 className="text-base font-bold text-[#1a1a1a]">
              One Connected Flow
            </h4>
          </div>

          {/* Table Area */}
          <div className="w-full [scrollbar-width:none] overflow-x-auto bg-white [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <table className="w-full min-w-[620px] text-left text-[14px]">
              {/* Header Row - #F4F4F5 with 1px border #E0E3E5 at 50% opacity */}
              <thead>
                <tr className="border-b border-[#E0E3E5]/50 bg-[#F4F4F5] text-[#333333]">
                  <th className="py-4 pr-4 pl-8 font-bold sm:pl-18">
                    Diamond ID
                  </th>
                  <th className="px-4 py-4 font-bold sm:pl-18">Type</th>
                  <th className="px-4 py-4 font-bold sm:pl-18">Carat</th>
                  <th className="px-4 py-4 font-bold sm:pl-18">Movement</th>
                  <th className="py-4 pr-8 pl-4 font-bold sm:pr-10">Status</th>
                </tr>
              </thead>
              {/* Data Rows - pure white with 1px bottom border #E0E3E5 at 50% opacity */}
              <tbody className="divide-y divide-[#E0E3E5]/50 bg-white text-[#222222]">
                {tableRows.map((row) => (
                  <tr
                    key={row.id}
                    className="transition-colors hover:bg-slate-50/50"
                  >
                    <td className="py-4 pr-4 pl-8 font-bold text-[#1f1f1f] sm:pl-18">
                      {row.id}
                    </td>
                    <td className="px-4 py-4 font-normal text-[#2b2b2b] sm:pl-18">
                      {row.type}
                    </td>
                    <td className="px-4 py-4 font-normal text-[#2b2b2b] sm:pl-18">
                      {row.carat}
                    </td>
                    <td className="px-4 py-4 font-normal text-[#2b2b2b] sm:pl-18">
                      {row.movement}
                    </td>
                    <td className="py-4 pr-8 pl-4 sm:pr-10">
                      <span
                        className={`inline-flex items-center rounded-full px-3.5 py-1 text-[12px] font-semibold ${row.statusClass}`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
