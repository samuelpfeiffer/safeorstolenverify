import { Link } from 'react-router-dom';
import { 
  Car, Smartphone, MapPin, Building2, Scale, BookOpen, ChevronRight, ShieldCheck, Globe 
} from 'lucide-react';

export const InternalLinksSection = () => {
  const linkCategories = [
    {
      title: "Check Items",
      icon: Smartphone,
      links: [
        { to: "/check-phone", label: "Is This Phone Stolen?" },
        { to: "/check-iphone", label: "Is This iPhone Stolen?" },
        { to: "/check-car", label: "Is This Car Stolen?" },
        { to: "/check-laptop", label: "Is This Laptop Stolen?" },
        { to: "/check-bike", label: "Is This Bike Stolen?" },
        { to: "/check-electronics", label: "Check Electronics" },
        { to: "/check-ebike", label: "Check E-Bike" },
        { to: "/check-jewelry", label: "Check Jewelry" },
      ]
    },
    {
      title: "Verification Tools",
      icon: Scale,
      links: [
        { to: "/verify", label: "Universal Checker" },
        { to: "/imei-checker", label: "IMEI Checker" },
        { to: "/vin-checker", label: "VIN Checker" },
        { to: "/serial-number-checker", label: "Serial Checker" },
        { to: "/license-plate-lookup", label: "Plate Lookup" },
        { to: "/marketplace-url-checker", label: "URL Checker" },
        { to: "/firearms-check", label: "Firearm Check" },
      ]
    },
    {
      title: "State VIN Lookup",
      icon: Car,
      links: [
        { to: "/california-vin-lookup", label: "California" },
        { to: "/texas-vin-lookup", label: "Texas" },
        { to: "/florida-vin-lookup", label: "Florida" },
        { to: "/new-york-vin-lookup", label: "New York" },
        { to: "/illinois-vin-lookup", label: "Illinois" },
        { to: "/georgia-vin-lookup", label: "Georgia" },
        { to: "/arizona-vin-lookup", label: "Arizona" },
        { to: "/ohio-vin-lookup", label: "Ohio" },
      ]
    },
    {
      title: "Marketplace Safety",
      icon: ShieldCheck,
      links: [
        { to: "/facebook-marketplace-stolen-check", label: "Facebook Marketplace" },
        { to: "/ebay-stolen-item-check", label: "eBay" },
        { to: "/craigslist-safety-verification", label: "Craigslist" },
        { to: "/offerup-verify-not-stolen", label: "OfferUp" },
        { to: "/mercari-stolen-check", label: "Mercari" },
        { to: "/poshmark-stolen-check", label: "Poshmark" },
        { to: "/letgo-stolen-check", label: "Letgo" },
      ]
    },
    {
      title: "Popular Cities",
      icon: MapPin,
      links: [
        { to: "/city/chicago", label: "Chicago" },
        { to: "/city/los-angeles", label: "Los Angeles" },
        { to: "/city/new-york", label: "New York" },
        { to: "/city/houston", label: "Houston" },
        { to: "/city/phoenix", label: "Phoenix" },
        { to: "/city/miami", label: "Miami" },
        { to: "/city/dallas", label: "Dallas" },
        { to: "/city/atlanta", label: "Atlanta" },
      ]
    },
    {
      title: "For Business",
      icon: Building2,
      links: [
        { to: "/for-pawn-shops", label: "Pawn Shops" },
        { to: "/for-dealers", label: "Car Dealers" },
        { to: "/for-resellers", label: "Resellers" },
        { to: "/for-auction-houses", label: "Auction Houses" },
        { to: "/for-buyers", label: "Buyers" },
        { to: "/for-sellers", label: "Sellers" },
        { to: "/pricing", label: "Business Pricing" },
      ]
    },
    {
      title: "Compare Services",
      icon: Globe,
      links: [
        { to: "/vs-carfax", label: "vs Carfax" },
        { to: "/vs-autocheck", label: "vs AutoCheck" },
        { to: "/vs-checkmend", label: "vs Checkmend" },
        { to: "/vs-imei-info", label: "vs IMEI.info" },
        { to: "/vs-swappa", label: "vs Swappa" },
        { to: "/compare", label: "Full Comparison" },
      ]
    },
    {
      title: "Resources",
      icon: BookOpen,
      links: [
        { to: "/blog", label: "Blog & Guides" },
        { to: "/how-it-works", label: "How It Works" },
        { to: "/app", label: "Download App" },
        { to: "/resource-center", label: "Resource Center" },
        { to: "/faq", label: "FAQ" },
        { to: "/about", label: "About Us" },
        { to: "/features", label: "All Features" },
      ]
    },
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Explore SafeOrStolen</h2>
          <p className="text-muted-foreground text-center mb-8 text-sm">
            Verification tools, marketplace guides, and resources to keep you safe
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {linkCategories.map((category) => (
              <div key={category.title} className="bg-card border border-border rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <category.icon className="h-4 w-4 text-primary" />
                  <h3 className="text-xs font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-1">
                  {category.links.map((link) => (
                    <li key={link.to}>
                      <Link 
                        to={link.to} 
                        className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-0.5"
                      >
                        <ChevronRight className="h-2.5 w-2.5 flex-shrink-0" />
                        <span className="line-clamp-1">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
