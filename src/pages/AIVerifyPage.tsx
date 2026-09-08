import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from '@/lib/router-compat';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send, Paperclip, Camera, Sparkles, Brain, ShieldCheck,
  AlertTriangle, CheckCircle2, Loader2, Image as ImageIcon, X, Link as LinkIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/lib/auth';
import { toast } from 'sonner';

/**
 * AI Verify Chat — ChatGPT-style verification powered by Claude.
 * Accepts text identifiers (IMEI/VIN/Serial/Plate), URLs, and images.
 * Routes through existing edge functions:
 *  - ai-detect-identifier (Claude) → identifies identifier type
 *  - verify-item → real verification
 *  - ai-visual-ocr (Claude vision) → extracts identifier from image
 *  - marketplace-url-analyzer → checks listing URLs
 *  - ai-chat-stream (Claude) → conversational fallback
 *
 * Does NOT modify the existing /verify flow.
 */

type Attachment =
  | { kind: 'image'; dataUrl: string; name: string }
  | { kind: 'url'; url: string };

type ChatMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  attachment?: Attachment;
  result?: VerifyResult;
  loading?: boolean;
};

type VerifyResult = {
  status: 'safe' | 'stolen' | 'lost' | 'unknown' | 'error';
  identifier: string;
  itemType: string;
  message: string;
  confidence?: number;
  riskLevel?: string;
  sources?: string[];
};

const URL_REGEX = /^https?:\/\/[^\s]+$/i;

const QUICK_PROMPTS = [
  { icon: '📱', label: 'Check IMEI', text: 'Check this IMEI: ' },
  { icon: '🚗', label: 'Check VIN', text: 'Verify this VIN: ' },
  { icon: '🔢', label: 'Serial number', text: 'Is this serial number stolen: ' },
  { icon: '🪪', label: 'License plate', text: 'Look up this plate: ' },
  { icon: '🔗', label: 'Marketplace URL', text: 'Analyze this listing: https://' },
];

