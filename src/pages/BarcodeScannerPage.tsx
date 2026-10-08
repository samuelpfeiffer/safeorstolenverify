/**
 * Oct 7 2026: rewritten by hand for "serial number scanner online free" (1 impression, position 46,
 * landing on /app/barcode-scanner) and "barcode imei" (13 impressions, position 26.7, same page). Copy now
 * describes what the product actually does: a live barcode/QR scanner in the signed-in dashboard
 * (QrScanner: QR, Code 128/39/93, Codabar, EAN-8/13, ITF, UPC-A/E, Data Matrix) and a photo reader
 * on the check page (/verify) that pulls an IMEI, VIN or serial from a label photo. Removed false
 * claims: "works offline", "100% accuracy", "3-second results", carrier-blacklist and title-record
 * checks on every scan, "stolen firearms databases" for barcodes, "every vehicle since 1981 has a VIN
 * barcode", manufacturer registration databases, emoji, and the supplier badge strip.
 */
import { Link } from '@/lib/router-compat';
import { ScanLine, Camera, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { PageSEO } from '@/components/seo/PageSEO';

const quickAnswer =
  "Yes. On SafeOrStolen (safeorstolen.com/barcode-scanner) you can point your phone camera at a barcode or QR code on a label, or take a photo of the printed serial, IMEI or VIN, and the number is read for you and checked for theft reports. It works in your phone's browser with a free account; there is nothing to download. The first 2 checks are free.";

const faqs = [
  {
    question: 'Is there a free serial number scanner online?',
    answer:
      "Yes. SafeOrStolen (safeorstolen.com/barcode-scanner) reads a serial number, IMEI or VIN from your phone's camera, either by scanning the barcode on the label or by reading the printed number from a photo, and checks it against SafeOrStolen theft reports and public web results. It runs in the browser, and the first 2 checks are free with a free account.",
  },
  {
    question: 'How do I scan an IMEI barcode?',
    answer:
      "Find the IMEI barcode on the label of the phone's original box, or dial *#06# on the phone: many phones show the IMEI, and some Android phones show it as a barcode. Open the scanner in your SafeOrStolen dashboard and point the camera at the barcode labeled IMEI. On a phone with two IMEIs, scan the first one.",
  },
  {
    question: 'What barcodes can the scanner read?',
    answer:
      'The live scanner reads QR codes, Data Matrix codes, and the common 1D barcodes: Code 128, Code 39, Code 93, Codabar, ITF, EAN-8, EAN-13, UPC-A and UPC-E. IMEI labels and many serial-number labels use Code 128; VIN barcodes on vehicle labels usually use Code 39.',
  },
  {
    question: 'Why does scanning the barcode on a product box not work for a stolen check?',
    answer:
      "The big barcode on a retail box is usually a UPC or EAN code. It identifies the product model, and every box of that model has the same one. A stolen check needs the number unique to that item: look for a second, smaller barcode labeled S/N, Serial or IMEI, usually on the same label.",
  },
  {
    question: 'Can I scan a VIN barcode?',
    answer:
      "Yes, if the vehicle has one. Many vehicles print the VIN as a barcode on the label in the driver's door jamb. Scan it, or take a photo of the VIN plate at the base of the windshield and let the photo reader pick out the 17 characters. A VIN check decodes the year, make and model and lists open safety recalls.",
  },
  {
    question: 'Do I need to download an app to scan barcodes?',
    answer:
      'No. The scanner runs in your phone\'s browser (Safari on iPhone, Chrome on Android) after you allow camera access. If you want an icon on your home screen, install the free web app from safeorstolen.com/app. SafeOrStolen is not in the App Store or Google Play.',
  },
  {
    question: 'What if the barcode is damaged or won\'t scan?',
    answer:
      "Try more light, hold the phone farther back so the whole barcode fits in the box, and keep it steady. If it still won't read, take a clear photo of the printed number next to the barcode and use the photo reader on the check page, or type the number in. The check is the same however the number gets in.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Can I scan a serial number to check if an item is stolen?', acceptedAnswer: { '@type': 'Answer', text: quickAnswer } },
    ...faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  ],
};

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'SafeOrStolen serial number and barcode scanner',
  url: 'https://safeorstolen.com/barcode-scanner',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any (runs in a mobile or desktop browser)',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: '2 free checks with a free account, then $0.99 a check or $10 a month',
  },
  featureList: 'Live barcode and QR code scanning, reading an IMEI, VIN or serial number from a photo, stolen item check',
  description:
    'Scan a barcode or photograph a label to read a serial number, IMEI or VIN, then check it against SafeOrStolen theft reports and public web results.',
  dateModified: '2026-10-07',
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to scan a serial number to check if an item is stolen',
  dateModified: '2026-10-07',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Sign in', text: 'Sign in to your free SafeOrStolen account on your phone.' },
    { '@type': 'HowToStep', position: 2, name: 'Open the scanner', text: 'In your dashboard, tap Scan Code (QR, Barcode, VIN, Serial) and allow camera access. Or, on the check page, take a photo of the label.' },
    { '@type': 'HowToStep', position: 3, name: 'Scan the right barcode', text: 'Point the camera at the barcode labeled S/N, Serial, IMEI or VIN, not the product UPC.' },
    { '@type': 'HowToStep', position: 4, name: 'Check the number', text: 'Confirm the number matches the label, then run the check and read the sources searched.' },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safeorstolen.com' },
    { '@type': 'ListItem', position: 2, name: 'Serial Number Scanner', item: 'https://safeorstolen.com/barcode-scanner' },
  ],
};

const whereToScan = [
  ['Phone', "IMEI barcode on the original box label; or dial *#06# (some Android phones show it as a barcode)", 'IMEI check: make and model, theft reports, optional paid blacklist check'],
  ['Laptop, tablet, console, camera', 'The S/N barcode on the bottom label, under the battery, or on the box', 'Serial check: theft reports and public web results'],
  ['Car or motorcycle', "The VIN barcode on the driver's door-jamb label, where the vehicle has one", 'VIN check: year, make, model, open recalls, theft reports'],
  ['Power tools, appliances, TVs', 'The barcode on the rating plate or nameplate, if it encodes the serial', 'Serial check: theft reports and public web results'],
  ['Retail box (UPC/EAN)', 'The large barcode on the box', "Not useful: it identifies the model, not the item. Look for the S/N barcode."],
];

const BarcodeScannerPage = () => {
  return (
    <>
      <PageSEO
        title="Serial Number Scanner Online, Free: Scan a Barcode to Check if Stolen | SafeOrStolen"
        description="Free online serial number scanner: scan the barcode on a label, or photograph the printed IMEI, VIN or serial, and check it for theft reports in your phone's browser."
        keywords="serial number scanner online free, barcode imei, scan imei barcode, scan serial number, scan vin barcode, barcode scanner stolen check, scan barcode to check if stolen"
        canonical="/barcode-scanner"
        structuredData={[faqSchema, appSchema, howToSchema, breadcrumbSchema]}
        aiPurpose="Explains how to scan a barcode or photograph a label to read a serial number, IMEI or VIN and check it for theft reports on SafeOrStolen"
        modifiedTime="2026-10-07"
      />

      <div className="min-h-screen bg-background pt-16">
        <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <ScanLine className="h-5 w-5" />
                <span className="font-semibold">Runs in your phone's browser</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Free Serial Number Scanner: Scan a Barcode to Check if Something Is Stolen
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Scan the barcode on a label, or take a photo of the printed serial number, IMEI or VIN. SafeOrStolen reads the number and checks it for theft reports, so you don't have to type 15 or 17 characters in a parking lot.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                <Button asChild size="lg" className="text-lg h-14 px-8">
                  <Link to="/dashboard">
                    <Camera className="mr-2 h-5 w-5" />
                    Open the scanner
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg h-14 px-8">
                  <Link to="/verify">Type or photograph the number instead</Link>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Free account needed. 2 free checks, no credit card. Last updated October 7, 2026.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Can I scan a serial number to check if an item is stolen?</h2>
              <p className="text-lg text-muted-foreground">{quickAnswer}</p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Two ways to scan</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-foreground">Live barcode scanner</h3>
                    <p className="text-sm text-muted-foreground">
                      In your dashboard, tap <strong>Scan Code (QR, Barcode, VIN, Serial)</strong> and allow camera access. Hold the barcode inside the box on screen. When it reads, the number drops into the search box. Check that it matches the label, then run the check. Reads QR, Data Matrix, Code 128, Code 39, Code 93, Codabar, ITF, EAN and UPC barcodes.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-foreground">Photo of the label</h3>
                    <p className="text-sm text-muted-foreground">
                      On the <Link to="/verify" className="text-primary underline underline-offset-4">check page</Link>, tap <strong>Attach</strong> (on a phone, choose Take Photo) or <strong>Scan</strong> on a larger screen, and photograph the label. SafeOrStolen reads the printed IMEI, VIN or serial from the picture, tells you what it found, and checks it. Use this when there is no barcode, or the barcode won't scan.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Which barcode to scan on each item</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-border rounded-lg">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-3 font-semibold text-foreground">Item</th>
                      <th className="text-left p-3 font-semibold text-foreground">Where the barcode is</th>
                      <th className="text-left p-3 font-semibold text-foreground">What the check gives you</th>
                    </tr>
                  </thead>
                  <tbody>
                    {whereToScan.map((row) => (
                      <tr key={row[0]} className="border-t border-border">
                        {row.map((cell, i) => (
                          <td key={i} className="p-3 text-muted-foreground align-top">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-muted-foreground">
                Every check searches SafeOrStolen theft reports and public web results, and lists each source it searched. The result is reported stolen, possible match, or no report found in the records searched, and it is saved to your account with the date.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Using it at a meetup</h2>
              <ul className="space-y-3 text-muted-foreground list-disc pl-5">
                <li>Sign in before you leave home. The scanner and photo reader need your account, and a weak signal in a parking lot makes signing in slow.</li>
                <li>Scan the label on the item itself, not just the box. A box can belong to a different unit.</li>
                <li>On a phone, compare the scanned IMEI with Settings &gt; About (or *#06#). On a console or laptop, compare the scanned serial with the one in its settings.</li>
                <li>Read the number back before you check it. A scan can pick up the wrong barcode on a crowded label, such as the model or UPC.</li>
                <li>The scanner needs a connection to run the check; it does not work offline.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Questions about scanning</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Item guides</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { title: 'IMEI check for phones', href: '/imei-check' },
                  { title: 'VIN check for vehicles', href: '/vin-checker' },
                  { title: 'Serial number checker', href: '/serial-number-checker' },
                  { title: 'Install the free web app', href: '/app' },
                ].map((link) => (
                  <Link key={link.href} to={link.href} className="p-3 bg-background rounded-lg border border-border text-sm font-medium hover:border-primary/40 inline-flex items-center justify-between">
                    {link.title} <ArrowRight className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BarcodeScannerPage;
