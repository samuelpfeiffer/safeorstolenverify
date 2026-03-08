/**
 * Shared Anthropic Claude API helper for all AI edge functions.
 * Uses claude-sonnet-4-5-20250514 as the default model.
 */

const ANTHROPIC_API_URL = 'https://api.anthropic.com/v1/messages';
const DEFAULT_MODEL = 'claude-sonnet-4-5-20250514';

interface AnthropicMessage {
  role: 'user' | 'assistant';
  content: string | Array<{ type: string; text?: string; source?: any; image_url?: any }>;
}

interface AnthropicOptions {
  system: string;
  messages: AnthropicMessage[];
  maxTokens?: number;
  temperature?: number;
  model?: string;
  stream?: boolean;
}

interface AnthropicResponse {
  content: Array<{ type: string; text: string }>;
  model: string;
  stop_reason: string;
}

export function getAnthropicKey(): string {
  const key = Deno.env.get('ANTHROPIC_API_KEY');
  if (!key) throw new Error('ANTHROPIC_API_KEY is not configured');
  return key;
}

/**
 * Call Anthropic Claude API (non-streaming).
 * Returns the text content from the response.
 */
export async function callClaude(options: AnthropicOptions): Promise<string> {
  const apiKey = getAnthropicKey();

  const response = await fetch(ANTHROPIC_API_URL, {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: options.model || DEFAULT_MODEL,
      max_tokens: options.maxTokens || 2048,
      temperature: options.temperature ?? 0.3,
      system: options.system,
      messages: options.messages,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    if (response.status === 429) {
      throw new AnthropicError('Rate limit exceeded. Please try again later.', 429);
    }
    if (response.status === 402) {
      throw new AnthropicError('Anthropic API payment required.', 402);
    }
    throw new AnthropicError(`Anthropic API error: ${response.status} - ${errorText}`, response.status);
  }

  const data: AnthropicResponse = await response.json();
  return data.content?.[0]?.text || '';
}

/**
 * Call Anthropic Claude API with streaming.
 * Returns the raw Response object for SSE forwarding.
 */
export async function callClaudeStream(options: AnthropicOptions): Promise<Response> {
  const apiKey = getAnthropicKey();

  const response = await fetch(ANTHROPIC_API_URL, {
    method: 'POST',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: options.model || DEFAULT_MODEL,
      max_tokens: options.maxTokens || 1024,
      temperature: options.temperature ?? 0.7,
      system: options.system,
      messages: options.messages,
      stream: true,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    if (response.status === 429) {
      throw new AnthropicError('Rate limit exceeded. Please try again later.', 429);
    }
    if (response.status === 402) {
      throw new AnthropicError('Anthropic API payment required.', 402);
    }
    throw new AnthropicError(`Anthropic API error: ${response.status} - ${errorText}`, response.status);
  }

  return response;
}

/**
 * Parse JSON from Claude's text response, handling markdown code blocks.
 */
export function parseJsonResponse<T = any>(content: string): T | null {
  if (!content) return null;

  // Try removing markdown code blocks first
  let jsonStr = content.replace(/```(?:json)?\s*([\s\S]*?)```/g, '$1').trim();
  
  // Try to extract JSON object
  const jsonMatch = jsonStr.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    try {
      return JSON.parse(jsonMatch[0]);
    } catch {
      // Fall through
    }
  }

  // Try parsing the whole thing
  try {
    return JSON.parse(jsonStr);
  } catch {
    return null;
  }
}

export class AnthropicError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
    this.name = 'AnthropicError';
  }
}
