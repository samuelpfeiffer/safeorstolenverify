import { Calendar, ExternalLink, Download, Share2, Building2, Newspaper, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PageSEO } from '@/components/seo/PageSEO';
import { PressReleaseSchema } from '@/components/seo/PressReleaseSchema';
import { Separator } from '@/components/ui/separator';

export default function PressPage() {
  const pressReleases = [
    {
      id: 1,
      title: "Safe or Stolen Partners with FasterCapital to Revolutionize Second-Hand Market Security",
      date: "August 11, 2025",
      location: "Olympia, WA & Dubai, UAE",
      category: "Partnership",
      excerpt: "Safe or Stolen announces strategic partnership with FasterCapital through LaunchUp program to accelerate real-time legitimacy verification for second-hand merchandise across U.S. and international markets.",
      content: {
        intro: "Safe or Stolen, LLC, an innovative security-focused mobile app startup, today announced a strategic partnership with FasterCapital through its LaunchUp program. This collaboration aims to accelerate Safe or Stolen's mission to provide real-time legitimacy verification for second-hand merchandise across the U.S. and international markets.",
        marketOpportunity: "The global second-hand merchandise market continues to expand rapidly, with platforms like Facebook Marketplace, eBay, and OfferUp collectively serving over a billion users annually. Despite this growth, buyers and sellers face significant risks due to the lack of accessible, reliable tools to verify item legitimacy before purchase. This gap leads to billions lost annually in stolen goods transactions, legal liabilities, and consumer distrust.",
        solution: "Safe or Stolen offers a cutting-edge mobile app available on iOS, Android, and web platforms that enables users to instantly check if merchandise is lost, stolen, or safe to transact. Key features include scanning IMEI, VIN, and serial numbers, access to law enforcement and insurance claim databases, and user-generated verification through police report uploads.",
        quotes: [
          {
            name: "Hesham Zreik",
            title: "Founder and CEO of FasterCapital",
            quote: "Safe or Stolen exemplifies the kind of innovative, socially impactful startup that we seek to empower through our LaunchUp program. Their unique approach to securing the second-hand market addresses a significant global challenge with scalable technology. We are excited to support their journey toward becoming a market leader and driving meaningful crime reduction worldwide."
          },
          {
            name: "Samuel Pfeiffer",
            title: "Founder and CEO of Safe or Stolen",
            quote: "Our partnership with FasterCapital validates our vision to transform how people buy and sell used goods safely. With their strategic guidance and resources, we can accelerate our app's launch, expand our user base, and deliver on our promise of real-time, trustworthy information. Together, we're building a safer marketplace that benefits consumers, businesses, and law enforcement alike."
          }
        ],
        growth: "Safe or Stolen plans to launch its lean version app across Android and iOS platforms within the next six months, targeting 350,000 to 500,000 users in the first year. The startup is currently seeking $500,000 in funding to support product development, marketing, and team growth, aiming to become the definitive platform for second-hand merchandise legitimacy and crime prevention worldwide."
      },
      featured: true
    }
  ];

  const mediaAssets = [
    {
      title: "Company Logo (High-Res)",
      type: "PNG",
      size: "2 MB",
      link: "/images/sos-logo.png"
    },
    {
      title: "Press Kit",
      type: "PDF",
      size: "5 MB",
      link: "#"
    },
    {
      title: "Product Screenshots",
      type: "ZIP",
      size: "15 MB",
      link: "#"
    }
  ];

  const externalLinks = [
    {
      name: "Crunchbase",
      url: "https://www.crunchbase.com/organization/safeorstolen",
      icon: Building2,
      description: "Company profile and funding information"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/safeorstolen",
      icon: ExternalLink,
      description: "Follow us for company updates"
    },
    {
      name: "Mobile App",
      url: "/mobile-app",
      icon: TrendingUp,
      description: "Download our iOS & Android app"
    },
    {
      name: "FasterCapital Partnership",
      url: "https://fastercapital.com",
      icon: TrendingUp,
      description: "Our acceleration partner"
    }
  ];

  const handleShare = async (title: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: 'Read the latest from SafeOrStolen',
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share failed', err);
      }
    }
  };

  return (
    <>
      <PageSEO
        title="Press Releases & News | SafeOrStolen Media Center"
        description="Latest press releases, news, and announcements from SafeOrStolen. Download media kits, company logos, and learn about our partnerships reducing crime globally."
        keywords="SafeOrStolen press releases, company news, FasterCapital partnership, stolen goods verification news, media kit, press center"
        canonical="/press"
      />
      
      <PressReleaseSchema
        headline="Safe or Stolen Partners with FasterCapital to Revolutionize Second-Hand Market Security"
        datePublished="2025-08-11"
        author="SafeOrStolen"
        description="SafeOrStolen announces strategic partnership with FasterCapital to accelerate real-time legitimacy verification for second-hand merchandise"
        url="https://safeorstolen.com/press"
      />

      <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
        {/* Hero Section */}
        <section className="py-20 md:py-32 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <Newspaper className="h-4 w-4" />
                <span>Press & Media Center</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                SafeOrStolen
                <span className="block mt-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  In The News
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                The latest announcements, partnerships, and milestones from the world's only mobile-first stolen goods verification platform
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="outline" asChild>
                  <a href="#media-kit">
                    <Download className="h-5 w-5 mr-2" />
                    Download Media Kit
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="mailto:press@safeorstolen.com">
                    Contact Press Team
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Press Release */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {pressReleases.filter(pr => pr.featured).map((release) => (
                <Card key={release.id} className="border-2 border-primary/20">
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Badge className="bg-primary">Featured</Badge>
                      <Badge variant="outline">{release.category}</Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {release.date}
                      </div>
                      <div className="text-sm text-muted-foreground ml-auto">
                        {release.location}
                      </div>
                    </div>
                    <CardTitle className="text-3xl md:text-4xl mb-4">
                      {release.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Introduction */}
                    <div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {release.content.intro}
                      </p>
                    </div>

                    <Separator />

                    {/* Market Opportunity */}
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        Market Opportunity & Problem Statement
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {release.content.marketOpportunity}
                      </p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        Startup Solution & Differentiation
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {release.content.solution}
                      </p>
                    </div>

                    {/* Quotes */}
                    <div className="space-y-6 bg-primary/5 rounded-xl p-6">
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        Executive Quotes
                      </h3>
                      {release.content.quotes.map((quote, idx) => (
                        <div key={idx} className="border-l-4 border-primary pl-6">
                          <p className="text-lg italic text-foreground mb-3">
                            "{quote.quote}"
                          </p>
                          <p className="text-sm font-semibold text-foreground">
                            — {quote.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {quote.title}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Growth */}
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        Growth Trajectory & Future Plans
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {release.content.growth}
                      </p>
                    </div>

                    {/* Share Actions */}
                    <div className="flex flex-wrap gap-3 pt-6 border-t border-border">
                      <Button 
                        variant="outline" 
                        onClick={() => handleShare(release.title)}
                      >
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                      <Button variant="outline" asChild>
                        <a href={`mailto:?subject=${encodeURIComponent(release.title)}&body=${encodeURIComponent(window.location.href)}`}>
                          Email
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* External Links */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-foreground mb-12">
                Find Us Around The Web
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {externalLinks.map((link, idx) => (
                  <Card key={idx} className="hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <link.icon className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {link.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {link.description}
                      </p>
                      <Button variant="outline" size="sm" asChild className="w-full">
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          Visit <ExternalLink className="h-4 w-4 ml-2" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Media Kit */}
        <section id="media-kit" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-foreground mb-12">
                Media Assets & Press Kit
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {mediaAssets.map((asset, idx) => (
                  <Card key={idx}>
                    <CardContent className="p-6">
                      <Download className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-bold text-foreground mb-2">
                        {asset.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span>{asset.type}</span>
                        <span>•</span>
                        <span>{asset.size}</span>
                      </div>
                      <Button size="sm" variant="outline" className="w-full" asChild>
                        <a href={asset.link} download>
                          Download
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Media Contact */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Media Inquiries
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                For press inquiries, interview requests, or additional information, please contact our media team.
              </p>
              <Card className="p-8">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-foreground">Press Contact</p>
                    <p className="text-muted-foreground">SafeOrStolen Media Relations</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a href="mailto:press@safeorstolen.com" className="text-primary hover:underline">
                      press@safeorstolen.com
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a href="tel:+15124000256" className="text-primary hover:underline">
                      +1 (512) 400-0256
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* About Sections */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  About SafeOrStolen
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Founded by Samuel Pfeiffer, SafeOrStolen is a pioneering mobile app company dedicated to providing reliable, real-time verification of second-hand merchandise legitimacy. By integrating trusted law enforcement and insurance data, SafeOrStolen empowers users to make informed buying and selling decisions, reducing crime and fostering trust in the resale economy.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  About FasterCapital
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  FasterCapital is a global venture builder and online incubator dedicated to co-funding and co-founding innovative startups. Established in 2014, it is now #1 venture builder in terms of number of startups helped, money invested and money raised. The LaunchUp program is designed to help early-stage startups build scalable solutions with mentorship, strategic guidance, and network support.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
