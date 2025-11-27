import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function ForAuctionHouses() {
  return (
    <>
      <PageSEO
        title="SafeOrStolen for Auction Houses - Consignment Verification"
        description="Verify every consignment item before auction. Protect bidders, reduce legal risk, maintain auction house reputation. Bulk VIN and serial number verification."
        keywords="auction house verification, consignment verification, auction fraud prevention, bulk VIN check"
      />
      <div className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
        <h1>SafeOrStolen for Auction Houses</h1>
        <p className="lead">Verify every consignment item before auction. Protect bidders, reduce legal liability, maintain your reputation.</p>
        <div className="flex gap-4 my-8 not-prose">
          <Button size="lg" asChild><Link to="/verify">Try Bulk Verification</Link></Button>
          <Button size="lg" variant="outline" asChild><Link to="/pricing">View Enterprise Pricing</Link></Button>
        </div>
        <h2>Verification for Auction Professionals</h2>
        <p>Accepting stolen consignments exposes auction houses to asset seizure, legal action, and reputation damage. SafeOrStolen provides bulk verification for vehicles, equipment, firearms, jewelry, and electronics—protecting your business and bidders.</p>
        <h3>Bulk Verification Features</h3>
        <ul>
          <li>Upload CSV with 1,000+ VINs/serial numbers</li>
          <li>Results in minutes, not days</li>
          <li>Flagged items with detailed reports</li>
          <li>White-label auction catalog integration</li>
          <li>Pre-auction compliance documentation</li>
        </ul>
        <h3>Contact Us</h3>
        <p>Call (555) 123-4567 or email auctions@safeorstolen.com for enterprise solutions.</p>
      </div>
    </>
  );
}
