import React, { useRef } from 'react';
import { useParams, useSearchParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Shield, CheckCircle, Play } from 'lucide-react';
import {
  SELF_HOSTED_VIDEOS,
  getSelfHostedVideoBySlug,
  buildSelfHostedVideoSchema,
} from '@/config/selfHostedVideos';

const formatTime = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

const SelfHostedVideoWatchPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [searchParams] = useSearchParams();
  const videoRef = useRef<HTMLVideoElement>(null);
  const video = slug ? getSelfHostedVideoBySlug(slug) : undefined;

  const startAt = Number(searchParams.get('t')) || 0;

  if (!video) return <Navigate to="/youtube" replace />;

  const seekTo = (seconds: number) => {
    const el = videoRef.current;
    if (!el) return;
    el.currentTime = seconds;
    void el.play();
  };

  const videoSchema = buildSelfHostedVideoSchema(video);
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safeorstolen.com' },
      { '@type': 'ListItem', position: 2, name: 'Videos', item: 'https://safeorstolen.com/videos' },
      {
        '@type': 'ListItem',
        position: 3,
        name: video.title,
        item: `https://safeorstolen.com/videos/${video.slug}`,
      },
    ],
  };

  const related = SELF_HOSTED_VIDEOS.filter((v) => v.slug !== video.slug);
  const isPortrait = video.orientation === 'portrait';

  return (
    <>
      <Helmet>
        <title>{video.seoTitle} | SafeOrStolen</title>
        <meta name="description" content={video.seoDescription} />
        <meta name="keywords" content={video.tags.join(', ')} />
        <link rel="canonical" href={`https://safeorstolen.com/videos/${video.slug}`} />
        <meta property="og:title" content={video.seoTitle} />
        <meta property="og:description" content={video.seoDescription} />
        <meta property="og:type" content="video.other" />
        <meta property="og:video" content={`https://safeorstolen.com${video.src}`} />
        <meta property="og:video:type" content="video/mp4" />
        <meta property="og:image" content={`https://safeorstolen.com${video.poster}`} />
        <meta name="twitter:card" content="player" />
        <script type="application/ld+json">{JSON.stringify(videoSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
      </Helmet>

      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8 max-w-5xl">
          <nav className="mb-6" aria-label="Breadcrumb">
            <Link
              to="/videos"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" /> All Videos
            </Link>
          </nav>

          <Card
            className={`overflow-hidden border-2 border-primary/20 mb-6 ${
              isPortrait ? 'max-w-sm mx-auto' : ''
            }`}
          >
            <div className={`${isPortrait ? 'aspect-[9/16]' : 'aspect-video'} bg-black`}>
              <video
                ref={videoRef}
                controls
                playsInline
                preload="metadata"
                poster={video.poster}
                className="w-full h-full"
                onLoadedMetadata={(e) => {
                  if (startAt > 0) e.currentTarget.currentTime = startAt;
                }}
              >
                <source src={video.src} type="video/mp4" />
              </video>
            </div>
          </Card>

          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-primary text-primary-foreground">{video.category}</Badge>
            <Badge variant="outline">{formatTime(video.durationSeconds)}</Badge>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">{video.seoTitle}</h1>
          <p className="text-lg text-muted-foreground mb-6">{video.seoDescription}</p>

          {video.keyTakeaway && (
            <Card className="p-5 mb-8 border-primary/30 bg-primary/5">
              <h2 className="text-sm font-bold uppercase tracking-wide text-primary mb-2">
                Quick answer
              </h2>
              <p className="text-base">{video.keyTakeaway}</p>
            </Card>
          )}

          <div className="flex flex-wrap gap-4 mb-10">
            <Button asChild size="lg" className="gap-2">
              <Link to="/verify">
                <Shield className="w-4 h-4" /> Verify Now — Free
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/pricing">See Pricing</Link>
            </Button>
          </div>

          {video.clips && video.clips.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Key Moments</h2>
              <ul className="space-y-2">
                {video.clips.map((c) => (
                  <li key={c.startOffset}>
                    <button
                      type="button"
                      onClick={() => seekTo(c.startOffset)}
                      className="w-full text-left flex gap-3 items-start rounded-lg border border-border p-3 hover:border-primary transition"
                    >
                      <Play className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span>
                        <span className="font-semibold">
                          {formatTime(c.startOffset)} — {c.name}
                        </span>
                        <span className="block text-sm text-muted-foreground">{c.summary}</span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Transcript</h2>
            <p className="text-muted-foreground leading-relaxed">{video.transcript}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Why Verify Before You Buy</h2>
            <ul className="space-y-3">
              {[
                'Avoid losing money — police seize stolen property without refund.',
                'Stay out of legal trouble — possession of stolen goods is a crime in all 50 US states.',
                'Cross-checks 100+ databases in a single search.',
                'Works for IMEI, VIN, license plate, serial number, firearm, and bicycle checks.',
                'Results in under 3 seconds. No card required to start.',
              ].map((line) => (
                <li key={line} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </section>

          {related.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-4">More Videos</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {related.map((r) => (
                  <Link key={r.slug} to={`/videos/${r.slug}`} className="block group">
                    <Card className="overflow-hidden hover:border-primary transition">
                      <div className="aspect-video bg-black">
                        <img
                          src={r.poster}
                          alt={r.seoTitle}
                          className="w-full h-full object-cover group-hover:opacity-90"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold mb-1">{r.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{r.description}</p>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default SelfHostedVideoWatchPage;
