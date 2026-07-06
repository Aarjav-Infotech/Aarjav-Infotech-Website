import type { ContactFormValues } from "@/features/contact/schemas/contact-schema";
import { prisma } from "@/lib/prisma";

/**
 * Persists a contact inquiry to the database.
 */
export async function createContactInquiry(
  data: ContactFormValues,
): Promise<{ id: string }> {
  const inquiry = await prisma.contactInquiry.create({
    data: {
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
    },
    select: { id: true },
  });

  return inquiry;
}
