/**
 * Central robots policy for SafeOrStolen.
 *
 * Goal:
 * - Public marketing + SEO pages: index, follow
 * - Private/account/admin/utility pages: noindex, nofollow
 *
 * IMPORTANT: This does not control server-side indexing (headers).
 * It only controls the <meta name="robots"> tag.
 */

export function isPrivateNoIndexPath(pathname: string): boolean {
  const path = (pathname || '/').split('?')[0].split('#')[0];

  // Auth/account/admin/internal areas
  if (
    /^\/(account|auth|login|signup|dashboard|admin)(\/|$)/i.test(path) ||
    /^\/(profile|settings|search-history|receipts|analytics)(\/|$)/i.test(path)
  ) {
    return true;
  }

  // Transactional / success / utility pages that should not be indexed
  if (/^\/(checkout-redirect|verification-success)(\/|$)/i.test(path)) {
    return true;
  }

  return false;
}

export function getRobotsContent(params: {
  pathname: string;
  /** Optional override (e.g. 404 page, explicit noindex use-case) */
  noIndex?: boolean;
}): string {
  const effectiveNoIndex =
    typeof params.noIndex === 'boolean' ? params.noIndex : isPrivateNoIndexPath(params.pathname);

  return effectiveNoIndex ? 'noindex, nofollow' : 'index, follow';
}
