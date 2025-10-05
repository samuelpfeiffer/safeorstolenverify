import { Link } from 'react-router-dom';
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
  BookOpen,
  Video,
  FileText
} from 'lucide-react';

/**
 * Rich Content Hub - Deep content structure for AI and search discovery
 * Implements topical authority with comprehensive guides and resources
 */
export const RichContentHub = () => {
  const contentSections = [
    {
      title: "Buyer Protection Guides",
      icon: Shield,
      description: "Expert guides to protect yourself when buying secondhand",
      links: [
        { text: "Complete Buyer's Guide 2025", url: "/guides/buyer" },
        { text: "How to Check Phone is Stolen", url: "/how-to-check-if-phone-is-stolen" },
        { text: "Verify Stolen Laptop Guide", url: "/how-to-check-if-laptop-is-stolen" },
        { text: "Car VIN Verification Guide", url: "/how-to-verify-car-vin" },
        { text: "Facebook Marketplace Safety", url: "/guides/facebook-marketplace" },
        { text: "OfferUp Scam Prevention", url: "/guides/offerup-safety" },
        { text: "Craigslist Buying Safety Tips", url: "/guides/craigslist-safety" },
        { text: "eBay Verification Checklist", url: "/guides/ebay-verification" }
      ]
    },
    {
      title: "Item-Specific Verification",
      icon: Smartphone,
      description: "Detailed verification guides for every type of item",
      links: [
        { text: "Phone IMEI Lookup Guide", url: "/verify/phones" },
        { text: "iPhone Stolen Check", url: "/verify/iphone" },
        { text: "Android Phone Verification", url: "/verify/android" },
        { text: "Samsung Phone IMEI Check", url: "/verify/samsung" },
        { text: "Laptop Serial Number Lookup", url: "/verify/laptops" },
        { text: "MacBook Verification", url: "/verify/macbook" },
        { text: "iPad Stolen Check", url: "/verify/ipad" },
        { text: "Camera Serial Check", url: "/verify/cameras" }
      ]
    },
    {
      title: "Vehicle Verification",
      icon: Car,
      description: "Comprehensive vehicle history and theft checking",
      links: [
        { text: "VIN Number Lookup", url: "/verify/vin" },
        { text: "Used Car Buying Guide", url: "/guides/buy-used-car" },
        { text: "Motorcycle VIN Check", url: "/verify/motorcycle" },
        { text: "RV & Trailer Verification", url: "/verify/rv-trailer" },
        { text: "Boat Hull ID Lookup", url: "/verify/boats" },
        { text: "ATV Stolen Check", url: "/verify/atv" },
        { text: "Truck VIN Verification", url: "/guides/truck-vin" },
        { text: "Classic Car Verification", url: "/guides/classic-car" }
      ]
    },
    {
      title: "Tools & Equipment",
      icon: Wrench,
      description: "Verify power tools, equipment, and professional gear",
      links: [
        { text: "Power Tools Serial Check", url: "/verify/power-tools" },
        { text: "DeWalt Tool Verification", url: "/verify/dewalt" },
        { text: "Milwaukee Tools Check", url: "/verify/milwaukee" },
        { text: "Makita Serial Lookup", url: "/verify/makita" },
        { text: "Construction Equipment", url: "/verify/construction" },
        { text: "Professional Camera Gear", url: "/verify/camera-gear" },
        { text: "Music Instruments Check", url: "/verify/instruments" },
        { text: "Garden Equipment Verification", url: "/verify/garden-tools" }
      ]
    },
    {
      title: "Bikes & Sporting Goods",
      icon: Bike,
      description: "Bicycle and sports equipment verification",
      links: [
        { text: "Bike Serial Number Check", url: "/verify/bikes" },
        { text: "E-Bike Verification", url: "/verify/ebikes" },
        { text: "Mountain Bike Lookup", url: "/verify/mountain-bikes" },
        { text: "Road Bike Verification", url: "/verify/road-bikes" },
        { text: "Golf Club Serial Check", url: "/verify/golf" },
        { text: "Ski Equipment Verification", url: "/verify/ski-equipment" },
        { text: "Surfboard Serial Check", url: "/verify/surfboards" },
        { text: "Fishing Gear Lookup", url: "/verify/fishing" }
      ]
    },
    {
      title: "Marketplace Safety",
      icon: ShoppingBag,
      description: "Platform-specific safety guides and verification tips",
      links: [
        { text: "Facebook Marketplace Verification", url: "/marketplace/facebook" },
        { text: "OfferUp Safety Guide", url: "/marketplace/offerup" },
        { text: "Craigslist Scam Prevention", url: "/marketplace/craigslist" },
        { text: "eBay Buyer Protection", url: "/marketplace/ebay" },
        { text: "Mercari Verification Tips", url: "/marketplace/mercari" },
        { text: "Letgo Safety Checklist", url: "/marketplace/letgo" },
        { text: "Poshmark Authentication", url: "/marketplace/poshmark" },
        { text: "Local Classifieds Safety", url: "/marketplace/local" }
      ]
    },
    {
      title: "Theft Prevention & Recovery",
      icon: TrendingUp,
      description: "Protect your items and recover stolen property",
      links: [
        { text: "How to Register Your Items", url: "/prevention/register" },
        { text: "Report Stolen Property", url: "/report-stolen" },
        { text: "Theft Prevention Tips", url: "/prevention/tips" },
        { text: "Home Security Guide", url: "/prevention/home-security" },
        { text: "Car Theft Prevention", url: "/prevention/car-theft" },
        { text: "Phone Loss Prevention", url: "/prevention/phone-security" },
        { text: "Recovery Success Stories", url: "/community" },
        { text: "Insurance Claim Guide", url: "/guides/insurance-claims" }
      ]
    },
    {
      title: "For Sellers",
      icon: Users,
      description: "Build trust and sell faster with verification",
      links: [
        { text: "Seller's Verification Guide", url: "/guides/seller" },
        { text: "Get Verification Certificate", url: "/seller/certificate" },
        { text: "Increase Sales with Verification", url: "/seller/benefits" },
        { text: "Prove Item Legitimacy", url: "/seller/prove-legitimacy" },
        { text: "Protect Against False Claims", url: "/seller/protection" },
        { text: "Seller Best Practices", url: "/seller/best-practices" },
        { text: "Marketplace Seller Tips", url: "/seller/marketplace-tips" },
        { text: "Business Seller Program", url: "/business" }
      ]
    },
    {
      title: "Educational Resources",
      icon: BookOpen,
      description: "Learn about theft trends, statistics, and prevention",
      links: [
        { text: "2025 Theft Trends Report", url: "/blog/theft-trends" },
        { text: "Most Stolen Items by State", url: "/statistics/by-state" },
        { text: "Phone Theft Statistics", url: "/statistics/phone-theft" },
        { text: "Car Theft Hotspots", url: "/statistics/car-theft" },
        { text: "Pawn Shop Verification", url: "/guides/pawn-shops" },
        { text: "Serial Number Database", url: "/database" },
        { text: "Theft Prevention Blog", url: "/blog" },
        { text: "Security News & Updates", url: "/news" }
      ]
    },
    {
      title: "Video Tutorials",
      icon: Video,
      description: "Step-by-step video guides for verification",
      links: [
        { text: "How to Find IMEI Number", url: "/videos/find-imei" },
        { text: "VIN Number Location Guide", url: "/videos/find-vin" },
        { text: "Serial Number Lookup Demo", url: "/videos/serial-lookup" },
        { text: "Mobile App Tutorial", url: "/videos/app-tutorial" },
        { text: "Barcode Scanner Guide", url: "/videos/barcode-scanner" },
        { text: "Facebook Marketplace Tips", url: "/videos/facebook-safety" },
        { text: "Spotting Fake Listings", url: "/videos/spot-fakes" },
        { text: "Police Report Filing", url: "/videos/police-report" }
      ]
    },
    {
      title: "Legal & Documentation",
      icon: FileText,
      description: "Legal guides and documentation resources",
      links: [
        { text: "Buyer Legal Rights", url: "/legal/buyer-rights" },
        { text: "What If I Bought Stolen Goods", url: "/legal/bought-stolen" },
        { text: "Police Cooperation Guide", url: "/legal/police" },
        { text: "Insurance Documentation", url: "/legal/insurance" },
        { text: "Dispute Resolution", url: "/legal/disputes" },
        { text: "Terms of Service", url: "/terms" },
        { text: "Privacy Policy", url: "/privacy" },
        { text: "Service Limitations", url: "/service-limitations" }
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
            Everything you need to verify items, avoid scams, and buy safely. Over 150+ guides, tutorials, and resources.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            Looking for something specific? Use our comprehensive search
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Search All Resources
          </Link>
        </div>
      </div>
    </section>
  );
};
