import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BookOpen, FileText, HelpCircle, Shield, Phone, Car, ArrowRight, Download, Scale, Building2, Gavel } from 'lucide-react';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

const educationalFAQs = [
  {
    question: "What is a Pawn Broker's liability for stolen goods?",
    answer: "Under most state statutes, pawn brokers who knowingly or negligently accept stolen property face felony receiving charges, civil forfeiture, and license revocation. Federal law (18 U.S.C. § 2315) makes it a crime to transport stolen goods across state lines. SafeOrStolen provides timestamped compliance certificates that serve as documented proof of due diligence, protecting businesses from negligence claims."
  },
  {
    question: "How do I check if a used phone is stolen before buying it?",
    answer: "Request the device's 15-digit IMEI number (dial *#06# or check Settings > About Phone). Enter it into SafeOrStolen's verification engine, which checks against carrier and manufacturer blacklists, carrier databases, and insurance claim records. A clean result with a Trust Score above 85 indicates the device has no theft reports across 100+ databases. Always verify before exchanging money."
  },
  {
    question: "What happens if I accidentally buy stolen goods?",
    answer: "In most U.S. states, a good-faith purchaser who unknowingly buys stolen property must return it to the rightful owner without compensation. You may have legal recourse against the seller. Document everything: keep receipts, communication records, and run a SafeOrStolen verification immediately to establish a timestamped record of your due diligence attempt."
  },
  {
    question: "How does VIN verification prevent car fraud?",
    answer: "A Vehicle Identification Number (VIN) check cross-references the 17-character code against NICB theft records, NHTSA recalls, insurance total-loss databases, and state DMV registrations. SafeOrStolen queries these sources simultaneously, detecting title washing, odometer fraud, and stolen vehicle reports. The NICB reports approximately 750,000 vehicles stolen annually in the U.S."
  },
  {
    question: "What databases does SafeOrStolen check for verification?",
    answer: "SafeOrStolen aggregates data from 100+ sources including: carrier and manufacturer blacklists, NICB vehicle databases, carrier blacklists (AT&T, T-Mobile, Verizon), insurance claims databases, BikeIndex for bicycles, nationwide firearm theft reports, and state police records. Each source is weighted by reliability for the final Trust Score calculation."
  },
  {
    question: "Are auction houses required to verify items before selling?",
    answer: "While requirements vary by jurisdiction, auction houses face significant liability under UCC Article 2 (implied warranty of title) and state consumer protection laws. Many states require due diligence for high-value items. SafeOrStolen's batch verification allows auction houses to check up to 100 items via CSV upload, generating compliance certificates for each item in the lot."
  },
  {
    question: "How accurate is IMEI blacklist checking in 2026?",
    answer: "carrier and manufacturer blacklists's IMEI Database covers 200+ network operators across 150+ countries. SafeOrStolen enhances this with carrier-specific blacklists, insurance claim cross-referencing, and law enforcement stolen property databases. Our composite Trust Score achieves high accuracy by weighting multiple independent sources. However, no system is 100% — items stolen very recently may not yet appear in databases."
  },
  {
    question: "What is a compliance certificate and why do businesses need one?",
    answer: "A compliance certificate is a timestamped verification document with a cryptographic hash that proves a business performed due diligence before purchasing or accepting an item. It includes the identifier checked, databases queried, verification result, and timestamp. For pawn shops and dealers, this document serves as legal evidence of good faith in the event stolen property is later identified."
  },
];

