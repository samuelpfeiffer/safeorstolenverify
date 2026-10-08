import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, Mail } from 'lucide-react';
import { Link } from '@/lib/router-compat';

/**
 * Oct 7 2026: rewritten by hand for "safeorstolen press kit". Removed: a founding year,
 * an
 * invented "$500B in stolen goods" pitch, a "3 sec average" stat, two founder quotes nobody can
 * attribute, "Carfax for everything" and "first universal platform" claims, downloadable assets
 * (logo pack, demo video, fact sheet PDF) that don't exist, and off-site press release links.
 * What's left is boilerplate, checkable facts, the logo file the site actually serves, and the contact.
 */

const PRESS_EMAIL = 'safeorstolenmail@gmail.com';

const SHORT_BOILERPLATE =
  'SafeOrStolen is a stolen-item check for used phones, cars, guns, bikes and anything with a serial number, based in Peoria, AZ.';

const LONG_BOILERPLATE =
  "SafeOrStolen (safeorstolen.com) is a stolen-item check for used phones, cars, guns, bikes and anything with a serial number, based in Peoria, AZ. A buyer enters an IMEI, VIN, license plate or serial number and sees whether it appears in SafeOrStolen's own theft reports and in public web results, plus police firearm theft records for guns, a national stolen-bicycle registry for bikes, and Arizona law-enforcement stolen-vehicle records for Arizona VINs and plates. Each result lists every source searched and is saved to the user's account with the date. The first 2 checks are free.";

const facts: [string, string][] = [
  ['Name', 'SafeOrStolen (one word, capital S, O and S)'],
  ['Based in', 'Peoria, AZ'],
  ['Website', 'safeorstolen.com'],
  ['What it does', 'Checks whether an IMEI, VIN, plate or serial number has been reported stolen in the records it searches'],
  ['Items covered', 'Phones, vehicles, license plates, guns, bikes and serial-numbered items such as laptops, tools and cameras'],
  ['Price', '2 free checks; $0.99 a check; $10 a month unlimited'],
  ['App', 'Free installable web app at safeorstolen.com/app (no App Store or Google Play app)'],
  ['Press contact', PRESS_EMAIL],
];

const accuracyNotes = [
  'SafeOrStolen does not search NCIC, ATF eTrace, DMV or MVD records, Apple or Google account status, manufacturer, pawn or insurer databases. Please don\'t describe a check as a police database search.',
  'A "no report found" result means the number wasn\'t found in the records searched. It doesn\'t prove an item was never stolen.',
  'The gun records are 242,839 police firearm theft and loss reports from 33 states and Washington, DC, filed through 2017 (the years covered vary by state), plus live Ohio law-enforcement records.',
  'AI writes a plain-language note on each result. It never decides whether an item is stolen; that comes only from the records searched.',
  'Plate checks never show owner names.',
];

const PressKitPage = () => (
  <>
    <PageSEO
      title="SafeOrStolen Press Kit: Boilerplate, Facts and Logo"
      description="SafeOrStolen press kit: short and long company boilerplate, a fact sheet, accuracy notes on what a check searches, the logo file and the press contact email."
      keywords="safeorstolen press kit, safeorstolen boilerplate, safeorstolen logo, safeorstolen fact sheet"
      canonical="/press-kit"
      modifiedTime="2026-10-07"
    />
    <div className="min-h-screen bg-background pt-20">
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4 max-w-3xl">
          <Badge variant="outline" className="mb-4">
            <FileText className="h-4 w-4 mr-2" />
            Press kit
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">SafeOrStolen Press Kit</h1>
          <p className="text-lg text-muted-foreground mb-4">
            Everything on this page is free to copy into a story: the company boilerplate, a fact sheet, notes on
            how to describe a check accurately, and the logo. {SHORT_BOILERPLATE} Questions go to {PRESS_EMAIL}.
          </p>
          <p className="text-sm text-muted-foreground">Updated October 7, 2026</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          <h2 className="text-2xl font-bold">Boilerplate</h2>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm font-semibold mb-2">One line</p>
              <p className="text-muted-foreground">{SHORT_BOILERPLATE}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <p className="text-sm font-semibold mb-2">One paragraph</p>
              <p className="text-muted-foreground">{LONG_BOILERPLATE}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Fact sheet</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-lg bg-background">
              <tbody>
                {facts.map(([label, value]) => (
                  <tr key={label} className="border-t border-border first:border-t-0 align-top">
                    <th scope="row" className="text-left p-3 font-semibold whitespace-nowrap">{label}</th>
                    <td className="p-3 text-muted-foreground">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Getting the details right</h2>
          <p className="text-muted-foreground mb-4">
            These are the points most often described wrong. The full source list is on{' '}
            <Link to="/data-sources" className="text-primary hover:underline">data sources</Link>.
          </p>
          <ul className="space-y-3 text-muted-foreground list-disc pl-6">
            {accuracyNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Logo</h2>
          <p className="text-muted-foreground mb-6">
            The SafeOrStolen "SOS" logo (white letters with a phone and orange check mark in place of the O, on a
            black background) as a PNG, 631 by 501 pixels. Please don't stretch or recolor it. For a different size
            or format, email {PRESS_EMAIL}.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <img src="/sos-logo.png" alt="SafeOrStolen logo" className="w-32 h-auto rounded-lg border border-border" />
            <Button asChild variant="outline" className="gap-2">
              <a href="/sos-logo.png" download="safeorstolen-logo.png">
                <Download className="h-4 w-4" />
                Download logo (PNG)
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Press contact</h2>
          <p className="text-muted-foreground mb-6">
            Email {PRESS_EMAIL} with your outlet and deadline. For a summary of the company and the media contact,
            see the <Link to="/press" className="text-primary hover:underline">press page</Link>.
          </p>
          <Button size="lg" asChild className="gap-2">
            <a href={`mailto:${PRESS_EMAIL}?subject=Press inquiry`}>
              <Mail className="h-5 w-5" />
              {PRESS_EMAIL}
            </a>
          </Button>
        </div>
      </section>
    </div>
  </>
);

export default PressKitPage;
