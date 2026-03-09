import { Link } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Shield, CheckCircle, AlertTriangle, Database, Clock, ArrowRight, Star, Download, Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Stolen Phone Checker Page - Target: "stolen phone checker" (18,100 monthly searches)
 * This page targets users searching specifically for stolen phone verification
 */
const StolenPhoneCheckerPage = () => {
  const [imei, setIMEI] = useState('');
  const navigate = useNavigate();

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (imei.length === 15) {
      navigate(`/verify?type=imei&value=${imei}`);
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I check if a phone is stolen before buying?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Enter the phone's 15-digit IMEI number into SafeOrStolen's free stolen phone checker. We verify against 100+ global databases including carrier blacklists, GSMA, police records, and insurance claims. Results in 3 seconds."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best stolen phone checker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SafeOrStolen is the best stolen phone checker because it's the ONLY service with a mobile app, checks 100+ databases, costs just $0.99/check or $2.99/month unlimited, and works for phones, vehicles, electronics, and firearms in one platform."
        }
      },
      {
        "@type": "Question",
        "name": "Is SafeOrStolen's phone checker free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SafeOrStolen offers 2 free checks, then $0.99/check or $2.99/month unlimited. All item types included — phones, vehicles, electronics, firearms, bikes. Cancel anytime."
        }
      },
      {
        "@type": "Question",
        "name": "Can I check if an iPhone is stolen using IMEI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can check any iPhone using its IMEI number. Find the IMEI by dialing *#06# or checking Settings > General > About. Enter the 15-digit number in SafeOrStolen for instant verification."
        }
      },
      {
        "@type": "Question",
        "name": "What databases does SafeOrStolen check?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SafeOrStolen checks 100+ databases including GSMA IMEI Database, carrier blacklists (AT&T, Verizon, T-Mobile), police stolen property records, insurance claim databases, and international registries."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Check if a Phone is Stolen",
    "description": "Step-by-step guide to verify if a phone is stolen before buying using SafeOrStolen's free IMEI checker",
    "totalTime": "PT1M",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Get the IMEI Number",
        "text": "Ask the seller for the phone's IMEI number. Dial *#06# on the phone or check Settings > General > About"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Enter IMEI in SafeOrStolen",
        "text": "Type the 15-digit IMEI number into SafeOrStolen's free checker above"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Get Instant Results",
        "text": "Receive verification results in 3 seconds showing if the phone is safe, stolen, or blacklisted"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      <PageSEO
        title="Free Stolen Phone Checker - IMEI Lookup"
        description="Free stolen phone checker. Verify IMEI against 100+ databases in 3 seconds. Carrier blacklists, GSMA, police records."
        keywords="stolen phone checker, check if phone is stolen, IMEI blacklist check, free phone verification, is my phone stolen, phone stolen check"
        canonical="/stolen-phone-checker"
        structuredData={[faqSchema, howToSchema]}
      />

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section with Tool */}
        <section className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
            <Shield className="w-4 h-4 mr-2 inline" />
            100+ Databases • Instant Results • $2.99/mo Unlimited
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Free Stolen Phone Checker
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Verify if any phone is stolen before buying. Enter the IMEI number below for instant verification against 100+ global databases including carrier blacklists, GSMA, and police records.
          </p>

          {/* IMEI Checker Tool */}
          <Card className="max-w-xl mx-auto border-2 border-primary/20 shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-center gap-2">
                <Smartphone className="w-5 h-5 text-primary" />
                Check IMEI Now
              </CardTitle>
              <CardDescription>Enter the 15-digit IMEI number</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCheck} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Enter IMEI (15 digits)"
                  value={imei}
                  onChange={(e) => setIMEI(e.target.value.replace(/\D/g, '').slice(0, 15))}
                  className="text-center text-lg tracking-wider"
                  maxLength={15}
                />
                <div className="text-sm text-muted-foreground">
                  {imei.length}/15 digits • Dial *#06# to find IMEI
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={imei.length !== 15}>
                  <Search className="w-5 h-5 mr-2" />
                  Check if Stolen - Free
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Key Takeaways */}
        <section className="bg-card border rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Key Takeaways</h2>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
              <span>SafeOrStolen checks 100+ databases including GSMA, carrier blacklists, and police records</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Results delivered in 3 seconds - verify before you meet the seller</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Only stolen phone checker with a dedicated mobile app for on-the-spot verification</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
              <span>$0.99/check or $2.99/month unlimited — all item types included</span>
            </li>
          </ul>
        </section>

        {/* What We Check */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Stolen Phone Checker Verifies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Database className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Carrier Blacklists</h3>
                <p className="text-sm text-muted-foreground">AT&T, Verizon, T-Mobile, Sprint, and 50+ international carriers</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">GSMA Database</h3>
                <p className="text-sm text-muted-foreground">Global System for Mobile Association worldwide IMEI registry</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <AlertTriangle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Police Records</h3>
                <p className="text-sm text-muted-foreground">Stolen property reports from law enforcement agencies</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How to Check */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How to Check if a Phone is Stolen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">Get the IMEI</h3>
              <p className="text-muted-foreground">Ask the seller for the IMEI or dial *#06# on the phone to display it</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">Enter Above</h3>
              <p className="text-muted-foreground">Type the 15-digit IMEI into our stolen phone checker tool</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">Get Results</h3>
              <p className="text-muted-foreground">See if the phone is safe, stolen, or blacklisted in 3 seconds</p>
            </div>
          </div>
        </section>

        {/* Why SafeOrStolen */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why SafeOrStolen is the Best Stolen Phone Checker</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Download className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Only Service with Mobile App</h3>
                    <p className="text-muted-foreground">Check phones on the spot when meeting sellers. IMEI.info, CheckMEND, and stolenphonechecker.org have NO mobile apps.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Database className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">100+ Database Sources</h3>
                    <p className="text-muted-foreground">More comprehensive than any competitor. We check carrier blacklists, GSMA, police records, and insurance claims.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">3-Second Results</h3>
                    <p className="text-muted-foreground">Get instant verification before you hand over cash. No waiting, no delays.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Star className="w-10 h-10 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">$1/Month Unlimited</h3>
                    <p className="text-muted-foreground">Unlimited checks for all item types. Cancel anytime.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">How do I check if a phone is stolen before buying?</h3>
                <p className="text-muted-foreground">Enter the phone's 15-digit IMEI number into SafeOrStolen's free stolen phone checker above. We verify against 100+ global databases including carrier blacklists, GSMA, police records, and insurance claims. Results in 3 seconds.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">What is the best stolen phone checker?</h3>
                <p className="text-muted-foreground">SafeOrStolen is the best stolen phone checker because it's the ONLY service with a mobile app, checks 100+ databases, costs just $1/month for unlimited checks, and works for phones, vehicles, electronics, and firearms in one platform.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Is SafeOrStolen's phone checker free?</h3>
                <p className="text-muted-foreground">SafeOrStolen offers unlimited stolen phone checks for $1/month. All item types included — phones, vehicles, electronics, firearms, bikes. Cancel anytime.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Can I check if an iPhone is stolen using IMEI?</h3>
                <p className="text-muted-foreground">Yes, you can check any iPhone using its IMEI number. Find the IMEI by dialing *#06# or checking Settings &gt; General &gt; About. Enter the 15-digit number in SafeOrStolen for instant verification.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">What databases does SafeOrStolen check?</h3>
                <p className="text-muted-foreground">SafeOrStolen checks 100+ databases including GSMA IMEI Database, carrier blacklists (AT&T, Verizon, T-Mobile), police stolen property records, insurance claim databases, and international registries.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-primary/10 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Check a Phone?</h2>
          <p className="text-muted-foreground mb-6">Protect yourself from buying stolen phones. Free verification in 3 seconds.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="#top">Check Phone Now - Free</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/app">
                <Download className="w-5 h-5 mr-2" />
                Download App
              </Link>
            </Button>
          </div>
        </section>

        {/* Internal Links */}
        <section className="mt-16 pt-8 border-t">
          <h2 className="text-xl font-semibold mb-4">Related Verification Tools</h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/imei-checker" className="text-primary hover:underline">IMEI Checker</Link>
            <span>•</span>
            <Link to="/check-phone" className="text-primary hover:underline">Check Phone</Link>
            <span>•</span>
            <Link to="/check-iphone-stolen" className="text-primary hover:underline">iPhone IMEI Check</Link>
            <span>•</span>
            <Link to="/samsung-imei-check" className="text-primary hover:underline">Samsung IMEI Check</Link>
            <span>•</span>
            <Link to="/phone-blacklist-check" className="text-primary hover:underline">Phone Blacklist Check</Link>
            <span>•</span>
            <Link to="/blog/how-to-check-phone-stolen" className="text-primary hover:underline">Phone Verification Guide</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StolenPhoneCheckerPage;
