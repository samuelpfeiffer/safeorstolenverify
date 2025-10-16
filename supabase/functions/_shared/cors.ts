/**
 * Secure CORS configuration for edge functions
 * Restricts access to approved domains only
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

export function getCorsHeaders(requestOrigin?: string | null): HeadersInit {
  const origin = requestOrigin || '';
  const allowedOrigin = ALLOWED_ORIGINS.includes(origin) 
    ? origin 
    : 'https://safeorstolen.com';

  return {
    'Access-Control-Allow-Origin': allowedOrigin,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-requested-with',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
    'Access-Control-Allow-Credentials': 'true',
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
