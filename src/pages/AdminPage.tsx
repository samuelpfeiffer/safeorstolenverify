
import { useUnifiedAuth } from "@/hooks/useUnifiedAuth";
import { SecurityDashboard } from "@/components/security/SecurityDashboard";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { AdminStatsCards } from "@/components/admin/AdminStatsCards";
import { AdminOverviewTab } from "@/components/admin/AdminOverviewTab";
import { AdminAnalyticsTab } from "@/components/admin/AdminAnalyticsTab";

const AdminPage = () => {
  const { user, loading } = useUnifiedAuth();
  const [activeTab, setActiveTab] = useState("overview");

  // Fetch admin analytics data
  const { data: stats } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const [users, verifications, subscribers] = await Promise.all([
        supabase.from('profiles').select('*', { count: 'exact', head: true }),
        supabase.from('verification_results').select('*', { count: 'exact', head: true }),
        supabase.from('subscribers').select('*', { count: 'exact', head: true })
      ]);

      return {
        totalUsers: users.count || 0,
        totalVerifications: verifications.count || 0,
        totalSubscribers: subscribers.count || 0
      };
    },
    enabled: !!user
  });

  const { data: recentActivity } = useQuery({
    queryKey: ['admin-recent-activity'],
    queryFn: async () => {
      const { data } = await supabase
        .from('verification_results')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);
      return data || [];
    },
    enabled: !!user
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sos">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sos-orange"></div>
      </div>
    );
  }

  // Check admin access (improved admin check)
  const isAdmin = user?.email === 'admin@safeorstolen.com' || 
                  user?.email?.endsWith('@safeorstolen.com') ||
                  user?.email === 'samandhisbigideas@gmail.com';

  if (!user || !isAdmin) {
    return (
      <div className="min-h-screen bg-sos text-white flex items-center justify-center">
        <Card className="bg-sos-dark border-sos-orange/20">
          <CardContent className="p-8 text-center">
            <AlertTriangle className="h-12 w-12 text-sos-orange mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Access Denied</h2>
            <p className="text-gray-300">You need administrator privileges to access this page.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-sos text-white pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <AdminPageHeader />
          <AdminStatsCards stats={stats} />

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="bg-sos-dark border border-sos-orange/20 mb-6">
              <TabsTrigger value="overview" className="data-[state=active]:bg-sos-orange">
                Overview
              </TabsTrigger>
              <TabsTrigger value="security" className="data-[state=active]:bg-sos-orange">
                Security
              </TabsTrigger>
              <TabsTrigger value="analytics" className="data-[state=active]:bg-sos-orange">
                Analytics
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <AdminOverviewTab recentActivity={recentActivity} />
            </TabsContent>

            <TabsContent value="security">
              <SecurityDashboard />
            </TabsContent>

            <TabsContent value="analytics">
              <AdminAnalyticsTab />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
