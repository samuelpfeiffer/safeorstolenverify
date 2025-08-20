import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOUrl {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  priority: 'high' | 'medium' | 'low';
  category: 'verification' | 'info' | 'legal' | 'business';
}

/**
 * SEO URL validation and tracking component
 * Ensures all URLs follow SEO best practices and tracks coverage
 * Note: This component must be rendered inside a Router context
 */
export const SEOUrlValidation: React.FC = () => {
  let location;
  
  try {
    location = useLocation();
  } catch (error) {
    // Component is being rendered outside Router context
    console.warn('SEOUrlValidation: useLocation hook used outside Router context');
    return null;
  }

  // Define all expected SEO-optimized URLs
  const seoUrls: SEOUrl[] = [
    // High priority verification pages
    { path: '/', title: 'Home', description: 'Main landing page', keywords: ['check if stolen', 'IMEI verification', 'VIN check'], priority: 'high', category: 'verification' },
    { path: '/check-phone', title: 'Phone IMEI Check', description: 'IMEI verification page', keywords: ['IMEI check stolen', 'phone verification'], priority: 'high', category: 'verification' },
    { path: '/check-car', title: 'Car VIN Check', description: 'VIN verification page', keywords: ['VIN check stolen', 'car verification'], priority: 'high', category: 'verification' },
    { path: '/check-electronics', title: 'Electronics Serial Check', description: 'Electronics verification', keywords: ['serial number check', 'electronics stolen'], priority: 'high', category: 'verification' },
    { path: '/check-bike', title: 'Bike Serial Check', description: 'Bike verification', keywords: ['bike serial check', 'bicycle stolen'], priority: 'high', category: 'verification' },
    { path: '/firearms-check', title: 'Firearms Check', description: 'Firearms verification', keywords: ['gun serial check', 'firearm verification'], priority: 'high', category: 'verification' },
    { path: '/real-time-verification', title: 'Real-time Verification', description: 'Live verification service', keywords: ['real time verification', 'instant check'], priority: 'high', category: 'verification' },
    
    // Medium priority info pages
    { path: '/how-it-works', title: 'How It Works', description: 'Process explanation', keywords: ['how to check stolen', 'verification process'], priority: 'medium', category: 'info' },
    { path: '/about', title: 'About Us', description: 'Company information', keywords: ['about safe or stolen', 'company mission'], priority: 'medium', category: 'info' },
    { path: '/about-problem', title: 'About the Problem', description: 'Stolen goods crisis', keywords: ['stolen goods crisis', 'marketplace fraud'], priority: 'medium', category: 'info' },
    { path: '/problem', title: 'The Problem', description: 'Detailed problem analysis', keywords: ['stolen goods problem', 'fraud statistics'], priority: 'medium', category: 'info' },
    { path: '/our-story', title: 'Our Story', description: 'Company story', keywords: ['safe or stolen story', 'founders'], priority: 'medium', category: 'info' },
    { path: '/pricing', title: 'Pricing', description: 'Service pricing', keywords: ['verification pricing', 'cost'], priority: 'medium', category: 'business' },
    { path: '/faq', title: 'FAQ', description: 'Frequently asked questions', keywords: ['FAQ stolen check', 'how to verify'], priority: 'medium', category: 'info' },
    
    // Business pages
    { path: '/for-consumers', title: 'For Consumers', description: 'Consumer solutions', keywords: ['consumer protection', 'buyer safety'], priority: 'medium', category: 'business' },
    { path: '/for-brands', title: 'For Brands', description: 'Business solutions', keywords: ['brand protection', 'business verification'], priority: 'medium', category: 'business' },
    { path: '/enterprise-demo', title: 'Enterprise Demo', description: 'Enterprise solutions', keywords: ['enterprise verification', 'business demo'], priority: 'medium', category: 'business' },
    
    // Low priority pages
    { path: '/contact', title: 'Contact', description: 'Contact information', keywords: ['contact support', 'help'], priority: 'low', category: 'info' },
    { path: '/blog', title: 'Blog', description: 'Blog posts', keywords: ['verification blog', 'safety tips'], priority: 'low', category: 'info' },
    { path: '/community', title: 'Community', description: 'User community', keywords: ['community stories', 'user experiences'], priority: 'low', category: 'info' },
    
    // Legal pages
    { path: '/privacy-policy', title: 'Privacy Policy', description: 'Privacy policy', keywords: ['privacy policy'], priority: 'low', category: 'legal' },
    { path: '/terms-of-service', title: 'Terms of Service', description: 'Terms of service', keywords: ['terms of service'], priority: 'low', category: 'legal' },
    { path: '/disclaimer', title: 'Disclaimer', description: 'Service disclaimer', keywords: ['disclaimer'], priority: 'low', category: 'legal' },
    { path: '/cookies', title: 'Cookies Policy', description: 'Cookie policy', keywords: ['cookies policy'], priority: 'low', category: 'legal' },
    { path: '/refunds', title: 'Refunds', description: 'Refund policy', keywords: ['refund policy'], priority: 'low', category: 'legal' }
  ];

  useEffect(() => {
    if (!location) return;
    
    // Validate current URL structure
    const currentPath = location.pathname;
    const currentUrl = seoUrls.find(url => url.path === currentPath);
    
    if (process.env.NODE_ENV === 'development') {
      // Check URL SEO compliance
      const urlChecks = {
        hasKebabCase: /^\/[a-z0-9-\/]*$/.test(currentPath),
        hasTrailingSlash: currentPath.endsWith('/') && currentPath !== '/',
        hasMultipleSlashes: /\/\//.test(currentPath),
        hasSpecialChars: /[^a-z0-9-\/]/.test(currentPath),
        isInSEOList: !!currentUrl
      };

      const issues = [];
      if (!urlChecks.hasKebabCase) issues.push('URL should use kebab-case only');
      if (urlChecks.hasTrailingSlash) issues.push('URL should not have trailing slash');
      if (urlChecks.hasMultipleSlashes) issues.push('URL has multiple consecutive slashes');
      if (urlChecks.hasSpecialChars) issues.push('URL contains special characters');
      if (!urlChecks.isInSEOList && !currentPath.startsWith('/admin') && !currentPath.startsWith('/auth') && !currentPath.startsWith('/dashboard')) {
        issues.push('URL not in SEO validation list');
      }

      if (issues.length > 0) {
        console.warn(`SEO URL Issues for ${currentPath}:`, issues);
      }

      // Track URL performance
      if (currentUrl) {
        console.log(`SEO URL: ${currentPath} - Priority: ${currentUrl.priority}, Category: ${currentUrl.category}`);
      }
    }
  }, [location?.pathname]);

  return null; // This component doesn't render anything
};

/**
 * Get SEO recommendations for a given URL
 */
export const getSEORecommendations = (path: string): string[] => {
  const recommendations = [];
  
  // Check for common SEO issues
  if (path.includes('_')) {
    recommendations.push('Replace underscores with hyphens for better SEO');
  }
  
  if (path.length > 60) {
    recommendations.push('URL is too long for optimal SEO (max 60 characters recommended)');
  }
  
  if (!/^\/[a-z0-9-\/]*$/.test(path)) {
    recommendations.push('Use only lowercase letters, numbers, and hyphens in URLs');
  }
  
  if (path.split('/').length > 5) {
    recommendations.push('URL hierarchy is too deep (max 4 levels recommended)');
  }
  
  return recommendations;
};