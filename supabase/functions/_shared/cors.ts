/**
 * Secure CORS + Security Headers for edge functions
 * Restricts access to approved domains only
 * Includes 2026-compliant security headers
 */

const ALLOWED_ORIGINS = [
  'https://safeorstolen.com',
  'https://www.safeorstolen.com',
  'https://lxrdzbknktwlubbmlsqe.supabase.co',
  ...(Deno.env.get('ENVIRONMENT') === 'development' 
    ? ['http://localhost:5173', 'http://localhost:8000'] 
    : []
  ),
];

// Check if origin is a Lovable preview domain
function isLovablePreview(origin: string): boolean {
  return origin.endsWith('.lovableproject.com') || origin.endsWith('.lovable.app');
}

/**
 * 2026 Security Headers — applied to ALL edge function responses
 * Prevents clickjacking, MIME-sniffing, and enforces HTTPS
 */
const SECURITY_HEADERS: Record<string, string> = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '0',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
};

export function getCorsHeaders(requestOrigin?: string | null): HeadersInit {
  const origin = requestOrigin || '';
  const allowedOrigin = ALLOWED_ORIGINS.includes(origin) || isLovablePreview(origin)
    ? origin 
    : 'https://safeorstolen.com';

  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-requested-with',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
    'Access-Control-Allow-Credentials': 'true',
    ...SECURITY_HEADERS,
  };
}

export function handleCorsPreFlight(req: Request): Response | null {
  if (req.method === 'OPTIONS') {
    const origin = req.headers.get('origin');
    return new Response(null, {
      status: 204,
      headers: getCorsHeaders(origin),
    });
  }
  return null;
}
