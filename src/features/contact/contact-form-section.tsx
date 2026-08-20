"use client";

import React, { useState, useRef } from "react";
import { Mail, Headphones, MapPin, Paperclip, X, FileText } from "lucide-react";

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

  const topCards = [
    {
      title: "E-mail address",
      value: "hello@youraiagency.com",
      href: "mailto:hello@youraiagency.com",
      icon: Mail,
    },
    {
      title: "Phone number",
      value: "+1 (647) 555 0172",
      href: "tel:+16475550172",
      icon: Headphones,
    },
    {
      title: "Our Location",
      value: "USA, New York – 1060 Str.",
      href: "#",
      icon: MapPin,
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
    <section className="relative w-full bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-full space-y-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <a
                key={idx}
                href={card.href}
                className="group hover:shadow-3xl flex flex-col items-center justify-center rounded-[32px] border border-white/90 bg-[#F4F4F5] px-6 py-10 text-center shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative mb-5 flex h-18 w-18 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] text-white shadow-[0_8px_18px_rgba(0,82,204,0.35)] transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-6 w-6 stroke-[2]" />
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-1.5 text-base font-medium text-slate-600">
                  {card.value}
                </p>
              </a>
            );
          })}
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          {/* LEFT COLUMN: Text & Social Pills */}
          <div className="flex flex-col justify-between self-stretch lg:col-span-6">
            <div className="space-y-6">
              {eyebrow && (
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded border-b-2 border-slate-200 bg-[#F5F5F5] px-3.5 py-1 text-xs font-bold text-[#2b2bad] shadow-sm sm:border-b-4 sm:text-[14px]">
                    <span className="h-1.5 w-1.5 rounded bg-[#2b2bad]" />
                    {eyebrow}
                  </div>
                </div>
              )}

              {/* Title */}
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[56px] lg:leading-[1.12]">
                Let&apos;s Build <br />
                Intelligent Things
              </h2>

              {/* Description */}
              <p className="max-w-[480px] text-base leading-relaxed text-slate-600">
                combining creativity, technology, and strategy to craft
                solutions that think, adapt, and inspire. Connect with us to
                turn visionary ideas into meaningful, data-driven realities.
              </p>
            </div>

            {/* Social Buttons */}
            <div className="mt-12 flex flex-wrap items-center gap-4">
              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:shadow-3xl flex items-center gap-3 rounded-full border-b-[7px] border-[#eaeaf2] bg-white py-2.5 pr-2.5 pl-6 text-base font-semibold text-slate-800 shadow-xl transition-all"
              >
                <span>Twitter / X</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0052cc] text-sm font-bold text-white shadow-sm">
                  𝕏
                </span>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:shadow-3xl flex items-center gap-3 rounded-full border-b-[7px] border-[#eaeaf2] bg-white py-2.5 pr-2.5 pl-6 text-base font-semibold text-slate-800 shadow-xl transition-all"
              >
                <span>Facebook</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0052cc] text-sm font-bold text-white shadow-sm">
                  f
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form Card */}
          <div className="relative rounded-[36px] border border-white/90 bg-[#F4F4F5] p-8 shadow-2xl sm:p-12 lg:col-span-6">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Fill this form below
            </h3>

            <form
              className="mt-8 space-y-6"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Name Field */}
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-800">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border-b border-slate-300 bg-transparent py-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-[#0052cc] focus:outline-none"
                />
              </div>

              {/* Phone / Email Field */}
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-800">
                  Your Phone
                </label>
                <input
                  type="text"
                  placeholder="Enter the e-mail"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full border-b border-slate-300 bg-transparent py-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-[#0052cc] focus:outline-none"
                />
              </div>

              {/* Project Details */}
              <div className="space-y-1">
                <label className="text-sm font-semibold text-slate-800">
                  More About The Project
                </label>
                <textarea
                  rows={3}
                  value={formData.projectDetails}
                  onChange={(e) =>
                    setFormData({ ...formData, projectDetails: e.target.value })
                  }
                  className="w-full resize-none border-b border-slate-300 bg-transparent py-2.5 text-base text-slate-900 placeholder:text-slate-400 focus:border-[#0052cc] focus:outline-none"
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

              {/* Add Attachment Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-[#0052cc]"
                >
                  <Paperclip className="h-4 w-4" />
                  <span>Add an Attachment</span>
                </button>
              </div>

              {/* Attached Files List */}
              {attachments.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {attachments.map((file, index) => (
                    <div
                      key={index}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm"
                    >
                      <FileText className="h-3.5 w-3.5 text-blue-600" />
                      <span className="max-w-[140px] truncate">
                        {file.name}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeAttachment(index)}
                        className="rounded-full p-0.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full rounded-full bg-[linear-gradient(180deg,#002688_0%,#0053FA_60%,#3BE4FF_100%)] bg-[length:200%_200%] py-4 text-base font-semibold text-white shadow-[0_12px_24px_rgba(0,82,204,0.3)] transition-all hover:bg-[#0043a8] hover:shadow-[0_14px_28px_rgba(0,82,204,0.4)] active:scale-[0.99]"
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
