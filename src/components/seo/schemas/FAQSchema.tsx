import { Helmet } from 'react-helmet-async';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQ[];
}

/**
 * Professional FAQ Schema Component
 * Implements Google's FAQPage structured data for enhanced search results
 */
export const FAQSchema = ({ faqs }: FAQSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
