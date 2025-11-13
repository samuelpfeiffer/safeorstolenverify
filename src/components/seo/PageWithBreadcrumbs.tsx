import React from 'react';
import { PageSEO } from './PageSEO';
import { BreadcrumbNavigation } from './BreadcrumbNavigation';
import { getBreadcrumbsForPath } from '@/config/breadcrumbs';
import { useSafeLocation } from '@/hooks/useSafeLocation';

interface PageWithBreadcrumbsProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: string;
  noIndex?: boolean;
  canonical?: string;
  structuredData?: Record<string, any> | Record<string, any>[];
  showBreadcrumbs?: boolean;
  customBreadcrumbs?: Array<{ name: string; href: string }>;
  children: React.ReactNode;
  breadcrumbClassName?: string;
}

/**
 * Reusable wrapper component that includes:
 * - PageSEO with all meta tags
 * - Breadcrumb navigation with schema
 * - Consistent page structure
 * 
 * Usage:
 * <PageWithBreadcrumbs
 *   title="Page Title | SafeOrStolen"
 *   description="Page description"
 *   canonical="/page-path"
 * >
 *   <YourPageContent />
 * </PageWithBreadcrumbs>
 */
export const PageWithBreadcrumbs: React.FC<PageWithBreadcrumbsProps> = ({
  title,
  description,
  keywords,
  image,
  type = 'website',
  noIndex = false,
  canonical,
  structuredData,
  showBreadcrumbs = true,
  customBreadcrumbs,
  children,
  breadcrumbClassName = 'container mx-auto px-4 pt-24 pb-4'
}) => {
  const location = useSafeLocation();
  const pathname = location?.pathname || '/';

  // Get breadcrumbs - use custom if provided, otherwise auto-generate
  const breadcrumbItems = customBreadcrumbs || getBreadcrumbsForPath(pathname);

  return (
    <>
      <PageSEO
        title={title}
        description={description}
        keywords={keywords}
        image={image}
        type={type}
        noIndex={noIndex}
        canonical={canonical}
        structuredData={structuredData}
      />
      
      {showBreadcrumbs && breadcrumbItems.length > 0 && (
        <div className={breadcrumbClassName}>
          <BreadcrumbNavigation items={breadcrumbItems} />
        </div>
      )}
      
      {children}
    </>
  );
};
