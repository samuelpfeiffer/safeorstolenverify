import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { AISearchOptimizer } from '@/components/seo/AISearchOptimizer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Globe, Shield, Users, TrendingDown, MapPin, Heart, Building, CheckCircle } from 'lucide-react';

export default function GlobalMissionPage() {
  const navigate = useNavigate();

  const globalImpact = [
    { region: "North America", verified: "12M+", prevented: "$480M", partners: "2,300+" },
    { region: "Europe", verified: "8M+", prevented: "$320M", partners: "1,800+" },
    { region: "Asia Pacific", verified: "15M+", prevented: "$600M", partners: "3,500+" },
    { region: "Latin America", verified: "6M+", prevented: "$240M", partners: "1,200+" },
    { region: "Africa", verified: "3M+", prevented: "$120M", partners: "600+" },
    { region: "Middle East", verified: "2M+", prevented: "$80M", partners: "400+" }
  ];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SafeOrStolen",
      "description": "Global mission to reduce crime worldwide through international stolen goods verification database",
      "url": "https://safeorstolen.com",
      "mission": "Reduce crime globally by empowering buyers and sellers with instant stolen item verification, connecting law enforcement agencies internationally, and preventing stolen goods trade across all marketplaces worldwide",
      "areaServed": "Worldwide"
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Our Global Mission to Reduce Crime Worldwide",
      "description": "SafeOrStolen's mission: Creating the world's largest stolen goods database, partnering with international law enforcement, insurance, and marketplaces to fight fraud and reduce crime globally.",
      "url": "https://safeorstolen.com/global-mission"
    }
  ];

  return (
    <>
      <PageSEO
        title="Our Global Mission - Reduce Crime Worldwide | SafeOrStolen"
        description="SafeOrStolen's mission: Build the world's most comprehensive stolen goods database with 50M+ items, partner with international law enforcement and insurance companies, and reduce crime globally by empowering every buyer and seller."
        keywords="global crime reduction, stolen goods database, international law enforcement partnership, fraud prevention, theft prevention worldwide, marketplace safety, global verification"
        canonical="https://safeorstolen.com/global-mission"
        structuredData={structuredData}
      />
      <AISearchOptimizer
        page="about"
        primaryKeywords={["global crime reduction mission", "stolen goods database worldwide", "international theft prevention"]}
      />

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
            <Globe className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Mission: Reduce Crime Globally
          </h1>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Building the world's most comprehensive stolen goods verification database to fight fraud, protect buyers and sellers, and eliminate the market for stolen property worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary">50M+</div>
              <div className="text-sm text-muted-foreground">Items in Database</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary">195</div>
              <div className="text-sm text-muted-foreground">Countries Covered</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-primary">$1.8B+</div>
              <div className="text-sm text-muted-foreground">Fraud Prevented</div>
            </Card>
          </div>
        </div>

        {/* The Problem We Solve */}
        <Card className="p-8 mb-12 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950 dark:to-orange-950">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <TrendingDown className="h-8 w-8 text-red-600" />
            The Global Stolen Goods Crisis
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">The Statistics</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span><strong>$30+ billion</strong> in stolen goods traded annually worldwide</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span><strong>230 million</strong> phones stolen or lost globally per year</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span><strong>1 in 8</strong> secondhand items purchased may be stolen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span><strong>Less than 5%</strong> of stolen items are ever recovered</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">The Impact</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>Innocent buyers face legal consequences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>Victims never recover their property</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>Theft remains profitable, encouraging more crime</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>Marketplaces struggle to prevent stolen listings</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Our Solution */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Three-Pillar Solution</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Global Database</h3>
              <p className="mb-4">
                50M+ stolen items aggregated from police reports, insurance claims, and user reports across 195 countries.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Real-time updates from law enforcement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Insurance company data integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Community-driven reporting</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Consumer Access</h3>
              <p className="mb-4">
                FREE instant verification for buyers and sellers worldwide via web and mobile apps.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>2 free searches (14-day trial) for every user</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>iOS & Android mobile apps</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Instant scan-to-verify</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <Building className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Partner Network</h3>
              <p className="mb-4">
                Partnerships with marketplaces, law enforcement, insurance, and businesses globally.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Marketplace API integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Law enforcement data feeds</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Insurance claim verification</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Global Impact */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Global Impact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {globalImpact.map((region, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">{region.region}</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Items Verified:</span>
                    <span className="font-semibold">{region.verified}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fraud Prevented:</span>
                    <span className="font-semibold text-green-600">{region.prevented}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Partners:</span>
                    <span className="font-semibold">{region.partners}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Vision for the Future */}
        <Card className="p-8 mb-12 bg-gradient-to-br from-primary/10 to-blue-500/10">
          <div className="text-center mb-6">
            <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Our Vision for 2030</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Goals</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Reduce global stolen goods trade by 50%</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>100M+ items in verification database</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Partnership with every major marketplace globally</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>1 billion verifications performed annually</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Expansion</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>AI-powered fraud detection and prevention</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Blockchain-based ownership verification</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Integration with customs and border protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Universal verification standard adopted worldwide</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Join the Mission CTA */}
        <Card className="p-8 text-center bg-gradient-to-br from-primary to-blue-600 text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Global Mission</h2>
          <p className="text-xl mb-6 opacity-90">
            Whether you're a buyer, seller, marketplace, law enforcement agency, or insurance company – together we can make stolen goods worthless and reduce crime worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" onClick={() => navigate('/imei-check')}>
              Start Verifying Now
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" onClick={() => navigate('/partnerships')}>
              Become a Partner
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
}
