import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppLoadingScreen } from '@/components/common/AppLoadingScreen';

// CORE 10 PAGES + STRATEGIC SEO PAGES (45+ Total for Traffic Generation)
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

// Competitor Comparison Pages (SEO Strategy)
const VsCheckMendPage = lazy(() => import('@/pages/ComparisonCheckmend'));
const VsIMEIInfoPage = lazy(() => import('@/pages/ComparisonIMEIInfo'));
const VsSwappaPage = lazy(() => import('@/pages/ComparisonSwappa'));

// Item Landing Pages (High-Value SEO)
const IMEICheckerPage = lazy(() => import('@/pages/IMEICheckerPage'));
const VINCheckerPage = lazy(() => import('@/pages/VINCheckerPage'));
const SerialNumberCheckerPage = lazy(() => import('@/pages/SerialNumberCheckerPage'));
const CheckPhonePage = lazy(() => import('@/pages/CheckPhonePage'));
const CheckCarPage = lazy(() => import('@/pages/CheckCarPage'));
const CheckBikePage = lazy(() => import('@/pages/CheckBikePage'));
const CheckLaptopPage = lazy(() => import('@/pages/CheckLaptopPage'));
const CheckElectronicsPage = lazy(() => import('@/pages/CheckElectronicsPage'));
const FirearmsCheckPage = lazy(() => import('@/pages/FirearmsCheckPage'));
const LicensePlateLookupPage = lazy(() => import('@/pages/LicensePlateLookupPage'));
const FloridaLicensePlateLookupPage = lazy(() => import('@/pages/FloridaLicensePlateLookupPage'));
const AlabamaLicensePlateLookupPage = lazy(() => import('@/pages/AlabamaLicensePlateLookupPage'));
const AlaskaLicensePlateLookupPage = lazy(() => import('@/pages/AlaskaLicensePlateLookupPage'));
const ArizonaLicensePlateLookupPage = lazy(() => import('@/pages/ArizonaLicensePlateLookupPage'));
const ArkansasLicensePlateLookupPage = lazy(() => import('@/pages/ArkansasLicensePlateLookupPage'));
const CaliforniaLicensePlateLookupPage = lazy(() => import('@/pages/CaliforniaLicensePlateLookupPage'));
const ColoradoLicensePlateLookupPage = lazy(() => import('@/pages/ColoradoLicensePlateLookupPage'));
const ConnecticutLicensePlateLookupPage = lazy(() => import('@/pages/ConnecticutLicensePlateLookupPage'));
const DelawareLicensePlateLookupPage = lazy(() => import('@/pages/DelawareLicensePlateLookupPage'));
const GeorgiaLicensePlateLookupPage = lazy(() => import('@/pages/GeorgiaLicensePlateLookupPage'));
const HawaiiLicensePlateLookupPage = lazy(() => import('@/pages/HawaiiLicensePlateLookupPage'));
const IdahoLicensePlateLookupPage = lazy(() => import('@/pages/IdahoLicensePlateLookupPage'));
const IllinoisLicensePlateLookupPage = lazy(() => import('@/pages/IllinoisLicensePlateLookupPage'));
const IndianaLicensePlateLookupPage = lazy(() => import('@/pages/IndianaLicensePlateLookupPage'));
const IowaLicensePlateLookupPage = lazy(() => import('@/pages/IowaLicensePlateLookupPage'));
const KansasLicensePlateLookupPage = lazy(() => import('@/pages/KansasLicensePlateLookupPage'));
const KentuckyLicensePlateLookupPage = lazy(() => import('@/pages/KentuckyLicensePlateLookupPage'));
const LouisianaLicensePlateLookupPage = lazy(() => import('@/pages/LouisianaLicensePlateLookupPage'));
const MaineLicensePlateLookupPage = lazy(() => import('@/pages/MaineLicensePlateLookupPage'));
const MarylandLicensePlateLookupPage = lazy(() => import('@/pages/MarylandLicensePlateLookupPage'));
const MassachusettsLicensePlateLookupPage = lazy(() => import('@/pages/MassachusettsLicensePlateLookupPage'));
const MichiganLicensePlateLookupPage = lazy(() => import('@/pages/MichiganLicensePlateLookupPage'));
const MinnesotaLicensePlateLookupPage = lazy(() => import('@/pages/MinnesotaLicensePlateLookupPage'));
const MississippiLicensePlateLookupPage = lazy(() => import('@/pages/MississippiLicensePlateLookupPage'));
const MissouriLicensePlateLookupPage = lazy(() => import('@/pages/MissouriLicensePlateLookupPage'));
const MontanaLicensePlateLookupPage = lazy(() => import('@/pages/MontanaLicensePlateLookupPage'));
const NebraskaLicensePlateLookupPage = lazy(() => import('@/pages/NebraskaLicensePlateLookupPage'));
const NevadaLicensePlateLookupPage = lazy(() => import('@/pages/NevadaLicensePlateLookupPage'));
const NewHampshireLicensePlateLookupPage = lazy(() => import('@/pages/NewHampshireLicensePlateLookupPage'));
const NewJerseyLicensePlateLookupPage = lazy(() => import('@/pages/NewJerseyLicensePlateLookupPage'));
const NewMexicoLicensePlateLookupPage = lazy(() => import('@/pages/NewMexicoLicensePlateLookupPage'));
const NewYorkLicensePlateLookupPage = lazy(() => import('@/pages/NewYorkLicensePlateLookupPage'));
const NorthCarolinaLicensePlateLookupPage = lazy(() => import('@/pages/NorthCarolinaLicensePlateLookupPage'));
const NorthDakotaLicensePlateLookupPage = lazy(() => import('@/pages/NorthDakotaLicensePlateLookupPage'));
const OhioLicensePlateLookupPage = lazy(() => import('@/pages/OhioLicensePlateLookupPage'));
const OklahomaLicensePlateLookupPage = lazy(() => import('@/pages/OklahomaLicensePlateLookupPage'));
const OregonLicensePlateLookupPage = lazy(() => import('@/pages/OregonLicensePlateLookupPage'));
const PennsylvaniaLicensePlateLookupPage = lazy(() => import('@/pages/PennsylvaniaLicensePlateLookupPage'));
const RhodeIslandLicensePlateLookupPage = lazy(() => import('@/pages/RhodeIslandLicensePlateLookupPage'));
const SouthCarolinaLicensePlateLookupPage = lazy(() => import('@/pages/SouthCarolinaLicensePlateLookupPage'));
const SouthDakotaLicensePlateLookupPage = lazy(() => import('@/pages/SouthDakotaLicensePlateLookupPage'));
const TennesseeLicensePlateLookupPage = lazy(() => import('@/pages/TennesseeLicensePlateLookupPage'));
const TexasLicensePlateLookupPage = lazy(() => import('@/pages/TexasLicensePlateLookupPage'));
const UtahLicensePlateLookupPage = lazy(() => import('@/pages/UtahLicensePlateLookupPage'));
const VermontLicensePlateLookupPage = lazy(() => import('@/pages/VermontLicensePlateLookupPage'));
const VirginiaLicensePlateLookupPage = lazy(() => import('@/pages/VirginiaLicensePlateLookupPage'));
const WashingtonLicensePlateLookupPage = lazy(() => import('@/pages/WashingtonLicensePlateLookupPage'));
const WestVirginiaLicensePlateLookupPage = lazy(() => import('@/pages/WestVirginiaLicensePlateLookupPage'));
const WisconsinLicensePlateLookupPage = lazy(() => import('@/pages/WisconsinLicensePlateLookupPage'));
const WyomingLicensePlateLookupPage = lazy(() => import('@/pages/WyomingLicensePlateLookupPage'));
const TestimonialsPage = lazy(() => import('@/pages/TestimonialsPage'));

