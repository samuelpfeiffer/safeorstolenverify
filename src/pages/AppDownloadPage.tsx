/**
 * Oct 7 2026: rewritten by hand for "app to check gun serial number" / "app to check if something is
 * stolen" (the /app searches: "app to check gun serial number" ~30 impressions at position ~13,
 * brand "safe or stolen" at position 1). Renders at /app (src/routes/app.index.tsx) and /download-app.
 * Install steps match what the site actually ships: an installable web app (manifest + service
 * worker), no App Store or Google Play listing. Removed: "34 states" (it's 33 states plus DC),
 * the iOS/Chrome version claim, "full database access", the listing-URL-analysis bullet, emoji.
 */
import { Link } from '@/lib/router-compat';
import { Shield, Camera, Smartphone, Clock, FileText } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';

const WHAT_YOU_CAN_CHECK: { item: string; number: string; searched: string }[] = [
  {
    item: 'Gun',
    number: 'Serial on the frame or receiver',
    searched:
      '242,839 police firearm theft and loss reports from 33 states and Washington, DC (filed through 2017; the years covered vary by state), live Ohio law-enforcement records, SafeOrStolen theft reports and public web results. Serials that look altered are flagged.',
  },
  {
    item: 'Phone',
    number: 'IMEI (dial *#06#)',
    searched: 'Make and model from the IMEI, SafeOrStolen theft reports and public web results. The carrier lost/stolen blacklist check is a paid add-on.',
  },
  {
    item: 'Car, truck or motorcycle',
    number: 'VIN on the dashboard or door jamb',
    searched: 'Year, make and model, open safety recalls, SafeOrStolen theft reports. Arizona VINs also go against Arizona law-enforcement stolen-vehicle records.',
  },
  {
    item: 'License plate',
    number: 'Plate number and state',
    searched: 'SafeOrStolen theft reports; Arizona plates also against Arizona law-enforcement records. No owner names.',
  },
  {
    item: 'Bike',
    number: 'Serial under the bottom bracket',
    searched: 'A national stolen-bicycle registry, SafeOrStolen theft reports and public web results.',
  },
  {
    item: 'Laptop, tool, camera, console',
    number: 'Serial on the label or nameplate',
    searched: 'SafeOrStolen theft reports and public web results that mention the serial.',
  },
];

const IPHONE_STEPS = [
  'Open safeorstolen.com/app in Safari. (Add to Home Screen works best from Safari.)',
  'Tap the Share button, the square with an arrow pointing up. On iPhone it sits in the bottom toolbar.',
  'Scroll down the share sheet and tap Add to Home Screen.',
  'Tap Add in the top right. The SafeOrStolen icon appears on your home screen.',
];

const ANDROID_STEPS = [
  'Open safeorstolen.com/app in Chrome.',
  'If Chrome shows an install banner at the bottom, tap Install. If not, tap the three-dot menu in the top right.',
  'Tap Install app (on some phones it says Add to Home screen).',
  'Confirm with Install. The icon shows up with your other apps.',
];

const APP_FAQS: { q: string; a: string }[] = [
  {
    q: 'Is there an app to check if something is stolen?',
    a: "Yes. SafeOrStolen (safeorstolen.com/app) is a free web app you add to your phone's home screen from Safari or Chrome, with no App Store or Google Play download. Type in a serial number, IMEI, VIN or plate and it tells you in a few seconds whether the item is reported stolen in the records it searched. The first 2 checks are free with an account.",
  },
  {
    q: 'Is there an app to check a gun serial number?',
    a: 'Yes. In the SafeOrStolen app, enter the serial number from the frame or receiver. It searches 242,839 police firearm theft and loss reports from 33 states and Washington, DC, live Ohio law-enforcement records, and SafeOrStolen theft reports, and flags serials that look altered. It does not search NCIC or ATF eTrace, which only police can use.',
  },
  {
    q: 'Is the SafeOrStolen app on the App Store or Google Play?',
    a: "No. SafeOrStolen is an installable web app, not a store app. On iPhone, open safeorstolen.com/app in Safari, tap Share, then Add to Home Screen. On Android, open it in Chrome and tap Install app from the menu. Any app in the stores using the SafeOrStolen name isn't from SafeOrStolen.",
  },
  {
    q: 'Is the SafeOrStolen app free?',
    a: 'Installing it is free, and a free account includes 2 checks with no credit card. After that, a single check is $0.99, or $10 a month gets unlimited checks (with up to 20 phone blacklist checks a month). The monthly plan can be canceled anytime and has a 30-day refund.',
  },
  {
    q: 'Does the SafeOrStolen app work offline?',
    a: "No. A check needs an internet connection, because it searches records online in the moment. At a meetup with weak signal, ask the seller to text you the serial, IMEI or VIN beforehand and run the check before you leave home. Your past checks are saved in your account.",
  },
  {
    q: 'Can I check an IMEI with the app?',
    a: "Yes. Dial *#06# on the phone you're buying, or look in Settings > General > About on an iPhone, then enter the IMEI. You get the make and model and any SafeOrStolen theft reports. The carrier lost/stolen blacklist check is a paid add-on. The app can't see Activation Lock, so have the seller sign out of their Apple or Google account in front of you.",
  },
];

