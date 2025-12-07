import React, { useEffect } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Youtube, ExternalLink, Play, Video, Users } from 'lucide-react';

const YouTubePage: React.FC = () => {
  const youtubeUrl = 'https://www.youtube.com/@safeorstolen';

  const handleVisitChannel = () => {
    window.open(youtubeUrl, '_blank', 'noopener,noreferrer');
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SafeOrStolen YouTube Channel",
    "description": "Watch tutorials, guides, and tips on how to verify if secondhand items are stolen before buying. Learn to use IMEI checker, VIN lookup, and serial number verification.",
    "url": "https://safeorstolen.com/youtube",
    "mainEntity": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com",
      "sameAs": [
        "https://www.youtube.com/@safeorstolen",
        "https://twitter.com/safeorstolen",
        "https://www.crunchbase.com/organization/safe-or-stolen"
      ]
    }
  };

  return (
    <>
      <PageSEO
        title="SafeOrStolen YouTube Channel - Video Tutorials & Guides"
        description="Subscribe to SafeOrStolen on YouTube for tutorials on checking if items are stolen. Learn IMEI verification, VIN lookup, serial number checking, and more."
        keywords="SafeOrStolen YouTube, stolen item checker videos, IMEI checker tutorial, VIN lookup guide, serial number verification video"
        canonical="/youtube"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-600 rounded-full mb-6">
              <Youtube className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              SafeOrStolen on YouTube
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Watch tutorials, guides, and tips on how to verify secondhand items before buying. 
              Protect yourself from stolen goods with our video content.
            </p>
            <Button 
              size="lg" 
              onClick={handleVisitChannel}
              className="bg-red-600 hover:bg-red-700 text-white gap-2"
            >
              <Youtube className="h-5 w-5" />
              Visit Our YouTube Channel
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>

          {/* Content Sections */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="h-5 w-5 text-red-600" />
                  How-To Guides
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Step-by-step tutorials on using IMEI checker, VIN lookup, and serial number verification.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Video className="h-5 w-5 text-red-600" />
                  Safety Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn how to spot stolen items, avoid scams, and protect yourself when buying secondhand.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-red-600" />
                  Community Stories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Real stories from users who avoided buying stolen goods using SafeOrStolen.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-muted/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">Subscribe for Updates</h2>
            <p className="text-muted-foreground mb-6">
              Get notified when we post new videos about stolen item verification and marketplace safety.
            </p>
            <Button 
              size="lg" 
              onClick={handleVisitChannel}
              className="bg-red-600 hover:bg-red-700 text-white gap-2"
            >
              <Youtube className="h-5 w-5" />
              Subscribe on YouTube
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default YouTubePage;
