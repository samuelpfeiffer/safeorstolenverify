import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import { Newspaper, Calendar, ExternalLink, ArrowRight, Download, Mail } from 'lucide-react';

export default function PressReleasePage() {
  const pressReleases = [
    {
      date: 'January 2026',
      title: 'SafeOrStolen Launches Mobile App for Instant Stolen Item Verification',
      summary: 'New app allows buyers to verify phones, vehicles, and electronics in seconds before purchasing on Facebook Marketplace, Craigslist, and other platforms.',
      link: 'https://www.prlog.org/13056163-safeorstolen-launches-mobile-app-for-instant-stolen-item-verification.html'
    },
    {
      date: 'December 2025',
      title: 'SafeOrStolen Partners with FasterCapital Tech Co-Founder Program',
      summary: 'Strategic partnership accelerates development of comprehensive stolen goods verification platform.',
      link: 'https://fastercapital.com/startup/safeorstolen'
    },
    {
      date: 'November 2025',
      title: 'SafeOrStolen Recognized by OneValley as Top Emerging Startup',
      summary: 'Innovative approach to secondhand market safety earns recognition from leading startup accelerator.',
      link: '/news/onevalley-recognition'
    }
  ];

  return (
    <>
      <PageSEO
        title="Press Releases - SafeOrStolen News & Announcements"
        description="Official press releases and news from SafeOrStolen. Stay updated on product launches, partnerships, and company announcements."
        keywords="press releases, news, announcements, SafeOrStolen news, company updates, media"
        canonical="https://safeorstolen.com/press-release"
      />
      
      <TopNavigation />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Newspaper className="h-16 w-16 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Press Releases
              </h1>
              <p className="text-xl text-muted-foreground">
                Official news and announcements from SafeOrStolen.
              </p>
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {pressReleases.map((pr, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      {pr.date}
                    </div>
                    <h2 className="text-xl font-bold mb-3">{pr.title}</h2>
                    <p className="text-muted-foreground mb-4">{pr.summary}</p>
                    <a 
                      href={pr.link} 
                      target={pr.link.startsWith('http') ? '_blank' : '_self'}
                      rel={pr.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center text-primary hover:underline"
                    >
                      Read Full Release <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Media Kit */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Media Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <Download className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Press Kit</h3>
                    <p className="text-muted-foreground mb-4">
                      Logos, brand guidelines, executive headshots, and company fact sheet.
                    </p>
                    <Button variant="outline" asChild>
                      <Link to="/press-kit">Download Press Kit</Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <Mail className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">Media Inquiries</h3>
                    <p className="text-muted-foreground mb-4">
                      For interviews, quotes, or additional information, contact our media team.
                    </p>
                    <Button variant="outline" asChild>
                      <a href="mailto:press@safeorstolen.com">Contact Press Team</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Company Info */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">About SafeOrStolen</h2>
            <div className="prose prose-lg max-w-none text-center">
              <p>
                SafeOrStolen is the leading stolen item verification platform, helping buyers protect themselves when purchasing secondhand phones, vehicles, electronics, and more. With the only mobile app in the industry, SafeOrStolen provides instant verification against 100+ databases including law enforcement records, carrier blacklists, and insurance claims.
              </p>
              <p>
                Founded in 2024 and headquartered in Peoria, Arizona, SafeOrStolen is backed by FasterCapital and recognized by OneValley as an innovative emerging startup.
              </p>
            </div>
            <div className="flex justify-center mt-8">
              <Button asChild>
                <Link to="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
