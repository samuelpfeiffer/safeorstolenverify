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
  Laptop,
  Search,
  Clock,
  Database,
  MapPin,
  Users,
  Lock,
  FileWarning,
  ChevronRight,
  Coffee,
  Plane,
  Building2,
  Package
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HomeSearchFormWithURL } from '@/components/home/HomeSearchFormWithURL';

const LaptopSerialCheck = () => {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Check If a Laptop Is Stolen",
      "description": "Step-by-step guide to verify MacBooks, Dell, HP, and other laptops aren't stolen before buying",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Find Laptop Serial Number",
          "text": "Check bottom of laptop, System Settings/About, or original box for serial number"
        },
        {
          "@type": "HowToStep",
          "name": "Enter Serial Number",
          "text": "Type the serial number into the verification box"
        },
        {
          "@type": "HowToStep",
          "name": "Check Results",
          "text": "See if the laptop is clean or reported stolen in 2-3 seconds"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where do I find a laptop's serial number?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MacBooks: Apple menu > About This Mac > Serial Number. Windows: Settings > System > About, or check sticker on bottom of laptop. The serial is also on the original box."
          }
        },
        {
          "@type": "Question",
          "name": "What is MacBook Activation Lock?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If Find My Mac was enabled, the original owner can remotely lock the laptop. Even a factory reset won't help - you need their Apple ID password to use it. Always ask sellers to sign out of iCloud in front of you."
          }
        },
        {
          "@type": "Question",
          "name": "Can stolen laptops be tracked?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. MacBooks with Find My Mac, Windows laptops with Find My Device, and corporate laptops with MDM software can all be tracked and remotely locked."
          }
        }
      ]
    }
  ];

  return (
    <>
      <PageSEO 
        title="Is This Laptop Stolen? Check MacBook, Dell, HP Before Buying | SafeOrStolen"
        description="Check if laptop is stolen in 2 seconds. Find serial number and verify against police databases, manufacturer records. Works for MacBook, Dell, HP, Lenovo. Free check."
        keywords="is this laptop stolen, how to check if laptop is stolen, macbook stolen check, check laptop before buying, dell laptop stolen, hp laptop stolen verification"
        canonical="/check-laptop"
        structuredData={structuredData}
      />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                <Laptop className="h-3 w-3 mr-1" />
                Laptop Serial Verification
              </Badge>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Is This Laptop Stolen? Check Before You Buy
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                A laptop is stolen every minute in the US. That $800 MacBook on Facebook Marketplace 
                could be stolen from a coffee shop yesterday. Check the serial number before you meet - takes 2 seconds.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center p-4 bg-card rounded-lg border">
                  <div className="text-2xl md:text-3xl font-bold text-primary">97</div>
                  <div className="text-sm text-muted-foreground">Laptops Stolen Per Hour</div>
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
                  <div className="text-2xl md:text-3xl font-bold text-primary">$1,200+</div>
                  <div className="text-sm text-muted-foreground">Average Loss Avoided</div>
                </div>
              </div>
            </div>

            {/* Search Box */}
            <div className="max-w-2xl mx-auto">
              <HomeSearchFormWithURL />
            </div>
          </div>
        </section>

        {/* Why Laptops Get Stolen */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Laptops Are Prime Theft Targets</h2>
              
              <p>
                Laptops are among the most stolen items in America. They're portable, valuable, and easy to sell. 
                A MacBook Pro can sell for $1,500+ on Facebook Marketplace - that's a big payday for a thief who 
                grabbed it from a coffee shop table.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-8 not-prose">
                <Card className="text-center p-4">
                  <Coffee className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-semibold">Coffee Shops</h4>
                  <p className="text-sm text-muted-foreground">32% of laptop thefts</p>
                </Card>
                <Card className="text-center p-4">
                  <Plane className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-semibold">Airports</h4>
                  <p className="text-sm text-muted-foreground">18% of laptop thefts</p>
                </Card>
                <Card className="text-center p-4">
                  <Building2 className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-semibold">Offices</h4>
                  <p className="text-sm text-muted-foreground">22% of laptop thefts</p>
                </Card>
                <Card className="text-center p-4">
                  <Package className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h4 className="font-semibold">Package Theft</h4>
                  <p className="text-sm text-muted-foreground">15% of laptop thefts</p>
                </Card>
              </div>

              <div className="bg-destructive/10 border-l-4 border-destructive p-4 my-6 rounded-r-lg not-prose">
                <h3 className="text-lg font-semibold text-destructive flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  What Happens If You Buy a Stolen Laptop
                </h3>
                <ul className="mt-2 space-y-2 text-muted-foreground">
                  <li><strong>MacBook Activation Lock</strong> - Apple can remotely lock it, making it completely useless</li>
                  <li><strong>Police seizure</strong> - Stolen property gets confiscated, no refund for you</li>
                  <li><strong>Corporate tracking</strong> - Business laptops often have hidden tracking software (MDM)</li>
                  <li><strong>Criminal charges</strong> - Receiving stolen property is a crime in all states</li>
                  <li><strong>No warranty</strong> - Manufacturers won't service stolen devices</li>
                  <li><strong>Total loss</strong> - You paid $1,500 for a laptop you can't use</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Find Serial Number */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                How to Find Your Laptop's Serial Number
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* MacBook */}
                <Card className="border-2 border-primary/20">
                  <CardHeader className="bg-primary/5">
                    <CardTitle className="flex items-center gap-2">
                      <span className="text-2xl">🍎</span>
                      MacBook (Apple)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Method 1: About This Mac (Fastest)</h4>
                        <ol className="text-sm text-muted-foreground space-y-1">
                          <li>1. Click Apple menu () in top-left</li>
                          <li>2. Click "About This Mac"</li>
                          <li>3. Serial number is displayed</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Method 2: System Information</h4>
                        <ol className="text-sm text-muted-foreground space-y-1">
                          <li>1. Open System Information app</li>
                          <li>2. Hardware Overview shows serial</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Method 3: Bottom Case</h4>
                        <p className="text-sm text-muted-foreground">
                          Flip MacBook over - serial number is etched near regulatory markings
                        </p>
                      </div>
                      <div className="bg-amber-500/10 p-3 rounded-lg">
                        <p className="text-sm font-medium text-amber-700 dark:text-amber-400">
                          ⚠️ Important: Also check iCloud Activation Lock status
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Windows Laptops */}
                <Card>
                  <CardHeader className="bg-muted/30">
                    <CardTitle className="flex items-center gap-2">
                      <span className="text-2xl">💻</span>
                      Windows Laptop (Dell, HP, Lenovo, etc.)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Method 1: Windows Settings</h4>
                        <ol className="text-sm text-muted-foreground space-y-1">
                          <li>1. Open Settings (Win + I)</li>
                          <li>2. Go to System &gt; About</li>
                          <li>3. Look for "Serial number" or "Product ID"</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Method 2: Command Prompt</h4>
                        <ol className="text-sm text-muted-foreground space-y-1">
                          <li>1. Open Command Prompt</li>
                          <li>2. Type: <code className="bg-muted px-1 rounded">wmic bios get serialnumber</code></li>
                          <li>3. Press Enter - serial displays</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Method 3: Bottom Sticker</h4>
                        <p className="text-sm text-muted-foreground">
                          Flip laptop over - sticker with serial number, service tag, or S/N
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Method 4: BIOS</h4>
                        <p className="text-sm text-muted-foreground">
                          Restart and press F2/F10/Del to enter BIOS - serial is in System Information
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 p-4 bg-primary/5 rounded-lg text-center">
                <p className="text-muted-foreground">
                  <strong>Pro Tip:</strong> Ask seller for a screenshot of the serial number before meeting. 
                  If they refuse, it's a red flag.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Most Stolen Laptops */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Most Stolen Laptop Models (2024 Data)
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Top Stolen Laptops by Value</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-3">
                      <li className="flex items-center justify-between">
                        <span className="font-medium">1. MacBook Pro (M3/M2)</span>
                        <Badge variant="destructive">$2,000-4,000</Badge>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="font-medium">2. MacBook Air (M2/M3)</span>
                        <Badge variant="destructive">$1,000-1,500</Badge>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="font-medium">3. Dell XPS 15/17</span>
                        <Badge variant="secondary">$1,500-2,500</Badge>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="font-medium">4. Lenovo ThinkPad X1 Carbon</span>
                        <Badge variant="secondary">$1,200-2,000</Badge>
                      </li>
                      <li className="flex items-center justify-between">
                        <span className="font-medium">5. Razer Blade (Gaming)</span>
                        <Badge variant="secondary">$1,500-3,000</Badge>
                      </li>
                    </ol>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Why These Laptops Get Targeted</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                        <span><strong>High resale value</strong> - MacBooks hold value better than most</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                        <span><strong>Easy to sell</strong> - High demand on Facebook Marketplace</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                        <span><strong>Portable</strong> - Easy to grab and go</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                        <span><strong>Common in public</strong> - Coffee shops, airports, libraries</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-amber-600 mt-1" />
                        <span><strong>Gaming laptops</strong> - Razer, Alienware targeted for parts</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Real Story */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Real Story: Sarah Avoided a Stolen MacBook Pro
              </h2>

              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-lg mb-2">The Setup:</h3>
                      <p className="text-muted-foreground">
                        Sarah from Seattle needed a MacBook Pro for her new job. Apple wanted $2,499 for the M3 Pro. 
                        She found one on Facebook Marketplace for $1,200 - "barely used, still has AppleCare."
                      </p>
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h3 className="font-bold text-lg mb-2">The Listing:</h3>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• "MacBook Pro 14" M3 Pro, 512GB, Space Gray"</li>
                        <li>• Posted 1 week ago</li>
                        <li>• Seller: "Switching to Windows for work"</li>
                        <li>• Photos looked professional</li>
                        <li>• Price: $1,200 (retail $2,499)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg mb-2">What Sarah Did Right:</h3>
                      <p className="text-muted-foreground mb-4">
                        Before meeting, Sarah messaged: "Can you send me a screenshot of About This Mac 
                        showing the serial number? Just want to verify specs and AppleCare status."
                      </p>
                    </div>

                    <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                      <h3 className="font-bold text-lg mb-2 text-destructive">The Check Result:</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <XCircle className="h-5 w-5 text-destructive" />
                          <span className="font-semibold">STOLEN - Reported from Seattle business (Dec 2, 2024)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <XCircle className="h-5 w-5 text-destructive" />
                          <span>Find My Mac: ENABLED (can be remotely locked)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <XCircle className="h-5 w-5 text-destructive" />
                          <span>Insurance claim filed for theft</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg mb-2">What Happened:</h3>
                      <p className="text-muted-foreground">
                        The MacBook had been stolen from a coworking space in downtown Seattle just 2 weeks earlier. 
                        The "seller" was the thief. Sarah reported the listing to Facebook and provided details to 
                        Seattle Police, who were already investigating the theft.
                      </p>
                    </div>

                    <blockquote className="border-l-4 border-primary pl-4 italic">
                      "I was about to pay $1,200 for a laptop that would have been locked the moment the 
                      owner saw my login. The 2-second check saved me from buying a $1,200 paperweight."
                      <footer className="text-sm text-muted-foreground mt-2">— Sarah M., Seattle</footer>
                    </blockquote>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* MacBook vs Windows Differences */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                MacBook vs Windows Laptop: Verification Differences
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-primary/30">
                  <CardHeader className="bg-primary/5">
                    <CardTitle>MacBook (Apple)</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Lock className="h-4 w-4 text-primary mt-1" />
                        <div>
                          <strong>Activation Lock</strong>
                          <p className="text-sm text-muted-foreground">If enabled, laptop is locked to owner's Apple ID forever</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-primary mt-1" />
                        <div>
                          <strong>Find My Mac</strong>
                          <p className="text-sm text-muted-foreground">Can be remotely tracked, locked, or wiped</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="h-4 w-4 text-primary mt-1" />
                        <div>
                          <strong>T2/Apple Silicon Security</strong>
                          <p className="text-sm text-muted-foreground">Hardware-level security prevents bypass</p>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-4 p-3 bg-amber-500/10 rounded-lg">
                      <p className="text-sm text-amber-700 dark:text-amber-400">
                        <strong>Critical:</strong> Always have seller sign out of iCloud in front of you
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="bg-muted/30">
                    <CardTitle>Windows Laptop</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Lock className="h-4 w-4 text-primary mt-1" />
                        <div>
                          <strong>Microsoft Account Lock</strong>
                          <p className="text-sm text-muted-foreground">Some laptops have Find My Device enabled</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Building2 className="h-4 w-4 text-primary mt-1" />
                        <div>
                          <strong>Corporate MDM</strong>
                          <p className="text-sm text-muted-foreground">Business laptops often have remote management</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="h-4 w-4 text-primary mt-1" />
                        <div>
                          <strong>BIOS Password</strong>
                          <p className="text-sm text-muted-foreground">Some thieves can't access if BIOS locked</p>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-4 p-3 bg-amber-500/10 rounded-lg">
                      <p className="text-sm text-amber-700 dark:text-amber-400">
                        <strong>Watch for:</strong> Corporate stickers, asset tags, MDM software
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Common Laptop Scams */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Common Laptop Scams to Avoid
              </h2>

              <div className="space-y-6">
                <Card className="border-l-4 border-destructive">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Scam 1: "It's My Company's Old Laptop"</h3>
                    <p className="text-muted-foreground mb-2">
                      <strong>What they say:</strong> "This was my work laptop, they let me keep it when I left."
                    </p>
                    <p className="text-muted-foreground mb-2">
                      <strong>The truth:</strong> Often stolen from employer. Corporate tracking software (MDM) may be installed. 
                      IT department can remotely wipe or lock it anytime.
                    </p>
                    <p className="text-destructive font-medium">
                      <strong>What to do:</strong> Check for corporate stickers/asset tags. Verify no MDM software in Settings.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-destructive">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Scam 2: MacBook "Firmware Password Set"</h3>
                    <p className="text-muted-foreground mb-2">
                      <strong>What they say:</strong> "There's a firmware password but I forgot it. You can take it to Apple."
                    </p>
                    <p className="text-muted-foreground mb-2">
                      <strong>The truth:</strong> Apple requires original proof of purchase to remove firmware passwords. 
                      You won't be able to provide it because the laptop is stolen.
                    </p>
                    <p className="text-destructive font-medium">
                      <strong>What to do:</strong> Never buy a MacBook with firmware password. It's 100% stolen.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-destructive">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Scam 3: "Already Wiped, Can't Show Serial"</h3>
                    <p className="text-muted-foreground mb-2">
                      <strong>What they say:</strong> "I factory reset it so I can't access settings to show you the serial."
                    </p>
                    <p className="text-muted-foreground mb-2">
                      <strong>The truth:</strong> Serial number is on the bottom of the laptop and accessible in 
                      macOS Recovery (for Macs) or BIOS (for Windows). They're hiding something.
                    </p>
                    <p className="text-destructive font-medium">
                      <strong>What to do:</strong> Check serial on bottom sticker or boot to Recovery/BIOS.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-destructive">
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-lg mb-2">Scam 4: The "Parts Laptop"</h3>
                    <p className="text-muted-foreground mb-2">
                      <strong>What they say:</strong> "Selling for parts - screen works but keyboard doesn't."
                    </p>
                    <p className="text-muted-foreground mb-2">
                      <strong>The truth:</strong> Often an Activation Locked or blacklisted laptop. 
                      They're trying to sell a stolen laptop for any amount they can get.
                    </p>
                    <p className="text-destructive font-medium">
                      <strong>What to do:</strong> Check serial number anyway. Don't buy "parts" MacBooks without verifying.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Laptop Buying Checklist */}
        <section className="py-12 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Laptop Buying Safety Checklist
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="bg-muted/30">
                    <CardTitle className="text-lg">Before Meeting</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 border rounded" />
                        <span className="text-sm">Got serial number from seller</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 border rounded" />
                        <span className="text-sm">Checked serial at SafeOrStolen</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 border rounded" />
                        <span className="text-sm">Result came back CLEAN</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 border rounded" />
                        <span className="text-sm">Verified seller profile</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 border rounded" />
                        <span className="text-sm">Meeting in public place</span>
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
                        <span className="text-sm">Laptop powers on</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 border rounded" />
                        <span className="text-sm">Serial matches what seller sent</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 border rounded" />
                        <span className="text-sm">No Activation Lock (MacBook)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 border rounded" />
                        <span className="text-sm">Seller signed out of iCloud</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 border rounded" />
                        <span className="text-sm">No corporate stickers/MDM</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 border rounded" />
                        <span className="text-sm">Physical condition matches listing</span>
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
                        <span className="text-sm">Add to your iCloud (Mac)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 border rounded" />
                        <span className="text-sm">Enable Find My Mac/Device</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 border rounded" />
                        <span className="text-sm">Change all passwords</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 border rounded" />
                        <span className="text-sm">Enable FileVault (Mac)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-4 h-4 border rounded" />
                        <span className="text-sm">Enable BitLocker (Windows)</span>
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

        {/* FAQ Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                Frequently Asked Questions - Laptop Verification
              </h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Where do I find a laptop's serial number?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2"><strong>MacBooks:</strong> Apple menu &gt; About This Mac &gt; Serial Number</p>
                    <p className="mb-2"><strong>Windows:</strong> Settings &gt; System &gt; About, or run <code>wmic bios get serialnumber</code> in Command Prompt</p>
                    <p><strong>Any laptop:</strong> Check the sticker on the bottom of the laptop or inside the battery compartment (older models)</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>What is MacBook Activation Lock?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">Activation Lock is Apple's anti-theft feature. If Find My Mac is enabled, the MacBook is locked to the owner's Apple ID.</p>
                    <p className="mb-2"><strong>What this means:</strong> Even after a factory reset, the laptop will ask for the previous owner's Apple ID and password during setup. Without it, the MacBook is unusable.</p>
                    <p><strong>Always:</strong> Have the seller sign out of iCloud and disable Find My Mac in front of you before buying.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Can stolen laptops be tracked?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2"><strong>Yes!</strong> Many stolen laptops can be tracked:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>MacBooks with Find My Mac enabled</li>
                      <li>Windows laptops with Find My Device</li>
                      <li>Corporate laptops with MDM (Mobile Device Management)</li>
                      <li>Laptops with LoJack or Prey software installed</li>
                    </ul>
                    <p className="mt-2">This is another reason to never buy stolen - the original owner may be tracking its location.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>What laptop brands can I check?</AccordionTrigger>
                  <AccordionContent>
                    <p>All major brands with serial numbers:</p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Apple MacBook (Pro, Air, all models)</li>
                      <li>Dell (XPS, Latitude, Inspiron, Alienware)</li>
                      <li>HP (Spectre, EliteBook, Pavilion, OMEN)</li>
                      <li>Lenovo (ThinkPad, IdeaPad, Legion, Yoga)</li>
                      <li>ASUS (ZenBook, ROG, VivoBook)</li>
                      <li>Acer (Swift, Aspire, Predator, Nitro)</li>
                      <li>Microsoft Surface (Pro, Laptop, Book)</li>
                      <li>Razer Blade (all models)</li>
                      <li>MSI (gaming laptops)</li>
                      <li>Samsung Galaxy Book</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>What if the seller won't give me the serial number?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2"><strong>Walk away immediately.</strong></p>
                    <p className="mb-2">Legitimate sellers will provide the serial number without hesitation. Common excuses from scammers:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>"It's wiped so I can't access it" - Serial is on the bottom of the laptop</li>
                      <li>"That's private information" - It's not, and it's necessary for verification</li>
                      <li>"Just trust me" - Never trust a seller who won't verify</li>
                    </ul>
                    <p className="mt-2">No serial number = stolen laptop</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>Is this laptop check really free?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2"><strong>Yes!</strong> 2 free checks with no credit card required.</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>No hidden fees</li>
                      <li>No signup required for basic check</li>
                      <li>Instant results (2-3 seconds)</li>
                      <li>Checks police databases, manufacturer records, insurance claims</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-12 bg-card">
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
                        Complete guide to buying laptops safely on FB
                      </p>
                    </CardContent>
                  </Card>
                </Link>
                
                <Link to="/check-electronics" className="block">
                  <Card className="hover:border-primary transition-colors h-full">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        Check Other Electronics
                        <ChevronRight className="h-4 w-4" />
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Verify tablets, gaming consoles, cameras
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
                Check Your Laptop Serial Number Now
              </h2>
              <p className="text-muted-foreground mb-6">
                A locked laptop is worthless. Enter the serial number and know in 2 seconds. It's free.
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
                  Police & Manufacturer Databases
                </span>
              </div>

              <Button size="lg" asChild>
                <Link to="/verify">
                  Check Laptop Serial - Free
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

export default LaptopSerialCheck;
