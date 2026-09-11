"use client";

import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import { Mail, Headphones, ArrowUpRight } from "lucide-react";
import { asset } from "@/lib/cdn";
import { submitContactForm } from "@/lib/contact";

const HOME_CONTACT_FORM_KEY = "aarjav_home_contact_submission";
const HOME_CONTACT_FORM_TTL_MS = 24 * 60 * 60 * 1000;

function getStoredSubmission() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = window.sessionStorage.getItem(HOME_CONTACT_FORM_KEY);
    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw) as { timestamp?: number };
    if (typeof parsed.timestamp !== "number") {
      window.sessionStorage.removeItem(HOME_CONTACT_FORM_KEY);
      return null;
    }

    const isStillValid =
      Date.now() - parsed.timestamp < HOME_CONTACT_FORM_TTL_MS;
    if (!isStillValid) {
      window.sessionStorage.removeItem(HOME_CONTACT_FORM_KEY);
      return null;
    }

    return parsed;
  } catch {
    window.sessionStorage.removeItem(HOME_CONTACT_FORM_KEY);
    return null;
  }
}

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
  bgImage = asset("/images/contact-bg.svg"),
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
  // const [fileName, setFileName] = useState<string | null>(null);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsSubmitted(Boolean(getStoredSubmission()));
  }, []);

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files[0]) {
  //     setFileName(e.target.files[0].name);
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");
    setStatusMessage("");

    if (getStoredSubmission()) {
      setStatus("success");
      setStatusMessage("Thanks for submitting — we will get back to you!");
      setIsSubmitted(true);
      return;
    }

    // if (fileName) {
    //   setStatus("error");
    //   setStatusMessage(
    //     `File attachments are not supported in the online form yet. Please email ${CONTACT_INFO.email} directly with your files.`,
    //   );
    //   return;
    // }

    const trimmedName = formData.name.trim();
    const trimmedProject = formData.projectDetails.trim();
    const value = formData.emailOrPhone.trim();

    if (!trimmedName || !value || !trimmedProject) {
      setStatus("error");
      setStatusMessage(
        "Please complete all required fields before submitting.",
      );
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("error");
      setStatusMessage(
        "Contact form is not configured yet. Please email us directly.",
      );
      return;
    }

    setStatus("loading");

    const emailValue = value.includes("@") ? value : "";
    const phoneValue = emailValue ? undefined : value;

    try {
      const result = await submitContactForm(
        {
          name: trimmedName,
          email: emailValue,
          phone: phoneValue,
          message: trimmedProject,
        },
        accessKey,
      );

      if (result.success) {
        window.sessionStorage.setItem(
          HOME_CONTACT_FORM_KEY,
          JSON.stringify({ timestamp: Date.now() }),
        );
        setStatus("success");
        setStatusMessage("Thanks for submitting — we will get back to you!");
        setFormData({ name: "", emailOrPhone: "", projectDetails: "" });
        // setFileName(null);
        setIsSubmitted(true);
        return;
      }

      setStatus("error");
      setStatusMessage(
        result.message ?? "Something went wrong. Please try again later.",
      );
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="w-full bg-white px-3 py-6 font-sans sm:px-6 sm:py-10 lg:px-8">
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
                        <p className="sm:text-basic text-[18px] font-bold text-slate-800">
                          {item.label}
                        </p>
                        <a
                          href={item.href}
                          className="sm:text-md block truncate text-sm font-normal text-slate-950 transition hover:underline"
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
                isSubmitted ? (
                  <div className="flex min-h-[420px] items-center justify-center rounded-[24px] bg-[#f2f4f7] p-8 text-center shadow-2xl sm:rounded-[32px] sm:p-10 lg:min-h-[500px] lg:p-12">
                    <div className="max-w-md">
                      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl text-green-600">
                        ✓
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                        Thanks for submitting
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-slate-700 sm:text-lg">
                        We will get back to you soon.
                      </p>
                    </div>
                  </div>
                ) : (
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
                          className="sm:text-basic w-full border-b border-slate-300 bg-transparent py-1.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none sm:py-2"
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

                      {/* <div className="mt-1">
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
                      </div> */}

                      {statusMessage && (
                        <p
                          role="status"
                          className={`text-sm ${
                            status === "success"
                              ? "text-green-600"
                              : status === "error"
                                ? "text-red-600"
                                : "text-slate-600"
                          }`}
                        >
                          {statusMessage}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="mt-4 w-full cursor-pointer rounded-full border-b-4 border-black bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] py-3.5 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(0,38,136,0.4)] transition-all hover:scale-[1.01] hover:shadow-[0_16px_32px_rgba(0,56,255,0.45)] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 sm:mt-6 sm:py-4 sm:text-base"
                      >
                        {status === "loading" ? "Sending..." : "Submit Message"}
                      </button>
                    </form>
                  </div>
                )
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
