import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/core/providers/AuthProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Shield, Search, QrCode, ArrowLeft, AlertTriangle, CheckCircle } from 'lucide-react';

const VerificationPage = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<'safe' | 'stolen' | 'unknown' | null>(null);

  const handleVerification = async () => {
    if (!searchQuery.trim()) {
      toast({
        title: 'Input Required',
        description: 'Please enter an item description or serial number.',
        variant: 'destructive',
      });
      return;
    }

    setIsVerifying(true);
    
    // Simulate verification process
    setTimeout(() => {
      const outcomes = ['safe', 'stolen', 'unknown'] as const;
      const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
      setVerificationResult(randomOutcome);
      setIsVerifying(false);
      
      if (randomOutcome === 'safe') {
        toast({
          title: 'Verification Complete',
          description: 'Item appears to be safe!',
        });
      } else if (randomOutcome === 'stolen') {
        toast({
          title: 'Warning',
          description: 'This item may be stolen. Exercise caution.',
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Verification Complete',
          description: 'Unable to verify item status. Proceed with caution.',
        });
      }
    }, 3000);
  };

  const resetVerification = () => {
    setSearchQuery('');
    setVerificationResult(null);
  };

  const getResultIcon = () => {
    switch (verificationResult) {
      case 'safe':
        return <CheckCircle className="h-16 w-16 text-green-500" />;
      case 'stolen':
        return <AlertTriangle className="h-16 w-16 text-red-500" />;
      case 'unknown':
        return <AlertTriangle className="h-16 w-16 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getResultMessage = () => {
    switch (verificationResult) {
      case 'safe':
        return {
          title: 'Item Appears Safe',
          description: 'No matches found in stolen goods databases. This item appears to be legitimate.',
          color: 'text-green-500'
        };
      case 'stolen':
        return {
          title: 'Potential Stolen Item',
          description: 'This item matches entries in stolen goods databases. We recommend avoiding this purchase.',
          color: 'text-red-500'
        };
      case 'unknown':
        return {
          title: 'Unable to Verify',
          description: 'Not enough information to determine item status. Proceed with caution and request additional documentation.',
          color: 'text-yellow-500'
        };
      default:
        return null;
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
            {user && (
              <Button asChild variant="ghost">
                <Link to="/dashboard">Dashboard</Link>
              </Button>
            )}
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Button asChild variant="ghost" size="sm" className="gap-2">
            <Link to={user ? "/dashboard" : "/"}>
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
          </Button>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4">Verify Item</h1>
            <p className="text-muted-foreground">
              Enter item details to check against our databases of stolen goods and authenticity markers.
            </p>
          </div>

          {!verificationResult ? (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Item Verification
                </CardTitle>
                <CardDescription>
                  Enter as much detail as possible for the most accurate results
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="search" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="search">Text Search</TabsTrigger>
                    <TabsTrigger value="qr">QR Code</TabsTrigger>
                  </TabsList>

                  <TabsContent value="search" className="space-y-4 mt-6">
                    <div className="space-y-2">
                      <Label htmlFor="search">Item Description or Serial Number</Label>
                      <Input
                        id="search"
                        placeholder="e.g., iPhone 15 Pro, Serial: A1234567890, or detailed description"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        disabled={isVerifying}
                      />
                      <p className="text-sm text-muted-foreground">
                        Include brand, model, serial number, or any unique identifiers
                      </p>
                    </div>
                    <Button 
                      onClick={handleVerification} 
                      className="w-full" 
                      disabled={isVerifying || !searchQuery.trim()}
                    >
                      {isVerifying ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Verifying...
                        </>
                      ) : (
                        <>
                          <Search className="h-4 w-4 mr-2" />
                          Verify Item
                        </>
                      )}
                    </Button>
                  </TabsContent>

                  <TabsContent value="qr" className="space-y-4 mt-6">
                    <div className="text-center py-12 border-2 border-dashed border-muted rounded-lg">
                      <QrCode className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">QR Code Scanner</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        QR code scanning feature coming soon
                      </p>
                      <Button variant="outline" disabled>
                        Scan QR Code
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <div className="mb-6">
                  {getResultIcon()}
                </div>
                <h2 className={`text-2xl font-bold mb-2 ${getResultMessage()?.color}`}>
                  {getResultMessage()?.title}
                </h2>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  {getResultMessage()?.description}
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong>Searched:</strong> {searchQuery}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Verification Time:</strong> {new Date().toLocaleString()}
                  </p>
                </div>
                <div className="flex gap-4 justify-center">
                  <Button onClick={resetVerification} variant="outline">
                    Verify Another Item
                  </Button>
                  {user && (
                    <Button asChild>
                      <Link to="/dashboard">Back to Dashboard</Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Information Card */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-lg">How Verification Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Database Cross-Reference</h4>
                  <p className="text-sm text-muted-foreground">
                    We check multiple databases of reported stolen goods and authenticity markers.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Search className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">AI-Powered Analysis</h4>
                  <p className="text-sm text-muted-foreground">
                    Our system uses advanced algorithms to analyze item descriptions and patterns.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Real-Time Results</h4>
                  <p className="text-sm text-muted-foreground">
                    Get instant verification results to make informed purchasing decisions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;