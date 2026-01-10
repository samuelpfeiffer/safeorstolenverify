import { PageSEO } from '@/components/seo/PageSEO';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, CheckCircle, Search, MapPin, MessageSquare, DollarSign, Star, Truck } from 'lucide-react';
import { HomeSearchFormWithURL } from '@/components/home/HomeSearchFormWithURL';

const OfferUpSafetyGuide = () => {
  const faqs = [
    {
      question: "Is OfferUp safe for buying used items?",
      answer: "OfferUp can be safe with precautions: use their TruYou verification, check seller ratings, meet in public (use their Community MeetUp Spots), pay through the app for shipped items, and always verify serial numbers for electronics."
    },
    {
      question: "How do I check if something on OfferUp is stolen?",
      answer: "Ask the seller for the serial number before meeting. Run it through SafeOrStolen.com - we check police databases, insurance claims, and 100+ other sources. It's free and takes 30 seconds."
    },
    {
      question: "What is TruYou on OfferUp?",
      answer: "TruYou is OfferUp's identity verification badge. Sellers with TruYou have verified their identity. While not foolproof, it adds a layer of accountability. Prefer buying from TruYou-verified sellers."
    },
    {
      question: "Does OfferUp have buyer protection?",
      answer: "Yes, but ONLY for shipped items paid through OfferUp's payment system. Local meetup purchases have NO protection - once you hand over cash, it's gone. That's why verification before buying is critical."
    },
    {
      question: "What's a Community MeetUp Spot?",
      answer: "OfferUp partners with local police departments and businesses to create safe meeting locations with surveillance. Open the app, tap the location pin, and find spots near you. Always use these for high-value items."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <PageSEO
        title="OfferUp Safety Guide 2026 - Avoid Scams & Stolen Items | SafeOrStolen"
        description="Stay safe on OfferUp with our complete buyer's guide. Learn to spot scams, verify items aren't stolen, use TruYou, and find Community MeetUp Spots."
        keywords="offerup safety, offerup scams, buying on offerup safely, offerup stolen goods, offerup truyou, offerup community meetup"
        canonical="/offerup-safety-guide"
        structuredData={[faqSchema]}
      />

      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-teal-900/20 via-background to-background">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-teal-500/10 text-teal-400 px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Marketplace Safety</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Complete <span className="text-teal-400">OfferUp Safety Guide</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              OfferUp has 44 million monthly users – and scammers love every one of them. 
              Here's how to find great deals without getting burned.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verify">
                <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-lg px-8">
                  <Search className="mr-2 h-5 w-5" />
                  Check If Item Is Stolen
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* OfferUp Features */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Use OfferUp's Built-In Safety Features</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mb-4">
                    <Star className="w-6 h-6 text-teal-400" />
                  </div>
                  <CardTitle>TruYou Verification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Look for the TruYou badge. These sellers verified their identity. 
                    Not foolproof, but adds accountability. Prefer TruYou sellers for high-value items.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-teal-400" />
                  </div>
                  <CardTitle>Community MeetUp Spots</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    OfferUp partners with police departments for safe meeting locations with cameras. 
                    Tap the location pin in the app to find spots near you.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mb-4">
                    <Truck className="w-6 h-6 text-teal-400" />
                  </div>
                  <CardTitle>Shipping Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    For shipped items paid through OfferUp, you get buyer protection. 
                    If item doesn't arrive or is misrepresented, you can get a refund.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Safety Checklist */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">The OfferUp Safety Checklist</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-teal-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-teal-400" />
                    Before Messaging
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Check seller's rating and reviews</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Look for TruYou badge</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Compare price to market value</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Check how long they've been on OfferUp</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-teal-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Search className="w-5 h-5 text-teal-400" />
                    When Messaging
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Request serial number</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Ask for additional photos</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Verify item specifications</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Stay IN the app (don't go to text/email)</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-teal-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-teal-400" />
                    Before Meeting
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span><Link to="/verify" className="text-primary hover:underline">Run serial through SafeOrStolen</Link></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Choose a Community MeetUp Spot</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Tell someone where you're going</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Bring a friend for high-value items</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-teal-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-teal-400" />
                    At the Meetup
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Meet during daylight</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Verify serial matches what you checked</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Test item thoroughly</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <span>Get receipt with serial number</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* OfferUp Scams */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Common OfferUp Scams to Watch For</h2>
            
            <div className="space-y-4">
              <Card className="border-red-500/30">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-red-400 shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">The "Off-Platform" Scam</h3>
                      <p className="text-sm text-muted-foreground">
                        Seller insists on communicating via text, email, or WhatsApp. Once you leave OfferUp, 
                        you lose all protection and record of the conversation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-500/30">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-red-400 shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">The "Shipping" Scam</h3>
                      <p className="text-sm text-muted-foreground">
                        Seller offers to ship but wants payment via Zelle, Venmo, or gift cards. 
                        Only pay for shipped items through OfferUp's official payment system.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-500/30">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-red-400 shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">The "Bait and Switch"</h3>
                      <p className="text-sm text-muted-foreground">
                        Item in photos looks great, but the actual item is damaged or different. 
                        Always inspect thoroughly and compare to listing photos before paying.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-500/30">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-6 h-6 text-red-400 shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">Stolen Goods</h3>
                      <p className="text-sm text-muted-foreground">
                        Electronics priced way below market value, seller doesn't know much about the item, 
                        refuses to provide serial number. <Link to="/verify" className="text-primary hover:underline">Always verify serial numbers</Link>.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">OfferUp Safety FAQs</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-gradient-to-br from-teal-900/20 via-background to-background">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Found Something on OfferUp?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Check the serial number before you meet. It's free, takes 30 seconds, 
              and could save you from buying stolen property.
            </p>
            <Link to="/verify">
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-lg px-8">
                <Shield className="mr-2 h-5 w-5" />
                Check If It's Stolen - Free
              </Button>
            </Link>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <Link to="/facebook-marketplace-safety-guide" className="hover:text-primary">Facebook Marketplace Safety</Link>
              <span>•</span>
              <Link to="/craigslist-safety-guide" className="hover:text-primary">Craigslist Safety</Link>
              <span>•</span>
              <Link to="/ebay-stolen-item-check" className="hover:text-primary">eBay Safety</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OfferUpSafetyGuide;
