import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import type { SEOUrl } from '@/config/seo-expansion-urls';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shield, Search, MapPin, ArrowRight } from 'lucide-react';

interface SEOExpansionItemPageProps {
  seo: SEOUrl;
}

/**
 * Generic landing page for SEO expansion URLs (items, guides, marketplaces, business use cases)
 * Ensures every path in seo-expansion-urls.ts has:
 * - Real HTML content
 * - Self-referencing canonical
 * - Strong internal links to /verify and app
 */
const SEOExpansionItemPage: React.FC<SEOExpansionItemPageProps> = ({ seo }) => {
  const { path, title, category } = seo;

  const categoryLabelMap: Record<string, string> = {
    electronics: 'Electronics & Devices',
    vehicles: 'Vehicles & VIN',
    tools: 'Tools & Equipment',
    jewelry: 'Jewelry & Luxury Items',
    instruments: 'Musical Instruments',
    marketplace: 'Marketplace Safety',
    guide: 'How-To Guide',
    help: 'Legal & Safety Help',
    business: 'Business Use Case',
    audience: 'Buyer Protection',
    blog: 'Safety Insights',
    comparison: 'Comparison',
  };

  const label = categoryLabelMap[category] || 'Stolen Item Verification';

  const description =
    category === 'electronics'
      ? `Use SafeOrStolen to verify phones, laptops, tablets, consoles and other electronics before you buy. Enter IMEI or serial numbers to check if an item is lost, stolen, or safe.`
      : category === 'vehicles'
      ? `Run a fast VIN check before buying a used car, truck, motorcycle or RV. SafeOrStolen helps you avoid stolen or cloned vehicles with instant verification.`
      : category === 'marketplace'
      ? `Stay safe on marketplaces like Facebook Marketplace, OfferUp, Craigslist, eBay and more. Verify items in seconds so you do not buy stolen goods.`
      : category === 'business'
      ? `Protect your business from stolen inventory and legal risk. Pawn shops, repair shops, resellers and dealers use SafeOrStolen for instant verification.`
      : `Learn how to verify items safely with SafeOrStolen so you avoid buying or selling stolen goods.`;

  return (
    <>
      <PageSEO
        title={`${title} | SafeOrStolen`}
        description={description}
        keywords={`${title.toLowerCase()}, stolen item checker, ${label.toLowerCase()}, safe or stolen check`}
        canonical={path}
      />

      <main className="min-h-screen bg-background">
        <header className="border-b bg-gradient-to-br from-primary/5 via-background to-primary/5">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground mb-4">
                <Shield className="h-3 w-3 text-primary" />
                <span>{label}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
                {title}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                {description} SafeOrStolen is the stolen item checker that protects buyers, sellers and
                businesses from financial loss and legal trouble.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg">
                  <Link to="/verify">
                    <Search className="h-4 w-4 mr-2" />
                    Start Free Verification
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/install-app">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Download Mobile App
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </header>

        <section className="container mx-auto px-4 py-12 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <article className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">
              How SafeOrStolen protects you when you use "{title}"
            </h2>
            <p className="text-muted-foreground">
              SafeOrStolen.com lets you enter or scan serial numbers, IMEI numbers and VINs to see if a
              second-hand item is reported lost or stolen. Before you buy, sell or accept an item, you can
              quickly check if it is safe to handle.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                • Check phones, laptops, game consoles, tools, bikes, vehicles and more in seconds.
              </li>
              <li>
                • Protect yourself from buying stolen goods that could be seized or lead to legal issues.
              </li>
              <li>
                • Give buyers confidence when you share a clean verification result.
              </li>
              <li>
                • For businesses, document due diligence and reduce fraud and chargebacks.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8">Three simple steps</h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Find the serial, IMEI or VIN on the item you want to check.</li>
              <li>Go to the SafeOrStolen verification page or open the mobile app.</li>
              <li>Enter or scan the identifier and review the result: safe, risky or reported stolen.</li>
            </ol>

            <div className="mt-8 rounded-lg border bg-muted/40 p-4 text-sm text-muted-foreground">
              SafeOrStolen does not replace law-enforcement checks, but it gives you fast, practical
              protection before you hand over cash, ship an item, or add inventory to your business.
            </div>
          </article>

          <aside className="space-y-4">
            <div className="rounded-lg border bg-card p-4">
              <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                <MapPin className="h-4 w-4 text-primary" />
                Popular ways people use this page
              </h2>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>• Checking a specific brand or item before buying second-hand</li>
                <li>• Verifying marketplace listings on Facebook, OfferUp, eBay or Craigslist</li>
                <li>• Documenting checks for pawn shops, resellers and repair shops</li>
                <li>• Sharing verification results with buyers to prove items are safe</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-4 text-xs text-muted-foreground">
              <p className="mb-2 font-semibold text-foreground">Next steps</p>
              <ul className="space-y-1">
                <li>
                  <Link to="/how-it-works" className="underline underline-offset-2">
                    Learn how SafeOrStolen works
                  </Link>
                </li>
                <li>
                  <Link to="/imei-checker" className="underline underline-offset-2">
                    Check a phone by IMEI
                  </Link>
                </li>
                <li>
                  <Link to="/vin-checker" className="underline underline-offset-2">
                    Check a vehicle by VIN
                  </Link>
                </li>
                <li>
                  <Link to="/serial-number-checker" className="underline underline-offset-2">
                    Check electronics by serial number
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
};

export default SEOExpansionItemPage;
