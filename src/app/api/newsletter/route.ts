import { NextResponse } from "next/server";
import { ZodError } from "zod";

import { newsletterFormSchema } from "@/features/contact/schemas/contact-schema";
import {
  createNewsletterSubscriber,
  isNewsletterSubscriber,
} from "@/server/services/newsletter-service";
import type { ApiResponse } from "@/types";

/**
 * Handles newsletter subscription sign-ups.
 */
export async function POST(
  request: Request,
): Promise<NextResponse<ApiResponse<{ id: string }>>> {
  try {
    const body: unknown = await request.json();
    const validatedData = newsletterFormSchema.parse(body);

    const alreadySubscribed = await isNewsletterSubscriber(validatedData.email);

    if (alreadySubscribed) {
      return NextResponse.json(
        {
          success: false,
          error: "Already subscribed",
          message: "This email is already subscribed to our newsletter",
        },
        { status: 409 },
      );
    }

    const subscriber = await createNewsletterSubscriber(validatedData);

    return NextResponse.json(
      {
        success: true,
        data: subscriber,
        message: "Successfully subscribed to newsletter",
      },
      { status: 201 },
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          message: error.errors.map((e) => e.message).join(", "),
        },
        { status: 400 },
      );
    }

    console.error("Newsletter subscription error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
        message: "Failed to subscribe to newsletter",
      },
      { status: 500 },
    );
  }
}
