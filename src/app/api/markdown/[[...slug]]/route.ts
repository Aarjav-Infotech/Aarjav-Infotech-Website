import { MARKDOWN_CONTENT_TYPE } from "@/lib/accept";
import {
  getMarkdownForPath,
  getNotFoundMarkdown,
  normalizePath,
} from "@/lib/markdown-content";

type RouteContext = {
  params: Promise<{ slug?: string[] }>;
};

function markdownHeaders(): HeadersInit {
  return {
    "Content-Type": MARKDOWN_CONTENT_TYPE,
    Vary: "Accept, Accept-Encoding",
    "Cache-Control": "public, s-maxage=60, stale-while-revalidate=86400",
  };
}

export async function GET(_req: Request, context: RouteContext) {
  const { slug = [] } = await context.params;
  const pathname = normalizePath(
    slug.length === 0 ? "/" : `/${slug.join("/")}`,
  );
  const page = getMarkdownForPath(pathname);

  if (!page) {
    return new Response(getNotFoundMarkdown(pathname), {
      status: 404,
      headers: markdownHeaders(),
    });
  }

  return new Response(page.body, {
    status: 200,
    headers: markdownHeaders(),
  });
}
