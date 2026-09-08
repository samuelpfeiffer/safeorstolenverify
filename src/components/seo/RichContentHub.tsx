import { Link } from '@/lib/router-compat';
import { 
  Smartphone, 
  Car, 
  Laptop, 
  Wrench, 
  Bike, 
  ShoppingBag,
  Shield,
  TrendingUp,
  Users,
  BookOpen
} from 'lucide-react';

/**
 * Rich Content Hub - Deep content structure for AI and search discovery
 * All links verified to exist in AppRoutes
 */
export const RichContentHub = () => {
  const contentSections = [
    {
      title: "Buyer Protection Guides",
      icon: Shield,
      description: "Expert guides to protect yourself when buying secondhand",
      links: [
        { text: "Complete Verification Guide", url: "/blog/complete-verification-guide" },
        { text: "How to Check Phone is Stolen", url: "/blog/how-to-check-if-phone-stolen" },
        { text: "How to Check iPhone is Stolen", url: "/blog/how-to-check-if-iphone-stolen" },
        { text: "Complete VIN Guide", url: "/blog/complete-vin-guide" },
        { text: "Facebook Marketplace Safety", url: "/facebook-marketplace-stolen-check" },
        { text: "OfferUp Safety", url: "/offerup-verify-not-stolen" },
        { text: "Craigslist Safety", url: "/craigslist-safety-verification" },
        { text: "eBay Safety", url: "/ebay-stolen-item-check" }
      ]
    },
    {
      title: "Item-Specific Verification",
      icon: Smartphone,
      description: "Detailed verification guides for every type of item",
      links: [
        { text: "Phone IMEI Checker", url: "/imei-checker" },
        { text: "Check Phone", url: "/check-phone" },
        { text: "Check Laptop", url: "/check-laptop" },
        { text: "Check Electronics", url: "/check-electronics" },
        { text: "Check E-Bike", url: "/check-ebike" },
        { text: "Check Appliances", url: "/check-appliances" },
        { text: "Check Tools", url: "/check-tools" },
        { text: "Check Jewelry", url: "/check-jewelry" }
      ]
    },
    {
      title: "Vehicle Verification",
      icon: Car,
      description: "Comprehensive vehicle history and theft checking",
      links: [
        { text: "VIN Number Checker", url: "/vin-checker" },
        { text: "Check Car", url: "/check-car" },
        { text: "Check Boat", url: "/check-boat" },
        { text: "License Plate Lookup", url: "/license-plate-lookup" },
        { text: "California VIN Lookup", url: "/california-vin-lookup" },
        { text: "Texas VIN Lookup", url: "/texas-vin-lookup" },
        { text: "Florida VIN Lookup", url: "/florida-vin-lookup" },
        { text: "New York VIN Lookup", url: "/new-york-vin-lookup" }
      ]
    },
    {
      title: "Bikes & Sporting Goods",
      icon: Bike,
      description: "Bicycle and sports equipment verification",
      links: [
        { text: "Check Bike", url: "/check-bike" },
        { text: "Check E-Bike", url: "/check-ebike" },
        { text: "Serial Number Checker", url: "/serial-number-checker" },
        { text: "Bicycle Stolen Check Guide", url: "/blog/bicycle-stolen-serial-number-check" }
      ]
    },
    {
      title: "Marketplace Safety",
      icon: ShoppingBag,
      description: "Platform-specific safety guides and verification tips",
      links: [
        { text: "Facebook Marketplace", url: "/facebook-marketplace-stolen-check" },
        { text: "OfferUp Safety", url: "/offerup-verify-not-stolen" },
        { text: "Craigslist Safety", url: "/craigslist-safety-verification" },
        { text: "eBay Check", url: "/ebay-stolen-item-check" },
        { text: "Scammer Tactics Exposed", url: "/blog/scammer-tactics-exposed" },
        { text: "Verify Before Meetup", url: "/blog/verify-item-before-meetup" }
      ]
    },
    {
      title: "Business Solutions",
      icon: Users,
      description: "Enterprise verification for businesses",
      links: [
        { text: "For Pawn Shops", url: "/for-pawn-shops" },
        { text: "For Dealers", url: "/for-dealers" },
        { text: "For Marketplaces", url: "/for-marketplaces" },
        { text: "For Auction Houses", url: "/for-auction-houses" },
        { text: "For Businesses", url: "/for-businesses" },
        { text: "Pricing", url: "/pricing" }
      ]
    },
    {
      title: "Theft Prevention & Recovery",
      icon: TrendingUp,
      description: "Protect your items and recover stolen property",
      links: [
        { text: "Report Stolen Property", url: "/report-stolen" },
        { text: "Firearms Check", url: "/firearms-check" },
        { text: "Pawn Shop Verification Guide", url: "/blog/pawn-shop-stolen-item-verification" },
        { text: "Firearm Serial Verification", url: "/blog/firearm-serial-number-verification" }
      ]
    },
    {
      title: "Educational Resources",
      icon: BookOpen,
      description: "Learn about theft trends, statistics, and prevention",
      links: [
        { text: "2024 Theft Trends Report", url: "/blog/theft-trends-report-2024" },
        { text: "Verification Methodology", url: "/blog/verification-methodology" },
        { text: "Real User Stories", url: "/blog/real-user-stories" },
        { text: "Blog", url: "/blog" },
        { text: "FAQ", url: "/faq" },
        { text: "How It Works", url: "/how-it-works" }
      ]
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Complete Verification Resource Center
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to verify items, avoid scams, and buy safely.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contentSections.map((section, index) => (
            <div key={index} className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <section.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{section.title}</h3>
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                </div>
              </div>
              
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.url}
                      className="text-sm text-primary hover:underline block py-1"
                    >
                      → {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Ready to verify an item?
          </p>
          <Link
            to="/verify"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Start Verification Now
          </Link>
        </div>
      </div>
    </section>
  );
};
