import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppLoadingScreen } from '@/components/common/AppLoadingScreen';

// Core Pages
const Index = lazy(() => import('@/pages/Index'));
const AuthPage = lazy(() => import('@/pages/AuthPage'));
const UnifiedVerificationPage = lazy(() => import('@/pages/UnifiedVerificationPage'));
const VerifyPage = lazy(() => import('@/pages/VerifyPage'));
const DashboardPage = lazy(() => import('@/pages/DashboardPage'));
const ProfilePage = lazy(() => import('@/pages/ProfilePage'));
const SubscriptionPage = lazy(() => import('@/pages/SubscriptionPage'));
const PricingPage = lazy(() => import('@/pages/PricingPage'));
const HowItWorksPage = lazy(() => import('@/pages/HowItWorksPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const FAQPage = lazy(() => import('@/pages/FAQPage'));
const TermsPage = lazy(() => import('@/pages/TermsPage'));
const PrivacyPage = lazy(() => import('@/pages/PrivacyPage'));
const TransparencyPage = lazy(() => import('@/pages/TransparencyPage'));

// Blog
const BlogPage = lazy(() => import('@/pages/BlogPage'));
const BlogPostPage = lazy(() => import('@/pages/BlogPostPage'));

// Business
const MobileAppPage = lazy(() => import('@/pages/MobileAppPage'));
const ForBrandsPage = lazy(() => import('@/pages/ForBrandsPage'));

// Item Categories
const FirearmsCheckPage = lazy(() => import('@/pages/FirearmsCheckPage'));

// Regional Pages
const ArizonaVinLookup = lazy(() => import('@/pages/ArizonaVinLookup'));
const ArizonaLicensePlateLookup = lazy(() => import('@/pages/ArizonaLicensePlateLookup'));
const CaliforniaVinLookup = lazy(() => import('@/pages/CaliforniaVinLookup'));
const TexasVinLookup = lazy(() => import('@/pages/TexasVinLookup'));
const FloridaVinLookup = lazy(() => import('@/pages/FloridaVinLookup'));
const VirginiaVinLookup = lazy(() => import('@/pages/VirginiaVinLookup'));
const MassachusettsVinLookup = lazy(() => import('@/pages/MassachusettsVinLookup'));
const CrimePreventionImpactPage = lazy(() => import('@/pages/CrimePreventionImpactPage'));

// Item Categories
const CheckElectronicsPage = lazy(() => import('@/pages/CheckElectronicsPage'));
const CheckBikePage = lazy(() => import('@/pages/CheckBikePage'));
const CheckPhonePage = lazy(() => import('@/pages/CheckPhonePage'));
const CheckCarPage = lazy(() => import('@/pages/CheckCarPage'));

// Educational/Guide Pages
const BuyerGuidePage = lazy(() => import('@/pages/BuyerGuidePage'));
const ComprehensiveGuidePage = lazy(() => import('@/pages/ComprehensiveGuidePage'));
const AvoidStolenGoodsPage = lazy(() => import('@/pages/AvoidStolenGoodsPage'));

// Business/Features
const FeaturesPage = lazy(() => import('@/pages/FeaturesPage'));
const ForConsumersPage = lazy(() => import('@/pages/ForConsumersPage'));
const AuctionHousesPage = lazy(() => import('@/pages/AuctionHousesPage'));
const ApiDocsPage = lazy(() => import('@/pages/ApiDocsPage'));
const DataSourcesPage = lazy(() => import('@/pages/DataSourcesPage'));
const AccuracyPage = lazy(() => import('@/pages/AccuracyPage'));

// Comparison/Alternatives
const ComparisonCheckMendPage = lazy(() => import('@/pages/ComparisonCheckMendPage'));
const CompetitorAlternativesHubPage = lazy(() => import('@/pages/CompetitorAlternativesHubPage'));

// Community/Trust
const CaseStudiesPage = lazy(() => import('@/pages/CaseStudiesPage'));
const CommunityPage = lazy(() => import('@/pages/CommunityPage'));

// Legal/Info
const CookiesPage = lazy(() => import('@/pages/CookiesPage'));

// Admin
const AdminDashboard = lazy(() => import('@/pages/admin/AdminDashboard'));
const Admin = lazy(() => import('@/pages/Admin'));

// Information Pages
const ServiceLimitations = lazy(() => import('@/pages/ServiceLimitations'));

// User Features
const SearchHistoryPage = lazy(() => import('@/pages/SearchHistoryPage'));
const VerificationResultPage = lazy(() => import('@/pages/VerificationResultPage'));

// Stripe
const CheckoutRedirect = lazy(() => import('@/pages/CheckoutRedirect'));
const SubscriptionSuccessPage = lazy(() => import('@/pages/SubscriptionSuccessPage'));
const SubscriptionCancelPage = lazy(() => import('@/pages/SubscriptionCancelPage'));

// 404
const NotFound = lazy(() => import('@/pages/NotFound'));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<AppLoadingScreen />}>
      <Routes>
        {/* Core Routes */}
        <Route path="/" element={<Index />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/verify" element={<UnifiedVerificationPage />} />
        <Route path="/verify-pro" element={<VerifyPage />} />
        <Route path="/mobile-verify" element={<UnifiedVerificationPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/transparency" element={<TransparencyPage />} />
        <Route path="/service-limitations" element={<ServiceLimitations />} />
        
        {/* Item Category Pages */}
        <Route path="/firearms-check" element={<FirearmsCheckPage />} />
        <Route path="/check-electronics" element={<CheckElectronicsPage />} />
        <Route path="/check-bike" element={<CheckBikePage />} />
        <Route path="/check-phone" element={<CheckPhonePage />} />
        <Route path="/check-car" element={<CheckCarPage />} />

        {/* Educational/Guide Pages */}
        <Route path="/buyer-guide" element={<BuyerGuidePage />} />
        <Route path="/comprehensive-guide" element={<ComprehensiveGuidePage />} />
        <Route path="/avoid-stolen-goods" element={<AvoidStolenGoodsPage />} />

        {/* Business/Features */}
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/for-consumers" element={<ForConsumersPage />} />
        <Route path="/auction-houses" element={<AuctionHousesPage />} />
        <Route path="/api-docs" element={<ApiDocsPage />} />
        <Route path="/data-sources" element={<DataSourcesPage />} />
        <Route path="/accuracy" element={<AccuracyPage />} />

        {/* Comparison/Alternatives */}
        <Route path="/comparison-checkmend" element={<ComparisonCheckMendPage />} />
        <Route path="/competitor-alternatives" element={<CompetitorAlternativesHubPage />} />

        {/* Community/Trust */}
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/community" element={<CommunityPage />} />

        {/* Legal/Info */}
        <Route path="/cookies" element={<CookiesPage />} />

        {/* Regional Pages */}
        <Route path="/arizona-vin-lookup" element={<ArizonaVinLookup />} />
        <Route path="/arizona-license-plate-lookup" element={<ArizonaLicensePlateLookup />} />
            <Route path="/california-vin-lookup" element={<CaliforniaVinLookup />} />
            <Route path="/texas-vin-lookup" element={<TexasVinLookup />} />
            <Route path="/florida-vin-lookup" element={<FloridaVinLookup />} />
            <Route path="/virginia-vin-lookup" element={<VirginiaVinLookup />} />
            <Route path="/massachusetts-vin-lookup" element={<MassachusettsVinLookup />} />
        <Route path="/crime-prevention-impact" element={<CrimePreventionImpactPage />} />
        <Route path="/connecticut-vin-lookup" element={<ConnecticutVinLookup />} />
        <Route path="/delaware-vin-lookup" element={<DelawareVinLookup />} />
        <Route path="/maine-vin-lookup" element={<MaineVinLookup />} />
        <Route path="/maryland-vin-lookup" element={<MarylandVinLookup />} />
        <Route path="/new-hampshire-vin-lookup" element={<NewHampshireVinLookup />} />
        <Route path="/new-jersey-vin-lookup" element={<NewJerseyVinLookup />} />
        <Route path="/rhode-island-vin-lookup" element={<RhodeIslandVinLookup />} />
        <Route path="/alabama-vin-lookup" element={<AlabamaVinLookup />} />
        <Route path="/arkansas-vin-lookup" element={<ArkansasVinLookup />} />
        <Route path="/kentucky-vin-lookup" element={<KentuckyVinLookup />} />
        <Route path="/louisiana-vin-lookup" element={<LouisianaVinLookup />} />
        <Route path="/mississippi-vin-lookup" element={<MississippiVinLookup />} />
        <Route path="/south-carolina-vin-lookup" element={<SouthCarolinaVinLookup />} />
        <Route path="/tennessee-vin-lookup" element={<TennesseeVinLookup />} />
        <Route path="/west-virginia-vin-lookup" element={<WestVirginiaVinLookup />} />
        <Route path="/indiana-vin-lookup" element={<IndianaVinLookup />} />
        <Route path="/iowa-vin-lookup" element={<IowaVinLookup />} />

        {/* Blog */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />

        {/* Business */}
        <Route path="/mobile-app" element={<MobileAppPage />} />
        <Route path="/for-businesses" element={<ForBrandsPage />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* User Features */}
        <Route path="/search-history" element={<SearchHistoryPage />} />
        <Route path="/verification/:id" element={<VerificationResultPage />} />

        {/* Stripe */}
        <Route path="/checkout-redirect" element={<CheckoutRedirect />} />
        <Route path="/subscription-success" element={<SubscriptionSuccessPage />} />
        <Route path="/subscription-cancel" element={<SubscriptionCancelPage />} />

        {/* Legacy Redirects */}
        <Route path="/check-imei" element={<Navigate to="/verify" replace />} />
        <Route path="/check-vin" element={<Navigate to="/verify" replace />} />
        <Route path="/check-serial" element={<Navigate to="/verify" replace />} />
        <Route path="/stolen-item-checker" element={<Navigate to="/verify" replace />} />
        <Route path="/imei-check" element={<Navigate to="/verify" replace />} />
        <Route path="/imei-checker" element={<Navigate to="/verify" replace />} />
        <Route path="/vin-verification" element={<Navigate to="/verify" replace />} />
        
        {/* Additional Redirects for Soft 404s */}
        <Route path="/bulk" element={<Navigate to="/verify" replace />} />
        <Route path="/vin" element={<Navigate to="/verify" replace />} />
        <Route path="/stolen-property-lookup" element={<Navigate to="/verify" replace />} />

        {/* 404 - Must be last */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
