import { Helmet } from 'react-helmet-async';

interface LocalBusinessSchemaProps {
  name?: string;
  description?: string;
  areaServed?: string;
  serviceType?: string;
}

/**
 * Professional LocalBusiness Schema Component
 * For state-specific and localized pages
 */
export const LocalBusinessSchema = ({ 
  name = "SafeOrStolen",
  description = "Stolen item verification service",
  areaServed,
  serviceType = "Stolen Goods Verification"
}: LocalBusinessSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://safeorstolen.com/#organization',
    name,
    description,
    url: 'https://safeorstolen.com',
    logo: 'https://safeorstolen.com/logo.png',
    ...(areaServed && { areaServed }),
    serviceType,
    priceRange: 'Free - $$',
    telephone: '+1-206-249-2203',
    email: 'safeorstolenmail@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    },
    sameAs: [
      'https://twitter.com/safeorstolen',
      'https://facebook.com/safeorstolen',
      'https://linkedin.com/company/safeorstolen'
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
