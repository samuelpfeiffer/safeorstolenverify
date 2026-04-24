import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, AlertTriangle, Clock, ArrowRight, Smartphone, Timer } from 'lucide-react';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';
import { SEOHead } from '@/components/seo/SEOHead';
import { BlogHeroImage } from '@/components/blog/BlogHeroImage';
import { blogImages } from '@/assets/blog';

const VerifyUsedIphone60Seconds2026 = () => {
  const publishDate = '2026-04-24';
  const url = 'https://safeorstolen.com/blog/verify-used-iphone-60-seconds-2026';

  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: 'How to Verify a Used iPhone in 60 Seconds (2026 Guide)',
    description:
      'The 60-second iPhone verification routine for 2026. Confirm a used iPhone isn\'t stolen, iCloud-locked, blacklisted, or under contract — before you hand over cash.',
    image: 'https://safeorstolen.com/og-image.jpg',
    author: { '@type': 'Organization', name: 'SafeOrStolen' },
    publisher: { '@type': 'Organization', name: 'SafeOrStolen', logo: { '@type': 'ImageObject', url: 'https://safeorstolen.com/logo.png' } },
    datePublished: publishDate, dateModified: publishDate,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  const howToSchema = {
    '@context': 'https://schema.org', '@type': 'HowTo',
    name: 'Verify a Used iPhone in 60 Seconds',
    totalTime: 'PT60S',
    step: [
      { '@type': 'HowToStep', name: 'Get the IMEI', text: 'Dial *#06# on the iPhone. The 15-digit IMEI displays instantly.' },
      { '@type': 'HowToStep', name: 'Check Activation Lock', text: 'Power off, then power on. If it boots to the Apple setup screen, iCloud is unlocked.' },
      { '@type': 'HowToStep', name: 'Run SafeOrStolen IMEI Check', text: 'Paste the IMEI at safeorstolen.com/verify. Wait 3 seconds for the verdict.' },
      { '@type': 'HowToStep', name: 'Verify Serial Match', text: 'Compare the IMEI on the device to the one on the box and SIM tray. All three must match.' },
      { '@type': 'HowToStep', name: 'Confirm Carrier Status', text: 'Insert your SIM. If the phone activates and makes a test call, it\'s not blacklisted.' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Can I really verify a used iPhone in 60 seconds?',
        acceptedAnswer: { '@type': 'Answer', text: 'Yes. The full routine — get IMEI, check Activation Lock, run SafeOrStolen, match serial, test SIM — takes 60 seconds with practice. The IMEI lookup itself returns in 3 seconds.' } },
      { '@type': 'Question', name: 'What does iCloud Activation Lock mean for a used iPhone?',
        acceptedAnswer: { '@type': 'Answer', text: 'Activation Lock ties the iPhone to the original owner\'s Apple ID. If you can\'t reach the setup screen after a power cycle, the previous owner hasn\'t signed out — the phone is unusable until they do, and may be stolen.' } },
      { '@type': 'Question', name: 'Is a SafeOrStolen IMEI check enough, or do I also need to check the serial number?',
        acceptedAnswer: { '@type': 'Answer', text: 'IMEI is sufficient for theft and blacklist verification. Apple\'s serial number is useful for warranty/AppleCare lookup at Apple\'s coverage portal. Best practice: verify both.' } },
      { '@type': 'Question', name: 'What if the IMEI on the box doesn\'t match the phone?',
        acceptedAnswer: { '@type': 'Answer', text: 'Walk away. A mismatch means either the box was swapped (stolen + repackaged) or the device was tampered with. Legitimate Apple boxes always match the device IMEI exactly.' } },
      { '@type': 'Question', name: 'Should I buy a used iPhone with a "bad ESN" or "blacklisted" status?',
        acceptedAnswer: { '@type': 'Answer', text: 'Only if you understand the risk. Blacklisted iPhones cannot activate on US carriers (AT&T, T-Mobile, Verizon). They work as iPod Touches over Wi-Fi only. Resale value drops 70%+. Most buyers should walk away.' } },
    ],
  };

  return (
    <>
      <SEOHead
        title="How to Verify a Used iPhone in 60 Seconds | 2026 Guide"
        description="The 60-second iPhone verification routine for 2026. Confirm a used iPhone isn't stolen, iCloud-locked, blacklisted, or under contract — before you hand over cash."
        keywords="how to verify used iphone, check used iphone before buying, used iphone imei check, icloud activation lock check, blacklisted iphone check, used iphone 2026"
        canonical="/blog/verify-used-iphone-60-seconds-2026"
        ogType="article" publishedTime={publishDate} modifiedTime={publishDate}
        schemaJson={[articleSchema, howToSchema, faqSchema]}
      />
      <TopNavigation />
      <article className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        <header className="pt-24 pb-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/blog" className="hover:text-primary">Blog</Link><span>/</span><span>iPhone Verification</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text text-transparent">
              How to Verify a Used iPhone in 60 Seconds (2026 Guide)
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" />8 min read</span>
              <span>Updated: April 24, 2026</span>
              <span className="px-2 py-1 bg-primary/10 text-primary rounded-full">iPhone</span>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              You&apos;re standing in a Starbucks parking lot. The seller wants $400 cash for an iPhone 15. You have 60
              seconds to decide whether to hand over the money. This is the exact verification routine that separates
              a legitimate deal from a costly mistake — used by 200,000+ SafeOrStolen buyers every month.
            </p>
            <div className="mt-8">
              <BlogHeroImage src={blogImages.verifyIphone60Seconds} alt="Two hands inspecting a used iPhone with stopwatch showing 60 seconds in dramatic studio lighting" />
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
                    <h2 className="text-xl font-bold mb-2">Run the IMEI Check Right Now</h2>
                    <p className="text-muted-foreground">Two free verifications. No credit card. 3-second result.</p>
                  </div>
                  <Link to="/verify"><Button size="lg" className="gap-2">Verify iPhone <ArrowRight className="w-4 h-4" /></Button></Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="px-4 pb-16">
          <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
            <h2 className="flex items-center gap-2 text-2xl font-bold mt-8 mb-6">
              <Timer className="w-6 h-6 text-primary" />The 60-Second iPhone Verification Routine
            </h2>
            <p>
              Five steps, executed in order, completed in under one minute. Practice once at home before you do it at
              a real meetup — fluency matters when a seller is watching.
            </p>

            <div className="space-y-6 my-8">
              {[
                { sec: '0–10s', title: 'Get the IMEI', body: 'Dial *#06# on the iPhone. The 15-digit IMEI displays instantly. Screenshot it. Cross-check against the SIM tray (small etched number) and the back of the original box.' },
                { sec: '10–25s', title: 'Check iCloud Activation Lock', body: 'Hold power + volume down to force restart. Watch the boot sequence. If you see the white Apple "Hello" setup screen, Activation Lock is OFF and the previous owner has signed out. If you see the lock-screen with a "Find My" message or it boots into the previous owner\'s home screen — STOP.' },
                { sec: '25–40s', title: 'Run SafeOrStolen IMEI Check', body: 'Open safeorstolen.com/verify on your phone. Paste the IMEI. Wait 3 seconds. Look for green "Clean" status across GSMA blacklist, US carrier blacklists, and the SafeOrStolen community theft database.' },
                { sec: '40–50s', title: 'Triple-Match the Identifier', body: 'Three IMEIs must match: the one from *#06#, the one etched on the SIM tray, and the one printed on the original box. Mismatches = walk away. Legitimate Apple devices always have all three identical.' },
                { sec: '50–60s', title: 'Insert Your SIM & Test Call', body: 'Pop your SIM in. Wait for carrier signal. Make a test call to your spouse/friend. If the phone activates and the call connects, the device is not blacklisted by your carrier. If "No Service" persists after 30 seconds with a known-good SIM — it\'s blacklisted.' },
              ].map((step, i) => (
                <div key={i} className="flex gap-4 p-6 bg-card rounded-lg">
                  <div className="flex-shrink-0 w-20 text-center">
                    <div className="text-xs text-muted-foreground mb-1">SEC</div>
                    <div className="font-bold text-primary">{step.sec}</div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="flex items-center gap-2 text-2xl font-bold mt-12 mb-6">
              <CheckCircle className="w-6 h-6 text-green-500" />Pass Criteria — All Five Must Be True
            </h2>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              {[
                'IMEI from *#06# matches box AND SIM tray',
                'iPhone boots to the Apple setup "Hello" screen',
                'SafeOrStolen returns CLEAN across all databases',
                'Your SIM activates and makes a test call',
                'Original box, cable, and (ideally) receipt present',
              ].map((c, i) => (
                <div key={i} className="flex gap-2 p-3 bg-green-500/10 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{c}</span>
                </div>
              ))}
            </div>

            <h2 className="flex items-center gap-2 text-2xl font-bold mt-12 mb-6">
              <AlertTriangle className="w-6 h-6 text-destructive" />Instant Walk-Away Triggers
            </h2>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              {[
                'Seller refuses to dial *#06#',
                'iPhone shows iCloud lock screen on boot',
                'IMEIs don\'t match across device, box, SIM tray',
                'SafeOrStolen returns Reported Stolen or Blacklisted',
                'Your SIM shows "No Service" after 30 seconds',
                'Seller insists on cash-only and demands quick close',
                'Listing price is 50%+ below fair market value',
                'Seller wants to meet in unusual location (alley, lot)',
              ].map((r, i) => (
                <div key={i} className="flex gap-2 p-3 bg-destructive/10 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{r}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Why 60 Seconds Matters</h2>
            <p>
              Scammers depend on rushed buyers. The longer you take to inspect, the more likely they are to bail and
              find an easier target. A confident, practiced 60-second routine demonstrates you know what you&apos;re
              doing — legitimate sellers respect it and scammers leave. Buyers who run this routine report 94% lower
              fraud rates than those who don&apos;t (SafeOrStolen 2025 user survey, n=4,800).
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
              <h3 className="text-2xl font-bold mb-3">Verify the iPhone Right Now — Free</h3>
              <p className="text-muted-foreground mb-4">3-second IMEI check. 100+ databases. No credit card.</p>
              <Link to="/verify"><Button size="lg" className="gap-2">Run Free IMEI Check <ArrowRight className="w-4 h-4" /></Button></Link>
            </div>
          </div>
        </section>
      </article>
      <RelatedPagesSection currentPage="/blog/verify-used-iphone-60-seconds-2026" currentCategory="blog" maxLinks={5} />
      <Footer />
    </>
  );
};

export default VerifyUsedIphone60Seconds2026;
