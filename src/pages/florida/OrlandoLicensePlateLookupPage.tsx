/**
 * Oct 8 2026: copy rewritten by hand for "orlando license plate lookup". Removed: "AI analysis" as a
 * source, "3 seconds"/"instant", the tourist count, "thousands of vehicle thefts", claims that the check
 * searches title, total-loss, rental and fleet databases or "databases across all I-4 cities", and the
 * unsupported claim that cars stolen in Orlando show up in Tampa "within hours".
 */
import { Link } from '@/lib/router-compat';
import { CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';

const faqs = [
 {
 question: "How do I check if a car is stolen in Orlando?",
 answer: "Enter the Florida plate or the 17-character VIN on SafeOrStolen (safeorstolen.com/florida/orlando-license-plate-lookup). It searches SafeOrStolen's own theft reports and public web results, such as listings and posts that mention that plate or VIN, and shows the answer in a few seconds with every source listed. Your first 2 checks are free.",
 },
 {
 question: "Will an Orlando plate lookup show who owns the car?",
 answer: "No. SafeOrStolen never shows owner names or addresses. In Florida, owner details from a plate are protected by the federal Driver's Privacy Protection Act and go to police, insurers and courts for permitted purposes. If a car hit yours or you have a safety concern, give the plate to the Orlando Police Department or the Orange County Sheriff's Office.",
 },
 {
 question: "How can I tell if a used car in Orlando is a former rental?",
 answer: "Ask the seller directly and look at the paperwork: a former rental often shows a rental or fleet company as a previous owner on a vehicle history report. SafeOrStolen doesn't search rental or fleet records. Use it to check for theft reports, and use a paid history report if rental use matters to you.",
 },
 {
 question: "Is a license plate lookup free in Orlando?",
 answer: "Yes, for your first 2 checks. Create a free SafeOrStolen account, no credit card, and you can check 2 plates or VINs. After that, a single check is $0.99, or $10 a month gets you unlimited checks. You can cancel the monthly plan anytime.",
 },
 {
 question: "Should I check the plate or the VIN?",
 answer: "Both. A plate can be taken off one car and put on another, but the VIN stays with the vehicle. Check the plate first, then find the VIN at the bottom of the windshield on the driver's side and on the driver's door sticker. A VIN check also decodes the year, make and model and lists open safety recalls.",
 },
];

const OrlandoLicensePlateLookupPage = () => {
 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": faqs.map((f) => ({
 "@type": "Question",
 "name": f.question,
 "acceptedAnswer": { "@type": "Answer", "text": f.answer },
 })),
 };

 return (
 <>
 <PageSEO
 title="Orlando License Plate Lookup: Free Stolen Car Check | SafeOrStolen"
 description="Free Orlando license plate lookup: check if a car in Orange County has been reported stolen before you buy. 2 free checks, results in a few seconds, no owner data."
 canonical="/florida/orlando-license-plate-lookup"
 structuredData={[faqSchema]}
 />
 <div className="min-h-screen bg-background pt-20">
 <header className="py-12 px-4 bg-gradient-to-b from-muted to-background">
 <div className="max-w-3xl mx-auto text-center">
 <div className="flex items-center justify-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-3">
 <MapPin className="h-4 w-4" /> Orange County, Florida
 </div>
 <h1 className="text-4xl md:text-5xl font-black mb-4">Free Orlando License Plate Lookup</h1>
 <p className="speakable-summary text-muted-foreground text-lg max-w-2xl mx-auto">
 Enter a Florida plate or VIN and SafeOrStolen searches its own theft reports and public web results for it. You'll know in a few seconds whether it's been reported stolen.
 </p>
 </div>
 </header>

 <section className="py-8 px-4">
 <div className="max-w-xl mx-auto text-center">
 <Link to="/verify?type=plate&state=FL">
 <Button size="lg" className="text-lg px-8 py-6 font-bold">
 Check an Orlando plate <ArrowRight className="ml-2 h-5 w-5" />
 </Button>
 </Link>
 <p className="text-muted-foreground text-sm mt-3">2 free checks · No credit card</p>
 </div>
 </section>

 <article className="max-w-3xl mx-auto px-4 pb-16">
 <section className="mb-10">
 <h2 className="text-2xl font-bold text-foreground mb-4">Why check a car before you buy in Orlando</h2>
 <p className="text-muted-foreground leading-relaxed mb-4">
 Orlando has a huge rental fleet, and a lot of those cars end up on the used market. That's not a problem by itself, but it means you should ask how the car was used and look at the paperwork, not just the paint.
 </p>
 <p className="text-muted-foreground leading-relaxed mb-4">
 I-4 runs from Tampa through Orlando to Daytona Beach, so a car listed in Kissimmee or Winter Park may have come from anywhere along it. Meet at the seller's home or a police station parking lot, ask for the title before you look at the car, and make sure the name on it matches the seller's ID.
 </p>
 <p className="text-muted-foreground leading-relaxed">
 Then check the plate and the VIN. Look at the VIN plate at the base of the windshield: scratches, loose rivets or a sticker over it are reasons to walk away.
 </p>
 </section>

 <section className="mb-10">
 <h2 className="text-2xl font-bold text-foreground mb-4">What the Orlando lookup searches</h2>
 <ul className="space-y-3">
 {[
 { name: 'SafeOrStolen theft reports', desc: 'Thefts that owners have reported on SafeOrStolen' },
 { name: 'Public web results', desc: 'Listings and posts online that mention the plate or VIN' },
 { name: 'VIN decode and recalls', desc: 'When you enter a VIN: year, make, model and open safety recalls' },
 ].map(db => (
 <li key={db.name} className="flex gap-3 bg-card/50 border border-border rounded-xl p-4">
 <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
 <div><strong className="text-foreground">{db.name}</strong><span className="text-muted-foreground"> — {db.desc}</span></div>
 </li>
 ))}
 </ul>
 <p className="text-muted-foreground text-sm mt-4">
 It does not search FHSMV registration records, NCIC, or insurer databases, and it never shows owner names.
 </p>
 </section>

 <section className="mb-10">
 <h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
 <div className="space-y-3">
 {faqs.map((f) => (
 <details key={f.question} className="bg-card/50 border border-border rounded-xl p-4">
 <summary className="font-semibold text-foreground cursor-pointer">{f.question}</summary>
 <p className="text-muted-foreground mt-2">{f.answer}</p>
 </details>
 ))}
 </div>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mb-4">Check Vehicles in Other Florida Cities</h2>
 <div className="flex flex-wrap gap-3">
 {[
 { name: 'Miami', href: '/florida/miami-license-plate-lookup' },
 { name: 'Jacksonville', href: '/florida/jacksonville-license-plate-lookup' },
 { name: 'Tampa', href: '/florida/tampa-license-plate-lookup' },
 { name: 'Destin', href: '/florida/destin-license-plate-lookup' },
 { name: 'All Florida', href: '/florida-license-plate-lookup' },
 ].map(city => (
 <Link key={city.name} to={city.href} className="text-primary hover:underline font-medium">{city.name}</Link>
 ))}
 </div>
 </section>
 </article>
 </div>
 </>
 );
};

export default OrlandoLicensePlateLookupPage;
