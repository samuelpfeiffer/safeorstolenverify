import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import { FileText, Download, Mail, ExternalLink, Award, Users, Shield, TrendingUp } from 'lucide-react';

/**
 * Press Page - Real page for /press URL
 * Quick access to press resources and media kit
 */
const PressPage = () => {
  const pressHighlights = [
    {
      metric: "2.4M+",
      label: "Smartphones Stolen in US (2024)",
      context: "SafeOrStolen helps buyers avoid purchasing these devices"
    },
    {
      metric: "800K+",
      label: "Vehicles Stolen Annually",
      context: "Our VIN check protects buyers from stolen vehicle fraud"
    },
    {
      metric: "100+",
      label: "Databases Searched",
      context: "Comprehensive verification across global theft registries"
    },
    {
      metric: "3 sec",
      label: "Average Verification Time",
      context: "Instant results from multiple data sources"
    }
  ];

  const mediaContacts = [
    {
      name: "Press Inquiries",
      email: "press@safeorstolen.com",
      description: "For interview requests and media coverage"
    },
    {
      name: "Partnership Inquiries",
      email: "partnerships@safeorstolen.com",
      description: "For business and platform integrations"
    }
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SafeOrStolen",
    "url": "https://safeorstolen.com",
    "logo": "https://safeorstolen.com/logo.png",
    "description": "Stolen item verification service for phones, vehicles, and electronics",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Press",
      "email": "press@safeorstolen.com"
    }
  };

  return (
    <>
      <PageSEO
        title="Press & Media - SafeOrStolen News and Resources"
        description="SafeOrStolen press resources, media kit, and company information. Learn about our mission to protect buyers from stolen goods."
        keywords="safeorstolen press, safeorstolen news, stolen item verification company, safeorstolen media kit"
        canonical="/press"
        structuredData={[organizationSchema]}
      />

      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
              <FileText className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Press & Media</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              SafeOrStolen Press Center
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Resources for journalists, partners, and anyone interested in learning more about 
              SafeOrStolen's mission to protect buyers from stolen goods.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/press-kit">
                  <Download className="w-5 h-5" />
                  Download Press Kit
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a href="mailto:press@safeorstolen.com">
                  <Mail className="w-5 h-5" />
                  Contact Press Team
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Key Stats */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Key Statistics</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pressHighlights.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 text-center">
                    <p className="text-4xl font-bold text-primary mb-2">{stat.metric}</p>
                    <p className="font-semibold mb-2">{stat.label}</p>
                    <p className="text-sm text-muted-foreground">{stat.context}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About SafeOrStolen */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">About SafeOrStolen</h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                SafeOrStolen is a technology company on a mission to eliminate the trade of stolen goods 
                in secondhand markets. We provide free and low-cost verification tools that allow anyone 
                to check if a phone, vehicle, or other item has been reported stolen before they buy it.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6">
                Our platform searches over 100 databases including global device registries, 
                federal law enforcement records, carrier blacklists, and insurance claims databases 
                to provide comprehensive verification in under 3 seconds.
              </p>
              
              <p className="text-lg text-muted-foreground">
                Founded to protect buyers on Facebook Marketplace, OfferUp, Craigslist, and other 
                secondhand platforms, SafeOrStolen is the only stolen item verification service with 
                a mobile app for on-the-go verification.
              </p>
            </div>
          </div>
        </section>

        {/* Recognition */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Recognition & Awards</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Award className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>OneValley Recognition</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Recognized by OneValley for innovation in consumer protection technology.
                  </p>
                  <Button asChild variant="link" className="px-0">
                    <Link to="/news/onevalley-recognition">Read more →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Product Hunt Featured</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Featured on Product Hunt as a top new product in consumer protection.
                  </p>
                  <Button asChild variant="link" className="px-0">
                    <Link to="/product-hunt">View listing →</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="w-10 h-10 text-primary mb-2" />
                  <CardTitle>Growing Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Thousands of users protecting themselves from stolen goods every month.
                  </p>
                  <Button asChild variant="link" className="px-0">
                    <Link to="/testimonials">See testimonials →</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Media Contact */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Media Contacts</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {mediaContacts.map((contact, index) => (
                <Card key={index}>
                  <CardHeader>
                    <Mail className="w-8 h-8 text-primary mb-2" />
                    <CardTitle>{contact.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{contact.description}</p>
                    <Button asChild variant="outline" className="gap-2">
                      <a href={`mailto:${contact.email}`}>
                        <Mail className="w-4 h-4" />
                        {contact.email}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Download Full Press Kit</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get logos, brand guidelines, executive bios, and high-resolution images.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link to="/press-kit">
                <Download className="w-5 h-5" />
                Get Press Kit
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default PressPage;
