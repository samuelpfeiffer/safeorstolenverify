import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { AISearchOptimizer } from '@/components/seo/AISearchOptimizer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Video, FileText, Lightbulb, Shield, Users, TrendingUp, Globe } from 'lucide-react';

export default function EducationalContentHub() {
  const navigate = useNavigate();

  const contentCategories = [
    {
      title: "Buyer Protection Guides",
      icon: Shield,
      description: "Learn how to safely buy secondhand items and avoid scams",
      articles: [
        { title: "Complete Guide: How to Avoid Buying Stolen Items", url: "/guides/avoid-buying-stolen" },
        { title: "IMEI Check: What It Is & Why You Need It", url: "/guides/imei-blacklist-explained" },
        { title: "VIN Verification for Used Car Buyers", url: "/guides/vin-verification-guide" },
        { title: "Facebook Marketplace Safety Tips", url: "/guides/facebook-marketplace-safety" },
        { title: "How to Verify Items on Craigslist", url: "/guides/craigslist-verification" }
      ]
    },
    {
      title: "Seller Best Practices",
      icon: Users,
      description: "Protect your reputation and prove your items aren't stolen",
      articles: [
        { title: "How to Prove Your Item Isn't Stolen", url: "/guides/seller-verification" },
        { title: "Increase Buyer Trust on Marketplaces", url: "/guides/build-marketplace-trust" },
        { title: "Documentation Needed for Secondhand Sales", url: "/guides/seller-documentation" },
        { title: "Handling Suspicious Buyers", url: "/guides/suspicious-buyers" }
      ]
    },
    {
      title: "Industry Reports & Statistics",
      icon: TrendingUp,
      description: "Data-driven insights on theft trends and fraud prevention",
      articles: [
        { title: "2025 Global Theft Statistics Report", url: "/reports/theft-statistics-2025" },
        { title: "Phone Theft Trends by City", url: "/reports/phone-theft-trends" },
        { title: "Vehicle Theft Hot Spots Worldwide", url: "/reports/vehicle-theft-hotspots" },
        { title: "Marketplace Fraud Analysis", url: "/reports/marketplace-fraud-analysis" }
      ]
    },
    {
      title: "How Law Enforcement Uses SafeOrStolen",
      icon: Globe,
      description: "Case studies and partnerships with police departments globally",
      articles: [
        { title: "Police Partnership Program Overview", url: "/law-enforcement/partnerships" },
        { title: "Case Study: Mumbai Police Success Stories", url: "/case-studies/mumbai-police" },
        { title: "How SafeOrStolen Helps Recover Stolen Items", url: "/guides/recovery-process" },
        { title: "International Crime Prevention Initiative", url: "/about/crime-prevention" }
      ]
    }
  ];

  const videoContent = [
    { title: "How to Check if a Phone is Stolen (2 minutes)", views: "1.2M", url: "/videos/phone-check-tutorial" },
    { title: "VIN Verification Step-by-Step", views: "850K", url: "/videos/vin-verification-tutorial" },
    { title: "Marketplace Safety: Red Flags to Watch", views: "640K", url: "/videos/marketplace-red-flags" },
    { title: "What Happens When You Buy Stolen Property?", views: "580K", url: "/videos/legal-consequences" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "SafeOrStolen Education Center",
    "description": "Comprehensive guides, reports, and video tutorials on preventing theft, avoiding scams, and safely buying/selling secondhand goods worldwide",
    "url": "https://safeorstolen.com/education"
  };

  return (
    <>
      <PageSEO
        title="Education Center - Learn About Stolen Item Verification | SafeOrStolen"
        description="Free guides, video tutorials, industry reports, and case studies on preventing theft, avoiding stolen goods, and safely buying/selling secondhand items. Learn from experts and law enforcement partnerships."
        keywords="stolen goods education, theft prevention guide, IMEI verification tutorial, VIN check guide, marketplace safety, secondhand buying tips, fraud prevention education"
        canonical="/education"
        structuredData={structuredData}
      />
      <AISearchOptimizer
        page="education"
        primaryKeywords={["stolen goods prevention", "secondhand buying guide", "theft prevention education"]}
      />

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Hero */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
            <BookOpen className="h-12 w-12 text-primary" />
          </div>
          <h1 className="text-5xl font-bold mb-4">
            SafeOrStolen Education Center
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about buying and selling secondhand items safely, avoiding stolen goods, and fighting fraud worldwide.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="p-6 text-center">
            <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-3xl font-bold">50+</div>
            <div className="text-sm text-muted-foreground">Guides & Articles</div>
          </Card>
          <Card className="p-6 text-center">
            <Video className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-3xl font-bold">25+</div>
            <div className="text-sm text-muted-foreground">Video Tutorials</div>
          </Card>
          <Card className="p-6 text-center">
            <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-3xl font-bold">12</div>
            <div className="text-sm text-muted-foreground">Industry Reports</div>
          </Card>
          <Card className="p-6 text-center">
            <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-3xl font-bold">5M+</div>
            <div className="text-sm text-muted-foreground">Readers Educated</div>
          </Card>
        </div>

        {/* Content Categories */}
        <div className="space-y-8 mb-12">
          {contentCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {category.articles.map((article, articleIndex) => (
                    <Button
                      key={articleIndex}
                      variant="outline"
                      className="justify-start h-auto py-3 px-4 text-left"
                      onClick={() => navigate(article.url)}
                    >
                      <Lightbulb className="h-4 w-4 mr-2 flex-shrink-0 text-primary" />
                      <span className="flex-1">{article.title}</span>
                    </Button>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Video Tutorials */}
        <Card className="p-8 mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Video className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Popular Video Tutorials</h2>
              <p className="text-muted-foreground">Quick visual guides to help you verify items safely</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {videoContent.map((video, index) => (
              <Card key={index} className="p-4 hover:border-primary cursor-pointer transition-colors">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-red-100 dark:bg-red-950 rounded">
                    <Video className="h-6 w-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{video.title}</h3>
                    <p className="text-sm text-muted-foreground">{video.views} views</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>

        {/* Popular Topics */}
        <Card className="p-8 mb-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
          <h2 className="text-2xl font-bold mb-6 text-center">Most Searched Topics</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "How to check if phone is stolen",
              "IMEI blacklist check free",
              "VIN verification guide",
              "Facebook Marketplace scams",
              "Legal consequences buying stolen",
              "How to report stolen item",
              "Used car buying checklist",
              "Phone theft prevention tips",
              "Marketplace seller red flags",
              "Insurance claim verification"
            ].map((topic, index) => (
              <Button key={index} variant="secondary" size="sm">
                {topic}
              </Button>
            ))}
          </div>
        </Card>

        {/* Newsletter Signup */}
        <Card className="p-8 text-center bg-gradient-to-br from-primary/10 to-primary/5">
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="text-lg mb-6">
            Get monthly updates on theft trends, new guides, and safety tips delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border"
              />
              <Button size="lg">Subscribe</Button>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Join 50,000+ subscribers. Unsubscribe anytime.
            </p>
          </div>
        </Card>
      </div>
    </>
  );
}
