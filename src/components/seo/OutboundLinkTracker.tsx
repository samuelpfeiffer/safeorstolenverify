import React, { useEffect } from 'react';

interface OutboundLinkData {
  url: string;
  linkText: string;
  position: 'header' | 'content' | 'footer' | 'sidebar';
  context: string;
}

export const OutboundLinkTracker: React.FC = () => {
  useEffect(() => {
    let conversionTrackingMap = new Map<string, number>();

    const trackOutboundLink = (linkData: OutboundLinkData) => {
      if (window.gtag) {
        const domain = new URL(linkData.url).hostname;
        
        window.gtag('event', 'outbound_link_click', {
          event_category: 'Outbound_Links',
          event_action: 'Click',
          event_label: domain,
          link_url: linkData.url,
          link_text: linkData.linkText.slice(0, 100),
          link_position: linkData.position,
          link_context: linkData.context,
          page_path: window.location.pathname,
          timestamp: Date.now()
        });

        // Track for conversion attribution
        const trackingId = `${domain}_${Date.now()}`;
        conversionTrackingMap.set(trackingId, Date.now());
        
        // Store in sessionStorage for conversion tracking
        const existingTracking = JSON.parse(sessionStorage.getItem('outbound_tracking') || '[]');
        existingTracking.push({
          domain,
          url: linkData.url,
          clickTime: Date.now(),
          trackingId,
          referrerPage: window.location.pathname
        });
        sessionStorage.setItem('outbound_tracking', JSON.stringify(existingTracking));
      }
    };

    const getLinkPosition = (element: HTMLAnchorElement): OutboundLinkData['position'] => {
      const header = element.closest('header, nav, .navbar, .header');
      const footer = element.closest('footer, .footer');
      const sidebar = element.closest('aside, .sidebar, .side-nav');
      
      if (header) return 'header';
      if (footer) return 'footer';
      if (sidebar) return 'sidebar';
      return 'content';
    };

    const getLinkContext = (element: HTMLAnchorElement): string => {
      const parent = element.closest('article, section, div[class*="content"], p, li');
      const parentClass = parent?.className || '';
      const parentTag = parent?.tagName.toLowerCase() || '';
      
      // Check for specific contexts
      if (parentClass.includes('social')) return 'social_media';
      if (parentClass.includes('partner') || parentClass.includes('sponsor')) return 'partnership';
      if (parentClass.includes('reference') || parentClass.includes('source')) return 'reference';
      if (parentClass.includes('testimonial') || parentClass.includes('review')) return 'testimonial';
      if (parentTag === 'article') return 'article_content';
      if (parentTag === 'li') return 'list_item';
      
      return 'general_content';
    };

    const handleLinkClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a') as HTMLAnchorElement;
      
      if (!link || !link.href) return;
      
      const isExternal = !link.href.includes(window.location.hostname) && 
                        link.href.startsWith('http');
      
      if (isExternal) {
        const linkData: OutboundLinkData = {
          url: link.href,
          linkText: link.textContent?.trim() || link.getAttribute('aria-label') || 'No text',
          position: getLinkPosition(link),
          context: getLinkContext(link)
        };
        
        trackOutboundLink(linkData);
      }
    };

    // Track referral traffic and potential conversions
    const trackReferralConversions = () => {
      const referrer = document.referrer;
      if (!referrer || referrer.includes(window.location.hostname)) return;

      const referrerDomain = new URL(referrer).hostname;
      
      // Check if this is a return visit that could be attributed to outbound link
      const outboundTracking = JSON.parse(sessionStorage.getItem('outbound_tracking') || '[]');
      const recentOutboundClick = outboundTracking.find((track: any) => 
        referrer.includes(track.domain) && 
        (Date.now() - track.clickTime) < 24 * 60 * 60 * 1000 // Within 24 hours
      );

      if (window.gtag) {
        window.gtag('event', 'referral_traffic_attribution', {
          event_category: 'Referral_Attribution',
          referrer_domain: referrerDomain,
          has_outbound_attribution: !!recentOutboundClick,
          attribution_confidence: recentOutboundClick ? 'high' : 'low',
          page_path: window.location.pathname,
          timestamp: Date.now()
        });

        // Track as potential conversion if there was recent outbound activity
        if (recentOutboundClick) {
          window.gtag('event', 'outbound_link_conversion', {
            event_category: 'Outbound_Link_Performance',
            original_outbound_url: recentOutboundClick.url,
            referrer_page: recentOutboundClick.referrerPage,
            conversion_page: window.location.pathname,
            time_to_conversion: Math.round((Date.now() - recentOutboundClick.clickTime) / 1000 / 60), // minutes
            timestamp: Date.now()
          });
        }
      }
    };

    // Monitor for backlink analysis
    const analyzeBacklinkSources = () => {
      const referrer = document.referrer;
      if (!referrer || referrer.includes(window.location.hostname)) return;

      const referrerDomain = new URL(referrer).hostname;
      
      // Categorize referral sources
      const getSourceType = (domain: string): string => {
        if (domain.includes('google') || domain.includes('bing') || domain.includes('yahoo')) return 'search_engine';
        if (domain.includes('facebook') || domain.includes('twitter') || domain.includes('linkedin')) return 'social_media';
        if (domain.includes('reddit') || domain.includes('forum')) return 'forum';
        if (domain.includes('blog') || domain.includes('news')) return 'editorial';
        return 'direct_backlink';
      };

      const sourceType = getSourceType(referrerDomain);

      if (window.gtag) {
        window.gtag('event', 'backlink_analysis', {
          event_category: 'Backlink_Performance',
          source_domain: referrerDomain,
          source_type: sourceType,
          landing_page: window.location.pathname,
          traffic_quality: sourceType === 'search_engine' ? 'high' : 
                          sourceType === 'social_media' ? 'medium' : 'low',
          timestamp: Date.now()
        });
      }
    };

    // Initialize tracking
    document.addEventListener('click', handleLinkClick);
    
    // Track on page load
    setTimeout(() => {
      trackReferralConversions();
      analyzeBacklinkSources();
    }, 1000);

    // Track high-value outbound links specifically
    const trackHighValueOutboundLinks = () => {
      const highValueDomains = [
        'stripe.com', 'paypal.com', 'checkout.com', // Payment processors
        'trustpilot.com', 'reviews.com', // Review sites
        'fbi.gov', 'ic3.gov', 'ftc.gov', // Authority sites
        'apple.com', 'google.com', 'microsoft.com' // Tech authorities
      ];

      const highValueLinks = Array.from(document.querySelectorAll('a[href]'))
        .filter(link => {
          const href = (link as HTMLAnchorElement).href;
          return highValueDomains.some(domain => href.includes(domain));
        });

      if (window.gtag && highValueLinks.length > 0) {
        window.gtag('event', 'high_value_outbound_links_present', {
          event_category: 'Outbound_Link_Quality',
          high_value_links_count: highValueLinks.length,
          domains: highValueLinks.map(link => 
            new URL((link as HTMLAnchorElement).href).hostname
          ).join(','),
          page_path: window.location.pathname
        });
      }
    };

    setTimeout(trackHighValueOutboundLinks, 2000);

    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return null;
};