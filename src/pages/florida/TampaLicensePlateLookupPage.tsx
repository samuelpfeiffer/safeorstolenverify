import { Link } from '@/lib/router-compat';
import { CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';

const TampaLicensePlateLookupPage = () => {
 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 {
 "@type": "Question",
 "name": "How do I check if a car is stolen in Tampa?",
 "acceptedAnswer": { "@type": "Answer", "text": "Enter the Florida license plate or VIN on SafeOrStolen. We search our verification databases, including vehicle theft and title databases and stolen property reports from all 50 states. Results in 3 seconds. 2 free checks." }
 },
 {
 "@type": "Question",
 "name": "Why is Tampa a hotspot for vehicle theft?",
 "acceptedAnswer": { "@type": "Answer", "text": "Tampa Bay's position on I-4 and I-75 creates multiple exit routes for stolen vehicles. Port Tampa Bay handles vehicle shipping internationally. The metro area's rapid growth has brought more vehicles and more opportunities for theft, especially in parking garages near Ybor City, SoHo, and Channelside." }
 },
 {
 "@type": "Question",
 "name": "Does SafeOrStolen check Hillsborough County Sheriff records?",
 "acceptedAnswer": { "@type": "Answer", "text": "SafeOrStolen does not have direct access to Hillsborough County Sheriff's Office or Tampa Police Department systems. If you suspect a vehicle is stolen, contact local police directly. Our verification engine searches our own verification databases, including vehicle theft and title records." }
 },
 {
 "@type": "Question",
 "name": "Should I check for flood damage on Tampa vehicles?",
 "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Tampa Bay is highly vulnerable to hurricanes and flooding. Our lookup checks for flood titles and salvage brands in our verification databases. Florida is one of the worst states for title washing — where flood-damaged vehicles are re-titled as clean in another state and sold back in Florida." }
 }
 ]
 };

 return (
 <>
 <PageSEO
 title="Free Tampa FL License Plate Lookup — Check Stolen Vehicles | SafeOrStolen"
 description="Free Tampa, Florida license plate lookup. Check Hillsborough County vehicles for theft status. Vehicle theft and title databases. Instant results."
 canonical="/florida/tampa-license-plate-lookup"
 structuredData={[faqSchema]}
 />
 <div className="min-h-screen bg-background pt-20">
 <header className="py-12 px-4 bg-gradient-to-b from-muted to-background">
 <div className="max-w-3xl mx-auto text-center">
 <div className="flex items-center justify-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-3">
 <MapPin className="h-4 w-4" /> Hillsborough County, Florida
 </div>
 <h1 className="text-4xl md:text-5xl font-black mb-4">Free Tampa License Plate Lookup</h1>
 <p className="speakable-summary text-muted-foreground text-lg max-w-2xl mx-auto">
 Verify any vehicle in Tampa, Florida against our verification databases, including vehicle theft and title databases and stolen property reports from all 50 states. Free results in 3 seconds.
 </p>
 </div>
 </header>

 <section className="py-8 px-4">
 <div className="max-w-xl mx-auto text-center">
 <Link to="/verify?type=plate&state=FL">
 <Button size="lg" className="text-lg px-8 py-6 font-bold">
 Check Tampa Vehicle Now <ArrowRight className="ml-2 h-5 w-5" />
 </Button>
 </Link>
 <p className="text-muted-foreground text-sm mt-3">2 free checks · No credit card</p>
 </div>
 </section>

 <article className="max-w-3xl mx-auto px-4 pb-16">
 <section className="mb-10">
 <h2 className="text-2xl font-bold text-foreground mb-4">Why Check Vehicles in Tampa?</h2>
 <p className="text-muted-foreground leading-relaxed mb-4">
 Tampa Bay sits at the intersection of two major interstates — I-4 (connecting to Orlando and Daytona) and I-75 (running from Michigan to Miami). This makes Tampa a major transit hub for legitimate commerce and, unfortunately, for stolen vehicle trafficking. A car stolen in Orlando can be on a Tampa used car lot within 90 minutes.
 </p>
 <p className="text-muted-foreground leading-relaxed mb-4">
 Port Tampa Bay handles international vehicle shipping, creating another avenue for stolen cars to leave the country. The Tampa Police Department (TPD) and Hillsborough County Sheriff's Office (HCSO) report steady vehicle theft numbers, with particular hotspots around Ybor City, South Tampa, Brandon, and the University of South Florida area. Catalytic converter theft has also surged, affecting vehicle value and integrity.
 </p>
 <p className="text-muted-foreground leading-relaxed">
 Tampa Bay is also highly vulnerable to hurricanes and flooding. After major storms, flood-damaged vehicles enter the used car market — sometimes with washed titles that hide the damage history. Florida is one of the worst states for title washing, where a flood-damaged car is re-titled in a lenient state and then sold back in Florida as "clean." Our lookup checks for flood titles and salvage brands specific to the Tampa Bay region.
 </p>
 </section>

 <section className="mb-10">
 <h2 className="text-2xl font-bold text-foreground mb-4">What Our Tampa Lookup Checks</h2>
 <ul className="space-y-3">
 {[
 { name: 'Vehicle Theft & Title Databases', desc: 'Theft, total loss, and flood damage records' },
 { name: 'Stolen Property Reports', desc: 'Stolen property reports from all 50 states' },
 { name: 'Flood & Salvage', desc: 'Hurricane damage titles, salvage brands, and title washing detection' },
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
 <details className="bg-card/50 border border-border rounded-xl p-4">
 <summary className="font-semibold text-foreground cursor-pointer">How do I check if a car is stolen in Tampa?</summary>
 <p className="text-muted-foreground mt-2">Enter the Florida license plate or VIN on SafeOrStolen. We search our verification databases, including vehicle theft and title databases and stolen property reports from all 50 states. Results in 3 seconds. 2 free checks.</p>
 </details>
 <details className="bg-card/50 border border-border rounded-xl p-4">
 <summary className="font-semibold text-foreground cursor-pointer">Why is Tampa a hotspot for vehicle theft?</summary>
 <p className="text-muted-foreground mt-2">Tampa Bay's position on I-4 and I-75 creates multiple exit routes for stolen vehicles. Port Tampa Bay handles vehicle shipping internationally. The metro area's rapid growth has brought more opportunities for theft.</p>
 </details>
 <details className="bg-card/50 border border-border rounded-xl p-4">
 <summary className="font-semibold text-foreground cursor-pointer">Should I check for flood damage on Tampa vehicles?</summary>
 <p className="text-muted-foreground mt-2">Absolutely. Tampa Bay is highly vulnerable to hurricanes. Our lookup checks for flood titles and salvage brands. Florida is one of the worst states for title washing.</p>
 </details>
 </div>
 </section>

 <section>
 <h2 className="text-2xl font-bold text-foreground mb-4">Check Vehicles in Other Florida Cities</h2>
 <div className="flex flex-wrap gap-3">
 {[
 { name: 'Miami', href: '/florida/miami-license-plate-lookup' },
 { name: 'Jacksonville', href: '/florida/jacksonville-license-plate-lookup' },
 { name: 'Orlando', href: '/florida/orlando-license-plate-lookup' },
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

export default TampaLicensePlateLookupPage;
