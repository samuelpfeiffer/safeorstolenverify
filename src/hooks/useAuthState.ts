// Legacy hook shim: returns static safe values to avoid invalid hook calls
// Prefer using useUnifiedAuth from './useUnifiedAuth'
export const useAuthState = () => {
  return {
    user: null,
    session: null,
    loading: false,
    error: null as string | null,
  };
};
