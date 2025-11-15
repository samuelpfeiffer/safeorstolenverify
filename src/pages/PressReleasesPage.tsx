import { PageSEO } from '@/components/seo/PageSEO';
import { PressReleaseSchema } from '@/components/seo/PressReleaseSchema';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, ExternalLink, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PressReleasesPage() {
  const navigate = useNavigate();

  const pressReleases = [
    {
      date: "2025-01-15",
      title: "SafeOrStolen Launches AI-Powered Verification Platform to Combat Secondhand Fraud",
      excerpt: "New platform provides instant verification of phones, vehicles, and electronics against global stolen item databases, protecting consumers from purchasing stolen goods.",
      category: "Product Launch",
      url: "https://safeorstolen.com/press-releases/ai-platform-launch-2025"
    },
    {
      date: "2025-01-10",
      title: "SafeOrStolen Surpasses 100,000 Item Verifications in First Month",
      excerpt: "Company reaches major milestone as consumer awareness about secondhand fraud grows. Platform now checking items from over 50 countries worldwide.",
      category: "Milestone",
      url: "https://safeorstolen.com/press-releases/100k-verifications-milestone"
    },
    {
      date: "2024-12-20",
      title: "Partnership Announcement: SafeOrStolen Integrates with Major Marketplace Platform",
      excerpt: "Strategic partnership brings verification tools directly to millions of marketplace users, enabling instant stolen item checks during transactions.",
      category: "Partnership",
      url: "https://safeorstolen.com/press-releases/marketplace-partnership-2024"
    },
    {
      date: "2024-12-01",
      title: "New Database Integration: SafeOrStolen Now Checks Against Interpol's Stolen Vehicle Database",
      excerpt: "Expansion into international vehicle verification provides users with access to 190+ countries' stolen vehicle records.",
      category: "Product Update",
      url: "https://safeorstolen.com/press-releases/interpol-database-integration"
    },
    {
      date: "2024-11-15",
      title: "SafeOrStolen Receives Recognition as Top Consumer Safety Tool of 2024",
      excerpt: "Industry recognition highlights platform's impact on reducing fraud in secondhand electronics and vehicle markets.",
      category: "Award",
      url: "https://safeorstolen.com/press-releases/consumer-safety-award-2024"
    },
    {
      date: "2024-11-01",
      title: "Introducing API Access: Businesses Can Now Integrate SafeOrStolen Verification",
      excerpt: "New API allows retailers, marketplaces, and pawn shops to integrate instant verification into their platforms.",
      category: "Product Launch",
      url: "https://safeorstolen.com/press-releases/api-launch-2024"
    }
  ];

  const featuredRelease = pressReleases[0];

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "SafeOrStolen Press Releases",
    "description": "Latest news, product launches, and company announcements from SafeOrStolen",
    "url": "https://safeorstolen.com/press-releases"
  };

  return (
    <>
      <PageSEO
        title="Press Releases - Latest News & Announcements | SafeOrStolen"
        description="Stay updated with SafeOrStolen's latest product launches, partnerships, and company milestones. Read our official press releases and news announcements."
        keywords="press releases, news, announcements, SafeOrStolen news, company updates"
        structuredData={collectionSchema}
      />

      <PressReleaseSchema
        headline={featuredRelease.title}
        datePublished={featuredRelease.date}
        author="SafeOrStolen"
        description={featuredRelease.excerpt}
        url={featuredRelease.url}
      />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-sos to-sos-dark/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
              Press Releases & News
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Latest announcements, product launches, and company milestones from SafeOrStolen.
            </p>
            <Button variant="outline" onClick={() => navigate('/press')}>
              Media & Press Kit
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Press Release */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <Badge className="mb-4">Latest Release</Badge>
            </div>
            <Card className="border-primary/20 hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={featuredRelease.date}>
                    {new Date(featuredRelease.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span>•</span>
                  <Badge variant="secondary">{featuredRelease.category}</Badge>
                </div>
                <CardTitle className="text-2xl md:text-3xl mb-4">{featuredRelease.title}</CardTitle>
                <CardDescription className="text-base">{featuredRelease.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="gap-2">
                  Read Full Release <ChevronRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* All Press Releases */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">All Press Releases</h2>
            
            <div className="space-y-6">
              {pressReleases.slice(1).map((release, index) => (
                <Card key={index} className="hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={release.date}>
                          {new Date(release.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                      </div>
                      <Badge variant="secondary">{release.category}</Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">{release.title}</CardTitle>
                    <CardDescription>{release.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="ghost" className="gap-2">
                      Read More <ExternalLink className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-background border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Browse by Category</h3>
            <div className="flex flex-wrap gap-2">
              {["All", "Product Launch", "Partnership", "Milestone", "Product Update", "Award"].map((category) => (
                <Badge key={category} variant="outline" className="cursor-pointer hover:bg-primary/10">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Media Inquiries</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            For press inquiries, interviews, or more information, please contact our media team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/contact')}>
              Contact Media Team
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/press')}>
              Download Press Kit
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
