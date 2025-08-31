import { useEffect } from 'react';

export const MobileLCPOptimizer = () => {
  useEffect(() => {
    // Mobile-specific LCP optimizations
    const optimizeForMobile = () => {
      // Detect mobile device
      const isMobile = window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      if (isMobile) {
        // Reduce image quality on mobile for faster loading
        document.querySelectorAll('img').forEach(img => {
          if (img.src && !img.src.includes('?')) {
            img.src += '?format=webp&quality=80&width=400';
          }
        });

        // Preload critical mobile resources
        const mobileResources = [
          { href: '/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png?format=webp&quality=80&width=400', as: 'image' }
        ];

        mobileResources.forEach(({ href, as }) => {
          if (!document.querySelector(`link[href="${href}"]`)) {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = href;
            link.as = as;
            link.setAttribute('fetchpriority', 'high');
            document.head.appendChild(link);
          }
        });

        // Reduce JavaScript execution on mobile
        const deferMobileScripts = () => {
          document.querySelectorAll('script[src]').forEach(script => {
            const src = script.getAttribute('src') || '';
            if (src.includes('analytics') || src.includes('tracking')) {
              script.setAttribute('defer', '');
            }
          });
        };

        // Optimize CSS delivery for mobile
        const optimizeMobileCSS = () => {
          const style = document.createElement('style');
          style.textContent = `
            /* Mobile LCP optimizations */
            @media (max-width: 768px) {
              .hero-section {
                min-height: auto;
              }
              
              img {
                image-rendering: optimizeSpeed;
                transform: translateZ(0);
              }
              
              .search-form {
                will-change: transform;
              }
            }
          `;
          document.head.appendChild(style);
        };

        deferMobileScripts();
        optimizeMobileCSS();
      }
    };

    // Run optimization
    optimizeForMobile();

    // Re-run on resize
    const handleResize = () => optimizeForMobile();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return null;
};