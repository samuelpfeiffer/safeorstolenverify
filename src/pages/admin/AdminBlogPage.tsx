import React from 'react';
import { AIBlogGenerator } from '@/components/admin/AIBlogGenerator';
import { PageSEO } from '@/components/seo/PageSEO';

const AdminBlogPage: React.FC = () => {
  return (
    <>
      <PageSEO
        title="AI Blog Generator - Admin"
        description="Generate awesome blog content using AI for SafeOrStolen.com"
        canonical="/admin/blog"
        noIndex={true}
      />
      <div className="min-h-screen bg-background">
        <AIBlogGenerator />
      </div>
    </>
  );
};

export default AdminBlogPage;