"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import { Mail, Headphones, Paperclip, ArrowUpRight } from "lucide-react";

export interface ContactInfoItem {
  icon: "mail" | "phone";
  label: string;
  value: string;
  href: string;
}

export interface MetricTag {
  label: string;
}

export interface ContactSectionProps {
  eyebrow?: string;
  heading?: ReactNode;
  bgImage?: string;

  // Custom Left Content (e.g. contact cards or text blocks)
  contactInfo?: ContactInfoItem[];

  // Vision / Info Card Variant Props (for About page)
  visionCard?: {
    title: string;
    description: string;
  };
  metricsCard?: {
    title: string;
    tags: MetricTag[];
  };

  // Location / Interactive Card (for About page)
  locationCard?: {
    badge: string;
    title: string;
    ctaLabel: string;
    ctaHref: string;
  };

  // Right Side Variant: "form" | "cards"
  variant?: "form" | "cards";
}

const defaultContactInfo: ContactInfoItem[] = [
  {
    icon: "mail",
    label: "E-mail address",
    value: "business@aarjavinfotech.com",
    href: "mailto:business@aarjavinfotech.com",
  },
  {
    icon: "phone",
    label: "Phone number",
    value: "+91 9964919000",
    href: "tel:+919964919000",
  },
];

export function ContactSection({
  eyebrow = "Contact Us",
  heading = "Let's Build Intelligent Things",
  bgImage = "/images/contact-bg.svg",
  contactInfo = defaultContactInfo,
  visionCard,
  metricsCard,
  locationCard,
  variant = "form",
}: ContactSectionProps) {
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
    <section className="w-full bg-white px-3 py-6 sm:px-6 sm:py-10 lg:px-8 font-sans">
      <div className="mx-auto max-w-[1280px]">
        <div className="relative overflow-hidden rounded-[24px] bg-slate-900 p-5 sm:rounded-[36px] sm:p-8 md:p-12 lg:p-16">
          <div className="pointer-events-none absolute inset-0 size-full select-none">
            <Image
              src={bgImage}
              alt="Background"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Grid Layout */}
          <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center lg:gap-8">
            {/* Left Column */}
            <div className="flex flex-col justify-between lg:col-span-6 lg:min-h-[500px]">
              <div>
                {/* Consistent Eyebrow Tag */}
                {eyebrow && (
                  <div className="mb-6 inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-xs font-semibold text-[#2b2bad] shadow-sm sm:mb-8 sm:border-b-4 sm:text-lg">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2b2bad]" />
                    {eyebrow}
                  </div>
                )}

                {/* Main Heading */}
                <h2 className="text-3xl leading-[1.1] font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-[72px]">
                  {heading}
                </h2>
              </div>

              {/* Direct Contact Info Cards (Home Page Variant) */}
              {contactInfo && contactInfo.length > 0 && (
                <div className="mt-8 flex flex-col gap-4 sm:mt-12 sm:gap-5">
                  {contactInfo.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3.5 sm:gap-4"
                    >
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/90 text-[#002688] shadow-md backdrop-blur sm:size-14 sm:rounded-2xl">
                        {item.icon === "mail" ? (
                          <Mail className="size-5 sm:size-6" />
                        ) : (
                          <Headphones className="size-5 sm:size-6" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[18px] font-bold text-slate-800 sm:text-basic">
                          {item.label}
                        </p>
                        <a
                          href={item.href}
                          className="block truncate font-normal text-slate-950 transition hover:underline text-sm sm:text-md"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Location Card (About Page Variant) */}
              {locationCard && (
                <div className="relative mt-8 overflow-hidden rounded-[24px] bg-[#002688] p-8 text-white shadow-xl sm:mt-12">
                  <div className="relative z-10 flex flex-col items-center justify-center text-center">
                    <span className="rounded-full bg-white/10 px-4 py-1 text-xs font-medium backdrop-blur-md">
                      {locationCard.badge}
                    </span>
                    <h3 className="mt-4 text-2xl font-bold sm:text-3xl">
                      {locationCard.title}
                    </h3>
                    <a
                      href={locationCard.ctaHref}
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#002688] transition hover:bg-slate-100"
                    >
                      {locationCard.ctaLabel}
                      <ArrowUpRight className="size-4" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className="lg:col-span-6">
              {variant === "form" ? (
                /* Contact Form Card */
                <div className="rounded-[24px] bg-[#f2f4f7] p-6 shadow-2xl sm:rounded-[32px] sm:p-10 lg:p-12">
                  <h3 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl lg:text-3xl">
                    Fill this form below
                  </h3>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-6 flex flex-col gap-5 sm:mt-8 sm:gap-6"
                  >
                    <div className="flex flex-col gap-1 sm:gap-1.5">
                      <label
                        htmlFor="name"
                        className="text-xs font-bold text-slate-900 sm:text-sm"
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
                        className="w-full border-b border-slate-300 bg-transparent py-1.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none sm:py-2 sm:text-basic"
                      />
                    </div>

                    <div className="flex flex-col gap-1 sm:gap-1.5">
                      <label
                        htmlFor="phone"
                        className="text-xs font-bold text-slate-900 sm:text-sm"
                      >
                        Your Phone
                      </label>
                      <input
                        id="phone"
                        type="text"
                        placeholder="Enter your e-mail or Phone"
                        value={formData.emailOrPhone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            emailOrPhone: e.target.value,
                          })
                        }
                        className="w-full border-b border-slate-300 bg-transparent py-1.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none sm:py-2 sm:text-base"
                      />
                    </div>

                    <div className="flex flex-col gap-1 sm:gap-1.5">
                      <label
                        htmlFor="project"
                        className="text-xs font-bold text-slate-900 sm:text-sm"
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
                        className="w-full border-b border-slate-300 bg-transparent py-1.5 text-sm text-slate-900 focus:border-slate-900 focus:outline-none sm:py-2 sm:text-base"
                      />
                    </div>

                    <div className="mt-1">
                      <label className="inline-flex cursor-pointer items-center gap-2 text-xs font-bold text-slate-900 transition hover:opacity-80 sm:text-sm">
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

                   <button
  type="submit"
  className="mt-4 w-full rounded-full bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] border-b-4 border-black py-3.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(0,38,136,0.4)] transition-all hover:scale-[1.01] hover:shadow-[0_16px_32px_rgba(0,56,255,0.45)] active:scale-[0.99] cursor-pointer sm:mt-6 sm:py-4 sm:text-base"
>
  Submit Message
</button>
                  </form>
                </div>
              ) : (
                /* Vision / Value Cards Stack (About Page Variant) */
                <div className="flex flex-col gap-6">
                  {visionCard && (
                    <div className="rounded-[24px] bg-[#f2f4f7] p-6 shadow-md sm:p-8">
                      <h3 className="text-xl font-bold text-slate-950 sm:text-2xl">
                        {visionCard.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
                        {visionCard.description}
                      </p>
                    </div>
                  )}

                  {metricsCard && (
                    <div className="rounded-[24px] bg-[#f2f4f7] p-6 shadow-md sm:p-8">
                      <h3 className="text-xl font-bold text-slate-950 sm:text-2xl">
                        {metricsCard.title}
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-2.5">
                        {metricsCard.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-800 shadow-sm"
                          >
                            <span className="size-1.5 rounded-full bg-[#002688]" />
                            {tag.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}