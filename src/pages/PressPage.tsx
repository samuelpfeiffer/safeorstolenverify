import React from 'react';
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import { FileText, Download, Mail, ExternalLink, Award, Users, Shield, TrendingUp } from 'lucide-react';
import { PRESS_RELEASES } from '@/data/pressCoverage';

/**
 * Press Page - Real page for /press URL
 * Quick access to press resources and media kit
 */
const PressPage = () => {
 const pressHighlights = [
 {
 metric: "6",
 label: "Item Categories Verified",
 context: "Phones, vehicles, license plates, firearms, bicycles, and serial-numbered goods"
 },
 {
  metric: "AI",
  label: "Plain-Language Analysis",
 context: "By combining our own stolen-item reports, public web results, and AI analysis, SafeOrStolen offers a comprehensive check. Guns are also checked against police theft reports from 34 states, and bikes against a national stolen-bicycle registry."
 },
 {
 metric: "3 sec",
 label: "Average Verification Time",
 context: "Instant results from multiple data sources"
 },
 {
 metric: "2 free",
 label: "Verifications, No Card Required",
 context: "Then $3.99 per check or $14.99/month unlimited"
 }
 ];

 const mediaContacts = [
 {
 name: "Press Inquiries",
 email: "press@safeorstolen.com",
 description: "For interview requests and media coverage"
 },
 {
 name: "Partnership Inquiries",
 email: "partnerships@safeorstolen.com",
 description: "For business and platform integrations"
 }
 ];

 const verifiedProfiles = [
 { name: 'Crunchbase', url: 'https://www.crunchbase.com/organization/safe-or-stolen' },
 { name: 'Trustpilot', url: 'https://www.trustpilot.com/review/safeorstolen.com' },
 { name: 'PRLog Newsroom', url: 'https://biz.prlog.org/SafeOrStolen/' },
 { name: 'Facebook', url: 'https://www.facebook.com/safeorstolen/' }
 ];

 const organizationSchema = {
 "@context": "https://schema.org",
 "@type": "Organization",
 "name": "SafeOrStolen",
 "url": "https://safeorstolen.com",
 "logo": "https://safeorstolen.com/logo.png",
 "description": "AI-powered stolen item verification for phones, vehicles, license plates, firearms, bicycles, and serial-numbered goods",
 "sameAs": [
 "https://www.crunchbase.com/organization/safe-or-stolen",
 "https://www.trustpilot.com/review/safeorstolen.com",
 "https://biz.prlog.org/SafeOrStolen/",
 "https://www.facebook.com/safeorstolen/",
 "https://www.youtube.com/@safeorstolen",
 "https://x.com/safeorstolen"
 ],
 "contactPoint": {
 "@type": "ContactPoint",
 "contactType": "Press",
 "email": "press@safeorstolen.com"
 }
 };

 return (
 <>
 <PageSEO
 title="Press & Media — SafeOrStolen Newsroom"
 description="SafeOrStolen press center: published releases, media kit, and verified profiles for the AI-powered stolen item verification platform."
 keywords="safeorstolen press, safeorstolen news, stolen item verification company, safeorstolen media kit"
 canonical="/press"
 structuredData={[organizationSchema]}
 />
 <div className="min-h-screen bg-background pt-20">
 {/* Hero */}
 <section className="py-16 px-4 bg-gradient-to-b from-primary/10 to-background">
 <div className="max-w-6xl mx-auto text-center">
 <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6">
 <FileText className="w-5 h-5 text-primary" />
 <span className="text-sm font-medium">Press & Media</span>
 </div>
 
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 SafeOrStolen Press Center
 </h1>
 
 <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
 Resources for journalists, partners, and anyone interested in learning more about 
 SafeOrStolen's mission to protect buyers from stolen goods.
 </p>
 
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Button asChild size="lg" className="gap-2">
 <Link to="/press-kit">
 <Download className="w-5 h-5" />
 Download Press Kit
 </Link>
 </Button>
 <Button asChild variant="outline" size="lg" className="gap-2">
 <a href="mailto:press@safeorstolen.com">
 <Mail className="w-5 h-5" />
 Contact Press Team
 </a>
 </Button>
 </div>
 </div>
 </section>

 {/* Published Press Releases */}
 <section className="py-16 px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12">Published Press Releases</h2>
 <div className="space-y-6">
  {PRESS_RELEASES.map((pr, index) => (
 <Card key={index}>
 <CardContent className="pt-6">
 <p className="text-sm text-muted-foreground mb-2">
 {pr.outlet} · {pr.date}
 </p>
 <h3 className="text-xl font-semibold mb-3">{pr.title}</h3>
 {pr.url.startsWith('http') ? (
 <a
 href={pr.url}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 text-primary hover:underline"
 >
 Read the release <ExternalLink className="w-4 h-4" />
 </a>
 ) : (
 <Link to={pr.url} className="inline-flex items-center gap-2 text-primary hover:underline">
 Read the release →
 </Link>
 )}
 </CardContent>
 </Card>
 ))}
 </div>
 </div>
 </section>

 {/* Verified Profiles */}
 <section className="py-16 px-4 bg-muted/30">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-8">Verified Company Profiles</h2>
 <div className="flex flex-wrap justify-center gap-4">
 {verifiedProfiles.map((profile) => (
 <Button key={profile.name} asChild variant="outline" className="gap-2">
 <a href={profile.url} target="_blank" rel="noopener noreferrer">
 {profile.name} <ExternalLink className="w-4 h-4" />
 </a>
 </Button>
 ))}
 </div>
 </div>
 </section>

 {/* Key Stats */}

 <section className="py-16 px-4">
 <div className="max-w-6xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12">Key Statistics</h2>
 
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
 {pressHighlights.map((stat, index) => (
 <Card key={index}>
 <CardContent className="pt-6 text-center">
 <p className="text-4xl font-bold text-primary mb-2">{stat.metric}</p>
 <p className="font-semibold mb-2">{stat.label}</p>
 <p className="text-sm text-muted-foreground">{stat.context}</p>
 </CardContent>
 </Card>
 ))}
 </div>
 </div>
 </section>

 {/* About SafeOrStolen */}
 <section className="py-16 px-4 bg-muted/30">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-8">About SafeOrStolen</h2>
 
 <div className="prose prose-lg dark:prose-invert max-w-none">
 <p className="text-lg text-muted-foreground mb-6">
 SafeOrStolen is a technology company on a mission to eliminate the trade of stolen goods 
 in secondhand markets. We provide free and low-cost verification tools that allow anyone 
 to check if a phone, vehicle, or other item has been reported stolen before they buy it.
 </p>
 
 <p className="text-lg text-muted-foreground mb-6">
  Each check combines SafeOrStolen's stolen-item reports, public web results, and AI analysis.
  Gun checks also search police theft and loss reports from 34 states plus live Ohio records, and bike checks a national stolen-bicycle registry. Results usually arrive in a few seconds.
 </p>
 
 <p className="text-lg text-muted-foreground">
  SafeOrStolen was founded to protect buyers and sellers on Facebook Marketplace, OfferUp,
  Craigslist, and other secondhand platforms. It covers phones, vehicles, license plates,
  serial-numbered electronics and power tools, firearms, and bicycles in one place.
 </p>
 </div>
 </div>
 </section>

 {/* Recognition */}
 <section className="py-16 px-4">
 <div className="max-w-6xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12">Recognition & Awards</h2>
 
 <div className="grid md:grid-cols-2 gap-8">
 <Card>
 <CardHeader>
 <TrendingUp className="w-10 h-10 text-primary mb-2" />
  <CardTitle>Product Hunt Listing</CardTitle>
 </CardHeader>
 <CardContent>
 <p className="text-muted-foreground mb-4">
  View SafeOrStolen's public Product Hunt listing.
 </p>
 <Button asChild variant="link" className="px-0">
 <Link to="/product-hunt">View listing →</Link>
 </Button>
 </CardContent>
 </Card>

 <Card>
 <CardHeader>
 <Users className="w-10 h-10 text-primary mb-2" />
 <CardTitle>All Six Categories</CardTitle>
 </CardHeader>
 <CardContent>
 <p className="text-muted-foreground mb-4">
 Phones, vehicles, license plates, firearms, bicycles, and serial-numbered goods —
 electronics, power tools, and appliances — verified in one AI-powered platform.
 </p>
 <Button asChild variant="link" className="px-0">
 <Link to="/verify">Verify an item →</Link>
 </Button>
 </CardContent>
 </Card>
 </div>
 </div>
 </section>

 {/* Media Contact */}
 <section className="py-16 px-4 bg-muted/30">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12">Media Contacts</h2>
 
 <div className="grid md:grid-cols-2 gap-6">
 {mediaContacts.map((contact, index) => (
 <Card key={index}>
 <CardHeader>
 <Mail className="w-8 h-8 text-primary mb-2" />
 <CardTitle>{contact.name}</CardTitle>
 </CardHeader>
 <CardContent>
 <p className="text-muted-foreground mb-4">{contact.description}</p>
 <Button asChild variant="outline" className="gap-2">
 <a href={`mailto:${contact.email}`}>
 <Mail className="w-4 h-4" />
 {contact.email}
 </a>
 </Button>
 </CardContent>
 </Card>
 ))}
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="py-16 px-4">
 <div className="max-w-4xl mx-auto text-center">
 <h2 className="text-3xl font-bold mb-4">Download Full Press Kit</h2>
 <p className="text-xl text-muted-foreground mb-8">
 Get logos, brand guidelines, executive bios, and high-resolution images.
 </p>
 <Button asChild size="lg" className="gap-2">
 <Link to="/press-kit">
 <Download className="w-5 h-5" />
 Get Press Kit
 </Link>
 </Button>
 </div>
 </section>
 </div>
 </>
 );
};

export default PressPage;
