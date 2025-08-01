import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

/**
 * Mobile input optimization component
 * Optimizes input behavior for mobile devices
 */
export const MobileInputOptimizer = () => {
  const isMobile = useIsMobile();

  React.useEffect(() => {
    if (!isMobile) return;

    // Optimize input behavior for mobile
    const optimizeInputs = () => {
      const inputs = document.querySelectorAll('input, textarea');
      
      inputs.forEach((input) => {
        // Prevent zoom on input focus for iOS
        if (!input.hasAttribute('data-mobile-optimized')) {
          input.setAttribute('data-mobile-optimized', 'true');
          
          // Ensure proper input types for mobile keyboards
          if (input.getAttribute('type') === 'text' && input.getAttribute('inputmode') === null) {
            // Check if input is for serial numbers or similar
            const placeholder = input.getAttribute('placeholder')?.toLowerCase() || '';
            const name = input.getAttribute('name')?.toLowerCase() || '';
            
            if (placeholder.includes('serial') || placeholder.includes('imei') || placeholder.includes('vin') || 
                name.includes('serial') || name.includes('imei') || name.includes('vin')) {
              input.setAttribute('inputmode', 'text');
              input.setAttribute('autocapitalize', 'characters');
            }
          }
          
          // Improve touch targets
          const element = input as HTMLElement;
          if (element.style.minHeight === '' || element.style.minHeight === '0px') {
            element.style.minHeight = '44px'; // Apple's recommended touch target size
          }
        }
      });

      // Optimize buttons for touch
      const buttons = document.querySelectorAll('button');
      buttons.forEach((button) => {
        if (!button.hasAttribute('data-mobile-optimized')) {
          button.setAttribute('data-mobile-optimized', 'true');
          const buttonElement = button as HTMLElement;
          
          // Ensure minimum touch target size
          const computedStyle = window.getComputedStyle(buttonElement);
          const height = parseInt(computedStyle.height);
          if (height < 44) {
            buttonElement.style.minHeight = '44px';
          }
        }
      });
    };

    // Initial optimization
    optimizeInputs();

    // Observer for dynamically added inputs
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              if (element.matches('input, textarea, button') || 
                  element.querySelector('input, textarea, button')) {
                optimizeInputs();
              }
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
    };
  }, [isMobile]);

  return null;
};