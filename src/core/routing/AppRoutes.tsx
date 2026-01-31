import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
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
const SitemapPage = lazy(() => import('@/pages/SitemapPage'));
const HowItWorksPage = lazy(() => import('@/pages/HowItWorksPage'));
const AuthPage = lazy(() => import('@/pages/AuthPage'));
const ReportStolenPage = lazy(() => import('@/pages/ReportStolenPage'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const CheckoutRedirectPage = lazy(() => import('@/pages/CheckoutRedirectPage'));
const VerificationSuccessPage = lazy(() => import('@/pages/VerificationSuccessPage'));
const PaymentSuccessPage = lazy(() => import('@/pages/PaymentSuccessPage'));

// Competitor Comparison Pages (SEO Strategy)
const Compare = lazy(() => import('@/pages/Compare'));
const FreeTools = lazy(() => import('@/pages/FreeTools'));
const VsCheckMendPage = lazy(() => import('@/pages/ComparisonCheckmend'));
const VsIMEIInfoPage = lazy(() => import('@/pages/ComparisonIMEIInfo'));
const VsSwappaPage = lazy(() => import('@/pages/ComparisonSwappa'));
const ComparisonCarfax = lazy(() => import('@/pages/ComparisonCarfax'));
const ComparisonAutocheck = lazy(() => import('@/pages/ComparisonAutocheck'));

// NEW Comparison Pages (High-Value SEO)
const SafeOrStolenVsIMEIInfo = lazy(() => import('@/pages/comparisons/SafeOrStolenVsIMEIInfo'));
const SafeOrStolenVsSwappa = lazy(() => import('@/pages/comparisons/SafeOrStolenVsSwappa'));
const NICBVINCheckAlternative = lazy(() => import('@/pages/comparisons/NICBVINCheckAlternative'));
const BestFreeIMEICheckers2025 = lazy(() => import('@/pages/comparisons/BestFreeIMEICheckers2025'));
const TopVINCheckServices2025 = lazy(() => import('@/pages/comparisons/TopVINCheckServices2025'));

// 2026 Competitor Comparison Pages (Beat the Competition SEO)
const VsDeviceCheckCA = lazy(() => import('@/pages/comparisons/VsDeviceCheckCA'));
const VsStolenPhoneChecker = lazy(() => import('@/pages/comparisons/VsStolenPhoneChecker'));
const VsVinCheckInfo = lazy(() => import('@/pages/comparisons/VsVinCheckInfo'));
const VsFastBound = lazy(() => import('@/pages/comparisons/VsFastBound'));
const BestStolenItemCheckers2026 = lazy(() => import('@/pages/comparisons/BestStolenItemCheckers2026'));

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

// NEW REAL PAGES (No more redirects for these URLs)
const IMEICheckPage = lazy(() => import('@/pages/IMEICheckPage'));
const VINCheckPage = lazy(() => import('@/pages/VINCheckPage'));
const IMEICheckerAppPage = lazy(() => import('@/pages/IMEICheckerAppPage'));
const GetAppPage = lazy(() => import('@/pages/GetAppPage'));
const ForConsumersPage = lazy(() => import('@/pages/ForConsumersPage'));
const PressPage = lazy(() => import('@/pages/PressPage'));
const StolenCheckMiami = lazy(() => import('@/pages/city/StolenCheckMiami'));

// GSC FIX: Missing pages that were hitting NotFound with noindex
const MarketplaceIntegrationPage = lazy(() => import('@/pages/MarketplaceIntegrationPage'));
const RealTimeVerificationPage = lazy(() => import('@/pages/RealTimeVerificationPage'));
const HowToCheckIfItemStolenPage = lazy(() => import('@/pages/HowToCheckIfItemStolenPage'));
const TransparencyPage = lazy(() => import('@/pages/TransparencyPage'));
const PressReleasePage = lazy(() => import('@/pages/PressReleasePage'));
const MobilePage = lazy(() => import('@/pages/MobilePage'));
const CommunityPage = lazy(() => import('@/pages/CommunityPage'));
const VsStolenRegisterPage = lazy(() => import('@/pages/VsStolenRegisterPage'));
const DataSourcesPage = lazy(() => import('@/pages/DataSourcesPage'));
const CheckAndroidPage = lazy(() => import('@/pages/CheckAndroidPage'));
const VerifyPawnshopsPage = lazy(() => import('@/pages/VerifyPawnshopsPage'));
const ComprehensiveGuidePage = lazy(() => import('@/pages/ComprehensiveGuidePage'));
const CheckFirearmPage = lazy(() => import('@/pages/CheckFirearmPage'));
const ResourceCenterPage = lazy(() => import('@/pages/ResourceCenterPage'));
const FeaturesPage = lazy(() => import('@/pages/FeaturesPage'));

// NEW SEO Landing Pages (Phase 1 - Priority Items)
const IPhoneIMEICheck = lazy(() => import('@/pages/items/IPhoneIMEICheck'));
const SamsungIMEICheck = lazy(() => import('@/pages/items/SamsungIMEICheck'));
const CarVINStolenCheck = lazy(() => import('@/pages/items/CarVINStolenCheck'));
const LaptopSerialCheck = lazy(() => import('@/pages/items/LaptopSerialCheck'));
const BicycleSerialCheck = lazy(() => import('@/pages/items/BicycleSerialCheck'));
const GamingConsoleCheck = lazy(() => import('@/pages/items/GamingConsoleCheck'));
const WatchSerialCheck = lazy(() => import('@/pages/items/WatchSerialCheck'));
const CameraEquipmentCheck = lazy(() => import('@/pages/items/CameraEquipmentCheck'));
const PowerToolsCheck = lazy(() => import('@/pages/items/PowerToolsCheck'));
const AndroidPhoneCheck = lazy(() => import('@/pages/items/AndroidPhoneCheck'));
const MotorcycleVINCheck = lazy(() => import('@/pages/items/MotorcycleVINCheck'));
const TabletCheck = lazy(() => import('@/pages/items/TabletCheck'));
const FirearmSerialCheck = lazy(() => import('@/pages/items/FirearmSerialCheck'));
const JewelryCheck = lazy(() => import('@/pages/items/JewelryCheck'));

// Marketplace Landing Pages
const MercariStolenCheck = lazy(() => import('@/pages/marketplace/MercariStolenCheck'));
const PoshmarkStolenCheck = lazy(() => import('@/pages/marketplace/PoshmarkStolenCheck'));
const StockXVerification = lazy(() => import('@/pages/marketplace/StockXVerification'));
const LetgoStolenCheck = lazy(() => import('@/pages/marketplace/LetgoStolenCheck'));

// Business/Industry Landing Pages
const ForElectronicsResellers = lazy(() => import('@/pages/business/ForElectronicsResellers'));
const ForInsuranceCompanies = lazy(() => import('@/pages/business/ForInsuranceCompanies'));
const ForLawEnforcement = lazy(() => import('@/pages/business/ForLawEnforcement'));

// TOP 10 STATE LICENSE PLATE PAGES (Pre-existing individual pages)
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
const ArizonaLicensePlateLookupPage = lazy(() => import('@/pages/ArizonaLicensePlateLookupPage'));

// REMAINING 39 STATE LICENSE PLATE PAGES (Generated from template)
const AlabamaLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.AlabamaLicensePlateLookup })));
const AlaskaLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.AlaskaLicensePlateLookup })));
const ArkansasLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.ArkansasLicensePlateLookup })));
const ColoradoLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.ColoradoLicensePlateLookup })));
const ConnecticutLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.ConnecticutLicensePlateLookup })));
const DelawareLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.DelawareLicensePlateLookup })));
const HawaiiLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.HawaiiLicensePlateLookup })));
const IdahoLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.IdahoLicensePlateLookup })));
const IndianaLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.IndianaLicensePlateLookup })));
const IowaLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.IowaLicensePlateLookup })));
const KansasLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.KansasLicensePlateLookup })));
const KentuckyLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.KentuckyLicensePlateLookup })));
const LouisianaLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.LouisianaLicensePlateLookup })));
const MaineLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.MaineLicensePlateLookup })));
const MarylandLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.MarylandLicensePlateLookup })));
const MassachusettsLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.MassachusettsLicensePlateLookup })));
const MichiganLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.MichiganLicensePlateLookup })));
const MinnesotaLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.MinnesotaLicensePlateLookup })));
const MississippiLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.MississippiLicensePlateLookup })));
const MissouriLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.MissouriLicensePlateLookup })));
const MontanaLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.MontanaLicensePlateLookup })));
const NebraskaLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.NebraskaLicensePlateLookup })));
const NevadaLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.NevadaLicensePlateLookup })));
const NewHampshireLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.NewHampshireLicensePlateLookup })));
const NewJerseyLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.NewJerseyLicensePlateLookup })));
const NewMexicoLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.NewMexicoLicensePlateLookup })));
const NorthDakotaLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.NorthDakotaLicensePlateLookup })));
const OklahomaLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.OklahomaLicensePlateLookup })));
const OregonLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.OregonLicensePlateLookup })));
const RhodeIslandLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.RhodeIslandLicensePlateLookup })));
const SouthCarolinaLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.SouthCarolinaLicensePlateLookup })));
const SouthDakotaLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.SouthDakotaLicensePlateLookup })));
const TennesseeLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.TennesseeLicensePlateLookup })));
const UtahLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.UtahLicensePlateLookup })));
const VermontLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.VermontLicensePlateLookup })));
const VirginiaLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.VirginiaLicensePlateLookup })));
const WestVirginiaLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.WestVirginiaLicensePlateLookup })));
const WisconsinLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.WisconsinLicensePlateLookup })));
const WyomingLicensePlateLookup = lazy(() => import('@/pages/states').then(m => ({ default: m.WyomingLicensePlateLookup })));

