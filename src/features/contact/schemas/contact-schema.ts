import { z } from "zod";

/** Zod schema for contact form validation. */
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be at most 100 characters")
    .trim(),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(255, "Email must be at most 255 characters")
    .trim()
    .toLowerCase(),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(200, "Subject must be at most 200 characters")
    .trim(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be at most 5000 characters")
    .trim(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

/** Zod schema for newsletter subscription validation. */
export const newsletterFormSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(255, "Email must be at most 255 characters")
    .trim()
    .toLowerCase(),
});

export type NewsletterFormValues = z.infer<typeof newsletterFormSchema>;
