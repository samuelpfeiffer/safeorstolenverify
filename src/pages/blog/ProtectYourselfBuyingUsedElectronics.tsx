import { PageSEO } from '@/components/seo/PageSEO';
import { AppDownloadCTA } from '@/components/app/AppDownloadCTA';
import { Button } from '@/components/ui/button';
import { useNavigate } from '@/lib/router-compat';
import { Shield, AlertTriangle, CheckCircle, Smartphone } from 'lucide-react';
import { FAQSchema } from '@/components/seo/schemas/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema';
import { HowToSchema } from '@/components/seo/schemas/HowToSchema';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';
import { BlogHeroImage } from '@/components/blog/BlogHeroImage';
import { blogImages } from '@/assets/blog';

export default function ProtectYourselfBuyingUsedElectronics() {
  const navigate = useNavigate();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Protect Yourself When Buying Used Electronics in 2026',
    description: 'How to check a used phone, laptop or tablet before you buy it: the warning signs, a 7-step check, and what to do if it turns out to be stolen.',
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
    datePublished: '2025-01-17',
    dateModified: '2026-10-07',
    image: 'https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png',
    keywords: ['buying used electronics', 'secondhand electronics safety', 'avoid stolen phones', 'used laptop verification']
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Protect Yourself Buying Used Electronics', url: '/blog/protect-yourself-buying-used-electronics' }
  ];

  const faqs = [
    {
      question: 'Can I get arrested for buying a stolen device?',
      answer: 'Generally no, if you did not know it was stolen. However, law enforcement can still seize the device and return it to the original owner, leaving you with no device and no refund.'
    },
    {
      question: 'Are eBay and Amazon purchases safe?',
      answer: 'Safer than Craigslist/Facebook, but not risk-free. Always verify serial numbers even on major platforms. eBay/Amazon may offer buyer protection, but disputes take weeks to resolve.'
    },
    {
      question: 'How accurate is SafeOrStolen verification?',
      answer: 'SafeOrStolen checks its own theft reports and public web results. Bike checks also search a national stolen-bicycle registry, gun checks also search police firearm theft and loss reports from 33 states and Washington, DC, plus live Ohio law-enforcement records, and phone checks show the make and model from the IMEI. No check covers every record, so the results list every source searched.'
    }
  ];

  const howToSteps = [
    {
      name: 'Request Serial Number or IMEI',
      text: 'Before meeting, ask the seller for the device serial number (laptops, tablets) or IMEI (smartphones). If they refuse, walk away immediately. Legitimate sellers provide this information freely.'
    },
    {
      name: 'Verify with SafeOrStolen',
      text: 'Run the serial number or IMEI through SafeOrStolen to check it against SafeOrStolen\'s own theft reports and public web results. This takes a few seconds.',
      url: 'https://safeorstolen.com/verify'
    },
    {
      name: 'Check Device Activation Lock Status',
      text: 'For iPhones/iPads, ensure Find My iPhone is disabled. For Android, ensure Factory Reset Protection is off. If still locked to previous owner account, the device is likely stolen.'
    },
    {
      name: 'Inspect Physical Condition',
      text: 'Check for signs of forced entry (scratches around screws, pry marks), replaced serial number stickers, or mismatched components. Stolen devices are often tampered with.'
    },
    {
      name: 'Test Device Functionality',
      text: 'Turn on the device, test all buttons, ports, cameras, and speakers. Check if it connects to WiFi. A device that will not power on or has disabled features may be blacklisted.'
    },
    {
      name: 'Request Proof of Purchase',
      text: 'Ask for original receipt, email confirmation, or credit card statement showing purchase. While not required, legitimate sellers can usually provide some proof of ownership.'
    },
    {
      name: 'Meet in Safe Public Location',
      text: 'Meet at police station parking lots (many have designated safe exchange zones), bank lobbies, or busy coffee shops with security cameras. Avoid private homes or secluded parking lots.'
    }
  ];

  return (
    <>
      <PageSEO
        title="How to Protect Yourself When Buying Used Electronics | SafeOrStolen"
        description="How to check a used phone, laptop or tablet before you buy: warning signs of a stolen device, a 7-step check at the meetup, and what to do if it is stolen."
        keywords="buying used electronics, secondhand electronics safety, avoid stolen phones, used laptop verification, electronics fraud prevention"
        canonical="/blog/protect-yourself-buying-used-electronics"
        structuredData={structuredData}
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={faqs} />
      <HowToSchema 
        name="7-Step Verification Process for Buying Used Electronics"
        description="Step-by-step check for buying a used phone, laptop or tablet without buying a stolen one"
        totalTime="PT10M"
        steps={howToSteps}
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

          <BlogHeroImage src={blogImages.electronics} alt="Used electronics on desk with phone scanning barcodes - electronics verification" />

          <div className="prose prose-lg max-w-none">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Warning</h3>
                  <p className="text-muted-foreground">
                    Stolen phones, laptops and tablets get resold online like any other used device. If you buy one,
                    police can take it back, and you're left chasing the seller for your money.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">The Growing Risk of Stolen Electronics</h2>
            <p className="text-muted-foreground mb-4">
              A huge number of used devices change hands on Facebook Marketplace, OfferUp, Craigslist and eBay.
              That's good for buyers who want to save money, and it's also an easy way for thieves to turn stolen
              devices into cash.
            </p>
            <p className="text-muted-foreground mb-6">
              Phones, laptops and tablets are small, valuable and easy to resell, so thieves often list them quickly
              and price them low to move them fast.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Red Flags When Buying Used Electronics</h2>
            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-destructive pl-4">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Price Too Good to Be True</h3>
                <p className="text-muted-foreground">
                  If a device is priced well below similar listings with no clear reason (cracked screen, old model),
                  slow down. Thieves want quick cash and price accordingly.
                </p>
              </div>
              <div className="border-l-4 border-destructive pl-4">
                <h3 className="text-xl font-semibold mb-2 text-foreground">Seller Pressure & Urgency</h3>
                <p className="text-muted-foreground">
                  "Need to sell today," "cash only," "meet in parking lot only" - these are common warning signs.
                  Most honest sellers will give you time to check the device.
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
                  Run the serial number or IMEI through SafeOrStolen to check it against SafeOrStolen's own theft
                  reports and public web results. Every source searched is listed, and it takes a few seconds.
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
              law enforcement can legally seize stolen property even from innocent buyers. You can lose the device, and getting your
              money back from a private seller is often hard.
            </p>
            <p className="text-muted-foreground mb-6">
              Your only options are: (1) Contact the seller and demand refund (unlikely if they're a thief), 
              (2) File police report (they may seize the device), or (3) Ask your bank or payment app whether they can help. This is why checking
              before you pay matters.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-4 text-foreground">Check at the meetup with the web app</h2>
            <p className="text-muted-foreground mb-4">
              SafeOrStolen has a free web app you can add to your phone's home screen from
              safeorstolen.com/app. It can scan the IMEI or serial barcode, so you can check a device at the meetup
              in a few seconds instead of typing a long number.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold mb-3 text-foreground flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                Install the SafeOrStolen web app
              </h3>
              <p className="text-muted-foreground mb-4">
                Scan the barcode, check the number, and keep a dated record of the check before you pay.
              </p>
              <Button onClick={() => navigate('/app')} size="lg" className="gap-2">
                Get the Free Web App
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
                  SafeOrStolen checks its own theft reports and public web results, and phone checks show the make and
                  model from the IMEI. No check covers every record, so a clean result means no report was found in the
                  records searched, and every source is listed.
                </p>
              </div>
            </div>

            <div className="bg-card border-2 border-primary rounded-lg p-8 text-center mt-12">
              <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-foreground">Protect Yourself Before Buying</h3>
              <p className="text-muted-foreground mb-6">
                Check any electronic device in a few seconds with SafeOrStolen. From $0.99/check or $10/month unlimited.
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
      <RelatedPagesSection currentPage="/blog/protect-yourself-buying-used-electronics" currentCategory="blog" maxLinks={5} />
    </>
  );
}
