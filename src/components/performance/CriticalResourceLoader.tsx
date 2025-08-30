import React, { useEffect } from 'react';

interface CriticalResourceLoaderProps {
  resources?: Array<{
    href: string;
    as: 'script' | 'style' | 'image' | 'font';
    crossOrigin?: 'anonymous' | 'use-credentials';
    type?: string;
  }>;
}

export const CriticalResourceLoader: React.FC<CriticalResourceLoaderProps> = ({ 
  resources = []
}) => {
  useEffect(() => {
    const defaultResources = [
      {
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
        as: 'style' as const,
        crossOrigin: 'anonymous' as const
      },
      {
        href: '/favicon.ico',
        as: 'image' as const
      }
    ];

    const allResources = [...defaultResources, ...resources];

    allResources.forEach(({ href, as, crossOrigin }) => {
      // Check if resource is already preloaded
      const existing = document.querySelector(`link[href="${href}"]`);
      if (!existing) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = as;
        
        if (crossOrigin) {
          link.crossOrigin = crossOrigin;
        }
        
        // Add error handling
        link.onerror = () => {
          console.warn(`Failed to preload resource: ${href}`);
        };
        
        document.head.appendChild(link);
      }
    });
  }, [resources]);

  return null;
};