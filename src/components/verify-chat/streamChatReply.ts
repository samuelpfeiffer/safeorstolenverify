/**
 * Stream a follow-up answer from the ai-chat-stream edge function.
 * Calls onDelta with each token chunk as it arrives.
 */
export async function streamChatReply(opts: {
  messages: { role: 'user' | 'assistant'; content: string }[];
  context?: { currentPage?: string; recentVerification?: any };
  onDelta: (chunk: string) => void;
  signal?: AbortSignal;
}): Promise<void> {
  const { messages, context, onDelta, signal } = opts;

  const url = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/ai-chat-stream`;
  const resp = await fetch(url, {
    method: 'POST',
    signal,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
      apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
    },
    body: JSON.stringify({ messages, context }),
  });

  if (resp.status === 429) throw new Error('Rate limit reached. Please wait a moment.');
  if (resp.status === 402) throw new Error('AI credits exhausted. Please try again later.');
  if (!resp.ok || !resp.body) throw new Error(`Chat error (${resp.status})`);

  const reader = resp.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  let done = false;

  // ai-chat-stream proxies Anthropic's SSE — events like:
  //   event: content_block_delta
  //   data: { "type":"content_block_delta", "delta":{"type":"text_delta","text":"..."} }
  while (!done) {
    const { done: rDone, value } = await reader.read();
    if (rDone) break;
    buffer += decoder.decode(value, { stream: true });

    let nl: number;
    while ((nl = buffer.indexOf('\n')) !== -1) {
      let line = buffer.slice(0, nl);
      buffer = buffer.slice(nl + 1);
      if (line.endsWith('\r')) line = line.slice(0, -1);
      if (!line || line.startsWith(':') || line.startsWith('event:')) continue;
      if (!line.startsWith('data:')) continue;
      const json = line.slice(5).trim();
      if (json === '[DONE]') {
        done = true;
        break;
      }
      try {
        const parsed = JSON.parse(json);
        // Anthropic SSE shape
        const text =
          parsed?.delta?.text ||
          parsed?.delta?.content ||
          // OpenAI-compatible shape (fallback)
          parsed?.choices?.[0]?.delta?.content;
        if (text) onDelta(text);
      } catch {
        // partial — push back
        buffer = line + '\n' + buffer;
        break;
      }
    }
  }
}
