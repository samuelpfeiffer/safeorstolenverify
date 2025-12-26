import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Smartphone, Shield, Zap, Wifi, CheckCircle } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';
import { AuthorBio } from '@/components/blog/AuthorBio';

const IMEICheckerAppDownload = () => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "IMEI Checker App Download - Free Stolen Phone Verification",
    "description": "Download the free SafeOrStolen IMEI checker app to verify phones aren't stolen. Works offline, scans barcodes in 3 seconds.",
    "datePublished": "2025-01-15",
    "dateModified": "2025-12-03",
    "author": { "@type": "Organization", "name": "SafeOrStolen" },
    "publisher": { "@type": "Organization", "name": "SafeOrStolen" }
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SafeOrStolen IMEI Checker",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "iOS, Android, Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "downloadUrl": "https://safeorstolen.com/app"
  };

  const faqs = [
    {
      question: "Is there an app to check if a phone is stolen?",
      answer: "Yes! SafeOrStolen is a free app that checks IMEI numbers against stolen phone databases. Download it to verify phones before buying on Facebook Marketplace, OfferUp, or Craigslist."
    },
    {
      question: "How do I check IMEI on the SafeOrStolen app?",
      answer: "Open the app, enter the 15-digit IMEI number (found by dialing *#06# on any phone), and get instant results showing if the phone is reported stolen or safe."
    },
    {
      question: "Does the IMEI checker app work offline?",
      answer: "Yes! The SafeOrStolen app works offline, perfect for verifying phones at meetup locations without cell service. Results sync when you reconnect."
    },
    {
      question: "Can I scan the IMEI barcode?",
      answer: "Yes. The SafeOrStolen app includes a barcode scanner that reads IMEI barcodes in just 3 seconds - no manual typing required."
    },
    {
      question: "Is the SafeOrStolen IMEI checker free?",
      answer: "Yes. Basic IMEI checks are free. Premium plans offer additional features like batch checking, detailed reports, and priority support."
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
        title="IMEI Checker App Download - Free Stolen Phone Verification | SafeOrStolen"
        description="Download the free SafeOrStolen IMEI checker app. Verify phones aren't stolen before buying. Works offline, scans barcodes in 3 seconds. iOS, Android, and web."
        keywords="IMEI checker app download, stolen phone app, free IMEI check app, IMEI scanner app, phone verification app"
        canonical="/blog/imei-checker-app-download"
        structuredData={[articleSchema, softwareSchema, faqSchema]}
      />

      <TopNavigation />
      <div className="min-h-screen bg-background">
        <article className="max-w-4xl mx-auto px-4 py-16">
          <header className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
              <Download className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Free Download</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              IMEI Checker App Download
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              The only free IMEI checker app with offline mode and 3-second barcode scanning. 
              Verify phones aren't stolen before meeting sellers.
            </p>

            <Button asChild size="lg" className="gap-2">
              <Link to="/app">
                <Download className="w-5 h-5" />
                Download Free App
              </Link>
            </Button>
          </header>

          {/* App Features */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">
              Why SafeOrStolen is the Best IMEI Checker App
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">3-Second Scan</h3>
                  <p className="text-sm text-muted-foreground">
                    Scan IMEI barcodes instantly. No manual typing required.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Wifi className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Works Offline</h3>
                  <p className="text-sm text-muted-foreground">
                    Verify phones at meetup locations without cell service.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-6">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">Free to Use</h3>
                  <p className="text-sm text-muted-foreground">
                    Basic IMEI checks are completely free. No signup required.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Competitor Comparison */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">
              SafeOrStolen vs Other IMEI Checkers
            </h2>

            <Card>
              <CardContent className="pt-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left pb-4">Feature</th>
                      <th className="text-center pb-4">SafeOrStolen</th>
                      <th className="text-center pb-4">IMEI.info</th>
                      <th className="text-center pb-4">CheckMEND</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3">Mobile App</td>
                      <td className="text-center text-green-500">✓</td>
                      <td className="text-center text-red-500">✗</td>
                      <td className="text-center text-red-500">✗</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Offline Mode</td>
                      <td className="text-center text-green-500">✓</td>
                      <td className="text-center text-red-500">✗</td>
                      <td className="text-center text-red-500">✗</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Barcode Scanner</td>
                      <td className="text-center text-green-500">✓</td>
                      <td className="text-center text-red-500">✗</td>
                      <td className="text-center text-red-500">✗</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3">Free Basic Checks</td>
                      <td className="text-center text-green-500">✓</td>
                      <td className="text-center text-green-500">✓</td>
                      <td className="text-center text-red-500">✗</td>
                    </tr>
                    <tr>
                      <td className="py-3">VIN + Serial + IMEI</td>
                      <td className="text-center text-green-500">✓</td>
                      <td className="text-center text-red-500">IMEI only</td>
                      <td className="text-center text-green-500">✓</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </section>

          {/* How to Use */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">
              How to Check IMEI on SafeOrStolen App
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: 1, title: "Download App", desc: "Get SafeOrStolen from the App Store, Play Store, or install as PWA" },
                { step: 2, title: "Find IMEI", desc: "Dial *#06# on the phone or check Settings > About" },
                { step: 3, title: "Scan or Enter", desc: "Scan the IMEI barcode or type the 15-digit number" },
                { step: 4, title: "Get Results", desc: "Instant results showing if phone is stolen or safe" }
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

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8">
              IMEI Checker App FAQs
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

          {/* Final CTA */}
          <section className="bg-primary text-primary-foreground p-8 rounded-lg text-center">
            <Smartphone className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">
              Download the Free IMEI Checker App
            </h2>
            <p className="opacity-90 mb-6">
              Join thousands of smart buyers who verify phones before purchasing.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/app">Download Now - It's Free</Link>
            </Button>
          </section>
        </article>
        <AuthorBio />
      </div>
      <RelatedPagesSection currentPage="/blog/imei-checker-app-download" currentCategory="blog" maxLinks={5} />
      <Footer />
    </>
  );
};

export default IMEICheckerAppDownload;
