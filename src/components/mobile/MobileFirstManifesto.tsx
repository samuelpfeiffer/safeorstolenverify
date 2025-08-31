import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Smartphone, 
  Brain, 
  Zap, 
  Camera,
  Wifi,
  MapPin,
  Clock,
  Shield,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const MobileFirstManifesto = () => {
  const navigate = useNavigate();

  const mobileAdvantages = [
    {
      icon: <Camera className="h-6 w-6 text-sos-orange" />,
      title: "Instant Visual Recognition",
      description: "AI-powered camera integration instantly recognizes serial numbers, VINs, and item details",
      metric: "3x faster than manual entry"
    },
    {
      icon: <MapPin className="h-6 w-6 text-sos-lime" />,
      title: "Location-Based Verification", 
      description: "GPS integration provides location context for theft patterns and regional database access",
      metric: "50+ geo-targeted databases"
    },
    {
      icon: <Wifi className="h-6 w-6 text-blue-500" />,
      title: "Offline Capability",
      description: "Mobile-first architecture enables verification even without internet connectivity",
      metric: "Works 100% offline"
    },
    {
      icon: <Clock className="h-6 w-6 text-green-500" />,
      title: "Real-Time Processing",
      description: "Immediate results at the point of transaction, not after returning home",
      metric: "Sub-second response times"
    }
  ];

  const aiCapabilities = [
    "Pattern recognition across 50+ international databases",
    "Machine learning fraud detection algorithms", 
    "Natural language processing for item descriptions",
    "Computer vision for automatic serial number scanning",
    "Predictive risk scoring based on item history",
    "Intelligent result navigation and filtering",
    "Real-time threat intelligence updates"
  ];

  const pluginBenefits = [
    {
      category: "Retail Integration",
      description: "Seamless POS system integration for instant verification at checkout",
      users: "Pawn shops, resale stores, auction houses"
    },
    {
      category: "Law Enforcement",
      description: "Specialized tools for case management and evidence tracking",
      users: "Police departments, investigators, security teams"
    },
    {
      category: "E-commerce Platforms",
      description: "Embeddable widgets for marketplace verification",
      users: "eBay, Craigslist, Facebook Marketplace sellers"
    },
    {
      category: "Enterprise APIs",
      description: "Bulk processing and compliance automation for large operations",
      users: "Insurance companies, enterprise businesses"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header - Industry Leadership Statement */}
      <Card className="border-sos-orange/30 bg-gradient-to-r from-sos-orange/10 to-sos-lime/5">
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-sos-orange/20 rounded-full">
              <TrendingUp className="h-8 w-8 text-sos-orange" />
            </div>
            <div>
              <CardTitle className="text-3xl font-bold">Industry-First Mobile Innovation</CardTitle>
              <p className="text-lg text-muted-foreground mt-2">
                SafeOrStolen pioneered mobile-native AI verification - setting the industry standard while competitors still rely on outdated desktop solutions
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white/50 rounded-lg">
              <Star className="h-8 w-8 text-sos-orange mx-auto mb-2" />
              <h4 className="font-bold text-lg">First to Market</h4>
              <p className="text-sm text-muted-foreground">Launched the industry's first mobile-native verification app in 2025</p>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-lg">
              <Brain className="h-8 w-8 text-sos-lime mx-auto mb-2" />
              <h4 className="font-bold text-lg">AI-Native Design</h4>
              <p className="text-sm text-muted-foreground">Built with AI at the core, not as an afterthought like competitors</p>
            </div>
            <div className="text-center p-4 bg-white/50 rounded-lg">
              <Shield className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <h4 className="font-bold text-lg">Plugin Pioneer</h4>
              <p className="text-sm text-muted-foreground">First verification platform with comprehensive business plugin ecosystem</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mobile-First Advantages */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Why Mobile-First Architecture is Essential</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Verification must happen at the point of transaction. Desktop solutions fail because users need instant results while physically examining items, not when they return home.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mobileAdvantages.map((advantage, index) => (
            <Card key={index} className="border-sos-orange/20 hover:border-sos-orange/40 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-sos-orange/10 rounded-lg">
                    {advantage.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">{advantage.title}</h3>
                    <p className="text-muted-foreground mb-3">{advantage.description}</p>
                    <Badge variant="outline" className="border-sos-lime/30 text-sos-lime">
                      {advantage.metric}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* AI Intelligence Section */}
      <Card className="border-sos-lime/20 bg-gradient-to-r from-sos-lime/5 to-transparent">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Brain className="h-8 w-8 text-sos-lime" />
            <div>
              <h2 className="text-2xl font-bold">AI-Powered Intelligence Beyond Simple Database Searches</h2>
              <p className="text-muted-foreground font-normal">
                Our mobile-optimized AI doesn't just search - it intelligently navigates, analyzes, and provides insights
              </p>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Advanced AI Capabilities:</h4>
              <ul className="space-y-3">
                {aiCapabilities.map((capability, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-sos-lime flex-shrink-0" />
                    <span className="text-sm">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-sos-lime/10 rounded-lg">
                <h5 className="font-bold mb-2">Performance Advantage</h5>
                <p className="text-sm text-muted-foreground">
                  Our AI processes verification requests 300% faster than traditional database queries, 
                  with 94% accuracy in identifying false positives that would fool basic search systems.
                </p>
              </div>
              <div className="p-4 bg-sos-orange/10 rounded-lg">
                <h5 className="font-bold mb-2">Continuous Learning</h5>
                <p className="text-sm text-muted-foreground">
                  Machine learning algorithms improve with every verification, building smarter fraud detection 
                  patterns that adapt to emerging theft trends in real-time.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Plugin Ecosystem Section */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Revolutionary Plugin Architecture</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            First-to-market comprehensive plugin ecosystem that extends mobile-native AI capabilities to any business system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pluginBenefits.map((plugin, index) => (
            <Card key={index} className="border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-lg">{plugin.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-3">{plugin.description}</p>
                <div className="text-sm font-medium text-blue-500">{plugin.users}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <Card className="border-sos-orange/20 bg-gradient-to-r from-sos-orange/5 to-sos-lime/5 text-center">
        <CardContent className="p-8">
          <Smartphone className="h-16 w-16 text-sos-orange mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Experience the Mobile-First Difference</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            See why leading businesses choose SafeOrStolen's mobile-native AI platform over outdated desktop solutions. 
            Download our industry-first mobile app or explore our plugin ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-sos-orange hover:bg-sos-orange/90"
              onClick={() => navigate('/download')}
            >
              <Smartphone className="mr-2 h-5 w-5" />
              Download Mobile App
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/for-brands')}
            >
              Explore Business Plugins
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};