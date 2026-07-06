"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/features/contact/schemas/contact-schema";
import { API_ROUTES } from "@/lib/constants";
import type { ApiResponse } from "@/types";

interface ContactFormProps {
  className?: string;
}

/**
 * Reusable contact form with Zod validation and API submission.
 */
export function ContactForm({ className }: ContactFormProps) {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = useCallback(
    async (data: ContactFormValues): Promise<void> => {
      setSubmitStatus("idle");

      try {
        const response = await fetch(API_ROUTES.contact, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        const result = (await response.json()) as ApiResponse;

        if (!response.ok || !result.success) {
          setSubmitStatus("error");
          return;
        }

        setSubmitStatus("success");
        reset();
      } catch {
        setSubmitStatus("error");
      }
    },
    [reset],
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={className}
      noValidate
      aria-label="Contact form"
    >
      <div className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              autoComplete="name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              {...register("name")}
            />
            {errors.name && (
              <p
                id="name-error"
                className="text-destructive text-sm"
                role="alert"
              >
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email")}
            />
            {errors.email && (
              <p
                id="email-error"
                className="text-destructive text-sm"
                role="alert"
              >
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            type="text"
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "subject-error" : undefined}
            {...register("subject")}
          />
          {errors.subject && (
            <p
              id="subject-error"
              className="text-destructive text-sm"
              role="alert"
            >
              {errors.subject.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            rows={5}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register("message")}
          />
          {errors.message && (
            <p
              id="message-error"
              className="text-destructive text-sm"
              role="alert"
            >
              {errors.message.message}
            </p>
          )}
        </div>

        {submitStatus === "success" && (
          <p
            className="text-sm text-green-600 dark:text-green-400"
            role="status"
          >
            Thank you! Your message has been sent successfully.
          </p>
        )}

        {submitStatus === "error" && (
          <p className="text-destructive text-sm" role="alert">
            Something went wrong. Please try again later.
          </p>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" aria-hidden="true" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      </div>
    </form>
  );
}
