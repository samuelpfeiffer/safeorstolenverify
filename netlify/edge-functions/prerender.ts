const PRERENDER_TOKEN = "iiMthWrIIiQhunohL2U5";

const BOT_AGENTS = [
  'googlebot', 'bingbot', 'yandex', 'baiduspider', 'facebookexternalhit',
  'twitterbot', 'linkedinbot', 'pinterest', 'slackbot', 'whatsapp',
  'telegrambot', 'gptbot', 'perplexitybot', 'claude-web', 'applebot',
  'discordbot', 'redditbot'
];

export default async (request: Request, context: { next: () => Promise<Response> }) => {
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
  const isBot = BOT_AGENTS.some(bot => userAgent.includes(bot));
  
  if (isBot && !request.url.includes('/api/')) {
    const prerenderUrl = `https://service.prerender.io/${request.url}`;
    try {
      const response = await fetch(prerenderUrl, {
        headers: { 'X-Prerender-Token': PRERENDER_TOKEN }
      });
      return new Response(await response.text(), {
        status: response.status,
        headers: { 'Content-Type': 'text/html' }
      });
    } catch (e) {
      return context.next();
    }
  }
  return context.next();
};

export const config = { path: "/*" };
