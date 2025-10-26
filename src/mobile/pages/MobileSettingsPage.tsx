import React from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { usePushNotifications } from '../hooks/usePushNotifications';
import { capacitorBridge } from '../utils/capacitorBridge';
import { Bell, Camera, Smartphone, Info, Share2, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const MobileSettingsPage: React.FC = () => {
  const { isEnabled, initializePushNotifications, disablePushNotifications } = usePushNotifications();
  const { toast } = useToast();
  const [appInfo, setAppInfo] = React.useState<any>(null);

  React.useEffect(() => {
    loadAppInfo();
  }, []);

  const loadAppInfo = async () => {
    const info = await capacitorBridge.getAppInfo();
    setAppInfo(info);
  };

  const handleNotificationToggle = async (enabled: boolean) => {
    if (enabled) {
      await initializePushNotifications();
      toast({
        title: 'Notifications Enabled',
        description: "You'll receive alerts about your verifications",
      });
    } else {
      await disablePushNotifications();
      toast({
        title: 'Notifications Disabled',
        description: 'Push notifications have been turned off',
      });
    }
  };

  const handleShareApp = async () => {
    try {
      await capacitorBridge.share(
        'SafeOrStolen',
        'Check out SafeOrStolen - verify if items are stolen before you buy!',
        window.location.origin
      );
    } catch (error) {
      toast({
        title: 'Share Failed',
        description: 'Unable to share the app',
        variant: 'destructive'
      });
    }
  };

  const handleClearCache = () => {
    localStorage.removeItem('offline-queue');
    toast({
      title: 'Cache Cleared',
      description: 'App cache has been cleared',
    });
  };

  return (
    <>
      <PageSEO
        title="Mobile Settings"
        description="Configure your mobile app settings"
        canonical="/mobile-settings"
      />

      <div className="min-h-screen bg-gradient-to-b from-background to-muted pb-20">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold mb-6">Settings</h1>

          {/* App Info */}
          {capacitorBridge.isNative() && appInfo && (
            <Card className="mb-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  App Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Version</span>
                  <Badge variant="outline">{appInfo.version}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Build</span>
                  <Badge variant="outline">{appInfo.build}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Platform</span>
                  <Badge variant="outline">
                    {capacitorBridge.getPlatform()}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Notifications */}
          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Push Notifications</p>
                  <p className="text-sm text-muted-foreground">
                    Get alerts about verification results
                  </p>
                </div>
                <Switch
                  checked={isEnabled}
                  onCheckedChange={handleNotificationToggle}
                />
              </div>
            </CardContent>
          </Card>

          {/* Camera */}
          <Card className="mb-4">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Camera className="h-5 w-5" />
                Camera
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Auto-Scan</p>
                    <p className="text-sm text-muted-foreground">
                      Automatically detect codes
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Save Scans</p>
                    <p className="text-sm text-muted-foreground">
                      Keep photos of scanned items
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data & Storage */}
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Data & Storage</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant="outline"
                onClick={handleClearCache}
                className="w-full justify-start"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Clear Cache
              </Button>
            </CardContent>
          </Card>

          {/* Share & Support */}
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>Share & Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant="outline"
                onClick={handleShareApp}
                className="w-full justify-start"
              >
                <Share2 className="mr-2 h-4 w-4" />
                Share App
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open('/about', '_blank')}
                className="w-full justify-start"
              >
                <Info className="mr-2 h-4 w-4" />
                About SafeOrStolen
              </Button>
            </CardContent>
          </Card>

          {/* Legal */}
          <div className="text-center text-xs text-muted-foreground space-y-2">
            <div className="flex justify-center gap-4">
              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="hover:underline">
                Terms of Service
              </a>
            </div>
            <p>© 2025 SafeOrStolen. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSettingsPage;
