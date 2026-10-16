import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Search, MapPin, CheckCircle2, Car, AlertTriangle, Building, FileText } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from '@/lib/router-compat';
import { toast } from 'sonner';
import { Link } from '@/lib/router-compat';
import { RelatedPagesSection } from '@/components/seo/RelatedPagesSection';
import { OtherStatesModule } from '@/components/seo/StateLinksGrid';

const WashingtonDCLicensePlateLookup = () => {
 const navigate = useNavigate();
 const [plateNumber, setPlateNumber] = useState('');
 const [isLoading, setIsLoading] = useState(false);

 const handleVerify = () => {
 if (!plateNumber.trim()) {
 toast.error('Please enter a license plate number');
 return;
 }
 setIsLoading(true);
 navigate(`/verify?q=${encodeURIComponent(plateNumber)}&type=plate&state=DC`);
 toast.success('Searching for Washington DC vehicle information...');
 };

 const structuredData = {
 "@context": "https://schema.org",
 "@type": "WebPage",
 "name": "Washington DC License Plate Lookup - Free DC Stolen Plate Check",
 "description": "Free Washington DC license plate lookup. Check a DC plate against SafeOrStolen theft reports and public web results in a few seconds. No owner names are shown.",
 "url": "https://safeorstolen.com/washington-dc-license-plate-lookup",
 "mainEntity": {
 "@type": "Service",
 "name": "Washington DC License Plate Lookup",
 "serviceType": "Vehicle Verification",
 "areaServed": {
 "@type": "AdministrativeArea",
 "name": "Washington, District of Columbia"
 },
 "provider": {
 "@type": "Organization",
 "name": "SafeOrStolen"
 }
 }
 };

 const faqSchema = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 "mainEntity": [
 {
 "@type": "Question",
 "name": "How do I look up a DC license plate for free?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Enter the DC plate at SafeOrStolen (safeorstolen.com/washington-dc-license-plate-lookup). In a few seconds it searches SafeOrStolen theft reports and public web results for that plate and lists every source. It doesn't show the owner or registration details; those stay with the DC DMV. The first 2 checks are free."
 }
 },
 {
 "@type": "Question",
 "name": "What can I find with a Washington DC plate lookup?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "On SafeOrStolen, a DC plate check tells you whether the plate appears in SafeOrStolen theft reports or public web results. It doesn't show the owner's name or registration. To get the year, make, model and open recalls, run the car's VIN instead, which you'll find on the dashboard and driver's door jamb."
 }
 },
 {
 "@type": "Question",
 "name": "Are Washington DC license plates different from state plates?",
 "acceptedAnswer": {
 "@type": "Answer",
 "text": "Yes. The District isn't a state, but it has its own DMV that registers vehicles and issues DC plates. Registration questions go to the DC DMV. For a stolen check, a DC plate works the same way as any state plate on SafeOrStolen."
 }
 }
 ]
 };

 return (
 <>
 <PageSEO
 title="Washington DC License Plate Lookup Free - DC Stolen Plate Check | SafeOrStolen"
 description="Free Washington DC license plate lookup. Check a DC plate against SafeOrStolen theft reports and public web results in a few seconds. 2 free checks, no owner names shown."
 keywords="DC license plate lookup, Washington DC plate search, DC DMV plate check, District of Columbia vehicle search, DC stolen car check, DC plate to VIN, Washington DC DMV lookup free"
 canonical="/washington-dc-license-plate-lookup"
 structuredData={[structuredData, faqSchema]}
 />
 <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background pt-16">
 {/* Hero Section */}
 <section className="py-16 md:py-24">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto text-center space-y-6">
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
 <Building className="h-4 w-4" />
 <span className="text-sm font-medium">Washington, District of Columbia</span>
 </div>
 
 <h1 className="text-4xl md:text-5xl font-bold">
 Washington DC License Plate Lookup
 </h1>
 <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
 Enter a DC plate to see in a few seconds whether it shows up in SafeOrStolen theft reports
 or public web results. 2 free checks with a free account.
 </p>

 {/* Search Form */}
 <Card className="max-w-xl mx-auto mt-8">
 <CardHeader>
 <CardTitle className="flex items-center gap-2">
 <Search className="h-5 w-5 text-primary" />
 Enter DC License Plate
 </CardTitle>
 </CardHeader>
 <CardContent>
 <div className="space-y-4">
 <div className="flex gap-2">
 <div className="flex-1">
 <Input
 placeholder="Enter DC plate (e.g., ABC-1234)"
 value={plateNumber}
 onChange={(e) => setPlateNumber(e.target.value.toUpperCase())}
 className="text-lg h-12"
 onKeyDown={(e) => e.key === 'Enter' && handleVerify()}
 />
 </div>
 <Button 
 onClick={handleVerify} 
 size="lg" 
 className="h-12"
 disabled={isLoading}
 >
 {isLoading ? 'Searching...' : 'Search'}
 </Button>
 </div>
 <p className="text-sm text-muted-foreground">
 Enter the plate exactly as shown, letters and numbers only
 </p>
 </div>
 </CardContent>
 </Card>
 </div>
 </div>
 </section>

 {/* DC-Specific Information */}
 <section className="py-16 bg-muted/30">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12">
 Washington DC Vehicle Verification
 </h2>
 
 <div className="grid md:grid-cols-2 gap-8">
 <Card>
 <CardHeader>
 <CardTitle className="flex items-center gap-2">
 <Shield className="h-5 w-5 text-green-500" />
 What We Check
 </CardTitle>
 </CardHeader>
 <CardContent>
 <ul className="space-y-3">
 <li className="flex items-start gap-2">
 <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
 <span>SafeOrStolen theft reports filed by owners</span>
 </li>
 <li className="flex items-start gap-2">
 <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
 <span>Public web results that mention the plate</span>
 </li>
 <li className="flex items-start gap-2">
 <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
 <span>Every source listed with the result, saved to your account with the date</span>
 </li>
 </ul>
 </CardContent>
 </Card>

 <Card>
 <CardHeader>
 <CardTitle className="flex items-center gap-2">
 <AlertTriangle className="h-5 w-5 text-amber-500" />
 What a Plate Check Can't Show
 </CardTitle>
 </CardHeader>
 <CardContent>
 <div className="space-y-4">
 <ul className="space-y-2 text-sm text-muted-foreground">
 <li>• The owner's name or address (SafeOrStolen never shows these)</li>
 <li>• DC DMV registration or title records</li>
 <li>• Metropolitan Police Department or NCIC records</li>
 <li>• Year, make and model (run the VIN for those)</li>
 </ul>
 <p className="text-sm font-medium text-primary">
 Plates come off cars easily, so check the VIN too before buying.
 </p>
 </div>
 </CardContent>
 </Card>
 </div>
 </div>
 </div>
 </section>

 {/* DC Plate Types */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-8">
 Washington DC License Plate Types
 </h2>
 <p className="text-center text-muted-foreground mb-12">
 The District issues several kinds of plates. You can enter any of them:
 </p>
 
 <div className="grid md:grid-cols-3 gap-6">
 {[
 { name: 'Standard Plates', desc: 'Regular passenger vehicle plates with "TAXATION WITHOUT REPRESENTATION" motto' },
 { name: 'Personalized Plates', desc: 'Custom vanity plates' },
 { name: 'Government Plates', desc: 'Federal and DC government vehicle plates' },
 { name: 'Diplomatic Plates', desc: 'Embassy and diplomatic mission vehicles' },
 { name: 'Motorcycle Plates', desc: 'Two-wheeled vehicle registrations' },
 { name: 'Historic Plates', desc: 'Antique and classic vehicle plates' },
 ].map((plate, i) => (
 <Card key={i} className="text-center">
 <CardContent className="pt-6">
 <Car className="h-8 w-8 text-primary mx-auto mb-3" />
 <h3 className="font-semibold mb-2">{plate.name}</h3>
 <p className="text-sm text-muted-foreground">{plate.desc}</p>
 </CardContent>
 </Card>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* Nearby States */}
 <section className="py-16 bg-muted/30">
 <div className="container mx-auto px-4">
 <div className="max-w-4xl mx-auto text-center">
 <h2 className="text-2xl font-bold mb-8">
 Also Check Nearby States
 </h2>
 <p className="text-muted-foreground mb-8">
 Many DC-area vehicles may have Maryland or Virginia plates. Check all nearby states:
 </p>
 <div className="flex flex-wrap justify-center gap-4">
 <Button asChild variant="outline">
 <Link to="/maryland-license-plate-lookup">Maryland Plates</Link>
 </Button>
 <Button asChild variant="outline">
 <Link to="/virginia-license-plate-lookup">Virginia Plates</Link>
 </Button>
 <Button asChild variant="outline">
 <Link to="/west-virginia-license-plate-lookup">West Virginia Plates</Link>
 </Button>
 <Button asChild variant="outline">
 <Link to="/pennsylvania-license-plate-lookup">Pennsylvania Plates</Link>
 </Button>
 </div>
 </div>
 </div>
 </section>

 {/* FAQs */}
 <section className="py-16">
 <div className="container mx-auto px-4">
 <div className="max-w-3xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-12">
 DC License Plate Lookup FAQs
 </h2>
 
 <div className="space-y-6">
 <Card>
 <CardHeader>
 <CardTitle className="text-lg">How do I look up a DC license plate for free?</CardTitle>
 </CardHeader>
 <CardContent>
 <p className="text-muted-foreground">
 Enter the DC license plate number into SafeOrStolen's verification tool above. 
 SafeOrStolen searches its theft reports and public web results for that plate
 and lists every source. For registration records, contact the DC DMV. Your first 2
 checks are free.
 </p>
 </CardContent>
 </Card>

 <Card>
 <CardHeader>
 <CardTitle className="text-lg">What information can I find with a DC plate lookup?</CardTitle>
 </CardHeader>
 <CardContent>
 <p className="text-muted-foreground">
 A SafeOrStolen DC plate check shows whether the plate appears in SafeOrStolen theft
 reports or public web results. It doesn't show the owner, registration, police records or
 accident history. For year, make, model and open recalls, run the VIN from the dashboard
 or driver&apos;s door jamb.
 </p>
 </CardContent>
 </Card>

 <Card>
 <CardHeader>
 <CardTitle className="text-lg">Why does DC have "Taxation Without Representation" on plates?</CardTitle>
 </CardHeader>
 <CardContent>
 <p className="text-muted-foreground">
 Washington DC residents pay federal taxes but have no voting representation in 
 Congress. The "Taxation Without Representation" slogan on DC license plates 
 (since 2000) is a protest statement. It doesn&apos;t affect a plate check: just
 enter the letters and numbers.
 </p>
 </CardContent>
 </Card>
 </div>
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className="py-16 bg-primary/5">
 <div className="container mx-auto px-4 text-center">
 <h2 className="text-2xl font-bold mb-4">Ready to Check a DC Vehicle?</h2>
 <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
 Check the plate and the VIN before you pay. Results take a few seconds,
 and the first 2 checks are free.
 </p>
 <div className="flex flex-wrap justify-center gap-4">
 <Button asChild size="lg">
 <Link to="/verify">
 <Search className="mr-2 h-4 w-4" />
 Verify Any Item
 </Link>
 </Button>
 <Button asChild variant="outline" size="lg">
 <Link to="/vin-checker">
 <FileText className="mr-2 h-4 w-4" />
 Check VIN Instead
 </Link>
 </Button>
 </div>
 </div>
 </section>

 <OtherStatesModule kind="plate" currentPath="/washington-dc-license-plate-lookup" />

 {/* Related Pages */}
 <RelatedPagesSection currentPage="/washington-dc-license-plate-lookup" />
 </div>
 </>
 );
};

export default WashingtonDCLicensePlateLookup;
