import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSafeLocation } from '@/hooks/useSafeLocation';
import { VALID_ROUTES as VALID_APP_ROUTES } from '@/utils/seo/sitemapRouteValidator';

// Define valid routes for validation
const VALID_ROUTES = new Set<string>([
  ...Array.from(VALID_APP_ROUTES),
  '/404',
]);

// Routes that support dynamic segments
const DYNAMIC_ROUTE_PATTERNS = [
  /^\/blog\/[^\/]+$/,
  /^\/blog\/category\/[^\/]+$/,
  /^\/verification-results\/[^\/]+$/,
  /^\/admin\/[^\/]+$/,
  /^\/fastercapital\/[^\/]+$/,
  /^\/item\/[^\/]+$/,
  /^\/shared\/[^\/]+$/,
  /^\/youtube\/[^\/]+$/,
];

export const RouteValidator: React.FC = () => {
  const location = useSafeLocation();
  const navigate = useNavigate();
  
  if (!location) return null;

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

      // Pricing
      '/price': '/pricing',
      '/prices': '/pricing',
      '/plans': '/pricing',
      '/subscriptions': '/pricing',

      // Verification
      '/stolen-item-checker': '/verify',
      '/verification-hub': '/verify',
      '/for-consumers': '/verify',
      '/imei-check': '/imei-checker',
      '/vin-check': '/vin-checker',
      '/vin-verification': '/vin-checker',

      // Support / info
      '/help': '/faq',
      '/support': '/faq',
      '/contact': '/about',
      '/contact-us': '/about',
      '/about-problem': '/about',
      '/about-us': '/about',

      // Business
      '/enterprise-demo': '/for-businesses',
      '/marketplace-integration': '/for-marketplaces',
      '/for-brands': '/for-businesses',

      // Mobile app legacy
      '/mobile-app': '/app',
      '/get-app': '/app',
      '/install-app': '/app',

      // Legacy policy pages
      '/privacy-policy': '/privacy',
      '/privacy-policy-page': '/privacy',
      '/terms-of-service': '/terms',
      '/terms-of-service-page': '/terms',
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