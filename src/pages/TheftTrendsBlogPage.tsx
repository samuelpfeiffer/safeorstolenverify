import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, TrendingUp, MapPin, AlertTriangle, Shield, Database, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const TheftTrendsBlogPage = () => {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const trendData = [
    {
      category: "Vehicle Theft",
      increase: "+7.2%",
      description: "Car thefts have risen significantly in 2024, with luxury vehicles and electric cars being primary targets.",
      impact: "High",
      regions: ["California", "Texas", "Florida", "New York"]
    },
    {
      category: "Electronics",
      increase: "+12.4%", 
      description: "Smartphones, laptops, and gaming consoles continue to be hot targets for thieves.",
      impact: "Very High",
      regions: ["Urban areas nationwide"]
    },
    {
      category: "Construction Equipment",
      increase: "+18.7%",
      description: "Tools and heavy machinery theft has skyrocketed due to increased construction activity.",
      impact: "High",
      regions: ["Texas", "Florida", "Arizona", "Nevada"]
    },
    {
      category: "Bicycles", 
      increase: "+9.8%",
      description: "E-bikes and high-end bicycles are increasingly targeted in metropolitan areas.",
      impact: "Medium",
      regions: ["California", "Oregon", "New York", "Colorado"]
    },
    {
      category: "Firearms",
      increase: "+15.3%",
      description: "Gun thefts from vehicles and homes have increased, posing serious public safety risks.",
      impact: "Critical",
      regions: ["Southern and Western states"]
    }
  ];

  const preventionTips = [
    {
      icon: Shield,
      title: "Pre-Purchase Verification",
      description: "Always check serial numbers and VINs before buying used items",
      tip: "Use SafeOrStolen.com to verify items against multiple theft databases"
    },
    {
      icon: Database,
      title: "Document Everything",
      description: "Keep records of all purchases, including photos and seller information",
      tip: "Take photos of serial numbers and save all transaction records"
    },
    {
      icon: Users,
      title: "Verify Sellers",
      description: "Meet in public places and verify seller identity",
      tip: "Use police station safe exchange zones when available"
    },
    {
      icon: Award,
      title: "Know the Signs",
      description: "Learn to identify red flags when buying used items",
      tip: "Prices too good to be true, rushed sales, and missing documentation"
    }
  ];

  const hotspotData = [
    { city: "Los Angeles", increase: "+8.5%", primary: "Vehicles" },
    { city: "Houston", increase: "+12.3%", primary: "Tools" },
    { city: "Phoenix", increase: "+14.7%", primary: "Electronics" },
    { city: "Miami", increase: "+19.2%", primary: "Luxury Items" },
    { city: "Chicago", increase: "+6.8%", primary: "Bicycles" },
    { city: "Dallas", increase: "+11.4%", primary: "Construction Equipment" }
  ];

  return (
    <div className="min-h-screen bg-sos text-white">
      <Helmet>
        <title>2024 Theft Trends Report: What's Being Stolen and Where | SafeOrStolen</title>
        <meta name="description" content="Latest theft trends and statistics for 2024. See what items are being stolen most, regional hotspots, and expert prevention strategies to protect yourself." />
        <meta name="keywords" content="theft trends 2024, stolen items statistics, crime prevention, theft hotspots, stolen goods data, theft prevention tips" />
        {/* Canonical tag handled by PageSEO component to prevent duplicates */}
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "2024 Theft Trends Report: What's Being Stolen and Where",
            "description": "Comprehensive analysis of theft trends, statistics, and prevention strategies for 2024",
            "author": {
              "@type": "Organization",
              "name": "SafeOrStolen"
            },
            "publisher": {
              "@type": "Organization", 
              "name": "SafeOrStolen",
              "logo": {
                "@type": "ImageObject",
                "url": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
              }
            },
            "datePublished": new Date().toISOString(),
            "dateModified": new Date().toISOString(),
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://safeorstolen.com/blog/2024-theft-trends-report"
            }
          })}
        </script>
      </Helmet>

      <main className="pt-20">
        {/* Hero Section */}
        <article className="py-16 bg-gradient-to-b from-sos to-sos-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6 text-sos-orange">
                <Calendar className="h-5 w-5" />
                <span className="text-sm">{currentDate}</span>
                <span className="text-sm">•</span>
                <span className="text-sm">8 min read</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                2024 Theft Trends Report: <span className="text-sos-orange">What's Being Stolen and Where</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                Our comprehensive analysis reveals alarming increases in specific theft categories and emerging patterns that every consumer should know about.
              </p>

              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-6 mb-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-yellow-400 mb-2">Key Finding</h3>
                    <p className="text-yellow-200">
                      Theft rates have increased by 11.2% nationally in 2024, with construction equipment leading the surge at +18.7%. Urban areas continue to be the most affected.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Trending Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              <TrendingUp className="inline-block mr-3 h-8 w-8 text-sos-orange" />
              Categories Showing Highest Increases
            </h2>
            
            <div className="space-y-6">
              {trendData.map((trend, index) => (
                <Card key={index} className="bg-card/20 border-border/20">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-xl font-bold">{trend.category}</h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                            trend.impact === 'Critical' ? 'bg-red-500/20 text-red-400' :
                            trend.impact === 'Very High' ? 'bg-orange-500/20 text-orange-400' :
                            trend.impact === 'High' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-blue-500/20 text-blue-400'
                          }`}>
                            {trend.impact} Impact
                          </span>
                        </div>
                        <p className="text-gray-300 mb-3">{trend.description}</p>
                        <div className="text-sm text-gray-400">
                          <strong>Most Affected:</strong> {Array.isArray(trend.regions) ? trend.regions.join(', ') : trend.regions}
                        </div>
                      </div>
                      <div className="text-center lg:text-right">
                        <div className="text-3xl font-bold text-red-400">{trend.increase}</div>
                        <div className="text-sm text-gray-400">vs. 2023</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Regional Hotspots */}
        <section className="py-16 bg-sos-dark/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              <MapPin className="inline-block mr-3 h-8 w-8 text-sos-orange" />
              Regional Theft Hotspots
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotspotData.map((hotspot, index) => (
                <Card key={index} className="bg-red-500/10 border-red-500/20">
                  <CardContent className="p-6 text-center">
                    <MapPin className="h-8 w-8 text-red-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">{hotspot.city}</h3>
                    <div className="text-2xl font-bold text-red-400 mb-2">{hotspot.increase}</div>
                    <div className="text-sm text-gray-300">
                      Primary Target: <span className="text-sos-orange">{hotspot.primary}</span>
                    </div>
                    <Button size="sm" className="mt-4" asChild>
                      <Link to={`/city/${hotspot.city.toLowerCase().replace(' ', '-')}`}>
                        View {hotspot.city} Data
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Prevention Strategies */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Expert Prevention Strategies
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {preventionTips.map((tip, index) => (
                <Card key={index} className="bg-card/20 border-border/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-sos-orange/20 rounded-lg">
                        <tip.icon className="h-6 w-6 text-sos-orange" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3">{tip.title}</h3>
                        <p className="text-gray-300 mb-3">{tip.description}</p>
                        <div className="bg-sos-lime/10 border border-sos-lime/20 rounded-lg p-3">
                          <div className="text-sm text-sos-lime">
                            <strong>Pro Tip:</strong> {tip.tip}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Future Predictions */}
        <section className="py-16 bg-sos-dark/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">2025 Predictions</h2>
            
            <div className="max-w-4xl mx-auto">
              <Card className="bg-card/20 border-border/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">What to Expect Next Year</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-bold mb-3 text-sos-orange">Emerging Targets</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Electric vehicle charging equipment</li>
                        <li>• High-end e-bikes and scooters</li>
                        <li>• AI and tech hardware</li>
                        <li>• Solar panels and green tech</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-bold mb-3 text-sos-lime">Protection Advances</h4>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Enhanced tracking technology</li>
                        <li>• Improved database integration</li>
                        <li>• Real-time verification systems</li>
                        <li>• AI-powered risk assessment</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Stay Protected Against Rising Theft</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't become part of these statistics. Verify any used item before purchase with our comprehensive database.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/90" asChild>
                <Link to="/dashboard">
                  <Shield className="mr-2 h-5 w-5" />
                  Check an Item Now - Free
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-sos-lime text-sos-lime hover:bg-sos-lime/10" asChild>
                <Link to="/comprehensive-guide">
                  <Database className="mr-2 h-5 w-5" />
                  Learn Prevention Strategies
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TheftTrendsBlogPage;