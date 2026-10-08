/**
 * Oct 7 2026: rewritten by hand for "how to check if something is stolen" guides hub / "SafeOrStolen
 * resource center". No Search Console data for this URL. Kept as a hub that sends each question to
 * the page that answers it. Removed: "Trust Score above 85", "~750,000 vehicles stolen annually",
 * "check up to 100 items via CSV", "cryptographic hash" certificates as legal evidence, legal claims
 * presented as settled (UCC/state pawn statutes), "high accuracy" composite score, "34 states",
 * "AI analysis" as a source, "expert"/"citation-ready" self-description.
 */
import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@/lib/router-compat';
import { ArrowRight } from 'lucide-react';

const BY_ITEM: { item: string; number: string; links: { to: string; label: string }[] }[] = [
  {
    item: 'Phones',
    number: 'IMEI (dial *#06#)',
    links: [
      { to: '/imei-checker', label: 'IMEI checker' },
      { to: '/how-to-check-if-phone-stolen', label: 'How to check if a phone is stolen' },
      { to: '/blog/how-to-check-if-iphone-stolen', label: 'Checking a used iPhone' },
      { to: '/check-android', label: 'Checking an Android phone' },
    ],
  },
  {
    item: 'Cars and motorcycles',
    number: 'VIN (dashboard, door jamb, title)',
    links: [
      { to: '/vin-checker', label: 'VIN checker' },
      { to: '/blog/complete-vin-guide', label: 'VIN guide' },
      { to: '/license-plate-lookup', label: 'License plate lookup' },
    ],
  },
  {
    item: 'Guns',
    number: 'Serial on the frame or receiver',
    links: [
      { to: '/gun-serial-number-lookup', label: 'Gun serial number lookup' },
      { to: '/how-to-check-if-gun-is-stolen', label: 'How to check if a gun is stolen' },
      { to: '/stolen-gun-database', label: 'Stolen gun database' },
    ],
  },
  {
    item: 'Bikes, laptops, tools and electronics',
    number: 'Serial on the frame, case or nameplate',
    links: [
      { to: '/check-bike', label: 'Bike check' },
      { to: '/check-laptop', label: 'Laptop check' },
      { to: '/how-to-check-if-tools-stolen', label: 'Power tool check' },
      { to: '/serial-number-checker', label: 'Any serial number' },
    ],
  },
];

const FAQS = [
  {
    q: 'How do I check if something is stolen before I buy it?',
    a: "Get the item's own number: the IMEI on a phone, the VIN on a car, or the serial on a gun, bike, laptop or tool. Enter it on SafeOrStolen (safeorstolen.com), which searches theft reports and shows every source checked. Then do the in-person checks: the serial isn't tampered with, the paperwork matches, and the seller can unlock and reset the device.",
  },
  {
    q: 'What happens if I buy something that turns out to be stolen?',
    a: "In general, the original owner keeps their right to stolen property, so police can take it back and return it, and you lose what you paid. Your claim is against the seller. If you find out an item is stolen, contact the police yourself. A dated record that you checked before buying shows you acted in good faith. Laws vary by state, so ask a local lawyer about your situation.",
  },
  {
    q: 'What should a pawn shop or dealer do to avoid taking in stolen goods?',
    a: "Follow your state's pawn and secondhand dealer rules, which often require recording the seller's ID and the item's serial and reporting purchases to local police. On top of that, check each serial before you pay and keep the dated result with the intake paperwork. SafeOrStolen's bulk check lets you check many serials at once from a computer.",
  },
  {
    q: 'What should I do if my item was stolen?',
    a: "Report it to your local police with the serial number, IMEI or VIN, and get the case number. Then report it on SafeOrStolen so anyone who checks that number sees it's stolen. For a phone, also call your carrier to have the IMEI blocked and mark it lost in Find My or Find My Device.",
  },
];

export default function ResourceCenterPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <>
      <PageSEO
        title="Stolen Item Guides: Check Phones, Cars, Guns and Bikes"
        description="Every SafeOrStolen guide in one place: how to check a phone, car, gun, bike, laptop or tool for theft, what to do if you bought or lost something stolen, and business guides."
        keywords="how to check if something is stolen, stolen item guides, SafeOrStolen resource center, check if item is stolen before buying, what to do if you bought stolen goods"
        canonical="/resource-center"
        modifiedTime="2026-10-07"
        structuredData={faqSchema}
      />
      <div className="min-h-screen bg-background pt-20">
        <section className="py-14">
          <div className="container mx-auto px-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">Stolen Item Guides</h1>
            <p className="text-sm text-muted-foreground mb-6">Updated October 7, 2026</p>
            <p className="text-lg text-foreground leading-relaxed">
              To check if a used item is stolen, find its unique number, the IMEI, VIN or serial, and run it through a theft-record
              search like SafeOrStolen before you pay. Then check in person that the number hasn't been tampered with and the
              seller can prove it's theirs. The guides below walk through each item type, plus what to do if you've bought or lost
              something stolen.
            </p>
          </div>
        </section>

        <section className="py-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Guides by item</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {BY_ITEM.map((g) => (
                <Card key={g.item}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1">{g.item}</h3>
                    <p className="text-sm text-muted-foreground mb-3">Number to check: {g.number}</p>
                    <ul className="space-y-2">
                      {g.links.map((l) => (
                        <li key={l.to + l.label}>
                          <Link to={l.to} className="text-primary hover:underline text-sm">{l.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 bg-muted/20">
          <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-bold mb-3">Buying used</h2>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/how-to-check-if-item-stolen" className="text-primary hover:underline">How to check if an item is stolen</Link></li>
                  <li><Link to="/how-to-verify-a-used-item" className="text-primary hover:underline">Checking a used item before you buy</Link></li>
                  <li><Link to="/blog/stolen-verification-app-guide" className="text-primary hover:underline">Checking from your phone at a meetup</Link></li>
                  <li><Link to="/blog/verification-methodology" className="text-primary hover:underline">How to read a stolen check result</Link></li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-bold mb-3">If something was stolen</h2>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/how-to-report-a-stolen-item" className="text-primary hover:underline">How to report a stolen item</Link></li>
                  <li><Link to="/report-stolen" className="text-primary hover:underline">Report it on SafeOrStolen</Link></li>
                  <li><Link to="/stolen-database" className="text-primary hover:underline">Browse reported stolen items</Link></li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h2 className="text-lg font-bold mb-3">For businesses</h2>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/for-pawn-shops" className="text-primary hover:underline">Pawn shops</Link></li>
                  <li><Link to="/for-dealers" className="text-primary hover:underline">Dealers</Link></li>
                  <li><Link to="/for-auction-houses" className="text-primary hover:underline">Auction houses</Link></li>
                  <li><Link to="/bulk-check" className="text-primary hover:underline">Bulk check</Link></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Common questions</h2>
            <div className="space-y-6">
              {FAQS.map((f) => (
                <div key={f.q}>
                  <h3 className="font-semibold text-foreground mb-2">{f.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-8">
              What SafeOrStolen does and doesn't search is on the <Link to="/data-sources" className="text-primary underline">data sources page</Link>.
            </p>
          </div>
        </section>

        <section className="py-14 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Check an item</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Your first 2 checks are free with an account. No credit card.</p>
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
