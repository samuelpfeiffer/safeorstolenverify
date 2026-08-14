import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Play } from 'lucide-react';
import { SELF_HOSTED_VIDEOS, buildSelfHostedVideoSchema } from '@/config/selfHostedVideos';

const VideoIndexPage: React.FC = () => {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'SafeOrStolen Videos',
    itemListElement: SELF_HOSTED_VIDEOS.map((v, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://safeorstolen.com/videos/${v.slug}`,
      name: v.seoTitle,
    })),
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safeorstolen.com' },
      { '@type': 'ListItem', position: 2, name: 'Videos', item: 'https://safeorstolen.com/videos' },
    ],
  };

  return (
    <>
      <Helmet>
        <title>SafeOrStolen Videos — Watch How Stolen Item Checks Work</title>
        <meta
          name="description"
          content="Watch SafeOrStolen videos: how IMEI, VIN, plate, serial, firearm, and bicycle checks work, marketplace safety tips, and our fortune teller sketch."
        />
        <link rel="canonical" href="https://safeorstolen.com/videos" />
        <meta property="og:title" content="SafeOrStolen Videos — Watch How Stolen Item Checks Work" />
        <meta
          property="og:description"
          content="Short videos explaining how to verify used items before you buy or resell them."
        />
        <script type="application/ld+json">{JSON.stringify(itemList)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
        {SELF_HOSTED_VIDEOS.map((v) => (
          <script key={v.slug} type="application/ld+json">
            {JSON.stringify(buildSelfHostedVideoSchema(v))}
          </script>
        ))}
      </Helmet>

      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8 max-w-5xl">
          <h1 className="text-4xl font-bold mb-4">SafeOrStolen Videos</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
            Short videos on verifying used items before you buy or resell them — phones, vehicles,
            license plates, serial numbers, firearms, and bicycles. Every video includes a full
            transcript and key moments.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {SELF_HOSTED_VIDEOS.map((v) => (
              <Link key={v.slug} to={`/videos/${v.slug}`} className="block group">
                <Card className="overflow-hidden h-full hover:border-primary transition">
                  <div className="aspect-video bg-black relative">
                    <img
                      src={v.poster}
                      alt={`${v.title} video thumbnail`}
                      className="w-full h-full object-cover group-hover:opacity-90"
                      loading="lazy"
                    />
                    <Play className="w-10 h-10 text-white absolute inset-0 m-auto drop-shadow-lg" />
                  </div>
                  <div className="p-4">
                    <Badge variant="outline" className="mb-2">
                      {v.category}
                    </Badge>
                    <h2 className="font-bold mb-1">{v.title}</h2>
                    <p className="text-sm text-muted-foreground line-clamp-3">{v.description}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <Button asChild size="lg" className="gap-2">
            <Link to="/verify">
              <Shield className="w-4 h-4" /> Verify an Item — Free
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default VideoIndexPage;
