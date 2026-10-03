/**
 * Victim reports, "My items", problem reports and admin review.
 * One server route; every write is authenticated here (bearer token) and the
 * owner is always taken from the verified session, never from the request.
 */
import { createFileRoute } from '@tanstack/react-router';
import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';

const ITEM_TYPES = ['phone', 'vehicle', 'plate', 'electronics', 'firearm', 'bicycle', 'boat', 'tool', 'other'] as const;

const reportSchema = z.object({
  itemType: z.enum(ITEM_TYPES),
  identifier: z.string().trim().min(3).max(50),
  brand: z.string().trim().max(80).optional().default(''),
  model: z.string().trim().max(80).optional().default(''),
  description: z.string().trim().max(1500).optional().default(''),
  dateStolen: z.string().trim().min(8).max(30),
  city: z.string().trim().min(1).max(80),
  state: z.string().trim().min(2).max(40),
  policeReportNumber: z.string().trim().max(60).optional().default(''),
  contactPref: z.enum(['email', 'none']).default('email'),
  photoPaths: z.array(z.string().max(300)).max(4).default([]),
  registeredItemId: z.string().uuid().optional(),
  termsAccepted: z.literal(true),
});

const registerSchema = z.object({
  itemType: z.enum(ITEM_TYPES),
  identifier: z.string().trim().min(3).max(50),
  brand: z.string().trim().max(80).optional().default(''),
  model: z.string().trim().max(80).optional().default(''),
  description: z.string().trim().max(1500).optional().default(''),
  photoPaths: z.array(z.string().max(300)).max(4).default([]),
  proofPath: z.string().max(300).nullable().optional(),
});

const normalize = (v: string) => v.trim().toUpperCase().replace(/[\s-]/g, '');

function imeiValid(d: string) {
  if (!/^\d{15}$/.test(d)) return false;
  let sum = 0;
  for (let i = 0; i < 15; i++) {
    let n = Number(d[i]);
    if (i % 2 === 1) { n *= 2; if (n > 9) n -= 9; }
    sum += n;
  }
  return sum % 10 === 0;
}

async function sha256Hex(v: string) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(v));
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, '0')).join('');
}

function columnsFor(itemType: string, id: string) {
  if (itemType === 'phone') return { imei: id, vin: null, serial_number: null };
  if (itemType === 'vehicle') return { vin: id, imei: null, serial_number: null };
  return { serial_number: id, imei: null, vin: null };
}

