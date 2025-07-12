
// Unified auth hook that redirects to the secure auth implementation
// This ensures consistency across the application and prevents provider conflicts

import { useSecureAuth, SecureAuthProvider } from './useSecureAuth';

export const useUnifiedAuth = useSecureAuth;
export const UnifiedAuthProvider = SecureAuthProvider;
