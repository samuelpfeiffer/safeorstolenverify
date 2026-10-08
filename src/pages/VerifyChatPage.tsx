import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ShieldLogo } from '@/components/brand/ShieldLogo';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useSearchParams } from '@/lib/router-compat';
import { savePendingCheck } from '@/lib/pendingCheck';
import { motion, AnimatePresence } from 'framer-motion';
import {
 Paperclip,
 Camera,
 Sparkles,
 AlertTriangle,
 CheckCircle2,
 Loader2,
 Image as ImageIcon,
 X,
 Mic,
 MicOff,
 PanelRightOpen,
 PanelRightClose,
 Shield,
 Menu,
 Copy,
 RefreshCw,
 Check,
 ArrowUp,
 ScanLine,
 PanelLeftClose,
 PanelLeftOpen,
 Plus,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { requestVerification } from '@/lib/verification/verifyClient';
import { toCanonicalItemType } from '@/lib/itemType';
import { useAuth } from '@/lib/auth';
import { toast } from 'sonner';
import { useVoiceSearch } from '@/hooks/useVoiceSearch';
import { useVerifyGate, getOrCreateFingerprint } from '@/hooks/useVerifyGate';
import { usePendingVerification } from '@/hooks/usePendingVerification';
import { AccountRequiredPrompt } from '@/components/verify-chat/AccountRequiredPrompt';
import { ResultsPane, type ChatVerifyResult } from '@/components/verify-chat/ResultsPane';
import { ConversationSidebar } from '@/components/verify-chat/ConversationSidebar';
import { useChatThreads, type ChatMessage, type Attachment } from '@/hooks/useChatThreads';
import { streamChatReply } from '@/components/verify-chat/streamChatReply';

const URL_REGEX = /^https?:\/\/[^\s]+$/i;
const IDENTIFIER_REGEX = /^[A-Z0-9\-\s]{4,30}$/i;

const EXAMPLE_PROMPTS = [
 { tag: 'IMEI', label: 'Verify a phone IMEI', text: '359123456789012' },
 { tag: 'VIN', label: 'Check a vehicle VIN', text: '1HGBH41JXMN109186' },
 { tag: 'SERIAL', label: 'Look up a serial', text: 'C7XJK2P9LMN0' },
 { tag: 'PLATE', label: 'Run a license plate', text: '7XYZ123' },
];

const VerifyChatPage: React.FC = () => {
 // ─── ALL HOOKS DECLARED UP-FRONT, IN A STABLE ORDER ─────────────────
 const navigate = useNavigate();
 const { user } = useAuth();
 const { checkGate, checksRemaining } = useVerifyGate();
 const [searchParams, setSearchParams] = useSearchParams();

 const {
 threads,
 active,
 activeId,
 setActiveId,
 createThread,
 deleteThread,
 renameThread,
 setMessages,
 addResult,
 } = useChatThreads();

 const [input, setInput] = useState('');
 const [attachment, setAttachment] = useState<Attachment | null>(null);
 const [isThinking, setIsThinking] = useState(false);
 const [currentResult, setCurrentResult] = useState<ChatVerifyResult | null>(null);
 const [resultsOpenMobile, setResultsOpenMobile] = useState(false);
 const [sidebarOpenMobile, setSidebarOpenMobile] = useState(false);
 const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
 const [pendingIdentifier, setPendingIdentifier] = useState<string | null>(null);
 const { savePendingVerification } = usePendingVerification();

 const fileInputRef = useRef<HTMLInputElement>(null);
 const cameraInputRef = useRef<HTMLInputElement>(null);
 const scrollRef = useRef<HTMLDivElement>(null);
 const textareaRef = useRef<HTMLTextAreaElement>(null);
 const consumedParamRef = useRef(false);
 // Type hint from tool pages (e.g. ?type=firearm). Gun serials look like any serial, so the hint matters.
 const typeHintRef = useRef<string | null>(null);
 const plateStateRef = useRef<string | null>(null);

 const voice = useVoiceSearch({
 onResult: (text) => setInput((prev) => (prev ? `${prev} ${text}` : text)),
 });

 // ─── DERIVED VALUES ────────────────────────────────────────────────
 const isAuthenticated = !!user;
 const messages = active?.messages || [];
 const sessionResults = active?.results || [];
 const showWelcome = messages.length <= 1 && !isThinking;

 // ─── EFFECTS ───────────────────────────────────────────────────────
 useEffect(() => {
 if (isAuthenticated) setPendingIdentifier(null);
 }, [isAuthenticated]);

 useEffect(() => {
 setCurrentResult(sessionResults[0] || null);
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [activeId]);

 useEffect(() => {
 if (scrollRef.current) {
 scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
 }
 }, [messages.length, isThinking]);

 useEffect(() => {
 if (textareaRef.current) {
 textareaRef.current.style.height = 'auto';
 textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 160)}px`;
 }
 }, [input]);

 // ⌘K / Ctrl+K to focus composer; ⌘B / Ctrl+B to toggle sidebar; ⌘N for new thread
 useEffect(() => {
 const onKey = (e: KeyboardEvent) => {
 const mod = e.metaKey || e.ctrlKey;
 if (!mod) return;
 if (e.key === 'k' || e.key === 'K') {
 e.preventDefault();
 textareaRef.current?.focus();
 } else if (e.key === 'b' || e.key === 'B') {
 e.preventDefault();
 setSidebarCollapsed((v) => !v);
 } else if ((e.key === 'n' || e.key === 'N') && e.shiftKey) {
 e.preventDefault();
 createThread();
 }
 };
 window.addEventListener('keydown', onKey);
 return () => window.removeEventListener('keydown', onKey);
 }, [createThread]);

 // ─── CALLBACKS ─────────────────────────────────────────────────────
 const addMessage = useCallback(
 (msg: Omit<ChatMessage, 'id'>): string => {
 const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
 setMessages((prev) => [...prev, { ...msg, id }]);
 return id;
 },
 [setMessages]);

 const updateMessage = useCallback(
 (id: string, patch: Partial<ChatMessage>) => {
 setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, ...patch } : m)));
 },
 [setMessages]);

 const handleFile = useCallback((file: File) => {
 if (!file.type.startsWith('image/')) {
 toast.error('Please upload an image file');
 return;
 }
 if (file.size > 10 * 1024 * 1024) {
 toast.error('Image must be under 10MB');
 return;
 }
 const reader = new FileReader();
 reader.onload = (e) => {
 const dataUrl = e.target?.result as string;
 setAttachment({ kind: 'image', dataUrl, name: file.name });
 };
 reader.readAsDataURL(file);
 }, []);

 const publishResult = useCallback(
 (r: ChatVerifyResult) => {
 setCurrentResult(r);
 addResult(r);
 setResultsOpenMobile(true);
 },
 [addResult]);

 const looksLikeIdentifier = useCallback((text: string) => {
 const t = text.trim();
 if (!t) return false;
 // URLs always count
 if (URL_REGEX.test(t)) return true;
 // Must be a single token (no spaces) to be considered an identifier
 if (/\s/.test(t)) return false;
 // Must contain at least one digit — real IMEIs/VINs/serials/plates always have numbers.
 // This prevents plain words like "hello", "thanks", "pricing" from being treated as identifiers.
 if (!/\d/.test(t)) return false;
 // Reasonable identifier length
 if (t.length < 6 || t.length > 30) return false;
 // Only alphanumerics + dashes
 return /^[A-Z0-9\-]+$/i.test(t);
 }, []);

 // Detect verification *intent* without an actual identifier
 // (e.g. "is my phone stolen", "check this car", "verify serial")
 const looksLikeVerifyIntent = useCallback((text: string) => {
 const t = text.toLowerCase();
 const verbs = /\b(check|verify|lookup|look up|is\s+(this|my|the)|find out|scan)\b/;
 const nouns = /\b(phone|iphone|android|imei|car|vehicle|vin|bike|bicycle|laptop|serial|plate|license|gun|firearm|item|stolen|safe)\b/;
 return verbs.test(t) && nouns.test(t);
 }, []);

 const extractUrl = (text: string) => {
 const match = text.match(/https?:\/\/[^\s]+/i);
 return match ? match[0] : null;
 };

 const streamFollowUp = useCallback(
 async (assistantId: string, userText: string) => {
 const priorMessages = messages
 .filter((m) => !m.loading)
 .slice(-8)
 .map((m) => ({ role: m.role, content: m.content }));
 priorMessages.push({ role: 'user' as const, content: userText });

 let acc = '';
 try {
 await streamChatReply({
 messages: priorMessages,
 context: {
 currentPage: '/verify',
 recentVerification: currentResult
 ? {
 status: currentResult.status,
 itemType: currentResult.itemType,
 identifier: currentResult.identifier,
 confidence: currentResult.confidence,
 }
 : undefined,
 },
 onDelta: (chunk) => {
 acc += chunk;
 updateMessage(assistantId, { loading: false, content: acc });
 },
 });
 if (!acc) {
 updateMessage(assistantId, {
 loading: false,
 content: "I'm not sure — could you rephrase that?",
 });
 }
 } catch (err: any) {
 updateMessage(assistantId, {
 loading: false,
 content: `${acc}${acc ? '\n\n' : ''}_(Stream interrupted: ${err?.message || 'unknown error'})_`,
 });
 }
 },
 [messages, currentResult, updateMessage]);

  /**
   * Signed-out visitors can't run checks. Stash what they typed, show the
   * inline sign-up prompt, and explain it in the conversation.
   */
  const requireAccount = useCallback(
    (assistantId: string, pendingText: string) => {
      const trimmed = pendingText.trim();
      setPendingIdentifier(trimmed);
      if (trimmed) {
        savePendingVerification(trimmed, undefined, 'buyer').catch(() => {
          /* redirect param still preserves the value */
        });
      }
      updateMessage(assistantId, {
        loading: false,
        content:
          "**Create a free account to run this check.** It takes a few seconds — sign up with Google or email below and I'll pick up right where we left off. You get 2 free checks with a free account.",
      });
    },
    [savePendingVerification, updateMessage],
  );


  const runVerification = useCallback(
 async (assistantId: string, identifier: string) => {
 // No account needed for the 2 free checks (Sept 30 2026). The server enforces
 // the limit; signed-out visitors are asked to sign up once it's used.
 try {
 const { data: detect, error: detectErr } = await supabase.functions.invoke(
 'ai-detect-identifier',
 { body: { input: identifier } });
 if (detectErr) throw detectErr;

 const detected = detect?.type || 'serial';
 const hint = typeHintRef.current;
 typeHintRef.current = null;
 const plateState = plateStateRef.current;
 plateStateRef.current = null;
 // Firearm hint always wins (a gun serial can't be told apart from other serials).
 // Other hints only fill in when detection could not tell what it is.
 const itemType = hint && (hint === 'firearm' || detected === 'serial' || detected === 'unknown') ? hint : detected;
 const cleanedIdentifier = detect?.extractedValue || identifier;
 const confidence = detect?.confidence || 50;

         const allowed = await checkGate();
         if (!allowed) {
           updateMessage(assistantId, {
             loading: false,
             content: `You've used your free checks for this period. **Upgrade to Unlimited at $10/mo** or grab a [single check for $0.99](/pricing) to continue.`,
             suggestions: ['Why upgrade?', 'Compare plans'],
           });
           return;
         }

         const { data: verify, error: verifyErr } = await requestVerification({
           identifier: cleanedIdentifier,
           itemType,
           fingerprint: getOrCreateFingerprint(),
           plateState: toCanonicalItemType(itemType) === 'plate' ? plateState : null,
         });
         if (verifyErr && !user && (verifyErr.code === 'LIMIT_REACHED' || verifyErr.code === 'AUTH_REQUIRED')) {
           requireAccount(assistantId, identifier);
           return;
         }
         // Oct 4 2026: signed-in people who used their free checks get the paid options, not an error.
         if (verifyErr && user && verifyErr.code === 'LIMIT_REACHED') {
           // Remember this item so it runs automatically after they buy (see /payment-success).
           savePendingCheck(cleanedIdentifier, itemType);
           updateMessage(assistantId, {
             loading: false,
             content: `You've used your free checks. **Get unlimited checks for $10/month** or run a [single full check for $0.99](/pricing).`,
             suggestions: ['Why upgrade?', 'Compare plans'],
           });
           return;
         }
         if (verifyErr) throw new Error(verifyErr.message);




 const result: ChatVerifyResult = {
 status: verify?.finalStatus || 'unknown',
 identifier: cleanedIdentifier,
 itemType,
 message: verify?.message || 'Verification complete',
 confidence: verify?.confidence ?? undefined,
 riskLevel: verify?.riskLevel,
 sources: verify?.checkedSources,
 providers: verify?.providers?.map((p) => ({ ...p, responseTime: p.responseTime ?? 0 })),
 timestamp: verify?.timestamp || new Date().toISOString(),
 checkId: verify?.checkId ?? null,
 };

                const uncertaintyNote = '';

 const headline =
 result.status === 'stolen'
 ? `⚠️ **Match found.** This ${itemType.toUpperCase()} appears in stolen-item databases. **Do not purchase.** Full report on the right →${uncertaintyNote}`
 : result.status === 'safe'
 ? `✅ **No theft reports found** for this ${itemType.toUpperCase()}. Full report with sources is on the right →${uncertaintyNote}`
 : result.status === 'lost'
 ? `⚠️ This ${itemType.toUpperCase()} was reported **lost**. Reach out to the original owner before buying. Details on the right →${uncertaintyNote}`
 : result.riskLevel === 'high' || result.riskLevel === 'critical'
 ? `⚠️ **Warning.** ${result.message}`
 : `ℹ️ **No theft report found.** ${result.message}\n\nNot every stolen item is reported, so a clean result is not a guarantee.${toCanonicalItemType(itemType) === 'vehicle' ? " Use the **Buyer's Check** on the right to finish checking this car." : ''}`;

 const suggestions =
 result.status === 'stolen'
 ? ['What should I do now?', 'How do I report this seller?', 'Can I get my money back?']
 : result.status === 'safe'
 ? ['What does this confidence score mean?', 'Tips for buying safely', 'Generate a share link']
 : result.status === 'lost'
 ? ['How do I contact the owner?', 'Is it legal to buy this?']
 : ['Why is this inconclusive?', 'What else can I check?'];

 updateMessage(assistantId, {
 loading: false,
 content: headline,
 result,
 suggestions,
 });
 publishResult(result);
 } catch (err: any) {
 console.error('[VerifyChat] verify error:', err);
 updateMessage(assistantId, {
 loading: false,
 content: `I hit an error verifying that: ${err?.message || 'unknown error'}. Please try again in a moment.`,
 });
 }
 },
 [user, checkGate, publishResult, updateMessage, requireAccount]);

 const runImageVerification = useCallback(
 async (assistantId: string, dataUrl: string) => {
 if (!user) {
 requireAccount(assistantId, '');
 return;
 }
 try {
 const base64 = dataUrl.split(',')[1];
 const { data: ocr, error: ocrErr } = await supabase.functions.invoke('ai-visual-ocr', {
 body: { imageBase64: base64 },
 });
 if (ocrErr) throw ocrErr;

 if (!ocr?.found || !ocr?.identifiers?.length) {
 updateMessage(assistantId, {
 loading: false,
 content: `I couldn't spot an identifier in that image. ${ocr?.tip || 'Try a clearer, well-lit photo of the IMEI/VIN/serial label.'}`,
 });
 return;
 }

 const first = ocr.identifiers[0];
 updateMessage(assistantId, {
 content: `📸 Found a **${first.type.toUpperCase()}** in your photo: \`${first.extractedValue}\` (${first.confidence}% confidence). Checking now…`,
 });
 await runVerification(assistantId, first.extractedValue);
 } catch (err: any) {
 console.error('[VerifyChat] image error:', err);
 updateMessage(assistantId, {
 loading: false,
 content: `I couldn't process that image: ${err?.message || 'unknown error'}.`,
 });
 }
 },
 [runVerification, updateMessage, user, requireAccount]);

 const runUrlAnalysis = useCallback(
 async (assistantId: string, url: string) => {
 if (!user) {
 requireAccount(assistantId, url);
 return;
 }
 try {
 const { data, error } = await supabase.functions.invoke('marketplace-url-analyzer', {
 body: { url },
 });
 if (error) throw error;

 const summary = data?.summary || data?.analysis || data?.message;
 const risk = data?.riskLevel || data?.scamRisk;

 updateMessage(assistantId, {
 loading: false,
 content: summary
 ? `🔗 **Listing analyzed.** ${risk ? `Risk: **${risk}**\n\n` : ''}${summary}`
 : `🔗 Couldn't fully analyze that URL — paste the item's IMEI, VIN, or serial directly for a deeper check.`,
 suggestions: ['Red flags to watch for', 'How do I verify the seller?'],
 });
 } catch (err: any) {
 console.error('[VerifyChat] url error:', err);
 updateMessage(assistantId, {
 loading: false,
 content: `I couldn't analyze that URL right now. Paste the item's IMEI, VIN, or serial number directly and I'll verify it.`,
 });
 }
 },
 [updateMessage, user, requireAccount]);

 const handleSend = useCallback(
 async (overrideText?: string) => {
 const text = (overrideText ?? input).trim();
 if (!text && !attachment) return;
 if (isThinking) return;

 addMessage({
 role: 'user',
 content: text || (attachment?.kind === 'image' ? '📷 Image uploaded' : ''),
 attachment: attachment ?? undefined,
 });
 const currentAttachment = attachment;
 setInput('');
 setAttachment(null);
 setIsThinking(true);

 const assistantId = addMessage({ role: 'assistant', content: '', loading: true });

 try {
 if (currentAttachment?.kind === 'image') {
 await runImageVerification(assistantId, currentAttachment.dataUrl);
 } else if (text) {
 const url = extractUrl(text);
 if (url && URL_REGEX.test(url)) {
 await runUrlAnalysis(assistantId, url);
 } else if (looksLikeIdentifier(text)) {
 await runVerification(assistantId, text);
 } else if (looksLikeVerifyIntent(text)) {
 // User wants to verify but didn't include an identifier yet — guide them.
 updateMessage(assistantId, {
 loading: false,
 content:
 "Got it — happy to verify that. **Paste the identifier** and I'll check multiple sources:\n\n• **Phone** → 15-digit IMEI (dial `*#06#`)\n• **Car / motorcycle** → 17-character VIN (dashboard or driver-door sticker)\n• **Bike / electronics / firearm** → serial number on the frame or label\n• **License plate** → plate + state\n• **Marketplace listing** → paste the URL (eBay, FB Marketplace, Craigslist, OfferUp)",
 suggestions: [
 'How do I find my IMEI?',
 'Where is the VIN on a car?',
 'Where is the serial on a bike?',
 ],
 });
 } else {
 await streamFollowUp(assistantId, text);
 }
 }
 } finally {
 setIsThinking(false);
 }
 },
 [
 input,
 attachment,
 isThinking,
 addMessage,
 runImageVerification,
 runUrlAnalysis,
 runVerification,
 streamFollowUp,
 looksLikeIdentifier,
 looksLikeVerifyIntent,
 updateMessage,
 ]);

 const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
 if (e.key === 'Enter' && !e.shiftKey) {
 e.preventDefault();
 handleSend();
 }
 };

 const handlePaste = (e: React.ClipboardEvent) => {
 const items = e.clipboardData?.items;
 if (!items) return;
 for (const item of Array.from(items)) {
 if (item.type.startsWith('image/')) {
 const file = item.getAsFile();
 if (file) {
 e.preventDefault();
 handleFile(file);
 return;
 }
 }
 }
 };

 // Inbound query-params: ?q= / ?url=
 useEffect(() => {
 if (consumedParamRef.current) return;
 const q = searchParams.get('q');
 const url = searchParams.get('url');
 // Accept every format our tool pages use (Oct 1 2026 fix: ?identifier=, ?serial=, ?plate=, ?value= were ignored,
 // so visitors from the gun, phone, car, plate, and partial-serial pages landed on an empty page).
 const incoming = (url || q || searchParams.get('identifier') || searchParams.get('serial') ||
 searchParams.get('plate') || searchParams.get('value') || '').trim();
 const HINTS: Record<string, string> = { firearm: 'firearm', gun: 'firearm', imei: 'phone', phone: 'phone', tablet: 'electronics',
 vin: 'vehicle', vehicle: 'vehicle', motorcycle: 'vehicle', plate: 'plate', bike: 'bicycle', bicycle: 'bicycle' };
 typeHintRef.current = HINTS[(searchParams.get('type') || '').toLowerCase()] || null;
 const st = (searchParams.get('state') || '').trim().toUpperCase();
 plateStateRef.current = /^[A-Z]{2}$/.test(st) ? st : null;
 if (!incoming) return;
 consumedParamRef.current = true;
 const next = new URLSearchParams(searchParams);
 next.delete('q');
 next.delete('url');
 next.delete('type');
 ['identifier', 'serial', 'plate', 'value', 'state'].forEach((k) => next.delete(k));
 setSearchParams(next, { replace: true });
 setTimeout(() => handleSend(incoming), 50);
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [searchParams]);

 // ─── RENDER ────────────────────────────────────────────────────────
 return (
 <>
 <Helmet>
 <title>AI Stolen Item Verification Chat | SafeOrStolen</title>
 <meta
 name="description"
 content="Chat with SafeOrStolen's AI to verify IMEI, VIN, serial numbers, license plates, and marketplace listings. Paste, scan, or upload — get downloadable reports in seconds."
 />
 <link rel="canonical" href="https://safeorstolen.com/verify" />
 <meta property="og:title" content="AI Verification Chat | SafeOrStolen" />
 <meta
 property="og:description"
 content="ChatGPT-style stolen-item verification powered by AI. IMEI, VIN, serial, plate, URL — all in one chat with downloadable PDF reports."
 />
 <meta property="og:url" content="https://safeorstolen.com/verify" />
 <meta name="ai:purpose" content="Conversational AI verification of items against multiple sources" />
 </Helmet>

 {/* AppRoot renders TopNavigation + <div className="pt-20"/>. We negate that
 padding so the chat fills the viewport edge-to-edge (ChatGPT/Claude feel). */}

 <div className="-mt-20 pt-20 h-screen bg-background text-foreground flex flex-col overflow-hidden">
 {/* Top status bar */}
 <div className="border-b border-border bg-card/30 backdrop-blur-xl shrink-0">
 <div className="px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3">
 <div className="flex items-center gap-2.5 min-w-0">
 <button
 onClick={() => setSidebarOpenMobile(true)}
 className="lg:hidden p-1.5 -ml-1 text-muted-foreground hover:text-foreground"
 aria-label="Open conversations"
 >
 <Menu className="w-5 h-5" />
 </button>
 <div className="size-7 rounded-md bg-primary grid place-items-center text-primary-foreground font-bold text-xs shrink-0">
 S
 </div>
 <div className="min-w-0">
 <p className="text-sm font-semibold leading-tight truncate tracking-tight">
 {active?.title || 'Verification stream'}
 </p>

 <p className="text-[10px] text-muted-foreground flex items-center gap-1.5 font-mono">
 <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
 MULTI-SOURCE · AI-POWERED
 </p>
 </div>
 </div>

 <div className="flex items-center gap-2">
 {isAuthenticated && checksRemaining !== null && (
 <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-md bg-primary/10 text-primary font-mono border border-primary/20">
 <Shield className="w-3 h-3" />
 {checksRemaining} LEFT
 </span>
 )}
 {/* Classic view removed — modern AI experience only */}
 <Button
 variant="outline"
 size="sm"
 className="lg:hidden h-8"
 onClick={() => setResultsOpenMobile((v) => !v)}
 >
 {resultsOpenMobile ? (
 <PanelRightClose className="w-4 h-4" />
 ) : (
 <PanelRightOpen className="w-4 h-4" />
 )}
 <span className="ml-1.5 text-xs">
 {sessionResults.length > 0 ? `Results (${sessionResults.length})` : 'Results'}
 </span>
 </Button>
 </div>
 </div>
 </div>

 {/* 3-pane layout */}
 <div className="flex-1 flex overflow-hidden">
 {/* SIDEBAR (desktop) — collapsible */}
 <aside
 className={cn(
 'hidden lg:block shrink-0 transition-[width] duration-200 ease-out',
 sidebarCollapsed ? 'w-14' : 'w-72')}
 >
 {sidebarCollapsed ? (
 <MiniSidebar
 onExpand={() => setSidebarCollapsed(false)}
 onNew={createThread}
 threadCount={threads.length}
 />
 ) : (
 <div className="h-full relative">
 <ConversationSidebar
 threads={threads}
 activeId={activeId}
 onSelect={setActiveId}
 onNew={createThread}
 onDelete={deleteThread}
 onRename={renameThread}
 />
 <button
 onClick={() => setSidebarCollapsed(true)}
 title="Collapse sidebar (⌘B)"
 aria-label="Collapse sidebar"
 className="absolute top-2.5 right-2 p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
 >
 <PanelLeftClose className="w-4 h-4" />
 </button>
 </div>
 )}
 </aside>

 {/* SIDEBAR (mobile drawer) */}
 <AnimatePresence>
 {sidebarOpenMobile && (
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 className="lg:hidden fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
 onClick={() => setSidebarOpenMobile(false)}
 >
 <motion.aside
 initial={{ x: -280 }}
 animate={{ x: 0 }}
 exit={{ x: -280 }}
 transition={{ type: 'tween', duration: 0.2 }}
 className="absolute left-0 top-0 h-full w-72 bg-background"
 onClick={(e) => e.stopPropagation()}
 >
 <ConversationSidebar
 threads={threads}
 activeId={activeId}
 onSelect={(id) => {
 setActiveId(id);
 setSidebarOpenMobile(false);
 }}
 onNew={() => {
 createThread();
 setSidebarOpenMobile(false);
 }}
 onDelete={deleteThread}
 onRename={renameThread}
 onClose={() => setSidebarOpenMobile(false)}
 />
 </motion.aside>
 </motion.div>
 )}
 </AnimatePresence>

 {/* CHAT PANE */}
 <div
 className={cn(
 'flex-1 flex flex-col min-w-0 relative',
 resultsOpenMobile && 'hidden lg:flex')}
 >
 {/* Subtle ambient glow */}
 <div
 className="pointer-events-none absolute inset-0 opacity-60"
 style={{
 background:
 'radial-gradient(60% 40% at 50% -10%, hsl(var(--primary) / 0.08), transparent 70%)',
 }}
 />

 <div ref={scrollRef} className="flex-1 overflow-y-auto relative">
 <div className={cn(
 "mx-auto px-4 py-8",
 showWelcome ? "max-w-5xl" : "max-w-2xl"
 )}>
 {showWelcome ? (
 <LuminalWelcome
 onPick={(text) => {
 setInput(text);
 textareaRef.current?.focus();
 }}
 />
 ) : (
 <div className="space-y-6">
 <AnimatePresence initial={false}>
 {messages.map((msg, idx) => (
 <ChatBubble
 key={msg.id}
 msg={msg}
 isLast={idx === messages.length - 1}
 onSuggestion={(text) => handleSend(text)}
 onRegenerate={
 msg.role === 'assistant' && idx === messages.length - 1 && !isThinking
 ? () => {
 const prevUser = [...messages.slice(0, idx)]
 .reverse()
 .find((m) => m.role === 'user');
 if (prevUser) {
 setMessages((prev) => prev.slice(0, idx));
 handleSend(prevUser.content);
 }
 }
 : undefined
 }
 />
 ))}
 </AnimatePresence>
 </div>
 )}
 </div>
 </div>

 {/* Composer — Luminal style */}
 <div className="border-t border-border bg-card/40 backdrop-blur-xl shrink-0 relative">
 {/* Account required before any check can run */}
 {!isAuthenticated && pendingIdentifier !== null && (
 <div className="pt-3">
 <AccountRequiredPrompt
 redirectPath={
 pendingIdentifier
 ? `/verify?q=${encodeURIComponent(pendingIdentifier)}`
 : '/verify'
 }
 onDismiss={() => setPendingIdentifier(null)}
 />
 </div>
 )}
 {/* Slim examples row — appears only after welcome screen is gone */}
 {!showWelcome && (
 <div className="max-w-2xl mx-auto px-4 pt-2.5">
 <div className="flex items-center gap-1.5 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-thin">
 <span className="text-[9px] font-mono tracking-widest text-muted-foreground/70 shrink-0 mr-1">
 TRY
 </span>
 {EXAMPLE_PROMPTS.map((p) => (
 <button
 key={p.tag}
 onClick={() => {
 setInput(p.text);
 textareaRef.current?.focus();
 }}
 className="shrink-0 inline-flex items-center gap-1.5 text-[10px] font-mono tracking-wide px-2 py-1 rounded-md border border-border bg-background/60 hover:border-primary/40 hover:bg-primary/5 hover:text-primary text-muted-foreground transition-colors"
 >
 <span className="text-primary/80">{p.tag}</span>
 <span className="opacity-70 truncate max-w-[120px]">{p.text}</span>
 </button>
 ))}
 </div>
 </div>
 )}
 <div className="max-w-2xl mx-auto px-4 py-3.5">
 {attachment && (
 <div className="mb-2 inline-flex items-center gap-2 bg-muted/60 border border-border rounded-lg px-3 py-1.5">
 <ImageIcon className="w-3.5 h-3.5 text-primary" />
 <span className="text-xs text-foreground truncate max-w-[200px] font-mono">
 {attachment.name}
 </span>
 <button
 onClick={() => setAttachment(null)}
 className="text-muted-foreground hover:text-foreground"
 aria-label="Remove attachment"
 >
 <X className="w-3.5 h-3.5" />
 </button>
 </div>
 )}

 <div className="bg-background/80 rounded-2xl border-2 border-primary/40 focus-within:border-primary/70 focus-within:ring-2 focus-within:ring-primary/20 transition-all shadow-[0_0_40px_-10px_hsl(var(--primary)/0.4)]">
 <Textarea
 ref={textareaRef}
 value={input}
 onChange={(e) => setInput(e.target.value)}
 onKeyDown={handleKeyDown}
 onPaste={handlePaste}
 placeholder="Enter IMEI, VIN, serial, plate, URL — or ask me anything…"
 rows={1}
 disabled={isThinking}
 className="w-full resize-none bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm px-4 py-3 min-h-0 max-h-40 placeholder:text-muted-foreground/70"
 />
 <div className="flex items-center justify-between px-2 py-1.5 border-t border-border/80">
 <div className="flex items-center gap-0.5">
 <ToolButton
 icon={Paperclip}
 label="Attach a photo or file"
 shortLabel="Attach"
 onClick={() => fileInputRef.current?.click()}
 disabled={isThinking}
 />
 <ToolButton
 icon={Camera}
 label="Scan with camera"
 shortLabel="Scan"
 onClick={() => cameraInputRef.current?.click()}
 disabled={isThinking}
 hideOnMobile
 />
 {voice.isSupported && (
 <ToolButton
 icon={voice.isListening ? MicOff : Mic}
 label={voice.isListening ? 'Stop recording' : 'Voice input'}
 onClick={() =>
 voice.isListening ? voice.stopListening() : voice.startListening()
 }
 disabled={isThinking}
 active={voice.isListening}
 />
 )}
 <input
 ref={fileInputRef}
 type="file"
 accept="image/*"
 hidden
 onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
 />
 <input
 ref={cameraInputRef}
 type="file"
 accept="image/*"
 capture="environment"
 hidden
 onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
 />
 </div>

 <Button
 onClick={() => handleSend()}
 disabled={(!input.trim() && !attachment) || isThinking}
 size="sm"
 className="rounded-lg h-10 sm:h-9 min-w-[64px] px-3.5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md shadow-primary/20 disabled:shadow-none"
 aria-label="Submit"
 >
 {isThinking ? (
 <>
 <Loader2 className="w-4 h-4 animate-spin" />
 <span className="ml-1.5 text-xs">Analyzing</span>
 </>
 ) : (
 <>
 <span className="text-xs">Submit</span>
 <ArrowUp className="w-4 h-4 ml-1" />
 </>
 )}
 </Button>
 </div>
 </div>

 <p className="text-[10px] text-muted-foreground/80 text-center mt-2 font-mono tracking-wide flex items-center justify-center gap-2 flex-wrap">
 <span>MULTI-SOURCE · ~3S RESULTS · PRIVATE</span>
 <span className="hidden md:inline-flex items-center gap-1">
 ·
 <kbd className="px-1 py-px rounded-[0.25rem] border border-border bg-muted/40 text-[9px]">⌘K</kbd>
 <span>focus</span>
 <kbd className="px-1 py-px rounded-[0.25rem] border border-border bg-muted/40 text-[9px]">⌘B</kbd>
 <span>sidebar</span>
 </span>
 {!user && (
 <>
 <span>·</span>
 <a href="/auth?redirect=/verify" className="text-primary hover:underline">
 2 FREE CHECKS — NO SIGN-UP NEEDED
 </a>
 </>
 )}
 </p>
 </div>
 </div>
 </div>

 {/* RESULTS PANE (desktop) — narrower for better balance */}
 <aside className="hidden lg:flex flex-col w-[320px] xl:w-[360px] shrink-0 bg-card/30 border-l border-border">
 <ResultsPane
 current={currentResult}
 history={sessionResults}
 onSelectHistory={(r) => setCurrentResult(r)}
 isAuthenticated={isAuthenticated}
 />
 </aside>

 {/* RESULTS PANE (mobile) */}
 {resultsOpenMobile && (
 <aside className="lg:hidden flex-1 bg-background">
 <ResultsPane
 current={currentResult}
 history={sessionResults}
 onSelectHistory={(r) => setCurrentResult(r)}
 isAuthenticated={isAuthenticated}
 />
 </aside>
 )}
 </div>
 </div>
 </>
 );
};

