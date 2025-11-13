import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { createBreadcrumbSchema } from './EnhancedStructuredData';
import { Helmet } from 'react-helmet-async';

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbNavigationProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Breadcrumb Navigation Component with Schema.org markup
 * Automatically generates breadcrumb structured data and visible navigation
 */
export const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({ 
  items, 
  className = '' 
}) => {
  // Always include home as first item
  const fullItems: BreadcrumbItem[] = [
    { name: 'Home', href: '/' },
    ...items
  ];

  // Generate schema for SEO
  const breadcrumbSchema = createBreadcrumbSchema(
    fullItems.map(item => ({
      name: item.name,
      url: `https://safeorstolen.com${item.href}`
    }))
  );

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <nav 
        aria-label="Breadcrumb" 
        className={`flex items-center text-sm text-muted-foreground ${className}`}
      >
        <ol className="flex items-center space-x-2">
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1;
            const isFirst = index === 0;

            return (
              <li key={item.href} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="h-4 w-4 mx-2 flex-shrink-0" />
                )}
                
                {isLast ? (
                  <span 
                    className="font-medium text-foreground"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    to={item.href}
                    className="hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    {isFirst && <Home className="h-4 w-4" />}
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

/**
 * Hook to generate breadcrumbs from current route
 */
export const useBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
  const segments = pathname.split('/').filter(Boolean);
  
  return segments.map((segment, index) => {
    const path = '/' + segments.slice(0, index + 1).join('/');
    const name = segment
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    return {
      name,
      href: path
    };
  });
};
