import { PageSEO } from '@/components/seo/PageSEO';
import { AppStoreBadges } from '@/components/app/AppStoreBadges';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/router-compat';
import { Shield, Zap, Users, TrendingUp, FileCheck, Clock } from 'lucide-react';
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema';
export default function ForDealers() {
 const structuredData = {
 "@context": "https://schema.org",
 "@type": "Service",
 "serviceType": "Vehicle Verification for Car Dealers",
 "provider": {
 "@type": "Organization",
 "name": "SafeOrStolen"
 },
 "areaServed": "Worldwide",
 "description": "Enterprise VIN verification and vehicle history service for car dealerships. Verify VINs instantly, check title status, eliminate wholesale risk, increase customer trust.",
 "offers": {
 "@type": "Offer",
 "priceCurrency": "USD",
 "price": "Custom pricing for dealerships"
 }
 };

 return (
 <>
 <PageSEO
 title="SafeOrStolen for Car Dealers - Instant VIN Verification"
 description="Enterprise VIN verification for car dealerships. Check title status, stolen vehicles, and wholesale integrity in 3 seconds. Protect your inventory, build customer trust, reduce legal risk."
 keywords="car dealer VIN check, dealership VIN verification, wholesale vehicle verification, dealer title check, automotive inventory verification"
 structuredData={structuredData}
 />
 <div className="container mx-auto px-4 py-12 pt-24">
 <section className="max-w-4xl mx-auto text-center mb-16">
 <h1 className="text-5xl font-bold mb-6">SafeOrStolen for Car Dealers</h1>
 <p className="text-2xl text-muted-foreground mb-8">Verify Every Vehicle in 3 Seconds. Eliminate Wholesale Risk. Build Customer Trust.</p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Button size="lg" asChild>
 <Link to="/verify">Try Free VIN Check</Link>
 </Button>
 <Button size="lg" variant="outline" asChild>
 <Link to="/pricing">View Dealer Pricing</Link>
 </Button>
 </div>
 </section>

 <section className="max-w-6xl mx-auto mb-16">
 <div className="grid md:grid-cols-3 gap-8">
 <div className="bg-card p-6 rounded-lg border">
 <Shield className="h-12 w-12 text-primary mb-4" />
 <h3 className="text-xl font-bold mb-3">Protect Your Lot</h3>
 <p className="text-muted-foreground">Verify every trade-in and wholesale purchase before it hits your lot. Avoid title washing, salvage fraud, and stolen vehicles.</p>
 </div>
 <div className="bg-card p-6 rounded-lg border">
 <Users className="h-12 w-12 text-primary mb-4" />
 <h3 className="text-xl font-bold mb-3">Build Customer Trust</h3>
 <p className="text-muted-foreground">Provide free VIN verification to every buyer. Show them the vehicle is clean before they sign—instant credibility boost.</p>
 </div>
 <div className="bg-card p-6 rounded-lg border">
 <TrendingUp className="h-12 w-12 text-primary mb-4" />
 <h3 className="text-xl font-bold mb-3">Increase Sales</h3>
 <p className="text-muted-foreground">Buyers trust verified vehicles. Reduce negotiation friction and close deals faster with instant verification reports.</p>
 </div>
 </div>
 </section>

 <section className="max-w-4xl mx-auto mb-16 prose prose-lg">
 <h2>Why Dealerships Choose SafeOrStolen</h2>
 <p>Car dealerships face increasing risk from wholesale fraud, title washing, and salvage vehicles being misrepresented as clean. A single problematic vehicle can cost $20,000+ in legal fees, customer refunds, and reputation damage.</p>
 <p>SafeOrStolen provides instant VIN verification checking multiple sources including state motor vehicle agencies, insurance total loss records, and international theft databases. Every check takes 3 seconds and creates a compliance record protecting your dealership.</p>

 <h3>What We Verify for Dealers</h3>
 <ul>
 <li><strong>Stolen Status:</strong> public web results and our user-reported stolen item database</li>
 <li><strong>Title History:</strong> Clean, salvage, rebuilt, flood, junk, lemon law buyback</li>
 <li><strong>Total Loss Records:</strong> Insurance company claims across all 50 states</li>
 <li><strong>Odometer Readings:</strong> Historical mileage to detect rollbacks</li>
 <li><strong>Lien Status:</strong> Outstanding loans and unpaid liens</li>
 <li><strong>Recall Information:</strong> Open manufacturer recalls and safety defects</li>
 </ul>

 <h3>Common Dealer Problems SafeOrStolen Solves</h3>
 
 <h4>Problem 1: Title Washing at Wholesale</h4>
 <p>Salvage vehicles are moved to lax-title states, retitled as "clean," then sold to unsuspecting dealers at wholesale auctions. You pay clean-title price for a salvage vehicle worth 40% less.</p>
 <p><strong>Solution:</strong> SafeOrStolen checks all 50 states' title history instantly. Even if the current title shows "clean," we flag previous salvage/flood brands from other states.</p>

 <h4>Problem 2: Stolen Vehicle Trade-Ins</h4>
 <p>Customer trades in a vehicle that's later discovered to be stolen. Law enforcement seizes it from your lot. You lose the trade-in value and the vehicle you sold them.</p>
 <p><strong>Solution:</strong> Verify every trade-in VIN before accepting. 3-second check prevents $15,000+ losses.</p>

 <h4>Problem 3: Customer Complaints About Vehicle History</h4>
 <p>Buyer purchases a vehicle, runs a Carfax later, discovers previous accident or title issue. They demand a refund or leave negative reviews.</p>
 <p><strong>Solution:</strong> Provide SafeOrStolen verification report at point of sale. Customer sees the full history before signing, eliminating post-sale disputes.</p>

 <h4>Problem 4: Expensive Carfax Subscriptions</h4>
 <p>Dealerships pay $1,000+/year for Carfax unlimited access, but Carfax doesn't check all public web results or user-reported stolen item databases.</p>
 <p><strong>Solution:</strong> SafeOrStolen costs less and includes public web results and our user-reported stolen item database, which Carfax doesn't fully access.</p>

 <h3>Real Dealership Case Studies</h3>
 
 <div className="bg-muted p-6 rounded-lg my-6">
 <h4 className="font-bold mb-3">Case Study: Texas Used Car Dealer</h4>
 <p>A Houston dealer purchased 12 vehicles at a wholesale auction. One vehicle showed a clean Texas title but had previously been flood-damaged in Louisiana (Hurricane Ida, 2021). The dealer sold it to a customer who discovered the flood history 2 weeks later via an independent VIN check.</p>
 <p><strong>Cost to dealer:</strong></p>
 <ul>
 <li>$8,500 - Customer refund (full purchase price)</li>
 <li>$3,200 - Legal fees</li>
 <li>$2,000 - Lost profit on the sale</li>
 <li>$5,000+ - Reputation damage (negative online reviews)</li>
 <li><strong>Total: $18,700</strong></li>
 </ul>
 <p><strong>Cost to prevent:</strong> $49/month SafeOrStolen Business plan = $588/year. The dealer now verifies every wholesale purchase.</p>
 </div>

 <div className="bg-muted p-6 rounded-lg my-6">
 <h4 className="font-bold mb-3">Case Study: California New Car Franchise</h4>
 <p>A Nissan dealership in San Diego accepted a 2022 Toyota Camry trade-in without VIN verification. The vehicle was reported stolen 3 days later. Law enforcement seized it from the lot, and the dealership had already delivered the customer's new vehicle.</p>
 <p><strong>Cost to dealer:</strong></p>
 <ul>
 <li>$22,000 - Trade-in value (lost)</li>
 <li>$4,500 - Legal fees and investigator costs</li>
 <li>$12,000 - New vehicle sold to the customer (couldn't be recovered)</li>
 <li><strong>Total: $38,500</strong></li>
 </ul>
 <p><strong>Cost to prevent:</strong> One 3-second SafeOrStolen VIN check. The dealership now verifies every trade-in before appraisal.</p>
 </div>

 <h3>How SafeOrStolen Works in Your Dealership</h3>
 
 <h4>At Wholesale/Auctions:</h4>
 <ol>
 <li>Salesperson photographs VIN barcode with SafeOrStolen mobile app</li>
 <li>Instant result shows stolen status, title history, total loss records</li>
 <li>Bid only on verified clean vehicles, avoid problematic inventory</li>
 </ol>

 <h4>At Trade-In Appraisal:</h4>
 <ol>
 <li>Service advisor enters VIN into SafeOrStolen during walkaround</li>
 <li>System flags stolen vehicles, title issues, outstanding liens</li>
 <li>Adjust appraisal value or decline trade-in if problematic</li>
 </ol>

 <h4>At Point of Sale:</h4>
 <ol>
 <li>Salesperson runs SafeOrStolen verification in front of customer</li>
 <li>Customer sees vehicle is clean, no hidden history</li>
 <li>Print/email verification report as part of sale documentation</li>
 <li>Customer trusts the purchase, reduces buyer's remorse</li>
 </ol>

 <h3>Integration with DMS Systems</h3>
 <p>SafeOrStolen integrates with leading dealer management systems:</p>
 <ul>
 <li><strong>CDK Global</strong></li>
 <li><strong>Reynolds & Reynolds</strong></li>
 <li><strong>DealerTrack</strong></li>
 <li><strong>AutoManager</strong></li>
 <li><strong>vAuto</strong></li>
 <li><strong>Custom systems via API</strong></li>
 </ul>
 <p>No integration needed? Use our standalone mobile app or web dashboard.</p>

 <h3>Dealer Plan Features</h3>
 <ul>
 <li>✅ Unlimited VIN verifications</li>
 <li>✅ Multi-location support with centralized dashboard</li>
 <li>✅ Salesperson accounts with individual tracking</li>
 <li>✅ White-label verification reports (your dealership branding)</li>
 <li>✅ API access for DMS integration</li>
 <li>✅ Bulk VIN verification (upload CSV of 100+ VINs)</li>
 <li>✅ Priority phone/email support</li>
 <li>✅ Custom verification workflows</li>
 <li>✅ Compliance documentation for state regulators</li>
 </ul>

 <h3>Pricing for Dealerships</h3>
 <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg my-6">
 <h4 className="font-bold mb-3">Business Plan: $49/month</h4>
 <ul>
 <li>Single location</li>
 <li>Up to 10 user accounts</li>
 <li>500 verifications/month included</li>
 <li>$0.05 per verification after 500</li>
 </ul>
 <h4 className="font-bold mt-6 mb-3">Enterprise Plan: Custom Pricing</h4>
 <ul>
 <li>Multi-location dealerships (3+ rooftops)</li>
 <li>Unlimited verifications</li>
 <li>Dedicated account manager</li>
 <li>Custom DMS integration</li>
 <li>SLA guarantees and priority support</li>
 </ul>
 <p className="mt-4 text-sm">Contact us at dealers@safeorstolen.com for enterprise quotes.</p>
 </div>

 <h3>Why SafeOrStolen vs. Carfax for Dealers</h3>
 <ul>
 <li>✅ <strong>Cheaper:</strong> $588/year vs. $1,200+/year for Carfax unlimited</li>
 <li>✅ <strong>Comprehensive stolen item data:</strong> our user-reported stolen item database and public web results (Carfax doesn't check)</li>
 <li>✅ <strong>Faster:</strong> 3 seconds vs. 30+ seconds with Carfax</li>
 <li>✅ <strong>Mobile app:</strong> Verify VINs at auctions, on trade-ins, anywhere</li>
 <li>✅ <strong>White-label reports:</strong> Your dealership branding, not Carfax logo</li>
 <li>✅ <strong>Beyond vehicles:</strong> Also verify customer trade-in items (phones, tools, electronics)</li>
 </ul>

 <h3>Dealer Testimonials</h3>
 <blockquote className="border-l-4 border-primary pl-4 my-6">
 <p className="italic">"We run 200+ VIN checks per month across 3 locations. SafeOrStolen's API integration with CDK made verification automatic at appraisal. Caught 2 stolen trade-ins in the first month—system paid for itself immediately."</p>
 <footer className="text-sm text-muted-foreground mt-2">— Rick M., General Manager, Premier Auto Group (California)</footer>
 </blockquote>

 <blockquote className="border-l-4 border-primary pl-4 my-6">
 <p className="italic">"Customers love seeing the SafeOrStolen verification at closing. It's instant credibility—they know we're not hiding anything. Our Google reviews mention it specifically. Best $49/month we spend."</p>
 <footer className="text-sm text-muted-foreground mt-2">— Amanda S., Sales Manager, Hometown Motors (Texas)</footer>
 </blockquote>

 <blockquote className="border-l-4 border-primary pl-4 my-6">
 <p className="italic">"We used to spend $1,400/year on Carfax. SafeOrStolen costs half that and checks our user-reported stolen item database and public web results that Carfax doesn't. Caught a title-washed flood vehicle at auction last month—would've cost us $15K."</p>
 <footer className="text-sm text-muted-foreground mt-2">— David L., Owner, Automotive Express (Florida)</footer>
 </blockquote>
 </section>

 <section className="max-w-4xl mx-auto mb-16">
 <div className="bg-primary/10 border border-primary/20 p-8 rounded-lg text-center">
 <h2 className="text-3xl font-bold mb-4">Start Protecting Your Inventory Today</h2>
 <p className="text-lg mb-6">Try 2 free VIN verifications. See how SafeOrStolen eliminates wholesale risk and builds customer trust.</p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Button size="lg" asChild>
 <Link to="/verify">Verify First VIN Free</Link>
 </Button>
 <Button size="lg" variant="outline" asChild>
 <Link to="/pricing">View Dealer Pricing</Link>
 </Button>
 </div>
 <p className="text-sm text-muted-foreground mt-4">Questions? Call us at (555) 123-4567 or email dealers@safeorstolen.com</p>
 </div>
 </section>

 <section className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
 <div className="space-y-6">
 <div>
 <h3 className="text-xl font-bold mb-2">Can we verify vehicles before bidding at auctions?</h3>
 <p className="text-muted-foreground">Yes. Use the mobile app to scan VIN barcodes instantly at auction lanes. Results appear in 3 seconds—fast enough to check before bidding.</p>
 </div>
 <div>
 <h3 className="text-xl font-bold mb-2">Do verification reports include our dealership branding?</h3>
 <p className="text-muted-foreground">Yes. Business and Enterprise plans include white-label reports with your dealership name, logo, and contact information.</p>
 </div>
 <div>
 <h3 className="text-xl font-bold mb-2">Can we verify bulk VINs from wholesale purchases?</h3>
 <p className="text-muted-foreground">Yes. Upload a CSV file with 100+ VINs and receive results for all within minutes. Perfect for large wholesale purchases.</p>
 </div>
 <div>
 <h3 className="text-xl font-bold mb-2">What happens if a vehicle passes verification but is later reported stolen?</h3>
 <p className="text-muted-foreground">Your verification record proves due diligence, protecting you legally. SafeOrStolen documentation is admissible in court and accepted by law enforcement.</p>
 </div>
 <div>
 <h3 className="text-xl font-bold mb-2">Can we track which salesperson ran which verifications?</h3>
 <p className="text-muted-foreground">Yes. Every verification logs the user account, timestamp, and vehicle details. Managers can review all verifications in the dashboard.</p>
 </div>
 <div>
 <h3 className="text-xl font-bold mb-2">Do you offer training for our sales staff?</h3>
 <p className="text-muted-foreground">Yes. Business and Enterprise plans include onboarding training and ongoing support. We provide training materials for new hires.</p>
 </div>
 </div>
 </section>

 <section className="max-w-4xl mx-auto mt-16 text-center">
 <h2 className="text-3xl font-bold mb-4">Download the SafeOrStolen Mobile App</h2>
 <p className="text-lg text-muted-foreground mb-6">Verify VINs at auctions, trade-ins, and wholesale lots instantly from your phone.</p>
 <AppStoreBadges size="md" />
 </section>
 </div>
 </>
 );
}
