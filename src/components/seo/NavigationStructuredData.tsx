import React from 'react';
import { Helmet } from 'react-helmet-async';

export const NavigationStructuredData: React.FC = () => {
  const navigationStructuredData = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": [
      {
        "@type": "SiteNavigationElement",
        "name": "Serial Number Verification",
        "description": "Check serial numbers against stolen item databases",
        "url": "https://safeorstolen.com/verify"
      },
      {
        "@type": "SiteNavigationElement", 
        "name": "IMEI Number Check",
        "description": "Verify phone IMEI numbers for stolen devices",
        "url": "https://safeorstolen.com/imei"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "VIN Number Lookup",
        "description": "Check vehicle VIN numbers for stolen cars",
        "url": "https://safeorstolen.com/vin"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Bulk Verification",
        "description": "Check multiple items at once for businesses", 
        "url": "https://safeorstolen.com/bulk"
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Pricing Plans",
        "description": "View pricing for verification services",
        "url": "https://safeorstolen.com/pricing"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(navigationStructuredData)}
      </script>
    </Helmet>
  );
};