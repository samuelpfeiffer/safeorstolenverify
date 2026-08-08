import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Store, AlertTriangle, CheckCircle, Scale, Download } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';
import { BlogHeroImage } from '@/components/blog/BlogHeroImage';
import { blogImages } from '@/assets/blog';

const PawnShopStolenItemVerification = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How Pawn Shops Check If Items Are Stolen - Complete Guide",
    "description": "Learn how pawn shops verify items aren't stolen and how you can protect yourself as a buyer or seller using the same verification tools.",
    "datePublished": "2025-01-15",
    "dateModified": "2026-02-06",
    "author": { "@type": "Organization", "name": "SafeOrStolen" },
    "publisher": { "@type": "Organization", "name": "SafeOrStolen" }
  };

  const faqs = [
    {
      question: "How do pawn shops check if items are stolen?",
      answer: "Pawn shops use databases like LeadsOnline and stolen property reports from all 50 states to check serial numbers against reported stolen items. They're also required to hold items for a waiting period (14-30 days) and report transactions to police."
    },
    {
      question: "Can I check items the same way pawn shops do?",
      answer: "Yes! SafeOrStolen gives you access to similar verification capabilities. Enter IMEI, VIN, or serial numbers to check against stolen property databases."
    },
    {
      question: "What happens if a pawn shop buys stolen property?",
      answer: "Pawn shops must surrender stolen items to police without compensation. They also face potential criminal charges, fines, and license revocation for failing to verify items."
    },
    {
      question: "Are pawn shop items safe to buy?",
      answer: "Generally yes, as pawn shops have legal obligations to verify items. However, we recommend using SafeOrStolen to double-check any purchase, especially high-value items."
    },
    {
      question: "How long do pawn shops hold items?",
      answer: "Most states require 14-30 day holding periods before reselling items. This gives police time to match items against theft reports."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <>
      <PageSEO
        title="How Pawn Shops Check If Items Are Stolen - Complete Guide | SafeOrStolen"
        description="Learn how pawn shops verify items aren't stolen and how you can use the same tools. Complete guide to pawn shop verification and stolen item checking."
        keywords="how do pawn shops check if items are stolen, pawn shop verification, pawn shop stolen goods, check pawn shop items"
        canonical="/blog/pawn-shop-stolen-item-verification"
        structuredData={[articleSchema, faqSchema]}
      />

      <TopNavigation />
      <div className="min-h-screen bg-background">
        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-4 py-16">
          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/blog" className="hover:text-primary">Blog</Link>
              <span>/</span>
              <span>Verification Guide</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How Pawn Shops Check If Items Are Stolen
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              A complete guide to pawn shop verification processes - and how you can use 
              the same tools to protect yourself when buying used items.
            </p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Updated: February 2026</span>
              <span>•</span>
              <span>12 min read</span>
            </div>
          </header>
          <BlogHeroImage src={blogImages.pawnShop} alt="Pawn shop employee scanning electronics with barcode reader - pawn shop verification" />

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Store className="w-6 h-6 text-primary" />
                The Pawn Shop Verification Process
              </h2>
              
              <p className="text-muted-foreground mb-4">
                Pawn shops are legally required to verify items aren't stolen before buying or accepting 
                them as collateral. This process involves multiple steps and database checks that help 
                protect both the shop and law enforcement in recovering stolen property.
              </p>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Legal Requirements for Pawn Shops</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Record seller's government-issued ID and photo</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Document item serial numbers, IMEI, or VIN</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Check serial numbers against stolen property databases</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Report all transactions to local law enforcement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Hold items for 14-30 days before resale (varies by state)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Databases Pawn Shops Use</h2>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">LeadsOnline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      The most widely used pawn shop database, connected to 6,000+ law enforcement 
                      agencies. Automatically cross-references items against police reports.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Stolen property reports from all 50 states Database</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      FBI's National Crime Information Center contains records of stolen vehicles, 
                      firearms, and other property reported nationwide.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Business Watch International</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Another major pawn shop database system used by retailers and law enforcement 
                      to track stolen merchandise.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">State Databases</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Many states maintain their own stolen property databases that pawn shops 
                      are required to check before purchasing items.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Scale className="w-6 h-6 text-primary" />
                Consequences for Pawn Shops
              </h2>

              <Card className="border-destructive/20 mb-6">
                <CardHeader>
                  <CardTitle className="text-destructive">What Happens When Stolen Items Slip Through</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Must surrender stolen items to police without compensation</li>
                    <li>• Face potential criminal charges for receiving stolen property</li>
                    <li>• Risk losing their pawn license</li>
                    <li>• May face civil lawsuits from theft victims</li>
                    <li>• Suffer reputation damage affecting future business</li>
                  </ul>
                </CardContent>
              </Card>

              <p className="text-muted-foreground">
                These serious consequences are why legitimate pawn shops take verification seriously. 
                However, some stolen items still slip through, which is why we recommend always 
                verifying items yourself with SafeOrStolen.
              </p>
            </section>

            <section className="mb-12 bg-primary/5 p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">
                You Can Verify Items Like a Pawn Shop
              </h2>
              
              <p className="text-muted-foreground mb-6">
                SafeOrStolen gives you access to the same type of verification pawn shops use. 
                Whether you're buying from a private seller, marketplace, or even a pawn shop - 
                verify items yourself for complete peace of mind.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/verify">Verify an Item Free</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/app">
                    <Download className="w-4 h-4 mr-2" />
                    Get Mobile App
                  </Link>
                </Button>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <Card key={i}>
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* CTA */}
          <footer className="mt-12 pt-8 border-t">
            <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">
                Verify Like a Pro - It's Free
              </h3>
              <p className="opacity-90 mb-6">
                Whether you're a buyer, seller, or pawn shop owner - SafeOrStolen helps you verify items instantly.
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link to="/verify">Start Verifying Free</Link>
              </Button>
            </div>
          </footer>
        </article>
      </div>
      <RelatedPagesSection currentPage="/blog/pawn-shop-stolen-item-verification" currentCategory="blog" maxLinks={5} />
      <Footer />
    </>
  );
};

export default PawnShopStolenItemVerification;
