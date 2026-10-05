import { supabase } from '@/integrations/supabase/client';
import {
  ANON_PROOF_IDS_KEY,
  type ProofCategory,
  type ProofResult,
} from './constants';

export interface PublicProofRecord {
  id: string;
  created_at: string;
  category: ProofCategory;
  identifier_masked: string;
  result: ProofResult;
  databases_queried: string[];
  record_hash: string;
  deleted_at: string | null;
  /** When the certificate was paid for (or issued free to a member); null = not issued yet. */
  paid_at?: string | null;
}

export interface ProofRecordSummary {
  id: string;
  created_at: string;
  category: ProofCategory;
  identifier_masked: string;
  result: ProofResult;
  deleted_at: string | null;
}

/** SHA-256 hex digest using the Web Crypto API. */
export async function sha256Hex(value: string): Promise<string> {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

/** Display-only masked identifier, e.g. "...4821". Never store the raw value. */
export function maskIdentifier(raw: string): string {
  const clean = (raw || '').replace(/\s+/g, '').toUpperCase();
  if (!clean) return '...';
  return `...${clean.slice(-4)}`;
}

/** Map any internal item type onto one of the six supported proof categories. */
export function toProofCategory(itemType?: string | null): ProofCategory {
  const t = (itemType || '').toLowerCase();
  if (t.includes('imei') || t.includes('phone') || t.includes('android') || t.includes('device'))
    return 'phone';
  if (t.includes('plate')) return 'plate';
  if (t.includes('vin') || t.includes('car') || t.includes('vehicle') || t.includes('truck'))
    return 'vehicle';
  if (t.includes('gun') || t.includes('firearm')) return 'firearm';
  if (t.includes('bike') || t.includes('bicycle')) return 'bike';
  return 'serial';
}

/** Map an internal verification status onto the two proof results. */
export function toProofResult(status?: string | null): ProofResult {
  const s = (status || '').toLowerCase();
  return s === 'safe' || s === 'clean' ? 'clean' : 'flagged';
}

function rememberAnonymousRecord(id: string) {
  try {
    const existing: string[] = JSON.parse(localStorage.getItem(ANON_PROOF_IDS_KEY) || '[]');
    if (!existing.includes(id)) {
      localStorage.setItem(ANON_PROOF_IDS_KEY, JSON.stringify([...existing, id]));
    }
  } catch {
    /* storage unavailable — anonymous claiming simply won't be offered */
  }
}

export function getAnonymousRecordIds(): string[] {
  try {
    const ids = JSON.parse(localStorage.getItem(ANON_PROOF_IDS_KEY) || '[]');
    return Array.isArray(ids) ? ids.filter((v) => typeof v === 'string') : [];
  } catch {
    return [];
  }
}

export function clearAnonymousRecordIds() {
  try {
    localStorage.removeItem(ANON_PROOF_IDS_KEY);
  } catch {
    /* noop */
  }
}

export interface CreateProofInput {
  rawIdentifier: string;
  category: ProofCategory;
  result: ProofResult;
  databasesQueried: string[];
  checkId?: string | null;
  email?: string | null;
  marketingOptIn?: boolean;
  userId?: string | null;
}

/**
 * Creates a proof record. The raw identifier is hashed client-side and never sent.
 *
 * record_hash is computed by the database trigger `proof_records_set_hash`.
 * Canonicalization (must be reproducible byte for byte to verify a record):
 *   SHA-256, hex lowercase, of a JSON object with keys in ASCII-sorted order —
 *   category, created_at, databases_queried, id, identifier_hash, result —
 *   serialized with no whitespace, created_at as the UTC instant formatted
 *   `YYYY-MM-DDTHH:MM:SSZ` (second precision), databases_queried as the compact
 *   JSON array in stored order.
 */
export async function createProofRecord(input: CreateProofInput): Promise<string> {
  const identifier_hash = await sha256Hex(input.rawIdentifier.trim().toUpperCase());

  const { data, error } = await supabase.rpc('create_proof_record', {
    p_category: input.category,
    p_identifier_hash: identifier_hash,
    p_identifier_masked: maskIdentifier(input.rawIdentifier),
    p_result: input.result,
    p_databases_queried: input.databasesQueried,
    p_check_id: input.checkId ?? undefined,
    p_email: input.email?.trim() || undefined,
    p_marketing_opt_in: input.marketingOptIn === true,
  });

  if (error) throw error;
  const id = data as unknown as string;
  if (!input.userId) rememberAnonymousRecord(id);
  return id;

}

export async function getPublicProofRecord(id: string): Promise<PublicProofRecord | null> {
  const { data, error } = await supabase.rpc('get_proof_record_public', { p_id: id });
  if (error) throw error;
  const row = Array.isArray(data) ? data[0] : data;
  if (!row) return null;
  return {
    id: row.id,
    created_at: row.created_at,
    category: row.category as ProofCategory,
    identifier_masked: row.identifier_masked,
    result: row.result as ProofResult,
    record_hash: row.record_hash,
    deleted_at: row.deleted_at ?? null,
    databases_queried: Array.isArray(row.databases_queried)
      ? (row.databases_queried as string[])
      : [],
    paid_at: await getProofPaidAt(row.id),
  };
}

/** Certificate payment status (null = not issued yet). */
export async function getProofPaidAt(id: string): Promise<string | null> {
  const { data } = await (supabase.rpc as any)('get_proof_record_paid', { p_id: id });
  return (data as string | null) ?? null;
}

export const PROOF_PAGE_SIZE = 25;

export async function listMyProofRecords(
  page: number
): Promise<{ rows: ProofRecordSummary[]; total: number }> {
  const from = page * PROOF_PAGE_SIZE;
  const { data, error, count } = await supabase
    .from('proof_records')
    .select('id, created_at, category, identifier_masked, result, deleted_at', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, from + PROOF_PAGE_SIZE - 1);
  if (error) throw error;
  return { rows: (data || []) as ProofRecordSummary[], total: count || 0 };
}

/** Soft delete — the only permitted update. The record stays viewable as deleted. */
export async function deleteProofRecord(id: string): Promise<void> {
  const { error } = await supabase
    .from('proof_records')
    .update({ deleted_at: new Date().toISOString() })
    .eq('id', id);
  if (error) throw error;
}

/** Attaches records created while signed out to the now signed-in account. */
export async function claimAnonymousRecords(ids: string[]): Promise<number> {
  let claimed = 0;
  for (const id of ids) {
    const { data, error } = await supabase.rpc('claim_proof_record', { p_id: id });
    if (!error && data === true) claimed += 1;
  }
  clearAnonymousRecordIds();
  return claimed;
}
