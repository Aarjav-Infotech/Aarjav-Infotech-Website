"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface ResultCard {
  id: string;
  tags: string[];
  title: string;
  logo: React.ReactNode;
  logoName: string;
  statNumber: string;
  statLabelLine1: string;
  statLabelLine2: string;
  statDesc: string;
  problem: string;
  approach: string;
  outcome: string;
  bgColor: string;
}

const results: ResultCard[] = [
  {
    id: "01",
    tags: ["CASE STUDY", "FINTECH"],
    title: "Revenue Operations Automation",
    logo: (
      <Image
        src="/svg/sec_7_1.svg"
        alt="RouteOne Logo"
        width={44}
        height={40}
        className="h-[24px] w-auto"
      />
    ),
    logoName: "RouteOne",
    statNumber: "52%",
    statLabelLine1: "lead",
    statLabelLine2: "conversion",
    statDesc: "Automated scoring and handoff.",
    problem:
      "Sales team handled unqualified leads and manually transferred data between marketing and CRM systems.",
    approach:
      "Built automated lead scoring, enrichment workflows, and ownership assignment logic.",
    outcome:
      "Cleaner pipeline visibility, improved handoffs, and measurable lift in qualified conversions.",
    bgColor: "bg-[#e5d4ff]", // pastel purple
  },
  {
    id: "02",
    tags: ["CASE STUDY", "FINTECH"],
    title: "Customer Support AI Agent",
    logo: (
      <div className="relative h-[43px] w-[30px] origin-right scale-[0.65]">
        <Image
          src="/svg/sec_7_2_2.svg"
          alt="Finstack Logo Part 2"
          width={21}
          height={35}
          className="absolute top-0 left-0"
        />
        <Image
          src="/svg/sec_7_2_1.svg"
          alt="Finstack Logo Part 1"
          width={21}
          height={35}
          className="absolute top-[7.8px] left-[8.67px]"
        />
      </div>
    ),
    logoName: "Finstack Group",
    statNumber: "52%",
    statLabelLine1: "faster",
    statLabelLine2: "resolution",
    statDesc: "AI triage and auto-response routing.",
    problem:
      "Support agents manually triaged incoming tickets and repeated answers to common questions.",
    approach:
      "Deployed AI ticket classification, knowledge base integration, and smart routing to the right agent.",
    outcome:
      "Response times improved significantly, and agents focused on complex, high-value cases.",
    bgColor: "bg-[#b3dff6]", // pastel blue
  },
  {
    id: "03",
    tags: ["CASE STUDY", "FINTECH"],
    title: "Automating Loan Processing",
    logo: (
      <Image
        src="/svg/sec_7_3.svg"
        alt="RouteOne Logo"
        width={36}
        height={45}
        className="h-[30px] w-auto"
      />
    ),
    logoName: "RouteOne",
    statNumber: "38%",
    statLabelLine1: "faster",
    statLabelLine2: "resolution",
    statDesc: "Automated document intake and routing.",
    problem:
      "Loan officers were spending 3+ hours daily on manual document validation, CRM updates, and status follow-ups.",
    approach:
      "Implemented AI-based document extraction, automated eligibility checks, and CRM workflow orchestration.",
    outcome:
      "Application processing time reduced, fewer manual errors, and faster decision turnaround.",
    bgColor: "bg-[#86e296]", // pastel green
  },
];

