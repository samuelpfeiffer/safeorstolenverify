import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Copy, Eye, EyeOff, Trash2, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';

interface ApiKey {
  id: string;
  api_key: string;
  key_name: string;
  usage_count: number;
  usage_limit: number;
  is_active: boolean;
  expires_at: string | null;
  created_at: string;
}

export const ApiKeyManager = () => {
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
  const [newKeyName, setNewKeyName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [visibleKeys, setVisibleKeys] = useState<Set<string>>(new Set());
  const { toast } = useToast();
  const { user } = useUnifiedAuth();

  useEffect(() => {
    if (user) {
      loadApiKeys();
    }
  }, [user]);

  const loadApiKeys = async () => {
    try {
      const { data, error } = await supabase
        .from('external_api_keys')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setApiKeys(data || []);
    } catch (error) {
      console.error('Error loading API keys:', error);
      toast({
        title: "Error",
        description: "Failed to load API keys",
        variant: "destructive",
      });
    }
  };

  const generateApiKey = async () => {
    if (!newKeyName.trim()) {
      toast({
        title: "Error",
        description: "Please enter a name for the API key",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      // Generate API key using database function
      const { data: keyData, error: keyError } = await supabase.rpc('generate_api_key');
      
      if (keyError) throw keyError;

      // Insert the new API key
      const { error: insertError } = await supabase
        .from('external_api_keys')
        .insert({
          user_id: user?.id,
          api_key: keyData,
          key_name: newKeyName.trim(),
          usage_limit: 1000, // Default limit
          is_active: true
        });

      if (insertError) throw insertError;

      setNewKeyName('');
      await loadApiKeys();
      
      toast({
        title: "Success",
        description: "API key generated successfully",
      });
    } catch (error) {
      console.error('Error generating API key:', error);
      toast({
        title: "Error",
        description: "Failed to generate API key",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const deleteApiKey = async (keyId: string) => {
    try {
      const { error } = await supabase
        .from('external_api_keys')
        .delete()
        .eq('id', keyId);

      if (error) throw error;
      
      await loadApiKeys();
      toast({
        title: "Success",
        description: "API key deleted successfully",
      });
    } catch (error) {
      console.error('Error deleting API key:', error);
      toast({
        title: "Error",
        description: "Failed to delete API key",
        variant: "destructive",
      });
    }
  };

  const toggleKeyVisibility = (keyId: string) => {
    const newVisible = new Set(visibleKeys);
    if (newVisible.has(keyId)) {
      newVisible.delete(keyId);
    } else {
      newVisible.add(keyId);
    }
    setVisibleKeys(newVisible);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied",
      description: "API key copied to clipboard",
    });
  };

  const maskApiKey = (key: string) => {
    return `${key.slice(0, 8)}${'*'.repeat(32)}${key.slice(-8)}`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>API Key Management</CardTitle>
        <CardDescription>
          Generate and manage API keys for SafeOrStolen.com integration
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Generate New API Key */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Generate New API Key</h3>
          <div className="flex gap-2">
            <div className="flex-1">
              <Label htmlFor="keyName">Key Name</Label>
              <Input
                id="keyName"
                placeholder="e.g., Production API, Development Key"
                value={newKeyName}
                onChange={(e) => setNewKeyName(e.target.value)}
              />
            </div>
            <Button 
              onClick={generateApiKey} 
              disabled={isLoading}
              className="mt-6"
            >
              <Plus className="w-4 h-4 mr-2" />
              Generate
            </Button>
          </div>
        </div>

        {/* API Keys List */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Your API Keys</h3>
          
          {apiKeys.length === 0 ? (
            <p className="text-muted-foreground">No API keys generated yet.</p>
          ) : (
            <div className="space-y-3">
              {apiKeys.map((apiKey) => (
                <Card key={apiKey.id} className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{apiKey.key_name}</h4>
                        <Badge variant={apiKey.is_active ? "default" : "secondary"}>
                          {apiKey.is_active ? "Active" : "Inactive"}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 font-mono text-sm">
                        <span>
                          {visibleKeys.has(apiKey.id) 
                            ? apiKey.api_key 
                            : maskApiKey(apiKey.api_key)
                          }
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleKeyVisibility(apiKey.id)}
                        >
                          {visibleKeys.has(apiKey.id) ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(apiKey.api_key)}
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Usage: {apiKey.usage_count.toLocaleString()} / {apiKey.usage_limit?.toLocaleString() || '∞'} requests
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteApiKey(apiKey.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* API Documentation */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">API Usage</h3>
          <div className="bg-muted p-4 rounded-lg space-y-2">
            <p className="font-medium">Endpoint:</p>
            <code className="block bg-background p-2 rounded text-sm">
              POST https://lxrdzbknktwlubbmlsqe.supabase.co/functions/v1/api-v1-check
            </code>
            
            <p className="font-medium mt-4">Headers:</p>
            <code className="block bg-background p-2 rounded text-sm">
              X-API-Key: your_api_key_here<br/>
              Content-Type: application/json
            </code>
            
            <p className="font-medium mt-4">Request Body:</p>
            <code className="block bg-background p-2 rounded text-sm">
              {JSON.stringify({
                identifier: "356938035643809",
                type: "imei"
              }, null, 2)}
            </code>
            
            <p className="font-medium mt-4">Response:</p>
            <code className="block bg-background p-2 rounded text-sm">
              {JSON.stringify({
                status: "safe",
                message: "Device is clean and not reported stolen",
                confidence: 85,
                metadata: {
                  verified_at: "2024-01-15T10:30:00Z",
                  checked_at: "2024-01-20T14:45:00Z"
                }
              }, null, 2)}
            </code>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};