/**
 * Oct 7 2026: rewritten by hand for "how to decode a vin" / "vin number guide" (no Search Console
 * rows for this page). The old article claimed SafeOrStolen shows title brands, accident history,
 * odometer readings, liens and owner counts, and "checks the same databases Carfax uses"; none of
 * that is true, so it is gone. Also removed invented statistics (1 in 5 cars, $1 billion, 450,000
 * rollbacks, 873,000 stolen vehicles, 40% unreported accidents, damage and value percentages),
 * outbound URLs, named competitor prices, unverified state rules, app-store badges, emoji and caps.
 * The example VIN's check digit was verified by hand.
 */
import { PageSEO } from '@/components/seo/PageSEO';
import { Link } from '@/lib/router-compat';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';
import { BlogHeroImage } from '@/components/blog/BlogHeroImage';
import { blogImages } from '@/assets/blog';

const DESCRIPTION =
  'How to read a VIN: what each of the 17 characters means, the check digit, where the VIN is on a car, and which free checks show if it is stolen or branded.';

const faqs = [
  {
    question: 'What does each part of a VIN mean?',
    answer:
      "Characters 1 to 3 are the World Manufacturer Identifier: the country and maker. Characters 4 to 8 describe the vehicle, such as model, body and engine. Character 9 is the check digit, a math check on the whole VIN. Character 10 is the model year, 11 is the assembly plant, and 12 to 17 are the production serial number.",
  },
  {
    question: 'How do I tell the year of a car from the VIN?',
    answer:
      'Look at the 10th character. From 2001 to 2009 it is the digits 1 to 9. From 2010 it runs through letters: A is 2010, B 2011, C 2012, D 2013, E 2014, F 2015, G 2016, H 2017, J 2018, K 2019, L 2020, M 2021, N 2022, P 2023, R 2024, S 2025 and T 2026. The letters I, O, Q, U and Z and the digit 0 are never used for the year.',
  },
  {
    question: 'Can a VIN tell me if a car is stolen?',
    answer:
      "A VIN check can tell you whether that VIN appears in theft records. SafeOrStolen (safeorstolen.com/blog/complete-vin-guide) searches its own theft reports and public web results, and Arizona VINs against Arizona law-enforcement records. Police can search the national NCIC file. A clean result only covers the records searched, so also match the VIN on the car to the title.",
  },
  {
    question: 'Why are there no I, O or Q in a VIN?',
    answer:
      'The letters I, O and Q are left out of all 17-character VINs because they are too easy to confuse with 1 and 0. If a VIN on a car or a title contains any of them, it was typed wrong or it is not a real VIN. Read it again from the dashboard plate before you run a check.',
  },
  {
    question: 'Does a VIN check show accidents and title brands?',
    answer:
      "Not every VIN check does. Title brands such as salvage, rebuilt or flood come from state title records, which you can see through your state DMV's title check or a vehicle history report built on the federal NMVTIS title system. Accidents show up only if they were reported to a source the report uses. SafeOrStolen covers theft reports, the decoded vehicle and open recalls, not title history.",
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Read a VIN: The Complete VIN Number Guide',
  description: DESCRIPTION,
  datePublished: '2026-01-15',
  dateModified: '2026-10-07',
  author: { '@type': 'Organization', name: 'SafeOrStolen' },
  publisher: {
    '@type': 'Organization',
    name: 'SafeOrStolen',
    logo: { '@type': 'ImageObject', url: 'https://safeorstolen.com/logo.png' },
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

const VIN_PARTS: [string, string, string][] = [
  ['1', '1', 'Country of manufacture. 1, 4 and 5 are the United States, 2 is Canada, 3 is Mexico, J is Japan, K is South Korea, W is Germany.'],
  ['2–3', 'HG', 'Manufacturer. Together with character 1 this is the World Manufacturer Identifier (WMI).'],
  ['4–8', 'CM826', 'Vehicle descriptor: model, body style, restraint system and engine, coded by each maker in its own way.'],
  ['9', '3', 'Check digit. A number (or X) calculated from the other 16 characters. If it doesn\'t compute, the VIN is mistyped or fake.'],
  ['10', '3', 'Model year. Here 3 means 2003.'],
  ['11', 'A', 'Assembly plant.'],
  ['12–17', '004352', 'Production serial number, unique to this vehicle.'],
];

const CHECKS: [string, string, string][] = [
  ['SafeOrStolen VIN check', 'Theft reports owners filed on SafeOrStolen, public web results for the VIN, the decoded year, make and model, and open safety recalls. Arizona VINs also against Arizona law-enforcement stolen-vehicle records.', '2 free checks'],
  ['Police VIN check', "Whether the VIN is in the FBI's NCIC stolen-vehicle file. Some departments run it for a buyer; call the non-emergency line.", 'Usually free'],
  ['State DMV title check', 'Title status and brands (salvage, rebuilt, flood) for vehicles titled in that state, where the state offers it.', 'Free to a small fee'],
  ['NMVTIS-based history report', 'Title brands and odometer readings reported at title events across states, through federally approved providers.', 'Low cost'],
  ['Federal recall lookup', 'Open safety recalls from the National Highway Traffic Safety Administration.', 'Free'],
  ['Paid vehicle history report', 'Title events plus accident and service records, where those were reported to the company.', 'Paid'],
];

export default function CompleteVinGuide() {
  return (
    <>
      <PageSEO
        title="How to Read a VIN: The Complete VIN Number Guide | SafeOrStolen"
        description={DESCRIPTION}
        keywords="how to read a vin, how to decode a vin, vin number guide, vin number meaning, what does a vin tell you, vin check digit, vin year chart, where is the vin on a car"
        canonical="/blog/complete-vin-guide"
        type="article"
        publishedTime="2026-01-15"
        modifiedTime="2026-10-07"
        structuredData={[articleSchema, faqSchema]}
      />

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">How to Read a VIN: The Complete VIN Number Guide</h1>
          <p className="text-lg text-muted-foreground">
            A VIN is 17 characters that identify one vehicle. Characters 1 to 3 name the maker and country, 4 to 8
            describe the model and engine, 9 is a check digit, 10 is the model year, 11 the plant, and 12 to 17 the serial
            number. Here is how to read each part, how to spot a fake, and which checks tell you if a car is stolen or
            branded.
          </p>
          <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
            <span>Updated <time dateTime="2026-10-07">October 7, 2026</time></span>
            <span aria-hidden="true">·</span>
            <span>9 min read</span>
          </div>
        </header>

        <BlogHeroImage src={blogImages.vinCheck} alt="Reading the VIN plate on a car dashboard through the windshield" />

        <div className="prose prose-lg max-w-none">
          <h2>What a VIN is</h2>
          <p>
            Every car, truck and motorcycle built for the U.S. market since the 1981 model year has a 17-character Vehicle
            Identification Number. No two vehicles share one. It goes on the title and registration, insurers and lenders
            track the car by it, and police use it to identify a stolen or recovered vehicle. Vehicles from before 1981
            have shorter serial numbers that follow each maker's own format.
          </p>
          <p>
            A VIN uses the digits 0 to 9 and every capital letter except I, O and Q, which are left out so they can't be
            mistaken for 1 and 0. If you see one of those letters, the VIN has been copied wrong, or it isn't genuine.
          </p>

          <h2>Where to find the VIN on a car</h2>
          <ul>
            <li>
              <strong>Dashboard:</strong> a metal plate at the bottom corner of the windshield on the driver's side. Read it
              from outside the car.
            </li>
            <li>
              <strong>Driver's door jamb:</strong> the certification label on the door pillar, which also shows the build
              month and tire pressures.
            </li>
            <li>
              <strong>Paperwork:</strong> title, registration card, insurance card and loan documents.
            </li>
            <li>
              <strong>Engine, transmission and body panels:</strong> many cars carry the full VIN or part of it stamped or
              labeled here, so parts can be traced if the car is stripped.
            </li>
          </ul>
          <p>
            The dashboard plate, the door label and the title must match character for character. A plate held on with
            the wrong rivets, scratched, or sitting crooked, or a door label that's missing or newer than the rest of the
            car, means the VIN may have been swapped. Walk away.
          </p>

          <h2>How to decode a VIN, character by character</h2>
          <p>
            Here is a real-format example, <code>1HGCM82633A004352</code>, a 2003 Honda Accord. Its check digit computes
            correctly.
          </p>
          <div className="not-prose overflow-x-auto rounded-lg border border-border my-6">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted/60">
                <tr>
                  <th className="px-4 py-3 font-semibold">Position</th>
                  <th className="px-4 py-3 font-semibold">Example</th>
                  <th className="px-4 py-3 font-semibold">What it means</th>
                </tr>
              </thead>
              <tbody>
                {VIN_PARTS.map((r) => (
                  <tr key={r[0]} className="border-t border-border">
                    <td className="px-4 py-3 font-medium">{r[0]}</td>
                    <td className="px-4 py-3 font-mono">{r[1]}</td>
                    <td className="px-4 py-3 text-muted-foreground">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3>Model year codes (10th character)</h3>
          <p>
            2001 to 2009 use the digits 1 to 9. From 2010 the code moves to letters: A 2010, B 2011, C 2012, D 2013, E 2014,
            F 2015, G 2016, H 2017, J 2018, K 2019, L 2020, M 2021, N 2022, P 2023, R 2024, S 2025, T 2026. The cycle
            repeats every 30 years, so a B can mean 1981 or 2011, and you tell them apart from the car itself. I, O, Q, U, Z
            and 0 are never used for the year.
          </p>

          <h3>How the check digit works</h3>
          <p>
            Each letter is given a number (A=1, B=2 and so on, with set values for the rest), each of the 17 positions has
            a weight, and the weighted total is divided by 11. The remainder is the check digit, written as X when it is
            10. You don't need to do the math: any decoder, including the SafeOrStolen VIN check, rejects a VIN whose check
            digit is wrong. What matters for a buyer is that a made-up or carelessly altered VIN usually fails this test.
          </p>

          <h2>What each VIN check tells you</h2>
          <p>
            No single search covers everything. A buyer needs three answers: is it stolen, is the title clean, and is the
            seller the owner. These are the checks that answer them.
          </p>
          <div className="not-prose overflow-x-auto rounded-lg border border-border my-6">
            <table className="w-full text-left text-sm">
              <thead className="bg-muted/60">
                <tr>
                  <th className="px-4 py-3 font-semibold">Check</th>
                  <th className="px-4 py-3 font-semibold">What it tells you</th>
                  <th className="px-4 py-3 font-semibold">Cost</th>
                </tr>
              </thead>
              <tbody>
                {CHECKS.map((r) => (
                  <tr key={r[0]} className="border-t border-border">
                    <td className="px-4 py-3 font-medium">{r[0]}</td>
                    <td className="px-4 py-3 text-muted-foreground">{r[1]}</td>
                    <td className="px-4 py-3 text-muted-foreground">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            The seller question isn't answered by any database. Ask to see the paper title and compare the name with the
            seller's photo ID. Owner names aren't public, by federal law.
          </p>
          <p>
            You can run the first check in the box on our <Link to="/vin-checker" className="text-primary hover:underline">VIN checker</Link>.
            For a step-by-step stolen check, see{' '}
            <Link to="/how-to-check-if-car-stolen" className="text-primary hover:underline">how to check if a car is stolen</Link>.
          </p>

          <h2>Title brands in plain words</h2>
          <ul>
            <li><strong>Clean:</strong> no brand on record. It doesn't mean the car was never damaged, only that nothing was branded.</li>
            <li><strong>Salvage:</strong> an insurer declared it a total loss. In most states it can't be registered for the road until it's repaired and inspected.</li>
            <li><strong>Rebuilt or reconstructed:</strong> a salvage car that was repaired and passed a state inspection. Legal to drive, but worth less and harder to insure.</li>
            <li><strong>Flood:</strong> the car was damaged by water. Electrical and corrosion problems can show up months later.</li>
            <li><strong>Junk or non-repairable:</strong> parts or scrap only. It can't be retitled for the road.</li>
            <li><strong>Lemon law buyback:</strong> the maker bought it back for a defect it couldn't fix. Many states require this to be disclosed.</li>
          </ul>

          <h2>VIN scams and how to catch them</h2>
          <h3>VIN cloning</h3>
          <p>
            A thief copies the VIN of a legitimate car of the same model and puts it on a stolen one, often with a fake
            dashboard plate and a reprinted door label. The cloned VIN checks out clean because the real car isn't stolen.
            Catch it by comparing every VIN location, including stamped parts, and by checking that the title and
            registration are in the seller's name. Two identical cars listed in different places with one VIN is a giveaway.
          </p>
          <h3>Title washing</h3>
          <p>
            A branded car is retitled through another state so the salvage or flood brand drops off. A history report built
            on NMVTIS shows the earlier brand, because it pulls title records across states. Be wary of a title from a
            state the car has no reason to have been in.
          </p>
          <h3>Odometer rollback</h3>
          <p>
            Mileage is wound back to raise the price. Compare the odometer with readings in a title history report, service
            stickers on the windshield or door, and wear on the pedals, seat and steering wheel.
          </p>
          <h3>Curbstoning</h3>
          <p>
            An unlicensed dealer sells cars posing as a private owner. Signs: several cars listed by one phone number, a title
            that isn't in the seller's name, and a seller who won't meet where they live.
          </p>

          <h2>Before you pay</h2>
          <ol>
            <li>Get the VIN from the seller before you go and run it on the <Link to="/vin-checker" className="text-primary hover:underline">VIN checker</Link>.</li>
            <li>At the car, match the dashboard, door jamb and title.</li>
            <li>Make sure the decoded year, make and model match the car.</li>
            <li>Check the title for brands, and the seller's photo ID against the name on it.</li>
            <li>Have a mechanic look at it on a lift.</li>
            <li>If the VIN comes back reported stolen, leave and call the police non-emergency line.</li>
          </ol>
          <p>
            If you're registering a car that was last titled in another state, expect a physical VIN inspection; many states
            require one. Florida uses form HSMV 82042, for example. Your state DMV lists who can do it.
          </p>

          <h2>Common questions</h2>
          {faqs.map((f) => (
            <div key={f.question}>
              <h3>{f.question}</h3>
              <p>{f.answer}</p>
            </div>
          ))}

          <div className="not-prose bg-primary/10 border border-primary/20 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-2">Check a VIN now</h3>
            <p className="mb-4 text-muted-foreground">
              Enter the VIN on SafeOrStolen to decode it, see open recalls and search theft reports. Your first 2 checks
              are free with no credit card, and each one is saved to your account with the date. On your phone, add the
              free web app from <Link to="/app" className="text-primary hover:underline">safeorstolen.com/app</Link>.
            </p>
            <Link to="/vin-checker" className="text-primary hover:underline font-semibold">
              Open the VIN checker
            </Link>
          </div>
        </div>

        <footer className="mt-12 pt-8 border-t">
          <Link to="/blog" className="text-primary hover:underline">Back to the blog</Link>
        </footer>
      </article>

      <RelatedPagesSection currentPage="/blog/complete-vin-guide" currentCategory="blog" maxLinks={5} />
    </>
  );
}
