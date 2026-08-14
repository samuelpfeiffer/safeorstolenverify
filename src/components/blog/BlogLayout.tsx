import React from 'react';
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
      {children}
      <RelatedPagesSection 
        currentPage={currentPage} 
        currentCategory="blog" 
        maxLinks={5}
      />
    </>
  );
};

export default BlogLayout;
