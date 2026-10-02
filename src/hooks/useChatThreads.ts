import { useCallback, useEffect, useRef, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/lib/auth';
import type { ChatVerifyResult } from '@/components/verify-chat/ResultsPane';

export type Attachment = { kind: 'image'; dataUrl: string; name: string };

export type ChatMessage = {
 id: string;
 role: 'user' | 'assistant';
 content: string;
 attachment?: Attachment;
 result?: ChatVerifyResult;
 loading?: boolean;
 // suggested follow-up prompts the user can tap
 suggestions?: string[];
};

export type ChatThread = {
 id: string;
 title: string;
 createdAt: number;
 updatedAt: number;
 messages: ChatMessage[];
 results: ChatVerifyResult[];
};

const STORAGE_KEY = 'sos_chat_threads_v1';
const MAX_THREADS = 30;

const WELCOME: ChatMessage = {
 id: 'welcome',
 role: 'assistant',
 content:
 "Hi 👋 I'm the **SafeOrStolen AI**. Paste any **IMEI**, **VIN**, **serial number**, **license plate**, or **marketplace URL**, or upload a photo of the item.\n\nI check SafeOrStolen's own reports, public web results, and the right theft records for the item: law-enforcement stolen-gun and stolen-vehicle records, a national stolen-bicycle registry, and the lost and stolen phone blacklist. You'll get a downloadable report on the right.",
 suggestions: [
 'How do I find my phone IMEI?',
 'Where is the VIN on a car?',
 'Analyze a Facebook Marketplace listing',
 ],
};

export function newThread(): ChatThread {
 const id = `t_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
 return {
 id,
 title: 'New verification',
 createdAt: Date.now(),
 updatedAt: Date.now(),
 messages: [WELCOME],
 results: [],
 };
}

function load(): ChatThread[] {
 try {
 const raw = localStorage.getItem(STORAGE_KEY);
 if (!raw) return [];
 const parsed = JSON.parse(raw);
 if (!Array.isArray(parsed)) return [];
 return parsed;
 } catch {
 return [];
 }
}

function save(threads: ChatThread[]) {
 try {
 // strip image dataUrls to keep storage small
 const slim = threads.slice(0, MAX_THREADS).map((t) => ({
 ...t,
 messages: t.messages.map((m) => ({
 ...m,
 attachment: m.attachment
 ? { ...m.attachment, dataUrl: '' } // drop heavy data
 : undefined,
 loading: false,
 })),
 }));
 localStorage.setItem(STORAGE_KEY, JSON.stringify(slim));
 } catch {
 // quota exceeded — drop oldest
 try {
 const trimmed = threads.slice(0, 10);
 localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
 } catch {}
 }
}

function slimMessages(messages: ChatMessage[]): ChatMessage[] {
 return messages.map((m) => ({
 ...m,
 attachment: m.attachment ? { ...m.attachment, dataUrl: '' } : undefined,
 loading: false,
 }));
}

const isEmpty = (t: ChatThread) => t.results.length === 0 && t.messages.filter((m) => m.role === 'user').length === 0;

export function useChatThreads() {
 // Oct 2 2026: signed-in users' chats are saved to their account (chat_threads) so they follow them to any device.
 const { user } = useAuth();
 const userId = user?.id ?? null;
 const [cloudReady, setCloudReady] = useState(false);
 const syncedAt = useRef<Record<string, number>>({});
 const loadedFor = useRef<string | null>(null);
 const [threads, setThreads] = useState<ChatThread[]>(() => {
 const loaded = load();
 return loaded.length > 0 ? loaded : [newThread()];
 });
 const [activeId, setActiveId] = useState<string>(() => {
 const loaded = load();
 return (loaded[0]?.id) || threads[0]?.id;
 });

 useEffect(() => {
 save(threads);
 }, [threads]);

 // Load this user's saved chats once, and merge with what's on this device.
 useEffect(() => {
 if (!userId) { setCloudReady(false); loadedFor.current = null; return; }
 if (loadedFor.current === userId) return;
 loadedFor.current = userId;
 let cancelled = false;
 (async () => {
 const { data, error } = await (supabase as any)
 .from('chat_threads')
 .select('id,title,messages,results,created_at,updated_at')
 .order('updated_at', { ascending: false })
 .limit(MAX_THREADS);
 if (cancelled) return;
 if (!error && Array.isArray(data)) {
 const cloud: ChatThread[] = data.map((r: any) => ({
 id: r.id, title: r.title, messages: r.messages ?? [], results: r.results ?? [],
 createdAt: Date.parse(r.created_at), updatedAt: Date.parse(r.updated_at),
 }));
 cloud.forEach((t) => { syncedAt.current[t.id] = t.updatedAt; });
 setThreads((prev) => {
 const map = new Map<string, ChatThread>();
 cloud.forEach((t) => map.set(t.id, t));
 prev.forEach((t) => { const c = map.get(t.id); if (!c || t.updatedAt > c.updatedAt) map.set(t.id, t); });
 const merged = [...map.values()].sort((a, b) => b.updatedAt - a.updatedAt);
 // keep at most one empty "new" chat
 let keptEmpty = false;
 const cleaned = merged.filter((t) => { if (!isEmpty(t)) return true; if (keptEmpty) return false; keptEmpty = true; return true; });
 return cleaned.slice(0, MAX_THREADS);
 });
 }
 setCloudReady(true);
 })();
 return () => { cancelled = true; };
 }, [userId]);

 // Save changed chats to the account (a moment after the last change).
 useEffect(() => {
 if (!userId || !cloudReady) return;
 const handle = setTimeout(async () => {
 const dirty = threads.filter((t) => !isEmpty(t) && (syncedAt.current[t.id] ?? 0) < t.updatedAt);
 if (!dirty.length) return;
 const rows = dirty.map((t) => ({
 user_id: userId, id: t.id, title: t.title, messages: slimMessages(t.messages), results: t.results,
 created_at: new Date(t.createdAt).toISOString(), updated_at: new Date(t.updatedAt).toISOString(),
 }));
 const { error } = await (supabase as any).from('chat_threads').upsert(rows, { onConflict: 'user_id,id' });
 if (!error) dirty.forEach((t) => { syncedAt.current[t.id] = t.updatedAt; });
 }, 1500);
 return () => clearTimeout(handle);
 }, [threads, userId, cloudReady]);

 const active = threads.find((t) => t.id === activeId) || threads[0];

 const createThread = useCallback(() => {
 const t = newThread();
 setThreads((prev) => [t, ...prev].slice(0, MAX_THREADS));
 setActiveId(t.id);
 return t.id;
 }, []);

 const deleteThread = useCallback((id: string) => {
 if (userId) { (supabase as any).from('chat_threads').delete().eq('id', id).then(() => {}); delete syncedAt.current[id]; }
 setThreads((prev) => {
 const next = prev.filter((t) => t.id !== id);
 if (next.length === 0) {
 const t = newThread();
 setActiveId(t.id);
 return [t];
 }
 if (id === activeId) setActiveId(next[0].id);
 return next;
 });
 }, [activeId, userId]);

 const renameThread = useCallback((id: string, title: string) => {
 setThreads((prev) =>
 prev.map((t) => (t.id === id ? { ...t, title: title.slice(0, 60), updatedAt: Date.now() } : t)),
 );
 }, []);

 const updateActive = useCallback(
 (updater: (t: ChatThread) => ChatThread) => {
 setThreads((prev) =>
 prev.map((t) => (t.id === activeId ? { ...updater(t), updatedAt: Date.now() } : t)),
 );
 },
 [activeId],
 );

 const setMessages = useCallback(
 (updater: (msgs: ChatMessage[]) => ChatMessage[]) => {
 updateActive((t) => ({ ...t, messages: updater(t.messages) }));
 },
 [updateActive],
 );

 const addResult = useCallback(
 (r: ChatVerifyResult) => {
 updateActive((t) => ({
 ...t,
 results: [r, ...t.results.filter((p) => p.identifier !== r.identifier)].slice(0, 20),
 // auto-title the thread from the first real check
 title:
 t.title === 'New verification'
 ? `${r.itemType.toUpperCase()} · ${r.identifier.slice(0, 14)}`
 : t.title,
 }));
 },
 [updateActive],
 );

 return {
 threads,
 active,
 activeId,
 setActiveId,
 createThread,
 deleteThread,
 renameThread,
 setMessages,
 addResult,
 };
}
