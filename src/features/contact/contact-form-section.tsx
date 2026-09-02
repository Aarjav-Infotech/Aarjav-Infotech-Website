"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  Mail,
  Paperclip,
  X,
  FileText,
} from "lucide-react";

interface ContactFormSectionProps {
  eyebrow?: string;
}

export function ContactFormSection({
  eyebrow = "Contact",
}: ContactFormSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectDetails: "",
  });

  const [attachments, setAttachments] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const locations = [
    {
      country: "India",
      iconSrc: "/images/office.svg",
      phoneIconSrc: "/images/call.svg",
      locationIconSrc: "/images/location.svg",
      phone: "+91 99649 19000 (Call & what's app)",
      phoneHref: "tel:+919964919000",
      address:
        "526, Mahek IT Park, Kshanagar, Old GIDC, Katargam, Surat, Gujarat 395004.",
    },
    {
      country: "USA",
      iconSrc: "/images/office.svg",
      phoneIconSrc: "/images/whatsapp.svg",
      locationIconSrc: "/images/location.svg",
      phone: "+1 (551) 208-0596",
      phoneHref: "tel:+15512080596",
      address: "204 Lawson Pl, Paramus, NJ 07652, USA",
    },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setAttachments((prev) => [...prev, ...newFiles]);
    }
  };

  const removeAttachment = (indexToRemove: number) => {
    setAttachments((prev) => prev.filter((_, idx) => idx !== indexToRemove));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <section className="relative w-full bg-[#FFFFFF] px-4 py-8 sm:px-6 sm:py-12 md:py-16 lg:px-8">
      <div className="mx-auto max-w-[1240px] space-y-8 sm:space-y-12">
        {/* TOP ROW: Two Location Cards (India & USA) */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:gap-8">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-[24px] bg-[#f4f5f7] p-6 shadow-[0_12px_32px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] sm:rounded-[32px] sm:p-8 md:rounded-[36px] md:p-6 border-b-7 border-grey"
            >
              <div>
                {/* 3D Location Building Image */}
                <div className="relative mb-4 flex size-10 rounded-[15px] items-center justify-center transition-transform bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] duration-300 hover:scale-105 sm:mb-6 sm:size-14 md:size-16">
                  <Image
                    src={loc.iconSrc}
                    alt={`${loc.country} Office`}
                    fill
                    className="object-contain drop-shadow-md p-4"
                    priority
                  />
                </div>

                {/* Country Name */}
                <h3 className="text-lg font-bold tracking-tight text-neutral-900 sm:text-xl md:text-2xl">
                  {loc.country}
                </h3>

                {/* Phone & Address Details */}
                <div className="mt-3 space-y-2 text-xs text-neutral-700 sm:mt-4 sm:space-y-2.5 sm:text-sm">
                  <div className="flex items-center gap-2 sm:gap-2">
                    <div className="relative size-4 shrink-0">
                      <Image
                        src={loc.phoneIconSrc}
                        alt="Phone"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <a
                      href={loc.phoneHref}
                      className="break-all font-medium transition-colors text-base hover:text-[#0053FA]"
                    >
                      {loc.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-2">
                    <div className="relative mt-0.5 size-4 shrink-0">
                      <Image
                        src={loc.locationIconSrc}
                        alt="Location"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="leading-relaxed text-base">{loc.address}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION: Left Info/Pills & Right Form */}
        <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-14">
          {/* LEFT COLUMN: Eyebrow, Heading, Description, Email & Social Pills */}
          <div className="flex flex-col justify-between  lg:col-span-6">
            <div>
              {/* Eyebrow Badge */}
              {eyebrow && (
                <div className="mb-4 inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-xs font-bold text-[#002688] shadow-xs sm:mb-6 sm:border-b-4 sm:text-[14px]">
                  <span className="size-1.5 rounded-full bg-[#002688]" />
                  {eyebrow}
                </div>
              )}

              <h2 className="text-[3xl] font-semibold tracking-tight text-neutral-950 sm:text-4xl md:text-5xl lg:text-[72px] lg:leading-[1.12]">
                Let&apos;s Build <br className="hidden sm:inline" />
                Intelligent Things
              </h2>

              <p className="mt-4 max-w-full text-sm leading-relaxed text-black sm:mt-6 sm:text-base sm:leading-relaxed">
                combining creativity, technology, and strategy to craft solutions that think, adapt, and inspire. Connect with us to turn visionary ideas into meaningful, data-driven realities.
              </p>
            </div>

            {/* Floating Action Pills */}
            <div className="mt-8 space-y-3 sm:mt-12 sm:space-y-4 lg:mt-16">
              {/* Email Pill */}
              <a
                href="mailto:business@aarjavinfotech.com"
                className="inline-flex w-full max-w-full items-center justify-between rounded-full bg-[#f4f5f7] py-2.5 pr-3 pl-4 border-b-7 border-grey shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition-all hover:scale-[1.01] hover:shadow-[0_12px_24px_rgba(0,0,0,0.1)] sm:max-w-[340px] sm:py-3 sm:pr-3.5 sm:pl-6"
              >
                <span className="truncate text-xs font-semibold text-neutral-900 sm:text-lg ">
                  business@aarjavinfotech.com
                </span>
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(180deg,#002688_0%,#0053FA_100%)] text-white shadow-xs">
                  <Mail className="size-3.5" />
                </span>
              </a>

              {/* Social Pills */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 ">
                {/* Twitter / X */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex border-b-7 border-grey min-w-[130px] flex-1 items-center justify-between rounded-full bg-[#f4f5f7] py-2 pr-2.5 pl-4 shadow-[0_8px_18px_rgba(0,0,0,0.06)] transition-all hover:scale-[1.01] sm:min-w-[155px] sm:flex-initial sm:py-2.5 sm:pr-3 sm:pl-5"
                >
                  <span className="text-xs font-semibold text-neutral-900 sm:text-lg">
                    Twitter / X
                  </span>
                  <span className="flex size-6 items-center justify-center rounded-full bg-[linear-gradient(180deg,#002688_0%,#0053FA_100%)] text-xs font-bold text-white shadow-xs sm:size-7">
                    𝕏
                  </span>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-w-[130px] border-b-7 border-grey flex-1 items-center justify-between rounded-full bg-[#f4f5f7] py-2 pr-2.5 pl-4 shadow-[0_8px_18px_rgba(0,0,0,0.06)] transition-all hover:scale-[1.01] sm:min-w-[155px] sm:flex-initial sm:py-2.5 sm:pr-3 sm:pl-5"
                >
                  <span className="text-xs font-semibold text-neutral-900 sm:text-lg">
                    Facebook
                  </span>
                  <span className="flex size-6 items-center justify-center rounded-full bg-[linear-gradient(180deg,#002688_0%,#0053FA_100%)] text-xs font-bold text-white shadow-xs sm:size-7">
                    f
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form Card */}
          <div className="relative rounded-[24px] bg-[#F4F4F5] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.06)] sm:rounded-[32px] sm:p-8 md:rounded-[36px] md:p-10 lg:col-span-6 lg:p-12 border-b-7 border-grey">
            <h3 className="text-xl font-bold tracking-tight text-neutral-950 sm:text-2xl lg:text-3xl">
              Fill this form below
            </h3>

            <form
              className="mt-6 space-y-5 sm:mt-8 sm:space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Name Field */}
              <div className="space-y-1 sm:space-y-1.5">
                <label className="text-xs font-bold text-neutral-900 sm:text-sm">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border-b border-neutral-300 bg-transparent py-1.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#002688] focus:outline-hidden sm:py-2 sm:text-base"
                />
              </div>

              {/* Phone Field */}
              <div className="space-y-1 sm:space-y-1.5">
                <label className="text-xs font-bold text-neutral-900 sm:text-sm">
                  Your Phone
                </label>
                <input
                  type="text"
                  placeholder="Enter the phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full border-b border-neutral-300 bg-transparent py-1.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#002688] focus:outline-hidden sm:py-2 sm:text-base"
                />
              </div>

              {/* More About The Project */}
              <div className="space-y-1 sm:space-y-1.5">
                <label className="text-xs font-bold text-neutral-900 sm:text-sm">
                  More About The Project
                </label>
                <input
                  type="text"
                  value={formData.projectDetails}
                  onChange={(e) =>
                    setFormData({ ...formData, projectDetails: e.target.value })
                  }
                  className="w-full border-b border-neutral-300 bg-transparent py-2 text-sm text-neutral-900 focus:border-[#002688] focus:outline-hidden sm:py-2 sm:text-base"
                />
              </div>

              {/* Hidden File Input */}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                multiple
              />

              {/* Attachment Trigger */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex cursor-pointer items-center gap-2 text-xs font-bold text-neutral-900 transition-opacity hover:opacity-80 sm:text-sm"
                >
                  <Paperclip className="size-3.5 shrink-0 rotate-45 sm:size-4" />
                  <span>Add an Attachment</span>
                </button>
              </div>

              {/* Uploaded Attachments Badge List */}
              {attachments.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {attachments.map((file, index) => (
                    <div
                      key={index}
                      className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-2.5 py-1 text-xs font-medium text-neutral-700 shadow-xs sm:gap-2 sm:px-3"
                    >
                      <FileText className="size-3 text-blue-600 sm:size-3.5" />
                      <span className="max-w-[120px] truncate sm:max-w-[140px]">
                        {file.name}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeAttachment(index)}
                        className="cursor-pointer rounded-full p-0.5 text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700"
                      >
                        <X className="size-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4 sm:pt-6">
                <button
                  type="submit"
                  className="w-full cursor-pointer rounded-full bg-[linear-gradient(180deg,#002688_0%,#0053FA_100%)] py-3.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(0,38,136,0.4)] transition-all hover:scale-[1.01] hover:shadow-[0_16px_32px_rgba(0,38,136,0.5)] active:scale-[0.99] sm:py-4 sm:text-base"
                >
                  Submit Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}