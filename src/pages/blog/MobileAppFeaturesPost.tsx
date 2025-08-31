import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Camera, Zap, Shield, Bell, MapPin, Users, Star } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import mobileHeroImage from '@/assets/blog-hero-mobile-app.jpg';

const MobileAppFeaturesPost = () => {
  const appFeatures = [
    {
      title: "Instant Camera Scanning",
      icon: Camera,
      description: "Point your camera at serial numbers, barcodes, or VIN plates for instant verification",
      benefits: [
        "AI-powered text recognition",
        "Auto-capture when focused",
        "Works in low light conditions",
        "Supports all identifier types"
      ],
      color: "text-blue-500"
    },
    {
      title: "Lightning-Fast Results",
      icon: Zap,
      description: "Get verification results in under 2 seconds with our mobile-optimized processing",
      benefits: [
        "Sub-2 second response time",
        "Offline mode for saved searches",
        "Progress indicators and animations",
        "Background processing"
      ],
      color: "text-yellow-500"
    },
    {
      title: "Advanced Security Features", 
      icon: Shield,
      description: "Your searches and data are protected with military-grade encryption",
      benefits: [
        "End-to-end encryption",
        "No search history stored",
        "Biometric authentication",
        "Secure cloud sync"
      ],
      color: "text-green-500"
    },
    {
      title: "Smart Notifications",
      icon: Bell,
      description: "Stay informed with intelligent alerts about items you're tracking",
      benefits: [
        "Price change alerts",
        "New listing notifications",
        "Risk level updates",
        "Custom alert preferences"
      ],
      color: "text-purple-500"
    },
    {
      title: "Location-Based Insights",
      icon: MapPin,
      description: "Get location-specific theft trends and marketplace safety information",
      benefits: [
        "Local theft statistics",
        "Marketplace safety ratings",
        "Area-specific warnings",
        "Nearby verified sellers"
      ],
      color: "text-red-500"
    },
    {
      title: "Community Features",
      icon: Users,
      description: "Connect with other safety-conscious buyers and share experiences",
      benefits: [
        "Community reviews",
        "Seller reputation system",
        "Experience sharing",
        "Safety tips and guides"
      ],
      color: "text-indigo-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      comment: "The camera scanning feature is incredible! Saved me from buying a stolen phone on Facebook Marketplace.",
      location: "Los Angeles, CA"
    },
    {
      name: "Mike R.", 
      rating: 5,
      comment: "Lightning fast and super easy to use. I check every item before buying now. Peace of mind is priceless.",
      location: "Austin, TX"
    },
    {
      name: "Jennifer K.",
      rating: 5,
      comment: "The app interface is so intuitive. My teenagers can use it easily when they're shopping online.",
      location: "Miami, FL"
    }
  ];

  return (
    <>
      <PageSEO
        title="SafeOrStolen Mobile App: Advanced Features for Safe Shopping | Download Now"
        description="Discover the powerful features of the SafeOrStolen mobile app. Camera scanning, instant verification, smart alerts, and advanced security for safer shopping on-the-go."
        keywords="SafeOrStolen mobile app, camera scanning verification, mobile theft detection, smartphone app features, instant verification app"
      />
      
      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              {/* Hero Image - Optimized for Google Discover */}
              <div className="mb-8 rounded-xl overflow-hidden max-w-4xl mx-auto">
                <img 
                  src={mobileHeroImage} 
                  alt="SafeOrStolen Mobile App Interface - QR code scanning and verification features"
                  className="w-full h-[400px] object-cover"
                  loading="eager"
                />
              </div>
              
              <Badge className="mb-4 bg-sos-orange/10 text-sos-orange">
                <Smartphone className="mr-2 h-4 w-4" />
                Mobile App
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Verification Power in Your Pocket
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
                The SafeOrStolen mobile app brings enterprise-grade verification technology directly to your smartphone. 
                Scan, verify, and shop safely anywhere with advanced features designed for modern mobile commerce.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/90">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Download for iOS
                </Button>
                <Button size="lg" variant="outline">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Download for Android
                </Button>
              </div>
              
              {/* App Preview */}
              <div className="relative max-w-md mx-auto">
                <div className="bg-gradient-to-br from-sos-orange to-sos-lime rounded-3xl p-1">
                  <div className="bg-background rounded-3xl p-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-sos-orange/10 rounded-lg">
                        <Camera className="h-8 w-8 text-sos-orange" />
                        <div className="text-left">
                          <div className="font-semibold">Scanning...</div>
                          <div className="text-sm text-muted-foreground">Point camera at serial number</div>
                        </div>
                      </div>
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                          <Shield className="h-8 w-8 text-white" />
                        </div>
                        <div className="text-lg font-bold text-green-500">SAFE TO BUY</div>
                        <div className="text-sm text-muted-foreground">No theft reports found</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Powerful Features for Safer Shopping
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Every feature is designed with your safety and convenience in mind. Experience verification 
                technology that adapts to your mobile lifestyle.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {appFeatures.map((feature, index) => (
                <Card key={index} className="border-2 hover:border-sos-orange transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800">
                        <feature.icon className={`h-8 w-8 ${feature.color}`} />
                      </div>
                      <CardTitle className="text-2xl">{feature.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-sos-lime flex-shrink-0"></div>
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* User Experience Section */}
            <Card className="mb-16 bg-gradient-to-r from-sos-orange/5 to-sos-lime/5">
              <CardContent className="p-12">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold mb-6">Designed for Real-World Use</h3>
                  <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
                    Our app is built for the way people actually shop. Whether you're at a garage sale, 
                    checking a Craigslist listing, or browsing marketplace apps, SafeOrStolen works 
                    seamlessly in any situation.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-sos-orange/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Camera className="h-8 w-8 text-sos-orange" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">One-Touch Scanning</h4>
                    <p className="text-muted-foreground">
                      Simply open the app and point your camera. Our AI recognizes text automatically 
                      and starts verification without any manual input.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-sos-lime/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Zap className="h-8 w-8 text-sos-lime" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Instant Results</h4>
                    <p className="text-muted-foreground">
                      Get clear SAFE or STOLEN results in under 2 seconds, with detailed explanations 
                      and confidence scores for every verification.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-sos-orange/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Shield className="h-8 w-8 text-sos-orange" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">Complete Privacy</h4>
                    <p className="text-muted-foreground">
                      Your searches stay private. We use advanced encryption and never store your 
                      search history or personal information.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Testimonials */}
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-6">What Users Are Saying</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join thousands of smart shoppers who use SafeOrStolen to buy with confidence
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonial.comment}"
                    </p>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Download CTA */}
            <Card className="border-sos-lime/20 bg-sos-lime/5">
              <CardContent className="p-12">
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-6">Download SafeOrStolen Today</h3>
                  <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                    Join over 100,000 users who trust SafeOrStolen to protect them from stolen goods. 
                    Download the app now and start shopping with confidence.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <Button size="lg" className="bg-sos-orange hover:bg-sos-orange/90">
                      <Smartphone className="mr-2 h-5 w-5" />
                      Download for iOS
                    </Button>
                    <Button size="lg" variant="outline">
                      <Smartphone className="mr-2 h-5 w-5" />
                      Download for Android
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Free download • No subscription required • Premium features available
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileAppFeaturesPost;