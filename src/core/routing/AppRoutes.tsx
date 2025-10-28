import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppLoadingScreen } from '@/components/common/AppLoadingScreen';
import { ProtectedRoute } from '@/core/routing/ProtectedRoute';
import { AdminRoute } from '@/core/routing/AdminRoute';

// Lazy load all pages for optimal performance
const Index = lazy(() => import('@/pages/Index'));
const StolenItemChecker = lazy(() => import('@/pages/StolenItemChecker'));
const IMEICheck = lazy(() => import('@/pages/IMEICheck'));
const VINVerification = lazy(() => import('@/pages/VINVerification'));
const HowToCheckStolenItems = lazy(() => import('@/pages/guides/HowToCheckStolenItems'));
const IMEIBlacklistGuide = lazy(() => import('@/pages/guides/IMEIBlacklistGuide'));
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
const SubscriptionsPage = lazy(() => import('@/pages/SubscriptionsPage'));
const BlogPage = lazy(() => import('@/pages/BlogPage'));
const HowItWorksPage = lazy(() => import('@/pages/HowItWorksPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const FAQPage = lazy(() => import('@/pages/FAQPage'));
const TermsPage = lazy(() => import('@/pages/TermsPage'));
const PrivacyPage = lazy(() => import('@/pages/PrivacyPage'));
const BlogPostPage = lazy(() => import('@/pages/BlogPostPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
const SubscriptionSuccessPage = lazy(() => import('@/pages/SubscriptionSuccessPage'));
const SubscriptionCancelPage = lazy(() => import('@/pages/SubscriptionCancelPage'));
const IntegrationsPage = lazy(() => import('@/pages/IntegrationsPage'));
const PressReleasePage = lazy(() => import('@/pages/PressReleasePage'));

// New Blog Posts
const DataSourceCredibilityPost = lazy(() => import('@/pages/blog/DataSourceCredibilityPost'));
const VerificationMethodologyPost = lazy(() => import('@/pages/blog/VerificationMethodologyPost'));
const RealUserStoriesPost = lazy(() => import('@/pages/blog/RealUserStoriesPost'));
const CompleteVerificationGuidePost = lazy(() => import('@/pages/blog/CompleteVerificationGuidePost'));
const DeviceSafetyGuidePost = lazy(() => import('@/pages/blog/DeviceSafetyGuidePost'));
const AISEOPage = lazy(() => import('@/pages/AISEOPage'));
const SecurityDashboard = lazy(() => import('@/pages/SecurityDashboard'));
const AutonomousSystemPage = lazy(() => import('@/pages/AutonomousSystemPage'));
const AIOptimizerPage = lazy(() => import('@/pages/AIOptimizerPage'));
const AIExecutivePage = lazy(() => import('@/pages/AIExecutivePage'));
const CheckoutRedirect = lazy(() => import('@/pages/CheckoutRedirect'));
const HowItWorksDetailedPage = lazy(() => import('@/pages/HowItWorksDetailedPage'));

// Mobile Pages
const MobileVerifyPage = lazy(() => import('@/mobile/pages/MobileVerifyPage'));
const MobileDashboardPage = lazy(() => import('@/mobile/pages/MobileDashboardPage'));
const MobileOnboardingPage = lazy(() => import('@/mobile/pages/MobileOnboardingPage'));
const MobileSettingsPage = lazy(() => import('@/mobile/pages/MobileSettingsPage'));
const ForConsumersPage = lazy(() => import('@/pages/ForConsumersPage'));
const ForBrandsPage = lazy(() => import('@/pages/ForBrandsPage'));
const AboutProblemPage = lazy(() => import('@/pages/AboutProblemPage'));
const OurStoryPage = lazy(() => import('@/pages/OurStoryPage'));
const PrivacyPolicyPage = lazy(() => import('@/pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('@/pages/TermsOfServicePage'));
const CookiesPage = lazy(() => import('@/pages/CookiesPage'));
const RefundsPage = lazy(() => import('@/pages/RefundsPage'));

// FasterCapital Pages
const RaiseCapitalPage = lazy(() => import('@/pages/fastercapital/RaiseCapitalPage'));
const TechCofounderPage = lazy(() => import('@/pages/fastercapital/TechCofounderPage'));

// Real-time Verification
const RealTimeVerificationPage = lazy(() => import('@/pages/RealTimeVerificationPage'));
const FirearmsCheckPage = lazy(() => import('@/pages/FirearmsCheckPage'));

// Arizona Theft Database
const ArizonaLicensePlateLookup = lazy(() => import('@/pages/ArizonaLicensePlateLookup'));
const ArizonaVinLookup = lazy(() => import('@/pages/ArizonaVinLookup'));
const UnifiedVerificationPage = lazy(() => import('@/pages/UnifiedVerificationPage'));
const APIManagementPage = lazy(() => import('@/pages/APIManagementPage'));

// Admin Pages
const AdminBlogPage = lazy(() => import('@/pages/admin/AdminBlogPage'));
const AdminAutomationPage = lazy(() => import('@/pages/admin/AdminAutomationPage'));
const AdminAICenter = lazy(() => import('@/pages/AdminAICenter'));
const SEOOptimizerPage = lazy(() => import('@/pages/admin/SEOOptimizerPage'));

// Item-specific verification pages
const CheckPhonePage = lazy(() => import('@/pages/CheckPhonePage'));
const CheckCarPage = lazy(() => import('@/pages/CheckCarPage'));
const CheckElectronicsPage = lazy(() => import('@/pages/CheckElectronicsPage'));
const CheckBikePage = lazy(() => import('@/pages/CheckBikePage'));
const ItemCategoriesPage = lazy(() => import('@/pages/ItemCategoriesPage'));
const ReportStolenPage = lazy(() => import('@/pages/ReportStolenPage'));
const ResourceCenterPage = lazy(() => import('@/pages/ResourceCenterPage'));
const DatabasePage = lazy(() => import('@/pages/DatabasePage'));

// User history & receipts
const SearchHistoryPage = lazy(() => import('@/pages/SearchHistoryPage'));
const ReceiptsPage = lazy(() => import('@/pages/ReceiptsPage'));
const PurchaseHistoryPage = lazy(() => import('@/pages/PurchaseHistoryPage'));
const SecuritySettingsPage = lazy(() => import('@/pages/SecuritySettingsPage'));

// Enterprise & Marketing Pages
const EnterpriseDemoPage = lazy(() => import('@/pages/EnterpriseDemoPage'));
const ReferralPage = lazy(() => import('@/pages/ReferralPage'));
const ApiDocsPage = lazy(() => import('@/pages/ApiDocsPage'));
const DeveloperPortalPage = lazy(() => import('@/pages/DeveloperPortalPage'));
const MarketplacePage = lazy(() => import('@/pages/MarketplacePage'));
const StatisticsPage = lazy(() => import('@/pages/StatisticsPage'));
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
const CompanyVerificationPage = lazy(() => import('@/pages/CompanyVerificationPage'));
const AccuracyPage = lazy(() => import('@/pages/AccuracyPage'));
const VerificationHubPage = lazy(() => import('@/pages/VerificationHubPage'));
const UltimateGuidePage = lazy(() => import('@/pages/UltimateGuidePage'));
const SerialNumberCheckerPage = lazy(() => import('@/pages/SerialNumberCheckerPage'));
const SEOStrategyPage = lazy(() => import('@/pages/SEOStrategyPage'));
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
const IMEICheckerPage = lazy(() => import('@/pages/IMEICheckerPage'));
const EnterpriseSecurityPost = lazy(() => import('@/pages/blog/EnterpriseSecurityPost'));
const MobileAppFeaturesPost = lazy(() => import('@/pages/blog/MobileAppFeaturesPost'));
const PartnershipsPage = lazy(() => import('@/pages/PartnershipsPage'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
const UltimateGuideBuyingSafelyPage = lazy(() => import('@/pages/UltimateGuideBuyingSafelyPage'));
const StolenGoodsStatisticsPage = lazy(() => import('@/pages/StolenGoodsStatisticsPage'));
const RSSFeedPage = lazy(() => import('@/pages/RSSFeedPage'));
const FeaturesPage = lazy(() => import('@/pages/FeaturesPage'));
const ComparisonCheckMendPage = lazy(() => import('@/pages/ComparisonCheckMendPage'));
const AppDownloadPage = lazy(() => import('@/pages/AppDownloadPage'));
const BuyerGuidePage = lazy(() => import('@/pages/BuyerGuidePage'));
const SellerGuidePage = lazy(() => import('@/pages/SellerGuidePage'));
const HowToCheckLaptopStolenPage = lazy(() => import('@/pages/HowToCheckLaptopStolenPage'));
const BuyUsedElectronicsSafelyPage = lazy(() => import('@/pages/BuyUsedElectronicsSafelyPage'));
const VsCheckMendPage = lazy(() => import('@/pages/VsCheckMendPage'));
const OurTeamPage = lazy(() => import('@/pages/OurTeamPage'));
const SecurityPage = lazy(() => import('@/pages/SecurityPage'));
const OurMissionPage = lazy(() => import('@/pages/OurMissionPage'));
const PressPage = lazy(() => import('@/pages/PressPage'));
const MobileAppPage = lazy(() => import('@/pages/MobileAppPage'));
const ResellerPage = lazy(() => import('@/pages/ResellerPage'));
const DownloadAppPage = lazy(() => import('@/pages/DownloadAppPage'));
const SocialMediaMonitoringPage = lazy(() => import('@/pages/SocialMediaMonitoringPage'));
const StolenSearchConsolePage = lazy(() => import('@/pages/StolenSearchConsolePage'));
const AboutUsPage = lazy(() => import('@/pages/AboutUsPage'));
const ProductRoadmapPage = lazy(() => import('@/pages/ProductRoadmapPage'));

// Competitor Comparison Pages
const SafeOrStolenVsCheckMendPage = lazy(() => import('@/pages/SafeOrStolenVsCheckMendPage'));
const SafeOrStolenVsIMEIInfoPage = lazy(() => import('@/pages/SafeOrStolenVsIMEIInfoPage'));
const SafeOrStolenVsCarfaxPage = lazy(() => import('@/pages/SafeOrStolenVsCarfaxPage'));
const CompetitorAlternativesHubPage = lazy(() => import('@/pages/CompetitorAlternativesHubPage'));

// Dynamic SEO Expansion Templates
const CityVerificationPage = lazy(() => import('@/pages/templates/CityVerificationPage'));
const ItemVerificationPage = lazy(() => import('@/pages/templates/ItemVerificationPage'));

/**
 * Enterprise Application Routing
 * Handles all application routes with proper lazy loading and access control
 */
export const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<AppLoadingScreen />}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Index />} />
        
        {/* Checkout Redirect - Escapes iframe before Stripe API call */}
        <Route path="/checkout-redirect" element={<CheckoutRedirect />} />
          
          {/* SEO-Focused Landing Pages for Stolen Item Searches */}
          <Route path="stolen-item-checker" element={<StolenItemChecker />} />
          <Route path="imei-check" element={<IMEICheck />} />
          <Route path="vin-verification" element={<VINVerification />} />
          
          {/* Comprehensive Stolen Item Search Routes for SEO */}
          <Route path="stolen-item-lookup" element={<StolenItemChecker />} />
          <Route path="check-stolen-item" element={<StolenItemChecker />} />
          <Route path="stolen-items-list" element={<StolenItemChecker />} />
          <Route path="check-stolen-database" element={<StolenItemChecker />} />
          
          {/* Vehicle-Related Stolen Check Routes */}
          <Route path="stolen-vehicle-database" element={<VINVerification />} />
          <Route path="vin-check-lookup" element={<VINVerification />} />
          <Route path="check-stolen-car" element={<VINVerification />} />
          <Route path="search-stolen-vehicle" element={<VINVerification />} />
          <Route path="check-vehicle-stolen" element={<VINVerification />} />
          <Route path="stolen-car-vin" element={<VINVerification />} />
          <Route path="vehicles-by-license-plate" element={<VINVerification />} />
          <Route path="search-stolen-cars" element={<VINVerification />} />
          <Route path="car-by-vin" element={<VINVerification />} />
          
          {/* Phone-Related Stolen Check Routes */}
          <Route path="stolen-phone-check" element={<IMEICheck />} />
          <Route path="search-stolen-phone" element={<IMEICheck />} />
          <Route path="search-stolen-mobile" element={<IMEICheck />} />
          <Route path="search-stolen-iphone" element={<IMEICheck />} />
          
          {/* Firearms-Related Stolen Check Routes */}
          <Route path="search-stolen-firearms" element={<FirearmsCheckPage />} />
          <Route path="search-stolen-guns" element={<FirearmsCheckPage />} />
          <Route path="stolen-gun-database" element={<FirearmsCheckPage />} />
          
          {/* Bike-Related Stolen Check Routes */}
          <Route path="search-stolen-bikes" element={<CheckBikePage />} />
          <Route path="check-bike-stolen" element={<CheckBikePage />} />
          
          {/* Natural Language Question-Based Routes for SEO */}
          <Route path="how-do-i-check-if-stolen" element={<StolenItemChecker />} />
          <Route path="is-this-stolen" element={<StolenItemChecker />} />
          <Route path="verify-not-stolen" element={<StolenItemChecker />} />
          <Route path="check-if-phone-was-stolen" element={<IMEICheck />} />
          <Route path="check-if-car-was-stolen" element={<VINVerification />} />
          
          {/* Additional Search Terms */}
          <Route path="stolen-goods-search" element={<StolenItemChecker />} />
          <Route path="free-stolen-check" element={<StolenItemChecker />} />
          <Route path="stolen-property-check" element={<StolenItemChecker />} />
          <Route path="stolen-item-search" element={<StolenItemChecker />} />
          <Route path="check-stolen-goods" element={<StolenItemChecker />} />
          <Route path="stolen-check-free" element={<StolenItemChecker />} />
          <Route path="verify-serial-number" element={<SerialNumberCheckerPage />} />
          <Route path="imei-stolen-check" element={<IMEICheck />} />
          <Route path="vin-stolen-check" element={<VINVerification />} />
          
          {/* Arizona Theft Database Lookups */}
          <Route path="arizona-license-plate-lookup" element={<ArizonaLicensePlateLookup />} />
          <Route path="arizona-vin-lookup" element={<ArizonaVinLookup />} />
          <Route path="theftaz" element={<ArizonaVinLookup />} />
          <Route path="arizona-stolen-vehicle-check" element={<ArizonaVinLookup />} />
          
          {/* Unified Multi-Database Verification */}
          <Route path="verify" element={<UnifiedVerificationPage />} />
          <Route path="vin-check" element={<UnifiedVerificationPage />} />
          
          {/* API Management */}
          <Route path="api" element={<APIManagementPage />} />
          <Route path="api-management" element={<APIManagementPage />} />
          <Route path="guides/how-to-check-stolen-items" element={<HowToCheckStolenItems />} />
          <Route path="guides/imei-blacklist-explained" element={<IMEIBlacklistGuide />} />
           <Route path="serial-number-lookup" element={<StolenItemChecker />} />
           <Route path="serial-number-checker" element={<SerialNumberCheckerPage />} />
           <Route path="seo-strategy" element={<SEOStrategyPage />} />
           <Route path="check" element={<StolenItemChecker />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="subscriptions" element={<SubscriptionsPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="integrations" element={<IntegrationsPage />} />
          <Route path="subscription-success" element={<SubscriptionSuccessPage />} />
          <Route path="subscription-cancel" element={<SubscriptionCancelPage />} />
          <Route path="verification-success" element={<SubscriptionSuccessPage />} />
          <Route path="about" element={<AboutPage />} />
          
          {/* Competitor Comparison Pages */}
          <Route path="safeorstolen-vs-checkmend" element={<SafeOrStolenVsCheckMendPage />} />
          <Route path="safeorstolen-vs-imeiinfo" element={<SafeOrStolenVsIMEIInfoPage />} />
          <Route path="safeorstolen-vs-carfax" element={<SafeOrStolenVsCarfaxPage />} />
          <Route path="competitor-alternatives" element={<CompetitorAlternativesHubPage />} />
          <Route path="alternatives" element={<Navigate to="/competitor-alternatives" replace />} />
          <Route path="checkmend-alternative" element={<Navigate to="/safeorstolen-vs-checkmend" replace />} />
          <Route path="imeiinfo-alternative" element={<Navigate to="/safeorstolen-vs-imeiinfo" replace />} />
          
          {/* Trust & Company Pages */}
          <Route path="/about-company" element={<AboutUsPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/company" element={<AboutUsPage />} />
          <Route path="/transparency" element={<TransparencyPage />} />
          <Route path="/transparency-report" element={<Navigate to="/transparency" replace />} />
          <Route path="/company-verification" element={<CompanyVerificationPage />} />
          <Route path="/verification" element={<Navigate to="/company-verification" replace />} />
          <Route path="/legitimacy" element={<Navigate to="/company-verification" replace />} />
          <Route path="/roadmap" element={<ProductRoadmapPage />} />
          <Route path="/product-roadmap" element={<Navigate to="/roadmap" replace />} />
          <Route path="/launch-status" element={<Navigate to="/roadmap" replace />} />
          <Route path="/stolen-search-console" element={<StolenSearchConsolePage />} />
          <Route path="/search-console" element={<Navigate to="/stolen-search-console" replace />} />
          
          <Route path="our-mission" element={<OurMissionPage />} />
          <Route path="reduce-crime" element={<Navigate to="/our-mission" replace />} />
          <Route path="crime-prevention" element={<Navigate to="/our-mission" replace />} />
          <Route path="press-release" element={<PressReleasePage />} />
          <Route path="press" element={<PressPage />} />
          <Route path="news" element={<PressPage />} />
          <Route path="press-releases" element={<PressPage />} />
          <Route path="media" element={<PressPage />} />
          <Route path="newsroom" element={<PressPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="marketplace" element={<MarketplacePage />} />
          <Route path="statistics" element={<StatisticsPage />} />
          
          {/* E-commerce style routes - redirect to main services since this isn't an e-commerce site */}
          <Route path="wishlist" element={<Navigate to="/services" replace />} />
          <Route path="cart" element={<Navigate to="/services" replace />} />
          <Route path="shopping-cart" element={<Navigate to="/services" replace />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
           <Route path="blog" element={<BlogPage />} />
           <Route path="blog/category/:category" element={<BlogPage />} />
           <Route path="blog/:slug" element={<BlogPostPage />} />
           <Route path="admin/blog" element={<AdminBlogPage />} />
           <Route path="admin/automation" element={<AdminAutomationPage />} />
           <Route path="admin/ai-center" element={<AdminAICenter />} />
           <Route path="admin/seo-optimizer" element={<SEOOptimizerPage />} />
          
           {/* Static Blog Posts */}
           <Route path="blog/data-source-credibility" element={<DataSourceCredibilityPost />} />
           <Route path="blog/verification-methodology" element={<VerificationMethodologyPost />} />
           <Route path="blog/real-user-stories" element={<RealUserStoriesPost />} />
           <Route path="blog/complete-verification-guide" element={<CompleteVerificationGuidePost />} />
           <Route path="blog/how-to-check-if-device-is-safe-stolen" element={<DeviceSafetyGuidePost />} />
           <Route path="blog/enterprise-security" element={<EnterpriseSecurityPost />} />
           <Route path="blog/mobile-app-features" element={<MobileAppFeaturesPost />} />
          
           {/* New Routes */}
           <Route path="how-it-works" element={<HowItWorksPage />} />
           <Route path="how-it-works-detailed" element={<HowItWorksDetailedPage />} />
           <Route path="vs-checkmend" element={<VsCheckMendPage />} />
           <Route path="our-team" element={<OurTeamPage />} />
           <Route path="security" element={<SecurityPage />} />
           <Route path="for-consumers" element={<ForConsumersPage />} />
          <Route path="for-brands" element={<ForBrandsPage />} />
          <Route path="about-problem" element={<AboutProblemPage />} />
          <Route path="our-story" element={<OurStoryPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="terms-of-service" element={<TermsOfServicePage />} />
          <Route path="cookies" element={<CookiesPage />} />
          <Route path="refunds" element={<RefundsPage />} />
          
          {/* Enterprise & Marketing Routes */}
          <Route path="enterprise-demo" element={<EnterpriseDemoPage />} />
          <Route path="referral" element={<ReferralPage />} />
          <Route path="api-docs" element={<ApiDocsPage />} />
          <Route path="developer-portal" element={<DeveloperPortalPage />} />
          <Route path="sitemap" element={<SitemapPage />} />
          <Route path="community" element={<CommunityPage />} />
           <Route path="case-studies" element={<CaseStudiesPage />} />
           <Route path="trust-verification" element={<TrustVerificationPage />} />
           <Route path="data-sources" element={<DataSourcesPage />} />
           <Route path="transparency" element={<TransparencyPage />} />
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
           <Route path="stolen-merchandise-check" element={<Navigate to="/stolen-goods-checker" replace />} />
           <Route path="avoid-buying-stolen-goods" element={<AvoidStolenGoodsPage />} />
           <Route path="avoid-stolen-goods" element={<AvoidStolenGoodsPage />} />
           <Route path="ultimate-guide-not-buying-stolen-goods" element={<UltimateGuideNotBuyingStolenPage />} />
           <Route path="how-to-check-if-anything-is-stolen-before-you-buy" element={<HowToCheckAnythingStolenPage />} />
           <Route path="comprehensive-guide" element={<ComprehensiveGuidePage />} />
           <Route path="city/:city" element={<LocalSEOPage />} />
           <Route path="blog/2024-theft-trends-report" element={<TheftTrendsBlogPage />} />
           <Route path="partnerships" element={<PartnershipsPage />} />
           <Route path="ultimate-guide-buying-safely" element={<UltimateGuideBuyingSafelyPage />} />
           <Route path="stolen-goods-statistics-2024" element={<StolenGoodsStatisticsPage />} />
           <Route path="guide/buying-safely" element={<UltimateGuideBuyingSafelyPage />} />
           <Route path="statistics/stolen-goods-2024" element={<StolenGoodsStatisticsPage />} />
           <Route path="feed.xml" element={<RSSFeedPage />} />
           <Route path="rss" element={<RSSFeedPage />} />
           
           {/* Stolen Search Console - Analytics Platform */}
           <Route path="stolen-search-console" element={<StolenSearchConsolePage />} />
           <Route path="search-console" element={<StolenSearchConsolePage />} />
           <Route path="analytics" element={<StolenSearchConsolePage />} />
           <Route path="search-trends" element={<StolenSearchConsolePage />} />
           
           {/* SEO Comparison & Guide Pages */}
           <Route path="vs/checkmend" element={<ComparisonCheckMendPage />} />
           <Route path="comparison/checkmend" element={<ComparisonCheckMendPage />} />
           <Route path="download-app" element={<AppDownloadPage />} />
           <Route path="app" element={<AppDownloadPage />} />
           <Route path="buyer-guide" element={<BuyerGuidePage />} />
           <Route path="guide/buyers" element={<BuyerGuidePage />} />
           <Route path="seller-guide" element={<SellerGuidePage />} />
           <Route path="guide/sellers" element={<SellerGuidePage />} />
           <Route path="how-to-check-if-laptop-stolen" element={<HowToCheckLaptopStolenPage />} />
           <Route path="laptop-serial-number-check" element={<HowToCheckLaptopStolenPage />} />
           <Route path="buy-used-electronics-safely" element={<BuyUsedElectronicsSafelyPage />} />
           <Route path="safe-way-to-buy-used-gadgets" element={<BuyUsedElectronicsSafelyPage />} />
            
            {/* SEO-Optimized Mobile App Routes - All redirect to main mobile-app page */}
            <Route path="mobile-app" element={<MobileAppPage />} />
            <Route path="mobile" element={<Navigate to="/mobile-app" replace />} />
            <Route path="app" element={<Navigate to="/mobile-app" replace />} />
            <Route path="ios-app" element={<Navigate to="/mobile-app" replace />} />
            <Route path="android-app" element={<Navigate to="/mobile-app" replace />} />
            <Route path="get-app" element={<Navigate to="/mobile-app" replace />} />
            <Route path="install-app" element={<Navigate to="/mobile-app" replace />} />
            <Route path="mobile-verification" element={<Navigate to="/mobile-app" replace />} />
            <Route path="verification-app" element={<Navigate to="/mobile-app" replace />} />
            <Route path="stolen-checker-app" element={<Navigate to="/mobile-app" replace />} />
            <Route path="imei-checker-app" element={<Navigate to="/mobile-app" replace />} />
           <Route path="instant-check" element={<Navigate to="/stolen-item-checker" replace />} />
           <Route path="free-verification" element={<Navigate to="/stolen-item-checker" replace />} />
           <Route path="check-stolen-phone" element={<Navigate to="/check-phone" replace />} />
           <Route path="check-stolen-car" element={<Navigate to="/check-car" replace />} />
           <Route path="marketplace-safety" element={<Navigate to="/for-consumers" replace />} />
           <Route path="buyer-protection" element={<Navigate to="/buyer-guide" replace />} />
           <Route path="seller-protection" element={<Navigate to="/seller-guide" replace />} />
           <Route path="resellers" element={<ResellerPage />} />
           <Route path="download-app" element={<DownloadAppPage />} />
           
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
          <Route path="check-phone" element={<CheckPhonePage />} />
          <Route path="check-car" element={<CheckCarPage />} />
          <Route path="check-electronics" element={<CheckElectronicsPage />} />
          <Route path="check-bike" element={<CheckBikePage />} />
          <Route path="item-categories" element={<ProtectedRoute><ItemCategoriesPage /></ProtectedRoute>} />
          
          {/* Problem and verification result pages - PROTECTED */}
          <Route path="problem" element={<ProblemPage />} />
          <Route path="verification-results/:id" element={<ProtectedRoute><VerificationResultsPage /></ProtectedRoute>} />
           <Route path="community-watch" element={<CommunityWatchPage />} />
           <Route path="social-media-monitoring" element={<SocialMediaMonitoringPage />} />
           
           {/* Resource Pages */}
          <Route path="report-stolen" element={<ReportStolenPage />} />
          <Route path="resource-center" element={<ResourceCenterPage />} />
          <Route path="database" element={<DatabasePage />} />
          
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

           {/* Redirect routes for old URLs - Return 200 status with canonical tags */}
           <Route path="imei" element={<Navigate to="/imei-check" replace />} />
           <Route path="imei-checker" element={<Navigate to="/imei-check" replace />} />
           <Route path="vin-checker" element={<Navigate to="/vin-verification" replace />} />
           <Route path="serial-checker" element={<Navigate to="/stolen-item-checker" replace />} />
           <Route path="verify" element={<Navigate to="/stolen-item-checker" replace />} />
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
           <Route path="ai-seo" element={
             <AdminRoute>
               <AISEOPage />
             </AdminRoute>
           } />
           <Route path="autonomous-system" element={
             <AdminRoute>
               <AutonomousSystemPage />
             </AdminRoute>
           } />
           <Route path="security" element={
             <AdminRoute>
               <SecurityDashboard />
             </AdminRoute>
           } />
           <Route path="ai-optimizer" element={
             <AdminRoute>
               <AIOptimizerPage />
             </AdminRoute>
           } />
           <Route path="ai-executives" element={
             <AdminRoute>
               <AIExecutivePage />
             </AdminRoute>
           } />

         {/* Dynamic SEO Expansion Routes (2000+ pages) */}
         {/* City-specific verification pages */}
         <Route path="city/:city/:service" element={<CityVerificationPage />} />
         
         {/* Item-specific verification pages */}
         <Route path="check-:item" element={<ItemVerificationPage />} />
         
         {/* Marketplace-specific pages */}
         <Route path="facebook-marketplace-stolen-check" element={<StolenItemChecker />} />
         <Route path="craigslist-verification-guide" element={<StolenItemChecker />} />
         <Route path="ebay-stolen-item-checker" element={<StolenItemChecker />} />
         <Route path="offerup-safety-verification" element={<StolenItemChecker />} />
         
         {/* State pages */}
         <Route path="state/:state/stolen-item-checker" element={<CityVerificationPage />} />
         
         {/* How-to guides */}
         <Route path="how-to-check-if-iphone-is-stolen" element={<HowToCheckStolenItems />} />
         <Route path="how-to-verify-phone-not-stolen" element={<HowToCheckStolenItems />} />
         <Route path="how-to-check-if-car-is-stolen-before-buying" element={<VINVerification />} />
         <Route path="how-to-avoid-buying-stolen-iphone" element={<HowToCheckStolenItems />} />
         
         {/* Competitor comparison pages */}
         <Route path="vs-carfax" element={<ComparisonCheckMendPage />} />
         <Route path="cheaper-than-carfax" element={<VINVerification />} />
         <Route path="free-vin-check-alternative" element={<VINVerification />} />
         
         {/* Business use case pages */}
         <Route path="for-phone-repair-shops" element={<ForBrandsPage />} />
         <Route path="for-used-car-dealers" element={<ForBrandsPage />} />
         <Route path="for-insurance-companies" element={<ForBrandsPage />} />
          
          {/* Mobile dashboard pages */}
           <Route path="mobile-verify" element={<MobileVerifyPage />} />
           <Route path="mobile-dashboard" element={<MobileDashboardPage />} />
           <Route path="mobile-onboarding" element={<MobileOnboardingPage />} />
           <Route path="mobile-settings" element={<MobileSettingsPage />} />
          
          {/* Blog expansion */}
         <Route path="blog/2025-stolen-goods-statistics" element={<StolenGoodsStatisticsPage />} />
         <Route path="blog/most-stolen-items-2025" element={<TheftTrendsBlogPage />} />

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