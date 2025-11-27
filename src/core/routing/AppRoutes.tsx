import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppLoadingScreen } from '@/components/common/AppLoadingScreen';

// ONLY 10 CORE PAGES - Site Consolidation Complete + 3 Competitor Pages (SEO Strategy)
const Index = lazy(() => import('@/pages/Index'));
const VerifyPage = lazy(() => import('@/pages/VerifyPage'));
const DashboardPage = lazy(() => import('@/pages/DashboardPage'));
const ProfilePage = lazy(() => import('@/pages/ProfilePage'));
const AppPage = lazy(() => import('@/pages/AppPage'));
const PricingPage = lazy(() => import('@/pages/PricingPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const FAQPage = lazy(() => import('@/pages/FAQPage'));
const TermsPage = lazy(() => import('@/pages/TermsPage'));
const PrivacyPage = lazy(() => import('@/pages/PrivacyPage'));
const HowItWorksPage = lazy(() => import('@/pages/HowItWorksPage'));
const AuthPage = lazy(() => import('@/pages/AuthPage'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const VsCheckMendPage = lazy(() => import('@/pages/VsCheckMendPage'));
const VsIMEIInfoPage = lazy(() => import('@/pages/VsIMEIInfoPage'));
const VsSwappaPage = lazy(() => import('@/pages/VsSwappaPage'));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<AppLoadingScreen />}>
      <Routes>
        {/* CORE 10 ROUTES ONLY */}
        <Route path="/" element={<Index />} />
        <Route path="/verify" element={<VerifyPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/account" element={<Navigate to="/profile" replace />} />
        <Route path="/app" element={<AppPage />} />
        <Route path="/mobile-app" element={<Navigate to="/app" replace />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/auth" element={<AuthPage />} />

        {/* ALL OTHER ROUTES → 301 REDIRECTS TO APPROPRIATE CORE PAGES */}
        
        {/* Item-specific checks → /verify */}
        <Route path="/check-phone" element={<Navigate to="/verify?type=smartphone" replace />} />
        <Route path="/check-car" element={<Navigate to="/verify?type=vehicle" replace />} />
        <Route path="/check-bike" element={<Navigate to="/verify?type=bicycle" replace />} />
        <Route path="/check-electronics" element={<Navigate to="/verify?type=electronics" replace />} />
        <Route path="/check-firearm" element={<Navigate to="/verify?type=firearm" replace />} />
        <Route path="/check-laptop" element={<Navigate to="/verify?type=laptop" replace />} />
        <Route path="/check-gaming-console" element={<Navigate to="/verify?type=electronics" replace />} />
        <Route path="/check-android-phone" element={<Navigate to="/verify?type=smartphone" replace />} />
        <Route path="/firearms-check" element={<Navigate to="/verify?type=firearm" replace />} />
        <Route path="/imei-checker" element={<Navigate to="/verify?type=smartphone" replace />} />
        <Route path="/imei-check" element={<Navigate to="/verify?type=smartphone" replace />} />
        <Route path="/vin-checker" element={<Navigate to="/verify?type=vehicle" replace />} />
        <Route path="/vin-check" element={<Navigate to="/verify?type=vehicle" replace />} />
        <Route path="/serial-number-checker" element={<Navigate to="/verify?type=electronics" replace />} />
        <Route path="/license-plate-lookup" element={<Navigate to="/verify?type=license_plate" replace />} />
        <Route path="/license-plates-lookup" element={<Navigate to="/verify?type=license_plate" replace />} />
        
        {/* Stolen check variations → /verify */}
        <Route path="/check-if-stolen" element={<Navigate to="/verify" replace />} />
        <Route path="/stolen-item-checker" element={<Navigate to="/verify" replace />} />
        <Route path="/stolen-item-lookup" element={<Navigate to="/verify" replace />} />
        <Route path="/check-stolen-item" element={<Navigate to="/verify" replace />} />
        <Route path="/stolen-phone-check" element={<Navigate to="/verify?type=smartphone" replace />} />
        <Route path="/search-stolen-phone" element={<Navigate to="/verify?type=smartphone" replace />} />
        <Route path="/stolen-vehicle-database" element={<Navigate to="/verify?type=vehicle" replace />} />
        <Route path="/vin-check-lookup" element={<Navigate to="/verify?type=vehicle" replace />} />
        <Route path="/stolen-goods-search" element={<Navigate to="/verify" replace />} />
        <Route path="/free-stolen-check" element={<Navigate to="/verify" replace />} />
        <Route path="/search-stolen-firearms" element={<Navigate to="/verify?type=firearm" replace />} />
        <Route path="/search-stolen-bikes" element={<Navigate to="/verify?type=bicycle" replace />} />
        <Route path="/how-do-i-check-if-stolen" element={<Navigate to="/verify" replace />} />
        <Route path="/verify-not-stolen" element={<Navigate to="/verify" replace />} />
        <Route path="/stolen-property-check" element={<Navigate to="/verify" replace />} />
        <Route path="/check-stolen-database" element={<Navigate to="/verify" replace />} />
        <Route path="/stolen-items-list" element={<Navigate to="/verify" replace />} />
        
        {/* App downloads → /app */}
        <Route path="/install-app" element={<Navigate to="/app" replace />} />
        <Route path="/download" element={<Navigate to="/app" replace />} />
        <Route path="/download-app" element={<Navigate to="/app" replace />} />
        <Route path="/get-app" element={<Navigate to="/app" replace />} />
        <Route path="/app/download" element={<Navigate to="/app" replace />} />
        <Route path="/ios-app" element={<Navigate to="/app" replace />} />
        <Route path="/android-app" element={<Navigate to="/app" replace />} />
        <Route path="/pwa-app" element={<Navigate to="/app" replace />} />
        <Route path="/verification-app" element={<Navigate to="/app" replace />} />
        <Route path="/imei-checker-app" element={<Navigate to="/app" replace />} />
        <Route path="/mobile-verification" element={<Navigate to="/app" replace />} />
        
        {/* Comparison pages - SEO competitor keyword hijacking strategy */}
        <Route path="/vs-carfax" element={<Navigate to="/pricing" replace />} />
        <Route path="/vs-checkmend" element={<VsCheckMendPage />} />
        <Route path="/vs-imeiinfo" element={<VsIMEIInfoPage />} />
        <Route path="/vs-swappa" element={<VsSwappaPage />} />
        <Route path="/vs-stolenregister" element={<Navigate to="/pricing" replace />} />
        <Route path="/vs-nicb" element={<Navigate to="/pricing" replace />} />
        <Route path="/carfax-alternative" element={<Navigate to="/pricing" replace />} />
        
        {/* Marketplace pages → /about */}
        <Route path="/marketplace-safety" element={<Navigate to="/about" replace />} />
        <Route path="/guides/*" element={<Navigate to="/about" replace />} />
        <Route path="/verify/ebay" element={<Navigate to="/verify" replace />} />
        <Route path="/verify/facebook-marketplace" element={<Navigate to="/verify" replace />} />
        <Route path="/verify/offerup" element={<Navigate to="/verify" replace />} />
        <Route path="/verify/auctions" element={<Navigate to="/verify" replace />} />
        <Route path="/verify/pawnshops" element={<Navigate to="/verify" replace />} />
        
        {/* Educational/business pages → /about */}
        <Route path="/buyer-guide" element={<Navigate to="/about" replace />} />
        <Route path="/comprehensive-guide" element={<Navigate to="/about" replace />} />
        <Route path="/avoid-stolen-goods" element={<Navigate to="/about" replace />} />
        <Route path="/avoid-buying-stolen-goods" element={<Navigate to="/about" replace />} />
        <Route path="/resellers" element={<Navigate to="/about" replace />} />
        <Route path="/pawn-shops" element={<Navigate to="/about" replace />} />
        <Route path="/for-businesses" element={<Navigate to="/about" replace />} />
        <Route path="/for-consumers" element={<Navigate to="/about" replace />} />
        <Route path="/for-phone-repair-shops" element={<Navigate to="/about" replace />} />
        <Route path="/features" element={<Navigate to="/about" replace />} />
        <Route path="/trust-verification" element={<Navigate to="/about" replace />} />
        <Route path="/data-sources" element={<Navigate to="/about" replace />} />
        <Route path="/accuracy" element={<Navigate to="/about" replace />} />
        
        {/* Blog pages → /about */}
        <Route path="/blog" element={<Navigate to="/about" replace />} />
        <Route path="/blog/*" element={<Navigate to="/about" replace />} />
        
        {/* State VIN lookups → /verify */}
        <Route path="/arizona-vin-lookup" element={<Navigate to="/verify?type=vehicle" replace />} />
        <Route path="/california-vin-lookup" element={<Navigate to="/verify?type=vehicle" replace />} />
        <Route path="/texas-vin-lookup" element={<Navigate to="/verify?type=vehicle" replace />} />
        <Route path="/florida-vin-lookup" element={<Navigate to="/verify?type=vehicle" replace />} />
        <Route path="/new-york-vin-lookup" element={<Navigate to="/verify?type=vehicle" replace />} />
        <Route path="/*-vin-lookup" element={<Navigate to="/verify?type=vehicle" replace />} />
        
        {/* License plate lookups → /verify */}
        <Route path="/arizona-license-plate-lookup" element={<Navigate to="/verify?type=license_plate" replace />} />
        <Route path="/florida-license-plate-lookup" element={<Navigate to="/verify?type=license_plate" replace />} />
        <Route path="/texas-license-plate-lookup" element={<Navigate to="/verify?type=license_plate" replace />} />
        <Route path="/california-license-plate-lookup" element={<Navigate to="/verify?type=license_plate" replace />} />
        <Route path="/new-york-license-plate-lookup" element={<Navigate to="/verify?type=license_plate" replace />} />
        <Route path="/*-license-plate-lookup" element={<Navigate to="/verify?type=license_plate" replace />} />
        
        {/* City pages → /verify */}
        <Route path="/*-stolen-item-check" element={<Navigate to="/verify" replace />} />
        <Route path="/*-verification" element={<Navigate to="/verify" replace />} />
        
        {/* Statistics/info pages → /about */}
        <Route path="/stolen-goods-statistics-2025" element={<Navigate to="/about" replace />} />
        <Route path="/stolen-goods-statistics-2024" element={<Navigate to="/about" replace />} />
        <Route path="/statistics/*" element={<Navigate to="/about" replace />} />
        <Route path="/item-categories" element={<Navigate to="/about" replace />} />
        <Route path="/database" element={<Navigate to="/about" replace />} />
        <Route path="/stolen-items-database" element={<Navigate to="/about" replace />} />
        <Route path="/resource-center" element={<Navigate to="/about" replace />} />
        
        {/* Legal redirects */}
        <Route path="/terms-of-service" element={<Navigate to="/terms" replace />} />
        <Route path="/privacy-policy" element={<Navigate to="/privacy" replace />} />
        <Route path="/disclaimer" element={<Navigate to="/terms" replace />} />
        <Route path="/cookies" element={<Navigate to="/privacy" replace />} />
        <Route path="/transparency" element={<Navigate to="/about" replace />} />
        <Route path="/service-limitations" element={<Navigate to="/terms" replace />} />
        
        {/* Contact/support → /about */}
        <Route path="/contact" element={<Navigate to="/about" replace />} />
        <Route path="/support" element={<Navigate to="/about" replace />} />
        <Route path="/help" element={<Navigate to="/faq" replace />} />
        
        {/* 404 for everything else */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
