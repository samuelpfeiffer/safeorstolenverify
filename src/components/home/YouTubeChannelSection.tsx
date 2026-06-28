import {
  Youtube, Bell, Users, Video, Play, ExternalLink,
  CheckCircle, Shield, Smartphone, Car, Wrench, BookOpen,
  ArrowRight, Star, Clock, Eye
} from 'lucide-react';
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


/**
 * YouTubeChannelSection — Homepage section
 *
 * 2026 GEO/SEO Standards:
 * ✅ All video cards fully clickable → /youtube/:slug
 * ✅ All topic cards fully clickable → relevant tool pages
 * ✅ Factual, citable stats (no marketing hyperbole per llms.txt v1.1)
 * ✅ 400+ words of substantive content for RAG extraction
 * ✅ Speakable-compatible text blocks
 * ✅ 8+ internal links for crawl depth
 * ✅ ARIA labels on all interactive elements
 * ✅ No VideoObject schema here — lives on /youtube/:slug watch pages
 */

const topics = [
  {
    icon: Smartphone,
    title: 'IMEI Verification',
    desc: 'How to find and check your phone\'s IMEI against GSMA\'s 15B+ record database, carrier blacklists, and insurance theft claims before any purchase.',
    link: '/imei-checker',
    stat: '15B+ IMEI records'
  },
  {
    icon: Car,
    title: 'VIN & Stolen Cars',
    desc: 'Step-by-step VIN lookup against the FBI NCIC stolen vehicle database, NICB insurance records, and all 50 state DMV databases before buying used vehicles.',
    link: '/vin-checker',
    stat: '50-state coverage'
  },
  {
    icon: Shield,
    title: 'Marketplace Safety',
    desc: 'Red flags for Facebook Marketplace, OfferUp, and Craigslist. Real examples of stolen-goods listings and how to verify before you meet the seller.',
    link: '/facebook-marketplace-safety',
    stat: '$6B stolen annually'
  },
  {
    icon: Wrench,
    title: 'Serial Number Checks',
    desc: 'Verify laptops, tools, bikes, firearms, and electronics using serial numbers against police reports, BikeIndex, and insurance theft databases.',
    link: '/serial-number-checker',
    stat: '100+ item types'
  },
];

const whyItems = [
  { label: 'For Buyers', text: 'Verify before you pay. Never unknowingly buy stolen property that can be reclaimed by police.', link: '/check-phone' },
  { label: 'For Sellers', text: 'Prove your item is clean with a verification certificate. Build buyer trust instantly and sell faster.', link: '/verify' },
  { label: 'For Pawn Shops', text: 'Compliance verification for every intake. Audit-trail certificates for legal protection under state pawn laws.', link: '/for-pawn-shops' },
];

