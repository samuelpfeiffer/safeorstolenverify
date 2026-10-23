import React, { Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { Link } from '@/lib/router-compat';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Send, Sparkles, Brain, ArrowRight, ScanLine } from 'lucide-react';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { requestVerification } from '@/lib/verification/verifyClient';
import { LimitPayOffer } from '@/components/verify-chat/LimitPayOffer';
import { useAuth } from '@/lib/auth';
const QRScanner = React.lazy(() => import('@/components/futuristic/QRScanner').then(m => ({ default: m.QRScanner })));

type Msg = { role: 'user' | 'assistant'; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-chat-stream`;

const SUGGESTIONS = [
 { label: 'Check an IMEI', query: 'How do I check if a phone is stolen by its IMEI?' },
 { label: 'Check a VIN', query: 'How do I check if a car is stolen with the VIN?' },
 { label: 'Ask about a Facebook listing', query: 'Can you analyze a Facebook Marketplace listing for scam risk?' },
 { label: 'Is this deal a scam?', query: 'How do I tell if a secondhand deal is a scam?' },
];

const WELCOME: Msg = {
 role: 'assistant',
 content:
 "Hi, I'm the SafeOrStolen AI assistant. Paste an IMEI, VIN, serial number, license plate, or marketplace URL, or ask me anything about buying used items safely.",
};

export const HomeAIHero: React.FC = () => {
 const { user } = useAuth();
 const [messages, setMessages] = useState<Msg[]>([]);
 const [limitHit, setLimitHit] = useState<{ identifier: string; itemType?: string } | null>(null);
 const [checkDone, setCheckDone] = useState(false);
 const forcedTypeRef = useRef<string | null>(null);
 const [input, setInput] = useState('');
 const [isStreaming, setIsStreaming] = useState(false);
 const [started, setStarted] = useState(false);
 const scrollRef = useRef<HTMLDivElement>(null);
 const inputRef = useRef<HTMLTextAreaElement>(null);
 const [scannerOpen, setScannerOpen] = useState(false);

 useEffect(() => {
 if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
 }, [messages]);

 useEffect(() => {
 inputRef.current?.focus();
 }, []);


 const detectInput = (text: string): 'url' | 'identifier' | 'chat' => {
 const t = text.trim();
 if (/https?:\/\/[^\s]+/i.test(t)) return 'url';
 if (!/\s/.test(t) && /\d/.test(t) && /^[A-Z0-9\-]{6,30}$/i.test(t)) return 'identifier';
 return 'chat';
 };

 const replaceLastAssistant = (content: string) =>
 setMessages((prev) => {
 const out = [...prev];
 if (out[out.length - 1]?.role === 'assistant') out[out.length - 1] = { role: 'assistant', content };
 else out.push({ role: 'assistant', content });
 return out;
 });

 const streamChat = useCallback(async (allMessages: Msg[]) => {
 setIsStreaming(true);
 let soFar = '';
 const push = (chunk: string) => {
 soFar += chunk;
 setMessages((prev) => {
 const last = prev[prev.length - 1];
 if (last?.role === 'assistant') {
 return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: soFar } : m));
 }
 return [...prev, { role: 'assistant', content: soFar }];
 });
 };
 try {
 const resp = await fetch(CHAT_URL, {
 method: 'POST',
 headers: {
 'Content-Type': 'application/json',
 Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
 },
 body: JSON.stringify({ messages: allMessages, context: { currentPage: '/' } }),
 });
 if (!resp.ok || !resp.body) {
 if (resp.status === 429) return push("I'm getting a lot of questions right now — try again in a moment.");
 if (resp.status === 402) return push('Our AI service is temporarily limited. Please try again later.');
 throw new Error('stream failed');
 }
 const reader = resp.body.getReader();
 const dec = new TextDecoder();
 let buf = '';
 let done = false;
 while (!done) {
 const { done: d, value } = await reader.read();
 if (d) break;
 buf += dec.decode(value, { stream: true });
 let nl: number;
 while ((nl = buf.indexOf('\n')) !== -1) {
 let line = buf.slice(0, nl);
 buf = buf.slice(nl + 1);
 if (line.endsWith('\r')) line = line.slice(0, -1);
 if (!line.startsWith('data: ')) continue;
 const j = line.slice(6).trim();
 if (j === '[DONE]') { done = true; break; }
 try {
 const p = JSON.parse(j);
 const c = p.choices?.[0]?.delta?.content as string | undefined;
 if (c) push(c);
 } catch { /* ignore */ }
 }
 }
 } catch {
 if (!soFar) push("Sorry, I'm having trouble connecting. Please try again.");
 } finally {
 setIsStreaming(false);
 }
 }, []);

 const runVerification = useCallback(async (identifier: string) => {
 setMessages((p) => [...p, { role: 'assistant', content: 'Recognizing the number and running the check…' }]);
 try {
 const { data: detect } = await supabase.functions.invoke('ai-detect-identifier', { body: { input: identifier } });
 // A check page (gun, bike, phone...) passes its item type in the link; trust it over the guess.
 const forced = forcedTypeRef.current;
 forcedTypeRef.current = null;
 const itemType = forced || detect?.type || 'serial';
 const cleaned = detect?.extractedValue || identifier;
 const { data: verify, error } = await requestVerification({
 identifier: cleaned,
 itemType,
 });
 if (error?.code === 'LIMIT_REACHED') {
 replaceLastAssistant("You've used your free check. You can run this one for $0.99 below, no account needed.");
 setLimitHit({ identifier: cleaned, itemType });
 return;
 }
 if (error) throw new Error(error.message);
 const status = verify?.finalStatus || 'unknown';
 const conf = verify?.confidence ? ` (${verify.confidence}% confidence)` : '';
 let result = '';
 if (status === 'stolen') result = `Reported stolen: this ${itemType.toUpperCase()} matches a theft report${conf}. Don't buy it.`;
 else if (status === 'safe') result = `No report found in the records searched for this ${itemType.toUpperCase()}${conf}.`;
 else if (status === 'lost') result = `This ${itemType.toUpperCase()} was reported lost${conf}.`;
 else if (verify?.riskLevel === 'high' || verify?.riskLevel === 'critical') result = `Possible match. ${verify?.message || ''}`;
 else result = `No report found in the records searched. ${verify?.message || ''}`;
 replaceLastAssistant(result);
 setCheckDone(true);
 } catch (err: any) {
 replaceLastAssistant(`Couldn't verify that: ${err?.message || 'unknown error'}.`);
 }
 }, [user?.id]);

 const runUrlAnalysis = useCallback(async (url: string) => {
 setMessages((p) => [...p, { role: 'assistant', content: 'Reading that listing for warning signs…' }]);
 try {
 const { data, error } = await supabase.functions.invoke('marketplace-url-analyzer', { body: { url } });
 if (error) throw error;
 const summary = data?.summary || data?.analysis || data?.message || 'Analysis complete.';
 const risk = data?.riskLevel || data?.scamRisk;
 replaceLastAssistant(`Listing reviewed. ${risk ? `Risk: ${risk}\n\n` : ''}${summary}`);
 } catch (err: any) {
 replaceLastAssistant(`Couldn't analyze that URL: ${err?.message || 'unknown error'}.`);
 }
 }, []);

 const send = useCallback(async (textRaw: string) => {
 const text = textRaw.trim();
 if (!text || isStreaming) return;
 // Oct 21 2026 (owner rule): one place to search everything. Hand every search to /verify.
 if (typeof window !== 'undefined') { window.location.href = `/verify?q=${encodeURIComponent(text)}`; return; }
 if (!started) {
 setStarted(true);
 setMessages([WELCOME, { role: 'user', content: text }]);
 } else {
 setMessages((p) => [...p, { role: 'user', content: text }]);
 }
 setInput('');
 const kind = detectInput(text);
 if (kind === 'url') {
 const url = text.match(/https?:\/\/[^\s]+/i)?.[0] || text;
 setIsStreaming(true);
 await runUrlAnalysis(url);
 setIsStreaming(false);
 return;
 }
 if (kind === 'identifier') {
 setIsStreaming(true);
 await runVerification(text);
 setIsStreaming(false);
 return;
 }
 const history = started ? [...messages, { role: 'user' as const, content: text }] : [WELCOME, { role: 'user' as const, content: text }];
 await streamChat(history);
 }, [isStreaming, started, messages, streamChat, runVerification, runUrlAnalysis]);

 useEffect(() => {
 const params = new URLSearchParams(window.location.search);
 const q = params.get('q');
 const t = params.get('type');
 if (t && /^[a-z_-]{2,20}$/i.test(t)) forcedTypeRef.current = t.toLowerCase();
 if (q && q.trim()) send(q.trim());
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);

  const handleKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
 if (e.key === 'Enter' && !e.shiftKey) {
 e.preventDefault();
 send(input);
 }
 };

 return (
 <section
 className="relative pt-10 pb-16 px-4 overflow-hidden"
 style={{ background: 'var(--gradient-hero)' }}
 >
 <div className="absolute inset-0 pointer-events-none" style={{ background: 'var(--gradient-glow)' }} />

 <div className="max-w-3xl mx-auto relative">
 {/* Trust pill */}
 <div className="flex justify-center mb-5">
 <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 text-primary text-sm">
 <Shield className="w-4 h-4" />
 Phones · cars · guns · bikes · anything with a serial number
 </div>
 </div>

 <div className="mx-auto mb-4 max-w-xl rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-center text-sm font-semibold text-primary">
 1 free check. No account needed.
 </div>
 {/* H1 (SEO-critical, stays) */}
 <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-center leading-tight mb-4 tracking-tight">
 Check if a phone, car, gun, tool, console, appliance, or bike was{' '}
 <span className="sos-gradient-text">reported stolen.</span>
 </h1>

 <p className="text-center text-base sm:text-lg text-muted-foreground mb-7 max-w-2xl mx-auto">
 Paste the phone's IMEI, the car's VIN or license plate, or the serial number on the item.
 </p>

 {/* Chat panel */}
 <div data-tour="search" className="rounded-3xl border-2 border-primary/40 bg-card/60 backdrop-blur-md shadow-[0_0_60px_-15px_hsl(var(--primary)/0.5)] overflow-hidden">
 {/* Header */}
 <div className="flex items-center justify-between px-5 py-3 bg-primary/5 border-b border-border">
 <div className="flex items-center gap-2">
 <div className="relative w-8 h-8 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center">
 <Brain className="w-4 h-4 text-primary" />
 <Sparkles className="w-2.5 h-2.5 text-primary absolute -top-0.5 -right-0.5" />
 </div>
 <div className="leading-tight">
 <div className="text-sm font-bold text-foreground">SafeOrStolen AI</div>
 <div className="text-[11px] text-emerald-400 flex items-center gap-1">
 <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online · Ready to verify
 </div>
 </div>
 </div>
 <button
 type="button"
 onClick={() => window.dispatchEvent(new Event('sos-open-tour'))}
 className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground hover:underline mr-3"
 >
 How it works
 </button>
 <Link
 to="/verify"
 className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
 >
 Open the app <ArrowRight className="w-3 h-3" />
 </Link>
 </div>

 {/* Messages (only after first send) */}
 <AnimatePresence initial={false}>
 {started && (
 <motion.div
 initial={{ height: 0, opacity: 0 }}
 animate={{ height: 'auto', opacity: 1 }}
 exit={{ height: 0, opacity: 0 }}
 transition={{ duration: 0.25 }}
 className="overflow-hidden"
 >
 <div
 ref={scrollRef}
 className="max-h-[420px] overflow-y-auto p-5 space-y-3 bg-background/40"
 >
 {messages.map((m, i) => (
 <motion.div
 key={i}
 initial={{ opacity: 0, y: 6 }}
 animate={{ opacity: 1, y: 0 }}
 className={cn('flex', m.role === 'user' ? 'justify-end' : 'justify-start')}
 >
 <div
 className={cn(
 'max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-wrap',
 m.role === 'user'
 ? 'bg-primary text-primary-foreground rounded-br-md'
 : 'bg-muted text-foreground rounded-bl-md'
 )}
 >
 {m.content}
 {m.role === 'assistant' && isStreaming && i === messages.length - 1 && (
 <span className="inline-block w-1.5 h-4 bg-primary/60 ml-0.5 align-middle animate-pulse" />
 )}
 </div>
 </motion.div>
 ))}
 {limitHit && <LimitPayOffer identifier={limitHit.identifier} itemType={limitHit.itemType} />}
 {checkDone && !limitHit && (
 <Link to="/verify" className="mt-3 flex items-center justify-between gap-3 rounded-xl border border-primary/40 bg-primary/10 px-4 py-3 text-sm font-semibold text-foreground hover:bg-primary/15">
 <span>See every source searched, save and share this result, or scan another item in your SafeOrStolen app</span>
 <ArrowRight className="w-4 h-4 shrink-0 text-primary" />
 </Link>
 )}
 {isStreaming && messages[messages.length - 1]?.role !== 'assistant' && (
 <div className="flex justify-start">
 <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-2.5 flex gap-1">
 {[0, 1, 2].map((i) => (
 <motion.div
 key={i}
 className="w-1.5 h-1.5 rounded-full bg-primary/50"
 animate={{ opacity: [0.3, 1, 0.3] }}
 transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
 />
 ))}
 </div>
 </div>
 )}
 </div>
 </motion.div>
 )}
 </AnimatePresence>

 {/* Composer */}
 <div className="p-4 border-t border-border bg-card/60">
 <div className="flex items-end gap-2">
 <textarea
 ref={inputRef}
 value={input}
 onChange={(e) => setInput(e.target.value)}
 onKeyDown={handleKey}
 placeholder="Paste IMEI, VIN, serial, plate, or a marketplace URL — or ask a question…"
 rows={1}
 disabled={isStreaming}
 className="flex-1 resize-none bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-hidden focus:border-primary/60 focus:ring-2 focus:ring-primary/20 min-h-[48px] max-h-32"
 />
 <button
 type="button"
 onClick={() => setScannerOpen(true)}
 disabled={isStreaming}
 className="h-12 w-12 rounded-xl border border-border bg-background text-foreground flex items-center justify-center hover:border-primary/60 disabled:opacity-40"
 aria-label="Scan barcode or QR"
 >
 <ScanLine className="w-5 h-5" />
 </button>
 <button
 onClick={() => send(input)}
 disabled={!input.trim() || isStreaming}
 className="h-12 w-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
 aria-label="Send"
 >
 <Send className="w-5 h-5" />
 </button>
 </div>

 {/* Suggestion chips */}
 {!started && (
 <div data-tour="quick-actions" className="mt-3 flex flex-wrap gap-2">
 {SUGGESTIONS.map((s) => (
 <button
 key={s.label}
 onClick={() => send(s.query)}
 className="text-xs px-3 py-1.5 rounded-full border border-border hover:border-primary/40 hover:bg-primary/5 text-muted-foreground hover:text-foreground transition-colors"
 >
 {s.label}
 </button>
 ))}
 </div>
 )}
 </div>
 </div>

 {/* Trust line */}
 <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 text-xs sm:text-sm text-muted-foreground mt-5">
 <span className="flex items-center gap-1.5"><span className="text-accent">●</span> Free through October 22, no account needed</span>
 <span className="flex items-center gap-1.5"><span className="text-accent">●</span> No credit card</span>
 <span className="flex items-center gap-1.5"><span className="text-accent">●</span> Then $0.99 for 2 checks or $10/mo unlimited</span>
 <span className="flex items-center gap-1.5"><span className="text-accent">●</span> 30-day refund</span>
 </div>
 </div>
 {scannerOpen && (
 <Suspense fallback={null}>
 <QRScanner
 isOpen={scannerOpen}
 onClose={() => setScannerOpen(false)}
 onScan={(value) => { setScannerOpen(false); setInput(value); send(value); }}
 />
 </Suspense>
 )}
 </section>
 );
};

export default HomeAIHero;
