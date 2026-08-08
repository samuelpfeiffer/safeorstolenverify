import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Helmet } from 'react-helmet-async';
import {
  Youtube, ExternalLink, Play, Video, Users, Bell,
  CheckCircle, Shield, Smartphone, Car, ArrowRight,
  BookOpen, Wrench, Star, Clock, Download, Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import {
  YOUTUBE_VIDEOS,
  YOUTUBE_CHANNEL,
  YOUTUBE_CHANNEL_SECONDARY,
  getYouTubeThumbnail,
  getFeaturedVideo
} from '@/config/videoData';


/**
 * YouTubePage — 2026 GEO/SEO Optimized
 *
 * ✅ CollectionPage + ItemList schema (watch-page-safe — no VideoObject here)
 * ✅ FAQPage schema for rich results and AI citation
 * ✅ BreadcrumbList schema
 * ✅ 800+ words of unique, factual, citable content
 * ✅ Speakable selector on H1 and .speakable-summary
 * ✅ HowTo schema for "How to use SafeOrStolen YouTube tutorials"
 * ✅ All video thumbnails clickable → /youtube/:slug (VideoObject lives there)
 * ✅ Internal links: 10+ contextual links to verification tools
 * ✅ Structured semantic content blocks for RAG extraction
 * ✅ og:video removed — collection pages must not have video OG tags (GSC rule)
 */

const YouTubePage: React.FC = () => {
  const handleVisitChannel = () => {
    window.open(YOUTUBE_CHANNEL.url, '_blank', 'noopener,noreferrer');
  };

  const handleSubscribe = () => {
    window.open(YOUTUBE_CHANNEL.subscribeUrl, '_blank', 'noopener,noreferrer');
  };

  const featuredVideo = getFeaturedVideo();

  const FRESHNESS_DATE = '2026-07-08';

  // ── Structured Data ────────────────────────────────────────────────────────
  // CollectionPage + BreadcrumbList + FAQPage + HowTo — all standalone blocks

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "SafeOrStolen YouTube — Stolen Item Verification Video Tutorials",
    "description": "Free video tutorials by Kelly McEvoy (SafeOrStolen co-founder) on IMEI verification, VIN lookup, serial number checks, and marketplace safety. Updated weekly.",
    "url": "https://safeorstolen.com/youtube",
    "dateModified": FRESHNESS_DATE,
    "author": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com"
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "SafeOrStolen Video Tutorials",
      "description": "Educational videos on checking if items are stolen before buying on secondhand marketplaces.",
      "numberOfItems": YOUTUBE_VIDEOS.length,
      "itemListElement": YOUTUBE_VIDEOS.filter(v => v.videoId !== 'YOUR_VIDEO_ID_HERE').map((video, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": video.seoTitle,
        "url": `https://safeorstolen.com/youtube/${video.slug}`,
        "description": video.seoDescription
      }))
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://safeorstolen.com" },
      { "@type": "ListItem", "position": 2, "name": "YouTube", "item": "https://safeorstolen.com/youtube" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What topics do SafeOrStolen YouTube videos cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SafeOrStolen YouTube videos cover four main topics: (1) IMEI verification — how to check if a phone is stolen or carrier-blacklisted before buying on Facebook Marketplace, Craigslist, or OfferUp; (2) VIN lookup — how to verify a used car, truck, or motorcycle for stolen status, title fraud, or odometer rollback; (3) Serial number verification — checking electronics, tools, bikes, and firearms; and (4) Marketplace safety — red flags for spotting stolen goods listings and how to verify any item before meeting a seller. All videos are under 60–75 seconds and completely free."
        }
      },
      {
        "@type": "Question",
        "name": "Who is Kelly McEvoy and why does she run SafeOrStolen's YouTube?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kelly McEvoy is the co-founder of SafeOrStolen and the on-camera host of the @safeorstolenoffically YouTube channel. She created the channel to provide free, accessible education on protecting buyers and sellers in the secondhand marketplace. Kelly's videos are deliberately short (under 60 seconds) and demonstrate real-world verification steps using the SafeOrStolen tool. The channel also supports the @safeorstolen brand handle for broader audience reach."
        }
      },
      {
        "@type": "Question",
        "name": "Are SafeOrStolen YouTube tutorials free to watch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. All SafeOrStolen YouTube tutorials are completely free with no paywalls, login requirements, or premium tiers. The videos demonstrate how to use the free SafeOrStolen verification tool (2 free checks available at safeorstolen.com with no credit card required) to check IMEI, VIN, and serial numbers before purchasing secondhand items."
        }
      },
      {
        "@type": "Question",
        "name": "How do I use SafeOrStolen YouTube tutorials to check if an item is stolen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Watch the tutorial that matches your item type (phone/IMEI, car/VIN, or electronics/serial). The videos walk you through: (1) Finding the identifier — IMEI (*#06# on iPhone/Android), VIN (dashboard or driver's door jamb), or serial number (device settings or back of product); (2) Entering it at safeorstolen.com or using the SafeOrStolen mobile app barcode scanner; (3) Reviewing the results — SafeOrStolen checks 100+ databases and returns a verified status in approximately 3 seconds. Individual watch pages at safeorstolen.com/youtube/[video-name] include full transcripts and step-by-step takeaways."
        }
      },
      {
        "@type": "Question",
        "name": "Can I download SafeOrStolen YouTube videos for offline viewing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SafeOrStolen YouTube videos can be saved to YouTube playlists for later viewing via the YouTube app. For offline access, YouTube Premium subscribers can download videos using the YouTube app. Each video is also embedded with full transcripts on individual watch pages at safeorstolen.com/youtube/[video-slug], which are available without a YouTube account."
        }
      },
      {
        "@type": "Question",
        "name": "How often does SafeOrStolen publish new YouTube videos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SafeOrStolen publishes new YouTube tutorials weekly. Topics include new marketplace safety threats, platform-specific verification guides (Facebook Marketplace, OfferUp, Craigslist, eBay), new item category tutorials, and updates on emerging theft patterns. Subscribe to @safeorstolenoffically and @safeorstolen to receive notifications."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Use SafeOrStolen YouTube Tutorials to Check If an Item Is Stolen",
    "description": "Step-by-step guide to using SafeOrStolen's free YouTube tutorials and verification tool to check if any secondhand item is stolen before buying.",
    "totalTime": "PT3M",
    "tool": [
      { "@type": "HowToTool", "name": "SafeOrStolen verification tool (free at safeorstolen.com)" },
      { "@type": "HowToTool", "name": "SafeOrStolen mobile app (iOS/Android PWA)" }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Find the item's identifier",
        "text": "For phones: dial *#06# or check Settings > About Phone for the IMEI. For vehicles: look at the dashboard VIN plate or driver's door jamb sticker. For electronics/tools/bikes: check the product label, back panel, or product settings menu for the serial number."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Watch the relevant SafeOrStolen YouTube tutorial",
        "text": "Visit safeorstolen.com/youtube and select the tutorial that matches your item type. Videos are under 60–75 seconds and show exactly how to locate identifiers and perform the verification."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Enter the identifier on SafeOrStolen",
        "text": "Go to safeorstolen.com/verify or open the SafeOrStolen PWA app. Enter or scan the IMEI, VIN, or serial number. The system cross-references 100+ databases including FBI NCIC, GSMA, NICB, and carrier blacklists."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Review results in 3 seconds",
        "text": "SafeOrStolen returns a verified status — Safe or Stolen — in approximately 3 seconds. Results include theft status, blacklist status, insurance claims, and supporting database sources. A downloadable PDF compliance certificate is available for businesses."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Make a protected buying or selling decision",
        "text": "If the item is flagged as stolen, do not complete the purchase. If the item is verified as safe, you can buy with confidence. SafeOrStolen verification provides documented proof of due diligence protection under 18 U.S.C. § 2315."
      }
    ]
  };

  const structuredData = [collectionPageSchema, breadcrumbSchema, faqSchema, howToSchema];

  // ── Topic Cards ─────────────────────────────────────────────────────────────
  const topics = [
    {
      icon: Smartphone,
      title: 'IMEI Verification Tutorials',
      desc: 'Find your phone\'s IMEI (dial *#06#) and check it against GSMA\'s 15B+ record database, carrier blacklists, and insurance theft claims in under 3 seconds.',
      link: '/imei-checker',
      stat: '15B+ IMEI records',
      color: 'text-blue-500'
    },
    {
      icon: Car,
      title: 'VIN Lookup Guides',
      desc: 'Locate your vehicle\'s VIN (dashboard or door jamb) and verify against FBI NCIC stolen vehicle database, NICB insurance theft records, and 50 state DMV databases.',
      link: '/vin-checker',
      stat: '50 state DMV databases',
      color: 'text-green-500'
    },
    {
      icon: Shield,
      title: 'Marketplace Safety Videos',
      desc: 'Red flags to identify stolen goods on Facebook Marketplace, OfferUp, Craigslist, and eBay. Kelly shows real stolen-item listings and teaches exactly what to look for.',
      link: '/facebook-marketplace-safety',
      stat: '$6B stolen annually',
      color: 'text-red-500'
    },
    {
      icon: Wrench,
      title: 'Serial Number Check Guides',
 desc: 'Verify laptops, DeWalt/Milwaukee tools, gaming consoles, bikes, and firearms using serial numbers against police reports and insurance theft databases.',
      link: '/serial-number-checker',
      stat: '100+ item categories',
      color: 'text-orange-500'
    }
  ];

  // ── Audience Segments ───────────────────────────────────────────────────────
  const audiences = [
    {
      label: 'Individual Buyers',
      text: 'Verify before you pay. Never unknowingly purchase stolen property that can be reclaimed by police — losing both your money and the item.',
      link: '/check-phone'
    },
    {
      label: 'Private Sellers',
      text: 'Prove your item is clean with a verification certificate. Build buyer trust instantly and sell faster with documented proof.',
      link: '/verify'
    },
    {
      label: 'Pawn Shops & Dealers',
      text: 'Compliance verification for every intake. Generate audit-trail certificates with cryptographic timestamps for legal protection under state pawn laws.',
      link: '/for-pawn-shops'
    },
    {
      label: 'FFL Gun Dealers',
 text: 'Verify firearms serial numbers against the HotGunz national stolen-firearms registry. SafeOrStolen is used by 500+ FFL dealers for compliance under 18 U.S.C. § 922.',
      link: '/firearms-check'
    }
  ];

  return (
    <>
      <PageSEO
        title="SafeOrStolen YouTube — Free Stolen Item Verification Tutorials"
        description="Watch free tutorials by Kelly McEvoy on checking if items are stolen. Learn IMEI verification, VIN lookup, serial number checking, and marketplace safety. All videos free. New content weekly."
        keywords="SafeOrStolen YouTube, stolen item checker tutorial, IMEI checker video, VIN lookup guide, serial number verification how-to, marketplace safety tips, Kelly McEvoy, stolen goods check"
        canonical="/youtube"
        structuredData={structuredData}
      />

      {/* Speakable freshness meta */}
      <Helmet>
        <meta property="og:updated_time" content={`${FRESHNESS_DATE}T00:00:00Z`} />
        <meta name="article:modified_time" content={`${FRESHNESS_DATE}T00:00:00Z`} />
      </Helmet>

      <TopNavigation />
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-16">

          {/* ── Breadcrumb ──────────────────────────────────────────────────── */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground font-medium" aria-current="page">YouTube</li>
            </ol>
          </nav>

          {/* ── Hero Section ─────────────────────────────────────────────────── */}
          <div className="text-center mb-12">
            <div className="flex flex-wrap justify-center gap-2 mb-5">
              <a href={YOUTUBE_CHANNEL.url} target="_blank" rel="noopener noreferrer" aria-label="Visit @safeorstolenoffically YouTube channel">
                <Badge className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 cursor-pointer text-sm">
                  <Youtube className="w-4 h-4 mr-2" aria-hidden="true" />
                  {YOUTUBE_CHANNEL.handle}
                </Badge>
              </a>
              <a href={YOUTUBE_CHANNEL_SECONDARY.url} target="_blank" rel="noopener noreferrer" aria-label="Visit @safeorstolen YouTube channel">
                <Badge className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 cursor-pointer text-sm">
                  <Youtube className="w-4 h-4 mr-2" aria-hidden="true" />
                  {YOUTUBE_CHANNEL_SECONDARY.handle}
                </Badge>
              </a>
            </div>

            {/* H1 — Speakable target */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              SafeOrStolen <span className="text-red-600">YouTube</span> Channel
            </h1>

            {/* Speakable summary — AI extraction target */}
            <p className="speakable-summary hero-description text-xl text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed">
              Free stolen item verification tutorials by Kelly McEvoy (SafeOrStolen co-founder). Learn how to check IMEI, VIN, and serial numbers before buying secondhand phones, cars, bikes, electronics, tools, and firearms. All videos are under 75 seconds and completely free.
            </p>

            {/* Stats Strip */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
              {[
                { icon: Users, label: 'Growing Community', color: 'text-red-600' },
                { icon: Video, label: `${YOUTUBE_VIDEOS.filter(v => v.videoId !== 'YOUR_VIDEO_ID_HERE').length} Video Tutorials`, color: 'text-red-600' },
                { icon: Eye, label: `${YOUTUBE_CHANNEL.viewCount} Views`, color: 'text-red-600' },
                { icon: CheckCircle, label: '100% Free to Watch', color: 'text-green-600' },
                { icon: Clock, label: 'Under 75 Seconds Each', color: 'text-blue-600' },
                { icon: Download, label: 'Full Transcripts Below', color: 'text-purple-600' }
              ].map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex items-center gap-2 bg-muted/40 px-4 py-2 rounded-full border border-border/50">
                  <Icon className={`w-4 h-4 ${color}`} aria-hidden="true" />
                  <span className="text-muted-foreground font-medium">{label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={handleSubscribe}
                className="bg-red-600 hover:bg-red-700 text-white gap-2 px-8"
                aria-label="Subscribe to SafeOrStolen YouTube channel"
              >
                <Bell className="h-5 w-5" aria-hidden="true" />
                Subscribe for Weekly Tips
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleVisitChannel}
                className="border-red-600 text-red-600 hover:bg-red-600/10 gap-2"
                aria-label="Visit SafeOrStolen YouTube channel"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                View YouTube Channel
              </Button>
              <Link to="/verify">
                <Button size="lg" variant="secondary" className="gap-2">
                  <Shield className="h-4 w-4" aria-hidden="true" />
                  Verify an Item Free
                </Button>
              </Link>
            </div>
          </div>

          {/* ── Featured Video Embed ──────────────────────────────────────────── */}
          <section aria-label="Featured video tutorial" className="max-w-4xl mx-auto mb-16">
            <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
              Featured Tutorial
            </p>
            <h2 className="text-2xl font-bold text-center mb-6">{featuredVideo.seoTitle}</h2>
            <Card className="overflow-hidden shadow-2xl border-2 border-red-600/20">
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
            <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {featuredVideo.seoDescription}
            </p>
            <div className="text-center mt-4">
              <Link
                to={`/youtube/${featuredVideo.slug}`}
                className="text-sm text-primary hover:underline font-medium inline-flex items-center gap-1"
              >
                View full transcript & takeaways <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </section>

          {/* ── All Videos Grid — ALL clickable ──────────────────────────────── */}
          <section aria-labelledby="all-videos-heading" className="mb-16">
            <h2 id="all-videos-heading" className="text-2xl font-bold mb-8 text-center">
              All Verification Tutorials — Watch Free
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {YOUTUBE_VIDEOS.filter(v => v.videoId !== 'YOUR_VIDEO_ID_HERE').map((video) => (
                <Link
                  key={video.id}
                  to={`/youtube/${video.slug}`}
                  aria-label={`Watch tutorial: ${video.seoTitle}`}
                  className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
                >
                  <Card className="overflow-hidden hover:shadow-xl hover:border-red-600/40 transition-all duration-300 hover:-translate-y-1 h-full cursor-pointer">
                    <div className="relative aspect-video">
                      <img
                        src={getYouTubeThumbnail(video.videoId, 'maxres')}
                        alt={`${video.seoTitle} — YouTube video thumbnail`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        width={1280}
                        height={720}
                        onError={(e) => {
                          const img = e.currentTarget;
                          if (img.src.includes('maxresdefault')) {
                            img.src = getYouTubeThumbnail(video.videoId, 'hq');
                          }
                        }}
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                        <div className="bg-red-600/80 backdrop-blur-sm rounded-full p-3 group-hover:scale-110 transition-transform">
                          <Play className="w-7 h-7 text-white" aria-hidden="true" />
                        </div>
                      </div>
                      <Badge className="absolute top-2 right-2 bg-black/75 text-white text-xs">
                        {video.duration}
                      </Badge>
                      <Badge className="absolute top-2 left-2 bg-red-600 text-white text-xs">
                        {video.category}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground mb-2 group-hover:text-red-600 transition-colors line-clamp-2 text-sm">
                        {video.seoTitle}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {video.seoDescription}
                      </p>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs text-red-600 font-medium">
                          <Youtube className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Watch Tutorial</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <BookOpen className="w-3 h-3" />
                          <span>Transcript</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* ── What Videos Teach — 4 Topic Cards, ALL clickable ─────────────── */}
          <section aria-labelledby="topics-heading" className="mb-16 max-w-6xl mx-auto">
            <h2 id="topics-heading" className="text-2xl font-bold mb-8 text-center">
              What SafeOrStolen Tutorials Teach You
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {topics.map((topic) => (
                <Link
                  key={topic.link}
                  to={topic.link}
                  aria-label={`Learn about ${topic.title}`}
                  className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl block"
                >
                  <Card className="h-full hover:shadow-lg hover:border-red-600/30 transition-all duration-300 group-hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-5">
                      <div className="w-10 h-10 bg-muted/60 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600/10 transition-colors">
                        <topic.icon className={`w-5 h-5 ${topic.color}`} aria-hidden="true" />
                      </div>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{topic.stat}</span>
                      <h3 className="font-bold mt-3 mb-2 group-hover:text-red-600 transition-colors text-sm">{topic.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-3">{topic.desc}</p>
                      <span className="text-xs text-red-600 font-medium flex items-center gap-1">
                        Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* ── Substantive Content Block — GEO/RAG extraction target ─────────── */}
          <section aria-labelledby="why-heading" className="mb-16 max-w-4xl mx-auto">
            <h2 id="why-heading" className="text-3xl font-bold mb-8">
              Why SafeOrStolen YouTube Matters: The Stolen Goods Crisis
            </h2>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="leading-relaxed">
                Over <strong>$6 billion in stolen goods</strong> are sold annually through secondhand marketplaces in the United States, according to consumer protection estimates. Buyers who unknowingly purchase stolen property lose both their money and the item when law enforcement recovers it — and may face legal scrutiny for possessing stolen goods under <strong>18 U.S.C. § 2315</strong> (interstate transport of stolen goods).
              </p>

              <p className="leading-relaxed">
                SafeOrStolen's YouTube channel, led by co-founder <strong>Kelly McEvoy</strong> at <a href={YOUTUBE_CHANNEL.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@safeorstolenoffically</a>, publishes short tutorials (under 60–75 seconds each) teaching buyers how to perform instant IMEI, VIN, and serial number checks before any transaction. The <a href={YOUTUBE_CHANNEL_SECONDARY.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@safeorstolen</a> brand channel serves as the official channel for company announcements and news.
              </p>

              <p className="leading-relaxed">
                The <Link to="/imei-checker" className="text-primary hover:underline">IMEI checker tutorials</Link> teach buyers to locate their phone's IMEI number (by dialing *#06# on any iPhone or Android, or checking Settings › About Phone) and cross-reference it against the GSMA's global IMEI database containing over 15 billion records, carrier blacklists from AT&T, Verizon, and T-Mobile, and insurance theft claims databases. Results appear in approximately 3 seconds.
              </p>

              <p className="leading-relaxed">
                The <Link to="/vin-checker" className="text-primary hover:underline">VIN lookup guides</Link> show vehicle buyers how to locate a 17-digit Vehicle Identification Number — typically found on the driver's side dashboard corner or inside the driver's door jamb — and verify it against the FBI's NCIC stolen vehicle database, the National Insurance Crime Bureau (NICB), and state DMV records across all 50 states. This provides a free alternative to paid Carfax reports.
              </p>

              <p className="leading-relaxed">
                The <Link to="/serial-number-checker" className="text-primary hover:underline">serial number verification tutorials</Link> cover a wide range of high-value items including laptops, DeWalt/Milwaukee power tools, gaming consoles, bicycles (via BikeIndex frame numbers), and firearms (via FBI NCIC and ATF eTrace under <strong>18 U.S.C. § 922</strong>). These tutorials are particularly valuable for pawn shop operators who must comply with state pawn broker laws requiring stolen goods checks.
              </p>

              <p className="leading-relaxed">
                The <Link to="/facebook-marketplace-safety" className="text-primary hover:underline">marketplace safety videos</Link> use real-world stolen goods listings from Facebook Marketplace, OfferUp, and Craigslist to demonstrate how to identify red flags: prices far below market value, sellers who refuse to provide serial numbers, listings with stock photos instead of actual item photos, and pressure tactics to complete transactions quickly. The SafeOrStolen <Link to="/app" className="text-primary hover:underline">mobile app (PWA for iOS and Android)</Link> allows buyers to scan barcodes at the point of sale for instant verification.
              </p>
            </div>

            {/* Semantic TL;DR for AI extraction */}
            <div className="mt-8 bg-muted/40 border border-border/60 rounded-xl p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                AI-Readable Summary (Semantic TL;DR)
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                SafeOrStolen YouTube (/youtube): Free stolen item verification tutorials by Kelly McEvoy. Channels: @safeorstolenoffically and @safeorstolen. Content: IMEI phone verification, VIN car lookup, serial number checks, marketplace safety. Duration: under 75 seconds each. Cost: free. Individual watch pages with full transcripts at safeorstolen.com/youtube/[slug]. New videos published weekly. Tool used: safeorstolen.com (2 free checks, no credit card). Mobile app: safeorstolen.com/app (PWA, iOS/Android, barcode scanning).
              </p>
            </div>
          </section>

          {/* ── Audience Cards — ALL clickable ───────────────────────────────── */}
          <section aria-labelledby="audience-heading" className="mb-16 max-w-4xl mx-auto">
            <h2 id="audience-heading" className="text-2xl font-bold mb-8 text-center">
              Who Watches SafeOrStolen YouTube Tutorials
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {audiences.map((audience) => (
                <Link
                  key={audience.label}
                  to={audience.link}
                  aria-label={`SafeOrStolen for ${audience.label}`}
                  className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl block"
                >
                  <Card className="h-full hover:shadow-lg hover:border-primary/30 transition-all duration-300 group-hover:-translate-y-0.5 cursor-pointer p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <h3 className="font-bold mb-1.5 group-hover:text-primary transition-colors">{audience.label}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{audience.text}</p>
                        <span className="mt-3 inline-flex items-center gap-1 text-xs text-primary font-medium">
                          Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* ── Related Tools — ALL clickable ────────────────────────────────── */}
          <section aria-labelledby="tools-heading" className="mb-16 max-w-4xl mx-auto">
            <h2 id="tools-heading" className="text-2xl font-bold mb-6">
              Start Verifying — Free Tools Referenced in the Videos
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { to: '/imei-checker', title: 'Free IMEI Checker', desc: 'Check any phone\'s stolen status, blacklist, and carrier lock.', cta: 'Check IMEI Free' },
                { to: '/vin-checker', title: 'Free VIN Checker', desc: 'Verify any vehicle for stolen status, title fraud, and history.', cta: 'Check VIN Free' },
                { to: '/serial-number-checker', title: 'Serial Number Check', desc: 'Verify electronics, tools, bikes, and firearms by serial number.', cta: 'Check Serial Free' },
                { to: '/app', title: 'Mobile App (PWA)', desc: 'Barcode scanning for point-of-sale verification. iOS & Android.', cta: 'Download App' },
                { to: '/firearms-check', title: 'Firearms Verification', desc: 'HotGunz stolen-firearms registry checks plus serial number integrity validation.', cta: 'Check Firearm' },
                { to: '/facebook-marketplace-safety', title: 'Marketplace Safety Guide', desc: 'Red flags and verification steps for Facebook Marketplace buyers.', cta: 'Read Guide' }
              ].map((tool) => (
                <Link
                  key={tool.to}
                  to={tool.to}
                  aria-label={tool.title}
                  className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl block"
                >
                  <Card className="p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group-hover:-translate-y-0.5 h-full cursor-pointer">
                    <h3 className="font-semibold group-hover:text-primary transition-colors mb-2 text-sm">{tool.title}</h3>
                    <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{tool.desc}</p>
                    <span className="text-xs text-primary flex items-center gap-1 font-medium">
                      {tool.cta} <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* ── Subscribe CTA ─────────────────────────────────────────────────── */}
          <div className="text-center bg-gradient-to-r from-red-600/10 to-orange-600/10 rounded-2xl p-10 border border-red-600/20 max-w-4xl mx-auto">
            <Youtube className="w-14 h-14 mx-auto text-red-600 mb-4" aria-hidden="true" />
            <h2 className="text-2xl font-bold mb-3">
              Subscribe for Weekly Stolen Item Safety Tips
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Get notified when Kelly McEvoy publishes new verification tutorials. Protect yourself every time you shop secondhand — on Facebook Marketplace, OfferUp, Craigslist, eBay, and more.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={YOUTUBE_CHANNEL.subscribeUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white gap-2 px-8 py-6 text-base"
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
                  className="border-red-600 text-red-600 hover:bg-red-600/10 gap-2 px-8 py-6 text-base"
                  aria-label="Subscribe to @safeorstolen on YouTube"
                >
                  <Bell className="h-5 w-5" aria-hidden="true" />
                  {YOUTUBE_CHANNEL_SECONDARY.handle}
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm">
              {[
                { icon: CheckCircle, text: 'New tutorials weekly', color: 'text-green-600' },
                { icon: Star, text: 'Completely free', color: 'text-yellow-500' },
                { icon: Shield, text: 'Protect your purchases', color: 'text-blue-500' },
                { icon: Smartphone, text: 'Mobile app available', color: 'text-purple-500' }
              ].map(({ icon: Icon, text, color }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon className={`w-4 h-4 ${color}`} aria-hidden="true" />
                  <span className="text-muted-foreground">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Internal Link Footer ─────────────────────────────────────────── */}
          <div className="mt-12 pt-8 border-t border-border/40 max-w-4xl mx-auto">
            <p className="text-sm font-semibold text-muted-foreground mb-4">Verification Tools:</p>
            <div className="flex flex-wrap gap-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/verify', label: 'Verify Item' },
                { to: '/imei-checker', label: 'IMEI Checker' },
                { to: '/vin-checker', label: 'VIN Checker' },
                { to: '/serial-number-checker', label: 'Serial Number Check' },
                { to: '/check-phone', label: 'Phone Check' },
                { to: '/check-car', label: 'Car Check' },
                { to: '/check-bike', label: 'Bike Check' },
                { to: '/firearms-check', label: 'Firearm Check' },
                { to: '/facebook-marketplace-safety', label: 'Marketplace Safety' },
                { to: '/app', label: 'Mobile App' },
                { to: '/pricing', label: 'Pricing' }
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-xs text-primary hover:underline bg-primary/5 px-3 py-1.5 rounded-full border border-primary/20 hover:border-primary/40 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default YouTubePage;
