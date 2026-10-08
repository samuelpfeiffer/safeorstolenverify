/**
 * Oct 7 2026: rewritten by hand for "is SafeOrStolen legit" / "SafeOrStolen transparency". No Search
 * Console data for this URL. A plain list of what SafeOrStolen does and doesn't do, what it costs and
 * what it won't claim. Removed: "34 states", "updated every 15 minutes", "investigate within 24
 * hours", "verified before inclusion", "data sharing agreements with pawn shops and resale
 * platforms" (unverified), a line saying carrier blacklists are checked next to one saying they
 * aren't, "under 3 seconds", TLS 1.3/AES-256 claims, "founded 2024" and a non-working contact
 * address. Privacy details now point to the privacy policy instead of being restated.
 */
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@/lib/router-compat';

const DO_DONT: { claim: string; answer: string }[] = [
  { claim: 'Searches its own theft reports and public web results on every check', answer: 'Yes' },
  { claim: 'Searches police firearm theft and loss reports (33 states and DC) and live Ohio records for guns', answer: 'Yes' },
  { claim: 'Searches a national stolen-bicycle registry for bikes', answer: 'Yes' },
  { claim: 'Searches Arizona law-enforcement stolen-vehicle records for Arizona VINs and plates', answer: 'Yes' },
  { claim: 'Searches the carrier lost/stolen blacklist for phones', answer: 'On a paid blacklist check only' },
  { claim: 'Searches NCIC or ATF eTrace', answer: 'No. Only police can' },
  { claim: "Sees Apple's Activation Lock or a Google account lock", answer: 'No' },
  { claim: 'Searches DMV or MVD title records', answer: 'No' },
  { claim: 'Searches pawn, insurer or manufacturer databases', answer: 'No' },
  { claim: 'Shows the owner of a license plate', answer: 'No, never' },
  { claim: 'Proves who owns an item or that it is genuine', answer: 'No' },
];

const FAQS = [
  {
    q: 'Is SafeOrStolen legit?',
    a: "SafeOrStolen (safeorstolen.com) is a real company based in Seattle, Washington, that searches theft records for a number you enter and shows you which sources it searched. It publishes what it doesn't search too: NCIC, DMV records, Activation Lock. A free account gets 2 checks with no credit card, so you can see how it works before paying anything.",
  },
  {
    q: 'Does SafeOrStolen work with the police?',
    a: "SafeOrStolen is a private company, not law enforcement. It doesn't send reports to the police and has no access to restricted police systems like NCIC. It does search some police records that are available to it: firearm theft and loss reports from 33 states and DC, live Ohio stolen-gun records, and Arizona stolen-vehicle records. If a check finds a theft report, contact your local police yourself.",
  },
  {
    q: 'Can I get a refund from SafeOrStolen?',
    a: "The monthly plan ($14.99 a month) has a 30-day refund and can be canceled anytime, so you're not billed again. To ask about a refund or a charge, email safeorstolenmail@gmail.com with the email address on your account and the date of the charge.",
  },
  {
    q: 'What if SafeOrStolen gets a result wrong?',
    a: "Email safeorstolenmail@gmail.com with the number you checked and the date of the check. Every result names the source that matched, so a wrong match can be traced. If the match came from a SafeOrStolen theft report on your own item that's since been recovered, say so and include how you can show you're the owner.",
  },
];

export default function TransparencyPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <>
      <PageSEO
        title="Is SafeOrStolen Legit? What It Does and Doesn't Do"
        description="A plain list of what SafeOrStolen searches and what it can't, what it costs, how refunds work, who runs it, and how to report a wrong result."
        keywords="is SafeOrStolen legit, SafeOrStolen review, SafeOrStolen transparency, is SafeOrStolen real, SafeOrStolen refund"
        canonical="/transparency"
        modifiedTime="2026-10-07"
        structuredData={faqSchema}
      />
      <div className="min-h-screen bg-background pt-20">
        <section className="py-14 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Is SafeOrStolen Legit?</h1>
            <p className="text-sm text-muted-foreground mb-6">Updated October 7, 2026</p>
            <p className="text-lg text-foreground leading-relaxed">
              SafeOrStolen is a Seattle-based company that checks whether a used item has been reported stolen. It searches its own
              theft reports and public web results, plus police and registry records for guns, bikes and Arizona vehicles, and
              names every source on the result. It can't search NCIC, DMV records or Activation Lock, and says so. Below is the
              full list, so you can decide for yourself.
            </p>
          </div>
        </section>

        <section className="py-12 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">What SafeOrStolen does and doesn't do</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border rounded-lg">
                <thead>
                  <tr className="border-b bg-muted/50 text-left">
                    <th className="p-3">Does SafeOrStolen…</th>
                    <th className="p-3">Answer</th>
                  </tr>
                </thead>
                <tbody>
                  {DO_DONT.map((r) => (
                    <tr key={r.claim} className="border-b last:border-0 align-top">
                      <td className="p-3 text-foreground">{r.claim}</td>
                      <td className="p-3 text-muted-foreground whitespace-nowrap">{r.answer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Details for each item type: <Link to="/data-sources" className="text-primary underline">data sources</Link>. How
              results are decided: <Link to="/methodology" className="text-primary underline">how SafeOrStolen works</Link>.
            </p>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="font-bold text-xl mb-3">What it costs, all of it</h2>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>Free account: 2 checks, no credit card.</li>
                  <li>Single check: $3.99.</li>
                  <li>Monthly: $14.99 for unlimited checks, with up to 20 phone blacklist checks a month. Cancel anytime; 30-day refund.</li>
                  <li>Verification certificate: $1.99, free for monthly members.</li>
                  <li>The installable app at safeorstolen.com/app: free.</li>
                </ul>
                <p className="text-sm text-muted-foreground mt-3">
                  Full details on <Link to="/pricing" className="text-primary underline">pricing</Link>.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h2 className="font-bold text-xl mb-3">What it won't claim</h2>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>An accuracy percentage. Unreported thefts can't be counted, so nobody can measure one honestly.</li>
                  <li>That a clean result proves an item was never stolen.</li>
                  <li>Access to police systems it doesn't have.</li>
                  <li>Partnerships, reviews or press it can't show you.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-12 container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-3">Your data</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you're signed in, each check is saved to your account with the date, the number you checked, the result and the
                sources searched, so you can come back to it. A verification certificate shows only the last four characters of
                the number, so you can share it without publishing the full serial. Everything else about what's collected and how
                to delete it is in the <Link to="/privacy" className="text-primary underline">privacy policy</Link>.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Who runs it</h2>
              <p className="text-muted-foreground leading-relaxed">
                SafeOrStolen is based in Seattle, Washington. The founder's story, including why he started it, is on{' '}
                <Link to="/our-story" className="text-primary underline">our story</Link>. Contact: safeorstolenmail@gmail.com.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6">Questions</h2>
              <div className="space-y-6">
                {FAQS.map((f) => (
                  <div key={f.q}>
                    <h3 className="font-semibold text-foreground mb-2">{f.q}</h3>
                    <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Try it before you pay</h2>
            <p className="text-lg text-muted-foreground mb-8">Two free checks with a free account.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/verify">Run a check</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">About SafeOrStolen</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
