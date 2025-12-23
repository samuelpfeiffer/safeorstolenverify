import React from 'react';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';

interface BlogLayoutProps {
  children: React.ReactNode;
  currentPage: string;
}

/**
 * Consistent layout wrapper for all blog posts
 * Ensures navigation, footer, and related pages are included
 */
export const BlogLayout: React.FC<BlogLayoutProps> = ({ children, currentPage }) => {
  return (
    <>
      <TopNavigation />
      {children}
      <RelatedPagesSection 
        currentPage={currentPage} 
        currentCategory="blog" 
        maxLinks={5}
      />
      <Footer />
    </>
  );
};

export default BlogLayout;
