import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Define valid routes for validation
const VALID_ROUTES = new Set([
  '/',
  '/auth',
  '/subscriptions',
  '/about',
  '/contact',
  '/faq',
  '/terms',
  '/privacy',
  '/blog',
  '/how-it-works',
  '/for-consumers',
  '/for-brands',
  '/our-story',
  '/privacy-policy',
  '/terms-of-service',
  '/disclaimer',
  '/cookies',
  '/refunds',
  '/enterprise-demo',
  '/referral',
  '/api-docs',
  '/sitemap',
  '/community',
  '/case-studies',
  '/trust-verification',
  '/data-sources',
  '/accuracy',
  '/verification-hub',
  '/ultimate-guide',
  '/auction-houses',
  '/pawn-shops',
  '/global-domination',
  '/marketplace-integration',
  '/how-to-check-if-item-stolen',
  '/stolen-items-database',
  '/stolen-property-lookup',
  '/check-if-stolen',
  '/stolen-goods-checker',
  '/stolen-merchandise-check',
  '/avoid-buying-stolen-goods',
  '/avoid-stolen-goods',
  '/ultimate-guide-not-buying-stolen-goods',
  '/how-to-check-if-anything-is-stolen-before-you-buy',
  '/firearms-check',
  '/check-phone',
  '/check-car',
  '/check-electronics',
  '/check-bike',
  '/item-categories',
  '/problem',
  '/arizona-license-plate-lookup',
  '/arizona-vin-lookup',
  '/theftaz',
  '/arizona-stolen-vehicle-check',
  '/dashboard',
  '/profile',
  '/subscription',
  '/analytics',
  '/search-history',
  '/receipts',
  '/purchase-history',
  '/security-settings',
  '/admin',
  '/subscription-success',
  '/subscription-cancel',
  '/404'
]);

// Routes that support dynamic segments
const DYNAMIC_ROUTE_PATTERNS = [
  /^\/blog\/[^\/]+$/,
  /^\/blog\/category\/[^\/]+$/,
  /^\/verification-results\/[^\/]+$/,
  /^\/admin\/[^\/]+$/,
  /^\/fastercapital\/[^\/]+$/
];

export const RouteValidator: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const currentPath = location.pathname;
    
    // Check if it's a valid static route
    if (VALID_ROUTES.has(currentPath)) {
      return;
    }
    
    // Check if it matches any dynamic route pattern
    const isDynamicRoute = DYNAMIC_ROUTE_PATTERNS.some(pattern => 
      pattern.test(currentPath)
    );
    
    if (isDynamicRoute) {
      return;
    }
    
    // Log invalid route access
    console.warn('Invalid route accessed:', currentPath);
    
    // Track invalid routes for analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'page_not_found', {
        page_path: currentPath,
        page_title: '404 - Page Not Found'
      });
    }
    
    // Redirect common mistyped routes
    const redirectMap: Record<string, string> = {
      '/home': '/',
      '/login': '/auth',
      '/signin': '/auth',
      '/signup': '/auth',
      '/register': '/auth',
      '/price': '/subscriptions',
      '/prices': '/subscriptions',
      '/plans': '/subscriptions',
      '/pricing': '/subscriptions',
      '/help': '/faq',
      '/support': '/contact',
      '/about-us': '/about',
      '/contact-us': '/contact',
      '/privacy-policy-page': '/privacy-policy',
      '/terms-of-service-page': '/terms-of-service'
    };
    
    const redirectTo = redirectMap[currentPath.toLowerCase()];
    if (redirectTo) {
      navigate(redirectTo, { replace: true });
      return;
    }
    
    // If no redirect found and route is invalid, go to 404
    if (!currentPath.startsWith('/404')) {
      navigate('/404', { replace: true });
    }
  }, [location.pathname, navigate]);

  return null;
};