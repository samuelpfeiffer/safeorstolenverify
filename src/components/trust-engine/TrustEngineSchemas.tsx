import React from 'react';
import { Helmet } from 'react-helmet-async';

export const TrustEngineSchemas: React.FC = () => {
  const checkActionSchema = {
    "@context": "https://schema.org",
    "@type": "CheckAction",
    "name": "Verify Item Identity",
    "description": "Check if a phone, vehicle, or electronic item is reported stolen using IMEI, VIN, or serial number lookup.",
    "agent": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com"
    },
    "object": {
      "@type": "Thing",
      "name": "Consumer Product Identifier (IMEI, VIN, Serial Number)"
    },
    "result": {
      "@type": "DataFeed",
      "name": "SafeOrStolen Trust Score",
      "description": "0-100 trust score derived from 100+ law enforcement and insurance databases"
    }
  };

  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "SafeOrStolen Global Stolen Item Database",
    "description": "Aggregated dataset of stolen and lost consumer goods from 100+ law enforcement, insurance, and carrier databases worldwide.",
    "url": "https://safeorstolen.com/trust-engine",
    "license": "https://safeorstolen.com/terms",
    "creator": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com"
    },
    "temporalCoverage": "2020/..",
    "spatialCoverage": "Global",
    "variableMeasured": [
      "IMEI Status", "VIN Status", "Serial Number Status", "Trust Score"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SafeOrStolen Pawn Broker Verification Partner",
    "description": "Compliance verification service for pawn shops, auction houses, and secondhand dealers to verify items are not stolen before purchase.",
    "url": "https://safeorstolen.com/trust-engine",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Peoria",
      "addressRegion": "AZ",
      "addressCountry": "US"
    },
    "areaServed": "US",
    "serviceType": ["Stolen Item Verification", "Compliance Certificate", "Due Diligence Verification"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a Pawn Broker's liability for stolen goods?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pawn brokers face criminal liability under receiving stolen property statutes (varies by state). Most states require due diligence checks before accepting items. SafeOrStolen provides timestamped compliance certificates as proof of verification."
        }
      },
      {
        "@type": "Question",
        "name": "How does batch verification work for auction houses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Upload a CSV file with up to 100 identifiers (IMEI, VIN, serial numbers). Each item is checked against 100+ databases simultaneously. A downloadable audit report with compliance certificates is generated for legal records."
        }
      },
      {
        "@type": "Question",
        "name": "What databases does SafeOrStolen check?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SafeOrStolen aggregates data from federal law enforcement records, carrier and manufacturer blacklists, NICB vehicle databases, carrier blacklists, insurance claims databases, and state police records — over 100 sources in total."
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(checkActionSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(datasetSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>
  );
};
