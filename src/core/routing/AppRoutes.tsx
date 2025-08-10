import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import removed: AppLoadingScreen no longer used
import { ProtectedRoute } from '@/core/routing/ProtectedRoute';
import { AdminRoute } from '@/core/routing/AdminRoute';
import { AppLayout } from '@/components/layout/AppLayout';

// Static imports for stability in preview environment
import Index from '@/pages/Index';
import AuthPage from '@/pages/AuthPage';
import VerificationPage from '@/pages/VerificationPage';
import DashboardPage from '@/pages/DashboardPage';
import ProfilePage from '@/pages/ProfilePage';
import SubscriptionPage from '@/pages/SubscriptionPage';
import AnalyticsPage from '@/pages/AnalyticsPage';
import AdminDashboard from '@/pages/admin/AdminDashboard';
import UserManagement from '@/pages/admin/UserManagement';
import SystemSettings from '@/pages/admin/SystemSettings';
import SecurityCenter from '@/pages/admin/SecurityCenter';
import PricingPage from '@/pages/PricingPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import FaqPage from '@/pages/FaqPage';
import TermsPage from '@/pages/TermsPage';
import PrivacyPage from '@/pages/PrivacyPage';
import BlogPage from '@/pages/BlogPage';
import BlogPostPage from '@/pages/BlogPostPage';
import NotFoundPage from '@/pages/NotFoundPage';
import HowItWorksPage from '@/pages/HowItWorksPage';
import ForConsumersPage from '@/pages/ForConsumersPage';
import ForBrandsPage from '@/pages/ForBrandsPage';
import AboutProblemPage from '@/pages/AboutProblemPage';
import OurStoryPage from '@/pages/OurStoryPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsOfServicePage from '@/pages/TermsOfServicePage';
import FirearmSearchPage from '@/pages/FirearmSearchPage';
import DebugDiagnosticsPage from '@/pages/DebugDiagnosticsPage';

/**
 * Enterprise Application Routing
 * Handles all application routes with proper lazy loading and access control
 */
export const AppRoutes: React.FC = () => {
  return (
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Index />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
          
          {/* New Routes */}
          <Route path="how-it-works" element={<HowItWorksPage />} />
          <Route path="for-consumers" element={<ForConsumersPage />} />
          <Route path="for-brands" element={<ForBrandsPage />} />
          <Route path="about-problem" element={<AboutProblemPage />} />
          <Route path="our-story" element={<OurStoryPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="terms-of-service" element={<TermsOfServicePage />} />
          <Route path="firearms" element={<FirearmSearchPage />} />
          <Route path="_debug/react" element={<DebugDiagnosticsPage />} />
          
          {/* Protected User Routes */}
          <Route path="verify" element={
            <ProtectedRoute>
              <VerificationPage />
            </ProtectedRoute>
          } />
          <Route path="dashboard" element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          } />
          <Route path="profile" element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } />
          <Route path="subscription" element={
            <ProtectedRoute>
              <SubscriptionPage />
            </ProtectedRoute>
          } />
          <Route path="analytics" element={
            <ProtectedRoute>
              <AnalyticsPage />
            </ProtectedRoute>
          } />
          
          {/* Admin Routes */}
          <Route path="admin" element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          } />
          <Route path="admin/users" element={
            <AdminRoute>
              <UserManagement />
            </AdminRoute>
          } />
          <Route path="admin/settings" element={
            <AdminRoute>
              <SystemSettings />
            </AdminRoute>
          } />
          <Route path="admin/security" element={
            <AdminRoute>
              <SecurityCenter />
            </AdminRoute>
          } />
        </Route>

        {/* Catch all - 404 */}
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    
  );
};