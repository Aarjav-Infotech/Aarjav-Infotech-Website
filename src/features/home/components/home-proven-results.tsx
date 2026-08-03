"use client";

import { motion } from "framer-motion";

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
    label: "ENTERPRISES BUILDING ON ARJAV INFOTECH",
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

export function HomeProvenResults() {
  return (
    <section className="w-full py-20 ">
      <div className="mx-auto bg-white border-y border-gray-200 py-1 max-w-[1440px] px-4 md:px-1">
        <div className="grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-y-0">
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
                className="text-[32px] font-bold leading-tight tracking-tight text-black md:text-[36px]"
                style={{ fontFamily: "'Urbanist', sans-serif" }}
              >
                {stat.value}
              </span>
              <span 
                className="mt-2 text-[11px] font-semibold leading-relaxed tracking-[0.05em] text-gray-500 uppercase max-w-[180px]"
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