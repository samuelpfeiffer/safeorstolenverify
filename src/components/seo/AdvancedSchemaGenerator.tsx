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

  // Note: FAQPage schema removed to prevent duplicates with page-specific FAQs
  // HowTo schemas are kept as they don't duplicate

  return (
    <Helmet>
      {howToSchemas.map((schema, index) => (
        <script key={`howto-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};
