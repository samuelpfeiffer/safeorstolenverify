import { Helmet } from 'react-helmet-async';

interface PressReleaseSchemaProps {
  headline: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  description: string;
  url: string;
}

export const PressReleaseSchema = ({ 
  headline, 
  datePublished, 
  dateModified,
  author, 
  description,
  url 
}: PressReleaseSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": headline,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Organization",
      "name": author,
      "url": "https://safeorstolen.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://safeorstolen.com/images/sos-logo.png"
      }
    },
    "description": description,
    "url": url,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
