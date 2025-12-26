import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SpeakableSchemaProps {
  articleTitle: string;
  articleDescription: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  speakableCssSelectors?: string[];
  url: string;
}

/**
 * Speakable Schema for voice search optimization
 * Tells Google which parts of an article can be read aloud by voice assistants
 */
export const SpeakableSchema: React.FC<SpeakableSchemaProps> = ({
  articleTitle,
  articleDescription,
  datePublished,
  dateModified,
  author = "Samuel Pfeiffer",
  speakableCssSelectors = [".article-summary", ".article-intro", "h1", ".key-takeaway"],
  url
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleTitle,
    "description": articleDescription,
    "author": {
      "@type": "Person",
      "name": author,
      "url": "https://safeorstolen.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://safeorstolen.com/logo.png"
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": speakableCssSelectors
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

export default SpeakableSchema;
