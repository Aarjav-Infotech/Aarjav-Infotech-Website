"use client";

import Image from "next/image";
import { Linkedin, Github } from "lucide-react";

// Custom X (Twitter) Icon Component
function XIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  image: string;
  socials: {
    x?: string;
    linkedin?: string;
    github?: string;
  };
}

interface AboutTeamSectionProps {
  eyebrow?: string;
}

const FEATURED_LEAD: TeamMember = {
  name: "Arjav Virani",
  role: "CEO & Founder",
  image: "/images/teams-image.svg",
  socials: {
    x: "https://x.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
};

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Noah Reed",
    role: "ML/Agent Lead",
    bio: "Builds domain agents",
    image: "/images/teams-image.svg",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Jordan Brooks",
    role: "Data Engineer",
    bio: "Secure access policies",
    image: "/images/teams-image.svg",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Lucas Hayes",
    role: "Solutions Architect",
    bio: "Connects AI to your stack",
    image: "/images/teams-image.svg",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    name: "Erin Park",
    role: "MLOps Engineer",
    bio: "Productionizes with CI/CD",
    image: "/images/teams-image.svg",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
  },
];

export function AboutTeamSection({
  eyebrow = "Team Members",
}: AboutTeamSectionProps) {
  return (
    <section className="w-full py-12 sm:py-6 lg:py-12">
      {/* Full Width Container */}
      <div className="relative w-full overflow-hidden px-4 py-12 sm:px-8 sm:py-20 md:px-12 lg:px-16 xl:px-24">
        {/* Background Image Layer set to object-cover */}
        <Image
          src="/images/team-backrground.svg"
          alt="Team section background"
          fill
          priority
          className="pointer-events-none -z-10 object-cover object-center sm:object-fill"
        />

        {/* Foreground Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1400px]">
          {/* Header Badge & Title */}
          <div className="flex flex-col items-center px-2 text-center">
            <div className="inline-flex items-center gap-2 rounded bg-black/90 px-3.5 py-1 text-xs font-semibold text-white shadow-md sm:px-4 sm:py-1.5 sm:text-sm">
              <span className="size-2 rounded-full bg-white" />
              {eyebrow}
            </div>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white sm:mt-6 sm:text-4xl lg:text-5xl">
              The Squad Shipping Your AI
            </h2>
          </div>

          {/* Cards Layout */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-6 sm:px-30 lg:grid-cols-12 lg:items-stretch">
            {/* Left Side: Featured Founder Card */}
            <div className="flex flex-col lg:col-span-4">
              <div className="flex h-full flex-col justify-between rounded-[24px] bg-white p-5 shadow-2xl sm:rounded-[28px] sm:p-7 lg:rounded-[32px] lg:p-8">
                <div>
                  <div className="relative mx-auto aspect-square w-full max-w-[240px] overflow-hidden rounded-[18px] sm:max-w-none sm:rounded-[22px] lg:rounded-[24px]">
                    <Image
                      src={FEATURED_LEAD.image}
                      alt={FEATURED_LEAD.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="mt-4 text-center sm:mt-6">
                    <h3 className="text-xl font-bold text-slate-950 sm:text-2xl">
                      {FEATURED_LEAD.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-slate-500 sm:text-sm">
                      {FEATURED_LEAD.role}
                    </p>
                  </div>
                </div>

                {/* Founder Social Buttons */}
                <div className="mt-5 flex items-center justify-center gap-3 sm:mt-8">
                  {FEATURED_LEAD.socials.x && (
                    <a
                      href={FEATURED_LEAD.socials.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-10 items-center justify-center rounded-full bg-[#0038d0] text-white shadow-[0_8px_16px_rgba(0,56,208,0.4)] transition hover:scale-105 sm:size-11"
                    >
                      <XIcon className="size-4" />
                    </a>
                  )}
                  {FEATURED_LEAD.socials.linkedin && (
                    <a
                      href={FEATURED_LEAD.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-10 items-center justify-center rounded-full bg-[#0038d0] text-white shadow-[0_8px_16px_rgba(0,56,208,0.4)] transition hover:scale-105 sm:size-11"
                    >
                      <Linkedin className="size-4 sm:size-5" />
                    </a>
                  )}
                  {FEATURED_LEAD.socials.github && (
                    <a
                      href={FEATURED_LEAD.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-10 items-center justify-center rounded-full bg-[#0038d0] text-white shadow-[0_8px_16px_rgba(0,56,208,0.4)] transition hover:scale-105 sm:size-11"
                    >
                      <Github className="size-4 sm:size-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Right Side: Squad Members Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:col-span-8">
              {TEAM_MEMBERS.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between rounded-[24px] bg-white p-5 shadow-2xl sm:rounded-[28px] sm:p-7 lg:rounded-[32px]"
                >
                  <div className="flex items-center justify-between gap-3 sm:items-start sm:gap-4">
                    {/* Avatar */}
                    <div className="relative size-16 shrink-0 overflow-hidden rounded-[16px] sm:size-20 sm:rounded-[20px] lg:size-24 lg:rounded-[22px]">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Member Social Buttons */}
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      {member.socials.github && (
                        <a
                          href={member.socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex size-9 items-center justify-center rounded-full bg-[#0038d0] text-white shadow-[0_6px_14px_rgba(0,56,208,0.35)] transition hover:scale-105 sm:size-10 lg:size-11"
                        >
                          <Github className="size-4 lg:size-5" />
                        </a>
                      )}
                      {member.socials.linkedin && (
                        <a
                          href={member.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex size-9 items-center justify-center rounded-full bg-[#0038d0] text-white shadow-[0_6px_14px_rgba(0,56,208,0.35)] transition hover:scale-105 sm:size-10 lg:size-11"
                        >
                          <Linkedin className="size-4 lg:size-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="mt-3 sm:mt-6">
                    <h4 className="text-base font-bold text-slate-950 sm:text-xl">
                      {member.name}
                    </h4>
                    <p className="mt-0.5 text-xs font-medium text-slate-700 sm:mt-1 sm:text-sm">
                      {member.role}. {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutTeamSection;
