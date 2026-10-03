import { supabase } from '@/integrations/supabase/client';

/** Calls the /reports-api server route with the signed-in user's token. */
export async function reportsApi<T = any>(action: string, data: unknown = {}): Promise<T> {
  const { data: s } = await supabase.auth.getSession();
  const token = s.session?.access_token;
  const res = await fetch('/reports-api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({ action, data }),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(body?.error || 'Something went wrong. Please try again.');
  return body as T;
}

/** Upload a file into the user's private folder. Returns the storage path. */
export async function uploadPrivateFile(userId: string, file: File, kind: 'photo' | 'proof'): Promise<string> {
  const ext = (file.name.split('.').pop() || 'jpg').toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 5);
  const path = `${userId}/${kind}-${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage.from('item-photos').upload(path, file, { upsert: false });
  if (error) throw new Error('Upload failed. Photos must be under 8 MB.');
  return path;
}
