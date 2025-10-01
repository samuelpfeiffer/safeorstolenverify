import { Helmet } from 'react-helmet-async';

interface ComparisonSchemaProps {
  competitorName: string;
  ourProduct: {
    name: string;
    price: string;
    features: string[];
    rating: number;
    reviewCount: number;
  };
  theirProduct: {
    name: string;
    price: string;
    features: string[];
    rating?: number;
  };
}

export const ComparisonSchema = ({ competitorName, ourProduct, theirProduct }: ComparisonSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ComparisonTable",
    "name": `${ourProduct.name} vs ${competitorName}`,
    "description": `Feature-by-feature comparison of ${ourProduct.name} and ${competitorName} for stolen goods verification`,
    "itemOffered": [
      {
        "@type": "Product",
        "name": ourProduct.name,
        "offers": {
          "@type": "Offer",
          "price": ourProduct.price,
          "priceCurrency": "USD"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": ourProduct.rating,
          "reviewCount": ourProduct.reviewCount
        },
        "additionalProperty": ourProduct.features.map(feature => ({
          "@type": "PropertyValue",
          "name": "Feature",
          "value": feature
        }))
      },
      {
        "@type": "Product",
        "name": theirProduct.name,
        "offers": {
          "@type": "Offer",
          "price": theirProduct.price,
          "priceCurrency": "USD"
        },
        "aggregateRating": theirProduct.rating ? {
          "@type": "AggregateRating",
          "ratingValue": theirProduct.rating,
          "reviewCount": 100
        } : undefined,
        "additionalProperty": theirProduct.features.map(feature => ({
          "@type": "PropertyValue",
          "name": "Feature",
          "value": feature
        }))
      }
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
