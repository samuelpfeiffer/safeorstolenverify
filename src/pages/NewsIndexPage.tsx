import React from 'react';
import { Link } from '@/lib/router-compat';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Newspaper } from 'lucide-react';

/**
 * Oct 7 2026: rewritten by hand for "safeorstolen news". The old page had an invented company
 * timeline (a 2019 founding that contradicted other pages, an API launch, "international
 * coverage"), made-up market figures ($150 billion secondhand market, "5-15% of items have
 * questionable origins"), "All 50 States / nationwide law enforcement data", "3 second checks",
 * a wrong state count for gun records, and "trusted by buyers nationwide". None of it could be
 * confirmed, so the page now states what SafeOrStolen does today and points to the blog.
 */

const PRESS_EMAIL = 'safeorstolenmail@gmail.com';

const current: { title: string; body: string; to: string; linkText: string }[] = [
  {
    title: 'Gun serial checks',
    body: 'Gun checks search 242,839 police firearm theft and loss reports from 33 states and Washington, DC (filed through 2017; the years covered vary by state), live Ohio law-enforcement records, and flag serials that look altered or obliterated.',
    to: '/firearms-check',
    linkText: 'Check a gun serial',
  },
  {
    title: 'Arizona stolen-vehicle records',
    body: 'Arizona VINs and plates are searched against Arizona law-enforcement stolen-vehicle records, updated twice a day. Every VIN check also decodes the year, make and model and lists open safety recalls.',
    to: '/vin-checker',
    linkText: 'Check a VIN',
  },
  {
    title: 'Phone blacklist checks',
    body: "An IMEI check shows the phone's make and model. A paid carrier blacklist check for lost or stolen phones is available, and monthly members get up to 20 a month.",
    to: '/imei-check',
    linkText: 'Check an IMEI',
  },
  {
    title: 'Verification certificate',
    body: 'An optional $1.99 certificate gives a buyer a dated record, with its own link, showing they checked before the sale. It is free for monthly members.',
    to: '/pricing',
    linkText: 'See pricing',
  },
];

const NewsIndexPage = () => {
  const newsSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'SafeOrStolen News',
    description: 'What SafeOrStolen checks today, and where to find its guides and press information.',
    dateModified: '2026-10-07',
    publisher: { '@type': 'Organization', name: 'SafeOrStolen' },
  };

  return (
    <>
      <PageSEO
        title="SafeOrStolen News: What the Stolen-Item Check Covers Now"
        description="SafeOrStolen news and updates: what a stolen-item check covers today for guns, vehicles, phones and bikes, the newest guides on the blog, and the press contact."
        keywords="safeorstolen news, safeorstolen updates, stolen item check news"
        canonical="/news"
        structuredData={newsSchema}
        modifiedTime="2026-10-07"
      />
      <div className="min-h-screen bg-background">
        <section className="pt-28 pb-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Newspaper className="w-4 h-4 mr-2" />
              News
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">SafeOrStolen News</h1>
            <p className="text-lg text-muted-foreground mb-4">
              SafeOrStolen is a stolen-item check for used phones, cars, guns, bikes and anything with a serial
              number, based in Peoria, AZ. This page sums up what a check covers right now. Buying guides and
              how-tos are on the <Link to="/blog" className="text-primary hover:underline">blog</Link>, and press
              questions go to {PRESS_EMAIL}.
            </p>
            <p className="text-sm text-muted-foreground">Updated October 7, 2026</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">What a check covers as of October 2026</h2>
            <p className="text-muted-foreground mb-6">
              Every check searches SafeOrStolen's own theft reports and public web results that mention the
              number. On top of that:
            </p>
            <div className="space-y-4">
              {current.map((item) => (
                <Card key={item.title}>
                  <CardContent className="py-5">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-3">{item.body}</p>
                    <Link to={item.to} className="text-primary hover:underline text-sm">{item.linkText}</Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="text-muted-foreground mt-6">
              SafeOrStolen does not search NCIC, ATF eTrace, DMV records, Apple or Google account status, or
              pawn, insurer or manufacturer databases. The full list is on{' '}
              <Link to="/data-sources" className="text-primary hover:underline">data sources</Link>.
            </p>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">Press</h2>
            <p className="text-muted-foreground mb-6">
              Company boilerplate, a fact sheet and the logo are in the press kit. For interviews, email{' '}
              {PRESS_EMAIL}.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link to="/press-kit">Press kit</Link>
              </Button>
              <Button asChild variant="outline">
                <a href={`mailto:${PRESS_EMAIL}?subject=Press inquiry`}>Email {PRESS_EMAIL}</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-2xl font-bold mb-4">Check an item</h2>
            <p className="text-muted-foreground mb-6">
              The first 2 checks are free with a free account, no credit card. After that it's $0.99 a check or
              $10 a month for unlimited checks.
            </p>
            <Button asChild size="lg">
              <Link to="/verify">Start a free check</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default NewsIndexPage;
