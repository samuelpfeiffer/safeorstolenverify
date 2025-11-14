import { PageSEO } from '@/components/seo/PageSEO';
import { Helmet } from 'react-helmet-async';
import { Smartphone, Shield, Zap, CheckCircle, Database, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function IMEICheckerGuide2025() {
  const navigate = useNavigate();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "IMEI Checker: Complete Guide for 2025 - Free Verification Tools",
    "description": "Complete guide to IMEI checkers, verification tools, and how to check if a phone is blacklisted. Compare free and paid IMEI lookup services.",
    "author": {
      "@type": "Organization",
      "name": "SafeOrStolen"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen"
    },
    "datePublished": "2025-01-14",
    "dateModified": "2025-01-14"
  };

  return (
    <>
      <PageSEO
        title="IMEI Checker: Complete Guide for 2025 - Free Verification"
        description="Complete guide to IMEI checkers and phone verification tools. Learn how to check IMEI, verify blacklist status, and compare free vs paid services in 2025."
        keywords="IMEI checker, IMEI lookup free, IMEI verification tool, check IMEI blacklist, IMEI number check, free IMEI checker, IMEI database lookup, phone IMEI check"
        canonical="/blog/imei-checker-guide-2025"
        structuredData={[articleSchema]}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            IMEI Checker: Complete Guide for 2025
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Everything you need to know about IMEI verification, blacklist checks, and choosing the right IMEI checker for your needs.
          </p>

          <Button onClick={() => navigate('/check-phone')} size="lg" className="mb-12">
            <Smartphone className="mr-2 h-5 w-5" />
            Check IMEI Free (2 Searches)
          </Button>

          {/* What is IMEI */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">What is an IMEI Number?</h2>
            <Card className="p-6">
              <p className="text-muted-foreground mb-4">
                IMEI (International Mobile Equipment Identity) is a unique 15-digit code that identifies every mobile phone in the world. 
                Think of it as your phone's fingerprint - no two phones share the same IMEI.
              </p>
              <div className="bg-muted p-4 rounded-lg font-mono text-center text-lg mb-4">
                356789012345678
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2 text-foreground">Used For:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Tracking stolen phones</li>
                    <li>Carrier blacklisting</li>
                    <li>Warranty verification</li>
                    <li>Insurance claims</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-foreground">How to Find It:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Dial *#06#</li>
                    <li>Settings → About</li>
                    <li>SIM tray (some models)</li>
                    <li>Original box</li>
                  </ul>
                </div>
              </div>
            </Card>
          </section>

          {/* Why Check IMEI */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Why Check IMEI Before Buying?</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-6">
                <Shield className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold mb-2 text-foreground">Avoid Stolen Phones</h3>
                <p className="text-sm text-muted-foreground">
                  1 in 8 used phones is reported stolen. IMEI checks reveal if phone is flagged in police databases.
                </p>
              </Card>
              <Card className="p-6">
                <Database className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold mb-2 text-foreground">Check Blacklist Status</h3>
                <p className="text-sm text-muted-foreground">
                  Blacklisted phones cannot be activated. Check carrier blacklists before buying.
                </p>
              </Card>
              <Card className="p-6">
                <Globe className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-bold mb-2 text-foreground">Verify International Use</h3>
                <p className="text-sm text-muted-foreground">
                  Some phones are region-locked. IMEI lookup reveals if phone works in your country.
                </p>
              </Card>
            </div>
          </section>

          {/* Best IMEI Checkers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Best IMEI Checkers in 2025</h2>
            
            <div className="space-y-6">
              {/* SafeOrStolen */}
              <Card className="p-6 border-primary">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">SafeOrStolen</h3>
                    <p className="text-sm text-primary">Recommended - Best Free Option</p>
                  </div>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">FREE</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-bold text-sm mb-2 text-foreground">✅ Pros:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 2 free searches (no credit card)</li>
                      <li>• GSMA Device Registry</li>
                      <li>• Police databases</li>
                      <li>• Insurance claims</li>
                      <li>• Instant results</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-2 text-foreground">❌ Cons:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Limited to 2 free checks</li>
                      <li>• Paid plans for more searches</li>
                    </ul>
                  </div>
                </div>
                <Button onClick={() => navigate('/check-phone')}>Check IMEI on SafeOrStolen</Button>
              </Card>

              {/* CTIA */}
              <Card className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">CTIA Stolen Phone Checker</h3>
                    <p className="text-sm text-muted-foreground">Official Industry Tool</p>
                  </div>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">FREE</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-sm mb-2 text-foreground">✅ Pros:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Official GSMA tool</li>
                      <li>• Unlimited free checks</li>
                      <li>• All US carriers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-2 text-foreground">❌ Cons:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Carrier blacklist only</li>
                      <li>• No police database</li>
                      <li>• US-focused</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Swappa */}
              <Card className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Swappa IMEI Check</h3>
                    <p className="text-sm text-muted-foreground">Marketplace Integrated</p>
                  </div>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">FREE</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-sm mb-2 text-foreground">✅ Pros:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Free unlimited checks</li>
                      <li>• Carrier lock status</li>
                      <li>• Trusted marketplace</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-2 text-foreground">❌ Cons:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Basic check only</li>
                      <li>• No police data</li>
                      <li>• Limited databases</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* CheckMEND */}
              <Card className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">CheckMEND</h3>
                    <p className="text-sm text-muted-foreground">Premium Service</p>
                  </div>
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">PAID</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-sm mb-2 text-foreground">✅ Pros:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Comprehensive reports</li>
                      <li>• Global coverage</li>
                      <li>• Insurance data</li>
                      <li>• Professional grade</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-2 text-foreground">❌ Cons:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Expensive ($45+ per check)</li>
                      <li>• No free tier</li>
                      <li>• Overkill for individuals</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* How to Check */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">How to Check IMEI (Step-by-Step)</h2>
            <Card className="p-6">
              <ol className="space-y-4">
                <li className="flex gap-4">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</span>
                  <div>
                    <h4 className="font-bold mb-1 text-foreground">Get the IMEI Number</h4>
                    <p className="text-sm text-muted-foreground">Dial *#06# or find in Settings → About Phone</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</span>
                  <div>
                    <h4 className="font-bold mb-1 text-foreground">Choose an IMEI Checker</h4>
                    <p className="text-sm text-muted-foreground">SafeOrStolen for free comprehensive checks, CTIA for carrier-only</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</span>
                  <div>
                    <h4 className="font-bold mb-1 text-foreground">Enter IMEI Number</h4>
                    <p className="text-sm text-muted-foreground">Paste the 15-digit code into the verification tool</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</span>
                  <div>
                    <h4 className="font-bold mb-1 text-foreground">Review Results</h4>
                    <p className="text-sm text-muted-foreground">Check for stolen status, blacklist, carrier lock, and warranty info</p>
                  </div>
                </li>
              </ol>
              <Button onClick={() => navigate('/check-phone')} className="mt-6 w-full">
                Start Free IMEI Check Now
              </Button>
            </Card>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">IMEI Checker FAQ</h2>
            <div className="space-y-4">
              <Card className="p-6">
                <h3 className="font-bold mb-2 text-foreground">Is IMEI checking legal?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, checking IMEI numbers is 100% legal. It's actually recommended by law enforcement to prevent buying stolen phones.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold mb-2 text-foreground">How accurate are free IMEI checkers?</h3>
                <p className="text-sm text-muted-foreground">
                  Free IMEI checkers like SafeOrStolen and CTIA are 95%+ accurate when checking official databases. 
                  Paid services may have slightly more data sources but aren't necessary for most buyers.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold mb-2 text-foreground">Can IMEI be changed or faked?</h3>
                <p className="text-sm text-muted-foreground">
                  Changing IMEI is illegal in most countries and extremely difficult. Some scammers may provide fake IMEI numbers, 
                  so always verify the IMEI on the actual phone (dial *#06#) before buying.
                </p>
              </Card>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <CheckCircle className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Ready to Check an IMEI?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Verify any phone's IMEI status in under 30 seconds. Check blacklist, stolen status, and carrier lock.
            </p>
            <Button onClick={() => navigate('/check-phone')} size="lg" variant="secondary">
              <Smartphone className="mr-2 h-5 w-5" />
              Check IMEI Free (2 Searches)
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
