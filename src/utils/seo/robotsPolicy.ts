/**
 * Central robots policy for SafeOrStolen.
 *
 * 2026 Standards:
 * ─────────────────────────────────────────────────────────────────
 * ✅ Public marketing + SEO pages: index, follow + rich snippet directives
 * ✅ max-image-preview:large — required for Google AI Overviews image display
 * ✅ max-snippet:-1 — unlimited snippet length for featured snippets & AI
 * ✅ max-video-preview:-1 — video previews in AI Overviews
 * ✅ Private/account/admin/utility pages: noindex, nofollow
 * ─────────────────────────────────────────────────────────────────
 * IMPORTANT: This controls only the <meta name="robots"> tag.
 * Server-side robots.txt controls actual crawler access.
 */

export function isPrivateNoIndexPath(pathname: string): boolean {
  const path = (pathname || '/').split('?')[0].split('#')[0];

  // Auth / account / admin / internal areas
  if (
    /^\/(account|auth|login|signup|dashboard|admin)(\/|$)/i.test(path) ||
    /^\/(profile|settings|search-history|receipts|analytics)(\/|$)/i.test(path)
  ) {
    return true;
  }

  // Oct 2 2026: /verify (main check page + dashboard) is now indexed; it's the site's most important page.
  if (/^\/trust-engine$/i.test(path)) {
    return true;
  }

  // /app is a public landing page; /app/* sub-paths are app UI / legacy redirects
  if (/^\/app\//i.test(path)) {
    return true;
  }

  // Mobile app shell screens
  if (/^\/mobile-(dashboard|onboarding|settings|verify)(\/|$)/i.test(path)) {
    return true;
  }

  // Transactional / success / utility pages
  if (/^\/(checkout-redirect|verification-success|payment-success)(\/|$)/i.test(path)) {
    return true;
  }

  // Nov 27 2026: soft-404 audit. These dynamic pages render a 200 for ANY id (made-up ids included):
  // /verified/<id> shows "No Report Found" for every id and badges on other sites keep feeding Google
  // new ids; /item, /shared and /go come back from the server with an empty body. They are per-user
  // results or click-through links, not search pages, so keep them out of the index.
  if (/^\/(verified|item|shared|go)\//i.test(path)) {
    return true;
  }

  // Nov 27 2026: duplicate audit. App/API endpoints that serve an empty app shell on GET (200, no title).
  if (/^\/(my-items|certificate-api|verify-api|plate-owner-api|reports-api)$/i.test(path) || /^\/\.lovable\//.test(path)) {
    return true;
  }

  // Nov 27 2026: "coming soon" page; Google treats "not available yet" pages as soft 404s.
  if (/^\/sms-verify$/i.test(path)) {
    return true;
  }

  // NOTE: /api is NOT noindexed — it has developer docs content and should be indexed.
  // NOTE: All public content pages (blog, state, city, comparison) are indexable.

  return false;
}


export function getRobotsContent(params: {
  pathname: string;
  /** Optional override for explicit noindex pages */
  noIndex?: boolean;
}): string {
  const path = (params.pathname || '/').split('?')[0].split('#')[0];

  // Proof records contain user data: never index, but links stay crawlable.
  if (/^\/proof\/[^/]+/i.test(path)) {
    return 'noindex, follow';
  }

  // Only an explicit `true` can force noindex. A default `false` from a caller
  // must NOT override the path policy, or private routes get indexed.
  const effectiveNoIndex =
    params.noIndex === true || isPrivateNoIndexPath(params.pathname);

  if (effectiveNoIndex) {
    return 'noindex, nofollow';
  }

  // 2026 full directive set for maximum AI and search engine visibility
  return 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
}

