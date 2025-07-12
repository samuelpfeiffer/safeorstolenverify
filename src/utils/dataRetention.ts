
import { supabase } from '@/integrations/supabase/client';

export const cleanupExpiredData = async (): Promise<void> => {
  try {
    const now = new Date().toISOString();

    // Clean up expired verification results
    const { error: verificationError } = await supabase
      .from('verification_results')
      .delete()
      .lt('data_retention_until', now);

    if (verificationError) {
      console.error('Failed to cleanup expired verification results:', verificationError);
    }

    // Clean up old rate limit records (older than 24 hours)
    const dayAgo = new Date();
    dayAgo.setHours(dayAgo.getHours() - 24);

    const { error: rateLimitError } = await supabase
      .from('rate_limits')
      .delete()
      .lt('created_at', dayAgo.toISOString());

    if (rateLimitError) {
      console.error('Failed to cleanup old rate limit records:', rateLimitError);
    }

    console.log('Data retention cleanup completed');
  } catch (error) {
    console.error('Data retention cleanup failed:', error);
  }
};

// Helper to extend data retention for verification results
export const extendVerificationRetention = async (
  recordId: string,
  extensionYears: number
): Promise<boolean> => {
  try {
    const newRetentionDate = new Date();
    newRetentionDate.setFullYear(newRetentionDate.getFullYear() + extensionYears);

    const { error } = await supabase
      .from('verification_results')
      .update({ data_retention_until: newRetentionDate.toISOString() })
      .eq('id', recordId);

    if (error) {
      console.error('Failed to extend verification retention:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Verification retention extension failed:', error);
    return false;
  }
};

// Helper to extend data retention for subscribers
export const extendSubscriberRetention = async (
  recordId: string,
  extensionYears: number
): Promise<boolean> => {
  try {
    const newRetentionDate = new Date();
    newRetentionDate.setFullYear(newRetentionDate.getFullYear() + extensionYears);

    const { error } = await supabase
      .from('subscribers')
      .update({ data_retention_until: newRetentionDate.toISOString() })
      .eq('id', recordId);

    if (error) {
      console.error('Failed to extend subscriber retention:', error);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Subscriber retention extension failed:', error);
    return false;
  }
};
