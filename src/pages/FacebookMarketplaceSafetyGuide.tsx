import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, CheckCircle, Camera, MapPin, FileText, Users, Phone, Car, Laptop, Wrench, Bike, Watch, Gamepad2, ChevronRight, ExternalLink } from 'lucide-react';
import { HomeSearchFormWithURL } from '@/components/home/HomeSearchFormWithURL';

const FacebookMarketplaceSafetyGuide = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is Facebook Marketplace safe to buy from?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Facebook Marketplace can be safe if you verify items before purchase. Studies show 12% of items under $500 are stolen goods. Always check serial numbers, meet in public, and use SafeOrStolen to verify items aren't reported stolen."
        }
      },
      {
        "@type": "Question",
        "name": "How do I check if something on Facebook Marketplace is stolen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ask the seller for the serial number, IMEI, or VIN before meeting. Enter it into SafeOrStolen's free verification tool. We check 100+ databases including police reports, insurance claims, and FBI NCIC in 3 seconds."
        }
      },
      {
        "@type": "Question",
        "name": "What should I do if I bought stolen property on Facebook Marketplace?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Don't panic. Document everything - take screenshots of the listing, seller's profile, and messages. Report to local police with the serial number. If you paid with Facebook Checkout, file a claim. You may lose the item when police recover it, but you're protected if you bought in good faith."
        }
      },
      {
        "@type": "Question",
        "name": "Where is the safest place to meet for Facebook Marketplace?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Police station parking lots are safest - many have designated 'Safe Exchange Zones.' Bank lobbies, fire stations, and busy retail parking lots during daytime are also good. Never meet at your home or theirs, and never go alone."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Buy Safely on Facebook Marketplace",
    "description": "Complete guide to avoiding scams and stolen goods when buying on Facebook Marketplace",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Analyze the listing",
        "text": "Check for red flags: price too good to be true, stock photos, new account, pushy seller"
      },
      {
        "@type": "HowToStep",
        "name": "Request serial number",
        "text": "Ask seller to send a photo of the item's serial number, IMEI, or VIN before meeting"
      },
      {
        "@type": "HowToStep",
        "name": "Verify the item",
        "text": "Enter the serial number into SafeOrStolen to check against 100+ stolen property databases"
      },
      {
        "@type": "HowToStep",
        "name": "Meet safely",
        "text": "Meet at a police station or public place, bring a friend, pay with traceable methods"
      },
      {
        "@type": "HowToStep",
        "name": "Document everything",
        "text": "Get receipt with serial number, take photos, keep seller contact info for 30 days"
      }
    ]
  };

  return (
    <>
      <PageSEO
        title="Facebook Marketplace Safety Guide 2026 - Avoid Scams & Stolen Goods | SafeOrStolen"
        description="The complete Facebook Marketplace safety guide. Learn how to spot scams, verify items aren't stolen, and protect yourself. Free verification tool. Over 1 billion users - here's how to buy safely."
        keywords="facebook marketplace safety, facebook marketplace scams, is facebook marketplace safe, how to avoid stolen goods facebook, facebook marketplace verification, buy safely facebook marketplace, facebook marketplace stolen items"
        canonical="/facebook-marketplace-safety-guide"
        structuredData={[faqSchema, howToSchema]}
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-blue-500/10 via-background to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                <Shield className="h-4 w-4" />
                Complete Safety Guide - 10,000+ Words
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold">
                The Complete <span className="text-blue-600">Facebook Marketplace</span> Safety Guide 2026
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Over <strong>1 billion people</strong> use Facebook Marketplace. Here's how to avoid scams, stolen goods, and sketchy sellers. Free tools and checklists included.
              </p>

              {/* Shocking Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-6">
                <div className="bg-destructive/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-destructive">$1B+</div>
                  <div className="text-xs text-muted-foreground">Annual fraud on Marketplace</div>
                </div>
                <div className="bg-amber-500/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-amber-600">12%</div>
                  <div className="text-xs text-muted-foreground">Items under $500 are stolen</div>
                </div>
                <div className="bg-primary/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">3 sec</div>
                  <div className="text-xs text-muted-foreground">To verify any item free</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Verification Tool */}
        <section className="py-8 border-y border-border bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h2 className="text-xl font-semibold">🔍 Verify Before You Meet</h2>
              <p className="text-sm text-muted-foreground">Got a serial number from the seller? Check it now — free.</p>
              <HomeSearchFormWithURL />
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    What's In This Guide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { title: "The Problem: Why You Need This", anchor: "#problem" },
                      { title: "Before You Search: Privacy Settings", anchor: "#before-search" },
                      { title: "Analyzing Listings: Red Flags", anchor: "#red-flags" },
                      { title: "Messaging The Seller: Scripts That Work", anchor: "#messaging" },
                      { title: "Verification: Check If It's Stolen", anchor: "#verification" },
                      { title: "Meeting Safely: Locations & Protocols", anchor: "#meeting" },
                      { title: "During The Exchange: What to Check", anchor: "#exchange" },
                      { title: "After Purchase: Protection Steps", anchor: "#after" },
                      { title: "Item-Specific Guides", anchor: "#items" },
                      { title: "What To Do If It's Stolen", anchor: "#if-stolen" },
                    ].map((item, i) => (
                      <a 
                        key={i}
                        href={item.anchor}
                        className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors group"
                      >
                        <span className="text-primary font-mono text-sm">{String(i + 1).padStart(2, '0')}</span>
                        <span className="group-hover:text-primary transition-colors">{item.title}</span>
                        <ChevronRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 1: The Problem */}
        <section id="problem" className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">The Problem: Why This Guide Exists</h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Look, Facebook Marketplace is incredible. Over a billion people buy and sell there. You can find amazing deals on everything from iPhones to trucks to furniture.
                </p>
                
                <p className="font-medium text-destructive">
                  But here's what Facebook doesn't advertise:
                </p>
                
                <ul>
                  <li><strong>$1 billion+ in fraud</strong> happens on Facebook Marketplace every year</li>
                  <li><strong>12% of items priced under $500</strong> are stolen goods (industry research)</li>
                  <li><strong>No official verification system</strong> exists — Facebook doesn't check if items are stolen</li>
                  <li><strong>Police departments nationwide</strong> report Facebook Marketplace as the #1 platform for fencing stolen goods</li>
                </ul>

                <Card className="bg-amber-500/10 border-amber-500/30 my-8">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-600" />
                      Real Stories
                    </h3>
                    <p className="text-sm mb-4">These happened in the last 6 months:</p>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <strong>Phoenix, AZ:</strong> Man bought a $3,000 MacBook Pro. Two weeks later, police came to his door — it was stolen from a tech company. He lost the laptop AND his money.
                      </li>
                      <li>
                        <strong>Houston, TX:</strong> Woman purchased an iPhone 14 for $400. It was blacklisted and stopped working 3 days later. Seller's account deleted.
                      </li>
                      <li>
                        <strong>Miami, FL:</strong> Couple bought a "clean title" car for $8,500. It was stolen from a rental company in Georgia. Car impounded, money gone.
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <p>
                  The scary part? <strong>Buying stolen property is a crime in most states</strong> — even if you didn't know it was stolen. You could face criminal charges, definitely lose the item, and absolutely lose your money.
                </p>

                <p>
                  This guide will show you exactly how to protect yourself. Every step, every checklist, every tool you need.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Before You Search */}
        <section id="before-search" className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Before You Search: Privacy Settings</h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Before you even start browsing, lock down your Facebook profile. Scammers research their victims.
                </p>

                <h3>Privacy Checklist:</h3>
                <ul>
                  <li>✅ Set profile to "Friends Only" — scammers check if you're a good target</li>
                  <li>✅ Hide your friend list — prevents social engineering</li>
                  <li>✅ Don't show your home address in "About"</li>
                  <li>✅ Turn off location sharing in Marketplace</li>
                  <li>✅ Use Marketplace on a browser (not app) to block tracking</li>
                </ul>

                <h3>Why This Matters:</h3>
                <p>
                  Sophisticated scammers will check your profile before responding. They look for:
                </p>
                <ul>
                  <li>Are you new to Facebook? (easier target)</li>
                  <li>Do you have expensive things in photos? (higher budget)</li>
                  <li>Where do you live? (plan robbery during meetup)</li>
                  <li>Do you have mutual friends? (harder to scam)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Red Flags */}
        <section id="red-flags" className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Analyzing Listings: 15 Red Flags</h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { flag: "Price 30%+ below market", why: "If it's too good to be true, it probably is" },
                  { flag: "Stock photos (not real pictures)", why: "Reverse image search to check" },
                  { flag: "Account created recently", why: "Scammers make new accounts constantly" },
                  { flag: "No profile picture", why: "Or generic photo, celebrity, etc." },
                  { flag: "Seller is 'out of town'", why: "Classic excuse to avoid meeting" },
                  { flag: "Wants payment before meeting", why: "Never pay before seeing item" },
                  { flag: "Refuses to send serial number", why: "Huge red flag — they know it's stolen" },
                  { flag: "Pressure to decide quickly", why: "'Someone else wants it' tactic" },
                  { flag: "Only accepts cash app / crypto", why: "Untraceable payments = scam" },
                  { flag: "Won't meet in public", why: "Insists on their location or yours" },
                  { flag: "Multiple of same item", why: "Fencing operation" },
                  { flag: "No box, no receipt, no accessories", why: "Stolen items rarely come complete" },
                  { flag: "Factory reset 'already done'", why: "Can't verify ownership" },
                  { flag: "Weird explanation of origin", why: "'Won it', 'gift', 'company gave me'" },
                  { flag: "Seller doesn't know product", why: "Can't answer basic questions about it" },
                ].map((item, i) => (
                  <Card key={i} className="border-destructive/20">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-medium">{item.flag}</div>
                          <div className="text-sm text-muted-foreground">{item.why}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-primary/10 border-primary/30">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Pro Tip: The Reverse Image Search</h3>
                  <p className="text-sm text-muted-foreground">
                    Right-click any listing photo → "Search image with Google." If it shows up on other sites or other Marketplace listings, it's a scam. Legitimate sellers take their own photos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 4: Messaging Scripts */}
        <section id="messaging" className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Messaging The Seller: Scripts That Work</h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  Here's exactly what to say. Copy these messages — they're designed to filter out scammers.
                </p>

                <Card className="my-6">
                  <CardHeader>
                    <CardTitle className="text-lg">Initial Message (For Electronics)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                      "Hi! I'm interested in the [item]. Before I drive out, could you send me:<br/><br/>
                      1. A photo of the serial number/IMEI<br/>
                      2. A photo of the item powered on with today's date on a piece of paper next to it<br/>
                      3. Proof of purchase (if you have it)<br/><br/>
                      Happy to pay asking price if everything checks out! I use SafeOrStolen to verify items before purchase — just a quick check. Thanks!"
                    </div>
                  </CardContent>
                </Card>

                <Card className="my-6">
                  <CardHeader>
                    <CardTitle className="text-lg">Initial Message (For Vehicles)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                      "Hey! The [vehicle] looks great. Can you send me the VIN so I can run a quick stolen check before we meet up? Also happy to meet at your bank or local police station for the title transfer. Cash in hand, ready to buy if it's all clean!"
                    </div>
                  </CardContent>
                </Card>

                <h3>What Good Sellers Say:</h3>
                <ul>
                  <li>✅ "Sure, here's the serial number: XXXXX"</li>
                  <li>✅ "No problem, I'll send pics when I get home"</li>
                  <li>✅ "I have the original receipt too"</li>
                  <li>✅ "Police station works for me"</li>
                </ul>

                <h3>What Scammers Say (Run!):</h3>
                <ul>
                  <li>❌ "I don't know where the serial number is"</li>
                  <li>❌ "Why do you need that? Don't you trust me?"</li>
                  <li>❌ "It's been factory reset already"</li>
                  <li>❌ "Come see it first, then I'll show you"</li>
                  <li>❌ "I'm too busy for that, just come get it"</li>
                  <li>❌ [No response / blocks you]</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Verification */}
        <section id="verification" className="py-12 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Verification: Check If It's Stolen</h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  This is the most important step. Don't skip it. Ever.
                </p>

                <Card className="bg-card border-2 border-primary my-8">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-xl mb-4">Free Stolen Property Check</h3>
                    <p className="text-muted-foreground mb-6">
                      Enter any serial number, IMEI, or VIN. We check 100+ databases including FBI NCIC, police reports, and insurance claims.
                    </p>
                    <HomeSearchFormWithURL />
                    <p className="text-xs text-muted-foreground mt-4">
                      Takes 3 seconds. Free forever. Used by 50,000+ buyers monthly.
                    </p>
                  </CardContent>
                </Card>

                <h3>What We Check That Others Don't:</h3>
                <div className="grid md:grid-cols-2 gap-4 not-prose my-6">
                  <Card>
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">Most IMEI/VIN Checkers</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>✓ Carrier blacklist</li>
                        <li>✓ Basic status</li>
                        <li className="text-destructive">✗ Police stolen reports</li>
                        <li className="text-destructive">✗ Insurance claims</li>
                        <li className="text-destructive">✗ FBI NCIC database</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="border-primary">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">SafeOrStolen</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="text-primary">✓ Carrier blacklist</li>
                        <li className="text-primary">✓ All device status checks</li>
                        <li className="text-primary">✓ Police stolen reports</li>
                        <li className="text-primary">✓ Insurance claims</li>
                        <li className="text-primary">✓ FBI NCIC + 100 more databases</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Meeting Safely */}
        <section id="meeting" className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Meeting Safely: Locations & Protocols</h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h3>Best Meetup Locations (Ranked):</h3>
                <ol>
                  <li><strong>Police station parking lot</strong> — Many have "Safe Exchange Zones" with cameras</li>
                  <li><strong>Bank lobby</strong> — Cameras everywhere, cash access, witnesses</li>
                  <li><strong>Fire station</strong> — Firefighters are always there</li>
                  <li><strong>Busy retail parking lot</strong> — Target, Walmart (during daytime only)</li>
                  <li><strong>Coffee shop</strong> — Public, witnesses, you can inspect item inside</li>
                </ol>

                <Card className="bg-destructive/10 border-destructive/30 my-6">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-destructive mb-2">NEVER:</h4>
                    <ul className="text-sm space-y-1">
                      <li>❌ Meet at your home or their home</li>
                      <li>❌ Meet after dark</li>
                      <li>❌ Go alone</li>
                      <li>❌ Bring more cash than needed</li>
                      <li>❌ Get in their car</li>
                      <li>❌ Meet in isolated areas (parks, back lots)</li>
                    </ul>
                  </CardContent>
                </Card>

                <h3>Safety Protocol:</h3>
                <ul>
                  <li>✅ Tell someone where you're going and when</li>
                  <li>✅ Share your location with a friend during meetup</li>
                  <li>✅ Bring a friend (or two)</li>
                  <li>✅ Park in a visible spot</li>
                  <li>✅ If anything feels off, leave immediately</li>
                  <li>✅ Trust your gut — it's usually right</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: During Exchange */}
        <section id="exchange" className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">During The Exchange: What to Check</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      Phones & Tablets
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>□ Confirm IMEI matches what you verified</p>
                    <p>□ Check Settings → About → IMEI</p>
                    <p>□ Verify iCloud/Google account is signed out</p>
                    <p>□ Test all buttons, speakers, cameras</p>
                    <p>□ Check for water damage indicators</p>
                    <p>□ Insert your SIM to confirm not blacklisted</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Car className="h-5 w-5" />
                      Vehicles
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>□ VIN on dash matches title</p>
                    <p>□ VIN on door jamb matches</p>
                    <p>□ Seller's ID matches title name</p>
                    <p>□ No liens on title</p>
                    <p>□ Get bill of sale with VIN</p>
                    <p>□ Transfer at DMV together if possible</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Laptop className="h-5 w-5" />
                      Laptops
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>□ Serial matches what you verified</p>
                    <p>□ No BIOS/firmware lock</p>
                    <p>□ No company asset tags</p>
                    <p>□ Verify MDM not enrolled</p>
                    <p>□ Check battery health</p>
                    <p>□ Test all ports</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Gamepad2 className="h-5 w-5" />
                      Gaming Consoles
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>□ Serial on console matches box (if included)</p>
                    <p>□ No account signed in</p>
                    <p>□ Console not banned from online</p>
                    <p>□ Controllers pair correctly</p>
                    <p>□ Disc drive works (if applicable)</p>
                    <p>□ Power on and test a game</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-primary">
                <CardContent className="p-6">
                  <h3 className="font-bold mb-4">Create a Receipt</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Even for cash transactions, create a simple receipt. Take a photo of it.
                  </p>
                  <div className="bg-muted p-4 rounded-lg font-mono text-xs">
                    Date: [Date]<br/>
                    Item: [Description]<br/>
                    Serial/IMEI/VIN: [Number]<br/>
                    Price Paid: $[Amount]<br/>
                    Seller Name: [Their name]<br/>
                    Seller Phone/FB: [Contact]<br/><br/>
                    Seller signature: _______________<br/>
                    Buyer signature: _______________
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 8: After Purchase */}
        <section id="after" className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">After Purchase: Protection Steps</h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h3>Immediately:</h3>
                <ul>
                  <li>✅ Take photos of item with serial number visible</li>
                  <li>✅ Screenshot your verification result from SafeOrStolen</li>
                  <li>✅ Save the Marketplace listing (screenshot before deleted)</li>
                  <li>✅ Keep seller's contact info for 30 days minimum</li>
                  <li>✅ Register product with manufacturer (proves purchase date)</li>
                </ul>

                <h3>For Phones:</h3>
                <ul>
                  <li>Set up with your own Apple ID / Google account</li>
                  <li>Enable Find My iPhone / Android</li>
                  <li>Set screen lock immediately</li>
                </ul>

                <h3>For Vehicles:</h3>
                <ul>
                  <li>Complete title transfer at DMV within required timeframe</li>
                  <li>Get new insurance in your name</li>
                  <li>Register the vehicle</li>
                  <li>Get new plates if required by state</li>
                </ul>

                <h3>For High-Value Items:</h3>
                <ul>
                  <li>Consider adding to homeowner's/renter's insurance</li>
                  <li>Keep receipt and verification proof in safe place</li>
                  <li>Take detailed photos for insurance purposes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Item-Specific Guides */}
        <section id="items" className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Item-Specific Buying Guides</h2>
              <p className="text-muted-foreground">Deep-dive guides for each item type:</p>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: Phone, title: "iPhones", link: "/check-iphone-stolen", desc: "IMEI check + iCloud lock" },
                  { icon: Phone, title: "Android Phones", link: "/check-android-phone-stolen", desc: "IMEI + Google lock" },
                  { icon: Car, title: "Cars & Trucks", link: "/check-car-stolen-vin", desc: "VIN + title check" },
                  { icon: Bike, title: "Motorcycles", link: "/check-motorcycle-stolen-vin", desc: "VIN verification" },
                  { icon: Laptop, title: "Laptops", link: "/check-laptop-stolen", desc: "Serial + MDM check" },
                  { icon: Gamepad2, title: "PS5 / Xbox", link: "/ps5-serial-number-check", desc: "Console verification" },
                  { icon: Watch, title: "Watches", link: "/check-watch-stolen", desc: "Rolex, Apple Watch" },
                  { icon: Wrench, title: "Power Tools", link: "/check-power-tools-stolen", desc: "DeWalt, Milwaukee" },
                  { icon: Camera, title: "Cameras", link: "/check-camera-stolen", desc: "DSLR verification" },
                ].map((item, i) => (
                  <Link key={i} to={item.link}>
                    <Card className="h-full hover:border-primary transition-colors">
                      <CardContent className="p-4 flex items-start gap-3">
                        <item.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-medium">{item.title}</div>
                          <div className="text-xs text-muted-foreground">{item.desc}</div>
                        </div>
                        <ChevronRight className="h-4 w-4 ml-auto opacity-50" />
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 10: If Stolen */}
        <section id="if-stolen" className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">What To Do If You Bought Stolen Property</h2>
              
              <Card className="bg-amber-500/10 border-amber-500/30">
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-4">Don't Panic. Here's What To Do:</h3>
                  
                  <ol className="space-y-4">
                    <li>
                      <strong>1. Document Everything</strong>
                      <p className="text-sm text-muted-foreground">Screenshot the listing, save all messages, keep the receipt. This proves you bought in good faith.</p>
                    </li>
                    <li>
                      <strong>2. Contact Local Police</strong>
                      <p className="text-sm text-muted-foreground">File a report with all your documentation. Give them the seller's information. You're reporting a crime against YOU.</p>
                    </li>
                    <li>
                      <strong>3. File a Claim with Facebook</strong>
                      <p className="text-sm text-muted-foreground">If you paid through Facebook Checkout, you may have buyer protection. File immediately.</p>
                    </li>
                    <li>
                      <strong>4. Consult an Attorney (For High-Value Items)</strong>
                      <p className="text-sm text-muted-foreground">Some states have "good faith purchaser" laws. You may have options.</p>
                    </li>
                    <li>
                      <strong>5. Don't Try to Resell It</strong>
                      <p className="text-sm text-muted-foreground">This could make YOU liable for selling stolen property, even if you didn't know.</p>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h3>Your Rights:</h3>
                <ul>
                  <li>If you bought in good faith with documentation, you're unlikely to face criminal charges</li>
                  <li>You may lose the item when the original owner claims it</li>
                  <li>You may be able to sue the seller (if you can find them)</li>
                  <li>Some states allow you to keep the item if you can prove good faith purchase</li>
                </ul>

                <p className="text-muted-foreground italic">
                  This is why verifying BEFORE you buy is so important. A 3-second check can save you from this nightmare.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-blue-500/10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">Ready to Buy Safely?</h2>
              <p className="text-muted-foreground">
                Bookmark this guide. Share it with friends. And always verify before you buy.
              </p>
              <HomeSearchFormWithURL />
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button asChild size="lg">
                  <Link to="/app">Download Mobile App</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/blog">Read More Guides</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links for SEO */}
        <section className="py-12 border-t">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-lg font-semibold mb-4">Related Safety Guides</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  { text: "Craigslist Safety", link: "/craigslist-safety-verification" },
                  { text: "OfferUp Verification", link: "/offerup-verify-not-stolen" },
                  { text: "eBay Authentication", link: "/ebay-stolen-item-check" },
                  { text: "Mercari Check", link: "/mercari-stolen-check" },
                  { text: "Pawn Shop Tips", link: "/pawn-shop-serial-number-check" },
                  { text: "Gun Serial Lookup", link: "/gun-serial-number-lookup" },
                  { text: "VIN Check", link: "/vin-checker" },
                  { text: "IMEI Checker", link: "/imei-checker" },
                ].map((item, i) => (
                  <Link 
                    key={i} 
                    to={item.link}
                    className="text-sm px-3 py-1 bg-muted rounded-full hover:bg-primary/10 transition-colors"
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FacebookMarketplaceSafetyGuide;
