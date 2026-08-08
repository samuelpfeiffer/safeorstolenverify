import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

const JacksonvilleLicensePlateLookupPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I check if a car is stolen in Jacksonville, FL?",
        "acceptedAnswer": { "@type": "Answer", "text": "Enter the vehicle's Florida license plate or VIN on SafeOrStolen. We search FLHSMV, NICB, stolen property reports from all 50 states, Jacksonville Sheriff's Office (JSO) records, and insurance databases. Results in 3 seconds. 2 free checks, no credit card." }
      },
      {
        "@type": "Question",
        "name": "What makes Jacksonville a high-risk area for vehicle theft?",
        "acceptedAnswer": { "@type": "Answer", "text": "Jacksonville is the largest city by area in the contiguous US, giving thieves more space to operate. Its position on I-95 — the main north-south highway on the East Coast — makes it a corridor for stolen vehicle trafficking between Florida and the northeast. The sprawling suburbs create opportunities for theft in residential areas." }
      },
      {
        "@type": "Question",
        "name": "Does SafeOrStolen check Jacksonville Sheriff's Office records?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. SafeOrStolen's verification engine searches JSO stolen vehicle reports as part of our Florida law enforcement database queries, alongside FLHSMV, NICB, and stolen property reports from all 50 states." }
      },
      {
        "@type": "Question",
        "name": "Is a license plate lookup enough or should I also check the VIN?",
        "acceptedAnswer": { "@type": "Answer", "text": "Always do both. License plates can be swapped — thieves put clean plates on stolen vehicles. Our tool resolves the plate to a VIN through FLHSMV and checks both, but we recommend physically verifying the VIN on the vehicle dashboard and door jamb matches the registration." }
      }
    ]
  };

  return (
    <>
      <PageSEO
        title="Free Jacksonville FL License Plate Lookup — Check Stolen Vehicles | SafeOrStolen"
        description="Free Jacksonville, Florida license plate lookup. Check if vehicles in Duval County are stolen using FLHSMV, NICB, and JSO databases. Instant results in 3 seconds."
        canonical="/florida/jacksonville-license-plate-lookup"
        structuredData={[faqSchema]}
      />
      <TopNavigation />
      <main className="min-h-screen bg-background pt-20">
        <header className="py-12 px-4 bg-gradient-to-b from-muted to-background">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-3">
              <MapPin className="h-4 w-4" /> Duval County, Florida
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">Free Jacksonville License Plate Lookup</h1>
            <p className="speakable-summary text-muted-foreground text-lg max-w-2xl mx-auto">
              Verify any vehicle in Jacksonville, Florida against FLHSMV, NICB, stolen property reports from all 50 states, Jacksonville Sheriff's Office (JSO), and insurance databases. Free instant results in 3 seconds.
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
              Jacksonville is the largest city by land area in the contiguous United States — spanning over 874 square miles across Duval County. This sprawling geography creates unique challenges for law enforcement and unique opportunities for vehicle theft rings. With numerous suburban neighborhoods, shopping centers, and commercial districts spread across the metro area, stolen vehicles can be moved and hidden more easily than in compact cities.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Jacksonville sits directly on I-95, the primary north-south interstate corridor on the East Coast. This makes it a key transit point for stolen vehicle trafficking — cars stolen in South Florida (Miami, Fort Lauderdale) often pass through Jacksonville en route to Georgia, the Carolinas, and northeast markets. Conversely, vehicles stolen in the northeast frequently appear for sale in Jacksonville's used car market.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The Jacksonville Sheriff's Office (JSO) — one of the largest consolidated police forces in the country — handles vehicle theft across all of Duval County. Despite strong enforcement, Jacksonville sees thousands of vehicle thefts annually, with Hyundai, Kia, Honda, and Chevrolet models being the most targeted. The Port of Jacksonville (JAXPORT) also handles vehicle shipping, adding another avenue for stolen vehicle export.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">What Our Jacksonville Lookup Checks</h2>
            <ul className="space-y-3">
              {[
                { name: 'FLHSMV Records', desc: 'Florida registration database for Duval County vehicles' },
                { name: 'JSO Records', desc: 'Jacksonville Sheriff\'s Office stolen vehicle reports' },
                { name: 'NICB VINCheck', desc: 'National Insurance Crime Bureau theft and total loss records' },
                { name: desc: 'National Crime Information Center — catches vehicles stolen in other states' },
                { name: 'I-95 Corridor Data', desc: 'Cross-state stolen vehicle alerts from the I-95 trafficking corridor' },
                { name: 'Insurance & Salvage', desc: 'Theft claims and flood/salvage titles from Florida hurricanes' },
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
                <summary className="font-semibold text-foreground cursor-pointer">How do I check if a car is stolen in Jacksonville, FL?</summary>
                <p className="text-muted-foreground mt-2">Enter the vehicle's Florida license plate or VIN on SafeOrStolen. We search FLHSMV, NICB, stolen property reports from all 50 states, Jacksonville Sheriff's Office (JSO) records, and insurance databases. Results in 3 seconds. 2 free checks, no credit card.</p>
              </details>
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">What makes Jacksonville a high-risk area for vehicle theft?</summary>
                <p className="text-muted-foreground mt-2">Jacksonville is the largest city by area in the contiguous US, giving thieves more space to operate. Its position on I-95 makes it a corridor for stolen vehicle trafficking between Florida and the northeast. The sprawling suburbs create opportunities for theft in residential areas.</p>
              </details>
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">Does SafeOrStolen check Jacksonville Sheriff's Office records?</summary>
                <p className="text-muted-foreground mt-2">Yes. SafeOrStolen's verification engine searches JSO stolen vehicle reports as part of our Florida law enforcement database queries, alongside FLHSMV, NICB, and stolen property reports from all 50 states.</p>
              </details>
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">Is a license plate lookup enough or should I also check the VIN?</summary>
                <p className="text-muted-foreground mt-2">Always do both. License plates can be swapped — thieves put clean plates on stolen vehicles. Our tool resolves the plate to a VIN through FLHSMV and checks both, but we recommend physically verifying the VIN on the vehicle dashboard and door jamb matches the registration.</p>
              </details>
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
      </main>
      <Footer />
    </>
  );
};

export default JacksonvilleLicensePlateLookupPage;
