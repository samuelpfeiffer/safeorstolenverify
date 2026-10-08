import React from 'react';
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import { FileText, Mail } from 'lucide-react';

/**
 * Oct 7 2026: rewritten by hand for "safeorstolen press". The old page listed paid press
 * releases about a partnership we can't verify, linked off-site to profile pages, gave a wrong
 * state count for gun records, an invented "3 sec average" stat, a "Recognition & Awards"
 * section with no awards in it, and press@/partnerships@ addresses that aren't the real inbox.
 * It now carries only facts a reporter can check on the site itself.
 */

const PRESS_EMAIL = 'safeorstolenmail@gmail.com';

const checkRows: [string, string][] = [
  ['Every check', "SafeOrStolen's own theft reports (owners report thefts on the site) and public web results: listings and posts that mention the number"],
  ['Guns', '242,839 police firearm theft and loss reports from 33 states and Washington, DC (filed through 2017; the years covered vary by state), live Ohio law-enforcement records, and a flag for serials that look altered or obliterated'],
  ['Bikes', 'A national stolen-bicycle registry'],
  ['Phones (IMEI)', "The phone's make and model from the IMEI. A paid carrier blacklist check for lost or stolen phones is available"],
  ['Vehicles (VIN)', 'Year, make and model, open safety recalls, and, for Arizona VINs, Arizona law-enforcement stolen-vehicle records updated twice a day'],
  ['License plates', 'SafeOrStolen theft reports, plus Arizona law-enforcement records for Arizona plates. Owner names are never shown'],
];

const notSearched =
  'NCIC, ATF eTrace, DMV or MVD records, carrier records beyond the paid blacklist check, Apple or Google account status, manufacturer databases, pawn databases or insurer databases.';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SafeOrStolen',
  url: 'https://safeorstolen.com',
  logo: 'https://safeorstolen.com/sos-logo.png',
  description:
    'SafeOrStolen is a stolen-item check for used phones, cars, guns, bikes and anything with a serial number, based in Seattle, WA.',
  address: { '@type': 'PostalAddress', addressLocality: 'Seattle', addressRegion: 'WA', addressCountry: 'US' },
  contactPoint: { '@type': 'ContactPoint', contactType: 'Press', email: PRESS_EMAIL },
};

const PressPage = () => (
  <>
    <PageSEO
      title="SafeOrStolen Press: Company Facts and Media Contact"
      description="Press facts for SafeOrStolen, the stolen-item check for used phones, cars, guns and bikes: boilerplate, what a check searches, pricing and the media contact."
      keywords="safeorstolen press, safeorstolen media contact, safeorstolen company information, stolen item check company"
      canonical="/press"
      structuredData={[organizationSchema]}
      modifiedTime="2026-10-07"
    />
    <div className="min-h-screen bg-background pt-20">
      <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
            <FileText className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Press</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">SafeOrStolen Press Information</h1>
          <p className="text-lg text-muted-foreground mb-4">
            SafeOrStolen is a stolen-item check for used phones, cars, guns, bikes and anything with a serial
            number, based in Seattle, WA. You type in an IMEI, VIN, plate or serial number and see whether it has
            been reported stolen in the records SafeOrStolen searches, with every source listed. For interviews or
            questions, email {PRESS_EMAIL}.
          </p>
          <p className="text-sm text-muted-foreground mb-8">Updated October 7, 2026</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="gap-2">
              <a href={`mailto:${PRESS_EMAIL}?subject=Press inquiry`}>
                <Mail className="w-5 h-5" />
                Email {PRESS_EMAIL}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/press-kit">Press kit and boilerplate</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">What a SafeOrStolen check searches</h2>
          <p className="text-muted-foreground mb-6">
            If you're writing about the service, this is the accurate list. Please don't describe it as a police
            database search; it isn't one.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-3 font-semibold">Item</th>
                  <th className="text-left p-3 font-semibold">Records searched</th>
                </tr>
              </thead>
              <tbody>
                {checkRows.map(([item, records]) => (
                  <tr key={item} className="border-t border-border align-top">
                    <td className="p-3 font-medium whitespace-nowrap">{item}</td>
                    <td className="p-3 text-muted-foreground">{records}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground mt-6">
            <strong className="text-foreground">Not searched:</strong> {notSearched}
          </p>
          <p className="text-muted-foreground mt-4">
            A result reads "reported stolen", "possible match", or "no report found in the records searched". A
            clean result means nothing turned up in those records, not that the item is proven clean. The full
            explanation is on <Link to="/how-it-works" className="text-primary hover:underline">how it works</Link> and{' '}
            <Link to="/data-sources" className="text-primary hover:underline">data sources</Link>.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Pricing, for reference</h2>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6">
            <li>2 free checks with a free account, no credit card.</li>
            <li>$3.99 for a single check.</li>
            <li>$14.99 a month for unlimited checks (phone blacklist checks capped at 20 a month), cancel anytime, 30-day refund on the monthly plan.</li>
            <li>An optional $1.99 verification certificate: a dated record with its own link showing the buyer checked before the sale. Free for monthly members.</li>
            <li>A free installable web app at safeorstolen.com/app. There is no App Store or Google Play app.</li>
            <li>Bulk checking for pawn shops and dealers at <Link to="/bulk-check" className="text-primary hover:underline">/bulk-check</Link>.</li>
          </ul>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-bold mb-3">Media contact</h2>
              <p className="text-muted-foreground mb-4">
                Email {PRESS_EMAIL} with your outlet, your deadline and what you need, such as a walkthrough of a
                check or details on what the records cover.
              </p>
              <Button asChild variant="outline" className="gap-2">
                <a href={`mailto:${PRESS_EMAIL}?subject=Press inquiry`}>
                  <Mail className="w-4 h-4" />
                  {PRESS_EMAIL}
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  </>
);

export default PressPage;
