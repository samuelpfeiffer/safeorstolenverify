import { Link } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, AlertTriangle, CheckCircle, XCircle, Smartphone, Car, Laptop, ArrowRight, Eye, MessageSquare, CreditCard, MapPin } from 'lucide-react';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

/**
 * Facebook Marketplace Safety Page - Target: "Facebook Marketplace scams" (22,200 monthly searches)
 */
const FacebookMarketplaceSafetyPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is Facebook Marketplace safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Facebook Marketplace can be safe if you take precautions. Key safety tips: verify items with SafeOrStolen before buying, meet in public places, use Facebook Pay for protection, check seller profiles, and never wire money. About 1 in 5 listings may be scams."
        }
      },
      {
        "@type": "Question",
        "name": "How do I avoid scams on Facebook Marketplace?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Avoid Facebook Marketplace scams by: 1) Verifying IMEI/VIN numbers with SafeOrStolen before buying phones or cars, 2) Meeting in police station parking lots, 3) Never paying with gift cards or wire transfers, 4) Checking seller's profile age and reviews, 5) Trusting your instincts if price seems too good."
        }
      },
      {
        "@type": "Question",
        "name": "What are the most common Facebook Marketplace scams?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Common Facebook Marketplace scams include: stolen phones with clean appearances but blacklisted IMEIs, salvage title vehicles, fake electronics (counterfeit AirPods, gaming consoles), advance payment scams, and overpayment refund scams."
        }
      },
      {
        "@type": "Question",
        "name": "How do I check if a phone on Facebook Marketplace is stolen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ask the seller for the IMEI number (15 digits, dial *#06#). Enter it into SafeOrStolen's free checker before meeting. If the seller refuses to provide the IMEI, do not proceed with the purchase."
        }
      }
    ]
  };

  const redFlags = [
    { icon: CreditCard, title: "Payment Outside Facebook", desc: "Seller asks for Venmo, Zelle, gift cards, or wire transfer" },
    { icon: MessageSquare, title: "Won't Meet in Person", desc: "Insists on shipping when item is listed locally" },
    { icon: Eye, title: "Price Too Good", desc: "iPhone 15 for $200? It's probably stolen or fake" },
    { icon: AlertTriangle, title: "Refuses to Verify", desc: "Won't provide IMEI/VIN or let you check serial numbers" },
    { icon: MapPin, title: "Vague Location", desc: "Can't meet at a public, safe location" },
    { icon: XCircle, title: "New Account", desc: "Profile created recently with no history" }
  ];

  const safetyTips = [
    { icon: Shield, title: "Verify with SafeOrStolen", desc: "Check IMEI, VIN, or serial numbers BEFORE you meet the seller" },
    { icon: MapPin, title: "Meet at Police Stations", desc: "Many stations have designated safe exchange zones" },
    { icon: CheckCircle, title: "Use Facebook Pay", desc: "Facebook's payment system offers buyer protection" },
    { icon: Eye, title: "Inspect Before Paying", desc: "Test all functions, check for damage, verify everything" },
    { icon: MessageSquare, title: "Keep Messages on Facebook", desc: "Don't move to WhatsApp or text - keep records" },
    { icon: Smartphone, title: "Bring a Friend", desc: "Never go alone to meet a stranger" }
  ];

  return (
    <>
    <TopNavigation />
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background pt-16">
      <PageSEO
        title="Facebook Marketplace Safety - Avoid Scams | SafeOrStolen"
        description="Protect yourself from Facebook Marketplace scams. Learn to spot stolen items, verify phones with IMEI checks, and avoid fraud."
        keywords="Facebook Marketplace scams, is Facebook Marketplace safe, Facebook Marketplace safety tips, avoid scams Facebook Marketplace, verify Facebook Marketplace items"
        canonical="/facebook-marketplace-safety"
        structuredData={faqSchema}
      />

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero */}
        <section className="text-center mb-16">
          <Badge variant="destructive" className="mb-4">
            <AlertTriangle className="w-4 h-4 mr-2 inline" />
            1 in 5 Marketplace Listings May Be Scams
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Facebook Marketplace Safety Tips
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Learn how to avoid scams, spot stolen items, and protect yourself when buying on Facebook Marketplace. Use SafeOrStolen to verify phones, cars, and electronics before you buy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/verify">
                <Shield className="w-5 h-5 mr-2" />
                Verify Before Buying
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/app">Download App for Meetups</Link>
            </Button>
          </div>
        </section>

        {/* Stats */}
        <section className="grid md:grid-cols-4 gap-4 mb-16">
          <Card className="text-center">
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-destructive">$380M</p>
              <p className="text-sm text-muted-foreground">Lost to marketplace scams in 2024</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-primary">1 in 5</p>
              <p className="text-sm text-muted-foreground">Listings may be fraudulent</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-destructive">71%</p>
              <p className="text-sm text-muted-foreground">Phone scams involve stolen devices</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <p className="text-4xl font-bold text-green-500">3 sec</p>
              <p className="text-sm text-muted-foreground">To verify with SafeOrStolen</p>
            </CardContent>
          </Card>
        </section>

        {/* Red Flags */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            <AlertTriangle className="w-8 h-8 inline mr-2 text-destructive" />
            Red Flags to Watch For
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {redFlags.map((flag, i) => (
              <Card key={i} className="border-destructive/20 bg-destructive/5">
                <CardContent className="pt-6">
                  <flag.icon className="w-8 h-8 text-destructive mb-3" />
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
            <Shield className="w-8 h-8 inline mr-2 text-primary" />
            How to Stay Safe on Facebook Marketplace
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {safetyTips.map((tip, i) => (
              <Card key={i} className="border-green-200 bg-green-50 dark:bg-green-950/20">
                <CardContent className="pt-6">
                  <tip.icon className="w-8 h-8 text-green-600 mb-3" />
                  <h3 className="font-semibold mb-2">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Verify By Category */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What to Verify by Item Type</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Smartphone className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Phones</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Ask for IMEI number (*#06#)</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Verify with SafeOrStolen</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Check iCloud/Google lock</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Test all features before paying</li>
                </ul>
                <Button asChild className="w-full mt-4">
                  <Link to="/imei-checker">Check IMEI</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Car className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Cars & Vehicles</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Get VIN from door frame</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Verify with SafeOrStolen</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Check for title issues</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Meet at DMV to transfer</li>
                </ul>
                <Button asChild className="w-full mt-4">
                  <Link to="/vin-checker">Check VIN</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Laptop className="w-10 h-10 text-primary mb-2" />
                <CardTitle>Electronics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Get serial number</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Verify with SafeOrStolen</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Check activation locks</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" /> Power on and test</li>
                </ul>
                <Button asChild className="w-full mt-4">
                  <Link to="/serial-number-checker">Check Serial</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Common Scams */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Most Common Facebook Marketplace Scams</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">1. Stolen Phone Scam</h3>
                <p className="text-muted-foreground mb-3">Phone looks perfect but has a blacklisted IMEI. It won't activate on any carrier. The seller knows this and disappears after sale.</p>
                <p className="text-sm text-primary"><strong>Prevention:</strong> Always check IMEI with SafeOrStolen before buying.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">2. Salvage Title Vehicle</h3>
                <p className="text-muted-foreground mb-3">Car was totaled and rebuilt. Seller hides this and claims clean title. May have hidden damage.</p>
                <p className="text-sm text-primary"><strong>Prevention:</strong> Run VIN check with SafeOrStolen to reveal title history.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">3. Counterfeit Electronics</h3>
                <p className="text-muted-foreground mb-3">Fake AirPods, counterfeit gaming consoles, knockoff gadgets sold as authentic.</p>
                <p className="text-sm text-primary"><strong>Prevention:</strong> Verify serial numbers match manufacturer records.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3">4. Advance Payment Scam</h3>
                <p className="text-muted-foreground mb-3">Seller requests deposit or full payment before meeting. Disappears with your money.</p>
                <p className="text-sm text-primary"><strong>Prevention:</strong> Never pay before inspecting item in person.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Is Facebook Marketplace safe?</h3>
                <p className="text-muted-foreground">Facebook Marketplace can be safe with precautions. Verify items with SafeOrStolen, meet in public, use Facebook Pay, check profiles, and never wire money. About 1 in 5 listings may be scams.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">How do I avoid scams on Facebook Marketplace?</h3>
                <p className="text-muted-foreground">1) Verify IMEI/VIN numbers with SafeOrStolen, 2) Meet at police stations, 3) Never pay with gift cards or wire transfers, 4) Check seller profile age, 5) Trust your instincts about prices.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">How do I check if a phone on Marketplace is stolen?</h3>
                <p className="text-muted-foreground">Ask for the IMEI number (dial *#06#). Enter it into SafeOrStolen before meeting. If seller refuses to provide IMEI, do not proceed.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary/10 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Stay Safe on Facebook Marketplace</h2>
          <p className="text-muted-foreground mb-6">Verify any phone, car, or electronics before meeting the seller. Free checks available.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/verify">Verify Item Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/app">Get the App</Link>
            </Button>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-16 pt-8 border-t">
          <h2 className="text-xl font-semibold mb-4">More Marketplace Safety Guides</h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/offerup-safety" className="text-primary hover:underline">OfferUp Safety</Link>
            <span>•</span>
            <Link to="/craigslist-safety-verification" className="text-primary hover:underline">Craigslist Safety</Link>
            <span>•</span>
            <Link to="/stolen-phone-checker" className="text-primary hover:underline">Stolen Phone Checker</Link>
            <span>•</span>
            <Link to="/blog/facebook-marketplace-scams" className="text-primary hover:underline">Facebook Scams Guide</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FacebookMarketplaceSafetyPage;
