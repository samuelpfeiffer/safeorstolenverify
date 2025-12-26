import { PageSEO } from '@/components/seo/PageSEO';
import { Link } from 'react-router-dom';
import { 
  Car, Smartphone, Laptop, Bike, Wrench, Gem, Ship, 
  MapPin, FileText, Building2, Users, HelpCircle, 
  CreditCard, Shield, Scale, BookOpen
} from 'lucide-react';

const SitemapPage = () => {
  const sections = [
    {
      title: "Verification Tools",
      icon: Shield,
      links: [
        { to: "/verify", label: "Verify Item" },
        { to: "/imei-checker", label: "IMEI Checker" },
        { to: "/vin-checker", label: "VIN Checker" },
        { to: "/serial-number-checker", label: "Serial Number Checker" },
        { to: "/license-plate-lookup", label: "License Plate Lookup" },
      ]
    },
    {
      title: "Item Categories",
      icon: Smartphone,
      links: [
        { to: "/check-phone", label: "Check Phone" },
        { to: "/check-car", label: "Check Car" },
        { to: "/check-bike", label: "Check Bike" },
        { to: "/check-laptop", label: "Check Laptop" },
        { to: "/check-electronics", label: "Check Electronics" },
        { to: "/check-ebike", label: "Check E-Bike" },
        { to: "/check-appliances", label: "Check Appliances" },
        { to: "/check-tools", label: "Check Tools" },
        { to: "/check-jewelry", label: "Check Jewelry" },
        { to: "/check-boat", label: "Check Boat" },
        { to: "/firearms-serial-number-check", label: "Firearms Check" },
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
        { to: "/california-license-plate-lookup", label: "California License Plate" },
        { to: "/texas-license-plate-lookup", label: "Texas License Plate" },
        { to: "/florida-license-plate-lookup", label: "Florida License Plate" },
        { to: "/new-york-license-plate-lookup", label: "New York License Plate" },
        { to: "/illinois-license-plate-lookup", label: "Illinois License Plate" },
        { to: "/georgia-license-plate-lookup", label: "Georgia License Plate" },
        { to: "/pennsylvania-license-plate-lookup", label: "Pennsylvania License Plate" },
        { to: "/ohio-license-plate-lookup", label: "Ohio License Plate" },
        { to: "/north-carolina-license-plate-lookup", label: "North Carolina License Plate" },
        { to: "/washington-license-plate-lookup", label: "Washington License Plate" },
      ]
    },
    {
      title: "City Verification",
      icon: Building2,
      links: [
        { to: "/stolen-check-los-angeles", label: "Los Angeles Verification" },
        { to: "/stolen-check-new-york-city", label: "New York City Verification" },
        { to: "/stolen-check-chicago", label: "Chicago Verification" },
        { to: "/stolen-check-houston", label: "Houston Verification" },
        { to: "/stolen-check-phoenix", label: "Phoenix Verification" },
        { to: "/stolen-check-philadelphia", label: "Philadelphia Verification" },
        { to: "/stolen-check-san-antonio", label: "San Antonio Verification" },
        { to: "/stolen-check-san-diego", label: "San Diego Verification" },
        { to: "/stolen-check-dallas", label: "Dallas Verification" },
        { to: "/stolen-check-san-jose", label: "San Jose Verification" },
      ]
    },
    {
      title: "Marketplace Safety",
      icon: Users,
      links: [
        { to: "/facebook-marketplace-stolen-check", label: "Facebook Marketplace Safety" },
        { to: "/offerup-verify-not-stolen", label: "OfferUp Safety" },
        { to: "/craigslist-safety-verification", label: "Craigslist Safety" },
        { to: "/ebay-stolen-item-check", label: "eBay Safety" },
      ]
    },
    {
      title: "Compare Services",
      icon: Scale,
      links: [
        { to: "/compare", label: "Compare All Services" },
        { to: "/vs-checkmend", label: "SafeOrStolen vs CheckMEND" },
        { to: "/vs-imeiinfo", label: "SafeOrStolen vs IMEI.info" },
        { to: "/vs-swappa", label: "SafeOrStolen vs Swappa" },
        { to: "/vs-carfax", label: "SafeOrStolen vs CARFAX" },
        { to: "/vs-autocheck", label: "SafeOrStolen vs AutoCheck" },
      ]
    },
    {
      title: "Blog & Guides",
      icon: BookOpen,
      links: [
        { to: "/blog", label: "All Blog Posts" },
        { to: "/blog/how-to-check-if-phone-stolen", label: "How to Check if Phone is Stolen" },
        { to: "/blog/complete-vin-guide", label: "Complete VIN Guide" },
        { to: "/blog/complete-imei-guide-protect-yourself", label: "IMEI Verification Guide" },
        { to: "/blog/facebook-marketplace-scams", label: "Facebook Marketplace Scams" },
        { to: "/blog/pawn-shop-stolen-item-verification", label: "Pawn Shop Verification" },
        { to: "/blog/bicycle-stolen-serial-number-check", label: "Bicycle Serial Number Check" },
        { to: "/blog/firearm-serial-number-verification", label: "Firearm Serial Verification" },
      ]
    },
    {
      title: "Company",
      icon: Building2,
      links: [
        { to: "/about", label: "About Us" },
        { to: "/how-it-works", label: "How It Works" },
        { to: "/pricing", label: "Pricing" },
        { to: "/testimonials", label: "Testimonials" },
        { to: "/app", label: "Download App" },
        { to: "/faq", label: "FAQ" },
        { to: "/report-stolen", label: "Report Stolen Item" },
      ]
    },
    {
      title: "Legal",
      icon: FileText,
      links: [
        { to: "/terms", label: "Terms of Service" },
        { to: "/privacy", label: "Privacy Policy" },
      ]
    },
  ];

  return (
    <>
      <PageSEO
        title="Sitemap - All Pages | SafeOrStolen"
        description="Complete sitemap of SafeOrStolen. Find all verification tools, state lookups, city pages, marketplace safety guides, and more."
        keywords="sitemap, safeorstolen pages, verification tools, VIN lookup, IMEI checker, license plate lookup"
        canonical="/sitemap"
      />

      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-4">Sitemap</h1>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Browse all pages on SafeOrStolen. Find verification tools, state-specific lookups, 
              marketplace safety guides, and helpful resources.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sections.map((section) => (
                <div key={section.title} className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <section.icon className="h-5 w-5 text-primary" />
                    <h2 className="text-lg font-semibold">{section.title}</h2>
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
