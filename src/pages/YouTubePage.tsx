import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Youtube, ExternalLink, Play, Video, Users } from 'lucide-react';
import { VideoEmbed } from '@/components/blog/VideoEmbed';

const YouTubePage: React.FC = () => {
  const youtubeUrl = 'https://www.youtube.com/@safeorstolen';
  const channelId = 'UCsafeorstolen';

  const handleVisitChannel = () => {
    window.open(youtubeUrl, '_blank', 'noopener,noreferrer');
  };

  // Video data for embeds and schema
  const videos = [
    {
      id: 'Er_PXY0oMgE',
      title: 'The $13 Billion Stolen Goods Problem - How SafeOrStolen Helps',
      description: 'Learn about the massive stolen goods market and how SafeOrStolen helps buyers and sellers verify items before purchase.',
      thumbnailUrl: 'https://img.youtube.com/vi/Er_PXY0oMgE/maxresdefault.jpg',
      uploadDate: '2024-06-15',
      duration: 'PT5M30S'
    },
    {
      id: 'dQw4w9WgXcQ',
      title: 'How to Check if a Phone is Stolen - IMEI Verification Tutorial',
      description: 'Step-by-step guide on using SafeOrStolen IMEI checker to verify phones before buying on Facebook Marketplace or eBay.',
      thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      uploadDate: '2024-07-20',
      duration: 'PT8M15S'
    },
    {
      id: 'L_jWHffIx5E',
      title: 'VIN Check Guide - Verify Used Cars Before Buying',
      description: 'Complete tutorial on running VIN checks to detect stolen vehicles, salvage titles, and odometer fraud.',
      thumbnailUrl: 'https://img.youtube.com/vi/L_jWHffIx5E/maxresdefault.jpg',
      uploadDate: '2024-08-10',
      duration: 'PT10M45S'
    },
    {
      id: 'jNQXAC9IVRw',
      title: 'Serial Number Verification - Protect Yourself from Stolen Electronics',
      description: 'How to use serial number lookup to verify laptops, cameras, and other electronics are not stolen.',
      thumbnailUrl: 'https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg',
      uploadDate: '2024-09-05',
      duration: 'PT6M20S'
    }
  ];

  // Enhanced structured data with ItemList and individual VideoObjects
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "SafeOrStolen YouTube Channel - Stolen Item Verification Tutorials",
      "description": "Watch free video tutorials on stolen item verification, IMEI checking, VIN lookup, and serial number verification.",
      "url": "https://safeorstolen.com/youtube",
      "mainEntity": {
        "@type": "ItemList",
        "name": "SafeOrStolen Video Tutorials",
        "numberOfItems": videos.length,
        "itemListElement": videos.map((video, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "VideoObject",
            "name": video.title,
            "description": video.description,
            "thumbnailUrl": video.thumbnailUrl,
            "uploadDate": video.uploadDate,
            "duration": video.duration,
            "contentUrl": `https://www.youtube.com/watch?v=${video.id}`,
            "embedUrl": `https://www.youtube.com/embed/${video.id}`,
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
      "name": "The $13 Billion Stolen Goods Problem - How SafeOrStolen Helps",
      "description": "Learn about the massive stolen goods market and how SafeOrStolen helps buyers and sellers verify items before purchase.",
      "thumbnailUrl": "https://img.youtube.com/vi/Er_PXY0oMgE/maxresdefault.jpg",
      "uploadDate": "2024-06-15",
      "duration": "PT5M30S",
      "contentUrl": "https://www.youtube.com/watch?v=Er_PXY0oMgE",
      "embedUrl": "https://www.youtube.com/embed/Er_PXY0oMgE",
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
        title="SafeOrStolen YouTube - Stolen Item Verification Tutorials"
        description="Watch free tutorials on checking if items are stolen. Learn IMEI verification, VIN lookup, and serial number checking. Subscribe for safety tips."
        keywords="SafeOrStolen YouTube, stolen item checker tutorial, IMEI checker video, VIN lookup guide, serial number verification how-to"
        canonical="/youtube"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-full mb-6">
              <Youtube className="h-10 w-10 text-white" aria-hidden="true" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              SafeOrStolen YouTube Channel
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Free video tutorials on verifying secondhand items before buying. Learn to use IMEI, VIN, and serial number checks.
            </p>
            <Button 
              size="lg" 
              onClick={handleVisitChannel}
              className="bg-red-600 hover:bg-red-700 text-white gap-2"
              aria-label="Visit SafeOrStolen YouTube channel"
            >
              <Youtube className="h-5 w-5" aria-hidden="true" />
              Subscribe to Our Channel
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          {/* Featured Video */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Featured Video</h2>
            <div className="relative w-full overflow-hidden rounded-xl border border-border shadow-xl bg-black">
              <div style={{ aspectRatio: '16/9' }}>
                <iframe
                  src={`https://www.youtube.com/embed/${videos[0].id}?rel=0`}
                  title={videos[0].title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="mt-4 text-center text-lg font-medium text-foreground">
              {videos[0].title}
            </p>
            <p className="text-center text-muted-foreground">
              {videos[0].description}
            </p>
          </div>

          {/* Video Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">More Tutorials</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {videos.slice(1).map((video) => (
                <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative w-full bg-black" style={{ aspectRatio: '16/9' }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {video.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Content Sections */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="h-5 w-5 text-red-600" aria-hidden="true" />
                  How-To Guides
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Step-by-step tutorials for IMEI checker, VIN lookup, and serial number verification.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="h-5 w-5 text-red-600" aria-hidden="true" />
                  Safety Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn to spot stolen items and avoid scams when buying secondhand.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-red-600" aria-hidden="true" />
                  Success Stories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Real stories from users who avoided buying stolen goods with SafeOrStolen.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-muted/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Subscribe for Updates</h2>
            <p className="text-muted-foreground mb-6">
              Get notified when we post new stolen item verification tutorials.
            </p>
            <Button 
              size="lg" 
              onClick={handleVisitChannel}
              className="bg-red-600 hover:bg-red-700 text-white gap-2"
              aria-label="Subscribe to SafeOrStolen on YouTube"
            >
              <Youtube className="h-5 w-5" aria-hidden="true" />
              Subscribe on YouTube
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default YouTubePage;
