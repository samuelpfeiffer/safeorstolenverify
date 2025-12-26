import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, Shield, CheckCircle, ArrowRight, Download, Users, DollarSign, Lock } from 'lucide-react';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';
import { AuthorBio } from '@/components/blog/AuthorBio';

const FacebookMarketplaceScams = () => {
  return (
    <>
      <TopNavigation />
      <PageSEO
        title="Facebook Marketplace Scams to Avoid in 2024 (Stolen Items, Fake Sellers)"
        description="Protect yourself from Facebook Marketplace scams. Learn how to spot stolen items, fake sellers, and fraud. Free verification tool to check before you buy."
        keywords="facebook marketplace scams, facebook marketplace stolen items, fb marketplace fraud, how to avoid scams facebook marketplace, is facebook marketplace safe"
        canonical="/blog/facebook-marketplace-scams"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Facebook Marketplace Scams to Avoid in 2024",
          "description": "Complete guide to avoiding stolen items and scams on Facebook Marketplace",
          "author": {
            "@type": "Organization",
            "name": "SafeOrStolen"
          },
          "datePublished": "2024-12-01",
          "dateModified": "2024-12-03"
        }}
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="py-16 px-4 bg-gradient-to-b from-destructive/5 to-background">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/blog" className="hover:text-primary">Blog</Link>
              <span>/</span>
              <span>Safety</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Facebook Marketplace Scams to Avoid in 2024
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              $1 billion lost to social media scams last year. Here's how to protect yourself from stolen items, fake sellers, and fraud on Facebook Marketplace.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 px-4 border-y border-border">
          <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-destructive">$1B+</div>
              <div className="text-sm text-muted-foreground">Lost to social media scams (2023)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-destructive">1 in 10</div>
              <div className="text-sm text-muted-foreground">Used electronics are stolen</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-destructive">70%</div>
              <div className="text-sm text-muted-foreground">Of scam victims don't report</div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-12 px-4">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            
            <h2>The 5 Most Common Facebook Marketplace Scams</h2>
            
            <h3>1. Stolen Items (Most Dangerous)</h3>
            <Card className="border-destructive/50 my-4">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0" />
                  <div>
                    <p className="font-semibold">The Scam:</p>
                    <p>Thieves sell stolen phones, laptops, and electronics at below-market prices. You buy it, then Apple or the original owner remotely locks the device.</p>
                    <p className="font-semibold mt-4">How to Avoid:</p>
                    <p>Always check the IMEI, serial number, or VIN before buying. Use SafeOrStolen's free verification tool.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3>2. Fake Payment Requests</h3>
            <p>Scammer sends a fake Zelle/Venmo "verification" link or asks you to pay with gift cards. Once paid, they disappear.</p>
            <p><strong>Protection:</strong> Only pay in person with cash, or use Facebook's checkout system.</p>

            <h3>3. Overpayment Scams</h3>
            <p>Buyer "accidentally" sends more than the asking price, asks you to refund the difference. Their original payment bounces.</p>
            <p><strong>Protection:</strong> Never refund overpayments. Wait for payments to fully clear.</p>

            <h3>4. Fake Listings</h3>
            <p>Stolen photos, prices too good to be true, seller refuses to meet in person.</p>
            <p><strong>Protection:</strong> Reverse image search the photos. Insist on seeing items in person.</p>

            <h3>5. Bait and Switch</h3>
            <p>Listing shows a quality item, but you're given a damaged or different product at meetup.</p>
            <p><strong>Protection:</strong> Inspect items thoroughly before paying. Test electronics.</p>

            <h2>How to Verify Items Before Buying</h2>
            
            <Card className="bg-primary/5 border-primary/20 my-8">
              <CardContent className="p-6">
                <h4 className="font-bold text-xl mb-4">Use SafeOrStolen's Free Verification</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <CheckCircle className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="font-semibold">IMEI Check</p>
                    <p className="text-sm text-muted-foreground">For phones & tablets</p>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="font-semibold">VIN Lookup</p>
                    <p className="text-sm text-muted-foreground">For cars & vehicles</p>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="font-semibold">Serial Number</p>
                    <p className="text-sm text-muted-foreground">For laptops & electronics</p>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <Button asChild size="lg">
                    <Link to="/verify">
                      Verify an Item Free <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <h2>Red Flags to Watch For</h2>
            
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <Card className="border-destructive/30">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-destructive mb-2">🚩 Avoid These Sellers</h4>
                  <ul className="text-sm space-y-1">
                    <li>Price way below market value</li>
                    <li>New account with no history</li>
                    <li>Won't meet in person</li>
                    <li>Refuses to show IMEI/serial</li>
                    <li>Pressures you to decide fast</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-primary/30">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-primary mb-2">✅ Safe Seller Signs</h4>
                  <ul className="text-sm space-y-1">
                    <li>Established profile with history</li>
                    <li>Reasonable market pricing</li>
                    <li>Willing to meet at police station</li>
                    <li>Shows IMEI/serial freely</li>
                    <li>Has original receipt/box</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2>Safe Meeting Tips</h2>
            <ul>
              <li>Meet at a police station "safe trade spot"</li>
              <li>Bring a friend</li>
              <li>Meet during daylight hours</li>
              <li>Test electronics fully before paying</li>
              <li>Verify IMEI/VIN on the spot with SafeOrStolen app</li>
            </ul>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg my-8 text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-2">Don't Get Scammed</h3>
              <p className="text-muted-foreground mb-6">
                Check any item in 3 seconds before you buy. SafeOrStolen is the only mobile app for stolen item verification.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/verify">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Verify Free
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/app">
                    <Download className="mr-2 h-4 w-4" />
                    Get the App
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </article>
        
        <AuthorBio />
        
        <RelatedPagesSection 
          currentPage="/blog/facebook-marketplace-scams" 
          currentCategory="blog" 
          maxLinks={5}
        />
      </div>
      <Footer />
    </>
  );
};

export default FacebookMarketplaceScams;
