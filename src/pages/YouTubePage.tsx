import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Youtube, ExternalLink, Play, Video, Users } from 'lucide-react';

const YouTubePage: React.FC = () => {
  const youtubeUrl = 'https://www.youtube.com/@safeorstolen';

  const handleVisitChannel = () => {
    window.open(youtubeUrl, '_blank', 'noopener,noreferrer');
  };

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "SafeOrStolen YouTube Channel",
      "description": "Video tutorials on stolen item verification, IMEI checking, and VIN lookup.",
      "url": "https://safeorstolen.com/youtube"
    },
    {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "SafeOrStolen Tutorials",
      "description": "Learn how to verify if items are stolen before buying with IMEI, VIN, and serial number checks.",
      "thumbnailUrl": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png",
      "uploadDate": "2024-01-01",
      "contentUrl": "https://www.youtube.com/@safeorstolen",
      "embedUrl": "https://www.youtube.com/@safeorstolen"
    }
  ];

  return (
    <>
      <PageSEO
        title="SafeOrStolen YouTube - Stolen Item Verification Tutorials"
        description="Watch free tutorials on checking if items are stolen. Learn IMEI verification, VIN lookup, and serial number checking. Subscribe for safety tips."
        keywords="SafeOrStolen YouTube, stolen item checker tutorial, IMEI checker video, VIN lookup guide, serial number verification how-to"
        canonical="/youtube"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-full mb-6">
              <Youtube className="h-10 w-10 text-white" aria-hidden="true" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              SafeOrStolen YouTube Channel
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Free video tutorials on verifying secondhand items before buying. Learn to use IMEI, VIN, and serial number checks.
            </p>
            <Button 
              size="lg" 
              onClick={handleVisitChannel}
              className="bg-red-600 hover:bg-red-700 text-white gap-2"
              aria-label="Visit SafeOrStolen YouTube channel"
            >
              <Youtube className="h-5 w-5" aria-hidden="true" />
              Visit YouTube Channel
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          {/* Content Sections */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="h-5 w-5 text-red-600" aria-hidden="true" />
                  How-To Guides
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Step-by-step tutorials for IMEI checker, VIN lookup, and serial number verification.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="h-5 w-5 text-red-600" aria-hidden="true" />
                  Safety Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn to spot stolen items and avoid scams when buying secondhand.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-red-600" aria-hidden="true" />
                  Success Stories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Real stories from users who avoided buying stolen goods with SafeOrStolen.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-muted/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Subscribe for Updates</h2>
            <p className="text-muted-foreground mb-6">
              Get notified when we post new stolen item verification tutorials.
            </p>
            <Button 
              size="lg" 
              onClick={handleVisitChannel}
              className="bg-red-600 hover:bg-red-700 text-white gap-2"
              aria-label="Subscribe to SafeOrStolen on YouTube"
            >
              <Youtube className="h-5 w-5" aria-hidden="true" />
              Subscribe on YouTube
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default YouTubePage;
