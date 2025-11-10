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

// Blog
const BlogPage = lazy(() => import('@/pages/BlogPage'));
const BlogPostPage = lazy(() => import('@/pages/BlogPostPage'));

// Business
const MobileAppPage = lazy(() => import('@/pages/MobileAppPage'));
const ForBrandsPage = lazy(() => import('@/pages/ForBrandsPage'));

// Item Categories
const FirearmsCheckPage = lazy(() => import('@/pages/FirearmsCheckPage'));

// Admin
const AdminDashboard = lazy(() => import('@/pages/admin/AdminDashboard'));
const Admin = lazy(() => import('@/pages/Admin'));

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
        
        {/* Item Category Pages */}
        <Route path="/firearms-check" element={<FirearmsCheckPage />} />

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
        <Route path="/check-phone" element={<Navigate to="/verify" replace />} />
        <Route path="/check-car" element={<Navigate to="/verify" replace />} />
        <Route path="/stolen-item-checker" element={<Navigate to="/verify" replace />} />
        <Route path="/imei-check" element={<Navigate to="/verify" replace />} />
        <Route path="/vin-verification" element={<Navigate to="/verify" replace />} />

        {/* 404 - Must be last */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
