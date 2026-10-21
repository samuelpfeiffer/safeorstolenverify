/**
 * Oct 7 2026: rewritten by hand for "what databases does SafeOrStolen check" / "SafeOrStolen data
 * sources". No Search Console data for this URL. Sources described generically, never by supplier.
 * Removed: "34 states" (it's 33 states plus DC), "mostly 2006 to 2017" (now "filed through 2017; the
 * years covered vary by state"), "15-minute sync", "~3 sec" stats, "AI analysis" as a source,
 * "title-brand data" and "federal VIN data" claims for vehicle theft, a contradicting FAQ that said
 * phone checks never search the blacklist, "moderation team" review claim, "Summary for AI agents"
 * blocks, the Dataset schema pointing at an API catalog.
 */
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';
import { ArrowRight } from 'lucide-react';

const SOURCE_TABLE: { item: string; searched: string; nextStep: string; link: { to: string; label: string } }[] = [
  {
    item: 'Every item',
    searched:
      "SafeOrStolen's own theft reports, filed by owners on the site, and public web results: listings, posts and pages that mention the number.",
    nextStep: 'Ask the seller for a receipt or other proof of ownership, and check the number matches it.',
    link: { to: '/serial-number-checker', label: 'Serial number check' },
  },
  {
    item: 'Guns',
    searched:
      'more than 220,000 police firearm theft and loss reports from 33 states and Washington, DC (filed 1973–2017), and live Ohio law-enforcement stolen-gun records. Serials that look altered or obliterated are flagged.',
    nextStep: 'For a private sale, you can also buy through a licensed dealer (FFL) or ask local police to run the serial.',
    link: { to: '/gun-serial-number-lookup', label: 'Gun serial number lookup' },
  },
  {
    item: 'Bikes and e-bikes',
    searched: 'A national stolen-bicycle registry where owners list stolen bikes by frame serial.',
    nextStep: 'Compare the frame serial with the seller\'s receipt or registration.',
    link: { to: '/check-bike', label: 'Bike check' },
  },
  {
    item: 'Phones and tablets (IMEI)',
    searched:
      'Make and model decoded from the IMEI. On a paid blacklist check, the lost/stolen carrier blacklist. Monthly members get up to 20 blacklist checks a month.',
    nextStep: 'Have the seller sign out of their account and erase the phone in front of you.',
    link: { to: '/imei-checker', label: 'IMEI checker' },
  },
  {
    item: 'Vehicles (VIN)',
    searched:
      'Year, make and model decoded from the VIN, and open safety recalls. Arizona VINs are also searched against Arizona law-enforcement stolen-vehicle records, updated twice a day.',
    nextStep: 'Get a vehicle history report, and compare the VIN on the dash and door jamb with the title.',
    link: { to: '/vin-checker', label: 'VIN checker' },
  },
  {
    item: 'License plates',
    searched: 'SafeOrStolen theft reports. Arizona plates are also searched against Arizona law-enforcement records.',
    nextStep: 'Run the VIN as well, and contact the state motor vehicle agency for title or registration. Owner names are never shown.',
    link: { to: '/license-plate-lookup', label: 'License plate lookup' },
  },
];

const FAQ_ITEMS = [
  {
    question: 'What databases does SafeOrStolen check?',
    answer:
      "Every SafeOrStolen check (safeorstolen.com/data-sources) searches SafeOrStolen's own theft reports and public web results. Guns add more than 220,000 police theft and loss reports from 33 states and DC plus live Ohio records. Bikes add a national stolen-bicycle registry. Arizona VINs and plates add Arizona law-enforcement stolen-vehicle records. Paid phone checks add the carrier lost/stolen blacklist.",
  },
  {
    question: 'Does SafeOrStolen search police records?',
    answer:
      "Yes. It searches these police and law-enforcement records: firearm theft and loss reports from 33 states and Washington, DC, live Ohio law-enforcement stolen-gun records, and Arizona law-enforcement stolen-vehicle records. Each result names the sources that were searched.",
  },
  {
    question: 'Does SafeOrStolen check the phone blacklist?',
    answer:
      'Yes, on a paid blacklist check. A single check costs $0.99, and monthly members ($10 a month) get up to 20 blacklist checks a month. Free checks show the make and model from the IMEI plus SafeOrStolen theft reports and web results. Before you pay, have the seller sign out and erase the phone in front of you.',
  },
  {
    question: 'How current are the gun theft records?',
    answer:
      "There are two parts. The more than 220,000 police firearm theft and loss reports from 33 states and DC were filed 1973–2017. The Ohio law-enforcement stolen-gun records are searched live on every check. SafeOrStolen's own theft reports are added as owners file them.",
  },
  {
    question: 'What does a SafeOrStolen VIN check search?',
    answer:
      "A VIN check decodes the vehicle and lists open safety recalls, searches SafeOrStolen theft reports and public web results, and for Arizona VINs searches Arizona law-enforcement stolen-vehicle records. Before you buy, ask the seller for the title, compare the VIN on it with the dashboard and door jamb, and get a vehicle history report.",
  },
  {
    question: 'Where do SafeOrStolen theft reports come from?',
    answer:
      'Owners file them on the site with the serial number, IMEI, VIN or plate of the stolen item. When anyone later checks that number, the report shows up as reported stolen. Filing on SafeOrStolen is not a police report, so owners should report the theft to their local police as well.',
  },
];

