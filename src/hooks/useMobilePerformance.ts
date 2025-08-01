import React, { useEffect } from 'react';
import { useIsMobile } from './use-mobile';

/**
 * Mobile performance optimization hook
 */
export const useMobilePerformance = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!isMobile) return;

    // Optimize for mobile performance
    const optimizeForMobile = () => {
      // Reduce animation duration for mobile
      const style = document.createElement('style');
      style.textContent = `
        @media (max-width: 768px) {
          * {
            animation-duration: 0.15s !important;
            transition-duration: 0.15s !important;
          }
          
          .scroll-smooth {
            scroll-behavior: auto;
          }
        }
      `;
      document.head.appendChild(style);

      // Optimize image loading for mobile
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
      });

      // Reduce motion for users who prefer it
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.style.setProperty('animation-duration', '0.01ms', 'important');
        document.body.style.setProperty('animation-iteration-count', '1', 'important');
        document.body.style.setProperty('transition-duration', '0.01ms', 'important');
      }

      return style;
    };

    const style = optimizeForMobile();

    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) return;

    // Mobile-specific optimizations
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Pause heavy operations when app is in background
        const videos = document.querySelectorAll('video');
        videos.forEach(video => video.pause());
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isMobile]);
};