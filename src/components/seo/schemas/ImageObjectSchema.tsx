import { Helmet } from 'react-helmet-async';

interface ImageObjectSchemaProps {
  url: string;
  caption?: string;
  description?: string;
  width?: number;
  height?: number;
}

/**
 * Professional ImageObject Schema Component
 * Improves image SEO and discoverability
 */
export const ImageObjectSchema = ({ 
  url, 
  caption, 
  description,
  width = 1200,
  height = 630
}: ImageObjectSchemaProps) => {
  const fullUrl = url.startsWith('http') ? url : `https://safeorstolen.com${url}`;
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    url: fullUrl,
    ...(caption && { caption }),
    ...(description && { description }),
    width,
    height,
    contentUrl: fullUrl
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
