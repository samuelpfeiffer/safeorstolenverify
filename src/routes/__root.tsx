import React, { Suspense, useEffect, useState } from "react";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  redirect,
  Scripts,
  useLocation,
  useRouter,
} from "@tanstack/react-router";
import { resolveLegacyRedirect } from "@/utils/legacyRedirectMap";
import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/sonner";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/core/providers/ThemeProvider";
import { AuthProvider } from "@/lib/auth";
import { PWAProvider } from "@/core/providers/PWAProvider";
import TopNavigation from "@/components/TopNavigation";
import { SOSFooter } from "@/components/layout/SOSFooter";
import { PWAInstallManager } from "@/mobile/components/PWAInstallManager";
import { MobileNavigation } from "@/mobile/components/MobileNavigation";
import { CriticalResourceLoader } from "@/components/optimized/CriticalResourceLoader";
import { GA4Provider } from "@/components/seo/GA4Provider";
import { MasterSEO } from "@/components/seo/MasterSEO";
import { SEODuplicateGuard } from "@/components/seo/SEODuplicateGuard";
import { AppDownloadBot } from "@/components/pwa/AppDownloadBot";
import { RedirectHandler } from "@/components/routing/RedirectHandler";
import { OffsiteLinkGuard } from "@/components/routing/OffsiteLinkGuard";
import ScrollRestoration from "@/components/ScrollRestoration";
import { AIFloatingChat } from "@/components/ai/AIFloatingChat";
import NotFound from "@/pages/NotFound";
import { reportLovableError } from "@/lib/lovable-error-reporting";
import appCss from "../styles.css?url";
import interLatinWoff2 from "@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url";

// Lazy load SEO components - NOT needed for initial render/LCP
const GlobalAISEO = React.lazy(() => import("@/components/seo/GlobalAISEO").then((m) => ({ default: m.GlobalAISEO })));
const DomainAuthorityBooster = React.lazy(() => import("@/components/seo/DomainAuthorityBooster").then((m) => ({ default: m.DomainAuthorityBooster })));
const EEATSignals = React.lazy(() => import("@/components/seo/EEATSignals").then((m) => ({ default: m.EEATSignals })));
const AdvancedSchemaGenerator = React.lazy(() => import("@/components/seo/AdvancedSchemaGenerator").then((m) => ({ default: m.AdvancedSchemaGenerator })));
const TrafficBooster = React.lazy(() => import("@/components/traffic/TrafficBooster").then((m) => ({ default: m.TrafficBooster })));
const FloatingCTA = React.lazy(() => import("@/components/marketing/FloatingCTA").then((m) => ({ default: m.FloatingCTA })));

// ---- JSON-LD blocks ported from the pre-migration index.html ----

const webApplicationJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "SafeOrStolen",
  url: "https://safeorstolen.com",
  description:
    "Check secondhand-item identifiers using SafeOrStolen reports, public web results, and AI analysis. A free account includes two checks.",
  applicationCategory: "SecurityApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "2 free verifications, then $3.99/check or $14.99/month unlimited",
  },
  creator: {
    "@type": "Organization",
    name: "SafeOrStolen",
    url: "https://safeorstolen.com",
    logo: "https://safeorstolen.com/sos-logo.png",
    foundingDate: "2017-07-20",
    address: { "@type": "PostalAddress", addressLocality: "Peoria", addressRegion: "AZ", addressCountry: "US" },
    sameAs: [
      "https://www.crunchbase.com/organization/safe-or-stolen",
      "https://www.trustpilot.com/review/safeorstolen.com",
      "https://biz.prlog.org/SafeOrStolen/",
      "https://www.facebook.com/safeorstolen/",
      "https://www.youtube.com/@safeorstolen",
      "https://x.com/safeorstolen",
    ],
  },
});

const speakableJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "SafeOrStolen — Instant Stolen Item Verification",
  speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", ".speakable-summary"] },
  url: "https://safeorstolen.com",
});

const organizationJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SafeOrStolen",
  url: "https://safeorstolen.com",
  logo: "https://safeorstolen.com/sos-logo.png",
  foundingDate: "2017-07-20",
  description:
    "SafeOrStolen is a stolen-item verification hub for buyers and sellers of used goods — check phones (IMEI), vehicles (VIN and license plate), electronics, power tools and other serial-numbered items, firearms, and bicycles in one place, get a Proof of Clean Purchase record, and use it on the web or as an installable web app.",
  address: { "@type": "PostalAddress", addressLocality: "Peoria", addressRegion: "AZ", addressCountry: "US" },
  sameAs: [
    "https://www.crunchbase.com/organization/safe-or-stolen",
    "https://www.trustpilot.com/review/safeorstolen.com",
    "https://biz.prlog.org/SafeOrStolen/",
    "https://www.facebook.com/safeorstolen/",
    "https://www.youtube.com/@safeorstolen",
    "https://x.com/safeorstolen",
  ],
  knowsAbout: [
    "IMEI verification",
    "VIN lookup",
    "stolen property verification",
    "serial number check",
    "secondhand marketplace fraud prevention",
    "SafeOrStolen's reports",
    "public web results",
    "secondhand vehicle checks",
    "secondhand phone checks",
    "firearm serial checks",
    "BikeIndex records",
    "secondhand-item verification workflows",
  ],
});

const coreGraphJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://safeorstolen.com/#organization",
      name: "SafeOrStolen",
      url: "https://safeorstolen.com",
      logo: { "@type": "ImageObject", url: "https://safeorstolen.com/sos-logo.png", width: "512", height: "512" },
      description:
        "SafeOrStolen is a stolen-item verification hub for buyers and sellers of used goods — check phones (IMEI), vehicles (VIN and license plate), electronics, power tools and other serial-numbered items, firearms, and bicycles in one place, get a Proof of Clean Purchase record, and use it on the web or as an installable web app.",
      foundingDate: "2017-07-20",
      slogan: "Verify Before You Buy",
      knowsAbout: [
        "stolen goods verification",
        "IMEI checking",
        "VIN lookup",
        "serial number verification",
        "pawn shop compliance",
        "consumer protection",
      ],
      contactPoint: { "@type": "ContactPoint", email: "support@safeorstolen.com", contactType: "Customer Support" },
      sameAs: [
        "https://www.crunchbase.com/organization/safe-or-stolen",
        "https://www.trustpilot.com/review/safeorstolen.com",
        "https://biz.prlog.org/SafeOrStolen/",
        "https://www.facebook.com/safeorstolen/",
        "https://www.youtube.com/@safeorstolen",
        "https://x.com/safeorstolen",
      ],
      founder: [
        { "@type": "Person", name: "Samuel Pfeiffer", jobTitle: "CEO" },
        { "@type": "Person", name: "Kelly McEvoy", jobTitle: "Co-Founder" },
      ],
      dateModified: "2026-09-24",
    },
    {
      "@type": "WebSite",
      "@id": "https://safeorstolen.com/#website",
      url: "https://safeorstolen.com",
      name: "SafeOrStolen — Stolen Item Verification",
      description:
        "A stolen-item verification hub using SafeOrStolen reports, public web results, and AI analysis for secondhand buyers and sellers.",
      publisher: { "@id": "https://safeorstolen.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://safeorstolen.com/verify?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
      dateModified: "2026-09-24",
    },
    {
      "@type": "Service",
      "@id": "https://safeorstolen.com/#service",
      name: "Stolen Item Verification Service",
      description:
        "SafeOrStolen helps users check secondhand items using its own reports, public web results, and AI analysis. Phone checks provide IMEI device details, bicycle checks also query Bike Index, and firearm checks also search the Ohio Attorney General's stolen gun records.",
      provider: { "@id": "https://safeorstolen.com/#organization" },
      serviceType: "Stolen Item Verification",
      areaServed: { "@type": "Country", name: "United States" },
      audience: [
        { "@type": "Audience", audienceType: "Marketplace buyers" },
        { "@type": "Audience", audienceType: "Marketplace sellers" },
        { "@type": "Audience", audienceType: "Pawn shops" },
        { "@type": "Audience", audienceType: "Resale businesses" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Verification Plans",
        itemListElement: [
          { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD", description: "2 free verifications, no credit card required" },
          { "@type": "Offer", name: "Unlimited", price: "14.99", priceCurrency: "USD", description: "Unlimited verifications per month for supported item types" },
        ],
      },
      dateModified: "2026-09-24",
    },
    {
      "@type": "HowTo",
      name: "How to Verify If an Item Is Stolen Before Buying",
      description: "Steps to use SafeOrStolen to check whether a secondhand item has been reported stolen.",
      step: [
        { "@type": "HowToStep", position: 1, name: "Find the identifier", text: "Locate the IMEI number (phones — dial *#06#), VIN (vehicles — dashboard or door jamb), or serial number on the item." },
        { "@type": "HowToStep", position: 2, name: "Enter the number", text: "Open SafeOrStolen on the web or as an installed web app, then enter or scan the identifier." },
        { "@type": "HowToStep", position: 3, name: "Review results", text: "Review the SafeOrStolen reports, public web results, and AI analysis, then complete the separate official checks in the relevant guide." },
      ],
      totalTime: "PT30S",
      dateModified: "2026-09-24",
    },
  ],
});

const softwareApplicationJsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://safeorstolen.com/#safeorstolen-ai",
  name: "SafeOrStolen AI",
  alternateName: ["SafeOrStolen AI Chat", "SOS AI"],
  description:
    "Conversational assistant for checking supported identifiers and marketplace listing URLs using SafeOrStolen reports, public web results, and AI analysis.",
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Conversational AI Verification Assistant",
  operatingSystem: "Web",
  url: "https://safeorstolen.com/ai-chat",
  sameAs: "https://safeorstolen.com/verify",
  softwareVersion: "2026.04",
  isAccessibleForFree: false,
  creator: { "@id": "https://safeorstolen.com/#organization" },
  publisher: { "@id": "https://safeorstolen.com/#organization" },
  featureList: [
    "Conversational AI verification (multi-turn chat)",
    "AI smart identifier detection (IMEI, VIN, serial, plate, firearm serial)",
    "AI marketplace URL analyzer (Facebook Marketplace, eBay, Craigslist, OfferUp, Mercari, Poshmark)",
    "AI visual OCR for barcode and serial-number capture",
    "AI safety advisor with natural-language risk explanations",
    "AI verification analysis and result summaries",
  ],
  potentialAction: { "@type": "CommunicateAction", name: "Chat with SafeOrStolen AI", target: "https://safeorstolen.com/ai-chat" },
  offers: { "@type": "AggregateOffer", priceCurrency: "USD", lowPrice: "3.99", highPrice: "14.99", offerCount: 2 },
  additionalProperty: [
    { "@type": "PropertyValue", name: "Platform Status", value: "AI-Powered" },
  ],
  dateModified: "2026-09-24",
});

