import { Link, useLocation } from '@/lib/router-compat';
import DOMPurify from 'dompurify';
import { Shield, Search, CheckCircle, Clock, Award } from 'lucide-react';

// DOMPurify requires a browser DOM (window/document). Under SSR (TanStack Start
// server render, no DOM) its sanitize() throws, which kills the entire page
// component — no body content AND no PageSEO title/description/canonical reach
// the server-rendered HTML. These content strings are trusted author copy (hard
// coded in each page component), so on the server we render them verbatim and
// only sanitize in the browser where DOMPurify is functional.
const sanitizeHtml = (html: string): string =>
  typeof window !== 'undefined'
    ? DOMPurify.sanitize(html, { ALLOWED_TAGS: ['a', 'strong', 'em', 'p', 'br', 'span'], ALLOWED_ATTR: ['href', 'target', 'rel', 'class'] })
    : html;
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
import { InlineSerialCheck } from '@/components/seo/InlineSerialCheck';

/** Extra hand-written sections a page can add below the quick answer. */
export interface LandingSection {
 heading: string;
 paragraphs?: string[];
 list?: string[];
 table?: { columns: string[]; rows: string[][] };
}

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
 dateModified?: string;
 /** Item hint passed to /verify (e.g. 'firearm', 'imei', 'vin', 'bike'). */
 searchType?: string;
 searchPlaceholder?: string;
 /** Short direct answer shown near the top (and first in the FAQ schema). */
 quickAnswer?: { question: string; answer: string };
 sections?: LandingSection[];
}

export const ItemLandingPageTemplate = ({
 title,
 metaDescription,
 h1,
 itemType,
 keywords,
 content,
 dateModified = "2026-03-10",
 searchType,
 searchPlaceholder,
 quickAnswer,
 sections = []
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
 "dateModified": dateModified
 };

 const howToSchema = {
 "@context": "https://schema.org",
 "@type": "HowTo",
 "name": `How to Check if ${itemType} is Stolen`,
 "dateModified": dateModified,
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

 const allFaqs = quickAnswer ? [quickAnswer, ...content.faqs.filter((f) => f.question !== quickAnswer.question)] : content.faqs;
 const faqSchema = allFaqs && allFaqs.length > 0 ? {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": allFaqs.map(faq => ({
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
 <div>
 <h1>{h1}</h1>
 <p>{content.intro}</p>
 {quickAnswer && (<><h2>{quickAnswer.question}</h2><p>{quickAnswer.answer}</p></>)}
 {sections.map((sec, i) => (
 <div key={i}>
 <h2>{sec.heading}</h2>
 {sec.paragraphs?.map((t, j) => <p key={j}>{t}</p>)}
 {sec.list && <ul>{sec.list.map((t, j) => <li key={j}>{t}</li>)}</ul>}
 {sec.table && (
 <table><thead><tr>{sec.table.columns.map((c) => <th key={c}>{c}</th>)}</tr></thead>
 <tbody>{sec.table.rows.map((r, j) => <tr key={j}>{r.map((c, k) => <td key={k}>{c}</td>)}</tr>)}</tbody></table>
 )}
 </div>
 ))}
 
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
 <p>Every check searches SafeOrStolen's own theft reports and public web results. Gun serial numbers are also checked against police firearm theft and loss reports from 34 states and live Ohio law-enforcement records, bicycles against a national stolen-bicycle registry, phones against the lost and stolen phone blacklist, and vehicles against Arizona law-enforcement records and federal VIN data. AI notes are advisory and never decide the result.</p>
 
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
 
 <p>Most stolen-item tools cover one category. SafeOrStolen covers phones, vehicles, license plates, electronics, power tools, firearms, and bicycles in one place. Check phones, cars, electronics, firearms — all in one place. <a href="/verify">Verify now</a> — 2 free checks, then $0.99/check or $10/month unlimited.</p>
 </div>
 </div>
 </noscript>
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
  dangerouslySetInnerHTML={{ __html: sanitizeHtml(content.intro) }}
  />
 <InlineSerialCheck type={searchType} placeholder={searchPlaceholder} />
 <p className="text-sm text-muted-foreground mt-3">
 2 free checks · No credit card · Updated {new Date(dateModified + 'T12:00:00Z').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}
 </p>
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
 <span className="text-sm font-semibold">multiple sources</span>
 </div>
 <div className="flex flex-col items-center p-4 bg-card rounded-lg">
 <Award className="w-8 h-8 text-primary mb-2" />
 <span className="text-sm font-semibold">Mobile App</span>
 </div>
 </div>
 </div>
 </section>

 <SitewideCredibilityBar />

 {quickAnswer && (
 <section className="py-10 px-4">
 <div className="max-w-4xl mx-auto rounded-2xl border border-primary/30 bg-primary/5 p-6">
 <p className="text-xs font-bold uppercase tracking-wide text-primary mb-2">Quick answer</p>
 <h2 className="text-xl md:text-2xl font-bold mb-3">{quickAnswer.question}</h2>
 <p className="text-lg text-muted-foreground leading-relaxed">{quickAnswer.answer}</p>
 </div>
 </section>
 )}

 {sections.map((sec, i) => (
 <section key={i} className={`py-12 px-4 ${i % 2 === 0 ? '' : 'bg-card/50'}`}>
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-6">{sec.heading}</h2>
 {sec.paragraphs?.map((t, j) => (
 <p key={j} className="text-lg text-muted-foreground leading-relaxed mb-4">{t}</p>
 ))}
 {sec.list && (
 <ul className="space-y-2 mb-4">
 {sec.list.map((t, j) => (
 <li key={j} className="flex gap-3 text-base">
 <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
 <span>{t}</span>
 </li>
 ))}
 </ul>
 )}
 {sec.table && (
 <div className="overflow-x-auto rounded-lg border border-border">
 <table className="w-full text-left text-sm">
 <thead className="bg-muted/60">
 <tr>{sec.table.columns.map((c) => <th key={c} className="px-4 py-3 font-semibold">{c}</th>)}</tr>
 </thead>
 <tbody>
 {sec.table.rows.map((r, j) => (
 <tr key={j} className="border-t border-border">
 {r.map((c, k) => <td key={k} className={`px-4 py-3 ${k === 0 ? 'font-medium' : 'text-muted-foreground'}`}>{c}</td>)}
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 )}
 </div>
 </section>
 ))}

 {/* What Is Section */}
 <section className="py-16 px-4 bg-card/50">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-6">What is {itemType} Verification?</h2>
 <p 
 className="text-lg text-muted-foreground leading-relaxed [&_a]:text-primary [&_a]:underline [&_a]:hover:text-primary/80 mb-8"
  dangerouslySetInnerHTML={{ __html: sanitizeHtml(content.whatIs) }}
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
 <Link to="/license-plate-owner-lookup" className="p-6 bg-background rounded-lg hover:shadow-lg transition-shadow">
 <h3 className="font-bold mb-2">Plate Owner Lookup</h3>
 <p className="text-sm text-muted-foreground">What you can legally find from a plate</p>
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
 </>
 );
};