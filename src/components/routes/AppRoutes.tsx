import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import AuthPage from '@/pages/AuthPage';
import AdminAICenter from '@/pages/AdminAICenter';
import OrganizationPage from '@/pages/OrganizationPage';
import SEOHub from '@/pages/SEOHub';
import { MNTNIntegration } from '@/components/marketing/MNTNIntegration';
import { AIContentGenerator } from '@/components/ai/AIContentGenerator';
import { PageLayout } from '@/components/layout/PageLayout';

// Lazy load new pages
const DownloadAppPage = lazy(() => import('@/pages/DownloadAppPage'));
const VerificationResultsPage = lazy(() => import('@/pages/VerificationResultsPage'));

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/admin/ai" element={<AdminAICenter />} />
      <Route path="/organization" element={<OrganizationPage />} />
      <Route path="/seo-hub" element={<SEOHub />} />
      
      {/* Marketing & AI Routes */}
      <Route 
        path="/marketing/mntn" 
        element={
          <PageLayout 
            title="MNTN Connected TV Advertising"
            description="Create and manage Connected TV advertising campaigns with MNTN's precision targeting platform"
          >
            <MNTNIntegration />
          </PageLayout>
        } 
      />
      
      <Route 
        path="/ai/content-generator" 
        element={
          <PageLayout 
            title="AI Content Generator"
            description="Generate professional videos, photos, and marketing content with AI-powered tools"
          >
            <AIContentGenerator />
          </PageLayout>
        } 
      />

      {/* Download App Page */}
      <Route path="/download-app" element={<DownloadAppPage />} />
      
      {/* Verification Results Page */}
      <Route path="/verification-results" element={<VerificationResultsPage />} />

      {/* Additional organized routes can be added here */}
    </Routes>
  );
};