// NEW SEO PAGES - High-Traffic Keywords
const CheckIfStolenPage = lazy(() => import('@/pages/CheckIfStolenPage'));
const TheftAZPage = lazy(() => import('@/pages/TheftAZPage'));
const CheckPS5Page = lazy(() => import('@/pages/CheckPS5Page'));
const PartialSerialNumberSearchPage = lazy(() => import('@/pages/PartialSerialNumberSearchPage'));

// NEW GUN PAGES - High-Value SEO
const StolenGunDatabasePage = lazy(() => import('@/pages/StolenGunDatabasePage'));
const GunSerialNumberLookupPage = lazy(() => import('@/pages/GunSerialNumberLookupPage'));

// NEW COMPETITOR ALTERNATIVE PAGES
const FreeCarfaxAlternativePage = lazy(() => import('@/pages/comparisons/FreeCarfaxAlternativePage'));
const NICBAlternativePage = lazy(() => import('@/pages/comparisons/NICBAlternativePage'));
const HotGunzAlternativePage = lazy(() => import('@/pages/comparisons/HotGunzAlternativePage'));
const FreeStolenVehicleCheckPage = lazy(() => import('@/pages/comparisons/FreeStolenVehicleCheckPage'));
const VsBikeIndex = lazy(() => import('@/pages/comparisons/VsBikeIndex'));

