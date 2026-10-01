import { useEffect } from "react";

/**
 * OWNER RULE (Sept 30 2026): never send users to another website.
 * Any link to an outside site becomes plain text, on every page, including content added later.
 * Allowed: our own site, our own public profiles (reviews, press, social), and payment checkout.
 * Admin pages are left alone.
 */
const ALLOWED_HOSTS = [
  "safeorstolen.com",
  "trustpilot.com", "crunchbase.com", "prlog.org", "issuewire.com",
  "youtube.com", "youtu.be", "facebook.com", "x.com", "twitter.com", "linkedin.com",
  "stripe.com",
  // share buttons (people sharing OUR pages)
  "reddit.com", "whatsapp.com", "wa.me", "pinterest.com", "t.me", "threads.net", "instagram.com", "tiktok.com",
];

function isAllowed(host: string): boolean {
  const h = host.replace(/^www\./, "").toLowerCase();
  if (h === window.location.host.replace(/^www\./, "")) return true;
  return ALLOWED_HOSTS.some((d) => h === d || h.endsWith("." + d));
}

function neutralize(root: ParentNode | null) {
  if (!root || window.location.pathname.startsWith("/admin")) return;
  const links = (root as Element).tagName === "A" ? [root as HTMLAnchorElement] : Array.from(root.querySelectorAll?.("a[href]") ?? []);
  for (const a of links as HTMLAnchorElement[]) {
    const raw = a.getAttribute("href") || "";
    if (!/^https?:\/\//i.test(raw)) continue;
    try {
      if (isAllowed(new URL(raw).host)) continue;
    } catch {
      continue;
    }
    a.removeAttribute("href");
    a.removeAttribute("target");
    a.setAttribute("data-offsite", "removed");
    a.style.cursor = "text";
    a.style.textDecoration = "none";
    a.style.color = "inherit";
    a.style.pointerEvents = "none";
    a.querySelectorAll("svg.lucide-external-link").forEach((s) => s.remove());
  }
}

export function OffsiteLinkGuard() {
  useEffect(() => {
    neutralize(document);
    const mo = new MutationObserver((muts) => {
      for (const m of muts) {
        if (m.type === "attributes") neutralize(m.target as Element);
        m.addedNodes.forEach((n) => { if (n.nodeType === 1) neutralize(n as Element); });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["href"] });

    // Also block scripted pop-outs to outside sites (except allowed + share buttons on allowed hosts).
    const origOpen = window.open;
    window.open = function (url?: string | URL, ...rest: any[]) {
      try {
        if (url && !window.location.pathname.startsWith("/admin")) {
          const u = new URL(String(url), window.location.href);
          if (/^https?:$/.test(u.protocol) && !isAllowed(u.host)) return null;
        }
      } catch { /* fall through */ }
      return origOpen.call(window, url as any, ...rest);
    } as typeof window.open;

    return () => { mo.disconnect(); window.open = origOpen; };
  }, []);
  return null;
}
