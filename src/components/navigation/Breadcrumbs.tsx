import React from 'react';
import { Link } from 'react-router-dom';
import { useSafeLocation } from '@/hooks/useSafeLocation';
import { ChevronRight, Home } from 'lucide-react';
import { trackSEOInteraction } from '@/utils/seo/analyticsOptimizer';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrentPage?: boolean;
}

interface BreadcrumbsProps {
  customBreadcrumbs?: BreadcrumbItem[];
  showHome?: boolean;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ 
  customBreadcrumbs,
  showHome = true 
}) => {
  const location = useSafeLocation();
  
  if (!location) return null;

  // Generate automatic breadcrumbs from URL path
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [];

    if (showHome) {
      breadcrumbs.push({ label: 'Home', href: '/' });
    }

    // Route-specific breadcrumb mapping
    const routeMapping: Record<string, string> = {
      // Verification Services
      'verify': 'Verify Item',
      'imei-checker': 'IMEI Checker',
      'vin-checker': 'VIN Checker',
      'serial-number-checker': 'Serial Number Lookup',
      'check-phone': 'Phone Verification',
      'check-car': 'Car Verification', 
      'check-electronics': 'Electronics Check',
      'check-bike': 'Bike Verification',
      'firearms-check': 'Firearms Check',
      'license-plate-lookup': 'License Plate Lookup',
      
      // Guides and Resources
      'how-it-works': 'How It Works',
      'faq': 'Frequently Asked Questions',
      'blog': 'Blog & Insights',
      
      // Business Solutions
      'for-businesses': 'Business Solutions',
      'for-pawn-shops': 'Pawn Shop Solutions',
      'for-dealers': 'Dealer Solutions',
      'for-auction-houses': 'Auction House Tools',
      'for-marketplaces': 'Marketplace Integration',
      
      // Company Pages
      'about': 'About SafeOrStolen',
      'testimonials': 'Testimonials',
      'pricing': 'Pricing',
      'terms': 'Terms of Service',
      'privacy': 'Privacy Policy',
      
      // User Pages
      'auth': 'Sign In',
      'dashboard': 'Dashboard',
      'profile': 'Profile',
      'search-history': 'Search History',
      'receipts': 'Receipts',
      
      // Legal Pages
      'terms-of-service': 'Terms of Service',
      'privacy-policy': 'Privacy Policy',
      'disclaimer': 'Disclaimer',
      'cookies': 'Cookie Policy',
      'refunds': 'Refund Policy',
      
      // Categories
      'guides': 'Guides',
      'city': 'Local Services',
      'business': 'Business',
      'admin': 'Administration'
    };

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === pathSegments.length - 1;
      
      // Handle dynamic routes
      let label = routeMapping[segment] || segment.replace(/-/g, ' ');
      
      // Capitalize first letter of each word
      label = label.replace(/\b\w/g, (char) => char.toUpperCase());
      
      // Special handling for city pages
      if (pathSegments[index - 1] === 'city') {
        label = `${label} - Stolen Item Verification`;
      }
      
      // Special handling for blog posts
      if (pathSegments[index - 1] === 'blog' && segment !== 'category') {
        label = label.replace(/-/g, ' ');
      }
      
      breadcrumbs.push({
        label,
        href: currentPath,
        isCurrentPage: isLast
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = customBreadcrumbs || generateBreadcrumbs();

  // Don't show breadcrumbs on homepage
  if (location.pathname === '/' && !customBreadcrumbs) {
    return null;
  }

  // Generate structured data for breadcrumbs
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.label,
      "item": `https://safeorstolen.com${crumb.href}`
    }))
  };

  const handleBreadcrumbClick = (breadcrumb: BreadcrumbItem) => {
    trackSEOInteraction('breadcrumb_click', `${breadcrumb.label} - ${breadcrumb.href}`, 'Navigation');
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
      </Helmet>
      
      <nav 
        className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400 py-3 px-4 bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-800"
        aria-label="Breadcrumb navigation"
      >
        <ol className="flex items-center space-x-1" itemScope itemType="https://schema.org/BreadcrumbList">
          {breadcrumbs.map((breadcrumb, index) => (
            <li 
              key={breadcrumb.href} 
              className="flex items-center"
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
            >
              {index > 0 && (
                <ChevronRight className="w-4 h-4 mx-1 text-gray-400" aria-hidden="true" />
              )}
              
              {breadcrumb.isCurrentPage ? (
                <span 
                  className="font-medium text-gray-900 dark:text-white"
                  aria-current="page"
                  itemProp="name"
                >
                  {breadcrumb.label}
                </span>
              ) : (
                <Link
                  to={breadcrumb.href}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
                  onClick={() => handleBreadcrumbClick(breadcrumb)}
                  itemProp="item"
                >
                  {index === 0 && showHome && (
                    <Home className="w-3 h-3" aria-hidden="true" />
                  )}
                  <span itemProp="name">{breadcrumb.label}</span>
                </Link>
              )}
              
              <meta itemProp="position" content={String(index + 1)} />
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};