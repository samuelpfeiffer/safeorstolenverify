import { OtherStatesModule } from '@/components/seo/StateLinksGrid';
import { Link } from '@/lib/router-compat';
import { Shield, Search, MapPin, ArrowRight, AlertTriangle, CheckCircle, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getStateUniqueContent, StateUniqueContent } from '@/config/stateUniqueContent';
import { SEOHead } from '@/components/seo/SEOHead';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';

import {
 Accordion,
 AccordionContent,
 AccordionItem,
 AccordionTrigger,
} from "@/components/ui/accordion";

interface StateVinPageProps {
 state: string;
 stateCode: string;
 title: string;
 metaDescription: string;
 topCities: string[];
 dmvLink: string;
 content: {
 intro: string;
 whyCheck: string;
 localLaws: string;
 };
 faqs: { question: string; answer: string }[];
 slug?: string;
}

export const StateVinPageTemplate = ({
 state,
 stateCode,
 title,
 metaDescription,
 topCities,
 dmvLink,
 content,
 faqs,
 slug
}: StateVinPageProps) => {
 try {
 const urlPath = slug || `${state.toLowerCase().replace(/\s+/g, '-')}-vin-lookup`;
 const canonicalUrl = `https://safeorstolen.com/${urlPath}`;
 
 const licensePlateSlug = `${state.toLowerCase().replace(/\s+/g, '-')}-license-plate-lookup`;
 const uniqueContent: StateUniqueContent | undefined = getStateUniqueContent(licensePlateSlug);

 // Combine all FAQs for schema
 const allFaqs = [
 ...faqs,
 ...(uniqueContent?.uniqueFaqs || [])
 ];
 
 const schema = [
 {
 "@context": "https://schema.org",
 "@type": "Service",
 "name": `${state} VIN Check Service`,
 "provider": {
 "@type": "Organization",
 "name": "SafeOrStolen",
 "url": "https://safeorstolen.com"
 },
 "serviceType": "Vehicle History Verification",
 "areaServed": {
 "@type": "State",
 "name": state
 },
 "description": metaDescription,
 "dateModified": "2026-03-10"
 },
 {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": allFaqs.map(faq => ({
 "@type": "Question",
 "name": faq.question,
 "acceptedAnswer": {
 "@type": "Answer",
 "text": faq.answer
 }
 }))
 },
 {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 "itemListElement": [
 { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://safeorstolen.com" },
 { "@type": "ListItem", "position": 2, "name": "VIN Checker", "item": "https://safeorstolen.com/vin-checker" },
 { "@type": "ListItem", "position": 3, "name": `${state} VIN Lookup`, "item": canonicalUrl }
 ]
 },
 {
 "@context": "https://schema.org",
 "@type": "HowTo",
 "name": `How to Check a ${state} VIN`,
 "dateModified": "2026-03-10",
 "step": [
 { "@type": "HowToStep", "position": 1, "name": "Find the VIN", "text": `Locate the 17-character VIN on the ${state} vehicle's dashboard, driver-side door jamb, or title document.` },
 { "@type": "HowToStep", "position": 2, "name": "Enter the VIN", "text": "Enter the VIN into SafeOrStolen's verification tool on the verify page." },
 { "@type": "HowToStep", "position": 3, "name": "Review results", "text": `SafeOrStolen checks the VIN against multiple sources including and ${state} theft reports in 3 seconds.` },
 { "@type": "HowToStep", "position": 4, "name": "Make your decision", "text": "Review the verification certificate showing stolen status, title history, and risk assessment before purchasing." }
 ]
 }
 ];

 return (
 <>
 <SEOHead
 title={title}
 description={metaDescription}
 canonical={canonicalUrl}
 keywords={`${state} VIN check, ${stateCode} stolen car lookup, ${state} vehicle history, ${state} VIN verification, ${state} stolen vehicle database, ${state} VIN check 2026`}
 schemaJson={schema}
 />

 {/* Comprehensive noscript for crawlers */}
 <noscript>
 <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui, sans-serif', lineHeight: '1.6' }}>
 <header>
 <nav><a href="/">SafeOrStolen</a> &gt; <a href="/vin-checker">VIN Checker</a> &gt; {state} VIN Lookup</nav>
 </header>
 <div>
 <h1>{state} VIN Lookup — {stateCode} Stolen Vehicle Check (2026)</h1>
 <p>{content.intro}</p>
 
 <h2>Why Verify {state} Vehicles?</h2>
 <p>{content.whyCheck}</p>
 
 <h2>{state} Laws on Stolen Vehicles</h2>
 <p>{content.localLaws}</p>
 
 <h2>How to Check a {state} VIN</h2>
 <ol>
 <li>Find the 17-character VIN on the vehicle dashboard, door jamb, or title.</li>
 <li>Enter the VIN into SafeOrStolen's verification tool.</li>
 <li>We check multiple sources including and {state} theft reports in 3 seconds.</li>
 <li>Review stolen status, title history, and risk assessment before purchasing.</li>
 </ol>
 
 <h2>What Databases We Search for {state} Vehicles</h2>
 <ul>
 <li>Vehicle theft and title databases - title history</li>
 <li>{state} vehicle registration and title status databases</li>
 <li>community theft reports</li>
 </ul>
 
 <h2>Top Cities for Vehicle Theft in {state}</h2>
 <p>Vehicle theft is a concern in {topCities.join(', ')} and throughout {state}. Always verify any used vehicle before purchasing.</p>
 
 {uniqueContent && (
 <>
 <h2>{state} Vehicle Market Overview</h2>
 <p>{uniqueContent.vehicleMarketParagraph}</p>
 <h2>{state} Vehicle Theft Patterns</h2>
 <p>{uniqueContent.theftPatternsParagraph}</p>
 <h2>{state} Stolen Vehicle Laws</h2>
 <p>{uniqueContent.legalConsequencesParagraph}</p>
 </>
 )}
 
 <h2>Frequently Asked Questions</h2>
 {allFaqs.map((faq, i) => (
 <div key={i}>
 <h3>{faq.question}</h3>
 <p>{faq.answer}</p>
 </div>
 ))}
 
 <h2>Related Resources</h2>
 <ul>
 <li><a href="/vin-checker">Free VIN Checker</a></li>
 <li><a href="/license-plate-lookup">{state} License Plate Lookup</a></li>
 <li><a href="/imei-checker">IMEI Checker</a></li>
 <li><a href="/verify">Verify Any Item</a></li>
 <li><a href="/pricing">Pricing - From $0.99/check</a></li>
 </ul>
 
 <p>SafeOrStolen checks our verification databases in about 3 seconds. Protect yourself from stolen vehicles in {state}. <a href="/verify">Verify now</a> — 2 free checks, then $0.99/check or $10/month unlimited.</p>
 </div>
 </div>
 </noscript>
 <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
 {/* Hero Section */}
 <section className="pt-24 pb-16 px-4">
 <div className="max-w-6xl mx-auto">
 <div className="flex items-center justify-center gap-3 mb-6">
 <MapPin className="w-8 h-8 text-primary" />
 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent">
 {state} VIN Lookup
 </h1>
 </div>
 <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-center mb-8">
 {content.intro}
 </p>
 <div className="text-center">
 <Link to="/verify">
 <Button size="lg" className="gap-2">
 Check {state} VIN Now <ArrowRight className="w-4 h-4" />
 </Button>
 </Link>
 </div>
 </div>
 </section>

 {/* Why Verify Section */}
 <section className="py-16 px-4 bg-card/50">
 <div className="max-w-6xl mx-auto">
 <h2 className="text-3xl font-bold mb-8 text-center">Why Verify {state} Vehicles?</h2>
 <div className="grid md:grid-cols-3 gap-6">
 <div className="p-6 bg-background rounded-lg text-center">
 <AlertTriangle className="w-12 h-12 text-destructive mx-auto mb-4" />
 <h3 className="text-xl font-bold mb-2">Theft Risk</h3>
 <p className="text-muted-foreground">Vehicle theft is a concern in {state}. Verify before you buy.</p>
 </div>
 <div className="p-6 bg-background rounded-lg text-center">
 <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
 <h3 className="text-xl font-bold mb-2">Legal Protection</h3>
 <p className="text-muted-foreground">Avoid legal issues from unknowingly purchasing stolen property.</p>
 </div>
 <div className="p-6 bg-background rounded-lg text-center">
 <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
 <h3 className="text-xl font-bold mb-2">Major Cities</h3>
 <div className="text-muted-foreground space-y-1">
 {topCities.slice(0, 3).map((city, i) => (
 <div key={i}>{city}</div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Why Check Section */}
 <section className="py-16 px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-6">Why Check VINs in {state}?</h2>
 <p className="text-lg text-muted-foreground leading-relaxed mb-8">{content.whyCheck}</p>
 
 <div className="grid md:grid-cols-2 gap-6">
 <div className="p-6 bg-card rounded-lg">
 <Shield className="w-10 h-10 text-primary mb-4" />
 <h3 className="text-xl font-semibold mb-3">Protect Your Investment</h3>
 <p className="text-muted-foreground">
 Avoid buying stolen vehicles that can be repossessed at any time, leaving you with zero recourse.
 </p>
 </div>
 <div className="p-6 bg-card rounded-lg">
 <AlertTriangle className="w-10 h-10 text-destructive mb-4" />
 <h3 className="text-xl font-semibold mb-3">Legal Consequences</h3>
 <p className="text-muted-foreground">
 In {state}, possessing stolen property can result in criminal charges, even if you didn't know it was stolen.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* How It Works */}
 <section className="py-16 px-4 bg-card/50">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-8 text-center">How to Check a {state} VIN</h2>
 <div className="space-y-6">
 {[
 `Find the 17-character VIN on the ${state} vehicle's dashboard, door jamb, or title document`,
 "Enter the VIN into SafeOrStolen's free verification tool",
 `We check our verification databases, including in about 3 seconds`,
 "Review stolen status, title history, and risk assessment before purchasing"
 ].map((step, index) => (
 <div key={index} className="flex gap-4 p-6 bg-background rounded-lg">
 <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
 {index + 1}
 </div>
 <p className="text-lg flex items-center">{step}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Local Laws Section */}
 <section className="py-16 px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-6">{state} Laws on Stolen Vehicles</h2>
 <p className="text-lg text-muted-foreground leading-relaxed mb-6">{content.localLaws}</p>
 <div className="p-6 bg-card rounded-lg border-l-4 border-primary">
 <p className="font-semibold mb-2">Official {state} DMV Resources:</p>
 <a href={dmvLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
 {state} Department of Motor Vehicles
 </a>
 </div>
 </div>
 </section>

 {/* UNIQUE CONTENT: Vehicle Market & Theft Patterns */}
 {uniqueContent && (
 <section className="py-16 px-4 bg-card/50">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-6">{state} Vehicle Market & Theft Overview</h2>
 <p className="text-lg text-muted-foreground leading-relaxed mb-8">
 {uniqueContent.vehicleMarketParagraph}
 </p>
 
 <h3 className="text-2xl font-bold mb-4">Understanding {state} Vehicle Theft Patterns</h3>
 <p className="text-lg text-muted-foreground leading-relaxed mb-8">
 {uniqueContent.theftPatternsParagraph}
 </p>

 <div className="bg-card rounded-lg p-6 mb-8">
 <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
 <AlertTriangle className="w-5 h-5 text-destructive" />
 Commonly Targeted Vehicles in {state}
 </h4>
 <div className="flex flex-wrap gap-2">
 {uniqueContent.commonTargets.map((vehicle, idx) => (
 <span key={idx} className="px-3 py-1 bg-destructive/10 text-destructive rounded-full text-sm font-medium">
 {vehicle}
 </span>
 ))}
 </div>
 </div>

 <div className="bg-primary/5 rounded-lg p-6 mb-6">
 <h4 className="text-xl font-semibold mb-4">{state} VIN Check Tips</h4>
 <ul className="space-y-3">
 {uniqueContent.buyingTips.map((tip, idx) => (
 <li key={idx} className="flex gap-3">
 <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
 <span className="text-muted-foreground">{tip}</span>
 </li>
 ))}
 </ul>
 </div>

 <div className="p-6 bg-card border-l-4 border-primary rounded-lg">
 <h4 className="font-semibold mb-2">Expert VIN Verification Advice</h4>
 <p className="text-muted-foreground">{uniqueContent.verificationAdvice}</p>
 </div>
 </div>
 </section>
 )}

 {/* What Databases We Search */}
 <section className="py-16 px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-8">What Databases We Search for {state} Vehicles</h2>
 <div className="grid md:grid-cols-2 gap-4">
 {[
 { name: 'Vehicle theft and title databases', desc: 'Theft claims, salvage and title records' },
 { name: `${state} DMV`, desc: 'Registration and title status records' },
 { name: `${state} Law Enforcement`, desc: 'Active stolen vehicle reports' },
 { name: 'Insurance Records', desc: 'Claims history across all 50 states' },
 ].map((db, idx) => (
 <div key={idx} className="flex gap-3 p-4 bg-card rounded-lg">
 <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
 <div>
 <span className="font-semibold">{db.name}</span>
 <p className="text-sm text-muted-foreground">{db.desc}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* FAQ Section */}
 <section className="py-16 px-4 bg-card/50">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-8 text-center">{state} VIN Check FAQs</h2>
 <Accordion type="single" collapsible className="space-y-4">
 {faqs.map((faq, index) => (
 <AccordionItem key={index} value={`item-${index}`} className="bg-background px-6 rounded-lg">
 <AccordionTrigger className="text-left font-semibold">
 {faq.question}
 </AccordionTrigger>
 <AccordionContent className="text-muted-foreground">
 {faq.answer}
 </AccordionContent>
 </AccordionItem>
 ))}
 {uniqueContent?.uniqueFaqs.map((faq, idx) => (
 <AccordionItem key={`unique-${idx}`} value={`unique-item-${idx}`} className="bg-background px-6 rounded-lg">
 <AccordionTrigger className="text-left font-semibold">
 {faq.question}
 </AccordionTrigger>
 <AccordionContent className="text-muted-foreground">
 {faq.answer}
 </AccordionContent>
 </AccordionItem>
 ))}
 </Accordion>
 </div>
 </section>

 {/* Related Pages */}
 <section className="py-16 px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-6">Related Verification Tools</h2>
 <div className="grid md:grid-cols-3 gap-4 mb-8">
 <Link to={`/${state.toLowerCase().replace(/\s+/g, '-')}-license-plate-lookup`} className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow">
 <h3 className="font-bold mb-2">{state} License Plate Lookup</h3>
 <p className="text-sm text-muted-foreground">Check {stateCode} vehicles by plate number</p>
 </Link>
 <Link to="/vin-checker" className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow">
 <h3 className="font-bold mb-2">Free VIN Checker</h3>
 <p className="text-sm text-muted-foreground">Check any vehicle nationwide</p>
 </Link>
 <Link to="/imei-checker" className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow">
 <h3 className="font-bold mb-2">IMEI Checker</h3>
 <p className="text-sm text-muted-foreground">Verify phones before buying</p>
 </Link>
 <Link to="/check-if-stolen" className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow">
 <h3 className="font-bold mb-2">Universal Stolen Check</h3>
 <p className="text-sm text-muted-foreground">Check any item type</p>
 </Link>
 <Link to="/firearms-check" className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow">
 <h3 className="font-bold mb-2">Firearm Check</h3>
 <p className="text-sm text-muted-foreground">Verify firearm serial numbers</p>
 </Link>
 <Link to="/pricing" className="p-6 bg-card rounded-lg hover:shadow-lg transition-shadow">
 <h3 className="font-bold mb-2">Pricing</h3>
 <p className="text-sm text-muted-foreground">From $0.99/check or $10/mo unlimited</p>
 </Link>
 </div>
 </div>
 </section>

 {/* CTA Section */}
 <OtherStatesModule kind="vin" currentPath={`/${urlPath}`} />

 <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-destructive/10 to-primary/10">
 <div className="max-w-4xl mx-auto text-center">
 <h2 className="text-3xl font-bold mb-4">Check Any {state} VIN</h2>
 <p className="text-lg text-muted-foreground mb-8">
 $10/month unlimited VIN verification for {state} vehicles. Quick results from our verification databases.
 </p>
 <div className="flex gap-4 justify-center flex-wrap">
 <Link to="/verify">
 <Button size="lg" className="gap-2">
 Verify Now — Free <Search className="w-4 h-4" />
 </Button>
 </Link>
 <Link to="/pricing">
 <Button size="lg" variant="outline" className="gap-2">
 See Pricing
 </Button>
 </Link>
 </div>
 </div>
 </section>
 </div>
 </>
 );
 } catch (error) {
 console.error('StateVinPageTemplate error:', error);
 return (
 <div className="min-h-screen bg-background flex items-center justify-center p-4">
 <div className="text-center max-w-md">
 <h1 className="text-2xl font-bold mb-4">Page Temporarily Unavailable</h1>
 <p className="text-muted-foreground mb-4">
 We're experiencing technical difficulties loading this page. Please try again later.
 </p>
 <Link to="/verify">
 <Button variant="default">Return to Verification Page</Button>
 </Link>
 </div>
 </div>
 );
 }
};