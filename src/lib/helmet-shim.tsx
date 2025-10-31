import { useEffect, ReactNode } from 'react';

/**
 * Helmet Shim - Replaces react-helmet-async without requiring providers
 * Works directly with DOM for maximum reliability across all devices
 */

interface HelmetProps {
  children?: ReactNode;
  title?: string;
  meta?: Array<{ name?: string; property?: string; content?: string; }>;
  link?: Array<{ rel: string; href: string; }>;
  script?: Array<{ type?: string; innerHTML?: string; src?: string; }>;
}

export const Helmet: React.FC<HelmetProps> = ({ children, title, meta, link, script }) => {
  useEffect(() => {
    // Handle title
    if (title) {
      document.title = title;
    }

    // Handle meta tags
    if (meta) {
      meta.forEach(({ name, property, content }) => {
        if (!content) return;
        
        const attribute = property ? 'property' : 'name';
        const attributeValue = property || name;
        if (!attributeValue) return;

        let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
        
        if (!element) {
          element = document.createElement('meta');
          element.setAttribute(attribute, attributeValue);
          document.head.appendChild(element);
        }
        
        element.setAttribute('content', content);
      });
    }

    // Handle link tags
    if (link) {
      link.forEach(({ rel, href }) => {
        let element = document.querySelector(`link[rel="${rel}"]`);
        
        if (!element) {
          element = document.createElement('link');
          element.setAttribute('rel', rel);
          document.head.appendChild(element);
        }
        
        element.setAttribute('href', href);
      });
    }

    // Handle script tags
    if (script) {
      script.forEach(({ type, innerHTML, src }) => {
        const scriptElement = document.createElement('script');
        if (type) scriptElement.type = type;
        if (innerHTML) scriptElement.innerHTML = innerHTML;
        if (src) scriptElement.src = src;
        document.head.appendChild(scriptElement);
      });
    }
  }, [title, meta, link, script, children]);

  return null;
};

// Create a simple HelmetProvider shim that does nothing
export const HelmetProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <>{children}</>;
};
