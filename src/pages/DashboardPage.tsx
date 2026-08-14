import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSafeSearchParams } from '@/hooks/useSafeSearchParams';
import { useAuth } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Search, 
  History,
  CreditCard,
  Settings,
  CheckCircle,
  AlertTriangle,
  Clock,
  Share
} from 'lucide-react';
import { useSearchLimits } from '@/hooks/useSearchLimits';
import { useSearchHistory } from '@/hooks/useSearchHistory';
// import { useReceiptGenerator } from '@/hooks/useReceiptGenerator'; // Removed - receipts table dropped
import { supabase } from '@/integrations/supabase/client';
import { DashboardSidebar } from '@/components/dashboard/DashboardSidebar';
import { VerificationSection } from '@/components/dashboard/VerificationSection';
import { usePendingVerification } from '@/hooks/usePendingVerification';
import { useFreemiumFlow } from '@/hooks/useFreemiumFlow';
import { PaywallModal as ConversionPaywallModal } from '@/components/conversion/PaywallModal';
import { useToast } from '@/hooks/use-toast';
import { NotificationSettings } from '@/components/settings/NotificationSettings';
import { QuickStatsCard } from '@/components/dashboard/QuickStatsCard';
import { RecentActivityCard } from '@/components/dashboard/RecentActivityCard';
import { SubscriptionStatusCard } from '@/components/dashboard/SubscriptionStatusCard';
import { PageSEO } from '@/components/seo/PageSEO';
import { ReferralProgram, ViralShareWidget } from '@/components/growth';
import { WatchlistSection } from '@/components/dashboard/WatchlistSection';

