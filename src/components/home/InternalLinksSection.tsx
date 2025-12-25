import { Link } from 'react-router-dom';
import { 
  Car, Smartphone, MapPin, Building2, Scale, BookOpen, ChevronRight 
} from 'lucide-react';

export const InternalLinksSection = () => {
  const linkCategories = [
    {
      title: "Verification Tools",
      icon: Smartphone,
      links: [
        { to: "/imei-checker", label: "IMEI Checker" },
        { to: "/vin-checker", label: "VIN Checker" },
        { to: "/serial-number-checker", label: "Serial Number Checker" },
        { to: "/firearms-check", label: "Gun Serial Lookup" },
        { to: "/check-phone", label: "Check Phone" },
        { to: "/check-car", label: "Check Car" },
      ]
    },
    {
      title: "State VIN Lookup",
      icon: Car,
      links: [
        { to: "/arizona-vin-lookup", label: "Arizona" },
        { to: "/california-vin-lookup", label: "California" },
        { to: "/texas-vin-lookup", label: "Texas" },
        { to: "/florida-vin-lookup", label: "Florida" },
        { to: "/new-york-vin-lookup", label: "New York" },
        { to: "/georgia-vin-lookup", label: "Georgia" },
      ]
    },
    {
      title: "License Plate Lookup",
      icon: MapPin,
      links: [
        { to: "/arizona-license-plate-lookup", label: "Arizona" },
        { to: "/california-license-plate-lookup", label: "California" },
        { to: "/texas-license-plate-lookup", label: "Texas" },
        { to: "/florida-license-plate-lookup", label: "Florida" },
        { to: "/new-york-license-plate-lookup", label: "New York" },
        { to: "/ohio-license-plate-lookup", label: "Ohio" },
      ]
    },
    {
      title: "For Business",
      icon: Building2,
      links: [
        { to: "/for-buyers", label: "For Buyers" },
        { to: "/for-sellers", label: "For Sellers" },
        { to: "/for-pawn-shops", label: "For Pawn Shops" },
        { to: "/for-dealers", label: "For Car Dealers" },
        { to: "/for-resellers", label: "For Resellers" },
        { to: "/for-marketplaces", label: "For Marketplaces" },
      ]
    },
    {
      title: "Compare Services",
      icon: Scale,
      links: [
        { to: "/compare", label: "Compare All" },
        { to: "/vs-checkmend", label: "vs CheckMEND" },
        { to: "/vs-carfax", label: "vs CARFAX" },
        { to: "/vs-swappa", label: "vs Swappa" },
        { to: "/vs-imeiinfo", label: "vs IMEI.info" },
        { to: "/vs-autocheck", label: "vs AutoCheck" },
      ]
    },
    {
      title: "Guides & Resources",
      icon: BookOpen,
      links: [
        { to: "/blog", label: "Blog" },
        { to: "/blog/carfax-vs-free-vin-alternatives", label: "Free Carfax Alternatives" },
        { to: "/how-it-works", label: "How It Works" },
        { to: "/faq", label: "FAQ" },
        { to: "/facebook-marketplace-stolen-check", label: "Marketplace Safety" },
        { to: "/sitemap", label: "Full Sitemap" },
      ]
    },
  ];

  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Explore SafeOrStolen</h2>
          <p className="text-muted-foreground text-center mb-8 text-sm">
            Verification tools, state lookups, and resources
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {linkCategories.map((category) => (
              <div key={category.title} className="bg-card border border-border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <category.icon className="h-4 w-4 text-primary" />
                  <h3 className="text-sm font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-1.5">
                  {category.links.map((link) => (
                    <li key={link.to}>
                      <Link 
                        to={link.to} 
                        className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                      >
                        <ChevronRight className="h-3 w-3" />
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
    </section>
  );
};
