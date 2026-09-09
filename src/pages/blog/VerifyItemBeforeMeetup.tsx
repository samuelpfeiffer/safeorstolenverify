import React from 'react';
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, MapPin, Clock, AlertTriangle, CheckCircle, Download, Users } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';
import { BlogHeroImage } from '@/components/blog/BlogHeroImage';
import { blogImages } from '@/assets/blog';
import { SafeOrStolenVideo, safeOrStolenVideos } from '@/components/video/SafeOrStolenVideo';

const VerifyItemBeforeMeetup = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Verify Items Before Meeting Sellers - Complete Safety Guide",
    "description": "Complete guide to safely verifying items before meeting marketplace sellers. Learn to check if items are stolen and protect yourself at meetup locations.",
    "datePublished": "2025-01-15",
    "dateModified": "2026-02-06",
    "author": { "@type": "Organization", "name": "SafeOrStolen" },
    "publisher": { "@type": "Organization", "name": "SafeOrStolen" }
  };

  const faqs = [
    {
      question: "How do I verify an item before meeting a seller?",
      answer: "Ask the seller for the IMEI, VIN, or serial number before agreeing to meet. Enter it into SafeOrStolen to verify the item isn't reported stolen. Only proceed if verification passes."
    },
    {
      question: "What if the seller won't provide a serial number?",
      answer: "This is a major red flag. Legitimate sellers have nothing to hide. If they refuse to provide identifying information, don't proceed with the meetup."
    },
    {
      question: "Where is the safest place to meet marketplace sellers?",
      answer: "Police station safe exchange zones are the safest. Many departments offer monitored parking areas for transactions. Otherwise, busy public places during daylight hours."
    },
    {
      question: "Can I verify items at the meetup location?",
      answer: "Yes! Download the SafeOrStolen app to verify items on-the-spot. The app works offline and can scan barcodes in 3 seconds."
    },
    {
      question: "What should I bring to a meetup?",
      answer: "Your phone with SafeOrStolen app installed, a friend or family member, cash in small bills (if paying cash), and a way to test the item if applicable."
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
        title="How to Verify Items Before Meeting Sellers - Meetup Safety Guide | SafeOrStolen"
        description="Complete guide to safely verifying items before meeting marketplace sellers. Check if items are stolen and protect yourself at meetup locations."
        keywords="verify before meetup, marketplace safety, check stolen before meeting seller, safe exchange, verify at meetup"
        canonical="/blog/verify-item-before-meetup"
        structuredData={[articleSchema, faqSchema]}
      />
      <div className="min-h-screen bg-background">
        <article className="max-w-4xl mx-auto px-4 py-16">
          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/blog" className="hover:text-primary">Blog</Link>
              <span>/</span>
              <span>Safety Guide</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How to Verify Items Before Meeting Sellers
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              The complete safety guide for marketplace meetups. Learn to verify items 
              aren't stolen and protect yourself when buying from Facebook Marketplace, 
              OfferUp, Craigslist, and other platforms.
            </p>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Updated: February 2026</span>
              <span>•</span>
              <span>7 min read</span>
            </div>
          </header>

          <BlogHeroImage src={blogImages.meetup} alt="Two people at safe exchange zone verifying item with phone - marketplace meetup safety" />
          <SafeOrStolenVideo
            src={safeOrStolenVideos[4].src}
            title={safeOrStolenVideos[4].title}
            caption={safeOrStolenVideos[4].caption}
            poster={safeOrStolenVideos[4].poster}
            className="mx-auto mb-12 max-w-xs"
          />

          {/* Pre-Meetup Checklist */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-primary" />
              Pre-Meetup Verification Checklist
            </h2>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <ol className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</span>
                    <div>
                      <h3 className="font-semibold">Request Identifying Information</h3>
                      <p className="text-sm text-muted-foreground">
                        Message the seller and ask for: IMEI (phones), VIN (vehicles), or serial number (electronics). 
                        A legitimate seller will provide this without hesitation.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</span>
                    <div>
                      <h3 className="font-semibold">Verify with SafeOrStolen</h3>
                      <p className="text-sm text-muted-foreground">
                        Enter the identifier into SafeOrStolen's free verification tool. 
                        If the item is flagged as stolen, do not proceed with the meetup.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</span>
                    <div>
                      <h3 className="font-semibold">Research the Seller</h3>
                      <p className="text-sm text-muted-foreground">
                        Check their profile history, ratings, and previous listings. 
                        New accounts with no history are higher risk.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</span>
                    <div>
                      <h3 className="font-semibold">Download the SafeOrStolen App</h3>
                      <p className="text-sm text-muted-foreground">
                        Install the app before your meetup so you can re-verify the item on-site. 
                        The app works offline and scans barcodes in seconds.
                      </p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button asChild>
                <Link to="/verify">Verify Item Now - Free</Link>
              </Button>
            </div>
          </section>

          {/* Safe Meetup Locations */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-primary" />
              Choosing Safe Meetup Locations
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-green-500/30">
                <CardHeader>
                  <CardTitle className="text-green-600">✓ Safe Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Police station safe exchange zones</li>
                    <li>• Bank lobbies during business hours</li>
                    <li>• Busy coffee shops with seating</li>
                    <li>• Shopping mall common areas</li>
                    <li>• Public library entrances</li>
                    <li>• Well-lit gas station parking lots</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-destructive/30">
                <CardHeader>
                  <CardTitle className="text-destructive">✗ Avoid These</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Seller's home or private property</li>
                    <li>• Secluded parking lots</li>
                    <li>• After dark in any location</li>
                    <li>• Unfamiliar neighborhoods</li>
                    <li>• Anywhere without witnesses</li>
                    <li>• Locations with no cell service</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* At the Meetup */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6 text-primary" />
              At the Meetup - What to Do
            </h2>

            <div className="space-y-4">
              <Card>
                <CardContent className="flex items-start gap-4 pt-6">
                  <Users className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Bring Someone With You</h3>
                    <p className="text-sm text-muted-foreground">
                      Never go alone to a marketplace meetup. Having a friend or family member 
                      provides safety and a witness to the transaction.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 pt-6">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Re-Verify On-Site</h3>
                    <p className="text-sm text-muted-foreground">
                      Use the SafeOrStolen app to verify the actual item matches what was described. 
                      Scan the barcode or manually enter the serial number to confirm.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 pt-6">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Test the Item</h3>
                    <p className="text-sm text-muted-foreground">
                      For phones: make a call, check IMEI in settings. For vehicles: test drive, 
                      verify VIN matches title. For electronics: power on and test all functions.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex items-start gap-4 pt-6">
                  <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Trust Your Instincts</h3>
                    <p className="text-sm text-muted-foreground">
                      If something feels wrong, walk away. No deal is worth your safety. 
                      A legitimate seller will understand if you need more time or information.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Mobile App CTA */}
          <section className="mb-12 bg-primary/5 p-8 rounded-lg">
            <div className="text-center">
              <Download className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">
                Verify Items On-the-Spot
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Download the SafeOrStolen app to verify items at meetup locations. 
                Works offline with 3-second barcode scanning.
              </p>
              <Button asChild size="lg">
                <Link to="/app">Download Free App</Link>
              </Button>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Meetup Safety FAQs</h2>
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

          {/* CTA */}
          <section className="bg-primary text-primary-foreground p-8 rounded-lg text-center">
            <Shield className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              Stay Safe - Verify Before You Meet
            </h2>
            <p className="opacity-90 mb-6">
              A few minutes of verification can save you from hours of problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/verify">Verify Item Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/app">
                  <Download className="w-4 h-4 mr-2" />
                  Get Mobile App
                </Link>
              </Button>
            </div>
          </section>
        </article>
      </div>
      <RelatedPagesSection currentPage="/blog/verify-item-before-meetup" currentCategory="blog" maxLinks={5} />
    </>
  );
};

export default VerifyItemBeforeMeetup;
