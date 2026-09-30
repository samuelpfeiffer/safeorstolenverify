import React, { useState } from 'react';
import { Bell, BellRing, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';

/**
 * "Watch this for 30 days" — adds the item to the user's watchlist.
 * The daily re-check (check-watchlist-matches, mode=sweep, 7 a.m. Arizona time)
 * searches the same real sources again and emails the user once if it's reported stolen.
 */
interface WatchButtonProps {
  identifier: string;
  itemType: 'vehicle' | 'plate' | 'firearm' | 'bicycle';
}

const WHAT: Record<WatchButtonProps['itemType'], string> = {
  vehicle: 'Arizona police stolen-vehicle records',
  plate: 'Arizona police stolen-vehicle records',
  firearm: 'Ohio police stolen-gun records',
  bicycle: 'the BikeIndex stolen bike registry',
};

export const WatchButton: React.FC<WatchButtonProps> = ({ identifier, itemType }) => {
  const { user } = useUnifiedAuth();
  const [saving, setSaving] = useState(false);
  const [watching, setWatching] = useState(false);
  const clean = identifier.replace(/\s+/g, '').toUpperCase();

  if (!user) return null;

  const watch = async () => {
    setSaving(true);
    try {
      const { data: existing } = await supabase
        .from('user_watchlist')
        .select('id')
        .eq('user_id', user.id)
        .eq('identifier', clean)
        .limit(1);
      if (existing && existing.length > 0) {
        setWatching(true);
        toast.message("You're already watching this one.");
        return;
      }
      const { error } = await supabase.from('user_watchlist').insert({
        user_id: user.id,
        item_type: itemType === 'plate' ? 'plate' : itemType,
        identifier: clean,
        description: 'Added from a check',
        alert_email: true,
      } as any);
      if (error) throw error;
      setWatching(true);
      toast.success("Watching for 30 days. We'll email you if it's reported stolen.");
    } catch (err: any) {
      toast.error(err?.message ? `Couldn't add it: ${err.message}` : "Couldn't add it. Try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <section className="rounded-2xl border border-border bg-card/60 p-4 flex items-start gap-3">
      {watching ? (
        <BellRing className="h-5 w-5 mt-0.5 shrink-0 text-primary" aria-hidden />
      ) : (
        <Bell className="h-5 w-5 mt-0.5 shrink-0 text-muted-foreground" aria-hidden />
      )}
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-foreground">
          {watching ? 'Watching this item' : 'Not ready to buy yet?'}
        </p>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
          {watching
            ? `We'll re-check ${WHAT[itemType]} every morning for 30 days and email you if it's reported stolen. Manage it in your dashboard.`
            : `We'll re-check ${WHAT[itemType]} every morning for 30 days and email you if it's reported stolen.`}
        </p>
        {!watching && (
          <Button size="sm" variant="secondary" className="mt-3" onClick={watch} disabled={saving}>
            {saving ? <Loader2 className="mr-2 h-3.5 w-3.5 animate-spin" aria-hidden /> : <Bell className="mr-2 h-3.5 w-3.5" aria-hidden />}
            Watch this for 30 days
          </Button>
        )}
      </div>
    </section>
  );
};

export default WatchButton;
