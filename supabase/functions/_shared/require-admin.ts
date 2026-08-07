import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

/**
 * Guards internal/admin-only edge functions.
 *
 * Allows:
 *  - callers presenting the project service-role key (internal cron / server jobs)
 *  - signed-in users whose account passes the `is_admin_user()` RPC
 *
 * Returns a Response to send back when the caller is NOT authorized,
 * or `null` when the request may proceed.
 */
export async function requireAdmin(
  req: Request,
  corsHeaders: Record<string, string>,
): Promise<Response | null> {
  const json = (body: unknown, status: number) =>
    new Response(JSON.stringify(body), {
      status,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  const authHeader = req.headers.get('authorization') ?? '';
  if (!authHeader.startsWith('Bearer ')) {
    return json({ error: 'Unauthorized' }, 401);
  }

  const token = authHeader.slice('Bearer '.length).trim();
  const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';
  if (serviceRoleKey && token === serviceRoleKey) {
    return null; // internal scheduled job
  }

  try {
    const authClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: authHeader } } },
    );

    const { data: user } = await authClient.auth.getUser();
    if (!user?.user) return json({ error: 'Unauthorized' }, 401);

    const { data: isAdmin, error } = await authClient.rpc('is_admin_user');
    if (error || !isAdmin) {
      return json({ error: 'Forbidden: admin access required' }, 403);
    }
    return null;
  } catch (_e) {
    return json({ error: 'Unauthorized' }, 401);
  }
}
