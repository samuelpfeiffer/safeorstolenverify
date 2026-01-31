import { Youtube, Bell, Users, Video, Play, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  YOUTUBE_VIDEOS, 
  YOUTUBE_CHANNEL,
  getYouTubeThumbnail,
  getFeaturedVideo
} from '@/config/videoData';

export const YouTubeChannelSection = () => {
  const handleSubscribe = () => {
    window.open(YOUTUBE_CHANNEL.subscribeUrl, '_blank');
  };

  const featuredVideo = getFeaturedVideo();

  // NOTE: VideoObject schema removed - this component is used on non-video pages
  // VideoObject schema is only on /youtube page which IS a dedicated video watch page

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10">
          <Badge className="mb-4 bg-red-600 hover:bg-red-700 text-white">
            <Youtube className="w-4 h-4 mr-2" />
            @safeorstolenoffically
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Watch <span className="text-red-600">Kelly McEvoy</span> on YouTube
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {YOUTUBE_CHANNEL.description}
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Subscribe to <a href={YOUTUBE_CHANNEL.url} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-medium">{YOUTUBE_CHANNEL.handle}</a> for stolen item detection tips
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
            <span className="text-muted-foreground">{YOUTUBE_VIDEOS.length} Videos</span>
          </div>
          <div className="flex items-center gap-2">
            <Play className="w-4 h-4 text-red-600" />
            <span className="text-muted-foreground">{YOUTUBE_CHANNEL.viewCount} Views</span>
          </div>
        </div>

        {/* Featured Video - Single embed for reliability */}
        <Card className="overflow-hidden shadow-xl mb-8 border-2 border-red-600/20">
          <div className="aspect-video">
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

        {/* Video Thumbnails Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {YOUTUBE_VIDEOS.map((video) => (
            <Link
              key={video.id}
              to={`/youtube/${video.slug}`}
              className="group relative rounded-lg overflow-hidden aspect-video"
            >
              <img
                src={getYouTubeThumbnail(video.videoId, 'mq')}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                <Play className="w-8 h-8 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              </div>
              <Badge className="absolute bottom-2 right-2 bg-black/70 text-white text-xs">
                {video.duration}
              </Badge>
            </Link>
          ))}
        </div>

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
          <Link to="/youtube">
            <Button 
              size="lg" 
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600/10 px-8 py-6 text-lg font-semibold"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              View All Videos
            </Button>
          </Link>
        </div>

        <p className="text-center text-muted-foreground mt-6 text-sm">
          Join buyers learning to protect themselves from fraud
        </p>
      </div>
    </section>
  );
};
