import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useMobilePerformance } from '@/hooks/useMobilePerformance';

/**
 * Mobile-specific optimizations and configurations
 */
export const MobileOptimizer = () => {
  const isMobile = useIsMobile();
  useMobilePerformance();

  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    // Mobile-specific viewport optimizations
    if (isMobile) {
      // Prevent zoom on double tap
      let lastTouchEnd = 0;
      const preventDoubleTabZoom = (event: TouchEvent) => {
        const now = Date.now();
        if (now - lastTouchEnd <= 300) {
          event.preventDefault();
        }
        lastTouchEnd = now;
      };

      // Improve scroll performance
      const improveScrollPerformance = () => {
        document.body.style.overscrollBehavior = 'contain';
        document.body.style.touchAction = 'pan-y';
      };

      // Add mobile-specific classes to body
      document.body.classList.add('mobile-optimized');
      (document.body.style as any).webkitTapHighlightColor = 'transparent';

      // Prevent zoom on input focus (iOS Safari)
      const preventZoomOnInput = () => {
        const viewport = document.querySelector('meta[name="viewport"]');
        if (viewport) {
          viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
        }
      };

      // Apply optimizations
      document.addEventListener('touchend', preventDoubleTabZoom, { passive: false });
      improveScrollPerformance();
      preventZoomOnInput();

      // Cleanup
      return () => {
        document.removeEventListener('touchend', preventDoubleTabZoom);
        document.body.classList.remove('mobile-optimized');
        document.body.style.overscrollBehavior = '';
        document.body.style.touchAction = '';
        (document.body.style as any).webkitTapHighlightColor = '';
      };
    }
  }, [isMobile]);

  return null; // This component doesn't render anything
};