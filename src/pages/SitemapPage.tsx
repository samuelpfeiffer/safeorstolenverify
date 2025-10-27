import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Search, 
  FileText, 
  Building2, 
  Users, 
  BookOpen,
  Settings,
  Smartphone,
  Globe,
  TrendingUp
} from 'lucide-react';

interface SitemapSection {
  title: string;
  icon: typeof Shield;
  color: string;
  links: { path: string; label: string; priority: 'high' | 'medium' | 'low' }[];
}

export default function SitemapPage() {
  const sections: SitemapSection[] = [
    {
      title: 'Core Verification Services',
      icon: Shield,
      color: 'text-primary',
      links: [
        { path: '/', label: 'Homepage', priority: 'high' },
        { path: '/stolen-item-checker', label: 'Stolen Item Checker', priority: 'high' },
        { path: '/imei-check', label: 'IMEI Verification', priority: 'high' },
        { path: '/vin-verification', label: 'VIN Verification', priority: 'high' },
        { path: '/serial-number-checker', label: 'Serial Number Checker', priority: 'high' },
        { path: '/verify', label: 'Unified Verification', priority: 'high' },
        { path: '/real-time-verification', label: 'Real-Time Verification', priority: 'medium' },
        { path: '/firearms-check', label: 'Firearms Verification', priority: 'medium' },
      ]
    },
    {
      title: 'Item-Specific Checks',
      icon: Search,
      color: 'text-blue-600',
      links: [
        { path: '/check-phone', label: 'Phone Verification', priority: 'high' },
        { path: '/check-car', label: 'Vehicle Verification', priority: 'high' },
        { path: '/check-electronics', label: 'Electronics Verification', priority: 'high' },
        { path: '/check-bike', label: 'Bicycle Verification', priority: 'medium' },
        { path: '/item-categories', label: 'All Item Categories', priority: 'medium' },
      ]
    },
    {
      title: 'Regional Services',
      icon: Globe,
      color: 'text-green-600',
      links: [
        { path: '/arizona-license-plate-lookup', label: 'Arizona License Plate Lookup', priority: 'medium' },
        { path: '/arizona-vin-lookup', label: 'Arizona VIN Lookup', priority: 'medium' },
        { path: '/local-seo', label: 'Local Services', priority: 'low' },
      ]
    },
    {
      title: 'Guides & Resources',
      icon: BookOpen,
      color: 'text-purple-600',
      links: [
        { path: '/blog', label: 'Blog', priority: 'high' },
        { path: '/how-it-works', label: 'How It Works', priority: 'high' },
        { path: '/how-it-works-detailed', label: 'Detailed Process', priority: 'medium' },
        { path: '/ultimate-guide', label: 'Ultimate Verification Guide', priority: 'high' },
        { path: '/ultimate-guide-buying-safely', label: 'Safe Buying Guide', priority: 'high' },
        { path: '/guides/how-to-check-stolen-items', label: 'How to Check Stolen Items', priority: 'medium' },
        { path: '/guides/imei-blacklist-explained', label: 'IMEI Blacklist Explained', priority: 'medium' },
        { path: '/how-to-check-if-item-stolen', label: 'Item Verification Process', priority: 'medium' },
        { path: '/how-to-check-anything-stolen', label: 'Universal Check Guide', priority: 'medium' },
        { path: '/how-to-check-laptop-stolen', label: 'Laptop Verification', priority: 'medium' },
        { path: '/buy-used-electronics-safely', label: 'Buying Used Electronics', priority: 'medium' },
        { path: '/avoid-stolen-goods', label: 'Avoiding Stolen Goods', priority: 'medium' },
        { path: '/buyer-guide', label: 'Buyer\'s Guide', priority: 'medium' },
        { path: '/seller-guide', label: 'Seller\'s Guide', priority: 'medium' },
        { path: '/comprehensive-guide', label: 'Comprehensive Guide', priority: 'low' },
        { path: '/resource-center', label: 'Resource Center', priority: 'medium' },
        { path: '/faq', label: 'FAQ', priority: 'high' },
      ]
    },
    {
      title: 'Business Solutions',
      icon: Building2,
      color: 'text-orange-600',
      links: [
        { path: '/for-brands', label: 'For Brands', priority: 'high' },
        { path: '/for-consumers', label: 'For Consumers', priority: 'high' },
        { path: '/marketplace-integration', label: 'Marketplace Integration', priority: 'high' },
        { path: '/enterprise-demo', label: 'Enterprise Demo', priority: 'medium' },
        { path: '/auction-houses', label: 'For Auction Houses', priority: 'medium' },
        { path: '/pawn-shops', label: 'For Pawn Shops', priority: 'medium' },
        { path: '/api-docs', label: 'API Documentation', priority: 'high' },
        { path: '/developer-portal', label: 'Developer Portal', priority: 'medium' },
        { path: '/integrations', label: 'Integrations', priority: 'medium' },
        { path: '/partnerships', label: 'Partnerships', priority: 'low' },
      ]
    },
    {
      title: 'Company Information',
      icon: Users,
      color: 'text-red-600',
      links: [
        { path: '/about', label: 'About Us', priority: 'high' },
        { path: '/our-story', label: 'Our Story', priority: 'medium' },
        { path: '/our-mission', label: 'Our Mission', priority: 'medium' },
        { path: '/our-team', label: 'Our Team', priority: 'medium' },
        { path: '/about-problem', label: 'The Problem We Solve', priority: 'low' },
        { path: '/contact', label: 'Contact Us', priority: 'high' },
        { path: '/press', label: 'Press & Media', priority: 'medium' },
        { path: '/services', label: 'Our Services', priority: 'high' },
        { path: '/features', label: 'Features', priority: 'high' },
      ]
    },
    {
      title: 'Trust & Transparency',
      icon: FileText,
      color: 'text-indigo-600',
      links: [
        { path: '/trust-verification', label: 'Trust & Verification', priority: 'medium' },
        { path: '/data-sources', label: 'Our Data Sources', priority: 'medium' },
        { path: '/transparency', label: 'Transparency', priority: 'medium' },
        { path: '/accuracy', label: 'Accuracy Information', priority: 'medium' },
        { path: '/case-studies', label: 'Case Studies', priority: 'medium' },
        { path: '/database', label: 'Database Information', priority: 'low' },
        { path: '/stolen-items-database', label: 'Stolen Items Database', priority: 'medium' },
        { path: '/statistics', label: 'Statistics', priority: 'medium' },
        { path: '/stolen-goods-statistics', label: 'Theft Statistics', priority: 'low' },
      ]
    },
    {
      title: 'User Account',
      icon: Settings,
      color: 'text-cyan-600',
      links: [
        { path: '/auth', label: 'Sign In / Sign Up', priority: 'high' },
        { path: '/dashboard', label: 'Dashboard', priority: 'high' },
        { path: '/profile', label: 'Profile', priority: 'medium' },
        { path: '/search-history', label: 'Search History', priority: 'medium' },
        { path: '/receipts', label: 'Receipts', priority: 'medium' },
        { path: '/purchase-history', label: 'Purchase History', priority: 'medium' },
        { path: '/security-settings', label: 'Security Settings', priority: 'medium' },
        { path: '/subscriptions', label: 'Subscription Plans', priority: 'high' },
        { path: '/pricing', label: 'Pricing', priority: 'high' },
      ]
    },
    {
      title: 'Mobile & Apps',
      icon: Smartphone,
      color: 'text-pink-600',
      links: [
        { path: '/mobile-app', label: 'Mobile App', priority: 'high' },
        { path: '/app-download', label: 'Download App', priority: 'high' },
        { path: '/ios-app', label: 'iOS App', priority: 'medium' },
        { path: '/android-app', label: 'Android App', priority: 'medium' },
      ]
    },
    {
      title: 'Comparisons & Alternatives',
      icon: TrendingUp,
      color: 'text-yellow-600',
      links: [
        { path: '/vs-checkmend', label: 'vs CheckMend', priority: 'medium' },
        { path: '/comparison-checkmend', label: 'CheckMend Comparison', priority: 'low' },
      ]
    },
    {
      title: 'Legal & Policies',
      icon: FileText,
      color: 'text-gray-600',
      links: [
        { path: '/terms', label: 'Terms & Conditions', priority: 'high' },
        { path: '/terms-of-service', label: 'Terms (Detailed)', priority: 'medium' },
        { path: '/privacy', label: 'Privacy Policy', priority: 'high' },
        { path: '/privacy-policy', label: 'Privacy (Detailed)', priority: 'medium' },
        { path: '/cookies', label: 'Cookie Policy', priority: 'low' },
        { path: '/refunds', label: 'Refund Policy', priority: 'medium' },
      ]
    },
  ];

  const totalPages = sections.reduce((sum, section) => sum + section.links.length, 0);

  return (
    <>
      <Helmet>
        <title>Complete Sitemap - Safe or Stolen | All Pages & Services</title>
        <meta 
          name="description" 
          content={`Browse our complete sitemap with ${totalPages}+ pages including verification services, guides, business solutions, and resources for checking stolen items.`}
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://safeorstolen.com/sitemap" />
      </Helmet>

      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Complete Sitemap
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Navigate all {totalPages}+ pages of Safe or Stolen - from verification services to comprehensive guides
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{totalPages}+</div>
                  <div className="text-sm text-muted-foreground">Total Pages</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{sections.length}</div>
                  <div className="text-sm text-muted-foreground">Categories</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    {sections.flatMap(s => s.links).filter(l => l.priority === 'high').length}
                  </div>
                  <div className="text-sm text-muted-foreground">Core Pages</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Availability</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sitemap Sections */}
          <div className="space-y-8">
            {sections.map((section, idx) => {
              const Icon = section.icon;
              return (
                <Card key={idx}>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-6">
                      <Icon className={`h-6 w-6 ${section.color}`} />
                      <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
                      <Badge variant="secondary" className="ml-auto">
                        {section.links.length} pages
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {section.links.map((link, linkIdx) => (
                        <Link
                          key={linkIdx}
                          to={link.path}
                          className="group p-3 rounded-lg border border-border hover:border-primary transition-all hover:bg-primary/5"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-foreground group-hover:text-primary transition-colors">
                              {link.label}
                            </span>
                            <Badge
                              variant={
                                link.priority === 'high' 
                                  ? 'default' 
                                  : link.priority === 'medium' 
                                  ? 'secondary' 
                                  : 'outline'
                              }
                              className="text-xs"
                            >
                              {link.priority}
                            </Badge>
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {link.path}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Info */}
          <Card className="mt-12 border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Need Help Finding Something?</h3>
                <p className="text-muted-foreground mb-4">
                  Use our search feature or contact support for assistance
                </p>
                <div className="flex gap-4 justify-center">
                  <Link to="/contact">
                    <Badge className="px-4 py-2 cursor-pointer hover:bg-primary/90">
                      Contact Support
                    </Badge>
                  </Link>
                  <Link to="/">
                    <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:bg-secondary">
                      Back to Home
                    </Badge>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* SEO Note */}
          <div className="text-center mt-8 text-sm text-muted-foreground">
            <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            <p className="mt-2">All pages are actively maintained and optimized for search engines</p>
          </div>
        </div>
      </div>
    </>
  );
}
