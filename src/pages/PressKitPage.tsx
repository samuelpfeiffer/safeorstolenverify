import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Download, FileText, Image, Video, Quote, ExternalLink,
  Shield, Smartphone, Zap, Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PressKitPage = () => {
  const companyFacts = [
    { label: "Founded", value: "2024" },
    { label: "Headquarters", value: "Seattle, Washington" },
    { label: "Industry", value: "SaaS / Consumer Protection" },
    { label: "Funding", value: "FasterCapital Partnership" },
    { label: "Items Verified", value: "5,000+" },
    { label: "Coverage", value: "50 US States + Global" }
  ];

  const keyStats = [
    { icon: Shield, stat: "5,000+", label: "Items Verified" },
    { icon: Smartphone, stat: "Only", label: "Mobile App in Category" },
    { icon: Zap, stat: "3 sec", label: "Average Verification Time" },
    { icon: Globe, stat: "50+", label: "States Covered" }
  ];

  const pressReleases = [
    {
      title: "SafeOrStolen Partners with FasterCapital",
      date: "December 2024",
      outlet: "PRLog",
      url: "https://www.prlog.org/13053545-safeorstolen-partners-with-fastercapital.html"
    },
    {
      title: "SafeOrStolen Launches Revolutionary Verification Platform",
      date: "December 2024",
      outlet: "IssueWire",
      url: "https://www.issuewire.com/safeorstolen-launches-platform"
    }
  ];

  const mediaAssets = [
    {
      title: "Logo Package",
      description: "High-resolution logos in PNG, SVG, and vector formats",
      icon: Image,
      type: "ZIP"
    },
    {
      title: "Product Screenshots",
      description: "App screenshots, verification results, dashboard views",
      icon: Image,
      type: "ZIP"
    },
    {
      title: "Demo Video",
      description: "60-second product demonstration video",
      icon: Video,
      type: "MP4"
    },
    {
      title: "Company Fact Sheet",
      description: "One-page company overview and key metrics",
      icon: FileText,
      type: "PDF"
    }
  ];

  const storyAngles = [
    {
      angle: "Consumer Protection Innovation",
      pitch: "Local startup's app helps buyers avoid $500B in stolen goods annually",
      bestFor: "Consumer tech, personal finance publications"
    },
    {
      angle: "Carfax for Everything",
      pitch: "The first universal verification platform that works for phones, cars, bikes, and even firearms",
      bestFor: "Tech publications, lifestyle media"
    },
    {
      angle: "Fighting Organized Crime",
      pitch: "How a verification app is disrupting the stolen goods market",
      bestFor: "Crime, security, investigative journalism"
    },
    {
      angle: "Mobile-First Disruption",
      pitch: "The only mobile app in a category dominated by desktop-only competitors",
      bestFor: "Mobile tech, app review sites"
    }
  ];

  const quotes = [
    {
      quote: "Every year, millions of people unknowingly buy stolen property, leading to financial loss and legal trouble. SafeOrStolen gives buyers and sellers the tools to verify legitimacy in seconds.",
      attribution: "SafeOrStolen Founder"
    },
    {
      quote: "We're building the Carfax for everything - a single platform where you can verify any secondhand item isn't stolen before you buy or sell.",
      attribution: "SafeOrStolen Founder"
    }
  ];

  return (
    <>
      <PageSEO
        title="Press Kit | SafeOrStolen Media Resources"
        description="Download SafeOrStolen press materials including logos, screenshots, company facts, and story angles. Media resources for journalists and publications."
        canonical="https://safeorstolen.com/press-kit"
      />
      
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-primary/5">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="outline" className="mb-4">
              <FileText className="h-4 w-4 mr-2" />
              Press Kit
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              SafeOrStolen Media Resources
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Everything journalists, bloggers, and media professionals need to 
              cover SafeOrStolen - the Carfax for Everything.
            </p>
            <Button size="lg" className="gap-2" asChild>
              <a href="mailto:press@safeorstolen.com">
                <FileText className="h-5 w-5" />
                Contact Press Team
              </a>
            </Button>
          </div>
        </section>

        {/* Key Stats */}
        <section className="py-12 border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {keyStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <p className="text-3xl font-bold text-primary">{stat.stat}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Facts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Company Facts</h2>
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {companyFacts.map((fact, index) => (
                      <div key={index} className="flex justify-between p-3 bg-muted/50 rounded-lg">
                        <span className="text-muted-foreground">{fact.label}</span>
                        <span className="font-semibold">{fact.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About SafeOrStolen */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">About SafeOrStolen</h2>
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <p className="text-lg">
                    <strong>SafeOrStolen</strong> is a SaaS stolen-item verification platform that allows 
                    users to instantly check if secondhand items are reported as lost, stolen, or safe to 
                    purchase. The platform supports IMEI, VIN, and serial number verification across all 
                    50 US states with global database coverage.
                  </p>
                  <p>
                    Founded in 2024 and backed by <strong>FasterCapital</strong>, SafeOrStolen is the 
                    only solution in the market with a dedicated mobile app featuring barcode scanning 
                    technology. The platform serves individual buyers and sellers on marketplaces like 
                    Facebook Marketplace, eBay, and OfferUp, as well as businesses including pawn shops, 
                    auto dealers, and auction houses.
                  </p>
                  <p>
                    <strong>Mission:</strong> To protect buyers, sellers, and businesses from financial 
                    loss, legal trouble, and involvement with stolen goods - ultimately reducing stolen 
                    goods crime globally.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Story Angles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Story Angles</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Ready-to-use story angles for your coverage
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {storyAngles.map((story, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{story.angle}</CardTitle>
                    <CardDescription>{story.pitch}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      <strong>Best for:</strong> {story.bestFor}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quotes */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              <Quote className="h-8 w-8 inline mr-2 text-primary" />
              Quotable Quotes
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {quotes.map((quote, index) => (
                <Card key={index} className="bg-background">
                  <CardContent className="pt-6">
                    <blockquote className="text-lg italic mb-4">
                      "{quote.quote}"
                    </blockquote>
                    <p className="text-sm text-muted-foreground">
                      — {quote.attribution}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Media Assets */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Media Assets</h2>
            <p className="text-center text-muted-foreground mb-12">
              Download logos, screenshots, and other assets for your coverage
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {mediaAssets.map((asset, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="p-3 bg-primary/10 rounded-lg inline-block mb-3">
                        <asset.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-1">{asset.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {asset.description}
                      </p>
                      <Button variant="outline" size="sm" className="gap-2" asChild>
                        <a href={`mailto:press@safeorstolen.com?subject=Media Asset Request: ${asset.title}`}>
                          <Download className="h-4 w-4" />
                          Request
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Recent Press Releases</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {pressReleases.map((release, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="py-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{release.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {release.outlet} • {release.date}
                        </p>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={release.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Contact Press Team</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              For media inquiries, interview requests, or additional assets, 
              please contact our press team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="mailto:press@safeorstolen.com">
                  press@safeorstolen.com
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">
                  About SafeOrStolen
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PressKitPage;
