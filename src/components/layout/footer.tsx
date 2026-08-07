"use client";

import Link from "next/link";
import Image from "next/image";

// Custom SVG components to match exact icon variants
function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.72a1.47 1.47 0 1 0 0 2.94 1.47 1.47 0 0 0 0-2.94Z" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 5.004 3.657 9.15 8.438 9.901v-7.005H7.898v-2.896h2.54V9.812c0-2.51 1.493-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.005C18.343 21.167 22 17.02 22 12.017 22 6.484 17.522 2 12 2Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-white px-3 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-full">
        {/* Main Dark Container */}
        <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-b from-[#020514] via-[#02103a] to-[#012284] px-5 pt-10 pb-6 sm:rounded-[32px] sm:px-8 sm:pt-12 md:px-12 md:pt-14 lg:px-14">
          {/* Top Inset Notch */}
          <div className="pointer-events-none absolute -top-1 left-1/2 flex -translate-x-1/2 justify-center">
            <div className="h-5 w-[200px] rounded-b-[16px] bg-slate-200/90 shadow-inner sm:h-7 sm:w-[320px] sm:rounded-b-[20px] md:w-[420px]" />
          </div>

          {/* Main Grid Content */}
          <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8">
            {/* Left Column: Brand & Tagline */}
            <div className="lg:col-span-5">
              {/* Logo Image */}
              <div className="flex items-center gap-2.5 pb-2">
                <Link
                  href="/"
                  className="relative block aspect-[4/1] h-9 w-[270px]"
                >
                  <Image
                    src="/images/logo-white.svg"
                    alt="Aarjav Infotech Logo"
                    width={260}
                    height={70}
                    className="object-contain"
                    priority
                  />
                </Link>
              </div>

              {/* Title & Description */}
              <h3 className="mt-5 text-xl leading-snug font-bold tracking-tight text-white sm:mt-7 sm:text-2xl lg:text-3xl">
                Automations that ship & keep <br className="hidden sm:inline" />
                running.
              </h3>
              <p className="text-basic sm:text-basic mt-3 max-w-sm leading-relaxed font-normal text-slate-300 sm:mt-3.5">
                We design and deploy AI + workflow automations that help teams
                work smarter, not harder.
              </p>
            </div>

            {/* Right Column: Navigation Columns */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 lg:col-span-7 lg:pl-6">
              {/* Services */}
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-semibold text-slate-300 sm:text-lg">
                  Services
                </h4>
                <ul className="text-basic mt-1 space-y-2 text-slate-200">
                  <li>
                    <Link href="#" className="transition hover:text-white">
                      AI Workflow Automation
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="transition hover:text-white">
                      Support Triage & Ticketing
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="transition hover:text-white">
                      Internal Tools & Agents
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="transition hover:text-white">
                      Data Pipelines
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="transition hover:text-white">
                      Support & Monitoring
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-semibold text-slate-300 sm:text-lg">
                  Company
                </h4>
                <ul className="text-basic mt-1 space-y-2 text-slate-200">
                  <li>
                    <Link href="#" className="transition hover:text-white">
                      Who we are
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="transition hover:text-white">
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="transition hover:text-white">
                      Industries
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="transition hover:text-white">
                      Workflow
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="transition hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Social Section */}
              <div className="col-span-2 flex flex-col gap-2 sm:col-span-1">
                <h4 className="text-basic font-semibold text-slate-300 sm:text-lg">
                  Social
                </h4>
                <div className="mt-2 grid w-[75px] grid-cols-2 gap-y-3.5 text-white sm:mt-3">
                  <Link
                    href="#"
                    aria-label="X"
                    className="transition hover:opacity-80"
                  >
                    <XIcon className="size-4 sm:size-5" />
                  </Link>
                  <Link
                    href="#"
                    aria-label="LinkedIn"
                    className="transition hover:opacity-80"
                  >
                    <LinkedInIcon className="size-4 sm:size-5" />
                  </Link>
                  <Link
                    href="#"
                    aria-label="Facebook"
                    className="transition hover:opacity-80"
                  >
                    <FacebookIcon className="size-4 sm:size-5" />
                  </Link>
                  <Link
                    href="#"
                    aria-label="Instagram"
                    className="transition hover:opacity-80"
                  >
                    <InstagramIcon className="size-4 sm:size-5" />
                  </Link>
                  <Link
                    href="#"
                    aria-label="YouTube"
                    className="transition hover:opacity-80"
                  >
                    <YoutubeIcon className="size-4 sm:size-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Large Watermark Text Background */}
          <div className="absolute top-65 right-0 left-0 hidden items-center justify-center overflow-hidden opacity-[0.06] md:flex">
            <span
              className="font-extrabold whitespace-nowrap text-white uppercase"
              style={{
                fontFamily: "var(--font-hubot-sans), 'Hubot Sans', sans-serif",
                fontSize: "125px",
              }}
            >
              AARJAV INFOTECH
            </span>
          </div>

          {/* Bottom Footer Bar */}
          <div className="text-basic sm:text-basic relative z-10 mt-2 flex flex-col items-center justify-between gap-3 text-slate-300 sm:mt-28 sm:flex-row md:mt-36">
            <p className="order-2 text-center sm:order-1 sm:text-left">
              2026 © Aarjav Infotech. All rights reserved
            </p>
            <div className="order-1 flex flex-wrap items-center justify-center gap-4 sm:order-2 sm:gap-5">
              <Link href="#" className="transition hover:text-white">
                Terms of service
              </Link>
              <Link href="#" className="transition hover:text-white">
                Privacy policy
              </Link>
              <Link href="#" className="transition hover:text-white">
                Cookie Policy
              </Link>
            </div>
          </div>

          {/* Bottom Inset Notch */}
          <div className="pointer-events-none absolute -bottom-1 left-1/2 flex -translate-x-1/2 justify-center">
            <div className="h-5 w-[200px] rounded-t-[16px] bg-slate-200/90 shadow-inner sm:h-7 sm:w-[320px] sm:rounded-t-[20px] md:w-[420px]" />
          </div>
        </div>
      </div>
    </footer>
  );
}
