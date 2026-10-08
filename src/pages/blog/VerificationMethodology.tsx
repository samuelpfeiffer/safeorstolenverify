/**
 * Oct 7 2026: rewritten by hand for "what does no report found mean" / "how to read a stolen check
 * result". No Search Console data for this URL. /methodology covers how a result is decided; this
 * article covers what to do after each result, item by item. Removed: invented sources (eBay fraud
 * reports, Facebook flags, carrier APIs, Find My status, Art Loss Register, camera database), the
 * named bike supplier and its "1.2M" figure, "500K items", confidence percentages, "third-party
 * audits", "10,000 known items" validation, AES-256/GDPR/"no personal data stored" claims, ML
 * training claims, "34 states" (33 states plus DC), "legal protection documentation".
 */
import { PageSEO } from '@/components/seo/PageSEO';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/router-compat';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';
import { BlogFAQSchema } from '@/components/seo/BlogFAQSchema';

const FAQS = [
  {
    question: "What does 'no report found' mean on a stolen check?",
    answer:
      "It means none of the records the check searched had a theft report for that number. It doesn't prove the item was never stolen, because many thefts are reported only to local police. On SafeOrStolen (safeorstolen.com) the result lists every source searched, so you can see exactly what came back clean. Pair it with in-person checks before paying.",
  },
  {
    question: "What should I do if a check says 'reported stolen'?",
    answer:
      "Don't buy the item, and don't accuse the seller face to face. Leave politely, keep the listing, messages and the seller's profile, and call your local police non-emergency line with the number you checked. If you already bought it, call the police yourself; turning it in early protects you far better than waiting to be contacted.",
  },
  {
    question: "What does 'possible match' mean?",
    answer:
      "Something turned up that's worth reading, but no theft record matched. Usually it's a web page or post that mentions the same number, or a gun serial that looks altered. Open the details and read the source. If it's a 'stolen, please share' post with matching photos, treat it as stolen. If it's an unrelated listing, it may be nothing.",
  },
  {
    question: 'Can a stolen item check be wrong?',
    answer:
      "Yes. A clean result can miss an unreported theft or one reported only to local police. A match can come from a mistyped serial or an old report never closed after recovery. That's why a good check names the record that matched and when. If a result surprises you, re-enter the number carefully and run it again.",
  },
  {
    question: 'Should I save a stolen check result?',
    answer:
      "Yes. A dated record shows you checked before you paid, which matters if the item later turns out to be stolen. SafeOrStolen saves signed-in checks to your account with the date. A $1.99 verification certificate, free for monthly members, gives you a dated record with its own link to show a buyer or keep with your receipt.",
  },
];

const RESULT_ACTIONS: { result: string; meaning: string; doThis: string }[] = [
  {
    result: 'Reported stolen',
    meaning: 'A theft record matched the exact number. The result names which record.',
    doThis: "Don't buy. Leave calmly, keep the messages and listing, call the police non-emergency line.",
  },
  {
    result: 'Possible match',
    meaning: 'A lead, not a theft record: a web mention of the number, or a serial that looks altered.',
    doThis: 'Read the details. Ask the seller for a receipt or title. For guns and cars, ask the police to run it.',
  },
  {
    result: 'No report found in the records searched',
    meaning: 'Nothing matched in the sources listed on the result.',
    doThis: 'Go ahead with the in-person checks below. A clean result plus clean paperwork is a good sign.',
  },
  {
    result: '"Check this number" warning',
    meaning: "The number doesn't fit the expected format, like a 14-digit IMEI or a VIN with the letter O.",
    doThis: 'Re-read it off the item. If the item itself carries an impossible number, treat that as a red flag.',
  },
];

