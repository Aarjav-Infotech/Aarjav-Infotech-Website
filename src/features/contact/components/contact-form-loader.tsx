"use client";

import dynamic from "next/dynamic";

import { LoadingSkeleton } from "@/components/common/loading-skeleton";

const ContactForm = dynamic(
  () =>
    import("@/features/contact/components/contact-form").then(
      (mod) => mod.ContactForm,
    ),
  {
    loading: () => <LoadingSkeleton variant="form" />,
    ssr: false,
  },
);

/**
 * Client-side lazy loader for the contact form.
 */
export function ContactFormLoader() {
  return <ContactForm />;
}
