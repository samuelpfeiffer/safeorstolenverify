import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * GlobalSEOProvider — Site-wide SEO meta tags and domain enforcement
 *
 * 2026 Implementation:
 * ✅ Canonical domain enforcement (www → non-www, HTTP → HTTPS)
 * ✅ PWA meta tags (apple-mobile-web-app-capable)
 * ✅ DNS prefetch for performance
 * ✅ Preconnect to critical third-party origins
 * ✅ Theme color for Chrome/Safari address bar
 * ✅ Referrer policy for privacy
 * ✅ Global AI crawler permissions (reinforces robots.txt)
 */
export const GlobalSEOProvider: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentUrl = window.location.href;

      // Force www → non-www
      if (currentUrl.includes('://www.safeorstolen.com')) {
        window.location.replace(currentUrl.replace('://www.safeorstolen.com', '://safeorstolen.com'));
        return;
      }

      // Force HTTP → HTTPS
      if (currentUrl.startsWith('http://safeorstolen.com')) {
        window.location.replace(currentUrl.replace('http://safeorstolen.com', 'https://safeorstolen.com'));
        return;
      }
    }
  }, []);

  return (
    <Helmet>
      {/* ─── Global Site Identity ─────────────────────── */}
      <meta name="author" content="SafeOrStolen" />
      <meta name="application-name" content="SafeOrStolen" />
      <meta name="generator" content="SafeOrStolen Platform 2026" />

      {/* ─── PWA / Mobile Web App ─────────────────────── */}
      <meta name="apple-mobile-web-app-title" content="SafeOrStolen" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#0f172a" />
      <meta name="msapplication-TileColor" content="#0f172a" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      {/* ─── Domain Preferences ───────────────────────── */}
      <meta name="preferred-domain" content="safeorstolen.com" />
      <meta name="canonical-domain" content="https://safeorstolen.com" />

      {/* ─── Privacy & Security ───────────────────────── */}
      <meta name="referrer" content="strict-origin-when-cross-origin" />

      {/* ─── Format Detection ─────────────────────────── */}
      <meta name="format-detection" content="telephone=no" />

      {/* ─── DNS Prefetch ─────────────────────────────── */}
      <link rel="dns-prefetch" href="https://js.stripe.com" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://img.youtube.com" />
      <link rel="dns-prefetch" href="https://www.youtube.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://www.trustpilot.com" />

      {/* ─── Preconnect ───────────────────────────────── */}
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://img.youtube.com" />

      {/* ─── Favicon & Icons ──────────────────────────── */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" href="/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png" />
      <link rel="manifest" href="/manifest.json" />

      {/* Crawler access is granted in robots.txt. Bot-specific robots metas are
          intentionally NOT emitted: they override the generic <meta name="robots">
          for that crawler and would drop max-snippet/max-image-preview. */}


      {/* ─── Structured Data: SiteNavigationElement ──── */}
      {/* Helps AI understand site architecture */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SiteLinksSearchBox",
          "url": "https://safeorstolen.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://safeorstolen.com/verify?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </Helmet>
  );
};
