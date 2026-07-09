"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

export function HomeContact() {
  return (
    <section className="relative w-full bg-transparent">
      <div className="relative w-full overflow-visible">
        {/* Background Image */}
        <Image
          src="/images/section_8.png"
          alt="Contact Background"
          fill
          className="object-cover object-top"
          priority
        />

        <div className="relative z-10 flex flex-col items-stretch justify-center gap-8 px-4 pt-[100px] pb-[60px] md:px-[80px] lg:flex-row lg:gap-[20px] lg:pt-[200px] lg:pb-[100px]">
          {/* Left Column */}
          <div className="w-full shrink-0 lg:w-[630px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col rounded-[20px] border border-white/5 bg-black/20 p-8 backdrop-blur-md md:p-[40px] lg:h-[784px]"
            >
              <div className="flex flex-col gap-[10px]">
                <p
                  className="text-[12px] leading-[15.6px] font-normal tracking-[1px] text-white/70 uppercase"
                  style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                >
                  GET STARTED
                </p>
                <h2 className="text-[46px] leading-[46px] font-medium text-white">
                  Let&apos;s talk about your workflows
                </h2>
                <p className="max-w-[440px] text-[16px] leading-[22.4px] text-white/80">
                  Book a discovery call or send us a message.
                  <br />
                  We&apos;ll get back to you within one business day.
                </p>
              </div>

              <div className="mt-[112px] flex w-full flex-col gap-[10px] border-t border-white/20 pt-[40px] lg:mt-auto">
                <p className="text-[16px] leading-[22.4px] font-normal text-white/80">
                  30 minutes to explore your automation opportunities. No pitch,
                  no pressure—just a focused conversation about your workflow
                  challenges.
                </p>

                <div className="flex flex-col gap-[15px] pb-[30px]">
                  {[
                    "Identify high-impact automation opportunities",
                    "Discuss your current tech stack",
                    "Get a ballpark timeline and approach",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check
                        className="h-[18px] w-[18px] shrink-0 text-[#8892ff]"
                        strokeWidth={2.5}
                      />
                      <span className="text-[16px] font-normal text-white/90">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Contact Info Cards */}
                <div className="flex w-full flex-col gap-4 sm:flex-row">
                  <a
                    href="tel:+919964919000"
                    className="flex-1 rounded-[12px] border border-white/5 bg-white/10 p-5 backdrop-blur-sm transition-colors hover:bg-black/60"
                  >
                    <p
                      className="mb-2 text-[12px] leading-[15.6px] font-normal tracking-[1px] text-white uppercase"
                      style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                    >
                      CALL US AT:
                    </p>
                    <p className="text-[16px] font-medium text-white">
                      +91 9964919000
                    </p>
                  </a>
                  <a
                    href="mailto:business@aarjavinfotech.com"
                    className="flex-1 rounded-[12px] border border-white/5 bg-white/10 p-5 backdrop-blur-sm transition-colors hover:bg-black/60"
                  >
                    <p
                      className="mb-2 text-[12px] leading-[15.6px] font-normal tracking-[1px] text-white uppercase"
                      style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                    >
                      EMAIL US:
                    </p>
                    <p className="text-[16px] font-medium text-white">
                      business@aarjavinfotech.com
                    </p>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full shrink-0 lg:w-[630px]"
          >
            <div className="flex h-full flex-col rounded-[20px] bg-[#FAF9F7] px-8 pt-8 pb-5 md:px-[40px] md:pt-[39px] md:pb-[20px]">
              <div className="mb-[30px] flex flex-col items-center gap-[10px] text-center">
                <Image
                  src="/svg/call_icon.svg"
                  alt="Call"
                  width={40}
                  height={40}
                />
                <h3 className="text-[24px] leading-[33.6px] font-medium text-black">
                  Schedule a discovery call
                </h3>
                <p className="w-full text-[16px] leading-[22.4px] font-normal text-black/60">
                  Tell us about your goals, and we&apos;ll tailor our expertise
                  to fit your needs. Fill out the form below, and we&apos;ll get
                  back to you soon.
                </p>
              </div>

              <form
                className="flex flex-col gap-[20px]"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex flex-col gap-[10px]">
                  <label
                    className="text-[12px] leading-[15.6px] font-normal tracking-normal text-black/60 uppercase"
                    style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                  >
                    NAME
                  </label>
                  <input
                    type="text"
                    className="h-[45px] w-full rounded-[8px] border border-black/10 bg-white px-4 text-black transition-colors outline-none focus:border-black/30"
                  />
                </div>

                <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2">
                  <div className="flex flex-col gap-[10px]">
                    <label
                      className="text-[12px] leading-[15.6px] font-normal tracking-normal text-black/60 uppercase"
                      style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                    >
                      PHONE
                    </label>
                    <input
                      type="tel"
                      className="h-[45px] w-full rounded-[8px] border border-black/10 bg-white px-4 text-black transition-colors outline-none focus:border-black/30"
                    />
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <label
                      className="text-[12px] leading-[15.6px] font-normal tracking-normal text-black/60 uppercase"
                      style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                    >
                      BUSINESS EMAIL
                    </label>
                    <input
                      type="email"
                      className="h-[45px] w-full rounded-[8px] border border-black/10 bg-white px-4 text-black transition-colors outline-none focus:border-black/30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-[20px] sm:grid-cols-2">
                  <div className="flex flex-col gap-[10px]">
                    <label
                      className="text-[12px] leading-[15.6px] font-normal tracking-normal text-black/60 uppercase"
                      style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                    >
                      COMPANY NAME
                    </label>
                    <input
                      type="text"
                      className="h-[45px] w-full rounded-[8px] border border-black/10 bg-white px-4 text-black transition-colors outline-none focus:border-black/30"
                    />
                  </div>
                  <div className="flex flex-col gap-[10px]">
                    <label
                      className="text-[12px] leading-[15.6px] font-normal tracking-normal text-black/60 uppercase"
                      style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                    >
                      SUBJECT
                    </label>
                    <div className="relative">
                      <select className="h-[45px] w-full cursor-pointer appearance-none rounded-[8px] border border-black/10 bg-white px-4 text-black transition-colors outline-none focus:border-black/30">
                        <option value="">Select</option>
                        <option value="automation">Workflow Automation</option>
                        <option value="integration">System Integration</option>
                        <option value="ai">AI Implementation</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2">
                        <svg
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1L5 5L9 1"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-[10px] pb-[10px]">
                  <label
                    className="text-[12px] leading-[15.6px] font-normal tracking-normal text-black/60 uppercase"
                    style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
                  >
                    MESSAGE
                  </label>
                  <textarea
                    placeholder="Tell us about what you want to automate..."
                    className="h-[120px] w-full resize-none rounded-[8px] border border-black/10 bg-white p-4 text-black transition-colors outline-none placeholder:text-black/30 focus:border-black/30"
                  />
                </div>

                <div className="flex flex-col gap-[20px]">
                  <p className="text-[14px] leading-[19.6px] font-normal text-black/60">
                    We&apos;ll only use your info to respond to your inquiry.
                  </p>
                  <button
                    type="submit"
                    className="flex h-[54px] w-max items-center justify-center gap-[19px] rounded-[60px] border border-transparent bg-black px-[25px] text-[16px] leading-[17.6px] font-medium text-white transition-all duration-300 hover:border-transparent hover:bg-[linear-gradient(90deg,#091E46_1%,#075FF3_100%)]"
                  >
                    Send message
                    <Image
                      src="/svg/right_arrow.svg"
                      alt="Arrow"
                      width={16}
                      height={16}
                      className="text-white"
                    />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
