import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Check, X, Smartphone, Shield, Zap, Users, Building2, Download } from 'lucide-react';

const Compare = () => {
 const competitors = [
 {
 name: 'SafeOrStolen',
 highlight: true,
 features: {
 mobileApp: true,
 freeChecks: '$10/mo unlimited',
 speed: '3 seconds',
 imei: true,
 vin: true,
 serial: true,
 firearms: true,
 boats: true,
 barcode: true,
 offline: true,
 forBuyers: true,
 forSellers: true,
 forBusinesses: true,
 }
 },
 {
 name: 'CheckMEND',
 highlight: false,
 features: {
 mobileApp: false,
 freeChecks: 'Paid only',
 speed: '30+ seconds',
 imei: true,
 vin: true,
 serial: true,
 firearms: false,
 boats: false,
 barcode: false,
 offline: false,
 forBuyers: true,
 forSellers: false,
 forBusinesses: true,
 }
 },
 {
 name: 'IMEI.info',
 highlight: false,
 features: {
 mobileApp: false,
 freeChecks: 'Limited',
 speed: '10+ seconds',
 imei: true,
 vin: false,
 serial: false,
 firearms: false,
 boats: false,
 barcode: false,
 offline: false,
 forBuyers: true,
 forSellers: false,
 forBusinesses: false,
 }
 },
 {
 name: 'Swappa',
 highlight: false,
 features: {
 mobileApp: false,
 freeChecks: 'Platform only',
 speed: 'Varies',
 imei: true,
 vin: false,
 serial: false,
 firearms: false,
 boats: false,
 barcode: false,
 offline: false,
 forBuyers: true,
 forSellers: true,
 forBusinesses: false,
 }
 },
 {
 name: 'Carfax',
 highlight: false,
 features: {
 mobileApp: false,
 freeChecks: 'Paid only',
 speed: '5+ seconds',
 imei: false,
 vin: true,
 serial: false,
 firearms: false,
 boats: false,
 barcode: false,
 offline: false,
 forBuyers: true,
 forSellers: true,
 forBusinesses: true,
 }
 },
 ];

 const featureRows = [
 { key: 'mobileApp', label: 'Mobile App', icon: Smartphone },
 { key: 'freeChecks', label: 'Pricing', icon: Shield },
 { key: 'speed', label: 'Verification Speed', icon: Zap },
 { key: 'barcode', label: 'Barcode Scanning', icon: Smartphone },
 { key: 'offline', label: 'Offline Mode', icon: Shield },
 { key: 'imei', label: 'IMEI Check (Phones)', icon: Smartphone },
 { key: 'vin', label: 'VIN Check (Vehicles)', icon: Shield },
 { key: 'serial', label: 'Serial Numbers', icon: Shield },
 { key: 'firearms', label: 'Firearms', icon: Shield },
 { key: 'boats', label: 'Boats & Marine', icon: Shield },
 { key: 'forBuyers', label: 'For Buyers', icon: Users },
 { key: 'forSellers', label: 'For Sellers', icon: Users },
 { key: 'forBusinesses', label: 'For Businesses', icon: Building2 },
 ];

 const renderFeatureValue = (value: boolean | string) => {
 if (typeof value === 'boolean') {
 return value ? (
 <Check className="h-5 w-5 text-primary mx-auto" />
 ) : (
 <X className="h-5 w-5 text-muted-foreground/50 mx-auto" />
 );
 }
 return <span className="text-sm">{value}</span>;
 };

 return (
 <>
 <PageSEO
 title="SafeOrStolen vs Carfax vs IMEI Checkers — Free Alternative Comparison | SafeOrStolen"
 description="Compare SafeOrStolen to Carfax, CheckMEND, IMEI.info, and vehicle theft and title databases. The only service checking phones, cars, bikes, firearms, and electronics in one place. See why SafeOrStolen is the best free alternative."
 keywords="CheckMEND alternative, better than IMEI.info, Swappa alternative, Carfax alternative, best stolen item checker, IMEI checker comparison, VIN lookup comparison, stolen verification app"
 canonical="/compare"
 structuredData={{
 "@context": "https://schema.org",
 "@type": "WebPage",
 "name": "Stolen Item Checker Comparison - SafeOrStolen and Competitors",
 "description": "Compare SafeOrStolen with CheckMEND, IMEI.info, Swappa, and Carfax",
 "specialty": "comparison"
 }}
 />

 {/* Minimal noscript fallback */}
 <noscript>
 <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
 <p><strong>SafeOrStolen, CheckMEND, IMEI.info, and Carfax Comparison</strong></p>
 <p>Compare stolen item verification services. SafeOrStolen offers the only mobile app with barcode scanning.</p>
 </div>
 </noscript>
 <div className="min-h-screen bg-background pt-20">
 {/* Hero */}
 <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
 <div className="container mx-auto px-4 text-center">
 <Badge variant="secondary" className="mb-4">Comparison</Badge>
 <h1 className="text-4xl md:text-5xl font-bold mb-4">
 SafeOrStolen and The Competition
 </h1>
 <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
 See why SafeOrStolen is the #1 stolen item checker for buyers, sellers, and businesses
 </p>
 <div className="flex flex-wrap justify-center gap-4">
 <Button asChild size="lg">
 <Link to="/verify">
 <Shield className="mr-2 h-5 w-5" />
 Subscribe — $10/mo Unlimited
 </Link>
 </Button>
 <Button asChild variant="outline" size="lg">
 <Link to="/app">
 <Download className="mr-2 h-5 w-5" />
 Download the Only App
 </Link>
 </Button>
 </div>
 </div>
 </section>

 {/* Comparison Table */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <div className="overflow-x-auto">
 <table className="w-full border-collapse">
 <thead>
 <tr>
 <th className="text-left p-4 border-b">Feature</th>
 {competitors.map((c) => (
 <th 
 key={c.name} 
 className={`text-center p-4 border-b ${c.highlight ? 'bg-primary/10' : ''}`}
 >
 <span className={c.highlight ? 'font-bold text-primary' : ''}>
 {c.name}
 </span>
 {c.highlight && (
 <Badge variant="default" className="ml-2 text-xs">Best</Badge>
 )}
 </th>
 ))}
 </tr>
 </thead>
 <tbody>
 {featureRows.map((row) => (
 <tr key={row.key} className="hover:bg-muted/50">
 <td className="p-4 border-b font-medium">{row.label}</td>
 {competitors.map((c) => (
 <td 
 key={`${c.name}-${row.key}`} 
 className={`p-4 border-b text-center ${c.highlight ? 'bg-primary/5' : ''}`}
 >
 {renderFeatureValue(c.features[row.key as keyof typeof c.features])}
 </td>
 ))}
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </div>
 </section>

 {/* Key Advantages */}
 <section className="py-16 bg-muted/30">
 <div className="container mx-auto px-4">
 <h2 className="text-3xl font-bold text-center mb-12">
 Why Choose SafeOrStolen?
 </h2>
 <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
 <Card>
 <CardHeader>
 <Smartphone className="h-10 w-10 text-primary mb-2" />
 <CardTitle>The Only Mobile App</CardTitle>
 </CardHeader>
 <CardContent>
 <p className="text-muted-foreground">
 CheckMEND, IMEI.info, Swappa, and Carfax have NO mobile apps. 
 SafeOrStolen is the only one with barcode scanning and offline mode.
 </p>
 </CardContent>
 </Card>
 
 <Card>
 <CardHeader>
 <Shield className="h-10 w-10 text-primary mb-2" />
 <CardTitle>Covers Everything</CardTitle>
 </CardHeader>
 <CardContent>
 <p className="text-muted-foreground">
 Phones, vehicles, boats, firearms, electronics, tools. 
 Like Carfax, but for EVERYTHING - not just cars.
 </p>
 </CardContent>
 </Card>
 
 <Card>
 <CardHeader>
 <Users className="h-10 w-10 text-primary mb-2" />
 <CardTitle>For Everyone</CardTitle>
 </CardHeader>
 <CardContent>
 <p className="text-muted-foreground">
 Buyers verify before purchasing. Sellers prove legitimacy. 
 Businesses reduce risk. One platform serves all.
 </p>
 </CardContent>
 </Card>
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="py-16">
 <div className="container mx-auto px-4 text-center">
 <h2 className="text-3xl font-bold mb-4">Ready to Try the Best?</h2>
 <p className="text-xl text-muted-foreground mb-8">
 $0.99/check or $10/month unlimited. All item types. Results in 3 seconds.
 </p>
 <div className="flex flex-wrap justify-center gap-4">
 <Button asChild size="lg">
 <Link to="/pricing">Subscribe — $10/mo</Link>
 </Button>
 <Button asChild variant="outline" size="lg">
 <Link to="/pricing">View Pricing</Link>
 </Button>
 </div>
 </div>
 </section>
 </div>
 </>
 );
};

export default Compare;
