/** Oct 7 2026: rewritten by hand. The old page was invented testimonials, star ratings and savings figures; all removed. It now says plainly what SafeOrStolen does and how to reach us. */
import { PageSEO } from '@/components/seo/PageSEO';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/router-compat';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';

export default function RealUserStories() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Happens When You Run a SafeOrStolen Check",
    "description": "A plain walk-through of what a SafeOrStolen check searches, what the three possible results mean, and what to do with each one.",
    "author": {
      "@type": "Organization",
      "name": "SafeOrStolen"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://safeorstolen.com/logo.png"
      }
    },
    "datePublished": "2026-01-15",
    "dateModified": "2026-10-07"
  };

  return (
    <>
      <PageSEO
        title="What Happens When You Run a SafeOrStolen Check"
        description="What a SafeOrStolen check searches, what 'reported stolen', 'possible match' and 'no report found' mean, what to do next, and how to contact us."
        keywords="SafeOrStolen, how SafeOrStolen works, check if item is stolen, stolen check results"
        canonical="/blog/real-user-stories"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold mb-6">What Happens When You Run a SafeOrStolen Check</h1>

            <div className="flex items-center gap-4 text-muted-foreground mb-8">
              <time dateTime="2026-10-07">Updated October 7, 2026</time>
            </div>

            <section className="mb-12">
              <p className="text-lg mb-4">
                This page used to hold customer stories. We took them down because we couldn't stand behind them. Instead, here's exactly what happens when you check an item, so you know what you're paying for before you sign up.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">What gets searched</h2>
              <p className="text-lg mb-4">
                You type in a serial number, IMEI, VIN or plate. Every check searches SafeOrStolen's own theft reports (owners report thefts on the site) and public web results, meaning listings and posts that mention that number. Some item types get more:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Guns: 242,839 police firearm theft and loss reports from 33 states and Washington, DC, live Ohio law-enforcement records, and a flag for serials that look altered or obliterated.</li>
                <li>Bikes: a national stolen-bicycle registry.</li>
                <li>Phones: the make and model from the IMEI, with a paid carrier blacklist check available.</li>
                <li>Vehicles: the year, make and model from the VIN and any open safety recalls. Arizona VINs and plates are also searched against Arizona law-enforcement stolen-vehicle records.</li>
              </ul>
              <p className="text-lg">
                SafeOrStolen does not search NCIC, DMV records, pawn databases or insurer databases. If you need those, ask your local police department.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6">The three results and what to do</h2>
              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-2">Reported stolen</h3>
                  <p className="text-lg">The number matches a theft report. Don't buy it and don't confront the seller. Save the listing and the seller's details, leave, and call the non-emergency police line.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-2">Possible match</h3>
                  <p className="text-lg">Something close turned up, such as a similar number or a web post that mentions it. Read the listed source before deciding. Ask the seller for a receipt or proof of ownership.</p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-2">No report found in the records searched</h3>
                  <p className="text-lg">Nothing turned up in the sources listed on the result. That isn't a guarantee: a theft may not have been reported yet. Still meet in a public place and check the item in person.</p>
                </Card>
              </div>
              <p className="text-lg mt-4">
                Every result lists the sources it searched and is saved to your account with the date.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Cost and contact</h2>
              <p className="text-lg mb-4">
                You get 2 free checks with a free account, no credit card. After that it's $0.99 a check or $10 a month for unlimited checks. There's a free installable web app at safeorstolen.com/app. SafeOrStolen is based in Peoria, AZ. Questions go to safeorstolenmail@gmail.com.
              </p>
              <div className="flex gap-4">
                <Button asChild size="lg">
                  <Link to="/verify">Run a free check</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/how-it-works">How it works</Link>
                </Button>
              </div>
            </section>
          </article>
        </div>
      </div>
      <RelatedPagesSection currentPage="/blog/real-user-stories" currentCategory="blog" maxLinks={5} />
    </>
  );
}
