import { resolveLegacyRedirect } from "@/utils/legacyRedirectMap";

/**
 * Oct 15 2026: clean blog_posts.content before it is rendered.
 *
 * Many published posts were stored as a whole HTML document wrapped in a ```html fence:
 * DOCTYPE, <head>, <title>, <meta>, <style> and a <link rel="canonical"> pointing at
 * https://www.safeorstolen.com/blog/<a slug that never existed>. The server render kept those
 * tags inside <body>, so the HTML Google reads carried a second title, description and a
 * conflicting canonical on top of the page's own. Older posts also linked to unfilled template
 * placeholders ("[SAFEORSTOLEN_APP_IOS_LINK]", "[Your iOS App Store Link]") that resolved to
 * /blog/[...] URLs, and to App Store / Play Store listings that do not exist.
 *
 * This keeps only the article body and rewrites links to final URLs. The output is still
 * sanitised afterwards (DOMPurify in the browser, the strip pass on the server).
 */

/** Where every "get the app" link goes. There is no native store listing; /app is the install page. */
export const APP_INSTALL_PATH = "/app";

const SITE_HOST = /^https?:\/\/(?:www\.)?safeorstolen\.com(?=\/|$|[?#])/i;
const STORE_LINK =
  /^https?:\/\/(?:apps\.apple\.com|itunes\.apple\.com|play\.google\.com)\//i;

/** True for unfilled template values such as "[Your iOS App Store Link]" (raw or URL-encoded). */
export function isPlaceholderLink(value: string): boolean {
  let v = value.trim();
  try {
    v = decodeURIComponent(v);
  } catch {
    // keep the raw value
  }
  const last = v.replace(/^.*\//, "");
  if (/^\[[^\]]*\]$/.test(last) || /^\{\{[^}]*\}\}$/.test(last)) return true;
  // "Your iOS App Store Link" written without brackets: plain words, not a URL or path.
  return !/[/.:#]/.test(v) && /^(your|insert)\s/i.test(v);
}

/** Rewrite one href to the URL a crawler should follow, or null to drop the link. */
export function normalizeBlogHref(href: string): string | null {
  const raw = href.trim();
  if (!raw) return null;
  if (isPlaceholderLink(raw)) return APP_INSTALL_PATH;
  if (STORE_LINK.test(raw)) return APP_INSTALL_PATH;
  if (/^(#|mailto:|tel:)/i.test(raw)) return raw;

  let internal: string | null = null;
  if (SITE_HOST.test(raw)) internal = raw.replace(SITE_HOST, "") || "/";
  else if (raw.startsWith("/") && !raw.startsWith("//")) internal = raw;

  if (internal === null) {
    // Anything that is not an absolute web URL ("Your link", "javascript:" ...) is not a link.
    return /^https?:\/\//i.test(raw) ? raw : null;
  }

  const [, path = "/", rest = ""] = internal.match(/^([^?#]*)(.*)$/) ?? [];
  const target = resolveLegacyRedirect(path || "/");
  return `${target ?? (path || "/")}${target ? "" : rest}`;
}

export function normalizeBlogHtml(raw: string | null | undefined): string {
  let html = (raw ?? "").trim();
  if (!html) return "";

  // Markdown code fences around the whole document (```html ... ```), and any stray fence lines.
  html = html.replace(/^\s*```[a-z]*\s*$/gim, "");

  // A full HTML document: keep only what is inside <body>.
  const bodyStart = html.search(/<body\b[^>]*>/i);
  if (bodyStart !== -1) {
    html = html.slice(bodyStart).replace(/^<body\b[^>]*>/i, "");
    const bodyEnd = html.search(/<\/body\s*>/i);
    if (bodyEnd !== -1) html = html.slice(0, bodyEnd);
  } else {
    html = html.replace(/<head\b[\s\S]*?<\/head\s*>/gi, "");
  }

  html = html
    .replace(/<!doctype[^>]*>/gi, "")
    .replace(/<\/?(?:html|head|body)\b[^>]*>/gi, "")
    .replace(/<(title|style|script|noscript)\b[\s\S]*?<\/\1\s*>/gi, "")
    .replace(/<(?:meta|link|base)\b[^>]*>/gi, "");

  // Rewrite or drop links.
  html = html.replace(
    /<a\b([^>]*?)\shref\s*=\s*("([^"]*)"|'([^']*)')([^>]*)>([\s\S]*?)<\/a\s*>/gi,
    (
      _m,
      before: string,
      _q: string,
      dq: string | undefined,
      sq: string | undefined,
      after: string,
      text: string,
    ) => {
      const next = normalizeBlogHref(dq ?? sq ?? "");
      if (next === null) return text;
      return `<a${before} href="${next.replace(/"/g, "&quot;")}"${after}>${text}</a>`;
    },
  );

  // Unfilled placeholders left in the text ("[Your Name]") read as broken copy; drop them.
  html = html
    .replace(/\[Your (?:Name|Company(?: Name)?)\]/g, "SafeOrStolen")
    .replace(/\[(?:SAFEORSTOLEN_[A-Z_]+|Your [^\]<]{2,40})\]/g, "");

  return html.trim();
}
