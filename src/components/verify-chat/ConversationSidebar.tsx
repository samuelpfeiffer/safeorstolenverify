import React, { useEffect, useMemo, useState } from 'react';
import {
  Plus, MessageSquare, Trash2, Pencil, Check, X, ShieldCheck, Search,
  FileCheck2, Award, LogOut, CreditCard, LogIn, Smartphone,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { ChatThread } from '@/hooks/useChatThreads';
import { useAuth } from '@/lib/auth';
import { supabase } from '@/integrations/supabase/client';

/**
 * Oct 2 2026: the new SafeOrStolen dashboard column (Claude.ai style).
 * Tabs: Chats | Results | Certificates, one search box for all three,
 * and the person's name, plan, and phone searches left at the bottom.
 */

interface Props {
  threads: ChatThread[];
  activeId: string;
  onSelect: (id: string) => void;
  onNew: () => void;
  onDelete: (id: string) => void;
  onRename: (id: string, title: string) => void;
  onClose?: () => void;
}

type Tab = 'chats' | 'results' | 'certificates';

type SavedResult = {
  id: string;
  identifier: string;
  itemType: string;
  status: string;
  createdAt: string;
  shareToken: string | null;
};

type Certificate = {
  id: string;
  identifier: string;
  identifierType: string | null;
  verdict: string | null;
  createdAt: string;
  shareToken: string | null;
  pdfUrl: string | null;
};

type PlanSummary = {
  plan: 'guest' | 'free' | 'single' | 'unlimited';
  phone_cap?: number | null;
  phone_left?: number | null;
  phone_unlimited?: boolean;
};

const statusDot = (status: string) => {
  const s = (status || '').toLowerCase();
  if (s === 'stolen' || s === 'lost') return 'bg-red-500';
  if (s === 'safe') return 'bg-emerald-500';
  return 'bg-amber-400';
};

const statusWord = (status: string) => {
  const s = (status || '').toLowerCase();
  if (s === 'stolen') return 'Reported stolen';
  if (s === 'lost') return 'Reported lost';
  if (s === 'safe') return 'No reports found';
  return 'Check details';
};

const shortDate = (iso: string) => {
  const d = new Date(iso);
  return isNaN(d.getTime()) ? '' : d.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
};

export const ConversationSidebar: React.FC<Props> = ({
  threads, activeId, onSelect, onNew, onDelete, onRename, onClose,
}) => {
  const { user, signOut } = useAuth();
  const [tab, setTab] = useState<Tab>('chats');
  const [query, setQuery] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState('');
  const [results, setResults] = useState<SavedResult[]>([]);
  const [certs, setCerts] = useState<Certificate[]>([]);
  const [plan, setPlan] = useState<PlanSummary | null>(null);

  const displayName =
    (user as any)?.fullName || (user as any)?.user_metadata?.full_name || (user as any)?.user_metadata?.name || user?.email || 'Guest';
  const initial = String(displayName).trim().charAt(0).toUpperCase() || 'G';
  const resultCount = threads.reduce((n, t) => n + t.results.length, 0);

  // Load saved results, certificates, and plan for signed-in users.
  useEffect(() => {
    if (!user) { setResults([]); setCerts([]); setPlan({ plan: 'guest' }); return; }
    let cancelled = false;
    (async () => {
      const [r, c, p] = await Promise.all([
        (supabase as any).from('verification_searches')
          .select('id, serial_number, item_type, result, share_token, created_at')
          .eq('user_id', user.id).order('created_at', { ascending: false }).limit(100),
        (supabase as any).from('certificates')
          .select('id, identifier, identifier_type, verdict, share_token, pdf_url, created_at')
          .eq('user_id', user.id).order('created_at', { ascending: false }).limit(100),
        (supabase as any).rpc('get_my_plan_summary'),
      ]);
      if (cancelled) return;
      setResults((r.data || []).map((x: any) => ({
        id: x.id, identifier: x.serial_number, itemType: x.item_type || 'item',
        status: x.result?.status || 'unknown', createdAt: x.created_at, shareToken: x.share_token,
      })));
      setCerts((c.data || []).map((x: any) => ({
        id: x.id, identifier: x.identifier, identifierType: x.identifier_type, verdict: x.verdict,
        createdAt: x.created_at, shareToken: x.share_token, pdfUrl: x.pdf_url,
      })));
      setPlan((p.data as PlanSummary) || { plan: 'free' });
    })();
    return () => { cancelled = true; };
    // refresh when a new check finishes in this session
  }, [user, resultCount]);

  const q = query.trim().toLowerCase();
  const filteredThreads = useMemo(() => !q ? threads : threads.filter((t) =>
    t.title.toLowerCase().includes(q) ||
    t.results.some((r) => r.identifier.toLowerCase().includes(q) || r.itemType.toLowerCase().includes(q)) ||
    t.messages.some((m) => m.role === 'user' && m.content.toLowerCase().includes(q))), [threads, q]);
  const filteredResults = useMemo(() => !q ? results : results.filter((r) =>
    r.identifier.toLowerCase().includes(q) || r.itemType.toLowerCase().includes(q) || statusWord(r.status).toLowerCase().includes(q)), [results, q]);
  const filteredCerts = useMemo(() => !q ? certs : certs.filter((c) =>
    c.identifier.toLowerCase().includes(q) || (c.identifierType || '').toLowerCase().includes(q)), [certs, q]);

  const startEdit = (t: ChatThread) => { setEditingId(t.id); setDraft(t.title); };
  const commitEdit = () => { if (editingId && draft.trim()) onRename(editingId, draft.trim()); setEditingId(null); };

  const openResult = (r: SavedResult) => { if (r.shareToken) window.location.href = `/verification/shared/${r.shareToken}`; };
  const openCert = (c: Certificate) => {
    if (c.pdfUrl) window.open(c.pdfUrl, '_blank');
    else if (c.shareToken) window.location.href = `/verification/shared/${c.shareToken}`;
  };

  const planLine = (() => {
    if (!plan || plan.plan === 'guest') return 'Not signed in';
    if (plan.plan === 'unlimited') return '$10/mo plan';
    if (plan.plan === 'single') return 'Single check';
    return 'Free plan';
  })();
  const phoneLine = plan?.plan === 'unlimited'
    ? (plan.phone_unlimited ? 'Unlimited phone searches' : `${plan.phone_left ?? 0} of ${plan.phone_cap ?? 20} phone searches left`)
    : null;

  const TabBtn = ({ id, label, count }: { id: Tab; label: string; count?: number }) => (
    <button
      onClick={() => setTab(id)}
      className={cn('flex-1 text-[11px] font-semibold py-1.5 rounded-md transition-colors',
        tab === id ? 'bg-primary/15 text-foreground' : 'text-muted-foreground hover:text-foreground')}
    >
      {label}{typeof count === 'number' && count > 0 ? ` (${count})` : ''}
    </button>
  );

  return (
    <div className="h-full flex flex-col bg-card/40 border-r border-border/60">
      {/* Header */}
      <div className="px-3 py-3 border-b border-border/60 flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
          <ShieldCheck className="w-4 h-4 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs font-bold text-foreground leading-tight">SafeOrStolen</div>
          <div className="text-[10px] text-muted-foreground leading-tight">Your dashboard</div>
        </div>
        {onClose && (
          <button onClick={onClose} className="lg:hidden p-1.5 text-muted-foreground hover:text-foreground" aria-label="Close sidebar">
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* New check + search + tabs */}
      <div className="p-2 space-y-2">
        <Button onClick={onNew} variant="outline"
          className="w-full justify-start gap-2 h-9 text-sm border-border/60 hover:border-primary/50 hover:bg-primary/5">
          <Plus className="w-4 h-4" />
          New check
        </Button>
        <div className="relative">
          <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search chats, results, certificates"
            aria-label="Search"
            className="w-full h-8 pl-8 pr-7 rounded-md bg-background border border-border/60 text-xs focus:outline-none focus:border-primary/50"
          />
          {query && (
            <button onClick={() => setQuery('')} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground" aria-label="Clear search">
              <X className="w-3 h-3" />
            </button>
          )}
        </div>
        <div className="flex gap-1 p-0.5 rounded-lg bg-muted/40">
          <TabBtn id="chats" label="Chats" />
          <TabBtn id="results" label="Results" count={user ? results.length : undefined} />
          <TabBtn id="certificates" label="Certificates" count={user ? certs.length : undefined} />
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto px-2 pb-2">
        {tab === 'chats' && (
          <div className="space-y-0.5">
            {filteredThreads.length === 0 && (
              <div className="text-[11px] text-muted-foreground px-2 py-3">No chats match your search.</div>
            )}
            {filteredThreads.map((t) => {
              const isActive = t.id === activeId;
              const isEditing = editingId === t.id;
              const lastResult = t.results[0];
              return (
                <div key={t.id} className={cn('group relative rounded-lg transition-colors',
                  isActive ? 'bg-primary/10 border border-primary/30' : 'hover:bg-card border border-transparent')}>
                  {isEditing ? (
                    <div className="flex items-center gap-1 p-1.5">
                      <input autoFocus value={draft} onChange={(e) => setDraft(e.target.value)}
                        onKeyDown={(e) => { if (e.key === 'Enter') commitEdit(); if (e.key === 'Escape') setEditingId(null); }}
                        className="flex-1 bg-background border border-border rounded-[0.25rem] px-2 py-1 text-xs" />
                      <button onClick={commitEdit} className="p-1 text-emerald-500 hover:text-emerald-400" aria-label="Save"><Check className="w-3.5 h-3.5" /></button>
                      <button onClick={() => setEditingId(null)} className="p-1 text-muted-foreground hover:text-foreground" aria-label="Cancel"><X className="w-3.5 h-3.5" /></button>
                    </div>
                  ) : (
                    <button onClick={() => onSelect(t.id)} className="w-full text-left flex items-start gap-2 px-2.5 py-2">
                      <MessageSquare className={cn('w-3.5 h-3.5 mt-0.5 shrink-0', isActive ? 'text-primary' : 'text-muted-foreground')} />
                      <div className="flex-1 min-w-0">
                        <div className={cn('text-xs font-medium truncate', isActive ? 'text-foreground' : 'text-foreground/90')}>{t.title}</div>
                        {lastResult && (
                          <div className="text-[10px] text-muted-foreground truncate mt-0.5 flex items-center gap-1">
                            <span className={cn('inline-block w-1.5 h-1.5 rounded-full', statusDot(lastResult.status))} />
                            {lastResult.itemType.toUpperCase()} · {lastResult.identifier}
                          </div>
                        )}
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 flex items-center gap-0.5 transition-opacity">
                        <span role="button" tabIndex={0} aria-label="Rename"
                          onClick={(e) => { e.stopPropagation(); startEdit(t); }}
                          onKeyDown={(e) => { if (e.key === 'Enter') { e.stopPropagation(); startEdit(t); } }}
                          className="p-1 text-muted-foreground hover:text-foreground rounded-[0.25rem] cursor-pointer"><Pencil className="w-3 h-3" /></span>
                        <span role="button" tabIndex={0} aria-label="Delete"
                          onClick={(e) => { e.stopPropagation(); onDelete(t.id); }}
                          onKeyDown={(e) => { if (e.key === 'Enter') { e.stopPropagation(); onDelete(t.id); } }}
                          className="p-1 text-muted-foreground hover:text-red-500 rounded-[0.25rem] cursor-pointer"><Trash2 className="w-3 h-3" /></span>
                      </div>
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === 'results' && (
          !user ? (
            <SignInNudge text="Sign in to keep every result you check, on any device." />
          ) : filteredResults.length === 0 ? (
            <div className="text-[11px] text-muted-foreground px-2 py-3">{q ? 'No results match your search.' : 'Results from your checks will show up here.'}</div>
          ) : (
            <div className="space-y-0.5">
              {filteredResults.map((r) => (
                <button key={r.id} onClick={() => openResult(r)} disabled={!r.shareToken}
                  className="w-full text-left flex items-start gap-2 px-2.5 py-2 rounded-lg hover:bg-card border border-transparent disabled:opacity-70">
                  <FileCheck2 className="w-3.5 h-3.5 mt-0.5 shrink-0 text-muted-foreground" />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium truncate text-foreground/90">{r.identifier}</div>
                    <div className="text-[10px] text-muted-foreground truncate mt-0.5 flex items-center gap-1">
                      <span className={cn('inline-block w-1.5 h-1.5 rounded-full', statusDot(r.status))} />
                      {r.itemType.toUpperCase()} · {statusWord(r.status)} · {shortDate(r.createdAt)}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )
        )}

        {tab === 'certificates' && (
          !user ? (
            <SignInNudge text="Sign in to save your Proof of Clean Purchase certificates." />
          ) : filteredCerts.length === 0 ? (
            <div className="text-[11px] text-muted-foreground px-2 py-3">
              {q ? 'No certificates match your search.' : 'Your Proof of Clean Purchase certificates will show up here.'}
            </div>
          ) : (
            <div className="space-y-0.5">
              {filteredCerts.map((c) => (
                <button key={c.id} onClick={() => openCert(c)}
                  className="w-full text-left flex items-start gap-2 px-2.5 py-2 rounded-lg hover:bg-card border border-transparent">
                  <Award className="w-3.5 h-3.5 mt-0.5 shrink-0 text-primary" />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium truncate text-foreground/90">{c.identifier}</div>
                    <div className="text-[10px] text-muted-foreground truncate mt-0.5">
                      {(c.identifierType || 'item').toUpperCase()} · {c.verdict || 'Certificate'} · {shortDate(c.createdAt)}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )
        )}
      </div>

      {/* Profile */}
      <div className="border-t border-border/60 p-2">
        {user ? (
          <div className="space-y-1">
            <div className="flex items-center gap-2 px-1.5 py-1.5">
              <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-bold shrink-0">{initial}</div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-foreground truncate">{displayName}</div>
                <div className="text-[10px] text-muted-foreground truncate">{planLine}</div>
              </div>
            </div>
            {phoneLine && (
              <div className="flex items-center gap-1.5 px-2 text-[10px] text-muted-foreground">
                <Smartphone className="w-3 h-3" /> {phoneLine}
              </div>
            )}
            <div className="flex gap-1 pt-1">
              <a href="/dashboard" className="flex-1 inline-flex items-center justify-center gap-1 h-7 rounded-md text-[11px] text-muted-foreground hover:text-foreground hover:bg-muted/50">
                <CreditCard className="w-3 h-3" /> Account &amp; billing
              </a>
              <button onClick={() => signOut()} className="flex-1 inline-flex items-center justify-center gap-1 h-7 rounded-md text-[11px] text-muted-foreground hover:text-foreground hover:bg-muted/50">
                <LogOut className="w-3 h-3" /> Sign out
              </button>
            </div>
          </div>
        ) : (
          <SignInNudge text="Sign up free to save your chats, results, and certificates on any device." compact />
        )}
      </div>
    </div>
  );
};

const SignInNudge: React.FC<{ text: string; compact?: boolean }> = ({ text, compact }) => (
  <div className={cn('rounded-lg border border-primary/30 bg-primary/5 p-3', compact ? '' : 'mt-2')}>
    <div className="text-[11px] text-foreground/90 leading-relaxed mb-2">{text}</div>
    <a href="/auth" className="inline-flex items-center gap-1.5 h-7 px-3 rounded-md bg-primary text-primary-foreground text-[11px] font-semibold">
      <LogIn className="w-3 h-3" /> Sign in or sign up
    </a>
  </div>
);
