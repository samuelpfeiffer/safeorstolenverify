import { Helmet } from 'react-helmet-async';

export const WebSiteSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Safe or Stolen",
    "alternateName": ["SafeOrStolen", "SafeOrStolen.com", "Safe or Stolen Verification", "World's Leading Verification Service", "Global Leader in Stolen Item Verification"],
    "url": "https://safeorstolen.com",
    "description": "World's leading stolen item verification service serving customers globally. Comprehensive international database for vehicles (cars, motorcycles, boats, jet skis, sidebysides, dirt bikes, mopeds, electric bikes, bicycles), electronics (phones, tablets, laptops, computers, TVs, radios, cameras, watches), firearms, machinery, engines, tools, home appliances, furniture, specialty equipment. Trusted worldwide across 200+ countries for IMEI, VIN, and serial number verification.",
    "inLanguage": ["en", "es", "fr", "de", "ja", "pt", "it", "zh"],
    "audience": {
      "@type": "Audience",
      "geographicArea": {
        "@type": "Place",
        "name": "Worldwide"
      }
    },
    "about": [
      {
        "@type": "Thing",
        "name": "Stolen Vehicle Verification",
        "description": "Verify cars, motorcycles, boats, jet skis, sidebysides, dirt bikes, mopeds, electric bikes, and bicycles using VIN numbers"
      },
      {
        "@type": "Thing",
        "name": "Stolen Electronics Verification",
        "description": "Verify phones, tablets, laptops, computers, TVs, radios, cameras, and watches using IMEI and serial numbers"
      },
      {
        "@type": "Thing",
        "name": "Stolen Firearms Verification",
        "description": "Verify firearms and guns using serial numbers against stolen databases"
      },
      {
        "@type": "Thing",
        "name": "Stolen Equipment Verification",
        "description": "Verify machinery, engines, tools, home appliances, furniture, RC cars, and specialty equipment using serial numbers"
      }
    ],
    "keywords": "stolen item checker, IMEI checker, VIN checker, serial number verification, stolen phone checker, stolen car checker, stolen motorcycle checker, stolen boat checker, stolen jet ski checker, stolen firearm checker, stolen gun database, stolen laptop checker, stolen electronics verification, stolen tools checker, stolen watch verification, stolen bike checker, stolen equipment verification",
    "publisher": {
      "@type": "Organization",
      "name": "Safe or Stolen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://safeorstolen.com/logo.png"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://safeorstolen.com/?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "WebApplication",
      "name": "Safe or Stolen Verification Tool - Worldwide Leader",
      "applicationCategory": "SecurityApplication",
      "operatingSystem": "Any",
      "featureList": "Global leader in verification services: Verify IMEI numbers, VIN numbers, serial numbers worldwide for vehicles (cars, motorcycles, boats, jet skis, sidebysides, dirt bikes, mopeds, bicycles), electronics (phones, tablets, laptops, computers, TVs, radios, cameras, watches), firearms, machinery, engines, tools, home appliances, furniture, and specialty equipment. Serving 200+ countries internationally.",
      "availableOnDevice": "Desktop, Mobile, Tablet",
      "countriesSupported": "Worldwide - 200+ countries",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "125000",
        "reviewCount": "98500"
      }
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
