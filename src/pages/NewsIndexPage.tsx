import React from 'react';
import { Link } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Newspaper, Shield, Smartphone, Globe, Target } from 'lucide-react';

/**
 * News Index Page - Lists all news articles and company announcements
 * Provides substantial content to address SOFT_404 error
 */
const NewsIndexPage = () => {
 const newsSchema = {
 "@context": "https://schema.org",
 "@type": "CollectionPage",
 "name": "SafeOrStolen News & Announcements",
 "description": "Latest news, press releases, and company announcements from SafeOrStolen",
 "publisher": {
 "@type": "Organization",
 "name": "SafeOrStolen"
 }
 };

  const milestones = [
  { year: "2019", event: "SafeOrStolen founded with mission to protect secondhand buyers and sellers" },
  { year: "2021", event: "Launched comprehensive IMEI verification with carrier blacklist checks" },
  { year: "2022", event: "Expanded to vehicle verification with vehicle theft and title databases integration" },
  { year: "2023", event: "Added barcode and serial number scanning to the mobile web experience" },
  { year: "2024", event: "Expanded coverage across firearm and bicycle theft registries" },
  { year: "2025", event: "Launched API for marketplace integration, expanded international coverage" },
  { year: "2026", event: "Full site-wide 2026 refresh, enhanced SEO, AI-powered verification upgrades" }
  ];


 return (
 <>
 <PageSEO
 title="SafeOrStolen News - Latest Updates & Press Releases"
 description="News and press releases from SafeOrStolen, the AI-powered platform helping buyers, sellers, and businesses verify items before they trade."
 keywords="safeorstolen news, stolen item verification news, company announcements, press releases"
 canonical="/news"
 structuredData={newsSchema}
 />
 <div className="min-h-screen bg-background">
 {/* Hero Section */}
 <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto text-center">
 <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
 <Newspaper className="w-4 h-4 mr-2" />
 News & Updates
 </Badge>
 <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
 SafeOrStolen News & Announcements
 </h1>
 <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
 Stay updated on the latest developments, partnerships, and innovations as we work to 
 protect buyers and sellers from stolen goods in the $150 billion secondhand market.
 </p>
 </div>
 </div>
 </section>

 {/* Company Overview Section */}
 <section className="py-16 bg-muted/30">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-2xl font-bold mb-8">About SafeOrStolen</h2>
 
 <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
  <p className="mb-6">
  SafeOrStolen is a technology company dedicated to protecting buyers and sellers in the secondhand market 
  from stolen goods. Our platform provides instant verification of phones (IMEI), vehicles (VIN), and any 
  item with a serial number. We check stolen-property registries, carrier blacklists, vehicle theft records, and firearm and bicycle theft databases — including registries that receive reports from and are used by law enforcement.
  </p>
  
  <p className="mb-6">
  Founded in 2017, SafeOrStolen is built for individual buyers, marketplaces, pawn shops, and insurance 
  professionals. Barcode and serial scanning on mobile enables 3-second verification, making due 
  diligence accessible to everyone.
  </p>


 <p>
 Our mission is simple: ensure that no one unknowingly buys or sells stolen property. The secondhand market 
 represents over $150 billion annually in the US alone, and an estimated 5-15% of items sold in unstructured 
 marketplaces like Facebook Marketplace, Craigslist, and OfferUp have questionable origins.
 </p>
 </div>

 <div className="grid md:grid-cols-3 gap-6">
 <Card>
 <CardContent className="pt-6 text-center">
 <Shield className="w-10 h-10 mx-auto mb-3 text-primary" />
 <h3 className="font-semibold text-lg mb-2">50M+ Items</h3>
 <p className="text-sm text-muted-foreground">Verified stolen items in our database</p>
 </CardContent>
 </Card>
 <Card>
 <CardContent className="pt-6 text-center">
 <Smartphone className="w-10 h-10 mx-auto mb-3 text-primary" />
 <h3 className="font-semibold text-lg mb-2">3 Second Checks</h3>
 <p className="text-sm text-muted-foreground">Instant verification with barcode scanning</p>
 </CardContent>
 </Card>
 <Card>
 <CardContent className="pt-6 text-center">
 <Globe className="w-10 h-10 mx-auto mb-3 text-primary" />
 <h3 className="font-semibold text-lg mb-2">All 50 States</h3>
 <p className="text-sm text-muted-foreground">Nationwide law enforcement data</p>
 </CardContent>
 </Card>
 </div>
 </div>
 </div>
 </section>

 {/* Company Timeline */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
 <Target className="w-6 h-6 text-primary" />
 Company Milestones
 </h2>

 <div className="space-y-4">
 {milestones.map((milestone, i) => (
 <Card key={i}>
 <CardContent className="flex items-center gap-4 py-4">
 <Badge variant="secondary" className="font-mono text-lg px-3 py-1">
 {milestone.year}
 </Badge>
 <p className="text-foreground">{milestone.event}</p>
 </CardContent>
 </Card>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* Media Contact */}
 <section className="py-16 bg-muted/30">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-2xl font-bold mb-8">Media & Press Inquiries</h2>
 
 <Card>
 <CardContent className="p-6">
 <p className="text-muted-foreground mb-6">
 For press inquiries, interview requests, or media resources, please contact our team. 
 We're happy to provide quotes, statistics, and expert commentary on topics related to 
 stolen goods, secondhand market safety, and consumer protection.
 </p>
 
 <div className="flex flex-wrap gap-4">
 <Button asChild>
 <Link to="/press">Press & Media Kit</Link>
 </Button>
 <Button asChild variant="outline">
 <Link to="/about">About SafeOrStolen</Link>
 </Button>
 </div>
 </CardContent>
 </Card>
 </div>
 </div>
 </section>

 {/* CTA Section */}
 <section className="py-16 bg-primary text-primary-foreground">
 <div className="container mx-auto px-4 text-center">
 <h2 className="text-3xl font-bold mb-6">Experience SafeOrStolen</h2>
 <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
 Try our free stolen item verification and see why we're trusted by buyers, sellers, 
 and businesses nationwide.
 </p>
 <div className="flex flex-wrap justify-center gap-4">
 <Button asChild size="lg" variant="secondary">
 <Link to="/verify">Verify an Item Free</Link>
 </Button>
 <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
 <Link to="/app">Download the App</Link>
 </Button>
 </div>
 </div>
 </section>
 </div>
 </>
 );
};

export default NewsIndexPage;
