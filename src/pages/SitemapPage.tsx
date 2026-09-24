import { PageSEO } from '@/components/seo/PageSEO';
import { Link } from '@/lib/router-compat';
import { 
 Car, Smartphone, Laptop, Bike, Wrench, Gem, Ship, 
 MapPin, FileText, Building2, Users, HelpCircle, 
 CreditCard, Shield, Scale, BookOpen, Globe, Crosshair,
 Gamepad2, Watch, Camera, Zap, Search
} from 'lucide-react';

const SitemapPage = () => {
 const sections = [
 {
 title: "Verification Tools",
 icon: Shield,
 links: [
 { to: "/verify", label: "Verify Item" },
 { to: "/imei-checker", label: "IMEI Checker" },
 { to: "/imei-check", label: "IMEI Check" },
 { to: "/vin-checker", label: "VIN Checker" },
 { to: "/vin-checker", label: "VIN Check" },
 { to: "/serial-number-checker", label: "Serial Number Checker" },
 { to: "/license-plate-lookup", label: "License Plate Lookup" },
 { to: "/firearms-check", label: "Firearms Check" },
 { to: "/marketplace-url-checker", label: "Marketplace URL Checker" },
 { to: "/imei-checker-app", label: "IMEI Checker App" },
 { to: "/real-time-verification", label: "Real-Time Verification" },
 { to: "/check-if-stolen", label: "Check If Stolen" },
 { to: "/how-to-check-if-item-stolen", label: "How to Check If Item Stolen" },
 { to: "/partial-serial-number-search", label: "Partial Serial Number Search" },
 { to: "/verify/pawnshops", label: "Pawn Shop Verification" },
 ]
 },
 {
 title: "Item Categories",
 icon: Smartphone,
 links: [
 { to: "/check-phone", label: "Check Phone" },
 { to: "/vin-checker", label: "Check Car" },
 { to: "/check-bike", label: "Check Bike" },
 { to: "/check-laptop", label: "Check Laptop" },
 { to: "/check-electronics", label: "Check Electronics" },
 { to: "/check-ebike", label: "Check E-Bike" },
 { to: "/check-appliances", label: "Check Appliances" },
 { to: "/check-tools", label: "Check Tools" },
 { to: "/check-jewelry", label: "Check Jewelry" },
 { to: "/check-boat", label: "Check Boat" },
 { to: "/check-android", label: "Check Android" },
 { to: "/check-firearm", label: "Check Firearm" },
 { to: "/check-ps5", label: "Check PS5" },
 { to: "/check-xbox", label: "Check Xbox" },
 { to: "/is-my-iphone-stolen", label: "Is My iPhone Stolen?" },
 ]
 },
 {
 title: "Specific Item Checks",
 icon: Search,
 links: [
 { to: "/check-iphone-stolen", label: "iPhone IMEI Check" },
 { to: "/check-samsung-stolen", label: "Samsung IMEI Check" },
 { to: "/check-android-phone-stolen", label: "Android Phone Check" },
 { to: "/vin-checker", label: "Car VIN Stolen Check" },
 { to: "/check-motorcycle-stolen-vin", label: "Motorcycle VIN Check" },
 { to: "/check-laptop-stolen", label: "Laptop Serial Check" },
 { to: "/check-tablet-stolen", label: "Tablet Check" },
 { to: "/check-bicycle-stolen", label: "Bicycle Serial Check" },
 { to: "/check-gaming-console-stolen", label: "Gaming Console Check" },
 { to: "/check-watch-stolen", label: "Watch Serial Check" },
 { to: "/check-camera-stolen", label: "Camera Equipment Check" },
 { to: "/check-power-tools-stolen", label: "Power Tools Check" },
 { to: "/check-firearm-serial", label: "Firearm Serial Check" },
 { to: "/check-jewelry-stolen", label: "Jewelry Check" },
 ]
 },
 {
 title: "Hub Pages",
 icon: Zap,
 links: [
 { to: "/firearms-serial-number-check", label: "Firearms Serial Number Check" },
 { to: "/vin-checker", label: "Free Stolen Vehicle Check" },
 { to: "/serial-number-stolen-check", label: "Serial Number Stolen Check" },
 { to: "/stolen-gun-database", label: "Stolen Gun Database" },
 { to: "/gun-serial-number-lookup", label: "Gun Serial Number Lookup" },
 { to: "/stolen-phone-checker", label: "Stolen Phone Checker" },
 { to: "/phone-blacklist-check", label: "Phone Blacklist Check" },
 { to: "/how-to-check-if-phone-stolen", label: "How to Check If Phone Stolen" },
 { to: "/how-to-check-if-car-stolen", label: "How to Check If Car Stolen" },
 { to: "/is-my-phone-stolen", label: "Is My Phone Stolen?" },
 { to: "/vin-checker", label: "Is This Car Stolen?" },
 { to: "/is-this-laptop-stolen", label: "Is This Laptop Stolen?" },
 { to: "/is-this-bike-stolen", label: "Is This Bike Stolen?" },
 { to: "/is-this-gun-stolen", label: "Is This Gun Stolen?" },
 { to: "/theftaz", label: "TheftAZ" },
 ]
 },
 {
 title: "State VIN Lookup",
 icon: Car,
 links: [
 { to: "/california-vin-lookup", label: "California VIN Lookup" },
 { to: "/texas-vin-lookup", label: "Texas VIN Lookup" },
 { to: "/florida-vin-lookup", label: "Florida VIN Lookup" },
 { to: "/new-york-vin-lookup", label: "New York VIN Lookup" },
 { to: "/illinois-vin-lookup", label: "Illinois VIN Lookup" },
 { to: "/georgia-vin-lookup", label: "Georgia VIN Lookup" },
 { to: "/pennsylvania-vin-lookup", label: "Pennsylvania VIN Lookup" },
 { to: "/ohio-vin-lookup", label: "Ohio VIN Lookup" },
 { to: "/north-carolina-vin-lookup", label: "North Carolina VIN Lookup" },
 { to: "/washington-vin-lookup", label: "Washington VIN Lookup" },
 ]
 },
 {
 title: "State License Plate Lookup",
 icon: MapPin,
 links: [
 { to: "/california-license-plate-lookup", label: "California" },
 { to: "/texas-license-plate-lookup", label: "Texas" },
 { to: "/florida-license-plate-lookup", label: "Florida" },
 { to: "/new-york-license-plate-lookup", label: "New York" },
 { to: "/illinois-license-plate-lookup", label: "Illinois" },
 { to: "/georgia-license-plate-lookup", label: "Georgia" },
 { to: "/pennsylvania-license-plate-lookup", label: "Pennsylvania" },
 { to: "/ohio-license-plate-lookup", label: "Ohio" },
 { to: "/north-carolina-license-plate-lookup", label: "North Carolina" },
 { to: "/washington-license-plate-lookup", label: "Washington" },
 { to: "/arizona-license-plate-lookup", label: "Arizona" },
 { to: "/alabama-license-plate-lookup", label: "Alabama" },
 { to: "/alaska-license-plate-lookup", label: "Alaska" },
 { to: "/arkansas-license-plate-lookup", label: "Arkansas" },
 { to: "/colorado-license-plate-lookup", label: "Colorado" },
 { to: "/connecticut-license-plate-lookup", label: "Connecticut" },
 { to: "/delaware-license-plate-lookup", label: "Delaware" },
 { to: "/hawaii-license-plate-lookup", label: "Hawaii" },
 { to: "/idaho-license-plate-lookup", label: "Idaho" },
 { to: "/indiana-license-plate-lookup", label: "Indiana" },
 { to: "/iowa-license-plate-lookup", label: "Iowa" },
 { to: "/kansas-license-plate-lookup", label: "Kansas" },
 { to: "/kentucky-license-plate-lookup", label: "Kentucky" },
 { to: "/louisiana-license-plate-lookup", label: "Louisiana" },
 { to: "/maine-license-plate-lookup", label: "Maine" },
 { to: "/maryland-license-plate-lookup", label: "Maryland" },
 { to: "/massachusetts-license-plate-lookup", label: "Massachusetts" },
 { to: "/michigan-license-plate-lookup", label: "Michigan" },
 { to: "/minnesota-license-plate-lookup", label: "Minnesota" },
 { to: "/mississippi-license-plate-lookup", label: "Mississippi" },
 { to: "/missouri-license-plate-lookup", label: "Missouri" },
 { to: "/montana-license-plate-lookup", label: "Montana" },
 { to: "/nebraska-license-plate-lookup", label: "Nebraska" },
 { to: "/nevada-license-plate-lookup", label: "Nevada" },
 { to: "/new-hampshire-license-plate-lookup", label: "New Hampshire" },
 { to: "/new-jersey-license-plate-lookup", label: "New Jersey" },
 { to: "/new-mexico-license-plate-lookup", label: "New Mexico" },
 { to: "/north-dakota-license-plate-lookup", label: "North Dakota" },
 { to: "/oklahoma-license-plate-lookup", label: "Oklahoma" },
 { to: "/oregon-license-plate-lookup", label: "Oregon" },
 { to: "/rhode-island-license-plate-lookup", label: "Rhode Island" },
 { to: "/south-carolina-license-plate-lookup", label: "South Carolina" },
 { to: "/south-dakota-license-plate-lookup", label: "South Dakota" },
 { to: "/tennessee-license-plate-lookup", label: "Tennessee" },
 { to: "/utah-license-plate-lookup", label: "Utah" },
 { to: "/vermont-license-plate-lookup", label: "Vermont" },
 { to: "/virginia-license-plate-lookup", label: "Virginia" },
 { to: "/west-virginia-license-plate-lookup", label: "West Virginia" },
 { to: "/wisconsin-license-plate-lookup", label: "Wisconsin" },
 { to: "/wyoming-license-plate-lookup", label: "Wyoming" },
 { to: "/washington-dc-license-plate-lookup", label: "Washington DC" },
 ]
 },
 {
 title: "City Verification",
 icon: Building2,
 links: [
 { to: "/stolen-check-los-angeles", label: "Los Angeles" },
 { to: "/stolen-check-new-york-city", label: "New York City" },
 { to: "/stolen-check-chicago", label: "Chicago" },
 { to: "/stolen-check-houston", label: "Houston" },
 { to: "/stolen-check-phoenix", label: "Phoenix" },
 { to: "/stolen-check-philadelphia", label: "Philadelphia" },
 { to: "/stolen-check-san-antonio", label: "San Antonio" },
 { to: "/stolen-check-san-diego", label: "San Diego" },
 { to: "/stolen-check-dallas", label: "Dallas" },
 { to: "/stolen-check-san-jose", label: "San Jose" },
 { to: "/stolen-check-miami", label: "Miami" },
 ]
 },
 {
 title: "Marketplace Safety",
 icon: Users,
 links: [
 { to: "/facebook-marketplace-stolen-check", label: "Facebook Marketplace" },
 { to: "/offerup-verify-not-stolen", label: "OfferUp" },
 { to: "/craigslist-safety-verification", label: "Craigslist" },
 { to: "/ebay-stolen-item-check", label: "eBay" },
 { to: "/mercari-stolen-check", label: "Mercari" },
 { to: "/poshmark-stolen-check", label: "Poshmark" },
 { to: "/stockx-verification", label: "StockX" },
 { to: "/letgo-stolen-check", label: "Letgo" },
 { to: "/facebook-marketplace-safety", label: "FB Marketplace Safety Guide" },
 { to: "/offerup-safety", label: "OfferUp Safety Guide" },
 { to: "/marketplace-integration", label: "Marketplace Integration" },
 ]
 },
 {
 title: "Compare Services",
 icon: Scale,
 links: [
 { to: "/compare", label: "Compare All Services" },
 { to: "/compare", label: "Compare checking resources" },
 { to: "/vs-imeiinfo", label: "vs IMEI.info" },
 { to: "/vs-swappa", label: "vs Swappa" },
 { to: "/vs-carfax", label: "vs CARFAX" },
 { to: "/vs-autocheck", label: "vs AutoCheck" },
 { to: "/vs-stolenregister", label: "vs StolenRegister" },
 { to: "/vs-bikeindex", label: "How SafeOrStolen leverages BikeIndex" },
 { to: "/vs-devicecheck-ca", label: "vs DeviceCheck" },
 { to: "/vs-stolenphonechecker", label: "vs StolenPhoneChecker" },
 { to: "/vs-vincheck-info", label: "vs VinCheck.info" },
 { to: "/vs-fastbound", label: "vs FastBound" },
 { to: "/carfax-alternative-free", label: "Free Carfax Alternative" },
 { to: "/nicb-alternative", label: "SafeOrStolen as a NICB alternative" },
 { to: "/hotgunz-alternative", label: "HotGunz Alternative" },
 { to: "/best-stolen-item-checkers-2026", label: "Best Stolen Item Checkers 2026" },
 ]
 },
 {
 title: "Blog & Guides",
 icon: BookOpen,
 links: [
 { to: "/blog", label: "All Blog Posts" },
 { to: "/blog/how-to-check-if-phone-stolen", label: "How to Check If Phone Stolen" },
 { to: "/blog/complete-vin-guide", label: "Complete VIN Guide" },
 { to: "/blog/complete-imei-guide-protect-yourself", label: "Complete IMEI Guide" },
 { to: "/blog/facebook-marketplace-scams", label: "FB Marketplace Scams" },
 { to: "/blog/facebook-marketplace-scams-guide", label: "FB Marketplace Scams Guide" },
 { to: "/blog/pawn-shop-stolen-item-verification", label: "Pawn Shop Verification" },
 { to: "/blog/bicycle-stolen-serial-number-check", label: "Bicycle Serial Check" },
 { to: "/blog/firearm-serial-number-verification", label: "Firearm Serial Verification" },
 { to: "/blog/scammer-tactics-exposed", label: "Scammer Tactics Exposed" },
 { to: "/blog/protect-yourself-buying-used-electronics", label: "Used Electronics Protection" },
 { to: "/blog/ultimate-marketplace-buyers-guide", label: "Marketplace Buyers Guide" },
 { to: "/blog/verify-item-before-meetup", label: "Verify Before Meetup" },
 { to: "/blog/how-to-check-if-iphone-stolen", label: "Check If iPhone Stolen" },
 { to: "/blog/how-to-sell-verified-items", label: "How to Sell Verified Items" },
 { to: "/blog/free-vin-lookup-guide", label: "Free VIN Lookup Guide" },
 { to: "/blog/carfax-vs-free-vin-alternatives", label: "Carfax Alternatives" },
 { to: "/blog/ai-stolen-item-detection-2026", label: "AI Stolen Detection 2026" },
 { to: "/blog/ps5-stolen-check-guide", label: "PS5 Stolen Check" },
 { to: "/blog/check-if-phone-stolen-guide", label: "Check Phone Stolen Guide" },
 { to: "/blog/imei-checker-app-download", label: "IMEI App Download" },
 { to: "/blog/theft-trends-report-2024", label: "Theft Trends 2024" },
 { to: "/blog/like-carfax-for-phones", label: "Like Carfax For Phones" },
 { to: "/blog/best-ai-llms-2026", label: "Best AI LLMs 2026" },
 { to: "/blog/top-10-stolen-item-checkers", label: "Top 10 Checkers" },
 { to: "/blog/best-stolen-item-checkers-2026", label: "Best Checkers 2026" },
 { to: "/guides/ebay-buyer-protection", label: "eBay Buyer Protection" },
 { to: "/guides/verify-craigslist-items", label: "Verify Craigslist Items" },
 { to: "/guides/offerup-scam-protection", label: "OfferUp Scam Protection" },
 ]
 },
 {
 title: "For Businesses",
 icon: Building2,
 links: [
 { to: "/for-businesses", label: "All Businesses" },
 { to: "/for-pawn-shops", label: "Pawn Shops" },
 { to: "/for-dealers", label: "Dealers" },
 { to: "/for-marketplaces", label: "Marketplaces" },
 { to: "/for-auction-houses", label: "Auction Houses" },
 { to: "/for-sellers", label: "Sellers" },
 { to: "/for-electronics-resellers", label: "Electronics Resellers" },
 { to: "/for-insurance-companies", label: "Insurance Companies" },
 { to: "/for-law-enforcement", label: "Law Enforcement" },
 { to: "/for-consumers", label: "Consumers" },
 { to: "/api", label: "API Documentation" },
 ]
 },
 {
 title: "Company & Resources",
 icon: FileText,
 links: [
 { to: "/about", label: "About Us" },
 { to: "/how-it-works", label: "How It Works" },
 { to: "/pricing", label: "Pricing" },
 { to: "/features", label: "Features" },
 { to: "/testimonials", label: "Testimonials" },
 { to: "/app", label: "Download App" },
 { to: "/download", label: "Download" },
 { to: "/faq", label: "FAQ" },
 { to: "/report-stolen", label: "Report Stolen Item" },
 { to: "/data-sources", label: "Data Sources" },
 { to: "/resource-center", label: "Resource Center" },
 { to: "/comprehensive-guide", label: "Comprehensive Guide" },
 { to: "/stolen-database", label: "Stolen Database" },
 { to: "/community", label: "Community" },
 { to: "/transparency", label: "Transparency" },
 { to: "/compare", label: "Compare Plans" },
 { to: "/free-tools", label: "Free Tools" },
 { to: "/news", label: "News" },
 { to: "/press", label: "Press" },
 { to: "/press-kit", label: "Press Kit" },
 { to: "/press-release", label: "Press Release" },
 { to: "/product-hunt", label: "Product Hunt" },
 { to: "/crunchbase", label: "Crunchbase" },
 { to: "/terms", label: "Terms of Service" },
 { to: "/privacy", label: "Privacy Policy" },
 ]
 },
 {
 title: "App Features",
 icon: Smartphone,
 links: [
 { to: "/app/features", label: "App Features" },
 { to: "/app/stolen-phone-checker", label: "Stolen Phone Checker App" },
 { to: "/app/vin-checker", label: "VIN Checker App" },
 { to: "/app/barcode-scanner", label: "Barcode Scanner" },
 ]
 },
 ];

 return (
 <>
 <PageSEO
 title="Sitemap - All Pages | SafeOrStolen"
 description="Complete sitemap of SafeOrStolen with 200+ pages. Find all verification tools, state lookups, city pages, marketplace safety guides, blog posts, and more."
 keywords="sitemap, safeorstolen pages, verification tools, VIN lookup, IMEI checker, license plate lookup"
 canonical="/sitemap"
 />
 <div className="min-h-screen bg-background py-12 pt-24">
 <div className="container mx-auto px-4">
 <div className="max-w-7xl mx-auto">
 <h1 className="text-4xl font-bold text-center mb-4">Sitemap</h1>
 <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
 Browse all 200+ pages on SafeOrStolen. Find verification tools, state-specific lookups, 
 marketplace safety guides, blog posts, comparison pages, and helpful resources.
 </p>

 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
 {sections.map((section) => (
 <div key={section.title} className="bg-card border border-border rounded-lg p-6">
 <div className="flex items-center gap-3 mb-4">
 <section.icon className="h-5 w-5 text-primary" />
 <h2 className="text-lg font-semibold">{section.title}</h2>
 <span className="text-xs text-muted-foreground">({section.links.length})</span>
 </div>
 <ul className="space-y-2">
 {section.links.map((link) => (
 <li key={link.to}>
 <Link 
 to={link.to} 
 className="text-sm text-muted-foreground hover:text-primary transition-colors"
 >
 {link.label}
 </Link>
 </li>
 ))}
 </ul>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </>
 );
};

export default SitemapPage;