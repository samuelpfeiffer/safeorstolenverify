/**
 * Verification certificates (Oct 5 2026).
 *
 * Issues a certificate from a check that SafeOrStolen actually ran and saved
 * (verification_searches), so the result and the records searched always come
 * from the server, never from the browser. Monthly members get it free; everyone
 * else pays $1.99 through create-checkout, and stripe-webhook marks it paid.
 */
import { createFileRoute } from '@tanstack/react-router';
import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';

const MAX_AGE_DAYS = 30;

const SOURCE_LABELS: Record<string, string> = {
  'SafeOrStolen Database': 'SafeOrStolen theft reports',
  BikeIndex: 'National stolen-bicycle registry',
  IMEI_Verification: 'Phone IMEI records',
  Vehicle_Verification: 'Vehicle records (VIN decode; Arizona TheftAZ for Arizona plates and VINs)',
  Firearm_Verification: 'Ohio law-enforcement stolen-gun records',
  Police_Theft_Records: 'Police firearm theft and loss reports (34 states)',
  Web_Scraper: 'Public web search',
};

// Steps the buyer confirms in the vehicle Buyer's Check; only these exact lines are accepted.
const BUYER_STEPS = [
  'Checked by buyer: door-jamb sticker VIN matches the dashboard VIN',
  'Checked by buyer: VIN on the title matches the vehicle',
  "Checked by buyer: name on the title matches the seller's photo ID",
] as const;

const normalize = (v: string) => v.trim().toUpperCase().replace(/[\s-]/g, '');

async function sha256Hex(v: string) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(v));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, '0')).join('');
}

function categoryFor(itemType: string): string {
  const t = (itemType || '').toLowerCase();
  if (t.includes('imei') || t.includes('phone') || t.includes('tablet')) return 'phone';
  if (t.includes('plate')) return 'plate';
  if (t.includes('vin') || t.includes('vehicle') || t.includes('car') || t.includes('motorcycle')) return 'vehicle';
  if (t.includes('gun') || t.includes('firearm')) return 'firearm';
  if (t.includes('bike') || t.includes('bicycle')) return 'bike';
  return 'serial';
}

function resultFor(status: unknown): 'clean' | 'flagged' | 'no_report' {
  if (status === 'safe') return 'clean';
  if (status === 'stolen' || status === 'lost') return 'flagged';
  return 'no_report';
}

export const Route = createFileRoute('/certificate-api')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const json = (body: unknown, status = 200) =>
          new Response(JSON.stringify(body), {
            status,
            headers: { 'Content-Type': 'application/json', 'Cache-Control': 'private, no-store' },
          });
        try {
          const URL_ = process.env['SUPABASE_URL'];
          const KEY = process.env['SUPABASE_PUBLISHABLE_KEY'];
          if (!URL_ || !KEY) return json({ error: 'Server not configured' }, 500);

          const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
          const p = z.object({
            checkId: z.string().uuid(),
            fingerprint: z.string().max(100).optional().nullable(),
            buyerSteps: z.array(z.enum(BUYER_STEPS)).max(3).optional(),
          }).safeParse(body ?? {});
          if (!p.success) return json({ error: 'Run a check first, then request a certificate.' }, 400);

          // Optional sign-in: guests prove the check is theirs with the browser fingerprint.
          let userId: string | null = null;
          const token = (request.headers.get('authorization') ?? '').replace(/^Bearer\s+/i, '').trim();
          if (token && token.split('.').length === 3) {
            const authClient = createClient(URL_, KEY, { auth: { persistSession: false, autoRefreshToken: false } });
            const { data: u } = await authClient.auth.getUser(token);
            userId = u?.user?.id ?? null;
          }

          const { supabaseAdmin: admin } = await import('@/integrations/supabase/client.server');

          const { data: search } = await admin
            .from('verification_searches')
            .select('id, user_id, fingerprint, serial_number, item_type, result, created_at')
            .eq('id', p.data.checkId)
            .maybeSingle();
          if (!search) return json({ error: 'That check was not found.' }, 404);

          const owns = userId
            ? search.user_id === userId || (!search.user_id && !!p.data.fingerprint && search.fingerprint === p.data.fingerprint)
            : !search.user_id && !!p.data.fingerprint && search.fingerprint === p.data.fingerprint;
          if (!owns) return json({ error: 'You can only get a certificate for your own check.' }, 403);
          if (Date.now() - new Date(search.created_at).getTime() > MAX_AGE_DAYS * 864e5) {
            return json({ error: `Certificates are available for ${MAX_AGE_DAYS} days after a check.` }, 400);
          }

          // One certificate per check.
          const { data: existing } = await admin
            .from('proof_records').select('id, paid_at').eq('source_search_id', search.id).maybeSingle();
          let proof = existing as { id: string; paid_at: string | null } | null;

          if (!proof) {
            const res = (search.result ?? {}) as { status?: string; providers?: { provider: string; status: string }[] };
            const databases = Array.from(new Set(
              (res.providers ?? [])
                .filter((x) => x.status !== 'error' && SOURCE_LABELS[x.provider])
                .map((x) => SOURCE_LABELS[x.provider]),
            ));
            const id = normalize(String(search.serial_number ?? ''));
            const category = categoryFor(String(search.item_type ?? ''));
            if (category === 'vehicle' && p.data.buyerSteps?.length) databases.push(...p.data.buyerSteps);
            const { data: inserted, error } = await admin.from('proof_records').insert({
              user_id: userId,
              check_id: search.id,
              source_search_id: search.id,
              category,
              identifier_hash: await sha256Hex(id),
              identifier_masked: `...${id.slice(-4)}`,
              result: resultFor(res.status),
              databases_queried: databases,
            }).select('id, paid_at').single();
            if (error || !inserted) {
              console.error('[certificate-api] insert', error);
              return json({ error: 'Could not create the certificate. Please try again.' }, 500);
            }
            proof = inserted as { id: string; paid_at: string | null };
          }

          // Monthly members: certificates are included in the plan.
          if (!proof.paid_at && userId) {
            const now = new Date().toISOString();
            const [{ data: subs }, { data: profile }] = await Promise.all([
              admin.from('subscriptions').select('plan, period_end').eq('user_id', userId).eq('status', 'active'),
              admin.from('profiles').select('subscription_tier, subscription_end').eq('id', userId).maybeSingle(),
            ]);
            const monthlyRow = (subs ?? []).some((s: any) => s.plan !== 'single' && (!s.period_end || s.period_end > now));
            const monthlyProfile = !!profile?.subscription_tier
              && ['unlimited', 'starter', 'personal', 'professional', 'enterprise'].includes(profile.subscription_tier)
              && (!profile.subscription_end || profile.subscription_end > now);
            if (monthlyRow || monthlyProfile) {
              await admin.from('proof_records').update({ paid_at: now }).eq('id', proof.id).is('paid_at', null);
              proof = { ...proof, paid_at: now };
            }
          }

          return json({ id: proof.id, paid: !!proof.paid_at, price: 1.99 });
        } catch (e) {
          console.error('[certificate-api]', e);
          return json({ error: 'Something went wrong. Please try again.' }, 500);
        }
      },
    },
  },
});
