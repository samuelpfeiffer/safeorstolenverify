import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  name: string;
  href: string;
  current?: boolean;
}

interface EnhancedBreadcrumbsProps {
  customItems?: BreadcrumbItem[];
  showHome?: boolean;
  className?: string;
}

export const EnhancedBreadcrumbs: React.FC<EnhancedBreadcrumbsProps> = ({
  customItems,
  showHome = true,
  className = ""
}) => {
  const location = useLocation();
  
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (customItems) return customItems;
    
    const pathnames = location.pathname.split('/').filter(x => x);
    const breadcrumbs: BreadcrumbItem[] = [];
    
    if (showHome) {
      breadcrumbs.push({
        name: 'Home',
        href: '/',
        current: pathnames.length === 0
      });
    }
    
    const pathMap: Record<string, string> = {
      'check-phone': 'IMEI Phone Check',
      'check-car': 'VIN Car Verification', 
      'check-if-stolen': 'Verify Items',
      'pricing': 'Pricing Plans',
      'dashboard': 'Dashboard',
      'auth': 'Sign In',
      'how-it-works': 'How It Works',
      'for-brands': 'For Businesses',
      'firearms-check': 'Firearms Verification',
      'data-sources': 'Data Sources',
      'privacy': 'Privacy Policy',
      'terms': 'Terms of Service',
      'contact': 'Contact Us',
      'about': 'About Us',
      'seo-audit': 'SEO Audit',
      'api-docs': 'API Documentation',
      'help': 'Help Center',
      'blog': 'Blog'
    };
    
    pathnames.forEach((pathname, index) => {
      const href = `/${pathnames.slice(0, index + 1).join('/')}`;
      const isLast = index === pathnames.length - 1;
      
      breadcrumbs.push({
        name: pathMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1).replace(/-/g, ' '),
        href,
        current: isLast
      });
    });
    
    return breadcrumbs;
  };
  
  const breadcrumbs = generateBreadcrumbs();
  
  // Generate JSON-LD structured data for breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://safeorstolen.com${item.href}`
    }))
  };
  
  if (breadcrumbs.length <= 1) return null;
  
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema, null, 0)}
        </script>
      </Helmet>
      
      <nav 
        className={`flex items-center space-x-2 text-sm text-muted-foreground mb-6 ${className}`}
        aria-label="Breadcrumb navigation"
      >
        <ol className="flex items-center space-x-2" itemScope itemType="https://schema.org/BreadcrumbList">
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className="flex items-center" 
                itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              {index > 0 && (
                <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground/60" aria-hidden="true" />
              )}
              
              {item.current ? (
                <span 
                  className="font-medium text-foreground"
                  aria-current="page"
                  itemProp="name"
                >
                  {index === 0 && showHome ? (
                    <span className="flex items-center gap-1">
                      <Home className="h-4 w-4" aria-hidden="true" />
                      {item.name}
                    </span>
                  ) : (
                    item.name
                  )}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="hover:text-primary transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">
                    {index === 0 && showHome ? (
                      <span className="flex items-center gap-1">
                        <Home className="h-4 w-4" aria-hidden="true" />
                        {item.name}
                      </span>
                    ) : (
                      item.name
                    )}
                  </span>
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