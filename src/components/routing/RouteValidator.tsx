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
    
    // Redirect common mistyped routes (COMPREHENSIVE - GSC NOINDEX FIXES Jan 2026)
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

      // Verification - COMPREHENSIVE LIST FROM GSC
      '/stolen-item-checker': '/verify',
      '/verification-hub': '/verify',
      '/for-consumers': '/verify',
      '/imei-check': '/imei-checker',
      '/vin-check': '/vin-checker',
      '/vin-verification': '/vin-checker',
      '/verify-not-stolen': '/verify',
      '/bulk': '/verify',
      '/stolen-items-database': '/verify',
      '/marketplace-integration': '/verify',
      '/verification-app': '/app',
      '/imei-checker-app': '/app',
      '/canada-vin-check': '/vin-checker',
      
      // Verify subdirectories - GSC PAGE WITH REDIRECT errors
      '/verify/auctions': '/verify',
      '/verify/facebook-marketplace': '/verify',
      '/verify/ebay': '/verify',
      '/verify/pawnshops': '/verify',
      '/verify/offerup': '/verify',
      '/verify/craigslist': '/verify',

      // Support / info
      '/help': '/faq',
      '/support': '/faq',
      '/contact-us': '/about',
      '/about-problem': '/about',
      '/about-us': '/about',

      // Business
      '/enterprise-demo': '/for-businesses',
      '/for-brands': '/for-businesses',

      // Mobile app legacy - COMPREHENSIVE LIST
      '/mobile-app': '/app',
      '/get-app': '/app',
      '/install-app': '/app',
      '/android-app': '/app',
      '/ios-app': '/app',
      '/secondhand-research-app': '/app',
      '/pwa-app': '/app',
      '/download-app': '/download',

      // App subdirectories - GSC NOINDEX FIXES
      '/app/features/history': '/app/features',
      '/app/research-stolen-car': '/app',
      '/app/buyer-protection-research': '/app',
      '/app/research-stolen-phone': '/app',
      '/app/facebook-marketplace-checker': '/app',
      '/app/pawnshop-verification': '/app',
      '/app/research-stolen-items': '/app',
      '/app/offerup-safety': '/app',
      '/app/ebay-verification': '/app',
      '/app/secondhand-research-app': '/app',
      '/app/sellers': '/app',
      '/app/vs-carfax': '/vs-carfax',
      '/app/vs-imeiinfo': '/vs-imeiinfo',
      '/app/vs-imeipro': '/vs-imeiinfo',
      '/app/download': '/download',
      '/app/ios': '/app',
      '/app/android': '/app',

      // Legacy policy pages
      '/privacy-policy': '/privacy',
      '/privacy-policy-page': '/privacy',
      '/terms-of-service': '/terms',
      '/terms-of-service-page': '/terms',
      
      // Results page redirect
      '/results': '/verify',
      
      // State abbreviation pages - redirect to license plate pages
      '/california': '/california-license-plate-lookup',
      '/texas': '/texas-license-plate-lookup',
      '/florida': '/florida-license-plate-lookup',
      '/new-york': '/new-york-license-plate-lookup',
      
      // City pattern redirects
      '/chicago/imei-check': '/stolen-check-chicago',
      
      // Blog redirects
      '/blog/mobile-app-features': '/app',
      '/blog/best-imei-checker-tools-2025': '/blog/complete-imei-guide-protect-yourself',
      
      // Other phantom URLs
      '/features': '/how-it-works',
      '/transparency': '/about',
      '/data-sources': '/how-it-works',
      '/community': '/testimonials',
      '/statistics': '/about',
      '/press-release': '/press-kit',
      '/resource-center': '/blog',
      '/comprehensive-guide': '/how-it-works',
    };
    
    const redirectTo = redirectMap[currentPath.toLowerCase()];
    if (redirectTo) {
      navigate(redirectTo, { replace: true });
      return;
    }
    
    // Pattern-based redirects for blog timestamps and other patterns
    // Blog posts with timestamps (e.g., /blog/title-1760086814875)
    if (currentPath.match(/^\/blog\/.+-\d{10,}$/)) {
      navigate('/blog', { replace: true });
      return;
    }
    
    // Blog posts with version suffixes (e.g., /blog/title-1)
    if (currentPath.match(/^\/blog\/[a-z0-9-]+-\d{1,3}$/)) {
      navigate('/blog', { replace: true });
      return;
    }
    
    // City subdirectory patterns (e.g., /chicago/anything)
    if (currentPath.match(/^\/(chicago|los-angeles|new-york|houston|phoenix|philadelphia|miami|dallas|san-antonio|san-diego|san-jose)\/.+$/)) {
      navigate('/verify', { replace: true });
      return;
    }
    
    // City directory patterns (e.g., /city/chicago-il/*)
    if (currentPath.startsWith('/city/')) {
      navigate('/verify', { replace: true });
      return;
    }
    
    // State directory patterns (e.g., /state/texas/*)
    if (currentPath.startsWith('/state/')) {
      navigate('/verify', { replace: true });
      return;
    }
    
    // Guides directory patterns
    if (currentPath.startsWith('/guides/')) {
      navigate('/blog', { replace: true });
      return;
    }
    
    // Tools directory patterns
    if (currentPath.startsWith('/tools/')) {
      navigate('/verify', { replace: true });
      return;
    }
    
    // Statistics directory patterns
    if (currentPath.startsWith('/statistics/')) {
      navigate('/about', { replace: true });
      return;
    }
    
    // FasterCapital patterns
    if (currentPath.startsWith('/fastercapital/')) {
      navigate('/about', { replace: true });
      return;
    }
    
    // If no redirect found and route is invalid, go to 404
    if (!currentPath.startsWith('/404')) {
      navigate('/404', { replace: true });
    }
  }, [location.pathname, navigate]);

  return null;
};