import { PageSEO } from '@/components/seo/PageSEO';
import { Helmet } from 'react-helmet-async';
import { Smartphone, Shield, AlertTriangle, CheckCircle, Search, Lock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function HowToCheckIfPhoneStolen() {
  const navigate = useNavigate();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Check if a Phone is Stolen Before Buying (2025 Guide)",
    "description": "Complete step-by-step guide to verify if a phone is stolen using IMEI numbers, blacklist databases, and free verification tools. Protect yourself from buying stolen phones.",
    "author": {
      "@type": "Organization",
      "name": "SafeOrStolen"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://safeorstolen.com/images/sos-logo.png"
      }
    },
    "datePublished": "2025-01-14",
    "dateModified": "2025-01-14"
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Check if a Phone is Stolen Before Buying",
    "description": "Step-by-step guide to verify if a phone is stolen using IMEI verification",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Find the IMEI Number",
        "text": "Dial *#06# on the phone to display the IMEI number, or find it in Settings > About Phone"
      },
      {
        "@type": "HowToStep",
        "name": "Use a Free IMEI Checker",
        "text": "Enter the IMEI into SafeOrStolen or another verification service to check blacklist status"
      },
      {
        "@type": "HowToStep",
        "name": "Verify Carrier Lock Status",
        "text": "Check if the phone is carrier-locked or reported stolen to carriers"
      },
      {
        "@type": "HowToStep",
        "name": "Check Police Databases",
        "text": "Use verification tools that search law enforcement stolen property databases"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I check if a phone is stolen for free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Services like SafeOrStolen offer free IMEI checks. You get 2 free verifications to check if a phone is reported stolen in blacklist databases."
        }
      },
      {
        "@type": "Question",
        "name": "What is an IMEI number?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IMEI (International Mobile Equipment Identity) is a unique 15-digit code that identifies every mobile phone. You can find it by dialing *#06# or in Settings > About Phone."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I buy a stolen phone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you buy a stolen phone, you may face: 1) The phone being remotely locked by the owner, 2) Legal issues if reported to police, 3) Inability to activate on carriers, 4) Complete financial loss with no recourse."
        }
      }
    ]
  };

  return (
    <>
      <PageSEO
        title="How to Check if a Phone is Stolen Before Buying (2025 Guide)"
        description="Complete step-by-step guide to verify if a phone is stolen using IMEI numbers. Learn how to check blacklist databases, avoid buying stolen phones, and protect yourself from fraud."
        keywords="how to check if phone is stolen, IMEI checker, verify phone not stolen, check stolen phone IMEI, phone blacklist check, buying used phone safely, IMEI lookup free"
        canonical="/blog/how-to-check-if-phone-stolen"
        structuredData={[articleSchema, howToSchema, faqSchema]}
      />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Hero Section */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              How to Check if a Phone is Stolen Before Buying
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Complete 2025 guide to verify if a used phone is stolen using IMEI verification. 
              Protect yourself from buying stolen phones and avoid financial loss.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button onClick={() => navigate('/check-phone')} size="lg">
                <Smartphone className="mr-2 h-5 w-5" />
                Check Phone Now (2 Free)
              </Button>
            </div>
          </div>

          {/* Warning Alert */}
          <Card className="p-6 mb-8 border-destructive bg-destructive/10">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-destructive mb-2">Why This Matters</h3>
                <p className="text-sm text-foreground">
                  In 2024, <strong>1 in 8 used phones sold</strong> was reported stolen. Buying a stolen phone means:
                  you lose your money, the phone gets remotely locked, and you may face legal consequences. 
                  Always verify before you buy.
                </p>
              </div>
            </div>
          </Card>

          {/* Quick Answer */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-12">
            <h2 className="text-2xl font-bold mb-4 text-primary">Quick Answer</h2>
            <p className="text-foreground mb-4">
              To check if a phone is stolen, find the IMEI number (dial *#06#), then enter it into a 
              free IMEI checker like SafeOrStolen. The tool searches blacklist databases and stolen 
              property registries to verify the phone's status in under 30 seconds.
            </p>
            <Button onClick={() => navigate('/check-phone')} variant="default">
              Verify IMEI Free →
            </Button>
          </div>

          {/* Step-by-Step Guide */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Step-by-Step: Check if Phone is Stolen</h2>
            
            <div className="space-y-8">
              {/* Step 1 */}
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-foreground">Find the IMEI Number</h3>
                    <p className="text-muted-foreground mb-4">
                      Every phone has a unique 15-digit IMEI (International Mobile Equipment Identity) number. 
                      Here's how to find it:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li><strong>Fastest Method:</strong> Dial *#06# on the phone - IMEI appears instantly</li>
                      <li><strong>iPhone:</strong> Settings → General → About → IMEI</li>
                      <li><strong>Android:</strong> Settings → About Phone → Status → IMEI</li>
                      <li><strong>On Box:</strong> Check the phone's original packaging (barcode sticker)</li>
                      <li><strong>SIM Tray:</strong> Some phones print IMEI on the SIM card tray</li>
                    </ul>
                    <div className="mt-4 p-4 bg-muted rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <strong>Pro Tip:</strong> If the seller refuses to show you the IMEI, walk away. 
                        This is a major red flag that the phone is stolen.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Step 2 */}
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-foreground">Use a Free IMEI Verification Tool</h3>
                    <p className="text-muted-foreground mb-4">
                      Once you have the IMEI, use a verification service to check multiple databases:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li><strong>SafeOrStolen:</strong> Checks GSMA Device Registry, law enforcement databases, and insurance claims (2 free checks)</li>
                      <li><strong>CTIA Stolen Phone Checker:</strong> Official industry tool for US carriers</li>
                      <li><strong>Swappa IMEI Check:</strong> Free blacklist and carrier lock verification</li>
                    </ul>
                    <Button onClick={() => navigate('/check-phone')} className="mt-4">
                      <Search className="mr-2 h-4 w-4" />
                      Check IMEI on SafeOrStolen
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Step 3 */}
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-foreground">Check Carrier Lock & Blacklist Status</h3>
                    <p className="text-muted-foreground mb-4">
                      Even if not reported stolen, check if the phone is:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li><strong>Carrier Locked:</strong> Won't work on your carrier (AT&T, Verizon, T-Mobile)</li>
                      <li><strong>Blacklisted:</strong> Reported stolen to carriers - cannot be activated</li>
                      <li><strong>iCloud Locked (iPhone):</strong> Previous owner's Apple ID still active</li>
                      <li><strong>Google Locked (Android):</strong> Factory Reset Protection (FRP) enabled</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Step 4 */}
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-foreground">Verify Seller Identity & Purchase Proof</h3>
                    <p className="text-muted-foreground mb-4">
                      Red flags that indicate a stolen phone:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Seller refuses to show ID or meet in public</li>
                      <li>No original box, receipt, or proof of purchase</li>
                      <li>Price is suspiciously low (50%+ below market value)</li>
                      <li>Seller pressures you to buy immediately "before someone else does"</li>
                      <li>Phone has no iCloud/Google account removed</li>
                    </ul>
                    <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                      <p className="text-sm text-foreground">
                        <strong className="text-green-600">Safe Buying Checklist:</strong> Meet in police station parking lot, 
                        ask for receipt, verify IMEI matches box, check activation lock is disabled, get seller's contact info.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Understanding Results */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Understanding Verification Results</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-green-500/50 bg-green-500/10">
                <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-green-600">Clear / Safe to Buy</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✅ Not reported stolen in databases</li>
                  <li>✅ Not blacklisted by carriers</li>
                  <li>✅ Clean ownership history</li>
                  <li>✅ Can be activated on carriers</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Still verify seller identity and meet in safe public location.
                </p>
              </Card>

              <Card className="p-6 border-destructive bg-destructive/10">
                <AlertTriangle className="h-8 w-8 text-destructive mb-4" />
                <h3 className="text-xl font-bold mb-3 text-destructive">Flagged / Do Not Buy</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>❌ Reported stolen to police</li>
                  <li>❌ Blacklisted by carriers</li>
                  <li>❌ Insurance claim filed</li>
                  <li>❌ iCloud/Google locked</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4 font-bold">
                  Walk away immediately. Buying this phone is illegal and you will lose your money.
                </p>
              </Card>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2 text-foreground">Can I check if a phone is stolen for free?</h3>
                <p className="text-muted-foreground">
                  Yes! SafeOrStolen offers 2 free IMEI checks. CTIA Stolen Phone Checker and Swappa are also free. 
                  Premium services like CheckMEND ($45+) provide more detailed reports.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2 text-foreground">What happens if I accidentally bought a stolen phone?</h3>
                <p className="text-muted-foreground mb-3">
                  If you unknowingly bought a stolen phone:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                  <li>The owner can remotely lock it via iCloud/Google</li>
                  <li>Carriers will blacklist the IMEI, making it unusable</li>
                  <li>You may be contacted by police if reported</li>
                  <li>You lose 100% of your money with no legal recourse</li>
                </ul>
                <p className="text-muted-foreground mt-3">
                  <strong>Solution:</strong> Report it to police with seller info. You may be required to surrender 
                  the phone to the rightful owner.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2 text-foreground">How accurate are IMEI checkers?</h3>
                <p className="text-muted-foreground">
                  IMEI checkers are 95%+ accurate when checking official databases (GSMA, carrier blacklists, police reports). 
                  However, recently stolen phones may not appear immediately (24-48 hour delay). Always combine IMEI checks 
                  with seller verification and common sense.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold mb-2 text-foreground">Can a stolen phone be unlocked or "cleaned"?</h3>
                <p className="text-muted-foreground">
                  No. Thieves may claim they can "unlock" or "clean" a stolen phone, but this is impossible for:
                </p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mt-2">
                  <li><strong>iCloud Activation Lock:</strong> Cannot be removed without original Apple ID</li>
                  <li><strong>Carrier Blacklist:</strong> Permanent across all US carriers (shared database)</li>
                  <li><strong>IMEI Blacklist:</strong> International - phone unusable in most countries</li>
                </ul>
                <p className="text-muted-foreground mt-3">
                  Any seller offering to "clean" a phone is selling a stolen device. Report them to police.
                </p>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <Shield className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Protect Yourself Before You Buy</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Get instant verification of any phone's IMEI status. Check against stolen databases, 
              carrier blacklists, and police reports in under 30 seconds.
            </p>
            <Button onClick={() => navigate('/check-phone')} size="lg" variant="secondary">
              <Smartphone className="mr-2 h-5 w-5" />
              Start Free IMEI Check (2 Free Searches)
            </Button>
            <p className="text-sm mt-4 opacity-80">
              No credit card required • Instant results • Trusted by 100K+ buyers
            </p>
          </section>

          {/* Related Resources */}
          <section className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Related Guides</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-4 hover:border-primary cursor-pointer transition-colors" onClick={() => navigate('/blog/imei-checker-guide')}>
                <h4 className="font-bold mb-2 text-foreground">IMEI Checker Guide</h4>
                <p className="text-sm text-muted-foreground">Complete guide to IMEI numbers and verification</p>
              </Card>
              <Card className="p-4 hover:border-primary cursor-pointer transition-colors" onClick={() => navigate('/blog/facebook-marketplace-safety')}>
                <h4 className="font-bold mb-2 text-foreground">Facebook Marketplace Safety</h4>
                <p className="text-sm text-muted-foreground">How to avoid scams when buying on Facebook</p>
              </Card>
              <Card className="p-4 hover:border-primary cursor-pointer transition-colors" onClick={() => navigate('/blog/what-to-do-bought-stolen-phone')}>
                <h4 className="font-bold mb-2 text-foreground">Bought Stolen Phone?</h4>
                <p className="text-sm text-muted-foreground">What to do if you accidentally bought stolen goods</p>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
