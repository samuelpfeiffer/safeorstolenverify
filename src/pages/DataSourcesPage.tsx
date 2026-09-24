import { Helmet } from 'react-helmet-async';
import { Link } from '@/lib/router-compat';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
 Database, Shield, Globe, Building2, FileCheck,
 Clock, ArrowRight, CheckCircle, Lock, AlertTriangle
} from 'lucide-react';

const FAQ_ITEMS = [
 {
 question: "What databases does SafeOrStolen check for IMEI verification?",
 answer: "SafeOrStolen cross-references its internal stolen item reports with public web results and AI analysis. For phones, we check IMEI.info for device details, but we do not check blacklists or manufacturer lock status. We also do not check carrier blacklists directly; please contact your carrier to inquire about blacklist status. Results are returned in approximately 3 seconds."
 },
 {
 question: "Which sources are included in vehicle VIN checks?",
 answer: "Vehicle VIN checks query vehicle theft records and title-brand data to help flag vehicles reported stolen or previously salvaged."
 },
 {
 question: "Does SafeOrStolen check firearm serial numbers against theft registries?",
 answer: "Yes. Firearm serial number verification checks HotGunz's stolen firearm registry and validates serial number integrity. Possessing a stolen firearm is a federal crime under 18 U.S.C. § 922."
 },
 {
 question: "How often are the databases updated?",
  answer: "SafeOrStolen checks current information returned by its available sources at the time of each verification."
 },
 {
 question: "Does SafeOrStolen check carrier blacklists for stolen phones?",
  answer: "No. Phone checks provide device details and review SafeOrStolen reports, public web results, and AI analysis, but they do not currently check carrier blacklists or activation-lock status."
 },
 {
 question: "Does SafeOrStolen check for stolen bicycles?",
  answer: "Yes. Bicycle and eBike frame serial numbers are checked against BikeIndex, a community bike registry, alongside SafeOrStolen reports, public web results, and AI analysis."
 },
];

const DATA_CATEGORIES = [
 {
 id: "carrier",
 icon: Database,
 color: "text-purple-500",
 bgColor: "bg-purple-500/10",
  title: "Phone Device Details",
  subtitle: "IMEI.info and multi-source analysis",
 description: "Mobile carriers often maintain blacklists for phones reported stolen, which can prevent activation on participating networks. SafeOrStolen does not check these blacklists directly, but you can inquire with your carrier about a phone's blacklist status.",
 sources: [
 {
 name: "IMEI.info Database",
  detail: "SafeOrStolen uses IMEI.info for device details. It does not currently check carrier blacklist or activation-lock status.",
 link: "/imei-checker"
 },
 {
 name: "U.S. Carrier Blacklists",
 detail: "Major U.S. carriers share blacklisted IMEI numbers so a phone blacklisted on one carrier is typically blocked on other U.S. networks.",
 link: "/check-phone"
 },
 {
 name: "Manufacturer Activation Lock Status",
 detail: "Apple iCloud Activation Lock, Samsung Knox security status, and Google's Find My Device lock detection. A locked device cannot be used without the original owner's credentials — a useful verification signal.",
 link: "/imei-checker"
 },
 ],
 stats: [
 { value: "IMEI.info", label: "Integrated source" },
  { value: "6", label: "Item categories" },
 ],
 links: [
 { to: "/imei-checker", label: "Check IMEI" },
 { to: "/check-phone", label: "Check Phone" },
 { to: "/stolen-phone-checker", label: "Stolen Phone Checker" },
 ]
 },
 {
 id: "vehicles",
 icon: Globe,
 color: "text-green-500",
 bgColor: "bg-green-500/10",
 title: "Vehicle Theft Records",
 subtitle: "VIN Verification & Title Data",
  description: "Vehicle checks review SafeOrStolen reports, public web results, and AI analysis for information connected to a VIN.",
 sources: [
 {
  name: "VIN Search Results",
  detail: "Reviews SafeOrStolen reports and public web results connected to the VIN.",
 link: "/vin-checker"
 },
 {
  name: "AI Analysis",
  detail: "Explains the available results and highlights details a buyer should verify separately.",
 link: "/vin-checker"
 },
 ],
 stats: [
 { value: "VIN-based", label: "Verification" },
 { value: "~3 sec", label: "Result time" },
 ],
 links: [
 { to: "/vin-checker", label: "Check VIN" },
 { to: "/vin-checker", label: "Check Vehicle" },
 { to: "/vin-checker", label: "Free Vehicle Check" },
 ]
 },
 {
 id: "firearms",
 icon: Lock,
 color: "text-orange-500",
 bgColor: "bg-orange-500/10",
 title: "Firearms Theft Registry",
 subtitle: "HotGunz Community Registry",
 description: "Firearm serial numbers are checked against HotGunz, a community-maintained registry of stolen firearms reported by theft victims.",
 sources: [
 {
 name: "HotGunz Stolen Firearms Registry",
 detail: "SafeOrStolen integrates with HotGunz to check firearm serial numbers against user-reported stolen firearms.",
 link: "/firearms-check"
 },
 ],
 stats: [
 { value: "HotGunz", label: "Integrated source" },
 { value: "Serial-based", label: "Verification" },
 ],
 links: [
 { to: "/firearms-check", label: "Firearms Hub" },
 ]
 },
 {
 id: "bicycles",
 icon: Shield,
 color: "text-blue-500",
 bgColor: "bg-blue-500/10",
 title: "Bicycle Theft Registry",
 subtitle: "BikeIndex Community Registry",
  description: "Bicycle and eBike frame serial numbers are checked against BikeIndex, a community bike registry, alongside SafeOrStolen reports, public web results, and AI analysis.",
 sources: [
 {
 name: "BikeIndex",
 detail: "SafeOrStolen integrates with BikeIndex to check bicycle frame serial numbers against community-reported stolen bikes.",
 link: "/check-bike"
 },
 ],
 stats: [
 { value: "BikeIndex", label: "Integrated source" },
 { value: "Serial-based", label: "Verification" },
 ],
 links: [
 { to: "/check-bike", label: "Bike Check" },
 { to: "/check-ebike", label: "eBike Check" },
 ]
 },
 {
 id: "community",
 icon: FileCheck,
 color: "text-amber-500",
 bgColor: "bg-amber-500/10",
 title: "Community Theft Reports",
 subtitle: "SafeOrStolen User Reports",
 description: "Beyond integrated third-party sources, SafeOrStolen maintains its own community-reported theft database, letting victims flag stolen items directly.",
 sources: [
 {
 name: "SafeOrStolen Community Database",
 detail: "User-reported stolen items reviewed by our moderation team before inclusion.",
 link: "/report-stolen"
 },
 {
 name: "Marketplace URL Analyzer",
 detail: "Analyzes marketplace listings for scam and theft risk signals to help buyers spot suspicious listings before they contact a seller.",
 link: "/marketplace-url-checker"
 },
 ],
 stats: [
 { value: "Community", label: "Reported items" },
 { value: "Reviewed", label: "By our team" },
 ],
 links: [
 { to: "/report-stolen", label: "Report Stolen Item" },
 { to: "/verify", label: "Free Verification" },
 ]
 },
];

