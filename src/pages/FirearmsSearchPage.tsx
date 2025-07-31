import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, Search, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { SEOHead } from '@/components/seo/SEOHead';

const FirearmsSearchPage = () => {
  const [serialNumber, setSerialNumber] = useState('');
  const [searchResult, setSearchResult] = useState<'checking' | 'safe' | 'stolen' | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const { toast } = useToast();

  const handleSearch = async () => {
    if (!serialNumber.trim()) {
      toast({
        title: "Serial Number Required",
        description: "Please enter a firearm serial number to search.",
        variant: "destructive"
      });
      return;
    }

    setIsSearching(true);
    setSearchResult('checking');

    // Simulate API call - replace with actual firearms database API
    setTimeout(() => {
      // Mock result - in real implementation, this would check against stolen firearms database
      const mockResult = Math.random() > 0.1 ? 'safe' : 'stolen';
      setSearchResult(mockResult);
      setIsSearching(false);
      
      toast({
        title: "Search Complete",
        description: `Firearm check completed for serial: ${serialNumber}`,
      });
    }, 2000);
  };

  const cleanSerialNumber = (value: string) => {
    // Remove spaces, dashes, and special characters automatically
    return value.replace(/[^a-zA-Z0-9]/g, '').toUpperCase();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cleaned = cleanSerialNumber(e.target.value);
    setSerialNumber(cleaned);
  };

  const renderSearchResult = () => {
    if (!searchResult) return null;

    switch (searchResult) {
      case 'checking':
        return (
          <Alert className="mt-6">
            <Search className="h-4 w-4 animate-spin" />
            <AlertDescription>
              Checking firearm serial number against stolen firearms database...
            </AlertDescription>
          </Alert>
        );

      case 'safe':
        return (
          <Alert className="mt-6 border-green-500 bg-green-50 dark:bg-green-950">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800 dark:text-green-200">
              <strong>Good News!</strong> This firearm serial number was not found in our stolen firearms database.
              However, this doesn't guarantee the firearm isn't stolen - always verify through official channels.
            </AlertDescription>
          </Alert>
        );

      case 'stolen':
        return (
          <Alert className="mt-6 border-red-500 bg-red-50 dark:bg-red-950">
            <XCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800 dark:text-red-200">
              <strong>Warning!</strong> This firearm serial number appears in our stolen firearms database.
              Do not purchase this firearm and contact local law enforcement immediately.
            </AlertDescription>
          </Alert>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <SEOHead
        title="Stolen Firearms Database Search - Check Serial Numbers"
        description="Search our comprehensive stolen firearms database by serial number. Verify if a firearm is stolen before purchase to protect yourself and help law enforcement."
        keywords="stolen firearms database, firearm serial number check, gun theft verification, firearms security"
        canonical="/firearms-search"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-sos-dark to-sos pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <Shield className="h-12 w-12 text-sos-orange mr-3" />
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  Stolen Firearms Database
                </h1>
              </div>
              <p className="text-gray-300 text-lg">
                Check firearm serial numbers against our comprehensive stolen firearms database
              </p>
            </div>

            {/* Search Card */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Search by Serial Number
                </CardTitle>
                <CardDescription>
                  Enter the firearm serial number without spaces, dashes, or special characters.
                  We'll automatically clean the input for you.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="serial" className="text-sm font-medium">
                    Firearm Serial Number
                  </label>
                  <Input
                    id="serial"
                    placeholder="e.g., ABC123XYZ"
                    value={serialNumber}
                    onChange={handleInputChange}
                    className="text-lg"
                    maxLength={50}
                  />
                  {serialNumber && (
                    <p className="text-xs text-muted-foreground">
                      Cleaned input: {serialNumber}
                    </p>
                  )}
                </div>
                
                <Button 
                  onClick={handleSearch}
                  disabled={!serialNumber.trim() || isSearching}
                  className="w-full"
                  size="lg"
                >
                  {isSearching ? 'Searching...' : 'Search Database'}
                </Button>
              </CardContent>
            </Card>

            {/* Search Results */}
            {renderSearchResult()}

            {/* Information Cards */}
            <div className="grid gap-6 mt-8">
              
              {/* How it Works */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How the Search Works</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1">1</Badge>
                    <p className="text-sm">Enter the complete serial number of the firearm</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1">2</Badge>
                    <p className="text-sm">We search our database of reported stolen firearms</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1">3</Badge>
                    <p className="text-sm">Get instant results to make informed decisions</p>
                  </div>
                </CardContent>
              </Card>

              {/* Important Notice */}
              <Card className="border-yellow-500 bg-yellow-50 dark:bg-yellow-950">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-yellow-800 dark:text-yellow-200">
                    <AlertTriangle className="h-5 w-5" />
                    Important Notice
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-yellow-800 dark:text-yellow-200">
                  <ul className="space-y-2 text-sm">
                    <li>• This database only contains firearms reported to us as stolen</li>
                    <li>• A "not found" result doesn't guarantee the firearm isn't stolen</li>
                    <li>• For complete verification, contact local law enforcement</li>
                    <li>• Always verify through official NCIC database when possible</li>
                    <li>• If you find a match, contact authorities immediately</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Privacy Notice */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Privacy & Security</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  <p>
                    We do not log your searches or report them to firearm owners. 
                    Your searches remain completely anonymous. If you find a match, 
                    you can choose to contact the owner or law enforcement on your own terms.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirearmsSearchPage;