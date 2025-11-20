import React, { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Search, Shield, CheckCircle, AlertTriangle, Download, Globe, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const IMEICheckerContentPage = () => {
  const [imei, setImei] = useState('');

  const handleCheck = () => {
    // Navigate to verify page with IMEI
    window.location.href = `/verify?serial=${imei}`;
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Free IMEI Checker',
    description: 'Instantly verify phone status, blacklist check, and stolen device detection. Free IMEI checker for all mobile devices worldwide.',
    provider: {
      '@type': 'Organization',
      name: 'SafeOrStolen'
    },
    serviceType: 'IMEI Verification Service',
    areaServed: 'Worldwide',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    }
  };

  return (
    <>
      <PageSEO
        title="Free IMEI Checker - Verify Phone Status & Blacklist Instantly | SafeOrStolen"
        description="Check any phone's IMEI number for free. Instant blacklist verification, stolen device check, carrier lock status. Protect yourself before buying used phones."
        keywords="IMEI checker, free IMEI check, phone blacklist checker, stolen phone check, IMEI lookup, verify IMEI, phone IMEI number, IMEI database"
        canonical="/imei-checker"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
        {/* Hero Section */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Smartphone className="h-3 w-3 mr-1" />
              100% Free IMEI Verification
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Free IMEI Checker - Verify Phone Status & Blacklist Instantly
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Check any phone's IMEI number in seconds. Verify if a device is stolen, blacklisted, or safe to buy. Protect yourself from fraud and legal trouble when buying used phones.
            </p>

            {/* IMEI Check Tool */}
            <Card className="p-6 max-w-2xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="text"
                  placeholder="Enter IMEI (e.g., 123456789012345)"
                  value={imei}
                  onChange={(e) => setImei(e.target.value)}
                  className="flex-1 text-lg"
                  maxLength={15}
                />
                <Button onClick={handleCheck} size="lg" className="whitespace-nowrap">
                  <Search className="h-4 w-4 mr-2" />
                  Check IMEI Free
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-3 text-left">
                <Shield className="h-3 w-3 inline mr-1" />
                100% anonymous and secure. Results in 3 seconds.
              </p>
            </Card>

            <div className="flex flex-wrap gap-4 justify-center text-sm text-muted-foreground">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                50M+ Database Records
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                GSMA Verified Data
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                3-Second Results
              </div>
            </div>
          </div>
        </section>

        {/* What is IMEI Section */}
        <section className="py-12 px-4 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">What is an IMEI Number?</h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-4">
                IMEI stands for <strong>International Mobile Equipment Identity</strong>. It's a unique 15-digit code assigned to every mobile phone manufactured worldwide. Think of it as your phone's fingerprint or social security number - no two phones share the same IMEI.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                The IMEI number identifies your specific device on cellular networks and is used by carriers to authorize phones on their networks. More importantly for buyers, it's used by law enforcement and carriers to track stolen devices and add them to blacklists.
              </p>
              <p className="text-lg text-muted-foreground">
                When a phone is reported stolen or lost, its IMEI is added to global databases like the GSMA Device Registry and national carrier blacklists. This prevents the device from being activated on most cellular networks worldwide, rendering it nearly worthless to thieves - but potentially devastating to innocent buyers who unknowingly purchase a blacklisted phone.
              </p>
            </div>
          </div>
        </section>

        {/* How to Find IMEI Section */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">How to Find Your IMEI Number (4 Easy Methods)</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Badge className="mr-2">Method 1</Badge>
                  Dial *#06#
                </h3>
                <p className="text-muted-foreground mb-3">
                  The fastest method that works on all phones (iPhone, Android, Nokia, Samsung, etc.):
                </p>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Open your phone dialer app</li>
                  <li>Type: *#06#</li>
                  <li>Press call</li>
                  <li>Your IMEI will display instantly</li>
                </ol>
                <p className="text-sm text-muted-foreground mt-3 italic">
                  No actual call is made - the IMEI appears immediately on screen.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Badge className="mr-2">Method 2</Badge>
                  iPhone Settings
                </h3>
                <p className="text-muted-foreground mb-3">
                  For iPhone users (iOS 12 and newer):
                </p>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Open Settings app</li>
                  <li>Tap "General"</li>
                  <li>Tap "About"</li>
                  <li>Scroll down to find IMEI</li>
                </ol>
                <p className="text-sm text-muted-foreground mt-3 italic">
                  You can tap and hold the IMEI to copy it to clipboard.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Badge className="mr-2">Method 3</Badge>
                  Android Settings
                </h3>
                <p className="text-muted-foreground mb-3">
                  For Android phones (Samsung, Google Pixel, OnePlus, etc.):
                </p>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                  <li>Open Settings</li>
                  <li>Tap "About Phone" or "About Device"</li>
                  <li>Tap "Status" or "Phone Identity"</li>
                  <li>Find "IMEI" or "IMEI information"</li>
                </ol>
                <p className="text-sm text-muted-foreground mt-3 italic">
                  Location may vary slightly depending on Android version and manufacturer.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Badge className="mr-2">Method 4</Badge>
                  Physical Phone
                </h3>
                <p className="text-muted-foreground mb-3">
                  Check the physical device (especially useful for phones that won't power on):
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>SIM tray:</strong> Remove SIM card tray - IMEI often printed there</li>
                  <li><strong>Back of phone:</strong> Look under the battery (removable battery phones)</li>
                  <li><strong>Original box:</strong> IMEI is printed on the box label</li>
                  <li><strong>Receipt:</strong> Purchase receipt often includes IMEI</li>
                </ul>
              </Card>
            </div>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <h3 className="text-lg font-semibold mb-2 flex items-center text-primary">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Important: Always Verify IMEI Before Buying
              </h3>
              <p className="text-muted-foreground">
                When buying a used phone, ask the seller for the IMEI before meeting in person. Check it on our site first. If they refuse to provide it or the phone shows as stolen/blacklisted, walk away immediately. This simple step can save you hundreds of dollars and potential legal trouble.
              </p>
            </Card>
          </div>
        </section>

        {/* What IMEI Checker Reveals */}
        <section className="py-12 px-4 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">What Our Free IMEI Checker Reveals</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-red-500/10 p-3 rounded-lg mr-4">
                    <AlertTriangle className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Stolen/Lost Status</h3>
                    <p className="text-muted-foreground">
                      We check against the GSMA Device Registry and national police databases to verify if the phone has been reported stolen or lost. This is the most critical check before purchasing any used device.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-orange-500/10 p-3 rounded-lg mr-4">
                    <Shield className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Blacklist Status</h3>
                    <p className="text-muted-foreground">
                      Checks if the phone is blacklisted by major carriers (AT&T, Verizon, T-Mobile, Sprint, etc.). A blacklisted phone cannot be activated on most cellular networks, making it unusable for calls and data.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg mr-4">
                    <Lock className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Carrier Lock Status</h3>
                    <p className="text-muted-foreground">
                      Determines if the phone is locked to a specific carrier or unlocked. A carrier-locked phone can only be used with that carrier's SIM cards unless properly unlocked by the carrier.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-green-500/10 p-3 rounded-lg mr-4">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Warranty Information</h3>
                    <p className="text-muted-foreground">
                      Shows if the device is still under manufacturer warranty, warranty expiration date, and coverage details. Useful for determining if AppleCare or Samsung Care is still active.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg mr-4">
                    <Smartphone className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Device Specifications</h3>
                    <p className="text-muted-foreground">
                      Reveals exact model, manufacturing date, country of origin, and original carrier. Helps verify the seller's description matches the actual device and detects counterfeit phones.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-cyan-500/10 p-3 rounded-lg mr-4">
                    <Globe className="h-6 w-6 text-cyan-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Network Compatibility</h3>
                    <p className="text-muted-foreground">
                      Shows which cellular networks and bands the phone supports. Essential for ensuring the device will work with your carrier, especially for international phones or newer 5G devices.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* IMEI Blacklist Explained */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">IMEI Blacklist Explained: What You Need to Know</h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-muted-foreground mb-4">
                An IMEI blacklist is a database maintained by carriers and shared globally that contains the IMEI numbers of phones that have been reported stolen, lost, or associated with fraudulent activity. When a phone is blacklisted, it becomes significantly restricted in functionality.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">How Phones Get Blacklisted</h3>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Reported Stolen:</strong> Owner files a police report and notifies their carrier that the device was stolen.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Insurance Claim:</strong> Owner claims the phone lost/stolen through insurance and receives a replacement. Original phone is then blacklisted.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Unpaid Bills:</strong> Phone purchased on contract/payment plan, but owner stops paying. Carrier blacklists the device until balance is paid.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 text-primary mt-1 flex-shrink-0" />
                  <span><strong>Fraud Detection:</strong> Phone obtained through fraudulent means (fake ID, stolen credit card, etc.) is automatically blacklisted when discovered.</span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Global vs Local Blacklists</h3>
              <p className="text-lg text-muted-foreground mb-4">
                There are two types of blacklists that affect phone usability:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 not-prose mb-6">
                <Card className="p-6">
                  <h4 className="text-lg font-semibold mb-3">Local/National Blacklist</h4>
                  <p className="text-muted-foreground mb-3">
                    Maintained by individual countries or carrier groups. A phone blacklisted in the US may still work in some international markets that don't share blacklist data.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Example: AT&T, Verizon, T-Mobile share US blacklist database.
                  </p>
                </Card>

                <Card className="p-6">
                  <h4 className="text-lg font-semibold mb-3">Global Blacklist (GSMA)</h4>
                  <p className="text-muted-foreground mb-3">
                    Maintained by GSMA (global carrier association). Shared across 150+ countries and 800+ carriers worldwide. Nearly impossible to use on any legitimate network.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Example: Phone reported stolen in UK is blocked in US, Canada, Australia, EU, etc.
                  </p>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Can Blacklisted Phones Be Unblocked?</h3>
              <p className="text-lg text-muted-foreground mb-4">
                This is the million-dollar question for buyers of used phones. The short answer: <strong>It depends, but usually no.</strong>
              </p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 mr-2 text-orange-500 mt-1 flex-shrink-0" />
                  <span><strong>Stolen/Lost Phones:</strong> Cannot be legitimately unblocked. Only the original owner who reported it stolen can remove it from the blacklist by contacting their carrier and providing proof of recovery.</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 mr-2 text-orange-500 mt-1 flex-shrink-0" />
                  <span><strong>Unpaid Balance:</strong> Can be removed from blacklist once the outstanding balance is fully paid to the carrier. You'll need proof of purchase and may need to pay hundreds owed.</span>
                </li>
                <li className="flex items-start">
                  <AlertTriangle className="h-5 w-5 mr-2 text-red-500 mt-1 flex-shrink-0" />
                  <span><strong>"Unblocking Services":</strong> Beware of online services claiming to unblock blacklisted phones. Many are scams, and even "successful" unlocks often stop working after carrier database updates. This is illegal in many jurisdictions.</span>
                </li>
              </ul>
            </div>

            <Card className="p-6 bg-red-500/10 border-red-500/20">
              <h3 className="text-xl font-semibold mb-3 flex items-center text-red-500">
                <AlertTriangle className="h-6 w-6 mr-2" />
                Legal Warning: Buying Blacklisted Phones
              </h3>
              <p className="text-muted-foreground mb-3">
                In most jurisdictions, knowingly purchasing a stolen phone is illegal and can result in criminal charges. Even if you bought it innocently, police can confiscate the device without compensating you. The phone becomes evidence in a theft investigation.
              </p>
              <p className="text-muted-foreground">
                <strong>Bottom line:</strong> If an IMEI check shows the phone is blacklisted or reported stolen, do not purchase it under any circumstances. Walk away and report the seller if possible.
              </p>
            </Card>
          </div>
        </section>

        {/* Buying Used Phones Safely */}
        <section className="py-12 px-4 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">How to Buy Used Phones Safely: Complete Guide</h2>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Buying used phones can save you 40-70% compared to retail prices, but it comes with risks. Follow these essential steps to protect yourself from fraud, scams, and buying stolen devices:
              </p>

              <div className="space-y-6 not-prose">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Step 1: Always Check IMEI BEFORE Meeting Seller</h3>
                  <p className="text-muted-foreground mb-3">
                    This is the single most important step. Ask the seller for the IMEI number before agreeing to meet or send payment. Use our free IMEI checker immediately.
                  </p>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-2">Red Flags to Watch For:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Seller refuses to provide IMEI</li>
                      <li>• Seller says "I'll give it when we meet"</li>
                      <li>• IMEI shows as blacklisted or stolen</li>
                      <li>• IMEI doesn't match the phone model described</li>
                    </ul>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Step 2: Meet in Public, Safe Locations</h3>
                  <p className="text-muted-foreground mb-3">
                    Never meet at private homes or isolated areas. Choose well-lit, public spaces with security cameras and people around.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm">
                    <div className="bg-green-500/10 p-3 rounded-lg">
                      <p className="font-semibold text-green-500 mb-2">✓ Safe Meeting Places:</p>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Police station parking lots</li>
                        <li>• Bank lobbies</li>
                        <li>• Busy coffee shops</li>
                        <li>• Shopping mall food courts</li>
                      </ul>
                    </div>
                    <div className="bg-red-500/10 p-3 rounded-lg">
                      <p className="font-semibold text-red-500 mb-2">✗ Avoid These Places:</p>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Seller's home</li>
                        <li>• Isolated parking lots</li>
                        <li>• After dark meetings</li>
                        <li>• Their car</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Step 3: Physically Inspect & Test the Phone</h3>
                  <p className="text-muted-foreground mb-4">
                    Before handing over any money, thoroughly test the phone. Take your time - legitimate sellers won't rush you.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold mb-2">Physical Inspection Checklist:</h4>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>✓ Screen: Check for cracks, scratches, dead pixels</li>
                        <li>✓ Body: Inspect for dents, bends, water damage indicators</li>
                        <li>✓ Buttons: Test power, volume, home button functionality</li>
                        <li>✓ Ports: Check charging port, headphone jack for debris/damage</li>
                        <li>✓ Camera: Test front and rear cameras, check for cloudiness</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Functionality Tests:</h4>
                      <ul className="text-muted-foreground space-y-1 text-sm">
                        <li>✓ Call *#06# to verify IMEI matches what seller provided</li>
                        <li>✓ Make a test call to verify microphone/speaker work</li>
                        <li>✓ Test WiFi and Bluetooth connectivity</li>
                        <li>✓ Check battery health (Settings &gt; Battery on iOS/Android)</li>
                        <li>✓ Verify Face ID/fingerprint sensor works</li>
                        <li>✓ Ensure phone is NOT iCloud/Google locked</li>
                      </ul>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-3">Step 4: Verify Seller Can Prove Ownership</h3>
                  <p className="text-muted-foreground mb-3">
                    Legitimate sellers should be able to provide some proof they own the device legally.
                  </p>
                  <div className="text-sm text-muted-foreground space-y-2">
                    <p><strong>Ask for:</strong></p>
                    <ul className="space-y-1">
                      <li>• Original receipt or proof of purchase</li>
                      <li>• Original box with matching IMEI</li>
                      <li>• Photo ID (compare to receipt name if possible)</li>
                      <li>• Carrier account screenshot showing device is paid off</li>
                    </ul>
                  </div>
                </Card>

                <Card className="p-6 bg-red-500/10 border-red-500/20">
                  <h3 className="text-xl font-semibold mb-3 flex items-center text-red-500">
                    <AlertTriangle className="h-6 w-6 mr-2" />
                    Common Scam Red Flags - Walk Away If You See These
                  </h3>
                  <ul className="text-muted-foreground space-y-2 text-sm">
                    <li>🚩 Price is way too good to be true (50%+ below market value)</li>
                    <li>🚩 Seller is overly eager to complete transaction quickly</li>
                    <li>🚩 Phone is still logged into previous owner's iCloud/Google account</li>
                    <li>🚩 Seller can't or won't provide IMEI before meeting</li>
                    <li>🚩 Phone box IMEI doesn't match phone IMEI</li>
                    <li>🚩 Seller wants payment via gift cards, wire transfer, or crypto</li>
                    <li>🚩 Seller has multiple phones for sale (possible theft ring)</li>
                    <li>🚩 Story about "upgrading" or "gift I don't need" seems suspicious</li>
                    <li>🚩 Seller won't meet in public or insists on private location</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions About IMEI Checking</h2>
            
            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">Can I check any phone brand with your IMEI checker?</h3>
                <p className="text-muted-foreground">
                  Yes! Our IMEI checker works for all mobile phone brands including iPhone, Samsung, Google Pixel, OnePlus, Motorola, LG, Nokia, Huawei, Xiaomi, and hundreds more. IMEI is a universal standard used globally by all cellular devices.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">How long does IMEI verification take?</h3>
                <p className="text-muted-foreground">
                  Our IMEI checks are lightning-fast - results typically appear within 3 seconds. We query multiple databases simultaneously including GSMA, national carrier blacklists, and police stolen device registries to provide comprehensive results instantly.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">Is my IMEI search anonymous and private?</h3>
                <p className="text-muted-foreground">
                  Absolutely. We do not log, track, or store the IMEI numbers you check. Your searches are completely anonymous and private. We don't require registration or personal information for basic IMEI checks. Your privacy is our priority.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">What should I do if a phone shows as stolen?</h3>
                <p className="text-muted-foreground">
                  <strong>Do not buy the phone under any circumstances.</strong> Walk away immediately and report the listing to the marketplace (Facebook, eBay, Craigslist, etc.). If you feel safe doing so, you can report it to local police with the seller's information. Buying stolen property is illegal and the phone will be confiscated if discovered.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">Does IMEI checking work for tablets and smartwatches?</h3>
                <p className="text-muted-foreground">
                  Yes! Any device with cellular connectivity has an IMEI or similar identifier (some devices use MEID or ESN). This includes iPads with cellular, Samsung tablets, Apple Watch cellular models, and other connected devices. The checking process is identical.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">Can carriers track my location using IMEI?</h3>
                <p className="text-muted-foreground">
                  Your carrier can see which cell towers your phone connects to using the IMEI, but they don't actively track your location unless you enable location services or they have a court order (typically for law enforcement purposes). The IMEI itself doesn't contain GPS data.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 px-4 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Protect Yourself Before Every Phone Purchase</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't risk buying a stolen or blacklisted phone. Check the IMEI free in 3 seconds and buy with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/verify">
                  <Search className="h-4 w-4 mr-2" />
                  Check IMEI Now - Free
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/mobile-app">
                  <Download className="h-4 w-4 mr-2" />
                  Download Mobile App
                </Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Join 500,000+ users who protect themselves with SafeOrStolen
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default IMEICheckerContentPage;
