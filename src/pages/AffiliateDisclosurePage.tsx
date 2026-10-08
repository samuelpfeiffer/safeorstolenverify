import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PageSEO } from '@/components/seo/PageSEO';
import { Shield, AlertTriangle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/router-compat';

/**
 * Oct 7 2026: rewritten by hand for "safeorstolen affiliate disclosure". The old page said
 * SafeOrStolen has affiliate partners (vehicle history, identity, insurance, warranty) and may
 * earn commissions. The code says otherwise: the site loads no ad scripts, and every /go/
 * "partner" link (src/pages/AffiliateRedirectPage.tsx) points to SafeOrStolen's own pricing page,
 * except bike registration, which goes to a free bike registry that pays nothing. So no commission
 * is earned today. Also removed: "34 states" for gun records, a "48 hours" opt-out promise, a
 * "maintain an opt-out list in perpetuity" promise, rules for affiliates promoting partners (there
 * is no affiliate program), and the support@ address (the real inbox is safeorstolenmail@gmail.com).
 */

const CONTACT_EMAIL = 'safeorstolenmail@gmail.com';

const AffiliateDisclosurePage: React.FC = () => {
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Affiliate Disclosure - SafeOrStolen',
    description: 'Whether SafeOrStolen earns money from affiliate links or ads, and how it makes money.',
    url: 'https://safeorstolen.com/affiliate-disclosure',
    lastReviewed: '2026-10-07',
    about: { '@type': 'Organization', name: 'SafeOrStolen', url: 'https://safeorstolen.com' },
  };

  return (
    <>
      <PageSEO
        title="Affiliate Disclosure and Advertising | SafeOrStolen"
        description="SafeOrStolen's affiliate disclosure: the site shows no ads and earns no affiliate commissions. It makes money from paid checks, a monthly plan and certificates."
        keywords="safeorstolen affiliate disclosure, safeorstolen advertising policy, does safeorstolen earn commissions"
        canonical="/affiliate-disclosure"
        type="website"
        structuredData={webPageSchema}
        modifiedTime="2026-10-07"
      />
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Affiliate Disclosure and Advertising</h1>
          <p className="text-muted-foreground mb-6">Last updated: October 7, 2026</p>
          <p className="text-lg text-muted-foreground mb-8">
            SafeOrStolen does not show ads and does not earn affiliate commissions. No company pays SafeOrStolen
            when you click a link on this site or buy something after a check. The money comes from the people who
            use it: paid checks, the monthly plan and optional verification certificates.
          </p>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                How SafeOrStolen makes money
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <ul className="list-disc pl-6 space-y-2">
                <li>2 free checks with a free account, no credit card.</li>
                <li>$0.99 for a single check.</li>
                <li>$10 a month for unlimited checks (phone blacklist checks capped at 20 a month), cancel anytime, 30-day refund on the monthly plan.</li>
                <li>An optional $1.99 verification certificate, free for monthly members.</li>
              </ul>
              <p>
                Full details are on <Link to="/pricing" className="text-primary hover:underline">pricing</Link>.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>"Recommended next steps" links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Some result screens suggest next steps after a clean check, such as a vehicle history report,
                device insurance or registering a bike. Those links go through addresses that start with
                safeorstolen.com/go/. Today they lead to SafeOrStolen's own pricing page, or, for bike
                registration, to a free bike registry. SafeOrStolen is not paid for any of them, and some of those
                screens still carry an older line saying it "may earn a commission". That line is out of date.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Results are not for sale</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                A result ("reported stolen", "possible match", or "no report found in the records searched") comes
                only from the records searched: SafeOrStolen's own theft reports and public web results, plus
                police firearm theft records for guns, a national stolen-bicycle registry for bikes, and Arizona
                law-enforcement stolen-vehicle records for Arizona VINs and plates. No payment from anyone changes a
                result. The AI note on a result explains it in plain language and never decides it.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6 border-destructive/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                Uses that are not allowed
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>A SafeOrStolen check is about an item, not a person. Do not use it for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Employment screening or hiring decisions, including household workers</li>
                <li>Tenant screening or housing decisions</li>
                <li>Credit or insurance underwriting</li>
                <li>Educational admissions or qualification decisions</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>FTC endorsement guides</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              <p>
                The Federal Trade Commission's endorsement guides (16 CFR Part 255) require sites to disclose paid
                relationships behind the products they recommend. SafeOrStolen has no such relationships today. Pages
                on this site that compare SafeOrStolen with other services are written by SafeOrStolen about its own
                product, and you should read them that way.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Questions and marketing emails
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground leading-relaxed">
              <p>
                To ask about this page or to stop marketing emails, write to {CONTACT_EMAIL} with "opt out" in the
                subject line and the email address on your account. Opting out doesn't affect your checks.
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-wrap gap-3 mt-8">
            <Button asChild variant="outline" size="sm">
              <Link to="/privacy">Privacy Policy</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link to="/terms">Terms of Service</Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={`mailto:${CONTACT_EMAIL}`}>
                <Mail className="mr-2 h-4 w-4" />
                Contact us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AffiliateDisclosurePage;
