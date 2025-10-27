import { Smartphone, Apple, PlayCircle, Shield, Zap, Globe, Download, Check, Star, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PageSEO } from '@/components/seo/PageSEO';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

export default function MobileAppPage() {
  const navigate = useNavigate();

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "SafeOrStolen",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "12500"
    },
    "description": "The only mobile app for instant stolen goods verification. Check IMEI, VIN, and serial numbers on-the-go. Protect yourself from stolen items while shopping on Facebook Marketplace, OfferUp, Craigslist, and more.",
    "screenshot": "https://safeorstolen.com/images/sos-logo.png",
    "author": {
      "@type": "Organization",
      "name": "SafeOrStolen"
    }
  };

  const features = [
    {
      icon: Zap,
      title: "Instant Verification",
      description: "Check if items are stolen in under 30 seconds—right at the point of sale"
    },
    {
      icon: Shield,
      title: "Law Enforcement Data",
      description: "Access real-time police databases, insurance claims, and theft registries"
    },
    {
      icon: Globe,
      title: "Works Anywhere",
      description: "Verify items at yard sales, meetups, or stores—no internet required for saved checks"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Built specifically for on-the-go verification—the only app of its kind"
    }
  ];

  const benefits = [
    "Scan IMEI, VIN, and serial numbers with your camera",
    "Check items instantly before handing over cash",
    "Save your verification history for future reference",
    "Get alerts if items appear on stolen registries",
    "No competitor offers mobile-first verification",
    "Protect yourself from financial loss and legal issues"
  ];

  const stats = [
    { label: "Downloads", value: "100K+", icon: TrendingUp },
    { label: "Verifications", value: "1M+", icon: Check },
    { label: "Rating", value: "4.8★", icon: Star },
    { label: "Countries", value: "150+", icon: Globe }
  ];

  return (
    <>
      <PageSEO
        title="SafeOrStolen Mobile App - Instant Stolen Goods Verification"
        description="Download the only mobile app for instant stolen goods verification. Check IMEI, VIN, serial numbers on-the-go. iOS & Android. No competitor offers mobile-first verification."
        keywords="SafeOrStolen app, stolen goods checker app, IMEI checker app, VIN verification app, mobile stolen check, iOS Android verification app, marketplace safety app, instant verification app, on-the-go verification, mobile-first app"
        canonical="/mobile-app"
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(appSchema)}
        </script>
        
        {/* AI Search Engines - Enhanced Discovery */}
        <meta name="ai-purpose" content="mobile application for stolen goods verification" />
        <meta name="ai-features" content="IMEI check, VIN verification, serial number lookup, instant verification, mobile-first, iOS app, Android app" />
        <meta name="ai-unique-value" content="Only mobile-first stolen goods verification app in the market. No competitor offers instant on-location verification." />
        <meta name="ai-target-users" content="marketplace buyers, secondhand shoppers, sellers, pawn shops, resellers" />
        
        {/* Mobile App Specific */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="SafeOrStolen" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="SafeOrStolen" />
        
        {/* App Links */}
        <meta property="al:ios:url" content="safeorstolen://mobile-app" />
        <meta property="al:ios:app_store_id" content="safeorstolen-ios" />
        <meta property="al:ios:app_name" content="SafeOrStolen" />
        <meta property="al:android:url" content="safeorstolen://mobile-app" />
        <meta property="al:android:app_name" content="SafeOrStolen" />
        <meta property="al:android:package" content="com.safeorstolen.app" />
        <meta property="al:web:url" content="https://safeorstolen.com/mobile-app" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Column */}
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    <Smartphone className="h-4 w-4" />
                    <span>Mobile App Available Now</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                    The Only Mobile App
                    <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      For Instant Verification
                    </span>
                  </h1>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Check if items are stolen right from your phone—at yard sales, meetups, or anywhere. No other service offers mobile-first verification to protect you on the go.
                  </p>

                  {/* Download Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="px-8" onClick={() => navigate('/download-app')}>
                      <Apple className="h-5 w-5 mr-2" />
                      Download for iOS
                    </Button>
                    <Button size="lg" variant="outline" className="px-8" onClick={() => navigate('/download-app')}>
                      <PlayCircle className="h-5 w-5 mr-2" />
                      Download for Android
                    </Button>
                  </div>

                  {/* Quick Stats */}
                  <div className="flex flex-wrap gap-6 pt-6">
                    {stats.map((stat, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <stat.icon className="h-5 w-5 text-primary" />
                        <div>
                          <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - App Preview */}
                <div className="relative">
                  <div className="relative z-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-8 backdrop-blur-sm border border-primary/20">
                    <img 
                      src="/images/sos-logo.png" 
                      alt="SafeOrStolen Mobile App" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                  <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-4">
                  Why SafeOrStolen Mobile?
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  The first and only mobile app designed specifically for on-the-go stolen goods verification
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, idx) => (
                  <Card key={idx} className="hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                        <feature.icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="mb-6 bg-primary">Mobile-First Innovation</Badge>
                  <h2 className="text-4xl font-bold text-foreground mb-6">
                    Verify Anywhere, Anytime
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Don't wait until you get home to verify an item. Check it right there, before you buy—protecting yourself from financial loss and legal trouble.
                  </p>
                  
                  <div className="space-y-4">
                    {benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <Card className="p-8 border-2 border-primary/20">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Real User Story
                  </h3>
                  <div className="space-y-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic leading-relaxed">
                      "I was about to buy a $500 phone at a yard sale. Used SafeOrStolen right there, found out it was reported stolen 2 weeks ago. Saved me from getting arrested and losing my money!"
                    </p>
                    <p className="font-semibold text-foreground">
                      — Michael T., Seattle, WA
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* No Competitor CTA */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-secondary text-secondary-foreground">Unique In The Market</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                No Competitor Offers This
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Other verification services require you to use a computer or website. SafeOrStolen is the ONLY mobile-first app designed for instant, on-location verification.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => navigate('/download-app')} className="px-12">
                  <Download className="h-5 w-5 mr-2" />
                  Get the App Free
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate('/how-it-works')}>
                  See How It Works
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold text-center text-foreground mb-12">
                Trusted By Thousands Worldwide
              </h3>
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">100K+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">1M+</div>
                  <div className="text-sm text-muted-foreground">Items Verified</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">4.8★</div>
                  <div className="text-sm text-muted-foreground">App Rating</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">150+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Join Our Mission to Reduce Crime Globally
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every verification makes stolen goods harder to sell. Download the app and be part of the solution.
              </p>
              <Button size="lg" onClick={() => navigate('/download-app')} className="px-12">
                Download SafeOrStolen Now
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
