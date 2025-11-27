import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function ForBusinesses() {
  return (
    <>
      <PageSEO
        title="SafeOrStolen for Businesses - Enterprise Verification Solutions"
        description="Enterprise stolen goods verification for retailers, repair shops, and businesses. API integration, bulk verification, multi-location support. Protect your business from stolen property."
        keywords="business verification service, enterprise stolen goods check, retail verification, repair shop verification"
      />
      <div className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
        <h1>SafeOrStolen for Businesses</h1>
        <p className="lead">Enterprise verification solutions for retailers, repair shops, electronics stores, and any business handling secondhand items.</p>
        <div className="flex gap-4 my-8 not-prose">
          <Button size="lg" asChild><Link to="/verify">Start Free Trial</Link></Button>
          <Button size="lg" variant="outline" asChild><Link to="/pricing">View Business Plans</Link></Button>
        </div>
        <h2>Industries We Serve</h2>
        <ul>
          <li><strong>Electronics Retailers:</strong> Verify phones, laptops, tablets before purchase/trade-in</li>
          <li><strong>Repair Shops:</strong> Check devices before accepting repairs to avoid stolen property</li>
          <li><strong>Equipment Rental:</strong> Verify tools, machinery, vehicles before rental</li>
          <li><strong>Buy-Sell-Trade Stores:</strong> Instant verification at point of purchase</li>
          <li><strong>Property Management:</strong> Verify appliances, equipment in rental properties</li>
        </ul>
        <h3>Business Features</h3>
        <ul>
          <li>Unlimited verifications</li>
          <li>Multi-location dashboard</li>
          <li>Employee accounts with permissions</li>
          <li>API integration</li>
          <li>Compliance reporting</li>
          <li>White-label verification reports</li>
        </ul>
        <h3>Contact Sales</h3>
        <p>Email business@safeorstolen.com or call (555) 123-4567 for custom enterprise solutions.</p>
      </div>
    </>
  );
}
