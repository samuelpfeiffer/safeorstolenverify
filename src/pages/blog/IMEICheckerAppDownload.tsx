/**
 * Oct 8 2026: rewritten by hand for "imei checker app download". SafeOrStolen has no App Store or
 * Google Play app: it is a free installable web app at safeorstolen.com/app. Removed offline-mode,
 * "3-second scan", iOS/Android download and "thousands of buyers" claims, and a supplier name.
 */
import React from 'react';
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Smartphone, Shield, Zap, Wifi } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';
import { BlogHeroImage } from '@/components/blog/BlogHeroImage';
import { blogImages } from '@/assets/blog';

const IMEICheckerAppDownload = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "IMEI Checker App: Install SafeOrStolen Free on Your Phone",
    "description": "SafeOrStolen's IMEI checker is a free web app you install from your phone's browser at safeorstolen.com/app. No app store needed.",
    "datePublished": "2025-01-15",
    "dateModified": "2026-10-07",
    "author": { "@type": "Organization", "name": "SafeOrStolen" },
    "publisher": { "@type": "Organization", "name": "SafeOrStolen" }
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "SafeOrStolen IMEI Checker",
    "applicationCategory": "UtilitiesApplication",
    "browserRequirements": "Requires a modern web browser",
    "operatingSystem": "Any (installs from the browser)",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "url": "https://safeorstolen.com/app"
  };

  const faqs = [
    {
      question: "Is there an app to check if a phone is stolen?",
      answer: "Yes. SafeOrStolen is a free web app you install from your phone's browser at safeorstolen.com/app, not from the App Store or Google Play. Enter or scan a phone's IMEI and it shows the make and model, then searches SafeOrStolen theft reports and public web listings for that IMEI. You get 2 free checks with a free account."
    },
    {
      question: "How do I install the SafeOrStolen IMEI checker app?",
      answer: "Open safeorstolen.com/app on your phone. On an iPhone, tap the Share button in Safari and choose Add to Home Screen. On Android, tap the install prompt in Chrome, or open the menu and choose Install app. An icon appears on your home screen and opens SafeOrStolen full screen."
    },
    {
      question: "How do I check an IMEI in the app?",
      answer: "Dial *#06# on the phone you're buying to show its IMEI, then type the 15 digits into SafeOrStolen or scan the barcode on the box or SIM tray label with your camera. In a few seconds you'll see the model and a result of reported stolen, possible match, or no report found in the records searched, with every source listed."
    },
    {
      question: "Does the IMEI checker app work offline?",
      answer: "No. A check searches SafeOrStolen's theft reports and the public web, so it needs a data connection. If you're meeting a seller somewhere with weak signal, run the IMEI from the listing photos or ask the seller for it before you go, then check that it matches the phone at the meetup."
    },
    {
      question: "Is the SafeOrStolen IMEI checker free?",
      answer: "The app is free to install, and a free account includes 2 checks with no credit card. After that a single check is $0.99, or $10 a month for unlimited checks. A carrier blacklist check is a paid add-on; monthly members get up to 20 blacklist checks a month."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <>
      <PageSEO
        title="IMEI Checker App: Free Install, No App Store Needed | SafeOrStolen"
        description="Install SafeOrStolen's free IMEI checker web app from your phone's browser. Scan or type an IMEI and see the model and any theft reports in a few seconds."
        keywords="IMEI checker app download, stolen phone app, free IMEI check app, IMEI scanner app, phone verification app"
        canonical="/blog/imei-checker-app-download"
        structuredData={[articleSchema, softwareSchema, faqSchema]}
      />
      <div className="min-h-screen bg-background">
        <article className="max-w-4xl mx-auto px-4 py-16">
          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
              <Download className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Free to install</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              IMEI Checker App
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              SafeOrStolen's IMEI checker is a free web app. You install it from your phone's browser at
              safeorstolen.com/app, not from an app store, and it checks a phone's IMEI in a few seconds.
            </p>

            <Button asChild size="lg" className="gap-2">
              <Link to="/app">
                <Download className="w-5 h-5" />
                Install the free web app
              </Link>
            </Button>
          </header>

          <div className="max-w-4xl mx-auto px-4 mb-12">
            <BlogHeroImage src={blogImages.imeiApp} alt="Smartphone showing the SafeOrStolen web app install screen" />
          </div>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">
              What the app does
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Scan instead of typing</h3>
                  <p className="text-sm text-muted-foreground">
                    Point your camera at the IMEI barcode on the box or label, so you don't mistype 15 digits.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Model and theft reports</h3>
                  <p className="text-sm text-muted-foreground">
                    See the make and model from the IMEI, plus any SafeOrStolen theft reports and web listings that mention it.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Wifi className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Needs a connection</h3>
                  <p className="text-sm text-muted-foreground">
                    Checks run online. If the meetup spot has weak signal, check the IMEI before you go.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">
              Web app vs. an app store app
            </h2>

            <Card>
              <CardContent className="pt-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left pb-4">Question</th>
                      <th className="text-left pb-4">SafeOrStolen web app</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Where do I get it?</td>
                      <td className="py-3">safeorstolen.com/app in Safari or Chrome</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Is it in the App Store or Google Play?</td>
                      <td className="py-3">No. It installs from the browser to your home screen.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Does it update?</td>
                      <td className="py-3">Yes, automatically, each time you open it.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 pr-4">Does it work offline?</td>
                      <td className="py-3">No. Checks need a data connection.</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">What else can it check?</td>
                      <td className="py-3">VINs, plates, serial numbers, guns and bikes, from the same account.</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">
              How to check an IMEI in the app
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: 1, title: "Install", desc: "Open safeorstolen.com/app on your phone and add it to your home screen" },
                { step: 2, title: "Find the IMEI", desc: "Dial *#06# on the phone you're buying, or check Settings > About" },
                { step: 3, title: "Scan or type", desc: "Scan the IMEI barcode or type the 15-digit number" },
                { step: 4, title: "Read the result", desc: "In a few seconds: the model, the result, and every source searched" }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">
              IMEI checker app FAQs
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="bg-primary text-primary-foreground p-8 rounded-lg text-center">
            <Smartphone className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              Put the IMEI checker on your home screen
            </h2>
            <p className="opacity-90 mb-6">
              Install it once and it's there when you're standing in a parking lot with a seller.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/app">Install the free web app</Link>
            </Button>
          </section>
        </article>
      </div>
      <RelatedPagesSection currentPage="/blog/imei-checker-app-download" currentCategory="blog" maxLinks={5} />
    </>
  );
};

export default IMEICheckerAppDownload;
