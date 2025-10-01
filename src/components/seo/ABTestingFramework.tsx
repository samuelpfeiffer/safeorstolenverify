import React, { useEffect, useState } from 'react';
import { trackSEOABTest } from '@/utils/seo/analyticsOptimizer';

interface ABTestConfig {
  testName: string;
  element: string;
  variants: {
    A: string;
    B: string;
  };
  trafficSplit?: number; // 0.5 = 50/50 split
}

interface ABTestingFrameworkProps {
  tests?: ABTestConfig[];
}

export const ABTestingFramework: React.FC<ABTestingFrameworkProps> = ({ 
  tests = [] 
}) => {
  const [activeTests, setActiveTests] = useState<Map<string, string>>(new Map());

  useEffect(() => {
    const defaultTests: ABTestConfig[] = [
      {
        testName: 'homepage_hero_headline',
        element: 'h1[data-testid="hero-headline"]',
        variants: {
          A: 'Verify Stolen Goods Instantly | SafeOrStolen',
          B: 'Check if Phone, Car or Device is Stolen in 30 Seconds'
        }
      },
      {
        testName: 'meta_description_test',
        element: 'meta[name="description"]',
        variants: {
          A: 'Instantly check if a phone or vehicle is stolen. Enter IMEI or VIN to verify with SafeOrStolen\'s global database.',
          B: 'Protect yourself from buying stolen goods. Verify IMEI, VIN, or serial numbers in our comprehensive theft database.'
        }
      },
      {
        testName: 'cta_button_text',
        element: 'button[data-testid="main-cta"]',
        variants: {
          A: 'Check Now - Free',
          B: 'Verify Before You Buy'
        }
      },
      {
        testName: 'verification_headline',
        element: 'h2[data-testid="verification-headline"]',
        variants: {
          A: 'How SafeOrStolen Protects Your Purchase',
          B: '$2.3M in Scams Prevented - Here\'s How We Do It'
        }
      }
    ];

    const allTests = [...defaultTests, ...tests];

    // Run tests only once when component mounts
    const runTestsOnce = () => {
      allTests.forEach(test => {
        runABTest(test);
      });

      // Initialize FAQ schema A/B test
      initializeFAQSchemaTest();
    };

    // Use setTimeout to prevent infinite re-renders
    const timeoutId = setTimeout(runTestsOnce, 100);
    
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array to run only once

  const runABTest = (config: ABTestConfig) => {
    const { testName, element, variants, trafficSplit = 0.5 } = config;
    
    // Get or set variant for this user
    let userVariant = localStorage.getItem(`ab_test_${testName}`);
    
    if (!userVariant) {
      userVariant = Math.random() < trafficSplit ? 'A' : 'B';
      localStorage.setItem(`ab_test_${testName}`, userVariant);
    }

    // Apply the variant
    const targetElement = document.querySelector(element);
    if (targetElement) {
      const variantContent = variants[userVariant as 'A' | 'B'];
      
      if (element.includes('meta')) {
        targetElement.setAttribute('content', variantContent);
      } else {
        targetElement.textContent = variantContent;
      }

      // Track the test assignment
      trackSEOABTest(testName, userVariant, element);
      
      setActiveTests(prev => new Map(prev.set(testName, userVariant)));
    }
  };

  const initializeFAQSchemaTest = () => {
    const faqElements = document.querySelectorAll('[data-seo="faq-item"]');
    if (faqElements.length === 0) return;

    const testVariant = localStorage.getItem('ab_test_faq_schema') || 
      (Math.random() < 0.5 ? 'A' : 'B');
    
    if (!localStorage.getItem('ab_test_faq_schema')) {
      localStorage.setItem('ab_test_faq_schema', testVariant);
    }

    if (testVariant === 'B') {
      // Inject enhanced FAQ schema for variant B
      const faqSchemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": Array.from(faqElements).map((faq, index) => {
          const question = faq.querySelector('h3, .faq-question')?.textContent || `FAQ ${index + 1}`;
          const answer = faq.querySelector('.faq-answer, p')?.textContent || 'Answer not available';
          
          return {
            "@type": "Question",
            "name": question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": answer
            }
          };
        })
      };

      const schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.textContent = JSON.stringify(faqSchemaData);
      document.head.appendChild(schemaScript);
    }

    trackSEOABTest('faq_schema_enhancement', testVariant, 'schema_markup');
  };

  // Track conversions for A/B tests
  useEffect(() => {
    const trackConversion = (testName: string, conversionType: string) => {
      const variant = activeTests.get(testName);
      if (variant && window.gtag) {
        window.gtag('event', 'ab_test_conversion', {
          event_category: 'SEO_AB_Testing',
          test_name: testName,
          variant: variant,
          conversion_type: conversionType,
          page_path: window.location.pathname,
          timestamp: Date.now()
        });
      }
    };

    // Track button clicks as conversions
    const handleConversionClick = (e: Event) => {
      const target = e.target as HTMLElement;
      
      if (target.matches('[data-testid="main-cta"]')) {
        trackConversion('cta_button_text', 'cta_click');
      }
      
      if (target.matches('form button, input[type="submit"]')) {
        trackConversion('homepage_hero_headline', 'form_submission');
      }
      
      if (target.matches('[data-seo="verification-start"]')) {
        trackConversion('verification_headline', 'verification_start');
      }
    };

    document.addEventListener('click', handleConversionClick);
    
    // Track scroll depth as engagement conversion
    let maxScroll = 0;
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > maxScroll && scrollPercent >= 75) {
        maxScroll = scrollPercent;
        activeTests.forEach((variant, testName) => {
          trackConversion(testName, 'deep_engagement');
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('click', handleConversionClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeTests]);

  // Export test results for analysis
  const exportTestResults = () => {
    const results = Array.from(activeTests.entries()).map(([testName, variant]) => ({
      testName,
      variant,
      timestamp: Date.now(),
      page: window.location.pathname
    }));
    
    console.log('Active A/B Tests:', results);
    return results;
  };

  // Make export function globally available
  useEffect(() => {
    (window as any).exportABTestResults = exportTestResults;
  }, [activeTests]);

  // No visual display - A/B testing runs silently in backend
  return null;
};