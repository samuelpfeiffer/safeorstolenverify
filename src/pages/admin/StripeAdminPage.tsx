import { Helmet } from 'react-helmet-async';
import { StripeStatusDashboard } from '@/components/admin/StripeStatusDashboard';
import { WarmLeadsOutreach } from '@/components/admin/WarmLeadsOutreach';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function StripeAdminPage() {
  return (
    <>
      <Helmet>
        <title>Stripe Payment Status | SafeOrStolen Admin</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-8 pt-24">
        <Tabs defaultValue="payments" className="space-y-6">
          <TabsList>
            <TabsTrigger value="payments">Payment Status</TabsTrigger>
            <TabsTrigger value="outreach">Warm Leads</TabsTrigger>
          </TabsList>
          
          <TabsContent value="payments">
            <StripeStatusDashboard />
          </TabsContent>
          
          <TabsContent value="outreach">
            <WarmLeadsOutreach />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
