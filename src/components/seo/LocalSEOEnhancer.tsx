import React from 'react';
import { Helmet } from 'react-helmet-async';

interface LocalSEOEnhancerProps {
  city?: string;
  state?: string;
  country?: string;
  serviceType: 'phone' | 'car' | 'electronics' | 'general';
}

export const LocalSEOEnhancer: React.FC<LocalSEOEnhancerProps> = ({
  city,
  state,
  country = 'United States',
  serviceType
}) => {
  if (!city) return null;

  const locationString = state ? `${city}, ${state}` : city;
  const fullLocation = `${locationString}, ${country}`;

  const getLocalContent = () => {
    const services = {
      phone: {
        service: 'phone verification',
        items: 'smartphones, iPhones, Android devices',
        action: 'IMEI checks'
      },
      car: {
        service: 'vehicle verification', 
        items: 'cars, trucks, motorcycles',
        action: 'VIN checks'
      },
      electronics: {
        service: 'electronics verification',
        items: 'laptops, tablets, gaming consoles',
        action: 'serial number checks'
      },
      general: {
        service: 'stolen goods verification',
        items: 'phones, cars, electronics',
        action: 'IMEI, VIN, and serial number checks'
      }
    };

    return services[serviceType];
  };

  const { service, items, action } = getLocalContent();

  const localStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `SafeOrStolen ${service} in ${locationString}`,
    "description": `Professional ${service} service for ${locationString} residents. Verify ${items} before buying.`,
    "provider": {
      "@type": "Organization",
      "@id": "https://safeorstolen.com/#organization"
    },
    "areaServed": {
      "@type": "City",
      "name": city,
      "containedIn": state ? {
        "@type": "State",
        "name": state,
        "containedIn": {
          "@type": "Country",
          "name": country
        }
      } : {
        "@type": "Country", 
        "name": country
      }
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://safeorstolen.com",
      "serviceSmsNumber": null,
      "servicePhone": null
    }
  };

  return (
    <Helmet>
      {/* Local SEO structured data */}
      <script type="application/ld+json">
        {JSON.stringify(localStructuredData)}
      </script>

      {/* Local SEO meta tags */}
      <meta name="geo.region" content={state ? `${country.substring(0,2).toUpperCase()}-${state}` : country} />
      <meta name="geo.placename" content={locationString} />
      <meta name="ICBM" content="" />
      
      {/* Local business schema can be added here if we have physical locations */}
    </Helmet>
  );
};