import { useEffect } from 'react';
import { useSafeLocation } from '@/hooks/useSafeLocation';

/**
 * Single-owner enforcement for canonical + description.
 *
 * PageSEO (via SEOHead) is the sole owner of <link rel="canonical"> and
 * <meta name="description">. The static shell in index.html ships fallback
 * copies so non-JS crawlers get metadata; once the page-level tags are in the
 * DOM the unmanaged fallbacks are removed so the hydrated document never has
 * more than one of either.
 *
 * In dev it additionally logs any remaining duplicate.
 */
const MANAGED = '[data-rh="true"], [data-helmet-shim="true"]';

const prune = (selector: string) => {
  const all = Array.from(document.querySelectorAll<HTMLElement>(selector));
  if (all.length < 2) return all.length;
  const managed = all.filter((el) => el.matches(MANAGED));
  if (managed.length === 0) return all.length;
  // Keep the last managed tag, drop everything else.
  const keep = managed[managed.length - 1];
  all.forEach((el) => {
    if (el !== keep) el.parentNode?.removeChild(el);
  });
  return 1;
};

export const SEODuplicateGuard = () => {
  const location = useSafeLocation();
  const pathname = location?.pathname || '/';

  useEffect(() => {
    let cancelled = false;

    const run = () => {
      if (cancelled) return;
      const canonicals = prune('link[rel="canonical"]');
      const descriptions = prune('meta[name="description"]');

      if (import.meta.env.DEV) {
        if (canonicals > 1) {
          console.error(`[SEO] ${pathname}: ${canonicals} canonical tags in DOM (expected 1)`);
        }
        if (descriptions > 1) {
          console.error(`[SEO] ${pathname}: ${descriptions} meta description tags in DOM (expected 1)`);
        }
      }
    };

    const timers = [
      window.setTimeout(run, 60),
      window.setTimeout(run, 400),
      window.setTimeout(run, 1500),
    ];

    return () => {
      cancelled = true;
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [pathname]);

  return null;
};

export default SEODuplicateGuard;
