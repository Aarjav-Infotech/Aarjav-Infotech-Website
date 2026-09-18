/** Query keys Google should never treat as separate indexable pages. */
const DROP_QUERY_KEYS = new Set(["q"]);

/** Public origin Google should index. No www, no trailing slash. */
export const CANONICAL_ORIGIN = "https://aarjavinfotech.com";

/**
 * Strip trailing slashes from a public origin.
 * `https://aarjavinfotech.com/` + `/about` otherwise becomes a double-slash URL.
 */
export function normalizeOrigin(value: string): string {
  return value.trim().replace(/\/+$/, "");
}

/** Build an absolute canonical URL from a normalized origin and a site path. */
export function joinOriginAndPath(origin: string, path = ""): string {
  const base = normalizeOrigin(origin);
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

function isPreviewOrLocalHost(hostname: string): boolean {
  return (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname.endsWith(".amplifyapp.com") ||
    hostname.endsWith(".cloudfront.net")
  );
}

/**
 * Returns a new URL when the request should 301 for SEO:
 * www → apex, collapse `//` paths, drop leftover sitelinks `?q=`.
 *
 * Amplify custom-domain redirects must also send www → apex. If Amplify still
 * 302s apex → www, this host redirect will loop — flip Amplify first.
 */
export function getSeoRedirectUrl(
  current: URL,
  canonicalOrigin = CANONICAL_ORIGIN,
): URL | null {
  const canonical = new URL(normalizeOrigin(canonicalOrigin));
  const next = new URL(current.href);
  let changed = false;

  if (
    !isPreviewOrLocalHost(next.hostname) &&
    next.hostname === `www.${canonical.hostname}`
  ) {
    next.protocol = "https:";
    next.hostname = canonical.hostname;
    next.port = "";
    changed = true;
  }

  const collapsed = next.pathname.replace(/\/{2,}/g, "/") || "/";
  if (collapsed !== next.pathname) {
    next.pathname = collapsed;
    changed = true;
  }

  for (const key of [...next.searchParams.keys()]) {
    if (DROP_QUERY_KEYS.has(key)) {
      next.searchParams.delete(key);
      changed = true;
    }
  }

  return changed ? next : null;
}
