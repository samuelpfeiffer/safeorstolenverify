import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, AlertTriangle, Shield, Search, Clock, ArrowRight, Smartphone, Database, Zap } from 'lucide-react';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';
import { SEOHead } from '@/components/seo/SEOHead';
import { BlogHeroImage } from '@/components/blog/BlogHeroImage';
import { blogImages } from '@/assets/blog';

const FreeImeiCheckOnline2026 = () => {
  const publishDate = '2026-04-24';
  const modifiedDate = '2026-04-24';
  const url = 'https://safeorstolen.com/blog/free-imei-check-online-2026';

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Free IMEI Check Online 2026: Verify Any Phone in 3 Seconds',
    description:
      'Run a free IMEI check online in 2026. Look up any phone\'s IMEI to verify it isn\'t stolen, blacklisted, or under contract before you buy. 100+ databases scanned instantly.',
    image: 'https://safeorstolen.com/og-image.jpg',
    author: { '@type': 'Organization', name: 'SafeOrStolen', url: 'https://safeorstolen.com' },
    publisher: {
      '@type': 'Organization',
      name: 'SafeOrStolen',
      url: 'https://safeorstolen.com',
      logo: { '@type': 'ImageObject', url: 'https://safeorstolen.com/logo.png' },
    },
    datePublished: publishDate,
    dateModified: modifiedDate,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is the SafeOrStolen IMEI check really free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Every visitor gets two free IMEI checks with no credit card required. After that, an unlimited plan is available for $10/month or you can run a single guest check for $0.99.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I find the IMEI of any phone?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dial *#06# on the phone to instantly display the 15-digit IMEI. On iPhone you can also find it in Settings > General > About. On Android open Settings > About phone > IMEI information. Always cross-check the IMEI against the SIM tray and box.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does an IMEI check actually look up?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A full IMEI lookup checks the GSMA global blacklist, US carrier blacklists (AT&T, T-Mobile, Verizon), insurance loss reports, police theft databases, the SafeOrStolen community report database, and CheckMEND-style verification feeds. We aggregate over 100 sources in a single query.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will the seller know I checked the IMEI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. IMEI checks are read-only lookups against public theft and blacklist databases. The seller cannot see, intercept, or be alerted that you ran a verification.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is a free IMEI check more important in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Phone theft hit a record high in 2025, with over 78,000 mobile devices reported stolen each month in the US alone. Resellers move stolen devices to Facebook Marketplace, OfferUp, and Mercari within 24 hours. A 3-second IMEI check is now standard buyer protection.',
        },
      },
    ],
  };

  return (
    <>
      <SEOHead
        title="Free IMEI Check Online 2026 | Verify Any Phone in 3 Seconds"
        description="Run a free IMEI check online in 2026. Verify any phone isn't stolen, blacklisted, or under contract. 100+ databases scanned instantly. 2 free checks, no credit card."
        keywords="free imei check online, imei check, imei checker, free imei lookup, check imei number free, verify imei, imei blacklist check 2026"
        canonical="/blog/free-imei-check-online-2026"
        ogType="article"
        publishedTime={publishDate}
        modifiedTime={modifiedDate}
        schemaJson={[articleSchema, faqSchema]}
      />
      <TopNavigation />

      <article className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        <header className="pt-24 pb-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/blog" className="hover:text-primary">Blog</Link>
              <span>/</span><span>IMEI Verification</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent">
              Free IMEI Check Online 2026: Verify Any Phone in 3 Seconds
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />9 min read</span>
              <span>Updated: April 24, 2026</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded-full">IMEI Verification</span>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Buying a used phone in 2026 without checking the IMEI is the #1 way people lose money to stolen-goods scams.
              This guide shows you exactly how to run a free IMEI check online, what every status code means, and how
              SafeOrStolen aggregates 100+ theft databases into a single 3-second answer.
            </p>
            <div className="mt-8">
              <BlogHeroImage src={blogImages.freeImeiCheck2026} alt="Smartphone displaying a verified clean IMEI check result with neon orange status badge" />
            </div>
          </div>
        </header>

        <section className="px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-primary/10 via-orange-500/10 to-primary/10 border-primary/20">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <Smartphone className="w-16 h-16 text-primary" />
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-xl font-bold mb-2">Run Your Free IMEI Check Now</h2>
                    <p className="text-muted-foreground">
                      Two free verifications, no credit card. Aggregated across GSMA, US carrier blacklists, and the SafeOrStolen community database.
                    </p>
                  </div>
                  <Link to="/verify"><Button size="lg" className="gap-2">Verify Now <ArrowRight className="w-4 h-4" /></Button></Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="px-4 pb-16">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <h2 className="flex items-center gap-2 text-2xl font-bold mt-8 mb-6">
              <Zap className="w-6 h-6 text-primary" />What a Free IMEI Check Online Actually Tells You
            </h2>
            <p>
              An IMEI (International Mobile Equipment Identity) is a unique 15-digit fingerprint baked into every cellular
              device on Earth. It cannot be changed legally and follows the device for its entire life. When you run a
              free IMEI check online through SafeOrStolen, we cross-reference that fingerprint against four critical
              datasets in parallel: the <strong>GSMA global device blacklist</strong>, <strong>US carrier blacklists</strong>{' '}
              (AT&amp;T, T-Mobile, Verizon, and major MVNOs), <strong>law-enforcement theft reports</strong> aggregated
              from NCIC and state databases, and our own <strong>community theft report network</strong> populated by
              victims worldwide.
            </p>
            <p>
              The result you receive in under three seconds is a single status: <strong>Clean</strong>,{' '}
              <strong>Reported Stolen</strong>, <strong>Blacklisted</strong>, or <strong>Under Carrier Contract</strong>.
              Each status maps to a specific buying recommendation, which we explain in the verdict section below.
            </p>

            <h2 className="flex items-center gap-2 text-2xl font-bold mt-12 mb-6">
              <Search className="w-6 h-6 text-primary" />How to Find the IMEI on Any Phone
            </h2>
            <div className="grid md:grid-cols-3 gap-4 my-6">
              <Card><CardContent className="p-5"><h3 className="font-bold mb-2">Universal Method</h3><p className="text-sm text-muted-foreground">Dial <code className="bg-muted px-1 rounded">*#06#</code> on the keypad. The IMEI displays instantly on every phone, locked or unlocked.</p></CardContent></Card>
              <Card><CardContent className="p-5"><h3 className="font-bold mb-2">iPhone (iOS 17+)</h3><p className="text-sm text-muted-foreground">Settings → General → About → scroll to IMEI. Also etched on the SIM tray of older models.</p></CardContent></Card>
              <Card><CardContent className="p-5"><h3 className="font-bold mb-2">Android (One UI / Pixel)</h3><p className="text-sm text-muted-foreground">Settings → About phone → IMEI information. Dual-SIM phones list IMEI 1 and IMEI 2 — verify both.</p></CardContent></Card>
            </div>
            <p>
              Always demand the IMEI from a seller <em>before</em> the in-person meet. A legitimate seller has zero reason
              to refuse — the IMEI is not sensitive personal data, it&apos;s a public hardware identifier. Refusal is, by
              itself, a red flag we explain further in our{' '}
              <Link to="/blog/scammer-tactics-exposed" className="text-primary underline">scammer tactics guide</Link>.
            </p>

            <h2 className="flex items-center gap-2 text-2xl font-bold mt-12 mb-6">
              <Database className="w-6 h-6 text-primary" />The 5 Databases Behind Every SafeOrStolen IMEI Check
            </h2>
            <ol className="space-y-4 list-decimal pl-6">
              <li><strong>GSMA Device Registry:</strong> The global mobile-industry standard. Captures every IMEI ever flagged by a carrier as lost, stolen, or fraudulent across 220+ countries.</li>
              <li><strong>US Carrier Blacklists:</strong> Direct feeds from AT&amp;T, T-Mobile, Verizon, Boost, Cricket, and Metro. A blacklisted phone cannot activate on US networks even after factory reset.</li>
              <li><strong>Law-Enforcement Theft Reports:</strong> Aggregated from NCIC, NICB, and state-level crime databases. If a victim filed a police report with the IMEI, we surface it.</li>
              <li><strong>SafeOrStolen Community Network:</strong> Our proprietary database of 1.2M+ user-submitted theft reports — the only independent source not controlled by carriers.</li>
              <li><strong>Insurance Loss Feeds:</strong> Matches AppleCare, Asurion, and SquareTrade claim records that flag a device as &quot;lost or stolen&quot;.</li>
            </ol>

            <h2 className="flex items-center gap-2 text-2xl font-bold mt-12 mb-6">
              <Shield className="w-6 h-6 text-primary" />Reading Your Free IMEI Check Result
            </h2>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="p-5 bg-green-500/10 rounded-lg border border-green-500/20">
                <h3 className="font-bold flex items-center gap-2 mb-2 text-green-500"><CheckCircle className="w-5 h-5" /> CLEAN</h3>
                <p className="text-sm text-muted-foreground">No matches across any database. The phone is safe to purchase, activate, and resell. Save the verification ID as buyer-protection proof.</p>
              </div>
              <div className="p-5 bg-destructive/10 rounded-lg border border-destructive/20">
                <h3 className="font-bold flex items-center gap-2 mb-2 text-destructive"><AlertTriangle className="w-5 h-5" /> REPORTED STOLEN</h3>
                <p className="text-sm text-muted-foreground">A victim has filed a theft report. Walk away — possessing stolen property is a crime in all 50 US states even if you bought it in good faith.</p>
              </div>
              <div className="p-5 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                <h3 className="font-bold flex items-center gap-2 mb-2 text-yellow-500"><AlertTriangle className="w-5 h-5" /> BLACKLISTED</h3>
                <p className="text-sm text-muted-foreground">Carrier has blocked the IMEI from activating, usually for unpaid contract balances or fraud. The phone may still work on Wi-Fi but cannot make calls in the US.</p>
              </div>
              <div className="p-5 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <h3 className="font-bold flex items-center gap-2 mb-2 text-primary"><Database className="w-5 h-5" /> UNDER CONTRACT</h3>
                <p className="text-sm text-muted-foreground">Phone is still being financed by the original owner. Risky — the carrier can blacklist it the moment a payment is missed, even months after you buy.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Free IMEI Check vs Paid Services: 2026 Comparison</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse">
                <thead><tr className="bg-muted"><th className="border border-border p-3 text-left">Service</th><th className="border border-border p-3">Cost</th><th className="border border-border p-3">Databases</th><th className="border border-border p-3">Mobile App</th></tr></thead>
                <tbody>
                  <tr><td className="border border-border p-3"><strong>SafeOrStolen</strong></td><td className="border border-border p-3 text-center">2 free, then $10/mo unlimited</td><td className="border border-border p-3 text-center">100+</td><td className="border border-border p-3 text-center">✅ PWA</td></tr>
                  <tr><td className="border border-border p-3">CheckMEND</td><td className="border border-border p-3 text-center">£1.99 per check</td><td className="border border-border p-3 text-center">~30</td><td className="border border-border p-3 text-center">❌</td></tr>
                  <tr><td className="border border-border p-3">IMEI.info</td><td className="border border-border p-3 text-center">$3–10 per detailed check</td><td className="border border-border p-3 text-center">~12</td><td className="border border-border p-3 text-center">❌</td></tr>
                  <tr><td className="border border-border p-3">Swappa ESN Check</td><td className="border border-border p-3 text-center">Free (US carriers only)</td><td className="border border-border p-3 text-center">3</td><td className="border border-border p-3 text-center">❌</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Step-by-Step: Run Your First Free IMEI Check</h2>
            <ol className="space-y-3 list-decimal pl-6">
              <li>Get the IMEI from the seller via message (use <code className="bg-muted px-1 rounded">*#06#</code>).</li>
              <li>Open <Link to="/verify" className="text-primary underline">SafeOrStolen Verify</Link> in any browser — no account required for the first check.</li>
              <li>Paste the 15-digit IMEI. Our smart-detection engine auto-recognizes the format.</li>
              <li>Wait 3 seconds. The verdict, trust score (0–100), and database breakdown appear.</li>
              <li>Screenshot the verdict ID. If the seller balks, you have proof you did due diligence.</li>
            </ol>

            <h2 className="text-2xl font-bold mt-12 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4 my-6">
              {faqSchema.mainEntity.map((faq: any, i: number) => (
                <Card key={i}><CardContent className="p-6">
                  <h3 className="font-bold mb-2">{faq.name}</h3>
                  <p className="text-muted-foreground">{faq.acceptedAnswer.text}</p>
                </CardContent></Card>
              ))}
            </div>

            <div className="mt-12 p-6 bg-primary/10 rounded-lg border border-primary/20 text-center">
              <h3 className="text-2xl font-bold mb-3">Verify Your Phone in 3 Seconds — Free</h3>
              <p className="text-muted-foreground mb-4">No credit card. No download. Two free IMEI checks for every visitor.</p>
              <Link to="/verify"><Button size="lg" className="gap-2">Start Free IMEI Check <ArrowRight className="w-4 h-4" /></Button></Link>
            </div>
          </div>
        </section>
      </article>

      <RelatedPagesSection currentPage="/blog/free-imei-check-online-2026" currentCategory="blog" maxLinks={5} />
      <Footer />
    </>
  );
};

export default FreeImeiCheckOnline2026;
