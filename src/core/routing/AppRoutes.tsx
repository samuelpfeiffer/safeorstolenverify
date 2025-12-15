import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppLoadingScreen } from '@/components/common/AppLoadingScreen';

// CORE 10 PAGES + STRATEGIC SEO PAGES
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
const ReportStolenPage = lazy(() => import('@/pages/ReportStolenPage'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const CheckoutRedirectPage = lazy(() => import('@/pages/CheckoutRedirectPage'));
const VerificationSuccessPage = lazy(() => import('@/pages/VerificationSuccessPage'));

// Competitor Comparison Pages (SEO Strategy)
const Compare = lazy(() => import('@/pages/Compare'));
const FreeTools = lazy(() => import('@/pages/FreeTools'));
const VsCheckMendPage = lazy(() => import('@/pages/ComparisonCheckmend'));
const VsIMEIInfoPage = lazy(() => import('@/pages/ComparisonIMEIInfo'));
const VsSwappaPage = lazy(() => import('@/pages/ComparisonSwappa'));
const ComparisonCarfax = lazy(() => import('@/pages/ComparisonCarfax'));
const ComparisonAutocheck = lazy(() => import('@/pages/ComparisonAutocheck'));

// Item Landing Pages (High-Value SEO)
const IMEICheckerPage = lazy(() => import('@/pages/IMEICheckerPage'));
const VINCheckerPage = lazy(() => import('@/pages/VINCheckerPage'));
const SerialNumberCheckerPage = lazy(() => import('@/pages/SerialNumberCheckerPage'));
const CheckPhonePage = lazy(() => import('@/pages/CheckPhonePage'));
const CheckCarPage = lazy(() => import('@/pages/CheckCarPage'));
const CheckBikePage = lazy(() => import('@/pages/CheckBikePage'));
const CheckLaptopPage = lazy(() => import('@/pages/CheckLaptopPage'));
const CheckElectronicsPage = lazy(() => import('@/pages/CheckElectronicsPage'));
const CheckEBikePage = lazy(() => import('@/pages/CheckEBikePage'));
const CheckAppliancesPage = lazy(() => import('@/pages/CheckAppliancesPage'));
const CheckToolsPage = lazy(() => import('@/pages/CheckToolsPage'));
const CheckJewelryPage = lazy(() => import('@/pages/CheckJewelryPage'));
const CheckBoatPage = lazy(() => import('@/pages/CheckBoatPage'));
const FirearmsCheckPage = lazy(() => import('@/pages/FirearmsCheckPage'));
const LicensePlateLookupPage = lazy(() => import('@/pages/LicensePlateLookupPage'));
const TestimonialsPage = lazy(() => import('@/pages/TestimonialsPage'));

// TOP 10 STATE LICENSE PLATE PAGES ONLY (High-Value States)
const CaliforniaLicensePlateLookupPage = lazy(() => import('@/pages/CaliforniaLicensePlateLookupPage'));
const TexasLicensePlateLookupPage = lazy(() => import('@/pages/TexasLicensePlateLookupPage'));
const FloridaLicensePlateLookupPage = lazy(() => import('@/pages/FloridaLicensePlateLookupPage'));
const NewYorkLicensePlateLookupPage = lazy(() => import('@/pages/NewYorkLicensePlateLookupPage'));
const IllinoisLicensePlateLookupPage = lazy(() => import('@/pages/IllinoisLicensePlateLookupPage'));
const GeorgiaLicensePlateLookupPage = lazy(() => import('@/pages/GeorgiaLicensePlateLookupPage'));
const PennsylvaniaLicensePlateLookupPage = lazy(() => import('@/pages/PennsylvaniaLicensePlateLookupPage'));
const OhioLicensePlateLookupPage = lazy(() => import('@/pages/OhioLicensePlateLookupPage'));
const NorthCarolinaLicensePlateLookupPage = lazy(() => import('@/pages/NorthCarolinaLicensePlateLookupPage'));
const WashingtonLicensePlateLookupPage = lazy(() => import('@/pages/WashingtonLicensePlateLookupPage'));

// TOP 10 STATE VIN PAGES ONLY (High-Value States)
const CaliforniaVinLookup = lazy(() => import('@/pages/CaliforniaVinLookup'));
const TexasVinLookup = lazy(() => import('@/pages/TexasVinLookup'));
const FloridaVinLookup = lazy(() => import('@/pages/FloridaVinLookup'));
const NewYorkVinLookup = lazy(() => import('@/pages/NewYorkVinLookup'));
const IllinoisVinLookup = lazy(() => import('@/pages/IllinoisVinLookup'));
const GeorgiaVinLookup = lazy(() => import('@/pages/GeorgiaVinLookup'));
const PennsylvaniaVinLookup = lazy(() => import('@/pages/PennsylvaniaVinLookup'));
const OhioVinLookup = lazy(() => import('@/pages/OhioVinLookup'));
const NorthCarolinaVinLookup = lazy(() => import('@/pages/NorthCarolinaVinLookup'));
const WashingtonVinLookup = lazy(() => import('@/pages/WashingtonVinLookup'));

// Blog Index & Articles
const BlogIndexPage = lazy(() => import('@/pages/BlogIndexPage'));
const HowToCheckPhoneStolen = lazy(() => import('@/pages/blog/HowToCheckPhoneStolen'));
const CompleteVinGuide = lazy(() => import('@/pages/blog/CompleteVinGuide'));
const ProtectYourselfBuyingUsedElectronics = lazy(() => import('@/pages/blog/ProtectYourselfBuyingUsedElectronics'));
const DataSourceCredibilityStolenGoods = lazy(() => import('@/pages/blog/DataSourceCredibilityStolenGoods'));
const UltimateMarketplaceBuyersGuide = lazy(() => import('@/pages/blog/UltimateMarketplaceBuyersGuide'));
const CompleteImeiGuide = lazy(() => import('@/pages/blog/CompleteImeiGuide'));
const ScammerTacticsExposed = lazy(() => import('@/pages/blog/ScammerTacticsExposed'));
const PhoneVerificationGuide = lazy(() => import('@/pages/blog/PhoneVerificationGuide'));
const TheftTrendsReport2024 = lazy(() => import('@/pages/blog/TheftTrendsReport2024'));
const VerificationMethodology = lazy(() => import('@/pages/blog/VerificationMethodology'));
const RealUserStories = lazy(() => import('@/pages/blog/RealUserStories'));
const CompleteVerificationGuide = lazy(() => import('@/pages/blog/CompleteVerificationGuide'));
const StolenVerificationAppGuide = lazy(() => import('@/pages/blog/StolenVerificationAppGuide'));
const CheckMendHasNoApp = lazy(() => import('@/pages/blog/CheckMendHasNoApp'));
const LikeCarfaxForPhones = lazy(() => import('@/pages/blog/LikeCarfaxForPhones'));
const HowToCheckIfIphoneStolen = lazy(() => import('@/pages/blog/HowToCheckIfIphoneStolen'));
const FacebookMarketplaceScams = lazy(() => import('@/pages/blog/FacebookMarketplaceScams'));
const PawnShopStolenItemVerification = lazy(() => import('@/pages/blog/PawnShopStolenItemVerification'));
const IMEICheckerAppDownload = lazy(() => import('@/pages/blog/IMEICheckerAppDownload'));
const FirearmSerialNumberVerification = lazy(() => import('@/pages/blog/FirearmSerialNumberVerification'));
const BicycleStolenSerialNumberCheck = lazy(() => import('@/pages/blog/BicycleStolenSerialNumberCheck'));
const VerifyItemBeforeMeetup = lazy(() => import('@/pages/blog/VerifyItemBeforeMeetup'));

// Traffic Generation Landing Pages
const CheckStolenPhonePage = lazy(() => import('@/pages/traffic/StolenCheckPages').then(m => ({ default: m.CheckStolenPhone })));
const CheckStolenCarPage = lazy(() => import('@/pages/traffic/StolenCheckPages').then(m => ({ default: m.CheckStolenCar })));
const CheckStolenLaptopPage = lazy(() => import('@/pages/traffic/StolenCheckPages').then(m => ({ default: m.CheckStolenLaptop })));
const CheckStolenBikePage = lazy(() => import('@/pages/traffic/StolenCheckPages').then(m => ({ default: m.CheckStolenBike })));
const CheckStolenFirearmPage = lazy(() => import('@/pages/traffic/StolenCheckPages').then(m => ({ default: m.CheckStolenFirearm })));

// Marketplace Landing Pages
const FacebookMarketplaceStolenCheck = lazy(() => import('@/pages/marketplace/FacebookMarketplaceStolenCheck'));
const CraigslistSafetyVerification = lazy(() => import('@/pages/marketplace/CraigslistSafetyVerification'));
const OfferupVerifyNotStolen = lazy(() => import('@/pages/marketplace/OfferupVerifyNotStolen'));
const EbayStolenItemCheck = lazy(() => import('@/pages/marketplace/EbayStolenItemCheck'));

// City Pages (Top 10 Cities)
const StolenCheckLosAngeles = lazy(() => import('@/pages/city/StolenCheckLosAngeles'));
const StolenCheckNewYorkCity = lazy(() => import('@/pages/city/StolenCheckNewYorkCity'));
const StolenCheckChicago = lazy(() => import('@/pages/city/StolenCheckChicago'));
const StolenCheckHouston = lazy(() => import('@/pages/city/StolenCheckHouston'));
const StolenCheckPhoenix = lazy(() => import('@/pages/city/StolenCheckPhoenix'));
const StolenCheckPhiladelphia = lazy(() => import('@/pages/city/StolenCheckPhiladelphia'));
const StolenCheckSanAntonio = lazy(() => import('@/pages/city/StolenCheckSanAntonio'));
const StolenCheckSanDiego = lazy(() => import('@/pages/city/StolenCheckSanDiego'));
const StolenCheckDallas = lazy(() => import('@/pages/city/StolenCheckDallas'));
const StolenCheckSanJose = lazy(() => import('@/pages/city/StolenCheckSanJose'));

// Business Pages
const ForPawnShops = lazy(() => import('@/pages/business/ForPawnShops'));
const ForDealers = lazy(() => import('@/pages/business/ForDealers'));
const ForMarketplaces = lazy(() => import('@/pages/business/ForMarketplaces'));
const ForAuctionHouses = lazy(() => import('@/pages/business/ForAuctionHouses'));
const ForBusinesses = lazy(() => import('@/pages/business/ForBusinesses'));

// App Landing Pages
const StolenPhoneCheckerApp = lazy(() => import('@/pages/app/StolenPhoneCheckerApp'));
const VinCheckerApp = lazy(() => import('@/pages/app/VinCheckerApp'));
const BarcodeScanner = lazy(() => import('@/pages/app/BarcodeScanner'));
const DownloadApp = lazy(() => import('@/pages/DownloadApp'));
const AppFeatures = lazy(() => import('@/pages/app/AppFeatures'));

// Social Media & External Profile Pages
const YouTubePage = lazy(() => import('@/pages/YouTubePage'));
const CrunchbasePage = lazy(() => import('@/pages/CrunchbasePage'));

// Admin Pages
const AutonomousAIDashboard = lazy(() => import('@/pages/admin/AutonomousAIDashboard'));
const GSCMonitoringDashboard = lazy(() => import('@/pages/admin/GSCMonitoringDashboard'));
const GSCConnectPage = lazy(() => import('@/pages/admin/GSCConnectPage'));
const GSCCallbackPage = lazy(() => import('@/pages/admin/GSCCallbackPage'));
const MarketingDashboard = lazy(() => import('@/pages/admin/MarketingDashboard'));
const TriggerIndexNowPage = lazy(() => import('@/pages/admin/TriggerIndexNow'));
const BatchIndexPage = lazy(() => import('@/pages/admin/BatchIndexPage'));
const StripeAdminPage = lazy(() => import('@/pages/admin/StripeAdminPage'));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<AppLoadingScreen />}>
      <Routes>
        {/* CORE ROUTES */}
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
        <Route path="/report-stolen" element={<ReportStolenPage />} />
        <Route path="/checkout-redirect" element={<CheckoutRedirectPage />} />
        <Route path="/verification-success" element={<VerificationSuccessPage />} />

        {/* ITEM LANDING PAGES */}
        <Route path="/imei-checker" element={<IMEICheckerPage />} />
        <Route path="/vin-checker" element={<VINCheckerPage />} />
        <Route path="/serial-number-checker" element={<SerialNumberCheckerPage />} />
        <Route path="/check-phone" element={<CheckPhonePage />} />
        <Route path="/check-car" element={<CheckCarPage />} />
        <Route path="/check-bike" element={<CheckBikePage />} />
        <Route path="/check-laptop" element={<CheckLaptopPage />} />
        <Route path="/check-electronics" element={<CheckElectronicsPage />} />
        <Route path="/check-ebike" element={<CheckEBikePage />} />
        <Route path="/check-appliances" element={<CheckAppliancesPage />} />
        <Route path="/check-tools" element={<CheckToolsPage />} />
        <Route path="/check-jewelry" element={<CheckJewelryPage />} />
        <Route path="/check-boat" element={<CheckBoatPage />} />
        <Route path="/firearms-check" element={<FirearmsCheckPage />} />
        <Route path="/license-plate-lookup" element={<LicensePlateLookupPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        
        {/* MARKETPLACE PAGES */}
        <Route path="/facebook-marketplace-stolen-check" element={<FacebookMarketplaceStolenCheck />} />
        <Route path="/craigslist-safety-verification" element={<CraigslistSafetyVerification />} />
        <Route path="/offerup-verify-not-stolen" element={<OfferupVerifyNotStolen />} />
        <Route path="/ebay-stolen-item-check" element={<EbayStolenItemCheck />} />

        {/* TOP 10 STATE LICENSE PLATE PAGES */}
        <Route path="/california-license-plate-lookup" element={<CaliforniaLicensePlateLookupPage />} />
        <Route path="/texas-license-plate-lookup" element={<TexasLicensePlateLookupPage />} />
        <Route path="/florida-license-plate-lookup" element={<FloridaLicensePlateLookupPage />} />
        <Route path="/new-york-license-plate-lookup" element={<NewYorkLicensePlateLookupPage />} />
        <Route path="/illinois-license-plate-lookup" element={<IllinoisLicensePlateLookupPage />} />
        <Route path="/georgia-license-plate-lookup" element={<GeorgiaLicensePlateLookupPage />} />
        <Route path="/pennsylvania-license-plate-lookup" element={<PennsylvaniaLicensePlateLookupPage />} />
        <Route path="/ohio-license-plate-lookup" element={<OhioLicensePlateLookupPage />} />
        <Route path="/north-carolina-license-plate-lookup" element={<NorthCarolinaLicensePlateLookupPage />} />
        <Route path="/washington-license-plate-lookup" element={<WashingtonLicensePlateLookupPage />} />

        {/* TOP 10 STATE VIN PAGES */}
        <Route path="/california-vin-lookup" element={<CaliforniaVinLookup />} />
        <Route path="/texas-vin-lookup" element={<TexasVinLookup />} />
        <Route path="/florida-vin-lookup" element={<FloridaVinLookup />} />
        <Route path="/new-york-vin-lookup" element={<NewYorkVinLookup />} />
        <Route path="/illinois-vin-lookup" element={<IllinoisVinLookup />} />
        <Route path="/georgia-vin-lookup" element={<GeorgiaVinLookup />} />
        <Route path="/pennsylvania-vin-lookup" element={<PennsylvaniaVinLookup />} />
        <Route path="/ohio-vin-lookup" element={<OhioVinLookup />} />
        <Route path="/north-carolina-vin-lookup" element={<NorthCarolinaVinLookup />} />
        <Route path="/washington-vin-lookup" element={<WashingtonVinLookup />} />

        {/* COMPETITOR COMPARISON PAGES */}
        <Route path="/compare" element={<Compare />} />
        <Route path="/free-tools" element={<FreeTools />} />
        <Route path="/vs-checkmend" element={<VsCheckMendPage />} />
        <Route path="/vs-imeiinfo" element={<VsIMEIInfoPage />} />
        <Route path="/vs-swappa" element={<VsSwappaPage />} />
        <Route path="/vs-carfax" element={<ComparisonCarfax />} />
        <Route path="/vs-autocheck" element={<ComparisonAutocheck />} />

        {/* APP FEATURE PAGES */}
        <Route path="/download" element={<DownloadApp />} />
        <Route path="/app/features" element={<AppFeatures />} />
        <Route path="/app/stolen-phone-checker" element={<StolenPhoneCheckerApp />} />
        <Route path="/app/vin-checker" element={<VinCheckerApp />} />
        <Route path="/app/barcode-scanner" element={<BarcodeScanner />} />

        {/* BLOG PAGES */}
        <Route path="/blog" element={<BlogIndexPage />} />
        <Route path="/blog/how-to-check-if-phone-is-stolen" element={<HowToCheckPhoneStolen />} />
        <Route path="/blog/complete-vin-guide" element={<CompleteVinGuide />} />
        <Route path="/blog/protect-yourself-buying-used-electronics" element={<ProtectYourselfBuyingUsedElectronics />} />
        <Route path="/blog/data-source-credibility-stolen-goods-verification" element={<DataSourceCredibilityStolenGoods />} />
        <Route path="/blog/ultimate-marketplace-buyers-guide" element={<UltimateMarketplaceBuyersGuide />} />
        <Route path="/blog/complete-imei-guide-protect-yourself" element={<CompleteImeiGuide />} />
        <Route path="/blog/scammer-tactics-exposed" element={<ScammerTacticsExposed />} />
        <Route path="/blog/phone-verification-guide" element={<PhoneVerificationGuide />} />
        <Route path="/blog/theft-trends-report-2024" element={<TheftTrendsReport2024 />} />
        <Route path="/blog/verification-methodology" element={<VerificationMethodology />} />
        <Route path="/blog/real-user-stories" element={<RealUserStories />} />
        <Route path="/blog/complete-verification-guide" element={<CompleteVerificationGuide />} />
        <Route path="/blog/stolen-verification-app-guide" element={<StolenVerificationAppGuide />} />
        <Route path="/blog/checkmend-has-no-app" element={<CheckMendHasNoApp />} />
        <Route path="/blog/like-carfax-for-phones" element={<LikeCarfaxForPhones />} />
        <Route path="/blog/how-to-check-if-iphone-stolen" element={<HowToCheckIfIphoneStolen />} />
        <Route path="/blog/facebook-marketplace-scams" element={<FacebookMarketplaceScams />} />
        <Route path="/blog/pawn-shop-stolen-item-verification" element={<PawnShopStolenItemVerification />} />
        <Route path="/blog/imei-checker-app-download" element={<IMEICheckerAppDownload />} />
        <Route path="/blog/firearm-serial-number-verification" element={<FirearmSerialNumberVerification />} />
        <Route path="/blog/bicycle-stolen-serial-number-check" element={<BicycleStolenSerialNumberCheck />} />
        <Route path="/blog/verify-item-before-meetup" element={<VerifyItemBeforeMeetup />} />

        {/* BUSINESS PAGES */}
        <Route path="/for-pawn-shops" element={<ForPawnShops />} />
        <Route path="/for-dealers" element={<ForDealers />} />
        <Route path="/for-marketplaces" element={<ForMarketplaces />} />
        <Route path="/for-auction-houses" element={<ForAuctionHouses />} />
        <Route path="/for-businesses" element={<ForBusinesses />} />

        {/* CITY PAGES */}
        <Route path="/stolen-check-los-angeles" element={<StolenCheckLosAngeles />} />
        <Route path="/stolen-check-new-york-city" element={<StolenCheckNewYorkCity />} />
        <Route path="/stolen-check-chicago" element={<StolenCheckChicago />} />
        <Route path="/stolen-check-houston" element={<StolenCheckHouston />} />
        <Route path="/stolen-check-phoenix" element={<StolenCheckPhoenix />} />
        <Route path="/stolen-check-philadelphia" element={<StolenCheckPhiladelphia />} />
        <Route path="/stolen-check-san-antonio" element={<StolenCheckSanAntonio />} />
        <Route path="/stolen-check-san-diego" element={<StolenCheckSanDiego />} />
        <Route path="/stolen-check-dallas" element={<StolenCheckDallas />} />
        <Route path="/stolen-check-san-jose" element={<StolenCheckSanJose />} />

        {/* SOCIAL MEDIA & EXTERNAL PROFILE PAGES */}
        <Route path="/youtube" element={<YouTubePage />} />
        <Route path="/crunchbase" element={<CrunchbasePage />} />

        {/* ADMIN ROUTES */}
        <Route path="/admin/autonomous-ai" element={<AutonomousAIDashboard />} />
        <Route path="/admin/gsc-status" element={<GSCMonitoringDashboard />} />
        <Route path="/admin/gsc-connect" element={<GSCConnectPage />} />
        <Route path="/admin/gsc-callback" element={<GSCCallbackPage />} />
        <Route path="/admin/indexnow" element={<TriggerIndexNowPage />} />
        <Route path="/admin/batch-index" element={<BatchIndexPage />} />
        <Route path="/admin/stripe" element={<StripeAdminPage />} />
        <Route path="/admin/marketing" element={<MarketingDashboard />} />

        {/* ALL OTHER STATE PAGES REDIRECT TO MAIN PAGES (Server-side 301s in _redirects handle these) */}
        {/* Remaining 40 VIN states → /vin-checker */}
        {/* Remaining 40 License Plate states → /license-plate-lookup */}

        {/* HIGH-TRAFFIC SEARCH LANDING PAGES */}
        <Route path="/is-my-phone-stolen" element={<CheckStolenPhonePage />} />
        <Route path="/is-this-car-stolen" element={<CheckStolenCarPage />} />
        <Route path="/is-this-laptop-stolen" element={<CheckStolenLaptopPage />} />
        <Route path="/is-this-bike-stolen" element={<CheckStolenBikePage />} />
        <Route path="/is-this-gun-stolen" element={<CheckStolenFirearmPage />} />
        <Route path="/check-stolen-phone" element={<CheckStolenPhonePage />} />
        <Route path="/check-stolen-car" element={<CheckStolenCarPage />} />
        <Route path="/stolen-phone-check" element={<CheckStolenPhonePage />} />
        <Route path="/stolen-car-check" element={<CheckStolenCarPage />} />

        {/* TOOLS REDIRECTS - All verification consolidated to /verify */}
        <Route path="/tools" element={<Navigate to="/verify" replace />} />
        <Route path="/tools/imei-check" element={<Navigate to="/verify?type=smartphone" replace />} />
        <Route path="/tools/vin-check" element={<Navigate to="/verify?type=vehicle" replace />} />
        <Route path="/tools/bike-check" element={<Navigate to="/verify?type=bicycle" replace />} />
        <Route path="/tools/firearm-check" element={<Navigate to="/verify?type=firearm" replace />} />
        <Route path="/tools/ai-analyzer" element={<Navigate to="/verify" replace />} />
        <Route path="/tools/voice-search" element={<Navigate to="/verify" replace />} />
        <Route path="/tools/report-stolen" element={<Navigate to="/report-stolen" replace />} />

        {/* LEGACY REDIRECTS (kept for React Router fallback) */}
        <Route path="/imei-check" element={<Navigate to="/verify?type=smartphone" replace />} />
        <Route path="/vin-check" element={<Navigate to="/verify?type=vehicle" replace />} />
        <Route path="/check-if-stolen" element={<Navigate to="/verify" replace />} />
        <Route path="/stolen-item-checker" element={<Navigate to="/verify" replace />} />
        <Route path="/verify-not-stolen" element={<Navigate to="/verify" replace />} />
        <Route path="/terms-of-service" element={<Navigate to="/terms" replace />} />
        <Route path="/privacy-policy" element={<Navigate to="/privacy" replace />} />
        <Route path="/contact" element={<Navigate to="/about" replace />} />
        <Route path="/help" element={<Navigate to="/faq" replace />} />

        {/* 404 for everything else */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