export default function VerificationMethodology() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "How to Read a Stolen Check Result (and What 'No Report Found' Means)",
    description:
      'What each stolen check result means, what to do next for phones, cars, guns and bikes, and why a clean result still needs in-person checks.',
    author: { '@type': 'Organization', name: 'SafeOrStolen' },
    publisher: {
      '@type': 'Organization',
      name: 'SafeOrStolen',
      logo: { '@type': 'ImageObject', url: 'https://safeorstolen.com/logo.png' },
    },
    datePublished: '2026-01-15',
    dateModified: '2026-10-07',
  };

  return (
    <>
      <PageSEO
        title="How to Read a Stolen Check Result: What 'No Report Found' Means"
        description="What reported stolen, possible match and no report found mean on a stolen check, what to do after each, and the in-person checks that still matter for phones, cars and guns."
        keywords="what does no report found mean, how to read stolen check result, possible match stolen check, stolen check reported stolen what to do, is a clean stolen check reliable"
        canonical="/blog/verification-methodology"
        modifiedTime="2026-10-07"
        publishedTime="2026-01-15"
        structuredData={structuredData}
      />
      <BlogFAQSchema faqs={FAQS} />
      <div className="min-h-screen bg-background py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <article className="prose prose-lg max-w-none dark:prose-invert">
            <h1 className="text-4xl font-bold mb-4">How to Read a Stolen Check Result</h1>
            <div className="flex items-center gap-4 text-muted-foreground mb-8 text-sm">
              <time dateTime="2026-10-07">Updated October 7, 2026</time>
              <span>·</span>
              <span>7 min read</span>
            </div>

            <p className="text-xl">
              A stolen check gives you one of three answers. "Reported stolen" means a theft record matched the number: don't buy.
              "Possible match" means something turned up that needs a closer look. "No report found in the records searched"
              means nothing matched in the sources listed, which is a good sign but not proof. What you do next depends on the
              result and on the item.
            </p>

            <h2>Each result, and what to do</h2>
            <div className="not-prose overflow-x-auto my-6">
              <table className="w-full text-sm border rounded-lg">
                <thead>
                  <tr className="border-b bg-muted/50 text-left">
                    <th className="p-3">Result</th>
                    <th className="p-3">What it means</th>
                    <th className="p-3">What to do</th>
                  </tr>
                </thead>
                <tbody>
                  {RESULT_ACTIONS.map((r) => (
                    <tr key={r.result} className="border-b last:border-0 align-top">
                      <td className="p-3 font-medium text-foreground">{r.result}</td>
                      <td className="p-3 text-muted-foreground">{r.meaning}</td>
                      <td className="p-3 text-muted-foreground">{r.doThis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2>Read the sources line first</h2>
            <p>
              Before the headline result, look at the list of sources underneath. A clean result on a gun serial that was searched
              against police theft records from 33 states and DC plus Ohio's live records tells you more than a clean result on a
              laptop serial, which is only searched against SafeOrStolen's own theft reports and the open web. The result is only as
              wide as that list. How each source is chosen and weighed is on the{' '}
              <Link to="/methodology">how SafeOrStolen works</Link> page.
            </p>

            <h2>After a clean result: the checks that still matter</h2>
            <Card className="not-prose p-6 my-6">
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">Phone:</strong> no check can see Activation Lock or a Google account lock. Have
                  the seller go to Settings, sign out of their Apple ID or Google account, and erase the phone while you watch. The
                  setup screen should then say Hello, not ask for someone else's password.
                </li>
                <li>
                  <strong className="text-foreground">Car or motorcycle:</strong> match the VIN on the dashboard, the door jamb sticker
                  and the title, and the name on the title to the seller's ID. A VIN check doesn't see title brands held by the DMV.
                </li>
                <li>
                  <strong className="text-foreground">Gun:</strong> look closely at the serial for grinding, uneven stamping or fresh
                  finish around it. Possessing a gun with an obliterated serial is a federal crime under 18 U.S.C. § 922(k). Follow
                  your state's rules for private transfers.
                </li>
                <li>
                  <strong className="text-foreground">Bike:</strong> flip it and read the serial under the bottom bracket yourself.
                  Fresh paint or a sticker over that spot is a warning sign.
                </li>
                <li>
                  <strong className="text-foreground">Tools and electronics:</strong> a scratched-off nameplate, engraved initials or
                  a box of new-in-package items with no receipt are the usual giveaways.
                </li>
              </ul>
            </Card>

            <h2>After a 'reported stolen' result</h2>
            <ol>
              <li>Stay calm and don't accuse the seller. Say you've changed your mind and leave somewhere public and safe.</li>
              <li>Screenshot the listing, the seller's profile and your messages before they disappear.</li>
              <li>Call the police non-emergency line and give them the number you checked and where the item is listed.</li>
              <li>If you already paid, tell the police that too. Handing over a stolen item yourself is far better than being found with it.</li>
            </ol>
            <p>
              If the item is yours and it shows up for sale, see <Link to="/how-to-report-a-stolen-item">how to report a stolen item</Link>.
            </p>

            <h2>When results don't agree with what you see</h2>
            <p>
              If the item looks fine but the result says reported stolen, re-enter the number character by character. Letters O and
              I are never used in a VIN, and IMEIs are always 15 digits. If it still matches, trust the record over the seller's
              story. If the result is clean but the serial plate is scratched or the seller won't let you see it, trust what you
              see over the result.
            </p>

            <h2>Questions people ask</h2>
            {FAQS.map((f) => (
              <div key={f.question}>
                <h3>{f.question}</h3>
                <p>{f.answer}</p>
              </div>
            ))}

            <div className="not-prose bg-primary/10 p-6 rounded-lg mt-10">
              <p className="text-lg font-bold mb-2">Run a check</p>
              <p className="text-muted-foreground mb-4">The first 2 checks are free with an account. No credit card.</p>
              <Button asChild size="lg">
                <Link to="/verify">Check an item</Link>
              </Button>
            </div>
          </article>
        </div>
      </div>
      <RelatedPagesSection currentPage="/blog/verification-methodology" currentCategory="blog" maxLinks={5} />
    </>
  );
}
