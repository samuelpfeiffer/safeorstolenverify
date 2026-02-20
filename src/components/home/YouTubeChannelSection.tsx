import { Youtube, Bell, Users, Video, Play, ExternalLink, CheckCircle, Shield, Smartphone, Car, Wrench, BookOpen, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  YOUTUBE_VIDEOS, 
  YOUTUBE_CHANNEL,
  YOUTUBE_CHANNEL_SECONDARY,
  getYouTubeThumbnail,
  getFeaturedVideo
} from '@/config/videoData';
import { ThumbnailFactory, hasCustomThumbnail } from '@/components/youtube/thumbnails';

// NOTE: No VideoObject schema here — only on dedicated /youtube/* watch pages
// Having VideoObject on non-watch pages triggers "Video isn't on a watch page" in GSC

const topics = [
  {
    icon: Smartphone,
    title: 'IMEI Verification',
    desc: 'How to find and check your phone\'s IMEI against carrier blacklists, insurance databases, and stolen-device registries before any purchase.',
    link: '/imei-checker'
  },
  {
    icon: Car,
    title: 'VIN & Stolen Cars',
    desc: 'Step-by-step VIN lookup against the NCIC stolen vehicle database, state DMV records, and insurance theft claims before buying used vehicles.',
    link: '/vin-checker'
  },
  {
    icon: Shield,
    title: 'Marketplace Safety',
    desc: 'Red flags to watch for on Facebook Marketplace, OfferUp, and Craigslist. Real examples of stolen-goods listings and how to verify before you meet.',
    link: '/facebook-marketplace-safety'
  },
  {
    icon: Wrench,
    title: 'Serial Number Checks',
    desc: 'Verify laptops, tools, bikes, firearms, and electronics using serial numbers against police reports and insurance theft claims.',
    link: '/serial-number-checker'
  },
];

const whyItems = [
  { label: 'For Buyers', text: 'Verify before you pay. Never unknowingly buy stolen property.' },
  { label: 'For Sellers', text: 'Prove your item is clean. Build buyer trust instantly.' },
  { label: 'For Pawn Shops', text: 'Compliance verification for every intake. Audit trail included.' },
];

