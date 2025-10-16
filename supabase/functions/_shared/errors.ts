/**
 * Secure error handling for edge functions
 * Prevents leaking internal implementation details to clients
 */

export enum ErrorCode {
  INVALID_INPUT = 'INVALID_INPUT',
  RATE_LIMIT = 'RATE_LIMIT_EXCEEDED',
  UNAUTHORIZED = 'UNAUTHORIZED',
  FORBIDDEN = 'FORBIDDEN',
  NOT_FOUND = 'NOT_FOUND',
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  SERVICE_UNAVAILABLE = 'SERVICE_UNAVAILABLE',
}

export interface SanitizedError {
  code: ErrorCode;
  message: string;
  requestId: string;
  field?: string;
}

export function sanitizeError(
  error: unknown,
  context?: {
    userId?: string;
    functionName?: string;
    operation?: string;
  }
): SanitizedError {
  const requestId = crypto.randomUUID();

  // Log full error details server-side only
  console.error(`[ERROR ${requestId}]`, {
    error,
    context,
    timestamp: new Date().toISOString(),
    stack: error instanceof Error ? error.stack : undefined,
  });

  // Return sanitized error to client
  if (error instanceof Error) {
    const message = error.message.toLowerCase();

    // Rate limiting
    if (message.includes('rate limit') || message.includes('too many requests')) {
      return {
        code: ErrorCode.RATE_LIMIT,
        message: 'Too many requests. Please try again later.',
        requestId,
      };
    }

    // Authentication/Authorization
    if (message.includes('unauthorized') || message.includes('authentication')) {
      return {
        code: ErrorCode.UNAUTHORIZED,
        message: 'Authentication required. Please sign in.',
        requestId,
      };
    }

    if (message.includes('permission denied') || message.includes('forbidden')) {
      return {
        code: ErrorCode.FORBIDDEN,
        message: 'You do not have permission to perform this action.',
        requestId,
      };
    }

    // Not found
    if (message.includes('not found') || message.includes('does not exist')) {
      return {
        code: ErrorCode.NOT_FOUND,
        message: 'The requested resource was not found.',
        requestId,
      };
    }

    // Service unavailable
    if (message.includes('timeout') || message.includes('unavailable') || message.includes('503')) {
      return {
        code: ErrorCode.SERVICE_UNAVAILABLE,
        message: 'Service temporarily unavailable. Please try again.',
        requestId,
      };
    }

    // Invalid input (be careful not to leak validation details)
    if (message.includes('invalid') || message.includes('validation')) {
      return {
        code: ErrorCode.INVALID_INPUT,
        message: 'Invalid input provided. Please check your data and try again.',
        requestId,
      };
    }
  }

  // Default safe error response
  return {
    code: ErrorCode.INTERNAL_ERROR,
    message: 'An unexpected error occurred. Please contact support with request ID: ' + requestId,
    requestId,
  };
}

export function createErrorResponse(
  error: unknown,
  context?: {
    userId?: string;
    functionName?: string;
    operation?: string;
  },
  headers?: HeadersInit
): Response {
  const sanitized = sanitizeError(error, context);
  
  const statusMap: Record<ErrorCode, number> = {
    [ErrorCode.INVALID_INPUT]: 400,
    [ErrorCode.UNAUTHORIZED]: 401,
    [ErrorCode.FORBIDDEN]: 403,
    [ErrorCode.NOT_FOUND]: 404,
    [ErrorCode.RATE_LIMIT]: 429,
    [ErrorCode.INTERNAL_ERROR]: 500,
    [ErrorCode.SERVICE_UNAVAILABLE]: 503,
  };

  return new Response(
    JSON.stringify(sanitized),
    {
      status: statusMap[sanitized.code] || 500,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    }
  );
}
