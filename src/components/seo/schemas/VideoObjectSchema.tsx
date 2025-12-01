import { Helmet } from 'react-helmet-async';

interface VideoObjectSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string; // ISO 8601 format (e.g., "PT5M30S")
  contentUrl?: string;
  embedUrl?: string;
}

/**
 * Professional VideoObject Schema Component
 * For video content SEO optimization
 */
export const VideoObjectSchema = ({ 
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration,
  contentUrl,
  embedUrl
}: VideoObjectSchemaProps) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl,
    uploadDate,
    ...(duration && { duration }),
    ...(contentUrl && { contentUrl }),
    ...(embedUrl && { embedUrl })
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
