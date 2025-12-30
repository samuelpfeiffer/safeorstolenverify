import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, CheckCircle, XCircle, Download, User, MapPin, CreditCard, MessageSquare, Smartphone, Lock, Eye } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import { HomeSearchFormWithURL } from '@/components/home/HomeSearchFormWithURL';

const IPhoneIMEICheck = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can a stolen iPhone be unlocked?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. iPhones with Activation Lock cannot be unlocked without the original owner's Apple ID and password. Even jailbreaking doesn't remove Activation Lock. An Activation Locked iPhone is essentially an expensive paperweight."
        }
      },
      {
        "@type": "Question",
        "name": "What if the seller won't show me the IMEI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Walk away immediately. This is a massive red flag. Legitimate sellers have nothing to hide and will show the IMEI. If they say 'I don't know how' offer to walk them through dialing *#06#. If they refuse, don't buy from them."
        }
      },
      {
        "@type": "Question",
        "name": "Is this IMEI check really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! First 2 IMEI checks are completely free with no credit card required. Instant results in 2-3 seconds checking 100+ databases."
        }
      },
      {
        "@type": "Question",
        "name": "What does blacklisted mean for an iPhone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Blacklisted means the phone's IMEI has been reported to wireless carriers and cannot be activated on any network. This happens when a phone is reported stolen, has an insurance claim filed, or has unpaid bills. Blacklisting is permanent."
        }
      },
      {
        "@type": "Question",
        "name": "How do I find the IMEI on an iPhone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dial *#06# on the phone to display the IMEI. You can also find it in Settings > General > About, on the SIM tray, or on the original box."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Check If an iPhone Is Stolen Before Buying",
    "description": "Step-by-step guide to verify an iPhone isn't stolen before purchasing on Facebook Marketplace, Craigslist, or any private sale.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Get the IMEI from the seller",
        "text": "Ask the seller to send a screenshot from Settings > General > About showing the IMEI, or ask them to dial *#06# and send the number."
      },
      {
        "@type": "HowToStep",
        "name": "Enter the IMEI in SafeOrStolen",
        "text": "Paste the 15-digit IMEI into the checker at safeorstolen.com. Takes 2 seconds."
      },
      {
        "@type": "HowToStep",
        "name": "Review the results",
        "text": "SAFE ✅ means proceed with meeting. STOLEN ❌ means walk away and report the listing."
      },
      {
        "@type": "HowToStep",
        "name": "Verify at meetup",
        "text": "At the meetup, dial *#06# yourself to confirm the IMEI matches what the seller sent. Check there's no Activation Lock."
      }
    ]
  };

  return (
    <>
      <PageSEO
        title="Is This iPhone Stolen? How to Check Before Buying | SafeOrStolen"
        description="Buying a used iPhone? Check if it's stolen before you pay. Free IMEI verification in 2 seconds. Works for Facebook Marketplace, Craigslist, eBay. Protect yourself from stolen phones."
        keywords="is this iphone stolen, how to check if iphone is stolen, check iphone before buying, is my iphone stolen, iphone blacklist check, facebook marketplace iphone stolen, buying used iphone what to check, imei stolen check free"
        canonical="/check-iphone"
        structuredData={[faqSchema, howToSchema]}
      />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Protect Yourself Before Buying</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Is This iPhone Stolen? Check Before You Buy
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              That $300 iPhone deal on Facebook Marketplace could be stolen property. Check the IMEI before you meet the seller — 
              it takes <strong>2 seconds</strong> and could save you from losing your money AND facing criminal charges.
            </p>

            {/* Search Form */}
            <div className="max-w-2xl mx-auto mb-8">
              <HomeSearchFormWithURL />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="outline">
                <Link to="/app">
                  <Download className="w-4 h-4 mr-2" />
                  Download App
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 px-4 bg-muted/30 border-y">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-primary">1.2M+</p>
                <p className="text-sm text-muted-foreground">iPhones Stolen Yearly</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-primary">2 sec</p>
                <p className="text-sm text-muted-foreground">To Check IMEI</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-primary">Free</p>
                <p className="text-sm text-muted-foreground">First 2 Checks</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-primary">$800+</p>
                <p className="text-sm text-muted-foreground">Average Loss Avoided</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Check Section */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">How Do I Know If an iPhone Is Stolen?</h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Every iPhone has a unique 15-digit serial number (also called IMEI). When an iPhone gets stolen, 
              the owner reports it and the number goes into blacklist databases. If you buy that iPhone, 
              it won't work on any carrier — and police can take it from you. Our free checker lets you 
              verify the iPhone isn't stolen before you hand over your cash.
            </p>

            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <Card className="border-primary/20">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">1. Ask for IMEI</h3>
                  <p className="text-sm text-muted-foreground">
                    "Can you send me the IMEI?" (Or dial *#06# on the iPhone)
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">2. Enter Above</h3>
                  <p className="text-sm text-muted-foreground">
                    Paste the 15-digit number. Takes 2 seconds.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">3. See Results</h3>
                  <p className="text-sm text-muted-foreground">
                    SAFE ✅ or STOLEN ❌ — know instantly.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardContent className="pt-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">4. Buy Safe</h3>
                  <p className="text-sm text-muted-foreground">
                    If safe, meet seller. If stolen, walk away and report.
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="text-muted-foreground text-center">
              We check Apple's blacklist, carrier databases (AT&T, Verizon, T-Mobile), police stolen phone records, 
              and insurance claims. All in 2 seconds. If the iPhone is stolen, you'll know before you waste time meeting a scammer.
            </p>
          </div>
        </section>

        {/* What Happens If You Buy Stolen */}
        <section className="py-12 px-4 bg-destructive/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What Happens If I Buy a Stolen iPhone?</h2>
            
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Buying a stolen iPhone — even if you didn't know it was stolen — has serious consequences:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: XCircle, title: "Police confiscate it", desc: "You lose the phone AND your money with no refund" },
                { icon: AlertTriangle, title: "It's a crime", desc: "Receiving stolen property is illegal in all 50 states" },
                { icon: Lock, title: "Phone won't work", desc: "Carriers blacklist stolen iPhones — can't connect to any network" },
                { icon: Smartphone, title: "iCloud lock", desc: "Original owner can remotely lock it, making it a useless brick" },
                { icon: User, title: "Seller disappears", desc: "Private sellers don't offer refunds, they just block you" },
                { icon: Shield, title: "No insurance", desc: "Your insurance won't cover stolen property you bought" },
                { icon: AlertTriangle, title: "Criminal record", desc: "Charges show up on background checks" },
                { icon: CreditCard, title: "Total loss", desc: "You paid for a phone you can't use and can't sell" }
              ].map((item, i) => (
                <Card key={i} className="border-destructive/20">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <item.icon className="w-5 h-5 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Real Story Section */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Real Story: How Sarah Avoided a Stolen iPhone</h2>
            
            <Card className="bg-primary/5 border-primary/20 mb-8">
              <CardContent className="pt-6">
                <div className="space-y-4 text-muted-foreground">
                  <p><strong>The Listing:</strong> iPhone 14 Pro 256GB — $425 on Facebook Marketplace</p>
                  <p><strong>Seller:</strong> "Mike" — account 2 years old, 5 friends, no reviews</p>
                  <p><strong>Story:</strong> "Wife upgraded, selling her old phone, need gone today"</p>
                  
                  <div className="border-t border-border pt-4 mt-4">
                    <p className="font-semibold text-foreground mb-2">Red Flags Sarah Noticed:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Price was $400+ below market ($900+ retail)</li>
                      <li>Only 5 friends on 2-year-old account</li>
                      <li>No Marketplace reviews</li>
                      <li>"Need gone today" urgency</li>
                    </ul>
                  </div>

                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground mb-2">What Sarah Did:</p>
                    <p>Before agreeing to meet, Sarah asked: "Can you send me a screenshot of Settings &gt; General &gt; About with the serial number?"</p>
                    <p className="mt-2">Mike replied with a photo showing: IMEI: 356938035643809</p>
                    <p className="mt-2">Sarah entered the IMEI into SafeOrStolen...</p>
                    <p className="mt-2 text-lg font-bold text-destructive">Result: ❌ REPORTED STOLEN — Los Angeles, CA — October 2024</p>
                  </div>

                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground mb-2">What Happened Next:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Sarah messaged: "Actually, I found another one. Thanks anyway."</li>
                      <li>Sarah blocked the seller</li>
                      <li>Sarah reported the listing to Facebook</li>
                      <li className="text-green-600 font-medium">Sarah saved $425 + avoided legal trouble</li>
                    </ul>
                  </div>

                  <div className="border-t border-border pt-4 bg-green-500/10 rounded-lg p-4 mt-4">
                    <p className="font-semibold text-foreground mb-2">Three Weeks Later:</p>
                    <p>Sarah found a legitimate iPhone 14 Pro for $650 from a verified seller with original box and receipt. 
                    Checked it — came back CLEAN. She bought it and uses it today.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <blockquote className="border-l-4 border-primary pl-6 py-4 bg-muted/30 rounded-r-lg">
              <p className="text-lg italic text-muted-foreground mb-2">
                "$5 saved me from a $425 mistake and potential criminal charges. ALWAYS check the IMEI before buying. No exceptions."
              </p>
              <cite className="text-sm font-medium">— Sarah M., Chicago</cite>
            </blockquote>
          </div>
        </section>

        {/* How to Verify on Facebook Marketplace */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">How to Verify iPhone on Facebook Marketplace</h2>
            
            <p className="text-lg text-muted-foreground mb-8 text-center">
              Facebook Marketplace is the #1 place people buy used iPhones — and the #1 place thieves sell stolen iPhones.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Before Messaging */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Before Messaging Seller</h3>
                
                <Card className="mb-4">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <User className="w-5 h-5 text-primary" />
                      Check Seller's Profile
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm text-green-600">✓ How long on Facebook? (older = better)</p>
                      <p className="text-sm text-green-600">✓ How many friends? (more = better)</p>
                      <p className="text-sm text-green-600">✓ Marketplace rating? (4.5+ stars)</p>
                      <p className="text-sm text-green-600">✓ How many reviews? (10+ is good)</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-destructive flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Red Flags
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm text-destructive">❌ Account created recently (&lt; 3 months)</p>
                      <p className="text-sm text-destructive">❌ Very few friends (&lt; 50)</p>
                      <p className="text-sm text-destructive">❌ No Marketplace reviews</p>
                      <p className="text-sm text-destructive">❌ Generic profile (stock photo, no posts)</p>
                      <p className="text-sm text-destructive">❌ Price 50%+ below market</p>
                      <p className="text-sm text-destructive">❌ "Urgency" language ("need gone today")</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* When Messaging */}
              <div>
                <h3 className="text-xl font-semibold mb-4">When Messaging Seller</h3>
                
                <Card className="mb-4">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-primary" />
                      Ask These Questions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="list-decimal pl-4 space-y-2 text-sm text-muted-foreground">
                      <li>"Can you send screenshot of Settings &gt; General &gt; About with IMEI?"</li>
                      <li>"Do you have original box and receipt?"</li>
                      <li>"Why are you selling?"</li>
                      <li>"Can you meet at [local police station] parking lot?"</li>
                    </ol>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-2 gap-4">
                  <Card className="border-green-500/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm text-green-600">Legitimate Seller Says:</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-muted-foreground space-y-1">
                      <p>"Sure, here's the IMEI"</p>
                      <p>"Yes, I have the box"</p>
                      <p>"Upgrading to iPhone 15"</p>
                      <p>"Police station works"</p>
                    </CardContent>
                  </Card>

                  <Card className="border-destructive/20">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm text-destructive">Scammer Says:</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-muted-foreground space-y-1">
                      <p>"Phone is reset, can't access"</p>
                      <p>"Lost the box"</p>
                      <p>"Need cash fast"</p>
                      <p>"Police station too far"</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meeting Safety */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Safe Meeting Checklist</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Where to Meet
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p className="text-green-600">✓ Police station parking lot</p>
                    <p className="text-green-600">✓ Apple Store</p>
                    <p className="text-green-600">✓ Bank lobby (has cameras)</p>
                    <p className="text-green-600">✓ Busy Starbucks</p>
                    <div className="border-t pt-2 mt-2">
                      <p className="text-destructive">❌ Their house</p>
                      <p className="text-destructive">❌ Your house</p>
                      <p className="text-destructive">❌ Parking lot at night</p>
                      <p className="text-destructive">❌ Empty "halfway point"</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    What to Check
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal pl-4 space-y-2 text-sm text-muted-foreground">
                    <li>Power on phone</li>
                    <li>Dial *#06# — IMEI matches?</li>
                    <li>Start setup — no Activation Lock?</li>
                    <li>Insert your SIM — gets signal?</li>
                    <li>Physical condition matches listing?</li>
                    <li>Box IMEI matches phone?</li>
                  </ol>
                  <p className="text-sm font-medium text-destructive mt-4">If ANY fail → walk away</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-primary" />
                    Safe Payment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p className="text-green-600">✓ PayPal Goods & Services</p>
                    <p className="text-green-600">✓ Credit card</p>
                    <p className="text-green-600">✓ Cash (if everything checks out)</p>
                    <div className="border-t pt-2 mt-2">
                      <p className="text-destructive">❌ Venmo (no protection)</p>
                      <p className="text-destructive">❌ Cash App (no protection)</p>
                      <p className="text-destructive">❌ Zelle (no protection)</p>
                      <p className="text-destructive">❌ Wire transfer (never!)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Common Scams */}
        <section className="py-12 px-4 bg-destructive/5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Common iPhone Scams to Avoid</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: '"It\'s My Dad\'s Old Phone"',
                  what: "Can't unlock it, don't know the password",
                  why: "Can't remove Activation Lock without previous owner's Apple ID. Phone is useless.",
                  action: "Walk away immediately"
                },
                {
                  title: '"Already Factory Reset"',
                  what: "Can't show IMEI in settings because it's reset",
                  why: "They CAN dial *#06# even on locked screen. They're hiding something.",
                  action: "Don't even meet them"
                },
                {
                  title: 'The "Swap" Scam',
                  what: "Seller says 'Let me wipe it for you' after you check",
                  why: "They swap with an identical stolen/broken phone while 'wiping'",
                  action: "Don't let phone out of sight. Check IMEI again after any 'wipe'"
                },
                {
                  title: '"Blacklisted But Can Be Unlocked"',
                  what: "I know a guy who can unlock it for $50",
                  why: "Cannot unlock blacklisted phones. It's permanent.",
                  action: "Don't buy blacklisted phones. Period."
                },
                {
                  title: 'Fake Payment Confirmation',
                  what: "Shows fake PayPal 'payment received' screenshot",
                  why: "Screenshot is faked. Payment never sent.",
                  action: "Open YOUR PayPal app to verify. Don't trust screenshots."
                },
                {
                  title: 'The "Remote Lock" Scam',
                  what: "Phone works for 1-2 days, then gets locked",
                  why: "Original owner remotely locks via Find My after you buy",
                  action: "Make seller remove from iCloud IN FRONT OF YOU"
                }
              ].map((scam, i) => (
                <Card key={i} className="border-destructive/20">
                  <CardHeader>
                    <CardTitle className="text-lg text-destructive">{scam.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm"><strong>What they say:</strong> {scam.what}</p>
                    <p className="text-sm text-muted-foreground"><strong>Why it's a scam:</strong> {scam.why}</p>
                    <p className="text-sm text-green-600 font-medium"><strong>What to do:</strong> {scam.action}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "Can a stolen iPhone be unlocked?",
                  a: "No. iPhones with Activation Lock cannot be unlocked without the original owner's Apple ID and password. Jailbreaking doesn't remove Activation Lock. 'IMEI unlocking services' are scams. Apple will not unlock it. An Activation Locked iPhone is an expensive paperweight."
                },
                {
                  q: "What if the seller won't show me the IMEI?",
                  a: "Walk away immediately. This is a massive red flag. Legitimate sellers have nothing to hide. If they say 'I don't know how,' offer to walk them through dialing *#06#. If they still refuse, the phone is 100% stolen or has issues."
                },
                {
                  q: "Is this IMEI check really free?",
                  a: "Yes! First 2 IMEI checks are completely free. No credit card required. Instant results in 2-3 seconds. We check 100+ databases including Apple iCloud, carrier blacklists, and police records."
                },
                {
                  q: "What does 'blacklisted' mean?",
                  a: "Blacklisted means the phone's IMEI has been reported to wireless carriers and cannot be activated on any network. This happens when a phone is reported stolen, has an insurance claim filed, or has unpaid bills. Blacklisting is permanent — the phone essentially becomes a WiFi-only device."
                },
                {
                  q: "How do I find the IMEI on an iPhone?",
                  a: "Dial *#06# on the phone to display the IMEI (works even on lock screen). You can also find it in Settings > General > About, on the SIM card tray, or on the original box."
                },
                {
                  q: "What if check says SAFE but phone is actually stolen?",
                  a: "Rare but possible if the phone was stolen within the last 24 hours and not yet reported, or if the seller plans to report it stolen after you buy (insurance fraud). Protect yourself by meeting at a police station, getting seller's ID, and paying with PayPal Goods & Services for buyer protection."
                },
                {
                  q: "What should I do if IMEI shows STOLEN?",
                  a: "DO NOT buy the phone. Message seller 'Found another phone, thanks anyway.' Block the seller. Report the listing to Facebook/Craigslist. Don't tell them you checked the IMEI or accuse them of theft — this could be a safety risk."
                },
                {
                  q: "Will checking the IMEI alert the owner?",
                  a: "No. Checking IMEI is completely anonymous and passive. The owner is not notified, there's no record of who checked, and the seller won't know you checked. Your privacy is protected."
                }
              ].map((faq, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.q}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Check Before You Pay</h2>
            <p className="text-lg opacity-90 mb-8">
              Don't become another victim. Enter the iPhone's IMEI and know if it's stolen in 2 seconds. It's free.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <a href="#top">Check iPhone IMEI Now</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/app">Download Mobile App</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-12 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Related Guides</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <Link to="/check-samsung-phone" className="block p-4 bg-card border rounded-lg hover:border-primary transition-colors">
                <p className="font-medium">Is This Samsung Stolen?</p>
                <p className="text-sm text-muted-foreground">Check Galaxy phones</p>
              </Link>
              <Link to="/facebook-marketplace-stolen-check" className="block p-4 bg-card border rounded-lg hover:border-primary transition-colors">
                <p className="font-medium">Facebook Marketplace Safety</p>
                <p className="text-sm text-muted-foreground">Complete buyer guide</p>
              </Link>
              <Link to="/check-car" className="block p-4 bg-card border rounded-lg hover:border-primary transition-colors">
                <p className="font-medium">Is This Car Stolen?</p>
                <p className="text-sm text-muted-foreground">VIN verification</p>
              </Link>
              <Link to="/craigslist-safety-verification" className="block p-4 bg-card border rounded-lg hover:border-primary transition-colors">
                <p className="font-medium">Craigslist Safety</p>
                <p className="text-sm text-muted-foreground">Protect yourself</p>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default IPhoneIMEICheck;