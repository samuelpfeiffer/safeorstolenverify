import { Helmet } from 'react-helmet-async';

export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Safe or Stolen",
    "alternateName": "SafeOrStolen",
    "url": "https://safeorstolen.com",
    "logo": "https://safeorstolen.com/logo.png",
    "description": "Leading IMEI, VIN, and serial number verification service protecting buyers from stolen goods and marketplace scams. Trusted by 25,000+ users worldwide.",
    "foundingDate": "2024",
    "founders": [
      {
        "@type": "Person",
        "name": "Safe or Stolen Team"
      }
    ],
    "address": {
      "@type": "PostalAddress",
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
    "slogan": "Verify Before You Buy - Protect Yourself from Stolen Goods"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