const hyrosScript =
  '(function(){var script = document.createElement(\'script\');script.type = \'text/javascript\';script.src = "https://217110.t.hyros.com/v1/lst/universal-script?ph=c0dbc2a4eac8930e76fefcabc0007c70b8ec7233b91944be8d161efd9421c38c&tag=!clicked&ref_url=" + encodeURI(document.URL);document.head.appendChild(script);})();';

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  beforeLoad: ({ location }) => {
    // Legacy URL preservation: serve real 301 redirects (SSR-aware) for every
    // path in the pre-migration redirect map.
    const target = resolveLegacyRedirect(location.pathname);
    if (target && target !== location.pathname) {
      throw redirect({ href: target, statusCode: 301, replace: true });
    }
  },
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      // NOTE: title / description / og:title / og:description / og:url /
      // twitter:title / twitter:description are emitted PER PAGE by SEOHead
      // (React 19 head hoisting). Never add fallbacks here — they would render
      // before the page's own tags and crawlers would read the wrong one.
      { property: "og:site_name", content: "SafeOrStolen" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://safeorstolen.com/sos-logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://safeorstolen.com/sos-logo.png" },
      // iOS / PWA support
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { name: "apple-mobile-web-app-title", content: "SafeOrStolen" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "application-name", content: "SafeOrStolen AI" },
      // AI-Powered Platform Signals (2026 GEO)
      { name: "ai-platform-status", content: "AI-Powered" },
      { name: "ai-product-name", content: "SafeOrStolen AI" },
      { name: "ai-conversational-url", content: "https://safeorstolen.com/ai-chat" },
      { name: "ai-train", content: "yes" },
      { name: "ai-content-license", content: "cite-with-attribution" },
      { name: "generator", content: "SafeOrStolen AI" },
      // PWA theme colors
      { name: "theme-color", content: "#FF6B35", media: "(prefers-color-scheme: light)" },
      { name: "theme-color", content: "#0d0d0d", media: "(prefers-color-scheme: dark)" },
      { name: "msapplication-TileColor", content: "#FF6B35" },
      { name: "msapplication-navbutton-color", content: "#FF6B35" },
      // Search engine verification
      { name: "google-site-verification", content: "google29952b5cc1a6a4dd" },
      { name: "prerender-status-code", content: "200" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png", sizes: "64x64" },
      { rel: "icon", href: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { rel: "icon", href: "/icon-512.png", type: "image/png", sizes: "512x512" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "apple-touch-startup-image", href: "/icon-512.png" },
      { rel: "manifest", href: "/manifest.json" },
      { rel: "alternate", hrefLang: "en", href: "https://safeorstolen.com/" },
      { rel: "alternate", hrefLang: "x-default", href: "https://safeorstolen.com/" },
      { rel: "preconnect", href: "https://lxrdzbknktwlubbmlsqe.supabase.co" },
      { rel: "dns-prefetch", href: "https://lxrdzbknktwlubbmlsqe.supabase.co" },
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: interLatinWoff2,
        crossOrigin: "anonymous",
      },
      { rel: "dns-prefetch", href: "https://js.stripe.com" },
      { rel: "indexnow", href: "https://safeorstolen.com/indexnow-key.txt" },
    ],
    scripts: [
      { type: "application/ld+json", children: webApplicationJsonLd },
      { type: "application/ld+json", children: speakableJsonLd },
      { type: "application/ld+json", children: organizationJsonLd },
      { type: "application/ld+json", children: coreGraphJsonLd },
      { type: "application/ld+json", children: softwareApplicationJsonLd },
      { children: hyrosScript },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: RootErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  console.error("[root-error]", error);
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-2xl font-bold">This page didn't load</h1>
        <p className="text-muted-foreground">Something went wrong while loading this page. You can try again or return to the homepage.</p>
        <div className="flex items-center justify-center gap-3">
          <button
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground font-medium"
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Try again
          </button>
          <a href="/" className="px-4 py-2 rounded-md border border-border font-medium">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

/**
 * App shell ported from the pre-migration AppRoot.tsx.
 * The auth loading-screen gate was removed: with server rendering, pages
 * render immediately and auth-dependent UI updates when the session resolves.
 */
function AppShell() {
  const location = useLocation();
  const [showGrowthComponents, setShowGrowthComponents] = useState(false);
  const [showSEOComponents, setShowSEOComponents] = useState(false);

  // Delay loading SEO components - they don't affect LCP
  useEffect(() => {
    const seoTimer = setTimeout(() => setShowSEOComponents(true), 1500);
    return () => clearTimeout(seoTimer);
  }, []);

  // Delay growth/conversion components to improve CLS and mobile performance
  useEffect(() => {
    const timer = setTimeout(() => setShowGrowthComponents(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // Hide footer on full-height chat experiences (the chat IS the page)
  const hideFooter = location.pathname === "/verify" || location.pathname === "/ai-verify";

  return (
    <GA4Provider>
      <PWAProvider>
        <MasterSEO />
        <SEODuplicateGuard />
        <RedirectHandler />
        <OffsiteLinkGuard />
        <ScrollRestoration />
        <CriticalResourceLoader />

        {showSEOComponents && (
          <Suspense fallback={null}>
            {location.pathname === "/" ? <GlobalAISEO /> : null}
            <DomainAuthorityBooster />
            <EEATSignals />
            <AdvancedSchemaGenerator />
          </Suspense>
        )}

        {showGrowthComponents && (
          <Suspense fallback={null}>
            <TrafficBooster />
          </Suspense>
        )}

        <div className="min-h-screen bg-background text-foreground flex flex-col">
          <TopNavigation />
          <main className="flex-1 pt-16">
            <Outlet />
          </main>
          {!hideFooter && <SOSFooter />}
        </div>
        <PWAInstallManager />
        {/* Oct 2 2026: removed duplicate install pop-up; PWAInstallManager shows the single slim bar */}
        <MobileNavigation />
        <AIFloatingChat />

        {showGrowthComponents && (
          <Suspense fallback={null}>
            <FloatingCTA />
          </Suspense>
        )}

        <Toaster />
      </PWAProvider>
    </GA4Provider>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider>
          <QueryClientProvider client={queryClient}>
            <AuthProvider>
              <AppShell />
            </AuthProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}
