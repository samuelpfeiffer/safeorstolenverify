import { Helmet } from 'react-helmet-async';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'FAQPage' | 'Article' | 'Service' | 'Thing';
  data: any;
}

export const StructuredData = ({ type, data }: StructuredDataProps) => {
  const getStructuredData = () => {
    const baseContext = {
      '@context': 'https://schema.org',
      '@type': type
    };

    switch (type) {
      case 'Organization':
        return {
          ...baseContext,
          name: 'SafeOrStolen',
          description: 'Global stolen item verification service protecting buyers and sellers from fraud',
          url: 'https://safeorstolen.com',
          logo: 'https://safeorstolen.com/logo.png',
          sameAs: [
            'https://twitter.com/safeorstolen',
            'https://facebook.com/safeorstolen',
            'https://linkedin.com/company/safeorstolen'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+1-800-SAFE-OR-STOLEN',
            contactType: 'Customer Service',
            areaServed: 'Worldwide',
            availableLanguage: ['English', 'Spanish', 'French']
          },
          ...data
        };

      case 'WebSite':
        return {
          ...baseContext,
          name: 'SafeOrStolen Universal Verification',
          url: 'https://safeorstolen.com',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://safeorstolen.com/verify',
            'query-input': 'required name=search_term_string'
          },
          ...data
        };

      case 'FAQPage':
        return {
          ...baseContext,
          mainEntity: data.questions?.map((q: any) => ({
            '@type': 'Question',
            name: q.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: q.answer
            }
          })) || []
        };

      case 'Article':
        return {
          ...baseContext,
          headline: data.headline,
          description: data.description,
          author: {
            '@type': 'Organization',
            name: 'SafeOrStolen'
          },
          publisher: {
            '@type': 'Organization',
            name: 'SafeOrStolen',
            logo: {
              '@type': 'ImageObject',
              url: 'https://safeorstolen.com/logo.png'
            }
          },
          datePublished: data.datePublished,
          dateModified: data.dateModified || data.datePublished,
          ...data
        };

      case 'Service':
        return {
          ...baseContext,
          serviceType: 'Stolen Item Verification',
          provider: {
            '@type': 'Organization',
            name: 'SafeOrStolen'
          },
          areaServed: {
            '@type': 'Country',
            name: 'Worldwide'
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Verification Services',
            itemListElement: data.offers || []
          },
          ...data
        };

      case 'Thing':
        // For verification results - NOT a product for sale
        // Using "Thing" instead of "Product" to avoid Google Merchant Listings errors
        return {
          '@context': 'https://schema.org',
          '@type': 'Thing',
          name: data.name,
          description: data.description,
          identifier: data.identifier,
          additionalProperty: data.additionalProperty
        };

      default:
        return { ...baseContext, ...data };
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
    </Helmet>
  );
};

// Preset structured data configurations
export const OrganizationStructuredData = () => (
  <StructuredData
    type="Organization"
    data={{
      foundingDate: '2024',
      numberOfEmployees: '25',
      slogan: 'Buy Safe, Sell Secure'
    }}
  />
);

export const WebAppStructuredData = () => (
  <StructuredData
    type="WebSite"
    data={{
      description: 'Check if items are stolen across 6+ global databases',
      inLanguage: 'en-US'
    }}
  />
);

export const VerificationFAQData = () => (
  <StructuredData
    type="FAQPage"
    data={{
      questions: [
        {
          question: 'How do I check if something is stolen?',
          answer: 'Enter the VIN, IMEI, or serial number into SafeOrStolen.com. We instantly search 6+ databases including NICB, GSMA, CheckMEND, Bike Index, Arizona TheftAZ, and Immobilize Registry. Results appear in 3-5 seconds showing if the item has been reported stolen or lost.'
        },
        {
          question: 'Is SafeOrStolen verification accurate?',
          answer: 'Yes. SafeOrStolen checks official law enforcement databases (NICB, Arizona TheftAZ), insurance registries, and global property databases. Our accuracy rate exceeds 99.5% for items in these systems. However, not all stolen items are reported, so a "safe" result means no theft records were found in checked databases.'
        },
        {
          question: 'How long does verification take?',
          answer: 'Most verifications complete in 3-5 seconds. We check multiple databases simultaneously using parallel processing for instant results.'
        },
        {
          question: 'What should I do if an item shows as stolen?',
          answer: 'Do not complete the transaction. Report the seller to the platform (Craigslist, Facebook, etc.) and contact local police with the item details and seller information. If you already purchased it, file a police report immediately and contact your payment provider for dispute resolution.'
        },
        {
          question: 'Can I check items internationally?',
          answer: 'Yes. GSMA Device Check and CheckMEND provide global coverage for phones and electronics. NICB and Arizona TheftAZ cover US vehicles. Bike Index and Immobilize Registry have international records.'
        },
        {
          question: 'How much does verification cost?',
          answer: 'Free accounts get 2 verifications (14-day trial). Pay-per-check is $0.50. Monthly plans start at $4.99 for 15 checks/month. Professional unlimited plan is $29.99/month with bulk tools and API access.'
        },
        {
          question: 'What types of items can I check?',
          answer: 'Vehicles (VIN), phones (IMEI), bikes (serial), laptops, tablets, cameras, tools, jewelry, firearms, electronics - any item with a unique identifier (serial number, VIN, IMEI, license plate).'
        },
        {
          question: 'Is my verification data private?',
          answer: 'Yes. We use bank-level encryption. Searches are confidential and not shared. Only you can access your verification history. We comply with GDPR, CCPA, and data protection regulations.'
        }
      ]
    }}
  />
);
