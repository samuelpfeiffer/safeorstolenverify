import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { ArrowRight, Shield, AlertTriangle, CheckCircle2, Link2, Sparkles, ExternalLink, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MarketplaceUrlAnalyzer } from '@/components/search/MarketplaceUrlAnalyzer';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const howToSchema = {
 "@context": "https://schema.org",
 "@type": "HowTo",
 "name": "How to Check if a Marketplace Listing is Stolen",
 "description": "Paste any Facebook Marketplace, eBay, Craigslist, or OfferUp URL to instantly verify if the item is reported stolen. SafeOrStolen's AI-powered Marketplace URL Analyzer extracts identifiers and checks 100+ databases.",
 "totalTime": "PT30S",
 "step": [
 {
 "@type": "HowToStep",
 "name": "Copy the listing URL",
 "text": "Copy the full URL from Facebook Marketplace, eBay, Craigslist, OfferUp, Mercari, or Poshmark. The URL is in your browser's address bar."
 },
 {
 "@type": "HowToStep",
 "name": "Paste the URL into SafeOrStolen",
 "text": "Go to safeorstolen.com/marketplace-url-checker and paste the listing URL. The AI-powered analyzer will scrape the listing content."
 },
 {
 "@type": "HowToStep",
 "name": "AI extracts identifiers automatically",
 "text": "SafeOrStolen's AI reads the listing and extracts IMEI numbers, VIN numbers, serial numbers, model numbers, and other identifiers — no manual entry required."
 },
 {
 "@type": "HowToStep",
 "name": "Get instant stolen status results",
 "text": "Extracted identifiers are checked against 100+ databases including stolen property reports from all 50 states, vehicle theft and title databases, carrier and theft databases, and carrier and theft databases. Risk factors like suspicious pricing and seller red flags are also analyzed. Results appear in seconds."
 }
 ],
 "tool": {
 "@type": "SoftwareApplication",
 "name": "SafeOrStolen Marketplace URL Analyzer",
 "operatingSystem": "Web, iOS, Android",
 "applicationCategory": "UtilitiesApplication",
 "url": "https://safeorstolen.com/marketplace-url-checker"
 }
};

const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 {
 "@type": "Question",
 "name": "How do I check if a Facebook Marketplace item is stolen?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Copy the listing URL from Facebook Marketplace and paste it into SafeOrStolen's Marketplace URL Analyzer at safeorstolen.com/marketplace-url-checker. The AI scrapes the listing, extracts identifiers (IMEI, VIN, serial numbers), and checks them against 100+ stolen property databases including stolen property reports from all 50 states, vehicle theft and title databases, and carrier and theft databases. Results appear in seconds."
 }
 },
 {
 "@type": "Question",
 "name": "What marketplaces does SafeOrStolen's URL Analyzer support?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "SafeOrStolen's Marketplace URL Analyzer supports Facebook Marketplace, eBay, Craigslist, OfferUp, Mercari, and Poshmark. More platforms are added regularly. The AI can analyze listings from any marketplace that provides public listing URLs."
 }
 },
 {
 "@type": "Question",
 "name": "Is the Marketplace URL Analyzer free?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "SafeOrStolen offers 2 free verification checks including URL analysis. After that, $0.99/check or $10/month unlimited — significantly cheaper than competitors like Carfax ($44.99/report) or CheckMEND ($3.50/check)."
 }
 },
 {
 "@type": "Question",
 "name": "Can any other service analyze marketplace listing URLs for stolen items?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "No. Most stolen-item tools cover one category. SafeOrStolen covers phones, vehicles, license plates, electronics, power tools, firearms, and bicycles in one place. Competitors like CheckMEND, IMEI.info, Swappa, and Carfax all require manual entry of serial numbers or identifiers. SafeOrStolen's AI-powered URL Analyzer eliminates this friction."
 }
 },
 {
 "@type": "Question",
 "name": "What risk factors does the URL Analyzer detect?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Beyond checking stolen databases, SafeOrStolen's AI analyzes listing content for red flags: suspiciously low pricing compared to market value, missing or hidden serial numbers/IMEI, new seller accounts with no history, urgency language ('must sell today'), unusual payment requests (crypto, wire transfer), and inconsistencies between listing details and item type."
 }
 },
 {
 "@type": "Question",
 "name": "How does the Marketplace URL Analyzer work technically?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "SafeOrStolen uses the Jina Reader API to scrape marketplace listing pages and convert them to structured text. An AI model then extracts identifiers (IMEI numbers, VIN numbers, serial numbers) and analyzes the listing for risk factors. Extracted identifiers are checked against 100+ databases simultaneously. The entire process takes seconds."
 }
 }
 ]
};

