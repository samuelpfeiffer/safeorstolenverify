import { Activity } from 'lucide-react';

/**
 * Nov 19 2026: shown when one number has been checked from many different places
 * in the last 7 days (counted server-side from hashed search logs in /verify-api).
 * Only appears for 'watch' or 'high' activity; normal activity shows nothing.
 */
export type LookupActivity = {
  level: 'normal' | 'watch' | 'high';
  checksLast7Days: number;
  differentConnectionsLast7Days: number;
  message: string | null;
};

export function LookupActivityNotice({ activity }: { activity?: LookupActivity | null }) {
  if (!activity || activity.level === 'normal' || !activity.message) return null;
  const high = activity.level === 'high';
  return (
    <div
      className={`rounded-xl border p-4 text-sm ${high ? 'border-amber-500/50 bg-amber-500/10' : 'border-border bg-muted/40'}`}
      role="note"
    >
      <div className="flex items-start gap-2">
        <Activity className={`h-5 w-5 shrink-0 mt-0.5 ${high ? 'text-amber-600' : 'text-primary'}`} />
        <div>
          <p className="font-semibold text-foreground">
            {high ? 'Heavy lookup activity on this number' : 'This number is getting checked a lot'}
          </p>
          <p className="mt-1 text-muted-foreground">{activity.message}</p>
        </div>
      </div>
    </div>
  );
}
