import React from 'react';
import { AIBlogGenerator } from '@/components/admin/AIBlogGenerator';
import { BlogContentEnricher } from '@/components/admin/BlogContentEnricher';
import { BlogSetupHelper } from '@/components/admin/BlogSetupHelper';
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
      <div className="min-h-screen bg-background p-6">
        <div className="container mx-auto max-w-7xl space-y-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">AI Blog Management</h1>
            <p className="text-muted-foreground">
              Generate, enhance, and manage blog content with AI
            </p>
          </div>

          <div className="grid gap-6">
            <BlogSetupHelper />
            
            <div className="grid md:grid-cols-2 gap-6">
              <AIBlogGenerator />
              <BlogContentEnricher />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminBlogPage;