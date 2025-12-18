/**
 * Hooks Index
 * Central export point for all custom hooks
 */

// Auth Hooks
export * from './useUnifiedAuth';
export * from './useAuthDebug';
export * from './useAuthPageLogic';
export * from './useFallbackAuthState';
export * from './useFormValidation';

// Subscription & Payment Hooks
export * from './use-stripe';
export * from './useSubscription';
export * from './useEnhancedSubscription';
export * from './useOptimizedSubscription';
export * from './useOneTimePayment';
export * from './useFreemiumFlow';

// Search & Verification Hooks
export * from './useSearchLimits';
export * from './useRealVerification';
export * from './useVerification';
export * from './useSearchFormLogic';
export * from './usePendingVerification';
export * from './useSearchHistory';
// export * from './useReceiptGenerator'; // Removed - receipts table dropped

// Security Hooks
export * from './useSecureProfileOperations';
export * from './useSecureVerificationOperations';

// Blog & Content Hooks
export * from './useBlogPosts';

// System Hooks
// export * from './useSystemConfiguration'; // Removed - system_configuration table dropped
export * from './useTermsAcceptance';
export * from './usePromotion';
export * from './useComponentLifecycle';
export * from './useRequestManager';
export * from './useMarketingAutomation';

// AI Integration Hooks
export * from './useAIIntegration';

// UI Hooks
export * from './use-mobile';
// NOTE: use-toast is NOT exported here to prevent circular dependencies
// Import directly: import { useToast } from '@/hooks/use-toast';
