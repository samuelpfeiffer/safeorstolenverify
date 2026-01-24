import { Link } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Shield, CheckCircle, AlertTriangle, Database, Clock, Download, Search, Settings, Phone, List, Eye, XCircle } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * How to Check if Phone is Stolen Page
 * Target: "how to check if phone is stolen" (22,200 monthly searches)
 */
const HowToCheckIfPhoneStolenPage = () => {
  const [imei, setIMEI] = useState('');
  const navigate = useNavigate();

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (imei.length === 15) {
      navigate(`/verify?type=imei&value=${imei}`);
    }
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Check if a Phone is Stolen Before Buying",
    "description": "Complete step-by-step guide to verify if a phone is stolen using IMEI numbers and SafeOrStolen's free verification tool.",
    "totalTime": "PT3M",
    "supply": [],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "SafeOrStolen IMEI Checker"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Get the Phone's IMEI Number",
        "text": "Ask the seller for the IMEI number before meeting. They can find it by dialing *#06# or checking Settings > General > About.",
        "url": "https://safeorstolen.com/how-to-check-if-phone-stolen#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Enter IMEI in SafeOrStolen",
        "text": "Go to SafeOrStolen.com and enter the 15-digit IMEI number in the verification tool.",
        "url": "https://safeorstolen.com/how-to-check-if-phone-stolen#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Review Verification Results",
        "text": "SafeOrStolen checks 100+ databases and returns results in 3 seconds showing if the phone is safe, stolen, or blacklisted.",
        "url": "https://safeorstolen.com/how-to-check-if-phone-stolen#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Check for Activation Locks",
        "text": "For iPhones, ensure Find My iPhone is disabled. For Android, check for Factory Reset Protection lock.",
        "url": "https://safeorstolen.com/how-to-check-if-phone-stolen#step-4"
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Inspect the Physical Phone",
        "text": "When meeting, verify the IMEI matches what you checked. Look for signs of tampering or damage.",
        "url": "https://safeorstolen.com/how-to-check-if-phone-stolen#step-5"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can I check if a phone is stolen for free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Use SafeOrStolen's free IMEI checker. Enter the 15-digit IMEI number and we'll verify against 100+ databases. You get 2 free checks, no credit card required."
        }
      },
      {
        "@type": "Question",
        "name": "Where do I find the IMEI number on a phone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dial *#06# to display the IMEI. On iPhone: Settings > General > About. On Android: Settings > About Phone > Status. You can also find it on the original box or SIM tray."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I buy a stolen phone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A stolen phone may be reported to police, who can confiscate it. The phone may also be blacklisted, preventing it from being activated on any carrier network. You lose your money and the phone."
        }
      },
      {
        "@type": "Question",
        "name": "Can a stolen phone be unlocked?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No legitimate service can unlock a stolen phone. The IMEI remains blacklisted regardless of carrier unlock status. iCloud/Google account locks cannot be bypassed without the original owner's credentials."
        }
      },
      {
        "@type": "Question",
        "name": "Is it illegal to buy a stolen phone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Knowingly buying stolen property is illegal. Even accidental purchase can result in losing the phone to police with no refund. Always verify with SafeOrStolen before buying to protect yourself."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      <PageSEO
        title="How to Check if a Phone is Stolen Before Buying (2026 Guide) | SafeOrStolen"
        description="Complete guide to check if a phone is stolen using IMEI numbers. Free verification against 100+ databases. Protect yourself from buying blacklisted or stolen phones."
        keywords="how to check if phone is stolen, check phone stolen, verify phone not stolen, IMEI check stolen, is my phone stolen, phone stolen check free"
        canonical="/how-to-check-if-phone-stolen"
        structuredData={[howToSchema, faqSchema]}
      />

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero */}
        <section className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Shield className="w-4 h-4 mr-2 inline" />
            Complete 2026 Verification Guide
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            How to Check if a Phone is Stolen Before Buying
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Verify any phone's IMEI number in 3 seconds with SafeOrStolen's free checker. We search 100+ databases including carrier blacklists, GSMA, and police records to protect you from buying stolen or blacklisted devices.
          </p>

          {/* Quick Check Tool */}
          <Card className="max-w-xl mx-auto border-2 border-primary/20 shadow-lg mb-8">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center justify-center gap-2">
                <Smartphone className="w-5 h-5 text-primary" />
                Quick IMEI Check
              </CardTitle>
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
              <span>Always check the IMEI number before buying any used phone - takes 3 seconds</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
              <span>SafeOrStolen checks 100+ databases including carrier blacklists and police records</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
              <span>A blacklisted phone cannot be activated - you'll lose your money</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
              <span>Download the SafeOrStolen app to verify phones on the spot at meetups</span>
            </li>
          </ul>
        </section>

        {/* Step by Step Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Step-by-Step: Check if a Phone is Stolen</h2>
          
          <div className="space-y-8">
            {/* Step 1 */}
            <Card id="step-1">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">Get the Phone's IMEI Number</h3>
                    <p className="text-muted-foreground mb-4">
                      Before meeting the seller, ask for the phone's IMEI number. This is a unique 15-digit identifier for every phone. There are several ways to find it:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-secondary/50 p-4 rounded-lg">
                        <Phone className="w-6 h-6 text-primary mb-2" />
                        <p className="font-medium">Dial *#06#</p>
                        <p className="text-sm text-muted-foreground">Works on any phone - displays IMEI instantly</p>
                      </div>
                      <div className="bg-secondary/50 p-4 rounded-lg">
                        <Settings className="w-6 h-6 text-primary mb-2" />
                        <p className="font-medium">Phone Settings</p>
                        <p className="text-sm text-muted-foreground">iPhone: Settings &gt; General &gt; About</p>
                      </div>
                      <div className="bg-secondary/50 p-4 rounded-lg">
                        <List className="w-6 h-6 text-primary mb-2" />
                        <p className="font-medium">Original Box</p>
                        <p className="text-sm text-muted-foreground">Printed on the barcode label</p>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-destructive/10 rounded-lg flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <p className="text-sm"><strong>Red Flag:</strong> If the seller refuses to provide the IMEI, do not proceed with the purchase. This is a major warning sign.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card id="step-2">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">Enter IMEI in SafeOrStolen</h3>
                    <p className="text-muted-foreground mb-4">
                      Enter the 15-digit IMEI number in SafeOrStolen's free verification tool. You can do this:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2">On the Web</h4>
                        <p className="text-sm text-muted-foreground mb-3">Use the checker on this page or visit safeorstolen.com/verify</p>
                        <Button asChild size="sm">
                          <Link to="/verify">Go to Web Checker</Link>
                        </Button>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2">On the App (Recommended)</h4>
                        <p className="text-sm text-muted-foreground mb-3">Check on the spot when meeting sellers. SafeOrStolen is the ONLY stolen phone checker with a mobile app.</p>
                        <Button asChild size="sm" variant="outline">
                          <Link to="/app">
                            <Download className="w-4 h-4 mr-2" />
                            Download App
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card id="step-3">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">Review Verification Results</h3>
                    <p className="text-muted-foreground mb-4">
                      SafeOrStolen checks 100+ databases in 3 seconds and returns one of these results:
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-green-50 dark:bg-green-950/20 border-green-200 border rounded-lg p-4">
                        <CheckCircle className="w-8 h-8 text-green-500 mb-2" />
                        <p className="font-medium text-green-700 dark:text-green-400">Clean / Safe</p>
                        <p className="text-sm text-muted-foreground">Phone is not reported stolen or blacklisted. Safe to buy.</p>
                      </div>
                      <div className="bg-red-50 dark:bg-red-950/20 border-red-200 border rounded-lg p-4">
                        <XCircle className="w-8 h-8 text-red-500 mb-2" />
                        <p className="font-medium text-red-700 dark:text-red-400">Stolen / Blacklisted</p>
                        <p className="text-sm text-muted-foreground">Phone is reported stolen or on carrier blacklist. DO NOT BUY.</p>
                      </div>
                      <div className="bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 border rounded-lg p-4">
                        <AlertTriangle className="w-8 h-8 text-yellow-500 mb-2" />
                        <p className="font-medium text-yellow-700 dark:text-yellow-400">Financed / Pending</p>
                        <p className="text-sm text-muted-foreground">Phone has unpaid balance. May be blacklisted later.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card id="step-4">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">Check for Activation Locks</h3>
                    <p className="text-muted-foreground mb-4">
                      Even if the IMEI is clean, check for activation locks that could prevent you from using the phone:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2">iPhone (iCloud Lock)</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Go to Settings &gt; Apple ID</li>
                          <li>• Ensure they sign out of their Apple ID</li>
                          <li>• Check Find My iPhone is OFF</li>
                          <li>• Factory reset should complete without prompts</li>
                        </ul>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-medium mb-2">Android (Google FRP)</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Go to Settings &gt; Accounts</li>
                          <li>• Remove all Google accounts</li>
                          <li>• Factory reset should complete without Google prompts</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 5 */}
            <Card id="step-5">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">5</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">Inspect the Physical Phone at Meetup</h3>
                    <p className="text-muted-foreground mb-4">
                      When you meet the seller, complete these final verification steps:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Eye className="w-5 h-5 text-primary mt-0.5" />
                        <span>Dial *#06# to confirm IMEI matches what you checked</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Eye className="w-5 h-5 text-primary mt-0.5" />
                        <span>Check for signs of tampering (scratches around SIM tray, screen bubbles)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Eye className="w-5 h-5 text-primary mt-0.5" />
                        <span>Test all functions: screen, speakers, camera, buttons, ports</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Eye className="w-5 h-5 text-primary mt-0.5" />
                        <span>Insert your SIM card to verify it activates on your carrier</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              { q: "How can I check if a phone is stolen for free?", a: "Use SafeOrStolen's free IMEI checker. Enter the 15-digit IMEI number and we'll verify against 100+ databases. You get 2 free checks, no credit card required." },
              { q: "Where do I find the IMEI number on a phone?", a: "Dial *#06# to display the IMEI. On iPhone: Settings > General > About. On Android: Settings > About Phone > Status. It's also on the original box or SIM tray." },
              { q: "What happens if I buy a stolen phone?", a: "A stolen phone may be reported to police, who can confiscate it. The phone may also be blacklisted, preventing activation on any carrier network. You lose your money and the phone." },
              { q: "Can a stolen phone be unlocked?", a: "No legitimate service can unlock a stolen phone. The IMEI remains blacklisted regardless of carrier unlock. iCloud/Google locks cannot be bypassed without original owner's credentials." },
              { q: "Is it illegal to buy a stolen phone?", a: "Knowingly buying stolen property is illegal. Even accidental purchase can result in losing the phone to police. Always verify with SafeOrStolen before buying." }
            ].map((faq, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-primary/10 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Check a Phone?</h2>
          <p className="text-muted-foreground mb-6">Protect yourself from buying stolen phones. Verify in 3 seconds.</p>
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
          <h2 className="text-xl font-semibold mb-4">Related Guides</h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/stolen-phone-checker" className="text-primary hover:underline">Stolen Phone Checker</Link>
            <span>•</span>
            <Link to="/imei-checker" className="text-primary hover:underline">IMEI Checker</Link>
            <span>•</span>
            <Link to="/phone-blacklist-check" className="text-primary hover:underline">Phone Blacklist Check</Link>
            <span>•</span>
            <Link to="/facebook-marketplace-safety" className="text-primary hover:underline">Facebook Marketplace Safety</Link>
            <span>•</span>
            <Link to="/how-to-check-if-car-stolen" className="text-primary hover:underline">How to Check if Car is Stolen</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowToCheckIfPhoneStolenPage;
