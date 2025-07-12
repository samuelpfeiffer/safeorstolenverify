import { useState, useCallback } from 'react';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';
import { useToast } from '@/hooks/use-toast';
import { verificationEngine, type VerificationRequest, type VerificationResult } from '../VerificationEngine';
import { logAuditEvent, AUDIT_ACTIONS } from '@/utils/auditLogging';
import { useSecuritySettings } from '@/hooks/useSecuritySettings';

export const useAdvancedVerification = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<VerificationResult | null>(null);
  const [history, setHistory] = useState<VerificationResult[]>([]);
  const { user } = useUnifiedAuth();
  const { toast } = useToast();
  const { settings } = useSecuritySettings();

  const verifyItem = useCallback(async (
    serialNumber: string,
    itemType?: string,
    metadata?: Record<string, any>
  ): Promise<VerificationResult | null> => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to verify items.",
        variant: "destructive"
      });
      return null;
    }

    setIsLoading(true);
    setResult(null);

    try {
      const request: VerificationRequest = {
        serialNumber,
        itemType,
        source: 'manual',
        metadata: {
          ...metadata,
          user_id: user.id,
          timestamp: new Date().toISOString()
        }
      };

      const verificationResult = await verificationEngine.verify(request);
      setResult(verificationResult);

      // Show appropriate toast based on risk level
      const toastConfig = {
        critical: {
          title: "🚨 CRITICAL ALERT",
          description: "This item has been reported stolen. Do not proceed with purchase.",
          variant: "destructive" as const
        },
        high: {
          title: "⚠️ HIGH RISK",
          description: "This item has been reported lost. Exercise extreme caution.",
          variant: "destructive" as const
        },
        medium: {
          title: "⚠️ MODERATE RISK",
          description: "Unable to verify item status. Proceed with caution.",
          variant: "default" as const
        },
        low: {
          title: "✅ LOW RISK",
          description: "No theft reports found. Item appears legitimate.",
          variant: "default" as const
        }
      };

      const config = toastConfig[verificationResult.risk_level];
      toast({
        title: config.title,
        description: config.description,
        variant: config.variant
      });

      // Audit logging
      if (settings?.enableAuditLogging) {
        await logAuditEvent({
          action: AUDIT_ACTIONS.VERIFICATION_CREATED,
          tableName: 'verification_results',
          recordId: verificationResult.id,
          newValues: {
            serial_number: serialNumber,
            item_type: itemType,
            status: verificationResult.status,
            risk_level: verificationResult.risk_level
          }
        });
      }

      return verificationResult;

    } catch (error: any) {
      console.error('Advanced verification error:', error);
      toast({
        title: "Verification failed",
        description: error.message || "Unable to verify item. Please try again.",
        variant: "destructive"
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [user, toast, settings]);

  const loadHistory = useCallback(async (limit?: number) => {
    if (!user) return;

    try {
      const historyResults = await verificationEngine.getVerificationHistory(user.id, limit);
      setHistory(historyResults);
    } catch (error) {
      console.error('Error loading verification history:', error);
    }
  }, [user]);

  const clearCache = useCallback(() => {
    verificationEngine.clearCache();
    toast({
      title: "Cache cleared",
      description: "Verification cache has been cleared successfully.",
    });
  }, [toast]);

  return {
    verifyItem,
    loadHistory,
    clearCache,
    isLoading,
    result,
    history
  };
};