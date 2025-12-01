import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useGSCConnection } from '@/hooks/useGSCData';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, ExternalLink, Loader2, XCircle } from 'lucide-react';
import { GSCSyncMonitor } from '@/components/admin/GSCSyncMonitor';

const GSCConnectPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    isConnected,
    isCheckingConnection,
    connect,
    disconnect,
    isConnecting,
    isDisconnecting,
  } = useGSCConnection();

  return (
    <>
      <Helmet>
        <title>Connect Google Search Console | SafeOrStolen Admin</title>
      </Helmet>

      <div className="container mx-auto py-8 px-4 max-w-2xl">
        <Button
          variant="outline"
          onClick={() => navigate('/admin/gsc-status')}
          className="mb-6"
        >
          ← Back to GSC Dashboard
        </Button>

        <Card>
          <CardHeader>
            <CardTitle>Google Search Console Connection</CardTitle>
            <CardDescription>
              Connect your Google account to enable real-time GSC data, automated URL inspection, and AI-powered SEO suggestions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Connection Status */}
            <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
              {isCheckingConnection ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : isConnected ? (
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              ) : (
                <XCircle className="h-5 w-5 text-muted-foreground" />
              )}
              <div>
                <p className="font-medium">
                  {isCheckingConnection ? 'Checking...' : isConnected ? 'Connected' : 'Not Connected'}
                </p>
                <p className="text-sm text-muted-foreground">
                  {isConnected
                    ? 'Your GSC account is connected and active'
                    : 'Connect your Google account to access GSC data'}
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              <h3 className="font-semibold">What you'll get:</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Real-time search analytics (clicks, impressions, CTR, position)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Automated URL inspection (check if pages are indexed)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Index coverage reports with issue detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>AI-powered SEO suggestions based on actual GSC data</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Performance alerts for pages with issues</span>
                </li>
              </ul>
            </div>

            {/* Permissions */}
            <div className="space-y-2">
              <h3 className="font-semibold text-sm">Required Permissions:</h3>
              <p className="text-sm text-muted-foreground">
                Read-only access to Google Search Console data
              </p>
              <p className="text-xs text-muted-foreground">
                Scope: <code>https://www.googleapis.com/auth/webmasters.readonly</code>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              {isConnected ? (
                <>
                  <Button
                    variant="outline"
                    onClick={() => navigate('/admin/gsc-status')}
                  >
                    View Dashboard
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => disconnect()}
                    disabled={isDisconnecting}
                  >
                    {isDisconnecting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Disconnecting...
                      </>
                    ) : (
                      'Disconnect Account'
                    )}
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() => connect()}
                  disabled={isConnecting}
                  className="w-full"
                >
                  {isConnecting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Connecting...
                    </>
                  ) : (
                    <>
                      Connect Google Account
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              )}
            </div>

            {/* Setup Instructions */}
            {!isConnected && (
              <div className="p-4 bg-muted rounded-lg text-sm space-y-2">
                <p className="font-medium">Setup Requirements:</p>
                <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                  <li>GSC OAuth credentials must be configured (GSC_CLIENT_ID, GSC_CLIENT_SECRET)</li>
                  <li>SafeOrStolen property must be verified in your Google Search Console</li>
                  <li>You must have Owner or Full access to the property</li>
                </ol>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Sync Monitor - only show when connected */}
        {isConnected && (
          <div className="mt-6">
            <GSCSyncMonitor />
          </div>
        )}
      </div>
    </>
  );
};

export default GSCConnectPage;