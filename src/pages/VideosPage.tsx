import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Youtube, Play, ExternalLink, Bell, ThumbsUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';

const VideosPage = () => {
  const featuredVideos = [
    {
      title: "How to Check if a Phone is Stolen",
      description: "Learn how to verify any phone's IMEI number before buying on Facebook Marketplace or eBay.",
      thumbnail: "/images/video-thumb-phone.png",
      duration: "2:30",
      views: "1.2K"
    },
    {
      title: "VIN Lookup Tutorial - Verify Any Vehicle",
      description: "Step-by-step guide to checking if a used car, motorcycle, or truck is stolen.",
      thumbnail: "/images/video-thumb-car.png",
      duration: "3:15",
      views: "800"
    },
    {
      title: "SafeOrStolen App Demo",
      description: "Watch how easy it is to scan barcodes and serial numbers with our mobile app.",
      thumbnail: "/images/video-thumb-app.png",
      duration: "1:45",
      views: "2.1K"
    }
  ];

  const channelStats = [
    { icon: Users, value: "Growing", label: "Subscribers" },
    { icon: Play, value: "10+", label: "Videos" },
    { icon: ThumbsUp, value: "Safe Buying", label: "Tips & Tricks" }
  ];

  return (
    <>
      <PageSEO
        title="Videos | SafeOrStolen Tutorials & Tips"
        description="Watch SafeOrStolen tutorials and tips on verifying secondhand items before buying. Learn how to check IMEI, VIN, and serial numbers."
        keywords="SafeOrStolen videos, IMEI check tutorial, VIN lookup guide, stolen item verification tips, YouTube"
        canonical="/videos"
        isVideoPage={true}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "VideoGallery",
          "name": "SafeOrStolen Video Tutorials",
          "description": "Educational videos about verifying secondhand items",
          "provider": {
            "@type": "Organization",
            "name": "SafeOrStolen"
          }
        }}
      />
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 pt-24 pb-4">
          <BreadcrumbNavigation items={[{ name: 'Videos', href: '/videos' }]} />
        </div>

        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-red-500/10 via-background to-primary/5">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="outline" className="mb-4 border-red-500/50 text-red-500">
              <Youtube className="h-4 w-4 mr-2" />
              YouTube Channel
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              SafeOrStolen Videos
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Watch tutorials, tips, and guides on how to verify secondhand items before buying
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
                <a 
                  href="https://www.youtube.com/@SafeOrStolen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <Youtube className="h-5 w-5" />
                  Subscribe on YouTube
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a 
                  href="https://www.youtube.com/@SafeOrStolen?sub_confirmation=1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <Bell className="h-5 w-5" />
                  Turn On Notifications
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Channel Stats */}
        <section className="py-12 border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              {channelStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-red-500" />
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Videos */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Featured Videos</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
              Learn how to protect yourself from buying stolen goods
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {featuredVideos.map((video, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative aspect-video bg-muted">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <div className="p-4 bg-red-600 rounded-full group-hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 text-white fill-white" />
                      </div>
                    </div>
                    <Badge className="absolute bottom-2 right-2 bg-black/80">
                      {video.duration}
                    </Badge>
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="font-bold mb-2 line-clamp-2">{video.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                      {video.description}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {video.views} views
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline" size="lg" asChild>
                <a 
                  href="https://www.youtube.com/@SafeOrStolen/videos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  View All Videos
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Topics We Cover */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Topics We Cover</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { title: "IMEI Checking", desc: "How to verify phone serial numbers" },
                { title: "VIN Lookups", desc: "Vehicle theft verification guides" },
                { title: "Marketplace Safety", desc: "Tips for Facebook Marketplace, eBay, OfferUp" },
                { title: "Scam Prevention", desc: "How to spot stolen goods and avoid scams" }
              ].map((topic, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 text-center">
                    <h3 className="font-bold mb-2">{topic.title}</h3>
                    <p className="text-sm text-muted-foreground">{topic.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Try It Yourself?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Stop watching, start verifying. Get 2 free searches today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/verify">
                  Start Free Verification
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/app">
                  Download App
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default VideosPage;
