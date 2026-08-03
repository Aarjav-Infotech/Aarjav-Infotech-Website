"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
// import { motion } from "framer-motion";

import { APP_NAME, ROUTES } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative w-full bg-center bg-no-repeat pt-32 pb-0"
      style={{
        backgroundImage: "url('/images/footer_bg_image.png')",
        backgroundSize: "100% 100%",
      }}
      role="contentinfo"
    >
      <div className="mx-auto w-full">
        <div
          className="relative flex w-full flex-col overflow-hidden bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/footer_bg_img_white.png')",
            backgroundSize: "100% 100%",
          }}
        >
          {/* Content wrapper with padding */}
          <div
            className="flex flex-col px-4 pt-[130px] pb-[32px] md:px-8 lg:px-[100px]"
            style={{ height: "585px" }}
          >
            {/* Top Section */}
            <div className="flex flex-col gap-[40px] lg:flex-row lg:gap-[144px]">
              {/* Left Block */}
              <div className="flex w-full shrink-0 flex-col lg:w-[482px]">
                <Link href={ROUTES.home} className="mb-[30px] inline-block">
                  <Image
                    src="/svg/logo.svg"
                    alt={APP_NAME}
                    width={180}
                    height={40}
                    className="h-16 w-auto"
                  />
                </Link>

                <h3 className="w-full bg-gradient-to-b from-[#1354E8] to-[#042475] bg-clip-text text-[30px] leading-tight font-semibold text-transparent">
                  Automations that ship &amp; keep running.
                </h3>

                <p className="mt-[12px] w-full text-[18px] leading-relaxed font-medium text-[#0D152E]">
                  We design and deploy AI + workflow automations that help teams
                  work smarter, not harder.
                </p>
              </div>

              {/* Right Block */}
              <div className="flex w-full shrink-0 flex-col gap-[40px] md:flex-row lg:w-[654px] lg:gap-[20px]">
                {/* Services Column */}
                <div className="flex w-full shrink-0 flex-col md:w-[318px]">
                  <h4 className="mb-[10px] text-[15px] font-semibold text-[#0D152E]">
                    Services
                  </h4>
                  <ul className="flex flex-col gap-[10px]">
                    {[
                      "AI Workflow Automation",
                      "Support Triage & Ticketing",
                      "Internal Tools & Agents",
                      "Data Pipelines",
                      "Support & Monitoring",
                    ].map((item) => (
                      <li key={item}>
                        <Link
                          href="#"
                          className="hover:text-primary text-[15px] font-medium text-[#0D152E] transition-colors"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company Column */}
                <div className="flex w-full shrink-0 flex-col md:w-[208px]">
                  <h4 className="mb-[10px] text-[15px] font-semibold text-[#0D152E]">
                    Company
                  </h4>
                  <ul className="flex flex-col gap-[10px]">
                    {[
                      "Who we are",
                      "Case Studies",
                      "Industries",
                      "Workflow",
                      "Contact",
                    ].map((item) => (
                      <li key={item}>
                        <Link
                          href="#"
                          className="hover:text-primary text-[15px] font-medium text-[#0D152E] transition-colors"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Column */}
                <div className="flex w-auto shrink-0 flex-col">
                  <h4 className="mb-[10px] text-[15px] font-semibold text-[#0D152E]">
                    Social
                  </h4>
                  <div className="grid grid-cols-2 gap-x-[20px] gap-y-[10px]">
                    <Link
                      href="#"
                      className="hover:text-primary flex items-center text-[#0D152E] transition-colors"
                    >
                      <svg
                        width="21"
                        height="18"
                        viewBox="0 0 15 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[18px] w-[21px] fill-current"
                      >
                        <path
                          d="M11.325 0H13.5312L8.7125 5.50625L14.3813 13H9.94375L6.46562 8.45625L2.49062 13H0.28125L5.43437 7.10938L0 0H4.55L7.69062 4.15312L11.325 0ZM10.55 11.6812H11.7719L3.88438 1.25H2.57188L10.55 11.6812Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      className="hover:text-primary flex items-center text-[#0D152E] transition-colors"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[20px] w-[20px] fill-current"
                      >
                        <path
                          d="M3.13375 13.9997H0.23125V4.65281H3.13375V13.9997ZM1.68094 3.37781C0.752813 3.37781 0 2.60906 0 1.68094C6.64312e-09 1.23513 0.177098 0.807572 0.492335 0.492335C0.807572 0.177098 1.23513 0 1.68094 0C2.12675 0 2.5543 0.177098 2.86954 0.492335C3.18478 0.807572 3.36188 1.23513 3.36188 1.68094C3.36188 2.60906 2.60875 3.37781 1.68094 3.37781ZM13.9969 13.9997H11.1006V9.44969C11.1006 8.36531 11.0787 6.97469 9.59156 6.97469C8.0825 6.97469 7.85125 8.15281 7.85125 9.37156V13.9997H4.95188V4.65281H7.73562V5.92781H7.77625C8.16375 5.19344 9.11031 4.41844 10.5225 4.41844C13.46 4.41844 14 6.35281 14 8.86531V13.9997H13.9969Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      className="hover:text-primary flex items-center text-[#0D152E] transition-colors"
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[22px] w-[22px] fill-current"
                      >
                        <path
                          d="M15.5 7.75C15.5 3.46875 12.0312 0 7.75 0C3.46875 0 0 3.46875 0 7.75C0 11.6181 2.83406 14.8244 6.53906 15.4062V9.99031H4.57031V7.75H6.53906V6.0425C6.53906 4.10031 7.69531 3.0275 9.46625 3.0275C10.3144 3.0275 11.2013 3.17875 11.2013 3.17875V5.085H10.2238C9.26125 5.085 8.96094 5.6825 8.96094 6.29531V7.75H11.1103L10.7666 9.99031H8.96094V15.4062C12.6659 14.8244 15.5 11.6181 15.5 7.75Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      className="hover:text-primary flex items-center text-[#0D152E] transition-colors"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[20px] w-[20px] fill-current"
                      >
                        <path
                          d="M7.00547 3.41172C5.01797 3.41172 3.41484 5.01484 3.41484 7.00234C3.41484 8.98984 5.01797 10.593 7.00547 10.593C8.99297 10.593 10.5961 8.98984 10.5961 7.00234C10.5961 5.01484 8.99297 3.41172 7.00547 3.41172ZM7.00547 9.33672C5.72109 9.33672 4.67109 8.28984 4.67109 7.00234C4.67109 5.71484 5.71797 4.66797 7.00547 4.66797C8.29297 4.66797 9.33984 5.71484 9.33984 7.00234C9.33984 8.28984 8.28984 9.33672 7.00547 9.33672ZM11.5805 3.26484C11.5805 3.73047 11.2055 4.10234 10.743 4.10234C10.2773 4.10234 9.90547 3.72734 9.90547 3.26484C9.90547 2.80234 10.2805 2.42734 10.743 2.42734C11.2055 2.42734 11.5805 2.80234 11.5805 3.26484ZM13.9586 4.11484C13.9055 2.99297 13.6492 1.99922 12.8273 1.18047C12.0086 0.361719 11.0148 0.105469 9.89297 0.0492187C8.73672 -0.0164062 5.27109 -0.0164062 4.11484 0.0492187C2.99609 0.102344 2.00234 0.358594 1.18047 1.17734C0.358594 1.99609 0.105469 2.98984 0.0492187 4.11172C-0.0164062 5.26797 -0.0164062 8.73359 0.0492187 9.88984C0.102344 11.0117 0.358594 12.0055 1.18047 12.8242C2.00234 13.643 2.99297 13.8992 4.11484 13.9555C5.27109 14.0211 8.73672 14.0211 9.89297 13.9555C11.0148 13.9023 12.0086 13.6461 12.8273 12.8242C13.6461 12.0055 13.9023 11.0117 13.9586 9.88984C14.0242 8.73359 14.0242 5.27109 13.9586 4.11484ZM12.4648 11.1305C12.2211 11.743 11.7492 12.2148 11.1336 12.4617C10.2117 12.8273 8.02422 12.743 7.00547 12.743C5.98672 12.743 3.79609 12.8242 2.87734 12.4617C2.26484 12.218 1.79297 11.7461 1.54609 11.1305C1.18047 10.2086 1.26484 8.02109 1.26484 7.00234C1.26484 5.98359 1.18359 3.79297 1.54609 2.87422C1.78984 2.26172 2.26172 1.78984 2.87734 1.54297C3.79922 1.17734 5.98672 1.26172 7.00547 1.26172C8.02422 1.26172 10.2148 1.18047 11.1336 1.54297C11.7461 1.78672 12.218 2.25859 12.4648 2.87422C12.8305 3.79609 12.7461 5.98359 12.7461 7.00234C12.7461 8.02109 12.8305 10.2117 12.4648 11.1305Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      className="hover:text-primary flex items-center text-[#0D152E] transition-colors"
                    >
                      <svg
                        width="22"
                        height="15"
                        viewBox="0 0 16 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[15px] w-[22px] fill-current"
                      >
                        <path
                          d="M14.8534 1.66897C14.6789 1.01203 14.1649 0.494639 13.5122 0.319056C12.3291 0 7.58519 0 7.58519 0C7.58519 0 2.84131 0 1.65822 0.319056C1.00553 0.494667 0.491472 1.01203 0.317 1.66897C0 2.85972 0 5.34411 0 5.34411C0 5.34411 0 7.8285 0.317 9.01925C0.491472 9.67619 1.00553 10.172 1.65822 10.3476C2.84131 10.6667 7.58519 10.6667 7.58519 10.6667C7.58519 10.6667 12.3291 10.6667 13.5122 10.3476C14.1649 10.172 14.6789 9.67619 14.8534 9.01925C15.1704 7.8285 15.1704 5.34411 15.1704 5.34411C15.1704 5.34411 15.1704 2.85972 14.8534 1.66897ZM6.03367 7.59975V3.08847L9.99864 5.34417L6.03367 7.59975Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Copyright Row */}
            <div className="mt-[60px] flex h-auto w-full flex-col gap-[30px] md:h-[32px] md:flex-row md:items-center md:gap-0">
              <p className="text-[16px] font-medium text-[#0D152E]">
                {currentYear} © Aarjav Infotech. All rights reserved
              </p>

              <div className="flex flex-wrap items-center gap-[30px] md:ml-auto md:flex-nowrap">
                <Link
                  href="#"
                  className="hover:text-primary text-[16px] font-medium text-[#0D152E] transition-colors"
                >
                  Terms of service
                </Link>
                <Link
                  href="#"
                  className="hover:text-primary text-[16px] font-medium text-[#0D152E] transition-colors"
                >
                  Privacy policy
                </Link>
                <Link
                  href="#"
                  className="hover:text-primary text-[16px] font-medium text-[#0D152E] transition-colors"
                >
                  Cookie Policy
                </Link>

                <button
                  onClick={scrollToTop}
                  className="hover:border-primary hover:text-primary flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full border border-gray-300 text-[#718096] transition-colors"
                  aria-label="Scroll to top"
                >
                  <ArrowUp className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Huge AARJAV INFOTECH — below content, clipped by overflow-hidden */}
          {/* <div className="pointer-events-none absolute right-0 bottom-0 left-0 overflow-hidden px-4 md:px-8 lg:px-[80px]">
            <motion.h1
              initial={{ y: "100%" }}
              whileInView={{ y: "25%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-gradient-to-b from-[#1354E8] to-[#042475] bg-clip-text text-[10vw] font-extrabold whitespace-nowrap text-transparent uppercase select-none lg:text-[140px]"
              style={{ lineHeight: "160px", letterSpacing: "0.05em" }}
            >
              AARJAV INFOTECH
            </motion.h1>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
