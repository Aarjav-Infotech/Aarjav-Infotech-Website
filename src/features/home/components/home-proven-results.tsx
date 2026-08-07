"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

interface StatItem {
  value: string;
  label: string;
}

const stats: StatItem[] = [
  {
    value: "87%",
    label: "AGENT PROJECTS REACH PRODUCTION",
  },
  {
    value: "1,100+",
    label: "AGENTS LIVE IN PRODUCTION",
  },
  {
    value: "500+",
    label: "ENTERPRISES BUILDING ON AARJAV INFOTECH",
  },
  {
    value: "4 Weeks",
    label: "AVG TIME FROM BUILD TO PRODUCTION",
  },
  {
    value: "99.9%",
    label: "UPTIME ACROSS DEPLOYMENTS",
  },
];

// Helper to extract prefix, target number, suffix, and decimal precision
function parseStatValue(val: string) {
  const match = val.match(/^([^\d]*)([\d,.]+)(.*)$/);
  if (!match)
    return {
      prefix: "",
      target: 0,
      suffix: val,
      decimals: 0,
      hasCommas: false,
    };

  const prefix = match[1];
  const numStr = match[2] ?? "";
  const suffix = match[3];

  const hasCommas = numStr.includes(",");
  const cleanNumStr = numStr.replace(/,/g, "");
  const target = parseFloat(cleanNumStr) || 0;

  const decimalPart = cleanNumStr.split(".")[1];
  const decimals = decimalPart ? decimalPart.length : 0;

  return { prefix, target, suffix, decimals, hasCommas };
}

function StatCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const { prefix, target, suffix, decimals, hasCommas } =
      parseStatValue(value);

    const controls = animate(0, target, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for smooth deceleration
      onUpdate(latest) {
        let formattedNum = latest.toFixed(decimals);

        if (hasCommas) {
          const parts = formattedNum.split(".");
          parts[0] = parts[0]?.replace(/\B(?=(\d{3})+(?!\d))/g, ",") ?? "";
          formattedNum = parts.join(".");
        }

        setDisplayValue(`${prefix}${formattedNum}${suffix}`);
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
}

export function HomeProvenResults() {
  return (
    <section className="w-full py-12">
      <div className="mx-auto max-w-full border-y border-gray-200 bg-white px-4 py-1 md:px-1">
        <div className="grid grid-cols-1 divide-y divide-gray-200 px-[70px] sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-y-0">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-4 text-center"
            >
              <span
                className="text-[32px] leading-tight font-bold tracking-tight text-black md:text-[36px]"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                <StatCounter value={stat.value} />
              </span>
              <span
                className="mt-2 max-w-[160px] text-[11px] leading-relaxed font-semibold tracking-[0.05em] text-gray-500 uppercase"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
