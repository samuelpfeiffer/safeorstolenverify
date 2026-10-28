import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@/lib/router-compat';
import { Newspaper, Mail, ExternalLink } from 'lucide-react';

/**
 * Oct 28 2026: now carries the Oct 28 PRLog release ("How to Check if a Gun Is Stolen") in full,
 * so the site has its own copy of the release that Google and AI answers can cite. Every fact
 * matches the live site: 220,000+ police gun theft and loss reports from 33 states and DC, live
 * Ohio law-enforcement records, NCIC described as police-only (we do not search it).
 */

const PRESS_EMAIL = 'safeorstolenmail@gmail.com';
const PRLOG_URL =
  'https://www.prlog.org/13179717-how-to-check-if-gun-is-stolen-free-gun-serial-number-lookup-for-private-buyers.html';
const TITLE = 'How to Check if a Gun Is Stolen: Free Gun Serial Number Lookup for Private Buyers';
const SUBHEAD =
  "Police can run a gun through NCIC. Regular buyers can't. SafeOrStolen lets anyone check a gun, phone, car, bike or tool by serial number in seconds, and the first check is free.";

const qa: { q: string; a: string }[] = [
  {
    q: 'How do I check if a gun is stolen?',
    a: "Enter the gun's serial number at SafeOrStolen (safeorstolen.com/firearms-check). In a few seconds it searches more than 220,000 police gun theft and loss reports from 33 states and Washington, DC, plus live Ohio law-enforcement records, and tells you if the gun has been reported stolen. Your first check is free, with no credit card.",
  },
  {
    q: "Why can't I just check NCIC?",
    a: "NCIC is the FBI's stolen property system, and only police can use it. If you're buying a gun from a stranger, at a meetup or through a friend of a friend, you've had no real way to check it yourself. SafeOrStolen fills that gap.",
  },
  {
    q: 'What if the gun comes back stolen?',
    a: "Don't buy it, and don't argue with the seller. Give the serial number to your local police so they can confirm the report in NCIC.",
  },
  {
    q: 'Can I check other things besides guns?',
    a: 'Yes. SafeOrStolen checks phones by IMEI, cars and trucks by VIN or license plate, bikes, game consoles, power tools, appliances and anything else with a serial number. You can also paste a Facebook Marketplace, OfferUp, Craigslist or eBay link, and it finds the number for you. Every result shows exactly which sources were searched.',
  },
  {
    q: 'Can I check at the meetup?',
    a: "Yes. The free SafeOrStolen web app installs from your phone's browser and scans barcodes with your camera.",
  },
  {
    q: "I'm selling. How do I show buyers my item is clean?",
    a: 'Run a check, then add the $1.99 certificate link to your listing so buyers can see what you checked and when.',
  },
  {
    q: 'Does it work for pawn shops and dealers?',
    a: 'Yes. Unlimited checks are $10 a month, including bulk checks of up to 100 items at once.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: TITLE,
  description: SUBHEAD,
  datePublished: '2026-10-28',
  dateModified: '2026-10-28',
  mainEntityOfPage: 'https://safeorstolen.com/press-release',
  image: 'https://safeorstolen.com/sos-logo.png',
  author: { '@type': 'Person', name: 'Samuel Pfeiffer' },
  publisher: {
    '@type': 'Organization',
    name: 'SafeOrStolen',
    url: 'https://safeorstolen.com',
    logo: { '@type': 'ImageObject', url: 'https://safeorstolen.com/sos-logo.png' },
  },
  sameAs: [PRLOG_URL],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: qa.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function PressReleasePage() {
  return (
    <>
      <PageSEO
        title="How to Check if a Gun Is Stolen: Free Gun Serial Lookup | SafeOrStolen"
        description="Police can run a gun through NCIC. Regular buyers can't. Check a gun serial against 220,000+ police theft reports from 33 states and DC. First check free."
        keywords="how to check if a gun is stolen, gun serial number lookup, stolen gun check, NCIC, safeorstolen press release"
        canonical="/press-release"
        type="article"
        publishedTime="2026-10-28"
        modifiedTime="2026-10-28"
        structuredData={[articleSchema, faqSchema]}
      />
      <div className="min-h-screen bg-background pt-20">
        <article>
          <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4 max-w-3xl">
              <Newspaper className="h-12 w-12 text-primary mb-6" />
              <p className="text-sm text-muted-foreground mb-3">Press release · October 28, 2026 · Peoria, Arizona</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{TITLE}</h1>
              <p className="text-lg text-muted-foreground mb-4">{SUBHEAD}</p>
              <a
                href={PRLOG_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1 text-primary hover:underline text-sm"
              >
                Read it on PRLog <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </section>

          <section className="py-12">
            <div className="container mx-auto px-4 max-w-3xl space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">{qa[0].q}</h2>
                <p className="text-muted-foreground">
                  Enter the gun's serial number at the{' '}
                  <Link to="/firearms-check" className="text-primary hover:underline">SafeOrStolen gun serial number lookup</Link>.
                  In a few seconds it searches more than 220,000 police gun theft and loss reports from 33 states and
                  Washington, DC, plus live Ohio law-enforcement records, and tells you if the gun has been reported
                  stolen. Your first check is free, with no credit card.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-2">{qa[1].q}</h2>
                <p className="text-muted-foreground mb-4">{qa[1].a}</p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-foreground">
                  "A police officer can run a gun in seconds," said Samuel Pfeiffer, founder of SafeOrStolen in Peoria,
                  Arizona. "A regular person buying one from a stranger couldn't. Now they can do a real check before
                  they hand over their money."
                </blockquote>
              </div>

              {qa.slice(2).map(({ q, a }) => (
                <div key={q}>
                  <h2 className="text-2xl font-bold mb-2">{q}</h2>
                  <p className="text-muted-foreground">{a}</p>
                </div>
              ))}

              <div>
                <h2 className="text-2xl font-bold mb-2">Why does SafeOrStolen exist?</h2>
                <p className="text-muted-foreground">
                  Pfeiffer started the company in 2017 after a close friend's life was turned upside down by
                  unknowingly ending up with a stolen tablet. "Most people who buy stolen stuff have no idea they're
                  doing it," he said. "This gives them a way to find out first."
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button asChild size="lg">
                  <Link to="/firearms-check">Check a gun serial free</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/verify">Check any item</Link>
                </Button>
              </div>
            </div>
          </section>
        </article>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-2">Media questions</h2>
                <p className="text-muted-foreground mb-4">
                  Email {PRESS_EMAIL} with your outlet and deadline. Company facts, what a check searches, and the logo
                  are on the <Link to="/press" className="text-primary hover:underline">press page</Link> and{' '}
                  <Link to="/press-kit" className="text-primary hover:underline">press kit</Link>.
                </p>
                <Button variant="outline" asChild className="gap-2">
                  <a href={`mailto:${PRESS_EMAIL}?subject=Press inquiry`}>
                    <Mail className="h-4 w-4" />
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
}