export default function AppDownloadPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: APP_FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
  const appSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'SafeOrStolen',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any (installable web app for iPhone, Android and desktop browsers)',
    url: 'https://safeorstolen.com/app',
    dateModified: '2026-10-07',
    description:
      'Installable web app for checking whether a gun serial number, phone IMEI, VIN, license plate, bike serial or other serial number has been reported stolen.',
    offers: [
      { '@type': 'Offer', name: 'Free account', price: '0', priceCurrency: 'USD', description: '2 free checks, no credit card' },
      { '@type': 'Offer', name: 'Single check', price: '0.99', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Monthly', price: '10.00', priceCurrency: 'USD', description: 'Unlimited checks, cancel anytime' },
    ],
  };

  return (
    <>
      <div className="min-h-screen bg-gray-950 text-white pt-20">
        <PageSEO
          title="App to Check Gun Serial Numbers, IMEI & VIN for Theft"
          description="Free app to check if a gun, phone, car or bike is stolen. Install SafeOrStolen from Safari or Chrome in under a minute and run a serial, IMEI or VIN check."
          keywords="app to check gun serial number, free app to check gun serial number, app to check if something is stolen, stolen item checker app, imei checker app, vin checker app, safe or stolen app"
          canonical="/app"
          modifiedTime="2026-10-07"
          structuredData={[appSchema, faqSchema]}
        />

        {/* Hero */}
        <section className="bg-gradient-to-b from-gray-900 to-gray-950 py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-black mb-4 text-center">App to Check a Gun Serial Number, IMEI or VIN</h1>
            <p className="text-gray-400 text-xs text-center mb-6">Updated October 7, 2026</p>
            <p className="text-gray-200 text-lg mb-4">
              SafeOrStolen is a free web app you add to your phone's home screen. Enter a gun serial number, a phone's IMEI, a VIN,
              a plate or any serial number, and in a few seconds it tells you if the item is reported stolen in the records it
              searches, with each source listed. It isn't in the App Store or Google Play. You install it straight from Safari or
              Chrome, and the first 2 checks are free.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <Link
                to="/verify"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition-colors"
              >
                <Shield className="w-5 h-5" />
                Run a check now
              </Link>
              <a
                href="#install"
                className="inline-flex items-center justify-center gap-2 border border-gray-600 hover:border-gray-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                <Smartphone className="w-5 h-5" />
                How to install it
              </a>
            </div>
          </div>
        </section>

        {/* Install */}
        <section id="install" className="py-16 px-4 scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-white mb-3">How to install the app</h2>
            <p className="text-gray-400 mb-8">
              It takes under a minute. There's nothing to download from a store, and the app updates itself whenever the site
              changes.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6">
                <h3 className="text-white font-bold text-xl mb-4">iPhone or iPad (Safari)</h3>
                <ol className="list-decimal pl-5 space-y-3 text-gray-300 text-sm leading-relaxed">
                  {IPHONE_STEPS.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ol>
              </div>
              <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6">
                <h3 className="text-white font-bold text-xl mb-4">Android (Chrome)</h3>
                <ol className="list-decimal pl-5 space-y-3 text-gray-300 text-sm leading-relaxed">
                  {ANDROID_STEPS.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ol>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-6">
              On a computer, Chrome and Edge show a small install icon at the right end of the address bar. Click it, then Install.
              Opened from the home screen, SafeOrStolen runs full screen without the browser's address bar.
            </p>
          </div>
        </section>

        {/* What you can check */}
        <section className="py-16 px-4 bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-black text-white mb-3">What you can check from the app</h2>
            <p className="text-gray-400 mb-6">
              The app runs the same checks as the website. Here's what each one searches.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-gray-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-800 text-left">
                    <th className="p-3 text-white">Item</th>
                    <th className="p-3 text-white">Number you need</th>
                    <th className="p-3 text-white">What gets searched</th>
                  </tr>
                </thead>
                <tbody>
                  {WHAT_YOU_CAN_CHECK.map((r) => (
                    <tr key={r.item} className="border-t border-gray-800 align-top">
                      <td className="p-3 font-semibold text-white whitespace-nowrap">{r.item}</td>
                      <td className="p-3 text-gray-300">{r.number}</td>
                      <td className="p-3 text-gray-400">{r.searched}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Not searched: NCIC, ATF eTrace, DMV records, Activation Lock or Google account status, pawn or insurance databases.
              Every result says which sources were checked.
            </p>
          </div>
        </section>

        {/* Features, plainly */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-5">
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-5">
              <Camera className="w-6 h-6 text-blue-400 mb-3" />
              <h3 className="text-white font-bold mb-2">Scan instead of typing</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Signed in, you can point the camera at a barcode, like the IMEI sticker on a phone box, instead of typing a long
                number. Gun serials and VINs stamped in metal are quicker to type.
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-5">
              <Clock className="w-6 h-6 text-blue-400 mb-3" />
              <h3 className="text-white font-bold mb-2">Saved with the date</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Each check is saved to your account with the date and time, so you can pull it up later if anyone asks whether you
                checked before you bought.
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-700 rounded-2xl p-5">
              <FileText className="w-6 h-6 text-blue-400 mb-3" />
              <h3 className="text-white font-bold mb-2">Certificate for the sale</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Add a $1.99 verification certificate to a check, free for monthly members. It's a dated record with its own link
                showing you checked before the sale.
              </p>
            </div>
          </div>
        </section>

        {/* At the meetup */}
        <section className="py-16 px-4 bg-gray-900">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-white mb-6">Using it at a meetup or gun show</h2>
            <ol className="list-decimal pl-5 space-y-3 text-gray-300 leading-relaxed">
              <li>Before you go, ask the seller to text you the serial, IMEI or VIN, plus a photo of where it's stamped.</li>
              <li>Run the check at home on a good connection. If it comes back reported stolen, don't go.</li>
              <li>At the meetup, read the number off the item yourself and make sure it matches the photo. A scratched or ground-down serial is a reason to walk away.</li>
              <li>For a phone, have the seller sign out of their Apple ID or Google account and reset it while you watch.</li>
              <li>Keep the result in your account. If you're buying a gun privately, follow your state's transfer rules too; a clean check doesn't replace them.</li>
            </ol>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black text-white mb-8">Questions about the app</h2>
            <div className="space-y-4">
              {APP_FAQS.map((f) => (
                <div key={f.q} className="rounded-2xl border border-gray-700 bg-gray-900 p-5">
                  <h3 className="text-white font-bold mb-2">{f.q}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-gray-950 border-t border-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Go straight to a check</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link to="/app/stolen-phone-checker" className="block p-5 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-600 transition-colors">
                <h3 className="font-semibold text-white mb-1">Stolen phone checker</h3>
                <p className="text-sm text-gray-400">Check a phone by its IMEI.</p>
              </Link>
              <Link to="/app/vin-checker" className="block p-5 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-600 transition-colors">
                <h3 className="font-semibold text-white mb-1">VIN checker</h3>
                <p className="text-sm text-gray-400">Decode a VIN and check it for theft reports and recalls.</p>
              </Link>
            </div>
            <div className="text-center mt-10">
              <Link
                to="/verify"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-2xl transition-colors"
              >
                <Shield className="w-5 h-5" />
                Run a check
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
