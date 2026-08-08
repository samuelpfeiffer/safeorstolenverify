import { Link } from 'react-router-dom';
import { Shield, Search, CheckCircle, ArrowRight, AlertTriangle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

const MiamiLicensePlateLookupPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I check if a car is stolen in Miami?",
        "acceptedAnswer": { "@type": "Answer", "text": "Enter the vehicle's Florida license plate number or VIN on SafeOrStolen. We check FLHSMV, NICB, FBI NCIC, Miami-Dade Police, and insurance databases simultaneously. Results are returned in about 3 seconds. You get 2 free checks with no credit card required." }
      },
      {
        "@type": "Question",
        "name": "Why is vehicle theft so high in Miami?",
        "acceptedAnswer": { "@type": "Answer", "text": "Miami-Dade County's proximity to the Port of Miami makes it a hotspot for vehicle theft rings that export stolen cars internationally. The high population density, tourism traffic, and warm climate all contribute. Hyundai and Kia models have been especially targeted due to a viral theft method." }
      },
      {
        "@type": "Question",
        "name": "Can I check a vehicle by license plate or do I need a VIN?",
        "acceptedAnswer": { "@type": "Answer", "text": "SafeOrStolen accepts both. Enter a Florida license plate number and we resolve it to the vehicle's VIN through FLHSMV databases, then run a full theft check. You can also enter the VIN directly if you have it." }
      },
      {
        "@type": "Question",
        "name": "Is SafeOrStolen's Florida license plate lookup free?",
        "acceptedAnswer": { "@type": "Answer", "text": "You get 2 free lookups with no credit card required. After that, unlimited lookups are $1 per month." }
      }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Free Miami FL License Plate Lookup",
    "description": "Check if any vehicle in Miami-Dade County is stolen using license plate or VIN.",
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
        description="Free Miami, Florida license plate lookup. Check if any vehicle in Miami-Dade County is stolen. Search FLHSMV, NICB, NCIC, and Miami-Dade Police databases. Instant results."
        canonical="/florida/miami-license-plate-lookup"
        structuredData={[faqSchema, webPageSchema]}
      />
      <TopNavigation />
      <main className="min-h-screen bg-background pt-20">
        <header className="py-12 px-4 bg-gradient-to-b from-muted to-background">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-primary text-sm font-bold uppercase tracking-widest mb-3">
              <MapPin className="h-4 w-4" /> Miami-Dade County, Florida
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">Free Miami License Plate Lookup</h1>
            <p className="speakable-summary text-muted-foreground text-lg max-w-2xl mx-auto">
              Check if any vehicle in Miami, Florida is stolen by searching the license plate number against FLHSMV, NICB, FBI NCIC, Miami-Dade Police, and insurance theft databases. Free instant results in 3 seconds.
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
            <h2 className="text-2xl font-bold text-foreground mb-4">Why Check Vehicles in Miami?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Miami-Dade County consistently ranks among the top metro areas for vehicle theft in the United States. In 2024, Miami-Dade reported over 14,000 vehicle thefts — approximately 38 cars stolen per day. Popular targets include Honda Civics, Honda Accords, Toyota Camrys, and Hyundai/Kia models affected by the viral "Kia Boys" theft method.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The high volume of international shipping from the Port of Miami means stolen vehicles are often exported to the Caribbean and Central America within hours of being taken. This creates a unique risk for Miami-area buyers: a car listed for sale today could be stolen property that hasn't yet been reported. Pre-purchase verification is not optional in this market — it's essential.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              South Florida's vibrant used car market on Facebook Marketplace, Craigslist, and OfferUp attracts legitimate sellers and criminals alike. From Hialeah to Homestead, Coral Gables to Kendall, every neighborhood sees vehicle theft. Running a license plate lookup before meeting a seller protects you from unknowingly purchasing stolen property — which can result in seizure with zero compensation and potential criminal charges.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">What Our Miami License Plate Lookup Checks</h2>
            <ul className="space-y-3">
              {[
                { name: 'FLHSMV Records', desc: 'Florida Highway Safety and Motor Vehicles registration database for Miami-Dade County' },
                { name: 'NICB VINCheck', desc: 'National Insurance Crime Bureau theft and total loss records' },
                { name: desc: 'National Crime Information Center stolen vehicle database' },
                { name: 'Miami-Dade Police Records', desc: 'Local law enforcement stolen vehicle reports' },
                { name: 'Insurance Claims', desc: 'Theft claims from major insurers operating in Florida' },
                { name: 'Salvage Records', desc: 'Vehicles with salvage, rebuilt, or flood titles — critical in Florida due to hurricanes' },
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
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">How to Check a Miami Vehicle</h2>
            <ol className="space-y-3 list-decimal list-inside text-muted-foreground">
              <li>Enter the Florida license plate number from any vehicle in Miami-Dade County</li>
              <li>SafeOrStolen resolves the plate to a VIN through FLHSMV and checks all databases simultaneously</li>
              <li>Get results in approximately 3 seconds showing theft status, registration info, and any red flags</li>
            </ol>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <div className="space-y-3">
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">How do I check if a car is stolen in Miami?</summary>
                <p className="text-muted-foreground mt-2">Enter the vehicle's Florida license plate number or VIN on SafeOrStolen. We check FLHSMV, NICB, FBI NCIC, Miami-Dade Police, and insurance databases simultaneously. Results are returned in about 3 seconds. You get 2 free checks with no credit card required.</p>
              </details>
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">Why is vehicle theft so high in Miami?</summary>
                <p className="text-muted-foreground mt-2">Miami-Dade County's proximity to the Port of Miami makes it a hotspot for vehicle theft rings that export stolen cars internationally. The high population density, tourism traffic, and warm climate (cars left unlocked more often) all contribute. Hyundai and Kia models have been especially targeted due to a viral theft method.</p>
              </details>
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">Can I check a vehicle by license plate or do I need a VIN?</summary>
                <p className="text-muted-foreground mt-2">SafeOrStolen accepts both. Enter a Florida license plate number and we resolve it to the vehicle's VIN through FLHSMV databases, then run a full theft check. You can also enter the VIN directly if you have it.</p>
              </details>
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">Is SafeOrStolen's Florida license plate lookup free?</summary>
                <p className="text-muted-foreground mt-2">You get 2 free lookups with no credit card required. After that, unlimited lookups are $1 per month.</p>
              </details>
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
              <Link to="/scam-checker" className="text-primary hover:underline">AI Scam Checker</Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default MiamiLicensePlateLookupPage;
