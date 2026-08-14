import { useEffect } from 'react';
import { useSafeLocation } from '@/hooks/useSafeLocation';

/**
 * Dev-only regression guard.
 * Canonical links and description metas must have exactly one owner (PageSEO).
 * If a page ever ends up with more than one in the hydrated DOM, this logs it.
 */
export const SEODuplicateGuard = () => {
  const location = useSafeLocation();
  const pathname = location?.pathname || '/';

  useEffect(() => {
    if (!import.meta.env.DEV) return;

    const check = () => {
      const canonicals = document.querySelectorAll('link[rel="canonical"]').length;
      const descriptions = document.querySelectorAll('meta[name="description"]').length;

      if (canonicals > 1) {
        console.error(`[SEO] ${pathname}: ${canonicals} canonical tags in DOM (expected 1)`);
      }
      if (descriptions > 1) {
        console.error(`[SEO] ${pathname}: ${descriptions} meta description tags in DOM (expected 1)`);
      }
    };

    const timer = window.setTimeout(check, 1200);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default SEODuplicateGuard;
