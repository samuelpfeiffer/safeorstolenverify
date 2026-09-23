import { useCallback, useEffect, useState } from 'react';
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
 "Hi 👋 I'm the **SafeOrStolen AI**. Paste any **IMEI**, **VIN**, **serial number**, **license plate**, or **marketplace URL** — or upload a photo of the item.\n\nI'll check multiple sources including SafeOrStolen's reports, public web results, and AI analysis. For bikes, I check BikeIndex, and for firearms, HotGunz. I also perform an IMEI device lookup for phones to retrieve model and details. I'll provide a downloadable report on the right.",
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

export function useChatThreads() {
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

 const active = threads.find((t) => t.id === activeId) || threads[0];

 const createThread = useCallback(() => {
 const t = newThread();
 setThreads((prev) => [t, ...prev].slice(0, MAX_THREADS));
 setActiveId(t.id);
 return t.id;
 }, []);

 const deleteThread = useCallback((id: string) => {
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
 }, [activeId]);

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
