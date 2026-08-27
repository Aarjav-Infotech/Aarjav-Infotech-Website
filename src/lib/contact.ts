import { CONTACT_INFO } from "./constants";

/** Full one-line postal address for display and agent markdown. */
export function formatContactAddress(
  info: typeof CONTACT_INFO = CONTACT_INFO,
): string {
  return info.address;
}

/** `tel:` href with spaces stripped for Indian/international numbers. */
export function contactPhoneHref(phone: string = CONTACT_INFO.phone): string {
  return `tel:${phone.replace(/[\s()-]/g, "")}`;
}

/** Google Maps search link for the business address. */
export function contactMapsHref(
  info: typeof CONTACT_INFO = CONTACT_INFO,
): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(info.address)}`;
}

export const WEB3FORMS_SUBMIT_URL = "https://api.web3forms.com/submit";

export type ContactFormPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export type Web3FormsResponse = {
  success: boolean;
  message?: string;
};

/**
 * Submit the public contact form via Web3Forms.
 * @see https://docs.web3forms.com/
 */
export async function submitContactForm(
  payload: ContactFormPayload,
  accessKey: string,
): Promise<Web3FormsResponse> {
  const response = await fetch(WEB3FORMS_SUBMIT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: "New contact inquiry — Aarjav Infotech website",
      from_name: "Aarjav Infotech Website",
      name: payload.name,
      email: payload.email,
      phone: payload.phone ?? "",
      message: payload.message,
      botcheck: false,
    }),
  });

  const json = (await response.json()) as Web3FormsResponse;

  if (!response.ok) {
    return {
      success: false,
      message: json.message ?? "Unable to send your message. Please try again.",
    };
  }

  return json;
}
