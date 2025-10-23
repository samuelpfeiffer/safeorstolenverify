import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Globe, Users, TrendingUp, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const PressReleasePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "SafeOrStolen Partners with FasterCapital to Launch Web App Platform for Trusted Secondhand Verification",
    "datePublished": "2025-08-11T00:00:00Z",
    "dateModified": "2025-08-11T00:00:00Z",
    "author": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
      }
    },
    "description": "SafeOrStolen announces strategic partnership with FasterCapital through its LaunchUp program to revolutionize second-hand market security.",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://safeorstolen.com/press-release"
    }
  };

  return (
    <>
      <PageSEO
        title="Press Release: SafeOrStolen Partners with FasterCapital | SafeOrStolen"
        description="SafeOrStolen announces strategic partnership with FasterCapital to revolutionize second-hand market security. Read the full press release about our mission to combat stolen goods trafficking."
        keywords="SafeOrStolen press release, FasterCapital partnership, stolen goods verification, second-hand market security, startup news, LaunchUp program"
        canonical="/press-release"
        type="article"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-black via-[#3D2817] to-[#FF8C00]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4 bg-sos-lime text-sos-dark">
                Press Release
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                SafeOrStolen Partners with FasterCapital to Launch Web App Platform for Trusted Secondhand Verification
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Co-founders Samuel Pfeiffer and Kelly McEvoy lead web app innovation in fraud prevention and marketplace safety
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-white/80">
                <span className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Peoria, AZ & Dubai, UAE
                </span>
                <span>•</span>
                <span>August 11, 2025</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Key Highlights */}
              <Card className="mb-12 bg-gradient-to-br from-sos-lime/10 to-sos-orange/10 border-sos-orange/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-sos-orange" />
                    Key Highlights
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <Building2 className="h-5 w-5 text-sos-lime mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">Strategic Partnership</h3>
                        <p className="text-muted-foreground text-sm">
                          FasterCapital's LaunchUp program accelerates SafeOrStolen's global expansion
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Globe className="h-5 w-5 text-sos-lime mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">$250B+ Market</h3>
                        <p className="text-muted-foreground text-sm">
                          Disrupting the global used goods marketplace
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-sos-lime mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">1M User Goal</h3>
                        <p className="text-muted-foreground text-sm">
                          Targeting 1 million users globally within 18 months
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="h-5 w-5 text-sos-lime mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">$500K Funding Round</h3>
                        <p className="text-muted-foreground text-sm">
                          Supporting product development and team growth
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Press Release Content */}
              <div className="prose prose-lg max-w-none">
                <p className="lead text-xl text-muted-foreground mb-8">
                  <strong>SafeOrStolen Inc.</strong>, an innovative security-focused web app company, today announced a strategic partnership with FasterCapital through its LaunchUp program. This collaboration aims to accelerate SafeOrStolen's mission to provide real-time legitimacy verification for second-hand merchandise across the U.S. and international markets.
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-4">Market Opportunity & Problem Statement</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The global second-hand merchandise market continues to expand rapidly, with platforms like Facebook Marketplace, eBay, and OfferUp collectively serving billions of users annually. Despite this growth, buyers and sellers face significant risks due to the lack of accessible, reliable tools to verify item legitimacy before purchase.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  This gap leads to billions lost annually in stolen goods transactions, legal liabilities, and consumer distrust. SafeOrStolen addresses this critical market inefficiency by providing an easy-to-use, web-first platform (with optional mobile downloads) that taps into law enforcement and insurance databases to deliver instant verification, filling a white space in security and trust within the resale economy.
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-4">Startup Solution & Differentiation</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  SafeOrStolen offers a cutting-edge web app at <a href="https://safeorstolen.com" className="text-sos-orange hover:underline" target="_blank" rel="noopener noreferrer">safeorstolen.com</a>—with downloadable mobile app options—that enables users to instantly check if merchandise is lost, stolen, or safe to transact.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Key features include:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                  <li>Scanning IMEI, VIN, and serial numbers</li>
                  <li>Access to law enforcement and insurance claim databases</li>
                  <li>User-generated verification through police report uploads</li>
                  <li>Real-time data integration for accuracy and speed</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Having raised $25,000 in initial funding and developed a working prototype, SafeOrStolen is uniquely positioned with a first-mover advantage in creating a crime-reduction ecosystem within the resale market.
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-4">FasterCapital Partnership Value</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Through the LaunchUp program, SafeOrStolen gains access to FasterCapital's extensive resources including strategic mentorship, capital raising facilitation, and global networking opportunities. FasterCapital's rigorous selection process, led by Hesham Zreik, underscores the startup's strong product-market fit and growth potential.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  This partnership accelerates SafeOrStolen's development timeline, supporting its goal to reach 1 million users and scale internationally within the next 18 months. The collaboration also enhances credibility with investors and partners, positioning SafeOrStolen for successful fundraising and market penetration.
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-4">Executive Quotes</h2>
                <Card className="my-8 border-l-4 border-sos-orange bg-muted/30">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground italic leading-relaxed mb-4">
                      "SafeOrStolen exemplifies the kind of innovative, socially impactful startup that we seek to empower through our LaunchUp program. Their unique approach to securing the second-hand market addresses a significant global challenge with scalable technology. We are excited to support their journey toward becoming a market leader and driving meaningful crime reduction worldwide."
                    </p>
                    <p className="font-semibold">
                      — Hesham Zreik, Founder and CEO of FasterCapital
                    </p>
                  </CardContent>
                </Card>

                <Card className="my-8 border-l-4 border-sos-lime bg-muted/30">
                  <CardContent className="p-6">
                    <p className="text-muted-foreground italic leading-relaxed mb-4">
                      "Our partnership with FasterCapital validates our vision to transform how people buy and sell used goods safely. With their strategic guidance and resources, we can accelerate our platform's launch, expand our user base, and deliver on our promise of real-time, trustworthy information. Together, we're building a safer marketplace that benefits consumers, businesses, and law enforcement alike."
                    </p>
                    <p className="font-semibold">
                      — Samuel Pfeiffer, Founder and CEO of SafeOrStolen
                    </p>
                  </CardContent>
                </Card>

                <h2 className="text-2xl font-bold mt-12 mb-4">Growth Trajectory & Future Plans</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  SafeOrStolen plans to launch updates across its platform within the next six months, targeting 350,000 to 500,000 users in the first year. Following initial traction, the company will focus on monetization via freemium subscriptions, in-app purchases, and strategic partnerships.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Geographic expansion beyond the U.S. is slated for year two, with a goal of reaching over 1 million users globally. The startup is currently seeking $500,000 in funding to support product development, marketing, and team growth, aiming to become the definitive platform for second-hand merchandise legitimacy and crime prevention worldwide.
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-4">About SafeOrStolen</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Founded by Samuel Pfeiffer, SafeOrStolen is a pioneering company dedicated to providing reliable, real-time verification of second-hand merchandise legitimacy. By integrating trusted law enforcement and insurance data, SafeOrStolen empowers users to make informed buying and selling decisions, reducing crime and fostering trust in the resale economy.
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-4">About FasterCapital</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  FasterCapital is a global venture builder and online incubator dedicated to co-funding and co-founding innovative startups. Established in 2014, it is now the #1 venture builder in terms of number of startups helped, money invested, and money raised. It supports startups worldwide through various programs, including funding assistance, business development, and technical support. The LaunchUp program is designed to help early-stage startups build scalable solutions with mentorship, strategic guidance, and network support.
                </p>

                <h2 className="text-2xl font-bold mt-12 mb-4">Media Contact</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <Card className="bg-muted/30">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4">FasterCapital</h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p><strong>Rasha Almasri</strong></p>
                        <p>Email: <a href="mailto:rasha.almasri@fastercapital.com" className="text-sos-orange hover:underline">rasha.almasri@fastercapital.com</a></p>
                        <p>Phone: +1 (512) 400-0256</p>
                        <p>Website: <a href="https://www.fastercapital.com" className="text-sos-orange hover:underline" target="_blank" rel="noopener noreferrer">www.fastercapital.com</a></p>
                        <p>Phone: +971 555 855 663</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-muted/30">
                    <CardContent className="p-6">
                      <h3 className="font-bold mb-4">SafeOrStolen</h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p><strong>Samuel Pfeiffer</strong></p>
                        <p>Email: <a href="mailto:support@safeorstolen.com" className="text-sos-orange hover:underline">support@safeorstolen.com</a></p>
                        <p>Website: <a href="https://safeorstolen.com" className="text-sos-orange hover:underline">safeorstolen.com</a></p>
                        <p>Phone: +1 (206) 249-2203</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* CTA Section */}
              <Card className="mt-12 bg-gradient-to-r from-sos-orange/10 to-sos-lime/10 border-sos-orange/20">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Try SafeOrStolen Today</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Protect yourself when buying or selling secondhand items. Get 4 free verifications when you sign up.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button 
                      size="lg" 
                      className="bg-sos-orange hover:bg-sos-orange/90"
                      asChild
                    >
                      <Link to="/stolen-item-checker">
                        Start Verifying Now
                      </Link>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      asChild
                    >
                      <a 
                        href="https://www.issuewire.com/safeorstolen-partners-with-fastercapital-to-launch-web-app-platform-for-trusted-secondhand-verification-1845387637096904"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        Read on IssueWire
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PressReleasePage;
