import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Rocket, ArrowRight } from 'lucide-react';
import { Link } from '@/lib/router-compat';

/**
 * Oct 7 2026: rewritten by hand for "safeorstolen product hunt". Removed: three buttons that
 * opened the off-site Product Hunt listing, a "3 sec" verification-speed stat, "we verify
 * everything", and a mission line built on an unsourced "millions of people buy stolen property
 * every year". No upvote counts, rankings or badges were claimed and none are added. The page now
 * describes the product the way a Product Hunt visitor would want it described.
 */

const PRESS_EMAIL = 'safeorstolenmail@gmail.com';

const whatYouGet = [
  {
    title: 'One search box for any number',
    body: 'Paste an IMEI, VIN, license plate or serial number. The check works for phones, cars, guns, bikes, laptops, tools, cameras and anything else with a serial.',
  },
  {
    title: 'Every source listed',
    body: 'Results read "reported stolen", "possible match", or "no report found in the records searched", and show each source that was checked.',
  },
  {
    title: 'A plain-language note',
    body: 'AI writes a short note explaining the result. It never decides whether an item is stolen; that comes only from the records searched.',
  },
  {
    title: 'Saved and shareable',
    body: 'Each check is saved to your account with the date. An optional $1.99 certificate gives you a dated record with its own link to show you checked before buying.',
  },
];

const ProductHuntPage = () => (
  <>
    <PageSEO
      title="SafeOrStolen for Product Hunt Visitors: What It Does"
      description="What SafeOrStolen's stolen-item check does for used phones, cars, guns and bikes, what it searches, what it costs, and how to try it. For Product Hunt visitors."
      keywords="safeorstolen product hunt, safeorstolen app, stolen item checker, check if item is stolen"
      canonical="/product-hunt"
      modifiedTime="2026-10-07"
    />
    <div className="min-h-screen bg-background pt-20">
      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-orange-500/10">
        <div className="container mx-auto px-4 max-w-3xl">
          <Badge className="mb-6 bg-orange-500 text-white px-3 py-1">
            <Rocket className="h-4 w-4 mr-2 inline" />
            For Product Hunt visitors
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">SafeOrStolen for Product Hunt Visitors</h1>
          <p className="text-lg text-muted-foreground mb-4">
            SafeOrStolen is a stolen-item check for used phones, cars, guns, bikes and anything with a serial
            number, based in Peoria, AZ. Before you pay a stranger for something secondhand, type in its IMEI,
            VIN, plate or serial and see in a few seconds whether it has been reported stolen in the records
            SafeOrStolen searches. The first 2 checks are free with a free account, no credit card.
          </p>
          <p className="text-sm text-muted-foreground mb-8">Updated October 7, 2026</p>
          <Button size="lg" asChild>
            <Link to="/verify" className="gap-2">
              Try a free check <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">What you get</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {whatYouGet.map((item) => (
              <Card key={item.title}>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">What it searches, and what it doesn't</h2>
          <p className="text-muted-foreground mb-4">
            Every check searches SafeOrStolen's own theft reports and public web results that mention the number.
            Guns add 242,839 police firearm theft and loss reports from 33 states and Washington, DC (filed
            through 2017; the years covered vary by state) and live Ohio records. Bikes add a national
            stolen-bicycle registry. Arizona VINs and plates add Arizona law-enforcement stolen-vehicle records.
          </p>
          <p className="text-muted-foreground">
            It does not search NCIC, DMV records, or Apple or Google account status. A no-match result means the
            number wasn't found in those records, not that the item is guaranteed clean. More on{' '}
            <Link to="/how-it-works" className="text-primary hover:underline">how it works</Link>.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Pricing</h2>
          <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-6">
            <li>2 free checks with a free account, no credit card</li>
            <li>$0.99 for a single check</li>
            <li>$10 a month for unlimited checks, cancel anytime, 30-day refund</li>
            <li>A free installable web app at <Link to="/app" className="text-primary hover:underline">safeorstolen.com/app</Link></li>
          </ul>
          <p className="text-muted-foreground">
            Feedback from makers and early users is welcome at {PRESS_EMAIL}.
          </p>
        </div>
      </section>
    </div>
  </>
);

export default ProductHuntPage;