const AIVerifyPage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        "Hi 👋 I'm the SafeOrStolen AI. Paste any **IMEI**, **VIN**, **serial number**, **license plate**, or **marketplace URL** — or upload a photo of the item. I'll check it against 100+ databases in seconds.",
    },
  ]);
  const [input, setInput] = useState('');
  const [attachment, setAttachment] = useState<Attachment | null>(null);
  const [isThinking, setIsThinking] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

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

  /** Detect URL in text and convert to attachment */
  const extractUrl = (text: string): { url: string | null; remainder: string } => {
    const match = text.match(/https?:\/\/[^\s]+/i);
    if (!match) return { url: null, remainder: text };
    return { url: match[0], remainder: text.replace(match[0], '').trim() };
  };

  /** Handle a verification result by calling existing edge functions */
  const runVerification = useCallback(
    async (assistantId: string, identifier: string, hint?: string) => {
      try {
        // 1. Detect identifier type via Claude (ai-detect-identifier)
        const { data: detect, error: detectErr } = await supabase.functions.invoke(
          'ai-detect-identifier',
          { body: { input: identifier } }
        );
        if (detectErr) throw detectErr;

        const itemType = detect?.type || 'serial';
        const cleanedIdentifier = detect?.extractedValue || identifier;
        const confidence = detect?.confidence || 50;

        // 2. Auth gate: verify-item requires authenticated user
        if (!user) {
          updateMessage(assistantId, {
            loading: false,
            content: `I detected this looks like a **${itemType.toUpperCase()}** (${confidence}% confidence). To run a full verification across 100+ databases, please [sign in](/auth?redirect=/ai-verify) — it's free and takes 10 seconds. You'll get **2 free checks**.`,
          });
          return;
        }

        // 3. Run real verification
        const { data: verify, error: verifyErr } = await supabase.functions.invoke(
          'verify-item',
          {
            body: {
              identifier: cleanedIdentifier,
              itemType,
              userId: user.id,
            },
          }
        );

        if (verifyErr) throw verifyErr;

        const result: VerifyResult = {
          status: verify?.finalStatus || 'unknown',
          identifier: cleanedIdentifier,
          itemType,
          message: verify?.message || 'Verification complete',
          confidence: verify?.confidence,
          riskLevel: verify?.riskLevel,
          sources: verify?.checkedSources,
        };

        const headline =
          result.status === 'stolen'
            ? `⚠️ **Match found.** This ${itemType.toUpperCase()} appears in stolen-item databases. Do **not** purchase. Contact local police if you have it.`
            : result.status === 'safe'
            ? `✅ **No theft reports found** for this ${itemType.toUpperCase()}. ${hint || 'It appears safe to proceed — but always verify in person.'}`
            : result.status === 'lost'
            ? `⚠️ This ${itemType.toUpperCase()} was reported **lost**. Reach out to the original owner before buying.`
            : `ℹ️ Inconclusive result for this ${itemType.toUpperCase()}. ${result.message}`;

        updateMessage(assistantId, {
          loading: false,
          content: headline,
          result,
        });
      } catch (err: any) {
        console.error('[AIVerify] runVerification error:', err);
        updateMessage(assistantId, {
          loading: false,
          content: `I hit an error verifying that: ${err?.message || 'unknown error'}. Please try again or use the [classic verify page](/verify).`,
        });
      }
    },
    [user]
  );

  /** Handle image upload — extract identifier via Claude vision then verify */
  const runImageVerification = useCallback(
    async (assistantId: string, dataUrl: string) => {
      try {
        // strip "data:image/...;base64," prefix
        const base64 = dataUrl.split(',')[1];
        const { data: ocr, error: ocrErr } = await supabase.functions.invoke(
          'ai-visual-ocr',
          { body: { imageBase64: base64 } }
        );
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
        console.error('[AIVerify] image error:', err);
        updateMessage(assistantId, {
          loading: false,
          content: `I couldn't process that image: ${err?.message || 'unknown error'}.`,
        });
      }
    },
    [runVerification]
  );

  /** Handle URL — call marketplace analyzer */
  const runUrlAnalysis = useCallback(
    async (assistantId: string, url: string) => {
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
            : `🔗 Couldn't fully analyze that URL — but I'll keep an eye on it. Try pasting the IMEI/serial directly for a deeper check.`,
        });
      } catch (err: any) {
        console.error('[AIVerify] url error:', err);
        updateMessage(assistantId, {
          loading: false,
          content: `I couldn't analyze that URL right now. Paste the item's IMEI, VIN, or serial number directly and I'll verify it.`,
        });
      }
    },
    []
  );

  /** Main send handler */
  const handleSend = async () => {
    const text = input.trim();
    if (!text && !attachment) return;
    if (isThinking) return;

    // Build user message
    addMessage({ role: 'user', content: text || (attachment?.kind === 'image' ? '📷 Image uploaded' : ''), attachment: attachment ?? undefined });
    const currentAttachment = attachment;
    setInput('');
    setAttachment(null);
    setIsThinking(true);

    const assistantId = addMessage({
      role: 'assistant',
      content: 'Analyzing…',
      loading: true,
    });

    try {
      // Branch 1: image
      if (currentAttachment?.kind === 'image') {
        await runImageVerification(assistantId, currentAttachment.dataUrl);
      }
      // Branch 2: URL detected in text
      else if (text) {
        const { url } = extractUrl(text);
        if (url && URL_REGEX.test(url)) {
          await runUrlAnalysis(assistantId, url);
        } else {
          // Branch 3: identifier
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

  const handlePaste = async (e: React.ClipboardEvent) => {
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
        <title>AI Verification Chat — Check Stolen Items Instantly | SafeOrStolen</title>
        <meta
          name="description"
          content="Chat with SafeOrStolen's AI to verify IMEI, VIN, serial numbers, license plates, and marketplace listings. Paste, scan, or upload — get answers in seconds. Powered by Claude."
        />
        <link rel="canonical" href="https://safeorstolen.com/ai-verify" />
        <meta property="og:title" content="AI Verification Chat | SafeOrStolen" />
        <meta property="og:description" content="ChatGPT-style stolen-item verification powered by AI. IMEI, VIN, serial, plate, URL — all in one chat." />
        <meta property="og:url" content="https://safeorstolen.com/ai-verify" />
        <meta name="ai:purpose" content="Conversational AI verification of items against stolen databases" />
      </Helmet>

      <div className="min-h-[calc(100vh-5rem)] bg-background text-foreground flex flex-col">
        {/* Header */}
        <header className="border-b border-border bg-card/50 backdrop-blur sticky top-0 z-10">
          <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Brain className="w-5 h-5 text-primary" />
                </div>
                <Sparkles className="w-3 h-3 text-primary absolute -top-0.5 -right-0.5" />
              </div>
              <div>
                <h1 className="text-base font-semibold leading-tight">AI Verification Chat</h1>
                <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Powered by Claude · 100+ databases
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/verify')}
              className="text-xs text-muted-foreground hover:text-foreground"
            >
              Classic verify →
            </Button>
          </div>
        </header>

        {/* Messages */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn('flex gap-3', msg.role === 'user' ? 'justify-end' : 'justify-start')}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <Brain className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  <div
                    className={cn(
                      'max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed',
                      msg.role === 'user'
                        ? 'bg-primary text-primary-foreground rounded-br-md'
                        : 'bg-muted text-foreground rounded-bl-md'
                    )}
                  >
                    {/* Image attachment preview */}
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
                        className="prose prose-sm prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: renderInline(msg.content) }}
                      />
                    )}

                    {/* Verification result card */}
                    {msg.result && <ResultCard result={msg.result} />}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Quick prompts */}
        {messages.length <= 1 && (
          <div className="max-w-3xl mx-auto px-4 pb-3 w-full">
            <div className="flex flex-wrap gap-2">
              {QUICK_PROMPTS.map((p) => (
                <button
                  key={p.label}
                  onClick={() => {
                    setInput(p.text);
                    textareaRef.current?.focus();
                  }}
                  className="text-xs px-3 py-2 rounded-full border border-border hover:border-primary/40 hover:bg-primary/5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="mr-1">{p.icon}</span>
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Composer */}
        <div className="border-t border-border bg-card/50 backdrop-blur">
          <div className="max-w-3xl mx-auto px-4 py-3">
            {/* Attachment preview */}
            {attachment && (
              <div className="mb-2 inline-flex items-center gap-2 bg-muted rounded-lg px-3 py-2">
                {attachment.kind === 'image' ? (
                  <>
                    <ImageIcon className="w-4 h-4 text-primary" />
                    <span className="text-xs text-foreground truncate max-w-[200px]">{attachment.name}</span>
                  </>
                ) : (
                  <>
                    <LinkIcon className="w-4 h-4 text-primary" />
                    <span className="text-xs text-foreground truncate max-w-[200px]">{attachment.url}</span>
                  </>
                )}
                <button onClick={() => setAttachment(null)} className="text-muted-foreground hover:text-foreground">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            <div className="flex items-end gap-2 bg-muted rounded-2xl px-3 py-2 focus-within:ring-1 focus-within:ring-primary/40 transition">
              {/* File upload */}
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={isThinking}
                className="p-2 text-muted-foreground hover:text-primary transition-colors disabled:opacity-50"
                aria-label="Upload image"
                title="Upload image of IMEI/VIN/serial"
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

              {/* Camera */}
              <button
                onClick={() => cameraInputRef.current?.click()}
                disabled={isThinking}
                className="p-2 text-muted-foreground hover:text-primary transition-colors disabled:opacity-50 hidden sm:block"
                aria-label="Take photo"
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

              <Textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                onPaste={handlePaste}
                placeholder="Paste an IMEI, VIN, serial, license plate, or marketplace URL…"
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
                {isThinking ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </Button>
            </div>

            <p className="text-[10px] text-muted-foreground text-center mt-2">
              SafeOrStolen AI may make mistakes. Always confirm high-value items in person.
              {!user && (
                <>
                  {' · '}
                  <a href="/auth?redirect=/ai-verify" className="text-primary hover:underline">
                    Sign in for 2 free checks
                  </a>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

/** Lightweight markdown-ish renderer for **bold**, [link](url), `code`, and \n */
function renderInline(text: string): string {
  const escape = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  let html = escape(text);
  // links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, label, url) => {
    // Only allow safe URL schemes to prevent javascript:/data: XSS via markdown links
    if (!/^(https?:\/\/|mailto:|\/)/i.test(String(url).trim())) {
      return match; // render as plain text
    }
    const safeUrl = String(url).replace(/"/g, '&quot;');
    return `<a href="${safeUrl}" class="text-primary underline hover:opacity-80" rel="noopener noreferrer">${label}</a>`;
  });
  // bold
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  // inline code
  html = html.replace(/`([^`]+)`/g, '<code class="px-1 py-0.5 rounded bg-background/60 text-xs">$1</code>');
  // newlines
  html = html.replace(/\n/g, '<br />');
  return html;
}

const ResultCard: React.FC<{ result: VerifyResult }> = ({ result }) => {
  const tone =
    result.status === 'stolen'
      ? { Icon: AlertTriangle, color: 'text-red-500', bg: 'bg-red-500/10', border: 'border-red-500/30', label: 'STOLEN MATCH' }
      : result.status === 'lost'
      ? { Icon: AlertTriangle, color: 'text-amber-500', bg: 'bg-amber-500/10', border: 'border-amber-500/30', label: 'REPORTED LOST' }
      : result.status === 'safe'
      ? { Icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', label: 'NO REPORTS FOUND' }
      : { Icon: ShieldCheck, color: 'text-muted-foreground', bg: 'bg-muted', border: 'border-border', label: result.status.toUpperCase() };

  return (
    <div className={cn('mt-3 rounded-xl border p-3', tone.bg, tone.border)}>
      <div className="flex items-center gap-2 mb-2">
        <tone.Icon className={cn('w-4 h-4', tone.color)} />
        <span className={cn('text-xs font-bold uppercase tracking-wide', tone.color)}>{tone.label}</span>
        {typeof result.confidence === 'number' && (
          <span className="text-[10px] text-muted-foreground ml-auto">{result.confidence}% confidence</span>
        )}
      </div>
      <div className="text-xs text-muted-foreground space-y-1">
        <div><strong className="text-foreground">{result.itemType.toUpperCase()}:</strong> <code className="text-foreground">{result.identifier}</code></div>
        {result.sources && result.sources.length > 0 && (
          <div>Checked: {result.sources.slice(0, 4).join(', ')}{result.sources.length > 4 ? '…' : ''}</div>
        )}
      </div>
    </div>
  );
};

export default AIVerifyPage;