// Washington DC License Plate Page
const WashingtonDCLicensePlateLookup = lazy(() => import('@/pages/WashingtonDCLicensePlateLookup'));

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
const CarfaxVsFreeVinAlternatives = lazy(() => import('@/pages/blog/CarfaxVsFreeVinAlternatives'));
const DynamicBlogPost = lazy(() => import('@/pages/blog/DynamicBlogPost'));

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
const MarketplaceURLChecker = lazy(() => import('@/pages/MarketplaceURLChecker'));

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
const VideoWatchPage = lazy(() => import('@/pages/youtube/VideoWatchPage'));
const ProductHuntPage = lazy(() => import('@/pages/ProductHuntPage'));
const PressKitPage = lazy(() => import('@/pages/PressKitPage'));
const CrunchbasePage = lazy(() => import('@/pages/CrunchbasePage'));
const OneValleyRecognitionPage = lazy(() => import('@/pages/news/OneValleyRecognitionPage'));

// Admin Pages
const GSCCallbackPage = lazy(() => import('@/pages/admin/GSCCallbackPage'));
const MarketingDashboard = lazy(() => import('@/pages/admin/MarketingDashboard'));
const TriggerIndexNowPage = lazy(() => import('@/pages/admin/TriggerIndexNow'));
const BatchIndexPage = lazy(() => import('@/pages/admin/BatchIndexPage'));
const StripeAdminPage = lazy(() => import('@/pages/admin/StripeAdminPage'));
const AIOrchestrator = lazy(() => import('@/pages/admin/AIOrchestrator'));

