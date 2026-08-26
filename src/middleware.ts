import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { appendVaryAccept, preferredType } from "@/lib/accept";

function isStaticAsset(pathname: string): boolean {
  // .md is negotiated content, not a static file
  if (pathname.endsWith(".md")) return false;
  return /\.[a-zA-Z0-9]+$/.test(pathname);
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Explicit .md sibling URLs always serve Markdown (before static-asset skip).
  if (pathname.endsWith(".md")) {
    const url = req.nextUrl.clone();
    const withoutMd = pathname.slice(0, -3);
    const canonicalPath =
      withoutMd === "" || withoutMd === "/index" ? "/" : withoutMd;
    url.pathname =
      canonicalPath === "/" ? "/api/markdown" : `/api/markdown${canonicalPath}`;
    const rewritten = NextResponse.rewrite(url);
    appendVaryAccept(rewritten.headers);
    rewritten.headers.set("Link", `<${canonicalPath}>; rel="canonical"`);
    return rewritten;
  }

  if (
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/.well-known/") ||
    pathname === "/llms.txt" ||
    pathname === "/openapi.json" ||
    pathname === "/mcp" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/site.webmanifest" ||
    isStaticAsset(pathname)
  ) {
    const passthrough = NextResponse.next();
    appendVaryAccept(passthrough.headers);
    return passthrough;
  }

  const acceptHeader = req.headers.get("accept");
  const chosen = preferredType(acceptHeader);

  if (chosen === "text/markdown") {
    const url = req.nextUrl.clone();
    url.pathname =
      pathname === "/" ? "/api/markdown" : `/api/markdown${pathname}`;
    const rewritten = NextResponse.rewrite(url);
    appendVaryAccept(rewritten.headers);
    rewritten.headers.append(
      "Link",
      `<${pathname === "/" ? "/index.md" : `${pathname}.md`}>; rel="alternate"; type="text/markdown"`,
    );
    return rewritten;
  }

  if (chosen === null && acceptHeader) {
    return new Response(
      "Not Acceptable\n\nAvailable: text/html, text/markdown\n",
      {
        status: 406,
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          Vary: "Accept",
        },
      },
    );
  }

  const res = NextResponse.next();
  // Include Next.js RSC vary tokens plus Accept so CDNs key markdown vs HTML correctly.
  res.headers.set(
    "Vary",
    "Accept, Accept-Encoding, rsc, next-router-state-tree, next-router-prefetch, next-router-segment-prefetch",
  );
  const mdPath = pathname === "/" ? "/index.md" : `${pathname}.md`;
  res.headers.append(
    "Link",
    `<${mdPath}>; rel="alternate"; type="text/markdown", </llms.txt>; rel="describedby"`,
  );
  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
