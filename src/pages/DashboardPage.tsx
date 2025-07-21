
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Search, 
  ArrowLeft, 
  History,
  CreditCard,
  Settings,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react';
import { useSearchLimits } from '@/hooks/useSearchLimits';
import { useSearchHistory } from '@/hooks/useSearchHistory';
import { useReceiptGenerator } from '@/hooks/useReceiptGenerator';
import { supabase } from '@/integrations/supabase/client';

const DashboardPage = () => {
  const { user, signOut } = useAuth();
  const { remainingSearches, hasReachedLimit, isSubscribed } = useSearchLimits();
  const { searchHistory, isLoading: historyLoading } = useSearchHistory();
  const { getReceipts } = useReceiptGenerator();
  const [recentVerifications, setRecentVerifications] = useState<any[]>([]);
  const [receipts, setReceipts] = useState<any[]>([]);
  const [stats, setStats] = useState({
    totalVerifications: 0,
    safeItems: 0,
    flaggedItems: 0,
    thisMonth: 0
  });

  useEffect(() => {
    if (user) {
      loadDashboardData();
    }
  }, [user]);

  const loadDashboardData = async () => {
    if (!user) return;

    try {
      // Load recent verifications
      const { data: verifications } = await supabase
        .from('verification_results')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(5);

      setRecentVerifications(verifications || []);

      // Load statistics
      const { data: allVerifications } = await supabase
        .from('verification_results')
        .select('verification_status, created_at')
        .eq('user_id', user.id);

      if (allVerifications) {
        const thisMonth = new Date();
        thisMonth.setDate(1);
        thisMonth.setHours(0, 0, 0, 0);

        const safe = allVerifications.filter(v => v.verification_status === 'safe').length;
        const flagged = allVerifications.filter(v => ['stolen', 'lost'].includes(v.verification_status)).length;
        const monthly = allVerifications.filter(v => new Date(v.created_at) >= thisMonth).length;

        setStats({
          totalVerifications: allVerifications.length,
          safeItems: safe,
          flaggedItems: flagged,
          thisMonth: monthly
        });
      }

      // Load receipts
      const userReceipts = await getReceipts();
      setReceipts(userReceipts);

    } catch (error) {
      console.error('Error loading dashboard data:', error);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'safe':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'stolen':
      case 'lost':
        return <AlertTriangle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-yellow-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'safe':
        return 'text-green-600 bg-green-50';
      case 'stolen':
      case 'lost':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-yellow-600 bg-yellow-50';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">Safe or Stolen</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button asChild variant="ghost">
              <Link to="/">Home</Link>
            </Button>
            <Button onClick={signOut} variant="outline">
              Sign Out
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Button asChild variant="ghost" size="sm" className="gap-2">
            <Link to="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, {user?.email}!
          </h1>
          <p className="text-muted-foreground">
            Manage your verifications and account settings.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Verifications</CardTitle>
              <Search className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalVerifications}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Safe Items</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.safeItems}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Flagged Items</CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">{stats.flaggedItems}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Month</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.thisMonth}</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="receipts">Receipts</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Account Status */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Account Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isSubscribed ? (
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800">Premium</Badge>
                      <span>Unlimited verifications</span>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Free Plan</Badge>
                        <span>{remainingSearches} searches remaining</span>
                      </div>
                      {hasReachedLimit && (
                        <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
                          <p className="text-sm text-orange-800">
                            You've reached your free search limit. Upgrade for unlimited access!
                          </p>
                          <Button asChild size="sm" className="mt-2">
                            <Link to="/subscription">Upgrade Now</Link>
                          </Button>
                        </div>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild className="w-full justify-start">
                    <Link to="/verify">
                      <Search className="h-4 w-4 mr-2" />
                      New Verification
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start">
                    <Link to="/subscription">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Manage Subscription
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Recent Verifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <History className="h-5 w-5" />
                  Recent Verifications
                </CardTitle>
                <CardDescription>
                  Your latest verification results
                </CardDescription>
              </CardHeader>
              <CardContent>
                {recentVerifications.length > 0 ? (
                  <div className="space-y-3">
                    {recentVerifications.map((verification) => (
                      <div key={verification.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-3">
                          {getStatusIcon(verification.verification_status)}
                          <div>
                            <p className="font-medium">{verification.serial_number}</p>
                            <p className="text-sm text-muted-foreground">
                              {verification.item_type} • {new Date(verification.created_at).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <Badge className={getStatusColor(verification.verification_status)}>
                          {verification.verification_status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No verifications yet</p>
                    <p className="text-sm">Start by verifying your first item!</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Verification History</CardTitle>
                <CardDescription>
                  Complete history of all your verifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                {historyLoading ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                    <p>Loading history...</p>
                  </div>
                ) : searchHistory.length > 0 ? (
                  <div className="space-y-3">
                    {searchHistory.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{item.serial_number}</p>
                          <p className="text-sm text-muted-foreground">
                            {item.item_type} • {new Date(item.created_at).toLocaleDateString()}
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <History className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No search history</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="receipts">
            <Card>
              <CardHeader>
                <CardTitle>Verification Receipts</CardTitle>
                <CardDescription>
                  Download receipts for your verifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                {receipts.length > 0 ? (
                  <div className="space-y-3">
                    {receipts.map((receipt) => (
                      <div key={receipt.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Receipt #{receipt.id.slice(0, 8)}</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(receipt.created_at).toLocaleDateString()}
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <CreditCard className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>No receipts available</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Account Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <p className="text-sm text-muted-foreground">{user?.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Account Type</label>
                    <p className="text-sm text-muted-foreground">
                      {isSubscribed ? 'Premium' : 'Free'}
                    </p>
                  </div>
                  <Button variant="outline" className="w-full">
                    Update Profile
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Subscription</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isSubscribed ? (
                    <>
                      <p className="text-sm text-muted-foreground">
                        You have unlimited access to all verification features.
                      </p>
                      <Button variant="outline" className="w-full">
                        Manage Subscription
                      </Button>
                    </>
                  ) : (
                    <>
                      <p className="text-sm text-muted-foreground">
                        Upgrade to get unlimited verifications and premium features.
                      </p>
                      <Button asChild className="w-full">
                        <Link to="/subscription">Upgrade Now</Link>
                      </Button>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardPage;
