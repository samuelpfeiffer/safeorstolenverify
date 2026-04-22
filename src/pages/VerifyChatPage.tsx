import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  Paperclip,
  Camera,
  Brain,
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
  Menu,
  Copy,
  RefreshCw,
  Check,
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
import { ConversationSidebar } from '@/components/verify-chat/ConversationSidebar';
import { WelcomeScreen } from '@/components/verify-chat/WelcomeScreen';
import { useChatThreads, type ChatMessage, type Attachment } from '@/hooks/useChatThreads';
import { streamChatReply } from '@/components/verify-chat/streamChatReply';

const URL_REGEX = /^https?:\/\/[^\s]+$/i;
const IDENTIFIER_REGEX = /^[A-Z0-9\-\s]{4,30}$/i;

const VerifyChatPage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const { checkGate, checksRemaining } = useVerifyGate();

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

  const messages = active?.messages || [];
  const sessionResults = active?.results || [];

  const [input, setInput] = useState('');
  const [attachment, setAttachment] = useState<Attachment | null>(null);
  const [isThinking, setIsThinking] = useState(false);

  const [currentResult, setCurrentResult] = useState<ChatVerifyResult | null>(null);
  const [resultsOpenMobile, setResultsOpenMobile] = useState(false);
  const [sidebarOpenMobile, setSidebarOpenMobile] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { isListening, isSupported: voiceSupported, startListening, stopListening } = useVoiceSearch({
    onResult: (text) => setInput((prev) => (prev ? `${prev} ${text}` : text)),
  });

  // Sync currentResult with active thread's most recent
  useEffect(() => {
    setCurrentResult(sessionResults[0] || null);
  }, [activeId]); // eslint-disable-line react-hooks/exhaustive-deps

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages.length, isThinking]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 160)}px`;
    }
  }, [input]);

  const addMessage = useCallback(
    (msg: Omit<ChatMessage, 'id'>): string => {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      setMessages((prev) => [...prev, { ...msg, id }]);
      return id;
    },
    [setMessages],
  );

  const updateMessage = useCallback(
    (id: string, patch: Partial<ChatMessage>) => {
      setMessages((prev) => prev.map((m) => (m.id === id ? { ...m, ...patch } : m)));
    },
    [setMessages],
  );

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

  const extractUrl = (text: string) => {
    const match = text.match(/https?:\/\/[^\s]+/i);
    return match ? match[0] : null;
  };

  const publishResult = useCallback(
    (r: ChatVerifyResult) => {
      setCurrentResult(r);
      addResult(r);
      setResultsOpenMobile(true);
    },
    [addResult],
  );

  /** Determine if a message looks like an identifier vs a follow-up question. */
  const looksLikeIdentifier = (text: string) => {
    const t = text.trim();
    if (URL_REGEX.test(t)) return true;
    // Pure-ish ID (no spaces / sentences)
    if (!/\s/.test(t) && /[A-Za-z0-9]/.test(t) && t.length >= 6 && t.length <= 30) return true;
    // VIN/IMEI/serial with maybe dashes
    if (IDENTIFIER_REGEX.test(t) && t.split(/\s+/).length <= 2) return true;
    return false;
  };

  /** Stream a conversational answer from Claude (ai-chat-stream). */
  const streamFollowUp = useCallback(
    async (assistantId: string, userText: string) => {
      // Build short rolling history
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
    [messages, currentResult, updateMessage],
  );

  const runVerification = useCallback(
    async (assistantId: string, identifier: string) => {
      try {
        const { data: detect, error: detectErr } = await supabase.functions.invoke(
          'ai-detect-identifier',
          { body: { input: identifier } },
        );
        if (detectErr) throw detectErr;

        const itemType = detect?.type || 'serial';
        const cleanedIdentifier = detect?.extractedValue || identifier;
        const confidence = detect?.confidence || 50;

        if (!user) {
          updateMessage(assistantId, {
            loading: false,
            content: `I detected this looks like a **${itemType.toUpperCase()}** (${confidence}% confidence). To run a full verification across 100+ databases, [sign in free](/auth?redirect=/verify) — you get **2 free checks**.`,
            suggestions: ['What is an IMEI?', 'How do I find a VIN?', 'Pricing'],
          });
          return;
        }

        const allowed = await checkGate();
        if (!allowed) {
          updateMessage(assistantId, {
            loading: false,
            content: `You've used your free checks for this period. **Upgrade to Unlimited at $10/mo** or grab a [single check for $0.99](/pricing) to continue.`,
            suggestions: ['Why upgrade?', 'Compare plans'],
          });
          return;
        }

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
          content: `I hit an error verifying that: ${err?.message || 'unknown error'}. Try again, or use the [classic verify page](/verify/classic).`,
        });
      }
    },
    [user, checkGate, publishResult, updateMessage],
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
    [runVerification, updateMessage],
  );

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
    [updateMessage],
  );

  const handleSend = async (overrideText?: string) => {
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
        } else {
          // Conversational follow-up — stream from Claude
          await streamFollowUp(assistantId, text);
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

  const showWelcome = messages.length <= 1 && !isThinking;

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
        <div className="border-b border-border/60 bg-card/40 backdrop-blur shrink-0">
          <div className="px-3 sm:px-4 py-2.5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 min-w-0">
              <button
                onClick={() => setSidebarOpenMobile(true)}
                className="lg:hidden p-1.5 -ml-1 text-muted-foreground hover:text-foreground"
                aria-label="Open conversations"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Brain className="w-4 h-4 text-primary" />
              </div>
              <div className="min-w-0">
                <h1 className="text-sm font-semibold leading-tight truncate">
                  {active?.title || 'SafeOrStolen AI'}
                </h1>
                <p className="text-[10px] text-muted-foreground flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  100+ databases · Powered by Claude
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
                  {sessionResults.length > 0 ? `Results (${sessionResults.length})` : 'Results'}
                </span>
              </Button>
            </div>
          </div>
        </div>

        {/* 3-pane layout */}
        <div className="flex-1 flex overflow-hidden">
          {/* SIDEBAR (left, desktop) */}
          <aside className="hidden lg:block w-64 shrink-0">
            <ConversationSidebar
              threads={threads}
              activeId={activeId}
              onSelect={setActiveId}
              onNew={createThread}
              onDelete={deleteThread}
              onRename={renameThread}
            />
          </aside>

          {/* SIDEBAR (mobile, drawer) */}
          <AnimatePresence>
            {sidebarOpenMobile && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="lg:hidden fixed inset-0 z-50 bg-black/60"
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

          {/* CHAT PANE (center) */}
          <div
            className={cn(
              'flex-1 flex flex-col min-w-0',
              resultsOpenMobile && 'hidden lg:flex',
            )}
          >
            <div ref={scrollRef} className="flex-1 overflow-y-auto">
              <div className="max-w-3xl mx-auto px-4 py-6">
                {showWelcome ? (
                  <WelcomeScreen
                    onPick={(text) => {
                      setInput(text);
                      textareaRef.current?.focus();
                    }}
                  />
                ) : (
                  <div className="space-y-5">
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
                                  // find the previous user message and resend
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

            {/* Composer */}
            <div className="border-t border-border/60 bg-card/40 backdrop-blur shrink-0">
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
                      aria-label="Remove attachment"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}

                <div className="flex items-end gap-1.5 bg-muted rounded-2xl px-2 py-1.5 focus-within:ring-2 focus-within:ring-primary/40 transition shadow-sm">
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
                    placeholder="Paste an IMEI, VIN, serial, plate, URL — or ask me anything…"
                    rows={1}
                    disabled={isThinking}
                    className="flex-1 resize-none bg-transparent border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm py-2 min-h-0 max-h-40"
                  />

                  <Button
                    onClick={() => handleSend()}
                    disabled={(!input.trim() && !attachment) || isThinking}
                    size="icon"
                    className="rounded-xl h-9 w-9 shrink-0"
                    aria-label="Send"
                  >
                    {isThinking ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </Button>
                </div>

                <p className="text-[10px] text-muted-foreground text-center mt-2">
                  🛡 100+ databases · ⚡ ~3s results · 🔒 Anonymous
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
          <aside className="hidden lg:block w-[400px] xl:w-[440px] shrink-0 bg-card/20 border-l border-border/60">
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

/* ──────────────────────────────────────────────────────────────────── */
/*  Chat bubble (with copy + suggestions + regenerate)                   */
/* ──────────────────────────────────────────────────────────────────── */

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
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn('flex gap-3 group', isUser ? 'justify-end' : 'justify-start')}
    >
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center shrink-0 mt-1">
          <Brain className="w-4 h-4 text-primary" />
        </div>
      )}

      <div className={cn('flex flex-col max-w-[85%] min-w-0', isUser && 'items-end')}>
        <div
          className={cn(
            'rounded-2xl px-4 py-3 text-sm leading-relaxed',
            isUser
              ? 'bg-primary text-primary-foreground rounded-br-md shadow-sm'
              : 'bg-card border border-border/60 text-foreground rounded-bl-md',
          )}
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
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce [animation-delay:-0.3s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce [animation-delay:-0.15s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 animate-bounce" />
              </span>
              <span className="text-xs">Thinking…</span>
            </div>
          ) : (
            <div
              className="prose prose-sm prose-invert max-w-none [&_a]:text-primary [&_a]:underline [&_p]:my-1.5 [&_p:first-child]:mt-0 [&_p:last-child]:mb-0"
              dangerouslySetInnerHTML={{ __html: renderInline(msg.content) }}
            />
          )}

          {msg.result && <InlineResultMini result={msg.result} />}
        </div>

        {/* Action toolbar (assistant only, non-loading) */}
        {!isUser && !msg.loading && msg.content && (
          <div className="flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={copy}
              className="p-1.5 text-muted-foreground hover:text-foreground rounded hover:bg-card transition-colors"
              aria-label="Copy"
              title="Copy"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
            {onRegenerate && (
              <button
                onClick={onRegenerate}
                className="p-1.5 text-muted-foreground hover:text-foreground rounded hover:bg-card transition-colors"
                aria-label="Regenerate"
                title="Regenerate"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}

        {/* Suggested follow-ups */}
        {!isUser && isLast && !msg.loading && msg.suggestions && msg.suggestions.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2.5">
            {msg.suggestions.map((s) => (
              <button
                key={s}
                onClick={() => onSuggestion(s)}
                className="text-[11px] px-2.5 py-1 rounded-full border border-border/60 bg-card/60 hover:border-primary/50 hover:bg-primary/5 text-foreground/80 hover:text-foreground transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>

      {isUser && (
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1 text-xs font-bold text-primary">
          You
        </div>
      )}
    </motion.div>
  );
};

/** Lightweight inline markdown */
function renderInline(text: string): string {
  const escape = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  let html = escape(text);
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, url) => {
    const safeUrl = String(url).replace(/"/g, '&quot;');
    return `<a href="${safeUrl}" class="text-primary underline hover:opacity-80">${label}</a>`;
  });
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/_([^_]+)_/g, '<em>$1</em>');
  html = html.replace(/`([^`]+)`/g, '<code class="px-1 py-0.5 rounded bg-background/60 text-xs font-mono">$1</code>');
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