// NEW COMPETITOR COMPARISON PAGES
const ComparisonCarfax = lazy(() => import('@/pages/ComparisonCarfax'));
const ComparisonAutocheck = lazy(() => import('@/pages/ComparisonAutocheck'));

// All 50 State VIN Pages (Complete Nationwide Coverage)
const AlabamaVinLookup = lazy(() => import('@/pages/AlabamaVinLookup'));
const AlaskaVinLookup = lazy(() => import('@/pages/AlaskaVinLookup'));
const ArizonaVinLookup = lazy(() => import('@/pages/ArizonaVinLookup'));
const ArkansasVinLookup = lazy(() => import('@/pages/ArkansasVinLookup'));
const CaliforniaVinLookup = lazy(() => import('@/pages/CaliforniaVinLookup'));
const ColoradoVinLookup = lazy(() => import('@/pages/ColoradoVinLookup'));
const ConnecticutVinLookup = lazy(() => import('@/pages/ConnecticutVinLookup'));
const DelawareVinLookup = lazy(() => import('@/pages/DelawareVinLookup'));
const FloridaVinLookup = lazy(() => import('@/pages/FloridaVinLookup'));
const GeorgiaVinLookup = lazy(() => import('@/pages/GeorgiaVinLookup'));
const HawaiiVinLookup = lazy(() => import('@/pages/HawaiiVinLookup'));
const IdahoVinLookup = lazy(() => import('@/pages/IdahoVinLookup'));
const IllinoisVinLookup = lazy(() => import('@/pages/IllinoisVinLookup'));
const IndianaVinLookup = lazy(() => import('@/pages/IndianaVinLookup'));
const IowaVinLookup = lazy(() => import('@/pages/IowaVinLookup'));
const KansasVinLookup = lazy(() => import('@/pages/KansasVinLookup'));
const KentuckyVinLookup = lazy(() => import('@/pages/KentuckyVinLookup'));
const LouisianaVinLookup = lazy(() => import('@/pages/LouisianaVinLookup'));
const MaineVinLookup = lazy(() => import('@/pages/MaineVinLookup'));
const MarylandVinLookup = lazy(() => import('@/pages/MarylandVinLookup'));
const MassachusettsVinLookup = lazy(() => import('@/pages/MassachusettsVinLookup'));
const MichiganVinLookup = lazy(() => import('@/pages/MichiganVinLookup'));
const MinnesotaVinLookup = lazy(() => import('@/pages/MinnesotaVinLookup'));
const MississippiVinLookup = lazy(() => import('@/pages/MississippiVinLookup'));
const MissouriVinLookup = lazy(() => import('@/pages/MissouriVinLookup'));
const MontanaVinLookup = lazy(() => import('@/pages/MontanaVinLookup'));
const NebraskaVinLookup = lazy(() => import('@/pages/NebraskaVinLookup'));
const NevadaVinLookup = lazy(() => import('@/pages/NevadaVinLookup'));
const NewHampshireVinLookup = lazy(() => import('@/pages/NewHampshireVinLookup'));
const NewJerseyVinLookup = lazy(() => import('@/pages/NewJerseyVinLookup'));
const NewMexicoVinLookup = lazy(() => import('@/pages/NewMexicoVinLookup'));
const NewYorkVinLookup = lazy(() => import('@/pages/NewYorkVinLookup'));
const NorthCarolinaVinLookup = lazy(() => import('@/pages/NorthCarolinaVinLookup'));
const NorthDakotaVinLookup = lazy(() => import('@/pages/NorthDakotaVinLookup'));
const OhioVinLookup = lazy(() => import('@/pages/OhioVinLookup'));
const OklahomaVinLookup = lazy(() => import('@/pages/OklahomaVinLookup'));
const OregonVinLookup = lazy(() => import('@/pages/OregonVinLookup'));
const PennsylvaniaVinLookup = lazy(() => import('@/pages/PennsylvaniaVinLookup'));
const RhodeIslandVinLookup = lazy(() => import('@/pages/RhodeIslandVinLookup'));
const SouthCarolinaVinLookup = lazy(() => import('@/pages/SouthCarolinaVinLookup'));
const SouthDakotaVinLookup = lazy(() => import('@/pages/SouthDakotaVinLookup'));
const TennesseeVinLookup = lazy(() => import('@/pages/TennesseeVinLookup'));
const TexasVinLookup = lazy(() => import('@/pages/TexasVinLookup'));
const UtahVinLookup = lazy(() => import('@/pages/UtahVinLookup'));
const VermontVinLookup = lazy(() => import('@/pages/VermontVinLookup'));
const VirginiaVinLookup = lazy(() => import('@/pages/VirginiaVinLookup'));
const WashingtonVinLookup = lazy(() => import('@/pages/WashingtonVinLookup'));
const WestVirginiaVinLookup = lazy(() => import('@/pages/WestVirginiaVinLookup'));
const WisconsinVinLookup = lazy(() => import('@/pages/WisconsinVinLookup'));
const WyomingVinLookup = lazy(() => import('@/pages/WyomingVinLookup'));

