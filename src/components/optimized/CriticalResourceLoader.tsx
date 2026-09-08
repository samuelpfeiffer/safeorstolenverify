import { useEffect } from 'react';
import { preloadResource } from '@/utils/performance';

export const CriticalResourceLoader = () => {
  useEffect(() => {
    // Preload critical fonts
    preloadResource('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', 'style');
    
    // Preload critical images
    preloadResource('/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png', 'image');
    
    // Module preload hints removed during the TanStack Start migration —
    // the old SPA entry points (/src/main.tsx, AppRoot.tsx) no longer exist.
    
    
    // DNS prefetch for external domains
    const externalDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://js.stripe.com',
      'https://www.google-analytics.com'
    ];
    
    externalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  }, []);

  return null; // This component doesn't render anything
};