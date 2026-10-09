import { Link } from '@/lib/router-compat';
import { CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';

const DestinLicensePlateLookupPage = () => {
 // Oct 7 2026: rewritten by hand. Removed false source claims (FLHSMV, Okaloosa Sheriff records,
 // "all 50 state databases", military base records, "AI analysis"), "3 seconds", and unsourced
 // tourist/military head counts.
 const faqs = [
 {
 q: "How do I check if a car is stolen in Destin, FL?",
 a: "Enter the Florida plate or the VIN at SafeOrStolen (safeorstolen.com/verify). In a few seconds it searches SafeOrStolen theft reports and public web results that mention the number, and a VIN check also decodes the year, make and model and lists open recalls. You get 2 free checks with a free account, no credit card. Owner names are never shown."
 },
 {
 q: "Does SafeOrStolen search Florida police or FLHSMV records?",
 a: "No. A Florida plate or VIN check searches SafeOrStolen's own theft reports and public web results only; it does not search FLHSMV, FDLE, NCIC or sheriff's office records. FDLE runs its own public stolen-vehicle search you can use for free, and the Okaloosa County Sheriff's Office non-emergency line can tell you whether a VIN is reported stolen."
 },
 {
 q: "What should I watch for when buying a car from someone leaving Eglin or Hurlburt Field?",
 a: "Most service members selling before a PCS move are honest, but scammers copy that story because it explains a low price and a rush. Ask to see the title in the seller's name and match its VIN to the dash and the driver's door sticker. If they can't meet in person or want a deposit by app before you see the car, walk away."
 },
 {
 q: "Should I run the VIN as well as the plate in Destin?",
 a: "Yes. Plates come off a car in a minute, so a clean plate doesn't prove the car is clean. Read the VIN on the dash through the windshield and on the driver's door jamb, make sure both match the title, and run that VIN. A VIN check on SafeOrStolen also lists open safety recalls."
 }
 ];

 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": faqs.map(f => ({
 "@type": "Question",
 "name": f.q,
 "acceptedAnswer": { "@type": "Answer", "text": f.a }
 }))
 };

 return (
 <>
 <PageSEO
 title="Destin FL License Plate Lookup — Check a Car Before You Buy | SafeOrStolen"
 description="Destin, FL license plate lookup: see if a plate or VIN shows up in SafeOrStolen theft reports or public web results in a few seconds. 2 free checks, no card."
 canonical="/florida/destin-license-plate-lookup"
 structuredData={[faqSchema]}
 />
 <div className="min-h-screen bg-background pt-20">
 <header className="py-12 px-4 bg-gradient-to-b from-muted to-background">
 <div className="max-w-3xl mx-auto text-center">
 <div className="flex items-center justify-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-3">
 <MapPin className="h-4 w-4" /> Okaloosa County, Florida
 </div>
 <h1 className="text-4xl md:text-5xl font-black mb-4">Destin License Plate Lookup</h1>
 <p className="speakable-summary text-muted-foreground text-lg max-w-2xl mx-auto">
 Buying a used car in Destin, Fort Walton Beach or Niceville? Enter the Florida plate or VIN and in a few seconds you'll see whether it shows up in SafeOrStolen theft reports or public web results. Your first 2 checks are free.
 </p>
 </div>
 </header>

 <section className="py-8 px-4">
 <div className="max-w-xl mx-auto text-center">
 <Link to="/verify?type=plate&state=FL">
 <Button size="lg" className="text-lg px-8 py-6 font-bold">
 Check a Destin Vehicle <ArrowRight className="ml-2 h-5 w-5" />
 </Button>
 </Link>
 <p className="text-muted-foreground text-sm mt-3">2 free checks · No credit card</p>
 </div>
 </section>

 <article className="max-w-3xl mx-auto px-4 pb-16">
 <section className="mb-10">
 <h2 className="text-2xl font-bold text-foreground mb-4">Buying a Car on the Emerald Coast</h2>
 <p className="text-muted-foreground leading-relaxed mb-4">
 A lot of used cars around Destin are sold by people on the move: seasonal workers heading out after summer, snowbirds going home, and military families from Eglin AFB and Hurlburt Field on PCS orders. Most of those sales are honest. The trouble is that "I'm leaving next week, need it gone" is also the easiest cover story for someone selling a car that isn't theirs.
 </p>
 <p className="text-muted-foreground leading-relaxed mb-4">
 So check the paperwork, not the story. The name on the Florida title should match the seller's ID. The VIN on the title should match the VIN on the dash and the sticker in the driver's door jamb. Then run the plate and the VIN.
 </p>
 <p className="text-muted-foreground leading-relaxed">
 Cars move fast along I-10 between Pensacola, Mobile and the Georgia line, so a car stolen out of state can turn up here. SafeOrStolen's theft reports and web results aren't limited to Florida, but it does not search other states' police records. For that, call the Okaloosa County Sheriff's Office non-emergency line.
 </p>
 </section>

 <section className="mb-10">
 <h2 className="text-2xl font-bold text-foreground mb-4">What a Destin Plate or VIN Check Searches</h2>
 <ul className="space-y-3">
 {[
 { name: 'SafeOrStolen theft reports', desc: 'Thefts that owners have reported on SafeOrStolen' },
 { name: 'Public web results', desc: 'Listings and posts online that mention the plate or VIN' },
 { name: 'VIN decode and recalls', desc: 'Year, make and model from the VIN, plus open safety recalls' },
 { name: 'What it does not search', desc: 'FLHSMV, FDLE, NCIC or sheriff records. Owner names are never shown' },
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
 {faqs.map(f => (
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
 { name: 'Jacksonville', href: '/florida/jacksonville-license-plate-lookup' },
 { name: 'Orlando', href: '/florida/orlando-license-plate-lookup' },
 { name: 'Tampa', href: '/florida/tampa-license-plate-lookup' },
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

export default DestinLicensePlateLookupPage;
