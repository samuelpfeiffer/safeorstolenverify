import { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Copy, CheckCircle2, BarChart3, Search, AlertTriangle, Code, Key, Settings, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/lib/auth';
import { BreadcrumbSchema } from '@/components/seo/schemas/BreadcrumbSchema';

export default function BusinessDashboard() {
  const { user } = useAuth();
  const [copiedKey, setCopiedKey] = useState(false);
  const [copiedWidget, setCopiedWidget] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // Demo API key - in production, fetched from business_api_keys table
  const apiKey = 'sk_live_sos_demo_' + (user?.id?.slice(0, 8) || 'xxxxxxxx');
  const widgetCode = `<script src="https://safeorstolen.com/widget.js" async></script>\n<safeorstolen-verify api-key="${apiKey}" theme="light"></safeorstolen-verify>`;

  const copyToClipboard = (text: string, setter: (v: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setter(true);
    setTimeout(() => setter(false), 2000);
  };

  const stats = [
    { label: 'Verifications Today', value: '0', icon: Search, trend: '+0%' },
    { label: 'This Month', value: '0', icon: BarChart3, trend: '+0%' },
    { label: 'Safe Items', value: '0', icon: CheckCircle2, color: 'text-green-500' },
    { label: 'Flagged Items', value: '0', icon: AlertTriangle, color: 'text-destructive' },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'widget', label: 'Widget Code', icon: Code },
    { id: 'api', label: 'API Key', icon: Key },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'For Businesses', url: '/for-businesses' },
    { name: 'Dashboard', url: '/business/dashboard' }
  ];

  return (
    <>
      <PageSEO
        title="Business Dashboard - SafeOrStolen"
        description="Manage your SafeOrStolen business verification account. View stats, get widget code, manage API keys."
        canonical="/business/dashboard"
        noIndex
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Business Dashboard
              </h1>
              <p className="text-muted-foreground mt-1">
                {user?.email || 'business@example.com'} • Free Trial
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/for-businesses#pricing">Upgrade Plan</Link>
            </Button>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mb-6 overflow-x-auto pb-2 border-b">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-t-lg transition-colors whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                  <Card key={i}>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">{stat.label}</span>
                        <stat.icon className={`h-5 w-5 ${stat.color || 'text-muted-foreground'}`} />
                      </div>
                      <div className="text-3xl font-bold">{stat.value}</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        <TrendingUp className="h-3 w-3" /> {stat.trend} from last month
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Start */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Quick Start Guide</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold">Get your API key</h4>
                      <p className="text-sm text-muted-foreground">Go to the "API Key" tab to copy your unique API key.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold">Add the widget to your website</h4>
                      <p className="text-sm text-muted-foreground">Go to the "Widget Code" tab and copy-paste the code into your website HTML.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold">Start verifying items</h4>
                      <p className="text-sm text-muted-foreground">Your widget is live! Every verification is logged here in your dashboard.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Widget Code Tab */}
          {activeTab === 'widget' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Embeddable Widget Code</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Copy this code and paste it into your website HTML where you want the verification widget to appear. 
                    No developer required — works on any website, CMS, or e-commerce platform.
                  </p>
                  <div className="relative">
                    <pre className="bg-zinc-900 text-green-400 rounded-xl p-6 font-mono text-sm overflow-x-auto whitespace-pre-wrap break-all">
                      {widgetCode}
                    </pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-3 right-3 text-zinc-400 hover:text-white"
                      onClick={() => copyToClipboard(widgetCode, setCopiedWidget)}
                    >
                      {copiedWidget ? <CheckCircle2 className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                      {copiedWidget ? 'Copied!' : 'Copy'}
                    </Button>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold mb-2">Light Theme</h4>
                      <code className="text-xs text-muted-foreground">theme="light"</code>
                    </div>
                    <div className="p-4 bg-zinc-900 text-zinc-100 rounded-lg">
                      <h4 className="font-semibold mb-2">Dark Theme</h4>
                      <code className="text-xs text-zinc-400">theme="dark"</code>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Platform-Specific Instructions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { platform: 'Shopify', instruction: 'Go to Online Store → Themes → Edit Code → Add to theme.liquid before </body>' },
                      { platform: 'WordPress', instruction: 'Go to Appearance → Theme Editor → footer.php → Add before </body>' },
                      { platform: 'WooCommerce', instruction: 'Add to product page template or use a Custom HTML widget in your sidebar' },
                      { platform: 'Custom HTML', instruction: 'Paste the code anywhere in your HTML file where you want the widget' },
                    ].map(p => (
                      <div key={p.platform} className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-1">{p.platform}</h4>
                        <p className="text-sm text-muted-foreground">{p.instruction}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* API Key Tab */}
          {activeTab === 'api' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Your API Key</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Use this key to authenticate API requests and widget integrations. Keep it secret — do not expose it in client-side code.
                  </p>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-muted rounded-lg px-4 py-3 font-mono text-sm break-all">
                      {apiKey}
                    </div>
                    <Button variant="outline" onClick={() => copyToClipboard(apiKey, setCopiedKey)}>
                      {copiedKey ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900 rounded-lg p-4">
                    <p className="text-sm text-yellow-700 dark:text-yellow-400">
                      <strong>Security:</strong> Your API key grants access to your verification account. Never share it publicly or commit it to version control.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">API Usage Example</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-zinc-900 text-green-400 rounded-xl p-6 font-mono text-xs overflow-x-auto whitespace-pre-wrap">{`curl -X POST https://safeorstolen.com/api/verify-widget \\
  -H "Content-Type: application/json" \\
  -H "X-API-Key: ${apiKey}" \\
  -d '{"identifier": "353456789012345", "type": "auto"}'`}</pre>
                  <p className="text-sm text-muted-foreground mt-4">
                    Full API documentation available at <Link to="/api" className="text-primary hover:underline">/api</Link>
                  </p>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Account Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Business Information</h4>
                  <p className="text-sm text-muted-foreground mb-4">Update your business details and contact information.</p>
                  <Button variant="outline" asChild>
                    <Link to="/profile">Edit Profile</Link>
                  </Button>
                </div>
                <div className="border-t pt-6">
                  <h4 className="font-semibold mb-2">Subscription</h4>
                  <p className="text-sm text-muted-foreground mb-4">You are currently on the <strong>Free Trial</strong>. Upgrade to unlock all features.</p>
                  <Button asChild>
                    <Link to="/for-businesses#pricing">Upgrade Plan</Link>
                  </Button>
                </div>
                <div className="border-t pt-6">
                  <h4 className="font-semibold mb-2">Support</h4>
                  <p className="text-sm text-muted-foreground">
                    Need help? Email us at{' '}
                    <a href="mailto:business@safeorstolen.com" className="text-primary hover:underline">business@safeorstolen.com</a>
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  );
}
