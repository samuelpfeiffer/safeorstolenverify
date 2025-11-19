import { ExternalLink, ArrowLeft, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';
import billboardImage from '@/assets/billboard-campaign.jpg';

export default function PressPage() {
  const pressReleases = [
    {
      outlet: "IssueWire",
      headline: "SafeOrStolen Partners with FasterCapital to Launch Web App Platform for Trusted Secondhand Verification",
      url: "https://www.issuewire.com/safeorstolen-partners-with-fastercapital-to-launch-web-app-platform-for-trusted-secondhand-verification-1845387637096904",
      date: "2024",
      description: "SafeOrStolen announces strategic partnership with FasterCapital to accelerate development of comprehensive stolen goods verification platform.",
      icon: "🗞️"
    },
    {
      outlet: "PRLog Press Room",
      headline: "SafeOrStolen Press Release Archive",
      url: "https://pressroom.prlog.org/SAFEORSTOLEN/",
      date: "2024",
      description: "Complete archive of SafeOrStolen press releases covering platform launches, partnerships, and industry impact.",
      icon: "📰"
    },
    {
      outlet: "FasterCapital Partnership",
      headline: "Strategic Partnership & Acceleration Program",
      url: "https://fastercapital.com",
      date: "2024",
      description: "SafeOrStolen joins FasterCapital's acceleration program to scale technology and reach millions of users worldwide.",
      icon: "🚀"
    }
  ];

  const mediaKit = [
    {
      title: "Company Logo",
      description: "High-resolution logo files",
      icon: "🎨"
    },
    {
      title: "Press Kit",
      description: "Fact sheets and company info",
      icon: "📄"
    },
    {
      title: "Screenshots",
      description: "Platform screenshots and images",
      icon: "📸"
    }
  ];

  return (
    <>
      <PageSEO
        title="Press & Media - SafeOrStolen"
        description="Press releases, media coverage, and company information about SafeOrStolen's mission to reduce crime through stolen goods verification."
        keywords="press releases, media coverage, news, announcements, partnerships"
        canonical="/press"
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <Link to="/">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <Award className="h-4 w-4" />
                <span>In The News</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Press & Media Coverage
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Latest news, announcements, and media coverage about SafeOrStolen's mission to make secondhand markets safer worldwide
              </p>
            </div>
          </div>
        </section>

        {/* Billboard Campaign */}
        <section className="py-16 bg-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Our Billboard Campaign</h2>
              <img 
                src={billboardImage}
                alt="SafeOrStolen billboard campaign - Person viewing verification message"
                className="rounded-xl shadow-2xl w-full object-cover"
                loading="lazy"
              />
              <p className="text-center text-muted-foreground mt-6 max-w-2xl mx-auto">
                Raising awareness about the importance of verifying secondhand items before purchase
              </p>
            </div>
          </div>
        </section>

        {/* Press Releases */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Press Releases</h2>
              
              <div className="space-y-6">
                {pressReleases.map((release, index) => (
                  <a
                    key={index}
                    href={release.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                      <div className="flex items-start gap-6">
                        <div className="text-5xl">{release.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                              {release.outlet}
                            </h3>
                            <span className="text-sm text-muted-foreground">{release.date}</span>
                          </div>
                          <h4 className="text-lg font-medium text-foreground mb-3">
                            {release.headline}
                          </h4>
                          <p className="text-muted-foreground mb-4">
                            {release.description}
                          </p>
                          <div className="flex items-center text-primary group-hover:underline">
                            Read Full Article <ExternalLink className="w-4 h-4 ml-2" />
                          </div>
                        </div>
                      </div>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Media Kit */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">Media Kit</h2>
              <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Resources for journalists, bloggers, and media professionals
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {mediaKit.map((item, index) => (
                  <Card key={index} className="p-8 text-center">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-muted-foreground mb-4">
                  For press inquiries, please contact:
                </p>
                <a 
                  href="mailto:press@safeorstolen.com" 
                  className="text-primary hover:underline font-semibold"
                >
                  press@safeorstolen.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Experience SafeOrStolen
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Try our verification platform and see why we're making headlines
              </p>
              <Link to="/verify">
                <Button size="lg">
                  Start Free Verification
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}