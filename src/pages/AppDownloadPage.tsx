import { Link } from '@/lib/router-compat';
import { Shield, Zap, Camera, WifiOff, Star } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';

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
 desc: 'Same verification coverage as the web version — gun serial, IMEI, VIN, license plate, bike serial, and general serial numbers all in one app.',
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
 const appSchema = {
 "@context": "https://schema.org",
 "@type": "SoftwareApplication",
 "name": "SafeOrStolen",
 "applicationCategory": "UtilitiesApplication",
 "operatingSystem": "Any (PWA)",
 "url": "https://safeorstolen.com/app",
 "description": "Installable SafeOrStolen web app for verifying whether phones (IMEI), vehicles (VIN), license plates, serialized electronics, firearms, and bicycles are reported stolen. Includes barcode and serial scanning, with results in about 3 seconds.",
 "offers": [
 { "@type": "Offer", "name": "Free checks", "price": "0", "priceCurrency": "USD", "description": "2 free verifications, no credit card required" },
 { "@type": "Offer", "name": "Single check", "price": "0.99", "priceCurrency": "USD", "description": "One-time single verification" },
 { "@type": "Offer", "name": "Unlimited monthly", "price": "10.00", "priceCurrency": "USD", "description": "Unlimited verifications, $10 per month, cancel anytime" }
 ]
 };

 return (
 <>
 <div className="min-h-screen bg-gray-950 text-white pt-20">
 <PageSEO
 title="SafeOrStolen on Mobile - Install the Web App"
 description="Instantly verify guns, vehicles, phones, and more from your phone browser. Barcode scanning for on-the-spot verification at gun shows, pawn shops, and marketplaces."
 canonical="/app"
 structuredData={appSchema}
 />

 {/* Hero */}
 <section className="bg-gradient-to-b from-gray-900 to-gray-950 py-20 px-4 text-center">
 <div className="max-w-3xl mx-auto">
 <div className="text-5xl mb-6">📱</div>
 <h1 className="text-4xl md:text-5xl font-black mb-4">
 SafeOrStolen on Mobile
 </h1>
 <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
 Install SafeOrStolen from your phone browser and use the live barcode scanner.
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
 { emoji: '🏍️', title: 'Motorcycle & Bike Lots', desc: 'Scan VINs and bike serials on-the-spot. We check public stolen reports and integrate with BikeIndex for bicycle checks.' },
 { emoji: '🏦', title: 'Pawn Shop Counter', desc: 'Every customer transaction gets a barcode scan before you accept. Generate the compliance PDF right from the app.' },
 { emoji: '📦', title: 'Marketplace Meetups', desc: "When buying from Facebook Marketplace, OfferUp, or Craigslist — scan before you pay. The seller will see you're serious." },
 { emoji: '🚗', title: 'Used Car Lots', desc: 'Scan the VIN plate on the dashboard or door jamb. Get vehicle theft and title databases + vehicle theft and title databases + all state results in seconds.' },
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

 {/* What you can check */}
 <section className="py-16 px-4">
 <div className="max-w-3xl mx-auto">
 <h2 className="text-2xl font-black text-white text-center mb-8">
 Everything You Can Check From Your Phone
 </h2>
 <div className="rounded-2xl border border-gray-700 overflow-hidden">
 <ul className="divide-y divide-gray-800">
 {[
 'Barcode scanner for serials and IMEIs',
 'Firearm serial lookup',
 'VIN vehicle check',
 'IMEI phone check',
 'License plate lookup',
 'Bicycle serial check',
 'Marketplace listing URL analysis',
 'PDF verification certificate',
 '2 free checks, then $0.99/check or $10/mo unlimited',
 ].map((f, i) => (
 <li key={f} className={`flex items-center gap-3 py-3 px-4 text-sm text-gray-300 ${i % 2 === 0 ? 'bg-gray-900' : 'bg-gray-900/50'}`}>
 <span className="text-green-400 font-bold">✓</span>
 <span>{f}</span>
 </li>
 ))}
 </ul>
 </div>
 </div>
 </section>

 <section className="py-12 px-4 bg-gray-950 border-t border-gray-800">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-2xl font-bold text-white mb-4">More in the App</h2>
 <div className="grid sm:grid-cols-2 gap-4">
 <Link to="/app/stolen-phone-checker" className="block p-5 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-600 transition-colors">
 <h3 className="font-semibold text-white mb-1">Stolen Phone Checker</h3>
 <p className="text-sm text-gray-400">Check any phone by IMEI from your phone browser.</p>
 </Link>
 <Link to="/app/vin-checker" className="block p-5 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-600 transition-colors">
 <h3 className="font-semibold text-white mb-1">VIN Checker</h3>
 <p className="text-sm text-gray-400">Scan or type a VIN and get a theft result in seconds.</p>
 </Link>
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

 
 </div>
 </>
 );
}
