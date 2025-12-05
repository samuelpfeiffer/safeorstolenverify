import { Helmet } from 'react-helmet-async';
import { StripeStatusDashboard } from '@/components/admin/StripeStatusDashboard';

export default function StripeAdminPage() {
  return (
    <>
      <Helmet>
        <title>Stripe Payment Status | SafeOrStolen Admin</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 pt-24">
        <StripeStatusDashboard />
      </div>
    </>
  );
}
