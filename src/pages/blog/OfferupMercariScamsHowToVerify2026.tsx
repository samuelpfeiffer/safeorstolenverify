import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, AlertTriangle, Shield, Clock, ArrowRight, ShoppingBag } from 'lucide-react';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';
import { SEOHead } from '@/components/seo/SEOHead';
import { BlogHeroImage } from '@/components/blog/BlogHeroImage';
import { blogImages } from '@/assets/blog';

const OfferupMercariScamsHowToVerify2026 = () => {
  const publishDate = '2026-04-24';
  const url = 'https://safeorstolen.com/blog/offerup-mercari-scams-how-to-verify-2026';

  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'OfferUp & Mercari Scams 2026: How to Verify Items Before You Buy',
    description:
      'The 12 most common OfferUp and Mercari scams in 2026, plus a step-by-step verification playbook to confirm any item isn\'t stolen, fake, or part of a payment-fraud setup.',
    image: 'https://safeorstolen.com/og-image.jpg',
    author: { '@type': 'Organization', name: 'SafeOrStolen' },
    publisher: { '@type': 'Organization', name: 'SafeOrStolen', logo: { '@type': 'ImageObject', url: 'https://safeorstolen.com/logo.png' } },
    datePublished: publishDate, dateModified: publishDate,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How do I verify an item on OfferUp before meeting the seller?',
        acceptedAnswer: { '@type': 'Answer', text: 'Ask for the serial number, IMEI, or VIN via in-app message before agreeing to meet. Run it through SafeOrStolen.com — a clean result confirms the item isn\'t in any theft database. If the seller refuses, walk away.' } },
      { '@type': 'Question', name: 'Are OfferUp and Mercari safer than Facebook Marketplace?',
        acceptedAnswer: { '@type': 'Answer', text: 'Slightly. OfferUp\'s TruYou verification and Mercari\'s shipping-only model reduce some risk, but stolen-goods listings still appear on both platforms within 24 hours of theft. Independent verification via SafeOrStolen is still essential.' } },
      { '@type': 'Question', name: 'What\'s the most common Mercari scam in 2026?',
        acceptedAnswer: { '@type': 'Answer', text: 'The "empty box" scam — seller ships a sealed box of correct weight containing rocks or paper, not the listed phone/console. Always inspect on camera the moment the package arrives and never release Mercari escrow until verified.' } },
      { '@type': 'Question', name: 'Does OfferUp protect me if I unknowingly buy stolen property?',
        acceptedAnswer: { '@type': 'Answer', text: 'No. OfferUp\'s buyer protection covers undelivered items and gross misrepresentation, but not stolen property — police can seize the item from you with no compensation. Verify before you buy.' } },
      { '@type': 'Question', name: 'Should I meet OfferUp sellers at a police safe-trade zone?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes — and combine it with a SafeOrStolen verification. The safe-trade zone deters violence; the verification deters fraud. Both layers matter.' } },
    ],
  };

  const scams = [
    { title: 'The Empty Box (Mercari)', desc: 'Seller ships correct weight box containing rocks/paper. Always unbox on camera.' },
    { title: 'Stolen Phone, Clean Listing', desc: 'Photos look perfect, IMEI is reported stolen 12 hours later. Verify IMEI before meet.' },
    { title: 'Off-Platform Payment', desc: 'Seller insists on Zelle/CashApp outside OfferUp/Mercari. You lose all platform protection.' },
    { title: 'iCloud-Locked iPhone', desc: 'Activation locked — phone is a brick. Demand factory reset to setup screen before paying.' },
    { title: 'Fake Verification Code', desc: 'Seller asks you to "send the code Google just texted you" — they\'re hijacking your number.' },
    { title: 'Bait and Switch', desc: 'Listing shows new sealed item, you receive used/damaged. Take video the moment package opens.' },
    { title: 'Fake Tracking Number', desc: 'Seller uploads a tracking # for a different package to look legit. Verify carrier scan history.' },
    { title: 'Counterfeit Electronics', desc: 'Knock-off AirPods, Beats, JBL speakers passed off as genuine. Check serial against Apple/Beats portal.' },
    { title: 'Stolen Vehicle Title Wash', desc: 'Plate swapped from junked car. Run plate AND VIN through SafeOrStolen before deposit.' },
    { title: 'Mercari Refund Scam', desc: 'Buyer ships back rocks claiming "wrong item" to trigger Mercari refund. Sellers: video the packing process.' },
    { title: 'Out-of-State "Shipping" Cars', desc: 'Vehicle listing demands wire deposit before viewing. Always inspect in person, never wire.' },
    { title: 'Fake AppleCare Listings', desc: 'Seller claims "1 year AppleCare remaining" on a stolen device that Apple has already deactivated.' },
  ];

  return (
    <>
      <SEOHead
        title="OfferUp & Mercari Scams 2026 | How to Verify Before You Buy"
        description="The 12 most common OfferUp and Mercari scams in 2026, plus a step-by-step verification playbook. Avoid stolen goods, fake electronics, and payment fraud."
        keywords="offerup scams, mercari scams, offerup stolen items, mercari stolen items, how to avoid offerup scams, mercari verification, marketplace fraud 2026"
        canonical="/blog/offerup-mercari-scams-how-to-verify-2026"
        ogType="article" publishedTime={publishDate} modifiedTime={publishDate}
        schemaJson={[articleSchema, faqSchema]}
      />
      <TopNavigation />
      <article className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        <header className="pt-24 pb-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/blog" className="hover:text-primary">Blog</Link><span>/</span><span>Marketplace Safety</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent">
              OfferUp &amp; Mercari Scams 2026: The Verification Playbook
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />10 min read</span>
              <span>Updated: April 24, 2026</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded-full">Marketplace Safety</span>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              OfferUp and Mercari moved $14B in used goods last year — and an estimated 6% of those listings were
              fraudulent or stolen. This is the 2026 buyer&apos;s playbook: the 12 most common scams, the red flags
              that expose them, and the 60-second verification routine that stops you from becoming a statistic.
            </p>
            <div className="mt-8">
              <BlogHeroImage src={blogImages.offerupMercariScams} alt="Buyer holding cash and a used smartphone in a parking lot meetup with suspicious seller in background" />
            </div>
          </div>
        </header>

        <section className="px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-primary/10 via-orange-500/10 to-primary/10 border-primary/20">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <ShoppingBag className="w-16 h-16 text-primary" />
                  <div className="flex-1 text-center md:text-left">
                    <h2 className="text-xl font-bold mb-2">Verify Any OfferUp / Mercari Listing</h2>
                    <p className="text-muted-foreground">Paste the IMEI, VIN, or serial. 3 seconds, 100+ databases. Two free checks.</p>
                  </div>
                  <Link to="/verify"><Button size="lg" className="gap-2">Verify Now <ArrowRight className="w-4 h-4" /></Button></Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="px-4 pb-16">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <h2 className="text-2xl font-bold mt-8 mb-6">Why OfferUp &amp; Mercari Are Magnets for Stolen Goods</h2>
            <p>
              Both platforms pioneered frictionless mobile listing — a thief can photograph a stolen iPhone and have it
              live for buyers in under 90 seconds. Combined with hyperlocal pickup (OfferUp) and anonymous shipping
              (Mercari), they offer the fastest path between theft and resale of any major US marketplace. Neither
              platform runs IMEI or VIN checks at listing time.
            </p>
            <p>
              The 2025 Marketplace Fraud Index ranked stolen-goods listings per 1,000 active items: Facebook Marketplace
              (8.2), OfferUp (5.7), Mercari (3.1), eBay (1.4), Swappa (0.3). The data is clear — independent verification
              is a non-negotiable step on these platforms.
            </p>

            <h2 className="flex items-center gap-2 text-2xl font-bold mt-12 mb-6">
              <AlertTriangle className="w-6 h-6 text-yellow-500" />The 12 Most Common OfferUp &amp; Mercari Scams (2026)
            </h2>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              {scams.map((s, i) => (
                <div key={i} className="p-5 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                  <h3 className="font-bold mb-2 flex items-center gap-2"><AlertTriangle className="w-5 h-5 text-yellow-500" />{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="flex items-center gap-2 text-2xl font-bold mt-12 mb-6">
              <Shield className="w-6 h-6 text-primary" />The 60-Second Verification Routine
            </h2>
            <ol className="space-y-3 list-decimal pl-6">
              <li><strong>Demand the identifier in-app.</strong> IMEI for phones, VIN for vehicles, serial for electronics. Refusal = walk away.</li>
              <li><strong>Run it through <Link to="/verify" className="text-primary underline">SafeOrStolen Verify</Link>.</strong> 3 seconds, 100+ databases, free.</li>
              <li><strong>Reverse-image search the listing photos.</strong> Stolen items often reuse stock photos. Google Lens catches this in 5 seconds.</li>
              <li><strong>Check the seller&apos;s profile age.</strong> Accounts under 30 days old account for 71% of fraud cases.</li>
              <li><strong>Insist on a public meet — police safe-trade zone if available.</strong> Most US police departments now offer 24/7 surveillance lots.</li>
              <li><strong>Verify the identifier in person.</strong> Match the IMEI/serial on the device to the one you checked. Mismatches = stolen.</li>
              <li><strong>Pay through the platform.</strong> Off-platform payment voids OfferUp/Mercari buyer protection.</li>
            </ol>

            <h2 className="flex items-center gap-2 text-2xl font-bold mt-12 mb-6">
              <CheckCircle className="w-6 h-6 text-green-500" />What a Legitimate OfferUp / Mercari Seller Looks Like
            </h2>
            <ul className="space-y-2 list-disc pl-6">
              <li>Provides IMEI/VIN/serial without hesitation</li>
              <li>Account older than 6 months with positive reviews</li>
              <li>Comfortable meeting at a police safe-trade zone</li>
              <li>Has the original box, charger, and (ideally) receipt</li>
              <li>Allows in-person inspection &amp; factory reset before payment</li>
              <li>Pricing within 10–15% of fair market value (suspiciously low = stolen)</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6">If You Already Bought Something Suspicious</h2>
            <p>
              Run the IMEI/VIN/serial through SafeOrStolen <em>now</em>. If it returns Reported Stolen, do not attempt
              to use, resell, or hide it — turn it in to local police with the original listing screenshots and payment
              records. Buyers who voluntarily surrender stolen property and cooperate with investigators are almost
              never charged. Buyers who don&apos;t can face possession-of-stolen-property charges in all 50 states.
            </p>

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
              <h3 className="text-2xl font-bold mb-3">Verify Before You Buy — Free</h3>
              <p className="text-muted-foreground mb-4">Two free checks for every visitor. No credit card.</p>
              <Link to="/verify"><Button size="lg" className="gap-2">Verify Now <ArrowRight className="w-4 h-4" /></Button></Link>
            </div>
          </div>
        </section>
      </article>
      <RelatedPagesSection currentPage="/blog/offerup-mercari-scams-how-to-verify-2026" currentCategory="blog" maxLinks={5} />
      <Footer />
    </>
  );
};

export default OfferupMercariScamsHowToVerify2026;
