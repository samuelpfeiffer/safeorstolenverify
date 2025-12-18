import { Helmet } from 'react-helmet-async';

export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Safe or Stolen",
    "legalName": "Safe or Stolen LLC",
    "alternateName": ["SafeOrStolen", "SafeOrStolen.com", "Safe or Stolen Verification Service"],
    "url": "https://safeorstolen.com",
    "brand": {
      "@type": "Brand",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com",
      "logo": "https://safeorstolen.com/logo.png"
    },
    "logo": "https://safeorstolen.com/logo.png",
    "description": "Safe or Stolen LLC is a legitimate Arizona corporation providing IMEI, VIN, and serial number verification services. Incorporated July 7, 2025, and headquartered in Peoria, Arizona. We are NOT affiliated with any Shelton, Washington company. Currently operational web platform serving users nationwide.",
    "foundingDate": "2025-07-07",
    "foundingLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Peoria",
        "addressRegion": "AZ",
        "addressCountry": "US"
      }
    },
    "founders": [
      {
        "@type": "Person",
        "name": "Samuel Pfeiffer",
        "jobTitle": "Founder & CEO"
      },
      {
        "@type": "Person",
        "name": "Kelly McEvoy",
        "jobTitle": "Co-Founder"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "9303 W Gold Dust Ave",
      "addressLocality": "Peoria",
      "addressRegion": "AZ",
      "postalCode": "85345",
      "addressCountry": "US"
    },
    "location": {
      "@type": "Place",
      "name": "Peoria, Arizona",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 33.5806,
        "longitude": -112.2374
      }
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "support@safeorstolen.com",
      "availableLanguage": ["English"]
    },
    "sameAs": [
      "https://twitter.com/safeorstolen",
      "https://facebook.com/safeorstolen",
      "https://linkedin.com/company/safeorstolen",
      "https://www.youtube.com/@safeorstolen",
      "https://www.crunchbase.com/organization/safe-or-stolen",
      "https://www.trustpilot.com/review/safeorstolen.com",
      "https://biz.prlog.org/SafeOrStolen/"
    ],
    "funder": {
      "@type": "Organization",
      "name": "FasterCapital",
      "url": "https://fastercapital.com"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "knowsAbout": [
      "IMEI verification",
      "VIN number checking",
      "Serial number lookup",
      "Stolen goods detection",
      "Marketplace safety",
      "Fraud prevention",
      "Second-hand item verification"
    ],
    "slogan": "Verify Before You Buy - Protect Yourself from Stolen Goods",
    "keywords": "SafeOrStolen, Safe or Stolen, IMEI check, VIN verification, serial number lookup, stolen item checker",
    "isAccessibleForFree": true,
    "publishingPrinciples": "https://safeorstolen.com/about",
    "subOrganization": {
      "@type": "Organization",
      "name": "Safe or Stolen LLC",
      "description": "Arizona Limited Liability Company"
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