export default function ResourceCenterPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": educationalFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <PageSEO
        title="Resource Center - Verification Guides & Compliance | SafeOrStolen"
        description="Free verification guides for pawn brokers, auction houses, buyers, and sellers. Learn liability rules, IMEI checking, VIN verification, and compliance requirements."
        keywords="resource center, verification guides, pawn broker liability, stolen goods compliance, IMEI guide, VIN guide, due diligence"
        canonical="https://safeorstolen.com/resource-center"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      
      <TopNavigation />
      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <BookOpen className="h-14 w-14 text-primary mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Verification Resource Center
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Expert guides, compliance tools, and educational resources for buyers, sellers, pawn brokers, and auction houses. Protect yourself and your business.
              </p>
            </div>
          </div>
        </section>

        {/* Educational Hub — Question-Based H2 Headers */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Expert Answers for Buyers & Businesses</h2>
              <p className="text-muted-foreground">Citation-ready answers from our verification experts</p>
            </div>

            <div className="space-y-8">
              {educationalFAQs.map((faq, i) => (
                <article key={i} className="modern-card p-6 md:p-8">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    {faq.question}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links Grid */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Verification Tools & Guides</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="modern-card">
                  <CardContent className="p-6">
                    <FileText className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-4">How-To Guides</h3>
                    <ul className="space-y-3">
                      <li><Link to="/comprehensive-guide" className="text-primary hover:underline text-sm">Comprehensive Verification Guide</Link></li>
                      <li><Link to="/how-to-check-if-item-stolen" className="text-primary hover:underline text-sm">How to Check If an Item Is Stolen</Link></li>
                      <li><Link to="/blog/how-to-check-if-phone-stolen" className="text-primary hover:underline text-sm">Phone Verification Step-by-Step</Link></li>
                      <li><Link to="/blog/complete-vin-guide" className="text-primary hover:underline text-sm">Complete VIN Verification Guide</Link></li>
                      <li><Link to="/blog/complete-imei-guide-protect-yourself" className="text-primary hover:underline text-sm">Complete IMEI Protection Guide</Link></li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="modern-card">
                  <CardContent className="p-6">
                    <Shield className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-4">Verification Tools</h3>
                    <ul className="space-y-3">
                      <li><Link to="/trust-engine" className="text-primary hover:underline text-sm">Universal Trust Engine (NEW)</Link></li>
                      <li><Link to="/imei-checker" className="text-primary hover:underline text-sm">IMEI Checker for Phones</Link></li>
                      <li><Link to="/vin-checker" className="text-primary hover:underline text-sm">VIN Checker for Vehicles</Link></li>
                      <li><Link to="/serial-number-checker" className="text-primary hover:underline text-sm">Serial Number Checker</Link></li>
                      <li><Link to="/license-plate-lookup" className="text-primary hover:underline text-sm">License Plate Lookup</Link></li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="modern-card">
                  <CardContent className="p-6">
                    <Building2 className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-4">For Businesses</h3>
                    <ul className="space-y-3">
                      <li><Link to="/for-pawn-shops" className="text-primary hover:underline text-sm">Pawn Shop Compliance</Link></li>
                      <li><Link to="/for-auction-houses" className="text-primary hover:underline text-sm">Auction House Verification</Link></li>
                      <li><Link to="/for-dealers" className="text-primary hover:underline text-sm">Dealer Due Diligence</Link></li>
                      <li><Link to="/blog/pawn-shop-stolen-item-verification" className="text-primary hover:underline text-sm">Pawn Shop Verification Guide</Link></li>
                      <li><Link to="/pricing" className="text-primary hover:underline text-sm">Business Plans & Pricing</Link></li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Item-Specific Resources */}
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Verify by Item Type</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="modern-card">
                <CardContent className="p-6 text-center">
                  <Phone className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Phones</h3>
                  <ul className="text-sm space-y-1.5">
                    <li><Link to="/check-phone" className="text-muted-foreground hover:text-primary transition-colors">Check Phone</Link></li>
                    <li><Link to="/check-iphone-stolen" className="text-muted-foreground hover:text-primary transition-colors">iPhone Verification</Link></li>
                    <li><Link to="/check-android" className="text-muted-foreground hover:text-primary transition-colors">Android Verification</Link></li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="modern-card">
                <CardContent className="p-6 text-center">
                  <Car className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Vehicles</h3>
                  <ul className="text-sm space-y-1.5">
                    <li><Link to="/check-car" className="text-muted-foreground hover:text-primary transition-colors">Check Vehicle</Link></li>
                    <li><Link to="/vin-checker" className="text-muted-foreground hover:text-primary transition-colors">VIN Checker</Link></li>
                    <li><Link to="/license-plate-lookup" className="text-muted-foreground hover:text-primary transition-colors">License Plate</Link></li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="modern-card">
                <CardContent className="p-6 text-center">
                  <Gavel className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Firearms</h3>
                  <ul className="text-sm space-y-1.5">
                    <li><Link to="/check-firearm" className="text-muted-foreground hover:text-primary transition-colors">Check Firearm</Link></li>
                    <li><Link to="/gun-serial-number-lookup" className="text-muted-foreground hover:text-primary transition-colors">Serial Lookup</Link></li>
                    <li><Link to="/stolen-gun-database" className="text-muted-foreground hover:text-primary transition-colors">Stolen Database</Link></li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="modern-card">
                <CardContent className="p-6 text-center">
                  <Download className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Electronics</h3>
                  <ul className="text-sm space-y-1.5">
                    <li><Link to="/check-laptop" className="text-muted-foreground hover:text-primary transition-colors">Laptops</Link></li>
                    <li><Link to="/check-electronics" className="text-muted-foreground hover:text-primary transition-colors">Electronics</Link></li>
                    <li><Link to="/check-ps5" className="text-muted-foreground hover:text-primary transition-colors">Gaming Consoles</Link></li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Verify?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Check phones, vehicles, and electronics in seconds. Use the Universal Trust Engine for single checks or batch verification.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/trust-engine">
                  Open Trust Engine <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/verify">Single Verification</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
