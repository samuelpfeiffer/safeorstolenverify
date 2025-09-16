import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Camera, Zap, Shield, Users, CheckCircle, QrCode, Search } from 'lucide-react';

const MobileAppFeaturesPost = () => {
  const publishDate = "September 10, 2025";
  
  const mobileFeatures = [
    {
      icon: Camera,
      title: "Instant Barcode Scanning",
      description: "Scan barcodes and QR codes instantly to verify items on-the-go",
      benefit: "Verify items in seconds while shopping"
    },
    {
      icon: Zap,
      title: "Offline Verification Cache",
      description: "Access recent verification results even without internet connection",
      benefit: "Check items anywhere, anytime"
    },
    {
      icon: Shield,
      title: "Push Notifications",
      description: "Get instant alerts for suspicious items and verification updates",
      benefit: "Stay protected with real-time warnings"
    },
    {
      icon: QrCode,
      title: "Smart Image Recognition",
      description: "AI-powered image recognition to identify serial numbers from photos",
      benefit: "Verify items even with hard-to-read serial numbers"
    }
  ];

  const appStats = [
    {
      number: "4.8/5",
      label: "App Store Rating",
      description: "Based on 50,000+ reviews"
    },
    {
      number: "1M+",
      label: "Downloads",
      description: "Across iOS and Android"
    },
    {
      number: "2.3s",
      label: "Average Scan Time",
      description: "Industry-leading speed"
    },
    {
      number: "99.9%",
      label: "Uptime",
      description: "Reliable verification service"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "SafeOrStolen Mobile App Features - Instant Stolen Goods Verification",
    "description": "Comprehensive guide to SafeOrStolen's mobile app features for instant stolen goods verification on-the-go.",
    "author": {
      "@type": "Person",
      "name": "SafeOrStolen Product Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen.com"
    },
    "datePublished": "2025-09-10",
    "dateModified": "2025-09-10",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://safeorstolen.com/blog/mobile-app-features"
    }
  };

  return (
    <>
      <PageSEO
        title="SafeOrStolen Mobile App Features - Instant Verification On-The-Go"
        description="Discover SafeOrStolen's powerful mobile app features including barcode scanning, offline verification, push notifications, and AI image recognition for stolen goods verification."
        keywords="safeorstolen mobile app, barcode scanner, stolen goods app, instant verification, mobile verification app"
        canonical="/blog/mobile-app-features"
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Badge variant="secondary" className="mb-4">Mobile App</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                SafeOrStolen Mobile App Features
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                Protect yourself from stolen goods with our powerful mobile app. 
                Instant barcode scanning, offline verification, and AI-powered 
                image recognition make verification effortless wherever you are.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Published: {publishDate}</span>
                <span>•</span>
                <span>6 min read</span>
                <span>•</span>
                <span>Mobile Guide</span>
              </div>
            </div>
          </div>
        </section>

        {/* App Stats */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
              {appStats.map((stat, index) => (
                <Card key={index} className="p-4 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
                Powerful Mobile Features
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {mobileFeatures.map((feature, index) => (
                  <Card key={index} className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <feature.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{feature.description}</p>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm font-semibold text-emerald-700">{feature.benefit}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  <Smartphone className="inline h-8 w-8 mr-3 text-primary" />
                  How the Mobile App Works
                </h2>
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">1. Download & Setup</h3>
                    <p>Download the SafeOrStolen app from the App Store or Google Play. Create your account or log in with existing credentials. The app syncs with your web account for seamless verification history.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">2. Instant Scanning</h3>
                    <p>Point your phone's camera at any barcode, QR code, or serial number. Our advanced OCR technology instantly recognizes and captures the information, even in low light conditions.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">3. Real-Time Verification</h3>
                    <p>The app immediately checks our comprehensive database of stolen goods, providing results within seconds. Get clear "Safe" or "Stolen" indicators with detailed information.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">4. Smart Notifications</h3>
                    <p>Receive push notifications for verification results, security alerts, and updates about items you've previously checked. Stay informed about any status changes.</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  <Search className="inline h-8 w-8 mr-3 text-primary" />
                  Advanced Search Capabilities
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <h3 className="text-xl font-semibold text-foreground">Multiple Input Methods</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Barcode Scanning:</strong> Instantly scan UPC, EAN, and other barcode formats</li>
                    <li><strong>QR Code Recognition:</strong> Decode QR codes containing product information</li>
                    <li><strong>Text Input:</strong> Manually enter serial numbers, IMEI, or VIN numbers</li>
                    <li><strong>Photo Recognition:</strong> Take photos of serial number labels for automatic recognition</li>
                    <li><strong>Voice Input:</strong> Speak serial numbers for hands-free verification</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-foreground mt-6">Smart Features</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Batch Scanning:</strong> Verify multiple items in succession for bulk checking</li>
                    <li><strong>History Sync:</strong> Access your verification history across all devices</li>
                    <li><strong>Offline Mode:</strong> View recently checked items without internet connection</li>
                    <li><strong>Export Reports:</strong> Generate and share verification reports for business use</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  <Users className="inline h-8 w-8 mr-3 text-primary" />
                  User Success Stories
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <p className="text-muted-foreground italic mb-2">
                      "The mobile app saved me from buying a stolen iPhone at a garage sale. 
                      The barcode scan showed it was reported stolen just days earlier. Amazing!"
                    </p>
                    <p className="text-sm font-semibold text-foreground">- Jennifer M., Phoenix, AZ</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-6">
                    <p className="text-muted-foreground italic mb-2">
                      "As a pawn shop owner, this app is essential. We check every item before purchase. 
                      The offline feature works great when our internet is spotty."
                    </p>
                    <p className="text-sm font-semibold text-foreground">- Mike R., Pawn Shop Owner, Denver, CO</p>
                  </div>
                  
                  <div className="border-l-4 border-primary pl-6">
                    <p className="text-muted-foreground italic mb-2">
                      "The image recognition is incredible. I took a blurry photo of a guitar's 
                      serial number and it still identified it perfectly. Five stars!"
                    </p>
                    <p className="text-sm font-semibold text-foreground">- David L., Music Store Owner, Nashville, TN</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Download the App Today</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Protect yourself from stolen goods with the most trusted verification app. 
                  Join over 1 million users who verify before they buy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Badge variant="secondary" className="text-lg px-6 py-3 justify-center">
                    <Smartphone className="h-5 w-5 mr-2" />
                    Download for iOS
                  </Badge>
                  <Badge variant="secondary" className="text-lg px-6 py-3 justify-center">
                    <Smartphone className="h-5 w-5 mr-2" />
                    Download for Android
                  </Badge>
                </div>
              </Card>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MobileAppFeaturesPost;