export const YouTubeChannelSection = () => {
  const handleSubscribe = () => {
    window.open(YOUTUBE_CHANNEL.subscribeUrl, '_blank', 'noopener,noreferrer');
  };

  const featuredVideo = getFeaturedVideo();

  return (
    <section
      aria-labelledby="youtube-section-heading"
      className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background border-t border-border/40"
    >
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-5">
            <a href={YOUTUBE_CHANNEL.url} target="_blank" rel="noopener noreferrer" aria-label="Visit @safeorstolenoffically on YouTube">
              <Badge className="bg-red-600 hover:bg-red-700 text-white cursor-pointer px-4 py-1.5 text-sm">
                <Youtube className="w-4 h-4 mr-2" aria-hidden="true" />
                {YOUTUBE_CHANNEL.handle}
              </Badge>
            </a>
            <a href={YOUTUBE_CHANNEL_SECONDARY.url} target="_blank" rel="noopener noreferrer" aria-label="Visit @safeorstolen on YouTube">
              <Badge className="bg-red-600 hover:bg-red-700 text-white cursor-pointer px-4 py-1.5 text-sm">
                <Youtube className="w-4 h-4 mr-2" aria-hidden="true" />
                {YOUTUBE_CHANNEL_SECONDARY.handle}
              </Badge>
            </a>
          </div>

          <h2 id="youtube-section-heading" className="text-3xl md:text-4xl font-bold mb-4">
            Free Video Tutorials:{' '}
            <span className="text-red-600">How to Verify Before You Buy or Sell</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Kelly McEvoy — founder of SafeOrStolen — publishes short, actionable tutorials on IMEI checking,
            VIN verification, serial number lookup, and marketplace safety. Every video teaches buyers and sellers
            exactly how to confirm an item is <strong>Safe or Stolen</strong> in under 60 seconds.
          </p>
          <p className="text-sm text-muted-foreground mt-3">
            Subscribe to{' '}
            <a href={YOUTUBE_CHANNEL.url} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-medium">{YOUTUBE_CHANNEL.handle}</a>
            {' '}and{' '}
            <a href={YOUTUBE_CHANNEL_SECONDARY.url} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-medium">{YOUTUBE_CHANNEL_SECONDARY.handle}</a>
            {' '}for new stolen-item safety tips weekly.
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-5 mb-12 text-sm">
          {[
            { icon: Users, label: 'Growing Community', color: 'text-red-600' },
            { icon: Video, label: `${YOUTUBE_VIDEOS.length}+ Video Tutorials`, color: 'text-red-600' },
            { icon: Play, label: `${YOUTUBE_CHANNEL.viewCount} Views`, color: 'text-red-600' },
            { icon: CheckCircle, label: '100% Free to Watch', color: 'text-green-600' },
          ].map(({ icon: Icon, label, color }) => (
            <div key={label} className="flex items-center gap-2 bg-muted/40 px-4 py-2 rounded-full border border-border/50">
              <Icon className={`w-4 h-4 ${color}`} aria-hidden="true" />
              <span className="text-muted-foreground font-medium">{label}</span>
            </div>
          ))}
        </div>

        {/* Featured Video Embed */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Featured Tutorial
          </p>
          <Card className="overflow-hidden shadow-2xl border-2 border-red-600/25">
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
          <p className="text-center text-sm text-muted-foreground mt-3 leading-relaxed max-w-xl mx-auto">
            {featuredVideo.seoDescription}
          </p>
        </div>

        {/* Video Thumbnails Grid - ALL clickable, link to /youtube/:slug */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-center">All Verification Tutorials</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {YOUTUBE_VIDEOS.map((video) => (
              <Link
                key={video.id}
                to={`/youtube/${video.slug}`}
                aria-label={`Watch: ${video.title}`}
                className="group relative rounded-xl overflow-hidden aspect-video border border-border/50 hover:border-red-600/40 hover:shadow-xl transition-all duration-300"
              >
                {hasCustomThumbnail(video.slug) ? (
                  <ThumbnailFactory slug={video.slug} className="w-full h-full rounded-none" />
                ) : (
                  <img
                    src={getYouTubeThumbnail(video.videoId, 'hq')}
                    alt={video.title}
                    width={320}
                    height={180}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                </div>
                <Badge className="absolute bottom-2 right-2 bg-black/75 text-white text-xs">
                  {video.duration}
                </Badge>
                <Badge className="absolute top-2 left-2 bg-red-600/90 text-white text-xs">
                  {video.category}
                </Badge>
              </Link>
            ))}
          </div>
        </div>

        {/* Topic Cards - SEO-rich, all clickable */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-center">What the Videos Teach You</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topics.map((topic) => (
              <Link key={topic.link} to={topic.link} className="group block">
                <Card className="h-full hover:shadow-lg hover:border-red-600/30 transition-all duration-300 group-hover:-translate-y-1">
                  <CardContent className="p-5">
                    <div className="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center mb-4">
                      <topic.icon className="w-5 h-5 text-red-600" aria-hidden="true" />
                    </div>
                    <h4 className="font-bold mb-2 group-hover:text-red-600 transition-colors">{topic.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{topic.desc}</p>
                    <span className="text-xs text-red-600 font-medium flex items-center gap-1">
                      Learn More <ArrowRight className="w-3 h-3" aria-hidden="true" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Why Watch Section - GEO/AI-readable rich content */}
        <div className="bg-card border border-border/60 rounded-2xl p-8 mb-10">
          <div className="flex items-start gap-3 mb-5">
            <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
            <div>
              <h3 className="text-lg font-bold mb-2">Why Smart Buyers &amp; Sellers Watch SafeOrStolen YouTube</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Over $6 billion in stolen goods are sold annually through secondhand marketplaces in the United States.
                Buyers who unknowingly purchase stolen property lose both their money and the item when law enforcement
                recovers it — and may face legal scrutiny. Sellers are at risk of unwittingly becoming part of a
                stolen-goods chain. SafeOrStolen's free YouTube tutorials give every participant in a secondhand
                transaction the knowledge to run an instant IMEI, VIN, or serial number check before money changes
                hands. Results appear in under 3 seconds, cross-referencing 100+ police databases, carrier blacklists,
                and insurance theft records.
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {whyItems.map((item) => (
              <div key={item.label} className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-sm">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <Button
            size="lg"
            onClick={handleSubscribe}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-semibold gap-2"
            aria-label="Subscribe to SafeOrStolen on YouTube"
          >
            <Bell className="w-5 h-5" aria-hidden="true" />
            Subscribe for Tips
          </Button>
          <Link to="/youtube">
            <Button
              size="lg"
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-600/10 px-8 py-6 text-lg font-semibold gap-2"
            >
              <ExternalLink className="w-5 h-5" aria-hidden="true" />
              View All Videos &amp; Transcripts
            </Button>
          </Link>
          <Link to="/verify">
            <Button size="lg" variant="secondary" className="px-8 py-6 text-lg font-semibold gap-2">
              <Shield className="w-5 h-5" aria-hidden="true" />
              Verify an Item Now
            </Button>
          </Link>
        </div>

        <p className="text-center text-muted-foreground text-sm">
          Free tutorials &middot; No account required to watch &middot; New videos added weekly
        </p>
      </div>
    </section>
  );
};
