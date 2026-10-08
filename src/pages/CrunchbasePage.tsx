import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Building2, ArrowRight } from 'lucide-react';
import { Link } from '@/lib/router-compat';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

/**
 * Oct 7 2026: rewritten by hand for "safeorstolen company profile". Removed: every link and
 * button to the off-site Crunchbase profile, founder names, a 2017 founding date and a Peoria,
 * Arizona headquarters that we can't confirm (the company is in Seattle, WA), a "$367 billion
 * secondhand market / 10.7% CAGR" figure, "3 seconds", "34 states" for gun records (it's 33 plus
 * DC), plate lookups in "all 50 US states", "Carfax for Everything", and business plans with API
 * and white-label offers that don't exist on the site. The page now describes the company factually.
 */

const PRESS_EMAIL = 'safeorstolenmail@gmail.com';

const profileRows: [string, string][] = [
  ['Company', 'SafeOrStolen'],
  ['Location', 'Seattle, WA'],
  ['Website', 'safeorstolen.com'],
  ['Category', 'Consumer protection; stolen-item checks for secondhand buyers'],
  ['Product', 'A stolen-item check for IMEI, VIN, license plate and serial numbers, on the web and as a free installable web app'],
  ['Customers', 'People buying or selling used items, plus pawn shops and dealers using bulk checks'],
  ['Business model', '2 free checks; $3.99 a single check; $14.99 a month unlimited; optional $1.99 verification certificate'],
  ['Contact', PRESS_EMAIL],
];

const faqs = [
  {
    question: 'What is SafeOrStolen?',
    answer:
      "SafeOrStolen is a stolen-item check for used phones, cars, guns, bikes and anything with a serial number, based in Seattle, WA. You enter an IMEI, VIN, plate or serial at safeorstolen.com and it searches SafeOrStolen's own theft reports and public web results, plus police firearm theft records for guns, a national stolen-bicycle registry for bikes, and Arizona law-enforcement records for Arizona VINs and plates.",
  },
  {
    question: 'Where is SafeOrStolen based?',
    answer:
      'SafeOrStolen is based in Seattle, Washington. It runs as a website at safeorstolen.com with a free installable web app at safeorstolen.com/app. There is no App Store or Google Play app. Press and business questions go to safeorstolenmail@gmail.com.',
  },
  {
    question: 'How does SafeOrStolen make money?',
    answer:
      'From the checks themselves. A free account gets 2 checks with no credit card. After that a single check is $3.99, or $14.99 a month buys unlimited checks (phone blacklist checks are capped at 20 a month), cancellable anytime with a 30-day refund. An optional $1.99 verification certificate gives buyers a dated record of their check. The site runs no ads.',
  },
  {
    question: 'What records does SafeOrStolen search?',
    answer:
      "Every check searches SafeOrStolen's theft reports and public web results. Gun checks add 242,839 police firearm theft and loss reports from 33 states and Washington, DC (filed through 2017; the years covered vary by state) and live Ohio records. Bike checks add a national stolen-bicycle registry. It does not search NCIC, ATF eTrace, DMV records, or pawn and insurer databases.",
  },
  {
    question: 'Does SafeOrStolen work for businesses?',
    answer:
      'Yes, in a limited way. Pawn shops and dealers can check many serial numbers at once with the bulk check at safeorstolen.com/bulk-check. Each result lists the sources searched and is saved to the account with the date, which gives a shop a record that it checked an item before buying it.',
  },
];

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SafeOrStolen',
    alternateName: 'Safe Or Stolen',
    description:
      'A stolen-item check for used phones, cars, guns, bikes and anything with a serial number, based in Seattle, WA.',
    url: 'https://safeorstolen.com',
    logo: 'https://safeorstolen.com/sos-logo.png',
    email: PRESS_EMAIL,
    address: { '@type': 'PostalAddress', addressLocality: 'Seattle', addressRegion: 'WA', addressCountry: 'US' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://safeorstolen.com' },
      { '@type': 'ListItem', position: 2, name: 'About', item: 'https://safeorstolen.com/about' },
      { '@type': 'ListItem', position: 3, name: 'Company profile', item: 'https://safeorstolen.com/crunchbase' },
    ],
  },
];

