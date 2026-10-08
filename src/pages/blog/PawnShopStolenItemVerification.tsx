import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';
import { BlogHeroImage } from '@/components/blog/BlogHeroImage';
import { blogImages } from '@/assets/blog';

/**
 * Oct 7 2026: rewritten by hand for "do pawn shops check if items are stolen" (position 18), plus
 * "do pawn shops check if guns are stolen" (15), "do pawn shops check serial numbers" and "do pawn
 * shops require id". Removed: the claim that pawn shops search NCIC (only police can), "connected
 * to 6,000+ law enforcement agencies", a flat "14-30 day" holding period for every state, "12 min
 * read", "the same verification pawn shops use", a vendor database named as what pawn shops check,
 * and "peace of mind".
 */

const WHO_DOES_WHAT: string[][] = [
  ['Copies the seller\'s photo ID', 'Pawn shop', 'At the counter, before paying'],
  ['Records the serial number, model and description', 'Pawn shop', 'At the counter, on the pawn ticket'],
  ['Sends the transaction record to police', 'Pawn shop', 'Daily or as local rules require, often electronically'],
  ['Compares the records with stolen reports, including NCIC', 'Local police', 'After they receive the report'],
  ['Holds the item before selling it', 'Pawn shop', 'For the period state or local law sets'],
  ['Places a hold on or seizes a matching item', 'Police', 'When a record matches a theft report'],
];

const FAQS = [
  {
    question: 'Do pawn shops check if items are stolen?',
    answer:
      "Mostly through the police, not a database at the counter. Pawn shops copy the seller's photo ID, record each item's serial number and description, and report the transaction to local police, who compare it with stolen reports. The shop then holds the item for a period set by state or local law. Many shops also run their own checks, such as SafeOrStolen (safeorstolen.com/blog/pawn-shop-stolen-item-verification).",
  },
  {
    question: 'Do pawn shops check serial numbers?',
    answer:
      "They record them. Pawn laws generally require the shop to write down the serial number, make and model of each item and pass that record to police, who run the numbers against stolen reports. A shop can't search NCIC itself. Items without a serial, like most jewelry, are described and often photographed instead, which makes them harder to match.",
  },
  {
    question: 'Do pawn shops check if guns are stolen?',
    answer:
      "A pawn shop that takes guns must be a federally licensed dealer and logs every gun's serial number in its acquisition and disposition records. Where pawn reporting applies, police can run those serials against stolen reports. When someone redeems a pawned gun, the shop must run a background check on that person. That check is on the person, not on whether the gun is stolen.",
  },
  {
    question: 'Do pawn shops require ID?',
    answer:
      "Yes. State and local pawn laws generally require a government-issued photo ID from anyone pawning or selling, and the shop records the name, address and ID number with the transaction. Some places also require a thumbprint or a photo of the seller. Without ID, a legitimate pawn shop will turn you away.",
  },
  {
    question: 'What happens if a pawn shop takes in a stolen item?',
    answer:
      "When police match an item to a theft report, they put a hold on it or take it, and it usually goes back to the owner. The shop is typically out what it paid unless it recovers the money from the person who pawned it. Whether the owner must repay the shop, and how holds work, depends on the state.",
  },
  {
    question: 'Is it safe to buy from a pawn shop?',
    answer:
      "It's generally lower risk than a stranger online, because the seller's ID is on file, the item was reported to police and it sat through a holding period. It isn't zero risk: a theft reported after the hold ended, or never reported, won't have been caught. Ask for the serial number and check it yourself before paying.",
  },
  {
    question: 'How long do pawn shops hold items before selling them?',
    answer:
      'It depends on the state and sometimes the city. Among states that name a holding period, 30 days is the most common, while some set 60, 90 or 120 days and others leave it to local ordinances. The state pawnshop laws page at safeorstolen.com/state-pawnshop-laws lists the period for each state that names one.',
  },
];

