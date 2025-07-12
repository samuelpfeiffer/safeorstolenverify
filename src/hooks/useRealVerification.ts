import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { normalizeVerificationStatus, type VerificationStatus } from '@/utils/typeGuards';
import { validateSerialNumber, validateItemType, sanitizeInput } from '@/utils/inputValidation';
import { checkRateLimit } from '@/utils/rateLimiting';
import { logAuditEvent, AUDIT_ACTIONS } from '@/utils/auditLogging';
import { handleSecureError, createSecureError, SECURE_ERROR_MESSAGES } from '@/utils/errorHandling';
import { useSecuritySettings } from '@/hooks/useSecuritySettings';

interface VerificationResult {
  id: string;
  status: VerificationStatus;
  confidence: number;
  source: string;
  details?: any;
  message?: string;
  verified_at: string;
}

export const useRealVerification = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<VerificationResult | null>(null);
  const { toast } = useToast();
  const { user } = useUnifiedAuth();
  const { settings } = useSecuritySettings();

  const verifyItem = async (serialNumber: string, itemType: string): Promise<VerificationResult | null> => {
    if (!user) {
      const error = createSecureError(
        SECURE_ERROR_MESSAGES.AUTHENTICATION_REQUIRED,
        'User not authenticated',
        'AUTH_REQUIRED'
      );
      if (settings?.enableSecureErrorHandling) {
        handleSecureError(error, toast);
      } else {
        toast({
          title: "Authentication required",
          description: "Please sign in to verify items.",
          variant: "destructive"
        });
      }
      return null;
    }

    // Input validation (only if enabled)
    if (settings?.enableInputValidation) {
      const serialValidation = validateSerialNumber(serialNumber);
      if (!serialValidation.isValid) {
        const error = createSecureError(
          serialValidation.error!,
          `Invalid serial number: ${serialNumber}`,
          'INVALID_SERIAL'
        );
        if (settings.enableSecureErrorHandling) {
          handleSecureError(error, toast);
        } else {
          toast({
            title: "Invalid input",
            description: serialValidation.error,
            variant: "destructive"
          });
        }
        return null;
      }

      const itemTypeValidation = validateItemType(itemType);
      if (!itemTypeValidation.isValid) {
        const error = createSecureError(
          itemTypeValidation.error!,
          `Invalid item type: ${itemType}`,
          'INVALID_ITEM_TYPE'
        );
        if (settings.enableSecureErrorHandling) {
          handleSecureError(error, toast);
        } else {
          toast({
            title: "Invalid input",
            description: itemTypeValidation.error,
            variant: "destructive"
          });
        }
        return null;
      }
    }

    // Rate limiting (only if enabled)
    if (settings?.enableRateLimiting) {
      const canProceed = await checkRateLimit('verification');
      if (!canProceed) {
        const error = createSecureError(
          SECURE_ERROR_MESSAGES.RATE_LIMIT_EXCEEDED,
          `Rate limit exceeded for user ${user.id}`,
          'RATE_LIMIT'
        );
        if (settings.enableSecureErrorHandling) {
          handleSecureError(error, toast);
        } else {
          toast({
            title: "Rate limit exceeded",
            description: "Too many requests. Please wait before trying again.",
            variant: "destructive"
          });
        }
        return null;
      }
    }

    setIsLoading(true);
    setResult(null);

    try {
      // Sanitize inputs (only if validation is enabled)
      const cleanSerialNumber = settings?.enableInputValidation 
        ? sanitizeInput(serialNumber.trim()) 
        : serialNumber.trim();
      const cleanItemType = settings?.enableInputValidation 
        ? sanitizeInput(itemType) 
        : itemType;

      console.log(`Starting real verification for ${cleanItemType}: ${cleanSerialNumber}`);
      
      const { data, error } = await supabase.functions.invoke('verify-item', {
        body: {
          serialNumber: cleanSerialNumber,
          itemType: cleanItemType
        }
      });

      if (error) {
        throw createSecureError(
          SECURE_ERROR_MESSAGES.VERIFICATION_FAILED,
          error.message || 'Verification function error',
          'FUNCTION_ERROR'
        );
      }

      if (!data?.success) {
        throw createSecureError(
          SECURE_ERROR_MESSAGES.VERIFICATION_FAILED,
          data?.error || 'Verification failed',
          'VERIFICATION_FAILED'
        );
      }

      // Safely normalize the status from the API response
      const normalizedStatus = normalizeVerificationStatus(data.result.status);

      const verificationResult: VerificationResult = {
        id: data.id,
        status: normalizedStatus,
        confidence: data.result.confidence,
        source: data.result.source,
        details: data.result.details,
        message: data.result.message,
        verified_at: new Date().toISOString()
      };

      setResult(verificationResult);

      // Audit logging (only if enabled)
      if (settings?.enableAuditLogging) {
        await logAuditEvent({
          action: AUDIT_ACTIONS.VERIFICATION_CREATED,
          tableName: 'verification_results',
          recordId: verificationResult.id,
          newValues: {
            serial_number: cleanSerialNumber,
            item_type: cleanItemType,
            status: normalizedStatus
          }
        });
      }

      // Show appropriate toast based on result
      const statusMessages = {
        safe: {
          title: "✅ Item appears safe",
          description: verificationResult.message || "No theft reports found",
          variant: "default" as const
        },
        stolen: {
          title: "🚨 Item reported stolen",
          description: verificationResult.message || "This item has been reported stolen",
          variant: "destructive" as const
        },
        lost: {
          title: "⚠️ Item reported lost",
          description: verificationResult.message || "This item has been reported lost",
          variant: "destructive" as const
        },
        unknown: {
          title: "❓ Status unknown",
          description: verificationResult.message || "Unable to determine item status",
          variant: "default" as const
        },
        error: {
          title: "❌ Verification error",
          description: verificationResult.message || "Unable to verify item",
          variant: "destructive" as const
        }
      };

      const statusMessage = statusMessages[verificationResult.status];
      toast({
        title: statusMessage.title,
        description: statusMessage.description,
        variant: statusMessage.variant
      });

      return verificationResult;

    } catch (error: any) {
      if (error.userMessage && settings?.enableSecureErrorHandling) {
        // This is already a SecureError
        handleSecureError(error, toast);
      } else {
        // Handle unexpected errors or when secure error handling is disabled
        const errorMessage = settings?.enableSecureErrorHandling 
          ? SECURE_ERROR_MESSAGES.VERIFICATION_FAILED
          : error.message || 'Verification failed';
          
        toast({
          title: "Verification failed",
          description: errorMessage,
          variant: "destructive"
        });

        if (settings?.logLevel === 'debug') {
          console.error('Verification error:', error);
        }
      }
      
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const getVerificationHistory = async (): Promise<VerificationResult[]> => {
    if (!user) return [];

    try {
      const { data, error } = await supabase
        .from('verification_results')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(50);

      if (error) {
        console.error('Error fetching verification history:', error);
        return [];
      }

      return data.map((item: any) => ({
        id: item.id,
        status: normalizeVerificationStatus(item.verification_status),
        confidence: item.confidence_score,
        source: item.api_source,
        details: item.api_response,
        message: `Verified via ${item.api_source}`,
        verified_at: item.verified_at
      }));

    } catch (error) {
      console.error('Error fetching verification history:', error);
      return [];
    }
  };

  return {
    verifyItem,
    getVerificationHistory,
    isLoading,
    result
  };
};
