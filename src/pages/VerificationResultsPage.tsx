import { Link } from 'react-router-dom';
import { useSafeLocation } from '@/hooks/useSafeLocation';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, AlertTriangle, Shield, ArrowLeft } from 'lucide-react';
import { EmbeddableSafeBadge } from '@/components/badges/EmbeddableSafeBadge';

export default function VerificationResultsPage() {
  const location = useSafeLocation();
  const { result, searchInput } = location?.state || {};

  if (!result) {
    return (
      <>
        <PageSEO
          title="Verification Results | SafeOrStolen"
          description="View your item verification results"
        />
        <div className="min-h-screen flex items-center justify-center bg-background">
          <Card className="p-8 max-w-md text-center">
            <AlertTriangle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-4">No Results Found</h1>
            <p className="text-muted-foreground mb-6">
              No verification results available. Please start a new search.
            </p>
            <Link to="/">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Return to Home
              </Button>
            </Link>
          </Card>
        </div>
      </>
    );
  }

  const isStolen = result.status === 'stolen';
  const isSafe = result.status === 'safe';

  return (
    <>
      <PageSEO
        title="Verification Results | SafeOrStolen"
        description="View your item verification results"
        noIndex={true}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/10 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Search
              </Link>
              <h1 className="text-3xl font-bold">Verification Results</h1>
            </div>

            {/* Result Card */}
            <Card className={`p-8 mb-6 border-2 ${
              isStolen ? 'border-destructive bg-destructive/5' : 
              isSafe ? 'border-primary bg-primary/5' : 
              'border-border'
            }`}>
              {/* Status Icon */}
              <div className="flex items-center gap-4 mb-6">
                {isStolen ? (
                  <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
                    <AlertTriangle className="h-8 w-8 text-destructive" />
                  </div>
                ) : isSafe ? (
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                    <Shield className="h-8 w-8 text-muted-foreground" />
                  </div>
                )}
                
                <div>
                  <Badge variant={isStolen ? 'destructive' : isSafe ? 'default' : 'secondary'} className="mb-2">
                    {result.status.toUpperCase()}
                  </Badge>
                  <h2 className="text-2xl font-bold">
                    {isStolen ? 'Item Reported as Stolen' : 
                     isSafe ? 'Item is Safe to Purchase' : 
                     'Verification Complete'}
                  </h2>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Searched Item</div>
                  <div className="text-lg font-mono">{searchInput}</div>
                </div>

                {result.itemType && (
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Item Type</div>
                    <div className="text-lg capitalize">{result.itemType}</div>
                  </div>
                )}

                {result.databases && (
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Databases Checked</div>
                    <div className="flex flex-wrap gap-2">
                      {result.databases.map((db: string, index: number) => (
                        <Badge key={index} variant="outline">{db}</Badge>
                      ))}
                    </div>
                  </div>
                )}

                {result.message && (
                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <p className="text-muted-foreground">{result.message}</p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-8">
                <Link to="/" className="flex-1">
                  <Button variant="outline" className="w-full">
                    New Search
                  </Button>
                </Link>
                <Button className="flex-1" onClick={() => window.print()}>
                  Save Results
                </Button>
              </div>
            </Card>

            {/* Trust Badge for Safe Items */}
            {isSafe && (
              <div className="space-y-4">
                <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-primary/30">
                  <div className="p-6">
                    <div className="text-center space-y-3">
                      <div className="inline-flex items-center gap-2 text-primary">
                        <Shield className="h-6 w-6" />
                        <span className="text-xl font-bold">Item Verified Safe! 🎉</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Get your trust badge below to share on marketplace listings
                      </p>
                    </div>
                  </div>
                </Card>
                
                <EmbeddableSafeBadge 
                  verificationId={result.verificationId || result.id || 'verified'} 
                  status="safe"
                  itemName={searchInput}
                />
              </div>
            )}

            {/* Additional Info */}
            {isStolen && (
              <Card className="p-6 bg-destructive/5 border-destructive/20">
                <h3 className="font-bold text-lg mb-2 text-destructive">⚠️ Important Notice</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  This item has been reported as stolen. Do not proceed with the purchase. 
                  Contact local authorities if you have information about this item.
                </p>
                <Button variant="destructive" size="sm">
                  Report to Authorities
                </Button>
              </Card>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
