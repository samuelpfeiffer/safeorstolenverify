import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

export interface AuthResult {
  user: any;
  error?: string;
  isAdmin: boolean;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

/**
 * Verifies user authentication from request headers
 * Returns user info if authenticated, error otherwise
 */
export const requireAuth = async (req: Request): Promise<AuthResult> => {
  const supabaseUrl = Deno.env.get('SUPABASE_URL');
  const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

  if (!supabaseUrl || !supabaseServiceKey) {
    console.error('[Auth] Missing Supabase configuration');
    return { user: null, error: 'Server configuration error', isAdmin: false };
  }

  const supabaseClient = createClient(supabaseUrl, supabaseServiceKey);

  const authHeader = req.headers.get('Authorization');
  if (!authHeader) {
    console.warn('[Auth] No authorization header provided');
    return { user: null, error: 'Authentication required', isAdmin: false };
  }

  const jwt = authHeader.replace('Bearer ', '');
  
  try {
    const { data: { user }, error: userError } = await supabaseClient.auth.getUser(jwt);

    if (userError || !user) {
      console.warn('[Auth] Invalid JWT:', userError?.message);
      return { user: null, error: 'Invalid authentication token', isAdmin: false };
    }

    // Check if user is admin using the user_roles table
    const { data: roles, error: rolesError } = await supabaseClient
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id)
      .single();

    if (rolesError && rolesError.code !== 'PGRST116') {
      // PGRST116 = no rows returned, which is fine (user has no special role)
      console.warn('[Auth] Error checking roles:', rolesError.message);
    }

    const isAdmin = roles?.role === 'admin';

    console.log(`[Auth] User authenticated: ${user.id}, isAdmin: ${isAdmin}`);
    return { user, isAdmin };
  } catch (error) {
    console.error('[Auth] Unexpected error:', error);
    return { user: null, error: 'Authentication failed', isAdmin: false };
  }
};

/**
 * Requires admin role for access
 * Returns error if user is not an admin
 */
export const requireAdmin = async (req: Request): Promise<AuthResult> => {
  const result = await requireAuth(req);
  
  if (result.error) {
    return result;
  }

  if (!result.isAdmin) {
    console.warn(`[Auth] Non-admin user attempted admin action: ${result.user?.id}`);
    return { user: null, error: 'Admin access required', isAdmin: false };
  }

  return result;
};

/**
 * Creates an unauthorized response with CORS headers
 */
export const unauthorizedResponse = (error: string, statusCode: number = 401): Response => {
  return new Response(
    JSON.stringify({ 
      success: false, 
      error 
    }),
    { 
      status: statusCode, 
      headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
    }
  );
};

/**
 * Creates a forbidden response with CORS headers (for admin-only endpoints)
 */
export const forbiddenResponse = (error: string = 'Admin access required'): Response => {
  return new Response(
    JSON.stringify({ 
      success: false, 
      error 
    }),
    { 
      status: 403, 
      headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
    }
  );
};
