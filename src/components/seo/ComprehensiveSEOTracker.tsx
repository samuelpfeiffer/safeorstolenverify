import React, { useEffect } from 'react';
import { 
  trackSEOInteraction,
  trackSchemaMarkup,
  trackReferralSources,
  trackSEOABTest,
  trackEnhancedWebVitals
} from '@/utils/seo/analyticsOptimizer';

export const ComprehensiveSEOTracker: React.FC = () => {
  useEffect(() => {
    // Initialize comprehensive SEO tracking
    const initializeSEOTracking = () => {
      // Track schema markup validation
      trackSchemaMarkup();
      
      // Track referral sources and backlinks
      trackReferralSources();
      
      // Enhanced Core Web Vitals monitoring
      trackEnhancedWebVitals();
      
      // Monitor SEO-related DOM interactions
      setupSEOInteractionTracking();
      
      // Track page metadata quality
      trackPageMetadataQuality();
      
      // Monitor content structure
      trackContentStructure();
      
      console.log('Comprehensive SEO tracking initialized with enhanced features');
    };

    // Setup SEO interaction tracking for specific elements
    const setupSEOInteractionTracking = () => {
      // Track title clicks (CTR simulation)
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        
        // Track FAQ expansions
        if (target.closest('[data-seo="faq-item"]')) {
          trackSEOInteraction('faq_expansion', 'FAQ Item Clicked', target.textContent?.slice(0, 50));
        }
        
        // Track breadcrumb navigation
        if (target.closest('[data-seo="breadcrumb"]')) {
          trackSEOInteraction('breadcrumb_click', 'Breadcrumb Navigation', target.textContent);
        }
        
        // Track review/rating interactions
        if (target.closest('[data-seo="review-submission"]')) {
          trackSEOInteraction('review_submission', 'User Review Submitted');
        }
        
        // Track internal link clicks for SEO
        if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('/')) {
          trackSEOInteraction('internal_link', 'Internal Navigation', target.getAttribute('href') || '');
        }
      });

      // Track rich snippet interactions
      const richSnippets = document.querySelectorAll('[data-seo="rich-snippet"]');
      richSnippets.forEach((snippet) => {
        snippet.addEventListener('click', () => {
          trackSEOInteraction('rich_snippet', 'Rich Snippet Interaction');
        });
      });
    };

    // Track page metadata quality for SEO
    const trackPageMetadataQuality = () => {
      const metaDescription = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
      const title = document.title;
      const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href');
      const hasOpenGraph = !!document.querySelector('meta[property="og:title"]');
      const hasTwitterCard = !!document.querySelector('meta[name="twitter:card"]');
      
      // Calculate SEO metadata score
      let seoScore = 0;
      if (title && title.length > 10 && title.length < 60) seoScore += 20;
      if (metaDescription && metaDescription.length > 50 && metaDescription.length < 160) seoScore += 20;
      if (canonical) seoScore += 15;
      if (hasOpenGraph) seoScore += 15;
      if (hasTwitterCard) seoScore += 10;
      
      // Track the metadata quality
      if (window.gtag) {
        window.gtag('event', 'seo_metadata_quality', {
          event_category: 'SEO_Technical',
          seo_score: seoScore,
          title_length: title.length,
          meta_description_length: metaDescription.length,
          has_canonical: !!canonical,
          has_open_graph: hasOpenGraph,
          has_twitter_card: hasTwitterCard,
          page_path: window.location.pathname
        });
      }
    };

    // Track content structure for SEO
    const trackContentStructure = () => {
      const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
      const images = document.images;
      const links = document.links;
      
      // Analyze heading hierarchy
      const headingStructure = headings.map(h => ({
        level: parseInt(h.tagName.charAt(1)),
        text: h.textContent?.trim() || '',
        hasId: !!h.id
      }));
      
      const h1Count = headings.filter(h => h.tagName === 'H1').length;
      const imagesWithoutAlt = Array.from(images).filter(img => !img.alt || img.alt.trim() === '').length;
      
      if (window.gtag) {
        window.gtag('event', 'seo_content_structure', {
          event_category: 'SEO_Content',
          h1_count: h1Count,
          total_headings: headings.length,
          images_without_alt: imagesWithoutAlt,
          total_images: images.length,
          total_links: links.length,
          content_word_count: getWordCount(),
          has_proper_heading_hierarchy: hasProperHeadingHierarchy(headingStructure),
          page_path: window.location.pathname
        });
      }
    };

    // Helper function to get word count
    const getWordCount = (): number => {
      const text = document.body.textContent || '';
      return text.trim().split(/\s+/).filter(word => word.length > 0).length;
    };

    // Helper function to check heading hierarchy
    const hasProperHeadingHierarchy = (headings: Array<{ level: number; text: string; hasId: boolean }>): boolean => {
      if (headings.length === 0) return false;
      
      // Should start with H1
      if (headings[0].level !== 1) return false;
      
      // Check for logical progression
      for (let i = 1; i < headings.length; i++) {
        const prevLevel = headings[i - 1].level;
        const currentLevel = headings[i].level;
        
        // Don't skip more than one level
        if (currentLevel > prevLevel + 1) return false;
      }
      
      return true;
    };

    // A/B Testing for SEO elements
    const runSEOABTests = () => {
      // Example: Test different meta descriptions
      const currentMetaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
      if (currentMetaDesc) {
        const variant = Math.random() > 0.5 ? 'A' : 'B';
        trackSEOABTest('meta_description_test', variant, 'description');
      }
      
      // Example: Test different title formats
      const currentTitle = document.title;
      if (currentTitle) {
        const hasKeywordFirst = currentTitle.toLowerCase().includes('safeor') || currentTitle.toLowerCase().includes('stolen');
        const variant = hasKeywordFirst ? 'keyword_first' : 'brand_first';
        trackSEOABTest('title_format_test', variant, 'title');
      }
    };

    // Initialize with a small delay to ensure DOM is ready
    setTimeout(() => {
      initializeSEOTracking();
      runSEOABTests();
    }, 1000);

    // Monitor for dynamic content changes
    const observer = new MutationObserver(() => {
      // Re-track schema markup if content changes
      trackSchemaMarkup();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};