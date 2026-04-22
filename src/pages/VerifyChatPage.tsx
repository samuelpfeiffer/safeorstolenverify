import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  Paperclip,
  Camera,
  Brain,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  ShieldCheck,
  Loader2,
  Image as ImageIcon,
  X,
  Mic,
  MicOff,
  PanelRightOpen,
  PanelRightClose,
  Shield,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/lib/auth';
import { toast } from 'sonner';
import TopNavigation from '@/components/TopNavigation';
import { useVoiceSearch } from '@/hooks/useVoiceSearch';
import { useVerifyGate } from '@/hooks/useVerifyGate';
import { ResultsPane, type ChatVerifyResult } from '@/components/verify-chat/ResultsPane';

/**
 * VerifyChatPage — consolidated split-pane AI verification.
 * LEFT: ChatGPT-style conversation (input, attach, scan, voice, quick chips).
 * RIGHT: Live result card with download/share + session history.
 *
 * Reuses existing edge functions:
 *  - ai-detect-identifier  (Claude)         → identify identifier type
 *  - verify-item                              → real verification
 *  - ai-visual-ocr         (Claude vision)  → OCR identifier from image
 *  - marketplace-url-analyzer                → analyze listing URLs
 */

type Attachment = { kind: 'image'; dataUrl: string; name: string };

type ChatMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  attachment?: Attachment;
  result?: ChatVerifyResult;
  loading?: boolean;
};

const URL_REGEX = /^https?:\/\/[^\s]+$/i;

const QUICK_PROMPTS = [
  { icon: '📱', label: 'IMEI', text: '' },
  { icon: '🚗', label: 'VIN', text: '' },
  { icon: '🔢', label: 'Serial', text: '' },
  { icon: '🪪', label: 'Plate', text: '' },
  { icon: '🔗', label: 'Marketplace URL', text: 'https://' },
];

