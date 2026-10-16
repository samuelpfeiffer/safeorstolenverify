import { Link } from '@/lib/router-compat';
import { CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';

const FAQS = [
 {
 q: "How do I check if a car is stolen in Jacksonville, FL?",
 a: "Enter the Florida plate or, better, the VIN on SafeOrStolen (safeorstolen.com/florida/jacksonville-license-plate-lookup). A plate check searches SafeOrStolen theft reports and public web results. A VIN check also decodes the year, make and model and lists open recalls. Results take a few seconds, and the first 2 checks are free with no credit card."
 },
 {
 q: "Why check a used car before buying in Jacksonville?",
 a: "Jacksonville is the largest city by land area in the contiguous U.S. and sits on I-95, so cars for sale here come from all over Florida and up the East Coast. A car that turns out to be stolen is usually seized and returned to its owner, and the buyer is left chasing the seller for the money."
 },
 {
 q: "Does SafeOrStolen check Jacksonville Sheriff's Office or FLHSMV records?",
 a: "No. SafeOrStolen does not search Jacksonville Sheriff's Office, FLHSMV or NCIC records. It searches its own theft reports and public web results, and for VINs it adds the decoded year, make, model and open recalls. To confirm a report, call JSO's non-emergency line. For title and lien status, contact FLHSMV or the Duval County Tax Collector."
 },
 {
 q: "Is a license plate lookup enough or should I also check the VIN?",
 a: "Check both. Plates come off easily, and a stolen car can wear plates from a different vehicle. Run the plate and the VIN on SafeOrStolen, then make sure the VIN on the dashboard and driver's door jamb matches the title and registration the seller shows you."
 }
];

const JacksonvilleLicensePlateLookupPage = () => {
 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": FAQS.map(f => ({
 "@type": "Question",
 "name": f.q,
 "acceptedAnswer": { "@type": "Answer", "text": f.a }
 }))
 };

 return (
 <>
 <PageSEO
 title="Free Jacksonville FL License Plate Lookup — Check Stolen Vehicles | SafeOrStolen"
 description="Free Jacksonville, FL license plate lookup. Check a Duval County plate or VIN against SafeOrStolen theft reports and public web results in a few seconds."
 canonical="/florida/jacksonville-license-plate-lookup"
 structuredData={[faqSchema]}
 />
 <div className="min-h-screen bg-background pt-20">
 <header className="py-12 px-4 bg-gradient-to-b from-muted to-background">
 <div className="max-w-3xl mx-auto text-center">
 <div className="flex items-center justify-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-3">
 <MapPin className="h-4 w-4" /> Duval County, Florida
 </div>
 <h1 className="text-4xl md:text-5xl font-black mb-4">Free Jacksonville License Plate Lookup</h1>
 <p className="speakable-summary text-muted-foreground text-lg max-w-2xl mx-auto">
 Buying a used car in Jacksonville? Check the plate and the VIN against SafeOrStolen theft reports and public web results. Results take a few seconds, and the first 2 checks are free.
 </p>
 </div>
 </header>

 <section className="py-8 px-4">
 <div className="max-w-xl mx-auto text-center">
 <Link to="/verify?type=plate&state=FL">
 <Button size="lg" className="text-lg px-8 py-6 font-bold">
 Check Jacksonville Vehicle Now <ArrowRight className="ml-2 h-5 w-5" />
 </Button>
 </Link>
 <p className="text-muted-foreground text-sm mt-3">2 free checks · No credit card · Pre-set to Florida</p>
 </div>
 </section>

 <article className="max-w-3xl mx-auto px-4 pb-16">
 <section className="mb-10">
 <h2 className="text-2xl font-bold text-foreground mb-4">Why Check Vehicles in Jacksonville?</h2>
 <p className="text-muted-foreground leading-relaxed mb-4">
 Jacksonville covers more land than any other city in the contiguous United States, so a private sale might mean a drive from Arlington out to the Westside or down to Mandarin. Ask for the plate and VIN before you make that trip and check them first.
 </p>
 <p className="text-muted-foreground leading-relaxed mb-4">
 The city sits on I-95 and I-10, and cars for sale here can come from South Florida, Georgia or further up the coast. Out-of-state titles are common, which is one more reason to match the VIN on the car to the paperwork.
 </p>
 <p className="text-muted-foreground leading-relaxed">
 After a hurricane season, flood-damaged cars also turn up for sale. SafeOrStolen won't show flood or salvage brands, so for title history get a vehicle history report and ask FLHSMV or the Duval County Tax Collector about the title.
 </p>
 </section>

 <section className="mb-10">
 <h2 className="text-2xl font-bold text-foreground mb-4">What the Jacksonville Lookup Checks</h2>
 <ul className="space-y-3">
 {[
 { name: 'SafeOrStolen theft reports', desc: 'thefts owners have reported on SafeOrStolen' },
 { name: 'Public web results', desc: 'listings and posts that mention the plate or VIN' },
 { name: 'VIN decode and recalls', desc: 'year, make, model and open safety recalls when you check the VIN' },
 { name: 'Not searched', desc: 'Jacksonville Sheriff\'s Office, FLHSMV, NCIC, insurer or salvage records, and owner names' },
 ].map(db => (
 <li key={db.name} className="flex gap-3 bg-card/50 border border-border rounded-xl p-4">
 <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
 <div><strong className="text-foreground">{db.name}</strong><span className="text-muted-foreground"> — {db.desc}</span></div>
 </li>
 ))}
 </ul>
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

 <section>
 <h2 className="text-2xl font-bold text-foreground mb-4">Check Vehicles in Other Florida Cities</h2>
 <div className="flex flex-wrap gap-3">
 {[
 { name: 'Miami', href: '/florida/miami-license-plate-lookup' },
 { name: 'Orlando', href: '/florida/orlando-license-plate-lookup' },
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

export default JacksonvilleLicensePlateLookupPage;
