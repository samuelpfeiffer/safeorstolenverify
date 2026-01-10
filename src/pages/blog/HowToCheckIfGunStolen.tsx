import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Search, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

export default function HowToCheckIfGunStolen() {
  return (
    <>
      <PageSEO
        title="How to Check if a Gun is Stolen: Serial Number Verification Guide | SafeOrStolen"
        description="Step-by-step guide to verify if a firearm is stolen before buying. Check gun serial numbers against stolen databases, state records, and law enforcement systems."
        keywords="how to check if gun is stolen, check gun stolen, verify gun serial number, stolen gun check, gun theft verification"
        canonical="/blog/how-to-check-if-gun-stolen"
        type="article"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Check if a Gun is Stolen",
          "description": "Step-by-step guide to verify if a firearm is stolen before buying.",
          "step": [
            { "@type": "HowToStep", "name": "Locate Serial Number", "text": "Find the gun's serial number on the frame or receiver" },
            { "@type": "HowToStep", "name": "Use SafeOrStolen", "text": "Enter the serial number in our verification tool" },
            { "@type": "HowToStep", "name": "Review Results", "text": "Check if the firearm is flagged as stolen" }
          ]
        }}
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <BreadcrumbNavigation items={[
            { name: 'Blog', href: '/blog' },
            { name: 'How to Check if Gun Stolen', href: '/blog/how-to-check-if-gun-stolen' }
          ]} />

          <article className="prose prose-lg dark:prose-invert max-w-none mt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How to Check if a Gun is Stolen: Complete Verification Guide
            </h1>

            <div className="flex items-center gap-4 text-muted-foreground mb-8">
              <span>Updated January 2026</span>
              <span>•</span>
              <span>15 min read</span>
            </div>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
              <p className="text-lg font-medium mb-4">
                Buying a stolen firearm can result in federal charges, even if you didn't know it was stolen. 
                This guide shows you exactly how to verify any gun's status before purchasing.
              </p>
              <Button asChild size="lg" className="mt-2">
                <Link to="/verify">
                  <Search className="mr-2 h-4 w-4" />
                  Check Gun Now (2 Free Searches)
                </Link>
              </Button>
            </div>

            <h2>Quick Steps: Verify if a Gun is Stolen</h2>
            
            <Card className="my-8">
              <CardContent className="p-6">
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">1</span>
                    <div>
                      <strong>Find the Serial Number</strong>
                      <p className="text-muted-foreground">Located on frame/receiver (handguns: grip area, rifles: receiver)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">2</span>
                    <div>
                      <strong>Use SafeOrStolen Verification</strong>
                      <p className="text-muted-foreground">Enter serial number for instant database check</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">3</span>
                    <div>
                      <strong>Review Results</strong>
                      <p className="text-muted-foreground">Clear = safe to buy. Flagged = do not purchase</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">4</span>
                    <div>
                      <strong>Document Verification</strong>
                      <p className="text-muted-foreground">Save results as proof of due diligence</p>
                    </div>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <h2>Why You Must Check Before Buying</h2>
            
            <p>
              The legal consequences of possessing a stolen firearm are severe—even if you had no idea it was stolen. 
              Under federal law (18 U.S.C. § 922), possessing a stolen firearm can result in:
            </p>

            <ul>
              <li><strong>Up to 10 years in federal prison</strong></li>
              <li><strong>Firearm confiscation</strong> (no compensation)</li>
              <li><strong>Loss of gun rights</strong> permanently</li>
              <li><strong>Criminal record</strong> affecting employment</li>
            </ul>

            <h2>Method 1: Online Serial Number Check (Fastest)</h2>
            
            <p>
              <strong>SafeOrStolen</strong> provides the fastest way to check gun serial numbers. Our database 
              cross-references NCIC records, state databases, insurance claims, and pawn shop transactions.
            </p>

            <div className="bg-muted/50 rounded-lg p-6 my-6">
              <h3 className="text-lg font-bold mb-3">How to Use SafeOrStolen:</h3>
              <ol>
                <li>Go to <Link to="/verify" className="text-primary">safeorstolen.com/verify</Link></li>
                <li>Select "Firearm" as item type</li>
                <li>Enter complete serial number</li>
                <li>Get results in ~3 seconds</li>
              </ol>
              <p className="text-sm text-muted-foreground mt-4">
                <strong>2 free checks</strong> included. No credit card required.
              </p>
            </div>

            <h2>Method 2: Local Police Department</h2>
            
            <p>
              Many police departments will run an NCIC check if you bring the firearm to the station:
            </p>
            
            <ul>
              <li><strong>Pros:</strong> Free, direct database access</li>
              <li><strong>Cons:</strong> Must transport gun, wait times vary, not all departments offer this</li>
            </ul>

            <p>
              Call your local police non-emergency line first to confirm they offer this service and ask 
              about their process.
            </p>

            <h2>Method 3: Licensed Dealer (FFL)</h2>
            
            <p>
              Federal Firearms Licensees have NCIC access and can run serial checks:
            </p>
            
            <ul>
              <li>May charge a fee ($10-50)</li>
              <li>More convenient than police station</li>
              <li>Can complete transfer if gun is clear</li>
            </ul>

            <h2>Red Flags: Signs a Gun Might Be Stolen</h2>

            <Card className="my-8 border-destructive/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  Warning Signs
                </h3>
                <ul className="space-y-2">
                  <li>• Serial number filed off or altered (federal crime)</li>
                  <li>• Seller refuses serial number verification</li>
                  <li>• Price significantly below market value</li>
                  <li>• Cash only, no documentation</li>
                  <li>• Seller can't provide purchase history</li>
                  <li>• Meets only in unusual locations</li>
                  <li>• Pressuring you to buy immediately</li>
                  <li>• No box, manual, or original accessories</li>
                </ul>
              </CardContent>
            </Card>

            <h2>What to Do If a Gun is Flagged as Stolen</h2>
            
            <ol>
              <li><strong>Do NOT complete the purchase</strong></li>
              <li><strong>Do NOT take possession</strong></li>
              <li>Politely decline and leave safely</li>
              <li>Note seller description/vehicle if possible</li>
              <li>Contact local police with information</li>
              <li>File a report through SafeOrStolen</li>
            </ol>

            <h2>State-Specific Resources</h2>
            
            <p>Some states have additional stolen gun databases:</p>
            
            <ul>
              <li><strong>Arizona:</strong> <Link to="/blog/arizona-theftaz-guide" className="text-primary">TheftAZ</Link> - state stolen vehicle/property database</li>
              <li><strong>California:</strong> DOJ Automated Firearms System</li>
              <li><strong>Florida:</strong> FDLE stolen gun reporting</li>
              <li><strong>Texas:</strong> TCIC (Texas Crime Information Center)</li>
            </ul>

            <h2>Protecting Yourself Long-Term</h2>
            
            <ul>
              <li>Always verify before any private sale</li>
              <li>Keep purchase documentation</li>
              <li>Save verification results</li>
              <li>Consider FFL transfers for private purchases</li>
              <li>Report any suspicious sellers</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 my-8">
              <Button asChild size="lg">
                <Link to="/verify">
                  <Shield className="mr-2 h-4 w-4" />
                  Verify Gun Serial Number Free
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/blog/fbi-lost-stolen-gun-database">
                  About FBI Stolen Database
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <h2>Related Guides</h2>
            <ul>
              <li><Link to="/blog/gun-serial-number-lookup-free" className="text-primary">Gun Serial Number Lookup Free</Link></li>
              <li><Link to="/blog/fbi-lost-stolen-gun-database" className="text-primary">FBI Lost and Stolen Gun Database</Link></li>
              <li><Link to="/blog/stolen-gun-database-search" className="text-primary">Stolen Gun Database Search</Link></li>
            </ul>
          </article>
        </div>
      </div>
    </>
  );
}
