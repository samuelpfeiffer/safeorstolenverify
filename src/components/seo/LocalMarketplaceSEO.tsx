import { Helmet } from 'react-helmet-async';

/**
 * LOCAL MARKETPLACE SEO
 * Target local searches: "facebook marketplace [city]", "craigslist safety [city]"
 */

export const LocalMarketplaceSEO = () => {
  const majorCities = [
    'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 
    'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose',
    'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'Charlotte',
    'San Francisco', 'Indianapolis', 'Seattle', 'Denver', 'Washington DC',
    'Boston', 'Nashville', 'Detroit', 'Portland', 'Las Vegas',
    'Memphis', 'Louisville', 'Baltimore', 'Milwaukee', 'Albuquerque'
  ];

  const localizedSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Marketplace Safety Verification App",
    "provider": {
      "@type": "Organization",
      "name": "SafeOrStolen"
    },
    "areaServed": majorCities.map(city => ({
      "@type": "City",
      "name": city
    })),
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://safeorstolen.com",
      "servicePhone": "+1-800-SAFE-OR-STOLEN",
      "serviceLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "US"
        }
      }
    }
  };

  return (
    <Helmet>
      {/* Local Marketplace Keywords */}
      {majorCities.map(city => (
        <>
          <meta 
            key={`fb-${city}`}
            name={`facebook-marketplace-${city.toLowerCase().replace(/\s/g, '-')}`} 
            content={`SafeOrStolen mobile app helps ${city} buyers verify Facebook Marketplace items. Download FREE on iOS/Android.`}
          />
          <meta 
            key={`cl-${city}`}
            name={`craigslist-${city.toLowerCase().replace(/\s/g, '-')}`} 
            content={`Verify Craigslist items in ${city} with SafeOrStolen mobile app. Check VIN, IMEI on-site before buying.`}
          />
          <meta 
            key={`ou-${city}`}
            name={`offerup-${city.toLowerCase().replace(/\s/g, '-')}`} 
            content={`${city} OfferUp buyers: Download SafeOrStolen app to verify items at meetup locations. FREE on iPhone & Android.`}
          />
        </>
      ))}

      {/* Local Search Intent */}
      <meta name="local-marketplace-safety" content="Mobile app for local marketplace buyers - verify items before meeting sellers in your city" />
      <meta name="near-me-verification" content="Verify items near you with SafeOrStolen mobile app - works anywhere, no internet required" />
      
      {/* Geo-Targeted Long-Tail Keywords */}
      <meta name="local-keywords" content="facebook marketplace safety near me, craigslist scam prevention my area, offerup buyer protection local, verify before buying near me" />
      
      <script type="application/ld+json">
        {JSON.stringify(localizedSchema)}
      </script>
    </Helmet>
  );
};
