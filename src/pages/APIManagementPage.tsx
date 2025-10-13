import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Code, Copy, Key, Plus, Trash2, Eye, EyeOff } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/lib/auth';
import { useNavigate } from 'react-router-dom';

interface APIKey {
  id: string;
  key_name: string;
  api_key: string;
  usage_count: number;
  usage_limit: number | null;
  created_at: string;
  is_active: boolean;
}

export default function APIManagementPage() {
  const [apiKeys, setApiKeys] = useState<APIKey[]>([]);
  const [newKeyName, setNewKeyName] = useState('');
  const [showKeys, setShowKeys] = useState<Record<string, boolean>>({});
  const [isCreating, setIsCreating] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }
    fetchAPIKeys();
  }, [user]);

  const fetchAPIKeys = async () => {
    try {
      const { data, error } = await supabase
        .from('external_api_keys')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setApiKeys(data || []);
    } catch (error) {
      console.error('Error fetching API keys:', error);
    }
  };

  const createAPIKey = async () => {
    if (!newKeyName.trim()) {
      toast.error('Please enter a key name');
      return;
    }

    setIsCreating(true);
    try {
      // Generate API key
      const apiKey = `sos_${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`;

      const { error } = await supabase
        .from('external_api_keys')
        .insert({
          user_id: user?.id,
          key_name: newKeyName,
          api_key: apiKey,
          usage_limit: 10000, // Default 10k calls/month
          permissions: { check: true, bulk: true }
        });

      if (error) throw error;

      toast.success('API key created successfully');
      setNewKeyName('');
      fetchAPIKeys();
    } catch (error) {
      toast.error('Failed to create API key');
    } finally {
      setIsCreating(false);
    }
  };

  const deleteAPIKey = async (id: string) => {
    try {
      const { error } = await supabase
        .from('external_api_keys')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast.success('API key deleted');
      fetchAPIKeys();
    } catch (error) {
      toast.error('Failed to delete API key');
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('API key copied to clipboard');
  };

  const toggleKeyVisibility = (id: string) => {
    setShowKeys(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const maskKey = (key: string) => {
    return `${key.substring(0, 10)}${'*'.repeat(20)}`;
  };

  return (
    <>
      <Helmet>
        <title>API Management - SafeOrStolen</title>
        <meta name="description" content="Manage your SafeOrStolen API keys for programmatic access to stolen item verification" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-2">API Management</h1>
            <p className="text-muted-foreground">
              Integrate SafeOrStolen verification into your application
            </p>
          </header>

          {/* Create New API Key */}
          <Card className="p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Create New API Key
            </h2>
            <div className="flex gap-2">
              <Input
                placeholder="API Key Name (e.g., Production Server)"
                value={newKeyName}
                onChange={(e) => setNewKeyName(e.target.value)}
                className="flex-1"
              />
              <Button onClick={createAPIKey} disabled={isCreating}>
                <Key className="h-4 w-4 mr-2" />
                Generate Key
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              📌 Professional plan required for API access (10,000 calls/month included)
            </p>
          </Card>

          {/* API Keys List */}
          <Card className="p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Your API Keys</h2>
            {apiKeys.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Key className="h-12 w-12 mx-auto mb-2 opacity-50" />
                <p>No API keys yet</p>
              </div>
            ) : (
              <div className="space-y-4">
                {apiKeys.map((key) => (
                  <div key={key.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{key.key_name}</h3>
                      <div className="flex gap-2">
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => toggleKeyVisibility(key.id)}
                        >
                          {showKeys[key.id] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => copyToClipboard(key.api_key)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => deleteAPIKey(key.id)}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </div>
                    <code className="text-xs bg-muted px-2 py-1 rounded font-mono block mb-2">
                      {showKeys[key.id] ? key.api_key : maskKey(key.api_key)}
                    </code>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Usage: {key.usage_count.toLocaleString()} / {key.usage_limit?.toLocaleString() || '∞'}</span>
                      <span>Created: {new Date(key.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>

          {/* API Documentation */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Code className="h-5 w-5" />
              API Documentation
            </h2>
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-semibold mb-2">Authentication</h3>
                <p className="text-muted-foreground mb-2">Include your API key in the Authorization header:</p>
                <pre className="bg-muted p-3 rounded overflow-x-auto">
                  <code>{`Authorization: Bearer YOUR_API_KEY`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Verify Item Endpoint</h3>
                <pre className="bg-muted p-3 rounded overflow-x-auto">
                  <code>{`POST https://safeorstolen.com/api/verify
{
  "identifier": "VIN_OR_IMEI_OR_SERIAL",
  "type": "vehicle|phone|bike|electronics"
}`}</code>
                </pre>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Response Format</h3>
                <pre className="bg-muted p-3 rounded overflow-x-auto">
                  <code>{`{
  "status": "safe|stolen|lost",
  "message": "Verification result message",
  "providers": ["NICB", "GSMA", "CheckMEND"],
  "timestamp": "2025-10-13T00:00:00Z"
}`}</code>
                </pre>
              </div>

              <div className="mt-4 p-4 bg-primary/5 rounded">
                <p className="font-semibold mb-2">📚 Full Documentation</p>
                <p className="text-muted-foreground">
                  Visit <a href="/docs/api" className="text-primary hover:underline">our API documentation</a> for complete endpoint reference, rate limits, and code examples.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
