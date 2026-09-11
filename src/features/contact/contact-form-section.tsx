"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Mail } from "lucide-react";

import { asset } from "@/lib/cdn";
import { submitContactForm } from "@/lib/contact";

const CONTACT_FORM_SESSION_KEY = "aarjav_contact_form_submission";
const CONTACT_FORM_TTL_MS = 24 * 60 * 60 * 1000;

function getStoredSubmission() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = window.sessionStorage.getItem(CONTACT_FORM_SESSION_KEY);
    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw) as { timestamp?: number };
    if (typeof parsed.timestamp !== "number") {
      window.sessionStorage.removeItem(CONTACT_FORM_SESSION_KEY);
      return null;
    }

    const isStillValid = Date.now() - parsed.timestamp < CONTACT_FORM_TTL_MS;
    if (!isStillValid) {
      window.sessionStorage.removeItem(CONTACT_FORM_SESSION_KEY);
      return null;
    }

    return parsed;
  } catch {
    window.sessionStorage.removeItem(CONTACT_FORM_SESSION_KEY);
    return null;
  }
}

interface ContactFormSectionProps {
  eyebrow?: string;
}

export function ContactFormSection({
  eyebrow = "Contact",
}: ContactFormSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectDetails: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // const [attachments, setAttachments] = useState<File[]>([]);
  // const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    setIsSubmitted(Boolean(getStoredSubmission()));
  }, []);

  const locations = [
    {
      country: "India",
      iconSrc: asset("/images/office.svg"),
      phoneIconSrc: asset("/images/call.svg"),
      locationIconSrc: asset("/images/location.svg"),
      phone: "+91 99649 19000 (Call & what's app)",
      phoneHref: "tel:+919964919000",
      address:
        "526, Mahek IT Park, Kshanagar, Old GIDC, Katargam, Surat, Gujarat 395004.",
    },
    {
      country: "USA",
      iconSrc: asset("/images/office.svg"),
      phoneIconSrc: asset("/images/whatsapp.svg"),
      locationIconSrc: asset("/images/location.svg"),
      phone: "+1 (551) 208-0596",
      phoneHref: "tel:+15512080596",
      address: "204 Lawson Pl, Paramus, NJ 07652, USA",
    },
  ];

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = e.target.files;

  //   if (files && files.length > 0) {
  //     setAttachments((prev) => [...prev, ...Array.from(files)]);
  //   }
  // };

  // const removeAttachment = (indexToRemove: number) => {
  //   setAttachments((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  //   if (fileInputRef.current) {
  //     fileInputRef.current.value = "";
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("idle");
    setStatusMessage("");

    if (getStoredSubmission()) {
      setIsSubmitted(true);
      setStatus("success");
      setStatusMessage("Thanks for submitting — we will get back to you!");
      return;
    }

    // if (attachments.length > 0) {
    //   setStatus("error");
    //   setStatusMessage(
    //     `File attachments are not supported in the online form yet. Please email ${CONTACT_INFO.email} directly with your files.`,
    //   );
    //   return;
    // }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("error");
      setStatusMessage(
        "Contact form is not configured yet. Please email us directly.",
      );
      return;
    }

    setStatus("loading");

    try {
      const result = await submitContactForm(
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || undefined,
          message: formData.projectDetails.trim(),
        },
        accessKey,
      );

      if (result.success) {
        window.sessionStorage.setItem(
          CONTACT_FORM_SESSION_KEY,
          JSON.stringify({ timestamp: Date.now() }),
        );
        setIsSubmitted(true);
        setStatus("success");
        setStatusMessage("Thanks for submitting — we will get back to you!");
        setFormData({ name: "", email: "", phone: "", projectDetails: "" });
        // setAttachments([]);
        // if (fileInputRef.current) {
        //   fileInputRef.current.value = "";
        // }
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
    <section className="relative w-full bg-[#FFFFFF] px-4 py-8 sm:px-6 sm:py-12 md:py-16 lg:px-8">
      <div className="mx-auto max-w-[1240px] space-y-8 sm:space-y-12">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:gap-8">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className="border-grey relative flex flex-col justify-between rounded-[24px] border-b-7 bg-[#f4f5f7] p-6 shadow-[0_12px_32px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] sm:rounded-[32px] sm:p-8 md:rounded-[36px] md:p-6"
            >
              <div>
                <div className="relative mb-4 flex size-10 items-center justify-center rounded-[15px] bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] transition-transform duration-300 hover:scale-105 sm:mb-6 sm:size-14 md:size-16">
                  <Image
                    src={loc.iconSrc}
                    alt={`${loc.country} Office`}
                    fill
                    className="object-contain p-4 drop-shadow-md"
                    priority
                  />
                </div>

                <h3 className="text-lg font-bold tracking-tight text-neutral-900 sm:text-xl md:text-2xl">
                  {loc.country}
                </h3>

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
                      className="text-base font-medium break-all transition-colors hover:text-[#0053FA]"
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
                    <span className="text-base leading-relaxed">
                      {loc.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="flex flex-col justify-between lg:col-span-6">
            <div>
              {eyebrow && (
                <div className="mb-4 inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-xs font-bold text-[#002688] shadow-xs sm:mb-6 sm:border-b-4 sm:text-[14px]">
                  <span className="size-1.5 rounded-full bg-[#002688]" />
                  {eyebrow}
                </div>
              )}

              <h2 className="font-semibold tracking-tight text-[3xl] text-neutral-950 sm:text-4xl md:text-5xl lg:text-[72px] lg:leading-[1.12]">
                Let&apos;s Build <br className="hidden sm:inline" />
                Intelligent Things
              </h2>

              <p className="mt-4 max-w-full text-sm leading-relaxed text-black sm:mt-6 sm:text-base sm:leading-relaxed">
                combining creativity, technology, and strategy to craft
                solutions that think, adapt, and inspire. Connect with us to
                turn visionary ideas into meaningful, data-driven realities.
              </p>
            </div>

            <div className="mt-8 space-y-3 sm:mt-12 sm:space-y-4 lg:mt-16">
              <a
                href="mailto:business@aarjavinfotech.com"
                className="border-grey inline-flex w-full max-w-full items-center justify-between rounded-full border-b-7 bg-[#f4f5f7] py-2.5 pr-3 pl-4 shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition-all hover:scale-[1.01] hover:shadow-[0_12px_24px_rgba(0,0,0,0.1)] sm:max-w-[340px] sm:py-3 sm:pr-3.5 sm:pl-6"
              >
                <span className="truncate text-xs font-semibold text-neutral-900 sm:text-lg">
                  business@aarjavinfotech.com
                </span>
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(180deg,#002688_0%,#0053FA_100%)] text-white shadow-xs">
                  <Mail className="size-3.5" />
                </span>
              </a>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="border-grey inline-flex min-w-[130px] flex-1 items-center justify-between rounded-full border-b-7 bg-[#f4f5f7] py-2 pr-2.5 pl-4 shadow-[0_8px_18px_rgba(0,0,0,0.06)] transition-all hover:scale-[1.01] sm:min-w-[155px] sm:flex-initial sm:py-2.5 sm:pr-3 sm:pl-5"
                >
                  <span className="text-xs font-semibold text-neutral-900 sm:text-lg">
                    Twitter / X
                  </span>
                  <span className="flex size-6 items-center justify-center rounded-full bg-[linear-gradient(180deg,#002688_0%,#0053FA_100%)] text-xs font-bold text-white shadow-xs sm:size-7">
                    𝕏
                  </span>
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="border-grey inline-flex min-w-[130px] flex-1 items-center justify-between rounded-full border-b-7 bg-[#f4f5f7] py-2 pr-2.5 pl-4 shadow-[0_8px_18px_rgba(0,0,0,0.06)] transition-all hover:scale-[1.01] sm:min-w-[155px] sm:flex-initial sm:py-2.5 sm:pr-3 sm:pl-5"
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

          <div className="border-grey relative rounded-[24px] border-b-7 bg-[#F4F4F5] p-6 shadow-[0_16px_40px_rgba(0,0,0,0.06)] sm:rounded-[32px] sm:p-8 md:rounded-[36px] md:p-10 lg:col-span-6 lg:p-12">
            {isSubmitted ? (
              <div className="flex min-h-[420px] items-center justify-center p-4 text-center">
                <div className="max-w-md">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl text-green-600">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
                    Thanks for submitting
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-700 sm:text-lg">
                    We will get back to you soon.
                  </p>
                </div>
              </div>
            ) : (
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-1">
                  <label
                    htmlFor="contact-name"
                    className="text-sm font-semibold text-slate-800"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full border-b border-slate-300 bg-transparent py-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-[#0052cc] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="contact-email"
                    className="text-sm font-semibold text-slate-800"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full border-b border-slate-300 bg-transparent py-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-[#0052cc] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="contact-phone"
                    className="text-sm font-semibold text-slate-800"
                  >
                    Your Phone
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number (optional)"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full border-b border-slate-300 bg-transparent py-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-[#0052cc] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="contact-message"
                    className="text-sm font-semibold text-slate-800"
                  >
                    More About The Project
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={3}
                    value={formData.projectDetails}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        projectDetails: e.target.value,
                      })
                    }
                    required
                    className="w-full resize-none border-b border-slate-300 bg-transparent py-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-[#0052cc] focus:outline-none"
                  />
                </div>

                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {/* <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                  multiple
                /> */}

                {/* <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex cursor-pointer items-center gap-2 text-xs font-bold text-neutral-900 transition-opacity hover:opacity-80 sm:text-sm"
                  >
                    <Paperclip className="size-3.5 shrink-0 rotate-45 sm:size-4" />
                    <span>Add an Attachment</span>
                  </button>
                </div> */}

                {/* {attachments.length > 0 && (
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
                )} */}

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

                <div className="pt-4 sm:pt-6">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full rounded-full bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] py-4 text-base font-semibold text-white shadow-[0_12px_24px_rgba(0,82,204,0.3)] transition-all hover:bg-[#0043a8] hover:shadow-[0_14px_28px_rgba(0,82,204,0.4)] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "loading" ? "Sending..." : "Submit Message"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
