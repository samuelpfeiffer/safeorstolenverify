import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export interface BreadcrumbItem {
  name: string;
  href: string;
}

/**
 * Route name mapping for better breadcrumb labels
 */
const ROUTE_NAMES: Record<string, string> = {
  'verify': 'Verify Item',
  'stolen-item-checker': 'Stolen Item Checker',
  'check-phone': 'Check Phone',
  'check-car': 'Check Car',
  'check-bike': 'Check Bike',
  'check-electronics': 'Check Electronics',
  'how-it-works': 'How It Works',
  'for-brands': 'For Brands',
  'pricing': 'Pricing',
  'about': 'About Us',
  'contact': 'Contact',
  'faq': 'FAQ',
  'blog': 'Blog',
  'item-categories': 'Item Categories',
  'verification-hub': 'Verification Hub',
  'terms-of-service': 'Terms of Service',
  'privacy-policy': 'Privacy Policy',
  'ultimate-guide-not-buying-stolen': 'Ultimate Guide: Not Buying Stolen',
  'how-to-check-anything-stolen': 'How to Check Anything Stolen'
};

/**
 * Hook to automatically generate breadcrumbs from current route
 */
export const useBreadcrumbs = (): BreadcrumbItem[] => {
  const location = useLocation();

  return useMemo(() => {
    const segments = location.pathname.split('/').filter(Boolean);
    
    return segments.map((segment, index) => {
      const path = '/' + segments.slice(0, index + 1).join('/');
      const name = ROUTE_NAMES[segment] || segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      return {
        name,
        href: path
      };
    });
  }, [location.pathname]);
};

/**
 * Hook to create custom breadcrumbs with schema
 */
export const useCustomBreadcrumbs = (items: BreadcrumbItem[]) => {
  return useMemo(() => {
    // Always include home
    return [
      { name: 'Home', href: '/' },
      ...items
    ];
  }, [items]);
};
