import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Youtube, ExternalLink, Play, Video, Users, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  YOUTUBE_VIDEOS, 
  YOUTUBE_CHANNEL, 
  YOUTUBE_CHANNEL_SECONDARY,
  getYouTubeThumbnail, 
  getYouTubeShortsUrl,
  getFeaturedVideo 
} from '@/config/videoData';
import { ThumbnailFactory, hasCustomThumbnail } from '@/components/youtube/thumbnails';

const YouTubePage: React.FC = () => {
  const handleVisitChannel = () => {
    window.open(YOUTUBE_CHANNEL.url, '_blank', 'noopener,noreferrer');
  };

  const handleSubscribe = () => {
    window.open(YOUTUBE_CHANNEL.subscribeUrl, '_blank', 'noopener,noreferrer');
  };

  const featuredVideo = getFeaturedVideo();

  // Collection page structured data - NO VideoObject schemas here
  // VideoObject schemas should only be on individual /youtube/{slug} watch pages
  // This prevents "Video isn't on a watch page" error in GSC
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "SafeOrStolen YouTube Channel - Stolen Item Verification Tutorials",
      "description": YOUTUBE_CHANNEL.description,
      "url": "https://safeorstolen.com/youtube",
      "mainEntity": {
        "@type": "ItemList",
        "name": "SafeOrStolen Video Tutorials",
        "numberOfItems": YOUTUBE_VIDEOS.length,
        "itemListElement": YOUTUBE_VIDEOS.map((video, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "url": `https://safeorstolen.com/youtube/${video.slug}`
        }))
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://safeorstolen.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "YouTube",
          "item": "https://safeorstolen.com/youtube"
        }
      ]
    }
  ];

  return (
    <>
      <PageSEO
        title="SafeOrStolen YouTube - Stolen Item Verification Tutorials & Safety Tips"
        description={`Watch free tutorials on checking if items are stolen. Learn IMEI verification, VIN lookup, and serial number checking. ${YOUTUBE_VIDEOS.length} videos with ${YOUTUBE_CHANNEL.viewCount} views. Subscribe for weekly safety tips.`}
        keywords="SafeOrStolen YouTube, stolen item checker tutorial, IMEI checker video, VIN lookup guide, serial number verification how-to, marketplace safety tips"
        canonical="/youtube"
        structuredData={structuredData}
        isVideoPage={false}
      />

      {/* NOTE: og:video removed - collection pages should not have video OG tags */}
      {/* Video OG tags are only on individual /youtube/{slug} watch pages */}

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <a href={YOUTUBE_CHANNEL.url} target="_blank" rel="noopener noreferrer">
                <Badge className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 cursor-pointer">
                  <Youtube className="w-4 h-4 mr-2" />
                  {YOUTUBE_CHANNEL.handle}
                </Badge>
              </a>
              <a href={YOUTUBE_CHANNEL_SECONDARY.url} target="_blank" rel="noopener noreferrer">
                <Badge className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 cursor-pointer">
                  <Youtube className="w-4 h-4 mr-2" />
                  {YOUTUBE_CHANNEL_SECONDARY.handle}
                </Badge>
              </a>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              SafeOrStolen <span className="text-red-600">YouTube</span> Channel
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              {YOUTUBE_CHANNEL.description}
            </p>
            
            {/* Real Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
              <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full">
                <Users className="w-4 h-4 text-red-600" />
                <span className="text-muted-foreground">Growing Community</span>
              </div>
              <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full">
                <Video className="w-4 h-4 text-red-600" />
                <span className="text-muted-foreground">{YOUTUBE_VIDEOS.length} Videos</span>
              </div>
              <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full">
                <Play className="w-4 h-4 text-red-600" />
                <span className="text-muted-foreground">{YOUTUBE_CHANNEL.viewCount} Views</span>
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
            <h2 className="text-2xl font-bold mb-6 text-center">Featured: {featuredVideo.title}</h2>
            <Card className="overflow-hidden shadow-xl border-2 border-red-600/20">
              <div className="aspect-video bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${featuredVideo.videoId}?rel=0&modestbranding=1`}
                  title={featuredVideo.seoTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </Card>
            <p className="mt-4 text-center text-muted-foreground">
              {featuredVideo.description}
            </p>
          </div>

          {/* All Videos Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">All Video Tutorials</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {YOUTUBE_VIDEOS.map((video) => (
                <Link 
                  key={video.id}
                  to={`/youtube/${video.slug}`}
                  className="group"
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="relative aspect-video">
                      {hasCustomThumbnail(video.slug) ? (
                        <ThumbnailFactory 
                          slug={video.slug} 
                          className="w-full h-full rounded-none"
                        />
                      ) : (
                        <img 
                          src={getYouTubeThumbnail(video.videoId, 'hq')}
                          alt={video.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      )}
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <Badge className="absolute top-2 right-2 bg-black/70 text-white">
                        {video.duration}
                      </Badge>
                      <Badge className="absolute top-2 left-2 bg-red-600 text-white">
                        {video.category}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                        {video.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {video.description}
                      </p>
                      <div className="mt-3 flex items-center gap-2 text-sm text-red-600">
                        <Youtube className="w-4 h-4" />
                        <span>Watch Tutorial</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
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
            <h2 className="text-2xl font-bold mb-4">Subscribe to Both Channels</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get notified when we post new stolen item verification tutorials. Join buyers who are learning to protect themselves from fraud.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={YOUTUBE_CHANNEL.subscribeUrl} target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-white gap-2 px-8 py-6 text-lg"
                  aria-label="Subscribe to @safeorstolenoffically on YouTube"
                >
                  <Bell className="h-5 w-5" aria-hidden="true" />
                  {YOUTUBE_CHANNEL.handle}
                </Button>
              </a>
              <a href={YOUTUBE_CHANNEL_SECONDARY.subscribeUrl} target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-600/10 gap-2 px-8 py-6 text-lg"
                  aria-label="Subscribe to @safeorstolen on YouTube"
                >
                  <Bell className="h-5 w-5" aria-hidden="true" />
                  {YOUTUBE_CHANNEL_SECONDARY.handle}
                </Button>
              </a>
            </div>
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
