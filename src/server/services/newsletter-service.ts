import type { NewsletterFormValues } from "@/features/contact/schemas/contact-schema";
import { prisma } from "@/lib/prisma";

/**
 * Subscribes an email address to the newsletter.
 */
export async function createNewsletterSubscriber(
  data: NewsletterFormValues,
): Promise<{ id: string }> {
  const subscriber = await prisma.newsletterSubscriber.create({
    data: { email: data.email },
    select: { id: true },
  });

  return subscriber;
}

/**
 * Checks if an email is already subscribed to the newsletter.
 */
export async function isNewsletterSubscriber(email: string): Promise<boolean> {
  const existing = await prisma.newsletterSubscriber.findUnique({
    where: { email },
    select: { id: true },
  });

  return existing !== null;
}
