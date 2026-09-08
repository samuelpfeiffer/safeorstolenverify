import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@/lib/router-compat';
import { Shield, CheckCircle, AlertTriangle, Database, FileText, Users, Gavel, Scale, Search } from 'lucide-react';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';

export default function ForAuctionHouses() {
 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 {
 "@type": "Question",
 "name": "How do auction houses verify consignment items?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Auction houses use SafeOrStolen's bulk verification to check VINs, serial numbers, and IMEI numbers against community theft registries, insurance claims, and stolen property registries before listing items for sale."
 }
 },
 {
 "@type": "Question",
 "name": "What happens if an auction house sells a stolen item?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Selling stolen property exposes auction houses to asset seizure, civil lawsuits from rightful owners, criminal liability for negligence, loss of auctioneer licenses, and irreparable reputation damage."
 }
 },
 {
 "@type": "Question",
 "name": "Can SafeOrStolen check items in bulk for auctions?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes. SafeOrStolen's enterprise plans support CSV uploads of 1,000+ VINs, serial numbers, or IMEI numbers with results returned in minutes. Flagged items include detailed reports for compliance documentation."
 }
 },
 {
 "@type": "Question",
 "name": "What types of auction items can SafeOrStolen verify?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "SafeOrStolen verifies vehicles (cars, trucks, motorcycles, boats), electronics (phones, laptops, cameras), heavy equipment, firearms, jewelry, art, musical instruments, power tools, and any item with a serial number or VIN."
 }
 },
 {
 "@type": "Question",
 "name": "Does SafeOrStolen provide compliance documentation for auctions?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes. Every verification generates a timestamped compliance report showing the item was checked against law enforcement and insurance databases before auction. These reports serve as due diligence documentation."
 }
 }
 ]
 };

 return (
 <>
 <PageSEO
 title="SafeOrStolen for Auction Houses - Verify Consignments"
 description="Bulk verification for auction consignments. Check VINs, serials, and IMEI numbers against stolen databases before auction day."
 keywords="auction house verification, consignment verification, auction fraud prevention, bulk VIN check, auction compliance"
 canonical="/for-auction-houses"
 structuredData={faqSchema}
 />
 <div className="min-h-screen bg-background">
 {/* Hero Section */}
 <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto text-center">
 <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
 SafeOrStolen for Auction Houses
 </h1>
 <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
 Verify every consignment item before auction day. Protect your bidders, reduce legal exposure, and maintain the reputation your auction house has spent years building.
 </p>
 <div className="flex flex-wrap gap-4 justify-center">
 <Button size="lg" asChild>
 <Link to="/verify">Try Bulk Verification</Link>
 </Button>
 <Button size="lg" variant="outline" asChild>
 <Link to="/pricing">View Enterprise Pricing</Link>
 </Button>
 </div>
 </div>
 </div>
 </section>

 {/* Why Verification Matters */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-8">Why Auction Houses Need Consignment Verification</h2>
 <div className="prose prose-lg max-w-none text-muted-foreground">
 <p>
 Auction houses occupy a unique position in the secondhand market. Unlike casual sellers on Facebook Marketplace or Craigslist, auction houses are trusted intermediaries. Bidders expect that items have been vetted, authenticated, and legally cleared before they hit the auction block. When a stolen vehicle, piece of equipment, or electronic device slips through consignment intake, the consequences extend far beyond a single transaction.
 </p>
 <p>
 In 2026 alone, law enforcement agencies across the United States recovered over $4.7 billion in stolen property, and a significant portion of that property had been resold through seemingly legitimate channels including auction houses, consignment shops, and online liquidation platforms. The FBI's National Stolen Property Database shows that stolen vehicles, construction equipment, electronics, and firearms are the most commonly laundered items through auction channels.
 </p>
 <p>
 SafeOrStolen provides auction houses with enterprise-grade bulk verification tools that check every consignment item against law enforcement stolen property databases, insurance claim registries, carrier and theft databases, manufacturer records, and pawn shop transaction databases. Whether you run a weekly vehicle auction, estate sale operation, government surplus liquidation, or specialty auction house, SafeOrStolen ensures that every item crossing your auction block has been verified clean.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Legal Risks */}
 <section className="py-16 bg-muted/30">
 <div className="container mx-auto px-4">
 <div className="max-w-5xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12">Legal Risks of Selling Unverified Consignments</h2>
 <div className="grid md:grid-cols-2 gap-6">
 <Card>
 <CardContent className="pt-6">
 <div className="flex items-start gap-4">
 <Scale className="w-10 h-10 text-destructive flex-shrink-0" />
 <div>
 <h3 className="font-semibold mb-2">Asset Seizure and Forfeiture</h3>
 <p className="text-muted-foreground text-sm">Law enforcement can seize stolen items from winning bidders, who then pursue legal action against the auction house for selling them stolen property. The auction house may also forfeit the sale proceeds.</p>
 </div>
 </div>
 </CardContent>
 </Card>
 <Card>
 <CardContent className="pt-6">
 <div className="flex items-start gap-4">
 <AlertTriangle className="w-10 h-10 text-destructive flex-shrink-0" />
 <div>
 <h3 className="font-semibold mb-2">Criminal Liability</h3>
 <p className="text-muted-foreground text-sm">Auction houses that fail to perform due diligence on consignment items can face criminal charges for trafficking in stolen property, especially for regulated items like vehicles and firearms.</p>
 </div>
 </div>
 </CardContent>
 </Card>
 <Card>
 <CardContent className="pt-6">
 <div className="flex items-start gap-4">
 <FileText className="w-10 h-10 text-destructive flex-shrink-0" />
 <div>
 <h3 className="font-semibold mb-2">License Revocation</h3>
 <p className="text-muted-foreground text-sm">State licensing boards can suspend or revoke auctioneer licenses if stolen property is repeatedly sold. This applies to vehicle auctions, firearms auctions, and general merchandise operations.</p>
 </div>
 </div>
 </CardContent>
 </Card>
 <Card>
 <CardContent className="pt-6">
 <div className="flex items-start gap-4">
 <Users className="w-10 h-10 text-destructive flex-shrink-0" />
 <div>
 <h3 className="font-semibold mb-2">Reputation Damage</h3>
 <p className="text-muted-foreground text-sm">A single stolen item scandal can destroy decades of reputation. Bidders lose trust, consignors move to competing auction houses, and media coverage amplifies the damage far beyond the original incident.</p>
 </div>
 </div>
 </CardContent>
 </Card>
 </div>
 </div>
 </div>
 </section>

 {/* Bulk Verification Features */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <div className="max-w-5xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12">Bulk Verification for Auction Professionals</h2>
 <div className="grid md:grid-cols-3 gap-6">
 <Card className="text-center">
 <CardContent className="pt-6">
 <Database className="w-12 h-12 text-primary mx-auto mb-4" />
 <h3 className="font-semibold mb-2">CSV Upload</h3>
 <p className="text-sm text-muted-foreground">Upload spreadsheets with 1,000+ VINs, serial numbers, or IMEI numbers. Results returned in minutes, not days.</p>
 </CardContent>
 </Card>
 <Card className="text-center">
 <CardContent className="pt-6">
 <Search className="w-12 h-12 text-primary mx-auto mb-4" />
 <h3 className="font-semibold mb-2">100+ Database Sources</h3>
 <p className="text-sm text-muted-foreground">Every item checked against law enforcement records, insurance claims, carrier and theft databases, vehicle theft and title databases, and pawn shop databases.</p>
 </CardContent>
 </Card>
 <Card className="text-center">
 <CardContent className="pt-6">
 <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
 <h3 className="font-semibold mb-2">Compliance Reports</h3>
 <p className="text-sm text-muted-foreground">Timestamped verification reports for every item. Downloadable PDF documentation for your compliance files and insurance records.</p>
 </CardContent>
 </Card>
 <Card className="text-center">
 <CardContent className="pt-6">
 <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
 <h3 className="font-semibold mb-2">Flagged Item Alerts</h3>
 <p className="text-sm text-muted-foreground">Items matching stolen property records are instantly flagged with detailed reports including theft dates, reporting agencies, and case numbers.</p>
 </CardContent>
 </Card>
 <Card className="text-center">
 <CardContent className="pt-6">
 <Gavel className="w-12 h-12 text-primary mx-auto mb-4" />
 <h3 className="font-semibold mb-2">Catalog Integration</h3>
 <p className="text-sm text-muted-foreground">White-label verification badges for your auction catalogs. Show bidders that every item has been independently verified clean.</p>
 </CardContent>
 </Card>
 <Card className="text-center">
 <CardContent className="pt-6">
 <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
 <h3 className="font-semibold mb-2">Pre-Auction Clearance</h3>
 <p className="text-sm text-muted-foreground">Run verification before items reach the auction floor. Remove flagged items before they create liability for your business and bidders.</p>
 </CardContent>
 </Card>
 </div>
 </div>
 </div>
 </section>

 {/* What We Verify */}
 <section className="py-16 bg-muted/30">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-8">Auction Item Categories We Verify</h2>
 <div className="prose prose-lg max-w-none text-muted-foreground">
 <p>
 SafeOrStolen supports verification for virtually every category of auction merchandise. For <strong>vehicle auctions</strong>, we check VINs against vehicle theft and title databases, insurance total loss records, and state DMV stolen vehicle databases covering cars, trucks, motorcycles, RVs, boats, and trailers. For <strong>electronics and phone auctions</strong>, we verify IMEI numbers against carrier and theft databases, and insurance claim registries. For <strong>equipment auctions</strong>, serial numbers are checked against law enforcement stolen property databases, LeadsOnline pawn records, and manufacturer theft registries.
 </p>
 <p>
 We also support <strong>firearms auctions</strong> with serial number verification, <strong>jewelry and luxury goods</strong> with insurance claim cross-referencing, <strong>musical instruments</strong> with manufacturer serial number validation, and <strong>power tools and construction equipment</strong> with contractor theft database checks. If it has a serial number, VIN, or IMEI, SafeOrStolen can verify it before it reaches your auction block.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* FAQ Section */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <div className="max-w-3xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
 <div className="space-y-6">
 <Card>
 <CardContent className="p-6">
 <h3 className="font-semibold mb-2">How do auction houses verify consignment items?</h3>
 <p className="text-muted-foreground">Auction houses use SafeOrStolen's bulk verification to check VINs, serial numbers, and IMEI numbers against community theft registries, insurance claims, and stolen property registries before listing items for sale.</p>
 </CardContent>
 </Card>
 <Card>
 <CardContent className="p-6">
 <h3 className="font-semibold mb-2">What happens if an auction house sells a stolen item?</h3>
 <p className="text-muted-foreground">Selling stolen property exposes auction houses to asset seizure, civil lawsuits from rightful owners, criminal liability for negligence, loss of auctioneer licenses, and irreparable reputation damage with bidders and consignors.</p>
 </CardContent>
 </Card>
 <Card>
 <CardContent className="p-6">
 <h3 className="font-semibold mb-2">Can SafeOrStolen check items in bulk for auctions?</h3>
 <p className="text-muted-foreground">Yes. Enterprise plans support CSV uploads of 1,000+ VINs, serial numbers, or IMEI numbers with results returned in minutes. Flagged items include detailed reports for compliance documentation.</p>
 </CardContent>
 </Card>
 <Card>
 <CardContent className="p-6">
 <h3 className="font-semibold mb-2">What types of auction items can SafeOrStolen verify?</h3>
 <p className="text-muted-foreground">SafeOrStolen verifies vehicles, electronics, heavy equipment, firearms, jewelry, art, musical instruments, power tools, and any item with a serial number or VIN. One platform covers every auction category.</p>
 </CardContent>
 </Card>
 <Card>
 <CardContent className="p-6">
 <h3 className="font-semibold mb-2">Does SafeOrStolen provide compliance documentation?</h3>
 <p className="text-muted-foreground">Every verification generates a timestamped compliance report showing the item was checked against law enforcement and insurance databases. These reports serve as due diligence documentation for regulatory compliance and insurance purposes.</p>
 </CardContent>
 </Card>
 </div>
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="py-16 bg-primary text-primary-foreground">
 <div className="container mx-auto px-4 text-center">
 <h2 className="text-3xl font-bold mb-6">Protect Your Auction House Today</h2>
 <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
 Start verifying consignment items in minutes. Enterprise pricing available for high-volume auction operations.
 </p>
 <div className="flex flex-wrap justify-center gap-4">
 <Button asChild size="lg" variant="secondary" className="font-semibold">
 <Link to="/verify">Try Bulk Verification</Link>
 </Button>
 <Button asChild size="lg" variant="outline" className="font-semibold border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
 <Link to="/pricing">View Enterprise Pricing</Link>
 </Button>
 </div>
 </div>
 </section>

 <RelatedPagesSection currentPage="/for-auction-houses" currentCategory="business" maxLinks={6} />
 </div>
 </>
 );
}
