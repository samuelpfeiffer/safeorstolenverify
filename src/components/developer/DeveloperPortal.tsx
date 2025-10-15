import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, Key, Activity, BookOpen, Copy, Eye, EyeOff, Plus, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';

interface APIKey {
  id: string;
  key_name: string;
  api_key: string;
  usage_count: number;
  usage_limit: number | null;
  is_active: boolean;
  created_at: string;
}

export const DeveloperPortal: React.FC = () => {
  const [apiKeys, setApiKeys] = useState<APIKey[]>([]);
  const [showKeys, setShowKeys] = useState<{ [key: string]: boolean }>({});
  const [newKeyName, setNewKeyName] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useUnifiedAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      loadApiKeys();
    }
  }, [user]);

  const loadApiKeys = async () => {
    if (!user) return;
    
    const { data, error } = await supabase
      .from('external_api_keys')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error loading API keys:', error);
    } else {
      setApiKeys(data || []);
    }
  };

  const generateApiKey = async () => {
    if (!user || !newKeyName.trim()) {
      toast({
        title: "Error",
        description: "Please enter a key name",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    
    try {
      const { data, error } = await supabase
        .from('external_api_keys')
        .insert({
          user_id: user.id,
          key_name: newKeyName.trim(),
          api_key: `sos_${crypto.randomUUID().replace(/-/g, '')}`,
          usage_limit: 1000 // Default limit for Business tier
        })
        .select()
        .single();

      if (error) throw error;

      setApiKeys([data, ...apiKeys]);
      setNewKeyName('');
      toast({
        title: "API Key Generated",
        description: "Your new API key has been created. Store it securely!",
      });
    } catch (error) {
      console.error('Error generating API key:', error);
      toast({
        title: "Error",
        description: "Failed to generate API key",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const revokeApiKey = async (keyId: string) => {
    if (!confirm('Are you sure you want to revoke this API key? This action cannot be undone.')) {
      return;
    }

    const { error } = await supabase
      .from('external_api_keys')
      .update({ is_active: false })
      .eq('id', keyId);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to revoke API key",
        variant: "destructive"
      });
    } else {
      loadApiKeys();
      toast({
        title: "Key Revoked",
        description: "API key has been deactivated",
      });
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "API key copied to clipboard",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Developer Portal</h1>
        <p className="text-muted-foreground">
          Integrate SafeOrStolen verification into your platform
        </p>
      </div>

      <Tabs defaultValue="keys" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="keys">
            <Key className="h-4 w-4 mr-2" />
            API Keys
          </TabsTrigger>
          <TabsTrigger value="docs">
            <BookOpen className="h-4 w-4 mr-2" />
            Documentation
          </TabsTrigger>
          <TabsTrigger value="usage">
            <Activity className="h-4 w-4 mr-2" />
            Usage Analytics
          </TabsTrigger>
        </TabsList>

        {/* API Keys Tab */}
        <TabsContent value="keys" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Generate New API Key</CardTitle>
              <CardDescription>
                Create a new API key to access SafeOrStolen verification services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2">
                <Input
                  placeholder="Key name (e.g., Production API)"
                  value={newKeyName}
                  onChange={(e) => setNewKeyName(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && generateApiKey()}
                />
                <Button onClick={generateApiKey} disabled={loading}>
                  <Plus className="h-4 w-4 mr-2" />
                  Generate
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {apiKeys.map((key) => (
              <Card key={key.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{key.key_name}</CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge variant={key.is_active ? "default" : "secondary"}>
                        {key.is_active ? "Active" : "Revoked"}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => revokeApiKey(key.id)}
                        disabled={!key.is_active}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                  <CardDescription>
                    Created {new Date(key.created_at).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <code className="flex-1 bg-muted px-3 py-2 rounded text-sm font-mono">
                      {showKeys[key.id] ? key.api_key : '••••••••••••••••••••••••••••••••'}
                    </code>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowKeys({...showKeys, [key.id]: !showKeys[key.id]})}
                    >
                      {showKeys[key.id] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(key.api_key)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Usage</p>
                      <p className="font-semibold">
                        {key.usage_count} / {key.usage_limit || '∞'} calls
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Rate Limit</p>
                      <p className="font-semibold">
                        {key.usage_limit ? `${key.usage_limit}/month` : 'Unlimited'}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Documentation Tab */}
        <TabsContent value="docs" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Start</CardTitle>
              <CardDescription>Get started with the SafeOrStolen API in minutes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">1. Authentication</h3>
                <p className="text-sm text-muted-foreground">
                  Include your API key in the Authorization header:
                </p>
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`Authorization: Bearer sos_your_api_key_here`}
                </pre>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">2. Verify an Item</h3>
                <p className="text-sm text-muted-foreground">
                  Make a POST request to check if an item is stolen:
                </p>
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`POST https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/api-verify
Content-Type: application/json

{
  "identifier": "IMEI123456789",
  "item_type": "phone"
}`}
                </pre>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold">3. Response Format</h3>
                <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
{`{
  "success": true,
  "status": "safe",
  "verification_id": "uuid",
  "details": {
    "checked_at": "2025-01-01T00:00:00Z",
    "databases_checked": 5
  }
}`}
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Supported Item Types</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['phone', 'laptop', 'car', 'bike', 'tool', 'camera', 'watch', 'firearm'].map((type) => (
                  <Badge key={type} variant="secondary" className="justify-center py-2">
                    {type}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Usage Analytics Tab */}
        <TabsContent value="usage" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>API Usage Statistics</CardTitle>
              <CardDescription>Monitor your API consumption and performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">
                    {apiKeys.reduce((sum, key) => sum + key.usage_count, 0)}
                  </p>
                  <p className="text-sm text-muted-foreground">Total API Calls</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">{apiKeys.length}</p>
                  <p className="text-sm text-muted-foreground">Active Keys</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">99.9%</p>
                  <p className="text-sm text-muted-foreground">Uptime</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-3 bg-muted rounded">
                    <div className="text-xs text-muted-foreground">Requests Today</div>
                    <div className="text-xl font-bold">--</div>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <div className="text-xs text-muted-foreground">Success Rate</div>
                    <div className="text-xl font-bold">--</div>
                  </div>
                  <div className="p-3 bg-muted rounded">
                    <div className="text-xs text-muted-foreground">Avg. Response</div>
                    <div className="text-xl font-bold">--ms</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground text-center py-2">
                  Make API calls to see detailed usage logs and analytics
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
