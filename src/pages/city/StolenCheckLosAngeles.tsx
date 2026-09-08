import React from 'react';
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, MapPin, AlertTriangle, Phone, Car, Download } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
const StolenCheckLosAngeles = () => {
 const cityStats = {
 name: "Los Angeles",
 state: "California",
 population: "3.9 million",
 vehicleThefts: "58,000+ annually",
 phoneThefts: "High - especially in tourist areas",
 hotspots: ["Downtown LA", "Hollywood", "Venice Beach", "Santa Monica", "LAX area"]
 };

 const faqs = [
 {
 question: "How do I check if a used car in Los Angeles is stolen?",
 answer: "Use SafeOrStolen's free VIN checker. Enter the 17-digit VIN to verify against LAPD and California vehicle theft and title databases. California has the highest vehicle theft rate in the nation."
 },
 {
 question: "Where should I meet sellers in LA to buy used items?",
 answer: "LAPD offers Safe Exchange Zones at police stations throughout LA. Popular locations include Hollywood Division, Pacific Division, and Van Nuys. Always verify items before meeting."
 },
 {
 question: "Is phone theft common in Los Angeles?",
 answer: "Yes. LA ranks among the top US cities for smartphone theft, especially in tourist areas like Hollywood and Venice Beach. Always check IMEI before buying a used phone."
 },
 {
 question: "What's the stolen vehicle rate in Los Angeles?",
 answer: "LA has over 58,000 vehicle thefts annually, the highest in California. Popular targets include Honda Civics, Toyota Camrys, and Kia/Hyundai vehicles."
 },
 {
 question: "Can I use SafeOrStolen at swap meets in LA?",
 answer: "Yes! Download the SafeOrStolen app to verify items at Pomona Swap Meet, Roadium, or any LA swap meet. The app works offline with barcode scanning."
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

 const localBusinessSchema = {
 "@context": "https://schema.org",
 "@type": "Service",
 "name": "SafeOrStolen Los Angeles Stolen Item Verification",
 "description": "Free stolen item verification service for Los Angeles buyers and sellers",
 "areaServed": {
 "@type": "City",
 "name": "Los Angeles",
 "containedInPlace": { "@type": "State", "name": "California" }
 },
 "provider": { "@type": "Organization", "name": "SafeOrStolen" }
 };

 return (
 <>
 <PageSEO
 title="Los Angeles Stolen Item Check - Verify Before Buying in LA | SafeOrStolen"
 description="Check if items are stolen in Los Angeles. Free IMEI, VIN, and serial number verification for LA buyers. Verify before meeting sellers on Facebook Marketplace, OfferUp, or Craigslist."
 keywords="los angeles stolen item check, LA stolen car check, verify stolen LA, check IMEI los angeles, VIN check LA, stolen phone los angeles"
 canonical="/stolen-check-los-angeles"
 structuredData={[faqSchema, localBusinessSchema]}
 />

 <div className="min-h-screen bg-background">
 {/* Hero */}
 <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
 <div className="max-w-6xl mx-auto text-center">
 <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
 <MapPin className="w-5 h-5 text-primary" />
 <span className="text-sm font-medium">Los Angeles, California</span>
 </div>
 
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 Los Angeles Stolen Item Check
 </h1>
 
 <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
 LA has the highest vehicle theft rate in California. Verify any used item before buying 
 on Facebook Marketplace, OfferUp, Craigslist, or at local swap meets.
 </p>
 
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Button asChild size="lg" className="gap-2">
 <Link to="/verify">
 <Shield className="w-5 h-5" />
 Verify Item in LA - Free
 </Link>
 </Button>
 <Button asChild variant="outline" size="lg" className="gap-2">
 <Link to="/app">
 <Download className="w-5 h-5" />
 Download App
 </Link>
 </Button>
 </div>
 </div>
 </section>

 {/* LA Statistics */}
 <section className="py-16 px-4 bg-destructive/5">
 <div className="max-w-6xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12">
 Los Angeles Theft Statistics
 </h2>

 <div className="grid md:grid-cols-3 gap-6">
 <Card className="border-destructive/20 text-center">
 <CardContent className="pt-6">
 <Car className="w-12 h-12 text-destructive mx-auto mb-4" />
 <div className="text-3xl font-bold text-destructive mb-2">58,000+</div>
 <p className="text-muted-foreground">Vehicles stolen annually in LA County</p>
 </CardContent>
 </Card>

 <Card className="border-destructive/20 text-center">
 <CardContent className="pt-6">
 <Phone className="w-12 h-12 text-destructive mx-auto mb-4" />
 <div className="text-3xl font-bold text-destructive mb-2">#1</div>
 <p className="text-muted-foreground">California city for phone theft</p>
 </CardContent>
 </Card>

 <Card className="border-destructive/20 text-center">
 <CardContent className="pt-6">
 <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4" />
 <div className="text-3xl font-bold text-destructive mb-2">1 in 5</div>
 <p className="text-muted-foreground">Used items may have questionable history</p>
 </CardContent>
 </Card>
 </div>
 </div>
 </section>

 {/* High-Theft Areas */}
 <section className="py-16 px-4">
 <div className="max-w-6xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12">
 High-Theft Areas in Los Angeles
 </h2>

 <div className="grid md:grid-cols-5 gap-4">
 {cityStats.hotspots.map((area, i) => (
 <Card key={i} className="text-center">
 <CardContent className="pt-6">
 <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
 <p className="font-medium">{area}</p>
 </CardContent>
 </Card>
 ))}
 </div>

 <p className="text-center text-muted-foreground mt-8">
 If buying items in these areas, always verify with SafeOrStolen before completing the transaction.
 </p>
 </div>
 </section>

 {/* LAPD Safe Exchange Zones */}
 <section className="py-16 px-4 bg-muted/30">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-8">
 LAPD Safe Exchange Zones
 </h2>
 <p className="text-center text-muted-foreground mb-8">
 Meet sellers at these LAPD stations for safer transactions
 </p>

 <div className="grid md:grid-cols-2 gap-4">
 {[
 "Hollywood Division - 1358 N Wilcox Ave",
 "Pacific Division - 12312 Culver Blvd",
 "Van Nuys Division - 6240 Sylmar Ave",
 "West LA Division - 1663 Butler Ave",
 "77th Street Division - 7600 S Broadway",
 "Northeast Division - 3353 San Fernando Rd"
 ].map((station, i) => (
 <Card key={i}>
 <CardContent className="flex items-center gap-3 py-4">
 <Shield className="w-5 h-5 text-green-500 flex-shrink-0" />
 <span className="text-sm">{station}</span>
 </CardContent>
 </Card>
 ))}
 </div>

 <p className="text-center text-sm text-muted-foreground mt-6">
 Even at safe zones, verify items with SafeOrStolen before paying.
 </p>
 </div>
 </section>

 {/* FAQ */}
 <section className="py-16 px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12">
 Los Angeles Verification FAQs
 </h2>

 <div className="space-y-6">
 {faqs.map((faq, i) => (
 <Card key={i}>
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

 {/* CTA */}
 <section className="py-16 px-4 bg-primary text-primary-foreground">
 <div className="max-w-4xl mx-auto text-center">
 <h2 className="text-3xl font-bold mb-4">
 Verify Before You Buy or Sell in LA
 </h2>
 <p className="text-lg opacity-90 mb-8">
 Don't become another LA theft statistic. Free verification takes just 3 seconds.
 </p>
 <Button asChild size="lg" variant="secondary">
 <Link to="/verify">Verify Item Free</Link>
 </Button>
 </div>
 </section>
 </div>
 </>
 );
};

export default StolenCheckLosAngeles;
