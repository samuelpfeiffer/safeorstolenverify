import { PageSEO } from '@/components/seo/PageSEO';
import { Smartphone, Shield, Search, CheckCircle, AlertTriangle, Lock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function IMEICheckEverything() {
  const navigate = useNavigate();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "IMEI Check: Everything You Need to Know (2025 Complete Guide)",
    "description": "The definitive guide to IMEI verification. Learn what IMEI numbers are, how to check if a phone is stolen, blacklisted, or locked, and which free IMEI checker tools actually work.",
    "author": {
      "@type": "Organization",
      "name": "SafeOrStolen"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
      }
    },
    "datePublished": "2025-01-18",
    "dateModified": "2025-01-18",
    "wordCount": 2400
  };

  return (
    <>
      <PageSEO
        title="IMEI Check: Everything You Need to Know (2025 Complete Guide)"
        description="The definitive guide to IMEI verification. Learn what IMEI numbers are, how to check if a phone is stolen, blacklisted, or locked. Includes free IMEI checker tools and expert tips for buying used phones safely."
        keywords="IMEI check, IMEI checker, check if phone stolen, IMEI lookup, phone blacklist check, IMEI verification, free IMEI check, how to find IMEI, check IMEI free"
        canonical="/blog/imei-check-everything-you-need-to-know"
        structuredData={[articleSchema]}
        image="https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
      />

      <article className="min-h-screen bg-gradient-to-b from-background via-background/95 to-muted/20">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span>Phone Verification</span>
              <span>•</span>
              <span>January 18, 2025</span>
              <span>•</span>
              <span>10 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              IMEI Check: Everything You Need to Know (2025)
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The complete guide to IMEI verification. Learn what IMEI numbers are, how to find them, how to check if a phone is stolen or blacklisted, and which free IMEI checkers actually work. Essential reading before buying any used smartphone.
            </p>
          </header>

          <Card className="p-6 mb-12 bg-card/50 backdrop-blur">
            <h2 className="text-lg font-semibold mb-4">📋 Table of Contents</h2>
            <nav className="space-y-2 text-sm">
              <a href="#what-is-imei" className="block text-primary hover:underline">1. What is an IMEI Number?</a>
              <a href="#how-to-find" className="block text-primary hover:underline">2. How to Find Your IMEI Number</a>
              <a href="#what-checks" className="block text-primary hover:underline">3. What Does an IMEI Check Tell You?</a>
              <a href="#free-checkers" className="block text-primary hover:underline">4. Free IMEI Checker Tools (2025)</a>
              <a href="#how-to-check" className="block text-primary hover:underline">5. How to Check IMEI Step-by-Step</a>
              <a href="#blacklist-explained" className="block text-primary hover:underline">6. IMEI Blacklist Explained</a>
              <a href="#carrier-lock" className="block text-primary hover:underline">7. Carrier Lock vs Blacklist</a>
              <a href="#buying-guide" className="block text-primary hover:underline">8. Buying Used Phones: Complete Checklist</a>
            </nav>
          </Card>

          <section id="what-is-imei" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Smartphone className="h-8 w-8 text-primary" />
              What is an IMEI Number?
            </h2>

            <Card className="p-6 bg-primary/5 border-primary/20 mb-6">
              <p className="text-lg font-semibold mb-4">
                IMEI (International Mobile Equipment Identity) is a unique 15-digit code that identifies every mobile phone in the world.
              </p>
              <p className="text-muted-foreground">
                Think of it as your phone's fingerprint or social security number. No two phones share the same IMEI, making it the most reliable way to verify a phone's history and status.
              </p>
            </Card>

            <div className="prose prose-slate dark:prose-invert max-w-none space-y-4">
              <h3 className="text-xl font-semibold">IMEI Format Breakdown</h3>
              <Card className="p-6 font-mono text-sm">
                <div className="mb-4">
                  <strong>Example:</strong> 35-925406-123456-7
                </div>
                <ul className="space-y-2">
                  <li><strong className="text-primary">35</strong> = Reporting Body Identifier (country/region)</li>
                  <li><strong className="text-primary">925406</strong> = Type Allocation Code (manufacturer & model)</li>
                  <li><strong className="text-primary">123456</strong> = Serial Number (specific device)</li>
                  <li><strong className="text-primary">7</strong> = Check Digit (validation)</li>
                </ul>
              </Card>

              <h3 className="text-xl font-semibold mt-8">Why IMEI Numbers Matter</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h4 className="font-semibold mb-3 text-success flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" /> For Buyers
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Verify phone isn't stolen before purchase</li>
                    <li>• Check blacklist status (carrier blocked)</li>
                    <li>• Confirm carrier unlock status</li>
                    <li>• Validate authenticity (not counterfeit)</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h4 className="font-semibold mb-3 text-primary flex items-center gap-2">
                    <Shield className="h-5 w-5" /> For Owners
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Report stolen phone to carriers</li>
                    <li>• Track lost device location</li>
                    <li>• File insurance claims</li>
                    <li>• Prove ownership in disputes</li>
                  </ul>
                </Card>
              </div>
            </div>
          </section>

          <section id="how-to-find" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Search className="h-8 w-8 text-primary" />
              How to Find Your IMEI Number
            </h2>

            <div className="space-y-6">
              <Card className="p-6 bg-success/5 border-success/20">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="text-2xl">📱</span> Method 1: Universal Dial Code (Easiest)
                </h3>
                <p className="mb-4 text-muted-foreground">Works on 99% of phones, including iPhone and Android:</p>
                <div className="bg-background/50 p-6 rounded-lg text-center mb-4">
                  <div className="text-3xl font-bold font-mono text-primary">*#06#</div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Simply dial this code (no need to press call). The IMEI will appear on screen immediately. Take a screenshot or write it down.
                </p>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">🍎 iPhone</h3>
                  <ol className="space-y-2 text-sm">
                    <li><strong>1.</strong> Settings → General → About</li>
                    <li><strong>2.</strong> Scroll down to "IMEI"</li>
                    <li><strong>3.</strong> Tap to copy to clipboard</li>
                    <li><strong>Alternative:</strong> SIM tray (engraved)</li>
                    <li><strong>Box:</strong> Check original packaging</li>
                  </ol>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">🤖 Android</h3>
                  <ol className="space-y-2 text-sm">
                    <li><strong>1.</strong> Settings → About Phone</li>
                    <li><strong>2.</strong> Tap "Status" or "IMEI information"</li>
                    <li><strong>3.</strong> View IMEI (dual-SIM phones have 2)</li>
                    <li><strong>Alternative:</strong> Back cover (if removable)</li>
                    <li><strong>Box:</strong> Check original packaging</li>
                  </ol>
                </Card>
              </div>

              <Card className="p-6 bg-amber-500/10 border-amber-500/20">
                <p className="flex items-start gap-2 text-sm">
                  <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Note:</strong> Dual-SIM phones have TWO IMEI numbers (IMEI 1 and IMEI 2). Always check both when verifying a phone. Most verification services default to IMEI 1.
                  </span>
                </p>
              </Card>
            </div>
          </section>

          <section id="what-checks" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <CheckCircle className="h-8 w-8 text-success" />
              What Does an IMEI Check Tell You?
            </h2>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-destructive">1. Stolen Status</h3>
                <p className="text-muted-foreground mb-4">
                  The most critical check. Reveals if the phone has been reported stolen to:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-destructive"></div>
                    <span>Law enforcement databases</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-destructive"></div>
                    <span>Carrier blacklist databases</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-destructive"></div>
                    <span>Insurance company reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-destructive"></div>
                    <span>International stolen phone registries</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-primary">2. Blacklist Status</h3>
                <p className="text-muted-foreground mb-4">
                  Shows if carriers have blocked the phone from their networks:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>✓ Clean = Works on all carriers</li>
                  <li>⚠️ Blacklisted = Cannot activate on any carrier</li>
                  <li>⚠️ Finance blacklist = Outstanding payment plan</li>
                  <li>⚠️ Lost/Stolen blacklist = Reported by previous owner</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-primary">3. Carrier Lock Status</h3>
                <p className="text-muted-foreground mb-4">
                  Determines which carriers the phone will work with:
                </p>
                <ul className="space-y-2 text-sm">
                  <li><strong>Unlocked:</strong> Works with any carrier (AT&T, Verizon, T-Mobile, etc.)</li>
                  <li><strong>Locked:</strong> Only works with one carrier (e.g., locked to Verizon)</li>
                  <li><strong>Financed:</strong> Locked until payment plan is complete</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-primary">4. Phone Specifications</h3>
                <p className="text-muted-foreground mb-4">
                  Basic info about the device:
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Manufacturer and exact model</li>
                  <li>• Color and storage capacity</li>
                  <li>• Original purchase date (sometimes)</li>
                  <li>• Warranty status</li>
                </ul>
              </Card>
            </div>
          </section>

          <section id="free-checkers" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Shield className="h-8 w-8 text-success" />
              Free IMEI Checker Tools (2025)
            </h2>

            <Card className="p-6 bg-success/5 border-success/20 mb-6">
              <div className="flex items-start gap-4">
                <Shield className="h-12 w-12 text-success flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">🏆 SafeOrStolen (Recommended)</h3>
                  <p className="text-muted-foreground mb-4">
                    The most comprehensive free IMEI checker available. Checks against law enforcement databases, carrier blacklists, and international stolen phone registries in real-time.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">✓ What's Included (Free)</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• 2 free IMEI checks</li>
                        <li>• Stolen status verification</li>
                        <li>• Blacklist check (all carriers)</li>
                        <li>• Law enforcement database</li>
                        <li>• Instant results (under 30 sec)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-2">⚡ Why Choose SafeOrStolen</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Mobile app available</li>
                        <li>• No credit card required</li>
                        <li>• Real-time database updates</li>
                        <li>• Checks VINs & serials too</li>
                        <li>• Most accurate results</li>
                      </ul>
                    </div>
                  </div>
                  <Button 
                    onClick={() => navigate('/verify')}
                    size="lg"
                    className="w-full md:w-auto"
                  >
                    Check IMEI Free Now →
                  </Button>
                </div>
              </div>
            </Card>

            <h3 className="text-xl font-semibold mb-4">Other Free IMEI Checkers</h3>
            <div className="space-y-4">
              <Card className="p-6">
                <h4 className="font-semibold mb-2">GSMA IMEI Database</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Official global database maintained by mobile carriers. Shows blacklist status but NOT stolen reports.
                </p>
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-success">✓ Free</span>
                  <span className="text-amber-500">⚠️ Limited info</span>
                  <span className="text-muted-foreground">No stolen check</span>
                </div>
              </Card>

              <Card className="p-6">
                <h4 className="font-semibold mb-2">Carrier-Specific Checkers</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  AT&T, Verizon, and T-Mobile offer free IMEI checkers, but only for their own network blacklists.
                </p>
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-success">✓ Free</span>
                  <span className="text-amber-500">⚠️ Single carrier only</span>
                  <span className="text-muted-foreground">No cross-carrier data</span>
                </div>
              </Card>

              <Card className="p-6">
                <h4 className="font-semibold mb-2">CheckMEND (UK)</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  UK-focused IMEI checker. Good for European phones but limited US coverage. Paid service ($2.99).
                </p>
                <div className="flex items-center gap-4 text-xs">
                  <span className="text-destructive">✗ Paid</span>
                  <span className="text-muted-foreground">UK-focused</span>
                  <span className="text-muted-foreground">Limited US data</span>
                </div>
              </Card>
            </div>
          </section>

          <section id="how-to-check" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <CheckCircle className="h-8 w-8 text-success" />
              How to Check IMEI Step-by-Step
            </h2>

            <Card className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</span>
                  <div>
                    <h3 className="font-semibold mb-1">Get the IMEI Number</h3>
                    <p className="text-sm text-muted-foreground">Dial *#06# or find it in Settings → About Phone</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</span>
                  <div>
                    <h3 className="font-semibold mb-1">Open SafeOrStolen</h3>
                    <p className="text-sm text-muted-foreground">Go to safeorstolen.com/verify or open the mobile app</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</span>
                  <div>
                    <h3 className="font-semibold mb-1">Enter the IMEI</h3>
                    <p className="text-sm text-muted-foreground">Type or paste the 15-digit IMEI number</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</span>
                  <div>
                    <h3 className="font-semibold mb-1">Get Instant Results</h3>
                    <p className="text-sm text-muted-foreground">See if the phone is clean, stolen, or blacklisted (under 30 seconds)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">5</span>
                  <div>
                    <h3 className="font-semibold mb-1">Save the Report</h3>
                    <p className="text-sm text-muted-foreground">Take a screenshot or save the PDF report for your records</p>
                  </div>
                </li>
              </ol>
            </Card>

            <Card className="mt-6 p-6 bg-amber-500/10 border-amber-500/20">
              <h3 className="font-semibold mb-3 flex items-center gap-2 text-amber-600 dark:text-amber-500">
                <AlertTriangle className="h-5 w-5" />
                Before You Meet the Seller
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                ALWAYS request the IMEI number via text message BEFORE meeting in person. Check it immediately. If the seller refuses or makes excuses, walk away.
              </p>
              <p className="text-sm font-semibold">
                Red flags: "I'll give it to you when we meet" • "The IMEI doesn't matter" • "You can check it after you buy it"
              </p>
            </Card>
          </section>

          <section id="blacklist-explained" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Lock className="h-8 w-8 text-destructive" />
              IMEI Blacklist Explained
            </h2>

            <Card className="p-6 bg-destructive/5 border-destructive/20 mb-6">
              <h3 className="text-lg font-semibold mb-4">What is an IMEI Blacklist?</h3>
              <p className="text-muted-foreground mb-4">
                An IMEI blacklist is a database of phone IMEI numbers that carriers have blocked from activating on their networks. Once blacklisted, a phone becomes essentially useless – it cannot make calls, send texts, or use mobile data.
              </p>
            </Card>

            <h3 className="text-xl font-semibold mb-4">Why Phones Get Blacklisted</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="font-semibold mb-3 text-destructive">Stolen/Lost Reports</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  When an owner reports their phone stolen or lost to their carrier, the IMEI is immediately blacklisted across all major carriers in the US.
                </p>
                <p className="text-xs text-muted-foreground">
                  Status: <strong>Permanent</strong> (unless owner removes report)
                </p>
              </Card>

              <Card className="p-6">
                <h4 className="font-semibold mb-3 text-destructive">Unpaid Bills</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  If someone stops paying their phone bill or payment plan, carriers blacklist the device until the account is settled.
                </p>
                <p className="text-xs text-muted-foreground">
                  Status: <strong>Temporary</strong> (removed when paid)
                </p>
              </Card>

              <Card className="p-6">
                <h4 className="font-semibold mb-3 text-destructive">Insurance Fraud</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  If someone files an insurance claim for a "lost" phone and then sells it, the insurance company blacklists the IMEI.
                </p>
                <p className="text-xs text-muted-foreground">
                  Status: <strong>Permanent + Criminal</strong>
                </p>
              </Card>

              <Card className="p-6">
                <h4 className="font-semibold mb-3 text-destructive">Financed Device</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Phones bought on payment plans are blacklisted if the buyer stops making payments. Common with "Buy now, pay later" scams.
                </p>
                <p className="text-xs text-muted-foreground">
                  Status: <strong>Temporary</strong> (removed when paid off)
                </p>
              </Card>
            </div>

            <Card className="mt-6 p-6 bg-amber-500/10 border-amber-500/20">
              <h3 className="font-semibold mb-3">🚨 Critical Truth About Blacklists</h3>
              <p className="text-sm text-muted-foreground mb-3">
                A phone can be "clean" today and blacklisted tomorrow. Sellers can sell you a phone, then immediately report it stolen to get insurance money. You lose the phone AND your money.
              </p>
              <p className="text-sm font-semibold">
                This is why you MUST verify BEFORE purchase and meet in person to confirm the seller can factory reset the device.
              </p>
            </Card>
          </section>

          <section id="carrier-lock" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Carrier Lock vs Blacklist: The Difference</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-primary/20">
                <h3 className="text-lg font-semibold mb-4 text-primary">Carrier Lock</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  A <strong>carrier lock</strong> means the phone will only work with one specific carrier (e.g., Verizon). It's NOT stolen, just restricted.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Phone works (on that carrier)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Can be unlocked legally</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Not illegal to buy/sell</span>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-destructive/20">
                <h3 className="text-lg font-semibold mb-4 text-destructive">Blacklist</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  A <strong>blacklist</strong> means the phone is blocked from ALL carriers. It's likely stolen or has unpaid bills. It's essentially a brick.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                    <span>Phone doesn't work (any carrier)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                    <span>Cannot be unlocked</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-destructive" />
                    <span>Likely stolen property</span>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <section id="buying-guide" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Shield className="h-8 w-8 text-success" />
              Buying Used Phones: Complete Checklist
            </h2>

            <Card className="p-6 bg-gradient-to-r from-success/10 to-success/5 border-success/20">
              <h3 className="text-lg font-semibold mb-4">✅ Pre-Meeting Verification</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <label>Request IMEI number via text message</label>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <label>Run free IMEI check on SafeOrStolen</label>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <label>Verify phone is not blacklisted</label>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <label>Confirm not reported stolen</label>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <label>Check seller's profile/reviews</label>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-4 mt-6">✅ In-Person Inspection</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <label>Meet in public place (police station parking lot)</label>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <label>Verify IMEI matches (dial *#06#)</label>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <label>Confirm seller can perform factory reset</label>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <label>Check for physical damage (screen, water damage)</label>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <label>Test all buttons and features</label>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <label>Take photo of seller's ID (with permission)</label>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <label>Get written receipt with seller's signature</label>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-4 mt-6">✅ Post-Purchase Protection</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <label>Save all text messages and communications</label>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <label>Test with your SIM card immediately</label>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <label>Register phone with manufacturer</label>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <label>Keep receipt and documentation forever</label>
                </div>
              </div>
            </Card>
          </section>

          <Card className="p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20 text-center">
            <Smartphone className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Check Any Phone's IMEI for Free</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Don't risk buying a stolen or blacklisted phone. Use SafeOrStolen's free IMEI checker to verify any phone in under 30 seconds. Get instant results from law enforcement databases and carrier blacklists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate('/verify')}
                className="text-lg px-8"
              >
                Check IMEI Free Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/mobile-app')}
                className="text-lg px-8"
              >
                Download Mobile App
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              2 free IMEI checks • No credit card required • Instant results
            </p>
          </Card>

          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/blog/avoiding-stolen-goods-complete-guide')}>
                <h3 className="font-semibold mb-2">Complete Guide to Avoiding Stolen Goods</h3>
                <p className="text-sm text-muted-foreground">Learn how to verify any item before purchase</p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/blog/how-to-check-if-phone-stolen')}>
                <h3 className="font-semibold mb-2">How to Check if a Phone is Stolen</h3>
                <p className="text-sm text-muted-foreground">Step-by-step phone verification guide</p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/guides/facebook-marketplace-safety')}>
                <h3 className="font-semibold mb-2">Facebook Marketplace Safety Tips</h3>
                <p className="text-sm text-muted-foreground">15 essential tips for safe buying</p>
              </Card>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
