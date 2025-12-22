import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Shield, Users, TrendingUp, Youtube, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  YOUTUBE_VIDEOS, 
  YOUTUBE_CHANNEL,
  getYouTubeThumbnail,
  getYouTubeShortsUrl
} from '@/config/videoData';

// NOTE: VideoObject schema REMOVED from this component.
// Google requires VideoObject schema ONLY on dedicated "watch pages" (like /youtube).
// Having VideoObject on non-watch pages causes "Video isn't on a watch page" indexing errors.
// See: https://developers.google.com/search/docs/appearance/video

export const VideoMarketingSection = () => {
  const handleSubscribe = () => {
    window.open(YOUTUBE_CHANNEL.subscribeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* NOTE: No VideoObject schema here - only on dedicated watch pages like /youtube */}

      <section className="py-24 px-6 bg-gradient-to-b from-sos to-sos/95">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-sos-lime/20 text-sos-lime border-sos-lime/30">
              <Play className="h-4 w-4 mr-2" />
              Video Tutorials
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Learn How to Protect Yourself
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Watch our free video tutorials on verifying secondhand items. 
              Quick tips to avoid buying stolen goods on marketplaces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {YOUTUBE_VIDEOS.map((video) => {
              const thumbnailSrc = getYouTubeThumbnail(video.videoId, 'hq');
              
              const handleVideoClick = () => {
                window.open(getYouTubeShortsUrl(video.videoId), '_blank');
              };

              return (
                <Card 
                  key={video.id} 
                  className="bg-white/5 border-sos-orange/20 backdrop-blur-sm group hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  onClick={handleVideoClick}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={thumbnailSrc} 
                        alt={video.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform">
                          <Play className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge variant="secondary" className="bg-black/60 text-white border-none">
                          {video.duration}
                        </Badge>
                      </div>
                      <div className="absolute top-3 left-3">
                        <Badge variant="secondary" className="bg-sos-orange/80 text-white border-none">
                          {video.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sos-orange transition-colors line-clamp-2">
                        {video.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                        {video.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-sos-orange/10 to-sos-lime/10 rounded-2xl p-8 border border-sos-orange/20">
              <Youtube className="w-12 h-12 mx-auto text-red-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Subscribe for Weekly Tips</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get notified when we post new stolen item verification tutorials. 
                Join our growing community of smart buyers.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Button 
                  onClick={handleSubscribe}
                  className="bg-red-600 hover:bg-red-700 text-white gap-2 px-8"
                  size="lg"
                >
                  <Bell className="h-5 w-5" />
                  Subscribe on YouTube
                </Button>
                <Link to="/youtube">
                  <Button 
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 gap-2 px-8"
                    size="lg"
                  >
                    View All Videos
                  </Button>
                </Link>
              </div>
              
              <div className="flex flex-wrap justify-center gap-8">
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-sos-orange" />
                  <span className="text-white font-medium">Consumer Protection</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-sos-lime" />
                  <span className="text-white font-medium">User Education</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-sos-orange" />
                  <span className="text-white font-medium">Market Impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
