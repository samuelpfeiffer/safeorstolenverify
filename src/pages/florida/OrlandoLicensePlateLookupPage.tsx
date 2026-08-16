import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';

const OrlandoLicensePlateLookupPage = () => {
 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 {
 "@type": "Question",
 "name": "How do I check if a car is stolen in Orlando?",
 "acceptedAnswer": { "@type": "Answer", "text": "Enter the Florida license plate number or VIN on SafeOrStolen. We search our verification databases, including vehicle theft and title databases and stolen property reports from all 50 states. Free results in 3 seconds." }
 },
 {
 "@type": "Question",
 "name": "Why are rental car scams common in Orlando?",
 "acceptedAnswer": { "@type": "Answer", "text": "Orlando is the most-visited city in the US with 74+ million tourists annually. The massive rental car market creates opportunities for scammers who sell returned/damaged rental vehicles, use rental VINs for cloning, or sell vehicles with undisclosed rental histories. Always verify before buying a used car in Central Florida." }
 },
 {
 "@type": "Question",
 "name": "What is the I-4 corridor and why does it matter for vehicle theft?",
 "acceptedAnswer": { "@type": "Answer", "text": "Interstate 4 connects Orlando to Tampa and Daytona Beach, creating a major theft corridor. Vehicles stolen in Orlando often appear for sale in Tampa (and vice versa) within hours. SafeOrStolen checks databases across all I-4 corridor cities simultaneously." }
 },
 {
 "@type": "Question",
 "name": "Is a license plate lookup free in Orlando?",
 "acceptedAnswer": { "@type": "Answer", "text": "Yes. SafeOrStolen offers 2 free license plate lookups against our verification databases, including vehicle theft and title databases. After 2 free checks, $0.99/check or $10/month unlimited." }
 }
 ]
 };

 return (
 <>
 <PageSEO
 title="Free Orlando FL License Plate Lookup — Check Stolen Vehicles | SafeOrStolen"
 description="Free Orlando, Florida license plate lookup. Check if vehicles in Orange County are stolen. Search vehicle theft and title databases and stolen property reports. Instant results."
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
 Verify any vehicle in Orlando, Florida against our verification databases, including vehicle theft and title databases and stolen property reports from all 50 states. Free instant results in 3 seconds.
 </p>
 </div>
 </header>

 <section className="py-8 px-4">
 <div className="max-w-xl mx-auto text-center">
 <Link to="/verify?type=plate&state=FL">
 <Button size="lg" className="text-lg px-8 py-6 font-bold">
 Check Orlando Vehicle Now <ArrowRight className="ml-2 h-5 w-5" />
 </Button>
 </Link>
 <p className="text-muted-foreground text-sm mt-3">2 free checks · No credit card</p>
 </div>
 </section>

 <article className="max-w-3xl mx-auto px-4 pb-16">
 <section className="mb-10">
 <h2 className="text-2xl font-bold text-foreground mb-4">Why Check Vehicles in Orlando?</h2>
 <p className="text-muted-foreground leading-relaxed mb-4">
 Orlando is the most-visited city in the United States, welcoming over 74 million tourists annually. This massive influx creates one of the country's largest rental car markets — and with it comes unique vehicle fraud risks. Scammers frequently sell former rental vehicles with undisclosed damage histories, use rental VINs for cloning operations, or list vehicles that are still technically owned by rental companies.
 </p>
 <p className="text-muted-foreground leading-relaxed mb-4">
 The I-4 corridor connecting Orlando to Tampa and Daytona Beach is a well-known vehicle theft route. Cars stolen in theme park parking lots, hotel valet areas, and apartment complexes along International Drive frequently appear for sale in Tampa or Daytona within hours. The Orange County Sheriff's Office and Orlando Police Department report thousands of vehicle thefts each year, with catalytic converter theft and Hyundai/Kia theft adding to the problem.
 </p>
 <p className="text-muted-foreground leading-relaxed">
 Central Florida's used car market is enormous — fueled by the region's rapid population growth and tourist traffic. Whether you're buying from a private seller in Kissimmee, a dealership on Colonial Drive, or a Facebook Marketplace listing in Winter Park, verifying the vehicle's license plate against stolen databases is the minimum due diligence before handing over cash.
 </p>
 </section>

 <section className="mb-10">
 <h2 className="text-2xl font-bold text-foreground mb-4">What Our Orlando Lookup Checks</h2>
 <ul className="space-y-3">
 {[
 { name: 'Vehicle Theft & Title Databases', desc: 'Theft and total loss records for vehicles nationwide' },
 { name: 'Stolen Property Reports', desc: 'Stolen property reports from all 50 states' },
 { name: 'Rental & Fleet Records', desc: 'Former rental vehicle indicators and fleet disposal data' },
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
 <summary className="font-semibold text-foreground cursor-pointer">How do I check if a car is stolen in Orlando?</summary>
 <p className="text-muted-foreground mt-2">Enter the Florida license plate number or VIN on SafeOrStolen. We search our verification databases, including vehicle theft and title databases and stolen property reports from all 50 states. Free results in 3 seconds.</p>
 </details>
 <details className="bg-card/50 border border-border rounded-xl p-4">
 <summary className="font-semibold text-foreground cursor-pointer">Why are rental car scams common in Orlando?</summary>
 <p className="text-muted-foreground mt-2">Orlando is the most-visited city in the US with 74+ million tourists annually. The massive rental car market creates opportunities for scammers who sell returned/damaged rental vehicles, use rental VINs for cloning, or sell vehicles with undisclosed rental histories.</p>
 </details>
 <details className="bg-card/50 border border-border rounded-xl p-4">
 <summary className="font-semibold text-foreground cursor-pointer">What is the I-4 corridor and why does it matter for vehicle theft?</summary>
 <p className="text-muted-foreground mt-2">Interstate 4 connects Orlando to Tampa and Daytona Beach, creating a major theft corridor. Vehicles stolen in Orlando often appear for sale in Tampa within hours. SafeOrStolen checks databases across all I-4 corridor cities simultaneously.</p>
 </details>
 <details className="bg-card/50 border border-border rounded-xl p-4">
 <summary className="font-semibold text-foreground cursor-pointer">Is a license plate lookup free in Orlando?</summary>
 <p className="text-muted-foreground mt-2">Yes. SafeOrStolen offers 2 free license plate lookups against our verification databases, including vehicle theft and title databases. After 2 free checks, $0.99/check or $10/month unlimited.</p>
 </details>
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
