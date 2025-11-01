import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Zap, ExternalLink, TestTube, Check, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { sendToZapier } from '@/utils/marketingAutomation';
import { supabase } from '@/integrations/supabase/client';

interface ZapierWebhook {
  id: string;
  name: string;
  url: string;
  event: string;
  isActive: boolean;
  description: string;
}

export const ZapierAutomation = () => {
  const [webhooks, setWebhooks] = useState<ZapierWebhook[]>([]);
  const [newWebhook, setNewWebhook] = useState({
    name: '',
    url: '',
    event: 'verification',
    description: ''
  });
  const [testingWebhook, setTestingWebhook] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadWebhooks();
  }, []);

  const loadWebhooks = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('user_webhooks')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      const formattedWebhooks = data?.map(w => ({
        id: w.id,
        name: w.name,
        url: w.url,
        event: w.event,
        isActive: w.is_active,
        description: w.description || ''
      })) || [];

      setWebhooks(formattedWebhooks);
    } catch (error) {
      console.error('Error loading webhooks:', error);
      toast({
        title: "Error",
        description: "Failed to load webhooks",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const addWebhook = async () => {
    if (!newWebhook.name || !newWebhook.url) {
      toast({
        title: "Error",
        description: "Please fill in webhook name and URL",
        variant: "destructive",
      });
      return;
    }

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        toast({
          title: "Error",
          description: "You must be logged in to add webhooks",
          variant: "destructive",
        });
        return;
      }

      const { data, error } = await supabase
        .from('user_webhooks')
        .insert({
          user_id: user.id,
          name: newWebhook.name,
          url: newWebhook.url,
          event: newWebhook.event,
          is_active: true,
          description: newWebhook.description
        })
        .select()
        .single();

      if (error) throw error;

      const newWebhookFormatted: ZapierWebhook = {
        id: data.id,
        name: data.name,
        url: data.url,
        event: data.event,
        isActive: data.is_active,
        description: data.description || ''
      };

      setWebhooks([newWebhookFormatted, ...webhooks]);
      setNewWebhook({ name: '', url: '', event: 'verification', description: '' });
      
      toast({
        title: "Success",
        description: "Webhook added successfully",
      });
    } catch (error) {
      console.error('Error adding webhook:', error);
      toast({
        title: "Error",
        description: "Failed to add webhook",
        variant: "destructive",
      });
    }
  };

  const removeWebhook = async (id: string) => {
    try {
      const { error } = await supabase
        .from('user_webhooks')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setWebhooks(webhooks.filter(w => w.id !== id));
      
      toast({
        title: "Success",
        description: "Webhook removed successfully",
      });
    } catch (error) {
      console.error('Error removing webhook:', error);
      toast({
        title: "Error",
        description: "Failed to remove webhook",
        variant: "destructive",
      });
    }
  };

  const toggleWebhook = async (id: string) => {
    try {
      const webhook = webhooks.find(w => w.id === id);
      if (!webhook) return;

      const { error } = await supabase
        .from('user_webhooks')
        .update({ is_active: !webhook.isActive })
        .eq('id', id);

      if (error) throw error;

      setWebhooks(webhooks.map(w => 
        w.id === id ? { ...w, isActive: !w.isActive } : w
      ));
    } catch (error) {
      console.error('Error toggling webhook:', error);
      toast({
        title: "Error",
        description: "Failed to toggle webhook",
        variant: "destructive",
      });
    }
  };

  const testWebhook = async (webhook: ZapierWebhook) => {
    setTestingWebhook(webhook.id);
    
    try {
      const testPayload = {
        test: true,
        timestamp: new Date().toISOString(),
        event: webhook.event,
        source: 'SafeOrStolen.com - Test',
        webhook_name: webhook.name,
        sample_data: {
          identifier: '356938035643809',
          type: 'imei',
          status: 'safe',
          user_email: 'test@example.com'
        }
      };

      const response = await fetch(webhook.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
        body: JSON.stringify(testPayload)
      });

      toast({
        title: "Test Sent",
        description: `Test payload sent to ${webhook.name}. Check your Zap history to confirm receipt.`,
      });
    } catch (error) {
      console.error('Webhook test error:', error);
      toast({
        title: "Test Failed",
        description: "Failed to send test payload. Please check the webhook URL.",
        variant: "destructive",
      });
    } finally {
      setTestingWebhook(null);
    }
  };

  const eventOptions = [
    { value: 'verification', label: 'Item Verification', description: 'Triggered when a user checks an item' },
    { value: 'signup', label: 'User Signup', description: 'Triggered when a user creates an account' },
    { value: 'purchase', label: 'Purchase/Subscription', description: 'Triggered when a user makes a purchase' },
    { value: 'api_usage', label: 'API Usage', description: 'Triggered when API is used' },
    { value: 'engagement', label: 'User Engagement', description: 'Triggered for various user interactions' }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-orange-500" />
            <div>
              <CardTitle>Zapier Automation</CardTitle>
              <CardDescription>
                Connect SafeOrStolen.com events to thousands of apps via Zapier webhooks
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Add New Webhook */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Add New Webhook</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="webhookName">Webhook Name</Label>
                <Input
                  id="webhookName"
                  placeholder="e.g., Lead Capture, Email Notifications"
                  value={newWebhook.name}
                  onChange={(e) => setNewWebhook(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>
              
              <div>
                <Label htmlFor="webhookEvent">Trigger Event</Label>
                <select
                  id="webhookEvent"
                  value={newWebhook.event}
                  onChange={(e) => setNewWebhook(prev => ({ ...prev, event: e.target.value }))}
                  className="w-full px-3 py-2 border border-input bg-background text-foreground rounded-md"
                >
                  {eventOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <Label htmlFor="webhookUrl">Zapier Webhook URL</Label>
              <Input
                id="webhookUrl"
                placeholder="https://hooks.zapier.com/hooks/catch/your-webhook-id"
                value={newWebhook.url}
                onChange={(e) => setNewWebhook(prev => ({ ...prev, url: e.target.value }))}
              />
            </div>

            <div>
              <Label htmlFor="webhookDescription">Description (Optional)</Label>
              <Textarea
                id="webhookDescription"
                placeholder="Describe what this webhook does..."
                value={newWebhook.description}
                onChange={(e) => setNewWebhook(prev => ({ ...prev, description: e.target.value }))}
              />
            </div>

            <Button onClick={addWebhook}>
              Add Webhook
            </Button>
          </div>

          {/* Existing Webhooks */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Configured Webhooks</h3>
            
            {loading ? (
              <p className="text-muted-foreground">Loading webhooks...</p>
            ) : webhooks.length === 0 ? (
              <p className="text-muted-foreground">No webhooks configured yet.</p>
            ) : (
              <div className="space-y-3">
                {webhooks.map((webhook) => (
                  <Card key={webhook.id} className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">{webhook.name}</h4>
                          <Badge variant={webhook.isActive ? "default" : "secondary"}>
                            {webhook.isActive ? "Active" : "Inactive"}
                          </Badge>
                          <Badge variant="outline">
                            {eventOptions.find(e => e.value === webhook.event)?.label}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {webhook.description || 'No description'}
                        </p>
                        <code className="text-xs text-muted-foreground block truncate">
                          {webhook.url}
                        </code>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <Switch
                          checked={webhook.isActive}
                          onCheckedChange={() => toggleWebhook(webhook.id)}
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => testWebhook(webhook)}
                          disabled={testingWebhook === webhook.id}
                        >
                          {testingWebhook === webhook.id ? (
                            <TestTube className="w-4 h-4 animate-pulse" />
                          ) : (
                            <TestTube className="w-4 h-4" />
                          )}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeWebhook(webhook.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Setup Guide */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Setup Guide</h3>
            <div className="bg-muted p-4 rounded-lg space-y-2">
              <p className="font-medium">How to create a Zapier webhook:</p>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>Go to <a href="https://zapier.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Zapier.com</a></li>
                <li>Create a new Zap with "Webhooks by Zapier" as the trigger</li>
                <li>Choose "Catch Hook" and copy the webhook URL</li>
                <li>Paste the URL above and configure your automation</li>
                <li>Test the webhook using the test button</li>
                <li>Complete your Zap by adding actions (email, CRM, etc.)</li>
              </ol>
              
              <div className="mt-4">
                <p className="font-medium">Sample payload structure:</p>
                <code className="block bg-background p-2 rounded text-sm mt-1">
                  {JSON.stringify({
                    event: "verification",
                    identifier: "356938035643809",
                    type: "imei",
                    status: "safe",
                    timestamp: "2024-01-20T14:45:00Z",
                    user_email: "user@example.com",
                    source: "SafeOrStolen.com"
                  }, null, 2)}
                </code>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
