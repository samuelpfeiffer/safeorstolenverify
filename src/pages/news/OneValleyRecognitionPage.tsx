import React from 'react';
import { Trophy, Award, Globe, Target, ArrowRight, Shield, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

/**
 * News page detailing SafeOrStolen's recognition by OneValley and participation
 * in the Entrepreneurship World Cup 2020, representing the United States.
 */
const OneValleyRecognitionPage = () => {
  return (
    <>
      <PageSEO
        title="SafeOrStolen Recognized by OneValley & Entrepreneurship World Cup for SaaS Innovation"
        description="Learn why OneValley and the Entrepreneurship World Cup 2020 highlighted SafeOrStolen as an innovative SaaS solution protecting buyers and sellers from stolen goods. Representing the United States."
        keywords="OneValley, Entrepreneurship World Cup 2020, SafeOrStolen recognition, SaaS innovation, startup competition, EWC 2020, stolen goods verification"
        canonical="/news/onevalley-recognition"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": "SafeOrStolen Recognized by OneValley & Entrepreneurship World Cup for SaaS Innovation",
            "description": "SafeOrStolen was recognized by OneValley for innovative solutions and approach to disruption in the SaaS/Enterprise Software space while representing the United States at the Entrepreneurship World Cup 2020.",
            "datePublished": "2020-10-01",
            "dateModified": "2024-12-16",
            "author": {
              "@type": "Organization",
              "name": "SafeOrStolen"
            },
            "publisher": {
              "@type": "Organization",
              "name": "SafeOrStolen",
              "logo": {
                "@type": "ImageObject",
                "url": "https://safeorstolen.com/logo.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://safeorstolen.com/news/onevalley-recognition"
            }
          }
        ]}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 pt-24 pb-4">
          <BreadcrumbNavigation 
            items={[
              { name: 'News', href: '/news' },
              { name: 'OneValley Recognition', href: '/news/onevalley-recognition' }
            ]} 
          />
        </div>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-amber-500/10 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 px-3 py-1">
                <Trophy className="h-4 w-4 mr-2 text-amber-500" />
                Recognition
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                SafeOrStolen Recognized by OneValley & Entrepreneurship World Cup 2020
              </h1>
              <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                Honored for "innovative solutions and approach to disruption in the SaaS/Enterprise Software space" 
                while representing the United States.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="outline" className="px-3 py-1">
                  <Globe className="h-4 w-4 mr-2" />
                  Global Competition
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  🇺🇸 United States
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  <Award className="h-4 w-4 mr-2" />
                  SaaS Innovation
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* What is the Entrepreneurship World Cup */}
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                  <Globe className="h-6 w-6 text-primary" />
                  What is the Entrepreneurship World Cup?
                </h2>
                <p className="text-muted-foreground mb-4">
                  The <strong className="text-foreground">Entrepreneurship World Cup (EWC)</strong> is the world's 
                  largest startup competition, bringing together entrepreneurs from over 200 countries to compete 
                  for $1 million in prizes, mentorship, and global recognition.
                </p>
                <p className="text-muted-foreground">
                  Founded in 2019 by the Global Entrepreneurship Network in partnership with the Misk Foundation, 
                  the EWC identifies and celebrates the most innovative startups worldwide, providing them with 
                  resources, visibility, and connections to accelerate their growth.
                </p>
              </Card>

              {/* What is OneValley */}
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                  <Target className="h-6 w-6 text-primary" />
                  What is OneValley?
                </h2>
                <p className="text-muted-foreground mb-4">
                  <strong className="text-foreground">OneValley</strong> (formerly GSVlabs) is a global innovation 
                  platform that connects startups, corporates, and investors. As global partners of the 
                  Entrepreneurship World Cup, OneValley helps identify and support groundbreaking companies 
                  disrupting traditional industries.
                </p>
                <p className="text-muted-foreground">
                  With a network spanning Silicon Valley, Europe, and Asia, OneValley has supported thousands of 
                  startups and facilitated billions in funding.
                </p>
              </Card>

              {/* The Recognition */}
              <Card className="p-6 border-amber-500/30 bg-gradient-to-br from-amber-500/5 to-background">
                <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                  <Trophy className="h-6 w-6 text-amber-500" />
                  The Recognition
                </h2>
                <blockquote className="border-l-4 border-amber-500 pl-4 py-2 my-4 bg-muted/30 rounded-r-lg">
                  <p className="text-foreground italic">
                    "Congratulations to Samuel and SafeOrStolen for participating in the Entrepreneurship World Cup 2020, 
                    representing the United States, with your <strong>innovative solutions and approach to disruption 
                    in the SaaS/Enterprise Software space</strong>."
                  </p>
                  <footer className="text-sm text-muted-foreground mt-2">
                    — Alec, OneValley (Global Partners of the Entrepreneurship World Cup 2020)
                  </footer>
                </blockquote>
                <p className="text-muted-foreground">
                  This recognition validates SafeOrStolen's mission to protect buyers and sellers from stolen goods 
                  using innovative technology. Being acknowledged on a global stage reinforces our commitment to 
                  building solutions that genuinely reduce crime and protect consumers.
                </p>
              </Card>

              {/* What This Means for Users */}
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
                  <Shield className="h-6 w-6 text-primary" />
                  What This Means for Our Users
                </h2>
                <p className="text-muted-foreground mb-4">
                  Being recognized by OneValley and the Entrepreneurship World Cup demonstrates that SafeOrStolen's 
                  approach to stolen goods verification is genuinely innovative and impactful. When you use SafeOrStolen, 
                  you're using a platform that has been vetted and recognized by global entrepreneurship leaders.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Validated by global startup competition judges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Recognized for disruption in SaaS/Enterprise Software</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Selected to represent the United States</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Continuing to innovate with the only mobile verification app</span>
                  </li>
                </ul>
              </Card>

              {/* CTA Section */}
              <div className="grid md:grid-cols-2 gap-6 pt-8">
                <Card className="p-6 text-center">
                  <Smartphone className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2 text-foreground">Try SafeOrStolen</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Experience the innovation yourself. Verify any item in 3 seconds.
                  </p>
                  <Button asChild>
                    <Link to="/verify">
                      Verify Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </Card>
                <Card className="p-6 text-center">
                  <Target className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2 text-foreground">Download the App</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    The only mobile app for stolen item verification with barcode scanning.
                  </p>
                  <Button asChild variant="outline">
                    <Link to="/app">
                      Get the App <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </Card>
              </div>

              {/* Related Links */}
              <div className="pt-8 border-t">
                <h3 className="font-semibold mb-4 text-foreground">Learn More About SafeOrStolen</h3>
                <div className="flex flex-wrap gap-3">
                  <Button asChild variant="ghost" size="sm">
                    <Link to="/about">About Us</Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm">
                    <Link to="/how-it-works">How It Works</Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm">
                    <Link to="/pricing">Pricing</Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm">
                    <Link to="/faq">FAQ</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OneValleyRecognitionPage;
