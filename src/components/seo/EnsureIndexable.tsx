import { useEffect } from 'react';

interface EnsureIndexableProps {
  allowNoIndex?: boolean; // Set true only for pages like /404 or /subscription
}

/**
 * Ensures that the current page is indexable by:
 * - Removing any meta robots tags that include "noindex" (unless explicitly allowed)
 * - Injecting a single canonical robots tag with "index, follow"
 */
export const EnsureIndexable: React.FC<EnsureIndexableProps> = ({ allowNoIndex = false }) => {
  useEffect(() => {
    try {
      const metas = Array.from(document.querySelectorAll('meta[name="robots"], meta[name="googlebot"]'));

      // If noindex is explicitly allowed, ensure proper noindex is set and exit
      if (allowNoIndex) {
        const ensureTag = (name: string, content: string) => {
          let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
          if (!tag) {
            tag = document.createElement('meta');
            tag.name = name;
            document.head.appendChild(tag);
          }
          tag.content = content;
        };
        ensureTag('robots', 'noindex, nofollow');
        ensureTag('googlebot', 'noindex, nofollow');
        return;
      }

      // Otherwise, force indexable
      // Remove any meta tags that specify noindex
      metas.forEach((meta) => {
        const content = (meta.getAttribute('content') || '').toLowerCase();
        if (content.includes('noindex')) {
          meta.parentElement?.removeChild(meta);
        }
      });

      // Ensure a single robots and googlebot tag with index directives
      const ensureTag = (name: string, content: string) => {
        let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
        if (!tag) {
          tag = document.createElement('meta');
          tag.name = name;
          document.head.appendChild(tag);
        }
        tag.content = content;
      };

      ensureTag('robots', 'index, follow, max-image-preview:large, max-snippet:160');
      ensureTag('googlebot', 'index, follow, max-image-preview:large, max-snippet:160');
    } catch { }
  }, [allowNoIndex]);

  return null;
};