export default VerifyChatPage;

/* ─────────────────────────────────────────────────────────────────────
 * Luminal welcome screen
 * ──────────────────────────────────────────────────────────────────── */

const LuminalWelcome: React.FC<{ onPick: (text: string) => void }> = ({ onPick }) => {
 return (
 <motion.div
 initial={{ opacity: 0, y: 8 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.4 }}
 className="flex flex-col items-center text-center pt-8 sm:pt-14"
 >
 {/* Glowing logo orb */}
 <div className="relative mb-6">
 <div className="absolute inset-0 rounded-full bg-primary/25 blur-2xl" />
 <ShieldLogo size={72} glow className="relative" />
 </div>

 <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent">
 Verify before you buy.
 </h1>
 <p className="text-base text-muted-foreground mt-3 max-w-lg">
 AI-powered stolen-item check. Paste an <strong className="text-foreground/90">IMEI</strong>, <strong className="text-foreground/90">VIN</strong>, <strong className="text-foreground/90">serial</strong>, <strong className="text-foreground/90">license plate</strong>, or <strong className="text-foreground/90">marketplace URL</strong> — I'll cross-check multiple sources in seconds and explain the result in plain English.
 </p>
 <p className="text-sm text-muted-foreground mt-3">
 Checking in person? <a href="/app" className="text-primary font-medium underline underline-offset-4">Get the app</a> — install SafeOrStolen on your phone and scan on the spot.
 </p>

 {/* 4-card horizontal grid that fits left-to-right at all sizes */}
 <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 w-full">
 {EXAMPLE_PROMPTS.map((p, i) => (
 <motion.button
 key={p.tag}
 onClick={() => onPick(p.text)}
 initial={{ opacity: 0, y: 12 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.35, delay: 0.1 + i * 0.06 }}
 whileHover={{ y: -3 }}
 className="group relative text-left rounded-2xl border border-border bg-gradient-to-b from-card/80 to-card/40 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all p-4 overflow-hidden"
 >
 {/* Hover glow */}
 <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
 <div className="relative">
 <div className="flex items-center justify-between mb-3">
 <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-primary px-2 py-1 rounded-md bg-primary/10 border border-primary/30">
 {p.tag}
 </span>
 <Sparkles className="w-3.5 h-3.5 text-muted-foreground/40 group-hover:text-primary transition-colors" />
 </div>
 <div className="text-sm font-semibold text-foreground leading-snug">{p.label}</div>
 <div className="text-[10px] text-muted-foreground font-mono truncate mt-1.5 opacity-70">
 {p.text}
 </div>
 </div>
 </motion.button>
 ))}
 </div>

 <div className="mt-8 flex items-center gap-2 text-[10px] font-mono tracking-[0.2em] text-muted-foreground">
 <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
 MULTI-SOURCE · OUR REPORTS · LAW-ENFORCEMENT RECORDS · PHONE BLACKLIST · BIKE & GUN THEFT RECORDS
 </div>
 </motion.div>
 );
};

