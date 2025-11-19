import React, { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Shield, Car } from 'lucide-react';
import { StateTheftLookupForm } from '@/components/state-verification/StateTheftLookupForm';
import { StateTheftResults } from '@/components/state-verification/StateTheftResults';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

export default function FloridaLicensePlateLookup() {
  const [result, setResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLookup = async (data: { stateCode: string; type: string; value: string }) => {
    setIsLoading(true);
    setResult(null);

    try {
      const { data: lookupResult, error } = await supabase.functions.invoke('florida-theft-lookup', {
        body: { type: data.type, value: data.value }
      });

      if (error) throw error;

      setResult(lookupResult);
      
      toast({
        title: "Verification Complete",
        description: `Florida license plate lookup completed for ${data.value}`,
      });
    } catch (error) {
      console.error('Florida lookup error:', error);
      toast({
        title: "Verification Error",
        description: "Unable to complete Florida license plate verification. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <PageSEO
        title="Florida License Plate Lookup - Free FL Stolen Vehicle Check | SafeOrStolen"
        description="Free Florida license plate verification. Check if a vehicle is stolen in FL against FDLE, FCIC, and police databases. Instant FL license plate lookup."
        keywords="florida license plate lookup, fl stolen vehicle check, florida fdle database, fl plate verification, florida stolen car check, fdle pas lookup"
        canonical="/florida-license-plate-lookup"
      />
      <main className="min-h-screen bg-background py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <header className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-sos-orange mr-3" />
              <Car className="h-12 w-12 text-sos-orange" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              🌴 Florida License Plate Lookup
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Free Florida license plate verification against FDLE Public Access System, FCIC, and NCIC databases.
            </p>
          </header>

          <div className="grid gap-8">
            <StateTheftLookupForm
              onSubmit={handleLookup}
              isLoading={isLoading}
              defaultState="FL"
              defaultType="license_plate"
            />

            {result && (
              <StateTheftResults
                result={result}
                stateCode="FL"
                stateName="Florida"
              />
            )}
          </div>
        </div>
      </main>
    </>
  );
}