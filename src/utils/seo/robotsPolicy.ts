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

  // Transactional / success / utility pages
  if (/^\/(checkout-redirect|verification-success)(\/|$)/i.test(path)) {
    return true;
  }

  // NOTE: /api is NOT noindexed — it has developer docs content and should be indexed.
  // NOTE: /youtube and /youtube/* are NOT noindexed — critical for VideoObject indexing.
  // NOTE: All public content pages (blog, state, city, comparison) are indexable.

  return false;
}

export function getRobotsContent(params: {
  pathname: string;
  /** Optional override for explicit noindex pages */
  noIndex?: boolean;
}): string {
  const effectiveNoIndex =
    typeof params.noIndex === 'boolean'
      ? params.noIndex
      : isPrivateNoIndexPath(params.pathname);

  if (effectiveNoIndex) {
    return 'noindex, nofollow';
  }

  // 2026 full directive set for maximum AI and search engine visibility
  return 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
}
