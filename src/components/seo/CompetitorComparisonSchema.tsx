import React from 'react';
import { Helmet } from 'react-helmet-async';

interface CompetitorComparisonSchemaProps {
  competitor: 'checkmend' | 'imeiinfo' | 'stolenregister' | 'autocheck' | 'carfax' | 'nicb';
}

export const CompetitorComparisonSchema: React.FC<CompetitorComparisonSchemaProps> = ({ competitor }) => {
  const competitorData = {
    checkmend: {
      name: 'CheckMEND',
      description: 'UK-focused stolen phone checker',
      coverage: 'UK Only'
    },
    imeiinfo: {
      name: 'IMEIInfo',
      description: 'IMEI checker and phone information service',
      coverage: 'Global'
    },
    stolenregister: {
      name: 'Stolen Register',
      description: 'Property marking and checking service',
      coverage: 'UK & Europe'
    },
    autocheck: {
      name: 'AutoCheck',
      description: 'Vehicle history reports and stolen vehicle checks',
      coverage: 'United States'
    },
    carfax: {
      name: 'Carfax',
      description: 'Vehicle history reports service',
      coverage: 'United States & Canada'
    },
    nicb: {
      name: 'NICB VINCheck',
      description: 'Free vehicle theft and salvage database',
      coverage: 'United States'
    }
  };

  const data = competitorData[competitor];

  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `SafeOrStolen vs ${data.name}: Service Comparison`,
    "description": `Compare SafeOrStolen and ${data.name} stolen item verification services. See which platform offers better coverage, features, and value.`,
    "about": {
      "@type": "Service",
      "serviceType": "Stolen Item Verification Service",
      "name": "SafeOrStolen",
      "description": "Global stolen item verification platform with free searches and mobile apps",
      "provider": {
        "@type": "Organization",
        "name": "SafeOrStolen",
        "url": "https://safeorstolen.com"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Worldwide"
      }
    },
    "mentions": {
      "@type": "Service",
      "serviceType": "Verification Service",
      "name": data.name,
      "description": data.description,
      "provider": {
        "@type": "Organization",
        "name": data.name
      },
      "areaServed": {
        "@type": "Place",
        "name": data.coverage
      }
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
