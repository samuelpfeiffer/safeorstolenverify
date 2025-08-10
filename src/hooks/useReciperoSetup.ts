import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface BusinessUnit {
  id: number;
  legalName: string;
  reportName: string;
  status: string;
}

interface Store {
  id: number;
  legalName?: string;
  reportName: string;
  city?: string;
  county?: string;
  state?: string;
  zipcode?: string;
  country?: string;
  type: 'live' | 'test';
  businessUnitId: number;
  status: string;
}

interface CreateStoreRequest {
  businessUnitId: number;
  reportName: string;
  legalName?: string;
  city?: string;
  county?: string;
  state?: string;
  zipcode?: string;
  country?: string;
  email?: string;
  type?: 'live' | 'test';
}

interface ClaimSubmissionRequest {
  claimtype: 'logged' | 'settled';
  itemcategory: number;
  serials: string[];
  storeid: number;
  itemdescription: string;
  make: string;
  model: string;
  claimdate: string; // YYYY-MM-DD HH:MM:SS
  claimreference: string;
  claimitemnumber?: string;
  claimnotes?: string;
}

export const useReciperoSetup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const createBusinessUnit = async (legalName: string, reportName: string): Promise<BusinessUnit | null> => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('recipero-setup', {
        body: {
          action: 'create_business_unit',
          legalName,
          reportName
        }
      });

      if (error) {
        console.error('Business unit creation error:', error);
        toast({
          title: "Business Unit Creation Failed",
          description: error.message || "Unable to create business unit",
          variant: "destructive",
        });
        return null;
      }

      if (!data.success) {
        toast({
          title: "Business Unit Creation Failed", 
          description: data.error || "Unable to create business unit",
          variant: "destructive",
        });
        return null;
      }

      toast({
        title: "Business Unit Created",
        description: `Successfully created ${reportName}`,
      });

      return data.result;
    } catch (error) {
      console.error('Business unit creation request failed:', error);
      toast({
        title: "Network Error",
        description: "Unable to connect to Recipero API",
        variant: "destructive",
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const createStore = async (storeData: CreateStoreRequest): Promise<Store | null> => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('recipero-setup', {
        body: {
          action: 'create_store',
          ...storeData
        }
      });

      if (error) {
        console.error('Store creation error:', error);
        toast({
          title: "Store Creation Failed",
          description: error.message || "Unable to create store",
          variant: "destructive",
        });
        return null;
      }

      if (!data.success) {
        toast({
          title: "Store Creation Failed", 
          description: data.error || "Unable to create store",
          variant: "destructive",
        });
        return null;
      }

      toast({
        title: "Store Created",
        description: `Successfully created store: ${storeData.reportName}`,
      });

      return data.result;
    } catch (error) {
      console.error('Store creation request failed:', error);
      toast({
        title: "Network Error",
        description: "Unable to connect to Recipero API",
        variant: "destructive",
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const listBusinessUnits = async (): Promise<BusinessUnit[] | null> => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('recipero-setup', {
        body: {
          action: 'list_business_units'
        }
      });

      if (error) {
        console.error('List business units error:', error);
        toast({
          title: "Failed to Load Business Units",
          description: error.message || "Unable to fetch business units",
          variant: "destructive",
        });
        return null;
      }

      if (!data.success) {
        toast({
          title: "Failed to Load Business Units", 
          description: data.error || "Unable to fetch business units",
          variant: "destructive",
        });
        return null;
      }

      return data.result;
    } catch (error) {
      console.error('List business units request failed:', error);
      toast({
        title: "Network Error",
        description: "Unable to connect to Recipero API",
        variant: "destructive",
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const listStores = async (businessUnitId?: number): Promise<Store[] | null> => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('recipero-setup', {
        body: {
          action: 'list_stores',
          businessUnitId
        }
      });

      if (error) {
        console.error('List stores error:', error);
        toast({
          title: "Failed to Load Stores",
          description: error.message || "Unable to fetch stores",
          variant: "destructive",
        });
        return null;
      }

      if (!data.success) {
        toast({
          title: "Failed to Load Stores", 
          description: data.error || "Unable to fetch stores",
          variant: "destructive",
        });
        return null;
      }

      return data.result;
    } catch (error) {
      console.error('List stores request failed:', error);
      toast({
        title: "Network Error",
        description: "Unable to connect to Recipero API",
        variant: "destructive",
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const submitClaim = async (claimData: ClaimSubmissionRequest): Promise<{transactionid: string} | null> => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('recipero-setup', {
        body: {
          action: 'submit_claim',
          ...claimData
        }
      });

      if (error) {
        console.error('Claim submission error:', error);
        toast({
          title: "Claim Submission Failed",
          description: error.message || "Unable to submit claim",
          variant: "destructive",
        });
        return null;
      }

      if (!data.success) {
        toast({
          title: "Claim Submission Failed", 
          description: data.error || "Unable to submit claim",
          variant: "destructive",
        });
        return null;
      }

      toast({
        title: "Claim Submitted",
        description: `Claim submitted successfully. Transaction ID: ${data.result.transactionid}`,
      });

      return data.result;
    } catch (error) {
      console.error('Claim submission request failed:', error);
      toast({
        title: "Network Error",
        description: "Unable to connect to Recipero API",
        variant: "destructive",
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createBusinessUnit,
    createStore,
    listBusinessUnits,
    listStores,
    submitClaim,
    isLoading
  };
};