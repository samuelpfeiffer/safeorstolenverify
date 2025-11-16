import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { SmartSearchInput } from '@/components/ai/SmartSearchInput';
import { PhotoItemIdentifier } from '@/components/ai/PhotoItemIdentifier';
import { Button } from '@/components/ui/button';
import { Search, Camera } from 'lucide-react';
import { PageSEO } from '@/components/seo/PageSEO';

export const UnifiedVerificationPageEnhanced = () => {
  const [searchValue, setSearchValue] = useState('');
  const [itemType, setItemType] = useState<string>('');

  const handlePhotoIdentification = (result: any) => {
    if (result.serialNumbers && result.serialNumbers.length > 0) {
      setSearchValue(result.serialNumbers[0]);
    }
    if (result.itemType) {
      setItemType(result.itemType);
    }
  };

  const handleSearch = () => {
    console.log('Searching for:', searchValue, 'Type:', itemType);
    // Implement actual search logic
  };

  return (
    <>
      <PageSEO
        title="Smart Item Verification - AI-Powered Stolen Item Checker"
        description="Advanced verification with AI-powered search suggestions and photo identification. Check if items are stolen using serial numbers, IMEI, or VIN."
        keywords="AI verification, smart search, photo identification, IMEI checker, VIN lookup, stolen item checker"
        canonical="/verify"
      />

      <div className="min-h-screen bg-background py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Smart Item Verification</h1>
            <p className="text-xl text-muted-foreground">
              AI-powered verification with intelligent suggestions and photo identification
            </p>
          </div>

          <Card className="p-6">
            <Tabs defaultValue="search">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="search">
                  <Search className="w-4 h-4 mr-2" />
                  Smart Search
                </TabsTrigger>
                <TabsTrigger value="photo">
                  <Camera className="w-4 h-4 mr-2" />
                  Photo ID
                </TabsTrigger>
              </TabsList>

              <TabsContent value="search" className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Enter Serial Number, IMEI, or VIN
                    </label>
                    <SmartSearchInput
                      value={searchValue}
                      onChange={setSearchValue}
                      itemType={itemType}
                      placeholder="Start typing for intelligent suggestions..."
                    />
                  </div>

                  <Button 
                    onClick={handleSearch} 
                    className="w-full"
                    disabled={!searchValue}
                  >
                    <Search className="w-4 h-4 mr-2" />
                    Verify Item
                  </Button>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="text-sm font-medium mb-2">AI Features:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Smart autocomplete based on format detection</li>
                    <li>• Suggestions from previous successful searches</li>
                    <li>• Format validation (IMEI: 15 digits, VIN: 17 chars)</li>
                    <li>• Real-time search history matching</li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="photo">
                <PhotoItemIdentifier onIdentified={handlePhotoIdentification} />
                
                {searchValue && (
                  <div className="mt-4 p-4 bg-muted rounded-lg">
                    <p className="text-sm font-medium mb-2">Extracted Information:</p>
                    <div className="space-y-1 text-sm">
                      <div><strong>Serial Number:</strong> {searchValue}</div>
                      {itemType && <div><strong>Item Type:</strong> {itemType}</div>}
                    </div>
                    <Button 
                      onClick={handleSearch} 
                      className="w-full mt-4"
                    >
                      Verify This Item
                    </Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </Card>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>Need help? Click the chat icon to talk to our AI Safety Advisor</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnifiedVerificationPageEnhanced;
