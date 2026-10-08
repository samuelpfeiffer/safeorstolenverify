/**
 * Oct 7 2026: rewritten by hand for "about safeorstolen" / "what is safeorstolen" (brand searches:
 * "safeorstolen", "safe or stolen"). Describes the service and what a check searches, nothing about
 * how the site is built. Removed unverifiable security/GDPR badges, outbound profile links,
 * unverified accelerator and press items, and shared sections that carried invented case studies.
 */
import React from 'react';
import { Link } from '@/lib/router-compat';
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { Card } from '@/components/ui/card';

const sourcesByItem = [
  {
    item: 'Every item',
    searched: "SafeOrStolen's own theft reports (owners report thefts on the site) and public web results: listings and posts that mention the number.",
  },
  {
    item: 'Phones (IMEI)',
    searched: "The make and model from the IMEI. A paid lost/stolen carrier blacklist check is available.",
  },
  {
    item: 'Vehicles (VIN)',
    searched: 'Year, make and model decoded from the VIN, plus open safety recalls. Arizona VINs are also searched against Arizona law-enforcement stolen-vehicle records, updated twice a day.',
  },
  {
    item: 'License plates',
    searched: 'SafeOrStolen theft reports. Arizona plates are also searched against Arizona law-enforcement records. Owner names are never shown.',
  },
  {
    item: 'Guns',
    searched: '242,839 police firearm theft and loss reports from 33 states and Washington, DC (filed through 2017; the years covered vary by state), and live Ohio law-enforcement records. Serials that look altered or obliterated are flagged.',
  },
  {
    item: 'Bikes',
    searched: 'A national stolen-bicycle registry, on top of the checks every item gets.',
  },
];

const notSearched = [
  'NCIC, the FBI system police use',
  'ATF eTrace',
  'Carrier records, apart from the paid phone blacklist check',
  "Apple or Google account status (Activation Lock, Find My, Google's lock)",
  'DMV or MVD records',
  'Manufacturer, pawn shop or insurance company databases',
];

const faqs = [
  {
    q: 'What is SafeOrStolen?',
    a: "SafeOrStolen (safeorstolen.com) is a Seattle-based website that checks whether a used item has been reported stolen before you buy or sell it. You type in an IMEI, VIN, plate, or serial number, and it searches its own theft reports, public web results, and extra records for guns, bikes, phones and Arizona vehicles. The result lists every source it searched.",
  },
  {
    q: 'Is SafeOrStolen free?',
    a: 'A free account comes with 2 checks and needs no credit card. After that, a single check costs $3.99, or $14.99 a month gets unlimited checks with up to 20 phone blacklist checks a month. You can cancel the monthly plan anytime, and it has a 30-day refund.',
  },
  {
    q: 'Is SafeOrStolen a police database?',
    a: "No. SafeOrStolen is a private company, not a police agency, and it does not search NCIC, the FBI's stolen property file. It searches its own theft reports, public web results, and specific police records named on each result: police firearm theft reports from 33 states and DC, live Ohio records, and Arizona stolen-vehicle records.",
  },
  {
    q: "Does 'no report found' mean an item is safe to buy?",
    a: "It means nothing turned up in the records SafeOrStolen searched. Many thefts are reported only to local police, so a clean result is one piece of evidence. Also check that the seller can unlock and reset the device, has the title or receipt, and that the number on the item hasn't been tampered with.",
  },
  {
    q: 'Can I report something stolen on SafeOrStolen?',
    a: "Yes. Owners can report a stolen item on the site with its serial number, IMEI, VIN or plate. That report then shows up when someone checks the same number, which helps buyers spot it. File a police report too, since SafeOrStolen doesn't send reports to the police.",
  },
  {
    q: 'How do I contact SafeOrStolen?',
    a: 'Email safeorstolenmail@gmail.com. SafeOrStolen is based in Seattle, Washington. For questions about a specific check, include the date of the check and the number you searched so the result can be found in your account history.',
  },
];

const AboutPage = () => {
  return (
    <>
      <PageSEO
        title="About SafeOrStolen: Stolen Item Checks Before You Buy"
        description="What SafeOrStolen is, what each check searches for phones, cars, plates, guns, bikes and serial numbers, what it doesn't search, and what it costs."
        keywords="about SafeOrStolen, what is SafeOrStolen, safe or stolen, safeorstolen, is SafeOrStolen legit"
        canonical="/about"
        modifiedTime="2026-10-07"
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About SafeOrStolen',
            dateModified: '2026-10-07',
            mainEntity: {
              '@type': 'Organization',
              name: 'SafeOrStolen',
              alternateName: ['Safe Or Stolen'],
              url: 'https://safeorstolen.com',
              email: 'safeorstolenmail@gmail.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Seattle',
                addressRegion: 'WA',
                addressCountry: 'US',
              },
              description:
                'SafeOrStolen checks IMEI, VIN, plate and serial numbers against its own theft reports, public web results and, for some item types, police records, before a used item changes hands.',
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          },
        ]}
      />
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 pt-24 pb-4">
          <BreadcrumbNavigation items={[{ name: 'About Us', href: '/about' }]} />
        </div>

        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">About SafeOrStolen</h1>
            <p className="text-sm text-muted-foreground mb-6">Updated October 7, 2026</p>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              SafeOrStolen is a website that tells you whether a used item has been reported stolen before you hand over money for it.
              You enter the phone's IMEI, the car's VIN or plate, or the serial number on a gun, bike, laptop or tool. In a few seconds
              you get one of three answers: reported stolen, possible match, or no report found in the records searched, with every
              source listed. The company is based in Seattle, Washington.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              It's built for the moment in a parking lot or a stranger's driveway when you're about to buy something and can't tell if
              it's legit. Sellers use it too: a dated record that you checked an item before selling it is easy to show a buyer.
            </p>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">What a check searches</h2>
            <p className="text-muted-foreground mb-6">
              Every source below is named on the result page, so you can see exactly what was and wasn't covered.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border rounded-lg bg-background">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left p-3 font-semibold text-foreground">Item</th>
                    <th className="text-left p-3 font-semibold text-foreground">What gets searched</th>
                  </tr>
                </thead>
                <tbody>
                  {sourcesByItem.map((row) => (
                    <tr key={row.item} className="border-b last:border-0 align-top">
                      <td className="p-3 font-medium text-foreground whitespace-nowrap">{row.item}</td>
                      <td className="p-3 text-muted-foreground">{row.searched}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              The full breakdown is on the <Link to="/data-sources" className="text-primary underline">data sources page</Link>.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-3 text-foreground">What SafeOrStolen doesn't search</h2>
              <p className="text-muted-foreground text-sm mb-3">
                No private website can search these, and SafeOrStolen doesn't claim to:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                {notSearched.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <p className="text-muted-foreground text-sm mt-3">
                For those, ask the seller to unlock and reset the device in front of you, look at the title, or ask your local police.
              </p>
            </Card>
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-3 text-foreground">What it costs</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong className="text-foreground">Free account:</strong> 2 checks, no credit card.</li>
                <li><strong className="text-foreground">Single check:</strong> $3.99.</li>
                <li>
                  <strong className="text-foreground">Monthly:</strong> $14.99 for unlimited checks (up to 20 phone blacklist checks a
                  month). Cancel anytime, 30-day refund.
                </li>
                <li>
                  <strong className="text-foreground">Verification certificate:</strong> $1.99, free for monthly members. A dated record
                  with its own link showing you checked before the sale.
                </li>
              </ul>
              <p className="text-sm text-muted-foreground mt-3">
                Pawn shops and dealers can check many items at once on <Link to="/bulk-check" className="text-primary underline">bulk check</Link>.
              </p>
            </Card>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">How a check works, step by step</h2>
            <ol className="list-decimal pl-5 space-y-3 text-muted-foreground">
              <li>Find the number on the item: the IMEI in Settings or by dialing *#06#, the VIN on the dashboard or door jamb, or the serial on the frame, nameplate or underside.</li>
              <li>Type it into the search box on the homepage or the page for that item.</li>
              <li>SafeOrStolen searches its theft reports, public web results, and the extra records for that item type at the same time.</li>
              <li>The result shows reported stolen, possible match, or no report found, and lists each source.</li>
              <li>If you're signed in, the check is saved to your account with the date, so you can show it later.</li>
            </ol>
            <p className="text-muted-foreground mt-4">
              If a result says reported stolen, don't buy the item and don't confront the seller. Keep the listing and messages and call
              your local police's non-emergency line.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Questions people ask about SafeOrStolen</h2>
            <div className="space-y-6">
              {faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="font-semibold text-foreground mb-2">{f.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-8">
              Read <Link to="/our-story" className="text-primary underline">why SafeOrStolen started</Link>, or run a check from the{' '}
              <Link to="/" className="text-primary underline">homepage</Link>.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
