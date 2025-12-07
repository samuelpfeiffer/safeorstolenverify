import { Youtube, Play, Bell, Users, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const YouTubeChannelSection = () => {
  const handleSubscribe = () => {
    window.open('https://www.youtube.com/@safeorstolen?sub_confirmation=1', '_blank');
  };

  const handleWatchVideos = () => {
    window.open('https://www.youtube.com/@safeorstolen', '_blank');
  };

  const featuredShorts = [
    {
      title: "The $13 Billion Problem",
      views: "1.8K views",
      thumbnail: "https://img.youtube.com/vi/Er_PXY0oMgE/maxresdefault.jpg",
      url: "https://youtube.com/shorts/Er_PXY0oMgE"
    },
    {
      title: "How Buyers Get Scammed",
      views: "984 views",
      thumbnail: "https://img.youtube.com/vi/Er_PXY0oMgE/hqdefault.jpg",
      url: "https://www.youtube.com/@safeorstolen/shorts"
    },
    {
      title: "Check Before You Buy",
      views: "New",
      thumbnail: "https://img.youtube.com/vi/Er_PXY0oMgE/mqdefault.jpg",
      url: "https://www.youtube.com/@safeorstolen/shorts"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-red-600 hover:bg-red-700 text-white">
            <Youtube className="w-4 h-4 mr-2" />
            Watch & Learn
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Follow Us on <span className="text-red-600">YouTube</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn how to protect yourself from stolen goods. Tips, tutorials, and real stories from the marketplace.
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-red-600" />
            <span className="font-semibold">Growing Community</span>
          </div>
          <div className="flex items-center gap-2">
            <Video className="w-5 h-5 text-red-600" />
            <span className="font-semibold">8+ Videos</span>
          </div>
          <div className="flex items-center gap-2">
            <Play className="w-5 h-5 text-red-600" />
            <span className="font-semibold">2.8K+ Views</span>
          </div>
        </div>

        {/* Video Thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredShorts.map((short, index) => (
            <Card 
              key={index}
              className="overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300 border-2 hover:border-red-600/50"
              onClick={() => window.open(short.url, '_blank')}
            >
              <div className="relative aspect-[9/16] md:aspect-video bg-muted">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <p className="text-white font-semibold text-lg">{short.title}</p>
                  <p className="text-white/70 text-sm">{short.views}</p>
                </div>
                <div className="absolute top-4 right-4 z-20">
                  <Badge className="bg-red-600 text-white">Short</Badge>
                </div>
                {/* Placeholder gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/50 via-background to-red-950/50" />
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            onClick={handleSubscribe}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-semibold"
          >
            <Bell className="w-5 h-5 mr-2" />
            Subscribe to Our Channel
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={handleWatchVideos}
            className="border-red-600 text-red-600 hover:bg-red-600/10 px-8 py-6 text-lg font-semibold"
          >
            <Youtube className="w-5 h-5 mr-2" />
            Watch All Videos
          </Button>
        </div>

        {/* Social Proof */}
        <p className="text-center text-muted-foreground mt-8 text-sm">
          Join buyers and sellers learning to protect themselves from fraud
        </p>
      </div>
    </section>
  );
};