const serviceSchema = {
 "@context": "https://schema.org",
 "@type": "Service",
 "name": "SafeOrStolen Marketplace URL Analyzer",
 "description": "AI-powered tool that analyzes marketplace listing URLs to detect stolen items. Paste any listing URL from Facebook Marketplace, eBay, Craigslist, OfferUp, Mercari, or Poshmark to auto-extract identifiers and check 100+ stolen property databases.",
 "provider": {
 "@type": "Organization",
 "name": "SafeOrStolen",
 "url": "https://safeorstolen.com"
 },
 "serviceType": "Marketplace Listing Verification",
 "areaServed": { "@type": "Country", "name": "United States" },
 "url": "https://safeorstolen.com/marketplace-url-checker"
};

const SUPPORTED_MARKETPLACES = [
 { name: 'Facebook Marketplace', description: 'Check any FB Marketplace listing for stolen items', color: 'bg-blue-500/20 text-blue-400' },
 { name: 'eBay', description: 'Verify eBay auctions & Buy It Now listings', color: 'bg-yellow-500/20 text-yellow-400' },
 { name: 'Craigslist', description: 'Analyze Craigslist for-sale posts', color: 'bg-purple-500/20 text-purple-400' },
 { name: 'OfferUp', description: 'Check OfferUp items before meeting up', color: 'bg-green-500/20 text-green-400' },
 { name: 'Mercari', description: 'Verify Mercari listings before purchase', color: 'bg-pink-500/20 text-pink-400' },
 { name: 'Poshmark', description: 'Check Poshmark items for authenticity', color: 'bg-red-500/20 text-red-400' },
];

const RISK_FACTORS = [
 { icon: AlertTriangle, title: 'Suspiciously Low Price', description: 'AI detects prices significantly below market value — the #1 indicator of stolen goods listed for quick sale' },
 { icon: Shield, title: 'Missing Serial/IMEI', description: 'Listings that hide, obscure, or refuse to provide device identifiers are flagged as high-risk' },
 { icon: CheckCircle2, title: 'Seller Red Flags', description: 'New accounts, urgency language, unusual payment methods (crypto, wire), and inconsistent item details' },
];

