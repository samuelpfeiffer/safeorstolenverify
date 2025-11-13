import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/lib/auth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader, Bell, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const NotificationSettings = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);

  useEffect(() => {
    if (user) {
      loadSettings();
    }
  }, [user]);

  async function loadSettings() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('profiles')
        .select('email_notifications_enabled')
        .eq('id', user!.id)
        .single();

      if (error) throw error;

      if (data) {
        setEmailNotifications(data.email_notifications_enabled ?? true);
      }
    } catch (error) {
      console.error('Error loading notification settings:', error);
      toast({
        title: 'Error',
        description: 'Failed to load notification settings',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }

  async function updateNotificationSetting(enabled: boolean) {
    try {
      setSaving(true);
      const { error } = await supabase
        .from('profiles')
        .update({ email_notifications_enabled: enabled })
        .eq('id', user!.id);

      if (error) throw error;

      setEmailNotifications(enabled);
      
      toast({
        title: 'Settings Updated',
        description: enabled 
          ? 'You will now receive stolen item alerts via email'
          : 'Email notifications have been disabled',
      });
    } catch (error) {
      console.error('Error updating notification settings:', error);
      toast({
        title: 'Error',
        description: 'Failed to update notification settings',
        variant: 'destructive',
      });
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center justify-center p-8">
            <Loader className="h-6 w-6 animate-spin text-primary" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5" />
          Email Notifications
        </CardTitle>
        <CardDescription>
          Manage how you receive alerts about items you've verified
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            We'll notify you if an item you previously verified gets reported as stolen by someone else.
          </AlertDescription>
        </Alert>

        <div className="flex items-center justify-between space-x-4 py-4 border-b">
          <div className="flex-1 space-y-1">
            <Label htmlFor="email-alerts" className="text-base font-medium">
              Stolen Item Alerts
            </Label>
            <p className="text-sm text-muted-foreground">
              Receive email notifications when items in your search history are reported stolen
            </p>
          </div>
          <div className="flex items-center gap-2">
            {saving && <Loader className="h-4 w-4 animate-spin text-muted-foreground" />}
            <Switch
              id="email-alerts"
              checked={emailNotifications}
              onCheckedChange={updateNotificationSetting}
              disabled={saving}
            />
          </div>
        </div>

        {emailNotifications && (
          <div className="bg-muted/50 p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>Email notifications enabled</span>
            </div>
            <p className="text-xs text-muted-foreground">
              You'll receive alerts at: <strong>{user?.email}</strong>
            </p>
          </div>
        )}

        <div className="text-xs text-muted-foreground space-y-2">
          <p><strong>How it works:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>When you verify an item, we save it in your search history</li>
            <li>If someone later reports that same item as stolen, we'll email you immediately</li>
            <li>This helps protect you from unknowingly buying stolen property</li>
            <li>You can view all notifications in your dashboard</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
