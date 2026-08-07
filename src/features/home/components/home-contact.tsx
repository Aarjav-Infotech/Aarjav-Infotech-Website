"use client";

import { useState } from "react";
import Image from "next/image";
import { Mail, Headphones, Paperclip } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    projectDetails: "",
  });
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData, fileName);
  };

  return (
    <section className="w-full bg-white px-3 py-6 sm:px-6 sm:py-10 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="relative overflow-hidden rounded-[24px] bg-slate-900 p-5 sm:rounded-[36px] sm:p-8 md:p-12 lg:p-16">
          <div className="pointer-events-none absolute inset-0 size-full select-none">
            <Image
              src="/images/contact-bg.svg"
              alt="Contact Background"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Grid Layout */}
          <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-8">
            {/* Left Column: Heading & Contact Info */}
            <div className="flex flex-col justify-between lg:col-span-6 lg:min-h-[500px]">
              <div>
                {/* Contact Us Pill Badge */}
                <div className="text-basic inline-flex items-center gap-2 rounded-full bg-white/80 px-3.5 py-1.5 font-semibold text-[#002688] shadow-sm backdrop-blur sm:px-4">
                  <span className="size-2 rounded-full bg-[#002688]" />
                  Contact Us
                </div>

                {/* Main Heading */}
                <h2 className="mt-5 text-3xl leading-tight font-extrabold tracking-tight text-slate-950 sm:mt-8 sm:text-5xl lg:text-[56px]">
                  Let&apos;s Build <br className="hidden sm:inline" />
                  Intelligent Things
                </h2>
              </div>

              {/* Direct Contact Info Cards */}
              <div className="mt-8 flex flex-col gap-4 sm:mt-12 sm:gap-5">
                {/* Email Info */}
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/90 text-[#002688] shadow-md backdrop-blur sm:size-14 sm:rounded-2xl">
                    <Mail className="size-5 sm:size-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="sm:text-basic text-[11px] font-semibold text-slate-800">
                      E-mail address
                    </p>
                    <a
                      href="mailto:business@aarjavinfotech.com"
                      className="text-basic block truncate font-bold text-slate-950 transition hover:underline sm:text-base"
                    >
                      business@aarjavinfotech.com
                    </a>
                  </div>
                </div>

                {/* Phone Info */}
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/90 text-[#002688] shadow-md backdrop-blur sm:size-14 sm:rounded-2xl">
                    <Headphones className="size-5 sm:size-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="sm:text-basic text-[11px] font-semibold text-slate-800">
                      Phone number
                    </p>
                    <a
                      href="tel:+919964919000"
                      className="text-basic block truncate font-bold text-slate-950 transition hover:underline sm:text-base"
                    >
                      +91 9964919000
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form Card */}
            <div className="lg:col-span-6">
              <div className="rounded-[24px] bg-[#f2f4f7] p-6 shadow-2xl sm:rounded-[32px] sm:p-10 lg:p-12">
                <h3 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl lg:text-3xl">
                  Fill this form below
                </h3>

                <form
                  onSubmit={handleSubmit}
                  className="mt-6 flex flex-col gap-5 sm:mt-8 sm:gap-6"
                >
                  {/* Name Input */}
                  <div className="flex flex-col gap-1 sm:gap-1.5">
                    <label
                      htmlFor="name"
                      className="text-basic font-bold text-slate-900"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="text-basic sm:text-basic w-full border-b border-slate-300 bg-transparent py-1.5 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none sm:py-2"
                    />
                  </div>

                  {/* Phone / Email Input */}
                  <div className="flex flex-col gap-1 sm:gap-1.5">
                    <label
                      htmlFor="phone"
                      className="text-basic font-bold text-slate-900"
                    >
                      Your Phone
                    </label>
                    <input
                      id="phone"
                      type="text"
                      placeholder="Enter the e-mail"
                      value={formData.emailOrPhone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          emailOrPhone: e.target.value,
                        })
                      }
                      className="text-basic sm:text-basic w-full border-b border-slate-300 bg-transparent py-1.5 text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none sm:py-2"
                    />
                  </div>

                  {/* Project Details Input */}
                  <div className="flex flex-col gap-1 sm:gap-1.5">
                    <label
                      htmlFor="project"
                      className="text-basic font-bold text-slate-900"
                    >
                      More About The Project
                    </label>
                    <input
                      id="project"
                      type="text"
                      value={formData.projectDetails}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          projectDetails: e.target.value,
                        })
                      }
                      className="text-basic sm:text-basic w-full border-b border-slate-300 bg-transparent py-1.5 text-slate-900 focus:border-slate-900 focus:outline-none sm:py-2"
                    />
                  </div>

                  {/* Attachment Button */}
                  <div className="mt-1">
                    <label className="text-basic inline-flex cursor-pointer items-center gap-2 font-bold text-slate-900 transition hover:opacity-80">
                      <Paperclip className="size-4 shrink-0" />
                      <span className="truncate">
                        {fileName ? fileName : "Add an Attachment"}
                      </span>
                      <input
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="text-basic sm:text-basic mt-4 w-full rounded-full bg-[linear-gradient(180deg,#002688_0%,#0053FA_100%)] py-3.5 font-semibold text-white shadow-[0_12px_24px_rgba(0,38,136,0.4)] transition-transform hover:scale-[1.01] active:scale-[0.99] sm:mt-6 sm:py-4"
                  >
                    Submit Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
