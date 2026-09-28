/**
 * Verification endpoint served by the app's own backend.
 *
 * An account is REQUIRED: a request without a valid signed-in user token is
 * refused with 401 AUTH_REQUIRED before any check runs. This replaces the
 * previous split between the separate gate and verification services.
 */

import { createFileRoute } from '@tanstack/react-router';
import { createClient } from '@supabase/supabase-js';

export const Route = createFileRoute('/verify-api')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const json = (body: unknown, status = 200) =>
          new Response(JSON.stringify(body), {
            status,
            headers: { 'Content-Type': 'application/json', 'Cache-Control': 'private, no-store' },
          });

        try {
          const SUPABASE_URL = process.env['SUPABASE_URL'];
          const SUPABASE_PUBLISHABLE_KEY = process.env['SUPABASE_PUBLISHABLE_KEY'];
          if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
            console.error('[verify-api] Supabase environment is not configured');
            return json({ error: 'Server not configured', code: 'CONFIG_ERROR' }, 500);
          }

          // 1. An account is required. The publishable key is not a session.
          const authHeader = request.headers.get('authorization') ?? '';
          const token = authHeader.replace(/^Bearer\s+/i, '').trim();
          const looksLikeUserToken =
            token.length > 0 &&
            token !== SUPABASE_PUBLISHABLE_KEY &&
            token.split('.').length === 3;

          if (!looksLikeUserToken) {
            return json(
              {
                error: 'Account required',
                code: 'AUTH_REQUIRED',
                message: 'Create a free account or sign in to run a verification.',
              },
              401,
            );
          }

          const authClient = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
            auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
          });
          const { data: userData } = await authClient.auth.getUser(token);
          const userId = userData?.user?.id ?? null;

          if (!userId) {
            return json(
              {
                error: 'Account required',
                code: 'AUTH_REQUIRED',
                message: 'Create a free account or sign in to run a verification.',
              },
              401,
            );
          }

          // 2. Validate input.
          const body = (await request.json().catch(() => null)) as
            | { identifier?: unknown; itemType?: unknown; fingerprint?: unknown }
            | null;
          const identifier = typeof body?.identifier === 'string' ? body.identifier.trim() : '';
          if (!identifier) {
            return json({ error: 'Identifier is required', code: 'INVALID_INPUT' }, 400);
          }

          const itemType = typeof body?.itemType === 'string' ? body.itemType : null;
          const fingerprint = typeof body?.fingerprint === 'string' ? body.fingerprint : null;

          // 3. Privileged work only after the caller is authenticated.
          const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
          const { checkUsageGate, runVerification } = await import(
            '@/lib/verification/engine.server'
          );

          // 2b. A mistyped VIN must never use up a check. Validate before the gate.
          const { toCanonicalItemType } = await import('@/lib/itemType');
          if (toCanonicalItemType(itemType ?? undefined) === 'vehicle') {
            const { validateVin } = await import('@/lib/verification/vin');
            const vinCheck = validateVin(identifier);
            if (!vinCheck.valid) {
              return json(
                { error: 'Invalid VIN', code: 'INVALID_INPUT', message: vinCheck.message },
                400,
              );
            }
          }

          const gate = await checkUsageGate(supabaseAdmin, userId, fingerprint);
          if (!gate.allowed) {
            return json(
              {
                error: 'Check limit reached',
                code: 'LIMIT_REACHED',
                reason: gate.reason,
                plan: gate.plan,
                checksUsed: gate.checksUsed ?? null,
                checksLimit: gate.checksLimit ?? null,
              },
              402,
            );
          }

          const result = await runVerification(
            supabaseAdmin,
            userId,
            { identifier, itemType, fingerprint },
            gate,
          );

          return json(result);
        } catch (error) {
          console.error('[verify-api] Internal error:', error);
          return json(
            {
              error: 'Verification failed',
              code: 'INTERNAL_ERROR',
              finalStatus: 'error',
              riskLevel: 'medium',
              message: 'Unable to complete verification. Please try again.',
              providers: [],
              checkedSources: [],
              timestamp: new Date().toISOString(),
            },
            500,
          );
        }
      },
    },
  },
});