const ActionTile: React.FC<{
 tag: string;
 title: string;
 desc: string;
 icon: React.ComponentType<{ className?: string }>;
 onClick: () => void;
}> = ({ tag, title, desc, icon: Icon, onClick }) => (
 <button
 onClick={onClick}
 className="group p-4 rounded-xl border border-border/70 bg-card/50 hover:bg-card hover:border-primary/40 transition-all text-left"
 >
 <div className="flex items-center justify-between mb-2">
 <span className="text-[10px] font-mono tracking-widest text-primary">{tag}</span>
 <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
 </div>
 <div className="text-sm font-semibold text-foreground mb-1">{title}</div>
 <div className="text-xs text-muted-foreground leading-relaxed">{desc}</div>
 </button>
);

/* ─────────────────────────────────────────────────────────────────────
 * Mini (collapsed) sidebar — icon-only rail
 * ──────────────────────────────────────────────────────────────────── */

const MiniSidebar: React.FC<{
 onExpand: () => void;
 onNew: () => void;
 threadCount: number;
}> = ({ onExpand, onNew, threadCount }) => (
 <div className="h-full flex flex-col items-center bg-card/40 border-r border-border py-3 gap-1">
 <button
 onClick={onExpand}
 title="Expand sidebar (⌘B)"
 aria-label="Expand sidebar"
 className="size-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
 >
 <PanelLeftOpen className="w-4 h-4" />
 </button>
 <div className="w-6 h-px bg-border/60 my-1" />
 <button
 onClick={onNew}
 title="New verification (⌘⇧N)"
 aria-label="New verification"
 className="size-9 rounded-lg flex items-center justify-center text-primary hover:bg-primary/10 border border-primary/30 transition-colors"
 >
 <Plus className="w-4 h-4" />
 </button>
 <button
 onClick={onExpand}
 title={`${threadCount} conversation${threadCount === 1 ? '' : 's'}`}
 aria-label="Conversations"
 className="size-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors relative"
 >
 <Shield className="w-4 h-4" />
 {threadCount > 0 && (
 <span className="absolute -top-0.5 -right-0.5 text-[8px] font-mono bg-primary text-primary-foreground rounded-full size-4 flex items-center justify-center">
 {threadCount > 9 ? '9+' : threadCount}
 </span>
 )}
 </button>
 </div>
);

