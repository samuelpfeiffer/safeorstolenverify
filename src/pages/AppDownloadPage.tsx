import { Link } from 'react-router-dom';
import { Shield, Zap, Camera, WifiOff, Star } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

const APP_FEATURES = [
  {
    icon: <Camera className="w-6 h-6" />,
    title: 'Barcode & QR Scanner',
    desc: 'Point your camera at any barcode or QR code to instantly extract and verify the serial number. No typing required — works at gun shows, garage sales, auction houses, and pawn shops.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: '3-Second Results On-the-Spot',
    desc: "Get full database results before you hand over any money. The app returns Trust Score, risk indicators, and source breakdown — all while you're still looking at the item.",
  },
  {
    icon: <WifiOff className="w-6 h-6" />,
    title: 'Offline Result Caching',
    desc: "Already checked an item? Results are cached locally. Useful when you're at a venue with spotty signal — check before you lose connection.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Full Database Access',
    desc: 'Same 100+ database coverage as the web version — gun serial, IMEI, VIN, license plate, bike serial, and general serial numbers all in one app.',
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Check History',
    desc: 'Every verification is saved in your history. Search, filter, and export your past checks — useful for pawn shops maintaining compliance records.',
  },
];

const STEPS = [
  { n: '1', title: 'Open this page on your phone', desc: 'Use Safari (iPhone) or Chrome (Android). Tap the install prompt that appears.' },
  { n: '2', title: 'Tap "Add to Home Screen"', desc: 'iPhone: tap the Share icon → "Add to Home Screen". Android: tap the three-dot menu → "Add to Home Screen" or "Install App".' },
  { n: '3', title: 'Launch from your home screen', desc: 'The SafeOrStolen icon appears on your home screen. Tap it to open the full-screen app — no browser bars, no distractions.' },
];

