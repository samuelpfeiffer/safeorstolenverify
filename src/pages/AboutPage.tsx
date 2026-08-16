import React from 'react';
import { Shield, Users, Award, Lock, CheckCircle, Building } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FounderStory } from '@/components/story/FounderStory';
import { WhyCheckBeforeBuying } from '@/components/home/WhyCheckBeforeBuying';
import { WhyChooseSafeOrStolen } from '@/components/home/WhyChooseSafeOrStolen';
import { CompactTestimonials } from '@/components/home/CompactTestimonials';

const AboutPage = () => {
 const dataPartners = [
 {
 name: "Stolen property reports from all 50 states",
 type: "Federal Law Enforcement",
 description: "FBI's stolen property database - we crawl and cross-reference federal theft records"
 },
 {
 name: "vehicle theft and title databases",
 type: "Insurance Crime Database",
 description: "VINCheck and theft records - we aggregate insurance crime data for vehicle verification"
 },
 {
 name: "Nationwide Stolen Firearms Database",
 type: "Firearms Database Partner",
 description: "Stolen firearms registry - we aggregate their database for firearms verification"
 },
 {
 name: "IMEI.info",
 type: "Phone Verification Partner",
 description: "Global IMEI database - we cross-reference phone blacklist and carrier records"
 },
 {
 name: "stolen bicycle databases",
 type: "Bicycle Registry Partner",
 description: "1.4M bikes cataloged - direct API integration for bicycle verification"
 },
 {
 name: "StolenRegister.com",
 type: "Community Database Partner",
 description: "Global stolen property reports - we scrape and aggregate their listings"
 },
 {
 name: "Stolen911",
 type: "Law Enforcement Partner",
 description: "Police detective-founded service - data sharing partnership"
 },
 {
 name: "vehicle theft and title databases Vehicle Database",
 type: "Vehicle Records Partner",
 description: "Official vehicle identification records - VIN verification source"
 },
 {
 name: "Carrier Blacklist Databases",
 type: "Telecom Partners",
 description: "AT&T, Verizon, T-Mobile - IMEI blacklist verification"
 },
 {
 name: "Insurance Claims Networks",
 type: "Insurance Partners",
 description: "Aggregated insurance theft claims for comprehensive coverage"
 }
 ];

 const verificationProcess = [
 {
 step: 1,
 title: "Data Collection",
 description: "We gather information from multiple verified community theft registries"
 },
 {
 step: 2,
 title: "Cross-Reference Verification",
 description: "Serial numbers are checked against stolen property reports from all 50 states and international stolen property databases"
 },
 {
 step: 3,
 title: "AI-Powered Analysis",
 description: "Our algorithms analyze patterns and flag potential matches across our verification databases"
 },
 {
 step: 4,
 title: "Human Review",
 description: "All flagged items undergo manual verification by our expert team"
 },
 {
 step: 5,
 title: "Instant Results",
 description: "You receive comprehensive results within seconds of your query"
 }
 ];

 return (
 <>
 <PageSEO
 title="About SafeOrStolen - Protecting Buyers and Sellers"
 description="SafeOrStolen protects buyers and sellers from stolen goods. Over $15 billion in stolen items sold annually. Our verification service stops theft globally."
 keywords="about SafeOrStolen, stolen item verification company, protect buyers sellers"
 canonical="/about"
 structuredData={[
 {
 "@context": "https://schema.org",
 "@type": "AboutPage",
 "name": "About SafeOrStolen - Protect Buyers & Sellers",
 "description": "SafeOrStolen protects BOTH buyers AND sellers from stolen goods. Every search makes stolen items harder to sell - reducing crime globally.",
 "mainEntity": {
 "@type": "Organization",
 "name": "SafeOrStolen",
 "alternateName": ["Safe Or Stolen", "SOS"],
 "description": "Protects buyers AND sellers from stolen goods. Mobile app exclusively available from SafeOrStolen.com.",
 "url": "https://safeorstolen.com",
 "slogan": "Protect Buyers & Sellers - Stop Stolen Goods at the Source"
 }
 },
 {
 "@context": "https://schema.org",
 "@type": "Organization",
 "name": "SafeOrStolen",
 "url": "https://safeorstolen.com",
 "logo": "https://safeorstolen.com/logo.png",
 "slogan": "Every Search Makes Stolen Items Harder to Sell",
 "contactPoint": {
 "@type": "ContactPoint",
 "email": "support@safeorstolen.com",
 "contactType": "Customer Support"
 }
 }
 ]}
 />
 {/* Minimal noscript fallback */}
 <noscript>
 <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
 <p><strong>About SafeOrStolen</strong></p>
 <p>Stolen item verification service. Check IMEI, VIN, serial numbers against our verification databases.</p>
 </div>
 </noscript>
 <div className="min-h-screen bg-background pt-20">
 <div className="container mx-auto px-4 pt-24 pb-4">
 <BreadcrumbNavigation items={[{ name: 'About Us', href: '/about' }]} />
 </div>
 
 {/* Simplified Hero Section */}
 <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
 <div className="container mx-auto px-4">
 <div className="max-w-3xl mx-auto text-center">
 <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
 Protect Buyers & Sellers - Stop Stolen Goods at the Source
 </h1>
  <p className="text-lg text-muted-foreground mb-6">
  SafeOrStolen protects BOTH buyers AND sellers. Every search makes stolen items harder to sell - 
  reducing crime globally.
  </p>

 <div className="flex flex-wrap justify-center gap-3">
 <Badge variant="secondary" className="px-3 py-1">
 <Shield className="h-4 w-4 mr-2" />
 6 Item Categories
              </Badge>
 <Badge variant="secondary" className="px-3 py-1">
 <Users className="h-4 w-4 mr-2" />
 5,000+ Checks Processed
 </Badge>
 </div>
 </div>
 </div>
 </section>

 {/* Why Check Before Buying - From Homepage */}
 <WhyCheckBeforeBuying />
 
 {/* Mission (Simplified) */}
 <section className="py-12">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto">
 <Card className="p-6">
 <h2 className="text-2xl font-bold mb-4 text-foreground">Our Mission: Stop Stolen Goods at the Source</h2>
 <p className="text-muted-foreground leading-relaxed mb-4">
 We protect BOTH buyers AND sellers from stolen goods. By giving honest people a simple way to verify items, 
 we make it dramatically harder for thieves to fence stolen goods. Every search makes stolen items harder to sell.
 </p>
  <p className="text-muted-foreground leading-relaxed mb-4">
  Most stolen-item tools cover one category. SafeOrStolen covers phones, vehicles, license plates, 
  electronics, power tools, firearms, and bicycles in one place.
  </p>

 <p className="text-muted-foreground leading-relaxed mb-4">
 SafeOrStolen participated in the Entrepreneurship World Cup 2020.
 </p>
 <p className="text-muted-foreground leading-relaxed mb-4">
 FasterCapital is SafeOrStolen's accelerator/incubator. SafeOrStolen joined the FasterCapital Acceleration Program in 2025.
 </p>
 <div className="border-t pt-4 mt-4">
 <p className="text-muted-foreground text-sm">
 Six item categories · our verification databases · Results in about 3 seconds
 </p>
 </div>
 </Card>
 </div>
 </div>
 </section>




 {/* Trust Indicators (Simplified to 3) */}
 <section className="py-12 bg-muted/30">
 <div className="container mx-auto px-4">
 <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
 <Card className="p-6 text-center">
 <Shield className="h-10 w-10 text-primary mx-auto mb-3" />
 <h3 className="font-bold mb-2 text-foreground">Bank-Level Security</h3>
 <p className="text-muted-foreground text-sm">256-bit SSL encryption</p>
 </Card>
 <Card className="p-6 text-center">
 <CheckCircle className="h-10 w-10 text-primary mx-auto mb-3" />
 <h3 className="font-bold mb-2 text-foreground">6 Item Categories</h3>
 <p className="text-muted-foreground text-sm">Phones, vehicles, plates, serials, firearms, bikes</p>
 </Card>
 <Card className="p-6 text-center">
 <Lock className="h-10 w-10 text-primary mx-auto mb-3" />
 <h3 className="font-bold mb-2 text-foreground">Zero Data Retention</h3>
 <p className="text-muted-foreground text-sm">GDPR compliant</p>
 </Card>
 </div>
 </div>
 </section>

 {/* Press & Media Section */}
 <section className="py-12">
 <div className="container mx-auto px-4">
 <div className="text-center mb-8">
 <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Press & Media</h2>
 <p className="text-muted-foreground max-w-2xl mx-auto">
 Featured in leading business platforms and trusted by verified reviewers
 </p>
 </div>
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
 <a
 href="https://www.trustpilot.com/review/safeorstolen.com"
 target="_blank"
 rel="noopener noreferrer"
 className="group"
 >
 <Card className="p-6 text-center h-full hover:border-primary/50 transition-colors">
 <div className="text-3xl mb-2">⭐</div>
 <h3 className="font-bold mb-1 text-foreground group-hover:text-primary">Trustpilot</h3>
 <p className="text-sm text-muted-foreground">Read customer reviews</p>
 </Card>
 </a>
 <a
 href="https://www.crunchbase.com/organization/safe-or-stolen"
 target="_blank"
 rel="noopener noreferrer"
 className="group"
 >
 <Card className="p-6 text-center h-full hover:border-primary/50 transition-colors">
 <div className="text-3xl mb-2">📊</div>
 <h3 className="font-bold mb-1 text-foreground group-hover:text-primary">Crunchbase</h3>
 <p className="text-sm text-muted-foreground">Company Profile</p>
 </Card>
 </a>
 <a
 href="https://biz.prlog.org/SafeOrStolen/"
 target="_blank"
 rel="noopener noreferrer"
 className="group"
 >
 <Card className="p-6 text-center h-full hover:border-primary/50 transition-colors">
 <div className="text-3xl mb-2">📰</div>
 <h3 className="font-bold mb-1 text-foreground group-hover:text-primary">PRLog</h3>
 <p className="text-sm text-muted-foreground">Press Releases</p>
 </Card>
 </a>
 </div>
 </div>
 </section>

 {/* Data Partners - We crawl and aggregate these sources */}
 <section className="py-12 bg-muted/30">
 <div className="container mx-auto px-4">
 <div className="text-center mb-8">
 <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Our Data Partners</h2>
 <p className="text-muted-foreground max-w-2xl mx-auto">
 We crawl, scrape, and aggregate data from 50+ trusted sources including community theft registries, 
 stolen property registries, and industry partners
 </p>
 </div>
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
 {dataPartners.map((partner, index) => (
 <Card key={index} className="p-4">
 <div className="flex items-center gap-2 mb-2">
 <Building className="h-5 w-5 text-primary" />
 <Badge variant="secondary" className="text-xs">{partner.type}</Badge>
 </div>
 <h3 className="font-bold mb-1 text-foreground text-sm">{partner.name}</h3>
 <p className="text-muted-foreground text-xs">
 {partner.description}
 </p>
 </Card>
 ))}
 </div>
 <div className="text-center mt-6">
 <p className="text-sm text-muted-foreground">
 <strong>How it works:</strong> We run parallel crawls across all partner databases, aggregate results in real-time, 
 and provide unified verification in under 3 seconds.
 </p>
 </div>
 </div>
 </section>

 {/* Why Choose SafeOrStolen */}
 <WhyChooseSafeOrStolen />

 {/* Testimonials */}
 <CompactTestimonials />
 </div>
 </>
 );
};

export default AboutPage;