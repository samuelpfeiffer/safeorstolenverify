import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Youtube, Play, ExternalLink, Bell, ArrowUp, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { YOUTUBE_SHORTS, YOUTUBE_CHANNEL, KELLY_CHANNEL, getYouTubeShortsUrl } from '@/config/videoData';
import { useState, useRef, useEffect } from 'react';

const ShortsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'up' | 'down') => {
    if (direction === 'up' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === 'down' && currentIndex < YOUTUBE_SHORTS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        handleScroll('up');
      } else if (e.key === 'ArrowDown') {
        handleScroll('down');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <>
      <PageSEO
        title="YouTube Shorts | SafeOrStolen Quick Tips"
        description="Watch SafeOrStolen YouTube Shorts - quick tips on verifying secondhand items before buying. IMEI checks, VIN lookups, and scam prevention in under 60 seconds."
        keywords="SafeOrStolen shorts, YouTube shorts, quick tips, IMEI check, VIN lookup, stolen item verification, marketplace safety"
        canonical="/shorts"
        isVideoPage={true}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "VideoGallery",
          "name": "SafeOrStolen YouTube Shorts",
          "description": "Quick tips on verifying secondhand items",
          "provider": {
            "@type": "Organization",
            "name": "SafeOrStolen"
          }
        }}
      />
      
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 pt-24 pb-4">
          <BreadcrumbNavigation items={[
            { name: 'Videos', href: '/videos' },
            { name: 'Shorts', href: '/shorts' }
          ]} />
        </div>

        {/* Hero */}
        <section className="py-8 md:py-12 bg-gradient-to-br from-red-500/10 via-background to-primary/5">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="outline" className="mb-4 border-red-500/50 text-red-500">
              <Youtube className="h-4 w-4 mr-2" />
              YouTube Shorts
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              SafeOrStolen Shorts
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6">
              Quick tips on verifying items in under 60 seconds
            </p>
            
            <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
              <a 
                href={YOUTUBE_CHANNEL.subscribeUrl}
                target="_blank" 
                rel="noopener noreferrer"
                className="gap-2"
              >
                <Bell className="h-5 w-5" />
                Subscribe for More
              </a>
            </Button>
          </div>
        </section>

        {/* Shorts Grid - Desktop */}
        <section className="py-12 hidden md:block">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Latest Shorts</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {YOUTUBE_SHORTS.map((short) => (
                <a
                  key={short.id}
                  href={getYouTubeShortsUrl(short.videoId)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="relative aspect-[9/16] bg-muted rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <img 
                      src={`https://img.youtube.com/vi/${short.videoId}/maxresdefault.jpg`}
                      alt={short.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                      <div className="p-4 bg-red-600 rounded-full group-hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 text-white fill-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white font-semibold text-sm line-clamp-2 mb-1">{short.title}</p>
                      <p className="text-white/70 text-xs">{short.views} views • {short.author}</p>
                    </div>
                    <Badge className="absolute top-3 left-3 bg-red-600 text-white">
                      <Youtube className="h-3 w-3 mr-1" />
                      Shorts
                    </Badge>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Shorts Viewer - Mobile Style */}
        <section className="py-8 md:hidden">
          <div className="container mx-auto px-4">
            <div 
              ref={containerRef}
              className="relative max-w-sm mx-auto"
            >
              {/* Navigation Arrows */}
              <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-2">
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full bg-white/80 hover:bg-white"
                  onClick={() => handleScroll('up')}
                  disabled={currentIndex === 0}
                >
                  <ArrowUp className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  className="rounded-full bg-white/80 hover:bg-white"
                  onClick={() => handleScroll('down')}
                  disabled={currentIndex === YOUTUBE_SHORTS.length - 1}
                >
                  <ArrowDown className="h-5 w-5" />
                </Button>
              </div>

              {/* Current Short */}
              <a
                href={getYouTubeShortsUrl(YOUTUBE_SHORTS[currentIndex].videoId)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative aspect-[9/16] bg-muted rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={`https://img.youtube.com/vi/${YOUTUBE_SHORTS[currentIndex].videoId}/maxresdefault.jpg`}
                    alt={YOUTUBE_SHORTS[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-5 bg-red-600/90 rounded-full">
                      <Play className="h-10 w-10 text-white fill-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent">
                    <p className="text-white font-bold text-lg mb-2">{YOUTUBE_SHORTS[currentIndex].title}</p>
                    <p className="text-white/80 text-sm mb-1">{YOUTUBE_SHORTS[currentIndex].description}</p>
                    <p className="text-white/60 text-xs">{YOUTUBE_SHORTS[currentIndex].views} views • {YOUTUBE_SHORTS[currentIndex].author}</p>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-red-600 text-white">
                    <Youtube className="h-3 w-3 mr-1" />
                    Shorts
                  </Badge>
                </div>
              </a>

              {/* Progress Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {YOUTUBE_SHORTS.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-red-600' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Kelly McEvoy Channel */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Follow Kelly McEvoy</h2>
              <p className="text-muted-foreground mb-6">
                {KELLY_CHANNEL.description}
              </p>
              <Button variant="outline" asChild>
                <a 
                  href={KELLY_CHANNEL.url}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <Youtube className="h-4 w-4 text-red-600" />
                  {KELLY_CHANNEL.handle}
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* View All */}
        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="outline" asChild>
                <Link to="/videos" className="gap-2">
                  <Play className="h-4 w-4" />
                  All Videos
                </Link>
              </Button>
              <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
                <a 
                  href="https://www.youtube.com/@SafeOrStolen/shorts"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  View on YouTube
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Verify?</h2>
            <p className="text-muted-foreground mb-6">
              Get 2 free verification searches today
            </p>
            <Button size="lg" asChild>
              <Link to="/verify">
                Start Free Verification
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default ShortsPage;