const DashboardPage = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSafeSearchParams();
  const { remainingSearches, hasReachedLimit, isSubscribed, refreshLimits } = useSearchLimits();
  const { searchHistory, isLoading: historyLoading } = useSearchHistory();
  // Receipt generation removed - table dropped
  const { pendingVerification, clearPendingVerification } = usePendingVerification();
  const { showPaywall, hidePaywall, searchCount, isLoading: freemiumLoading } = useFreemiumFlow();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');
  const [recentVerifications, setRecentVerifications] = useState<any[]>([]);
  const [receipts, setReceipts] = useState<any[]>([]);
  const [purchases, setPurchases] = useState<any[]>([]);
  const [userProfile, setUserProfile] = useState<any>(null);
  const [prePopulatedData, setPrePopulatedData] = useState<{
    serial: string;
    type: string;
    intent: string;
  } | null>(null);

  // Dashboard structured data
  const dashboardSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "SafeOrStolen User Dashboard",
    "applicationCategory": "SecurityApplication",
    "description": "Manage your verification history, subscriptions, and account settings",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "provider": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "url": "https://safeorstolen.com"
    }
  };

  useEffect(() => {
    if (user) {
      loadDashboardData();
      loadUserProfile();
      checkForPrePopulatedData();
      handleSubscriptionSuccess();
    }
  }, [user]);
  
  // Handle subscription success from Stripe checkout
  const handleSubscriptionSuccess = () => {
    const sessionId = searchParams.get('session_id');
    if (sessionId) {
      console.log('[Dashboard] Subscription success detected, session:', sessionId);
      
      // Show success toast
      const toastModule = import('@/hooks/use-toast');
      toastModule.then(({ useToast }) => {
        const { toast } = useToast();
        toast({
          title: "Subscription Activated!",
          description: "Welcome to your new plan. Your subscription is now active.",
          duration: 5000,
        });
      });
      
      // Clear the session_id from URL
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.delete('session_id');
      window.history.replaceState({}, '', newUrl.toString());
      
      // Refresh subscription status without full page reload
      setTimeout(async () => {
        await refreshLimits();
        toast({
          title: "Subscription activated!",
          description: "Your account has been upgraded successfully.",
        });
      }, 1000);
    }
  };

  // Check for pre-populated verification data from URL or pending verification
  const checkForPrePopulatedData = () => {
    // Check URL params first (from authenticated redirect)
    const serialFromUrl = searchParams.get('serial');
    const typeFromUrl = searchParams.get('type');
    const intentFromUrl = searchParams.get('intent');

    if (serialFromUrl && typeFromUrl) {
      setPrePopulatedData({
        serial: serialFromUrl,
        type: typeFromUrl,
        intent: intentFromUrl || 'buyer'
      });
      // Clean up URL
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.delete('serial');
      newUrl.searchParams.delete('type');
      newUrl.searchParams.delete('intent');
      window.history.replaceState({}, '', newUrl.toString());
      return;
    }

    // Check pending verification (from anonymous user flow)
    if (pendingVerification) {
      setPrePopulatedData({
        serial: pendingVerification.serial_number,
        type: pendingVerification.item_type || 'Unknown',
        intent: pendingVerification.user_intent || 'buyer'
      });
      clearPendingVerification();
    }
  };

  const loadUserProfile = async () => {
    if (!user) return;

    try {
      const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      setUserProfile(profile);
    } catch (error) {
      console.error('Error loading user profile:', error);
    }
  };

  const loadDashboardData = async () => {
    if (!user) return;

    try {
      // Load recent verifications
      const { data: verifications } = await supabase
        .from('verification_results')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(10);

      setRecentVerifications(verifications || []);

      // Receipts table removed during cleanup
      setReceipts([]);

      // Load purchases
      const { data: purchaseData } = await supabase
        .from('purchases')
        .select(`
          *,
          verification_searches (
            serial_number,
            item_type
          )
        `)
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      setPurchases(purchaseData || []);

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
        return 'text-green-600 bg-green-50 border-green-200';
      case 'stolen':
      case 'lost':
        return 'text-red-600 bg-red-50 border-red-200';
      default:
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    }
  };

  const getUserDisplayName = () => {
    if (userProfile?.full_name) {
      return userProfile.full_name;
    }
    return user?.email?.split('@')[0] || 'User';
  };

  const handleEmailShare = (type: string, data: any[]) => {
    let content = '';
    const userName = getUserDisplayName();
    
    switch (type) {
      case 'Search History':
        content = data.map(item => 
          `Serial: ${item.serial_number}, Type: ${item.item_type}, Date: ${new Date(item.created_at).toLocaleDateString()}`
        ).join('\n');
        break;
      case 'Purchase History':
        content = data.map(item => 
          `Amount: $${(item.amount / 100).toFixed(2)}, Serial: ${item.verification_searches?.serial_number || 'N/A'}, Date: ${new Date(item.created_at).toLocaleDateString()}`
        ).join('\n');
        break;
      case 'Receipts':
        content = data.map(item => 
          `Receipt ID: ${item.id.slice(0, 8)}, Date: ${new Date(item.created_at).toLocaleDateString()}`
        ).join('\n');
        break;
    }

    const subject = `${userName}'s ${type} - SafeOrStolen`;
    const body = `${type} from SafeOrStolen verification service:\n\n${content}\n\nGenerated on: ${new Date().toLocaleDateString()}`;
    
    window.open(`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <QuickStatsCard />
              <SubscriptionStatusCard />
            </div>
            <RecentActivityCard />
            
            {/* Growth Tools */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ReferralProgram />
              <ViralShareWidget />
            </div>
          </div>
        );

      case 'search-history':
        return (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <History className="h-5 w-5" />
                  Search History
                </CardTitle>
                <CardDescription>
                  Your verification search history
                </CardDescription>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleEmailShare('Search History', searchHistory)}
                className="gap-2"
              >
                <Share className="h-4 w-4" />
                Email Export
              </Button>
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
        );

      case 'purchase-history':
        return (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Purchase History
                </CardTitle>
                <CardDescription>
                  Your verification purchases
                </CardDescription>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleEmailShare('Purchase History', purchases)}
                className="gap-2"
              >
                <Share className="h-4 w-4" />
                Email Export
              </Button>
            </CardHeader>
            <CardContent>
              {purchases.length > 0 ? (
                <div className="space-y-3">
                  {purchases.map((purchase) => (
                    <div key={purchase.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">${(purchase.amount / 100).toFixed(2)} {purchase.currency?.toUpperCase()}</p>
                        <p className="text-sm text-muted-foreground">
                          {purchase.verification_searches?.serial_number || 'Verification'} • 
                          {new Date(purchase.created_at).toLocaleDateString()}
                        </p>
                      </div>
                      <Badge className={getStatusColor(purchase.status)}>
                        {purchase.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <CreditCard className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No purchase history</p>
                </div>
              )}
            </CardContent>
          </Card>
        );

      case 'receipts':
        return (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Verification Receipts
                </CardTitle>
                <CardDescription>
                  Download and share your verification receipts
                </CardDescription>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleEmailShare('Receipts', receipts)}
                className="gap-2"
              >
                <Share className="h-4 w-4" />
                Email Export
              </Button>
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
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Download
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share className="h-4 w-4" />
                        </Button>
                      </div>
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
        );

      case 'activity':
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Activity Timeline
              </CardTitle>
              <CardDescription>
                Your recent verification activity and account events
              </CardDescription>
            </CardHeader>
            <CardContent>
              {recentVerifications.length > 0 ? (
                <div className="space-y-4">
                  {recentVerifications.map((verification, index) => (
                    <div key={verification.id} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-3 h-3 rounded-full ${
                          verification.verification_status === 'safe' 
                            ? 'bg-green-500' 
                            : verification.verification_status === 'stolen' || verification.verification_status === 'lost'
                            ? 'bg-red-500'
                            : 'bg-yellow-500'
                        }`} />
                        {index < recentVerifications.length - 1 && (
                          <div className="w-0.5 h-full bg-border mt-1" />
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{verification.item_type} Verification</p>
                          <span className="text-xs text-muted-foreground">
                            {new Date(verification.created_at).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Serial: {verification.serial_number}
                        </p>
                        <Badge 
                          variant={verification.verification_status === 'safe' ? 'default' : 'destructive'}
                          className="mt-1"
                        >
                          {verification.verification_status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Clock className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No activity yet</p>
                  <p className="text-sm mt-2">Your verification history will appear here</p>
                </div>
              )}
            </CardContent>
          </Card>
        );

      case 'settings':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Account Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Full Name</label>
                      <p className="text-sm text-muted-foreground">{userProfile?.full_name || 'Not set'}</p>
                    </div>
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
                  </div>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full">
                      Update Profile
                    </Button>
                    <Button asChild className="w-full">
                      <Link to="/pricing">
                        {isSubscribed ? 'Manage Subscription' : 'Upgrade Account'}
                      </Link>
                    </Button>
                    <Button variant="outline" onClick={signOut} className="w-full">
                      Sign Out
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <NotificationSettings />
          </div>
        );

      case 'watchlist':
        return <WatchlistSection />;

      default:
        return <VerificationSection />;
    }
  };

  return (
    <>
      <PageSEO
        title="Dashboard | SafeOrStolen"
        description="Manage your SafeOrStolen account, verification history, and subscriptions."
        noIndex={true}
        structuredData={dashboardSchema}
      />
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted pt-20">

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2 text-foreground">
            Welcome, {getUserDisplayName()}!
          </h1>
          
          {/* Search Usage Display */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="text-sm text-muted-foreground">
              Search Usage: <span className="font-medium">{searchCount}/2 free searches used (14-day trial)</span>
            </div>
            {!isSubscribed && (
              <Link to="/pricing" className="text-sos-orange hover:underline text-sm font-medium">
                Upgrade for unlimited
              </Link>
            )}
          </div>

          {/* Quick Access Tools */}
          <div className="flex justify-center gap-4 mb-6 flex-wrap">
            <Button 
              asChild
              variant="outline" 
              size="sm">
              <Link to="/activity">
                <Clock className="h-4 w-4 mr-2" />
                Activity Timeline
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate('/firearms-check')}
              className="bg-red-500/10 border-red-500/20 text-red-600 hover:bg-red-500/20"
            >
              🔫 Firearms Check
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => navigate('/check-phone')}
              className="bg-blue-500/10 border-blue-500/20 text-blue-600 hover:bg-blue-500/20"
            >
              📱 IMEI Phone Check
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => navigate('/check-car')}
              className="bg-green-500/10 border-green-500/20 text-green-600 hover:bg-green-500/20"
            >
              🚗 VIN Car Check
            </Button>
          </div>

          {activeTab === 'verification' && (
            <div className="mt-4">
              <VerificationSection prePopulatedData={prePopulatedData} />
            </div>
          )}
        </div>

        {/* Main Content */}
        {activeTab !== 'verification' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <DashboardSidebar 
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              {renderTabContent()}
            </div>
          </div>
        )}

        {/* Quick Access Buttons - Show when not on verification tab */}
        {activeTab === 'verification' && (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button 
              variant="outline" 
              className="flex items-center gap-2 h-auto py-4 border border-border"
              onClick={() => setActiveTab('search-history')}
            >
              <History className="h-5 w-5" />
              <span>Search History</span>
            </Button>
            <Button 
              variant="outline" 
              className="flex items-center gap-2 h-auto py-4 border border-border"
              onClick={() => setActiveTab('purchase-history')}
            >
              <CreditCard className="h-5 w-5" />
              <span>Purchase History</span>
            </Button>
            <Button 
              variant="outline" 
              className="flex items-center gap-2 h-auto py-4 border border-border"
              onClick={() => setActiveTab('receipts')}
            >
              <CreditCard className="h-5 w-5" />
              <span>Receipts</span>
            </Button>
            <Button 
              variant="outline" 
              className="flex items-center gap-2 h-auto py-4 border border-border"
              onClick={() => setActiveTab('settings')}
            >
              <Settings className="h-5 w-5" />
              <span>Account Settings</span>
            </Button>
          </div>
        )}

        {/* Paywall Modal */}
        <ConversionPaywallModal 
          isOpen={showPaywall} 
          onClose={hidePaywall} 
          freeSearchesUsed={searchCount}
          maxFreeSearches={2}
        />
      </div>
    </div>
    </>
  );
};

export default DashboardPage;