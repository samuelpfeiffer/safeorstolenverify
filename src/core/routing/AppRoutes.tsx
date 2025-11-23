import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppLoadingScreen } from '@/components/common/AppLoadingScreen';

// Core Pages
const Index = lazy(() => import('@/pages/Index'));
const AuthPage = lazy(() => import('@/pages/AuthPage'));
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
const DisclaimerPage = lazy(() => import('@/pages/DisclaimerPage'));
const TransparencyPage = lazy(() => import('@/pages/TransparencyPage'));
const RedirectTestPage = lazy(() => import('@/pages/RedirectTestPage'));

// Analytics & Reporting
const Analytics = lazy(() => import('@/pages/Analytics'));
const ReportStolen = lazy(() => import('@/pages/ReportStolen'));
const TrafficStrategyPage = lazy(() => import('@/pages/TrafficStrategyPage'));

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
const AvoidingStolenGoodsCompleteGuide = lazy(() => import('@/pages/blog/AvoidingStolenGoodsCompleteGuide'));
const IMEICheckEverything = lazy(() => import('@/pages/blog/IMEICheckEverything'));
const CarfaxVsFreeVINAlternatives = lazy(() => import('@/pages/blog/CarfaxVsFreeVINAlternatives'));

// Tools
const ToolsPage = lazy(() => import('@/pages/ToolsPage'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
const BrandsPage = lazy(() => import('@/pages/BrandsPage'));
const PressReleasesPage = lazy(() => import('@/pages/PressReleasesPage'));
const PressPage = lazy(() => import('@/pages/PressPage'));
const TestimonialsPage = lazy(() => import('@/pages/TestimonialsPage'));
const SecurityPage = lazy(() => import('@/pages/SecurityPage'));
const WebCrawlerPage = lazy(() => import('@/pages/WebCrawlerPage'));

// Dedicated SEO Content Pages (NEW - Emergency Content Injection)
const IMEICheckerContentPage = lazy(() => import('@/pages/IMEICheckerContentPage'));
const VINCheckerContentPage = lazy(() => import('@/pages/VINCheckerContentPage'));
const SerialNumberCheckerPage = lazy(() => import('@/pages/SerialNumberCheckerPage'));
const MarketplaceSafetyPage = lazy(() => import('@/pages/MarketplaceSafetyPage'));

// SEO Expansion Generic Template
import type { SEOUrl } from '@/config/seo-expansion-urls';
import { ITEM_VERIFICATION_PAGES, LONG_TAIL_PAGES, USE_CASE_PAGES } from '@/config/seo-expansion-urls';
const SEOExpansionItemPage = lazy(() => import('@/pages/templates/SEOExpansionItemPage'));

// Targeted SEO Content Pages (Query-Specific)
const PartialSerialSearchPage = lazy(() => import('@/pages/seo/PartialSerialSearchPage'));
const StolenPropertySearchPage = lazy(() => import('@/pages/seo/StolenPropertySearchPage'));

// Business
const MobileAppPage = lazy(() => import('@/pages/MobileAppPage'));
const ForBrandsPage = lazy(() => import('@/pages/ForBrandsPage'));
const FasterCapitalRaiseCapitalPage = lazy(() => import('@/pages/fastercapital/RaiseCapitalPage'));
const FasterCapitalTechCofounderPage = lazy(() => import('@/pages/fastercapital/TechCofounderPage'));
const SEOHealthPage = lazy(() => import('@/pages/SEOHealthPage'));
const DataPartnershipsPage = lazy(() => import('@/pages/DataPartnershipsPage'));

// Redirect Pages (with HTML meta refresh for crawlers)
const IMEICheckPage = lazy(() => import('@/pages/redirects/IMEICheckPage'));
const BulkPage = lazy(() => import('@/pages/redirects/BulkPage'));
const VINPage = lazy(() => import('@/pages/redirects/VINPage'));
const StolenPropertyLookupPage = lazy(() => import('@/pages/redirects/StolenPropertyLookupPage'));
const StolenItemCheckerPage = lazy(() => import('@/pages/redirects/StolenItemCheckerPage'));
const VINVerificationPageRedirect = lazy(() => import('@/pages/redirects/VINVerificationPage'));
const VerificationHubPageRedirect = lazy(() => import('@/pages/redirects/VerificationHubPage'));
const VerifyNotStolenPage = lazy(() => import('@/pages/redirects/VerifyNotStolenPage'));
const IMEICheckerAppPage = lazy(() => import('@/pages/redirects/IMEICheckerAppPage'));
const MobileVerificationPage = lazy(() => import('@/pages/redirects/MobileVerificationPage'));
const GetAppPage = lazy(() => import('@/pages/redirects/GetAppPage'));
const VerificationAppPage = lazy(() => import('@/pages/redirects/VerificationAppPage'));
const UltimateMarketplaceBuyersGuidePage = lazy(() => import('@/pages/redirects/UltimateMarketplaceBuyersGuidePage'));
const CompleteIMEIGuidePage = lazy(() => import('@/pages/redirects/CompleteIMEIGuidePage'));
const FirearmsMarketplacePage = lazy(() => import('@/pages/redirects/FirearmsMarketplacePage'));
const CompleteVerificationGuidePage = lazy(() => import('@/pages/redirects/CompleteVerificationGuidePage'));
const DataSourceCredibilityPage = lazy(() => import('@/pages/redirects/DataSourceCredibilityPage'));
const ProtectYourselfBuyingUsedElectronics = lazy(() => import('@/pages/blog/ProtectYourselfBuyingUsedElectronics'));
const CityVerificationPage = lazy(() => import('@/pages/templates/CityVerificationPage'));

// Timestamped Blog Post Redirects (404 fixes)
const RedFlagsBuyingUsedElectronicsPage = lazy(() => import('@/pages/redirects/RedFlagsBuyingUsedElectronicsPage'));
const CompleteGuideVerifyIMEIPage = lazy(() => import('@/pages/redirects/CompleteGuideVerifyIMEIPage'));
const VINVerificationCompleteGuidePage = lazy(() => import('@/pages/redirects/VINVerificationCompleteGuidePage'));

// Actual Install & Download App Pages (not redirects)
const InstallAppPage = lazy(() => import('@/pages/InstallAppPage'));
const DownloadAppPage = lazy(() => import('@/pages/DownloadAppPage'));

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

// Marketplace & Competitor Redirect Pages
const CarfaxAlternativePage = lazy(() => import('@/pages/CarfaxAlternativePage'));
const EbayVerificationPage = lazy(() => import('@/pages/redirects/EbayVerificationPage'));
const FacebookMarketplaceCheckerPage = lazy(() => import('@/pages/redirects/FacebookMarketplaceCheckerPage'));
const OfferUpSafetyPage = lazy(() => import('@/pages/redirects/OfferUpSafetyPage'));
const AuctionVerificationPage = lazy(() => import('@/pages/redirects/AuctionVerificationPage'));
const PawnshopVerificationPage = lazy(() => import('@/pages/redirects/PawnshopVerificationPage'));

// Marketplace Verify Pages
const EbayVerifyPage = lazy(() => import('@/pages/verify/EbayVerifyPage'));
const FacebookMarketplaceVerifyPage = lazy(() => import('@/pages/verify/FacebookMarketplaceVerifyPage'));
const OfferUpVerifyPage = lazy(() => import('@/pages/verify/OfferUpVerifyPage'));
const AuctionsVerifyPage = lazy(() => import('@/pages/verify/AuctionsVerifyPage'));
const PawnshopsVerifyPage = lazy(() => import('@/pages/verify/PawnshopsVerifyPage'));

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
const BusinessGuidePreventingStolenGoods = lazy(() => import('@/pages/blog/BusinessGuidePreventingStolenGoods'));
const CompleteVerificationGuidePost = lazy(() => import('@/pages/blog/CompleteVerificationGuidePost'));
const DataSourceCredibilityPost = lazy(() => import('@/pages/blog/DataSourceCredibilityPost'));
const DeviceSafetyGuidePost = lazy(() => import('@/pages/blog/DeviceSafetyGuidePost'));
const EnterpriseSecurityPost = lazy(() => import('@/pages/blog/EnterpriseSecurityPost'));
const MobileAppFeaturesPost = lazy(() => import('@/pages/blog/MobileAppFeaturesPost'));
const PhoneVerificationGuide = lazy(() => import('@/pages/blog/PhoneVerificationGuide'));
const RealUserStoriesPost = lazy(() => import('@/pages/blog/RealUserStoriesPost'));
const ScammerTacticsExposed = lazy(() => import('@/pages/blog/ScammerTacticsExposed'));
const TheUltimateMarketplaceBuyersGuide = lazy(() => import('@/pages/blog/TheUltimateMarketplaceBuyersGuide'));
const VerificationMethodologyPost = lazy(() => import('@/pages/blog/VerificationMethodologyPost'));
const IndustryInsights2024 = lazy(() => import('@/pages/blog/IndustryInsights2024'));
const VerificationDataPrivacy = lazy(() => import('@/pages/blog/VerificationDataPrivacy'));
const SerialNumbersStolenGoods101 = lazy(() => import('@/pages/blog/SerialNumbersStolenGoods101'));
const AIVerificationTechnology = lazy(() => import('@/pages/blog/AIVerificationTechnology'));
const IMEICheckerPage = lazy(() => import('@/pages/IMEICheckerPage'));
const VINCheckerPage = lazy(() => import('@/pages/VINCheckerPage'));

// Comparison Pages
const VSCarfaxPage = lazy(() => import('@/pages/vs/VSCarfaxPage'));
const VSCheckMendPage = lazy(() => import('@/pages/vs/VSCheckMendPage'));
const VSIMEIInfoPage = lazy(() => import('@/pages/vs/VSIMEIInfoPage'));
const VSStolenRegisterPage = lazy(() => import('@/pages/vs/VSStolenRegisterPage'));
const VSNICBPage = lazy(() => import('@/pages/vs/VSNICBPage'));
const VSAutoCheckPage = lazy(() => import('@/pages/vs/VSAutoCheckPage'));

// Marketplace Safety Guides
const EbayBuyerProtection = lazy(() => import('@/pages/guides/EbayBuyerProtection'));
const FacebookMarketplaceSafetyGuide = lazy(() => import('@/pages/guides/FacebookMarketplaceSafety'));
const OfferUpVerification = lazy(() => import('@/pages/guides/OfferUpVerification'));
const AuctionHouseSafety = lazy(() => import('@/pages/guides/AuctionHouseSafety'));
const PawnshopBuyingTips = lazy(() => import('@/pages/guides/PawnshopBuyingTips'));

// Statistics & Data Pages
const StolenGoodsStatistics2025 = lazy(() => import('@/pages/StolenGoodsStatistics2025'));
const SafeOrStolenAppGuide = lazy(() => import('@/pages/blog/SafeOrStolenAppGuide'));
const MobileAppVsWebsiteVerification = lazy(() => import('@/pages/blog/MobileAppVsWebsiteVerification'));
const HowToUseIMEICheckerApp = lazy(() => import('@/pages/blog/HowToUseIMEICheckerApp'));

// Item Categories
const FirearmsCheckPage = lazy(() => import('@/pages/FirearmsCheckPage'));

// Regional Pages
const ArizonaVinLookup = lazy(() => import('@/pages/ArizonaVinLookup'));
const ArizonaLicensePlateLookup = lazy(() => import('@/pages/ArizonaLicensePlateLookup'));
const FloridaLicensePlateLookup = lazy(() => import('@/pages/FloridaLicensePlateLookup'));
const TexasLicensePlateLookup = lazy(() => import('@/pages/TexasLicensePlateLookup'));
const CaliforniaLicensePlateLookup = lazy(() => import('@/pages/CaliforniaLicensePlateLookup'));
const NewYorkLicensePlateLookup = lazy(() => import('@/pages/NewYorkLicensePlateLookup'));
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

// State Verification Pages - All 50 States
const AlabamaVerificationPage = lazy(() => import('@/pages/state-pages/AlabamaVerificationPage'));
const AlaskaVerificationPage = lazy(() => import('@/pages/state-pages/AlaskaVerificationPage'));
const ArizonaVerificationPage = lazy(() => import('@/pages/state-pages/ArizonaVerificationPage'));
const ArkansasVerificationPage = lazy(() => import('@/pages/state-pages/ArkansasVerificationPage'));
const CaliforniaVerificationPage = lazy(() => import('@/pages/state-pages/CaliforniaVerificationPage'));
const ColoradoVerificationPage = lazy(() => import('@/pages/state-pages/ColoradoVerificationPage'));
const ConnecticutVerificationPage = lazy(() => import('@/pages/state-pages/ConnecticutVerificationPage'));
const DelawareVerificationPage = lazy(() => import('@/pages/state-pages/DelawareVerificationPage'));
const FloridaVerificationPage = lazy(() => import('@/pages/state-pages/FloridaVerificationPage'));
const GeorgiaVerificationPage = lazy(() => import('@/pages/state-pages/GeorgiaVerificationPage'));
const HawaiiVerificationPage = lazy(() => import('@/pages/state-pages/HawaiiVerificationPage'));
const IdahoVerificationPage = lazy(() => import('@/pages/state-pages/IdahoVerificationPage'));
const IllinoisVerificationPage = lazy(() => import('@/pages/state-pages/IllinoisVerificationPage'));
const IndianaVerificationPage = lazy(() => import('@/pages/state-pages/IndianaVerificationPage'));
const IowaVerificationPage = lazy(() => import('@/pages/state-pages/IowaVerificationPage'));
const KansasVerificationPage = lazy(() => import('@/pages/state-pages/KansasVerificationPage'));
const KentuckyVerificationPage = lazy(() => import('@/pages/state-pages/KentuckyVerificationPage'));
const LouisianaVerificationPage = lazy(() => import('@/pages/state-pages/LouisianaVerificationPage'));
const MaineVerificationPage = lazy(() => import('@/pages/state-pages/MaineVerificationPage'));
const MarylandVerificationPage = lazy(() => import('@/pages/state-pages/MarylandVerificationPage'));
const MassachusettsVerificationPage = lazy(() => import('@/pages/state-pages/MassachusettsVerificationPage'));
const MichiganVerificationPage = lazy(() => import('@/pages/state-pages/MichiganVerificationPage'));
const MinnesotaVerificationPage = lazy(() => import('@/pages/state-pages/MinnesotaVerificationPage'));
const MississippiVerificationPage = lazy(() => import('@/pages/state-pages/MississippiVerificationPage'));
const MissouriVerificationPage = lazy(() => import('@/pages/state-pages/MissouriVerificationPage'));
const MontanaVerificationPage = lazy(() => import('@/pages/state-pages/MontanaVerificationPage'));
const NebraskaVerificationPage = lazy(() => import('@/pages/state-pages/NebraskaVerificationPage'));
const NevadaVerificationPage = lazy(() => import('@/pages/state-pages/NevadaVerificationPage'));
const NewHampshireVerificationPage = lazy(() => import('@/pages/state-pages/NewHampshireVerificationPage'));
const NewJerseyVerificationPage = lazy(() => import('@/pages/state-pages/NewJerseyVerificationPage'));
const NewMexicoVerificationPage = lazy(() => import('@/pages/state-pages/NewMexicoVerificationPage'));
const NewYorkVerificationPage = lazy(() => import('@/pages/state-pages/NewYorkVerificationPage'));
const NorthCarolinaVerificationPage = lazy(() => import('@/pages/state-pages/NorthCarolinaVerificationPage'));
const NorthDakotaVerificationPage = lazy(() => import('@/pages/state-pages/NorthDakotaVerificationPage'));
const OhioVerificationPage = lazy(() => import('@/pages/state-pages/OhioVerificationPage'));
const OklahomaVerificationPage = lazy(() => import('@/pages/state-pages/OklahomaVerificationPage'));
const OregonVerificationPage = lazy(() => import('@/pages/state-pages/OregonVerificationPage'));
const PennsylvaniaVerificationPage = lazy(() => import('@/pages/state-pages/PennsylvaniaVerificationPage'));
const RhodeIslandVerificationPage = lazy(() => import('@/pages/state-pages/RhodeIslandVerificationPage'));
const SouthCarolinaVerificationPage = lazy(() => import('@/pages/state-pages/SouthCarolinaVerificationPage'));
const SouthDakotaVerificationPage = lazy(() => import('@/pages/state-pages/SouthDakotaVerificationPage'));
const TennesseeVerificationPage = lazy(() => import('@/pages/state-pages/TennesseeVerificationPage'));
const TexasVerificationPage = lazy(() => import('@/pages/state-pages/TexasVerificationPage'));
const UtahVerificationPage = lazy(() => import('@/pages/state-pages/UtahVerificationPage'));
const VermontVerificationPage = lazy(() => import('@/pages/state-pages/VermontVerificationPage'));
const VirginiaVerificationPage = lazy(() => import('@/pages/state-pages/VirginiaVerificationPage'));
const WashingtonVerificationPage = lazy(() => import('@/pages/state-pages/WashingtonVerificationPage'));
const WestVirginiaVerificationPage = lazy(() => import('@/pages/state-pages/WestVirginiaVerificationPage'));
const WisconsinVerificationPage = lazy(() => import('@/pages/state-pages/WisconsinVerificationPage'));
const WyomingVerificationPage = lazy(() => import('@/pages/state-pages/WyomingVerificationPage'));

// City Verification Pages - All 50 Cities
const PhoenixVerificationPage = lazy(() => import('@/pages/city-pages/PhoenixVerificationPage'));
const LosAngelesVerificationPage = lazy(() => import('@/pages/city-pages/LosAngelesVerificationPage'));
const ChicagoVerificationPage = lazy(() => import('@/pages/city-pages/ChicagoVerificationPage'));
const HoustonVerificationPage = lazy(() => import('@/pages/city-pages/HoustonVerificationPage'));
const NewYorkCityVerificationPage = lazy(() => import('@/pages/city-pages/NewYorkCityVerificationPage'));
const MiamiVerificationPage = lazy(() => import('@/pages/city-pages/MiamiVerificationPage'));
const PhiladelphiaVerificationPage = lazy(() => import('@/pages/city-pages/PhiladelphiaVerificationPage'));
const SanAntonioVerificationPage = lazy(() => import('@/pages/city-pages/SanAntonioVerificationPage'));
const SanDiegoVerificationPage = lazy(() => import('@/pages/city-pages/SanDiegoVerificationPage'));
const DallasVerificationPage = lazy(() => import('@/pages/city-pages/DallasVerificationPage'));
const SanJoseVerificationPage = lazy(() => import('@/pages/city-pages/SanJoseVerificationPage'));
const AustinVerificationPage = lazy(() => import('@/pages/city-pages/AustinVerificationPage'));
const JacksonvilleVerificationPage = lazy(() => import('@/pages/city-pages/JacksonvilleVerificationPage'));
const FortWorthVerificationPage = lazy(() => import('@/pages/city-pages/FortWorthVerificationPage'));
const ColumbusVerificationPage = lazy(() => import('@/pages/city-pages/ColumbusVerificationPage'));
const CharlotteVerificationPage = lazy(() => import('@/pages/city-pages/CharlotteVerificationPage'));
const SanFranciscoVerificationPage = lazy(() => import('@/pages/city-pages/SanFranciscoVerificationPage'));
const IndianopolisVerificationPage = lazy(() => import('@/pages/city-pages/IndianopolisVerificationPage'));
const SeattleVerificationPage = lazy(() => import('@/pages/city-pages/SeattleVerificationPage'));
const DenverVerificationPage = lazy(() => import('@/pages/city-pages/DenverVerificationPage'));
const WashingtonDCVerificationPage = lazy(() => import('@/pages/city-pages/WashingtonDCVerificationPage'));
const BostonVerificationPage = lazy(() => import('@/pages/city-pages/BostonVerificationPage'));
const NashvilleVerificationPage = lazy(() => import('@/pages/city-pages/NashvilleVerificationPage'));
const DetroitVerificationPage = lazy(() => import('@/pages/city-pages/DetroitVerificationPage'));
const PortlandVerificationPage = lazy(() => import('@/pages/city-pages/PortlandVerificationPage'));
const LasVegasVerificationPage = lazy(() => import('@/pages/city-pages/LasVegasVerificationPage'));
const MemphisVerificationPage = lazy(() => import('@/pages/city-pages/MemphisVerificationPage'));
const LouisvilleVerificationPage = lazy(() => import('@/pages/city-pages/LouisvilleVerificationPage'));
const BaltimoreVerificationPage = lazy(() => import('@/pages/city-pages/BaltimoreVerificationPage'));
const MilwaukeeVerificationPage = lazy(() => import('@/pages/city-pages/MilwaukeeVerificationPage'));
const AlbuquerqueVerificationPage = lazy(() => import('@/pages/city-pages/AlbuquerqueVerificationPage'));
const TucsonVerificationPage = lazy(() => import('@/pages/city-pages/TucsonVerificationPage'));
const FresnoVerificationPage = lazy(() => import('@/pages/city-pages/FresnoVerificationPage'));
const SacramentoVerificationPage = lazy(() => import('@/pages/city-pages/SacramentoVerificationPage'));
const MesaVerificationPage = lazy(() => import('@/pages/city-pages/MesaVerificationPage'));
const KansasCityVerificationPage = lazy(() => import('@/pages/city-pages/KansasCityVerificationPage'));
const AtlantaVerificationPage = lazy(() => import('@/pages/city-pages/AtlantaVerificationPage'));
const ColoradoSpringsVerificationPage = lazy(() => import('@/pages/city-pages/ColoradoSpringsVerificationPage'));
const RaleighVerificationPage = lazy(() => import('@/pages/city-pages/RaleighVerificationPage'));
const OmahaVerificationPage = lazy(() => import('@/pages/city-pages/OmahaVerificationPage'));
const OaklandVerificationPage = lazy(() => import('@/pages/city-pages/OaklandVerificationPage'));
const MinneapolisVerificationPage = lazy(() => import('@/pages/city-pages/MinneapolisVerificationPage'));
const TulsaVerificationPage = lazy(() => import('@/pages/city-pages/TulsaVerificationPage'));
const ClevelandVerificationPage = lazy(() => import('@/pages/city-pages/ClevelandVerificationPage'));
const WichitaVerificationPage = lazy(() => import('@/pages/city-pages/WichitaVerificationPage'));
const ArlingtonVerificationPage = lazy(() => import('@/pages/city-pages/ArlingtonVerificationPage'));
const TampaVerificationPage = lazy(() => import('@/pages/city-pages/TampaVerificationPage'));
const OrlandoVerificationPage = lazy(() => import('@/pages/city-pages/OrlandoVerificationPage'));
const StLouisVerificationPage = lazy(() => import('@/pages/city-pages/StLouisVerificationPage'));
const PittsburghVerificationPage = lazy(() => import('@/pages/city-pages/PittsburghVerificationPage'));

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
const ResellerPage = lazy(() => import('@/pages/ResellerPage'));
const PawnShopsPage = lazy(() => import('@/pages/PawnShopsPage'));
const TrustVerificationPage = lazy(() => import('@/pages/TrustVerificationPage'));

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
const StolenItemsDatabasePage = lazy(() => import('@/pages/StolenItemsDatabasePage'));

// User Features
const SearchHistoryPage = lazy(() => import('@/pages/SearchHistoryPage'));
const PurchaseHistoryPage = lazy(() => import('@/pages/PurchaseHistoryPage'));
const SecuritySettingsPage = lazy(() => import('@/pages/SecuritySettingsPage'));
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
        <Route path="/verify" element={<VerifyPage />} />
        <Route path="/mobile-verify" element={<VerifyPage />} />
        <Route path="/vin-check" element={<Navigate to="/check-car" replace />} />
        
        {/* Marketplace Landing Pages */}
        <Route path="/carfax-alternative" element={<CarfaxAlternativePage />} />
        
        {/* Verify Marketplace Routes */}
        <Route path="/verify/ebay" element={<EbayVerifyPage />} />
        <Route path="/verify/facebook-marketplace" element={<FacebookMarketplaceVerifyPage />} />
        <Route path="/verify/offerup" element={<OfferUpVerifyPage />} />
        <Route path="/verify/auctions" element={<AuctionsVerifyPage />} />
        <Route path="/verify/pawnshops" element={<PawnshopsVerifyPage />} />
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
        <Route path="/terms-of-service" element={<Navigate to="/terms" replace />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/privacy-policy" element={<Navigate to="/privacy" replace />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/transparency" element={<TransparencyPage />} />
        <Route path="/service-limitations" element={<ServiceLimitations />} />
        
        {/* Analytics & Reporting */}
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/report-stolen" element={<ReportStolen />} />
        <Route path="/traffic-strategy" element={<TrafficStrategyPage />} />
        
        {/* Targeted SEO Content Pages (Query-Specific) */}
        <Route path="/partial-serial-number-search" element={<PartialSerialSearchPage />} />
        <Route path="/stolen-property-search-serial-number" element={<StolenPropertySearchPage />} />
        
        {/* Resources & Information */}
        <Route path="/resource-center" element={<ResourceCenterPage />} />
        <Route path="/database" element={<DatabasePage />} />
        <Route path="/stolen-items-database" element={<StolenItemsDatabasePage />} />
        <Route path="/statistics/stolen-goods" element={<StolenGoodsStatistics2025 />} />
        <Route path="/seo-health" element={<SEOHealthPage />} />
        
        {/* FasterCapital Integration */}
        <Route path="/fastercapital/raise-capital" element={<FasterCapitalRaiseCapitalPage />} />
        <Route path="/fastercapital/tech-cofounder" element={<FasterCapitalTechCofounderPage />} />
        
        {/* Comparison Pages */}
        <Route path="/vs-carfax" element={<VSCarfaxPage />} />
        <Route path="/safeorstolen-vs-carfax" element={<Navigate to="/vs-carfax" replace />} />
        <Route path="/vs-checkmend" element={<VSCheckMendPage />} />
        <Route path="/safeorstolen-vs-checkmend" element={<Navigate to="/vs-checkmend" replace />} />
        <Route path="/vs-imeiinfo" element={<VSIMEIInfoPage />} />
        <Route path="/vs-stolenregister" element={<VSStolenRegisterPage />} />
        <Route path="/vs-nicb" element={<VSNICBPage />} />
        <Route path="/safeorstolen-vs-autocheck" element={<VSAutoCheckPage />} />
        
        {/* Marketplace Safety Guides */}
        <Route path="/guides/ebay-buyer-protection" element={<EbayBuyerProtection />} />
        <Route path="/guides/facebook-marketplace-safety" element={<FacebookMarketplaceSafetyGuide />} />
        <Route path="/guides/check-facebook-marketplace-items" element={<Navigate to="/guides/facebook-marketplace-safety" replace />} />
        <Route path="/guides/offerup-verification" element={<OfferUpVerification />} />
        <Route path="/guides/offerup-scam-protection" element={<Navigate to="/guides/offerup-verification" replace />} />
        <Route path="/guides/auction-house-safety" element={<AuctionHouseSafety />} />
        <Route path="/guides/pawnshop-buying-tips" element={<PawnshopBuyingTips />} />
        <Route path="/guides/verify-craigslist-items" element={<Navigate to="/guides/facebook-marketplace-safety" replace />} />
        
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
        <Route path="/resellers" element={<ResellerPage />} />
        <Route path="/pawn-shops" element={<PawnShopsPage />} />
        <Route path="/trust-verification" element={<TrustVerificationPage />} />
        
        {/* Redirects for alternate URLs */}
        <Route path="/verification-hub" element={<VerificationHubPageRedirect />} />
        <Route path="/verify-not-stolen" element={<VerifyNotStolenPage />} />
        <Route path="/how-do-i-check-if-stolen" element={<Navigate to="/how-to-check-if-item-stolen" replace />} />
        <Route path="/stolen-merchandise-check" element={<Navigate to="/verify" replace />} />
        <Route path="/android-app" element={<Navigate to="/app/android" replace />} />
        <Route path="/ios-app" element={<Navigate to="/app/ios" replace />} />
        <Route path="/avoid-buying-stolen-goods" element={<Navigate to="/avoid-stolen-goods" replace />} />
        <Route path="/ultimate-guide-not-buying-stolen-goods" element={<Navigate to="/buyer-guide" replace />} />
        <Route path="/how-to-check-if-anything-is-stolen-before-you-buy" element={<Navigate to="/comprehensive-guide" replace />} />
        <Route path="/our-story" element={<Navigate to="/about" replace />} />
        <Route path="/enterprise-demo" element={<Navigate to="/contact" replace />} />
        <Route path="/marketplace-integration" element={<Navigate to="/for-brands" replace />} />
        <Route path="/video/how-to-check-phone" element={<Navigate to="/check-phone" replace />} />
        <Route path="/video/how-to-check-vin" element={<Navigate to="/check-car" replace />} />

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
        <Route path="/florida-license-plate-lookup" element={<FloridaLicensePlateLookup />} />
        <Route path="/texas-license-plate-lookup" element={<TexasLicensePlateLookup />} />
        <Route path="/california-license-plate-lookup" element={<CaliforniaLicensePlateLookup />} />
        <Route path="/new-york-license-plate-lookup" element={<NewYorkLicensePlateLookup />} />
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
        <Route path="/blog/avoiding-stolen-goods-complete-guide" element={<AvoidingStolenGoodsCompleteGuide />} />
        <Route path="/blog/imei-check-everything" element={<IMEICheckEverything />} />
        <Route path="/blog/carfax-vs-free-vin-alternatives" element={<CarfaxVsFreeVINAlternatives />} />
        <Route path="/blog/best-stolen-item-checker-apps-2025" element={<BestStolenItemCheckerApps2025 />} />
        <Route path="/blog/why-checkmend-has-no-app" element={<WhyCheckMendHasNoApp />} />
        <Route path="/blog/firearms-app-exclusive" element={<FirearmsAppExclusive />} />
        <Route path="/blog/imei-checker-app-comparison" element={<IMEICheckerAppComparison />} />
        <Route path="/blog/safeorstolen-app-guide" element={<SafeOrStolenAppGuide />} />
        <Route path="/blog/mobile-app-vs-website-verification" element={<MobileAppVsWebsiteVerification />} />
        <Route path="/blog/how-to-use-imei-checker-app" element={<HowToUseIMEICheckerApp />} />
        
        {/* Missing blog post routes - ADDED */}
        <Route path="/blog/business-guide-preventing-stolen-goods" element={<BusinessGuidePreventingStolenGoods />} />
        <Route path="/blog/complete-verification-guide" element={<CompleteVerificationGuidePost />} />
        <Route path="/blog/data-source-credibility" element={<DataSourceCredibilityPost />} />
        <Route path="/blog/device-safety-guide" element={<DeviceSafetyGuidePost />} />
        <Route path="/blog/enterprise-security" element={<EnterpriseSecurityPost />} />
        <Route path="/blog/mobile-app-features" element={<MobileAppFeaturesPost />} />
        <Route path="/blog/phone-verification-guide" element={<PhoneVerificationGuide />} />
        <Route path="/blog/real-user-stories" element={<RealUserStoriesPost />} />
        <Route path="/blog/scammer-tactics-exposed" element={<ScammerTacticsExposed />} />
        <Route path="/blog/ultimate-marketplace-buyers-guide" element={<TheUltimateMarketplaceBuyersGuide />} />
        <Route path="/blog/verification-methodology" element={<VerificationMethodologyPost />} />
        <Route path="/blog/industry-insights-2024" element={<IndustryInsights2024 />} />
        <Route path="/blog/verification-data-privacy" element={<VerificationDataPrivacy />} />
        <Route path="/blog/serial-numbers-stolen-goods-101" element={<SerialNumbersStolenGoods101 />} />
        <Route path="/blog/ai-verification-technology" element={<AIVerificationTechnology />} />
        
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
        
        {/* App Routes - Marketplace & Competitor Domination */}
        <Route path="/app/carfax-alternative" element={<CarfaxAlternativePage />} />
        <Route path="/app/ebay-verification" element={<EbayVerificationPage />} />
        <Route path="/app/facebook-marketplace-checker" element={<FacebookMarketplaceCheckerPage />} />
        <Route path="/app/offerup-safety" element={<OfferUpSafetyPage />} />
        <Route path="/app/auction-verification" element={<AuctionVerificationPage />} />
        <Route path="/app/pawnshop-verification" element={<PawnshopVerificationPage />} />
        
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
        <Route path="/partners" element={<DataPartnershipsPage />} />
        <Route path="/partnerships" element={<DataPartnershipsPage />} />
        <Route path="/press-releases" element={<PressReleasesPage />} />
        <Route path="/press" element={<PressPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/reviews" element={<TestimonialsPage />} />
        <Route path="/security" element={<SecurityPage />} />
        
        {/* Additional Public Pages - From Sitemaps */}
        <Route path="/api-docs" element={<ApiDocsPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/competitor-alternatives" element={<CompetitorAlternativesHubPage />} />
        <Route path="/comparison-checkmend" element={<ComparisonCheckMendPage />} />

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
        <Route path="/purchase-history" element={<PurchaseHistoryPage />} />
        <Route path="/security-settings" element={<SecuritySettingsPage />} />
        <Route path="/settings" element={<SecuritySettingsPage />} />
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
        <Route path="/stolen-item-checker" element={<StolenItemCheckerPage />} />
        <Route path="/imei-check" element={<IMEICheckPage />} />
        
        {/* NEW SEO Content Pages - Emergency Content Injection Phase 1 */}
        <Route path="/imei-checker" element={<IMEICheckerContentPage />} />
        <Route path="/vin-checker" element={<VINCheckerContentPage />} />
        <Route path="/serial-number-checker" element={<SerialNumberCheckerPage />} />
        <Route path="/marketplace-safety" element={<MarketplaceSafetyPage />} />
        
        <Route path="/vin-verification" element={<VINVerificationPageRedirect />} />
        
        {/* Soft 404 Fixes - Actual pages with meta refresh */}
        <Route path="/bulk" element={<BulkPage />} />
        <Route path="/vin" element={<VINPage />} />
        <Route path="/stolen-property-lookup" element={<StolenPropertyLookupPage />} />

        {/* App Marketing & Install Routes */}
        <Route path="/imei-checker-app" element={<IMEICheckerAppPage />} />
        <Route path="/mobile-verification" element={<MobileVerificationPage />} />
        <Route path="/get-app" element={<GetAppPage />} />
        <Route path="/install-app" element={<InstallAppPage />} />
        <Route path="/download" element={<DownloadAppPage />} />
        <Route path="/verification-app" element={<VerificationAppPage />} />

        {/* Blog Post Redirects */}
        <Route path="/blog/complete-imei-guide-protect-yourself" element={<CompleteIMEIGuidePage />} />
        <Route path="/blog/safeorstolen-firearms-marketplace-verification" element={<FirearmsMarketplacePage />} />
        <Route path="/blog/complete-verification-guide-stolen-goods-check" element={<CompleteVerificationGuidePage />} />
        <Route path="/blog/data-source-credibility-stolen-goods-verification" element={<DataSourceCredibilityPage />} />
        <Route path="/blog/protect-yourself-buying-used-electronics" element={<ProtectYourselfBuyingUsedElectronics />} />

        {/* Timestamped Blog Post Redirects (404 fixes) */}
        <Route path="/blog/red-flags-buying-used-electronics-1759314016.095080" element={<RedFlagsBuyingUsedElectronicsPage />} />
        <Route path="/blog/complete-guide-verify-imei-numbers-used-phone-1759314016.095080" element={<CompleteGuideVerifyIMEIPage />} />
        <Route path="/blog/vin-verification-complete-guide-used-cars-1759314016.095080" element={<VINVerificationCompleteGuidePage />} />

        {/* Redirect Test Page - Development Tool */}
        <Route path="/redirect-test" element={<RedirectTestPage />} />

        {/* State Verification Pages - All 50 States */}
        <Route path="/alabama-stolen-item-check" element={<AlabamaVerificationPage />} />
        <Route path="/alaska-stolen-item-check" element={<AlaskaVerificationPage />} />
        <Route path="/arizona-stolen-item-check" element={<ArizonaVerificationPage />} />
        <Route path="/arkansas-stolen-item-check" element={<ArkansasVerificationPage />} />
        <Route path="/california-stolen-item-check" element={<CaliforniaVerificationPage />} />
        <Route path="/colorado-stolen-item-check" element={<ColoradoVerificationPage />} />
        <Route path="/connecticut-stolen-item-check" element={<ConnecticutVerificationPage />} />
        <Route path="/delaware-stolen-item-check" element={<DelawareVerificationPage />} />
        <Route path="/florida-stolen-item-check" element={<FloridaVerificationPage />} />
        <Route path="/georgia-stolen-item-check" element={<GeorgiaVerificationPage />} />
        <Route path="/hawaii-stolen-item-check" element={<HawaiiVerificationPage />} />
        <Route path="/idaho-stolen-item-check" element={<IdahoVerificationPage />} />
        <Route path="/illinois-stolen-item-check" element={<IllinoisVerificationPage />} />
        <Route path="/indiana-stolen-item-check" element={<IndianaVerificationPage />} />
        <Route path="/iowa-stolen-item-check" element={<IowaVerificationPage />} />
        <Route path="/kansas-stolen-item-check" element={<KansasVerificationPage />} />
        <Route path="/kentucky-stolen-item-check" element={<KentuckyVerificationPage />} />
        <Route path="/louisiana-stolen-item-check" element={<LouisianaVerificationPage />} />
        <Route path="/maine-stolen-item-check" element={<MaineVerificationPage />} />
        <Route path="/maryland-stolen-item-check" element={<MarylandVerificationPage />} />
        <Route path="/massachusetts-stolen-item-check" element={<MassachusettsVerificationPage />} />
        <Route path="/michigan-stolen-item-check" element={<MichiganVerificationPage />} />
        <Route path="/minnesota-stolen-item-check" element={<MinnesotaVerificationPage />} />
        <Route path="/mississippi-stolen-item-check" element={<MississippiVerificationPage />} />
        <Route path="/missouri-stolen-item-check" element={<MissouriVerificationPage />} />
        <Route path="/montana-stolen-item-check" element={<MontanaVerificationPage />} />
        <Route path="/nebraska-stolen-item-check" element={<NebraskaVerificationPage />} />
        <Route path="/nevada-stolen-item-check" element={<NevadaVerificationPage />} />
        <Route path="/new-hampshire-stolen-item-check" element={<NewHampshireVerificationPage />} />
        <Route path="/new-jersey-stolen-item-check" element={<NewJerseyVerificationPage />} />
        <Route path="/new-mexico-stolen-item-check" element={<NewMexicoVerificationPage />} />
        <Route path="/new-york-stolen-item-check" element={<NewYorkVerificationPage />} />
        <Route path="/north-carolina-stolen-item-check" element={<NorthCarolinaVerificationPage />} />
        <Route path="/north-dakota-stolen-item-check" element={<NorthDakotaVerificationPage />} />
        <Route path="/ohio-stolen-item-check" element={<OhioVerificationPage />} />
        <Route path="/oklahoma-stolen-item-check" element={<OklahomaVerificationPage />} />
        <Route path="/oregon-stolen-item-check" element={<OregonVerificationPage />} />
        <Route path="/pennsylvania-stolen-item-check" element={<PennsylvaniaVerificationPage />} />
        <Route path="/rhode-island-stolen-item-check" element={<RhodeIslandVerificationPage />} />
        <Route path="/south-carolina-stolen-item-check" element={<SouthCarolinaVerificationPage />} />
        <Route path="/south-dakota-stolen-item-check" element={<SouthDakotaVerificationPage />} />
        <Route path="/tennessee-stolen-item-check" element={<TennesseeVerificationPage />} />
        <Route path="/texas-stolen-item-check" element={<TexasVerificationPage />} />
        <Route path="/utah-stolen-item-check" element={<UtahVerificationPage />} />
        <Route path="/vermont-stolen-item-check" element={<VermontVerificationPage />} />
        <Route path="/virginia-stolen-item-check" element={<VirginiaVerificationPage />} />
        <Route path="/washington-stolen-item-check" element={<WashingtonVerificationPage />} />
        <Route path="/west-virginia-stolen-item-check" element={<WestVirginiaVerificationPage />} />
        <Route path="/wisconsin-stolen-item-check" element={<WisconsinVerificationPage />} />
        <Route path="/wyoming-stolen-item-check" element={<WyomingVerificationPage />} />

        {/* City Verification Pages - All 50 Cities */}
        <Route path="/phoenix-stolen-item-check" element={<PhoenixVerificationPage />} />
        <Route path="/los-angeles-stolen-item-check" element={<LosAngelesVerificationPage />} />
        <Route path="/chicago-stolen-item-check" element={<ChicagoVerificationPage />} />
        <Route path="/houston-stolen-item-check" element={<HoustonVerificationPage />} />
        <Route path="/new-york-city-stolen-item-check" element={<NewYorkCityVerificationPage />} />
        <Route path="/miami-stolen-item-check" element={<MiamiVerificationPage />} />
        <Route path="/philadelphia-stolen-item-check" element={<PhiladelphiaVerificationPage />} />
        <Route path="/san-antonio-stolen-item-check" element={<SanAntonioVerificationPage />} />
        <Route path="/san-diego-stolen-item-check" element={<SanDiegoVerificationPage />} />
        <Route path="/dallas-stolen-item-check" element={<DallasVerificationPage />} />
        <Route path="/san-jose-stolen-item-check" element={<SanJoseVerificationPage />} />
        <Route path="/austin-stolen-item-check" element={<AustinVerificationPage />} />
        <Route path="/jacksonville-stolen-item-check" element={<JacksonvilleVerificationPage />} />
        <Route path="/fort-worth-stolen-item-check" element={<FortWorthVerificationPage />} />
        <Route path="/columbus-stolen-item-check" element={<ColumbusVerificationPage />} />
        <Route path="/charlotte-stolen-item-check" element={<CharlotteVerificationPage />} />
        <Route path="/san-francisco-stolen-item-check" element={<SanFranciscoVerificationPage />} />
        <Route path="/indianapolis-stolen-item-check" element={<IndianopolisVerificationPage />} />
        <Route path="/seattle-stolen-item-check" element={<SeattleVerificationPage />} />
        <Route path="/denver-stolen-item-check" element={<DenverVerificationPage />} />
        <Route path="/washington-dc-stolen-item-check" element={<WashingtonDCVerificationPage />} />
        <Route path="/boston-stolen-item-check" element={<BostonVerificationPage />} />
        <Route path="/nashville-stolen-item-check" element={<NashvilleVerificationPage />} />
        <Route path="/detroit-stolen-item-check" element={<DetroitVerificationPage />} />
        <Route path="/portland-stolen-item-check" element={<PortlandVerificationPage />} />
        <Route path="/las-vegas-stolen-item-check" element={<LasVegasVerificationPage />} />
        <Route path="/memphis-stolen-item-check" element={<MemphisVerificationPage />} />
        <Route path="/louisville-stolen-item-check" element={<LouisvilleVerificationPage />} />
        <Route path="/baltimore-stolen-item-check" element={<BaltimoreVerificationPage />} />
        <Route path="/milwaukee-stolen-item-check" element={<MilwaukeeVerificationPage />} />
        <Route path="/albuquerque-stolen-item-check" element={<AlbuquerqueVerificationPage />} />
        <Route path="/tucson-stolen-item-check" element={<TucsonVerificationPage />} />
        <Route path="/fresno-stolen-item-check" element={<FresnoVerificationPage />} />
        <Route path="/sacramento-stolen-item-check" element={<SacramentoVerificationPage />} />
        <Route path="/mesa-stolen-item-check" element={<MesaVerificationPage />} />
        <Route path="/kansas-city-stolen-item-check" element={<KansasCityVerificationPage />} />
        <Route path="/atlanta-stolen-item-check" element={<AtlantaVerificationPage />} />
        <Route path="/colorado-springs-stolen-item-check" element={<ColoradoSpringsVerificationPage />} />
        <Route path="/raleigh-stolen-item-check" element={<RaleighVerificationPage />} />
        <Route path="/omaha-stolen-item-check" element={<OmahaVerificationPage />} />
        <Route path="/oakland-stolen-item-check" element={<OaklandVerificationPage />} />
        <Route path="/minneapolis-stolen-item-check" element={<MinneapolisVerificationPage />} />
        <Route path="/tulsa-stolen-item-check" element={<TulsaVerificationPage />} />
        <Route path="/cleveland-stolen-item-check" element={<ClevelandVerificationPage />} />
        <Route path="/wichita-stolen-item-check" element={<WichitaVerificationPage />} />
        <Route path="/arlington-stolen-item-check" element={<ArlingtonVerificationPage />} />
        <Route path="/tampa-stolen-item-check" element={<TampaVerificationPage />} />
        <Route path="/orlando-stolen-item-check" element={<OrlandoVerificationPage />} />
        <Route path="/st-louis-stolen-item-check" element={<StLouisVerificationPage />} />
        <Route path="/pittsburgh-stolen-item-check" element={<PittsburghVerificationPage />} />

        {/* Short State Name Redirects (for SEO) */}
        <Route path="/california" element={<Navigate to="/california-stolen-item-check" replace />} />
        <Route path="/texas" element={<Navigate to="/texas-stolen-item-check" replace />} />
        <Route path="/florida" element={<Navigate to="/florida-stolen-item-check" replace />} />
        <Route path="/new-york" element={<Navigate to="/new-york-stolen-item-check" replace />} />
        <Route path="/illinois" element={<Navigate to="/illinois-stolen-item-check" replace />} />
        
        {/* City/Service Pattern Routes (e.g., /chicago/imei-check) */}
        <Route path= "/:city/imei-check" element={<CityVerificationPage />} />
        <Route path= "/:city/vin-check" element={<CityVerificationPage />} />
        <Route path= "/:city/vin-verification" element={<CityVerificationPage />} />
        <Route path= "/:city/stolen-item-check" element={<CityVerificationPage />} />
        
        {/* Alternate City Pattern (e.g., /city/chicago-il/imei-check) */}
        <Route path="/city/:cityState/imei-check" element={<CityVerificationPage />} />
        <Route path="/city/:cityState/vin-check" element={<CityVerificationPage />} />
        <Route path="/city/:cityState/vin-verification" element={<CityVerificationPage />} />
        <Route path="/city/:cityState/stolen-item-check" element={<CityVerificationPage />} />
        
        {/* Device-Specific Check Pages */}
        <Route path="/check-android" element={<Navigate to="/check-phone?device=android" replace />} />
        <Route path="/check-samsung" element={<Navigate to="/check-phone?device=samsung" replace />} />
        <Route path="/check-iphone" element={<Navigate to="/check-phone?device=iphone" replace />} />
        <Route path="/check-firearm" element={<Navigate to="/verify?type=firearm" replace />} />
        <Route path="/check-gaming-console" element={<Navigate to="/verify?type=gaming-console" replace />} />
        <Route path="/check-imei-before-buying" element={<Navigate to="/check-phone" replace />} />

        {/* SEO Expansion Auto-Generated Pages */}
        {([...ITEM_VERIFICATION_PAGES, ...LONG_TAIL_PAGES.filter(p => p.category !== 'comparison'), ...USE_CASE_PAGES] as SEOUrl[]).map(page => (
          <Route key={page.path} path={page.path} element={<SEOExpansionItemPage seo={page} />} />
        ))}

        {/* 404 - Must be last */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
