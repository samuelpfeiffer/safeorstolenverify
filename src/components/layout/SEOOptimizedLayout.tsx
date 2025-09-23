import React from 'react';
import { Outlet } from 'react-router-dom';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { InternalLinking } from '@/components/seo/InternalLinking';
import { EnhancedFooterLinks } from '@/components/seo/EnhancedFooterLinks';
import { MasterSEO } from '@/components/seo/MasterSEO';

interface SEOOptimizedLayoutProps {
  currentPage?: string;
  showBreadcrumbs?: boolean;
  showInternalLinks?: boolean;
}

export const SEOOptimizedLayout: React.FC<SEOOptimizedLayoutProps> = ({
  currentPage = 'home',
  showBreadcrumbs = true,
  showInternalLinks = true
}) => {
  return (
    <>
      <MasterSEO />
      <div className="min-h-screen flex flex-col">
        {showBreadcrumbs && <Breadcrumbs />}
        
        <main className="flex-1">
          <Outlet />
        </main>
        
        {showInternalLinks && (
          <InternalLinking currentPage={currentPage} />
        )}
        
        <EnhancedFooterLinks />
      </div>
    </>
  );
};