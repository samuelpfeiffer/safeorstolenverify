import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSafeLocation } from "@/hooks/useSafeLocation";
import { StatusCodeHandler } from "@/components/seo/StatusCodeHandler";
import { PageSEO } from "@/components/seo/PageSEO";
import { Helmet } from "react-helmet-async";
import { Search, Smartphone, Car, FileText, Shield, Home, Bike, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const NotFound = () => {
  const location = useSafeLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (location) {
      console.error(
        "404 Error: User attempted to access non-existent route:",
        location.pathname
      );
    }
  }, [location?.pathname]);

  // Force the static index.html robots tag to noindex so crawlers never see a stale "index, follow"
  useEffect(() => {
    document
      .querySelectorAll('meta[name="robots"]:not([data-rh])')
      .forEach((el) => el.setAttribute('content', 'noindex, nofollow'));
  }, []);



  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/verify?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const popularPages = [
    { name: 'IMEI Checker', href: '/imei-checker', icon: Smartphone, desc: 'Verify phones' },
    { name: 'VIN Checker', href: '/vin-checker', icon: Car, desc: 'Verify vehicles' },
    { name: 'License Plate Lookup', href: '/license-plate-lookup', icon: MapPin, desc: 'Check any plate' },
    { name: 'Check Bicycle', href: '/check-bike', icon: Bike, desc: 'Bike serial lookup' },
    { name: 'Firearms Check', href: '/firearms-check', icon: Shield, desc: 'Gun verification' },
    { name: 'Serial Number Checker', href: '/serial-number-checker', icon: FileText, desc: 'Electronics & more' },
  ];

  const helpfulLinks = [
    { name: 'Home', href: '/' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Download App', href: '/app' },
    { name: 'Contact', href: '/about' },
    { name: 'Sitemap', href: '/sitemap' },
  ];

  return (
    <>
      <StatusCodeHandler statusCode={404} noIndex={true} />
      <PageSEO
        title="Page Not Found | SafeOrStolen"
        description="This page doesn't exist. Verify phones, vehicles, license plates, serial numbers, firearms and bicycles at SafeOrStolen."
        noIndex={true}
      />
      {/* Overrides the static <meta name="prerender-status-code" content="200"> in index.html */}
      <Helmet>
        <meta name="prerender-status-code" content="404" />
        <meta name="prerender-header" content="Cache-Control: no-cache, no-store" />
      </Helmet>

      
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            {/* Main 404 Message */}
            <div className="text-center mb-12">
              <h1 className="text-7xl md:text-9xl font-bold text-primary/20 mb-4">404</h1>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
                The page you're looking for doesn't exist or has been moved. 
                Let's help you find what you need.
              </p>

              {/* Search Form */}
              <Card className="max-w-xl mx-auto">
                <CardContent className="pt-6">
                  <form onSubmit={handleSearch} className="space-y-4">
                    <p className="text-sm font-medium mb-2">Verify an item instead:</p>
                    <div className="flex gap-2">
                      <Input
                        type="text"
                        placeholder="Enter IMEI, VIN, or serial number..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-1"
                      />
                      <Button type="submit">
                        <Search className="h-4 w-4 mr-2" />
                        Search
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Popular Verification Tools */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-center mb-6">Popular Verification Tools</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {popularPages.map((page) => (
                  <Link
                    key={page.href}
                    to={page.href}
                    className="group"
                  >
                    <Card className="h-full transition-all hover:border-primary/50 hover:shadow-md">
                      <CardContent className="pt-6 text-center">
                        <page.icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                        <p className="font-medium mb-1">{page.name}</p>
                        <p className="text-sm text-muted-foreground">{page.desc}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center mb-12">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {helpfulLinks.map((link) => (
                  <Button key={link.href} asChild variant="outline" size="sm">
                    <Link to={link.href}>{link.name}</Link>
                  </Button>
                ))}
              </div>
            </div>

            {/* Return Home CTA */}
            <div className="text-center">
              <Button asChild size="lg">
                <Link to="/">
                  <Home className="h-4 w-4 mr-2" />
                  Return to Homepage
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
