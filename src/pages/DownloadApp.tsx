/**
 * Oct 7 2026: rewritten by hand for "download SafeOrStolen app" / "SafeOrStolen app download".
 * No search data for /download; this page answers "where do I download it" and sends people to /app
 * for full install steps, so the two pages don't compete. Removed: "works offline" (checks need a
 * connection), "all 50 states" coverage claim, "join thousands", "3-second" claims, the competitor
 * table naming another IMEI site, "iOS, Android" store wording, emoji/ALL CAPS.
 */
import React from 'react';
import { Link } from '@/lib/router-compat';
import { Download, Smartphone, Monitor, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';

const FAQS = [
  {
    q: 'Where do I download the SafeOrStolen app?',
    a: "You don't download it from a store. SafeOrStolen is an installable web app: open safeorstolen.com/app in Safari on an iPhone or Chrome on Android, then choose Add to Home Screen or Install app. It takes under a minute, it's free, and the icon then sits on your home screen like any other app.",
  },
  {
    q: 'Is SafeOrStolen on the App Store or Google Play?',
    a: "No. SafeOrStolen isn't listed in the Apple App Store or Google Play. It installs from the browser instead. If you find a store app using the SafeOrStolen name, it isn't from SafeOrStolen. The only place to get it is safeorstolen.com.",
  },
  {
    q: 'How much space does the SafeOrStolen app take?',
    a: "Very little. An installed web app stores a small amount of site data instead of a full app package, and it updates itself when the site changes, so there's nothing to re-download. You can remove it like any app: press and hold the icon and choose Remove or Uninstall.",
  },
  {
    q: 'Do I need an account to use the app?',
    a: 'You need a free account to run checks. It comes with 2 free checks and needs no credit card. After that a single check is $0.99, or $10 a month for unlimited checks, canceled anytime, with a 30-day refund on the monthly plan.',
  },
  {
    q: 'Is the app different from the website?',
    a: "No. The app and the website run the same checks against the same sources and share your account and check history. The app just opens full screen from your home screen, which is handier when you're standing next to the item at a meetup.",
  },
];

const DownloadApp = () => {
  const handleInstallClick = () => {
    // Track install click
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'app_download_click', {
        event_category: 'engagement',
        event_label: 'download_page',
      });
    }
  };

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'SafeOrStolen',
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Any (installable web app)',
      url: 'https://safeorstolen.com/app',
      dateModified: '2026-10-07',
      description:
        'Installable web app for checking whether a phone, vehicle, plate, gun, bike or other serial-numbered item has been reported stolen.',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Free to install; 2 free checks with a free account' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];

  return (
    <>
      <PageSEO
        title="Download the SafeOrStolen App (Free, No App Store)"
        description="How to download SafeOrStolen on iPhone, Android or a computer. It installs free from Safari or Chrome, not an app store, and runs the same stolen-item checks."
        keywords="download SafeOrStolen app, SafeOrStolen app download, stolen item checker app download, install SafeOrStolen"
        canonical="/download"
        modifiedTime="2026-10-07"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background pt-16">
        <section className="py-16 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 leading-tight">Download the SafeOrStolen App</h1>
            <p className="text-sm text-muted-foreground mb-6">Updated October 7, 2026</p>
            <p className="text-lg text-foreground mb-4">
              SafeOrStolen isn't in the App Store or Google Play. You install it straight from your browser: open
              safeorstolen.com/app in Safari (iPhone) or Chrome (Android) and tap Add to Home Screen or Install app. It's free,
              takes under a minute, and gives you the same stolen-item checks as the website, opening full screen from your home
              screen.
            </p>
            <Button size="lg" className="mt-4" onClick={handleInstallClick} asChild>
              <Link to="/app">
                <Download className="w-5 h-5 mr-2" />
                Go to the install page
              </Link>
            </Button>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Which device are you on?</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border rounded-lg">
                <thead>
                  <tr className="border-b bg-muted/50 text-left">
                    <th className="p-3">Device</th>
                    <th className="p-3">Browser to use</th>
                    <th className="p-3">What to tap</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b align-top">
                    <td className="p-3 font-medium">iPhone or iPad</td>
                    <td className="p-3">Safari</td>
                    <td className="p-3">Share button, then Add to Home Screen, then Add</td>
                  </tr>
                  <tr className="border-b align-top">
                    <td className="p-3 font-medium">Android phone</td>
                    <td className="p-3">Chrome</td>
                    <td className="p-3">Three-dot menu, then Install app (or Add to Home screen)</td>
                  </tr>
                  <tr className="align-top">
                    <td className="p-3 font-medium">Windows or Mac</td>
                    <td className="p-3">Chrome or Edge</td>
                    <td className="p-3">Install icon at the right end of the address bar, then Install</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Step-by-step instructions, and what the app can check, are on the{' '}
              <Link to="/app" className="text-primary underline">SafeOrStolen app page</Link>.
            </p>
          </div>
        </section>

        <section className="py-14 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <Smartphone className="w-6 h-6 text-primary mb-3" />
                <h2 className="text-xl font-bold mb-2">Why there's no store download</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  SafeOrStolen runs on the web, so the installed app is the website with its own icon and window. That means one
                  version for every phone, updates that arrive on their own, and nothing big to download over cell data while
                  you're waiting on a seller.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Monitor className="w-6 h-6 text-primary mb-3" />
                <h2 className="text-xl font-bold mb-2">You don't have to install anything</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Installing is optional. Every check works in a normal browser tab on safeorstolen.com. Pawn shops and dealers who
                  check many items usually work from a computer with <Link to="/bulk-check" className="text-primary underline">bulk check</Link>.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Download questions</h2>
            <div className="space-y-6">
              {FAQS.map((f) => (
                <div key={f.q}>
                  <h3 className="font-semibold text-lg mb-2">{f.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Button size="lg" variant="outline" asChild>
                <Link to="/verify">
                  Skip the install and run a check
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DownloadApp;
