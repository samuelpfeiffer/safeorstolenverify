import { useEffect } from 'react';

export const usePerformanceOptimization = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.href = '/lovable-uploads/d4daf30e-bbe3-49e5-b6b6-041b57ccd7fa.png';
    preloadLink.as = 'image';
    document.head.appendChild(preloadLink);

    // Remove unused CSS classes at runtime (basic cleanup)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn');
        }
      });
    }, { threshold: 0.1 });

    // Observe sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      document.head.removeChild(preloadLink);
    };
  }, []);
};