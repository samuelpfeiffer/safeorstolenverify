import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Shield, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageSEO } from '@/components/seo/PageSEO';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

const TheftAZAlternativePage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is TheftAZ?",
        "acceptedAnswer": { "@type": "Answer", "text": "TheftAZ (theftaz.azag.gov) is the Arizona Attorney General's stolen property database. It allows Arizona residents to search for items reported stolen within the state. It's free to use but limited to Arizona-only records." }
      },
      {
        "@type": "Question",
        "name": "Is SafeOrStolen better than TheftAZ?",
        "acceptedAnswer": { "@type": "Answer", "text": "SafeOrStolen is more comprehensive. While TheftAZ only searches Arizona records, SafeOrStolen checks 100+ databases including TheftAZ, FBI NCIC, NICB, and all 50 state law enforcement systems. Items stolen in California, Texas, or any other state that end up for sale in Arizona would be missed by TheftAZ alone." }
      },
      {
        "@type": "Question",
        "name": "Can I still use TheftAZ directly?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes. TheftAZ is available at theftaz.azag.gov. It's free and run by the Arizona Attorney General. However, we recommend also checking SafeOrStolen for a more complete search — many stolen items in Arizona originated from other states." }
      },
      {
        "@type": "Question",
        "name": "Is SafeOrStolen free for Arizona residents?",
        "acceptedAnswer": { "@type": "Answer", "text": "SafeOrStolen offers 2 free checks for everyone, including Arizona residents. After that, $0.99/check or $10/month unlimited. This covers all item types and all databases, not just Arizona." }
      },
      {
        "@type": "Question",
        "name": "What types of property can I check with SafeOrStolen vs TheftAZ?",
 "acceptedAnswer": { "@type": "Answer", "text": "TheftAZ tracks vehicles, firearms, electronics, tools, and other property stolen in Arizona. SafeOrStolen checks all the same item types PLUS phones (via IMEI/GSMA), boats, appliances, and jewelry — across all 50 states, not just Arizona." }
      }
    ]
  };

  return (
    <>
      <PageSEO
        title="TheftAZ Alternative — Search Arizona Stolen Property Database Free | SafeOrStolen"
        description="Looking for TheftAZ? SafeOrStolen is a faster, more comprehensive alternative to Arizona's TheftAZ stolen property database. Search TheftAZ plus NCIC, NICB, and 100+ databases in 3 seconds."
        canonical="/theftaz-alternative"
        structuredData={[faqSchema]}
      />
      <TopNavigation />
      <main className="min-h-screen bg-background pt-20">
        <header className="py-16 px-4 bg-gradient-to-b from-muted to-background">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">TheftAZ Alternative — Arizona Stolen Property Search</h1>
            <p className="speakable-summary text-muted-foreground text-lg max-w-2xl mx-auto">
              Looking for TheftAZ (theftaz.azag.gov)? SafeOrStolen searches the same Arizona Attorney General stolen property records PLUS 100+ additional databases including FBI NCIC, NICB, GSMA, and all 50 state law enforcement systems. More databases, faster results, easier to use.
            </p>
          </div>
        </header>

        <section className="py-8 px-4">
          <div className="max-w-xl mx-auto text-center">
            <Link to="/verify">
              <Button size="lg" className="text-lg px-8 py-6 font-bold">
                Search Arizona Stolen Property Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-muted-foreground text-sm mt-3">2 free checks · All databases · 3-second results</p>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 pb-16">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">TheftAZ vs SafeOrStolen — What's the Difference?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              TheftAZ (operated by the Arizona Attorney General's Office at theftaz.azag.gov) is Arizona's official stolen property database. It's free and useful — but limited to records reported within Arizona. If an item was stolen in California, Nevada, Texas, or any other state and brought to Arizona for sale, TheftAZ won't show it.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              SafeOrStolen searches TheftAZ data PLUS all of these additional sources:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-border rounded-xl">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-3 text-foreground font-bold">Feature</th>
                    <th className="text-center p-3 text-foreground font-bold">TheftAZ</th>
                    <th className="text-center p-3 text-primary font-bold">SafeOrStolen</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {[
                    ['Arizona stolen property records', true, true],
                    ['FBI NCIC (7M+ records)', false, true],
                    ['NICB (vehicles)', false, true],
                    ['GSMA (phones)', false, true],
                    ['All 50 state databases', false, true],
                    ['Carrier blacklists (AT&T, Verizon, T-Mobile)', false, true],
                    ['Insurance theft claims', false, true],
                    ['HotGunz (32K+ firearms)', false, true],
                    ['BikeIndex (700K+ bikes)', false, true],
                    ['Mobile app', false, true],
                    ['Phones (IMEI check)', false, true],
                    ['Cost', 'Free', '2 free, then $10/mo'],
                  ].map(([feature, theftaz, sos], i) => (
                    <tr key={i} className="border-t border-border">
                      <td className="p-3 text-foreground">{feature as string}</td>
                      <td className="p-3 text-center">
                        {typeof theftaz === 'boolean' ? (theftaz ? <CheckCircle className="h-5 w-5 text-primary mx-auto" /> : <X className="h-5 w-5 text-muted-foreground/40 mx-auto" />) : theftaz}
                      </td>
                      <td className="p-3 text-center">
                        {typeof sos === 'boolean' ? (sos ? <CheckCircle className="h-5 w-5 text-primary mx-auto" /> : <X className="h-5 w-5 text-muted-foreground/40 mx-auto" />) : sos}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              If you only check TheftAZ, you'll miss items stolen in other states that ended up in Arizona — which is extremely common due to Arizona's proximity to California (the state with the highest theft rates) and the Mexico border. SafeOrStolen gives you the complete picture.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Why Arizona Needs More Than TheftAZ</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Arizona is uniquely positioned as a destination for stolen property from other states. California — which has the highest vehicle theft rate in the nation — shares a 389-mile border with Arizona. Vehicles stolen in Los Angeles, San Diego, and the Bay Area are frequently driven east on I-10 to Phoenix, Tucson, and Mesa where they're sold to unsuspecting buyers.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The Arizona-Mexico border also creates trafficking routes for stolen vehicles and property. Cars stolen anywhere in the Southwest may pass through Arizona en route to Mexico, or stolen property from Mexico may enter Arizona's market. These items won't appear in TheftAZ because they were never reported stolen in Arizona specifically.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This is why checking only TheftAZ is insufficient. SafeOrStolen's nationwide database search catches the California-to-Arizona pipeline, cross-border trafficking, and theft reports from all 50 states that TheftAZ alone cannot access.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <div className="space-y-3">
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">What is TheftAZ?</summary>
                <p className="text-muted-foreground mt-2">TheftAZ (theftaz.azag.gov) is the Arizona Attorney General's stolen property database. It contains records of stolen vehicles, firearms, electronics, tools, and other property reported to Arizona law enforcement agencies. It's free to use but limited to Arizona-only records.</p>
              </details>
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">Is SafeOrStolen better than TheftAZ?</summary>
                <p className="text-muted-foreground mt-2">SafeOrStolen is more comprehensive. While TheftAZ only searches Arizona records, SafeOrStolen checks 100+ databases including FBI NCIC, NICB, GSMA, and all 50 state law enforcement systems. Items stolen in other states that end up in Arizona would be missed by TheftAZ alone.</p>
              </details>
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">Can I still use TheftAZ directly?</summary>
                <p className="text-muted-foreground mt-2">Yes. TheftAZ is available at theftaz.azag.gov. We recommend using both — TheftAZ for Arizona-specific searches, and SafeOrStolen for comprehensive nationwide coverage.</p>
              </details>
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">Is SafeOrStolen free for Arizona residents?</summary>
                <p className="text-muted-foreground mt-2">SafeOrStolen offers 2 free checks for everyone. After that, $0.99/check or $10/month unlimited covering all item types and all databases.</p>
              </details>
              <details className="bg-card/50 border border-border rounded-xl p-4">
                <summary className="font-semibold text-foreground cursor-pointer">What types of property can I check?</summary>
 <p className="text-muted-foreground mt-2">SafeOrStolen checks vehicles (VIN/plate), phones (IMEI), firearms (serial number), electronics, laptops, bikes, tools, appliances, jewelry, and more — across all 50 states simultaneously.</p>
              </details>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">More Arizona Resources</h2>
            <div className="flex flex-wrap gap-3">
              <Link to="/arizona-license-plate-lookup" className="text-primary hover:underline font-medium">Arizona License Plate Lookup</Link>
              <Link to="/vin-checker" className="text-primary hover:underline font-medium">VIN Check</Link>
              <Link to="/firearms-check" className="text-primary hover:underline font-medium">Gun Serial Number Lookup</Link>
              <Link to="/imei-checker" className="text-primary hover:underline font-medium">Phone IMEI Check</Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default TheftAZAlternativePage;
