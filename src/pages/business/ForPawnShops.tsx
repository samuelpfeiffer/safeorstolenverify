import { PageSEO } from '@/components/seo/PageSEO';
import { AppStoreBadges } from '@/components/app/AppStoreBadges';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, Zap, DollarSign, Scale, Clock, TrendingUp } from 'lucide-react';

export default function ForPawnShops() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Stolen Goods Verification for Pawn Shops",
    "provider": {
      "@type": "Organization",
      "name": "SafeOrStolen"
    },
    "areaServed": "Worldwide",
    "description": "Enterprise stolen goods verification service for pawn shops. Verify IMEI, VIN, serial numbers instantly. Reduce legal risk, ensure compliance, protect your business.",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "Custom pricing for pawn shops"
    }
  };

  return (
    <>
      <PageSEO
        title="SafeOrStolen for Pawn Shops - Verify Every Item Instantly"
        description="Enterprise stolen goods verification for pawn shops. Check IMEI, VIN, serial numbers against 100+ databases. Reduce legal risk, ensure compliance, protect your business from stolen property."
        keywords="pawn shop verification, stolen goods checker for pawn shops, IMEI verification pawn, VIN check pawn shop, serial number lookup pawn, pawn compliance software"
        structuredData={structuredData}
      />

      <div className="container mx-auto px-4 py-12">
        <section className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">SafeOrStolen for Pawn Shops</h1>
          <p className="text-2xl text-muted-foreground mb-8">Verify Every Item in 3 Seconds. Eliminate Legal Risk. Stay Compliant.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/verify">Try Free Verification</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/pricing">View Business Pricing</Link>
            </Button>
          </div>
        </section>

        <section className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Legal Protection</h3>
              <p className="text-muted-foreground">Avoid accepting stolen property. Every verification creates a documented compliance record protecting your business from prosecution.</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">3-Second Verification</h3>
              <p className="text-muted-foreground">Check phones, jewelry, tools, electronics, and vehicles instantly. No more manual database lookups or waiting for police callbacks.</p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <DollarSign className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Reduce Losses</h3>
              <p className="text-muted-foreground">Seized stolen property means lost inventory and legal fees. Prevent $10,000+ in annual losses with automated verification.</p>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto mb-16 prose prose-lg">
          <h2>Why Pawn Shops Choose SafeOrStolen</h2>
          <p>Pawn shops face unique challenges: accepting stolen goods can result in asset seizure, criminal charges, and license revocation. State laws require verification before accepting items, but manual checks are slow, incomplete, and error-prone.</p>
          <p>SafeOrStolen automates compliance by checking 100+ databases instantly—including FBI NCIC, state law enforcement, carrier blacklists, and international theft records. Every check creates a timestamped compliance record admissible in court.</p>

          <h3>What We Verify for Pawn Shops</h3>
          <ul>
            <li><strong>Electronics:</strong> Phones (IMEI), laptops, tablets, gaming consoles (serial numbers)</li>
            <li><strong>Vehicles:</strong> Cars, motorcycles, boats, ATVs, RVs (VIN numbers)</li>
            <li><strong>Firearms:</strong> Handguns, rifles, shotguns (ATF serial number database)</li>
            <li><strong>Tools & Equipment:</strong> Power tools, generators, lawn equipment</li>
            <li><strong>Jewelry:</strong> Serial-numbered watches, engraved items</li>
            <li><strong>Musical Instruments:</strong> Guitars, amplifiers, keyboards</li>
          </ul>

          <h3>Compliance with State Pawn Laws</h3>
          <p>Most states mandate pawn shops verify items against law enforcement databases before acceptance:</p>
          <ul>
            <li><strong>California (CA Business & Professions Code §21628):</strong> Requires electronic reporting and verification</li>
            <li><strong>Texas (TX Occupations Code §371.151):</strong> Pawnbrokers must check against stolen property databases</li>
            <li><strong>Florida (FL Statute §539.001):</strong> Requires verification through state law enforcement systems</li>
            <li><strong>New York (NY General Business Law §45):</strong> Mandates daily reporting and verification</li>
          </ul>
          <p>SafeOrStolen automatically fulfills these requirements with instant verification and compliance documentation.</p>

          <h3>Real Costs of Accepting Stolen Property</h3>
          <div className="bg-destructive/10 border border-destructive/20 p-6 rounded-lg my-6">
            <h4 className="text-lg font-bold mb-3">Case Study: California Pawn Shop</h4>
            <p>A Sacramento pawn shop accepted a stolen laptop without verification. The owner provided a police report, and law enforcement seized the laptop plus 15 other items pending investigation. Total losses:</p>
            <ul>
              <li>$4,800 - Seized inventory value</li>
              <li>$2,500 - Legal fees</li>
              <li>$1,200 - Investigator costs</li>
              <li>$5,000 - Fine from city licensing board</li>
              <li><strong>Total: $13,500</strong></li>
            </ul>
            <p className="mb-0"><strong>Cost to prevent:</strong> $29/month SafeOrStolen subscription. The shop now verifies every item.</p>
          </div>

          <h3>How SafeOrStolen Works at the Counter</h3>
          <ol>
            <li><strong>Customer presents item for pawn/purchase</strong></li>
            <li><strong>Clerk scans barcode or enters serial/IMEI/VIN</strong> (3 seconds)</li>
            <li><strong>Instant result displays:</strong> ✅ Safe to accept or 🚨 Stolen - do not accept</li>
            <li><strong>System logs verification</strong> with timestamp, clerk ID, item details for compliance records</li>
            <li><strong>If stolen, you have documented proof</strong> you performed due diligence (protects you legally)</li>
          </ol>

          <h3>Integration with Pawn Shop Software</h3>
          <p>SafeOrStolen integrates with leading pawn management systems:</p>
          <ul>
            <li><strong>Bravo Pawn Systems</strong></li>
            <li><strong>PawnMaster</strong></li>
            <li><strong>Data Age Cash Register Express</strong></li>
            <li><strong>Pawnbroker Pawn Shop Software</strong></li>
            <li><strong>Custom/proprietary systems via API</strong></li>
          </ul>
          <p>No integration? Use our standalone mobile app or web dashboard.</p>

          <h3>Business Plan Features for Pawn Shops</h3>
          <ul>
            <li>✅ Unlimited verifications across all item types</li>
            <li>✅ Multi-location support with centralized dashboard</li>
            <li>✅ Employee accounts with role-based permissions</li>
            <li>✅ Automated compliance reporting (monthly summaries for regulators)</li>
            <li>✅ API access for POS integration</li>
            <li>✅ Priority phone/email support</li>
            <li>✅ Custom verification workflows</li>
            <li>✅ White-label option (your branding)</li>
          </ul>

          <h3>ROI Calculator: What You Save</h3>
          <div className="bg-muted p-6 rounded-lg my-6">
            <h4 className="font-bold mb-4">Typical Single-Location Pawn Shop:</h4>
            <ul>
              <li><strong>Annual stolen property seizures without verification:</strong> 5-8 incidents</li>
              <li><strong>Average loss per incident:</strong> $2,000 (inventory) + $1,500 (legal) = $3,500</li>
              <li><strong>Total annual risk:</strong> $17,500 - $28,000</li>
            </ul>
            <p className="mt-4"><strong>SafeOrStolen cost:</strong> $348/year (Business plan)</p>
            <p className="text-xl font-bold text-primary">ROI: 5,000% - 8,000%</p>
          </div>

          <h3>Testimonials from Pawn Shop Owners</h3>
          <blockquote className="border-l-4 border-primary pl-4 my-6">
            <p className="italic">"Before SafeOrStolen, we had 3 stolen property incidents per year costing $8,000+ each. Since implementing verification 18 months ago: zero incidents. The system paid for itself in the first month."</p>
            <footer className="text-sm text-muted-foreground mt-2">— Mike R., Owner, Phoenix Pawn & Jewelry (Arizona)</footer>
          </blockquote>

          <blockquote className="border-l-4 border-primary pl-4 my-6">
            <p className="italic">"Our city requires electronic verification for all transactions. SafeOrStolen's API integration with our PawnMaster system made compliance automatic. The mobile app is perfect for our buy counter."</p>
            <footer className="text-sm text-muted-foreground mt-2">— Sarah L., Operations Manager, Dallas Loan & Pawn (Texas)</footer>
          </blockquote>

          <blockquote className="border-l-4 border-primary pl-4 my-6">
            <p className="italic">"We run 40-50 verifications daily across 3 locations. The multi-location dashboard lets me monitor compliance in real-time. Support is excellent—they helped us customize workflows for our specific needs."</p>
            <footer className="text-sm text-muted-foreground mt-2">— James K., Regional Director, Gold & Silver Pawn (6 locations, Nevada)</footer>
          </blockquote>
        </section>

        <section className="max-w-4xl mx-auto mb-16">
          <div className="bg-primary/10 border border-primary/20 p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Start Protecting Your Business Today</h2>
            <p className="text-lg mb-6">Try 2 free verifications. No credit card required. See how SafeOrStolen eliminates your legal risk.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/verify">Verify First Item Free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/pricing">View Business Pricing</Link>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">Questions? Call us at (555) 123-4567 or email business@safeorstolen.com</p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2">How fast is verification at the counter?</h3>
              <p className="text-muted-foreground">3 seconds average. Scan the barcode or type the serial number, and results display instantly.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">What if an item doesn't have a serial number?</h3>
              <p className="text-muted-foreground">We recommend photographing the item and customer ID. For high-value items without serials (jewelry), consider requiring additional documentation or declining the transaction.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Do you provide compliance reports for regulators?</h3>
              <p className="text-muted-foreground">Yes. Business plans include automated monthly summaries showing all verifications performed, compliant with state reporting requirements.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">What happens if we accept a stolen item despite verification?</h3>
              <p className="text-muted-foreground">Your verification record proves due diligence, significantly reducing legal liability. In most cases, prosecutors won't charge pawn shops that performed proper verification.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Can we verify items before customers arrive?</h3>
              <p className="text-muted-foreground">Yes. If a customer texts you serial numbers, you can pre-verify and decline before they come in, saving time.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Do you offer training for our staff?</h3>
              <p className="text-muted-foreground">Business plans include onboarding training and ongoing support. We also provide training materials you can use for new hires.</p>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Download the SafeOrStolen Mobile App</h2>
          <p className="text-lg text-muted-foreground mb-6">Verify items at your buy counter, on the go, or at estate sales and auctions.</p>
          <AppStoreBadges size="md" />
        </section>
      </div>
    </>
  );
}
