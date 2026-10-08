import { PageSEO } from '@/components/seo/PageSEO';
import { Link } from '@/lib/router-compat';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const guides = [
  ['/where-to-find-serial-number', 'Find the number first', 'Where the serial, IMEI, VIN or HIN is on every type of item'],
  ['/how-to-check-if-car-stolen', 'Vehicle', 'VIN, plate, title, tampering, and official vehicle resources'],
  ['/how-to-check-if-phone-stolen', 'Phone', 'IMEI, carrier status, account locks, and seller checks'],
  ['/blog/how-to-check-if-iphone-stolen', 'iPhone', 'Activation Lock, Find My, IMEI, and carrier checks'],
  ['/how-to-check-if-gun-is-stolen', 'Firearm', 'Police theft records, dealer (FFL) checks, Florida and Ohio searches, and red flags'],
  ['/check-bike', 'Bicycle or e-bike', 'Frame serials, stolen-bike registries, and e-bike accounts'],
  ['/how-to-check-if-laptop-stolen', 'Laptop or electronics', 'Serials, manufacturer details, account locks, and receipts'],
  ['/how-to-check-if-tv-stolen', 'TV', 'Serial label and settings match, receipts, and retail-theft red flags'],
  ['/how-to-check-if-tools-stolen', 'Power tools', 'Tool serials, registration, tracking programs, and seller records'],
  ['/how-to-check-if-boat-stolen', 'Boat', 'HIN, Coast Guard documentation, state records, trailer, and motor'],
  ['/check-motorcycle-stolen-vin', 'Motorcycle', 'Frame VIN, title match, NICB VINCheck, NMVTIS, and tampering'],
  ['/how-to-check-if-trailer-atv-stolen', 'Trailer, ATV, or dirt bike', 'VIN or serial, title and registration, and state rules'],
  ['/check-watch-stolen', 'Watch', 'Serial and reference numbers, papers, and a lost-watch database'],
  ['/check-camera-stolen', 'Camera or lens', 'Body and lens serials, photo-serial search, and owner settings'],
  ['/how-to-check-if-apple-device-stolen', 'AirPods, Apple Watch, iPad', 'Serial check, Activation Lock, Find My, and pairing'],
  ['/how-to-check-if-license-plate-stolen', 'License plate', 'Public-access limits, plate/VIN matching, and state guidance'],
  ['/how-to-tell-if-marketplace-item-is-stolen', 'Marketplace listing', 'Listing analysis, identifiers, payment, and meeting safety'],
  ['/what-to-do-if-you-bought-something-stolen', 'Already bought it?', 'Preserve evidence, contact police, marketplace, and payment provider'],
  ['/how-to-prove-item-is-not-stolen', 'Selling an item?', 'Records, independent checks, and Proof of Clean Purchase'],
  ['/is-it-illegal-to-buy-stolen-property', 'Is buying stolen property illegal?', 'General legal information on knowledge, ownership, and protecting yourself'],
] as const;

const victimGuides = [
  ['/how-to-report-a-stolen-item', 'How to report a stolen item', 'Police first, then carrier, insurer, or registry, then SafeOrStolen'],
  ['/what-to-do-if-your-phone-is-stolen', 'Phone stolen', 'Find My, carrier IMEI block, police report, and accounts'],
  ['/what-to-do-if-your-car-is-stolen', 'Car stolen', 'Rule out towing, police, insurer, lender, and tracking'],
  ['/what-to-do-if-your-bike-is-stolen', 'Bike stolen', 'Police report, Bike Index, and 529 Garage alerts'],
  ['/what-to-do-if-your-gun-is-stolen', 'Gun stolen', 'Report to police right away and check your state law'],
  ['/how-to-find-stolen-item-for-sale-online', 'Find it for sale online', 'Search marketplaces safely and give listings to police'],
] as const;

export default function HowToCheckIfItemStolenPage() {
  const schema = {
    '@context': 'https://schema.org', '@type': 'ItemList', name: 'How to check if an item is stolen',
    itemListElement: [...guides, ...victimGuides].map(([url, name], index) => ({ '@type': 'ListItem', position: index + 1, name, url: `https://safeorstolen.com${url}` })),
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
      <section className="mt-16">
        <h2 className="mb-2 text-3xl font-bold text-foreground">Had something stolen?</h2>
        <p className="mb-6 text-muted-foreground">Step-by-step guides for theft victims. After you report to police, you can <Link to="/report-stolen" className="text-primary underline">log your item on SafeOrStolen</Link> so buyers who check its identifier see it was reported stolen.</p>
        <div className="grid gap-4 md:grid-cols-2">
          {victimGuides.map(([href, title, description]) => <Link key={href} to={href} className="group rounded-xl border border-border bg-card p-6 transition hover:border-primary/60">
            <h3 className="flex items-center justify-between text-xl font-semibold text-foreground">{title}<ArrowRight className="h-5 w-5 text-primary transition group-hover:translate-x-1" /></h3>
            <p className="mt-2 text-muted-foreground">{description}</p>
          </Link>)}
        </div>
      </section>
      <section className="mx-auto mt-12 max-w-3xl rounded-xl border border-primary/30 bg-card p-6 text-muted-foreground">
        <h2 className="text-2xl font-bold text-foreground">Where SafeOrStolen fits</h2>
        <p className="mt-3">SafeOrStolen checks its own stolen-item reports, public web results, and AI analysis. Guns are also checked against police theft reports from 33 states and DC and live Ohio records, and bikes against a national stolen-bicycle registry. Outside sources described in these guides are separate checks for the reader to perform.</p>
        <p className="mt-3">A result is one part of due diligence, not proof of ownership or a guarantee. Sellers can share a timestamped Proof of Clean Purchase record after a clean check; it is not a legal document.</p>
      </section>
    </main>
  </div>;
}