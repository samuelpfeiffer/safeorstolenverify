import React, { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Shield, Car } from 'lucide-react';
import { StateTheftLookupForm } from '@/components/state-verification/StateTheftLookupForm';
import { StateTheftResults } from '@/components/state-verification/StateTheftResults';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

export default function NewYorkLicensePlateLookup() {
  const [result, setResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLookup = async (data: { stateCode: string; type: string; value: string }) => {
    setIsLoading(true);
    setResult(null);

    try {
      const { data: lookupResult, error } = await supabase.functions.invoke('new-york-theft-lookup', {
        body: { type: data.type, value: data.value }
      });

      if (error) throw error;

      setResult(lookupResult);
      
      toast({
        title: "Verification Complete",
        description: `New York license plate lookup completed for ${data.value}`,
      });
    } catch (error) {
      console.error('New York lookup error:', error);
      toast({
        title: "Verification Error",
        description: "Unable to complete New York license plate verification. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <PageSEO
        title="New York License Plate Lookup - Free NY Stolen Vehicle Check | SafeOrStolen"
        description="Free New York license plate verification. Check if a vehicle is stolen in NY against DMV, NYSPIN, and police databases. Instant NY license plate lookup."
        keywords="new york license plate lookup, ny stolen vehicle check, new york dmv database, ny plate verification, new york stolen car check, nyspin lookup"
        canonical="/new-york-license-plate-lookup"
      />
      <main className="min-h-screen bg-background py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <header className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-sos-orange mr-3" />
              <Car className="h-12 w-12 text-sos-orange" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🗽 New York License Plate Lookup
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Free New York license plate verification against NY DMV, NYSPIN, and NCIC databases.
            </p>
          </header>

          <div className="grid gap-8">
            <StateTheftLookupForm
              onSubmit={handleLookup}
              isLoading={isLoading}
              defaultState="NY"
              defaultType="license_plate"
            />

            {result && (
              <StateTheftResults
                result={result}
                stateCode="NY"
                stateName="New York"
              />
            )}
          </div>
        </div>
      </main>
    </>
  );
}