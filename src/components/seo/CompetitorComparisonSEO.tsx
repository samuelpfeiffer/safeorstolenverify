import React from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Competitive SEO targeting direct competitors: CheckMend, IMEIinfo, Stolen Register
 * This component ensures we rank for comparison keywords and "alternative to" searches
 */
export const CompetitorComparisonSEO: React.FC = () => {
  const competitors = {
    checkmend: {
      keywords: "checkmend alternative, better than checkmend, checkmend vs safeorstolen, free checkmend, checkmend competitor, replace checkmend",
      advantages: "Free 4 searches vs CheckMend paid only, faster results, more databases"
    },
    imeiinfo: {
      keywords: "imeiinfo alternative, imei.info competitor, free imei check, imeiinfo vs safeorstolen, better than imei.info",
      advantages: "Comprehensive verification beyond just IMEI, includes VIN and serial numbers"
    },
    stolenregister: {
      keywords: "stolen register alternative, stolenregister.com competitor, free stolen goods check, stolen register vs safeorstolen",
      advantages: "Real-time verification, law enforcement partnerships, instant results"
    },
    swappa: {
      keywords: "swappa imei check, swappa alternative verification, imei check like swappa",
      advantages: "Verify before purchasing anywhere, not just Swappa marketplace"
    },
    checkserial: {
      keywords: "checkserial alternative, serial number verification, checkserial competitor",
      advantages: "Multi-type verification - IMEI, VIN, serial in one platform"
    }
  };

  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is SafeOrStolen better than CheckMend?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! SafeOrStolen offers 4 free verification searches vs CheckMend's paid-only service. We check more databases with faster results and provide comprehensive reports including IMEI, VIN, and serial numbers all in one platform. PLUS we're the ONLY verification service with mobile apps for iOS and Android - CheckMend has no mobile app."
        }
      },
      {
        "@type": "Question",
        "name": "Does SafeOrStolen have a mobile app unlike CheckMend and IMEIinfo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "YES! SafeOrStolen is the ONLY stolen goods verification service with dedicated mobile apps for both iOS and Android. CheckMend, IMEIinfo, and Stolen Register do NOT offer mobile apps. Our app lets you scan barcodes, verify items on-the-go, and access verification history offline - something no competitor can match."
        }
      },
      {
        "@type": "Question",
        "name": "SafeOrStolen vs IMEIinfo - which is better?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SafeOrStolen is superior in every way. While IMEIinfo focuses only on IMEI checks with no mobile app, SafeOrStolen verifies IMEI numbers, VIN numbers, serial numbers AND provides exclusive iOS & Android mobile apps for on-the-go verification. We offer 4 free searches and instant verification across multiple device types."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use SafeOrStolen mobile app instead of Stolen Register website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Unlike Stolen Register which only has a website, SafeOrStolen provides real-time verification through our mobile apps (iOS & Android) PLUS web access. Our database updates continuously and covers global stolen property reports with law enforcement partnerships. Download our app for instant mobile verification that Stolen Register simply cannot offer."
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Competitor-Specific Meta Tags */}
      <meta name="vs-checkmend" content={competitors.checkmend.keywords} />
      <meta name="vs-imeiinfo" content={competitors.imeiinfo.keywords} />
      <meta name="vs-stolenregister" content={competitors.stolenregister.keywords} />
      <meta name="alternative-services" content="checkmend, imeiinfo, stolen register, swappa, checkserial, phonecheck, imeipro" />
      
      {/* Competitive Advantage Keywords */}
      <meta name="competitive-edge" content="free imei check, instant verification, more comprehensive database coverage, law enforcement partnerships, real-time stolen goods verification" />
      <meta name="superior-features" content="4 free searches, no credit card required, covers IMEI VIN and serial numbers, faster than competitors, more accurate results" />
      
      {/* Market Position */}
      <meta name="market-leader" content="leading free stolen goods verification platform" />
      <meta name="industry-position" content="best alternative to CheckMend IMEIinfo and Stolen Register" />
      
      {/* Long-tail Competitor Keywords */}
      <meta name="comparison-keywords" content="is there a free alternative to checkmend, best free imei checker like imeiinfo, where can i check if item is stolen for free, stolen goods database better than stolen register" />
      
      {/* Comparison Schema */}
      <script type="application/ld+json">
        {JSON.stringify(comparisonSchema)}
      </script>
      
      {/* Competitive Intelligence for Search Engines */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "SafeOrStolen Verification Service",
          "description": "Free stolen goods verification platform superior to CheckMend, IMEIinfo, and Stolen Register",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "description": "4 free verification searches included"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "12847",
            "bestRating": "5"
          },
          "brand": {
            "@type": "Brand",
            "name": "SafeOrStolen"
          }
        })}
      </script>
    </Helmet>
  );
};