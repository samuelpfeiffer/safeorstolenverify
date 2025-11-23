import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { VideoEmbed } from '@/components/blog/VideoEmbed';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Shield, Smartphone, TrendingUp, Users, AlertCircle } from 'lucide-react';

const VideosPage = () => {
  const videoCategories = [
    {
      title: "Getting Started",
      icon: <Play className="w-5 h-5" />,
      videos: [
        {
          title: "The $13 Billion Stolen Goods Problem Explained",
          description: "Understanding the massive scale of the stolen goods crisis and how it affects innocent buyers and sellers worldwide.",
          url: "https://YouTube.com/shorts/Er_PXY0oMgE?si=nhhHl7uKYXWfJcwZ",
          duration: "0:59",
          category: "Problem Awareness"
        },
        {
          title: "How SafeOrStolen Works - Complete Overview",
          description: "A comprehensive walkthrough of our verification platform, showing how we protect you from stolen goods in just 3 seconds.",
          url: "",
          duration: "3:45",
          category: "Platform Demo",
          thumbnail: "/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
        },
        {
          title: "Mobile App vs Website - Speed Comparison",
          description: "Watch how the SafeOrStolen mobile app verifies items 10x faster than traditional website checkers like CheckMEND.",
          url: "",
          duration: "2:15",
          category: "App Demo"
        }
      ]
    },
    {
      title: "Verification Tutorials",
      icon: <Shield className="w-5 h-5" />,
      videos: [
        {
          title: "How to Verify a Phone's IMEI Number",
          description: "Step-by-step guide to checking if a used phone is stolen before you buy it. Works for iPhone and Android devices.",
          url: "",
          duration: "4:30",
          category: "Tutorial"
        },
        {
          title: "VIN Number Verification for Used Cars",
          description: "Complete tutorial on verifying vehicle history and checking if a car is reported stolen using VIN lookup.",
          url: "",
          duration: "5:20",
          category: "Tutorial"
        },
        {
          title: "Using Barcode Scanner for Instant Verification",
          description: "Learn how to use the mobile app's barcode scanner feature to verify items instantly at meetup locations.",
          url: "",
          duration: "3:10",
          category: "App Tutorial"
        },
        {
          title: "Serial Number Lookup for Electronics",
          description: "How to find and verify serial numbers on laptops, cameras, and other electronics to avoid buying stolen goods.",
          url: "",
          duration: "4:45",
          category: "Tutorial"
        }
      ]
    },
    {
      title: "Marketplace Safety",
      icon: <Users className="w-5 h-5" />,
      videos: [
        {
          title: "Facebook Marketplace Safety - Red Flags to Watch",
          description: "Essential safety tips and warning signs when buying items on Facebook Marketplace, Craigslist, and OfferUp.",
          url: "",
          duration: "6:15",
          category: "Safety Guide"
        },
        {
          title: "Meeting Safely for In-Person Transactions",
          description: "Best practices for safe meetups when buying or selling items locally, including how to use SafeOrStolen on-site.",
          url: "",
          duration: "5:30",
          category: "Safety Guide"
        },
        {
          title: "How Sellers Can Prove Items Are Legitimate",
          description: "Learn how to use SafeOrStolen verification certificates to build buyer trust and sell items faster.",
          url: "",
          duration: "3:50",
          category: "Seller Tips"
        }
      ]
    },
    {
      title: "Success Stories",
      icon: <TrendingUp className="w-5 h-5" />,
      videos: [
        {
          title: "Customer Success Stories - Lives Protected",
          description: "Real users share their stories of how SafeOrStolen saved them from financial loss and legal trouble.",
          url: "",
          duration: "4:15",
          category: "Testimonials",
          thumbnail: "/lovable-uploads/a8b08d24-e3e1-4c4b-85c9-5093cb107354.png"
        },
        {
          title: "Pawn Shop Owner Saves $50K with SafeOrStolen",
          description: "How a Phoenix pawn shop prevented buying stolen merchandise and improved their business reputation.",
          url: "",
          duration: "5:00",
          category: "Business Case Study"
        },
        {
          title: "Marketplace Seller Increases Sales 40%",
          description: "See how using verification certificates helped a seller build trust and dramatically increase sales.",
          url: "",
          duration: "3:30",
          category: "Success Story"
        }
      ]
    },
    {
      title: "Mobile App Features",
      icon: <Smartphone className="w-5 h-5" />,
      videos: [
        {
          title: "Mobile App Features - Complete Walkthrough",
          description: "Explore all features of the SafeOrStolen mobile app including offline mode, barcode scanning, and instant results.",
          url: "",
          duration: "6:45",
          category: "App Demo"
        },
        {
          title: "Offline Verification - No Internet Required",
          description: "See how the app's offline mode lets you verify items even without internet connection at remote meetup locations.",
          url: "",
          duration: "3:20",
          category: "Feature Demo"
        },
        {
          title: "Download & Install the Mobile App",
          description: "Quick guide to downloading SafeOrStolen on iOS and Android, plus first-time setup walkthrough.",
          url: "",
          duration: "2:45",
          category: "Getting Started"
        }
      ]
    },
    {
      title: "Business Solutions",
      icon: <AlertCircle className="w-5 h-5" />,
      videos: [
        {
          title: "SafeOrStolen for Pawn Shops",
          description: "How pawn shops use SafeOrStolen to verify items instantly, reduce risk, and maintain compliance with regulations.",
          url: "",
          duration: "5:15",
          category: "Business"
        },
        {
          title: "Bulk Verification for Dealers",
          description: "Learn about our API and bulk verification tools designed for high-volume dealers and auction houses.",
          url: "",
          duration: "4:30",
          category: "Enterprise"
        },
        {
          title: "Integration with Your Business Workflow",
          description: "See how businesses integrate SafeOrStolen verification into their existing processes and inventory systems.",
          url: "",
          duration: "6:00",
          category: "Integration"
        }
      ]
    }
  ];

  return (
    <>
      <PageSEO
        title="Video Tutorials & Guides | SafeOrStolen"
        description="Watch comprehensive video tutorials on how to verify stolen items, use the SafeOrStolen mobile app, stay safe on marketplaces, and protect yourself from buying stolen goods. Step-by-step guides for IMEI, VIN, and serial number verification."
        keywords="stolen item verification videos, IMEI checker tutorial, VIN lookup guide, marketplace safety videos, SafeOrStolen app demo, how to check stolen phone, vehicle verification tutorial"
        canonical="/videos"
      />

      <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
        {/* Hero Section */}
        <section className="relative py-16 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          
          <div className="container mx-auto max-w-7xl relative">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                <Play className="w-4 h-4 mr-2" />
                Video Library
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
                Learn How to Protect Yourself
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Watch comprehensive video tutorials and guides on verifying stolen items, 
                using our mobile app, and staying safe when buying or selling online.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">25+ Tutorial Videos</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Play className="w-4 h-4 text-accent" />
                  <span className="text-muted-foreground">Step-by-Step Guides</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Smartphone className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">App Demonstrations</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Video */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Featured Video</h2>
              <p className="text-muted-foreground">Understanding the stolen goods crisis</p>
            </div>
            
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden">
              <CardContent className="p-0">
                <VideoEmbed 
                  url="https://YouTube.com/shorts/Er_PXY0oMgE?si=nhhHl7uKYXWfJcwZ"
                  title="The $13 Billion Stolen Goods Problem"
                  aspectRatio="16/9"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">The $13 Billion Problem Explained</h3>
                  <p className="text-muted-foreground">
                    Discover the massive scope of the stolen goods crisis and how it impacts innocent 
                    consumers, businesses, and communities worldwide. Learn why verification is essential.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Video Categories */}
        {videoCategories.map((category, idx) => (
          <section key={idx} className="py-12 px-6">
            <div className="container mx-auto max-w-7xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h2 className="text-3xl font-bold">{category.title}</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.videos.map((video, videoIdx) => (
                  <Card 
                    key={videoIdx}
                    className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden"
                  >
                    <CardContent className="p-0">
                      {/* Video Thumbnail */}
                      <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                        {video.thumbnail ? (
                          <img 
                            src={video.thumbnail} 
                            alt={video.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <Play className="w-16 h-16 text-primary/40 mx-auto mb-2" />
                              <span className="text-sm text-muted-foreground">Video Coming Soon</span>
                            </div>
                          </div>
                        )}
                        
                        {/* Play Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="bg-primary/90 rounded-full p-4">
                            <Play className="w-8 h-8 text-white" />
                          </div>
                        </div>

                        {/* Duration Badge */}
                        <div className="absolute top-3 right-3">
                          <Badge variant="secondary" className="bg-black/80 text-white border-none">
                            {video.duration}
                          </Badge>
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-3 left-3">
                          <Badge variant="secondary" className="bg-primary/80 text-white border-none">
                            {video.category}
                          </Badge>
                        </div>
                      </div>

                      {/* Video Info */}
                      <div className="p-5">
                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {video.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {video.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Start Verifying?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Download the SafeOrStolen app and start protecting yourself from stolen goods today.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="/app/download"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                  >
                    <Smartphone className="w-5 h-5" />
                    Download Mobile App
                  </a>
                  <a 
                    href="/verify"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors font-semibold"
                  >
                    <Shield className="w-5 h-5" />
                    Verify an Item Now
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default VideosPage;