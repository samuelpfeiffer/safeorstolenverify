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
 * CRITICAL FIX: Each page now has UNIQUE content to prevent Google duplicate detection
 * - Self-referencing canonical
 * - Unique title, description, and content per URL path
 * - Strong internal links to /verify and app
 */
const SEOExpansionItemPage: React.FC<SEOExpansionItemPageProps> = ({ seo }) => {
  const { path, title, category } = seo;

  // Extract item name from path for unique content
  const itemName = path.split('/').pop()?.replace(/-/g, ' ').replace('check ', '') || title;
  const pathSegments = path.split('/').filter(Boolean);
  const uniqueIdentifier = pathSegments.join('-');

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

  // UNIQUE descriptions per category with path-specific details
  const description =
    category === 'electronics'
      ? `Verify ${itemName} authenticity before buying. Check IMEI and serial numbers for ${itemName} to ensure it's not stolen, blacklisted, or reported lost. Get instant results from SafeOrStolen's database.`
      : category === 'vehicles'
      ? `Check ${itemName} VIN history instantly. SafeOrStolen verifies if ${itemName} vehicles are stolen, have salvage titles, or odometer fraud. Protect your investment with comprehensive ${itemName} verification.`
      : category === 'marketplace'
      ? `${title} verification guide. Learn how to safely verify items on ${itemName} before purchasing. Avoid scams, stolen goods, and fraud with SafeOrStolen's instant verification tools.`
      : category === 'business'
      ? `${title} solution for your business. SafeOrStolen helps ${itemName} verify inventory, avoid stolen goods liability, and protect your reputation with instant verification certificates.`
      : category === 'guide'
      ? `Complete guide: ${title}. Step-by-step instructions for ${itemName} verification using SafeOrStolen. Learn how to check serial numbers, IMEI codes, and VIN numbers to avoid stolen goods.`
      : `${title} - comprehensive information about ${itemName} verification. SafeOrStolen provides instant checks to determine if items are safe to buy, sell, or handle.`;

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
              Why {itemName} verification matters: {title}
            </h2>
            <p className="text-muted-foreground">
              When buying or selling {itemName}, SafeOrStolen provides instant verification against global stolen goods databases. 
              Our {title.toLowerCase()} service checks serial numbers, IMEI codes, and VIN numbers specific to {itemName} transactions, 
              protecting you from legal trouble and financial loss.
            </p>
            
            {/* UNIQUE CONTENT BLOCK per category */}
            {category === 'electronics' && (
              <div className="bg-primary/5 rounded-lg p-4 space-y-3">
                <h3 className="font-semibold text-foreground">Checking {itemName} IMEI & Serial Numbers</h3>
                <p className="text-sm text-muted-foreground">
                  For {itemName}, always verify the IMEI (for phones) or serial number (for laptops, tablets, consoles). 
                  SafeOrStolen cross-references {itemName} identifiers against carrier blacklists, police databases, and insurance claims. 
                  This prevents you from purchasing {itemName} that's been reported stolen, ensuring activation and resale rights.
                </p>
              </div>
            )}

            {category === 'vehicles' && (
              <div className="bg-primary/5 rounded-lg p-4 space-y-3">
                <h3 className="font-semibold text-foreground">{itemName} VIN Verification Process</h3>
                <p className="text-sm text-muted-foreground">
                  Every {itemName} has a unique VIN (Vehicle Identification Number). SafeOrStolen checks {itemName} VINs against 
                  NICB theft databases, salvage title records, and odometer fraud reports. For {itemName} buyers, this verification 
                  reveals hidden problems like stolen status, flood damage, or title washing schemes that sellers won't disclose.
                </p>
              </div>
            )}

            {category === 'marketplace' && (
              <div className="bg-primary/5 rounded-lg p-4 space-y-3">
                <h3 className="font-semibold text-foreground">Staying Safe on {itemName}</h3>
                <p className="text-sm text-muted-foreground">
                  {itemName} has millions of listings, but not all sellers are honest. Use SafeOrStolen before meeting sellers 
                  from {itemName} to verify items aren't stolen. Request serial numbers or IMEI codes from {itemName} sellers 
                  before committing to purchase - legitimate sellers will comply. This simple step protects {itemName} buyers from scams.
                </p>
              </div>
            )}

            {category === 'business' && (
              <div className="bg-primary/5 rounded-lg p-4 space-y-3">
                <h3 className="font-semibold text-foreground">{itemName} Business Protection</h3>
                <p className="text-sm text-muted-foreground">
                  {itemName} businesses face significant liability when handling potentially stolen inventory. SafeOrStolen 
                  provides {itemName} with instant verification, documentation, and compliance tools. Our API integrates with 
                  {itemName} point-of-sale systems, generating verification certificates that protect {itemName} from legal action 
                  and establish due diligence for every transaction.
                </p>
              </div>
            )}

            <ul className="space-y-3 text-muted-foreground">
              <li>
                ✓ Verify {itemName} in under 3 seconds with instant database checks
              </li>
              <li>
                ✓ Protect yourself from {itemName} that's reported stolen, blacklisted, or under insurance claim
              </li>
              <li>
                ✓ Generate {itemName} verification certificates to share with buyers or authorities
              </li>
              <li>
                ✓ Access {itemName} history including theft reports, ownership disputes, and law enforcement flags
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground mt-8">
              How to verify {itemName} with SafeOrStolen
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
              <li>Locate the serial number, IMEI, or VIN on your {itemName}</li>
              <li>Enter the {itemName} identifier on SafeOrStolen.com or use our mobile app scanner</li>
              <li>Review the {itemName} verification result: Safe (clean history), Risky (ownership issues), or Stolen (reported to authorities)</li>
              <li>Download a {itemName} verification certificate for your records or to share with buyers</li>
            </ol>

            <div className="mt-8 rounded-lg border bg-muted/40 p-4 text-sm text-muted-foreground">
              <strong>Important for {itemName}:</strong> While SafeOrStolen checks comprehensive databases, 
              we recommend combining {itemName} verification with in-person inspection and secure payment methods. 
              For high-value {itemName} purchases, consider additional professional appraisal or history reports.
            </div>
          </article>

          <aside className="space-y-4">
            <div className="rounded-lg border bg-card p-4">
              <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                <MapPin className="h-4 w-4 text-primary" />
                Common {itemName} verification scenarios
              </h2>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li>• Buying used {itemName} from {category === 'marketplace' ? 'online marketplaces' : 'private sellers'}</li>
                <li>• Verifying {itemName} {category === 'vehicles' ? 'VIN numbers' : category === 'electronics' ? 'IMEI/serial numbers' : 'identifiers'} before payment</li>
                <li>• {category === 'business' ? `${itemName} businesses checking inventory before purchase` : `Checking ${itemName} authenticity for resale`}</li>
                <li>• Confirming {itemName} {category === 'vehicles' ? 'has clean title history' : 'isn\'t blacklisted or stolen'}</li>
                <li>• Generating {itemName} verification proof for buyers or insurance</li>
              </ul>
            </div>

            <div className="rounded-lg border bg-card p-4 text-xs text-muted-foreground">
              <p className="mb-2 font-semibold text-foreground">Specific to {title}</p>
              <ul className="space-y-1">
                <li>
                  <Link to="/verify" className="underline underline-offset-2">
                    Verify {itemName} now - Free instant check
                  </Link>
                </li>
                {category === 'electronics' && (
                  <li>
                    <Link to="/imei-checker" className="underline underline-offset-2">
                      IMEI checker for {itemName} phones/tablets
                    </Link>
                  </li>
                )}
                {category === 'vehicles' && (
                  <li>
                    <Link to="/vin-checker" className="underline underline-offset-2">
                      Full VIN lookup for {itemName} vehicles
                    </Link>
                  </li>
                )}
                {category !== 'vehicles' && (
                  <li>
                    <Link to="/serial-number-checker" className="underline underline-offset-2">
                      Serial number checker for {itemName}
                    </Link>
                  </li>
                )}
                <li>
                  <Link to="/how-it-works" className="underline underline-offset-2">
                    How {itemName} verification works
                  </Link>
                </li>
                <li>
                  <Link to={`/install-app`} className="underline underline-offset-2">
                    Download app to verify {itemName} on-the-go
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
