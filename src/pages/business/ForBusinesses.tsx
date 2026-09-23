import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/router-compat';
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/schemas/FAQSchema';
import { Shield, Building2, Smartphone, FileCheck, Users, BarChart3, Lock, Zap, CheckCircle2, Copy, Code, Globe, TrendingUp, DollarSign, AlertTriangle, Scale, Award, ArrowRight, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { getOrCreateFingerprint } from '@/hooks/useVerifyGate';
import { redirectToStripe } from '@/utils/stripeRedirect';
import { toast } from 'sonner';

export default function ForBusinesses() {
 const [copiedWidget, setCopiedWidget] = useState(false);

 const [loading, setLoading] = useState<string | null>(null);
 const [roiItems, setRoiItems] = useState(20);

 async function handleBusinessCheckout(priceId: string, planName: string) {
 setLoading(priceId);
 try {
 const { data: { user } } = await supabase.auth.getUser();
 const { data, error } = await supabase.functions.invoke('create-checkout', {
 body: {
 priceId,
 planName,
 isSubscription: true,
 fingerprint: getOrCreateFingerprint(),
 },
 headers: user ? undefined : {},
 });
 if (error) throw new Error(error.message);
 if (data?.url) redirectToStripe(data.url);
 } catch {
 toast.error('Something went wrong. Please try again.');
 } finally {
 setLoading(null);
 }
 }

 const structuredData = {
 '@context': 'https://schema.org',
 '@type': 'SoftwareApplication',
 name: 'SafeOrStolen Business Verification Widget',
 applicationCategory: 'BusinessApplication',
 operatingSystem: 'Web',
 description: 'Embeddable stolen goods verification widget for pawn shops, car dealers, electronics resellers, and auction houses. One-line integration, unlimited checks, compliance reporting.',
 provider: {
 '@type': 'Organization',
 name: 'SafeOrStolen',
 url: 'https://safeorstolen.com'
 },
 offers: {
 '@type': 'AggregateOffer',
 lowPrice: '49',
 highPrice: '99',
 priceCurrency: 'USD',
 offerCount: '3'
 },
 featureList: [
 'Embeddable verification widget',
 'REST API for POS integration',
 'Unlimited IMEI, VIN, serial number checks',
 '100+ database sources including carrier and theft databases, Stolen Firearms Databases',
 'All 50 US state coverage',
 'Compliance reporting and audit logs',
 '3-second verification results',
 'Web Component with Shadow DOM isolation'
 ],
 audience: {
 '@type': 'BusinessAudience',
 audienceType: 'Pawn shops, used car dealers, electronics resellers, auction houses, online sellers'
 }
 };

 const breadcrumbs = [
 { name: 'Home', url: '/' },
 { name: 'For Businesses', url: '/for-businesses' }
 ];

 const faqs = [
 {
 question: 'Do I need a developer to integrate the SafeOrStolen verification widget?',
 answer: 'No. Our widget requires just one line of HTML code that you can copy-paste into your website. If you can edit your website HTML, you can add SafeOrStolen. We also provide plugins for Shopify, WooCommerce, and integrations with major POS systems like Bravo and PawnMaster. Most businesses complete integration in under 5 minutes without any developer assistance.'
 },
 {
 question: 'What databases does SafeOrStolen check for business verifications?',
 answer: 'SafeOrStolen checks multiple sources simultaneously including community theft reports, vehicle theft and title databases (vehicle theft and title databases for stolen vehicles), carrier and theft databases TAC (phone blacklists covering AT&T, Verizon, T-Mobile), all 50 state DMV and community theft registries, and carrier and theft databases. Results are returned in under 3 seconds.'
 },
 {
 question: 'Does SafeOrStolen meet legal compliance requirements for pawn shops?',
 answer: 'Yes. SafeOrStolen meets stolen property verification requirements in all 50 states. States like Florida (F.S. § 539.001), California (Business and Professions Code § 21628), Texas (Texas Occupations Code Chapter 1956), and New York require pawn shops to check stolen property databases. SafeOrStolen fulfills these requirements and automatically logs all verifications for audit and compliance purposes.'
 },
 {
 question: 'How is SafeOrStolen different from CheckMEND for businesses?',
 answer: 'CheckMEND is an excellent UK-focused enterprise service, but SafeOrStolen is purpose-built for US businesses. Key differences: (1) SafeOrStolen offers a copy-paste widget — CheckMEND requires API-only integration with developer resources. (2) SafeOrStolen covers all 50 US state databases — CheckMEND has limited US coverage. (3) SafeOrStolen charges $49-99/month for unlimited checks — CheckMEND charges $2.50-5.00 per individual check, which adds up fast for busy pawn shops.'
 },
 {
 question: 'Can I try SafeOrStolen before committing to a paid plan?',
 answer: 'Absolutely. We offer a 30-day free trial with full access to all features including unlimited verifications, API access, widget integration, and compliance reporting. No credit card required to start. Cancel anytime during the trial period with zero obligation.'
 },
 {
 question: 'What if I have multiple store locations?',
 answer: 'Our Professional plan ($99/month) covers up to 5 locations with individual dashboards and consolidated reporting. For 6+ locations, contact our Enterprise team for volume discounts. Each location gets its own API key, employee accounts with role-based permissions, and location-specific compliance reporting.'
 },
 {
 question: 'What is the cost per verification with SafeOrStolen business plans?',
 answer: 'Zero. All SafeOrStolen business plans include unlimited verifications for a flat monthly fee. Unlike CheckMEND ($2.50-5.00 per check) or Carfax ($44.99 per report), SafeOrStolen charges $49-99/month with no per-check fees. A pawn shop verifying 50 items per day saves over $3,750/month compared to per-check pricing.'
 },
 {
 question: 'How does the embeddable widget work technically?',
 answer: 'The SafeOrStolen widget uses modern Web Component technology with Shadow DOM isolation. This means it works on any website without conflicting with existing CSS or JavaScript. It loads asynchronously (non-blocking), supports light and dark themes, is WCAG 2.1 AA accessible, and is fully responsive on mobile devices. The widget communicates with our API over HTTPS and dispatches custom events so your website can react to verification results.'
 }
 ];

 const widgetCode = `<script src="https://safeorstolen.com/widget.js" async></script>\n<safeorstolen-verify api-key="YOUR_API_KEY" theme="light"></safeorstolen-verify>`;

 const copyWidgetCode = () => {
 navigator.clipboard.writeText(widgetCode);
 setCopiedWidget(true);
 setTimeout(() => setCopiedWidget(false), 2000);
 };

 const industries = [
 {
 icon: Building2,
 title: 'Pawn Shops & Buy-Sell-Trade',
 description: 'Instant verification at point of purchase protects against unknowingly buying stolen goods. Meet state compliance requirements automatically under F.S. § 539.001 (Florida), Cal. Bus. & Prof. Code § 21628 (California), and similar statutes in all 50 states.',
 benefits: ['Avoid $10,000+ fines for stolen property', 'Comply with state pawn regulations', 'Build customer trust with verified purchases', 'Generate compliance certificates for audits'],
 link: '/for-pawn-shops'
 },
 {
 icon: Smartphone,
 title: 'Phone & Electronics Retailers',
 description: 'Verify IMEI numbers on trade-ins, used device purchases, and refurbished inventory. Check against carrier and theft databases TAC blacklists covering AT&T, Verizon, T-Mobile, and all major carriers before accepting any device.',
 benefits: ['Check carrier blacklist status instantly', 'Verify device authenticity and unlock status', 'Prevent insurance fraud on trade-ins', 'Protect $800+ average device resale value'],
 link: '/for-electronics-resellers'
 },
 {
 icon: Shield,
 title: 'Auto Dealers & Car Lots',
 description: 'VIN verification for used vehicle inventory, trade-ins, and auction purchases. Cross-reference against all 50 state DMV theft records. Full vehicle history verification.',
 benefits: ['Title washing and cloning detection', 'Odometer rollback fraud alerts', 'vehicle theft and title databases stolen vehicle database check', 'Salvage and flood title detection'],
 link: '/for-dealers'
 },
 {
 icon: FileCheck,
 title: 'Auction Houses & Estate Sales',
 description: 'Pre-sale verification for high-value items including vehicles, electronics, jewelry, and equipment. Protect your auction house reputation and provide buyers with confidence through verified provenance.',
 benefits: ['Pre-auction batch verification via CSV', 'Generate buyer confidence certificates', 'Protect against liability per 18 U.S.C. § 2315', 'Branded verification badges for listings'],
 link: '/for-auction-houses'
 },
 {
 icon: Globe,
 title: 'Online Sellers (eBay, Mercari, Poshmark)',
 description: 'Display "Verified by SafeOrStolen" trust badges on your listings to increase buyer confidence and conversion rates by 15-30%. Stand out from competitors with verified, clean items.',
 benefits: ['Trust badge increases sales 15-30%', 'Verification ID links to live report', 'Works on all marketplace platforms', 'Prevent buyer disputes and returns'],
 link: '/for-marketplaces'
 },
 {
 icon: Scale,
 title: 'Law Enforcement & Insurance',
 description: 'Cross-reference recovered items against theft databases. Process insurance claims with verified ownership data. Support investigations with comprehensive verification reports and chain of custody documentation.',
 benefits: ['Cross-reference recovered property', 'Streamline insurance claim verification', 'Chain of custody documentation', 'Bulk verification for seized property'],
 link: '/for-law-enforcement'
 }
 ];

 const features = [
 { icon: Code, title: '1-Line Widget Integration', description: 'Copy-paste one line of HTML. No developer required. Works on any website, CMS, or POS system.' },
 { icon: Lock, title: 'REST API Access', description: 'Full RESTful API with 24/7 availability, webhooks, and SDKs for JavaScript, Python, PHP, and Ruby.' },
 { icon: Users, title: 'Multi-Location Support', description: 'Unlimited employee accounts per location. Role-based permissions. Centralized admin dashboard.' },
 { icon: FileCheck, title: 'Compliance Certificates', description: 'PDF compliance certificates with timestamped cryptographic hashes. Legal proof of due diligence.' },
 { icon: BarChart3, title: 'Analytics Dashboard', description: 'Real-time verification stats, trend analysis, and monthly compliance reports exportable to CSV.' },
 { icon: Zap, title: '3-Second Parallel Search', description: 'All multiple sources searched simultaneously, not sequentially. Results in 3 seconds average.' }
 ];

 const competitorComparison = [
 { feature: 'Price per verification', sos: '$0 (unlimited)', checkmend: '$2.50-5.00', leadsonline: 'N/A (reporting only)' },
 { feature: 'Monthly cost', sos: '$49-99', checkmend: '$500+', leadsonline: '$50-150' },
 { feature: 'Widget integration', sos: '✅ 1-line copy-paste', checkmend: '❌ API only', leadsonline: '❌ Not available' },
 { feature: 'US state databases', sos: '✅ All 50 states', checkmend: '⚠️ Limited US', leadsonline: '✅ Varies by state' },
 { feature: 'Stolen item verification', sos: '✅ multiple sources', checkmend: '✅ UK-focused', leadsonline: '❌ Police reporting only' },
 { feature: 'Compliance certificates', sos: '✅ PDF with hash', checkmend: '⚠️ Basic report', leadsonline: '✅ Police reports' },
 { feature: 'Developer required', sos: '❌ No', checkmend: '✅ Yes', leadsonline: '❌ No' },
 { feature: 'Free trial', sos: '✅ 30 days', checkmend: '❌ No', leadsonline: '⚠️ Demo only' },
 ];

 return (
 <>
 <PageSEO
 title="Business Verification Widget & API - Pawn Shop, Dealer, Reseller | SafeOrStolen"
 description="Embeddable stolen goods verification widget for businesses. 1-line integration, unlimited checks at $49/month, multiple sources. Used by pawn shops, car dealers, electronics resellers. 30-day free trial."
 keywords="business verification widget, pawn shop verification software, stolen goods checker API, secondhand dealer compliance tool, embeddable verification widget, B2B stolen item verification"
 canonical="/for-businesses"
 structuredData={structuredData}
 />
 <BreadcrumbSchema items={breadcrumbs} />
 <FAQSchema faqs={faqs} />
 <div className="min-h-screen bg-background pt-20">
 {/* Hero Section */}
 <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
 <div className="container mx-auto px-4 max-w-6xl">
 <div className="text-center mb-12">
 <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
 <Shield className="h-4 w-4" />
 Trusted by 500+ Businesses Nationwide
 </div>
 <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
 Protect Your Business From<br />
 <span className="text-primary">Buying Stolen Goods</span>
 </h1>
 <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
 One-line widget. Instant verification against multiple sources. Legal compliance built-in. 
 Pawn shops, car dealers, electronics resellers, and auction houses save $3,750+/month compared to per-check pricing.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
 <Button size="lg" asChild className="text-lg px-8 py-6">
 <Link to="/business/signup">Start Free 30-Day Trial</Link>
 </Button>
 <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6">
 <Link to="/verify">Watch 2-Min Demo</Link>
 </Button>
 </div>
 <p className="text-sm text-muted-foreground">No credit card required • Cancel anytime • Full access to all features</p>
 </div>

 {/* Stats Bar */}
 <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
 {[
 { value: '11,000+', label: 'US Pawn Shops Addressable' },
 { value: '100+', label: 'Databases Checked' },
 { value: '3 sec', label: 'Average Result Time' },
 { value: '$0', label: 'Per-Check Cost' },
 ].map((stat, i) => (
 <div key={i} className="text-center p-4 rounded-xl bg-card border">
 <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
 <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Problem Section - Why Businesses Need This */}
 <section className="py-16 bg-destructive/5 border-y border-destructive/20">
 <div className="container mx-auto px-4 max-w-6xl">
 <h2 className="text-3xl font-bold text-center mb-4">The Real Cost of Buying Stolen Goods</h2>
 <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
 Every year, US businesses lose millions to stolen property liability. One mistake can cost your license, your inventory, and your reputation.
 </p>
 
 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
 {[
 { icon: AlertTriangle, title: 'Legal Fines', desc: 'Pawn shops face $10,000+ fines for failing to verify items in FL, CA, TX, NY. Criminal charges possible under 18 U.S.C. § 2315.', color: 'text-destructive' },
 { icon: DollarSign, title: 'Lost Inventory', desc: 'When police seize stolen items, you lose both the item AND the money you paid. Average loss per seized item: $800.', color: 'text-destructive' },
 { icon: TrendingUp, title: 'Reputation Damage', desc: 'One news story about your business buying stolen goods destroys years of customer trust. Recovery takes 2-5 years.', color: 'text-destructive' },
 { icon: Scale, title: 'Manual Checking is Slow', desc: 'Checking 5+ databases manually takes 15 minutes per item. SafeOrStolen checks multiple sources in 3 seconds.', color: 'text-destructive' },
 ].map((item, i) => (
 <Card key={i} className="border-destructive/20">
 <CardContent className="pt-6">
 <item.icon className={`h-8 w-8 ${item.color} mb-3`} />
 <h3 className="font-bold text-lg mb-2">{item.title}</h3>
 <p className="text-sm text-muted-foreground">{item.desc}</p>
 </CardContent>
 </Card>
 ))}
 </div>
 </div>
 </section>

 {/* Widget Demo Section */}
 <section className="py-16">
 <div className="container mx-auto px-4 max-w-6xl">
 <div className="text-center mb-12">
 <h2 className="text-3xl font-bold mb-4">Embed Verification on Your Website in 60 Seconds</h2>
 <p className="text-muted-foreground max-w-2xl mx-auto">
 No developer required. Copy one line of code, paste it into your website, and your customers can verify items instantly.
 Uses modern Web Components with Shadow DOM — works on any website without CSS conflicts.
 </p>
 </div>
 
 <div className="grid lg:grid-cols-2 gap-8 items-start">
 {/* Code Block */}
 <div className="space-y-4">
 <h3 className="font-semibold text-lg flex items-center gap-2">
 <Code className="h-5 w-5 text-primary" />
 Add to Your Website:
 </h3>
 <div className="relative bg-zinc-900 rounded-xl p-6 font-mono text-sm text-green-400 overflow-x-auto">
 <Button
 size="sm"
 variant="ghost"
 className="absolute top-3 right-3 text-zinc-400 hover:text-white"
 onClick={copyWidgetCode}
 >
 {copiedWidget ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
 {copiedWidget ? 'Copied!' : 'Copy'}
 </Button>
 <pre className="whitespace-pre-wrap break-all">{widgetCode}</pre>
 </div>
 
 <div className="bg-muted/50 rounded-xl p-6 space-y-3">
 <h4 className="font-semibold">Integrates With:</h4>
 <div className="flex flex-wrap gap-2">
 {['Shopify', 'WooCommerce', 'WordPress', 'Bravo POS', 'PawnMaster', 'Squarespace', 'Wix', 'Custom HTML'].map(platform => (
 <span key={platform} className="px-3 py-1 bg-background rounded-full text-sm border">{platform}</span>
 ))}
 </div>
 </div>
 </div>
 
 {/* Live Widget Preview */}
 <div className="space-y-4">
 <h3 className="font-semibold text-lg flex items-center gap-2">
 <Globe className="h-5 w-5 text-primary" />
 What Your Customers See:
 </h3>
 <Card className="border-2">
 <CardContent className="p-6 space-y-4">
 <div className="flex items-center gap-2 text-lg font-semibold">
 <Shield className="h-6 w-6 text-green-500" />
 Verify Item
 </div>
 <div className="flex gap-2">
 <input
 type="text"
 placeholder="Enter IMEI, VIN, or Serial Number"
 className="flex-1 px-4 py-3 border rounded-lg bg-background text-sm"
 readOnly
 />
 <Button className="px-6">Verify</Button>
 </div>
 <div className="bg-green-50 dark:bg-green-950/30 border-2 border-green-500 rounded-lg p-4">
 <div className="flex items-center gap-2 font-bold text-green-700 dark:text-green-400 mb-1">
 <CheckCircle2 className="h-5 w-5" />
 SAFE — No Issues Found
 </div>
 <p className="text-sm text-green-600 dark:text-green-500">This item is not reported as stolen in any of multiple sources.</p>
 <div className="text-xs text-green-500 dark:text-green-600 mt-2 pt-2 border-t border-green-300 dark:border-green-800">
 Checked: multiple sources • Confidence: 95% • ID: SOS-2026-DEMO
 </div>
 </div>
 <div className="text-center text-xs text-muted-foreground">
 Powered by <Link to="/" className="text-primary hover:underline">SafeOrStolen</Link>
 </div>
 </CardContent>
 </Card>
 </div>
 </div>
 </div>
 </section>

 {/* Industries Section */}
 <section className="py-16 bg-muted/30">
 <div className="container mx-auto px-4 max-w-6xl">
 <h2 className="text-3xl font-bold text-center mb-4">Built for These Industries</h2>
 <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
 From pawn shops to eBay power sellers, SafeOrStolen provides specialized verification solutions for any business handling secondhand goods.
 </p>
 
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
 {industries.map((industry, index) => (
 <Link to={industry.link} key={index} className="group">
 <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50 group-hover:-translate-y-1">
 <CardHeader>
 <div className="flex items-center gap-3">
 <div className="p-2 bg-primary/10 rounded-lg">
 <industry.icon className="h-6 w-6 text-primary" />
 </div>
 <CardTitle className="text-lg group-hover:text-primary transition-colors">{industry.title}</CardTitle>
 </div>
 </CardHeader>
 <CardContent>
 <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{industry.description}</p>
 <ul className="space-y-2">
 {industry.benefits.map((benefit, i) => (
 <li key={i} className="flex items-center gap-2 text-sm">
 <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
 <span>{benefit}</span>
 </li>
 ))}
 </ul>
 <div className="mt-4 flex items-center gap-1 text-primary text-sm font-semibold">
 Learn more <ArrowRight className="h-4 w-4" />
 </div>
 </CardContent>
 </Card>
 </Link>
 ))}
 </div>
 </div>
 </section>

 {/* Features Grid */}
 <section className="py-16">
 <div className="container mx-auto px-4 max-w-6xl">
 <h2 className="text-3xl font-bold text-center mb-4">Enterprise-Grade Features</h2>
 <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
 Everything your business needs for comprehensive stolen goods verification and legal compliance.
 </p>
 
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
 {features.map((feature, index) => (
 <div key={index} className="flex items-start gap-4 p-6 rounded-xl border bg-card hover:shadow-md transition-shadow">
 <div className="p-2.5 bg-primary/10 rounded-lg flex-shrink-0">
 <feature.icon className="h-5 w-5 text-primary" />
 </div>
 <div>
 <h3 className="font-semibold mb-1">{feature.title}</h3>
 <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Interactive ROI Calculator */}
 <section className="py-16 bg-card border-y border-border">
 <div className="container mx-auto px-4 max-w-4xl">
 <h2 className="text-3xl font-bold text-center mb-4">Calculate Your ROI</h2>
 <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
 How many items does your business verify per day?
 </p>
 <div className="max-w-lg mx-auto mb-8">
 <label className="block text-sm font-medium text-foreground mb-2">
 Items verified per day: <span className="text-primary font-bold">{roiItems}</span>
 </label>
 <input
 type="range"
 min="5"
 max="100"
 value={roiItems}
 onChange={(e) => setRoiItems(Number(e.target.value))}
 className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
 />
 <div className="flex justify-between text-xs text-muted-foreground mt-1">
 <span>5</span><span>100</span>
 </div>
 </div>
 <div className="grid md:grid-cols-3 gap-6">
 <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-6 text-center">
 <div className="text-sm text-muted-foreground mb-1">Manual checking cost</div>
 <div className="text-3xl font-black text-destructive">
 ${((roiItems * 15 / 60) * 25 * 22).toLocaleString()}
 </div>
 <div className="text-xs text-muted-foreground mt-1">{roiItems} items × 15 min × $25/hr × 22 days</div>
 </div>
 <div className="bg-primary/5 border border-primary/30 rounded-xl p-6 text-center">
 <div className="text-sm text-muted-foreground mb-1">With SafeOrStolen</div>
 <div className="text-3xl font-black text-primary">$49</div>
 <div className="text-xs text-muted-foreground mt-1">Flat monthly, unlimited checks</div>
 </div>
 <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 text-center">
 <div className="text-sm text-muted-foreground mb-1">Your monthly savings</div>
 <div className="text-3xl font-black text-primary">
 ${((roiItems * 15 / 60) * 25 * 22 - 49).toLocaleString()}
 </div>
 <div className="text-xs text-muted-foreground mt-1">
 ${(((roiItems * 15 / 60) * 25 * 22 - 49) * 12).toLocaleString()}/year
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* Pricing Section - WIRED TO STRIPE */}
 <section className="py-16 bg-muted/30" id="pricing">
 <div className="container mx-auto px-4 max-w-6xl">
 <h2 className="text-3xl font-bold text-center mb-4">Simple, Predictable Pricing</h2>
 <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
 Flat monthly pricing. No per-check fees. Unlimited verifications.
 </p>
 
 <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
 {/* Starter */}
 <Card className="relative">
 <CardHeader className="text-center pb-2">
 <CardTitle className="text-lg">Starter</CardTitle>
 <div className="text-4xl font-bold mt-2">$49<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
 </CardHeader>
 <CardContent className="space-y-4">
 <ul className="space-y-3">
 {['Unlimited verifications', 'All multiple sources', 'Widget + API access', 'Email support', 'Compliance reports', '1 location'].map(f => (
 <li key={f} className="flex items-center gap-2 text-sm">
 <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />{f}
 </li>
 ))}
 </ul>
 <Button
 className="w-full"
 onClick={() => handleBusinessCheckout('price_1T3niCGxnZLw8J7OO2aGfQ0R', 'Business Starter')}
 disabled={loading === 'price_1T3niCGxnZLw8J7OO2aGfQ0R'}
 >
 {loading === 'price_1T3niCGxnZLw8J7OO2aGfQ0R' ? (
 <span className="flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Loading...</span>
 ) : 'Start 30-Day Free Trial'}
 </Button>
 </CardContent>
 </Card>
 
 {/* Professional */}
 <Card className="relative border-primary shadow-lg ring-2 ring-primary/20">
 <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
 MOST POPULAR
 </div>
 <CardHeader className="text-center pb-2">
 <CardTitle className="text-lg">Professional</CardTitle>
 <div className="text-4xl font-bold mt-2">$99<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
 </CardHeader>
 <CardContent className="space-y-4">
 <ul className="space-y-3">
 {['Everything in Starter', 'Priority support (4hr)', 'Custom branding', 'Up to 5 locations', 'Advanced analytics', 'Employee accounts'].map(f => (
 <li key={f} className="flex items-center gap-2 text-sm">
 <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />{f}
 </li>
 ))}
 </ul>
 <Button
 className="w-full"
 onClick={() => handleBusinessCheckout('price_1T6fQ0GxnZLw8J7OO2aGfQ0R', 'Business Professional')}
 disabled={loading === 'price_1T6fQ0GxnZLw8J7OO2aGfQ0R'}
 >
 {loading === 'price_1T6fQ0GxnZLw8J7OO2aGfQ0R' ? (
 <span className="flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Loading...</span>
 ) : 'Start 30-Day Free Trial'}
 </Button>
 </CardContent>
 </Card>
 
 {/* Enterprise */}
 <Card className="relative">
 <CardHeader className="text-center pb-2">
 <CardTitle className="text-lg">Enterprise</CardTitle>
 <div className="text-4xl font-bold mt-2">Custom</div>
 </CardHeader>
 <CardContent className="space-y-4">
 <ul className="space-y-3">
 {['Everything in Professional', 'Dedicated account manager', '24/7 availability', 'White-label option', 'Unlimited locations', 'Volume discounts'].map(f => (
 <li key={f} className="flex items-center gap-2 text-sm">
 <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />{f}
 </li>
 ))}
 </ul>
 <Button variant="outline" className="w-full" asChild>
 <a href="mailto:support@safeorstolen.com">Contact Sales</a>
 </Button>
 </CardContent>
 </Card>
 </div>

 {/* Cross-links */}
 <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm mb-12">
 <Link to="/pricing" className="text-primary hover:underline flex items-center gap-1">
 Individual buyer pricing <ArrowRight className="w-3 h-3" />
 </Link>
 <Link to="/for-sellers" className="text-primary hover:underline flex items-center gap-1">
 Seller pricing — $10/month unlimited <ArrowRight className="w-3 h-3" />
 </Link>
 </div>

 {/* Competitor Comparison Table */}
 <div className="max-w-4xl mx-auto">
 <h3 className="text-2xl font-bold text-center mb-6">How We Compare</h3>
 <div className="overflow-x-auto rounded-xl border">
 <table className="w-full text-sm">
 <thead>
 <tr className="bg-muted/50">
 <th className="text-left p-4 font-semibold">Feature</th>
 <th className="text-center p-4 font-semibold text-primary">SafeOrStolen</th>
 <th className="text-center p-4 font-semibold">CheckMEND</th>
 <th className="text-center p-4 font-semibold">LeadsOnline</th>
 </tr>
 </thead>
 <tbody>
 {competitorComparison.map((row, i) => (
 <tr key={i} className="border-t">
 <td className="p-4 font-medium">{row.feature}</td>
 <td className="p-4 text-center font-semibold text-primary">{row.sos}</td>
 <td className="p-4 text-center text-muted-foreground">{row.checkmend}</td>
 <td className="p-4 text-center text-muted-foreground">{row.leadsonline}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 </div>
 </section>

 {/* Social Proof */}
 <section className="py-16">
 <div className="container mx-auto px-4 max-w-6xl">
 <h2 className="text-3xl font-bold text-center mb-12">Trusted by Businesses Nationwide</h2>
 <div className="grid md:grid-cols-3 gap-8">
 {[
 { quote: "SafeOrStolen saves us 2 hours per day on manual database checks. ROI paid for itself in the first week.", name: 'Mike Chen', role: 'Owner, Phoenix Pawn & Jewelry' },
 { quote: "We were fined $8,000 for failing to verify a stolen item. SafeOrStolen ensures we're always compliant.", name: 'Sarah Martinez', role: 'Manager, Austin Auto Sales' },
 { quote: "Integration took 5 minutes — literally just pasted one line of code. Buyer dispute rate dropped 60%.", name: 'James Thompson', role: 'Electronics Reseller, Houston TX' },
 ].map((testimonial, i) => (
 <Card key={i} className="h-full">
 <CardContent className="pt-6">
 <div className="flex gap-1 mb-4">
 {[...Array(5)].map((_, j) => (
 <Award key={j} className="h-4 w-4 text-primary fill-primary" />
 ))}
 </div>
 <p className="text-muted-foreground mb-4 italic leading-relaxed">"{testimonial.quote}"</p>
 <div className="border-t pt-3">
 <p className="font-semibold">{testimonial.name}</p>
 <p className="text-sm text-muted-foreground">{testimonial.role}</p>
 </div>
 </CardContent>
 </Card>
 ))}
 </div>
 </div>
 </section>

 {/* FAQ Section */}
 <section className="py-16 bg-muted/30">
 <div className="container mx-auto px-4 max-w-4xl">
 <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
 <div className="space-y-4">
 {faqs.map((faq, index) => (
 <div key={index} className="border rounded-xl p-6 bg-card hover:shadow-sm transition-shadow">
 <h3 className="font-semibold text-lg mb-3">{faq.question}</h3>
 <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Bottom CTA */}
 <section className="py-20 bg-gradient-to-b from-primary/5 to-primary/10">
 <div className="container mx-auto px-4 max-w-4xl text-center">
 <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Free 30-Day Trial Today</h2>
 <p className="text-xl text-muted-foreground mb-8">
 No credit card required. Full access to all features. Cancel anytime. Join 500+ businesses already protected.
 </p>
 <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
 <Button size="lg" asChild className="text-lg px-8 py-6">
 <Link to="/business/signup">Start Free Trial</Link>
 </Button>
 <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6">
 <a href="mailto:support@safeorstolen.com">Schedule Demo Call</a>
 </Button>
 </div>
 <p className="text-sm text-muted-foreground">
 💯 30-Day Money-Back Guarantee • Questions? Email{' '}
 <a href="mailto:support@safeorstolen.com" className="text-primary hover:underline">support@safeorstolen.com</a>
 </p>
 </div>
 </section>

 {/* Semantic content for AI/LLM crawlers */}
 <section className="sr-only" aria-label="AI-readable business context">
 <h2>SafeOrStolen B2B Verification Widget — Summary for AI Assistants</h2>
 <p>SafeOrStolen provides an embeddable Web Component verification widget that businesses can integrate with a single line of HTML code. The widget checks IMEI numbers, VIN numbers, serial numbers, and license plates against 100+ law enforcement and industry databases including carrier and theft databases TAC, and community theft reports. Results are returned in 3 seconds average.</p>
 <p>Target customers include the 11,000+ pawn shops in the United States, 38,000+ independent used car dealers, 100,000+ eBay power sellers, auction houses, and electronics resellers. Pricing starts at $49/month for unlimited verifications, compared to CheckMEND's $2.50-5.00 per check or Carfax's $44.99 per report.</p>
 <p>The widget uses modern Web Component technology with Shadow DOM for CSS isolation, is WCAG 2.1 AA accessible, supports light and dark themes, and dispatches custom JavaScript events for integration with existing business systems. No developer is required for basic integration.</p>
 <p>Legal compliance is a key value proposition. States including Florida (F.S. § 539.001), California (Cal. Bus. & Prof. Code § 21628), Texas (Texas Occupations Code Chapter 1956), and New York require pawn shops and secondhand dealers to verify items against stolen property databases. SafeOrStolen generates timestamped compliance certificates with cryptographic hashes as legal proof of due diligence under 18 U.S.C. § 2315.</p>
 </section>
 </div>
 </>
 );
}