export default function DataSourcesPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <PageSEO
        title="What SafeOrStolen Searches: Data Sources by Item"
        description="Every source SafeOrStolen searches for guns, phones, cars, plates, bikes and serial numbers, item by item, with how fresh each source is and what to do next."
        keywords="SafeOrStolen data sources, what databases does SafeOrStolen check, does SafeOrStolen search police records, stolen item database sources, SafeOrStolen gun records"
        canonical="/data-sources"
        modifiedTime="2026-10-07"
        structuredData={faqSchema}
      />
      <div className="min-h-screen bg-background pt-20">
        <section className="py-14 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">What SafeOrStolen Searches</h1>
            <p className="text-sm text-muted-foreground mb-6">Updated October 7, 2026</p>
            <p className="text-lg text-foreground leading-relaxed">
              Every SafeOrStolen check searches its own theft reports and public web results that mention the number. On top of
              that, gun serials are searched against more than 220,000 police theft and loss reports from 33 states and Washington, DC plus
              live Ohio records, bikes against a national stolen-bicycle registry, Arizona VINs and plates against Arizona
              law-enforcement records, and phones against the lost and stolen phone blacklist on a paid check. Vehicle checks also
              decode the VIN and list open safety recalls.
            </p>
          </div>
        </section>

        <section className="py-12 container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Sources by item</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border rounded-lg">
                <thead>
                  <tr className="border-b bg-muted/50 text-left">
                    <th className="p-3">Item</th>
                    <th className="p-3">Searched</th>
                    <th className="p-3">Next step</th>
                  </tr>
                </thead>
                <tbody>
                  {SOURCE_TABLE.map((row) => (
                    <tr key={row.item} className="border-b last:border-0 align-top">
                      <td className="p-3 font-medium text-foreground">
                        {row.item}
                        <div>
                          <Link to={row.link.to} className="text-primary text-xs hover:underline">
                            {row.link.label}
                          </Link>
                        </div>
                      </td>
                      <td className="p-3 text-muted-foreground">{row.searched}</td>
                      <td className="p-3 text-muted-foreground">{row.nextStep}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30 border-y border-border/50">
          <div className="container mx-auto px-4 max-w-3xl space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-3">How fresh each source is</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">SafeOrStolen theft reports:</strong> searchable as soon as an owner files one.</li>
                <li><strong className="text-foreground">Public web results:</strong> searched at the moment you run the check.</li>
                <li><strong className="text-foreground">Ohio stolen-gun records:</strong> searched live on every gun check.</li>
                <li><strong className="text-foreground">Arizona stolen-vehicle records:</strong> updated twice a day.</li>
                <li>
                  <strong className="text-foreground">Police firearm theft and loss reports (33 states and DC):</strong> filed
                  1973–2017, searched on every gun check.
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Extra steps before you buy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Have the seller sign out and erase a phone in front of you. Compare a car's title to the seller's ID and get a
                vehicle history report. For a private gun sale, you can also buy through a licensed dealer (FFL) or ask your local
                police to run the serial.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">How sources become a result</h2>
              <p className="text-muted-foreground leading-relaxed">
                Only a theft record matching the exact number can make a result say reported stolen. A web page that mentions the
                number can only raise a possible match. If nothing matches, the result says no report found in the records
                searched, and lists them. The full rules are on{' '}
                <Link to="/methodology" className="text-primary underline">how SafeOrStolen works</Link>.
              </p>
            </div>
          </div>
        </section>

        <section className="py-14 container mx-auto px-4" id="faq">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Questions about the data</h2>
            <div className="space-y-6">
              {FAQ_ITEMS.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-primary/5 border-t border-primary/10">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Run a check</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Enter an IMEI, VIN, plate or serial number. The first 2 checks are free with an account, no credit card.
            </p>
            <Button size="lg" asChild>
              <Link to="/verify">
                Check an item <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