// Blog Index & Articles (12 High-Value SEO Content Pages)
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

// TIER 1 Target Keyword Blog Posts
const StolenVerificationAppGuide = lazy(() => import('@/pages/blog/StolenVerificationAppGuide'));
const CheckMendHasNoApp = lazy(() => import('@/pages/blog/CheckMendHasNoApp'));
const LikeCarfaxForPhones = lazy(() => import('@/pages/blog/LikeCarfaxForPhones'));

// Business Pages (5 B2B Landing Pages)
const ForPawnShops = lazy(() => import('@/pages/business/ForPawnShops'));
const ForDealers = lazy(() => import('@/pages/business/ForDealers'));
const ForMarketplaces = lazy(() => import('@/pages/business/ForMarketplaces'));
const ForAuctionHouses = lazy(() => import('@/pages/business/ForAuctionHouses'));
const ForBusinesses = lazy(() => import('@/pages/business/ForBusinesses'));

// Admin Pages
const AutonomousAIDashboard = lazy(() => import('@/pages/admin/AutonomousAIDashboard'));
const GSCMonitoringDashboard = lazy(() => import('@/pages/admin/GSCMonitoringDashboard'));
const GSCConnectPage = lazy(() => import('@/pages/admin/GSCConnectPage'));
const GSCCallbackPage = lazy(() => import('@/pages/admin/GSCCallbackPage'));
const TriggerIndexNowPage = lazy(() => import('@/pages/admin/TriggerIndexNow'));
const BatchIndexPage = lazy(() => import('@/pages/admin/BatchIndexPage'));

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

        {/* STRATEGIC SEO PAGES - Item Landing Pages with 1500+ word content */}
        <Route path="/imei-checker" element={<IMEICheckerPage />} />
        <Route path="/vin-checker" element={<VINCheckerPage />} />
        <Route path="/serial-number-checker" element={<SerialNumberCheckerPage />} />
        <Route path="/check-phone" element={<CheckPhonePage />} />
        <Route path="/check-car" element={<CheckCarPage />} />
        <Route path="/check-bike" element={<CheckBikePage />} />
        <Route path="/check-laptop" element={<CheckLaptopPage />} />
        <Route path="/check-electronics" element={<CheckElectronicsPage />} />
        <Route path="/firearms-check" element={<FirearmsCheckPage />} />
        <Route path="/license-plate-lookup" element={<LicensePlateLookupPage />} />
        <Route path="/florida-license-plate-lookup" element={<FloridaLicensePlateLookupPage />} />
        <Route path="/alabama-license-plate-lookup" element={<AlabamaLicensePlateLookupPage />} />
        <Route path="/alaska-license-plate-lookup" element={<AlaskaLicensePlateLookupPage />} />
        <Route path="/arizona-license-plate-lookup" element={<ArizonaLicensePlateLookupPage />} />
        <Route path="/arkansas-license-plate-lookup" element={<ArkansasLicensePlateLookupPage />} />
        <Route path="/california-license-plate-lookup" element={<CaliforniaLicensePlateLookupPage />} />
        <Route path="/colorado-license-plate-lookup" element={<ColoradoLicensePlateLookupPage />} />
        <Route path="/connecticut-license-plate-lookup" element={<ConnecticutLicensePlateLookupPage />} />
        <Route path="/delaware-license-plate-lookup" element={<DelawareLicensePlateLookupPage />} />
        <Route path="/georgia-license-plate-lookup" element={<GeorgiaLicensePlateLookupPage />} />
        <Route path="/hawaii-license-plate-lookup" element={<HawaiiLicensePlateLookupPage />} />
        <Route path="/idaho-license-plate-lookup" element={<IdahoLicensePlateLookupPage />} />
        <Route path="/illinois-license-plate-lookup" element={<IllinoisLicensePlateLookupPage />} />
        <Route path="/indiana-license-plate-lookup" element={<IndianaLicensePlateLookupPage />} />
        <Route path="/iowa-license-plate-lookup" element={<IowaLicensePlateLookupPage />} />
        <Route path="/kansas-license-plate-lookup" element={<KansasLicensePlateLookupPage />} />
        <Route path="/kentucky-license-plate-lookup" element={<KentuckyLicensePlateLookupPage />} />
        <Route path="/louisiana-license-plate-lookup" element={<LouisianaLicensePlateLookupPage />} />
        <Route path="/maine-license-plate-lookup" element={<MaineLicensePlateLookupPage />} />
        <Route path="/maryland-license-plate-lookup" element={<MarylandLicensePlateLookupPage />} />
        <Route path="/massachusetts-license-plate-lookup" element={<MassachusettsLicensePlateLookupPage />} />
        <Route path="/michigan-license-plate-lookup" element={<MichiganLicensePlateLookupPage />} />
        <Route path="/minnesota-license-plate-lookup" element={<MinnesotaLicensePlateLookupPage />} />
        <Route path="/mississippi-license-plate-lookup" element={<MississippiLicensePlateLookupPage />} />
        <Route path="/missouri-license-plate-lookup" element={<MissouriLicensePlateLookupPage />} />
        <Route path="/montana-license-plate-lookup" element={<MontanaLicensePlateLookupPage />} />
        <Route path="/nebraska-license-plate-lookup" element={<NebraskaLicensePlateLookupPage />} />
        <Route path="/nevada-license-plate-lookup" element={<NevadaLicensePlateLookupPage />} />
        <Route path="/new-hampshire-license-plate-lookup" element={<NewHampshireLicensePlateLookupPage />} />
        <Route path="/new-jersey-license-plate-lookup" element={<NewJerseyLicensePlateLookupPage />} />
        <Route path="/new-mexico-license-plate-lookup" element={<NewMexicoLicensePlateLookupPage />} />
        <Route path="/new-york-license-plate-lookup" element={<NewYorkLicensePlateLookupPage />} />
        <Route path="/north-carolina-license-plate-lookup" element={<NorthCarolinaLicensePlateLookupPage />} />
        <Route path="/north-dakota-license-plate-lookup" element={<NorthDakotaLicensePlateLookupPage />} />
        <Route path="/ohio-license-plate-lookup" element={<OhioLicensePlateLookupPage />} />
        <Route path="/oklahoma-license-plate-lookup" element={<OklahomaLicensePlateLookupPage />} />
        <Route path="/oregon-license-plate-lookup" element={<OregonLicensePlateLookupPage />} />
        <Route path="/pennsylvania-license-plate-lookup" element={<PennsylvaniaLicensePlateLookupPage />} />
        <Route path="/rhode-island-license-plate-lookup" element={<RhodeIslandLicensePlateLookupPage />} />
        <Route path="/south-carolina-license-plate-lookup" element={<SouthCarolinaLicensePlateLookupPage />} />
        <Route path="/south-dakota-license-plate-lookup" element={<SouthDakotaLicensePlateLookupPage />} />
        <Route path="/tennessee-license-plate-lookup" element={<TennesseeLicensePlateLookupPage />} />
        <Route path="/texas-license-plate-lookup" element={<TexasLicensePlateLookupPage />} />
        <Route path="/utah-license-plate-lookup" element={<UtahLicensePlateLookupPage />} />
        <Route path="/vermont-license-plate-lookup" element={<VermontLicensePlateLookupPage />} />
        <Route path="/virginia-license-plate-lookup" element={<VirginiaLicensePlateLookupPage />} />
        <Route path="/washington-license-plate-lookup" element={<WashingtonLicensePlateLookupPage />} />
        <Route path="/west-virginia-license-plate-lookup" element={<WestVirginiaLicensePlateLookupPage />} />
        <Route path="/wisconsin-license-plate-lookup" element={<WisconsinLicensePlateLookupPage />} />
        <Route path="/wyoming-license-plate-lookup" element={<WyomingLicensePlateLookupPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        
        {/* NEW Competitor Comparison Pages */}
        <Route path="/vs-carfax" element={<ComparisonCarfax />} />
        <Route path="/vs-autocheck" element={<ComparisonAutocheck />} />
        
        {/* Legacy URL redirects - Google has indexed these */}
        <Route path="/for-consumers" element={<Navigate to="/about" replace />} />
        <Route path="/case-studies" element={<Navigate to="/testimonials" replace />} />
        <Route path="/auction-houses" element={<Navigate to="/for-auction-houses" replace />} />
        <Route path="/accuracy" element={<Navigate to="/about" replace />} />
        <Route path="/our-story" element={<Navigate to="/about" replace />} />
        <Route path="/contact" element={<Navigate to="/about" replace />} />
        <Route path="/enterprise-demo" element={<Navigate to="/pricing" replace />} />
        <Route path="/disclaimer" element={<Navigate to="/terms" replace />} />
        <Route path="/terms-of-service" element={<Navigate to="/terms" replace />} />
        <Route path="/fastercapital/tech-cofounder" element={<Navigate to="/about" replace />} />
        <Route path="/stolen-property-lookup" element={<Navigate to="/verify" replace />} />
        {/* /service-limitations removed - server-side 301 redirect only (public/_redirects line 230) */}
        
        {/* All 50 State VIN Pages - Complete Nationwide Local SEO Coverage */}
        <Route path="/alabama-vin-lookup" element={<AlabamaVinLookup />} />
        <Route path="/alaska-vin-lookup" element={<AlaskaVinLookup />} />
        <Route path="/arizona-vin-lookup" element={<ArizonaVinLookup />} />
        <Route path="/arkansas-vin-lookup" element={<ArkansasVinLookup />} />
        <Route path="/california-vin-lookup" element={<CaliforniaVinLookup />} />
        <Route path="/colorado-vin-lookup" element={<ColoradoVinLookup />} />
        <Route path="/connecticut-vin-lookup" element={<ConnecticutVinLookup />} />
        <Route path="/delaware-vin-lookup" element={<DelawareVinLookup />} />
        <Route path="/florida-vin-lookup" element={<FloridaVinLookup />} />
        <Route path="/georgia-vin-lookup" element={<GeorgiaVinLookup />} />
        <Route path="/hawaii-vin-lookup" element={<HawaiiVinLookup />} />
        <Route path="/idaho-vin-lookup" element={<IdahoVinLookup />} />
        <Route path="/illinois-vin-lookup" element={<IllinoisVinLookup />} />
        <Route path="/indiana-vin-lookup" element={<IndianaVinLookup />} />
        <Route path="/iowa-vin-lookup" element={<IowaVinLookup />} />
        <Route path="/kansas-vin-lookup" element={<KansasVinLookup />} />
        <Route path="/kentucky-vin-lookup" element={<KentuckyVinLookup />} />
        <Route path="/louisiana-vin-lookup" element={<LouisianaVinLookup />} />
        <Route path="/maine-vin-lookup" element={<MaineVinLookup />} />
        <Route path="/maryland-vin-lookup" element={<MarylandVinLookup />} />
        <Route path="/massachusetts-vin-lookup" element={<MassachusettsVinLookup />} />
        <Route path="/michigan-vin-lookup" element={<MichiganVinLookup />} />
        <Route path="/minnesota-vin-lookup" element={<MinnesotaVinLookup />} />
        <Route path="/mississippi-vin-lookup" element={<MississippiVinLookup />} />
        <Route path="/missouri-vin-lookup" element={<MissouriVinLookup />} />
        <Route path="/montana-vin-lookup" element={<MontanaVinLookup />} />
        <Route path="/nebraska-vin-lookup" element={<NebraskaVinLookup />} />
        <Route path="/nevada-vin-lookup" element={<NevadaVinLookup />} />
        <Route path="/new-hampshire-vin-lookup" element={<NewHampshireVinLookup />} />
        <Route path="/new-jersey-vin-lookup" element={<NewJerseyVinLookup />} />
        <Route path="/new-mexico-vin-lookup" element={<NewMexicoVinLookup />} />
        <Route path="/new-york-vin-lookup" element={<NewYorkVinLookup />} />
        <Route path="/north-carolina-vin-lookup" element={<NorthCarolinaVinLookup />} />
        <Route path="/north-dakota-vin-lookup" element={<NorthDakotaVinLookup />} />
        <Route path="/ohio-vin-lookup" element={<OhioVinLookup />} />
        <Route path="/oklahoma-vin-lookup" element={<OklahomaVinLookup />} />
        <Route path="/oregon-vin-lookup" element={<OregonVinLookup />} />
        <Route path="/pennsylvania-vin-lookup" element={<PennsylvaniaVinLookup />} />
        <Route path="/rhode-island-vin-lookup" element={<RhodeIslandVinLookup />} />
        <Route path="/south-carolina-vin-lookup" element={<SouthCarolinaVinLookup />} />
        <Route path="/south-dakota-vin-lookup" element={<SouthDakotaVinLookup />} />
        <Route path="/tennessee-vin-lookup" element={<TennesseeVinLookup />} />
        <Route path="/texas-vin-lookup" element={<TexasVinLookup />} />
        <Route path="/utah-vin-lookup" element={<UtahVinLookup />} />
        <Route path="/vermont-vin-lookup" element={<VermontVinLookup />} />
        <Route path="/virginia-vin-lookup" element={<VirginiaVinLookup />} />
        <Route path="/washington-vin-lookup" element={<WashingtonVinLookup />} />
        <Route path="/west-virginia-vin-lookup" element={<WestVirginiaVinLookup />} />
        <Route path="/wisconsin-vin-lookup" element={<WisconsinVinLookup />} />
        <Route path="/wyoming-vin-lookup" element={<WyomingVinLookup />} />
        
        {/* Item-specific check redirects → main pages */}
        <Route path="/imei-check" element={<Navigate to="/imei-checker" replace />} />
        <Route path="/imei" element={<Navigate to="/imei-checker" replace />} />
        <Route path="/vin-check" element={<Navigate to="/vin-checker" replace />} />
        <Route path="/check-firearm" element={<Navigate to="/firearms-check" replace />} />
        <Route path="/firearm-serial-check" element={<Navigate to="/firearms-check" replace />} />
        <Route path="/check-gaming-console" element={<Navigate to="/check-electronics" replace />} />
        <Route path="/check-android-phone" element={<Navigate to="/check-phone" replace />} />
        <Route path="/license-plates-lookup" element={<Navigate to="/license-plate-lookup" replace />} />
        
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
        <Route path="/avoid-stolen-goods" element={<Navigate to="/verify" replace />} />
        <Route path="/avoid-buying-stolen-goods" element={<Navigate to="/verify" replace />} />
        <Route path="/stolen-items-database" element={<Navigate to="/verify" replace />} />
        <Route path="/how-to-check-if-anything-is-stolen-before-you-buy" element={<Navigate to="/verify" replace />} />
        
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
        <Route path="/comparison-checkmend" element={<Navigate to="/vs-checkmend" replace />} />
        <Route path="/competitor-alternatives" element={<Navigate to="/pricing" replace />} />
        
        {/* Marketplace pages → /about */}
        <Route path="/marketplace-safety" element={<Navigate to="/about" replace />} />
        <Route path="/guides/*" element={<Navigate to="/about" replace />} />
        <Route path="/verify/ebay" element={<Navigate to="/verify" replace />} />
        <Route path="/verify/facebook-marketplace" element={<Navigate to="/verify" replace />} />
        <Route path="/verify/offerup" element={<Navigate to="/verify" replace />} />
        <Route path="/verify/auctions" element={<Navigate to="/verify" replace />} />
        
        {/* City pages → /verify */}
        <Route path="/city/*" element={<Navigate to="/verify" replace />} />
        
        {/* App subpages → /app */}
        <Route path="/app/install-guide" element={<Navigate to="/app" replace />} />
        <Route path="/app/phoenix" element={<Navigate to="/app" replace />} />
        <Route path="/app/houston" element={<Navigate to="/app" replace />} />
        <Route path="/app/miami" element={<Navigate to="/app" replace />} />
        <Route path="/app/philadelphia" element={<Navigate to="/app" replace />} />
        <Route path="/app/pwa" element={<Navigate to="/app" replace />} />
        <Route path="/app/electronics-checker" element={<Navigate to="/app" replace />} />
        <Route path="/app/firearms-checker" element={<Navigate to="/app" replace />} />
        <Route path="/app/law-enforcement" element={<Navigate to="/app" replace />} />
        <Route path="/app/sellers" element={<Navigate to="/app" replace />} />
        <Route path="/app/features/*" element={<Navigate to="/app" replace />} />
        <Route path="/app/vs-carfax" element={<Navigate to="/vs-carfax" replace />} />
        <Route path="/app/vs-imeiinfo" element={<Navigate to="/vs-imeiinfo" replace />} />
        <Route path="/app/vs-imeipro" element={<Navigate to="/vs-imeiinfo" replace />} />
        <Route path="/app/vs-stolen-register" element={<Navigate to="/pricing" replace />} />
        
        {/* International VIN checks → /verify */}
        <Route path="/australia-vin-check" element={<Navigate to="/verify" replace />} />
        <Route path="/canada-vin-check" element={<Navigate to="/verify" replace />} />
        <Route path="/uk-vehicle-check" element={<Navigate to="/verify" replace />} />
        
        {/* Blog posts that don't exist → blog index */}
        <Route path="/blog/industry-insights-2024" element={<Navigate to="/blog" replace />} />
        <Route path="/blog/what-to-do-if-you-bought-stolen" element={<Navigate to="/blog" replace />} />
        <Route path="/blog/ai-verification-technology" element={<Navigate to="/blog" replace />} />
        <Route path="/blog/verification-data-privacy" element={<Navigate to="/blog" replace />} />
        <Route path="/blog/serial-numbers-stolen-goods-101" element={<Navigate to="/blog" replace />} />
        <Route path="/verify/pawnshops" element={<Navigate to="/verify" replace />} />
        
        {/* Educational/business pages → /about */}
        <Route path="/buyer-guide" element={<Navigate to="/about" replace />} />
        <Route path="/comprehensive-guide" element={<Navigate to="/about" replace />} />
        <Route path="/resellers" element={<Navigate to="/about" replace />} />
        <Route path="/pawn-shops" element={<Navigate to="/about" replace />} />
        <Route path="/for-phone-repair-shops" element={<Navigate to="/about" replace />} />
        <Route path="/features" element={<Navigate to="/about" replace />} />
        <Route path="/trust-verification" element={<Navigate to="/about" replace />} />
        <Route path="/data-sources" element={<Navigate to="/about" replace />} />
        
        {/* Blog Index & Articles - 12 High-Value SEO Content Pages */}
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
        
        {/* TIER 1 Target Keyword Blog Posts - High Priority SEO */}
        <Route path="/blog/stolen-verification-app-guide" element={<StolenVerificationAppGuide />} />
        <Route path="/blog/checkmend-has-no-app" element={<CheckMendHasNoApp />} />
        <Route path="/blog/like-carfax-for-phones" element={<LikeCarfaxForPhones />} />
        
        {/* Business Pages - 5 B2B Landing Pages */}
        <Route path="/for-pawn-shops" element={<ForPawnShops />} />
        <Route path="/for-dealers" element={<ForDealers />} />
        <Route path="/for-marketplaces" element={<ForMarketplaces />} />
        <Route path="/for-auction-houses" element={<ForAuctionHouses />} />
        <Route path="/for-businesses" element={<ForBusinesses />} />
        
        
        {/* License plate lookups → /verify (wildcard catch-all only) */}
        <Route path="/arizona-license-plate-lookup" element={<Navigate to="/verify?type=license_plate" replace />} />
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
        
        {/* Contact/support → /about */}
        <Route path="/contact" element={<Navigate to="/about" replace />} />
        <Route path="/support" element={<Navigate to="/about" replace />} />
        <Route path="/help" element={<Navigate to="/faq" replace />} />
        
        {/* Admin Routes */}
        <Route path="/admin/autonomous-ai" element={<AutonomousAIDashboard />} />
        <Route path="/admin/gsc-status" element={<GSCMonitoringDashboard />} />
        <Route path="/admin/gsc-connect" element={<GSCConnectPage />} />
        <Route path="/admin/gsc-callback" element={<GSCCallbackPage />} />
        <Route path="/admin/indexnow" element={<TriggerIndexNowPage />} />
        <Route path="/admin/batch-index" element={<BatchIndexPage />} />
        
        {/* 404 for everything else */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
