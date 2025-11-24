import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Gavel, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe, 
  Clock,
  CheckCircle, 
  AlertTriangle,
  DollarSign,
  Crown,
  Target,
  Zap,
  Building,
  Rocket,
  Star
} from 'lucide-react';
import { createServiceSchema } from '@/utils/seo/structuredData';

const AuctionHousesPage: React.FC = () => {
  const auctionHouseNeeds = [
    {
      icon: Shield,
      title: "Pre-Sale Verification",
      description: "Verify EVERY item before it hits your auction floor. No stolen goods, no liability, no reputation damage.",
      impact: "99.7% reduction in stolen item incidents"
    },
    {
      icon: Crown,
      title: "Premium Authenticity Badge",
      description: "Display our verification badge to increase bidder confidence and hammer prices by 30-40%.",
      impact: "Average 35% higher final bid prices"
    },
    {
      icon: Globe,
      title: "International Coverage", 
      description: "Verify items from ANY country. Our global database network ensures nothing slips through.",
      impact: "Coverage across 150+ countries"
    },
    {
      icon: Clock,
      title: "Instant Verification",
      description: "Get results in under 200ms. Perfect for fast-paced auction environments and last-minute consignments.",
      impact: "Sub-second verification speeds"
    }
  ];

  const majorAuctionHouses = [
    { name: "Christie's", annual: "$7.1B", opportunity: "Eliminate all stolen art incidents" },
    { name: "Sotheby's", annual: "$5.2B", opportunity: "Increase buyer confidence globally" },
    { name: "Bonhams", annual: "$800M", opportunity: "Streamline authentication process" },
    { name: "Phillips", annual: "$600M", opportunity: "Reduce legal liability exposure" },
    { name: "Heritage Auctions", annual: "$1B", opportunity: "Dominate collectibles market" },
    { name: "Barrett-Jackson", annual: "$500M", opportunity: "Verify classic car authenticity" }
  ];

  const verificationCategories = [
    {
      category: "Fine Art & Antiques",
      coverage: "Museum databases, theft registries, provenance tracking",
      keyFeatures: ["Nazi-looted art detection", "Museum theft alerts", "Provenance verification"]
    },
    {
      category: "Jewelry & Watches", 
      coverage: "Insurance databases, manufacturer records, theft reports",
      keyFeatures: ["Diamond certification matching", "Watch serial verification", "Insurance claim tracking"]
    },
    {
      category: "Classic Vehicles",
      coverage: "VIN databases, insurance records, theft reports worldwide",
      keyFeatures: ["Classic car title verification", "Frame number checking", "Import/export tracking"]
    },
    {
      category: "Collectibles & Memorabilia",
      coverage: "Authentication databases, theft registries, fraud alerts",
      keyFeatures: ["Sports memorabilia verification", "Rare book tracking", "Coin authenticity checks"]
    }
  ];

  const serviceSchema = createServiceSchema();

  return (
    <>
      <PageSEO
        title="AUCTION HOUSE DOMINATION: The ONLY Verification Platform Every Auction House NEEDS - Safe or Stolen"
        description="Christie's, Sotheby's, Bonhams - EVERY major auction house needs SafeOrStolen.com. Eliminate stolen goods liability, increase hammer prices 35%, dominate the $20B global auction market."
        keywords="auction house verification, Christie's verification, Sotheby's authentication, stolen art detection, auction authentication, fine art verification, antique verification, auction house liability"
        canonical="/auction-houses"
        structuredData={serviceSchema}
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto px-4">
            <div className="text-center max-w-6xl mx-auto">
              <Badge className="mb-8 text-lg px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-500 text-black border-none font-black">
                <Gavel className="h-5 w-5 mr-2" />
                AUCTION HOUSE SUPREMACY
              </Badge>
              
              <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
                EVERY <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400">AUCTION HOUSE</span><br/>
                NEEDS US
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-200 mb-12 font-bold max-w-5xl mx-auto leading-tight">
                Christie's, Sotheby's, Bonhams - the $20B global auction market runs on TRUST.<br/>
                <span className="text-yellow-400">We ARE that trust. We ARE that verification.</span>
              </p>

              {/* Domination Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-5xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-400">$20B</div>
                  <div className="text-white/80 font-semibold">Global Market</div>
                  <div className="text-xs text-white/60">We dominate ALL of it</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-400">35%</div>
                  <div className="text-white/80 font-semibold">Higher Prices</div>
                  <div className="text-xs text-white/60">with our verification</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-400">99.7%</div>
                  <div className="text-white/80 font-semibold">Accuracy Rate</div>
                  <div className="text-xs text-white/60">industry leading</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-400">150+</div>
                  <div className="text-white/80 font-semibold">Countries</div>
                  <div className="text-xs text-white/60">global coverage</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/enterprise-demo">
                  <Button size="lg" className="text-xl px-12 py-6 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-black border-none shadow-2xl font-black">
                    <Rocket className="h-6 w-6 mr-3" />
                    DOMINATE YOUR AUCTIONS
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="text-xl px-12 py-6 border-2 border-white text-white hover:bg-white hover:text-amber-900 font-black">
                    <Target className="h-6 w-6 mr-3" />
                    PARTNERSHIP NOW
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Major Auction Houses Target List */}
        <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-white mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400">TARGET</span> ACQUIRED
              </h2>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-bold">
                Every major auction house WILL use our platform. It's not a question of if - it's WHEN.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {majorAuctionHouses.map((house, index) => (
                <Card key={index} className="bg-amber-950/30 border-amber-800 hover:border-yellow-500 transition-all duration-300 transform hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl text-white font-black">{house.name}</CardTitle>
                      <Badge className="bg-green-600 text-white font-bold">
                        TARGET
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-black text-yellow-400">{house.annual}</div>
                      <div className="text-gray-400 text-sm">Annual Sales Volume</div>
                    </div>
                    <div className="border-t border-gray-700 pt-4">
                      <div className="text-gray-400 text-sm mb-1">OUR OPPORTUNITY</div>
                      <div className="text-white font-semibold">{house.opportunity}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Verification Categories */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-6">COMPLETE AUCTION COVERAGE</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From fine art to classic cars - we verify EVERYTHING that crosses an auction block.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {verificationCategories.map((category, index) => (
                <Card key={index} className="p-8 border-2 hover:border-primary transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary font-black">{category.category}</CardTitle>
                    <p className="text-muted-foreground font-semibold">{category.coverage}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.keyFeatures.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <Star className="h-4 w-4 mr-3 text-yellow-500 flex-shrink-0" />
                          <span className="text-sm font-semibold">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Auction House Benefits */}
        <section className="py-24 bg-gradient-to-br from-amber-50 to-yellow-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-6">WHY AUCTION HOUSES CHOOSE US</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We don't just verify - we TRANSFORM your entire auction operation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {auctionHouseNeeds.map((need, index) => (
                <Card key={index} className="p-8 border-2 hover:border-primary transition-all duration-300 bg-white/70 backdrop-blur">
                  <div className="flex items-start space-x-6">
                    <div className="p-4 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-lg">
                      <need.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-black mb-3">{need.title}</h3>
                      <p className="text-muted-foreground mb-4 font-semibold">{need.description}</p>
                      <div className="text-sm font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full inline-block">
                        {need.impact}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final Auction House CTA */}
        <section className="py-24 bg-gradient-to-br from-black via-amber-900 to-yellow-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative container mx-auto px-4 text-center">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-6xl font-black text-white mb-8">
                THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400">AUCTION HOUSE</span><br/>
                REVOLUTION STARTS NOW
              </h2>
              
              <p className="text-2xl text-gray-200 mb-12 font-bold leading-relaxed">
                Every major auction house will either partner with us or be left behind.<br/>
                Christie's, Sotheby's, Bonhams - the choice is yours.<br/>
                <span className="text-yellow-400">Lead the revolution or watch from the sidelines.</span>
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
                  <CardContent className="pt-8 text-center">
                    <DollarSign className="h-12 w-12 mx-auto mb-4 text-green-400" />
                    <h3 className="text-xl font-black mb-2">INCREASE REVENUE</h3>
                    <p className="text-sm">35% higher hammer prices</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
                  <CardContent className="pt-8 text-center">
                    <Shield className="h-12 w-12 mx-auto mb-4 text-blue-400" />
                    <h3 className="text-xl font-black mb-2">ELIMINATE RISK</h3>
                    <p className="text-sm">Zero stolen item liability</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur border-white/20 text-white">
                  <CardContent className="pt-8 text-center">
                    <Crown className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
                    <h3 className="text-xl font-black mb-2">MARKET LEADERSHIP</h3>
                    <p className="text-sm">Become the trusted auction house</p>
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/enterprise-demo">
                  <Button size="lg" className="text-2xl px-16 py-8 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-black border-none shadow-2xl font-black">
                    <Gavel className="h-8 w-8 mr-4" />
                    REVOLUTIONIZE YOUR AUCTIONS
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="text-2xl px-16 py-8 border-4 border-white text-white hover:bg-white hover:text-amber-900 font-black">
                    <Building className="h-8 w-8 mr-4" />
                    ENTERPRISE PARTNERSHIP
                  </Button>
                </Link>
              </div>

              <div className="mt-12 text-lg text-gray-300 font-bold">
                <p>The global auction market is $20 billion.</p>
                <p className="text-yellow-400">We're taking ALL of it. Join us.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AuctionHousesPage;