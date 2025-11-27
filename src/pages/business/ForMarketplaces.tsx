import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function ForMarketplaces() {
  return (
    <>
      <PageSEO
        title="SafeOrStolen for Marketplaces - Buyer & Seller Protection"
        description="Integrate SafeOrStolen verification into your marketplace platform. Protect buyers and sellers from stolen goods, reduce fraud, build trust. API integration available."
        keywords="marketplace verification, stolen goods prevention, marketplace fraud protection, buyer protection API"
      />
      <div className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
        <h1>SafeOrStolen for Online Marketplaces</h1>
        <p className="lead">Integrate instant stolen goods verification into your platform. Protect buyers, sellers, and your marketplace reputation.</p>
        <div className="flex gap-4 my-8 not-prose">
          <Button size="lg" asChild><Link to="/verify">Try Free Verification</Link></Button>
          <Button size="lg" variant="outline" asChild><Link to="/pricing">View API Pricing</Link></Button>
        </div>
        <h2>Why Marketplaces Need Verification</h2>
        <p>Stolen goods listings damage marketplace trust, expose you to legal liability, and drive away legitimate users. SafeOrStolen's API provides instant verification for phones, vehicles, electronics, and more—reducing fraud by 85%.</p>
        <h3>Integration Features</h3>
        <ul>
          <li>REST API for seamless platform integration</li>
          <li>Real-time verification in 3 seconds</li>
          <li>100+ databases including FBI NCIC, carrier blacklists, DMV records</li>
          <li>Badge system for verified listings</li>
          <li>Automated flagging of suspicious listings</li>
        </ul>
        <h3>Contact Us</h3>
        <p>Email partnerships@safeorstolen.com for API documentation and enterprise pricing.</p>
      </div>
    </>
  );
}
