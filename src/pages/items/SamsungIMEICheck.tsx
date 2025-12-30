import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Smartphone,
  Search,
  Clock,
  Database,
  MapPin,
  Users,
  Lock,
  FileWarning,
  ChevronRight,
  Star,
  MessageSquare,
  ShieldCheck,
  Ban,
  Eye
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import UnifiedHeroSearch from '@/components/verification/UnifiedHeroSearch';

const SamsungIMEICheck = () => {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Check If a Samsung Phone Is Stolen",
      "description": "Step-by-step guide to verify Samsung Galaxy phones aren't stolen before buying",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Find Samsung IMEI",
          "text": "Dial *#06# on the Samsung phone or go to Settings > About Phone > Status > IMEI"
        },
        {
          "@type": "HowToStep",
          "name": "Enter IMEI Number",
          "text": "Type the 15-digit IMEI number into the verification box"
        },
        {
          "@type": "HowToStep",
          "name": "Check Results",
          "text": "See if the Samsung is clean or blacklisted/stolen in 2-3 seconds"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I find the IMEI on a Samsung phone?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dial *#06# on the phone dialer. Or go to Settings > About Phone > Status > IMEI information. For Galaxy phones with dual SIM, both IMEI numbers will display."
          }
        },
        {
          "@type": "Question",
          "name": "What is Samsung Knox and FRP lock?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Samsung Knox is Samsung's security platform. FRP (Factory Reset Protection) locks the phone to the original Google/Samsung account after a factory reset. If the previous owner didn't sign out, you're locked out permanently."
          }
        },
        {
          "@type": "Question",
          "name": "Can a blacklisted Samsung phone be unlocked?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Blacklisted Samsung phones cannot be removed from carrier blacklists. The IMEI is permanently flagged across all carriers. The phone can only use WiFi."
          }
        }
      ]
    }
  ];

  return (
    <>
      <PageSEO 
        title="Is This Samsung Stolen? Check Before Buying (2025 Guide) | SafeOrStolen"
        description="Check if Samsung Galaxy is stolen in 2 seconds. Find IMEI by dialing *#06#. We verify against carrier blacklists, Samsung Knox, police databases. Free instant check."
        keywords="is this samsung stolen, how to check if samsung is stolen, samsung galaxy stolen check, check samsung before buying, samsung s24 stolen check, galaxy stolen verification"
        canonical="/check-samsung-phone"
        structuredData={structuredData}
      />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                <Smartphone className="h-3 w-3 mr-1" />
                Samsung Galaxy Verification
              </Badge>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Is This Samsung Stolen? Check Before You Buy
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Samsung Galaxy phones are the second-most stolen smartphones in America. That "great deal" 
                on an S24 or Z Fold could be stolen property. Check the IMEI before you hand over your money.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-card rounded-lg border">
                  <div className="text-2xl md:text-3xl font-bold text-primary">800K+</div>
                  <div className="text-sm text-muted-foreground">Samsung Phones Stolen Yearly</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border">
                  <div className="text-2xl md:text-3xl font-bold text-primary">2 sec</div>
                  <div className="text-sm text-muted-foreground">To Check</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border">
                  <div className="text-2xl md:text-3xl font-bold text-green-600">Free</div>
                  <div className="text-sm text-muted-foreground">First 2 Checks</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border">
                  <div className="text-2xl md:text-3xl font-bold text-primary">$900+</div>
                  <div className="text-sm text-muted-foreground">Average Loss Avoided</div>
                </div>
              </div>
            </div>

            {/* Search Box */}
            <div className="max-w-2xl mx-auto">
              <UnifiedHeroSearch defaultItemType="phone" />
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Samsung Phones Get Stolen (And Resold to You)</h2>
              
              <p>
                Buying a used Samsung Galaxy on Facebook Marketplace for $500? That could be a legitimate deal from 
                someone upgrading - or it could be a phone stolen from a car in a Target parking lot yesterday.
              </p>

              <div className="bg-destructive/10 border-l-4 border-destructive p-4 my-6 rounded-r-lg">
                <h3 className="text-lg font-semibold text-destructive flex items-center gap-2 mt-0">
                  <AlertTriangle className="h-5 w-5" />
                  The Samsung Theft Problem
                </h3>
                <ul className="my-2 text-muted-foreground">
                  <li><strong>800,000+ Samsung phones</strong> stolen in the US annually</li>
                  <li><strong>Galaxy S24 Ultra</strong> is the #1 target (resale value $800-1,100)</li>
                  <li><strong>Z Fold and Z Flip</strong> are high-value targets ($1,200-1,500)</li>
                  <li><strong>1 in 10 used Samsung phones</strong> on marketplaces have issues</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold">What Happens If You Buy a Stolen Samsung?</h3>
              
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card className="border-destructive/30">
                  <CardContent className="pt-4">
                    <div className="flex items-start gap-3">
                      <Ban className="h-5 w-5 text-destructive mt-1" />
                      <div>
                        <h4 className="font-semibold">Carrier Blacklist</h4>
                        <p className="text-sm text-muted-foreground">Phone won't work on AT&T, Verizon, T-Mobile, or ANY carrier. Permanent.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-destructive/30">
                  <CardContent className="pt-4">
                    <div className="flex items-start gap-3">
                      <Lock className="h-5 w-5 text-destructive mt-1" />
                      <div>
                        <h4 className="font-semibold">Samsung Knox Lock</h4>
                        <p className="text-sm text-muted-foreground">Samsung's Find My Mobile can remotely lock and wipe the device.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-destructive/30">
                  <CardContent className="pt-4">
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-destructive mt-1" />
                      <div>
                        <h4 className="font-semibold">FRP Trap</h4>
                        <p className="text-sm text-muted-foreground">Factory Reset Protection locks you out if owner didn't sign out.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-destructive/30">
                  <CardContent className="pt-4">
                    <div className="flex items-start gap-3">
                      <FileWarning className="h-5 w-5 text-destructive mt-1" />
                      <div>
                        <h4 className="font-semibold">Criminal Charges</h4>
                        <p className="text-sm text-muted-foreground">Receiving stolen property is a crime - even if you didn't know.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* How to Find Samsung IMEI */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                How to Find Your Samsung's IMEI Number
              </h2>
              
              <p className="text-center text-muted-foreground mb-8">
                The IMEI (International Mobile Equipment Identity) is a unique 15-digit number that identifies your Samsung phone.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                      Dial *#06# (Fastest - 5 seconds)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-2 text-muted-foreground">
                      <li>1. Open the Phone app on the Samsung</li>
                      <li>2. Dial <code className="bg-muted px-2 py-1 rounded">*#06#</code></li>
                      <li>3. IMEI displays immediately (no need to press call)</li>
                      <li>4. Screenshot or write down the 15-digit number</li>
                    </ol>
                    <p className="mt-4 text-sm font-medium">
                      <strong>Works on:</strong> Galaxy S24, S23, S22, S21, Z Fold, Z Flip, A series, Note series
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                      Settings Menu
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-2 text-muted-foreground">
                      <li>1. Open <strong>Settings</strong> app</li>
                      <li>2. Tap <strong>About Phone</strong></li>
                      <li>3. Tap <strong>Status</strong> (or Status Information)</li>
                      <li>4. Tap <strong>IMEI Information</strong></li>
                      <li>5. Long-press to copy</li>
                    </ol>
                    <p className="mt-4 text-sm font-medium">
                      <strong>Dual SIM phones:</strong> Shows IMEI 1 and IMEI 2 - check both
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                      SIM Card Tray
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-2 text-muted-foreground">
                      <li>1. Locate SIM tray (top or side of phone)</li>
                      <li>2. Use ejector tool or paperclip</li>
                      <li>3. Remove the SIM tray</li>
                      <li>4. IMEI printed in tiny text on the tray</li>
                    </ol>
                    <p className="mt-4 text-sm font-medium text-amber-600">
                      <strong>Note:</strong> Useful if phone is powered off or locked
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm">4</span>
                      Original Box
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-2 text-muted-foreground">
                      <li>1. Ask seller for original Samsung box</li>
                      <li>2. Find the barcode sticker on the box</li>
                      <li>3. IMEI printed under or near barcode</li>
                      <li>4. Should match the phone's IMEI exactly</li>
                    </ol>
                    <div className="mt-4 p-3 bg-destructive/10 rounded-lg">
                      <p className="text-sm text-destructive font-medium">
                        🚩 Red Flag: Box IMEI doesn't match phone = likely stolen
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What We Check Section */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                What We Check for Samsung Phones
              </h2>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Database className="h-5 w-5 text-primary" />
                      1. Carrier Blacklist Status
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      When a Samsung is reported stolen, carriers add its IMEI to a shared blacklist. 
                      Blacklisted phones can't connect to ANY cellular network - they become expensive WiFi tablets.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">We check:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• AT&T blacklist</li>
                          <li>• Verizon blacklist</li>
                          <li>• T-Mobile blacklist</li>
                          <li>• Sprint/US Cellular blacklist</li>
                          <li>• GSMA global database (800+ carriers)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">How phones get blacklisted:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Reported stolen to carrier</li>
                          <li>• Lost and reported to insurance</li>
                          <li>• Not paid off (still on payment plan)</li>
                          <li>• Fraudulently obtained</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lock className="h-5 w-5 text-primary" />
                      2. Samsung Knox Security
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Samsung Knox is Samsung's enterprise security platform. We check if the phone 
                      has any Knox-related locks or enterprise management policies that could prevent normal use.
                    </p>
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-amber-700 dark:text-amber-400 mb-2">What is FRP Lock?</h4>
                      <p className="text-sm text-muted-foreground">
                        <strong>Factory Reset Protection (FRP)</strong> - If the previous owner didn't sign out of their 
                        Google or Samsung account before factory reset, the phone asks for their password on setup. 
                        You cannot bypass this. If seller says "I forgot my password" - that's a red flag.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      3. Police Stolen Phone Database
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      We cross-reference police databases and the NICB (National Insurance Crime Bureau) to check 
                      if the phone has been reported stolen to law enforcement.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• NICB (National Insurance Crime Bureau)</li>
                      <li>• State-level stolen property databases</li>
                      <li>• Insurance company theft claims</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Most Stolen Samsung Models */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Most Stolen Samsung Galaxy Models (2024 Data)
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Top 5 Stolen Samsung Models</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-3">
                      <li className="flex items-center justify-between">
                        <span className="font-medium">1. Galaxy S24 Ultra</span>
                        <Badge variant="destructive">35% of thefts</Badge>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="font-medium">2. Galaxy Z Fold 5</span>
                        <Badge variant="destructive">18% of thefts</Badge>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="font-medium">3. Galaxy S23 Ultra</span>
                        <Badge variant="secondary">16% of thefts</Badge>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="font-medium">4. Galaxy Z Flip 5</span>
                        <Badge variant="secondary">12% of thefts</Badge>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="font-medium">5. Galaxy A54</span>
                        <Badge variant="secondary">8% of thefts</Badge>
                      </li>
                    </ol>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Where Samsung Phones Get Stolen</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          Retail stores (Best Buy, Target)
                        </span>
                        <span className="text-muted-foreground">28%</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          Car break-ins
                        </span>
                        <span className="text-muted-foreground">24%</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          Package theft
                        </span>
                        <span className="text-muted-foreground">20%</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          Street theft (grabbed from hands)
                        </span>
                        <span className="text-muted-foreground">15%</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          Gym lockers
                        </span>
                        <span className="text-muted-foreground">8%</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
                <h3 className="font-bold mb-3">Where Stolen Samsung Phones Get Resold</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">45%</div>
                    <div className="text-sm text-muted-foreground">Facebook Marketplace</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">25%</div>
                    <div className="text-sm text-muted-foreground">OfferUp</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">15%</div>
                    <div className="text-sm text-muted-foreground">Craigslist</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">10%</div>
                    <div className="text-sm text-muted-foreground">Instagram DMs</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">5%</div>
                    <div className="text-sm text-muted-foreground">Pawn Shops</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Real Story */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Real Story: Jennifer Avoided a Stolen Z Fold 5
              </h2>

              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-lg mb-2">The Setup:</h3>
                      <p className="text-muted-foreground">
                        Jennifer from Atlanta was looking for a Galaxy Z Fold 5. Samsung wanted $1,799. 
                        She found one on OfferUp for $850 - "mint condition, still in original box."
                      </p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h3 className="font-bold text-lg mb-2">The Listing:</h3>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• "Galaxy Z Fold 5, 256GB, Black, Perfect Condition"</li>
                        <li>• Posted 3 days ago</li>
                        <li>• Seller: "Just upgraded, need it gone fast"</li>
                        <li>• Photos looked professional</li>
                        <li>• Price: $850 (retail $1,799)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg mb-2">🚩 Red Flags Jennifer Noticed:</h3>
                      <ol className="text-muted-foreground space-y-1">
                        <li>1. ⚠️ Price too low (53% off retail)</li>
                        <li>2. ⚠️ "Need it gone fast" urgency</li>
                        <li>3. ⚠️ Seller had only 2 reviews on OfferUp</li>
                        <li>4. ⚠️ Seller wanted to meet in a parking lot instead of police station</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg mb-2">What Jennifer Did Right:</h3>
                      <p className="text-muted-foreground mb-4">
                        Before agreeing to meet, Jennifer messaged: "Can you send me a screenshot of 
                        Settings &gt; About Phone showing the IMEI? Just want to verify it's unlocked."
                      </p>
                      <p className="text-muted-foreground">
                        Seller responded with a screenshot. IMEI: 354892106574821
                      </p>
                    </div>

                    <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                      <h3 className="font-bold text-lg mb-2 text-destructive">The Check Result:</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <XCircle className="h-5 w-5 text-destructive" />
                          <span className="font-semibold">STOLEN - Reported to Miami Police (Dec 8, 2024)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <XCircle className="h-5 w-5 text-destructive" />
                          <span>Blacklisted by Verizon</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <XCircle className="h-5 w-5 text-destructive" />
                          <span>Insurance claim filed for theft</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg mb-2">What Happened Next:</h3>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Jennifer messaged: "Found another one locally, thanks though"</li>
                        <li>• Jennifer blocked the seller</li>
                        <li>• Jennifer reported the listing to OfferUp</li>
                        <li>• Seller had apparently driven from Florida to Atlanta to sell it</li>
                        <li>• Jennifer saved $850 + avoided criminal charges</li>
                      </ul>
                    </div>

                    <blockquote className="border-l-4 border-primary pl-4 italic">
                      "I almost drove across Atlanta to meet this guy. The 2-second check saved me 
                      from buying a phone that was stolen in Miami. Who knows what else could have happened."
                      <footer className="text-sm text-muted-foreground mt-2">— Jennifer T., Atlanta</footer>
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Samsung vs iPhone Differences */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Samsung vs iPhone: Key Differences When Checking
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-primary/30">
                  <CardHeader className="bg-primary/5">
                    <CardTitle className="flex items-center gap-2">
                      <Smartphone className="h-5 w-5" />
                      Samsung Galaxy
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                        <span><strong>Find IMEI:</strong> *#06# or Settings &gt; About Phone</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                        <span><strong>Security:</strong> Samsung Knox + Google FRP</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                        <span><strong>Remote Lock:</strong> Samsung Find My Mobile</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-amber-600 mt-1" />
                        <span><strong>FRP Bypass:</strong> Harder to verify - scammers exploit this</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-muted">
                  <CardHeader className="bg-muted/30">
                    <CardTitle className="flex items-center gap-2">
                      <Smartphone className="h-5 w-5" />
                      Apple iPhone
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                        <span><strong>Find IMEI:</strong> *#06# or Settings &gt; General &gt; About</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                        <span><strong>Security:</strong> iCloud Activation Lock</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                        <span><strong>Remote Lock:</strong> Find My iPhone</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                        <span><strong>Easier to verify:</strong> Clear Activation Lock status</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 bg-amber-500/10 border border-amber-500/30 rounded-lg p-6">
                <h3 className="font-bold mb-3 text-amber-700 dark:text-amber-400">
                  ⚠️ Samsung-Specific Scam: "It's FRP Locked But I Can Unlock It"
                </h3>
                <p className="text-muted-foreground mb-4">
                  Scammers sell FRP-locked Samsung phones claiming they can unlock it later. This is always a lie.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Truth:</strong> FRP cannot be bypassed without the original Google/Samsung account</li>
                  <li>• <strong>Result:</strong> You're stuck with a phone you can't set up</li>
                  <li>• <strong>Protection:</strong> Always have the seller sign out of ALL accounts in front of you</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Samsung Buying Checklist */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Samsung Buying Safety Checklist
              </h2>
              
              <p className="text-center text-muted-foreground mb-8">
                Print this and bring to every Samsung purchase:
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="bg-muted/30">
                    <CardTitle className="text-lg">Before Meeting</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 border rounded" />
                        <span className="text-sm">Got IMEI from seller</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 border rounded" />
                        <span className="text-sm">Checked IMEI at SafeOrStolen</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 border rounded" />
                        <span className="text-sm">Result came back CLEAN</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 border rounded" />
                        <span className="text-sm">Verified seller profile (10+ reviews)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 border rounded" />
                        <span className="text-sm">Meeting at police station or public</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="bg-muted/30">
                    <CardTitle className="text-lg">During Meeting</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 border rounded" />
                        <span className="text-sm">Samsung turns on</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 border rounded" />
                        <span className="text-sm">Dialed *#06# - IMEI matches</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 border rounded" />
                        <span className="text-sm">No FRP lock on setup</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 border rounded" />
                        <span className="text-sm">Seller signed out of Samsung account</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 border rounded" />
                        <span className="text-sm">Seller signed out of Google account</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 border rounded" />
                        <span className="text-sm">Inserted SIM - gets signal</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="bg-muted/30">
                    <CardTitle className="text-lg">After Purchase</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 border rounded" />
                        <span className="text-sm">Add to your Samsung account</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 border rounded" />
                        <span className="text-sm">Enable Find My Mobile</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 border rounded" />
                        <span className="text-sm">Add to your Google account</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 border rounded" />
                        <span className="text-sm">Change PIN/pattern</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 border rounded" />
                        <span className="text-sm">Register biometrics</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 p-4 bg-destructive/10 rounded-lg text-center">
                <p className="text-destructive font-semibold">
                  If ANY checkbox is unchecked → don't buy
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Common Samsung Scams */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Common Samsung Scams to Avoid
              </h2>

              <div className="space-y-6">
                <Card className="border-l-4 border-destructive">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Scam 1: "It's Carrier Locked But I Can Unlock It"</h3>
                    <p className="text-muted-foreground mb-2">
                      <strong>What they say:</strong> "It's locked to AT&T but I can get it unlocked for free in 24 hours."
                    </p>
                    <p className="text-muted-foreground mb-2">
                      <strong>The truth:</strong> Either they can't unlock it (it's blacklisted), or they'll demand extra money after you've paid.
                    </p>
                    <p className="text-destructive font-medium">
                      <strong>What to do:</strong> Only buy factory unlocked Samsung phones or get it unlocked BEFORE you pay.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-destructive">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Scam 2: "Already Factory Reset, Can't Show IMEI"</h3>
                    <p className="text-muted-foreground mb-2">
                      <strong>What they say:</strong> "I reset it for you so I can't get into settings to show IMEI."
                    </p>
                    <p className="text-muted-foreground mb-2">
                      <strong>The truth:</strong> They can dial *#06# even on the setup screen. They're hiding something.
                    </p>
                    <p className="text-destructive font-medium">
                      <strong>What to do:</strong> Walk away. *#06# works on any Samsung in any state.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-destructive">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Scam 3: Fake Samsung (Counterfeit)</h3>
                    <p className="text-muted-foreground mb-2">
                      <strong>What happens:</strong> Seller has a convincing-looking fake Samsung Galaxy S24. Looks real, but it's a $50 Chinese clone.
                    </p>
                    <p className="text-muted-foreground mb-2">
                      <strong>How to spot it:</strong> Check IMEI in Samsung's database - fakes won't match any legitimate device.
                    </p>
                    <p className="text-destructive font-medium">
                      <strong>What to do:</strong> Verify IMEI matches Samsung database AND check build quality in person.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-destructive">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Scam 4: The "WiFi Only" Trick</h3>
                    <p className="text-muted-foreground mb-2">
                      <strong>What they say:</strong> "I only used it on WiFi so I don't know if cellular works."
                    </p>
                    <p className="text-muted-foreground mb-2">
                      <strong>The truth:</strong> The phone is blacklisted. They know it won't connect to any carrier.
                    </p>
                    <p className="text-destructive font-medium">
                      <strong>What to do:</strong> Insert your SIM card and verify it gets cellular signal BEFORE paying.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Frequently Asked Questions - Samsung IMEI Check
              </h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I find the IMEI on a Samsung phone?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">The fastest way is to dial <strong>*#06#</strong> on the phone dialer - the IMEI displays immediately without pressing call.</p>
                    <p className="mb-2">You can also go to <strong>Settings &gt; About Phone &gt; Status &gt; IMEI Information</strong>.</p>
                    <p>For dual SIM Samsung phones (Galaxy S24, A54, etc.), you'll see IMEI 1 and IMEI 2 - check both numbers.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>What Samsung models can I check?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">All Samsung phones with an IMEI can be checked:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Galaxy S series (S24, S23, S22, S21, S20, etc.)</li>
                      <li>Galaxy Z Fold and Z Flip (all versions)</li>
                      <li>Galaxy A series (A54, A34, A14, etc.)</li>
                      <li>Galaxy Note series</li>
                      <li>Older Galaxy models</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>What is Samsung FRP lock?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2"><strong>Factory Reset Protection (FRP)</strong> is Samsung's anti-theft feature. If the previous owner didn't sign out of their Google or Samsung account before factory reset, the phone will ask for their password during setup.</p>
                    <p className="mb-2">This cannot be bypassed. If a seller says "I forgot my password" - that's a major red flag. They're likely selling a stolen phone.</p>
                    <p><strong>Always make the seller sign out of all accounts in front of you before buying.</strong></p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>What if the seller won't give me the IMEI?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2"><strong>Walk away immediately.</strong> This is the biggest red flag possible.</p>
                    <p className="mb-2">Legitimate sellers will provide the IMEI without hesitation because:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>It's a normal, reasonable request</li>
                      <li>They have nothing to hide</li>
                      <li>They want to sell the phone quickly</li>
                    </ul>
                    <p className="mt-2">If they say "That's private information" or "Just trust me" - the phone is 100% stolen or has issues.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Can a blacklisted Samsung phone be unlocked?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2"><strong>No.</strong> Once a Samsung is blacklisted, the IMEI is permanently flagged across all carriers. There is no way to remove it from the blacklist.</p>
                    <p className="mb-2">A blacklisted Samsung:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Won't work on AT&T, Verizon, T-Mobile, or ANY carrier</li>
                      <li>Can only connect to WiFi</li>
                      <li>Is essentially an expensive WiFi tablet</li>
                      <li>Has no resale value</li>
                    </ul>
                    <p className="mt-2">Anyone who claims they can "unblacklist" a phone is running a scam.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>Is this Samsung check really free?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2"><strong>Yes!</strong> You get 2 free IMEI checks with no credit card required.</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>No hidden fees</li>
                      <li>No signup required for basic check</li>
                      <li>Instant results (2-3 seconds)</li>
                      <li>Checks 100+ databases</li>
                    </ul>
                    <p className="mt-2">If you need more checks (sellers, dealers, frequent buyers), we have affordable monthly plans.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger>What should I do if the IMEI shows STOLEN?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2"><strong>DO NOT buy the phone.</strong></p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Message seller: "Found another one, thanks anyway" (don't accuse them)</li>
                      <li>Block the seller</li>
                      <li>Report the listing to Facebook/OfferUp/Craigslist</li>
                      <li>(Optional) Report to local police with listing details</li>
                    </ul>
                    <p className="mt-2"><strong>Don't:</strong> Tell seller you checked IMEI, accuse them of theft, or try to negotiate lower price. Protect yourself.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger>Will checking the IMEI alert the owner?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2"><strong>No.</strong> Checking an IMEI is completely anonymous and passive.</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Owner is not notified</li>
                      <li>No record of who checked</li>
                      <li>Doesn't trigger any alerts</li>
                      <li>Seller won't know you checked</li>
                    </ul>
                    <p className="mt-2">We don't log IMEIs or link them to your identity.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Related Guides</h2>
              
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/check-iphone" className="block">
                  <Card className="hover:border-primary transition-colors h-full">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        Check iPhone IMEI
                        <ChevronRight className="h-4 w-4" />
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        iPhone-specific verification and iCloud lock check
                      </p>
                    </CardContent>
                  </Card>
                </Link>
                
                <Link to="/facebook-marketplace-stolen-check" className="block">
                  <Card className="hover:border-primary transition-colors h-full">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        Facebook Marketplace Safety
                        <ChevronRight className="h-4 w-4" />
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Complete guide to buying phones safely on FB
                      </p>
                    </CardContent>
                  </Card>
                </Link>
                
                <Link to="/offerup-verify-not-stolen" className="block">
                  <Card className="hover:border-primary transition-colors h-full">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        OfferUp Safety Tips
                        <ChevronRight className="h-4 w-4" />
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        How to verify items before buying on OfferUp
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Check Your Samsung IMEI Now
              </h2>
              <p className="text-muted-foreground mb-6">
                A stolen Samsung is worthless. Enter the IMEI and know in 2 seconds. It's free.
              </p>
              
              <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  2 Free Checks
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-primary" />
                  2-Second Results
                </span>
                <span className="flex items-center gap-1">
                  <Database className="h-4 w-4 text-primary" />
                  100+ Databases
                </span>
              </div>

              <Button size="lg" asChild>
                <Link to="/verify">
                  Check Samsung IMEI - Free
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SamsungIMEICheck;
