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
const DownloadPage = lazy(() => import('@/pages/DownloadPage'));
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
const RevenueHubPage = lazy(() => import('@/pages/RevenueHubPage'));

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
          <Route index element={<HomePage />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="subscriptions" element={<PricingPage />} />
          <Route path="subscription-success" element={<SubscriptionSuccessPage />} />
          <Route path="subscription-cancel" element={<SubscriptionCancelPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
           <Route path="faq" element={<FaqPage />} />
           <Route path="download" element={<DownloadPage />} />
           <Route path="terms" element={<TermsPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/category/:category" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
          
          {/* Static Blog Posts */}
          <Route path="blog/data-source-credibility" element={<DataSourceCredibilityPost />} />
          <Route path="blog/verification-methodology" element={<VerificationMethodologyPost />} />
          <Route path="blog/real-user-stories" element={<RealUserStoriesPost />} />
          <Route path="blog/complete-verification-guide" element={<CompleteVerificationGuidePost />} />
          
          {/* New Routes */}
          <Route path="how-it-works" element={<HowItWorksPage />} />
          <Route path="how-it-works-detailed" element={<HowItWorksDetailedPage />} />
          <Route path="for-consumers" element={<ForConsumersPage />} />
          <Route path="for-brands" element={<ForBrandsPage />} />
          <Route path="about-problem" element={<AboutProblemPage />} />
          <Route path="our-story" element={<OurStoryPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="terms-of-service" element={<TermsOfServicePage />} />
          <Route path="disclaimer" element={<DisclaimerPage />} />
          <Route path="cookies" element={<CookiesPage />} />
          <Route path="refunds" element={<RefundsPage />} />
          
          {/* Enterprise & Marketing Routes */}
          <Route path="enterprise-demo" element={<EnterpriseDemoPage />} />
          <Route path="referral" element={<ReferralPage />} />
          <Route path="api-docs" element={<ApiDocsPage />} />
          <Route path="sitemap" element={<SitemapPage />} />
          <Route path="community" element={<CommunityPage />} />
           <Route path="case-studies" element={<CaseStudiesPage />} />
           <Route path="trust-verification" element={<TrustVerificationPage />} />
           <Route path="data-sources" element={<DataSourcesPage />} />
           <Route path="transparency" element={<TransparencyPage />} />
           <Route path="service-limitations" element={<ServiceLimitationsPage />} />
           <Route path="accuracy" element={<AccuracyPage />} />
          <Route path="verification-hub" element={<VerificationHubPage />} />
          <Route path="ultimate-guide" element={<UltimateGuidePage />} />
          <Route path="auction-houses" element={<AuctionHousesPage />} />
          <Route path="pawn-shops" element={<PawnShopsPage />} />
           <Route path="global-domination" element={<GlobalDominationPage />} />
           <Route path="marketplace-integration" element={<MarketplaceIntegrationPage />} />
           <Route path="how-to-check-if-item-stolen" element={<HowToCheckIfItemStolenPage />} />
           <Route path="stolen-items-database" element={<StolenItemsDatabasePage />} />
           <Route path="stolen-property-lookup" element={<StolenItemsDatabasePage />} />
           <Route path="check-if-stolen" element={<StolenItemsDatabasePage />} />
           <Route path="stolen-goods-checker" element={<StolenGoodsCheckerPage />} />
           <Route path="stolen-merchandise-check" element={<StolenGoodsCheckerPage />} />
           <Route path="avoid-buying-stolen-goods" element={<AvoidStolenGoodsPage />} />
           <Route path="avoid-stolen-goods" element={<AvoidStolenGoodsPage />} />
           <Route path="ultimate-guide-not-buying-stolen-goods" element={<UltimateGuideNotBuyingStolenPage />} />
           <Route path="how-to-check-if-anything-is-stolen-before-you-buy" element={<HowToCheckAnythingStolenPage />} />
           <Route path="comprehensive-guide" element={<ComprehensiveGuidePage />} />
           <Route path="city/:city" element={<LocalSEOPage />} />
           <Route path="blog/2024-theft-trends-report" element={<TheftTrendsBlogPage />} />
           <Route path="partnerships" element={<PartnershipsPage />} />
           <Route path="revenue-hub" element={<RevenueHubPage />} />
          
          {/* FasterCapital Routes */}
          <Route path="fastercapital/raise-capital" element={<RaiseCapitalPage />} />
          <Route path="fastercapital/tech-cofounder" element={<TechCofounderPage />} />
          
          {/* Real-time Verification - ALL PROTECTED */}
          <Route path="real-time-verification" element={
            <ProtectedRoute>
              <Navigate to="/firearms-check" replace />
            </ProtectedRoute>
          } />
          <Route path="firearms-check" element={<FirearmsCheckPage />} />
          
          {/* Item-specific verification pages - Landing pages public, auth required for searches */}
          <Route path="check-phone" element={<ProtectedRoute><CheckPhonePage /></ProtectedRoute>} />
          <Route path="check-car" element={<CheckCarPage />} />
          <Route path="check-electronics" element={<CheckElectronicsPage />} />
          <Route path="check-bike" element={<CheckBikePage />} />
          <Route path="item-categories" element={<ProtectedRoute><ItemCategoriesPage /></ProtectedRoute>} />
          
          {/* Problem and verification result pages - PROTECTED */}
          <Route path="problem" element={<ProblemPage />} />
          <Route path="verification-results/:id" element={<ProtectedRoute><VerificationResultsPage /></ProtectedRoute>} />
          <Route path="community-watch" element={<CommunityWatchPage />} />
          
          {/* Testing and development pages */}
          <Route path="launch-test" element={
            <ProtectedRoute>
              <LaunchTestPage />
            </ProtectedRoute>
          } />
          <Route path="test-payment" element={
            <ProtectedRoute>
              <TestOneTimePaymentPage />
            </ProtectedRoute>
          } />

          <Route path="verify" element={
            <ProtectedRoute>
              <Navigate to="/dashboard" replace />
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