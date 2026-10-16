import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, AlertTriangle, Shield, Search, Clock, ArrowRight, Gamepad2, AlertCircle } from 'lucide-react';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';
import { SEOHead } from '@/components/seo/SEOHead';
import { BlogHeroImage } from '@/components/blog/BlogHeroImage';
import { blogImages } from '@/assets/blog';

const PS5StolenCheckGuide = () => {
  const publishDate = "2024-12-23";
  const modifiedDate = "2026-09-24";
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Check if a Used PlayStation 5 is Stolen Before Buying",
    "description": "How to check a used PS5 before you buy it: where the serial number is, how to match it on screen, how to check it for theft reports, and the red flags to watch for at the meetup.",
    "image": "https://safeorstolen.com/og-image-ps5.png",
    "author": { "@type": "Person", "name": "Samuel Pfeiffer" },
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://safeorstolen.com/logo.png"
      }
    },
    "datePublished": publishDate,
    "dateModified": modifiedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://safeorstolen.com/blog/ps5-stolen-check-guide"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I find the serial number on a PlayStation 5?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The PS5 serial number is printed on the label on the back of the console, near the bottom, next to the model number (which starts with CFI-). You can also see it on screen in Settings > System > System Software > Console Information. Make sure the label and the on-screen serial match before you pay."
        }
      },
      {
        "@type": "Question",
        "name": "Can I check if a PS5 is stolen before buying?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Enter the serial at SafeOrStolen (safeorstolen.com/verify) and in a few seconds it searches SafeOrStolen theft reports and public web results, with every source listed. Then compare the serial on the console label with the on-screen serial and with the box or receipt if the seller has them."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I accidentally buy a stolen PS5?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Stop using or reselling the console, preserve the listing, messages, serial number, and payment record, then contact local police and your payment provider. Laws and remedies vary by jurisdiction."
        }
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="How to Check if a Used PlayStation 5 is Stolen Before Buying"
        description="How to check if a used PS5 is stolen: find the serial on the back label and in Settings, check it for theft reports in seconds, and spot red flags at the meetup."
        keywords="playstation 5 console checker, ps5 stolen check, check if ps5 is stolen, ps5 serial number check, verify ps5 not stolen, used ps5 verification"
        canonical="/blog/ps5-stolen-check-guide"
        ogType="article"
        publishedTime={publishDate}
        modifiedTime={modifiedDate}
        schemaJson={[articleSchema, faqSchema]}
      />
      <article className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        {/* Hero Section */}
        <header className="pt-24 pb-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/blog" className="hover:text-primary">Blog</Link>
              <span>/</span>
              <span>Gaming Consoles</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-500 to-primary bg-clip-text text-transparent">
              How to Check if a Used PlayStation 5 is Stolen Before Buying
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                8 min read
              </span>
              <span>Published: December 23, 2024</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded-full">Gaming Consoles</span>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">
              PlayStation 5 consoles remain highly sought after, making them prime targets for thieves. 
              Before buying a used PS5 from Facebook Marketplace, Craigslist, OfferUp, or any private seller, 
              learn how to verify it's not stolen property.
            </p>
            <div className="mt-8">
              <BlogHeroImage src={blogImages.ps5} alt="PS5 console serial number being checked with pen pointing - PlayStation 5 stolen check" />
            </div>
          </div>
        </header>

        {/* Quick Check CTA */}
        <section className="px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-primary/10 via-blue-500/10 to-primary/10 border-primary/20">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <Gamepad2 className="w-16 h-16 text-primary" />
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-xl font-bold mb-2">Check a PS5 Serial Number</h2>
                    <p className="text-muted-foreground">
                      Enter the serial number to search SafeOrStolen theft reports and public web results. Results take a few seconds.
                    </p>
                  </div>
                  <Link to="/verify">
                    <Button size="lg" className="gap-2">
                      Check Now <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-4 pb-16">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            
            <h2 className="flex items-center gap-2 text-2xl font-bold mt-12 mb-6">
              <AlertTriangle className="w-6 h-6 text-destructive" />
              Why Check a Used PS5
            </h2>
            
            <p>
              A used PlayStation 5 is a high-value purchase with a serial number, an online account, and hardware you can inspect.
              Checking those details before payment can reveal mismatches, copied listings, account problems, and unclear ownership histories.
            </p>

            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 my-8"><p className="text-muted-foreground">A serial search is only one step. Match the physical console, settings, receipt, seller account, accessories, and listing before paying.</p></div>

            <h2 className="flex items-center gap-2 text-2xl font-bold mt-12 mb-6">
              <Search className="w-6 h-6 text-primary" />
              How to Find the PS5 Serial Number
            </h2>

            <p>
              Every PlayStation 5 has a unique serial number that can be used to verify its theft status. 
              Here's how to find it:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Physical Location</h3>
                  <ol className="space-y-2 text-muted-foreground">
                    <li>1. Look at the back of the PS5 console</li>
                    <li>2. Find the label near the bottom</li>
                    <li>3. Read the serial number printed on the label</li>
                    <li>4. Don't confuse it with the model number, which starts with "CFI-"</li>
                  </ol>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">On-Screen Verification</h3>
                  <ol className="space-y-2 text-muted-foreground">
                    <li>1. Power on the PS5</li>
                    <li>2. Go to Settings</li>
                    <li>3. Select System, then System Software</li>
                    <li>4. Choose Console Information</li>
                    <li>5. Serial number is displayed</li>
                  </ol>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-8">
              <p className="font-semibold text-primary">
                Make sure the serial on the label matches the one on screen. If they don't match, the label may
                have been swapped, and you should walk away.
              </p>
            </div>

            <h2 className="flex items-center gap-2 text-2xl font-bold mt-12 mb-6">
              <Shield className="w-6 h-6 text-primary" />
              Step-by-Step: Verify a PS5 Before Buying
            </h2>

            <div className="space-y-6 my-8">
              <div className="flex gap-4 p-6 bg-card rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold mb-2">Request the Serial Number Before Meeting</h3>
                  <p className="text-muted-foreground">
                    Ask the seller for the serial number via message before meeting in person. 
                    Honest sellers have no reason to refuse. Check it at safeorstolen.com/verify before you drive out.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-card rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold mb-2">Verify Serial in Person</h3>
                  <p className="text-muted-foreground">
                    When meeting, physically check the serial number on the console. 
                    Power it on and make sure it matches Settings &gt; System &gt; System Software &gt; Console Information.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-card rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold mb-2">Check for PSN Account Locks</h3>
                  <p className="text-muted-foreground">
                    Ask the seller to log out of their PSN account. If the console is locked to an account 
                    they can't access, it may be stolen. A factory reset should show the initial setup screen.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-card rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold mb-2">Request Proof of Purchase</h3>
                  <p className="text-muted-foreground">
                    Ask for the original receipt or order confirmation. While not everyone keeps receipts, 
                    refusal to provide any proof of legitimate purchase is a red flag.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-card rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-bold mb-2">Run Final Verification</h3>
                  <p className="text-muted-foreground">
                    Run the serial you read off the console at safeorstolen.com/verify. It searches SafeOrStolen theft
                    reports and public web results. "No report found in the records searched" is one part of your
                    check, not a guarantee.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="flex items-center gap-2 text-2xl font-bold mt-12 mb-6">
              <AlertTriangle className="w-6 h-6 text-yellow-500" />
              Red Flags: Signs a PS5 Might Be Stolen
            </h2>

            <div className="grid md:grid-cols-2 gap-4 my-8">
              {[
                "Price significantly below comparable used consoles",
                "Seller refuses to provide serial number",
                "No original box, cables, or controller",
                "Seller repeatedly changes the meeting place",
                "Seller pressures you to skip testing",
                "Irreversible payment required before inspection",
                "Seller has multiple consoles for sale",
                "New account with no history/reviews",
                "Serial number sticker looks tampered with",
                "Mismatched serial numbers (physical vs. software)"
              ].map((flag, index) => (
                <div key={index} className="flex gap-2 p-3 bg-yellow-500/10 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{flag}</span>
                </div>
              ))}
            </div>

            <h2 className="flex items-center gap-2 text-2xl font-bold mt-12 mb-6">
              <CheckCircle className="w-6 h-6 text-green-500" />
              What a Clean PS5 Looks Like
            </h2>

            <div className="grid md:grid-cols-2 gap-4 my-8">
              {[
                "Serial numbers match (physical and software)",
                "Original box with matching serial",
                "Original receipt or digital order confirmation",
                "Controller, cables, and documentation included",
                "Seller comfortable with verification process",
                "Pricing consistent with comparable used consoles",
                "SafeOrStolen result reviewed as one due-diligence step",
                "Seller has positive marketplace history"
              ].map((sign, index) => (
                <div key={index} className="flex gap-2 p-3 bg-green-500/10 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{sign}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Frequently Asked Questions</h2>

            <div className="space-y-6 my-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">How do I find the serial number on a PlayStation 5?</h3>
                  <p className="text-muted-foreground">
                    The PS5 serial number is printed on the label on the back of the console, near the bottom, next to
                    the model number (which starts with CFI-). You can also see it in Settings &gt; System &gt; System
                    Software &gt; Console Information. Make sure the label and the on-screen serial match before you pay.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Can I check if a PS5 is stolen before buying?</h3>
                  <p className="text-muted-foreground">
                    Yes. Enter the serial at safeorstolen.com/verify to search SafeOrStolen theft reports and public
                    web results in a few seconds. Also compare the serial on the console with Settings, the box and
                    the receipt. SafeOrStolen does not search police or retailer records.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">What happens if I accidentally buy a stolen PS5?</h3>
                  <p className="text-muted-foreground">
                    Stop using or reselling it, preserve the listing, messages, serial, and payment record, then
                    contact local police, the marketplace, and your payment provider. Laws and remedies vary.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Can Sony track stolen PS5 consoles?</h3>
                  <p className="text-muted-foreground">
                    Sony does not provide a public stolen-console serial search. Contact PlayStation Support for
                    account or console-access problems, and contact police if you believe the console is stolen.
                  </p>
                </CardContent>
              </Card>
            </div>

          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-blue-500/10 to-primary/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Check a PS5?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Search the console serial against SafeOrStolen theft reports and public web results. 2 free checks.
            </p>
            <Link to="/verify">
              <Button size="lg" className="gap-2">
                Verify PS5 Serial Number <Search className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/check-electronics" className="group">
                <Card className="h-full hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                      Check Electronics Stolen Status
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Verify any electronic device isn't stolen before purchasing.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/serial-number-checker" className="group">
                <Card className="h-full hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                      Serial Number Checker
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Universal serial number verification for any item.
                    </p>
                  </CardContent>
                </Card>
              </Link>
              
              <Link to="/facebook-marketplace-stolen-check" className="group">
                <Card className="h-full hover:border-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                      Facebook Marketplace Safety
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Protect yourself when buying on Facebook Marketplace.
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </article>
      <RelatedPagesSection currentPage="/blog/ps5-stolen-check-guide" currentCategory="blog" maxLinks={5} />
    </>
  );
};

export default PS5StolenCheckGuide;
