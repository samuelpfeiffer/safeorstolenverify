import React from 'react';
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, MapPin, Download, Car, Wrench, Phone } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
const StolenCheckHouston = () => {
  const faqs = [
    {
      question: "How do I check if a car in Houston is stolen?",
      answer: "Get the VIN from the seller and run it on SafeOrStolen (safeorstolen.com/stolen-check-houston). It decodes the year, make and model, lists open recalls, and searches SafeOrStolen theft reports and public web results in a few seconds. It does not search Texas DMV or HPD records, so if anything looks wrong, call the HPD non-emergency line with the VIN and plate."
    },
    {
      question: "Where can I meet a seller safely in Houston?",
      answer: "Many Houston-area police stations let buyers and sellers meet in their parking lots or lobbies. Call the Houston Police Department non-emergency line or check with your nearest station to confirm which locations allow it and when. Check the item before you get there, then confirm the serial, IMEI or VIN matches at the meetup."
    },
    {
      question: "What should I check when buying a used truck in Houston?",
      answer: "Full-size pickups are popular with thieves everywhere, so take extra care. Match the VIN on the dash, the driver door jamb and the Texas title, make sure the title name matches the seller's ID, look for a damaged steering column or ignition, and run the VIN on SafeOrStolen before you pay."
    },
    {
      question: "How do I check if power tools are stolen in Houston?",
      answer: "Find the serial number on the tool's nameplate, usually on the motor housing or battery mount, and run it on SafeOrStolen. Ask why the seller is selling, and be wary of several new tools from the same brand sold together for cash. A missing or scratched-off serial is a reason to walk away."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <>
      <PageSEO
        title="Houston Stolen Item Check - Check Before You Buy | SafeOrStolen"
        description="Buying used in Houston? Check a phone IMEI, car VIN, plate or tool serial against SafeOrStolen theft reports in a few seconds. 2 free checks, no credit card."
        keywords="houston stolen item check, stolen car check houston, verify stolen houston, VIN check houston, HPD stolen vehicle"
        canonical="/stolen-check-houston"
        structuredData={faqSchema}
      />

      <div className="min-h-screen bg-background">
        <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Houston, Texas</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">Houston Stolen Item Check</h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Buying a used car, phone or tools in Houston? Run the VIN, IMEI or serial number on SafeOrStolen before you meet. You get a result in a few seconds, and your first 2 checks are free.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gap-2">
                <Link to="/verify"><Shield className="w-5 h-5" />Check an Item</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link to="/app"><Download className="w-5 h-5" />Open the Free Web App</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">What to Check in Houston</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Car className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-xl font-bold text-primary">Cars and trucks</div>
                  <div className="text-sm text-muted-foreground">Check the VIN, then match it on the dash, door jamb and title</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Wrench className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-xl font-bold text-primary">Power tools</div>
                  <div className="text-sm text-muted-foreground">Check the serial on the nameplate before paying cash</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Phone className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-xl font-bold text-primary">Phones</div>
                  <div className="text-sm text-muted-foreground">Check the IMEI and make sure the phone isn't locked to an account</div>
                </CardContent>
              </Card>
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none mb-8">
              <h3>Why Check Before Buying in Houston?</h3>
              <p>
                Houston is big and spread out, and a lot of used goods change hands on Facebook Marketplace,
                OfferUp and Craigslist. Most sellers are honest, but a stolen item looks the same in a listing
                photo as any other. The serial number, IMEI or VIN is how you tell the difference.
              </p>
              <p>
                A SafeOrStolen check searches theft reports owners have filed on the site and public web results
                that mention the number. VIN checks also decode the vehicle and list open recalls. The result says
                reported stolen, possible match, or no report found in the records searched, with every source listed.
                It does not search Texas DMV, HPD or NCIC records.
              </p>
              <h3>Meeting a Seller</h3>
              <p>
                Many Houston-area police stations let people complete sales in their parking lots or lobbies. Call
                ahead to confirm. Run your check before you go, then confirm at the meetup that the number on the
                item matches the one you checked.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions - Houston</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Check Before You Buy in Houston</h2>
            <p className="mb-6 opacity-90">A check takes a few seconds. 2 free checks, then $0.99 a check or $10 a month unlimited.</p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/verify">Check an Item</Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default StolenCheckHouston;
