import { Link } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, AlertTriangle, CheckCircle, XCircle, Smartphone, MapPin, User, Star, MessageSquare, ArrowRight } from 'lucide-react';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

/**
 * OfferUp Safety Page - Target: "OfferUp scams" (14,800 monthly searches)
 */
const OfferUpSafetyPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is OfferUp safe to buy from?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "OfferUp can be safe if you take precautions. Use TruYou verified sellers, meet at OfferUp Community MeetUp Spots, verify items with SafeOrStolen, and avoid off-platform payments. OfferUp's buyer protection only covers shipped items paid through the app."
        }
      },
      {
        "@type": "Question",
        "name": "How do I avoid OfferUp scams?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Avoid OfferUp scams by: 1) Verifying IMEI/VIN/serial numbers with SafeOrStolen before buying, 2) Using Community MeetUp Spots at police stations, 3) Only paying through OfferUp for shipped items, 4) Checking seller ratings and TruYou badge, 5) Never sending gift cards or wire transfers."
        }
      },
      {
        "@type": "Question",
        "name": "What are common OfferUp scams?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common OfferUp scams include: stolen phones with blacklisted IMEIs, counterfeit electronics, vehicles with hidden damage, advance payment fraud, overpayment refund scams, and fake buyer scams targeting sellers."
        }
      },
      {
        "@type": "Question",
        "name": "How do I verify if an OfferUp item is stolen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ask the seller for the IMEI (phones), VIN (vehicles), or serial number. Enter it into SafeOrStolen's free checker before meeting. SafeOrStolen checks 100+ databases to verify the item isn't reported stolen."
        }
      }
    ]
  };

  const redFlags = [
    { icon: XCircle, title: "New Account, No Reviews", desc: "Profile created recently with zero transaction history" },
    { icon: AlertTriangle, title: "Price Too Low", desc: "Deals that seem too good are usually scams" },
    { icon: MessageSquare, title: "Moves Off-App", desc: "Asks to text, email, or use WhatsApp instead" },
    { icon: MapPin, title: "Won't Meet Safely", desc: "Refuses to meet at Community MeetUp Spots" }
  ];

  const safetyTips = [
    { icon: Shield, title: "Verify with SafeOrStolen", desc: "Check IMEI, VIN, or serial numbers before buying" },
    { icon: MapPin, title: "Use Community MeetUp Spots", desc: "OfferUp's designated safe zones at police stations" },
    { icon: Star, title: "Check TruYou Badge", desc: "Verified sellers have passed identity checks" },
    { icon: User, title: "Review Seller History", desc: "Look for positive reviews and transaction history" }
  ];

  return (
    <>
    <TopNavigation />
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background pt-16">
      <PageSEO
        title="OfferUp Scam Check - Free Item Verification"
        description="Avoid OfferUp scams with free IMEI, VIN and serial number verification. Check if items are stolen before meeting sellers. Instant results from 100+ databases."
        keywords="OfferUp safety, OfferUp stolen check, verify OfferUp items, avoid OfferUp scams, OfferUp fraud protection"
        canonical="/offerup-safety"
        structuredData={faqSchema}
      />

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero */}
        <section className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Shield className="w-4 h-4 mr-2 inline" />
            OfferUp Safety Guide 2026
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            OfferUp Safety Tips
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Stay safe when buying on OfferUp. Learn to spot scams, verify stolen items, and protect yourself from fraud. Use SafeOrStolen's free verification tools before every purchase.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/verify">
                <Shield className="w-5 h-5 mr-2" />
                Verify Item Before Buying
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/app">Get Verification App</Link>
            </Button>
          </div>
        </section>

        {/* Red Flags */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            <AlertTriangle className="w-8 h-8 inline mr-2 text-destructive" />
            OfferUp Scam Red Flags
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {redFlags.map((flag, i) => (
              <Card key={i} className="border-destructive/20 bg-destructive/5">
                <CardContent className="pt-6 text-center">
                  <flag.icon className="w-10 h-10 text-destructive mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">{flag.title}</h3>
                  <p className="text-sm text-muted-foreground">{flag.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Safety Tips */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            <CheckCircle className="w-8 h-8 inline mr-2 text-green-500" />
            How to Stay Safe on OfferUp
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyTips.map((tip, i) => (
              <Card key={i} className="border-green-200 bg-green-50 dark:bg-green-950/20">
                <CardContent className="pt-6 text-center">
                  <tip.icon className="w-10 h-10 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* OfferUp's Safety Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">OfferUp's Built-In Safety Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">TruYou Verification</h3>
                <p className="text-muted-foreground">Look for the TruYou badge. These sellers have verified their identity through OfferUp's background check process, which includes phone number verification and optional Facebook/Google connection.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">Community MeetUp Spots</h3>
                <p className="text-muted-foreground">OfferUp partners with police stations for safe exchange zones. Always suggest meeting at these locations during daylight hours with another person.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">In-App Payments</h3>
                <p className="text-muted-foreground">Buyer protection covers shipped items paid through OfferUp. Local cash transactions have no protection—this is critical to understand.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Comprehensive OfferUp Safety Guide */}
        <section className="mb-16 bg-card border rounded-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-6">Complete OfferUp Buyer Protection Guide</h2>
          <div className="prose prose-lg max-w-4xl mx-auto text-muted-foreground space-y-4">
            <p>
              OfferUp has become one of America's largest mobile marketplaces, with millions of users buying and selling everything from smartphones to vehicles. However, the platform's convenience also attracts scammers and individuals selling stolen goods. Understanding how to protect yourself is essential for any OfferUp transaction.
            </p>
            <h3 className="text-xl font-semibold text-foreground mt-6">Understanding OfferUp's Buyer Protection Limitations</h3>
            <p>
              Many OfferUp users mistakenly believe they have full buyer protection on all purchases. The reality is more nuanced: OfferUp's "Buyer Protection" policy only covers items that are shipped and paid for through the OfferUp app. When you meet locally and pay cash—which is how the majority of OfferUp transactions occur—you have zero protection from OfferUp. If the item turns out to be stolen, defective, or not as described, you have no recourse through the platform.
            </p>
            <h3 className="text-xl font-semibold text-foreground mt-6">Why Stolen Goods Appear on OfferUp</h3>
            <p>
              OfferUp's local marketplace model is attractive to those selling stolen property for several reasons. First, cash transactions leave no paper trail. Second, the quick meetup format means items can be sold within hours of being stolen. Third, the anonymous nature of the platform—despite TruYou verification—allows sellers to create new accounts easily. Fourth, the lack of systematic verification means stolen phones, laptops, bikes, and even vehicles can change hands without detection.
            </p>
            <h3 className="text-xl font-semibold text-foreground mt-6">High-Risk Item Categories on OfferUp</h3>
            <p>
              Certain categories carry higher stolen item risk. Smartphones are the most common stolen items sold on OfferUp—particularly iPhones, which retain high resale value. Gaming consoles (PlayStation 5, Xbox Series X) are frequently stolen from retail shipments or homes. Laptops, especially MacBooks, are easy to steal and resell. Bicycles, particularly high-end road bikes and e-bikes, are stolen at alarming rates. Power tools from construction sites often appear on OfferUp within days of theft. Even vehicles—cars, motorcycles, ATVs—are listed on the platform.
            </p>
            <h3 className="text-xl font-semibold text-foreground mt-6">The Legal Consequences of Buying Stolen Items</h3>
            <p>
              Many buyers don't realize that purchasing stolen property—even unknowingly—can result in serious consequences. First, the item will be confiscated when discovered, with no compensation to you. Second, you may face criminal charges for "receiving stolen property" in many states, even if you didn't know it was stolen. Third, you could face civil liability to the original owner or their insurance company. Fourth, you'll have lost whatever money you paid with no way to recover it from the seller.
            </p>
          </div>
        </section>

        {/* Detailed Scam Types */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Common OfferUp Scams to Watch For</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3 text-destructive">IMEI Blacklisted Phones</h3>
                <p className="text-muted-foreground">Phones reported lost or stolen are added to carrier blacklists. They may work on WiFi but can't be activated on any US carrier. Always check IMEI with SafeOrStolen before buying any phone on OfferUp.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3 text-destructive">Counterfeit Electronics</h3>
                <p className="text-muted-foreground">Fake AirPods, knockoff gaming consoles, and counterfeit brand-name items are common. Meet in well-lit areas and verify serial numbers. If the price is too good, it's likely fake or stolen.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3 text-destructive">Vehicle Title Fraud</h3>
                <p className="text-muted-foreground">Vehicles listed on OfferUp may have salvage titles, undisclosed liens, or be reported stolen. Always run a VIN check before considering any vehicle purchase.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3 text-destructive">Payment Scams</h3>
                <p className="text-muted-foreground">Sellers asking for Venmo, CashApp, Zelle, or gift cards before meetup are almost always scammers. Never send money to someone you haven't met or verified.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Verification Steps */}
        <section className="mb-16 bg-card border rounded-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8">How to Verify OfferUp Items</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
              <h3 className="font-semibold mb-2">Request IMEI/VIN</h3>
              <p className="text-sm text-muted-foreground">Ask seller for the item's unique identifier before meeting</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
              <h3 className="font-semibold mb-2">Check SafeOrStolen</h3>
              <p className="text-sm text-muted-foreground">Enter the number in our free verification tool</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
              <h3 className="font-semibold mb-2">Meet at MeetUp Spot</h3>
              <p className="text-sm text-muted-foreground">Use OfferUp's safe exchange locations</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">4</div>
              <h3 className="font-semibold mb-2">Inspect & Pay</h3>
              <p className="text-sm text-muted-foreground">Test the item thoroughly before exchanging money</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg">
              <Link to="/verify">
                <ArrowRight className="w-5 h-5 mr-2" />
                Verify Item Now - Free
              </Link>
            </Button>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Is OfferUp safe to buy from?</h3>
                <p className="text-muted-foreground">OfferUp can be safe with precautions. Use TruYou verified sellers, Community MeetUp Spots, verify items with SafeOrStolen, and avoid off-platform payments.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">How do I avoid OfferUp scams?</h3>
                <p className="text-muted-foreground">Verify items with SafeOrStolen, use Community MeetUp Spots, only pay through OfferUp for shipped items, check seller ratings, and never send gift cards or wire transfers.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">How do I verify if an OfferUp item is stolen?</h3>
                <p className="text-muted-foreground">Ask for the IMEI (phones), VIN (vehicles), or serial number. Enter it into SafeOrStolen's free checker before meeting.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary/10 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Stay Safe on OfferUp</h2>
          <p className="text-muted-foreground mb-6">Verify any phone, car, or electronics before your meetup. Free checks available.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/verify">Verify Item Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/app">Get Verification App</Link>
            </Button>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-16 pt-8 border-t">
          <h2 className="text-xl font-semibold mb-4">More Marketplace Guides</h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/facebook-marketplace-safety" className="text-primary hover:underline">Facebook Marketplace Safety</Link>
            <span>•</span>
            <Link to="/craigslist-safety-verification" className="text-primary hover:underline">Craigslist Safety</Link>
            <span>•</span>
            <Link to="/stolen-phone-checker" className="text-primary hover:underline">Stolen Phone Checker</Link>
            <span>•</span>
            <Link to="/vin-checker" className="text-primary hover:underline">VIN Checker</Link>
          </div>
        </section>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default OfferUpSafetyPage;
