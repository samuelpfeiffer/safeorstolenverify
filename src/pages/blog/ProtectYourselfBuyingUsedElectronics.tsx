import { PageSEO } from '@/components/seo/PageSEO';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Shield, AlertTriangle, CheckCircle, Smartphone } from 'lucide-react';

export default function ProtectYourselfBuyingUsedElectronics() {
  const navigate = useNavigate();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Protect Yourself When Buying Used Electronics in 2026',
    description: 'Complete guide to safely purchasing secondhand electronics, avoiding stolen goods, and protecting yourself from fraud when buying used phones, laptops, and devices.',
    author: {
      '@type': 'Organization',
      name: 'SafeOrStolen'
    },
    publisher: {
      '@type': 'Organization',
      name: 'SafeOrStolen',
      logo: {
        '@type': 'ImageObject',
        url: 'https://safeorstolen.com/logo.png'
      }
    },
    datePublished: '2026-01-15',
    dateModified: '2026-01-15'
  };

  return (
    <>
      <PageSEO
        title="How to Protect Yourself When Buying Used Electronics | SafeOrStolen"
        description="Complete guide to safely purchasing secondhand electronics, avoiding stolen goods, and protecting yourself from fraud when buying used phones, laptops, and devices in 2026."
        keywords="buying used electronics, secondhand electronics safety, avoid stolen phones, used laptop verification, electronics fraud prevention"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-background">
        <article className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="mb-8">
            <Button variant="ghost" onClick={() => navigate('/blog')} className="mb-4">
              ← Back to Blog
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              How to Protect Yourself When Buying Used Electronics
            </h1>
            <p className="text-lg text-muted-foreground">
              Published January 15, 2026 • 8 min read
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Critical Warning</h3>
                  <p className="text-muted-foreground">
                    Over 2.5 million stolen electronics are sold online annually. Without proper verification, 
                    you risk financial loss, legal trouble, and supporting criminal activity.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">The Growing Risk of Stolen Electronics</h2>
            <p className="text-muted-foreground mb-4">
              The secondhand electronics market has exploded, with millions of devices sold daily on Facebook Marketplace, 
              OfferUp, Craigslist, and eBay. While this creates opportunities for buyers to save money, it also creates 
              massive opportunities for thieves to quickly sell stolen goods.
            </p>
            <p className="text-muted-foreground mb-6">
              In 2025, the FBI reported that electronics theft increased 34% compared to 2024, with smartphones, 
              laptops, and tablets being the most commonly stolen items. Most stolen devices are sold within 48 hours 
              of being stolen, often at significantly below-market prices to attract quick buyers.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Red Flags When Buying Used Electronics</h2>
            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-destructive pl-4">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Price Too Good to Be True</h3>
                <p className="text-muted-foreground">
                  If a device is priced 30-50% below market value without clear reason (cracked screen, old model), 
                  it's likely stolen. Thieves want quick cash and price accordingly.
                </p>
              </div>
              <div className="border-l-4 border-destructive pl-4">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Seller Pressure & Urgency</h3>
                <p className="text-muted-foreground">
                  "Need to sell today," "cash only," "meet in parking lot only" - these are classic theft indicators. 
                  Legitimate sellers are patient and flexible.
                </p>
              </div>
              <div className="border-l-4 border-destructive pl-4">
                <h3 className="text-xl font-semibold mb-2 text-foreground">No Original Packaging or Receipt</h3>
                <p className="text-muted-foreground">
                  While not always stolen, lack of original box, charger, or purchase receipt significantly increases risk. 
                  Ask why they don't have these items.
                </p>
              </div>
              <div className="border-l-4 border-destructive pl-4">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Seller Can't Provide Serial/IMEI Number</h3>
                <p className="text-muted-foreground">
                  Refusing to provide device identifiers before meeting is a major red flag. Legitimate sellers have 
                  nothing to hide and want to prove authenticity.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">7-Step Verification Process</h2>
            <div className="space-y-6 mb-8">
              <div className="bg-card border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                  <h3 className="text-xl font-semibold text-foreground">Request Serial Number or IMEI</h3>
                </div>
                <p className="text-muted-foreground">
                  Before meeting, ask the seller for the device's serial number (laptops, tablets) or IMEI (smartphones). 
                  If they refuse, walk away immediately. Legitimate sellers provide this information freely.
                </p>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                  <h3 className="text-xl font-semibold text-foreground">Verify with SafeOrStolen</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Run the serial number or IMEI through SafeOrStolen's database to check against law enforcement 
                  records, carrier blacklists, and stolen item databases. This takes 3 seconds.
                </p>
                <Button onClick={() => navigate('/verify')} className="gap-2">
                  <Shield className="h-4 w-4" />
                  Verify Device Now
                </Button>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                  <h3 className="text-xl font-semibold text-foreground">Check Device Activation Lock Status</h3>
                </div>
                <p className="text-muted-foreground">
                  For iPhones/iPads, ensure Find My iPhone is disabled. For Android, ensure Factory Reset Protection 
                  is off. If still locked to previous owner's account, the device is likely stolen.
                </p>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                  <h3 className="text-xl font-semibold text-foreground">Inspect Physical Condition</h3>
                </div>
                <p className="text-muted-foreground">
                  Check for signs of forced entry (scratches around screws, pry marks), replaced serial number stickers, 
                  or mismatched components. Stolen devices are often tampered with.
                </p>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">5</div>
                  <h3 className="text-xl font-semibold text-foreground">Test Device Functionality</h3>
                </div>
                <p className="text-muted-foreground">
                  Turn on the device, test all buttons, ports, cameras, and speakers. Check if it connects to WiFi. 
                  A device that won't power on or has disabled features may be blacklisted.
                </p>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">6</div>
                  <h3 className="text-xl font-semibold text-foreground">Request Proof of Purchase</h3>
                </div>
                <p className="text-muted-foreground">
                  Ask for original receipt, email confirmation, or credit card statement showing purchase. While not 
                  required, legitimate sellers can usually provide some proof of ownership.
                </p>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold">7</div>
                  <h3 className="text-xl font-semibold text-foreground">Meet in Safe Public Location</h3>
                </div>
                <p className="text-muted-foreground">
                  Meet at police station parking lots (many have designated "safe exchange zones"), bank lobbies, 
                  or busy coffee shops with security cameras. Avoid private homes or secluded parking lots.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">What If You Already Bought a Stolen Device?</h2>
            <p className="text-muted-foreground mb-4">
              If you discover after purchase that your device is stolen, you have limited legal recourse. In most states, 
              law enforcement can legally seize stolen property even from innocent buyers. You'll lose both the device 
              and your money, with no compensation.
            </p>
            <p className="text-muted-foreground mb-6">
              Your only options are: (1) Contact the seller and demand refund (unlikely if they're a thief), 
              (2) File police report (they may seize the device), or (3) Accept the loss. This is why verification 
              BEFORE purchase is critical.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">SafeOrStolen Mobile App Advantage</h2>
            <p className="text-muted-foreground mb-4">
              Unlike competitors like CheckMEND and IMEI.info that only offer web-based verification, SafeOrStolen 
              provides a free mobile app with barcode scanning. You can verify devices on-the-spot during meetups in 
              just 3 seconds—competitors require 30+ seconds of manual typing.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3 text-foreground flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                Download SafeOrStolen Mobile App
              </h3>
              <p className="text-muted-foreground mb-4">
                Scan barcodes instantly, verify offline, and protect yourself during in-person transactions.
              </p>
              <Button onClick={() => navigate('/mobile-app')} size="lg" className="gap-2">
                Download Free App
              </Button>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Frequently Asked Questions</h2>
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Can I get arrested for buying a stolen device?</h3>
                <p className="text-muted-foreground">
                  Generally no, if you didn't know it was stolen. However, law enforcement can still seize the device 
                  and return it to the original owner, leaving you with no device and no refund.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Are eBay and Amazon purchases safe?</h3>
                <p className="text-muted-foreground">
                  Safer than Craigslist/Facebook, but not risk-free. Always verify serial numbers even on major platforms. 
                  eBay/Amazon may offer buyer protection, but disputes take weeks to resolve.
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-semibold mb-2 text-foreground">How accurate is SafeOrStolen's verification?</h3>
                <p className="text-muted-foreground">
                  SafeOrStolen checks 50+ databases including FBI NCIC, carrier blacklists, insurance claims, and 
                  manufacturer reports. While no system is 100%, we provide the most comprehensive verification available.
                </p>
              </div>
            </div>

            <div className="bg-card border-2 border-primary rounded-lg p-8 text-center mt-12">
              <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-foreground">Protect Yourself Before Buying</h3>
              <p className="text-muted-foreground mb-6">
                Verify any electronic device in 3 seconds with SafeOrStolen. Free checks available.
              </p>
              <Button onClick={() => navigate('/verify')} size="lg" className="gap-2">
                <Shield className="h-5 w-5" />
                Verify Device Now
              </Button>
            </div>
          </div>
        </article>

        <div className="container mx-auto px-4 py-12">
          <AppDownloadCTA variant="default" showBenefits={true} />
        </div>
      </div>
    </>
  );
}
