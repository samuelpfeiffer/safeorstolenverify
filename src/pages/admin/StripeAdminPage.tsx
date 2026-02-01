import { SEOHead } from '@/components/seo/SEOHead';
import { StripeStatusDashboard } from '@/components/admin/StripeStatusDashboard';
import { WarmLeadsOutreach } from '@/components/admin/WarmLeadsOutreach';
import { StripeReconcileButton } from '@/components/admin/StripeReconcileButton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function StripeAdminPage() {
  return (
    <>
      <SEOHead
        title="Stripe Payment Status | Admin"
        description="Admin dashboard for Stripe payment status and reconciliation."
        noIndex={true}
      />
      
      <div className="container mx-auto px-4 py-8 pt-24">
        <Tabs defaultValue="payments" className="space-y-6">
          <TabsList>
            <TabsTrigger value="payments">Payment Status</TabsTrigger>
            <TabsTrigger value="sync">Sync Payments</TabsTrigger>
            <TabsTrigger value="outreach">Warm Leads</TabsTrigger>
          </TabsList>
          
          <TabsContent value="payments">
            <StripeStatusDashboard />
          </TabsContent>
          
          <TabsContent value="sync">
            <StripeReconcileButton />
          </TabsContent>
          
          <TabsContent value="outreach">
            <WarmLeadsOutreach />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
