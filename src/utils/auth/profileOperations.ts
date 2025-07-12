
import { supabase } from "@/integrations/supabase/client";

export const createUserProfile = async (userId: string, email: string, fullName?: string) => {
  console.log('Creating user profile:', { userId, email, fullName });
  
  try {
    const { error } = await supabase
      .from('profiles')
      .insert({
        id: userId,
        email,
        full_name: fullName || null,
        terms_accepted: false,
      });

    if (error) {
      console.error('Error creating profile:', error);
      throw error;
    }

    console.log('Profile created successfully');
    return { success: true };
  } catch (error) {
    console.error('Failed to create profile:', error);
    return { success: false, error };
  }
};

export const updateProfileTermsAcceptance = async (userId: string) => {
  console.log('Updating profile terms acceptance:', userId);
  
  try {
    const { error } = await supabase
      .from('profiles')
      .update({
        terms_accepted: true,
        terms_accepted_at: new Date().toISOString(),
      })
      .eq('id', userId);

    if (error) {
      console.error('Error updating profile terms:', error);
      throw error;
    }

    console.log('Profile terms updated successfully');
    return { success: true };
  } catch (error) {
    console.error('Failed to update profile terms:', error);
    return { success: false, error };
  }
};

export const getOrCreateProfile = async (userId: string, email: string, fullName?: string) => {
  console.log('Getting or creating profile:', { userId, email });
  
  try {
    // First, try to get existing profile
    const { data: existingProfile, error: fetchError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .maybeSingle();

    if (fetchError) {
      console.error('Error fetching profile:', fetchError);
      throw fetchError;
    }

    if (existingProfile) {
      console.log('Profile already exists');
      return { profile: existingProfile, created: false };
    }

    // Create new profile if it doesn't exist
    const createResult = await createUserProfile(userId, email, fullName);
    
    if (!createResult.success) {
      throw createResult.error;
    }

    // Fetch the created profile
    const { data: newProfile, error: newFetchError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (newFetchError) {
      console.error('Error fetching new profile:', newFetchError);
      throw newFetchError;
    }

    return { profile: newProfile, created: true };
  } catch (error) {
    console.error('Failed to get or create profile:', error);
    throw error;
  }
};