// Stolen Database & Shared Report Pages
const StolenDatabasePage = lazy(() => import('@/pages/StolenDatabasePage'));
const StolenItemDetailPage = lazy(() => import('@/pages/StolenItemDetailPage'));
const SharedReportPage = lazy(() => import('@/pages/SharedReportPage'));

// Guide Pages
const EbayBuyerProtection = lazy(() => import('@/pages/guides/EbayBuyerProtection'));
const VerifyCraigslistItems = lazy(() => import('@/pages/guides/VerifyCraigslistItems'));
const OfferupScamProtection = lazy(() => import('@/pages/guides/OfferupScamProtection'));

// NEW HIGH-TRAFFIC SEO PAGES (Competitive Keyword Strategy 2026)
const StolenPhoneCheckerPage = lazy(() => import('@/pages/StolenPhoneCheckerPage'));
const PhoneBlacklistCheckPage = lazy(() => import('@/pages/PhoneBlacklistCheckPage'));
const FacebookMarketplaceSafetyPage = lazy(() => import('@/pages/FacebookMarketplaceSafetyPage'));
const OfferUpSafetyPage = lazy(() => import('@/pages/OfferUpSafetyPage'));
const HowToCheckIfPhoneStolenPage = lazy(() => import('@/pages/HowToCheckIfPhoneStolenPage'));
const HowToCheckIfCarStolenPage = lazy(() => import('@/pages/HowToCheckIfCarStolenPage'));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<AppLoadingScreen />}>
      <Routes>
        {/* CORE ROUTES */}
        <Route path="/" element={<Index />} />
        <Route path="/verify" element={<VerifyPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* /account and /mobile-app handled by server-side _redirects - removed duplicate Navigate */}
        <Route path="/app" element={<AppPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/sitemap" element={<SitemapPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/report-stolen" element={<ReportStolenPage />} />
        <Route path="/checkout-redirect" element={<CheckoutRedirectPage />} />
        <Route path="/verification-success" element={<VerificationSuccessPage />} />
        <Route path="/payment-success" element={<PaymentSuccessPage />} />

        {/* STOLEN DATABASE & SHARED REPORTS */}
        <Route path="/stolen-database" element={<StolenDatabasePage />} />
        <Route path="/item/:slug" element={<StolenItemDetailPage />} />
        <Route path="/shared/:shareCode" element={<SharedReportPage />} />

        {/* ITEM LANDING PAGES */}
        <Route path="/imei-checker" element={<IMEICheckerPage />} />
        <Route path="/imei-check" element={<IMEICheckPage />} />
        <Route path="/vin-check" element={<VINCheckPage />} />
        <Route path="/imei-checker-app" element={<IMEICheckerAppPage />} />
        <Route path="/get-app" element={<GetAppPage />} />
        <Route path="/for-consumers" element={<ForConsumersPage />} />
        <Route path="/press" element={<PressPage />} />
        <Route path="/stolen-check-miami" element={<StolenCheckMiami />} />
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
        
        {/* GSC FIX: Pages that were returning noindex */}
        <Route path="/marketplace-integration" element={<MarketplaceIntegrationPage />} />
        <Route path="/real-time-verification" element={<RealTimeVerificationPage />} />
        <Route path="/how-to-check-if-item-stolen" element={<HowToCheckIfItemStolenPage />} />
        <Route path="/transparency" element={<TransparencyPage />} />
        <Route path="/press-release" element={<PressReleasePage />} />
        <Route path="/mobile" element={<MobilePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/vs-stolenregister" element={<VsStolenRegisterPage />} />
        <Route path="/data-sources" element={<DataSourcesPage />} />
        <Route path="/check-android" element={<CheckAndroidPage />} />
        <Route path="/verify/pawnshops" element={<VerifyPawnshopsPage />} />
        <Route path="/comprehensive-guide" element={<ComprehensiveGuidePage />} />
        <Route path="/check-firearm" element={<CheckFirearmPage />} />
        <Route path="/resource-center" element={<ResourceCenterPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        
        {/* NEW HIGH-TRAFFIC SEO PAGES (2026 Keyword Strategy) */}
        <Route path="/stolen-phone-checker" element={<StolenPhoneCheckerPage />} />
        <Route path="/phone-blacklist-check" element={<PhoneBlacklistCheckPage />} />
        <Route path="/facebook-marketplace-safety" element={<FacebookMarketplaceSafetyPage />} />
        <Route path="/offerup-safety" element={<OfferUpSafetyPage />} />
        <Route path="/how-to-check-if-phone-stolen" element={<HowToCheckIfPhoneStolenPage />} />
        <Route path="/how-to-check-if-car-stolen" element={<HowToCheckIfCarStolenPage />} />
        
        {/* NEW SEO ITEM PAGES (Phase 1 - All 14 Items) */}
        <Route path="/check-iphone-stolen" element={<IPhoneIMEICheck />} />
        <Route path="/check-samsung-stolen" element={<SamsungIMEICheck />} />
        <Route path="/check-android-phone-stolen" element={<AndroidPhoneCheck />} />
        <Route path="/check-car-stolen-vin" element={<CarVINStolenCheck />} />
        <Route path="/check-motorcycle-stolen-vin" element={<MotorcycleVINCheck />} />
        <Route path="/check-laptop-stolen" element={<LaptopSerialCheck />} />
        <Route path="/check-tablet-stolen" element={<TabletCheck />} />
        <Route path="/check-bicycle-stolen" element={<BicycleSerialCheck />} />
        <Route path="/check-gaming-console-stolen" element={<GamingConsoleCheck />} />
        <Route path="/check-watch-stolen" element={<WatchSerialCheck />} />
        <Route path="/check-camera-stolen" element={<CameraEquipmentCheck />} />
        <Route path="/check-power-tools-stolen" element={<PowerToolsCheck />} />
        <Route path="/check-firearm-serial" element={<FirearmSerialCheck />} />
        <Route path="/check-jewelry-stolen" element={<JewelryCheck />} />
        
        {/* MARKETPLACE PAGES (All 8 Marketplaces) */}
        <Route path="/marketplace-url-checker" element={<MarketplaceURLChecker />} />
        <Route path="/facebook-marketplace-stolen-check" element={<FacebookMarketplaceStolenCheck />} />
        <Route path="/craigslist-safety-verification" element={<CraigslistSafetyVerification />} />
        <Route path="/offerup-verify-not-stolen" element={<OfferupVerifyNotStolen />} />
        <Route path="/ebay-stolen-item-check" element={<EbayStolenItemCheck />} />
        <Route path="/mercari-stolen-check" element={<MercariStolenCheck />} />
        <Route path="/poshmark-stolen-check" element={<PoshmarkStolenCheck />} />
        <Route path="/stockx-verification" element={<StockXVerification />} />
        <Route path="/letgo-stolen-check" element={<LetgoStolenCheck />} />

        {/* 2026 COMPETITOR COMPARISON PAGES (Beat the Competition SEO) */}
        <Route path="/vs-devicecheck-ca" element={<VsDeviceCheckCA />} />
        <Route path="/vs-stolenphonechecker" element={<VsStolenPhoneChecker />} />
        <Route path="/vs-vincheck-info" element={<VsVinCheckInfo />} />
        <Route path="/vs-fastbound" element={<VsFastBound />} />
        <Route path="/best-stolen-item-checkers-2026" element={<BestStolenItemCheckers2026 />} />

        {/* GUIDE PAGES */}
        <Route path="/guides/ebay-buyer-protection" element={<EbayBuyerProtection />} />
        <Route path="/guides/verify-craigslist-items" element={<VerifyCraigslistItems />} />
        <Route path="/guides/offerup-scam-protection" element={<OfferupScamProtection />} />

        {/* TOP 11 STATE LICENSE PLATE PAGES (Individual files) */}
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
        <Route path="/arizona-license-plate-lookup" element={<ArizonaLicensePlateLookupPage />} />

        {/* REMAINING 39 STATE LICENSE PLATE PAGES (Generated from template) */}
        <Route path="/alabama-license-plate-lookup" element={<AlabamaLicensePlateLookup />} />
        <Route path="/alaska-license-plate-lookup" element={<AlaskaLicensePlateLookup />} />
        <Route path="/arkansas-license-plate-lookup" element={<ArkansasLicensePlateLookup />} />
        <Route path="/colorado-license-plate-lookup" element={<ColoradoLicensePlateLookup />} />
        <Route path="/connecticut-license-plate-lookup" element={<ConnecticutLicensePlateLookup />} />
        <Route path="/delaware-license-plate-lookup" element={<DelawareLicensePlateLookup />} />
        <Route path="/hawaii-license-plate-lookup" element={<HawaiiLicensePlateLookup />} />
        <Route path="/idaho-license-plate-lookup" element={<IdahoLicensePlateLookup />} />
        <Route path="/indiana-license-plate-lookup" element={<IndianaLicensePlateLookup />} />
        <Route path="/iowa-license-plate-lookup" element={<IowaLicensePlateLookup />} />
        <Route path="/kansas-license-plate-lookup" element={<KansasLicensePlateLookup />} />
        <Route path="/kentucky-license-plate-lookup" element={<KentuckyLicensePlateLookup />} />
        <Route path="/louisiana-license-plate-lookup" element={<LouisianaLicensePlateLookup />} />
        <Route path="/maine-license-plate-lookup" element={<MaineLicensePlateLookup />} />
        <Route path="/maryland-license-plate-lookup" element={<MarylandLicensePlateLookup />} />
        <Route path="/massachusetts-license-plate-lookup" element={<MassachusettsLicensePlateLookup />} />
        <Route path="/michigan-license-plate-lookup" element={<MichiganLicensePlateLookup />} />
        <Route path="/minnesota-license-plate-lookup" element={<MinnesotaLicensePlateLookup />} />
        <Route path="/mississippi-license-plate-lookup" element={<MississippiLicensePlateLookup />} />
        <Route path="/missouri-license-plate-lookup" element={<MissouriLicensePlateLookup />} />
        <Route path="/montana-license-plate-lookup" element={<MontanaLicensePlateLookup />} />
        <Route path="/nebraska-license-plate-lookup" element={<NebraskaLicensePlateLookup />} />
        <Route path="/nevada-license-plate-lookup" element={<NevadaLicensePlateLookup />} />
        <Route path="/new-hampshire-license-plate-lookup" element={<NewHampshireLicensePlateLookup />} />
        <Route path="/new-jersey-license-plate-lookup" element={<NewJerseyLicensePlateLookup />} />
        <Route path="/new-mexico-license-plate-lookup" element={<NewMexicoLicensePlateLookup />} />
        <Route path="/north-dakota-license-plate-lookup" element={<NorthDakotaLicensePlateLookup />} />
        <Route path="/oklahoma-license-plate-lookup" element={<OklahomaLicensePlateLookup />} />
        <Route path="/oregon-license-plate-lookup" element={<OregonLicensePlateLookup />} />
        <Route path="/rhode-island-license-plate-lookup" element={<RhodeIslandLicensePlateLookup />} />
        <Route path="/south-carolina-license-plate-lookup" element={<SouthCarolinaLicensePlateLookup />} />
        <Route path="/south-dakota-license-plate-lookup" element={<SouthDakotaLicensePlateLookup />} />
        <Route path="/tennessee-license-plate-lookup" element={<TennesseeLicensePlateLookup />} />
        <Route path="/utah-license-plate-lookup" element={<UtahLicensePlateLookup />} />
        <Route path="/vermont-license-plate-lookup" element={<VermontLicensePlateLookup />} />
        <Route path="/virginia-license-plate-lookup" element={<VirginiaLicensePlateLookup />} />
        <Route path="/west-virginia-license-plate-lookup" element={<WestVirginiaLicensePlateLookup />} />
        <Route path="/wisconsin-license-plate-lookup" element={<WisconsinLicensePlateLookup />} />
        <Route path="/wyoming-license-plate-lookup" element={<WyomingLicensePlateLookup />} />

        {/* HIGH-VALUE SEO PAGES */}
        <Route path="/check-if-stolen" element={<CheckIfStolenPage />} />
        <Route path="/theftaz" element={<TheftAZPage />} />
        <Route path="/check-ps5" element={<CheckPS5Page />} />
        <Route path="/partial-serial-number-search" element={<PartialSerialNumberSearchPage />} />
        
        {/* GUN VERIFICATION PAGES */}
        <Route path="/stolen-gun-database" element={<StolenGunDatabasePage />} />
        <Route path="/gun-serial-number-lookup" element={<GunSerialNumberLookupPage />} />
        
        {/* COMPETITOR ALTERNATIVE PAGES */}
        <Route path="/carfax-alternative-free" element={<FreeCarfaxAlternativePage />} />
        <Route path="/nicb-alternative" element={<NICBAlternativePage />} />
        <Route path="/hotgunz-alternative" element={<HotGunzAlternativePage />} />
        <Route path="/free-stolen-vehicle-check" element={<FreeStolenVehicleCheckPage />} />

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
        
        {/* NEW HIGH-VALUE COMPARISON PAGES */}
        <Route path="/comparisons/safeorstolen-vs-imei-info" element={<SafeOrStolenVsIMEIInfo />} />
        <Route path="/comparisons/safeorstolen-vs-swappa" element={<SafeOrStolenVsSwappa />} />
        <Route path="/comparisons/nicb-vincheck-alternative" element={<NICBVINCheckAlternative />} />
        <Route path="/comparisons/best-free-imei-checkers-2025" element={<BestFreeIMEICheckers2025 />} />
        <Route path="/comparisons/top-vin-check-services-2025" element={<TopVINCheckServices2025 />} />
        <Route path="/vs-bikeindex" element={<VsBikeIndex />} />

        {/* WASHINGTON DC LICENSE PLATE (51st "State") */}
        <Route path="/washington-dc-license-plate-lookup" element={<WashingtonDCLicensePlateLookup />} />

        {/* APP FEATURE PAGES */}
        <Route path="/download" element={<DownloadApp />} />
        <Route path="/app/features" element={<AppFeatures />} />
        <Route path="/app/stolen-phone-checker" element={<StolenPhoneCheckerApp />} />
        <Route path="/app/vin-checker" element={<VinCheckerApp />} />
        <Route path="/app/barcode-scanner" element={<BarcodeScanner />} />

        {/* BLOG PAGES */}
        <Route path="/blog" element={<BlogIndexPage />} />
        <Route path="/blog/how-to-check-if-phone-stolen" element={<HowToCheckPhoneStolen />} />
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
        <Route path="/blog/carfax-vs-free-vin-alternatives" element={<CarfaxVsFreeVinAlternatives />} />
        
        {/* Dynamic Blog Posts from Database - MUST be last in blog routes */}
        <Route path="/blog/:slug" element={<DynamicBlogPost />} />

        {/* BUSINESS PAGES (All 8 Business Types) */}
        <Route path="/for-pawn-shops" element={<ForPawnShops />} />
        <Route path="/for-dealers" element={<ForDealers />} />
        <Route path="/for-marketplaces" element={<ForMarketplaces />} />
        <Route path="/for-auction-houses" element={<ForAuctionHouses />} />
        <Route path="/for-businesses" element={<ForBusinesses />} />
        <Route path="/for-electronics-resellers" element={<ForElectronicsResellers />} />
        <Route path="/for-insurance-companies" element={<ForInsuranceCompanies />} />
        <Route path="/for-law-enforcement" element={<ForLawEnforcement />} />

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

        {/* NEWS PAGES */}
        <Route path="/news/onevalley-recognition" element={<OneValleyRecognitionPage />} />

        {/* PRESS & SOCIAL PAGES */}
        <Route path="/press-kit" element={<PressKitPage />} />
        <Route path="/product-hunt" element={<ProductHuntPage />} />
        <Route path="/youtube" element={<YouTubePage />} />
        <Route path="/youtube/:slug" element={<VideoWatchPage />} />
        <Route path="/crunchbase" element={<CrunchbasePage />} />

        {/* ADMIN ROUTES - Note: Some pages removed during database cleanup */}
        <Route path="/admin/gsc-callback" element={<GSCCallbackPage />} />
        <Route path="/admin/indexnow" element={<TriggerIndexNowPage />} />
        <Route path="/admin/batch-index" element={<BatchIndexPage />} />
        <Route path="/admin/stripe" element={<StripeAdminPage />} />
        <Route path="/admin/marketing" element={<MarketingDashboard />} />
        <Route path="/admin/ai-orchestrator" element={<AIOrchestrator />} />

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
        {/* /stolen-phone-check and /stolen-car-check handled by server-side _redirects */}

        {/* ALL REDIRECTS HANDLED BY SERVER-SIDE _redirects FILE */}
        {/* React Navigate components removed to prevent duplicate redirect handling */}
        {/* Server-side 301s are respected by Google; client-side Navigate is not */}

        <Route path="/404" element={<NotFound />} />

        {/* 404 for everything else */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