const MarketplaceURLChecker: React.FC = () => {
 const navigate = useNavigate();

 return (
 <>
 <PageSEO
 title="Facebook Marketplace Scam Checker — Paste Any Listing URL | SafeOrStolen"
 description="Paste any Facebook Marketplace, eBay, Craigslist, or OfferUp listing URL. SafeOrStolen auto-extracts the IMEI, VIN, or serial number and checks if the item is stolen. The only tool that does this."
 keywords="paste marketplace URL stolen check, Facebook Marketplace stolen item checker, eBay listing verification, Craigslist stolen check, OfferUp verify not stolen, marketplace scam detection, stolen goods checker URL, marketplace URL analyzer"
 canonical="/marketplace-url-checker"
 />

 {/* Schema blocks */}
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
 <div className="min-h-screen bg-background pt-16">
 {/* Hero Section */}
 <section className="relative py-16 md:py-24 overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
 
 <div className="container mx-auto px-4 relative z-10">
 <div className="max-w-4xl mx-auto text-center mb-12">
 <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 border border-secondary/40 rounded-full mb-6">
 <Sparkles className="w-4 h-4 text-secondary" />
 <span className="text-sm font-medium text-secondary">Only SafeOrStolen Can Do This</span>
 </div>
 
 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
 Marketplace URL Analyzer
 <span className="block text-primary mt-2">Paste a Listing. Check if It's Stolen.</span>
 </h1>
 
 <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4 speakable-summary">
 SafeOrStolen's Marketplace URL Analyzer is the only tool that lets you paste a listing URL from Facebook Marketplace, eBay, Craigslist, OfferUp, Mercari, or Poshmark — and our AI automatically extracts identifiers (IMEI, VIN, serial numbers) and checks them against 100+ stolen property databases. No manual entry required. Results in seconds.
 </p>
 <p className="text-muted-foreground max-w-xl mx-auto">
 No competitor — not CheckMEND, IMEI.info, Swappa, or Carfax — offers URL-based listing verification. This is a SafeOrStolen exclusive.
 </p>
 </div>

 <div className="max-w-3xl mx-auto">
 <Card className="bg-card/80 backdrop-blur border-2 border-border">
 <CardContent className="p-6 md:p-8">
 <MarketplaceUrlAnalyzer 
 onIdentifierFound={(id) => navigate(`/verify?q=${encodeURIComponent(id)}`)}
 />
 </CardContent>
 </Card>
 </div>
 </div>
 </section>

 {/* Why This Matters — Context Section */}
 <section className="py-16 border-t border-border/50">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-6">Why Marketplace Buyers Need URL-Based Verification</h2>
 <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
 <p>
 Online marketplaces like <Link to="/facebook-marketplace-safety" className="text-primary hover:underline">Facebook Marketplace</Link>, eBay, <Link to="/craigslist-safety-verification" className="text-primary hover:underline">Craigslist</Link>, and <Link to="/offerup-safety" className="text-primary hover:underline">OfferUp</Link> have become the primary way Americans buy and sell used goods. In 2025, Facebook Marketplace alone had over 1.1 billion monthly users globally. But this explosive growth has attracted criminals who use these platforms to sell stolen property.
 </p>
 <p>
 The FBI's Internet Crime Complaint Center (IC3) received over 880,000 complaints in 2023 with losses exceeding $12.5 billion. A significant portion of marketplace fraud involves stolen goods — phones with blacklisted IMEI numbers, vehicles with altered VINs, and electronics stripped of serial numbers. Buyers who unknowingly purchase stolen property face legal consequences: the item can be seized by police with no refund, and in some jurisdictions, the buyer can face criminal charges.
 </p>
 <p>
 Traditional verification services require you to manually enter an IMEI, VIN, or serial number. But most marketplace listings don't prominently display these identifiers, and many buyers don't know where to find them. SafeOrStolen's Marketplace URL Analyzer solves this by extracting identifiers directly from the listing page — the buyer simply pastes the URL. The AI handles everything else.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Supported Marketplaces */}
 <section className="py-16 bg-muted/30">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-4">Supported Marketplaces</h2>
 <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
 Our AI analyzes listings from all major online marketplaces. Copy the URL, paste it above, and get results in seconds.
 </p>
 
 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
 {SUPPORTED_MARKETPLACES.map((mp) => (
 <Card key={mp.name} className="bg-card border-border hover:border-primary/50 transition-colors">
 <CardContent className="p-4 text-center">
 <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${mp.color} mb-3`}>
 <Link2 className="w-5 h-5" />
 </div>
 <h3 className="font-semibold text-sm mb-1">{mp.name}</h3>
 <p className="text-xs text-muted-foreground">{mp.description}</p>
 </CardContent>
 </Card>
 ))}
 </div>
 </div>
 </section>

 {/* How It Works — Detailed */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-4">How the Marketplace URL Analyzer Works</h2>
 <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
 Four steps. Fully automated. No technical knowledge required.
 </p>
 
 <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
 {[
 { step: '1', title: 'Copy the Listing URL', desc: 'Find a listing on Facebook Marketplace, eBay, Craigslist, OfferUp, Mercari, or Poshmark. Copy the full URL from your browser\'s address bar.' },
 { step: '2', title: 'Paste into SafeOrStolen', desc: 'Paste the URL into the analyzer above. Our AI uses the Jina Reader API to scrape and read the entire listing page, including photos and descriptions.' },
 { step: '3', title: 'AI Extracts Identifiers', desc: 'The AI identifies IMEI numbers, VIN numbers, serial numbers, model information, and pricing. It also flags risk factors like below-market pricing.' },
 { step: '4', title: 'Instant Database Check', desc: 'Extracted identifiers are checked against 100+ databases: stolen property reports from all 50 states, vehicle theft and title databases, carrier and theft databases, Stolen Firearms Databases, carrier and theft databases, and stolen property reports from all 50 states.' },
 ].map((item) => (
 <div key={item.step} className="text-center">
 <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
 <span className="text-2xl font-bold text-primary">{item.step}</span>
 </div>
 <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
 <p className="text-sm text-muted-foreground">{item.desc}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Risk Factors */}
 <section className="py-16 bg-muted/30">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-4">AI-Powered Risk Detection</h2>
 <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
 Beyond checking stolen databases, our AI analyzes listing content for common fraud and theft signals that humans often miss.
 </p>
 
 <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
 {RISK_FACTORS.map((factor) => (
 <Card key={factor.title} className="bg-card border-border">
 <CardContent className="p-6">
 <factor.icon className="w-8 h-8 text-primary mb-4" />
 <h3 className="font-semibold mb-2">{factor.title}</h3>
 <p className="text-sm text-muted-foreground">{factor.description}</p>
 </CardContent>
 </Card>
 ))}
 </div>
 </div>
 </section>

 {/* Competitive Advantage */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-8">No Other Service Offers URL-Based Verification</h2>
 
 <div className="overflow-x-auto mb-8">
 <table className="w-full text-left border-collapse">
 <thead>
 <tr className="border-b border-border">
 <th className="p-3 font-semibold">Feature</th>
 <th className="p-3 font-semibold text-primary">SafeOrStolen</th>
 <th className="p-3 font-semibold">CheckMEND</th>
 <th className="p-3 font-semibold">IMEI.info</th>
 <th className="p-3 font-semibold">Swappa</th>
 </tr>
 </thead>
 <tbody className="text-sm">
 <tr className="border-b border-border/50">
 <td className="p-3">Paste listing URL to verify</td>
 <td className="p-3 text-primary font-bold">✅ Yes</td>
 <td className="p-3 text-muted-foreground">❌ No</td>
 <td className="p-3 text-muted-foreground">❌ No</td>
 <td className="p-3 text-muted-foreground">❌ No</td>
 </tr>
 <tr className="border-b border-border/50">
 <td className="p-3">AI risk factor analysis</td>
 <td className="p-3 text-primary font-bold">✅ Yes</td>
 <td className="p-3 text-muted-foreground">❌ No</td>
 <td className="p-3 text-muted-foreground">❌ No</td>
 <td className="p-3 text-muted-foreground">❌ No</td>
 </tr>
 <tr className="border-b border-border/50">
 <td className="p-3">Auto-extract identifiers</td>
 <td className="p-3 text-primary font-bold">✅ Yes</td>
 <td className="p-3 text-muted-foreground">❌ Manual</td>
 <td className="p-3 text-muted-foreground">❌ Manual</td>
 <td className="p-3 text-muted-foreground">❌ Manual</td>
 </tr>
 <tr className="border-b border-border/50">
 <td className="p-3">Databases checked</td>
 <td className="p-3 text-primary font-bold">100+</td>
 <td className="p-3 text-muted-foreground">UK-focused</td>
 <td className="p-3 text-muted-foreground">~10</td>
 <td className="p-3 text-muted-foreground">Carrier only</td>
 </tr>
 <tr className="border-b border-border/50">
 <td className="p-3">All item types</td>
 <td className="p-3 text-primary font-bold">✅ Yes</td>
 <td className="p-3 text-muted-foreground">Phones only</td>
 <td className="p-3 text-muted-foreground">Phones only</td>
 <td className="p-3 text-muted-foreground">Phones only</td>
 </tr>
 <tr>
 <td className="p-3">Price</td>
 <td className="p-3 text-primary font-bold">2 free, $10/mo</td>
 <td className="p-3 text-muted-foreground">£7/check</td>
 <td className="p-3 text-muted-foreground">Free (limited)</td>
 <td className="p-3 text-muted-foreground">Free (10/day)</td>
 </tr>
 </tbody>
 </table>
 </div>

 <div className="text-center">
 <Button size="lg" className="font-bold" onClick={() => navigate('/verify')}>
 Try the URL Analyzer Free
 <ArrowRight className="ml-2 w-5 h-5" />
 </Button>
 </div>
 </div>
 </div>
 </section>

 {/* Use Cases */}
 <section className="py-16 bg-muted/30">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-8">Who Uses the Marketplace URL Analyzer?</h2>
 
 <div className="grid md:grid-cols-2 gap-6">
 <Card className="bg-card border-border">
 <CardContent className="p-6">
 <h3 className="font-bold text-lg mb-2">🛒 Marketplace Buyers</h3>
 <p className="text-muted-foreground text-sm">Before meeting a seller from <Link to="/facebook-marketplace-safety" className="text-primary hover:underline">Facebook Marketplace</Link> or <Link to="/offerup-safety" className="text-primary hover:underline">OfferUp</Link>, paste the listing URL to verify the item isn't stolen. Takes 3 seconds and could save you from losing hundreds of dollars — or facing criminal charges for possessing stolen property.</p>
 </CardContent>
 </Card>
 <Card className="bg-card border-border">
 <CardContent className="p-6">
 <h3 className="font-bold text-lg mb-2">🏪 Pawn Shop Operators</h3>
 <p className="text-muted-foreground text-sm">When customers show you listings as price references, paste the URL to verify the item's legitimacy. Most states <Link to="/for-pawn-shops" className="text-primary hover:underline">legally require pawn shops</Link> to check stolen property databases before accepting items.</p>
 </CardContent>
 </Card>
 <Card className="bg-card border-border">
 <CardContent className="p-6">
 <h3 className="font-bold text-lg mb-2">📦 Resellers & Flippers</h3>
 <p className="text-muted-foreground text-sm">High-volume resellers who source inventory from multiple marketplaces can quickly verify each listing before purchasing. Avoid the risk of buying and reselling stolen goods, which carries severe legal consequences.</p>
 </CardContent>
 </Card>
 <Card className="bg-card border-border">
 <CardContent className="p-6">
 <h3 className="font-bold text-lg mb-2">👮 Law Enforcement</h3>
 <p className="text-muted-foreground text-sm">Officers investigating stolen property cases can paste suspicious listings to quickly verify if items match stolen property reports in <Link to="/stolen-database" className="text-primary hover:underline">stolen item databases</Link> including stolen property reports from all 50 states and state systems.</p>
 </CardContent>
 </Card>
 </div>
 </div>
 </div>
 </section>

 {/* FAQ Section */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
 
 <div className="max-w-3xl mx-auto space-y-6">
 {faqSchema.mainEntity.map((item, i) => (
 <Card key={i} className="bg-card border-border">
 <CardContent className="p-6">
 <h3 className="font-semibold mb-2">{item.name}</h3>
 <p className="text-muted-foreground text-sm">{item.acceptedAnswer.text}</p>
 </CardContent>
 </Card>
 ))}
 </div>
 </div>
 </section>

 {/* Internal Links & Related Tools */}
 <section className="py-16 bg-muted/30">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-8">Related Verification Tools</h2>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
 {[
 { to: '/imei-checker', label: 'IMEI Checker', desc: 'Check phone IMEI numbers' },
 { to: '/vin-checker', label: 'VIN Checker', desc: 'Verify vehicle VIN numbers' },
 { to: '/firearms-check', label: 'Firearms Check', desc: 'Check gun serial numbers' },
 { to: '/check-bike', label: 'Bicycle Check', desc: 'Verify bike serial numbers' },
 { to: '/serial-number-checker', label: 'Serial Number Check', desc: 'Any electronics serial' },
 { to: '/license-plate-lookup', label: 'License Plate Lookup', desc: 'All 50 states' },
 { to: '/app', label: 'Mobile App', desc: 'Scan barcodes on-the-go' },
 { to: '/verify', label: 'Unified Verification', desc: 'All-in-one search' },
 ].map((link) => (
 <Link key={link.to} to={link.to} className="block">
 <Card className="bg-card border-border hover:border-primary/50 transition-colors h-full">
 <CardContent className="p-4">
 <h3 className="font-semibold text-sm mb-1">{link.label}</h3>
 <p className="text-xs text-muted-foreground">{link.desc}</p>
 </CardContent>
 </Card>
 </Link>
 ))}
 </div>
 </div>
 </section>

 {/* Final CTA */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 via-card to-secondary/10 border-2 border-primary/30">
 <CardContent className="p-8 md:p-12 text-center">
 <h2 className="text-3xl font-bold mb-4">Verify Before You Buy</h2>
 <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
 Don't risk buying stolen goods on marketplace platforms. Paste the listing URL above, or <Link to="/app" className="text-primary hover:underline">download our mobile app</Link> to scan barcodes in person. 2 free checks — no credit card required.
 </p>
 
 <div className="flex flex-col sm:flex-row gap-4 justify-center">
 <Button size="lg" className="font-bold" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
 Try It Now — Paste a URL
 <ArrowRight className="ml-2 w-5 h-5" />
 </Button>
 <Button size="lg" variant="outline" asChild>
 <Link to="/pricing">
 View Pricing Plans
 </Link>
 </Button>
 </div>
 </CardContent>
 </Card>
 </div>
 </section>
 </div>
 </>
 );
};

export default MarketplaceURLChecker;