export default function AppDownloadPage() {
  return (
    <>
    <TopNavigation />
    <div className="min-h-screen bg-gray-950 text-white pt-20">
      <PageSEO
        title="Download SafeOrStolen Mobile App - iOS & Android"
        description="Instantly verify guns, vehicles, phones, and more. Features barcode scanning for on-the-spot verification at gun shows, pawn shops, and marketplaces."
        canonical="/app"
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-950 py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="text-5xl mb-6">📱</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            SafeOrStolen Mobile App
          </h1>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            The only stolen item verification app with a live barcode scanner.
            Check guns, phones, vehicles, and bikes on-the-spot — at gun shows,
            garage sales, pawn shops, and car lots.
          </p>

          {/* Install Instructions Highlight */}
          <div className="bg-blue-900/40 border border-blue-700 rounded-2xl p-6 mb-8 text-left max-w-xl mx-auto">
            <h2 className="text-blue-300 font-bold text-sm uppercase tracking-wide mb-3 text-center">
              📲 How to Install (Free)
            </h2>
            <div className="space-y-4">
              {STEPS.map((step) => (
                <div key={step.n} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-black text-sm flex items-center justify-center flex-shrink-0">
                    {step.n}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{step.title}</div>
                    <div className="text-gray-400 text-xs mt-0.5 leading-relaxed">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dual CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://safeorstolen.com"
              className="inline-flex items-center justify-center gap-3 bg-black border border-gray-600 hover:border-gray-400 text-white font-bold px-7 py-4 rounded-2xl transition-all"
            >
              <span className="text-2xl"></span>
              <div className="text-left">
                <div className="text-xs text-gray-400">Download on</div>
                <div className="text-base font-black">iPhone (iOS)</div>
              </div>
            </a>
            <a
              href="https://safeorstolen.com"
              className="inline-flex items-center justify-center gap-3 bg-black border border-gray-600 hover:border-gray-400 text-white font-bold px-7 py-4 rounded-2xl transition-all"
            >
              <span className="text-2xl">🤖</span>
              <div className="text-left">
                <div className="text-xs text-gray-400">Get it on</div>
                <div className="text-base font-black">Android</div>
              </div>
            </a>
          </div>

          <p className="text-gray-600 text-xs mt-4">
            PWA — installs directly from Safari or Chrome. No app store required.
            Always up-to-date automatically.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-white text-center mb-10">
            What the App Can Do
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {APP_FEATURES.map((f) => (
              <div key={f.title} className="bg-gray-900 border border-gray-700 rounded-2xl p-5">
                <div className="text-blue-400 mb-3">{f.icon}</div>
                <h3 className="text-white font-bold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use case scenarios */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-white text-center mb-10">
            Perfect For These Situations
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { emoji: '🔫', title: 'Gun Shows', desc: 'Scan firearm serial numbers before handing over cash at private sales. Results return before the seller loses patience.' },
              { emoji: '🏚️', title: 'Garage Sales & Estate Sales', desc: 'Quickly scan electronics, tools, and bikes. Protect yourself from unknowingly buying stolen goods from well-meaning estate sellers.' },
              { emoji: '🏍️', title: 'Motorcycle & Bike Lots', desc: 'Scan VINs and bike serials on-the-spot. Our BikeIndex integration covers 700,000+ registered bikes.' },
              { emoji: '🏦', title: 'Pawn Shop Counter', desc: 'Every customer transaction gets a barcode scan before you accept. Generate the compliance PDF right from the app.' },
              { emoji: '📦', title: 'Marketplace Meetups', desc: "When buying from Facebook Marketplace, OfferUp, or Craigslist — scan before you pay. The seller will see you're serious." },
              { emoji: '🚗', title: 'Used Car Lots', desc: 'Scan the VIN plate on the dashboard or door jamb. Get NICB + NHTSA + all state results in seconds.' },
            ].map((s) => (
              <div key={s.title} className="flex gap-4 bg-gray-800/60 border border-gray-700 rounded-xl p-4">
                <div className="text-3xl flex-shrink-0">{s.emoji}</div>
                <div>
                  <h3 className="text-white font-bold text-sm mb-1">{s.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitor comparison */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-black text-white text-center mb-8">
            The Only App That Does All of This
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gray-700">
            <table className="w-full text-sm">
              <thead className="bg-gray-800">
                <tr>
                  <th className="text-left py-3 px-4 text-gray-300 font-semibold">Feature</th>
                  <th className="text-center py-3 px-3 text-blue-400 font-bold">SafeOrStolen</th>
                  <th className="text-center py-3 px-3 text-gray-400">CheckMEND</th>
                  <th className="text-center py-3 px-3 text-gray-400">NICB</th>
                  <th className="text-center py-3 px-3 text-gray-400">50-state firearm theft reports</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { f: 'Barcode scanner', sos: '✓', cm: '—', nicb: '—', hg: '—' },
                  { f: 'Gun serial lookup', sos: '✓', cm: '—', nicb: '—', hg: '✓' },
                  { f: 'VIN vehicle check', sos: '✓', cm: '—', nicb: '✓', hg: '—' },
                  { f: 'IMEI phone check', sos: '✓', cm: '✓', nicb: '—', hg: '—' },
                  { f: 'License plate lookup', sos: '✓', cm: '—', nicb: '—', hg: '—' },
                  { f: 'Bike serial check', sos: '✓', cm: '—', nicb: '—', hg: '—' },
                  { f: '100+ databases', sos: '✓', cm: '—', nicb: '—', hg: '—' },
                  { f: 'PDF certificate', sos: '✓', cm: '✓', nicb: '—', hg: '—' },
                  { f: 'Subscription', sos: '$10/mo unlimited', cm: '$1.99+/check', nicb: 'Free (1 source)', hg: 'Free (1 source)' },
                ].map((row, i) => (
                  <tr key={row.f} className={i % 2 === 0 ? 'bg-gray-900' : 'bg-gray-900/50'}>
                    <td className="py-3 px-4 text-gray-300 text-xs">{row.f}</td>
                    <td className={`py-3 px-3 text-center text-xs font-bold ${row.sos === '✓' ? 'text-green-400' : 'text-blue-300'}`}>{row.sos}</td>
                    <td className={`py-3 px-3 text-center text-xs ${row.cm === '✓' ? 'text-green-400' : row.cm === '—' ? 'text-gray-600' : 'text-gray-300'}`}>{row.cm}</td>
                    <td className={`py-3 px-3 text-center text-xs ${row.nicb === '✓' ? 'text-green-400' : row.nicb === '—' ? 'text-gray-600' : 'text-gray-300'}`}>{row.nicb}</td>
                    <td className={`py-3 px-3 text-center text-xs ${row.hg === '✓' ? 'text-green-400' : row.hg === '—' ? 'text-gray-600' : 'text-gray-300'}`}>{row.hg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final install CTA */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-gray-950 text-center">
        <div className="max-w-xl mx-auto">
          <div className="text-4xl mb-4">📲</div>
          <h2 className="text-3xl font-black text-white mb-3">
            Install Free in 30 Seconds
          </h2>
          <p className="text-gray-300 mb-6">
            Open safeorstolen.com in Safari or Chrome on your phone. 
            Tap the share button. Tap "Add to Home Screen". Done.
          </p>
          <Link
            to="/verify"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-2xl transition-all"
          >
            <Shield className="w-5 h-5" />
            Open Verify Tool Now
          </Link>
          <p className="text-gray-600 text-xs mt-3">
            Works on iOS 16.4+ and Android Chrome 105+
          </p>
        </div>
      </section>

      {/* App Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            "name": "SafeOrStolen",
            "applicationCategory": "SecurityApplication",
            "operatingSystem": ["iOS", "Android"],
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
            "description": "Instantly verify guns, vehicles, phones, and more against 100+ stolen property databases. Features barcode scanning for on-the-spot verification at gun shows, pawn shops, and marketplaces.",
            "url": "https://safeorstolen.com/app",
            "installUrl": "https://safeorstolen.com",
            "featureList": [
              "Barcode and QR code scanning",
              "Gun serial number lookup",
              "Vehicle VIN check",
              "Phone IMEI verification",
              "License plate lookup",
              "Offline result caching",
              "PDF certificate download"
            ]
          })
        }}
      />
    </div>
    <Footer />
    </>
  );
}
