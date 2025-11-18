import { PageSEO } from '@/components/seo/PageSEO';
import { Shield, AlertTriangle, CheckCircle, Search, Lock, ShoppingBag, Smartphone, Car, Home } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function AvoidingStolenGoodsCompleteGuide() {
  const navigate = useNavigate();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Guide to Avoiding Stolen Goods (2025)",
    "description": "The definitive 2025 guide to protecting yourself from buying stolen goods. Learn verification techniques, legal protection strategies, and how to spot stolen items across all categories.",
    "author": {
      "@type": "Organization",
      "name": "SafeOrStolen"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
      }
    },
    "datePublished": "2025-01-18",
    "dateModified": "2025-01-18",
    "wordCount": 2500
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Avoid Buying Stolen Goods",
    "description": "Complete guide to verifying items before purchase and avoiding stolen property",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Request Identification Numbers",
        "text": "Always ask for serial numbers, IMEI numbers (phones), or VIN numbers (vehicles) before purchase"
      },
      {
        "@type": "HowToStep",
        "name": "Verify With Free Tools",
        "text": "Use free verification services like SafeOrStolen to check if items are reported stolen"
      },
      {
        "@type": "HowToStep",
        "name": "Check Documentation",
        "text": "Request original receipts, proof of purchase, or ownership documents"
      },
      {
        "@type": "HowToStep",
        "name": "Meet in Safe Locations",
        "text": "Always meet sellers in public places, preferably police station parking lots"
      },
      {
        "@type": "HowToStep",
        "name": "Document the Transaction",
        "text": "Take photos of the seller's ID, get written receipts, and keep all communication records"
      }
    ]
  };

  return (
    <>
      <PageSEO
        title="Complete Guide to Avoiding Stolen Goods (2025) | Buyer Protection"
        description="The definitive 2025 guide to protecting yourself from buying stolen goods. Learn verification techniques, legal protection strategies, and how to spot stolen items. Free verification tools included."
        keywords="how to avoid stolen goods, buying stolen property, verify not stolen, stolen goods guide, buyer protection, avoid buying stolen items, check if stolen, stolen property verification"
        canonical="/blog/avoiding-stolen-goods-complete-guide"
        structuredData={[articleSchema, howToSchema]}
        image="https://safeorstolen.com/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png"
      />

      <article className="min-h-screen bg-gradient-to-b from-background via-background/95 to-muted/20">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <span>Buyer Protection</span>
              <span>•</span>
              <span>January 18, 2025</span>
              <span>•</span>
              <span>12 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Complete Guide to Avoiding Stolen Goods (2025)
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The definitive guide to protecting yourself from buying stolen property. Learn professional verification techniques, understand your legal rights, and discover free tools that keep you safe when buying secondhand.
            </p>
          </header>

          {/* Table of Contents */}
          <Card className="p-6 mb-12 bg-card/50 backdrop-blur">
            <h2 className="text-lg font-semibold mb-4">📋 Table of Contents</h2>
            <nav className="space-y-2 text-sm">
              <a href="#why-matters" className="block text-primary hover:underline">1. Why This Matters (The Shocking Truth)</a>
              <a href="#legal-risks" className="block text-primary hover:underline">2. Legal Risks: What You're Facing</a>
              <a href="#verification-techniques" className="block text-primary hover:underline">3. Verification Techniques by Item Type</a>
              <a href="#red-flags" className="block text-primary hover:underline">4. 15 Red Flags That Scream "Stolen"</a>
              <a href="#safe-buying" className="block text-primary hover:underline">5. Safe Buying Practices</a>
              <a href="#free-tools" className="block text-primary hover:underline">6. Free Verification Tools</a>
              <a href="#what-if" className="block text-primary hover:underline">7. What If You Already Bought Stolen Goods?</a>
              <a href="#marketplace-specific" className="block text-primary hover:underline">8. Marketplace-Specific Tips</a>
            </nav>
          </Card>

          {/* Section 1 */}
          <section id="why-matters" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-destructive" />
              Why This Matters: The Shocking Truth
            </h2>
            <Card className="p-6 bg-destructive/5 border-destructive/20">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-destructive mb-2">$15 Billion</div>
                  <div className="text-sm text-muted-foreground">Stolen goods sold annually in the US</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-destructive mb-2">1 in 12</div>
                  <div className="text-sm text-muted-foreground">Secondhand purchases are stolen</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-destructive mb-2">67%</div>
                  <div className="text-sm text-muted-foreground">Buyers never get their money back</div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Every year, millions of unsuspecting buyers purchase stolen property. Most believe "ignorance is bliss" – that if they didn't know it was stolen, they're protected. <strong className="text-foreground">This is completely false.</strong>
              </p>
            </Card>

            <div className="mt-6 prose prose-slate dark:prose-invert max-w-none">
              <p>
                When you buy stolen goods – even unknowingly – you're not just facing financial loss. You're potentially facing <strong>criminal charges</strong>, civil lawsuits from the original owner, and a permanent mark on your record.
              </p>
              <p>
                The secondhand market has exploded. eBay, Facebook Marketplace, OfferUp, Craigslist – billions in transactions happen daily. While 99% of sellers are legitimate, the 1% of criminals moving stolen goods represent <strong>$15 billion in annual fraud</strong>.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="legal-risks" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Lock className="h-8 w-8 text-primary" />
              Legal Risks: What You're Actually Facing
            </h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-destructive">Criminal Charges</h3>
                <p className="mb-4 text-muted-foreground">
                  In most states, possession of stolen property is a crime – <strong>even if you didn't know</strong>. Prosecutors must prove you "should have known" it was stolen.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span><strong>Misdemeanor:</strong> Up to 1 year in jail, $1,000+ fines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span><strong>Felony (over $500):</strong> 1-10 years prison, $10,000+ fines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span><strong>Permanent record:</strong> Affects employment, housing, loans</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-destructive">Property Seizure</h3>
                <p className="text-muted-foreground">
                  Police can and will confiscate stolen property immediately. You don't get a refund. The original owner gets their property back. You lose 100% of your money, with virtually no legal recourse against the seller.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-destructive">Civil Lawsuits</h3>
                <p className="text-muted-foreground">
                  The original owner can sue you for damages, legal fees, and emotional distress. Even if you're found innocent of criminal charges, civil court has a lower burden of proof.
                </p>
              </Card>
            </div>
          </section>

          {/* Section 3 */}
          <section id="verification-techniques" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <CheckCircle className="h-8 w-8 text-success" />
              Verification Techniques by Item Type
            </h2>

            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Smartphone className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Smartphones & Electronics</h3>
                </div>
                <ol className="space-y-3 text-sm">
                  <li><strong>1. Get the IMEI/Serial Number</strong> - Dial *#06# or check Settings → About Phone</li>
                  <li><strong>2. Verify on SafeOrStolen</strong> - Free IMEI checker with law enforcement database access</li>
                  <li><strong>3. Check carrier blacklist</strong> - Verify not reported stolen to AT&T, Verizon, T-Mobile</li>
                  <li><strong>4. Factory reset test</strong> - Ensure seller can perform factory reset (proves not stolen/locked)</li>
                  <li><strong>5. Activation lock check</strong> - For iPhone, verify Find My iPhone is disabled</li>
                </ol>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Car className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Vehicles</h3>
                </div>
                <ol className="space-y-3 text-sm">
                  <li><strong>1. Get the VIN</strong> - 17-character number on dashboard, driver's door, or title</li>
                  <li><strong>2. Free VIN check</strong> - Use SafeOrStolen or NICB for stolen vehicle database</li>
                  <li><strong>3. Title verification</strong> - Physical title must match seller's ID</li>
                  <li><strong>4. Police VIN check</strong> - Many police stations offer free VIN verification</li>
                  <li><strong>5. DMV records</strong> - Verify clean title, no liens, matching ownership records</li>
                </ol>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Home className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Tools, Equipment & High-Value Items</h3>
                </div>
                <ol className="space-y-3 text-sm">
                  <li><strong>1. Serial number verification</strong> - All quality tools have serial numbers stamped on them</li>
                  <li><strong>2. Original packaging/receipts</strong> - Legitimate sellers keep these for warranty claims</li>
                  <li><strong>3. Registration check</strong> - SafeOrStolen checks against property mark registries</li>
                  <li><strong>4. Condition inconsistencies</strong> - New/expensive items with damage = red flag</li>
                  <li><strong>5. Model year matching</strong> - Verify model numbers match current production (not discontinued)</li>
                </ol>
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <ShoppingBag className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Jewelry & Luxury Goods</h3>
                </div>
                <ol className="space-y-3 text-sm">
                  <li><strong>1. Engraving/serial numbers</strong> - High-end watches and jewelry have unique identifiers</li>
                  <li><strong>2. Authentication papers</strong> - Certificates from brand, appraisals, original boxes</li>
                  <li><strong>3. Professional appraisal</strong> - Get independent verification before purchase</li>
                  <li><strong>4. Insurance records</strong> - Legitimate sellers can provide insurance documentation</li>
                  <li><strong>5. Price verification</strong> - If it's 50%+ below market value, it's likely stolen</li>
                </ol>
              </Card>
            </div>
          </section>

          {/* Section 4 */}
          <section id="red-flags" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-destructive" />
              15 Red Flags That Scream "Stolen"
            </h2>

            <Card className="p-6">
              <ol className="space-y-4">
                {[
                  "Seller refuses to provide serial/IMEI/VIN numbers",
                  "Price is 50%+ below market value with no valid reason",
                  "Seller insists on cash only (no paper trail)",
                  "Meeting location changes multiple times or is in isolated area",
                  "Seller can't explain where/when they got the item",
                  "No original packaging, receipts, or documentation",
                  "Item is brand new but seller claims they 'won it' or it was a 'gift'",
                  "Multiple identical high-value items for sale",
                  "Seller pressures you to buy immediately ('someone else wants it')",
                  "Can't perform factory reset or unlock device in front of you",
                  "Serial numbers are scratched off, worn down, or illegible",
                  "Seller has multiple accounts or frequently deleted posts",
                  "Won't answer basic questions about the item's history",
                  "Item still has security tags, stickers, or anti-theft devices",
                  "Seller's story changes or doesn't make sense"
                ].map((flag, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="font-bold text-destructive">{i + 1}.</span>
                    <span>{flag}</span>
                  </li>
                ))}
              </ol>
            </Card>

            <Card className="mt-6 p-6 bg-destructive/10 border-destructive/30">
              <p className="text-sm font-semibold text-destructive mb-2">⚠️ CRITICAL RULE:</p>
              <p className="text-sm">
                If even ONE of these red flags appears, <strong>walk away immediately</strong>. No deal is worth the legal and financial nightmare that follows.
              </p>
            </Card>
          </section>

          {/* Section 5 */}
          <section id="safe-buying" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Shield className="h-8 w-8 text-success" />
              Safe Buying Practices
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-semibold mb-4 text-lg">Before the Meeting</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    <span>Request serial/IMEI/VIN via text message</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    <span>Verify on SafeOrStolen (2 free checks)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    <span>Google the seller's phone number and email</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    <span>Check their selling history and reviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    <span>Insist on meeting at police station parking lot</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-4 text-lg">During the Meeting</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    <span>Bring a friend or family member</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    <span>Take clear photos of seller's ID (with permission)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    <span>Inspect item thoroughly, verify serial numbers match</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    <span>Test all functions (reset, unlock, power on/off)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    <span>Get written receipt with seller's name and signature</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-4 text-lg">After the Purchase</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    <span>Save all text messages and communications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    <span>Register the item with manufacturer (if applicable)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    <span>Keep receipt and documentation indefinitely</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    <span>Take detailed photos of item and serial numbers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    <span>Create digital and physical backup of all documents</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-4 text-lg">Payment Best Practices</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    <span>Use PayPal Goods & Services (buyer protection)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    <span>Credit cards offer fraud protection (not debit)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    <span>If cash: meet at bank, verify bills aren't counterfeit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    <span>NEVER use wire transfers, gift cards, or cryptocurrency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                    <span>Document payment method on receipt</span>
                  </li>
                </ul>
              </Card>
            </div>
          </section>

          {/* Section 6 */}
          <section id="free-tools" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Search className="h-8 w-8 text-primary" />
              Free Verification Tools
            </h2>

            <Card className="p-6 bg-primary/5 border-primary/20 mb-6">
              <div className="flex items-start gap-4">
                <Shield className="h-12 w-12 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">SafeOrStolen (Recommended)</h3>
                  <p className="text-muted-foreground mb-4">
                    The most comprehensive free verification platform. Check phones, vehicles, electronics, tools, jewelry, bikes, and more against law enforcement databases, marketplace reports, and insurance claims.
                  </p>
                  <ul className="space-y-2 text-sm mb-4">
                    <li>✓ 2 free verification searches</li>
                    <li>✓ IMEI, VIN, and serial number checks</li>
                    <li>✓ Real-time law enforcement database access</li>
                    <li>✓ Mobile app available (iOS & Android)</li>
                    <li>✓ Instant results in under 30 seconds</li>
                  </ul>
                  <Button 
                    onClick={() => navigate('/verify')}
                    size="lg"
                    className="w-full md:w-auto"
                  >
                    Start Free Verification →
                  </Button>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-semibold mb-3">Other Free Tools</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>NICB VINCheck</strong> - Free vehicle VIN check (limited to 5/year)</li>
                  <li><strong>GSMA IMEI Database</strong> - International phone blacklist checker</li>
                  <li><strong>LeadsOnline</strong> - Law enforcement property recovery platform</li>
                  <li><strong>CheckMEND (UK)</strong> - UK-focused stolen property database</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-3">When to Use Paid Services</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>Vehicle history reports</strong> - For accident history, title issues</li>
                  <li><strong>Professional appraisals</strong> - High-value jewelry, art, antiques</li>
                  <li><strong>Background checks</strong> - For sellers of very expensive items</li>
                  <li><strong>Legal consultation</strong> - If something feels wrong, get legal advice</li>
                </ul>
              </Card>
            </div>
          </section>

          {/* Section 7 */}
          <section id="what-if" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-destructive" />
              What If You Already Bought Stolen Goods?
            </h2>

            <Card className="p-6 bg-destructive/5 border-destructive/20 mb-6">
              <p className="font-semibold text-destructive mb-4">If you suspect you bought stolen property:</p>
              <ol className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-destructive">1.</span>
                  <span><strong>Stop using it immediately</strong> - Continued use can be seen as intent to keep stolen property</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-destructive">2.</span>
                  <span><strong>Document everything</strong> - Save all messages, receipts, photos, seller info</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-destructive">3.</span>
                  <span><strong>Verify immediately</strong> - Use SafeOrStolen to check if it's actually reported stolen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-destructive">4.</span>
                  <span><strong>Contact the seller</strong> - Request refund, give them chance to make it right</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-destructive">5.</span>
                  <span><strong>File police report</strong> - Show you're a victim, not an accomplice</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-destructive">6.</span>
                  <span><strong>Consult attorney</strong> - Free consultations available in most states</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-destructive">7.</span>
                  <span><strong>Cooperate fully</strong> - If police contact you, be honest and provide documentation</span>
                </li>
              </ol>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Your Rights as an Innocent Buyer</h3>
              <p className="text-sm text-muted-foreground mb-4">
                While laws vary by state, most jurisdictions provide some protection for "bona fide purchasers" – buyers who had no reason to suspect the item was stolen and took reasonable precautions:
              </p>
              <ul className="space-y-2 text-sm">
                <li>✓ You may avoid criminal charges if you can prove you were reasonably diligent</li>
                <li>✓ Documentation of verification attempts strengthens your case</li>
                <li>✓ Meeting in public places and getting receipts shows good faith</li>
                <li>✓ You may be able to sue the seller in small claims court</li>
                <li>✓ Some states allow you to keep the item if you paid fair market value (rare)</li>
              </ul>
            </Card>
          </section>

          {/* Section 8 */}
          <section id="marketplace-specific" className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <ShoppingBag className="h-8 w-8 text-primary" />
              Marketplace-Specific Tips
            </h2>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Facebook Marketplace</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Check seller's profile: active for 6+ months, real friends, photos</li>
                  <li>• Use Facebook's built-in payment system (buyer protection)</li>
                  <li>• Report suspicious listings immediately</li>
                  <li>• Verify serial numbers before meeting</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">eBay</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Check seller feedback score (99%+ positive, 100+ transactions)</li>
                  <li>• Look for "Top Rated Seller" badge</li>
                  <li>• Use eBay Money Back Guarantee (not "Classified" listings)</li>
                  <li>• Ask for serial numbers before bidding</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">OfferUp / Letgo / Mercari</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Require "TruYou" verified accounts</li>
                  <li>• Check seller ratings and review history</li>
                  <li>• Use in-app payment methods (never off-platform)</li>
                  <li>• Meet at OfferUp Community MeetUp Spots (police stations)</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Craigslist</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Highest risk marketplace - extra caution required</li>
                  <li>• ALWAYS verify serial numbers before meeting</li>
                  <li>• NEVER go alone or to private residences</li>
                  <li>• Cash only = major red flag (no buyer protection)</li>
                </ul>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <Card className="p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-primary/20 text-center">
            <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Protect Yourself with Free Verification</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Don't risk your money, freedom, and peace of mind. Verify any item in under 30 seconds with SafeOrStolen's free verification tool. Check phones, vehicles, electronics, tools, jewelry, and more against law enforcement databases.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => navigate('/verify')}
                className="text-lg px-8"
              >
                Start Free Verification
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/mobile-app')}
                className="text-lg px-8"
              >
                Download Mobile App
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              2 free verification searches • No credit card required • Instant results
            </p>
          </Card>

          {/* Related Articles */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/blog/imei-check-everything-you-need-to-know')}>
                <h3 className="font-semibold mb-2">IMEI Check: Everything You Need to Know</h3>
                <p className="text-sm text-muted-foreground">Complete guide to IMEI verification</p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/blog/carfax-vs-free-vin-alternatives')}>
                <h3 className="font-semibold mb-2">Carfax vs Free VIN Alternatives</h3>
                <p className="text-sm text-muted-foreground">Save money on vehicle history reports</p>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/guides/facebook-marketplace-safety')}>
                <h3 className="font-semibold mb-2">Facebook Marketplace Safety Tips</h3>
                <p className="text-sm text-muted-foreground">15 essential safety tips for buyers</p>
              </Card>
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
