
// Unified auth hook that redirects to the secure auth implementation
// This ensures consistency across the application and prevents provider conflicts

import { useSecureAuth, SecureAuthProvider } from './useSecureAuth';

// Export the unified auth system
export const useUnifiedAuth = useSecureAuth;
export const UnifiedAuthProvider = SecureAuthProvider;

// Re-export types for consistency
export type { AuthContextType } from '@/types/auth';
