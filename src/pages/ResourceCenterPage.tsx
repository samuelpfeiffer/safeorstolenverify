import React from 'react';
import { SEOHead } from '@/components/seo/SEOHead';
import { SOSHeader } from '@/components/layout/SOSHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Book, 
  Shield, 
  AlertTriangle, 
  Phone, 
  Car, 
  Smartphone,
  FileText,
  ExternalLink,
  HelpCircle,
  CheckCircle,
  Info
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ResourceCenterPage = () => {
  const guides = [
    {
      title: "How to Read a VIN Number",
      description: "Complete guide to understanding Vehicle Identification Numbers and what each digit means.",
      icon: Car,
      link: "/guides/vin-number-guide",
      category: "Vehicles",
      difficulty: "Beginner"
    },
    {
      title: "What to Do If You Bought a Stolen Phone",
      description: "Step-by-step actions to take if you discover your purchased phone is stolen.",
      icon: Phone,
      link: "/guides/stolen-phone-help",
      category: "Electronics",
      difficulty: "Essential"
    },
    {
      title: "A Seller's Guide to Ethical Reselling",
      description: "Best practices for legitimate sellers to protect themselves and buyers.",
      icon: Shield,
      link: "/guides/ethical-selling",
      category: "Selling",
      difficulty: "Intermediate"
    },
    {
      title: "Facebook Marketplace Safety Tips",
      description: "Essential security measures when buying and selling on social marketplaces.",
      icon: CheckCircle,
      link: "/guides/facebook-marketplace-safety",
      category: "Marketplaces",
      difficulty: "Beginner"
    },
    {
      title: "How to File a Police Report for Stolen Goods",
      description: "Complete walkthrough of reporting stolen property to law enforcement.",
      icon: FileText,
      link: "/guides/police-report-guide",
      category: "Legal",
      difficulty: "Essential"
    },
    {
      title: "Understanding IMEI Numbers",
      description: "Everything you need to know about phone identification numbers.",
      icon: Smartphone,
      link: "/guides/imei-guide",
      category: "Electronics",
      difficulty: "Beginner"
    }
  ];

  const faqs = [
    {
      question: "What does a 'Clean' result mean?",
      answer: "A 'Clean' result means the item was not found in our databases of stolen goods. However, this does not guarantee the item is not stolen - it only means no theft reports were found in the sources we check."
    },
    {
      question: "What should I do if an item shows as 'Stolen'?",
      answer: "Do not purchase the item. If you already possess it, contact your local law enforcement non-emergency line. If dealing with a seller, consider reporting them to the marketplace platform."
    },
    {
      question: "How accurate are your verification results?",
      answer: "Our system checks multiple databases with 98.7% accuracy rate. However, results depend on whether theft reports have been filed and entered into databases we access."
    },
    {
      question: "Which databases do you check?",
      answer: "We check multiple sources including NCIC stolen articles, carrier blacklists, manufacturer databases, and specialized databases for bikes, firearms, and electronics."
    }
  ];

  return (
    <>
      <SEOHead
        title="Resource Center - Complete Guides for Safe Secondhand Shopping"
        description="Comprehensive guides and educational content for buyers and sellers. Learn how to verify items, avoid stolen goods, and navigate secondhand marketplaces safely."
        keywords="verification guides, stolen goods prevention, marketplace safety, IMEI check guide, VIN verification, secondhand shopping tips"
        canonical="https://safeorstolen.com/resource-center"
      />
      
      <div className="min-h-screen bg-background">
        <SOSHeader />
        
        <main className="container mx-auto px-4 py-20">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Book className="h-8 w-8 text-sos-orange" />
              <h1 className="text-4xl md:text-5xl font-bold">Resource Center</h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your complete guide to safe secondhand shopping. Learn how to verify items, 
              avoid stolen goods, and navigate marketplaces with confidence.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="border-sos-lime/30 hover:border-sos-lime/50 transition-colors">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-sos-lime mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Verify an Item</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Check if an item has been reported stolen before you buy
                </p>
                <Button asChild className="w-full">
                  <Link to="/">Start Verification</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-sos-orange/30 hover:border-sos-orange/50 transition-colors">
              <CardContent className="p-6 text-center">
                <AlertTriangle className="h-12 w-12 text-sos-orange mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Report Stolen Item</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Found your stolen item online? Learn what to do next
                </p>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/guides/stolen-item-found">Get Help</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary/30 hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get answers to common questions and contact support
                </p>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Educational Guides */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Educational Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.map((guide, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <guide.icon className="h-8 w-8 text-sos-orange" />
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">
                          {guide.category}
                        </Badge>
                        <Badge 
                          variant={guide.difficulty === 'Essential' ? 'destructive' : 'secondary'}
                          className="text-xs"
                        >
                          {guide.difficulty}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{guide.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {guide.description}
                    </p>
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <Link to={guide.link} className="flex items-center gap-2">
                        Read Guide
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Info className="h-5 w-5 text-sos-orange" />
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-sos-orange/10 to-sos-lime/10 border-sos-orange/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Stay Protected</h3>
                <p className="text-muted-foreground mb-6">
                  Join thousands of smart shoppers who verify before they buy. 
                  Start with 3 free verifications - no signup required.
                </p>
                <Button size="lg" asChild>
                  <Link to="/">
                    Start Verifying Items
                    <Shield className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
};

export default ResourceCenterPage;