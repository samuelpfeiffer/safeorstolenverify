
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { validateEmailSecurity, validateNameSecurity, sanitizeInputSecurity } from '@/utils/securityValidation';

interface ProfileData {
  full_name?: string;
  email?: string;
  avatar_url?: string;
}

export const useSecureProfileOperations = () => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const getSecureProfile = async () => {
    try {
      setLoading(true);
      
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        throw new Error('User not authenticated');
      }

      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) {
        console.error('Error fetching profile:', error);
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Failed to get profile:', error);
      toast({
        title: "Error",
        description: "Failed to load profile data",
        variant: "destructive",
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const updateSecureProfile = async (profileData: ProfileData) => {
    try {
      setLoading(true);
      
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        throw new Error('User not authenticated');
      }

      // Validate and sanitize inputs
      const validatedData: Partial<ProfileData> = {};

      if (profileData.full_name !== undefined) {
        const nameValidation = validateNameSecurity(profileData.full_name, 'Full name');
        if (!nameValidation.isValid) {
          throw new Error(nameValidation.errors[0]);
        }
        validatedData.full_name = nameValidation.sanitizedValue;
      }

      if (profileData.email !== undefined) {
        const emailValidation = validateEmailSecurity(profileData.email);
        if (!emailValidation.isValid) {
          throw new Error(emailValidation.errors[0]);
        }
        validatedData.email = emailValidation.sanitizedValue;
      }

      if (profileData.avatar_url !== undefined) {
        validatedData.avatar_url = sanitizeInputSecurity(profileData.avatar_url);
      }

      const { data, error } = await supabase
        .from('profiles')
        .update(validatedData)
        .eq('id', user.id)
        .select()
        .single();

      if (error) {
        console.error('Error updating profile:', error);
        throw error;
      }

      toast({
        title: "Success",
        description: "Profile updated successfully",
      });

      return data;
    } catch (error) {
      console.error('Failed to update profile:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to update profile",
        variant: "destructive",
      });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    getSecureProfile,
    updateSecureProfile,
    loading
  };
};
