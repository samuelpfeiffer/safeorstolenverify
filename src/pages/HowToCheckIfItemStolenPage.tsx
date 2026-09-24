import { PageSEO } from '@/components/seo/PageSEO';
import { Link } from '@/lib/router-compat';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const guides = [
  ['/how-to-check-if-car-stolen', 'Vehicle', 'VIN, plate, title, tampering, and official vehicle resources'],
  ['/how-to-check-if-phone-stolen', 'Phone', 'IMEI, carrier status, account locks, and seller checks'],
  ['/blog/how-to-check-if-iphone-stolen', 'iPhone', 'Activation Lock, Find My, IMEI, and carrier checks'],
  ['/how-to-check-if-gun-is-stolen', 'Firearm', 'Serials, NCIC access limits, police, state tools, and HotGunz'],
  ['/how-to-check-if-bike-stolen', 'Bicycle or e-bike', 'Frame serials, Bike Index, registration, and e-bike accounts'],
  ['/how-to-check-if-laptop-stolen', 'Laptop or electronics', 'Serials, manufacturer details, account locks, and receipts'],
  ['/how-to-check-if-tools-stolen', 'Power tools', 'Tool serials, registration, tracking programs, and seller records'],
  ['/how-to-check-if-boat-stolen', 'Boat', 'HIN, Coast Guard documentation, state records, trailer, and motor'],
  ['/how-to-check-if-license-plate-stolen', 'License plate', 'Public-access limits, plate/VIN matching, and state guidance'],
  ['/how-to-tell-if-marketplace-item-is-stolen', 'Marketplace listing', 'Listing analysis, identifiers, payment, and meeting safety'],
  ['/what-to-do-if-you-bought-something-stolen', 'Already bought it?', 'Preserve evidence, contact police, marketplace, and payment provider'],
  ['/how-to-prove-item-is-not-stolen', 'Selling an item?', 'Records, independent checks, and Proof of Clean Purchase'],
] as const;

export default function HowToCheckIfItemStolenPage() {
  const schema = {
    '@context': 'https://schema.org', '@type': 'ItemList', name: 'How to check if an item is stolen',
    itemListElement: guides.map(([url, name], index) => ({ '@type': 'ListItem', position: index + 1, name, url: `https://safeorstolen.com${url}` })),
  };
  return <div className="min-h-screen bg-background">
    <PageSEO title="How to Check if an Item Is Stolen" description="Choose a factual, item-specific guide for checking a phone, car, firearm, bicycle, laptop, power tool, boat, plate, or marketplace listing before buying." keywords="how to check if item stolen, stolen item guide, serial number check" canonical="/how-to-check-if-item-stolen" modifiedTime="2026-09-24" structuredData={schema} />
    <main className="container mx-auto max-w-5xl px-4 py-16">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary"><ShieldCheck className="h-4 w-4" /> Buyer and seller guide hub</div>
        <h1 className="text-4xl font-bold text-foreground md:text-5xl">How to Check if an Item Is Stolen</h1>
        <p className="mt-5 text-lg text-muted-foreground">Find the identifier, match it with the physical item and seller records, use the relevant official resources, and stop when details conflict. Choose the guide for the item you are checking.</p>
        <p className="mt-3 text-sm text-muted-foreground">By Samuel Pfeiffer · Updated September 24, 2026</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {guides.map(([href, title, description]) => <Link key={href} to={href} className="group rounded-xl border border-border bg-card p-6 transition hover:border-primary/60">
          <h2 className="flex items-center justify-between text-xl font-semibold text-foreground">{title}<ArrowRight className="h-5 w-5 text-primary transition group-hover:translate-x-1" /></h2>
          <p className="mt-2 text-muted-foreground">{description}</p>
        </Link>)}
      </div>
      <section className="mx-auto mt-12 max-w-3xl rounded-xl border border-primary/30 bg-card p-6 text-muted-foreground">
        <h2 className="text-2xl font-bold text-foreground">Where SafeOrStolen fits</h2>
        <p className="mt-3">SafeOrStolen checks its own stolen-item reports, public web results, and AI analysis. It also checks BikeIndex for bicycles and HotGunz for firearms. Outside sources described in these guides are separate checks for the reader to perform.</p>
        <p className="mt-3">A result is one part of due diligence, not proof of ownership or a guarantee. Sellers can share a timestamped Proof of Clean Purchase record after a clean check; it is not a legal document.</p>
      </section>
    </main>
  </div>;
}