import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppLoadingScreen } from '@/components/common/AppLoadingScreen';

// Core Pages
const Index = lazy(() => import('@/pages/Index'));
const AuthPage = lazy(() => import('@/pages/AuthPage'));
const UnifiedVerificationPage = lazy(() => import('@/pages/UnifiedVerificationPageEnhanced'));
const VerifyPage = lazy(() => import('@/pages/VerifyPage'));
const DashboardPage = lazy(() => import('@/pages/DashboardPage'));
const ProfilePage = lazy(() => import('@/pages/ProfilePage'));
const SubscriptionPage = lazy(() => import('@/pages/SubscriptionPage'));
const SubscriptionsPage = lazy(() => import('@/pages/SubscriptionsPage'));
const PricingPage = lazy(() => import('@/pages/PricingPage'));
const HowItWorksPage = lazy(() => import('@/pages/HowItWorksPage'));
const HowItWorksDetailedPage = lazy(() => import('@/pages/HowItWorksDetailedPage'));
const CheckIfStolenPage = lazy(() => import('@/pages/CheckIfStolenPage'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const FAQPage = lazy(() => import('@/pages/FAQPage'));
const TermsPage = lazy(() => import('@/pages/TermsPage'));
const PrivacyPage = lazy(() => import('@/pages/PrivacyPage'));
const TransparencyPage = lazy(() => import('@/pages/TransparencyPage'));
const RedirectTestPage = lazy(() => import('@/pages/RedirectTestPage'));

// Analytics & Reporting
const Analytics = lazy(() => import('@/pages/Analytics'));
const ReportStolen = lazy(() => import('@/pages/ReportStolen'));

// Blog
const BlogPage = lazy(() => import('@/pages/BlogPage'));
const BlogPostPage = lazy(() => import('@/pages/BlogPostPage'));
const HowToCheckIfPhoneStolen = lazy(() => import('@/pages/blog/HowToCheckIfPhoneStolen'));
const HowToInstallSafeOrStolenApp = lazy(() => import('@/pages/blog/HowToInstallSafeOrStolenApp'));
const IMEICheckerGuide2025 = lazy(() => import('@/pages/blog/IMEICheckerGuide2025'));
const VINVerificationGuide = lazy(() => import('@/pages/blog/VINVerificationGuide'));
const FacebookMarketplaceSafety = lazy(() => import('@/pages/blog/FacebookMarketplaceSafety'));
const WhatToDoIfBoughtStolenPhone = lazy(() => import('@/pages/blog/WhatToDoIfBoughtStolenPhone'));
const BestIMEICheckerTools2025 = lazy(() => import('@/pages/blog/BestIMEICheckerTools2025'));

// Tools
const ToolsPage = lazy(() => import('@/pages/ToolsPage'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
const BrandsPage = lazy(() => import('@/pages/BrandsPage'));
const PressReleasesPage = lazy(() => import('@/pages/PressReleasesPage'));
const PressPage = lazy(() => import('@/pages/PressPage'));
const TestimonialsPage = lazy(() => import('@/pages/TestimonialsPage'));
const SecurityPage = lazy(() => import('@/pages/SecurityPage'));
const WebCrawlerPage = lazy(() => import('@/pages/WebCrawlerPage'));

// Business
const MobileAppPage = lazy(() => import('@/pages/MobileAppPage'));
const ForBrandsPage = lazy(() => import('@/pages/ForBrandsPage'));

// Redirect Pages (with HTML meta refresh for crawlers)
const IMEICheckPage = lazy(() => import('@/pages/redirects/IMEICheckPage'));
const IMEICheckerPage = lazy(() => import('@/pages/redirects/IMEICheckerPage'));
const BulkPage = lazy(() => import('@/pages/redirects/BulkPage'));
const VINPage = lazy(() => import('@/pages/redirects/VINPage'));
const StolenPropertyLookupPage = lazy(() => import('@/pages/redirects/StolenPropertyLookupPage'));
const IMEICheckerAppPage = lazy(() => import('@/pages/redirects/IMEICheckerAppPage'));
const MobileVerificationPage = lazy(() => import('@/pages/redirects/MobileVerificationPage'));
const GetAppPage = lazy(() => import('@/pages/redirects/GetAppPage'));
const VerificationAppPage = lazy(() => import('@/pages/redirects/VerificationAppPage'));
const UltimateMarketplaceBuyersGuidePage = lazy(() => import('@/pages/redirects/UltimateMarketplaceBuyersGuidePage'));
const CompleteIMEIGuidePage = lazy(() => import('@/pages/redirects/CompleteIMEIGuidePage'));
const FirearmsMarketplacePage = lazy(() => import('@/pages/redirects/FirearmsMarketplacePage'));
const CompleteVerificationGuidePage = lazy(() => import('@/pages/redirects/CompleteVerificationGuidePage'));

// Actual Install App Page (not redirect)
const InstallAppPage = lazy(() => import('@/pages/InstallAppPage'));

// Research Stolen Items Redirect Pages
const ResearchStolenItemsPage = lazy(() => import('@/pages/redirects/ResearchStolenItemsPage'));
const ResearchStolenPhonePage = lazy(() => import('@/pages/redirects/ResearchStolenPhonePage'));
const ResearchStolenCarPage = lazy(() => import('@/pages/redirects/ResearchStolenCarPage'));
const LookupStolenItemsPage = lazy(() => import('@/pages/redirects/LookupStolenItemsPage'));
const InvestigateStolenPropertyPage = lazy(() => import('@/pages/redirects/InvestigateStolenPropertyPage'));
const CheckStolenBeforeBuyingPage = lazy(() => import('@/pages/redirects/CheckStolenBeforeBuyingPage'));
const StolenItemScannerPage = lazy(() => import('@/pages/redirects/StolenItemScannerPage'));
const SecondhandResearchAppPage = lazy(() => import('@/pages/redirects/SecondhandResearchAppPage'));
const BuyerProtectionResearchPage = lazy(() => import('@/pages/redirects/BuyerProtectionResearchPage'));
const StolenDatabaseSearchPage = lazy(() => import('@/pages/redirects/StolenDatabaseSearchPage'));

// App Pages - Platform
const AppIOSPage = lazy(() => import('@/pages/app/AppIOSPage'));
const AppAndroidPage = lazy(() => import('@/pages/app/AppAndroidPage'));
const AppPWAPage = lazy(() => import('@/pages/app/AppPWAPage'));
const AppDownloadPage = lazy(() => import('@/pages/app/AppDownloadPage'));
const AppInstallGuidePage = lazy(() => import('@/pages/app/AppInstallGuidePage'));

// App Pages - Competitors
const AppVsCheckMendPage = lazy(() => import('@/pages/app/AppVsCheckMendPage'));
const AppVsIMEIInfoPage = lazy(() => import('@/pages/app/AppVsIMEIInfoPage'));
const AppVsCarfaxPage = lazy(() => import('@/pages/app/AppVsCarfaxPage'));
const AppVsSwappaPage = lazy(() => import('@/pages/app/AppVsSwappaPage'));
const AppVsNICBPage = lazy(() => import('@/pages/app/AppVsNICBPage'));
const AppVsStolenRegisterPage = lazy(() => import('@/pages/app/AppVsStolenRegisterPage'));
const AppVsIMEIProPage = lazy(() => import('@/pages/app/AppVsIMEIProPage'));

// App Pages - Item Types
const AppIMEICheckerPage = lazy(() => import('@/pages/app/AppIMEICheckerPage'));
const AppVINCheckerPage = lazy(() => import('@/pages/app/AppVINCheckerPage'));
const AppSerialNumberCheckerPage = lazy(() => import('@/pages/app/AppSerialNumberCheckerPage'));
const AppElectronicsCheckerPage = lazy(() => import('@/pages/app/AppElectronicsCheckerPage'));
const AppFirearmsCheckerPage = lazy(() => import('@/pages/app/AppFirearmsCheckerPage'));

// App Pages - Use Cases
const AppMarketplacePage = lazy(() => import('@/pages/app/AppMarketplacePage'));
const AppPawnShopsPage = lazy(() => import('@/pages/app/AppPawnShopsPage'));
const AppResellersPage = lazy(() => import('@/pages/app/AppResellersPage'));
const AppBuyersPage = lazy(() => import('@/pages/app/AppBuyersPage'));
const AppSellersPage = lazy(() => import('@/pages/app/AppSellersPage'));
const AppLawEnforcementPage = lazy(() => import('@/pages/app/AppLawEnforcementPage'));

// App Pages - Features
const AppBarcodeScannerPage = lazy(() => import('@/pages/app/features/AppBarcodeScannerPage'));
const AppCameraScanPage = lazy(() => import('@/pages/app/features/AppCameraScanPage'));
const AppOfflineModePage = lazy(() => import('@/pages/app/features/AppOfflineModePage'));
const AppPushNotificationsPage = lazy(() => import('@/pages/app/features/AppPushNotificationsPage'));
const AppVerificationHistoryPage = lazy(() => import('@/pages/app/features/AppVerificationHistoryPage'));
const AppInstantScanPage = lazy(() => import('@/pages/app/features/AppInstantScanPage'));

// App Pages - Locations
const AppLosAngelesPage = lazy(() => import('@/pages/app/locations/AppLosAngelesPage'));
const AppNewYorkPage = lazy(() => import('@/pages/app/locations/AppNewYorkPage'));
const AppChicagoPage = lazy(() => import('@/pages/app/locations/AppChicagoPage'));
const AppHoustonPage = lazy(() => import('@/pages/app/locations/AppHoustonPage'));
const AppPhoenixPage = lazy(() => import('@/pages/app/locations/AppPhoenixPage'));
const AppPhiladelphiaPage = lazy(() => import('@/pages/app/locations/AppPhiladelphiaPage'));

// Blog - App Posts
const BestStolenItemCheckerApps2025 = lazy(() => import('@/pages/blog/BestStolenItemCheckerApps2025'));
const WhyCheckMendHasNoApp = lazy(() => import('@/pages/blog/WhyCheckMendHasNoApp'));
const FirearmsAppExclusive = lazy(() => import('@/pages/blog/FirearmsAppExclusive'));
const IMEICheckerAppComparison = lazy(() => import('@/pages/blog/IMEICheckerAppComparison'));
const SafeOrStolenAppGuide = lazy(() => import('@/pages/blog/SafeOrStolenAppGuide'));
const MobileAppVsWebsiteVerification = lazy(() => import('@/pages/blog/MobileAppVsWebsiteVerification'));
const HowToUseIMEICheckerApp = lazy(() => import('@/pages/blog/HowToUseIMEICheckerApp'));

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

// Additional Regional Pages (Northeast)
const ConnecticutVinLookup = lazy(() => import('@/pages/ConnecticutVinLookup'));
const DelawareVinLookup = lazy(() => import('@/pages/DelawareVinLookup'));
const MaineVinLookup = lazy(() => import('@/pages/MaineVinLookup'));
const MarylandVinLookup = lazy(() => import('@/pages/MarylandVinLookup'));
const NewHampshireVinLookup = lazy(() => import('@/pages/NewHampshireVinLookup'));
const NewJerseyVinLookup = lazy(() => import('@/pages/NewJerseyVinLookup'));
const RhodeIslandVinLookup = lazy(() => import('@/pages/RhodeIslandVinLookup'));
const VermontVinLookup = lazy(() => import('@/pages/VermontVinLookup'));

// Additional Regional Pages (Southeast)
const AlabamaVinLookup = lazy(() => import('@/pages/AlabamaVinLookup'));
const ArkansasVinLookup = lazy(() => import('@/pages/ArkansasVinLookup'));
const KentuckyVinLookup = lazy(() => import('@/pages/KentuckyVinLookup'));
const LouisianaVinLookup = lazy(() => import('@/pages/LouisianaVinLookup'));
const MississippiVinLookup = lazy(() => import('@/pages/MississippiVinLookup'));
const SouthCarolinaVinLookup = lazy(() => import('@/pages/SouthCarolinaVinLookup'));
const TennesseeVinLookup = lazy(() => import('@/pages/TennesseeVinLookup'));
const WestVirginiaVinLookup = lazy(() => import('@/pages/WestVirginiaVinLookup'));

// Additional Regional Pages (Midwest)
const IndianaVinLookup = lazy(() => import('@/pages/IndianaVinLookup'));
const IowaVinLookup = lazy(() => import('@/pages/IowaVinLookup'));
const MichiganVinLookup = lazy(() => import('@/pages/MichiganVinLookup'));
const OhioVinLookup = lazy(() => import('@/pages/OhioVinLookup'));

// Additional Regional Pages (Mid-Atlantic)
const NewYorkVinLookup = lazy(() => import('@/pages/NewYorkVinLookup'));
const PennsylvaniaVinLookup = lazy(() => import('@/pages/PennsylvaniaVinLookup'));
const NorthCarolinaVinLookup = lazy(() => import('@/pages/NorthCarolinaVinLookup'));
const GeorgiaVinLookup = lazy(() => import('@/pages/GeorgiaVinLookup'));

// Additional Regional Pages (Midwest Expansion)
const IllinoisVinLookup = lazy(() => import('@/pages/IllinoisVinLookup'));
const KansasVinLookup = lazy(() => import('@/pages/KansasVinLookup'));
const MinnesotaVinLookup = lazy(() => import('@/pages/MinnesotaVinLookup'));
const MissouriVinLookup = lazy(() => import('@/pages/MissouriVinLookup'));
const NebraskaVinLookup = lazy(() => import('@/pages/NebraskaVinLookup'));
const NorthDakotaVinLookup = lazy(() => import('@/pages/NorthDakotaVinLookup'));
const SouthDakotaVinLookup = lazy(() => import('@/pages/SouthDakotaVinLookup'));
const WisconsinVinLookup = lazy(() => import('@/pages/WisconsinVinLookup'));

// Additional Regional Pages (West)
const AlaskaVinLookup = lazy(() => import('@/pages/AlaskaVinLookup'));
const ColoradoVinLookup = lazy(() => import('@/pages/ColoradoVinLookup'));
const HawaiiVinLookup = lazy(() => import('@/pages/HawaiiVinLookup'));
const IdahoVinLookup = lazy(() => import('@/pages/IdahoVinLookup'));
const MontanaVinLookup = lazy(() => import('@/pages/MontanaVinLookup'));
const NevadaVinLookup = lazy(() => import('@/pages/NevadaVinLookup'));
const NewMexicoVinLookup = lazy(() => import('@/pages/NewMexicoVinLookup'));
const OklahomaVinLookup = lazy(() => import('@/pages/OklahomaVinLookup'));
const OregonVinLookup = lazy(() => import('@/pages/OregonVinLookup'));
const UtahVinLookup = lazy(() => import('@/pages/UtahVinLookup'));
const WashingtonVinLookup = lazy(() => import('@/pages/WashingtonVinLookup'));
const WyomingVinLookup = lazy(() => import('@/pages/WyomingVinLookup'));

// International Pages
const UKVehicleCheck = lazy(() => import('@/pages/UKVehicleCheck'));
const CanadaVinCheck = lazy(() => import('@/pages/CanadaVinCheck'));
const AustraliaVinCheck = lazy(() => import('@/pages/AustraliaVinCheck'));

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
const ContentGeneratorPage = lazy(() => import('@/pages/admin/ContentGeneratorPage'));
const AIExecutivePage = lazy(() => import('@/pages/admin/AIExecutivePage'));

// Information Pages
const ServiceLimitations = lazy(() => import('@/pages/ServiceLimitations'));
const ResourceCenterPage = lazy(() => import('@/pages/ResourceCenterPage'));
const DatabasePage = lazy(() => import('@/pages/DatabasePage'));

// User Features
const SearchHistoryPage = lazy(() => import('@/pages/SearchHistoryPage'));
const ReceiptsPage = lazy(() => import('@/pages/ReceiptsPage'));
const ActivityTimelinePage = lazy(() => import('@/pages/ActivityTimelinePage'));
const VerificationResultPage = lazy(() => import('@/pages/VerificationResultPage'));

// Stripe
const CheckoutRedirect = lazy(() => import('@/pages/CheckoutRedirect'));
const SubscriptionSuccessPage = lazy(() => import('@/pages/SubscriptionSuccessPage'));
const SubscriptionCancelPage = lazy(() => import('@/pages/SubscriptionCancelPage'));
const StripeTestPage = lazy(() => import('@/pages/StripeTestPage'));

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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard-old" element={<DashboardPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/subscriptions" element={<SubscriptionsPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/how-it-works-detailed" element={<HowItWorksDetailedPage />} />
        <Route path="/check-if-stolen" element={<CheckIfStolenPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/transparency" element={<TransparencyPage />} />
        <Route path="/service-limitations" element={<ServiceLimitations />} />
        
        {/* Analytics & Reporting */}
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/report-stolen" element={<ReportStolen />} />
        
        {/* Resources & Information */}
        <Route path="/resource-center" element={<ResourceCenterPage />} />
        <Route path="/database" element={<DatabasePage />} />
        
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
        <Route path="/vermont-vin-lookup" element={<VermontVinLookup />} />
        <Route path="/michigan-vin-lookup" element={<MichiganVinLookup />} />
        <Route path="/ohio-vin-lookup" element={<OhioVinLookup />} />
        <Route path="/new-york-vin-lookup" element={<NewYorkVinLookup />} />
        <Route path="/pennsylvania-vin-lookup" element={<PennsylvaniaVinLookup />} />
        <Route path="/north-carolina-vin-lookup" element={<NorthCarolinaVinLookup />} />
        <Route path="/georgia-vin-lookup" element={<GeorgiaVinLookup />} />
        <Route path="/illinois-vin-lookup" element={<IllinoisVinLookup />} />
        <Route path="/kansas-vin-lookup" element={<KansasVinLookup />} />
        <Route path="/minnesota-vin-lookup" element={<MinnesotaVinLookup />} />
        <Route path="/missouri-vin-lookup" element={<MissouriVinLookup />} />
        <Route path="/nebraska-vin-lookup" element={<NebraskaVinLookup />} />
        <Route path="/north-dakota-vin-lookup" element={<NorthDakotaVinLookup />} />
        <Route path="/south-dakota-vin-lookup" element={<SouthDakotaVinLookup />} />
        <Route path="/wisconsin-vin-lookup" element={<WisconsinVinLookup />} />
        <Route path="/alaska-vin-lookup" element={<AlaskaVinLookup />} />
        <Route path="/colorado-vin-lookup" element={<ColoradoVinLookup />} />
        <Route path="/hawaii-vin-lookup" element={<HawaiiVinLookup />} />
        <Route path="/idaho-vin-lookup" element={<IdahoVinLookup />} />
        <Route path="/montana-vin-lookup" element={<MontanaVinLookup />} />
        <Route path="/nevada-vin-lookup" element={<NevadaVinLookup />} />
        <Route path="/new-mexico-vin-lookup" element={<NewMexicoVinLookup />} />
        <Route path="/oklahoma-vin-lookup" element={<OklahomaVinLookup />} />
        <Route path="/oregon-vin-lookup" element={<OregonVinLookup />} />
        <Route path="/utah-vin-lookup" element={<UtahVinLookup />} />
        <Route path="/washington-vin-lookup" element={<WashingtonVinLookup />} />
        <Route path="/wyoming-vin-lookup" element={<WyomingVinLookup />} />
        
        {/* International Pages */}
        <Route path="/uk-vehicle-check" element={<UKVehicleCheck />} />
        <Route path="/canada-vin-check" element={<CanadaVinCheck />} />
        <Route path="/australia-vin-check" element={<AustraliaVinCheck />} />

        {/* Blog */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        
        {/* Blog Posts */}
        <Route path="/blog/how-to-check-if-phone-stolen" element={<HowToCheckIfPhoneStolen />} />
        <Route path="/blog/how-to-install-safeorstolen-app" element={<HowToInstallSafeOrStolenApp />} />
        <Route path="/blog/imei-checker-guide-2025" element={<IMEICheckerGuide2025 />} />
        <Route path="/blog/vin-verification-guide" element={<VINVerificationGuide />} />
        <Route path="/blog/facebook-marketplace-safety" element={<FacebookMarketplaceSafety />} />
        <Route path="/blog/what-to-do-if-bought-stolen-phone" element={<WhatToDoIfBoughtStolenPhone />} />
        <Route path="/blog/best-imei-checker-tools-2025" element={<BestIMEICheckerTools2025 />} />
        <Route path="/blog/best-stolen-item-checker-apps-2025" element={<BestStolenItemCheckerApps2025 />} />
        <Route path="/blog/why-checkmend-has-no-app" element={<WhyCheckMendHasNoApp />} />
        <Route path="/blog/firearms-app-exclusive" element={<FirearmsAppExclusive />} />
        <Route path="/blog/imei-checker-app-comparison" element={<IMEICheckerAppComparison />} />
        <Route path="/blog/safeorstolen-app-guide" element={<SafeOrStolenAppGuide />} />
        <Route path="/blog/mobile-app-vs-website-verification" element={<MobileAppVsWebsiteVerification />} />
        <Route path="/blog/how-to-use-imei-checker-app" element={<HowToUseIMEICheckerApp />} />
        
        {/* App Routes - Platform */}
        <Route path="/app/ios" element={<AppIOSPage />} />
        <Route path="/app/android" element={<AppAndroidPage />} />
        <Route path="/app/pwa" element={<AppPWAPage />} />
        <Route path="/app/download" element={<AppDownloadPage />} />
        <Route path="/app/install-guide" element={<AppInstallGuidePage />} />
        
        {/* App Routes - Competitors */}
        <Route path="/app/vs-checkmend" element={<AppVsCheckMendPage />} />
        <Route path="/app/vs-imeiinfo" element={<AppVsIMEIInfoPage />} />
        <Route path="/app/vs-carfax" element={<AppVsCarfaxPage />} />
        <Route path="/app/vs-swappa" element={<AppVsSwappaPage />} />
        <Route path="/app/vs-nicb" element={<AppVsNICBPage />} />
        <Route path="/app/vs-stolen-register" element={<AppVsStolenRegisterPage />} />
        <Route path="/app/vs-imeipro" element={<AppVsIMEIProPage />} />
        
        {/* App Routes - Item Types */}
        <Route path="/app/imei-checker" element={<AppIMEICheckerPage />} />
        <Route path="/app/vin-checker" element={<AppVINCheckerPage />} />
        <Route path="/app/serial-number-checker" element={<AppSerialNumberCheckerPage />} />
        <Route path="/app/electronics-checker" element={<AppElectronicsCheckerPage />} />
        <Route path="/app/firearms-checker" element={<AppFirearmsCheckerPage />} />
        
        {/* App Routes - Research Stolen Items (SEO Expansion) */}
        <Route path="/app/research-stolen-items" element={<ResearchStolenItemsPage />} />
        <Route path="/app/research-stolen-phone" element={<ResearchStolenPhonePage />} />
        <Route path="/app/research-stolen-car" element={<ResearchStolenCarPage />} />
        <Route path="/app/lookup-stolen-items" element={<LookupStolenItemsPage />} />
        <Route path="/app/investigate-stolen-property" element={<InvestigateStolenPropertyPage />} />
        <Route path="/app/check-stolen-before-buying" element={<CheckStolenBeforeBuyingPage />} />
        <Route path="/app/stolen-item-scanner" element={<StolenItemScannerPage />} />
        <Route path="/app/secondhand-research-app" element={<SecondhandResearchAppPage />} />
        <Route path="/app/buyer-protection-research" element={<BuyerProtectionResearchPage />} />
        <Route path="/app/stolen-database-search" element={<StolenDatabaseSearchPage />} />
        
        {/* App Routes - Use Cases */}
        <Route path="/app/marketplace" element={<AppMarketplacePage />} />
        <Route path="/app/pawn-shops" element={<AppPawnShopsPage />} />
        <Route path="/app/resellers" element={<AppResellersPage />} />
        <Route path="/app/buyers" element={<AppBuyersPage />} />
        <Route path="/app/sellers" element={<AppSellersPage />} />
        <Route path="/app/law-enforcement" element={<AppLawEnforcementPage />} />
        
        {/* App Routes - Features */}
        <Route path="/app/features/barcode-scanner" element={<AppBarcodeScannerPage />} />
        <Route path="/app/features/camera-scan" element={<AppCameraScanPage />} />
        <Route path="/app/features/offline-mode" element={<AppOfflineModePage />} />
        <Route path="/app/features/push-notifications" element={<AppPushNotificationsPage />} />
        <Route path="/app/features/history" element={<AppVerificationHistoryPage />} />
        <Route path="/app/features/instant-scan" element={<AppInstantScanPage />} />
        
        {/* App Routes - Locations */}
        <Route path="/app/los-angeles" element={<AppLosAngelesPage />} />
        <Route path="/app/new-york" element={<AppNewYorkPage />} />
        <Route path="/app/chicago" element={<AppChicagoPage />} />
        <Route path="/app/houston" element={<AppHoustonPage />} />
        <Route path="/app/phoenix" element={<AppPhoenixPage />} />
        <Route path="/app/philadelphia" element={<AppPhiladelphiaPage />} />
        
        {/* Tools */}
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/web-crawler" element={<WebCrawlerPage />} />
        
        {/* Services & Company Pages */}
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/partners" element={<BrandsPage />} />
        <Route path="/press-releases" element={<PressReleasesPage />} />
        <Route path="/press" element={<PressPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/reviews" element={<TestimonialsPage />} />
        <Route path="/security" element={<SecurityPage />} />

        {/* Business */}
        <Route path="/mobile-app" element={<MobileAppPage />} />
        <Route path="/for-brands" element={<ForBrandsPage />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/content-generator" element={<ContentGeneratorPage />} />
        <Route path="/admin/ai-executive" element={<AIExecutivePage />} />

        {/* User Features */}
        <Route path="/search-history" element={<SearchHistoryPage />} />
        <Route path="/receipts" element={<ReceiptsPage />} />
        <Route path="/activity" element={<ActivityTimelinePage />} />
        <Route path="/verification/:id" element={<VerificationResultPage />} />

        {/* Stripe */}
        <Route path="/checkout-redirect" element={<CheckoutRedirect />} />
        <Route path="/subscription-success" element={<SubscriptionSuccessPage />} />
        <Route path="/subscription-cancel" element={<SubscriptionCancelPage />} />
        <Route path="/stripe-test" element={<StripeTestPage />} />

        {/* Legacy Redirects - Now with HTML meta refresh for Google */}
        <Route path="/check-imei" element={<Navigate to="/verify" replace />} />
        <Route path="/check-vin" element={<Navigate to="/verify" replace />} />
        <Route path="/check-serial" element={<Navigate to="/verify" replace />} />
        <Route path="/stolen-item-checker" element={<Navigate to="/verify" replace />} />
        <Route path="/imei-check" element={<IMEICheckPage />} />
        <Route path="/imei-checker" element={<IMEICheckerPage />} />
        <Route path="/vin-verification" element={<Navigate to="/verify" replace />} />
        
        {/* Soft 404 Fixes - Actual pages with meta refresh */}
        <Route path="/bulk" element={<BulkPage />} />
        <Route path="/vin" element={<VINPage />} />
        <Route path="/stolen-property-lookup" element={<StolenPropertyLookupPage />} />

        {/* App Marketing Redirects */}
        <Route path="/imei-checker-app" element={<IMEICheckerAppPage />} />
        <Route path="/mobile-verification" element={<MobileVerificationPage />} />
        <Route path="/get-app" element={<GetAppPage />} />
        <Route path="/install-app" element={<InstallAppPage />} />
        <Route path="/verification-app" element={<VerificationAppPage />} />

        {/* Blog Post Redirects */}
        <Route path="/blog/ultimate-marketplace-buyers-guide" element={<UltimateMarketplaceBuyersGuidePage />} />
        <Route path="/blog/complete-imei-guide-protect-yourself" element={<CompleteIMEIGuidePage />} />
        <Route path="/blog/safeorstolen-firearms-marketplace-verification" element={<FirearmsMarketplacePage />} />
        <Route path="/blog/complete-verification-guide-stolen-goods-check" element={<CompleteVerificationGuidePage />} />

        {/* Redirect Test Page - Development Tool */}
        <Route path="/redirect-test" element={<RedirectTestPage />} />

        {/* 404 - Must be last */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