export const Route = createFileRoute('/reports-api')({
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

          const body = (await request.json().catch(() => null)) as { action?: string; data?: unknown } | null;
          const action = body?.action ?? '';
          const data = body?.data ?? {};

          const { supabaseAdmin: admin } = await import('@/integrations/supabase/client.server');

          // Public: report a problem with a report. Hides the report until reviewed.
          if (action === 'dispute') {
            const p = z.object({
              stolenItemId: z.string().uuid(),
              reason: z.string().trim().min(10).max(1500),
              contactEmail: z.string().trim().email().max(255).optional().or(z.literal('')),
            }).safeParse(data);
            if (!p.success) return json({ error: 'Please describe the problem (at least 10 characters).' }, 400);
            const { data: item } = await admin.from('stolen_items').select('id,status').eq('id', p.data.stolenItemId).maybeSingle();
            if (!item) return json({ error: 'Report not found' }, 404);
            await admin.from('report_disputes').insert({
              stolen_item_id: item.id, reason: p.data.reason, contact_email: p.data.contactEmail || null,
            });
            if (item.status === 'active' || item.status === 'reported') {
              await admin.from('stolen_items').update({
                status: 'pending_review', review_reason: 'Problem reported by a visitor', status_changed_at: new Date().toISOString(),
              }).eq('id', item.id);
            }
            return json({ ok: true });
          }

          // Everything else requires a signed-in account.
          const token = (request.headers.get('authorization') ?? '').replace(/^Bearer\s+/i, '').trim();
          if (!token || token.split('.').length !== 3) return json({ error: 'Sign in required', code: 'AUTH_REQUIRED' }, 401);
          const authClient = createClient(URL_, KEY, { auth: { persistSession: false, autoRefreshToken: false } });
          const { data: u } = await authClient.auth.getUser(token);
          const userId = u?.user?.id;
          if (!userId) return json({ error: 'Sign in required', code: 'AUTH_REQUIRED' }, 401);

          const ownPaths = (paths: string[]) => paths.every((p) => p.startsWith(`${userId}/`));

          if (action === 'report') {
            const p = reportSchema.safeParse(data);
            if (!p.success) return json({ error: 'Please fill in every required field and accept the terms.' }, 400);
            const r = p.data;
            if (!ownPaths(r.photoPaths)) return json({ error: 'Invalid photo' }, 400);
            const id = normalize(r.identifier);
            if (!/^[A-Z0-9]{3,50}$/.test(id)) return json({ error: 'The identifier can only contain letters and numbers.' }, 400);
            if (r.itemType === 'vehicle') {
              const { validateVin } = await import('@/lib/verification/vin');
              const v = validateVin(id);
              if (!v.valid) return json({ error: v.message }, 400);
            }
            if (r.itemType === 'phone' && !imeiValid(id)) {
              return json({ error: 'That IMEI is not valid. Dial *#06# on the phone or check the box to copy all 15 digits.' }, 400);
            }

            // Guardrails.
            const now = Date.now();
            const { data: mine } = await admin.from('stolen_items').select('id,created_at').eq('user_id', userId);
            const last30 = (mine ?? []).filter((m) => now - new Date(m.created_at).getTime() < 30 * 864e5).length;
            const last365 = (mine ?? []).filter((m) => now - new Date(m.created_at).getTime() < 365 * 864e5).length;
            const reasons: string[] = [];
            if (last30 >= 3 || last365 >= 10) reasons.push('Account report limit reached');

            const hash = await sha256Hex(id);
            const { data: proof } = await admin.from('proof_records').select('id').eq('identifier_hash', hash).is('deleted_at', null).limit(1);
            if (proof && proof.length) reasons.push('Identifier has a Proof of Clean Purchase record');

            const { data: others } = await admin
              .from('stolen_items').select('id,user_id')
              .or(`serial_number.eq.${id},imei.eq.${id},vin.eq.${id}`)
              .in('status', ['active', 'reported', 'pending_review']);
            if ((others ?? []).some((o) => o.user_id !== userId)) reasons.push('Another account already reported this identifier');

            const status = reasons.length ? 'pending_review' : 'active';
            const { data: inserted, error } = await admin.from('stolen_items').insert({
              user_id: userId,
              item_type: r.itemType,
              ...columnsFor(r.itemType, id),
              brand: r.brand || null,
              model: r.model || null,
              description: r.description || null,
              date_stolen: new Date(r.dateStolen).toISOString(),
              location: `${r.city}, ${r.state}`,
              city: r.city,
              state: r.state,
              police_report_number: r.policeReportNumber || null,
              police_report_provided: !!r.policeReportNumber,
              contact_pref: r.contactPref,
              photo_paths: r.photoPaths,
              registered_item_id: r.registeredItemId ?? null,
              terms_accepted_at: new Date().toISOString(),
              status,
              review_reason: reasons.join('; ') || null,
              status_changed_at: new Date().toISOString(),
            }).select('id,status').single();
            if (error) { console.error('[reports-api] insert', error); return json({ error: 'Could not save the report. Please try again.' }, 500); }
            return json({ ok: true, id: inserted.id, status: inserted.status, itemType: r.itemType });
          }

          if (action === 'register') {
            const p = registerSchema.safeParse(data);
            if (!p.success) return json({ error: 'Please add the item type and identifier.' }, 400);
            const r = p.data;
            if (!ownPaths([...r.photoPaths, ...(r.proofPath ? [r.proofPath] : [])])) return json({ error: 'Invalid file' }, 400);
            const { count } = await admin.from('registered_items').select('id', { count: 'exact', head: true }).eq('user_id', userId);
            if ((count ?? 0) >= 100) return json({ error: 'You can register up to 100 items.' }, 400);
            const { error } = await admin.from('registered_items').insert({
              user_id: userId, item_type: r.itemType, identifier: normalize(r.identifier),
              brand: r.brand || null, model: r.model || null, description: r.description || null,
              photo_paths: r.photoPaths, proof_path: r.proofPath ?? null,
            });
            if (error) return json({ error: 'Could not save the item.' }, 500);
            return json({ ok: true });
          }

          if (action === 'deleteRegistered') {
            const p = z.object({ id: z.string().uuid() }).safeParse(data);
            if (!p.success) return json({ error: 'Bad request' }, 400);
            await admin.from('registered_items').delete().eq('id', p.data.id).eq('user_id', userId);
            return json({ ok: true });
          }

          if (action === 'listMine') {
            const [items, reports] = await Promise.all([
              admin.from('registered_items').select('*').eq('user_id', userId).order('created_at', { ascending: false }),
              admin.from('stolen_items')
                .select('id,item_type,brand,model,serial_number,imei,vin,status,created_at,date_stolen,city,state,police_report_provided,registered_item_id')
                .eq('user_id', userId).order('created_at', { ascending: false }),
            ]);
            return json({ items: items.data ?? [], reports: reports.data ?? [] });
          }

          if (action === 'setStatus') {
            const p = z.object({ id: z.string().uuid(), status: z.enum(['recovered', 'removed']) }).safeParse(data);
            if (!p.success) return json({ error: 'Bad request' }, 400);
            const { error } = await admin.from('stolen_items')
              .update({ status: p.data.status, status_changed_at: new Date().toISOString() })
              .eq('id', p.data.id).eq('user_id', userId);
            if (error) return json({ error: 'Could not update.' }, 500);
            return json({ ok: true });
          }

          // Admin actions — role verified server-side.
          if (action.startsWith('admin')) {
            const { data: roles } = await admin.from('user_roles').select('role').eq('user_id', userId).eq('role', 'admin');
            if (!roles?.length) return json({ error: 'Forbidden' }, 403);

            if (action === 'adminQueue') {
              const [queue, disputes, filed, registered, recovered, cleared] = await Promise.all([
                admin.from('stolen_items')
                  .select('id,item_type,brand,model,serial_number,imei,vin,status,review_reason,created_at,city,state,police_report_provided,description')
                  .eq('status', 'pending_review').order('created_at', { ascending: true }).limit(200),
                admin.from('report_disputes').select('*').eq('status', 'open').order('created_at', { ascending: true }).limit(200),
                admin.from('stolen_items').select('id', { count: 'exact', head: true }),
                admin.from('registered_items').select('id', { count: 'exact', head: true }),
                admin.from('stolen_items').select('id', { count: 'exact', head: true }).eq('status', 'recovered'),
                admin.from('stolen_items').select('id', { count: 'exact', head: true }).eq('status', 'cleared'),
              ]);
              return json({
                queue: queue.data ?? [],
                disputes: disputes.data ?? [],
                stats: { filed: filed.count ?? 0, registered: registered.count ?? 0, recovered: recovered.count ?? 0, cleared: cleared.count ?? 0 },
              });
            }

            if (action === 'adminDecide') {
              const p = z.object({
                id: z.string().uuid(), decision: z.enum(['approve', 'clear', 'needs_info']), note: z.string().max(1000).optional(),
              }).safeParse(data);
              if (!p.success) return json({ error: 'Bad request' }, 400);
              const next = p.data.decision === 'approve' ? 'active' : p.data.decision === 'clear' ? 'cleared' : 'pending_review';
              await admin.from('stolen_items').update({
                status: next, status_changed_at: new Date().toISOString(),
                ...(p.data.decision === 'needs_info' ? { review_reason: `Needs info: ${p.data.note ?? ''}` } : {}),
              }).eq('id', p.data.id);
              await admin.from('report_review_log').insert({ stolen_item_id: p.data.id, admin_id: userId, action: p.data.decision, note: p.data.note ?? null });
              if (p.data.decision !== 'needs_info') {
                await admin.from('report_disputes').update({ status: 'resolved', resolved_at: new Date().toISOString() })
                  .eq('stolen_item_id', p.data.id).eq('status', 'open');
              }
              return json({ ok: true });
            }
          }

          return json({ error: 'Unknown action' }, 400);
        } catch (e) {
          console.error('[reports-api]', e);
          return json({ error: 'Something went wrong. Please try again.' }, 500);
        }
      },
    },
  },
});
