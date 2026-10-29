import { useEffect } from 'react';

/**
 * Oct 28 2026 (owner rule): every search and every dashboard visit happens in the one AI chat
 * at /verify. Old routes (/dashboard, /mobile-verify, /mobile-dashboard) send people there and
 * keep their query string (q, type, session_id, checkout, tab...). `view` opens a left-menu page
 * (like the dashboard) on the right side of the chat.
 */
export function ToVerifyChat({ view }: { view?: string }) {
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    if (view && !p.has('view')) p.set('view', view);
    const qs = p.toString();
    window.location.replace(`/verify${qs ? `?${qs}` : ''}`);
  }, [view]);
  return (
    <div className="min-h-[50vh] flex items-center justify-center text-muted-foreground">
      <a href="/verify" className="text-primary hover:underline">Opening SafeOrStolen…</a>
    </div>
  );
}
