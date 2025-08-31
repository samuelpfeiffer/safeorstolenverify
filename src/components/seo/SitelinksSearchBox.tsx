import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SitelinksSearchBox: React.FC = () => {
  // This helps Google understand our site structure for sitelinks
  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": "Serial Number Verification",
        "description": "Check serial numbers against stolen item databases",
        "url": "https://safeorstolen.com/verify"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "IMEI Number Check", 
        "description": "Verify phone IMEI numbers for stolen devices",
        "url": "https://safeorstolen.com/imei"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "VIN Number Lookup",
        "description": "Check vehicle VIN numbers for stolen cars", 
        "url": "https://safeorstolen.com/vin"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "Bulk Verification",
        "description": "Check multiple items at once for businesses",
        "url": "https://safeorstolen.com/bulk"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 5,
        "name": "Pricing Plans",
        "description": "View pricing for verification services",
        "url": "https://safeorstolen.com/pricing"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(siteNavigationSchema)}
      </script>
    </Helmet>
  );
};