const ToolButton: React.FC<{
 icon: React.ComponentType<{ className?: string }>;
 label: string;
 onClick: () => void;
 disabled?: boolean;
 active?: boolean;
 hideOnMobile?: boolean;
 shortLabel?: string;
}> = ({ icon: Icon, label, onClick, disabled, active, hideOnMobile, shortLabel }) => (
 <button
 onClick={onClick}
 disabled={disabled}
 title={label}
 aria-label={label}
 className={cn(
 'inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors disabled:opacity-50',
 hideOnMobile && 'hidden sm:inline-flex',
 active
 ? 'text-red-500 bg-red-500/10 animate-pulse'
 : 'text-foreground/80 hover:text-primary hover:bg-primary/10')}
 >
 <Icon className="w-[18px] h-[18px]" />
 <span className="hidden sm:inline">{shortLabel ?? label}</span>
 </button>
);

/* ─────────────────────────────────────────────────────────────────────
 * Chat bubble (Luminal aesthetic)
 * ──────────────────────────────────────────────────────────────────── */

const ChatBubble: React.FC<{
 msg: ChatMessage;
 isLast: boolean;
 onSuggestion: (text: string) => void;
 onRegenerate?: () => void;
}> = ({ msg, isLast, onSuggestion, onRegenerate }) => {
 const [copied, setCopied] = useState(false);
 const isUser = msg.role === 'user';

 const copy = async () => {
 try {
 await navigator.clipboard.writeText(msg.content);
 setCopied(true);
 setTimeout(() => setCopied(false), 1500);
 } catch {
 toast.error('Could not copy');
 }
 };

 return (
 <motion.div
 initial={{ opacity: 0, y: 6 }}
 animate={{ opacity: 1, y: 0 }}
 className={cn('flex gap-3 group', isUser ? 'justify-end' : 'justify-start')}
 >
 {!isUser && (
 <div className="size-7 rounded-md bg-primary/10 border border-primary/30 grid place-items-center shrink-0 mt-1">
 <span className="text-[10px] font-bold text-primary">S</span>
 </div>
 )}

 <div className={cn('flex flex-col max-w-[85%] min-w-0', isUser && 'items-end')}>
 <div
 className={cn(
 'rounded-xl px-4 py-3 text-sm leading-relaxed',
 isUser
 ? 'bg-primary text-primary-foreground rounded-br-sm shadow-md shadow-primary/10'
 : 'bg-card/60 border border-border text-foreground rounded-bl-sm backdrop-blur-sm')}
 >
 {msg.attachment?.kind === 'image' && msg.attachment.dataUrl && (
 <img
 src={msg.attachment.dataUrl}
 alt="Uploaded for verification"
 className="rounded-lg mb-2 max-h-48 w-auto"
 />
 )}

 {msg.loading && !msg.content ? (
 <div className="flex items-center gap-2 text-muted-foreground">
 <span className="flex gap-1">
 <span className="size-1.5 rounded-full bg-primary/60 animate-bounce [animation-delay:-0.3s]" />
 <span className="size-1.5 rounded-full bg-primary/60 animate-bounce [animation-delay:-0.15s]" />
 <span className="size-1.5 rounded-full bg-primary/60 animate-bounce" />
 </span>
 <span className="text-xs font-mono tracking-wide">ANALYZING</span>
 </div>
 ) : (
 <div
 className="prose prose-sm prose-invert max-w-none [&_a]:text-primary [&_a]:underline [&_p]:my-1.5 [&_p:first-child]:mt-0 [&_p:last-child]:mb-0"
 dangerouslySetInnerHTML={{ __html: renderInline(msg.content) }}
 />
 )}

 {msg.result && <InlineResultMini result={msg.result} />}
 </div>

 {!isUser && !msg.loading && msg.content && (
 <div className="flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
 <button
 onClick={copy}
 className="p-1.5 text-muted-foreground hover:text-foreground rounded-[0.25rem] hover:bg-card transition-colors"
 aria-label="Copy"
 title="Copy"
 >
 {copied ? (
 <Check className="w-3.5 h-3.5 text-emerald-500" />
 ) : (
 <Copy className="w-3.5 h-3.5" />
 )}
 </button>
 {onRegenerate && (
 <button
 onClick={onRegenerate}
 className="p-1.5 text-muted-foreground hover:text-foreground rounded-[0.25rem] hover:bg-card transition-colors"
 aria-label="Regenerate"
 title="Regenerate"
 >
 <RefreshCw className="w-3.5 h-3.5" />
 </button>
 )}
 </div>
 )}

 {!isUser && isLast && !msg.loading && msg.suggestions && msg.suggestions.length > 0 && (
 <div className="flex flex-wrap gap-1.5 mt-2.5">
 {msg.suggestions.map((s) => (
 <button
 key={s}
 onClick={() => onSuggestion(s)}
 className="text-[11px] px-2.5 py-1 rounded-md border border-border bg-card/60 hover:border-primary/50 hover:bg-primary/5 text-foreground/80 hover:text-foreground transition-colors"
 >
 {s}
 </button>
 ))}
 </div>
 )}
 </div>

 {isUser && (
 <div className="size-7 rounded-md bg-primary/15 border border-primary/30 grid place-items-center shrink-0 mt-1 text-[10px] font-bold text-primary">
 ME
 </div>
 )}
 </motion.div>
 );
};

