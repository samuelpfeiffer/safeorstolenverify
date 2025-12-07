import { Youtube, Bell, Users, Video, Play, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';

export const YouTubeChannelSection = () => {
  const handleSubscribe = () => {
    window.open('https://www.youtube.com/@safeorstolen?sub_confirmation=1', '_blank');
  };

  // Use confirmed Short video ID from the channel
  const mainVideoId = "Er_PXY0oMgE";

  // VideoObject schema for SEO
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "The $13 Billion Stolen Goods Problem",
    "description": "Learn about the massive scale of stolen goods in America and how SafeOrStolen helps protect buyers and sellers.",
    "thumbnailUrl": `https://img.youtube.com/vi/${mainVideoId}/maxresdefault.jpg`,
    "uploadDate": "2024-12-01",
    "contentUrl": `https://www.youtube.com/shorts/${mainVideoId}`,
    "embedUrl": `https://www.youtube.com/embed/${mainVideoId}`,
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://safeorstolen.com/logo.png"
      }
    }
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(videoSchema)}
        </script>
      </Helmet>
      
      <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-4xl">
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

          {/* Featured Video - Single embed for reliability */}
          <Card className="overflow-hidden shadow-xl mb-8 border-2 border-red-600/20">
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${mainVideoId}?rel=0&modestbranding=1`}
                title="The $13 Billion Stolen Goods Problem - SafeOrStolen"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </Card>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              onClick={handleSubscribe}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-semibold"
            >
              <Bell className="w-5 h-5 mr-2" />
              Subscribe for Tips
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open('https://www.youtube.com/@safeorstolen', '_blank')}
              className="border-red-600 text-red-600 hover:bg-red-600/10 px-8 py-6 text-lg font-semibold"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              View All Videos
            </Button>
          </div>

          <p className="text-center text-muted-foreground mt-6 text-sm">
            Join buyers learning to protect themselves from fraud
          </p>
        </div>
      </section>
    </>
  );
};
