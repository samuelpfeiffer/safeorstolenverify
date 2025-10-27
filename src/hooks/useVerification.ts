/**
 * Unified Verification Hook
 * Wrapper around useAdvancedVerification for consistent API
 */

import { useAdvancedVerification } from '@/verification/hooks/useAdvancedVerification';
import { detectItemType } from '@/utils/itemTypeDetector';

export const useVerification = () => {
  const {
    verifyItem: advancedVerify,
    loadHistory,
    clearCache,
    isLoading,
    result,
    history
  } = useAdvancedVerification();

  const verifyItem = async (
    serialNumber: string,
    itemType?: string,
    metadata?: Record<string, any>
  ) => {
    const detectedType = itemType || detectItemType(serialNumber);
    return advancedVerify(serialNumber, detectedType, metadata);
  };

  return {
    verifyItem,
    loadHistory,
    clearCache,
    isLoading,
    result,
    history
  };
};