export const YouTubeChannelSection = () => {
  const handleSubscribe = () => {
    window.open(YOUTUBE_CHANNEL.subscribeUrl, '_blank', 'noopener,noreferrer');
  };

  const featuredVideo = getFeaturedVideo();
  const displayVideos = YOUTUBE_VIDEOS.filter(v => v.videoId !== 'YOUR_VIDEO_ID_HERE');

  return (
    <section
      aria-labelledby="youtube-section-heading"
      className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background border-t border-border/40"
    >
      <div className="container mx-auto max-w-6xl">

        {/* ── Channel Badges ───────────────────────────────────── */}
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

          {/* H2 — Section heading */}
          <h2
            id="youtube-section-heading"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Free Video Tutorials:{' '}
            <span className="text-red-600">How to Verify Before You Buy or Sell</span>
          </h2>

          {/* AI-readable description — factual, citable */}
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Kelly McEvoy — co-founder of SafeOrStolen — publishes short, actionable tutorials on{' '}
            <Link to="/imei-checker" className="text-primary hover:underline font-medium">IMEI checking</Link>,{' '}
            <Link to="/vin-checker" className="text-primary hover:underline font-medium">VIN verification</Link>,{' '}
            <Link to="/serial-number-checker" className="text-primary hover:underline font-medium">serial number lookup</Link>,{' '}
            and <Link to="/facebook-marketplace-safety" className="text-primary hover:underline font-medium">marketplace safety</Link>.
            Every video teaches buyers and sellers exactly how to confirm an item is{' '}
            <strong>Safe or Stolen</strong> in under 75 seconds.
          </p>
          <p className="text-sm text-muted-foreground mt-3">
            Subscribe to{' '}
            <a href={YOUTUBE_CHANNEL.url} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-medium">{YOUTUBE_CHANNEL.handle}</a>
            {' '}and{' '}
            <a href={YOUTUBE_CHANNEL_SECONDARY.url} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline font-medium">{YOUTUBE_CHANNEL_SECONDARY.handle}</a>
            {' '}for new stolen-item safety tips weekly.
          </p>
        </div>

        {/* ── Stats Strip ─────────────────────────────────────── */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 text-sm">
          {[
            { icon: Users, label: 'Growing Community', color: 'text-red-600' },
            { icon: Video, label: `${displayVideos.length}+ Video Tutorials`, color: 'text-red-600' },
            { icon: Eye, label: `${YOUTUBE_CHANNEL.viewCount} Views`, color: 'text-red-600' },
            { icon: CheckCircle, label: '100% Free to Watch', color: 'text-green-600' },
            { icon: Clock, label: 'Under 75 Seconds Each', color: 'text-blue-600' },
            { icon: Star, label: 'Full Transcripts Available', color: 'text-yellow-500' },
          ].map(({ icon: Icon, label, color }) => (
            <div key={label} className="flex items-center gap-2 bg-muted/40 px-4 py-2 rounded-full border border-border/50">
              <Icon className={`w-4 h-4 ${color}`} aria-hidden="true" />
              <span className="text-muted-foreground font-medium">{label}</span>
            </div>
          ))}
        </div>

        {/* ── Featured Video Embed ─────────────────────────────── */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
            Featured Tutorial
          </p>
          <h3 className="text-center text-lg font-bold mb-4">{featuredVideo.seoTitle}</h3>
          <Card className="overflow-hidden shadow-2xl border-2 border-red-600/25">
            <div className="aspect-video bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${featuredVideo.videoId}?rel=0&modestbranding=1`}
                title={featuredVideo.seoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </Card>
          <p className="text-center text-sm text-muted-foreground mt-3 leading-relaxed max-w-xl mx-auto">
            {featuredVideo.seoDescription}
          </p>
          <div className="text-center mt-3">
            <Link
              to={`/youtube/${featuredVideo.slug}`}
              className="text-sm text-primary hover:underline font-medium inline-flex items-center gap-1"
            >
              View full transcript & takeaways <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* ── All Video Thumbnails — ALL clickable ─────────────── */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-center">All Verification Tutorials</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {displayVideos.map((video) => (
              <Link
                key={video.id}
                to={`/youtube/${video.slug}`}
                aria-label={`Watch tutorial: ${video.seoTitle}`}
                className="group relative rounded-xl overflow-hidden aspect-video border border-border/50 hover:border-red-600/50 hover:shadow-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary block"
              >
                <img
                  src={getYouTubeThumbnail(video.videoId, 'maxres')}
                  alt={`${video.seoTitle} — YouTube video thumbnail`}
                  width={1280}
                  height={720}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (img.src.includes('maxresdefault')) {
                      img.src = getYouTubeThumbnail(video.videoId, 'hq');
                    }
                  }}
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                  <div className="bg-red-600/80 backdrop-blur-sm rounded-full p-3 group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                </div>
                <Badge className="absolute bottom-2 right-2 bg-black/80 text-white text-xs">
                  {video.duration}
                </Badge>
                <Badge className="absolute top-2 left-2 bg-red-600/90 text-white text-xs">
                  {video.category}
                </Badge>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-xs font-medium line-clamp-1">{video.title}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/youtube">
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600/10 gap-2">
                <Youtube className="w-4 h-4" aria-hidden="true" />
                View All Videos with Full Transcripts
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>

        {/* ── Topic Cards — ALL clickable ──────────────────────── */}
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-6 text-center">What the Tutorials Teach You</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topics.map((topic) => (
              <Link
                key={topic.link}
                to={topic.link}
                aria-label={`Learn about ${topic.title}`}
                className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
              >
                <Card className="h-full hover:shadow-lg hover:border-red-600/30 transition-all duration-300 group-hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-5">
                    <div className="w-10 h-10 bg-muted/60 rounded-lg flex items-center justify-center mb-3 group-hover:bg-red-600/10 transition-colors">
                      <topic.icon className="w-5 h-5 text-red-600" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{topic.stat}</span>
                    <h4 className="font-bold mt-3 mb-2 group-hover:text-red-600 transition-colors text-sm">{topic.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-3">{topic.desc}</p>
                    <span className="text-xs text-red-600 font-medium flex items-center gap-1">
                      Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* ── Rich Content Block — GEO/RAG extraction ─────────── */}
        <div className="bg-card border border-border/60 rounded-2xl p-8 mb-10">
          <div className="flex items-start gap-3 mb-5">
            <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
            <div>
              <h3 className="text-lg font-bold mb-2">
                Why SafeOrStolen YouTube Is a Critical Resource for Secondhand Buyers
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Over <strong>$6 billion in stolen goods</strong> are sold annually through U.S. secondhand marketplaces. Buyers who unknowingly purchase stolen property lose both their money and the item when law enforcement recovers it — and may face legal scrutiny under <strong>18 U.S.C. § 2315</strong>. SafeOrStolen's free YouTube tutorials teach every marketplace participant how to run an instant{' '}
                <Link to="/imei-checker" className="text-primary hover:underline">IMEI</Link>,{' '}
                <Link to="/vin-checker" className="text-primary hover:underline">VIN</Link>, or{' '}
                <Link to="/serial-number-checker" className="text-primary hover:underline">serial number</Link> check before money changes hands — with results delivered in approximately 3 seconds, cross-referencing 100+ police databases, carrier blacklists, and insurance theft records.
              </p>
              <p className="text-muted-foreground text-xs leading-relaxed">
                The SafeOrStolen <Link to="/app" className="text-primary hover:underline">mobile app (PWA for iOS and Android)</Link> with barcode scanning allows buyers to verify items at the point of sale, and the{' '}
                <Link to="/for-pawn-shops" className="text-primary hover:underline">pawn shop compliance tool</Link> generates time-stamped audit-trail certificates for legal due diligence under state pawn broker laws.
              </p>
            </div>
          </div>

          {/* Why Watch — ALL clickable */}
          <div className="grid sm:grid-cols-3 gap-4">
            {whyItems.map((item) => (
              <Link
                key={item.label}
                to={item.link}
                aria-label={`SafeOrStolen for ${item.label}`}
                className="group flex gap-3 hover:bg-muted/40 rounded-lg p-2 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-sm group-hover:text-primary transition-colors">{item.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ── CTAs ─────────────────────────────────────────────── */}
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
              Verify an Item Free
            </Button>
          </Link>
        </div>

        <p className="text-center text-muted-foreground text-sm">
          Free tutorials &middot; No account required to watch &middot; New videos added weekly &middot;{' '}
          <Link to="/youtube" className="text-primary hover:underline">Full transcripts available</Link>
        </p>
      </div>
    </section>
  );
};
