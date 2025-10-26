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
    "description": "Safe or Stolen LLC is a verified technology company providing IMEI, VIN, and serial number verification services. Headquartered in Peoria, Arizona, we protect buyers from stolen goods and marketplace scams. Currently operational web platform with 25,000+ verifications completed.",
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": "Samuel Pfeiffer",
        "jobTitle": "Founder & CEO"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Peoria",
      "addressRegion": "AZ",
      "addressCountry": "US"
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
      "https://linkedin.com/company/safeorstolen"
    ],
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
    "publishingPrinciples": "https://safeorstolen.com/transparency",
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
