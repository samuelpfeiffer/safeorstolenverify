import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  BookOpen, FileText, Video, Shield, AlertTriangle, 
  Smartphone, Car, HelpCircle, TrendingUp, Users
} from 'lucide-react';

const ResourceCenterPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SafeOrStolen Resource Center - Guides, Tips & Safety Information",
    "description": "Access comprehensive guides, tips, and resources for verifying items before buying. Learn how to protect yourself from stolen goods and marketplace scams.",
    "url": "https://safeorstolen.com/resource-center",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Buyer's Guides" },
        { "@type": "ListItem", "position": 2, "name": "Verification Tutorials" },
        { "@type": "ListItem", "position": 3, "name": "Safety Tips" },
        { "@type": "ListItem", "position": 4, "name": "Industry Reports" }
      ]
    }
  };

  const featuredGuides = [
    {
      icon: Smartphone,
      title: "Complete IMEI Verification Guide",
      description: "Learn everything about IMEI numbers, how to find them, and how to verify any phone isn't stolen.",
      link: "/blog/complete-imei-guide-protect-yourself",
      category: "Phones"
    },
    {
      icon: Car,
      title: "VIN Check Complete Guide",
      description: "Understand VIN numbers, decode vehicle history, and verify cars before purchase.",
      link: "/blog/complete-vin-guide",
      category: "Vehicles"
    },
    {
      icon: Shield,
      title: "Ultimate Marketplace Buyer's Guide",
      description: "Stay safe on Facebook Marketplace, Craigslist, OfferUp, and other platforms.",
      link: "/blog/ultimate-marketplace-buyers-guide",
      category: "Safety"
    },
    {
      icon: AlertTriangle,
      title: "Scammer Tactics Exposed",
      description: "Learn the latest scammer techniques and how to protect yourself from fraud.",
      link: "/blog/scammer-tactics-exposed",
      category: "Security"
    }
  ];

  const resourceCategories = [
    {
      title: "Phone Verification",
      icon: Smartphone,
      resources: [
        { title: "How to Check if Phone is Stolen", link: "/blog/how-to-check-if-phone-stolen" },
        { title: "iPhone IMEI Check Guide", link: "/blog/how-to-check-if-iphone-stolen" },
        { title: "IMEI Checker App Download", link: "/blog/imei-checker-app-download" },
        { title: "Phone Verification Step-by-Step", link: "/blog/phone-verification-guide" }
      ]
    },
    {
      title: "Vehicle Verification",
      icon: Car,
      resources: [
        { title: "Complete VIN Guide", link: "/blog/complete-vin-guide" },
        { title: "Carfax vs Free VIN Alternatives", link: "/blog/carfax-vs-free-vin-alternatives" },
        { title: "VIN Checker Tool", link: "/vin-checker" },
        { title: "License Plate Lookup", link: "/license-plate-lookup" }
      ]
    },
    {
      title: "Marketplace Safety",
      icon: Shield,
      resources: [
        { title: "Facebook Marketplace Scams", link: "/blog/facebook-marketplace-scams" },
        { title: "Verify Items Before Meetup", link: "/blog/verify-item-before-meetup" },
        { title: "Marketplace Buyer's Guide", link: "/blog/ultimate-marketplace-buyers-guide" },
        { title: "OfferUp Safety Verification", link: "/offerup-verify-not-stolen" }
      ]
    },
    {
      title: "Other Items",
      icon: FileText,
      resources: [
        { title: "Bicycle Serial Number Check", link: "/blog/bicycle-stolen-serial-number-check" },
        { title: "PS5 Stolen Check Guide", link: "/blog/ps5-stolen-check-guide" },
        { title: "Firearm Serial Verification", link: "/blog/firearm-serial-number-verification" },
        { title: "Electronics Verification", link: "/check-electronics" }
      ]
    }
  ];

  const quickLinks = [
    { title: "Start Verification", link: "/verify", icon: Shield },
    { title: "Download App", link: "/download", icon: Smartphone },
    { title: "View Pricing", link: "/pricing", icon: TrendingUp },
    { title: "FAQs", link: "/faq", icon: HelpCircle },
    { title: "How It Works", link: "/how-it-works", icon: BookOpen },
    { title: "Testimonials", link: "/testimonials", icon: Users }
  ];

  return (
    <>
      <PageSEO
        title="Resource Center - Guides & Safety Tips | SafeOrStolen"
        description="Access free guides, tutorials, and safety tips for verifying items before buying. Learn how to check IMEI, VIN, serial numbers and protect yourself from stolen goods."
        keywords="stolen item verification guide, imei check tutorial, vin lookup guide, marketplace safety tips, how to verify used items, buying guide secondhand"
        structuredData={structuredData}
      />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Resource Center
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Everything you need to know about verifying items, staying safe on marketplaces, 
                and protecting yourself from buying stolen goods.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <Link to="/blog">Browse All Articles</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/verify">Start Verifying</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Guides */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Featured Guides
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredGuides.map((guide, index) => (
                <Link key={index} to={guide.link} className="block">
                  <Card className="h-full hover:shadow-lg transition-all hover:border-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <guide.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <span className="text-xs font-medium text-primary uppercase tracking-wide">
                            {guide.category}
                          </span>
                          <h3 className="text-xl font-semibold text-foreground mt-1 mb-2">
                            {guide.title}
                          </h3>
                          <p className="text-muted-foreground">{guide.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Browse by Category
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resourceCategories.map((category, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <category.icon className="w-5 h-5 text-primary" />
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.resources.map((resource, rIndex) => (
                        <li key={rIndex}>
                          <Link 
                            to={resource.link} 
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {resource.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Quick Links
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickLinks.map((link, index) => (
                <Link key={index} to={link.link}>
                  <Card className="hover:border-primary transition-colors">
                    <CardContent className="p-4 text-center">
                      <link.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                      <span className="text-sm font-medium text-foreground">{link.title}</span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Video Resources */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Video className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Video Tutorials
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Watch our video guides on YouTube to learn how to verify items step-by-step.
              </p>
              <Button asChild>
                <Link to="/youtube">Watch on YouTube</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Verify an Item?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Put your knowledge to use. Get 2 free verifications when you sign up.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/verify">Start Free Verification</Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default ResourceCenterPage;
