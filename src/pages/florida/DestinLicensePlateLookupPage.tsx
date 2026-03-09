import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

const DestinLicensePlateLookupPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I check if a car is stolen in Destin, FL?",
        "acceptedAnswer": { "@type": "Answer", "text": "Enter the Florida license plate or VIN on SafeOrStolen. We search FLHSMV, NICB, FBI NCIC, Okaloosa County Sheriff's Office (OCSO), and insurance databases. Results in 3 seconds. 2 free checks, no credit card." }
      },
      {
        "@type": "Question",
        "name": "Why should I verify vehicles in Destin specifically?",
        "acceptedAnswer": { "@type": "Answer", "text": "Destin and the Emerald Coast attract millions of seasonal tourists, creating a transient population that complicates vehicle ownership verification. Eglin Air Force Base brings military personnel who frequently buy/sell vehicles during transfers. The tourist economy also attracts scammers who sell vehicles and leave the area before the fraud is discovered." }
      },
      {
        "@type": "Question",
        "name": "Does proximity to military bases affect vehicle theft in Destin?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. Eglin AFB and Hurlburt Field bring thousands of military personnel to the Destin-Fort Walton Beach area. Service members on PCS orders frequently sell vehicles quickly, creating legitimate urgency — but scammers exploit this pattern by posing as military sellers with 'must sell before deployment' stories. Always verify." }
      },
      {
        "@type": "Question",
        "name": "Is a vehicle check different in the Florida Panhandle?",
        "acceptedAnswer": { "@type": "Answer", "text": "The Panhandle has unique risks: proximity to Alabama and Georgia state lines means vehicles cross state borders frequently. A car stolen in Mobile, AL or Columbus, GA can appear for sale in Destin quickly. SafeOrStolen checks all 50 state databases, not just Florida, catching cross-border stolen vehicles." }
      }
    ]
  };

  return (
    <>
      <PageSEO
        title="Free Destin FL License Plate Lookup — Check Vehicles in Okaloosa County | SafeOrStolen"
        description="Free Destin, Florida license plate lookup. Verify vehicles in Okaloosa County are not stolen. Search FLHSMV, NICB, OCSO databases. 3-second results."
        canonical="/florida/destin-license-plate-lookup"
        structuredData={[faqSchema]}
      />
      <TopNavigation />
      <main className="min-h-screen bg-background pt-20">
        <header className="py-12 px-4 bg-gradient-to-b from-muted to-background">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-3">
              <MapPin className="h-4 w-4" /> Okaloosa County, Florida
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">Free Destin License Plate Lookup</h1>
            <p className="speakable-summary text-muted-foreground text-lg max-w-2xl mx-auto">
              Verify any vehicle in Destin and the Emerald Coast against FLHSMV, NICB, FBI NCIC, Okaloosa County Sheriff's Office, and insurance databases. Free instant results in 3 seconds.
            </p>
          </div>
        </header>

        <section className="py-8 px-4">
          <div className="max-w-xl mx-auto text-center">
            <Link to="/verify?type=plate&state=FL">
              <Button size="lg" className="text-lg px-8 py-6 font-bold">
                Check Destin Vehicle Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-muted-foreground text-sm mt-3">2 free checks · No credit card</p>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 pb-16">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Why Check Vehicles in Destin?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Destin and the broader Emerald Coast (including Fort Walton Beach, Niceville, and Crestview) attract millions of seasonal tourists to Northwest Florida's beaches. This transient population creates unique challenges for vehicle verification — sellers come and go with the seasons, making it harder to trace ownership and easier for scammers to operate.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The presence of Eglin Air Force Base — the largest Air Force installation in the Western world — and Hurlburt Field Special Operations base brings thousands of military personnel to Okaloosa County. Service members on Permanent Change of Station (PCS) orders frequently sell vehicles quickly before relocating. While most are legitimate sales, scammers exploit this pattern by posing as military sellers with "must sell before deployment" urgency. A quick license plate check confirms whether the vehicle's registration matches the seller's story.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The Florida Panhandle's proximity to Alabama (Pensacola is closer to Mobile than to Jacksonville) and Georgia means vehicles frequently cross state lines. A car stolen in Alabama, Mississippi, or Georgia can appear for sale in Destin within hours via I-10. SafeOrStolen checks all 50 state databases simultaneously, catching cross-border stolen vehicles that a Florida-only search would miss.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">What Our Destin Lookup Checks</h2>
            <ul className="space-y-3">
              {[
                { name: 'FLHSMV Records', desc: 'Florida registration database for Okaloosa County vehicles' },
                { name: 'OCSO Records', desc: 'Okaloosa County Sheriff\'s Office stolen vehicle reports' },
                { name: 'NICB VINCheck', desc: 'National Insurance Crime Bureau theft and total loss' },
                { name: 'FBI NCIC', desc: 'National database — catches vehicles stolen in Alabama, Georgia, Mississippi' },
                { name: 'Multi-State Search', desc: 'Cross-border databases for the I-10 Panhandle corridor' },
                { name: 'Military Base Records', desc: 'Vehicle registration data from Eglin AFB and Hurlburt Field areas' },
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
                <summary className="font-semibold text-foreground cursor-pointer">How do I check if a car is stolen in Destin, FL?</summary>
                <p className="text-muted-foreground mt-2">Enter the Florida license plate or VIN on SafeOrStolen. We search FLHSMV, NICB, FBI NCIC, Okaloosa County Sheriff's Office, and insurance databases. Results in 3 seconds. 2 free checks, no credit card.</p>
              </details>
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">Why should I verify vehicles in Destin specifically?</summary>
                <p className="text-muted-foreground mt-2">Destin and the Emerald Coast attract millions of seasonal tourists, creating a transient population. Eglin Air Force Base brings military personnel who frequently buy/sell vehicles during transfers. The tourist economy attracts scammers who sell vehicles and leave the area.</p>
              </details>
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">Does proximity to military bases affect vehicle theft?</summary>
                <p className="text-muted-foreground mt-2">Yes. Eglin AFB and Hurlburt Field bring thousands of military personnel. Scammers exploit the "must sell before deployment" pattern. Always verify with SafeOrStolen before buying from anyone claiming military urgency.</p>
              </details>
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">Is a vehicle check different in the Florida Panhandle?</summary>
                <p className="text-muted-foreground mt-2">The Panhandle borders Alabama and Georgia, meaning vehicles cross state lines frequently. SafeOrStolen checks all 50 state databases, catching cross-border stolen vehicles that a Florida-only search would miss.</p>
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
                { name: 'Tampa', href: '/florida/tampa-license-plate-lookup' },
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

export default DestinLicensePlateLookupPage;
