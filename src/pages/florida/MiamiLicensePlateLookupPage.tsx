import { Link } from '@/lib/router-compat';
import { CheckCircle, ArrowRight, MapPin, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';

/** Oct 8 2026 audit: copy rewritten by hand. Removed "AI analysis" as a source, invented Miami
 * theft counts, false claims that plates are run through FLHSMV, NMVTIS, insurer and salvage
 * records, the wrong "$1 per month" price, "3 seconds", and an off-site government URL. */

const FAQS = [
 {
 q: 'How do I check if a car is stolen in Miami?',
 a: "Enter the Florida plate or, better, the 17-character VIN on SafeOrStolen (safeorstolen.com/florida/miami-license-plate-lookup). In a few seconds it searches SafeOrStolen theft reports and public web results, and a VIN check also decodes the year, make and model and lists open recalls. You get 2 free checks with a free account, no credit card.",
 },
 {
 q: 'Does SafeOrStolen search Florida DHSMV or Miami-Dade police records?',
 a: "No. SafeOrStolen does not search FLHSMV registration or title records, NCIC, or Miami-Dade police files. A Florida plate is checked against SafeOrStolen theft reports and public web results. If you need official title or theft confirmation, contact FLHSMV or the Miami-Dade Police Department directly.",
 },
 {
 q: 'Can I check a vehicle by license plate or do I need a VIN?',
 a: "You can search either one. A plate search looks for that plate in SafeOrStolen theft reports and public web results, and it never shows the owner's name. Plates can be swapped between cars, so ask for the VIN as well; the VIN check also confirms the year, make and model match the car you're looking at.",
 },
 {
 q: "Is SafeOrStolen's Florida license plate lookup free?",
 a: "Your first 2 checks are free with a free account and no credit card. After that a single check is $0.99, or $10 a month gets you unlimited checks, cancel anytime. Every check is saved to your account with the date.",
 },
];

const MiamiLicensePlateLookupPage = () => {
 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": FAQS.map(f => ({
 "@type": "Question",
 "name": f.q,
 "acceptedAnswer": { "@type": "Answer", "text": f.a },
 })),
 };

 const webPageSchema = {
 "@context": "https://schema.org",
 "@type": "WebPage",
 "name": "Free Miami FL License Plate Lookup",
 "description": "Check a Miami-Dade vehicle's plate or VIN against SafeOrStolen theft reports and public web results before you buy.",
 "url": "https://safeorstolen.com/florida/miami-license-plate-lookup",
 "speakable": {
 "@type": "SpeakableSpecification",
 "cssSelector": ["h1", ".speakable-summary"]
 }
 };

 return (
 <>
 <PageSEO
 title="Free Miami FL License Plate Lookup — Check Stolen Vehicles in Miami | SafeOrStolen"
 description="Free Miami license plate lookup. Search a Florida plate or VIN against SafeOrStolen theft reports and public web results in a few seconds before you buy a used car."
 canonical="/florida/miami-license-plate-lookup"
 structuredData={[faqSchema, webPageSchema]}
 />
 <div className="min-h-screen bg-background pt-20">
 <header className="py-12 px-4 bg-gradient-to-b from-muted to-background">
 <div className="max-w-3xl mx-auto text-center">
 <div className="flex items-center justify-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-3">
 <MapPin className="h-4 w-4" /> Miami-Dade County, Florida
 </div>
 <h1 className="text-4xl md:text-5xl font-black mb-4">Free Miami License Plate Lookup</h1>
 <p className="speakable-summary text-muted-foreground text-lg max-w-2xl mx-auto">
 Type a Florida plate or VIN and SafeOrStolen searches its own theft reports and public web results for it in a few seconds. A VIN check also confirms the year, make and model and lists open recalls. It never shows the owner's name.
 </p>
 </div>
 </header>

 <section aria-label="License plate lookup tool" className="py-8 px-4">
 <div className="max-w-xl mx-auto text-center">
 <Link to="/verify?type=plate&state=FL">
 <Button size="lg" className="text-lg px-8 py-6 font-bold">
 Check Miami Vehicle Now <ArrowRight className="ml-2 h-5 w-5" />
 </Button>
 </Link>
 <p className="text-muted-foreground text-sm mt-3">2 free checks · No credit card · Pre-set to Florida</p>
 </div>
 </section>

 <article className="max-w-3xl mx-auto px-4 pb-16">
 <section className="mb-10">
 <h2 className="text-2xl font-bold text-foreground mb-4">Why Check a Car Before Buying in Miami</h2>
 <p className="text-muted-foreground leading-relaxed mb-4">
 Most private used-car sales in Miami-Dade start on Facebook Marketplace, Craigslist or OfferUp and end in a parking lot in Hialeah, Kendall or Doral. If the car turns out to be stolen, police can return it to the owner and you are left chasing the seller for your money.
 </p>
 <p className="text-muted-foreground leading-relaxed mb-4">
 Warning signs to watch for: a seller who wants to meet somewhere other than their home, a title that isn't in the seller's name, a paper tag on a car that's supposedly been owned for years, a cracked steering column or a key that looks like a cheap copy, and a price that's well under what the same model sells for elsewhere.
 </p>
 <p className="text-muted-foreground leading-relaxed">
 Run the plate when you first see the listing, then ask for the VIN and check that too. At the meetup, match the VIN on the dashboard, the driver's door sticker and the title before any money changes hands.
 </p>
 </section>

 <section className="mb-10">
 <h2 className="text-2xl font-bold text-foreground mb-4">What a Miami Plate or VIN Check Searches</h2>
 <ul className="space-y-3 mb-6">
 {[
 { name: 'SafeOrStolen theft reports', desc: 'thefts that owners have reported on SafeOrStolen' },
 { name: 'Public web results', desc: 'listings and posts online that mention the plate or VIN' },
 { name: 'VIN decode and recalls (VIN checks)', desc: 'the year, make and model, plus any open safety recalls' },
 ].map(db => (
 <li key={db.name} className="flex gap-3 bg-card/50 border border-border rounded-xl p-4">
 <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
 <div>
 <strong className="text-foreground">{db.name}</strong>
 <span className="text-muted-foreground"> — {db.desc}</span>
 </div>
 </li>
 ))}
 </ul>
 <h3 className="text-lg font-bold text-foreground mb-3">What it does not search</h3>
 <ul className="space-y-3">
 {[
 { name: 'FLHSMV records', desc: 'registration, title and owner records stay with the state; ask FLHSMV' },
 { name: 'Police and NCIC files', desc: 'call the Miami-Dade Police Department non-emergency line for an official answer' },
 { name: 'Title and salvage history', desc: 'buy a separate vehicle history report if you need flood or salvage brands' },
 ].map(db => (
 <li key={db.name} className="flex gap-3 bg-card/50 border border-border rounded-xl p-4">
 <XCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
 <div>
 <strong className="text-foreground">{db.name}</strong>
 <span className="text-muted-foreground"> — {db.desc}</span>
 </div>
 </li>
 ))}
 </ul>
 </section>

 <section className="mb-10">
 <h2 className="text-2xl font-bold text-foreground mb-4">How to Check a Miami Vehicle</h2>
 <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
 <li>Enter the Florida plate number from the listing or the car itself</li>
 <li>Ask the seller for the VIN and run that too; it's on the dashboard near the windshield and on the driver's door jamb</li>
 <li>Read the result: "reported stolen", "possible match" or "no report found in the records searched", with each source listed</li>
 <li>At the meetup, match the VIN on the car to the title and check the seller's ID against the name on the title</li>
 </ol>
 </section>

 <section className="mb-10">
 <h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
 <div className="space-y-3">
 {FAQS.map(f => (
 <details key={f.q} className="bg-card/50 border border-border rounded-xl p-4">
 <summary className="font-semibold text-foreground cursor-pointer">{f.q}</summary>
 <p className="text-muted-foreground mt-2">{f.a}</p>
 </details>
 ))}
 </div>
 </section>

 <section className="mb-10">
 <h2 className="text-2xl font-bold text-foreground mb-4">Check Vehicles in Other Florida Cities</h2>
 <div className="flex flex-wrap gap-3">
 {[
 { name: 'Jacksonville', href: '/florida/jacksonville-license-plate-lookup' },
 { name: 'Orlando', href: '/florida/orlando-license-plate-lookup' },
 { name: 'Tampa', href: '/florida/tampa-license-plate-lookup' },
 { name: 'Destin', href: '/florida/destin-license-plate-lookup' },
 { name: 'All Florida', href: '/florida-license-plate-lookup' },
 ].map(city => (
 <Link key={city.name} to={city.href} className="text-primary hover:underline font-medium">{city.name}</Link>
 ))}
 </div>
 <h3 className="text-lg font-bold text-foreground mt-6 mb-2">Other Verification Tools</h3>
 <div className="flex flex-wrap gap-3">
 <Link to="/vin-checker" className="text-primary hover:underline">VIN Lookup</Link>
 <Link to="/imei-checker" className="text-primary hover:underline">Phone IMEI Check</Link>
 <Link to="/firearms-check" className="text-primary hover:underline">Gun Serial Number Lookup</Link>
 <Link to="/scam-checker" className="text-primary hover:underline">Listing Scam Checker</Link>
 </div>
 </section>
 </article>
 </div>
 </>
 );
};

export default MiamiLicensePlateLookupPage;