const CrunchbasePage: React.FC = () => (
  <>
    <PageSEO
      title="SafeOrStolen Company Profile: What It Is and How It Works"
      description="SafeOrStolen company profile: a Seattle-based stolen-item check for used phones, cars, guns and bikes. What it searches, how it makes money, how to reach it."
      keywords="safeorstolen company profile, safeorstolen crunchbase, what is safeorstolen, safeorstolen seattle"
      canonical="/crunchbase"
      structuredData={structuredData}
      modifiedTime="2026-10-07"
    />
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
            <li>/</li>
            <li className="text-foreground font-medium">Company profile</li>
          </ol>
        </nav>

        <div className="mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-6">
            <Building2 className="h-7 w-7 text-primary" aria-hidden="true" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">SafeOrStolen Company Profile</h1>
          <p className="text-lg text-muted-foreground mb-4">
            SafeOrStolen is a stolen-item check for used phones, cars, guns, bikes and anything with a serial
            number, based in Seattle, WA. A buyer enters an IMEI, VIN, plate or serial number and sees whether it
            has been reported stolen in the records SafeOrStolen searches, with every source listed. It makes money
            from paid checks and a monthly plan, not ads.
          </p>
          <p className="text-sm text-muted-foreground">Updated October 7, 2026</p>
        </div>

        <h2 className="text-2xl font-bold mb-4">At a glance</h2>
        <div className="overflow-x-auto mb-12">
          <table className="w-full text-sm border border-border rounded-lg">
            <tbody>
              {profileRows.map(([label, value]) => (
                <tr key={label} className="border-t border-border first:border-t-0 align-top">
                  <th scope="row" className="text-left p-3 font-semibold whitespace-nowrap">{label}</th>
                  <td className="p-3 text-muted-foreground">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold mb-4">What the product does</h2>
        <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
          <li><strong className="text-foreground">Phones:</strong> shows the make and model from the IMEI; a paid carrier blacklist check is available. <Link to="/imei-check" className="text-primary hover:underline">IMEI check</Link></li>
          <li><strong className="text-foreground">Vehicles:</strong> decodes year, make and model, lists open safety recalls, and searches Arizona law-enforcement records for Arizona VINs. <Link to="/vin-checker" className="text-primary hover:underline">VIN check</Link></li>
          <li><strong className="text-foreground">Plates:</strong> SafeOrStolen theft reports, plus Arizona records for Arizona plates. Owner names are never shown. <Link to="/license-plate-lookup" className="text-primary hover:underline">Plate lookup</Link></li>
          <li><strong className="text-foreground">Guns:</strong> police firearm theft and loss reports from 33 states and Washington, DC, live Ohio records, and a flag for altered serials. <Link to="/firearms-check" className="text-primary hover:underline">Gun serial check</Link></li>
          <li><strong className="text-foreground">Bikes:</strong> a national stolen-bicycle registry. <Link to="/check-bike" className="text-primary hover:underline">Bike check</Link></li>
          <li><strong className="text-foreground">Everything else with a serial:</strong> SafeOrStolen theft reports and public web results. <Link to="/serial-number-checker" className="text-primary hover:underline">Serial number check</Link></li>
        </ul>
        <p className="text-muted-foreground mb-12">
          Results read "reported stolen", "possible match", or "no report found in the records searched". AI
          writes a plain-language note on each result, but it never decides whether an item is stolen.
        </p>

        <h2 className="text-2xl font-bold mb-4">Questions about the company</h2>
        <Accordion type="single" collapsible className="space-y-3 mb-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="bg-card px-6 rounded-lg">
              <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="bg-primary/5 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-3">More about SafeOrStolen</h2>
          <p className="text-muted-foreground mb-6">
            Boilerplate and the logo are on the <Link to="/press-kit" className="text-primary hover:underline">press kit</Link>.
            For anything else, email {PRESS_EMAIL}.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button asChild className="gap-2">
              <Link to="/verify">
                Try 2 free checks <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/about">About SafeOrStolen</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default CrunchbasePage;
