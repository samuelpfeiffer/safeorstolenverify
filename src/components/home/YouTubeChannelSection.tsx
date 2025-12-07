import { Youtube, Bell, Users, Video, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Helmet } from 'react-helmet-async';

export const YouTubeChannelSection = () => {
  const handleSubscribe = () => {
    window.open('https://www.youtube.com/@safeorstolen?sub_confirmation=1', '_blank');
  };

  // Actual YouTube Shorts video IDs from the channel
  const featuredVideos = [
    {
      id: "Er_PXY0oMgE",
      title: "The $13 Billion Stolen Goods Problem",
      description: "Learn about the massive scale of stolen goods in America and how to protect yourself.",
      uploadDate: "2024-12-01"
    },
    {
      id: "mUVEMfZdYu0",
      title: "How to Check if a Phone is Stolen",
      description: "Quick guide on verifying IMEI numbers before buying used phones.",
      uploadDate: "2024-12-03"
    },
    {
      id: "8JLRHpZpXwE",
      title: "VIN Check Before Buying a Car",
      description: "Why you should always verify a vehicle's VIN before purchase.",
      uploadDate: "2024-12-05"
    }
  ];

  // VideoObject schema for SEO
  const videoSchemas = featuredVideos.map(video => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.title,
    "description": video.description,
    "thumbnailUrl": `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`,
    "uploadDate": video.uploadDate,
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
  }));

  return (
    <>
      <Helmet>
        {videoSchemas.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>
      
      <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-10">
            <Badge className="mb-4 bg-red-600 hover:bg-red-700 text-white">
              <Youtube className="w-4 h-4 mr-2" />
              Watch & Learn
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Protect Yourself on <span className="text-red-600">YouTube</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Quick tips to avoid buying stolen goods. Subscribe for weekly updates.
            </p>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-red-600" />
              <span className="text-muted-foreground">Growing Community</span>
            </div>
            <div className="flex items-center gap-2">
              <Video className="w-4 h-4 text-red-600" />
              <span className="text-muted-foreground">8+ Videos</span>
            </div>
            <div className="flex items-center gap-2">
              <Play className="w-4 h-4 text-red-600" />
              <span className="text-muted-foreground">2.8K+ Views</span>
            </div>
          </div>

          {/* Embedded Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {featuredVideos.map((video) => (
              <div 
                key={video.id}
                className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-card border"
              >
                <div className="aspect-[9/16] md:aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground line-clamp-2">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Subscribe CTA */}
          <div className="text-center">
            <Button 
              size="lg" 
              onClick={handleSubscribe}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-semibold"
            >
              <Bell className="w-5 h-5 mr-2" />
              Subscribe for Tips
            </Button>
            <p className="text-muted-foreground mt-4 text-sm">
              Join buyers learning to protect themselves from fraud
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
