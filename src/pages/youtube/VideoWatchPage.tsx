import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { SEOHead } from '@/components/seo/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Youtube, ExternalLink, Play, Bell, ArrowLeft, Share2, 
  CheckCircle, Users, BookOpen, Lightbulb, BarChart3, ArrowRight 
} from 'lucide-react';
import { 
  YOUTUBE_VIDEOS, 
  YOUTUBE_CHANNEL,
  YOUTUBE_CHANNEL_SECONDARY,
  getVideoBySlug,
  getYouTubeThumbnail,
  getYouTubeShortsUrl
} from '@/config/videoData';
import { getVideoUniqueContent, hasVideoUniqueContent } from '@/config/youtubeUniqueContent';
import { ThumbnailFactory, hasCustomThumbnail } from '@/components/youtube/thumbnails';

const VideoWatchPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const video = slug ? getVideoBySlug(slug) : undefined;
  const uniqueContent = slug ? getVideoUniqueContent(slug) : undefined;
  
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

  // VideoObject schema for this specific video - REQUIRED for video watch pages
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
    "author": {
      "@type": "Person",
      "name": YOUTUBE_CHANNEL.creatorName,
      "url": YOUTUBE_CHANNEL.url
    },
    "potentialAction": {
      "@type": "WatchAction",
      "target": `https://safeorstolen.com/youtube/${video.slug}`
    }
  };

  // FAQ Schema if unique content has FAQs
  const faqSchema = uniqueContent?.uniqueFaqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": uniqueContent.uniqueFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

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

  const schemas = [videoSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])];

  return (
    <>
      <TopNavigation />
      <SEOHead
        title={`${video.seoTitle} | SafeOrStolen Video Tutorial`}
        description={video.seoDescription}
        keywords={video.tags.join(', ')}
        canonical={`/youtube/${video.slug}`}
        ogImage={getYouTubeThumbnail(video.videoId)}
        ogType="video.other"
        schemaJson={schemas}
      />

      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="mb-6" aria-label="Breadcrumb">
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
                  <Badge variant="secondary">{YOUTUBE_CHANNEL.creatorName}</Badge>
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

              {/* === UNIQUE CONTENT SECTIONS === */}
              
              {/* Extended Description */}
              {uniqueContent && (
                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-primary" />
                    About This Video
                  </h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p className="leading-relaxed">{uniqueContent.extendedDescription}</p>
                  </div>
                </section>
              )}

              {/* Key Takeaways */}
              {uniqueContent && (
                <section className="mb-12 bg-primary/5 rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    Key Takeaways
                  </h2>
                  <ul className="space-y-3">
                    {uniqueContent.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-foreground">{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Transcript Summary */}
              {uniqueContent && (
                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Video Transcript Summary</h2>
                  <div className="bg-card border rounded-lg p-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {uniqueContent.transcriptSummary}
                    </p>
                  </div>
                </section>
              )}

              {/* Key Statistics */}
              {uniqueContent && (
                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <BarChart3 className="w-6 h-6 text-primary" />
                    Key Statistics
                  </h2>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {uniqueContent.keyStatistics.map((stat, idx) => (
                      <Card key={idx} className="p-4 text-center bg-gradient-to-br from-primary/5 to-transparent">
                        <p className="text-sm font-medium text-foreground">{stat}</p>
                      </Card>
                    ))}
                  </div>
                </section>
              )}

              {/* Expert Tips */}
              {uniqueContent && (
                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Lightbulb className="w-6 h-6 text-yellow-500" />
                    Expert Tips from Kelly McEvoy
                  </h2>
                  <Card className="p-6 border-l-4 border-yellow-500">
                    <p className="text-muted-foreground leading-relaxed italic">
                      "{uniqueContent.expertTips}"
                    </p>
                  </Card>
                </section>
              )}

              {/* Target Audience */}
              {uniqueContent && (
                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6 text-primary" />
                    Who Should Watch This Video
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {uniqueContent.targetAudience.map((audience, idx) => (
                      <Badge key={idx} variant="outline" className="py-2 px-4">
                        {audience}
                      </Badge>
                    ))}
                  </div>
                </section>
              )}

              {/* Related Resources */}
              {uniqueContent && (
                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-4">Related Resources & Tools</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {uniqueContent.relatedResources.map((resource, idx) => (
                      <Link key={idx} to={resource.url}>
                        <Card className="p-4 hover:shadow-lg transition-shadow group">
                          <div className="flex items-center justify-between">
                            <span className="font-medium group-hover:text-primary transition-colors">
                              {resource.title}
                            </span>
                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* FAQ Section */}
              {uniqueContent && uniqueContent.uniqueFaqs.length > 0 && (
                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {uniqueContent.uniqueFaqs.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`item-${index}`} 
                        className="bg-card px-6 rounded-lg border"
                      >
                        <AccordionTrigger className="text-left font-semibold">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </section>
              )}

              {/* CTA Section */}
              {uniqueContent && (
                <section className="mb-8 bg-gradient-to-r from-red-600/10 to-orange-600/10 rounded-lg p-8 text-center border border-red-600/20">
                  <h2 className="text-xl font-bold mb-4">{uniqueContent.ctaText}</h2>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link to="/verify">
                      <Button size="lg" className="gap-2">
                        Start Free Verification <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                    <Link to="/app">
                      <Button size="lg" variant="outline" className="gap-2">
                        Download Mobile App
                      </Button>
                    </Link>
                  </div>
                </section>
              )}
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

              {/* Sticky Verification CTA */}
              <Card className="mt-6 p-4 sticky top-24">
                <h3 className="font-bold mb-2">Ready to Verify?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Start your free stolen item check now.
                </p>
                <Link to="/verify">
                  <Button className="w-full gap-2">
                    Verify Now <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VideoWatchPage;
