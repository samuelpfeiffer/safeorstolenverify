import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from '@/lib/router-compat';
import { Bike, Car, CircleDot, ExternalLink, Search, Smartphone } from 'lucide-react';

const options = [
  { title: 'SafeOrStolen', icon: Search, text: "Every check searches SafeOrStolen's own theft reports and public web results. Bike checks add a national stolen-bicycle registry; gun checks add police firearm theft and loss reports from 33 states and Washington, DC, plus live Ohio law-enforcement records; Arizona VINs and plates add Arizona law-enforcement stolen-vehicle records.", href: '/how-to-check-if-item-stolen', external: false },
  { title: 'Carrier or GSMA-authorized check', icon: Smartphone, text: 'Use separately for phone blacklist, network eligibility, and finance status. SafeOrStolen offers a paid lost/stolen blacklist check, but not network eligibility or finance status.', href: 'https://devicecheck.gsma.com/', external: true },
  { title: 'NICB VINCheck', icon: Car, text: 'A separate free vehicle resource for participating unrecovered-theft and total-loss records, subject to its limits.', href: 'https://www.nicb.org/vincheck', external: true },
  { title: 'NMVTIS provider', icon: Car, text: 'Use an approved provider for title, brand, odometer, and certain loss or salvage information. Provider fees vary.', href: 'https://vehiclehistory.bja.ojp.gov/nmvtis_consumer_access', external: true },
  { title: 'Stolen-bike registries', icon: Bike, text: 'Free bicycle registries let owners record a serial and flag the bike stolen. A SafeOrStolen bike check already searches a national stolen-bicycle registry along with our own reports.', href: '/check-bike', external: false },
  { title: 'Local police', icon: CircleDot, text: 'Private users cannot search NCIC. Ask local police whether they accept identifier-check requests and report suspected stolen property.', href: '/what-to-do-if-you-bought-something-stolen', external: false },
];

export default function Compare() {
  return (
    <>
      <PageSEO
        title="Compare Ways to Check a Used Item | SafeOrStolen"
        description="Compare SafeOrStolen with separate official and specialist resources by purpose, without unsupported rankings or competitor claims."
        canonical="/compare"
        structuredData={[{ "@context": "https://schema.org", "@type": "WebPage", name: "Compare Ways to Check a Used Item", dateModified: "2026-09-24" }]}
      />
      <main className="min-h-screen bg-background pt-24 pb-20">
        <section className="container mx-auto max-w-5xl px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Choose by purpose</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold">Compare Ways to Check a Used Item</h1>
            <p className="mt-5 text-lg text-muted-foreground">No single public tool covers every risk. Use SafeOrStolen as one check, then use the relevant official, carrier, registry, or commercial resource separately.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {options.map(({ title, icon: Icon, text, href, external }) => (
              <Card key={title}>
                <CardHeader><Icon className="h-7 w-7 text-primary" /><CardTitle>{title}</CardTitle></CardHeader>
                <CardContent><p className="mb-5 text-muted-foreground">{text}</p>{external ? <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-medium text-primary hover:underline">Open resource <ExternalLink className="ml-1 h-4 w-4" /></a> : <Link to={href} className="font-medium text-primary hover:underline">Read the guide</Link>}</CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center"><Button asChild size="lg"><Link to="/verify">Check an item</Link></Button></div>
        </section>
      </main>
    </>
  );
}
