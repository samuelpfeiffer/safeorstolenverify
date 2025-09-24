import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, Shield, Search, FileText, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
interface NavigationLink {
  href: string;
  text: string;
  description?: string;
  priority: 'high' | 'medium' | 'low';
}
export const SiteNavigationOptimizer: React.FC = () => {
  const location = useLocation();
  const primaryServices: NavigationLink[] = [{
    href: '/imei-check',
    text: 'IMEI Check - Verify Phone Not Stolen',
    description: 'Free iPhone, Android IMEI verification tool',
    priority: 'high'
  }, {
    href: '/vin-verification',
    text: 'VIN Check - Verify Car Not Stolen',
    description: 'Free vehicle VIN stolen verification',
    priority: 'high'
  }, {
    href: '/check-phone',
    text: 'Check if Phone is Stolen',
    description: 'Comprehensive phone theft verification',
    priority: 'high'
  }, {
    href: '/check-car',
    text: 'Check if Car is Stolen',
    description: 'Complete vehicle theft verification',
    priority: 'high'
  }, {
    href: '/serial-number-checker',
    text: 'Serial Number Checker',
    description: 'Verify electronics, laptops, devices',
    priority: 'medium'
  }, {
    href: '/stolen-item-checker',
    text: 'General Stolen Item Checker',
    description: 'All-in-one verification tool',
    priority: 'medium'
  }];
  const guidesAndResources: NavigationLink[] = [{
    href: '/how-to-check-if-item-stolen',
    text: 'How to Check if Items are Stolen',
    description: 'Complete guide to stolen goods verification',
    priority: 'high'
  }, {
    href: '/avoid-stolen-goods',
    text: 'How to Avoid Buying Stolen Goods',
    description: 'Essential marketplace safety tips',
    priority: 'high'
  }, {
    href: '/ultimate-guide-not-buying-stolen-goods',
    text: 'Ultimate Stolen Goods Prevention Guide',
    description: 'Comprehensive safety and verification guide',
    priority: 'medium'
  }, {
    href: '/stolen-goods-statistics-2024',
    text: '2025 Theft Trends & Statistics',
    description: 'Latest data on stolen goods and fraud',
    priority: 'medium'
  }, {
    href: '/faq',
    text: 'FAQ - Common Questions',
    description: 'Frequently asked questions about verification',
    priority: 'medium'
  }];
  const businessSolutions: NavigationLink[] = [{
    href: '/enterprise-demo',
    text: 'Enterprise Verification Solutions',
    description: 'Business API and bulk verification tools',
    priority: 'medium'
  }, {
    href: '/marketplace-integration',
    text: 'Marketplace Integration',
    description: 'Integrate verification into your platform',
    priority: 'medium'
  }, {
    href: '/api-docs',
    text: 'API Documentation',
    description: 'Developer resources and integration guides',
    priority: 'low'
  }, {
    href: '/pricing',
    text: 'Pricing Plans',
    description: 'Free and premium verification options',
    priority: 'medium'
  }];
  const getCurrentSection = () => {
    const path = location.pathname;
    if (path.includes('check') || path.includes('imei') || path.includes('vin') || path.includes('serial')) {
      return 'verification';
    }
    if (path.includes('guide') || path.includes('how-to') || path.includes('avoid') || path.includes('faq')) {
      return 'guides';
    }
    if (path.includes('enterprise') || path.includes('api') || path.includes('pricing') || path.includes('marketplace')) {
      return 'business';
    }
    return 'home';
  };
  const currentSection = getCurrentSection();

  // Generate contextual internal links based on current page
  const getContextualLinks = (): NavigationLink[] => {
    switch (currentSection) {
      case 'verification':
        return [...primaryServices.filter(link => !location.pathname.includes(link.href.split('/')[1])), ...guidesAndResources.slice(0, 2)];
      case 'guides':
        return [...guidesAndResources.filter(link => !location.pathname.includes(link.href.split('/')[1])), ...primaryServices.slice(0, 3)];
      case 'business':
        return [...businessSolutions.filter(link => !location.pathname.includes(link.href.split('/')[1])), ...primaryServices.slice(0, 2)];
      default:
        return [...primaryServices.slice(0, 4), ...guidesAndResources.slice(0, 2)];
    }
  };
  const contextualLinks = getContextualLinks();

  // Create navigation schema for SEO
  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "SafeOrStolen Navigation",
    "url": "https://safeorstolen.com",
    "hasPart": [...primaryServices.map(link => ({
      "@type": "WebPage",
      "name": link.text,
      "description": link.description,
      "url": `https://safeorstolen.com${link.href}`
    })), ...guidesAndResources.map(link => ({
      "@type": "WebPage",
      "name": link.text,
      "description": link.description,
      "url": `https://safeorstolen.com${link.href}`
    }))]
  };
  return <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(navigationSchema)}
        </script>
      </Helmet>

      {/* Main Navigation Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Verify Any Item Before You Buy Or Sell</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Comprehensive verification tools and guides to protect you from legal risks, stolen goods, and marketplace fraud</p>
          </div>

          {/* Primary Verification Services */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              Verification Tools
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {primaryServices.map((link, index) => <Card key={index} className="hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <h4 className="font-semibold mb-2">
                      <Link to={link.href} className="text-primary hover:text-primary/80 transition-colors">
                        {link.text}
                      </Link>
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">{link.description}</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to={link.href}>
                        <Search className="h-4 w-4 mr-2" />
                        Start Check
                      </Link>
                    </Button>
                  </div>
                </Card>)}
            </div>
          </div>

          {/* Safety Guides */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              Safety Guides & Resources
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guidesAndResources.map((link, index) => <Card key={index} className="hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <h4 className="font-semibold mb-2">
                      <Link to={link.href} className="text-primary hover:text-primary/80 transition-colors">
                        {link.text}
                      </Link>
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">{link.description}</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link to={link.href}>
                        <FileText className="h-4 w-4 mr-2" />
                        Read Guide
                      </Link>
                    </Button>
                  </div>
                </Card>)}
            </div>
          </div>

          {/* Business Solutions */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              Business Solutions
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {businessSolutions.map((link, index) => <Card key={index} className="hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <h4 className="font-semibold mb-2">
                      <Link to={link.href} className="text-primary hover:text-primary/80 transition-colors">
                        {link.text}
                      </Link>
                    </h4>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </div>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Contextual Recommendations */}
      {contextualLinks.length > 0 && <section className="py-12 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-2">Related Services & Guides</h3>
              <p className="text-muted-foreground">
                Based on your current page, you might also be interested in:
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {contextualLinks.slice(0, 6).map((link, index) => <Link key={index} to={link.href} className="block p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border">
                  <div className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-primary" />
                    <span className="font-medium text-sm">{link.text}</span>
                  </div>
                </Link>)}
            </div>
          </div>
        </section>}
    </>;
};