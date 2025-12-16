import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Youtube, ExternalLink, Play, Video, Users, Bell, Car, Bike, Smartphone, ShieldCheck } from 'lucide-react';

const YouTubePage: React.FC = () => {
  const youtubeUrl = 'https://www.youtube.com/@SafeOrStolen';
  const subscribeUrl = 'https://www.youtube.com/@SafeOrStolen?sub_confirmation=1';

  const handleVisitChannel = () => {
    window.open(youtubeUrl, '_blank', 'noopener,noreferrer');
  };

  const handleSubscribe = () => {
    window.open(subscribeUrl, '_blank', 'noopener,noreferrer');
  };

  // Real video from the channel - confirmed working
  const featuredVideoId = 'Er_PXY0oMgE';

  // Video content from actual channel
  const videoCategories = [
    {
      id: 1,
      title: "Check Used Cars Before Buying",
      description: "Before buying a used car, check if it's not listed as stolen at SafeOrStolen.com",
      icon: Car,
      color: "from-red-500 to-orange-500"
    },
    {
      id: 2,
      title: "Verify Bicycles Before Purchase",
      description: "Before buying a bicycle, check if it's stolen on SafeOrStolen.com",
      icon: Bike,
      color: "from-blue-500 to-purple-500"
    },
    {
      id: 3,
      title: "Instant Stolen Item Lookup",
      description: "Don't handle stolen merchandise. Look it up in 3 seconds.",
      icon: Smartphone,
      color: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      title: "Protect Yourself from Fraud",
      description: "Learn marketplace safety tips for buying used items",
      icon: ShieldCheck,
      color: "from-purple-500 to-pink-500"
    }
  ];

  // Enhanced structured data with ItemList for video collection
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "SafeOrStolen YouTube Channel - Stolen Item Verification Tutorials",
      "description": "Watch free video tutorials on stolen item verification. Learn IMEI checking, VIN lookup, and serial number verification. 8+ videos, growing community.",
      "url": "https://safeorstolen.com/youtube",
      "mainEntity": {
        "@type": "ItemList",
        "name": "SafeOrStolen Video Tutorials",
        "numberOfItems": 8,
        "itemListElement": videoCategories.map((video, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "VideoObject",
            "name": video.title,
            "description": video.description,
            "thumbnailUrl": `https://img.youtube.com/vi/${featuredVideoId}/maxresdefault.jpg`,
            "uploadDate": "2024-12-01T00:00:00Z",
            "contentUrl": `https://www.youtube.com/watch?v=${featuredVideoId}`,
            "embedUrl": `https://www.youtube.com/embed/${featuredVideoId}`,
            "publisher": {
              "@type": "Organization",
              "name": "SafeOrStolen",
              "logo": {
                "@type": "ImageObject",
                "url": "https://safeorstolen.com/logo.png"
              }
            }
          }
        }))
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "The $13 Billion Stolen Goods Problem - SafeOrStolen",
      "description": "Learn about the massive stolen goods market in America and how SafeOrStolen helps buyers and sellers verify items aren't stolen before purchase.",
      "thumbnailUrl": `https://img.youtube.com/vi/${featuredVideoId}/maxresdefault.jpg`,
      "uploadDate": "2024-12-01T00:00:00Z",
      "duration": "PT1M",
      "contentUrl": `https://www.youtube.com/shorts/${featuredVideoId}`,
      "embedUrl": `https://www.youtube.com/embed/${featuredVideoId}`,
      "publisher": {
        "@type": "Organization",
        "name": "SafeOrStolen",
        "logo": {
          "@type": "ImageObject",
          "url": "https://safeorstolen.com/logo.png"
        }
      }
    }
  ];

  return (
    <>
      <PageSEO
        title="SafeOrStolen YouTube - Stolen Item Verification Tutorials & Safety Tips"
        description="Watch free tutorials on checking if items are stolen. Learn IMEI verification, VIN lookup, and serial number checking. 8+ videos with 2.8K+ views. Subscribe for weekly safety tips."
        keywords="SafeOrStolen YouTube, stolen item checker tutorial, IMEI checker video, VIN lookup guide, serial number verification how-to, marketplace safety tips"
        canonical="/youtube"
        structuredData={structuredData}
      />

      <Helmet>
        <meta property="og:video" content={`https://www.youtube.com/embed/${featuredVideoId}`} />
        <meta property="og:video:type" content="text/html" />
        <meta property="og:video:width" content="1280" />
        <meta property="og:video:height" content="720" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2">
              <Youtube className="w-4 h-4 mr-2" />
              Watch & Learn
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              SafeOrStolen <span className="text-red-600">YouTube</span> Channel
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Free video tutorials on verifying secondhand items before buying. Quick tips to avoid stolen goods on Facebook Marketplace, eBay, and Craigslist.
            </p>
            
            {/* Real Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
              <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full">
                <Users className="w-4 h-4 text-red-600" />
                <span className="text-muted-foreground">Growing Community</span>
              </div>
              <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full">
                <Video className="w-4 h-4 text-red-600" />
                <span className="text-muted-foreground">8+ Videos</span>
              </div>
              <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full">
                <Play className="w-4 h-4 text-red-600" />
                <span className="text-muted-foreground">2.8K+ Views</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                onClick={handleSubscribe}
                className="bg-red-600 hover:bg-red-700 text-white gap-2 px-8"
                aria-label="Subscribe to SafeOrStolen YouTube channel"
              >
                <Bell className="h-5 w-5" aria-hidden="true" />
                Subscribe for Tips
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={handleVisitChannel}
                className="border-red-600 text-red-600 hover:bg-red-600/10 gap-2"
                aria-label="Visit SafeOrStolen YouTube channel"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                View All Videos
              </Button>
            </div>
          </div>

          {/* Featured Video */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Featured: The $13 Billion Problem</h2>
            <Card className="overflow-hidden shadow-xl border-2 border-red-600/20">
              <div className="aspect-video bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${featuredVideoId}?rel=0&modestbranding=1`}
                  title="The $13 Billion Stolen Goods Problem - SafeOrStolen"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </Card>
            <p className="mt-4 text-center text-muted-foreground">
              Learn about the massive scale of stolen goods in America and how SafeOrStolen helps protect buyers and sellers.
            </p>
          </div>

          {/* Video Categories Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">What You'll Learn</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {videoCategories.map((video) => (
                <a 
                  key={video.id}
                  href={youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className={`relative aspect-video bg-gradient-to-br ${video.color} flex items-center justify-center`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="relative z-10 text-center text-white p-4">
                        <video.icon className="w-12 h-12 mx-auto mb-2 opacity-90" />
                        <Play className="w-8 h-8 mx-auto opacity-70" />
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-red-600 transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {video.description}
                      </p>
                      <div className="mt-3 flex items-center gap-2 text-sm text-red-600">
                        <Youtube className="w-4 h-4" />
                        <span>Watch on YouTube</span>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>

          {/* Content Types */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="h-6 w-6 text-red-600" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-lg mb-2">YouTube Shorts</h3>
              <p className="text-muted-foreground text-sm">
                Quick tips under 60 seconds. Perfect for learning on the go.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="h-6 w-6 text-red-600" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-lg mb-2">How-To Guides</h3>
              <p className="text-muted-foreground text-sm">
                Step-by-step tutorials for IMEI, VIN, and serial number checks.
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-red-600" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Safety Tips</h3>
              <p className="text-muted-foreground text-sm">
                Learn to spot stolen items and avoid scams when buying secondhand.
              </p>
            </Card>
          </div>

          {/* Subscribe CTA */}
          <div className="text-center bg-gradient-to-r from-red-600/10 to-orange-600/10 rounded-2xl p-8 border border-red-600/20">
            <Youtube className="w-16 h-16 mx-auto text-red-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Subscribe for Weekly Updates</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get notified when we post new stolen item verification tutorials. Join buyers who are learning to protect themselves from fraud.
            </p>
            <Button 
              size="lg" 
              onClick={handleSubscribe}
              className="bg-red-600 hover:bg-red-700 text-white gap-2 px-8 py-6 text-lg"
              aria-label="Subscribe to SafeOrStolen on YouTube"
            >
              <Bell className="h-5 w-5" aria-hidden="true" />
              Subscribe Now - It's Free
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              New tutorials weekly • Marketplace safety tips • Protect yourself from stolen goods
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default YouTubePage;