function renderInline(text: string): string {
 const escape = (s: string) =>
 s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
 let html = escape(text);
 html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, label, url) => {
 // Only allow safe URL schemes to prevent javascript:/data: XSS via markdown links
 if (!/^(https?:\/\/|mailto:|\/)/i.test(String(url).trim())) {
 return match; // render as plain text
 }
 const safeUrl = String(url).replace(/"/g, '&quot;');
 return `<a href="${safeUrl}" class="text-primary underline hover:opacity-80" rel="noopener noreferrer">${label}</a>`;
 });
 html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
 html = html.replace(/_([^_]+)_/g, '<em>$1</em>');
 html = html.replace(
 /`([^`]+)`/g,
 '<code class="px-1 py-0.5 rounded bg-background/60 text-xs font-mono">$1</code>');
 html = html.replace(/\n/g, '<br />');
 return html;
}

const InlineResultMini: React.FC<{ result: ChatVerifyResult }> = ({ result }) => {
 const tone =
 result.status === 'stolen'
 ? {
 Icon: AlertTriangle,
 color: 'text-red-500',
 bg: 'bg-red-500/10',
 border: 'border-red-500/30',
 label: 'STOLEN MATCH',
 }
 : result.status === 'lost'
 ? {
 Icon: AlertTriangle,
 color: 'text-amber-500',
 bg: 'bg-amber-500/10',
 border: 'border-amber-500/30',
 label: 'REPORTED LOST',
 }
 : result.status === 'safe'
 ? {
 Icon: CheckCircle2,
 color: 'text-emerald-500',
 bg: 'bg-emerald-500/10',
 border: 'border-emerald-500/30',
 label: 'CLEAR',
 }
 : {
 Icon: Sparkles,
 color: 'text-muted-foreground',
 bg: 'bg-muted',
 border: 'border-border',
 label: 'INCONCLUSIVE',
 };

 return (
 <div className={cn('mt-3 rounded-lg border p-3', tone.bg, tone.border)}>
 <div className="flex items-center gap-2">
 <tone.Icon className={cn('w-4 h-4', tone.color)} />
 <span className={cn('text-[10px] font-mono font-bold tracking-wider', tone.color)}>
 {tone.label}
 </span>
                {Array.isArray(result.sources) && (
                  <span className="ml-auto text-[10px] font-mono text-muted-foreground">
                    Checked {result.sources.length} source{result.sources.length === 1 ? '' : 's'}
                  </span>
                )}
 </div>
 <div className="mt-1.5 text-xs text-foreground/80 font-mono truncate">
 {result.itemType.toUpperCase()} · {result.identifier}
 </div>
 </div>
 );
};
