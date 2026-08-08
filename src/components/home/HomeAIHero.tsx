import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Send, Sparkles, Brain, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/lib/auth';

type Msg = { role: 'user' | 'assistant'; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-chat-stream`;

const SUGGESTIONS = [
  { label: '📱 Check an IMEI', query: 'How do I check if a phone is stolen by its IMEI?' },
  { label: '🚗 Check a VIN', query: 'How do I check if a car is stolen with the VIN?' },
  { label: '🔗 Analyze a Facebook listing', query: 'Can you analyze a Facebook Marketplace listing for scam risk?' },
  { label: '⚠️ Is this deal a scam?', query: 'How do I tell if a secondhand deal is a scam?' },
];

const WELCOME: Msg = {
  role: 'assistant',
  content:
    "👋 Hi, I'm the SafeOrStolen AI. Paste an IMEI, VIN, serial number, license plate, or marketplace URL — or just ask me anything about buying safely.",
};

export const HomeAIHero: React.FC = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [started, setStarted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

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
    setMessages((p) => [...p, { role: 'assistant', content: '🔎 Detecting identifier and verifying across 100+ databases…' }]);
    try {
      const { data: detect } = await supabase.functions.invoke('ai-detect-identifier', { body: { input: identifier } });
      const itemType = detect?.type || 'serial';
      const cleaned = detect?.extractedValue || identifier;
      const { data: verify, error } = await supabase.functions.invoke('verify-item', {
        body: { identifier: cleaned, itemType, userId: user?.id },
      });
      if (error) throw error;
      const status = verify?.finalStatus || 'unknown';
      const conf = verify?.confidence ? ` (${verify.confidence}% confidence)` : '';
      let result = '';
      if (status === 'stolen') result = `⚠️ MATCH FOUND — this ${itemType.toUpperCase()} appears in stolen-item databases${conf}. Do not purchase.`;
      else if (status === 'safe') result = `✅ No theft reports found for this ${itemType.toUpperCase()}${conf}.`;
      else if (status === 'lost') result = `⚠️ This ${itemType.toUpperCase()} was reported lost${conf}.`;
      else result = `ℹ️ Inconclusive. ${verify?.message || 'Try a clearer identifier.'}`;
      replaceLastAssistant(result + '\n\nOpen the full Verify workspace for sources → /verify');
    } catch (err: any) {
      replaceLastAssistant(`Couldn't verify that: ${err?.message || 'unknown error'}.`);
    }
  }, [user?.id]);

  const runUrlAnalysis = useCallback(async (url: string) => {
    setMessages((p) => [...p, { role: 'assistant', content: '🔗 Analyzing that marketplace listing for fraud signals…' }]);
    try {
      const { data, error } = await supabase.functions.invoke('marketplace-url-analyzer', { body: { url } });
      if (error) throw error;
      const summary = data?.summary || data?.analysis || data?.message || 'Analysis complete.';
      const risk = data?.riskLevel || data?.scamRisk;
      replaceLastAssistant(`🔗 Listing analyzed. ${risk ? `Risk: ${risk}\n\n` : ''}${summary}`);
    } catch (err: any) {
      replaceLastAssistant(`Couldn't analyze that URL: ${err?.message || 'unknown error'}.`);
    }
  }, []);

  const send = useCallback(async (textRaw: string) => {
    const text = textRaw.trim();
    if (!text || isStreaming) return;
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
            SafeOrStolen AI · 100+ databases · 3-second results
          </div>
        </div>

        {/* H1 (SEO-critical, stays) */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-center leading-tight mb-4 tracking-tight">
          Free Stolen Item Checker.{' '}
          <span className="sos-gradient-text">Ask the AI Anything.</span>
        </h1>

        <p className="text-center text-base sm:text-lg text-muted-foreground mb-7 max-w-2xl mx-auto">
          Paste any IMEI, VIN, serial number, license plate, or marketplace URL — or just ask a question.
          Verified against carrier and manufacturer blacklists, NICB, Stolen Firearms Databases and more.
        </p>

        {/* Chat panel */}
        <div className="rounded-3xl border-2 border-primary/40 bg-card/60 backdrop-blur-md shadow-[0_0_60px_-15px_hsl(var(--primary)/0.5)] overflow-hidden">
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
            <Link
              to="/verify"
              className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
            >
              Open full assistant <ArrowRight className="w-3 h-3" />
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
                className="flex-1 resize-none bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 min-h-[48px] max-h-32"
              />
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
              <div className="mt-3 flex flex-wrap gap-2">
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
          <span className="flex items-center gap-1.5"><span className="text-accent">●</span> 2 checks free</span>
          <span className="flex items-center gap-1.5"><span className="text-accent">●</span> No credit card</span>
          <span className="flex items-center gap-1.5"><span className="text-accent">●</span> Then $0.99/check or $10/mo unlimited</span>
          <span className="flex items-center gap-1.5"><span className="text-accent">●</span> 30-day refund</span>
        </div>
      </div>
    </section>
  );
};

export default HomeAIHero;