const PawnShopStolenItemVerification = () => {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Do Pawn Shops Check if Items Are Stolen?',
    description: 'How pawn shops check for stolen items: seller ID, serial number records, police reporting, holding periods, guns, and what a buyer should check.',
    datePublished: '2025-01-15',
    dateModified: '2026-10-07',
    author: { '@type': 'Organization', name: 'SafeOrStolen' },
    publisher: { '@type': 'Organization', name: 'SafeOrStolen' },
    mainEntityOfPage: 'https://safeorstolen.com/blog/pawn-shop-stolen-item-verification',
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <PageSEO
        title="Do Pawn Shops Check if Items Are Stolen? How It Works | SafeOrStolen"
        description="Do pawn shops check if items are stolen? How seller ID, serial number records, police reporting and holding periods work, what happens with guns, and what buyers should check."
        keywords="do pawn shops check if items are stolen, how do pawn shops check if items are stolen, do pawn shops check serial numbers, do pawn shops check if guns are stolen, do pawn shops require id, pawn shop holding period"
        canonical="/blog/pawn-shop-stolen-item-verification"
        modifiedTime="2026-10-07"
        publishedTime="2025-01-15"
        structuredData={[articleSchema, faqSchema]}
      />
      <div className="min-h-screen bg-background">
        <article className="max-w-3xl mx-auto px-4 py-16 pt-24">
          <header className="mb-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/blog" className="hover:text-primary">Blog</Link>
              <span>/</span>
              <span>Pawn shops</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Do Pawn Shops Check if Items Are Stolen?</h1>
            <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
              Yes, but mostly through the police rather than a database at the counter. The shop copies the seller's photo
              ID, writes down each item's serial number and description, and reports the transaction to local police, who
              compare it with stolen reports. The shop then holds the item for a period set by state or local law before it
              can sell it. If a record matches a theft, police put a hold on the item.
            </p>
            <p className="text-sm text-muted-foreground">Updated October 7, 2026</p>
          </header>

          <BlogHeroImage src={blogImages.pawnShop} alt="Pawn shop counter where items are logged by serial number" />

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Who checks what, and when</h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/60">
                  <tr><th className="px-4 py-3 font-semibold">Step</th><th className="px-4 py-3 font-semibold">Who</th><th className="px-4 py-3 font-semibold">When</th></tr>
                </thead>
                <tbody>
                  {WHO_DOES_WHAT.map((r) => (
                    <tr key={r[0]} className="border-t border-border">
                      <td className="px-4 py-3 font-medium">{r[0]}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r[1]}</td>
                      <td className="px-4 py-3 text-muted-foreground">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              The key detail: NCIC, the FBI's national crime records system, is open only to police and other criminal
              justice agencies. A pawn shop can't type a serial number into it. The match happens on the police side, after
              the shop's report arrives, which is why the holding period exists.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">What the clerk looks at before paying</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Reporting catches items that were already reported stolen. A careful clerk also watches for things a report
              can't show yet:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>A serial plate that is scratched off, painted over or replaced with a sticker.</li>
              <li>A phone still signed in to someone's Apple ID or Google account, or a seller who doesn't know the passcode.</li>
              <li>Tools engraved with a company name, or rental store tags.</li>
              <li>Several new-in-box items with no receipt, or the same person back every few days with more.</li>
            </ul>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Many shops also run serial numbers through their own pre-purchase check. Shop owners can read how that works on
              the <Link to="/for-pawn-shops" className="text-primary underline">stolen item check for pawn shops</Link> page.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Guns at pawn shops</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A pawn shop that deals in guns needs a federal firearms license. Every gun it takes in goes into its
              acquisition and disposition records by serial number, and where pawn reporting applies, police can run those
              serials against stolen reports. When someone redeems a pawned gun, the shop has to run a background check on
              that person before handing it back. That background check is about the person. It does not tell anyone
              whether the gun was stolen.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Possessing a gun whose serial number has been obliterated is a federal crime under 18 U.S.C. § 922(k), so a
              shop should refuse one outright. To check a gun serial yourself, use the{' '}
              <Link to="/firearms-check" className="text-primary underline">gun serial number check</Link>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Where the system has gaps</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>A theft reported after the holding period ends won't stop the sale.</li>
              <li>Owners who never wrote down a serial number can't give one to police, so there's nothing to match.</li>
              <li>Rules differ by state and city. Some states license and set holding periods; others leave it to local ordinances. See the <Link to="/state-pawnshop-laws" className="text-primary underline">pawnshop laws by state</Link>.</li>
              <li>Jewelry and other items without serial numbers are matched by description, which is much less reliable.</li>
            </ul>
          </section>

          <section className="mb-12 bg-primary/5 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Buying from a pawn shop? Check it yourself</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Ask for the serial number, IMEI or VIN and run it on SafeOrStolen before you pay. It searches SafeOrStolen's
              theft reports and public web results, plus police gun theft reports from 33 states and DC for guns, a national
              stolen-bicycle registry for bikes, and Arizona law-enforcement records for Arizona vehicles. It does not
              search NCIC or pawn reporting systems. Your first 2 checks are free.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg"><Link to="/verify">Check a serial number</Link></Button>
              <Button asChild variant="outline" size="lg"><Link to="/app">Get the free web app</Link></Button>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Common questions</h2>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <div key={faq.question} className="rounded-lg border border-border bg-card p-5">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </article>
      </div>
      <RelatedPagesSection currentPage="/blog/pawn-shop-stolen-item-verification" currentCategory="blog" maxLinks={5} />
    </>
  );
};

export default PawnShopStolenItemVerification;