export function HomeProvenResults() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <section className="w-full pt-16 md:pt-[80px]">
      {/* 1. Heading (Normal Flow) - Will naturally scroll away */}
      <div className="mb-12 w-full px-4 md:mb-16 md:px-[80px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="mb-4 text-[32px] leading-[1.2] font-medium tracking-tight text-black md:text-[46px] md:leading-[46px]">
            Proven results
          </h2>
          <p className="text-[16px] leading-[22.4px] font-normal text-black">
            Real results from real engagements. We measure success by outcomes,
            not activity.
          </p>
        </motion.div>
      </div>

      {/* 2. Spacer Container for Scroll Animation */}
      <div ref={containerRef} className="relative h-[400vh] w-full">
        {/* 3. Sticky Card Container - Only cards are sticky, preventing clipping */}
        <div className="sticky top-[20px] w-full pb-20 md:top-[80px]">
          <div className="w-full px-4 md:px-[80px]">
            <div className="relative grid w-full items-start">
              {results.map((card, index) => (
                <StackedCard
                  key={card.id}
                  card={card}
                  index={index}
                  totalCards={results.length}
                  progress={smoothProgress}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Footer Button Area - Revealed after scroll completes */}
      <div className="flex w-full justify-center px-4 pt-[40px] pb-[80px] md:justify-start md:px-[80px]">
        <button className="flex items-center justify-center gap-2 rounded-[100px] border border-transparent bg-black px-8 py-4 text-[14px] font-semibold text-white transition-all duration-300 hover:border-transparent hover:bg-[linear-gradient(90deg,#091E46_1%,#075FF3_100%)]">
          View all case studies <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}

function StackedCard({
  card,
  index,
  totalCards,
  progress,
}: {
  card: ResultCard;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
}) {
  const segmentLength = 1 / (totalCards - 1);

  const inputRanges = [0];
  const scaleOutputs = [1];
  const yOutputs = [index === 0 ? 0 : 2000];
  const opacityOutputs = [1];

  const activeShadow = "0px 30px 60px rgba(0, 0, 0, 0.15)";
  const inactiveShadow = "0px 10px 20px rgba(0, 0, 0, 0.05)";
  const hiddenShadow = "0px 0px 0px rgba(0, 0, 0, 0)";
  const shadowOutputs = [index === 0 ? activeShadow : hiddenShadow];

  for (let i = 1; i < totalCards; i++) {
    const segmentStart = (i - 1) * segmentLength;
    const segmentEnd = i * segmentLength;
    const overlapStart = segmentStart + 0.5 * segmentLength; // Wait 50% of the segment before scaling down

    if (i < index) {
      inputRanges.push(segmentEnd);
      scaleOutputs.push(1);
      yOutputs.push(2000);
      opacityOutputs.push(1);
      shadowOutputs.push(hiddenShadow);
    } else if (i === index) {
      inputRanges.push(segmentEnd);
      scaleOutputs.push(1);
      yOutputs.push(0);
      opacityOutputs.push(1);
      shadowOutputs.push(activeShadow);
    } else {
      const pushCount = i - index;

      // Point 1: Wait until overlapStart (allows user to read active card while next card slides up from distance)
      inputRanges.push(overlapStart);
      scaleOutputs.push(1 - (pushCount - 1) * 0.04);
      yOutputs.push(-(pushCount - 1) * 30);
      opacityOutputs.push(1 - (pushCount - 1) * 0.1);
      shadowOutputs.push(pushCount === 1 ? activeShadow : inactiveShadow);

      // Point 2: Animate to pushed state by segmentEnd
      inputRanges.push(segmentEnd);
      scaleOutputs.push(1 - pushCount * 0.04);
      yOutputs.push(-pushCount * 30);
      opacityOutputs.push(1 - pushCount * 0.1);
      shadowOutputs.push(inactiveShadow);
    }
  }

  const lastInput = inputRanges[inputRanges.length - 1] as number;
  if (lastInput < 1) {
    inputRanges.push(1);
    scaleOutputs.push(scaleOutputs[scaleOutputs.length - 1] as number);
    yOutputs.push(yOutputs[yOutputs.length - 1] as number);
    opacityOutputs.push(opacityOutputs[opacityOutputs.length - 1] as number);
    shadowOutputs.push(shadowOutputs[shadowOutputs.length - 1] as string);
  }

  const scale = useTransform(progress, inputRanges, scaleOutputs);
  const y = useTransform(progress, inputRanges, yOutputs);
  const opacity = useTransform(progress, inputRanges, opacityOutputs);
  const boxShadow = useTransform(progress, inputRanges, shadowOutputs);

  return (
    <motion.div
      style={{
        scale,
        y,
        opacity,
        boxShadow,
        zIndex: index, // Newest card gets highest z-index
        transformOrigin: "top center",
      }}
      className={cn(
        "col-start-1 row-start-1 w-full max-w-[960px] rounded-[20px] p-8 text-black md:p-10",
        index === 0 && "md:mr-auto",
        index === 1 && "md:mx-auto",
        index === 2 && "md:ml-auto",
        card.bgColor,
      )}
    >
      {/* Row 1: ID, Title, Logo */}
      <div className="mb-8 flex flex-col md:mb-[50px]">
        <div className="relative flex h-[28px] w-full items-center justify-between">
          <span className="text-left text-lg font-semibold md:w-[312px]">
            {card.id}
          </span>
          <div className="absolute left-1/2 hidden -translate-x-1/2 text-center text-lg font-semibold whitespace-nowrap md:block md:text-xl">
            {card.title}
          </div>
          <div className="mx-4 flex-1 text-center text-lg font-semibold md:hidden">
            {card.title}
          </div>
          <div className="flex items-center justify-end gap-2 text-lg font-bold md:w-[190px]">
            {card.logo}
            {card.logoName}
          </div>
        </div>

        {/* Row 2: Tags */}
        <div className="mt-[32px] flex gap-[10px]">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-[20px] bg-white/40 px-[15px] py-[6px] text-[12px] leading-[15.6px] font-bold tracking-[0.02em] uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-[20px] md:flex-row">
        <div className="flex shrink-0 flex-col justify-end rounded-[20px] border border-black/10 bg-white/20 p-[31px] md:h-[350px] md:w-[285.33px]">
          <div className="mb-[5.41px] h-[105.41px]">
            <Image
              src="/svg/arrow.svg"
              alt="Arrow"
              width={100}
              height={100}
              className="h-auto w-auto"
            />
          </div>
          <div className="mb-2 flex items-center gap-[5px]">
            <h3 className="text-[46px] leading-[46px] font-medium tracking-tighter">
              {card.statNumber}
            </h3>
            <div className="flex flex-col text-[20px] leading-[20px] font-medium">
              <span>{card.statLabelLine1}</span>
              <span>{card.statLabelLine2}</span>
            </div>
          </div>
          <p className="h-[20px] text-[14px] leading-[19.6px] font-normal opacity-80">
            {card.statDesc}
          </p>
        </div>

        <div className="flex min-w-[280px] flex-1 flex-col justify-start gap-[30px] py-2">
          <div className="border-l-[4px] border-black/10 pl-[15px]">
            <h4
              className="mb-[5px] text-[12px] leading-[15.6px] font-normal tracking-[1px] text-black/50 uppercase"
              style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
            >
              Problem
            </h4>
            <p className="text-[16px] leading-[22.4px] font-normal opacity-90">
              {card.problem}
            </p>
          </div>
          <div className="border-l-[4px] border-black/10 pl-[15px]">
            <h4
              className="mb-[5px] text-[12px] leading-[15.6px] font-normal tracking-[1px] text-black/50 uppercase"
              style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
            >
              Approach
            </h4>
            <p className="text-[16px] leading-[22.4px] font-normal opacity-90">
              {card.approach}
            </p>
          </div>
          <div className="border-l-[4px] border-black/10 pl-[15px]">
            <h4
              className="mb-[5px] text-[12px] leading-[15.6px] font-normal tracking-[1px] text-black/50 uppercase"
              style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
            >
              Outcome
            </h4>
            <p className="text-[16px] leading-[22.4px] font-normal opacity-90">
              {card.outcome}
            </p>
          </div>
        </div>

        <div className="mt-4 flex w-full shrink-0 flex-col items-start justify-end pb-2 md:mt-0 md:w-[188.54px] md:items-end">
          <button className="flex h-[52px] w-[188.54px] items-center justify-center gap-2 rounded-[100px] bg-white text-[14px] font-semibold whitespace-nowrap text-black transition-colors duration-300 hover:bg-black hover:text-white">
            Read full case <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
