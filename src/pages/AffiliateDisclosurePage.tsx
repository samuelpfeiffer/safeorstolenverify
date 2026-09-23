import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import { Shield, AlertTriangle, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/router-compat';

const AffiliateDisclosurePage: React.FC = () => {
 const webPageSchema = {
 "@context": "https://schema.org",
 "@type": "WebPage",
 "name": "Affiliate Disclosure - SafeOrStolen",
 "description": "SafeOrStolen affiliate disclosure, partner relationships, and advertising policies.",
 "url": "https://safeorstolen.com/affiliate-disclosure",
 "lastReviewed": "2026-03-09",
 "about": {
 "@type": "Organization",
 "name": "SafeOrStolen",
 "url": "https://safeorstolen.com"
 }
 };

 return (
 <>
 <PageSEO
 title="Affiliate Disclosure & Advertising Policy | SafeOrStolen"
 description="Learn about SafeOrStolen's affiliate partnerships, advertising policies, restricted uses, and how we recommend third-party services on our verification results."
 keywords="affiliate disclosure, advertising policy, partner relationships, SafeOrStolen affiliates"
 canonical="https://safeorstolen.com/affiliate-disclosure"
 type="website"
 structuredData={webPageSchema}
 />
 <div className="min-h-screen bg-background pt-24 pb-16">
 <div className="container mx-auto px-4 max-w-4xl">
 <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
 Affiliate Disclosure & Advertising Policy
 </h1>
 <p className="text-muted-foreground mb-8">Last updated: March 9, 2026</p>

 {/* Overview */}
 <Card className="mb-6">
 <CardHeader>
 <CardTitle className="flex items-center gap-2">
 <Shield className="h-5 w-5 text-primary" />
 How We Make Money
 </CardTitle>
 </CardHeader>
 <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
 <p>
 SafeOrStolen ("we," "us," "our") is committed to transparency about how we generate revenue. 
 Our primary revenue comes from verification subscriptions ($0.99/check or $10/month unlimited). 
 Additionally, when an item is verified as clean, we may recommend complementary third-party services 
 through affiliate partnerships.
 </p>
 <p>
 <strong className="text-foreground">What this means for you:</strong> Some links on our results pages 
 are affiliate links. If you click on these links and make a purchase or sign up for a service, 
 SafeOrStolen may earn a commission at no extra cost to you. These recommendations do not affect 
 your verification results in any way — our verification process is completely independent of our 
 affiliate partnerships.
 </p>
 </CardContent>
 </Card>

 {/* Our Partners */}
 <Card className="mb-6">
 <CardHeader>
 <CardTitle>Our Affiliate Partners</CardTitle>
 </CardHeader>
 <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
 <p>We partner with trusted companies that complement our verification service:</p>
 <ul className="list-disc pl-6 space-y-2">
 <li>
 <strong className="text-foreground">Vehicle History Reports</strong> — When a vehicle VIN comes back 
 clean, we may recommend vehicle history report services to provide additional ownership, accident, 
 and service records.
 </li>
 <li>
 <strong className="text-foreground">Identity & Ownership Verification</strong> — For additional 
 peace of mind, we may recommend identity verification services to help confirm seller legitimacy.
 </li>
 <li>
 <strong className="text-foreground">Device Insurance</strong> — After verifying an item is not stolen, 
 we may recommend insurance services to protect your purchase.
 </li>
 <li>
 <strong className="text-foreground">Extended Warranties</strong> — For verified electronics and vehicles, 
 we may suggest warranty providers.
 </li>
 </ul>
 <p>
 We only recommend services that we believe provide genuine value to our users. Our editorial 
 recommendations are not influenced by affiliate compensation.
 </p>
 </CardContent>
 </Card>

 {/* Restricted Uses */}
 <Card className="mb-6 border-destructive/30">
 <CardHeader>
 <CardTitle className="flex items-center gap-2">
 <AlertTriangle className="h-5 w-5 text-destructive" />
 Restricted & Prohibited Uses
 </CardTitle>
 </CardHeader>
 <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
 <p>
 SafeOrStolen and our affiliate partners' services are <strong className="text-foreground">NOT</strong> intended 
 for and must not be used for the following purposes:
 </p>
 <ul className="list-disc pl-6 space-y-2">
 <li><strong className="text-foreground">Employment Screening</strong> — Do not use for hiring decisions or background checks on employees.</li>
 <li><strong className="text-foreground">Hiring of Household Workers</strong> — Do not use to screen household employees.</li>
 <li><strong className="text-foreground">Tenant Screening</strong> — Do not use for rental or housing application decisions.</li>
 <li><strong className="text-foreground">Educational Qualification</strong> — Do not use for educational admissions or qualification decisions.</li>
 <li><strong className="text-foreground">Credit or Insurance Underwriting</strong> — Do not use for credit, insurance, or financial eligibility decisions.</li>
 <li><strong className="text-foreground">Business Transactions Initiated by Individual Customers</strong> — Do not use for evaluating individual-initiated business transactions beyond item verification.</li>
 </ul>
 <p>
 Additionally, the following promotional methods are strictly prohibited in connection with our affiliate partnerships:
 </p>
 <ul className="list-disc pl-6 space-y-2">
 <li>Unsolicited email marketing or spam</li>
 <li>Search engine or social media campaigns using direct affiliate links</li>
 <li>Brand bidding on partner trademarks</li>
 <li>Content related to loans, cheating, or personal credit</li>
 </ul>
 </CardContent>
 </Card>

 {/* US Traffic */}
 <Card className="mb-6">
 <CardHeader>
 <CardTitle>Geographic Availability</CardTitle>
 </CardHeader>
 <CardContent className="text-sm text-muted-foreground leading-relaxed">
 <p>
 SafeOrStolen's verification services and affiliate partner recommendations are optimized for and 
 primarily serve users in the <strong className="text-foreground">United States</strong>. Our database 
 sources include our own SafeOrStolen reports, public web results, AI analysis, and specialized databases like BikeIndex for bicycles and HotGunz for firearms.
 Partner service availability may vary by location.
 </p>
 </CardContent>
 </Card>

 {/* Opt-Out */}
 <Card className="mb-6">
 <CardHeader>
 <CardTitle className="flex items-center gap-2">
 <Mail className="h-5 w-5 text-primary" />
 Opt-Out & Contact
 </CardTitle>
 </CardHeader>
 <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
 <p>
 You have the right to opt out of affiliate recommendations and marketing communications at any time. 
 We maintain an opt-out list in perpetuity and promptly respond to all opt-out requests.
 </p>
 <p><strong className="text-foreground">To opt out or submit a request:</strong></p>
 <ul className="list-disc pl-6 space-y-2">
 <li>Email us at <a href="mailto:support@safeorstolen.com" className="text-primary hover:underline">support@safeorstolen.com</a> with "OPT OUT" in the subject line</li>
 <li>Include your name and email address associated with your account</li>
 <li>We will process your request within 48 hours</li>
 </ul>
 <p>
 Opting out of affiliate recommendations does not affect your ability to use SafeOrStolen's 
 core verification services.
 </p>
 </CardContent>
 </Card>

 {/* FTC Compliance */}
 <Card className="mb-6">
 <CardHeader>
 <CardTitle>FTC Compliance Statement</CardTitle>
 </CardHeader>
 <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
 <p>
 In accordance with the Federal Trade Commission's (FTC) guidelines on endorsements and testimonials 
 (16 CFR Part 255), we disclose that SafeOrStolen has affiliate relationships with the companies 
 mentioned on this website. We may receive compensation when you click on links and/or purchase products 
 or services from our partners.
 </p>
 <p>
 Our verification results are never influenced by affiliate relationships. The stolen/clean status 
 of any item is determined solely by our database checks and is completely independent of any 
 commercial partnerships.
 </p>
 </CardContent>
 </Card>

 {/* Links */}
 <div className="flex flex-wrap gap-3 mt-8">
 <Button asChild variant="outline" size="sm">
 <Link to="/privacy">Privacy Policy</Link>
 </Button>
 <Button asChild variant="outline" size="sm">
 <Link to="/terms">Terms of Service</Link>
 </Button>
 <Button asChild variant="outline" size="sm">
 <Link to="/transparency">Transparency Center</Link>
 </Button>
 <Button asChild variant="outline" size="sm">
 <a href="mailto:support@safeorstolen.com">
 <Mail className="mr-2 h-4 w-4" />
 Contact Us
 </a>
 </Button>
 </div>
 </div>
 </div>
 </>
 );
};

export default AffiliateDisclosurePage;
