/**
 * AI Model configuration — single source of truth.
 * Referenced by meta tags, marketing surfaces, and edge functions.
 */
export const AI_MODEL_ID = 'claude-sonnet-4-5' as const;
export const AI_MODEL_DISPLAY = 'Claude Sonnet 4.5' as const;
export const AI_MODEL_PROVIDER = 'Anthropic' as const;
export const AI_MODEL_GATEWAY = 'Lovable AI Gateway' as const;
export const AI_POWERED_BY = `${AI_MODEL_PROVIDER} ${AI_MODEL_DISPLAY} via ${AI_MODEL_GATEWAY}` as const;
