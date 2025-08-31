import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppLoadingScreen } from '@/components/common/AppLoadingScreen';
import { ProtectedRoute } from '@/core/routing/ProtectedRoute';
import { AdminRoute } from '@/core/routing/AdminRoute';
import { AppLayout } from '@/components/layout/AppLayout';

// Lazy load all pages for optimal performance
const HomePage = lazy(() => import('@/pages/HomePage'));
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
const SubscriptionSuccessPage = lazy(() => import('@/pages/SubscriptionSuccessPage'));
const SubscriptionCancelPage = lazy(() => import('@/pages/SubscriptionCancelPage'));

// New Blog Posts
const DataSourceCredibilityPost = lazy(() => import('@/pages/blog/DataSourceCredibilityPost'));
const VerificationMethodologyPost = lazy(() => import('@/pages/blog/VerificationMethodologyPost'));
const RealUserStoriesPost = lazy(() => import('@/pages/blog/RealUserStoriesPost'));
const CompleteVerificationGuidePost = lazy(() => import('@/pages/blog/CompleteVerificationGuidePost'));
const HowItWorksPage = lazy(() => import('@/pages/HowItWorksPage'));
const HowItWorksDetailedPage = lazy(() => import('@/pages/HowItWorksDetailedPage'));
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
const CheckBikePage = lazy(() => import('@/pages/CheckBikePage'));
const ItemCategoriesPage = lazy(() => import('@/pages/ItemCategoriesPage'));

// User history & receipts
const SearchHistoryPage = lazy(() => import('@/pages/SearchHistoryPage'));
const ReceiptsPage = lazy(() => import('@/pages/ReceiptsPage'));
const PurchaseHistoryPage = lazy(() => import('@/pages/PurchaseHistoryPage'));
const SecuritySettingsPage = lazy(() => import('@/pages/SecuritySettingsPage'));

// Enterprise & Marketing Pages
const EnterpriseDemoPage = lazy(() => import('@/pages/EnterpriseDemoPage'));
const ReferralPage = lazy(() => import('@/pages/ReferralPage'));
const ApiDocsPage = lazy(() => import('@/pages/ApiDocsPage'));
const SitemapPage = lazy(() => import('@/pages/SitemapPage'));
const CommunityPage = lazy(() => import('@/pages/CommunityPage'));

// Additional verification pages
const VerificationResultsPage = lazy(() => import('@/pages/VerificationResultsPage'));
const CommunityWatchPage = lazy(() => import('@/pages/CommunityWatchPage'));
const ProblemPage = lazy(() => import('@/pages/ProblemPage'));
const LaunchTestPage = lazy(() => import('@/pages/LaunchTestPage'));
const TestOneTimePaymentPage = lazy(() => import('@/pages/TestOneTimePaymentPage'));
const TrustVerificationPage = lazy(() => import('@/pages/TrustVerificationPage'));
const CaseStudiesPage = lazy(() => import('@/pages/CaseStudiesPage'));
const DataSourcesPage = lazy(() => import('@/pages/DataSourcesPage'));
const TransparencyPage = lazy(() => import('@/pages/TransparencyPage'));
const ServiceLimitationsPage = lazy(() => import('@/pages/ServiceLimitationsPage'));
const AccuracyPage = lazy(() => import('@/pages/AccuracyPage'));
const VerificationHubPage = lazy(() => import('@/pages/VerificationHubPage'));
const UltimateGuidePage = lazy(() => import('@/pages/UltimateGuidePage'));
const AuctionHousesPage = lazy(() => import('@/pages/AuctionHousesPage'));
const PawnShopsPage = lazy(() => import('@/pages/PawnShopsPage'));
const GlobalDominationPage = lazy(() => import('@/pages/GlobalDominationPage'));
const MarketplaceIntegrationPage = lazy(() => import('@/pages/MarketplaceIntegrationPage'));
const HowToCheckIfItemStolenPage = lazy(() => import('@/pages/HowToCheckIfItemStolenPage'));
const StolenItemsDatabasePage = lazy(() => import('@/pages/StolenItemsDatabasePage'));
const StolenGoodsCheckerPage = lazy(() => import('@/pages/StolenGoodsCheckerPage'));
const AvoidStolenGoodsPage = lazy(() => import('@/pages/AvoidStolenGoodsPage'));
const UltimateGuideNotBuyingStolenPage = lazy(() => import('@/pages/UltimateGuideNotBuyingStolenPage'));
const HowToCheckAnythingStolenPage = lazy(() => import('@/pages/HowToCheckAnythingStolenPage'));
const ComprehensiveGuidePage = lazy(() => import('@/pages/ComprehensiveGuidePage'));
const LocalSEOPage = lazy(() => import('@/pages/LocalSEOPage'));
const TheftTrendsBlogPage = lazy(() => import('@/pages/TheftTrendsBlogPage'));
const PartnershipsPage = lazy(() => import('@/pages/PartnershipsPage'));

/**
 * Enterprise Application Routing
 * Handles all application routes with proper lazy loading and access control
 */
export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<AppLayout />}>
        <Route index element={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">SafeOrStolen</h1>
              <p className="text-lg">Site is loading...</p>
            </div>
          </div>
        } />
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            </div>
          </div>
        } />
      </Route>
    </Routes>
  );
};