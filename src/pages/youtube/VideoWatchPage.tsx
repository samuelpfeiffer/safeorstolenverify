import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Youtube, ExternalLink, Play, Bell, ArrowLeft, Share2 } from 'lucide-react';
import { 
  YOUTUBE_VIDEOS, 
  YOUTUBE_CHANNEL,
  YOUTUBE_CHANNEL_SECONDARY,
  getVideoBySlug,
  getYouTubeThumbnail,
  getYouTubeShortsUrl
} from '@/config/videoData';
import { ThumbnailFactory, hasCustomThumbnail } from '@/components/youtube/thumbnails';

const VideoWatchPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const video = slug ? getVideoBySlug(slug) : undefined;
  
  // Redirect to main YouTube page if video not found
  if (!video) {
    return <Navigate to="/youtube" replace />;
  }

  const handleSubscribe = () => {
    window.open(YOUTUBE_CHANNEL.subscribeUrl, '_blank', 'noopener,noreferrer');
  };

  const handleShare = async () => {
    const shareUrl = `https://safeorstolen.com/youtube/${video.slug}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: video.seoTitle,
          text: video.seoDescription,
          url: shareUrl,
        });
      } catch {
        // User cancelled or error
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
    }
  };

  // Get related videos (excluding current)
  const relatedVideos = YOUTUBE_VIDEOS.filter(v => v.id !== video.id).slice(0, 3);

  // VideoObject schema for this specific video
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.seoTitle,
    "description": video.seoDescription,
    "thumbnailUrl": getYouTubeThumbnail(video.videoId),
    "uploadDate": video.uploadDate,
    "duration": video.durationISO,
    "contentUrl": getYouTubeShortsUrl(video.videoId),
    "embedUrl": `https://www.youtube.com/embed/${video.videoId}`,
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://safeorstolen.com/logo.png"
      }
    },
    "potentialAction": {
      "@type": "WatchAction",
      "target": `https://safeorstolen.com/youtube/${video.slug}`
    }
  };

  const breadcrumbSchema = {
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": video.title,
        "item": `https://safeorstolen.com/youtube/${video.slug}`
      }
    ]
  };

  return (
    <>
      <SEOHead
        title={video.seoTitle}
        description={video.seoDescription}
        keywords={video.tags.join(', ')}
        canonical={`/youtube/${video.slug}`}
        ogImage={getYouTubeThumbnail(video.videoId)}
        ogType="video.other"
        schemaJson={[videoSchema, breadcrumbSchema]}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <Link 
              to="/youtube" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Videos
            </Link>
          </nav>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Video Section */}
            <div className="lg:col-span-2">
              {/* Video Player */}
              <Card className="overflow-hidden shadow-xl border-2 border-red-600/20 mb-6">
                <div className="aspect-video bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}?rel=0&modestbranding=1&autoplay=0`}
                    title={video.seoTitle}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </Card>

              {/* Video Info */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="bg-red-600 text-white">{video.category}</Badge>
                  <Badge variant="outline">{video.duration}</Badge>
                </div>
                
                <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {video.seoTitle}
                </h1>
                
                <p className="text-lg text-muted-foreground mb-6">
                  {video.seoDescription}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button 
                    onClick={handleSubscribe}
                    className="bg-red-600 hover:bg-red-700 text-white gap-2"
                  >
                    <Bell className="h-4 w-4" />
                    Subscribe
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => window.open(getYouTubeShortsUrl(video.videoId), '_blank')}
                    className="gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Watch on YouTube
                  </Button>
                  <Button 
                    variant="ghost"
                    onClick={handleShare}
                    className="gap-2"
                  >
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {video.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    #{tag.replace(/\s+/g, '')}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Sidebar - Related Videos */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold mb-4">More Videos</h2>
              <div className="space-y-4">
                {relatedVideos.map((relatedVideo) => (
                  <Link 
                    key={relatedVideo.id}
                    to={`/youtube/${relatedVideo.slug}`}
                    className="group block"
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-all">
                      <div className="flex gap-3">
                        <div className="relative w-40 flex-shrink-0">
                          {hasCustomThumbnail(relatedVideo.slug) ? (
                            <div className="w-full h-24">
                              <ThumbnailFactory 
                                slug={relatedVideo.slug} 
                                className="w-full h-full rounded-none"
                              />
                            </div>
                          ) : (
                            <img 
                              src={getYouTubeThumbnail(relatedVideo.videoId, 'mq')}
                              alt={relatedVideo.title}
                              className="w-full h-24 object-cover"
                              loading="lazy"
                            />
                          )}
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                            <Play className="w-6 h-6 text-white" />
                          </div>
                          <Badge className="absolute bottom-1 right-1 bg-black/70 text-white text-xs">
                            {relatedVideo.duration}
                          </Badge>
                        </div>
                        <CardContent className="p-2 flex-1">
                          <h3 className="font-medium text-sm text-foreground group-hover:text-red-600 transition-colors line-clamp-2 mb-1">
                            {relatedVideo.title}
                          </h3>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {relatedVideo.description}
                          </p>
                        </CardContent>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>

              {/* Channel CTA */}
              <Card className="mt-6 p-4 bg-gradient-to-r from-red-600/10 to-orange-600/10 border-red-600/20">
                <div className="flex items-center gap-3 mb-3">
                  <Youtube className="w-10 h-10 text-red-600" />
                  <div>
                    <h3 className="font-bold">SafeOrStolen Channels</h3>
                    <p className="text-xs text-muted-foreground">{YOUTUBE_VIDEOS.length} videos</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <a href={YOUTUBE_CHANNEL.subscribeUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white gap-2"
                      size="sm"
                    >
                      <Bell className="h-4 w-4" />
                      {YOUTUBE_CHANNEL.handle}
                    </Button>
                  </a>
                  <a href={YOUTUBE_CHANNEL_SECONDARY.subscribeUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <Button 
                      variant="outline"
                      className="w-full border-red-600 text-red-600 hover:bg-red-600/10 gap-2"
                      size="sm"
                    >
                      <Bell className="h-4 w-4" />
                      {YOUTUBE_CHANNEL_SECONDARY.handle}
                    </Button>
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoWatchPage;
