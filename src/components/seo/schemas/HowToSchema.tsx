import { Helmet } from 'react-helmet-async';

interface HowToStep {
  name: string;
  text: string;
  url?: string;
  image?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  totalTime?: string; // ISO 8601 duration format (e.g., "PT5M" for 5 minutes)
  steps: HowToStep[];
  image?: string;
}

/**
 * Professional HowTo Schema Component
 * Implements Google's HowTo structured data for step-by-step guides
 */
export const HowToSchema = ({ name, description, totalTime, steps, image }: HowToSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    ...(totalTime && { totalTime }),
    ...(image && { image }),
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.url && { url: step.url }),
      ...(step.image && { image: step.image })
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
