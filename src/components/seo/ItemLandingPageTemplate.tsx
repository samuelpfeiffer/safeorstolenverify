import { Link, useLocation } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { Shield, Search, CheckCircle, Clock, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
 Accordion,
 AccordionContent,
 AccordionItem,
 AccordionTrigger,
} from "@/components/ui/accordion";
import { PageSEO } from '@/components/seo/PageSEO';
import { DataPartnerBadges } from '@/components/trust/DataPartnerBadges';
import { AuthoritySignals } from '@/components/trust/AuthoritySignals';
import { SitewideCredibilityBar } from '@/components/trust/SitewideCredibilityBar';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

interface ItemLandingPageProps {
 title: string;
 metaDescription: string;
 h1: string;
 itemType: string;
 keywords: string[];
 content: {
 intro: string;
 whatIs: string;
 howItWorks: string;
 whyCheck: string;
 benefits: string[];
 process: string[];
 faqs: { question: string; answer: string }[];
 };
}

export const ItemLandingPageTemplate = ({
 title,
 metaDescription,
 h1,
 itemType,
 keywords,
 content
}: ItemLandingPageProps) => {
 const location = useLocation();
 
 const fullUrl = `https://safeorstolen.com${location.pathname}`;

 const serviceSchema = {
 "@context": "https://schema.org",
 "@type": "Service",
 "name": `${itemType} Verification Service`,
 "url": fullUrl,
 "provider": {
 "@type": "Organization",
 "name": "SafeOrStolen",
 "url": "https://safeorstolen.com"
 },
 "serviceType": `${itemType} Theft Verification`,
 "areaServed": {
 "@type": "Place",
 "name": "Worldwide"
 },
 "description": metaDescription,
 "dateModified": "2026-03-10"
 };

 const howToSchema = {
 "@context": "https://schema.org",
 "@type": "HowTo",
 "name": `How to Check if ${itemType} is Stolen`,
 "dateModified": "2026-03-10",
 "step": content.process.map((step, index) => ({
 "@type": "HowToStep",
 "position": index + 1,
 "name": `Step ${index + 1}`,
 "text": step
 }))
 };

 const breadcrumbSchema = {
 "@context": "https://schema.org",
 "@type": "BreadcrumbList",
 "itemListElement": [
 { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://safeorstolen.com" },
 { "@type": "ListItem", "position": 2, "name": `${itemType} Verification`, "item": fullUrl }
 ]
 };

 const faqSchema = content.faqs && content.faqs.length > 0 ? {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": content.faqs.map(faq => ({
 "@type": "Question",
 "name": faq.question,
 "acceptedAnswer": {
 "@type": "Answer",
 "text": faq.answer.replace(/[""]/g, '"').replace(/['']/g, "'")
 }
 }))
 } : null;

 const structuredData = [serviceSchema, howToSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])];

 return (
 <>
 <PageSEO
 title={title}
 description={metaDescription}
 keywords={keywords.join(', ')}
 canonical={location.pathname}
 structuredData={structuredData}
 />

 {/* Comprehensive noscript for crawlers */}
 <noscript>
 <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'system-ui, sans-serif', lineHeight: '1.6' }}>
 <header>
 <nav><a href="/">SafeOrStolen</a> &gt; {itemType} Verification</nav>
 </header>
 <main>
 <h1>{h1}</h1>
 <p>{content.intro}</p>
 
 <h2>What is {itemType} Verification?</h2>
 <p>{content.whatIs}</p>
 
 <h2>How to Check if {itemType} is Stolen</h2>
 <ol>
 {content.process.map((step, i) => (
 <li key={i}>{step}</li>
 ))}
 </ol>
 <p>{content.howItWorks}</p>
 
 <h2>Why Check Before Buying?</h2>
 <p>{content.whyCheck}</p>
 <ul>
 {content.benefits.map((b, i) => (
 <li key={i}>{b}</li>
 ))}
 </ul>
 
 <h2>Databases We Search</h2>
 <p>SafeOrStolen checks 100+ databases including vehicle theft and title databases, carrier and theft databases, stolen property reports from all 50 states, and law enforcement records across all 50 US states. Results in 3 seconds.</p>
 
 <h2>Frequently Asked Questions</h2>
 {content.faqs.map((faq, i) => (
 <div key={i}>
 <h3>{faq.question}</h3>
 <p>{faq.answer}</p>
 </div>
 ))}
 
 <h2>Related Verification Tools</h2>
 <ul>
 <li><a href="/imei-checker">IMEI Checker</a> - Verify phones</li>
 <li><a href="/vin-checker">VIN Checker</a> - Verify vehicles</li>
 <li><a href="/serial-number-checker">Serial Number Checker</a> - Verify electronics</li>
 <li><a href="/firearms-check">Firearm Check</a> - Verify firearms</li>
 <li><a href="/license-plate-lookup">License Plate Lookup</a> - Check by plate</li>
 <li><a href="/verify">Verify Any Item</a></li>
 <li><a href="/pricing">Pricing - $10/mo Unlimited</a></li>
 </ul>
 
 <p>SafeOrStolen is the only verification platform with a mobile app. Check phones, cars, electronics, firearms — all in one place. <a href="/verify">Verify now</a> — 2 free checks, then $0.99/check or $10/month unlimited.</p>
 </main>
 </div>
 </noscript>

 <TopNavigation />

 <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
 {/* Hero Section */}
 <section className="pt-24 pb-16 px-4" style={{ minHeight: '60vh' }}>
 <div className="max-w-6xl mx-auto">
 <div className="text-center mb-12">
 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-destructive to-primary bg-clip-text text-transparent">
 {h1}
 </h1>
 <p 
 className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 [&_a]:text-primary [&_a]:underline [&_a]:hover:text-primary/80"
 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.intro, { ALLOWED_TAGS: ['a', 'strong', 'em', 'p', 'br', 'span'], ALLOWED_ATTR: ['href', 'target', 'rel', 'class'] }) }}
 />
 <Link to="/verify">
 <Button size="lg" className="gap-2">
 Check {itemType} Now <ArrowRight className="w-4 h-4" />
 </Button>
 </Link>
 </div>

 {/* Trust Indicators */}
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
 <div className="flex flex-col items-center p-4 bg-card rounded-lg">
 <Shield className="w-8 h-8 text-primary mb-2" />
 <span className="text-sm font-semibold">Secure</span>
 </div>
 <div className="flex flex-col items-center p-4 bg-card rounded-lg">
 <Clock className="w-8 h-8 text-primary mb-2" />
 <span className="text-sm font-semibold">3 Seconds</span>
 </div>
 <div className="flex flex-col items-center p-4 bg-card rounded-lg">
 <CheckCircle className="w-8 h-8 text-primary mb-2" />
 <span className="text-sm font-semibold">100+ Databases</span>
 </div>
 <div className="flex flex-col items-center p-4 bg-card rounded-lg">
 <Award className="w-8 h-8 text-primary mb-2" />
 <span className="text-sm font-semibold">Mobile App</span>
 </div>
 </div>
 </div>
 </section>

 <SitewideCredibilityBar />

 {/* What Is Section */}
 <section className="py-16 px-4 bg-card/50">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-6">What is {itemType} Verification?</h2>
 <p 
 className="text-lg text-muted-foreground leading-relaxed [&_a]:text-primary [&_a]:underline [&_a]:hover:text-primary/80 mb-8"
 dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.whatIs, { ALLOWED_TAGS: ['a', 'strong', 'em', 'p', 'br', 'span'], ALLOWED_ATTR: ['href', 'target', 'rel', 'class'] }) }}
 />
 <DataPartnerBadges variant="compact" />
 </div>
 </section>

 {/* How It Works */}
 <section className="py-16 px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
 <div className="space-y-6">
 {content.process.map((step, index) => (
 <div key={index} className="flex gap-4 p-6 bg-card rounded-lg">
 <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
 {index + 1}
 </div>
 <p className="text-lg">{step}</p>
 </div>
 ))}
 </div>
 <p className="mt-8 text-lg text-muted-foreground">{content.howItWorks}</p>
 </div>
 </section>

 {/* Why Check Section */}
 <section className="py-16 px-4 bg-card/50">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-6">Why Check Before Buying?</h2>
 <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{content.whyCheck}</p>
 <div className="grid md:grid-cols-2 gap-4">
 {content.benefits.map((benefit, index) => (
 <div key={index} className="flex gap-3 p-4 bg-background rounded-lg">
 <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
 <span className="text-base">{benefit}</span>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* FAQ Section */}
 <section className="py-16 px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
 <Accordion type="single" collapsible className="space-y-4">
 {content.faqs.map((faq, index) => (
 <AccordionItem key={index} value={`item-${index}`} className="bg-card px-6 rounded-lg">
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

 {/* Related Verification Tools */}
 <section className="py-16 px-4 bg-card/50">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-6">Related Verification Tools</h2>
 <div className="grid md:grid-cols-3 gap-4">
 <Link to="/imei-checker" className="p-6 bg-background rounded-lg hover:shadow-lg transition-shadow">
 <h3 className="font-bold mb-2">IMEI Checker</h3>
 <p className="text-sm text-muted-foreground">Verify phones before buying</p>
 </Link>
 <Link to="/vin-checker" className="p-6 bg-background rounded-lg hover:shadow-lg transition-shadow">
 <h3 className="font-bold mb-2">VIN Checker</h3>
 <p className="text-sm text-muted-foreground">Full vehicle history check</p>
 </Link>
 <Link to="/serial-number-checker" className="p-6 bg-background rounded-lg hover:shadow-lg transition-shadow">
 <h3 className="font-bold mb-2">Serial Number Checker</h3>
 <p className="text-sm text-muted-foreground">Check electronics & appliances</p>
 </Link>
 <Link to="/firearms-check" className="p-6 bg-background rounded-lg hover:shadow-lg transition-shadow">
 <h3 className="font-bold mb-2">Firearm Check</h3>
 <p className="text-sm text-muted-foreground">Verify firearm serial numbers</p>
 </Link>
 <Link to="/license-plate-lookup" className="p-6 bg-background rounded-lg hover:shadow-lg transition-shadow">
 <h3 className="font-bold mb-2">License Plate Lookup</h3>
 <p className="text-sm text-muted-foreground">Check vehicles by plate</p>
 </Link>
 <Link to="/app" className="p-6 bg-background rounded-lg hover:shadow-lg transition-shadow">
 <h3 className="font-bold mb-2">Mobile App</h3>
 <p className="text-sm text-muted-foreground">Scan barcodes on the go</p>
 </Link>
 </div>
 </div>
 </section>

 <AuthoritySignals variant="banner" className="mb-0" />

 {/* CTA Section */}
 <section className="py-16 px-4 bg-gradient-to-r from-primary/10 via-destructive/10 to-primary/10">
 <div className="max-w-4xl mx-auto text-center">
 <h2 className="text-3xl font-bold mb-4">Ready to Verify Your {itemType}?</h2>
 <p className="text-lg text-muted-foreground mb-8">
 Get instant verification results in 3 seconds. Protect yourself from stolen goods.
 </p>
 <div className="flex gap-4 justify-center flex-wrap">
 <Link to="/verify">
 <Button size="lg" className="gap-2">
 Verify Now — Free <Search className="w-4 h-4" />
 </Button>
 </Link>
 <Link to="/pricing">
 <Button size="lg" variant="outline">
 $10/mo Unlimited
 </Button>
 </Link>
 </div>
 </div>
 </section>
 </div>

 <Footer />
 </>
 );
};