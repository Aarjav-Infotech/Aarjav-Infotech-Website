const CDN = (process.env.NEXT_PUBLIC_CDN_URL ?? "").replace(/\/$/, "");

/** "/images/foo.svg" → CDN URL, or same path if CDN is unset (local public/). */
export function asset(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return CDN ? `${CDN}${p}` : p;
}
