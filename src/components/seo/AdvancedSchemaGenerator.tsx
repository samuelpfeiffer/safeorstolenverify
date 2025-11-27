import { Helmet } from 'react-helmet-async';

/**
 * Advanced Schema Markup Generator - Entity-Based SEO
 * Implements comprehensive schema types to establish topical authority
 */

export const AdvancedSchemaGenerator = () => {
  // Only unique schemas NOT in index.html
  // Removed: Organization, WebSite (already in index.html static schemas)

  // HowTo Schema for featured snippets
  const howToSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Check if a Phone is Stolen Using IMEI",
      "description": "Step-by-step guide to verify if a mobile phone is stolen using its IMEI number",
      "totalTime": "PT2M",
      "tool": [
        {
          "@type": "HowToTool",
          "name": "SafeOrStolen Mobile App"
        }
      ],
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Find IMEI Number",
          "text": "Dial *#06# on the phone or check Settings > About Phone",
          "image": "https://safeorstolen.com/guides/find-imei.jpg"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Open SafeOrStolen App",
          "text": "Download and open the SafeOrStolen app on iOS or Android",
          "image": "https://safeorstolen.com/guides/open-app.jpg"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Enter IMEI",
          "text": "Type or scan the 15-digit IMEI number",
          "image": "https://safeorstolen.com/guides/enter-imei.jpg"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "View Results",
          "text": "Get instant verification results showing if the phone is stolen, lost, or safe",
          "image": "https://safeorstolen.com/guides/view-results.jpg"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Verify a Vehicle VIN Number Before Buying",
      "description": "Complete guide to checking vehicle VIN numbers for theft history",
      "totalTime": "PT3M",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Locate VIN",
          "text": "Find the 17-character VIN on the dashboard, door jamb, or title"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Use SafeOrStolen",
          "text": "Enter VIN in SafeOrStolen mobile app or website"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Review Report",
          "text": "Check comprehensive theft history and stolen vehicle records"
        }
      ]
    }
  ];

  // FAQ Schema optimized for voice search
  const voiceSearchFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does CheckMend have a mobile app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, CheckMend does not have a mobile app for iOS or Android. SafeOrStolen is the only verification service with mobile apps, offering IMEI, VIN, and firearm checking on iPhone and Android devices."
        }
      },
      {
        "@type": "Question",
        "name": "What's better than CheckMend?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SafeOrStolen is better than CheckMend because it offers mobile apps for iOS and Android, includes 4 free searches, and is the only service that verifies firearms. CheckMend has no mobile app and requires payment upfront."
        }
      },
      {
        "@type": "Question",
        "name": "Can I check if a gun is stolen on my phone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, SafeOrStolen is the only mobile app for iOS and Android that lets you check firearm serial numbers against stolen gun databases. Download the free app and get 4 free searches."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a free IMEI checker app?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, SafeOrStolen offers a free IMEI checker app for iOS and Android with 4 free IMEI checks included. IMEIinfo and CheckMend do not have mobile apps."
        }
      },
      {
        "@type": "Question",
        "name": "How do I check if something is stolen before buying?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use the SafeOrStolen mobile app to check IMEI numbers (phones), VIN numbers (vehicles), or serial numbers (electronics and firearms). Get instant verification results showing if items are stolen, lost, or safe to buy."
        }
      }
    ]
  };

  return (
    <Helmet>
      {howToSchemas.map((schema, index) => (
        <script key={`howto-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
      <script type="application/ld+json">
        {JSON.stringify(voiceSearchFAQ)}
      </script>
    </Helmet>
  );
};
