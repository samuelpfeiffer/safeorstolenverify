import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Shield, Users, Target, Award, MapPin, Mail, Phone, Building2, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutUsPage: React.FC = () => {
  return (
    <>
      <PageSEO
        title="About Safe or Stolen LLC - Company Information & Leadership"
        description="Learn about Safe or Stolen LLC, our mission to prevent fraud in secondhand marketplaces, our leadership team, and our commitment to transparency and community safety."
        keywords="Safe or Stolen company, about us, leadership team, company information, business verification, LLC details"
        canonical="/about"
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge className="mb-4 bg-white/20 border-white/30">
                <Building2 className="h-4 w-4 mr-2" />
                Established 2024
              </Badge>
              <h1 className="text-5xl font-bold mb-6">About Safe or Stolen LLC</h1>
              <p className="text-xl text-white/90 mb-8">
                A technology company dedicated to preventing fraud and protecting consumers 
                in the secondhand marketplace through advanced verification services.
              </p>
            </div>
          </div>
        </section>

        {/* Company Information */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-6 w-6" />
                  Company Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Legal Entity
                    </h3>
                    <p className="text-muted-foreground">Safe or Stolen LLC</p>
                    <p className="text-sm text-muted-foreground">Arizona Limited Liability Company</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-green-600" />
                      Headquarters
                    </h3>
                    <p className="text-muted-foreground">Peoria, Arizona</p>
                    <p className="text-sm text-muted-foreground">United States</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Mail className="h-4 w-4 text-green-600" />
                      Contact Email
                    </h3>
                    <p className="text-muted-foreground">support@safeorstolen.com</p>
                    <p className="text-sm text-muted-foreground">Business inquiries welcome</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Award className="h-4 w-4 text-green-600" />
                      Founded
                    </h3>
                    <p className="text-muted-foreground">2024</p>
                    <p className="text-sm text-muted-foreground">Serving the community since inception</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Leadership */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  Leadership Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-xl">
                      SP
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">Samuel Pfeiffer</h3>
                      <p className="text-green-600 font-medium mb-2">Founder & CEO</p>
                      <p className="text-muted-foreground text-sm">
                        Samuel founded Safe or Stolen LLC with a vision to create safer secondhand 
                        marketplaces by providing accessible verification tools. With a commitment to 
                        transparency and community safety, he leads the company's mission to prevent 
                        fraud and protect both buyers and sellers.
                      </p>
                      <div className="mt-3 flex gap-2">
                        <Badge variant="outline">Community Safety Advocate</Badge>
                        <Badge variant="outline">Technology Innovation</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-6 w-6" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To protect consumers from purchasing stolen goods and to assist in the recovery 
                    of lost or stolen items by providing a free, accessible verification platform that 
                    bridges the gap between public records and marketplace transactions.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-6 w-6" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To become the trusted standard for secondhand item verification worldwide, 
                    working in partnership with law enforcement agencies and online marketplaces 
                    to create a safer, more transparent ecosystem for all participants.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Current Status */}
            <Card className="mb-8 border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-900 dark:text-green-100">
                  <CheckCircle className="h-6 w-6" />
                  Current Operational Status
                </CardTitle>
              </CardHeader>
              <CardContent className="text-green-800 dark:text-green-200">
                <p className="mb-4">
                  <strong>SafeOrStolen.com is currently operational</strong> as a web-based platform 
                  accessible to users worldwide. We are actively processing verification requests and 
                  working with law enforcement agencies to expand our data access and partnerships.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>✓ Web Platform: Live and Operational</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>✓ Verification Services: Active</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>✓ Law Enforcement Partnerships: In Development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>✓ Mobile Apps: In Development (Coming 2025)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Have Questions?</h2>
              <p className="text-muted-foreground mb-6">
                We're committed to transparency and would love to hear from you.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/trust-verification">View Security Info</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/company-verification">Company Verification</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/transparency">Transparency Report</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUsPage;
