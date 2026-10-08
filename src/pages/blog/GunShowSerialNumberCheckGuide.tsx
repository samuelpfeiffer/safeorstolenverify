/**
 * Oct 7 2026: rewritten by hand for "gun show serial number check" / "how to check a gun at a gun
 * show" (no Search Console rows for this page). Removed: "national stolen-firearms registry" and
 * "stolen firearms databases" wording (the check searches the sources listed below), "3 seconds",
 * "peace of mind", "about 22 states" (now a link to the transfer-laws page), the $1,200/$400
 * example, a claim that most shows have off-duty officers, and caps. Facts match /firearms-check.
 */
import { Link } from '@/lib/router-compat';
import { ArrowRight, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';

const DESCRIPTION =
  'How to check a gun serial number at a gun show from your phone: before you go, at the table, with walk-around sellers, and what to do if it comes back stolen.';

const faqs = [
  {
    question: 'How do I check a gun serial number at a gun show?',
    answer:
      "Ask to hold the gun, read the serial off the frame or receiver, and enter it on SafeOrStolen (safeorstolen.com/blog/gun-show-serial-number-check) on your phone. It searches 242,839 police theft and loss reports from 33 states and Washington, DC, live Ohio law-enforcement records and owner reports, and flags serials that look altered. The first 2 checks are free and no app download is needed.",
  },
  {
    question: 'Can a dealer at a gun show check if a gun is stolen?',
    answer:
      "Yes, if they choose to. Since August 2025, licensed dealers can voluntarily check a serial against the FBI's NCIC stolen-gun file. Many shows have dealers who will handle a private-party transfer at their table, which also runs your background check. Ask the dealer whether they check the serial as part of the transfer.",
  },
  {
    question: 'Do private sellers at gun shows have to run a background check?',
    answer:
      "It depends on the state the show is in. Some states require private sales to go through a licensed dealer or a permit system, and others don't. Our state firearm transfer laws page lists which is which. Either way, a background check screens the buyer, not the gun, so check the serial yourself.",
  },
  {
    question: 'What if there is no cell signal inside the gun show?',
    answer:
      "Big exhibition halls often have weak signal. Photograph the serial on the gun and the seller's table number, step outside or to a door, and run the check there before you pay. Better still, ask sellers who list guns ahead of the show for the serial and check it at home. Don't let a seller rush you past the check.",
  },
  {
    question: 'Should I check a gun I buy from a dealer table?',
    answer:
      "It's worth doing. A dealer runs your background check, but a used gun in their case may have come in as a trade-in or private purchase. Checking the serial costs you a minute, and if anything comes back you can show the dealer the result. Keep the receipt with the serial on it either way.",
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
  headline: 'How to Check a Gun Serial Number at a Gun Show',
  description: DESCRIPTION,
  author: { '@type': 'Organization', name: 'SafeOrStolen' },
  publisher: { '@type': 'Organization', name: 'SafeOrStolen', url: 'https://safeorstolen.com' },
  datePublished: '2026-03-09',
  dateModified: '2026-10-07',
  mainEntityOfPage: 'https://safeorstolen.com/blog/gun-show-serial-number-check',
};

const RED_FLAGS: [string, string][] = [
  ["The seller won't let you read the serial", 'An honest seller hands you the gun. If they keep it in a holster or case, move on.'],
  ['The serial looks worked on', 'Scratches, grinding, a fresh finish over the number, or digits that sit unevenly. Possessing a gun with an obliterated or altered serial is a federal crime under 18 U.S.C. § 922(k).'],
  ['The price is far under every other table', 'Walk the show first so you know what the same model is going for.'],
  ["The story about where it came from keeps changing", "Ask where they got it. A vague answer that shifts when you ask again is a warning."],
  ['Cash only and no bill of sale', "Even where the state doesn't require paperwork, refusing to write down the serial and both names is a bad sign."],
  ['Pressure to deal outside the building', 'A seller who wants to finish in the parking lot is avoiding show rules and witnesses.'],
];

const GunShowSerialNumberCheckGuide = () => (
  <>
    <PageSEO
      title="Gun Show Serial Number Check: Check a Gun Before You Buy | SafeOrStolen"
      description={DESCRIPTION}
      canonical="/blog/gun-show-serial-number-check"
      keywords="gun show serial number check, check gun at gun show, how to check if a gun is stolen at a gun show, gun show stolen gun check, buying a gun at a gun show"
      type="article"
      publishedTime="2026-03-09"
      modifiedTime="2026-10-07"
      structuredData={[faqSchema, articleSchema]}
    />
    <div className="min-h-screen bg-background pt-20">
      <header className="py-16 px-4 bg-gradient-to-b from-muted to-background">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-primary text-sm font-bold tracking-wide">Gun show guide</span>
          <h1 className="text-4xl md:text-5xl font-black mt-2 mb-4">How to Check a Gun Serial Number at a Gun Show</h1>
          <p className="speakable-summary text-muted-foreground text-lg max-w-2xl mx-auto">
            Hold the gun, read the serial off the frame, and check it on your phone before you pay. SafeOrStolen searches
            police theft and loss reports from 33 states and Washington, DC, live Ohio records and owner reports, and flags
            altered serials. For a check of the FBI's stolen-gun file, buy through a dealer at the show who will run it.
          </p>
          <p className="text-muted-foreground text-sm mt-3">Updated October 7, 2026 · 6 min read</p>
        </div>
      </header>

      <section className="py-8 px-4">
        <div className="max-w-xl mx-auto text-center">
          <Link to="/firearms-check">
            <Button size="lg" className="text-lg px-8 py-6 font-bold">
              Check a serial number free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <p className="text-muted-foreground text-sm mt-3">Works in your phone's browser · 2 free checks · no credit card</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 pb-16">
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">Before you go</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>
              Make a free SafeOrStolen account at home and add the web app to your home screen from{' '}
              <Link to="/app" className="text-primary hover:underline">safeorstolen.com/app</Link>, so you're not signing up
              on a weak signal.
            </li>
            <li>If a seller advertised a gun before the show, ask for the serial and check it from your couch.</li>
            <li>
              Look up whether your state requires private sales to go through a dealer on our{' '}
              <Link to="/state-firearm-transfer-laws" className="text-primary hover:underline">state firearm transfer laws</Link> page.
            </li>
            <li>Read the show's rules on bringing in and carrying out guns, and bring your ID and any permit your state requires.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">At the table, step by step</h2>
          <ol className="space-y-3 list-decimal pl-5 text-muted-foreground">
            <li><strong className="text-foreground">Ask to handle the gun.</strong> Point it in a safe direction and let the seller confirm it's unloaded and show you.</li>
            <li><strong className="text-foreground">Find the serial on the frame or receiver.</strong> On a pistol it's usually on the side of the frame; on an AR-style rifle, the lower receiver. If it also appears on the slide or barrel, the numbers should match.</li>
            <li><strong className="text-foreground">Photograph it.</strong> Take a clear picture of the serial and note the table number or the seller's description.</li>
            <li><strong className="text-foreground">Enter it on SafeOrStolen.</strong> Type every letter and digit. Leave out spaces.</li>
            <li><strong className="text-foreground">Read the result.</strong> You'll see "reported stolen", "possible match" or "no report found in the records searched", with each source listed. If a report shows up, compare its make and model with the gun: different makers can use the same serial.</li>
            <li><strong className="text-foreground">Get it in writing.</strong> A bill of sale with the date, price, make, model, serial and both names. Your check stays saved in your account with the date.</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">Walk-around sellers and dealer transfers</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            At many shows, private owners walk the aisles with a gun for sale and a sign on it. These sales move fast and
            happen standing up. Ask to step to the side, read the serial, and check it the same way you would at a table. If
            the seller won't wait a minute for that, let it go.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The strongest option is to do the deal through a licensed dealer at the show. The dealer runs your background
            check and keeps a record of the transfer, and since August 2025 dealers can choose to check the serial against
            the FBI's NCIC stolen-gun file, which the public can't search. Ask the dealer up front whether they'll do that.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">Warning signs at a gun show</h2>
          <div className="space-y-3">
            {RED_FLAGS.map(([flag, desc]) => (
              <div key={flag} className="flex gap-3 bg-destructive/5 border border-destructive/20 rounded-xl p-4">
                <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground">{flag}</strong>
                  <p className="text-muted-foreground text-sm mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold text-foreground mb-4">If the gun comes back reported stolen</h2>
          <ol className="list-decimal pl-5 text-muted-foreground space-y-2">
            <li>Don't say anything about the result to the seller. Hand the gun back and say you'll keep looking.</li>
            <li>Walk away from the table.</li>
            <li>Tell show security or the show office, with the table number, the serial and a description of the seller.</li>
            <li>If there's no security, call the local police non-emergency line from outside.</li>
            <li>Keep your photo of the serial and the result from your account.</li>
          </ol>
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
            <Link to="/blog/state-stolen-gun-database-guide" className="text-primary hover:underline font-medium">Stolen gun database by state</Link>
            <Link to="/firearms-check" className="text-primary hover:underline font-medium">Gun serial number lookup</Link>
          </div>
        </section>
      </article>
    </div>
  </>
);

export default GunShowSerialNumberCheckGuide;
