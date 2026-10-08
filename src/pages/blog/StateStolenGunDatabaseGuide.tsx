/**
 * Oct 7 2026: rewritten by hand for "stolen gun database by state" / "national stolen gun database"
 * (Search Console: "national stolen gun database" 14 impressions and "stolen firearm database" 14,
 * both landing on /firearms-check around position 37). Removed: an invented "top 10 states for gun
 * theft" table and its figures, made-up trafficking-corridor claims and timings, a named supplier,
 * an outbound URL, "all 50 states" and "federal databases" claims, and "34 states". The state list
 * below comes from src/data/gunTheftStats.ts (read only) and links to each state's lookup page.
 */
import { Link } from '@/lib/router-compat';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';
import { GUN_STATES } from '@/data/gunTheftStats';

const DESCRIPTION =
  "Stolen gun databases by state: what the public can search, why the national file is police-only, and how to check a serial across 33 states and DC at once.";

const faqs = [
  {
    question: 'Is there a national stolen gun database?',
    answer:
      "Yes, but the public can't search it. The FBI's National Crime Information Center (NCIC) holds guns reported stolen to police anywhere in the U.S. Only law enforcement can query it, and since August 2025 licensed firearm dealers can voluntarily check its stolen-gun file. A private buyer can ask local police to run a serial, or buy through a dealer.",
  },
  {
    question: 'Does every state have a public stolen gun database?',
    answer:
      "No. Police in every state record stolen guns and send them to NCIC, but only a few states let the public search those records online, Florida and Ohio among them. In most states your options are a SafeOrStolen check, a call to the local police non-emergency line, or a sale through a licensed dealer.",
  },
  {
    question: 'How do I check a gun serial number in my state?',
    answer:
      "Enter the serial on SafeOrStolen (safeorstolen.com/blog/state-stolen-gun-database-guide). One search covers 242,839 police theft and loss reports from 33 states and Washington, DC, live Ohio law-enforcement records and owner reports, so you don't need to know where the gun was stolen. Then ask your local police whether they'll run it through NCIC.",
  },
  {
    question: 'Do I need to check more than one state?',
    answer:
      "Yes. A gun is reported stolen where it was taken, not where it's sold, and guns move between states. A state-only search misses a gun stolen next door. NCIC covers every state, which is why a police or dealer check matters, and SafeOrStolen's search covers all the states in its records at once.",
  },
  {
    question: 'How current are the police reports SafeOrStolen searches?',
    answer:
      "The 242,839 police theft and loss reports were filed through 2017, and the years covered vary by state; some states' records start decades earlier. Ohio law-enforcement records are searched live, and owner reports on SafeOrStolen are added as they come in. For a recent theft elsewhere, ask police or a dealer to check NCIC.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Stolen Gun Database by State: What You Can Search',
  description: DESCRIPTION,
  author: { '@type': 'Organization', name: 'SafeOrStolen' },
  publisher: { '@type': 'Organization', name: 'SafeOrStolen', url: 'https://safeorstolen.com' },
  datePublished: '2026-03-09',
  dateModified: '2026-10-07',
  mainEntityOfPage: 'https://safeorstolen.com/blog/state-stolen-gun-database-guide',
};

const LEVELS: [string, string, string][] = [
  ["National: the FBI's NCIC file", 'Guns reported stolen to any U.S. police agency, kept current', 'Police; licensed dealers voluntarily since August 2025'],
  ['State crime information systems', 'Each state police network, which feeds NCIC', 'Police in that state'],
  ['State public searches', 'Guns reported stolen in that one state', 'Anyone, in the few states that offer one (Florida and Ohio among them)'],
  ['SafeOrStolen', '242,839 police theft and loss reports from 33 states and DC (filed through 2017, years vary by state), live Ohio records, owner reports, altered-serial flag', 'Anyone; 2 free checks'],
  ['ATF', 'No stolen-gun lookup. eTrace traces recovered guns for police', 'Law enforcement only'],
];

const sortedStates = [...GUN_STATES].sort((a, b) => a.name.localeCompare(b.name));

const StateStolenGunDatabaseGuide = () => (
  <>
    <PageSEO
      title="Stolen Gun Database by State: What You Can Search (2026) | SafeOrStolen"
      description={DESCRIPTION}
      canonical="/blog/state-stolen-gun-database-guide"
      keywords="stolen gun database by state, state stolen gun database, national stolen gun database, stolen firearm database, check stolen gun by state, public stolen gun search"
      type="article"
      publishedTime="2026-03-09"
      modifiedTime="2026-10-07"
      structuredData={[faqSchema, articleSchema]}
    />
    <div className="min-h-screen bg-background pt-20">
      <header className="py-16 px-4 bg-gradient-to-b from-muted to-background">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-primary text-sm font-bold tracking-wide">Firearms guide</span>
          <h1 className="text-4xl md:text-5xl font-black mt-2 mb-4">Stolen Gun Database by State: What You Can Search</h1>
          <p className="speakable-summary text-muted-foreground text-lg max-w-2xl mx-auto">
            Every state's police report stolen guns into the FBI's NCIC file, which only police and licensed dealers can
            search. Only a few states, such as Florida and Ohio, let the public search their own records. SafeOrStolen
            searches police theft and loss reports from 33 states and Washington, DC, plus live Ohio records, in one check.
          </p>
          <p className="text-muted-foreground text-sm mt-3">Updated October 7, 2026 · 6 min read</p>
        </div>
      </header>

      <section className="py-8 px-4">
        <div className="max-w-xl mx-auto text-center">
          <Link to="/firearms-check">
            <Button size="lg" className="text-lg px-8 py-6 font-bold">
              Check a gun serial number <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="text-muted-foreground text-sm mt-3">2 free checks · no credit card · altered-serial flag included</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 pb-16">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">Where stolen guns are recorded, and who can search each</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            When an owner reports a gun stolen, the local police department enters it in its state's crime information
            system, which passes it to NCIC. That's the only list that covers every state, and the public can't see it.
            Here's the full picture.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 text-foreground font-bold">Record</th>
                  <th className="text-left p-3 text-foreground font-bold">What's in it</th>
                  <th className="text-left p-3 text-foreground font-bold">Who can search it</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {LEVELS.map((r) => (
                  <tr key={r[0]} className="border-t border-border">
                    <td className="p-3 text-foreground font-medium">{r[0]}</td>
                    <td className="p-3">{r[1]}</td>
                    <td className="p-3">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">Why a one-state search isn't enough</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A gun is reported stolen in the state it was taken from. If it's sold across the state line, a search of the
            buyer's state won't find it. State public searches also only cover what police in that state chose to publish.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            So use more than one check. Run the serial on SafeOrStolen, which covers every state in its records at once.
            Then ask your local police to run it through NCIC, or do the sale through a licensed dealer who can check
            the stolen-gun file. Your state's rules on private sales are on our{' '}
            <Link to="/state-firearm-transfer-laws" className="text-primary hover:underline">state firearm transfer laws</Link> page.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">States in SafeOrStolen's police records</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The 242,839 police theft and loss reports come from these 33 states and Washington, DC. They were filed
            through 2017, and the years covered vary by state, as listed. Each state's page shows what the records hold
            for that state. Totals and trends are on{' '}
            <Link to="/stolen-gun-statistics" className="text-primary hover:underline">stolen gun statistics</Link>.
          </p>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 text-foreground font-bold">State</th>
                  <th className="text-left p-3 text-foreground font-bold">Years covered</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {sortedStates.map((s) => (
                  <tr key={s.slug} className="border-t border-border">
                    <td className="p-3">
                      <Link to={`/gun-serial-number-lookup/${s.slug}`} className="text-primary hover:underline">
                        {s.name}
                      </Link>
                    </td>
                    <td className="p-3">{s.years || 'Not dated in the records'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground text-sm mt-3">
            Not on the list? The check still searches owner reports and Ohio records, and flags altered serials. Ask your
            local police to run the serial too.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">Questions</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.question} className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">{f.question}</summary>
                <p className="text-muted-foreground mt-2">{f.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4">Related guides</h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/how-to-check-if-gun-is-stolen" className="text-primary hover:underline font-medium">How to check if a gun is stolen</Link>
            <Link to="/blog/atf-gun-serial-number-check" className="text-primary hover:underline font-medium">ATF serial number check</Link>
            <Link to="/blog/gun-show-serial-number-check" className="text-primary hover:underline font-medium">Checking a gun at a gun show</Link>
            <Link to="/firearms-check" className="text-primary hover:underline font-medium">Gun serial number lookup</Link>
          </div>
        </section>
      </article>
    </div>
  </>
);

export default StateStolenGunDatabaseGuide;