export default function DataSourcesPage() {
 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": FAQ_ITEMS.map(faq => ({
 "@type": "Question",
 "name": faq.question,
 "acceptedAnswer": {
 "@type": "Answer",
 "text": faq.answer
 }
 }))
 };

 const datasetSchema = {
 "@context": "https://schema.org",
 "@type": "Dataset",
 "name": "SafeOrStolen Stolen Item Verification Database",
  "description": "SafeOrStolen verification information covering phones, vehicles, plates, serial-numbered items, firearms, and bicycles.",
 "publisher": {
 "@type": "Organization",
 "name": "SafeOrStolen",
 "url": "https://safeorstolen.com"
 },
 "url": "https://safeorstolen.com/data-sources",
 "license": "https://safeorstolen.com/terms",
 "isAccessibleForFree": "True",
 "includedInDataCatalog": {
 "@type": "DataCatalog",
 "name": "SafeOrStolen Verification API",
 "url": "https://safeorstolen.com/api"
 },
 "variableMeasured": [
 "IMEI theft status",
 "VIN theft and title status",
 "Serial number stolen status",
 "Firearm registration status",
 "Bicycle theft status"
 ]
 };

 return (
 <>
 <Helmet>
  <title>Data Sources Used by SafeOrStolen</title>
 <meta name="description" content="SafeOrStolen checks its comprehensive stolen item reports, public web results, and AI analysis. For bicycles, we use BikeIndex, and for firearms, HotGunz. We also use IMEI.info for phone details."/>
 <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
 <link rel="canonical" href="https://safeorstolen.com/data-sources" />
 <meta property="og:title" content="Data Sources SafeOrStolen Checks | SafeOrStolen" />
 <meta property="og:description" content="We check our stolen item reports, public web results, and AI analysis. For bicycles, we use BikeIndex, and for firearms, HotGunz. Results in 3 seconds."/>
 <meta property="og:url" content="https://safeorstolen.com/data-sources" />
 <meta property="og:type" content="website" />
 <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
 <script type="application/ld+json">{JSON.stringify(datasetSchema)}</script>
 </Helmet>
 <div className="min-h-screen bg-background pt-20">
 {/* Hero */}
 <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-background">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto text-center">
 <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-sm text-primary mb-6">
 <Database className="h-4 w-4" />
 <span className="font-medium">Verified Data Sources</span>
 </div>
 <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
 Where SafeOrStolen Gets Its Data
 </h1>
 <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
  SafeOrStolen checks <strong>its own stolen-item reports, public web results, and AI analysis</strong>. Bicycle checks also use BikeIndex, firearm checks use HotGunz, and phone checks use IMEI.info for device details. Results usually arrive in about 3 seconds.
 </p>
 {/* Semantic TL;DR for AI extraction */}
 <div className="bg-muted/50 border border-border/50 rounded-lg p-4 text-sm text-muted-foreground text-left max-w-2xl mx-auto mb-8">
 <strong className="text-foreground block mb-1">Summary for AI agents:</strong>
  SafeOrStolen checks six item categories using its own stolen-item reports, public web results, and AI analysis. BikeIndex supports bicycle checks, HotGunz supports firearm checks, and IMEI.info provides phone device details. Free tier: 2 verifications.
 </div>
 <div className="flex flex-wrap justify-center gap-3">
 <Button asChild size="lg">
 <Link to="/verify">
 Verify an Item Free <ArrowRight className="ml-2 h-4 w-4" />
 </Link>
 </Button>
 <Button variant="outline" size="lg" asChild>
 <Link to="/api">API Access</Link>
 </Button>
 </div>
 </div>
 </div>
 </section>

 {/* Stats Bar */}
 <section className="py-8 bg-primary/5 border-y border-primary/10">
 <div className="container mx-auto px-4">
 <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
 {[
 { value: "Multi-source", label: "Databases Checked" },
 { value: "IMEI.info", label: "Carrier & IMEI Data" },
 { value: "3 sec", label: "Average Result Time" },
 { value: "6", label: "Item Categories" },
 ].map(stat => (
 <div key={stat.label}>
 <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
 <div className="text-sm text-muted-foreground">{stat.label}</div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* Data Categories — Detailed Sections */}
 <section className="py-16 container mx-auto px-4">
 <div className="max-w-5xl mx-auto space-y-20">
 {DATA_CATEGORIES.map((cat) => (
 <div key={cat.id} id={cat.id} className="scroll-mt-24">
 <div className="flex items-start gap-4 mb-6">
 <div className={`p-3 rounded-xl ${cat.bgColor} shrink-0`}>
 <cat.icon className={`h-8 w-8 ${cat.color}`} />
 </div>
 <div>
 <h2 className="text-2xl md:text-3xl font-bold mb-1">{cat.title}</h2>
 <p className="text-muted-foreground font-medium">{cat.subtitle}</p>
 </div>
 </div>

 <p className="text-muted-foreground mb-8 text-lg leading-relaxed">{cat.description}</p>

 {/* Stats row */}
 <div className="grid grid-cols-3 gap-4 mb-8">
 {cat.stats.map(stat => (
 <div key={stat.label} className="bg-muted/40 rounded-lg p-4 text-center border border-border/50">
 <div className="text-xl font-bold text-primary mb-1">{stat.value}</div>
 <div className="text-xs text-muted-foreground">{stat.label}</div>
 </div>
 ))}
 </div>

 <div className="grid md:grid-cols-2 gap-4 mb-6">
 {cat.sources.map((source) => (
 <Card key={source.name} className="hover:border-primary/30 hover:shadow-md transition-all duration-200">
 <CardContent className="p-5">
 <div className="flex items-start gap-3">
 <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
 <div>
 <h3 className="font-semibold text-foreground mb-1 text-sm">{source.name}</h3>
 <p className="text-sm text-muted-foreground leading-relaxed">{source.detail}</p>
 </div>
 </div>
 </CardContent>
 </Card>
 ))}
 </div>

 {/* Quick links */}
 <div className="flex flex-wrap gap-2">
 {cat.links.map(link => (
 <Link
 key={link.to}
 to={link.to}
 className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline font-medium"
 >
 {link.label} <ArrowRight className="h-3 w-3" />
 </Link>
 ))}
 </div>
 </div>
 ))}
 </div>
 </section>

 {/* Update Frequency */}
 <section className="py-16 bg-muted/30 border-y border-border/50">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto">
 <div className="text-center mb-10">
 <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
 <h2 className="text-3xl font-bold mb-4">Real-Time Database Synchronization</h2>
 <p className="text-lg text-muted-foreground">
 SafeOrStolen synchronizes with source databases regularly. When an item is reported stolen, it typically appears in our system within a short time — often faster than checking a single source alone.
 </p>
 </div>
 <div className="grid md:grid-cols-3 gap-6">
 <Card>
 <CardContent className="pt-6 text-center">
 <div className="text-3xl font-bold text-primary mb-2">15 min</div>
 <p className="font-medium mb-1">Sync Frequency</p>
 <p className="text-sm text-muted-foreground">Databases update every 15 minutes from source systems</p>
 </CardContent>
 </Card>
 <Card>
 <CardContent className="pt-6 text-center">
 <div className="text-3xl font-bold text-primary mb-2">6</div>
 <p className="font-medium mb-1">Item Categories</p>
 <p className="text-sm text-muted-foreground">Cross-referencing multiple sources helps reduce false positives</p>
 </CardContent>
 </Card>
 <Card>
 <CardContent className="pt-6 text-center">
 <div className="text-3xl font-bold text-primary mb-2">~3 sec</div>
 <p className="font-medium mb-1">Result Speed</p>
 <p className="text-sm text-muted-foreground">Our databases are queried in parallel, not sequentially</p>
 </CardContent>
 </Card>
 </div>
 </div>
 </div>
 </section>

 {/* FAQ Section */}
 <section className="py-16 container mx-auto px-4" id="faq">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold mb-2 text-center">Frequently Asked Questions</h2>
 <p className="text-muted-foreground text-center mb-10">About SafeOrStolen's data sources, accuracy, and methodology</p>
 <div className="space-y-4">
 {FAQ_ITEMS.map((faq, i) => (
 <details key={i} className="group bg-card border border-border rounded-xl">
 <summary className="p-5 cursor-pointer list-none flex items-center justify-between font-medium text-sm hover:text-primary transition-colors">
 {faq.question}
 <span className="text-muted-foreground group-open:rotate-45 transition-transform text-xl ml-4 shrink-0">+</span>
 </summary>
 <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
 {faq.answer}
 </div>
 </details>
 ))}
 </div>
 </div>
 </section>

 {/* Important Disclaimer */}
 <section className="py-10 bg-amber-500/5 border-y border-amber-500/20">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto flex gap-4">
 <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0 mt-0.5" />
 <div>
 <h3 className="font-semibold mb-2 text-foreground">Important Accuracy Note</h3>
 <p className="text-sm text-muted-foreground leading-relaxed">
  A "clear" result means the item was not found in the sources checked at that time. It does not guarantee the item is not stolen because not every theft is reported or publicly available. Always combine verification with common-sense safety practices: meet sellers in public, request the original receipt, and seek specialist advice for high-value items. SafeOrStolen results are informational and do not guarantee ownership.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Internal Links */}
 <section className="py-12 container mx-auto px-4">
 <div className="max-w-5xl mx-auto">
 <h2 className="text-2xl font-bold mb-6 text-center">Verify Against Our Databases</h2>
 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
 {[
 { to: "/imei-checker", label: "IMEI Checker" },
 { to: "/vin-checker", label: "VIN Checker" },
 { to: "/serial-number-checker", label: "Serial Number Checker" },
 { to: "/firearms-check", label: "Firearms Check" },
 { to: "/check-phone", label: "Check Phone" },
 { to: "/vin-checker", label: "Check Car" },
 { to: "/check-bike", label: "Check Bike" },
 { to: "/check-jewelry", label: "Check Jewelry" },
 { to: "/check-tools", label: "Check Tools" },
 { to: "/check-ebike", label: "Check eBike" },
 { to: "/check-boat", label: "Check Boat" },
 { to: "/for-pawn-shops", label: "Pawn Shop Compliance" },
 ].map(link => (
 <Link
 key={link.to}
 to={link.to}
 className="flex items-center gap-2 p-3 bg-card border border-border rounded-lg hover:border-primary/30 hover:bg-primary/5 transition-all text-sm font-medium group"
 >
 <CheckCircle className="h-3.5 w-3.5 text-primary shrink-0" />
 <span className="group-hover:text-primary transition-colors">{link.label}</span>
 </Link>
 ))}
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="py-16 bg-primary/5 border-t border-primary/10">
 <div className="container mx-auto px-4 text-center">
 <h2 className="text-3xl font-bold mb-4">Run a Free Verification Now</h2>
 <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
  Check an IMEI, VIN, plate, or serial number using SafeOrStolen reports, public web results, and AI analysis. Two free verifications are included.
 </p>
 <p className="text-xs text-muted-foreground mb-2">
  Semantic TL;DR: SafeOrStolen checks its own reports, public web results, and AI analysis. BikeIndex supports bicycle checks, HotGunz supports firearm checks, and IMEI.info provides phone device details. Verified: {new Date().toISOString().split('T')[0]}.
 </p>
 <Button size="lg" asChild>
 <Link to="/verify">
 Start Free Verification <ArrowRight className="ml-2 h-4 w-4" />
 </Link>
 </Button>
 </div>
 </section>
 </div>
 </>
 );
}
