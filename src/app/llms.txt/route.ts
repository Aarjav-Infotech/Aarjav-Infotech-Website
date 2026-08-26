import { getLlmsTxt } from "@/lib/markdown-content";

export async function GET() {
  return new Response(getLlmsTxt(), {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, s-maxage=300, stale-while-revalidate=86400",
      Vary: "Accept",
    },
  });
}
