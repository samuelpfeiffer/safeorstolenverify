import React, { useState } from 'react';
import { PageSEO } from '@/components/seo/PageSEO';
import { Shield, Car } from 'lucide-react';
import { StateTheftLookupForm } from '@/components/state-verification/StateTheftLookupForm';
import { StateTheftResults } from '@/components/state-verification/StateTheftResults';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

export default function CaliforniaLicensePlateLookup() {
  const [result, setResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleLookup = async (data: { stateCode: string; type: string; value: string }) => {
    setIsLoading(true);
    setResult(null);

    try {
      const { data: lookupResult, error } = await supabase.functions.invoke('california-theft-lookup', {
        body: { type: data.type, value: data.value }
      });

      if (error) throw error;

      setResult(lookupResult);
      
      toast({
        title: "Verification Complete",
        description: `California license plate lookup completed for ${data.value}`,
      });
    } catch (error) {
      console.error('California lookup error:', error);
      toast({
        title: "Verification Error",
        description: "Unable to complete California license plate verification. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <PageSEO
        title="California License Plate Lookup - Free CA Stolen Vehicle Check | SafeOrStolen"
        description="Free California license plate verification. Check if a vehicle is stolen in CA against CHP VTIS, CAL-HEAT, and police databases. Instant CA license plate lookup."
        keywords="california license plate lookup, ca stolen vehicle check, california chp database, ca plate verification, california stolen car check, chp vtis lookup, cal-heat"
        canonical="/california-license-plate-lookup"
      />
      <main className="min-h-screen bg-background py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <header className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-sos-orange mr-3" />
              <Car className="h-12 w-12 text-sos-orange" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ☀️ California License Plate Lookup
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
              Free California license plate verification against CHP VTIS, CAL-HEAT (1-800-CAL-HEAT), and NCIC databases.
            </p>
          </header>

          <div className="grid gap-8">
            <StateTheftLookupForm
              onSubmit={handleLookup}
              isLoading={isLoading}
              defaultState="CA"
              defaultType="license_plate"
            />

            {result && (
              <StateTheftResults
                result={result}
                stateCode="CA"
                stateName="California"
              />
            )}
          </div>
        </div>
      </main>
    </>
  );
}