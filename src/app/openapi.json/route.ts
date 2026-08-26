import { getOpenApiDocument } from "@/lib/mcp";

export async function GET() {
  return Response.json(getOpenApiDocument(), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, s-maxage=300, stale-while-revalidate=86400",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
