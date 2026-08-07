import { PageSEO } from '@/components/seo/PageSEO';
import { Shield, ExternalLink, Rocket, MessageSquare } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

const TestimonialsPage = () => {
  // Real press mentions and partnerships only
  const realCredentials = [
    {
      type: "Press Release",
      source: "PRLog",
      description: "SafeOrStolen launches comprehensive verification platform to protect marketplace buyers and sellers from stolen goods fraud.",
      url: "https://www.prlog.org"
    },
    {
      type: "Press Release",
      source: "IssueWire",
      description: "New stolen item verification service aims to reduce marketplace fraud and protect consumers.",
      url: "https://www.issuewire.com"
    }
  ];

  return (
    <>
      <PageSEO
        title="Press & Credentials - SafeOrStolen"
        description="SafeOrStolen press coverage and published releases. AI-powered stolen item verification protecting buyers, sellers, and businesses across six categories."
        keywords="SafeOrStolen press, stolen item verification, marketplace safety"
        canonical="/testimonials"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "SafeOrStolen Press & Credentials",
            "description": "Real press coverage for SafeOrStolen"
          }
        ]}
      />
      
      <TopNavigation />
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 pt-24 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Press & Credentials</h1>
              <p className="text-xl text-muted-foreground">
                Real press coverage
              </p>
            </div>

            {/* Real Credentials */}
            <div className="space-y-6 mb-12">
              {realCredentials.map((credential, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start gap-4">
                    <ExternalLink className="w-8 h-8 text-primary flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-primary mb-1">{credential.type}</p>
                      <p className="font-bold text-lg mb-2">{credential.source}</p>
                      <p className="text-muted-foreground">{credential.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Call to Action for Real Testimonials */}
            <Card className="p-8 bg-primary/5 border-primary/20">
              <div className="text-center">
                <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-2">Share Your Experience</h2>
                <p className="text-muted-foreground mb-6">
                  Used SafeOrStolen to verify an item? We'd love to hear your real story.
                </p>
                <Button asChild>
                  <a href="mailto:safeorstolenmail@gmail.com?subject=My SafeOrStolen Experience">
                    Share Your Story
                  </a>
                </Button>
              </div>
            </Card>

            {/* Early Stage Transparency */}
            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground">
                SafeOrStolen is an early-stage startup. As we grow, we'll feature real user testimonials here.
              </p>
              <Button asChild variant="outline" className="mt-4">
                <Link to="/verify">Try Free Verification</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TestimonialsPage;
