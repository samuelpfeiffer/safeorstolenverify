import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, AlertTriangle, Smartphone, Shield, ArrowRight, Download } from 'lucide-react';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';
import { AuthorBio } from '@/components/blog/AuthorBio';

const HowToCheckIfIphoneStolen = () => {
  return (
    <>
      <TopNavigation />
      <PageSEO
        title="How to Check if iPhone is Stolen Before Buying (2024 Guide)"
        description="Free guide to verify any iPhone isn't stolen before you buy. Check IMEI instantly using our free tool. Avoid buying stolen phones on Facebook Marketplace, eBay, Craigslist."
        keywords="how to check if iphone is stolen, check iphone stolen, verify iphone not stolen, iphone imei check stolen, is this iphone stolen, buying used iphone stolen check"
        canonical="/blog/how-to-check-if-iphone-stolen"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Check if an iPhone is Stolen Before Buying",
          "description": "Step-by-step guide to verify any iPhone isn't stolen using free IMEI checking tools",
          "step": [
            {
              "@type": "HowToStep",
              "name": "Get the IMEI Number",
              "text": "Dial *#06# on the iPhone or go to Settings > General > About to find the IMEI"
            },
            {
              "@type": "HowToStep", 
              "name": "Use a Free IMEI Checker",
              "text": "Enter the IMEI at SafeOrStolen.com to check against stolen databases instantly"
            },
            {
              "@type": "HowToStep",
              "name": "Review the Results",
              "text": "If the IMEI comes back clean, the phone is safe to buy. If flagged, walk away immediately"
            }
          ]
        }}
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="py-16 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/blog" className="hover:text-primary">Blog</Link>
              <span>/</span>
              <span>Guides</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How to Check if an iPhone is Stolen Before Buying (2024)
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Don't become a victim. Learn how to verify any used iPhone isn't stolen in under 60 seconds - completely free.
            </p>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Updated: December 2024</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-12 px-4">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            
            {/* Warning Box */}
            <Card className="border-destructive/50 bg-destructive/5 mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Why This Matters</h3>
                    <p className="text-muted-foreground">
                      <strong>1 in 10 used phones sold online is stolen.</strong> If you buy a stolen iPhone, you could lose your money AND face legal trouble. Apple can remotely brick stolen phones, leaving you with an expensive paperweight.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h2>Step 1: Get the iPhone's IMEI Number</h2>
            
            <p>The IMEI (International Mobile Equipment Identity) is a unique 15-digit number that identifies every phone. Here's how to find it:</p>
            
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">📱 On the Phone</h4>
                  <ul className="text-sm space-y-1">
                    <li>Dial <code>*#06#</code> - IMEI appears instantly</li>
                    <li>Settings → General → About</li>
                    <li>Check the SIM tray</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">📦 On the Box</h4>
                  <ul className="text-sm space-y-1">
                    <li>Printed on the original box label</li>
                    <li>Compare to the phone's IMEI</li>
                    <li>Mismatched = 🚩 red flag</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-muted/50 p-4 rounded-lg my-6">
              <p className="font-semibold">⚠️ Red Flag:</p>
              <p>If the seller refuses to show you the IMEI or won't let you dial *#06#, walk away immediately. Legitimate sellers have nothing to hide.</p>
            </div>

            <h2>Step 2: Check the IMEI Against Stolen Databases</h2>
            
            <p>Now that you have the IMEI, you need to verify it's not reported stolen. The fastest way is using our free IMEI checker:</p>
            
            <Card className="bg-primary/5 border-primary/20 my-8">
              <CardContent className="p-6 text-center">
                <Smartphone className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Free IMEI Check</h3>
                <p className="text-muted-foreground mb-4">Results in 3 seconds. No signup required.</p>
                <Button asChild size="lg">
                  <Link to="/verify">
                    Check IMEI Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <h2>Step 3: Check Apple's Activation Lock Status</h2>
            
            <p>Even if the IMEI is clean, the phone could have Activation Lock enabled. This means:</p>
            
            <ul>
              <li>The previous owner didn't sign out of their Apple ID</li>
              <li>You won't be able to set up the phone</li>
              <li>This is common with stolen phones</li>
            </ul>
            
            <p><strong>How to check:</strong> Go through the setup process. If it asks for an Apple ID you don't know, the phone is locked and potentially stolen.</p>

            <h2>Step 4: Verify the Seller</h2>
            
            <p>Legitimate sellers:</p>
            <ul>
              <li>✅ Meet in public places</li>
              <li>✅ Let you fully inspect the phone</li>
              <li>✅ Provide original receipt or box</li>
              <li>✅ Answer questions about the phone's history</li>
            </ul>
            
            <p>Scammers:</p>
            <ul>
              <li>❌ Rush the transaction</li>
              <li>❌ Price is "too good to be true"</li>
              <li>❌ Won't show IMEI</li>
              <li>❌ Meet in sketchy locations</li>
            </ul>

            <h2>What Happens If You Buy a Stolen iPhone?</h2>
            
            <Card className="border-destructive/30 my-6">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-4">The Consequences Are Real:</h4>
                <ul className="space-y-2">
                  <li><strong>Apple can brick it remotely</strong> - Your $800 phone becomes worthless</li>
                  <li><strong>No warranty or support</strong> - Apple won't help with stolen devices</li>
                  <li><strong>Legal trouble</strong> - Possession of stolen property is a crime</li>
                  <li><strong>No refund</strong> - Scammers disappear after the sale</li>
                </ul>
              </CardContent>
            </Card>

            <h2>The Bottom Line</h2>
            
            <p>Checking if an iPhone is stolen takes less than 60 seconds and costs nothing. There's no excuse not to do it before every used phone purchase.</p>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-lg my-8 text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-2">Protect Yourself Today</h3>
              <p className="text-muted-foreground mb-6">
                SafeOrStolen checks IMEI, VIN, serial numbers and more. The only mobile app for stolen item verification.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link to="/verify">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Check IMEI Free
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/app">
                    <Download className="mr-2 h-4 w-4" />
                    Get Mobile App
                  </Link>
                </Button>
              </div>
            </div>

          </div>
        </article>
        
        <AuthorBio />
        
        <RelatedPagesSection 
          currentPage="/blog/how-to-check-if-iphone-stolen" 
          currentCategory="blog" 
          maxLinks={5}
        />
      </div>
      <Footer />
    </>
  );
};

export default HowToCheckIfIphoneStolen;
