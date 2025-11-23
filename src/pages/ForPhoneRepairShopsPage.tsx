import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, Wrench, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';

const ForPhoneRepairShopsPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Stolen Item Verification for Phone Repair Shops",
    "description": "Protect your phone repair shop from stolen devices. Verify IMEI before accepting repairs to avoid legal issues and law enforcement involvement.",
    "url": "https://safeorstolen.com/for-phone-repair-shops"
  };

  return (
    <>
      <PageSEO
        title="Stolen Phone Verification for Repair Shops | SafeOrStolen"
        description="Protect your phone repair business. Verify IMEI numbers before accepting devices to avoid stolen property legal issues, police seizures, and reputation damage."
        keywords="phone repair shop verification, IMEI checker for repair shops, stolen phone prevention, repair shop legal protection"
        canonical="/for-phone-repair-shops"
        structuredData={structuredData}
      />

      <main className="min-h-screen bg-background">
        <section className="relative py-20 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto text-center">
            <Wrench className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Protect Your Phone Repair Shop
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Verify every device before accepting repairs. Avoid stolen property legal issues, police seizures, and business reputation damage with instant IMEI verification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verify">
                <Button size="lg" className="w-full sm:w-auto">
                  <Shield className="w-5 h-5 mr-2" />
                  Start Verifying Devices
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  View Business Plans
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Why Phone Repair Shops Need IMEI Verification</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Legal Liability for Stolen Property</h3>
                  <p className="text-muted-foreground">
                    Accepting stolen phones for repair can result in criminal charges for receiving stolen property, even if you didn't know. Law enforcement can seize devices during investigations, and you may lose repair fees with no compensation. Protect your business legally by verifying every device.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Police Raids & Business Disruption</h3>
                  <p className="text-muted-foreground">
                    Police frequently track stolen phones to repair shops. A single stolen device can trigger search warrants, property seizures, and business closures during investigations. Verification creates a documented paper trail proving your due diligence.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <TrendingUp className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Build Customer Trust</h3>
                  <p className="text-muted-foreground">
                    Advertising IMEI verification shows legitimate customers you run an ethical business. This differentiates you from shops that don't check, attracts quality customers, and reduces association with stolen device ecosystems.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Avoid Insurance Fraud</h3>
                  <p className="text-muted-foreground">
                    Customers may claim insurance on "stolen" phones then bring them to you for "repair." You become an unwitting accomplice in insurance fraud. Verification identifies these schemes and protects you from civil and criminal liability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">How SafeOrStolen Works for Repair Shops</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Customer Check-In Process</h3>
                  <p className="text-muted-foreground">
                    When a customer brings a device for repair, collect the IMEI number from Settings → About Phone or by dialing *#06#. Enter it into our verification system before accepting the device or collecting payment.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Instant Database Check</h3>
                  <p className="text-muted-foreground">
                    Our system searches global stolen phone databases, carrier blacklists, insurance claim records, and law enforcement databases in under 3 seconds. You get immediate clear/flagged status with detailed results.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Document & Protect Your Business</h3>
                  <p className="text-muted-foreground">
                    If the device is clear, accept the repair and keep the verification certificate with your repair order. If flagged as stolen, politely decline service and recommend the customer contact authorities. The certificate proves you performed due diligence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Real-World Scenarios for Repair Shops</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Screen Replacement Requests</h3>
                <p className="text-muted-foreground mb-3">
                  Thieves often break phone screens during theft or need repairs to make devices saleable. Screen replacements are the most common repair requests for stolen phones.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Red flags:</strong> Customer has no purchase proof, pays cash only, refuses to provide contact information, is nervous or in a hurry, cannot unlock the device or provide passcode, has multiple phones to repair at once.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Water Damage Repairs</h3>
                <p className="text-muted-foreground mb-3">
                  Customers claiming water damage may have stolen phones that were remotely locked or disabled by carriers. They seek repairs hoping to bypass security or make the device functional enough to sell.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Protection:</strong> Always verify IMEI before opening the device. Check if it's carrier-locked or blacklisted. If activation lock or FMI (Find My iPhone) is enabled, the original owner can still locate the device even after your repair.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Unlock Service Requests</h3>
                <p className="text-muted-foreground mb-3">
                  Requests to "unlock" phones or bypass activation locks are major red flags. Legitimate customers have carrier unlock codes or contact their carrier directly. Stolen phone possessors specifically seek repair shops for these services.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Legal risk:</strong> Bypassing activation locks or carrier locks on stolen devices is illegal in many jurisdictions. This can result in felony charges and business license revocation. Never accept these requests without thorough verification and legal documentation.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Bulk Repairs from "Resellers"</h3>
                <p className="text-muted-foreground mb-3">
                  Individuals bringing multiple phones for repair claiming to be "resellers" or "wholesalers" may be fencing stolen devices. Legitimate businesses have invoices, business licenses, and proper documentation.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Due diligence:</strong> Verify every IMEI individually. Request business license and reseller permit. Ask for purchase invoices. If they can't provide documentation or pressure you to skip verification, refuse the work and consider filing a suspicious activity report with police.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Best Practices for Phone Repair Businesses</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-lg border border-border bg-card">
                <h3 className="font-semibold mb-2 text-foreground">1. Make Verification Mandatory</h3>
                <p className="text-muted-foreground">
                  Post signs stating "All devices are verified against stolen property databases before service." Make IMEI verification the first step in your intake process, before disassembly or parts ordering.
                </p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-card">
                <h3 className="font-semibold mb-2 text-foreground">2. Keep Detailed Records</h3>
                <p className="text-muted-foreground">
                  Maintain verification certificates with each repair order. Include customer ID, contact information, device details, and verification results. This creates an audit trail proving due diligence if questioned by authorities.
                </p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-card">
                <h3 className="font-semibold mb-2 text-foreground">3. Train All Staff</h3>
                <p className="text-muted-foreground">
                  Ensure every employee knows how to check IMEIs and interpret results. Train them to recognize red flags and handle situations where devices are flagged as stolen. Consistent process across all staff protects your business.
                </p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-card">
                <h3 className="font-semibold mb-2 text-foreground">4. Have a Stolen Device Protocol</h3>
                <p className="text-muted-foreground">
                  When a device is flagged, don't confront the customer or accuse them of theft—they may be an innocent buyer. Politely decline service, cite your policy, and suggest they contact law enforcement. Never hold the device or try to "do the right thing" by calling police yourself, as this can create liability.
                </p>
              </div>
              <div className="p-4 rounded-lg border border-border bg-card">
                <h3 className="font-semibold mb-2 text-foreground">5. Partner with Local Law Enforcement</h3>
                <p className="text-muted-foreground">
                  Establish relationships with local police. Inform them you verify all devices and will cooperate with investigations. Some departments offer certification programs for businesses that implement anti-theft measures.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Business Benefits Beyond Legal Protection</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Increased Customer Confidence</h3>
                <p className="text-muted-foreground">
                  Legitimate customers appreciate knowing you verify devices. It shows professionalism and ethics, leading to positive reviews and word-of-mouth referrals from honest customers.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Reduced Problematic Customers</h3>
                <p className="text-muted-foreground">
                  Advertising verification deters criminals from approaching your shop. This reduces uncomfortable situations, aggressive customer interactions, and potential violent incidents related to stolen property disputes.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Lower Insurance Premiums</h3>
                <p className="text-muted-foreground">
                  Some business insurance providers offer reduced premiums for shops with documented anti-theft verification procedures. This demonstrates risk management and can save hundreds annually.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Competitive Advantage</h3>
                <p className="text-muted-foreground">
                  Differentiate your shop from competitors who don't verify. Market yourself as the "ethical repair shop" that protects customers and fights phone theft. This attracts premium customers willing to pay fair prices.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Will verification slow down my repair process?</h3>
                <p className="text-muted-foreground">
                  No—verification takes under 3 seconds. It adds minimal time to check-in while providing massive legal protection. The small time investment is worth avoiding potential police involvement, device seizures, and legal fees.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">What if a customer refuses IMEI verification?</h3>
                <p className="text-muted-foreground">
                  Refuse service. Any customer unwilling to verify their device likely has something to hide. Your policy should clearly state verification is mandatory, protecting you legally from claims of discrimination or refusal of service.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Can I be held liable if I repair a stolen phone unknowingly?</h3>
                <p className="text-muted-foreground">
                  Potentially yes. Laws vary by jurisdiction, but many areas have "knowing or should have known" standards. Without verification, prosecutors can argue you should have checked. Verification certificates demonstrate reasonable due diligence.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="text-xl font-semibold mb-3 text-foreground">How much does business verification cost?</h3>
                <p className="text-muted-foreground">
                  We offer affordable bulk verification plans for repair shops starting at just a few dollars per month for unlimited checks. This is negligible compared to potential legal fees, lost revenue from seizures, or reputation damage from being associated with stolen property.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-primary/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">Protect Your Repair Business Today</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start verifying devices now. Avoid legal issues, protect your reputation, and build customer trust with instant IMEI verification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/verify">
                <Button size="lg">
                  Start Verifying Devices
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline">
                  View Business Plans
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ForPhoneRepairShopsPage;
