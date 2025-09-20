import React from 'react';
import { BlogAutomationDashboard } from '@/components/admin/BlogAutomationDashboard';
import { PageSEO } from '@/components/seo/PageSEO';

const AdminAutomationPage: React.FC = () => {
  return (
    <>
      <PageSEO
        title="Blog Automation Dashboard - Admin"
        description="Manage automated blog content generation and publishing"
        canonical="/admin/automation"
        noIndex={true}
      />
      <div className="min-h-screen bg-background">
        <BlogAutomationDashboard />
      </div>
    </>
  );
};

export default AdminAutomationPage;