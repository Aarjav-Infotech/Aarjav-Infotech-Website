"use client";

import Image from "next/image";

/* ---------------------------------------------
   Icon images (Mapped 1 to 12)
   Place these files in /public/icons/ in your project.
--------------------------------------------- */
const ICONS = {
  icon1: "/icons/icon-1.svg", // Left 1
  icon2: "/icons/icon-2.svg", // Left 2
  icon3: "/icons/icon-3.svg", // Left 3
  icon4: "/icons/icon-4.svg", // Left 4
  icon5: "/icons/icon-5.svg", // Left 5
  icon6: "/icons/icon-6.svg", // Left 6
  icon7: "/icons/icon-7.svg", // Right 1
  icon8: "/icons/icon-8.svg", // Right 2
  icon9: "/icons/icon-9.svg", // Right 3
  icon10: "/icons/icon-10.svg", // Right 4
  icon11: "/icons/icon-11.svg", // Right 5
  icon12: "/icons/icon-12.svg", // Right 6
};

function TechImage({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={70}
      height={70}
      className="relative z-10 h-full w-full object-contain"
    />
  );
}

/* ---------------------------------------------
   Data: 12 distinct scattered icon cards
--------------------------------------------- */
const techCards = [
  // Left Side Icons (1 to 6)
  {
    icon: <TechImage src={ICONS.icon1} alt="Icon 1" />,
    position: "top-[20%] left-[14%] md:left-[16%]",
    rotate: "-rotate-[12deg]",
    delay: "0s",
    hasBox: false,
  },
  {
    icon: <TechImage src={ICONS.icon2} alt="Icon 2" />,
    position: "top-[20%] left-[26%] md:left-[28%]",
    rotate: "rotate-[8deg]",
    delay: "0.8s",
    hasBox: false,
  },
  {
    icon: <TechImage src={ICONS.icon3} alt="Icon 3" />,
    position: "top-[40%] left-[6%] md:left-[8%]",
    rotate: "-rotate-[8deg]",
    delay: "1.2s",
    hasBox: false,
  },
  {
    icon: <TechImage src={ICONS.icon4} alt="Icon 4" />,
    position: "top-[40%] left-[18%] md:left-[20%]",
    rotate: "rotate-[10deg]",
    delay: "0.4s",
    hasBox: false,
  },
  {
    icon: <TechImage src={ICONS.icon5} alt="Icon 5" />,
    position: "top-[60%] left-[12%] md:left-[14%]",
    rotate: "rotate-[12deg]",
    delay: "1.6s",
    hasBox: true,
  },
  {
    icon: <TechImage src={ICONS.icon6} alt="Icon 6" />,
    position: "top-[60%] left-[23%] md:left-[25%]",
    rotate: "-rotate-[6deg]",
    delay: "0.2s",
    hasBox: true,
  },

  // Right Side Icons (7 to 12)
  {
    icon: <TechImage src={ICONS.icon7} alt="Icon 7" />,
    position: "top-[20%] right-[26%] md:right-[28%]",
    rotate: "-rotate-[10deg]",
    delay: "0.3s",
    hasBox: false,
  },
  {
    icon: <TechImage src={ICONS.icon8} alt="Icon 8" />,
    position: "top-[20%] right-[14%] md:right-[16%]",
    rotate: "rotate-[12deg]",
    delay: "1.1s",
    hasBox: false,
  },
  {
    icon: <TechImage src={ICONS.icon9} alt="Icon 9" />,
    position: "top-[40%] right-[20%] md:right-[20%]",
    rotate: "rotate-[6deg]",
    delay: "0.7s",
    hasBox: true,
  },
  {
    icon: <TechImage src={ICONS.icon10} alt="Icon 10" />,
    position: "top-[40%] right-[8%] md:right-[10%]",
    rotate: "-rotate-[12deg]",
    delay: "1.5s",
    hasBox: true,
  },
  {
    icon: <TechImage src={ICONS.icon11} alt="Icon 11" />,
    position: "top-[60%] right-[23%] md:right-[25%]",
    rotate: "-rotate-[8deg]",
    delay: "0.5s",
    hasBox: false,
  },
  {
    icon: <TechImage src={ICONS.icon12} alt="Icon 12" />,
    position: "top-[60%] right-[10%] md:right-[12%]",
    rotate: "rotate-[10deg]",
    delay: "1.3s",
    hasBox: false,
  },
];

function IconCard({
  icon,
  position,
  rotate,
  delay,
  hasBox,
}: {
  icon: React.ReactNode;
  position: string;
  rotate: string;
  delay: string;
  hasBox?: boolean;
}) {
  return (
    <div
      className={`absolute ${position} ${rotate} z-10 transition-all duration-300`}
    >
      <div
        className="animate-float pointer-events-auto relative flex h-[70px] w-[70px] cursor-pointer items-center justify-center overflow-hidden rounded-2xl !p-0 transition-transform hover:scale-105 sm:h-[80px] sm:w-[80px] md:h-[100px] md:w-[100px]"
        style={{ animationDelay: delay }}
      >
        {hasBox && (
          <div className="absolute inset-0 z-0 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.12)]" />
        )}

        <div className="flex h-full w-full items-center justify-center !p-0">
          {icon}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------
   Main Section Component
--------------------------------------------- */
interface HomeTechnologiesProps {
  eyebrow?: string;
}

export function HomeTechnologies({
  eyebrow = "Core Technology",
}: HomeTechnologiesProps) {
  return (
    <section className="relative isolate flex min-h-[680px] w-full items-center justify-center overflow-hidden bg-white px-6 py-24 sm:py-32 lg:py-40">
      {/* Top Blur Glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-72 w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />

      {/* Floating Icon Cards (Visible on sm screens and up) */}
      <div className="absolute inset-0 hidden sm:block">
        {techCards.map((card, i) => (
          <IconCard key={i} {...card} />
        ))}
      </div>

      {/* Main Hero / Center Content */}
      <div className="relative z-20 mx-auto flex max-w-xl flex-col items-center text-center">
        {eyebrow && (
          <div className="mb-10 inline-flex items-center gap-1.5 rounded border bg-[#F5F5F5] px-3.5 py-1 text-[14px] font-semibold text-[#2b2bad] shadow-xl/20">
            <span className="h-1.5 w-1.5 rounded bg-[#2b2bad]" />
            {eyebrow}
          </div>
        )}

        <h2 className="mb-6 text-3xl leading-[1.15] font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]">
          Services Built on <br />
          Leading Technologies.
        </h2>

        <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-500 sm:text-base">
          Combining AI innovation with modern development frameworks to create
          reliable, future-ready digital solutions.
        </p>

        <button className="mt-8 rounded-full bg-gradient-to-b from-blue-600 to-blue-700 px-8 py-3.5 text-sm font-medium text-white shadow-[0_10px_25px_-5px_rgba(37,99,235,0.4)] transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] sm:text-base">
          Get Started
        </button>
      </div>

      {/* Mobile Grid Layout for small mobile screens */}
      <div className="relative z-20 mx-auto mt-12 grid max-w-xs grid-cols-4 gap-3 sm:hidden">
        {[
          {
            icon: <TechImage key="m1" src={ICONS.icon1} alt="Icon 1" />,
            hasBox: false,
          },
          {
            icon: <TechImage key="m3" src={ICONS.icon3} alt="Icon 3" />,
            hasBox: false,
          },
          {
            icon: <TechImage key="m5" src={ICONS.icon5} alt="Icon 5" />,
            hasBox: true,
          },
          {
            icon: <TechImage key="m7" src={ICONS.icon7} alt="Icon 7" />,
            hasBox: false,
          },
          {
            icon: <TechImage key="m9" src={ICONS.icon9} alt="Icon 9" />,
            hasBox: true,
          },
          {
            icon: <TechImage key="m11" src={ICONS.icon11} alt="Icon 11" />,
            hasBox: false,
          },
        ].map((item, i) => (
          <div
            key={i}
            className="relative flex h-16 w-16 cursor-pointer items-center justify-center overflow-hidden rounded-xl !p-0"
          >
            {item.hasBox && (
              <div className="absolute inset-0 z-0 border border-slate-100 bg-white shadow-md" />
            )}
            <div className="relative z-10 flex h-full w-full items-center justify-center !p-0">
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Floating Keyframe Animation */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        .animate-float {
          animation: float 4.5s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-float {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
