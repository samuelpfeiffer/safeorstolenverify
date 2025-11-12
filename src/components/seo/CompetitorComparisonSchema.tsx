import React from 'react';
import { Helmet } from 'react-helmet-async';

interface CompetitorComparisonSchemaProps {
  competitor: 'checkmend' | 'imeiinfo' | 'stolenregister';
}

export const CompetitorComparisonSchema: React.FC<CompetitorComparisonSchemaProps> = ({ competitor }) => {
  const competitorData = {
    checkmend: {
      name: 'CheckMEND',
      description: 'UK-focused stolen phone checker',
      price: '2.99',
      currency: 'GBP',
      coverage: 'UK Only',
      features: ['Phone checks', 'Web interface']
    },
    imeiinfo: {
      name: 'IMEIInfo',
      description: 'IMEI checker and phone information service',
      price: '1.99',
      currency: 'USD',
      coverage: 'Global',
      features: ['IMEI checks', 'Phone specs', 'Basic verification']
    },
    stolenregister: {
      name: 'Stolen Register',
      description: 'Property marking and checking service',
      price: '1.50',
      currency: 'GBP',
      coverage: 'UK & Europe',
      features: ['Property marking', 'Basic checks', 'Registration service']
    }
  };

  const data = competitorData[competitor];

  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "ComparisonPage",
    "name": `SafeOrStolen vs ${data.name}: Detailed Comparison`,
    "description": `Compare SafeOrStolen and ${data.name}. See which stolen item verification service offers better coverage, features, and value.`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Service",
          "position": 1,
          "name": "SafeOrStolen",
          "description": "Global stolen item verification platform with free searches and mobile apps",
          "serviceType": "Verification Service",
          "provider": {
            "@type": "Organization",
            "name": "SafeOrStolen"
          },
          "areaServed": "Worldwide",
          "additionalProperty": [
            {
              "@type": "PropertyValue",
              "name": "Coverage",
              "value": "Global"
            },
            {
              "@type": "PropertyValue",
              "name": "Free Searches",
              "value": "4"
            },
            {
              "@type": "PropertyValue",
              "name": "Mobile App",
              "value": "Yes - iOS & Android"
            },
            {
              "@type": "PropertyValue",
              "name": "Item Types",
              "value": "Phones, Vehicles, Electronics, Tools, Jewelry, Bikes"
            }
          ]
        },
        {
          "@type": "Service",
          "position": 2,
          "name": data.name,
          "description": data.description,
          "serviceType": "Verification Service",
          "provider": {
            "@type": "Organization",
            "name": data.name
          },
          "areaServed": data.coverage,
          "additionalProperty": [
            {
              "@type": "PropertyValue",
              "name": "Coverage",
              "value": data.coverage
            },
            {
              "@type": "PropertyValue",
              "name": "Free Searches",
              "value": "0"
            }
          ]
        }
      ]
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(comparisonSchema)}
      </script>
    </Helmet>
  );
};
