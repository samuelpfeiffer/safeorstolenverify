import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppLoadingScreen } from '@/components/common/AppLoadingScreen';
import { ProtectedRoute } from '@/core/routing/ProtectedRoute';
import { AdminRoute } from '@/core/routing/AdminRoute';
import { AppLayout } from '@/components/layout/AppLayout';

// Lazy load all pages for optimal performance
const Index = lazy(() => import('@/pages/Index'));
const AuthPage = lazy(() => import('@/pages/AuthPage'));
const VerificationPage = lazy(() => import('@/pages/VerificationPage'));
const DashboardPage = lazy(() => import('@/pages/DashboardPage'));
const ProfilePage = lazy(() => import('@/pages/ProfilePage'));
const SubscriptionPage = lazy(() => import('@/pages/SubscriptionPage'));
const AnalyticsPage = lazy(() => import('@/pages/AnalyticsPage'));
const AdminDashboard = lazy(() => import('@/pages/admin/AdminDashboard'));
const UserManagement = lazy(() => import('@/pages/admin/UserManagement'));
const SystemSettings = lazy(() => import('@/pages/admin/SystemSettings'));
const SecurityCenter = lazy(() => import('@/pages/admin/SecurityCenter'));
const PricingPage = lazy(() => import('@/pages/PricingPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const FaqPage = lazy(() => import('@/pages/FaqPage'));
const TermsPage = lazy(() => import('@/pages/TermsPage'));
const PrivacyPage = lazy(() => import('@/pages/PrivacyPage'));
const BlogPage = lazy(() => import('@/pages/BlogPage'));
const BlogPostPage = lazy(() => import('@/pages/BlogPostPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
const HowItWorksPage = lazy(() => import('@/pages/HowItWorksPage'));
const ForConsumersPage = lazy(() => import('@/pages/ForConsumersPage'));
const ForBrandsPage = lazy(() => import('@/pages/ForBrandsPage'));
const AboutProblemPage = lazy(() => import('@/pages/AboutProblemPage'));
const OurStoryPage = lazy(() => import('@/pages/OurStoryPage'));
const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('@/pages/TermsOfServicePage'));
const DisclaimerPage = lazy(() => import('@/pages/DisclaimerPage'));
const CookiesPage = lazy(() => import('@/pages/CookiesPage'));
const RefundsPage = lazy(() => import('@/pages/RefundsPage'));

// FasterCapital Pages
const RaiseCapitalPage = lazy(() => import('@/pages/fastercapital/RaiseCapitalPage'));
const TechCofounderPage = lazy(() => import('@/pages/fastercapital/TechCofounderPage'));

// Real-time Verification
const RealTimeVerificationPage = lazy(() => import('@/pages/RealTimeVerificationPage'));
const FirearmsCheckPage = lazy(() => import('@/pages/FirearmsCheckPage'));

// Item-specific verification pages
const CheckPhonePage = lazy(() => import('@/pages/CheckPhonePage'));
const CheckCarPage = lazy(() => import('@/pages/CheckCarPage'));
const CheckElectronicsPage = lazy(() => import('@/pages/CheckElectronicsPage'));

// User history & receipts
const SearchHistoryPage = lazy(() => import('@/pages/SearchHistoryPage'));
const ReceiptsPage = lazy(() => import('@/pages/ReceiptsPage'));
const PurchaseHistoryPage = lazy(() => import('@/pages/PurchaseHistoryPage'));
const SecuritySettingsPage = lazy(() => import('@/pages/SecuritySettingsPage'));

/**
 * Enterprise Application Routing
 * Handles all application routes with proper lazy loading and access control
 */
export const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<AppLoadingScreen />}>
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
          <Route path="blog/category/:category" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
          
          {/* New Routes */}
          <Route path="how-it-works" element={<HowItWorksPage />} />
          <Route path="for-consumers" element={<ForConsumersPage />} />
          <Route path="for-brands" element={<ForBrandsPage />} />
          <Route path="about-problem" element={<AboutProblemPage />} />
          <Route path="our-story" element={<OurStoryPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="terms-of-service" element={<TermsOfServicePage />} />
          <Route path="disclaimer" element={<DisclaimerPage />} />
          <Route path="cookies" element={<CookiesPage />} />
          <Route path="refunds" element={<RefundsPage />} />
          
          {/* FasterCapital Routes */}
          <Route path="fastercapital/raise-capital" element={<RaiseCapitalPage />} />
          <Route path="fastercapital/tech-cofounder" element={<TechCofounderPage />} />
          
          {/* Real-time Verification */}
          <Route path="real-time-verification" element={<RealTimeVerificationPage />} />
          <Route path="firearms-check" element={<FirearmsCheckPage />} />
          
          {/* Item-specific verification pages */}
          <Route path="check-phone" element={<CheckPhonePage />} />
          <Route path="check-car" element={<CheckCarPage />} />
          <Route path="check-electronics" element={<CheckElectronicsPage />} />

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
          <Route path="search-history" element={
            <ProtectedRoute>
              <SearchHistoryPage />
            </ProtectedRoute>
          } />
          <Route path="receipts" element={
            <ProtectedRoute>
              <ReceiptsPage />
            </ProtectedRoute>
          } />
          <Route path="purchase-history" element={
            <ProtectedRoute>
              <PurchaseHistoryPage />
            </ProtectedRoute>
          } />
          <Route path="security-settings" element={
            <ProtectedRoute>
              <SecuritySettingsPage />
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
        <Route path="404" element={<NotFoundPage />} />
        
        {/* Clean redirects without double slashes */}
        <Route path="security" element={<Navigate to="/security-settings" replace />} />
        
        {/* Catch all unknown routes */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};