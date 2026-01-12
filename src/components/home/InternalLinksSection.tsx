import { Link } from 'react-router-dom';
import { 
  Car, Smartphone, MapPin, Building2, Scale, BookOpen, ChevronRight, Watch, Gamepad2, Shield, Search
} from 'lucide-react';

export const InternalLinksSection = () => {
  const linkCategories = [
    {
      title: "Item Verification",
      icon: Smartphone,
      links: [
        { to: "/check-phone", label: "Check Phone" },
        { to: "/check-car", label: "Check Car" },
        { to: "/check-laptop", label: "Check Laptop" },
        { to: "/check-bike", label: "Check Bike" },
        { to: "/check-electronics", label: "Check Electronics" },
        { to: "/ps5-serial-number-check", label: "PS5 Check" },
        { to: "/firearms-check", label: "Check Firearm" },
        { to: "/rolex-serial-number-check", label: "Rolex Check" },
      ]
    },
    {
      title: "Identifier Tools",
      icon: Scale,
      links: [
        { to: "/verify", label: "Universal Checker" },
        { to: "/imei-checker", label: "IMEI Checker" },
        { to: "/imei-check-free", label: "Free IMEI Check" },
        { to: "/vin-checker", label: "VIN Checker" },
        { to: "/unlimited-vin-checks", label: "Unlimited VIN" },
        { to: "/serial-number-checker", label: "Serial Checker" },
        { to: "/how-to-check-serial-number", label: "Serial Guide" },
        { to: "/gun-serial-number-lookup", label: "Gun Serial Lookup" },
      ]
    },
    {
      title: "State Databases",
      icon: Car,
      links: [
        { to: "/arizona-stolen-property-database", label: "Arizona Database" },
        { to: "/stolen-vehicle-database-arizona", label: "AZ Vehicles" },
        { to: "/arizona-vin-lookup", label: "Arizona VIN" },
        { to: "/california-vin-lookup", label: "California VIN" },
        { to: "/texas-vin-lookup", label: "Texas VIN" },
        { to: "/florida-vin-lookup", label: "Florida VIN" },
      ]
    },
    {
      title: "Marketplace Safety",
      icon: MapPin,
      links: [
        { to: "/facebook-marketplace-stolen-check", label: "Facebook Marketplace" },
        { to: "/ebay-stolen-item-check", label: "eBay" },
        { to: "/craigslist-safety-verification", label: "Craigslist" },
        { to: "/offerup-verify-not-stolen", label: "OfferUp" },
        { to: "/stolen-check-chicago", label: "Chicago" },
        { to: "/stolen-check-los-angeles", label: "Los Angeles" },
      ]
    },
    {
      title: "For Business",
      icon: Building2,
      links: [
        { to: "/for-pawn-shops", label: "Pawn Shops" },
        { to: "/for-dealers", label: "Car Dealers" },
        { to: "/for-electronics-resellers", label: "Resellers" },
        { to: "/for-auction-houses", label: "Auction Houses" },
        { to: "/for-buyers", label: "Buyers" },
        { to: "/for-sellers", label: "Sellers" },
      ]
    },
    {
      title: "Resources",
      icon: BookOpen,
      links: [
        { to: "/how-to-check-serial-number", label: "Serial Number Guide" },
        { to: "/blog", label: "Blog" },
        { to: "/compare", label: "Compare Services" },
        { to: "/how-it-works", label: "How It Works" },
        { to: "/app", label: "Download App" },
        { to: "/faq", label: "FAQ" },
        { to: "/pricing", label: "Pricing" },
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
