import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Brain, Sparkles, Minimize2, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/lib/auth';

const LOCAL_KEY = 'sos_ai_floating_chat_v1';


type Msg = { role: 'user' | 'assistant'; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-chat-stream`;

const QUICK_ACTIONS = [
  { label: '📱 How to find IMEI', query: 'How do I find my phone IMEI number?' },
  { label: '🚗 Where is VIN?', query: 'Where can I find the VIN number on my car?' },
  { label: '💰 Pricing', query: 'What are your pricing plans?' },
  { label: '🔍 Verify item', query: 'How do I verify if an item is stolen?' },
];

// Hide the floating bubble on routes where the chat experience IS the page —
// otherwise the orange bubble overlaps the verification workspace.
const HIDDEN_ROUTE_PREFIXES = ['/verify', '/ai-verify', '/ai-chat', '/auth', '/checkout', '/admin'];

export const AIFloatingChat: React.FC = () => {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const hidden = HIDDEN_ROUTE_PREFIXES.some((p) => pathname.startsWith(p));

  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Hydrate from DB (signed-in) or localStorage (guest) once
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        if (user?.id) {
          const { data } = await supabase
            .from('ai_chat_conversations')
            .select('messages')
            .eq('user_id', user.id)
            .maybeSingle();
          if (!cancelled && Array.isArray(data?.messages) && data!.messages.length) {
            setMessages(data!.messages as Msg[]);
            setHydrated(true);
            return;
          }
        }
        const raw = typeof window !== 'undefined' ? localStorage.getItem(LOCAL_KEY) : null;
        if (!cancelled && raw) {
          try { setMessages(JSON.parse(raw)); } catch { /* ignore */ }
        }
      } finally {
        if (!cancelled) setHydrated(true);
      }
    })();
    return () => { cancelled = true; };
  }, [user?.id]);

  // Persist on change (debounced)
  useEffect(() => {
    if (!hydrated) return;
    const t = setTimeout(() => {
      try { localStorage.setItem(LOCAL_KEY, JSON.stringify(messages.slice(-50))); } catch { /* ignore */ }
      if (user?.id && messages.length > 0) {
        supabase
          .from('ai_chat_conversations')
          .upsert({ user_id: user.id, messages: messages.slice(-50), updated_at: new Date().toISOString() }, { onConflict: 'user_id' })
          .then(({ error }) => { if (error) console.warn('chat persist failed', error.message); });
      }
    }, 600);
    return () => clearTimeout(t);
  }, [messages, hydrated, user?.id]);




  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  // Show nudge after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setHasNewMessage(true);
    }, 30000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const streamChat = useCallback(async (allMessages: Msg[]) => {
    setIsStreaming(true);
    let assistantSoFar = '';

    const upsertAssistant = (chunk: string) => {
      assistantSoFar += chunk;
      setMessages(prev => {
        const last = prev[prev.length - 1];
        if (last?.role === 'assistant') {
          return prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: assistantSoFar } : m));
        }
        return [...prev, { role: 'assistant', content: assistantSoFar }];
      });
    };

    try {
      const resp = await fetch(CHAT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          messages: allMessages,
          context: { currentPage: window.location.pathname },
        }),
      });

      if (!resp.ok || !resp.body) {
        // Handle specific errors
        if (resp.status === 429) {
          upsertAssistant("I'm getting a lot of questions right now! Please try again in a moment. 😊");
          setIsStreaming(false);
          return;
        }
        if (resp.status === 402) {
          upsertAssistant("Our AI service is temporarily limited. Please try again later or contact support.");
          setIsStreaming(false);
          return;
        }
        throw new Error('Stream failed');
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = '';
      let streamDone = false;

      while (!streamDone) {
        const { done, value } = await reader.read();
        if (done) break;
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf('\n')) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith('\r')) line = line.slice(0, -1);
          if (line.startsWith(':') || line.trim() === '') continue;
          if (!line.startsWith('data: ')) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === '[DONE]') { streamDone = true; break; }

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) upsertAssistant(content);
          } catch {
            textBuffer = line + '\n' + textBuffer;
            break;
          }
        }
      }

      // Flush remaining
      if (textBuffer.trim()) {
        for (let raw of textBuffer.split('\n')) {
          if (!raw) continue;
          if (raw.endsWith('\r')) raw = raw.slice(0, -1);
          if (raw.startsWith(':') || raw.trim() === '') continue;
          if (!raw.startsWith('data: ')) continue;
          const jsonStr = raw.slice(6).trim();
          if (jsonStr === '[DONE]') continue;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) upsertAssistant(content);
          } catch { /* ignore */ }
        }
      }
    } catch (err) {
      console.error('Chat stream error:', err);
      if (!assistantSoFar) {
        upsertAssistant("Sorry, I'm having trouble connecting right now. Try refreshing the page or check back in a moment!");
      }
    } finally {
      setIsStreaming(false);
    }
  }, []);

  const send = useCallback(async (text: string) => {
    if (!text.trim() || isStreaming) return;
    const userMsg: Msg = { role: 'user', content: text.trim() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    await streamChat(newMessages);
  }, [messages, isStreaming, streamChat]);

  const handleOpen = () => {
    setIsOpen(true);
    setIsMinimized(false);
    setHasNewMessage(false);
    if (messages.length === 0) {
      setMessages([{
        role: 'assistant',
        content: "👋 Hi! I'm your SafeOrStolen AI assistant. I can help you verify items, understand results, find serial numbers, or answer any questions about buying safely. What can I help with?",
      }]);
    }
  };

  // Hide on routes where the chat IS the page (must come AFTER all hooks).
  if (hidden) return null;

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOpen}
            className="fixed bottom-24 right-4 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center group"
            aria-label="Open AI Chat Assistant"
          >
            <MessageCircle className="w-6 h-6" />
            {hasNewMessage && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
              >
                <span className="text-[10px] text-white font-bold">1</span>
              </motion.span>
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className={cn(
              "fixed z-50 bg-background border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col",
              isMinimized
                ? "bottom-24 right-4 w-72 h-14"
                : "bottom-4 right-4 w-[380px] h-[540px] max-h-[80vh]"
            )}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-primary/5 border-b border-border shrink-0">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Brain className="w-5 h-5 text-primary" />
                  <Sparkles className="w-2 h-2 text-primary absolute -top-0.5 -right-0.5" />
                </div>
                <span className="font-semibold text-sm text-foreground">AI Assistant</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-medium">Online</span>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={() => setIsMinimized(!isMinimized)} className="p-1 hover:bg-muted rounded-md transition-colors">
                  {isMinimized ? <Maximize2 className="w-3.5 h-3.5 text-muted-foreground" /> : <Minimize2 className="w-3.5 h-3.5 text-muted-foreground" />}
                </button>
                <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-muted rounded-md transition-colors">
                  <X className="w-3.5 h-3.5 text-muted-foreground" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={cn("flex", msg.role === 'user' ? 'justify-end' : 'justify-start')}
                    >
                      <div className={cn(
                        "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                        msg.role === 'user'
                          ? 'bg-primary text-primary-foreground rounded-br-md'
                          : 'bg-muted text-foreground rounded-bl-md'
                      )}>
                        {msg.content}
                        {msg.role === 'assistant' && isStreaming && i === messages.length - 1 && (
                          <span className="inline-block w-1.5 h-4 bg-primary/50 ml-0.5 animate-pulse" />
                        )}
                      </div>
                    </motion.div>
                  ))}

                  {isStreaming && messages[messages.length - 1]?.role !== 'assistant' && (
                    <div className="flex justify-start">
                      <div className="bg-muted rounded-2xl rounded-bl-md px-4 py-2.5">
                        <div className="flex gap-1">
                          {[0, 1, 2].map(i => (
                            <motion.div
                              key={i}
                              className="w-1.5 h-1.5 rounded-full bg-primary/40"
                              animate={{ opacity: [0.3, 1, 0.3] }}
                              transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Quick actions (only show at start) */}
                {messages.length <= 1 && (
                  <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                    {QUICK_ACTIONS.map((action, i) => (
                      <button
                        key={i}
                        onClick={() => send(action.query)}
                        className="text-xs px-3 py-1.5 rounded-full border border-border hover:border-primary/30 hover:bg-primary/5 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                )}

                {/* Input */}
                <div className="p-3 border-t border-border shrink-0">
                  <div className="flex gap-2">
                    <input
                      ref={inputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && send(input)}
                      placeholder="Ask anything..."
                      className="flex-1 bg-muted rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-1 focus:ring-primary/30 text-foreground placeholder:text-muted-foreground"
                      disabled={isStreaming}
                    />
                    <Button
                      onClick={() => send(input)}
                      disabled={!input.trim() || isStreaming}
                      size="icon"
                      className="rounded-xl h-10 w-10 shrink-0"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                  <p className="text-[10px] text-muted-foreground text-center mt-2">
                    Powered by SafeOrStolen AI · <a href="/pricing" className="text-primary hover:underline">Upgrade for unlimited</a>
                  </p>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
