import { NextResponse } from "next/server";
import { ZodError } from "zod";

import { contactFormSchema } from "@/features/contact/schemas/contact-schema";
import { createContactInquiry } from "@/server/services/contact-service";
import type { ApiResponse } from "@/types";

/**
 * Handles contact form submissions and persists them to the database.
 */
export async function POST(
  request: Request,
): Promise<NextResponse<ApiResponse<{ id: string }>>> {
  try {
    const body: unknown = await request.json();
    const validatedData = contactFormSchema.parse(body);

    const inquiry = await createContactInquiry(validatedData);

    return NextResponse.json(
      {
        success: true,
        data: inquiry,
        message: "Contact inquiry submitted successfully",
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

    console.error("Contact form submission error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
        message: "Failed to submit contact inquiry",
      },
      { status: 500 },
    );
  }
}
