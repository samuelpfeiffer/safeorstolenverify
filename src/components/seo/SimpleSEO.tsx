import { useEffect } from 'react';

interface SimpleSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  noindex?: boolean;
  children?: React.ReactNode;
}

/**
 * Simple SEO Component - Direct DOM manipulation (no providers needed)
 * Works reliably across all devices without context dependencies
 */
export const SimpleSEO: React.FC<SimpleSEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogTitle,
  ogDescription,
  noindex = false,
  children
}) => {
  useEffect(() => {
    // Set document title
    if (title) {
      document.title = title;
    }

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Update link tags
    const updateLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      
      element.setAttribute('href', href);
    };

    // Standard meta tags
    if (description) updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);
    if (noindex) {
      updateMetaTag('robots', 'noindex, nofollow');
    } else {
      updateMetaTag('robots', 'index, follow, max-image-preview:large');
    }

    // Open Graph tags
    updateMetaTag('og:type', 'website', true);
    if (ogTitle || title) updateMetaTag('og:title', ogTitle || title || '', true);
    if (ogDescription || description) updateMetaTag('og:description', ogDescription || description || '', true);
    if (ogImage) updateMetaTag('og:image', ogImage, true);
    if (canonical) updateMetaTag('og:url', canonical, true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    if (ogTitle || title) updateMetaTag('twitter:title', ogTitle || title || '');
    if (ogDescription || description) updateMetaTag('twitter:description', ogDescription || description || '');
    if (ogImage) updateMetaTag('twitter:image', ogImage);

    // Canonical URL
    if (canonical) updateLinkTag('canonical', canonical);
  }, [title, description, keywords, canonical, ogImage, ogTitle, ogDescription, noindex]);

  return <>{children}</>;
};
