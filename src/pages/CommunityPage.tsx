/**
 * Oct 7 2026: rewritten by hand for "how to help stop the sale of stolen goods" / "SafeOrStolen
 * community". No Search Console data for this URL. There is no forum or member community on the site,
 * so the page now says what people can actually do: report a theft, check before buying, write down
 * serials, and pass stolen listings to police. Removed: "thousands of buyers, sellers and businesses",
 * "~3s", the "AI" stat tile, and all outbound links (review site, social profiles).
 */
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@/lib/router-compat';
import { ArrowRight } from 'lucide-react';

const ACTIONS: { title: string; body: string; to: string; cta: string }[] = [
  {
    title: 'Report your stolen item',
    body: "Sign in, enter the item type and its serial number, IMEI or VIN, plus where it was stolen. From then on, anyone who checks that number on SafeOrStolen sees it's reported stolen. File a police report too, and add the case number.",
    to: '/report-stolen',
    cta: 'Report a stolen item',
  },
  {
    title: 'Check before you buy',
    body: "When buyers check serials, stolen goods get harder to sell. Ask the seller for the number before you meet, check it, and walk away from anything reported stolen or with a scratched-off serial. Your first 2 checks are free.",
    to: '/verify',
    cta: 'Run a check',
  },
  {
    title: 'Write down your own serials today',
    body: "Police can't return a recovered item to you if you can't show which one is yours. Photograph the serial, IMEI or VIN on your phone, laptop, bike, tools and guns, and keep the receipts. If something is stolen, you'll have what police and registries need.",
    to: '/how-to-report-a-stolen-item',
    cta: 'How to report a theft',
  },
];

const FAQS = [
  {
    q: 'How can I help stop people selling stolen goods?',
    a: "Check serial numbers before you buy used items, so stolen goods lose their easy buyers. If something of yours is stolen, report it to the police and on SafeOrStolen (safeorstolen.com/report-stolen) with its serial, so the next buyer who checks it is warned. And if you spot a listing you think is stolen, give the details to the police rather than confronting the seller.",
  },
  {
    q: 'What should I do if I see my stolen item for sale online?',
    a: "Don't arrange to meet the seller yourself. Screenshot the listing, the seller's profile and any messages, then call the police department where you reported the theft and give them your case number and the listing. Point out the serial number or any marks that prove it's yours. Police can arrange the recovery safely.",
  },
  {
    q: 'Does SafeOrStolen have a forum or community group?',
    a: "No. SafeOrStolen doesn't run a forum or member group. The way people take part is through theft reports: each owner report becomes part of what every check searches. Questions and feedback go to safeorstolenmail@gmail.com.",
  },
];

export default function CommunityPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <>
      <PageSEO
        title="How to Help Stop Stolen Goods Being Resold"
        description="Three things anyone can do to make stolen goods harder to sell: report your stolen item by serial, check before you buy, and record your own serial numbers."
        keywords="how to help stop stolen goods, report stolen item online, stolen item for sale online what to do, SafeOrStolen community"
        canonical="/community"
        modifiedTime="2026-10-07"
        structuredData={faqSchema}
      />
      <div className="min-h-screen bg-background pt-20">
        <section className="py-14 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">How to Help Stop Stolen Goods Being Resold</h1>
            <p className="text-sm text-muted-foreground mb-6">Updated October 7, 2026</p>
            <p className="text-lg text-foreground leading-relaxed">
              Stolen goods only pay off for thieves if someone buys them. Three things make that harder: owners reporting thefts
              with the serial number, buyers checking that number before they pay, and everyone keeping a record of their own
              serials. Each theft report filed on SafeOrStolen is searched in every later check of that number, so one report can
              warn many buyers.
            </p>
          </div>
        </section>

        <section className="py-12 container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {ACTIONS.map((a) => (
              <Card key={a.title}>
                <CardContent className="p-6 flex flex-col h-full">
                  <h2 className="text-xl font-bold mb-3">{a.title}</h2>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">{a.body}</p>
                  <Button variant="outline" asChild>
                    <Link to={a.to}>{a.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">If you think a listing is stolen</h2>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
              <li>Ask for the serial, IMEI or VIN and check it. A seller who refuses is telling you something.</li>
              <li>Don't accuse the seller or try to get the item back yourself.</li>
              <li>Screenshot the listing and the seller's profile.</li>
              <li>Call your local police non-emergency line, or the department in the city where the item is listed.</li>
              <li>Use the marketplace's own report button as well.</li>
            </ol>
          </div>
        </section>

        <section className="py-12 container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Questions</h2>
            <div className="space-y-6">
              {FAQS.map((f) => (
                <div key={f.q}>
                  <h3 className="font-semibold text-foreground mb-2">{f.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-8">
              Browse items owners have reported in the <Link to="/stolen-database" className="text-primary underline">stolen items database</Link>.
            </p>
          </div>
        </section>

        <section className="py-14 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Check something now</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Two free checks with a free account. No credit card.</p>
            <Button size="lg" asChild>
              <Link to="/verify">
                Run a check <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