const VerifyChatPage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const { checkGate, isBlocked, checksRemaining } = useVerifyGate();

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        "Hi 👋 I'm the **SafeOrStolen AI**. Paste any **IMEI**, **VIN**, **serial number**, **license plate**, or **marketplace URL** — or upload a photo of the item.\n\nI'll check 100+ databases (FBI NCIC, NICB, GSMA, ATF, all 50 US states) in seconds and put a downloadable report on the right.",
    },
  ]);
  const [input, setInput] = useState('');
  const [attachment, setAttachment] = useState<Attachment | null>(null);
  const [isThinking, setIsThinking] = useState(false);

  // Right pane state
  const [currentResult, setCurrentResult] = useState<ChatVerifyResult | null>(null);
  const [history, setHistory] = useState<ChatVerifyResult[]>([]);
  const [resultsOpenMobile, setResultsOpenMobile] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Voice input
  const { isListening, isSupported: voiceSupported, startListening, stopListening } = useVoiceSearch({
    onResult: (text) => setInput((prev) => (prev ? `${prev} ${text}` : text)),
  });

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 160)}px`;
    }
  }, [input]);

  const addMessage = (msg: Omit<ChatMessage, 'id'>) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    setMessages((prev) => [...prev, { ...msg, id }]);
    return id;
  };

  const updateMessage = (id: string, patch: Partial<ChatMessage>) => {
    setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, ...patch } : m)));
  };

  const handleFile = (file: File) => {
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
  };

  const extractUrl = (text: string): { url: string | null } => {
    const match = text.match(/https?:\/\/[^\s]+/i);
    return { url: match ? match[0] : null };
  };

  /** Push a fresh result into the right pane + session history */
  const publishResult = useCallback((r: ChatVerifyResult) => {
    setCurrentResult(r);
    setHistory((prev) => [r, ...prev.filter((p) => p.identifier !== r.identifier)].slice(0, 20));
    setResultsOpenMobile(true);
  }, []);

  const runVerification = useCallback(
    async (assistantId: string, identifier: string) => {
      try {
        // 1. Detect identifier type
        const { data: detect, error: detectErr } = await supabase.functions.invoke(
          'ai-detect-identifier',
          { body: { input: identifier } },
        );
        if (detectErr) throw detectErr;

        const itemType = detect?.type || 'serial';
        const cleanedIdentifier = detect?.extractedValue || identifier;
        const confidence = detect?.confidence || 50;

        // 2. Auth + gate check
        if (!user) {
          updateMessage(assistantId, {
            loading: false,
            content: `I detected this looks like a **${itemType.toUpperCase()}** (${confidence}% confidence). To run a full verification across 100+ databases, [sign in free](/auth?redirect=/verify) — you get **2 free checks**.`,
          });
          return;
        }

        const allowed = await checkGate();
        if (!allowed) {
          updateMessage(assistantId, {
            loading: false,
            content: `You've used your free checks for this period. **Upgrade to Unlimited at $10/mo** or grab a [single check for $0.99](/pricing) to continue.`,
          });
          return;
        }

        // 3. Real verification
        const { data: verify, error: verifyErr } = await supabase.functions.invoke('verify-item', {
          body: { identifier: cleanedIdentifier, itemType, userId: user.id },
        });
        if (verifyErr) throw verifyErr;

        const result: ChatVerifyResult = {
          status: verify?.finalStatus || 'unknown',
          identifier: cleanedIdentifier,
          itemType,
          message: verify?.message || 'Verification complete',
          confidence: verify?.confidence,
          riskLevel: verify?.riskLevel,
          sources: verify?.checkedSources,
          providers: verify?.providers,
          timestamp: verify?.timestamp || new Date().toISOString(),
        };

        const headline =
          result.status === 'stolen'
            ? `⚠️ **Match found.** This ${itemType.toUpperCase()} appears in stolen-item databases. **Do not purchase.** Full report on the right →`
            : result.status === 'safe'
            ? `✅ **No theft reports found** for this ${itemType.toUpperCase()}. Full report with sources is on the right →`
            : result.status === 'lost'
            ? `⚠️ This ${itemType.toUpperCase()} was reported **lost**. Reach out to the original owner before buying. Details on the right →`
            : `ℹ️ Inconclusive result for this ${itemType.toUpperCase()}. ${result.message}`;

        updateMessage(assistantId, { loading: false, content: headline, result });
        publishResult(result);
      } catch (err: any) {
        console.error('[VerifyChat] verify error:', err);
        updateMessage(assistantId, {
          loading: false,
          content: `I hit an error verifying that: ${err?.message || 'unknown error'}. Try again, or use the [classic verify page](/verify/classic).`,
        });
      }
    },
    [user, checkGate, publishResult],
  );

  const runImageVerification = useCallback(
    async (assistantId: string, dataUrl: string) => {
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
    [runVerification],
  );

  const runUrlAnalysis = useCallback(async (assistantId: string, url: string) => {
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
      });
    } catch (err: any) {
      console.error('[VerifyChat] url error:', err);
      updateMessage(assistantId, {
        loading: false,
        content: `I couldn't analyze that URL right now. Paste the item's IMEI, VIN, or serial number directly and I'll verify it.`,
      });
    }
  }, []);

  const handleSend = async () => {
    const text = input.trim();
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

    const assistantId = addMessage({ role: 'assistant', content: 'Analyzing…', loading: true });

    try {
      if (currentAttachment?.kind === 'image') {
        await runImageVerification(assistantId, currentAttachment.dataUrl);
      } else if (text) {
        const { url } = extractUrl(text);
        if (url && URL_REGEX.test(url)) {
          await runUrlAnalysis(assistantId, url);
        } else {
          await runVerification(assistantId, text);
        }
      }
    } finally {
      setIsThinking(false);
    }
  };

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
        <meta name="ai:purpose" content="Conversational AI verification of items against 100+ stolen databases" />
      </Helmet>

      <TopNavigation />

      <div className="pt-16 h-screen bg-background text-foreground flex flex-col overflow-hidden">
        {/* Sub-header */}
        <div className="border-b border-border/60 bg-card/40 backdrop-blur">
          <div className="max-w-[1600px] mx-auto px-4 py-2.5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Brain className="w-4 h-4 text-primary" />
              </div>
              <div className="min-w-0">
                <h1 className="text-sm font-semibold leading-tight truncate">
                  SafeOrStolen AI Verification
                </h1>
                <p className="text-[10px] text-muted-foreground flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  100+ databases · ~3s results
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {isAuthenticated && checksRemaining !== null && (
                <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  <Shield className="w-3 h-3" />
                  {checksRemaining} free check{checksRemaining === 1 ? '' : 's'} left
                </span>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/verify/classic')}
                className="text-[11px] text-muted-foreground hover:text-foreground hidden md:inline-flex"
              >
                Classic view
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="lg:hidden"
                onClick={() => setResultsOpenMobile((v) => !v)}
              >
                {resultsOpenMobile ? (
                  <PanelRightClose className="w-4 h-4" />
                ) : (
                  <PanelRightOpen className="w-4 h-4" />
                )}
                <span className="ml-1.5 text-xs">
                  {history.length > 0 ? `Results (${history.length})` : 'Results'}
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* Split layout */}
        <div className="flex-1 flex overflow-hidden">
          {/* CHAT PANE (left) */}
          <div
            className={cn(
              'flex-1 flex flex-col min-w-0 border-r border-border/60',
              resultsOpenMobile && 'hidden lg:flex',
            )}
          >
            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto">
              <div className="max-w-3xl mx-auto px-4 py-6 space-y-5">
                <AnimatePresence initial={false}>
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={cn(
                        'flex gap-3',
                        msg.role === 'user' ? 'justify-end' : 'justify-start',
                      )}
                    >
                      {msg.role === 'assistant' && (
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1 ring-1 ring-primary/20">
                          <Brain className="w-4 h-4 text-primary" />
                        </div>
                      )}
                      <div
                        className={cn(
                          'max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed',
                          msg.role === 'user'
                            ? 'bg-primary text-primary-foreground rounded-br-md shadow-sm'
                            : 'bg-card border border-border/60 text-foreground rounded-bl-md',
                        )}
                      >
                        {msg.attachment?.kind === 'image' && (
                          <img
                            src={msg.attachment.dataUrl}
                            alt="Uploaded for verification"
                            className="rounded-lg mb-2 max-h-48 w-auto"
                          />
                        )}

                        {msg.loading ? (
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>{msg.content}</span>
                          </div>
                        ) : (
                          <div
                            className="prose prose-sm prose-invert max-w-none [&_a]:text-primary [&_a]:underline"
                            dangerouslySetInnerHTML={{ __html: renderInline(msg.content) }}
                          />
                        )}

                        {msg.result && <InlineResultMini result={msg.result} />}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Quick chips */}
            {messages.length <= 1 && (
              <div className="max-w-3xl mx-auto px-4 pb-2 w-full">
                <div className="flex flex-wrap gap-2">
                  {QUICK_PROMPTS.map((p) => (
                    <button
                      key={p.label}
                      onClick={() => {
                        setInput(p.text);
                        textareaRef.current?.focus();
                      }}
                      className="text-xs px-3 py-1.5 rounded-full border border-border/60 hover:border-primary/40 hover:bg-primary/5 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <span className="mr-1">{p.icon}</span>
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Composer */}
            <div className="border-t border-border/60 bg-card/40 backdrop-blur">
              <div className="max-w-3xl mx-auto px-4 py-3">
                {attachment && (
                  <div className="mb-2 inline-flex items-center gap-2 bg-muted rounded-lg px-3 py-2">
                    <ImageIcon className="w-4 h-4 text-primary" />
                    <span className="text-xs text-foreground truncate max-w-[200px]">
                      {attachment.name}
                    </span>
                    <button
                      onClick={() => setAttachment(null)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                <div className="flex items-end gap-1.5 bg-muted rounded-2xl px-2 py-1.5 focus-within:ring-1 focus-within:ring-primary/40 transition">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isThinking}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors disabled:opacity-50"
                    aria-label="Upload image"
                    title="Upload image"
                  >
                    <Paperclip className="w-5 h-5" />
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
                  />

                  <button
                    onClick={() => cameraInputRef.current?.click()}
                    disabled={isThinking}
                    className="p-2 text-muted-foreground hover:text-primary transition-colors disabled:opacity-50 hidden sm:block"
                    aria-label="Scan with camera"
                    title="Scan with camera"
                  >
                    <Camera className="w-5 h-5" />
                  </button>
                  <input
                    ref={cameraInputRef}
                    type="file"
                    accept="image/*"
                    capture="environment"
                    hidden
                    onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
                  />

                  {voiceSupported && (
                    <button
                      onClick={() => (isListening ? stopListening() : startListening())}
                      disabled={isThinking}
                      className={cn(
                        'p-2 transition-colors disabled:opacity-50',
                        isListening
                          ? 'text-red-500 animate-pulse'
                          : 'text-muted-foreground hover:text-primary',
                      )}
                      aria-label={isListening ? 'Stop recording' : 'Voice input'}
                      title="Voice input"
                    >
                      {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                    </button>
                  )}

                  <Textarea
                    ref={textareaRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    onPaste={handlePaste}
                    placeholder="Paste IMEI, VIN, serial, license plate, or marketplace URL…"
                    rows={1}
                    disabled={isThinking}
                    className="flex-1 resize-none bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm py-2 min-h-0 max-h-40"
                  />

                  <Button
                    onClick={handleSend}
                    disabled={(!input.trim() && !attachment) || isThinking}
                    size="icon"
                    className="rounded-xl h-9 w-9 shrink-0"
                  >
                    {isThinking ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </Button>
                </div>

                <p className="text-[10px] text-muted-foreground text-center mt-2">
                  🛡 100+ databases · ⚡ ~3s results · 🔒 Anonymous checks
                  {!user && (
                    <>
                      {' · '}
                      <a href="/auth?redirect=/verify" className="text-primary hover:underline">
                        Sign in for 2 free checks
                      </a>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* RESULTS PANE (right, desktop) */}
          <aside className="hidden lg:block w-[420px] xl:w-[460px] shrink-0 bg-card/20">
            <ResultsPane
              current={currentResult}
              history={history}
              onSelectHistory={(r) => setCurrentResult(r)}
              isAuthenticated={isAuthenticated}
            />
          </aside>

          {/* RESULTS PANE (mobile, full screen toggle) */}
          {resultsOpenMobile && (
            <aside className="lg:hidden flex-1 bg-background">
              <ResultsPane
                current={currentResult}
                history={history}
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

/** Lightweight inline markdown: **bold**, [link](url), `code`, \n */
function renderInline(text: string): string {
  const escape = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  let html = escape(text);
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, url) => {
    const safeUrl = String(url).replace(/"/g, '&quot;');
    return `<a href="${safeUrl}" class="text-primary underline hover:opacity-80">${label}</a>`;
  });
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/`([^`]+)`/g, '<code class="px-1 py-0.5 rounded bg-background/60 text-xs">$1</code>');
  html = html.replace(/\n/g, '<br />');
  return html;
}

const InlineResultMini: React.FC<{ result: ChatVerifyResult }> = ({ result }) => {
  const tone =
    result.status === 'stolen'
      ? { Icon: AlertTriangle, color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/30', label: 'Stolen Match' }
      : result.status === 'lost'
      ? { Icon: AlertTriangle, color: 'text-amber-500', bg: 'bg-amber-500/10', border: 'border-amber-500/30', label: 'Reported Lost' }
      : result.status === 'safe'
      ? { Icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', label: 'No Reports Found' }
      : { Icon: ShieldCheck, color: 'text-muted-foreground', bg: 'bg-muted', border: 'border-border', label: result.status.toUpperCase() };

  return (
    <div className={cn('mt-3 rounded-xl border p-2.5 flex items-center gap-2', tone.bg, tone.border)}>
      <tone.Icon className={cn('w-4 h-4 shrink-0', tone.color)} />
      <span className={cn('text-[11px] font-bold uppercase tracking-wide', tone.color)}>
        {tone.label}
      </span>
      <span className="text-[10px] text-muted-foreground ml-auto">View on right →</span>
    </div>
  );
};

export default VerifyChatPage;
