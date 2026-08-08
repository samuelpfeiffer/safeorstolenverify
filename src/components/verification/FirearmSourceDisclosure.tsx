import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Honest source disclosure for firearm verification results.
 *
 * SafeOrStolen checks stolen firearms databases and
 * validates serial number integrity.
 * state police systems — those are restricted to law enforcement.
 *
 * Rendered on EVERY firearm result, including clean ones.
 */
export const FirearmSourceDisclosure: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn('space-y-2 text-[11px] leading-relaxed text-muted-foreground', className)}>
    <p>
      Source: stolen firearms databases. This is not a federal
      database check.
    </p>
    <p>
      For a definitive check, contact your local police non-emergency line and ask them to run the
This is the only database containing all reported stolen firearms, and it
      is restricted to law enforcement.
    </p>
  </div>
);

/**
 * True when a verification result relates to a firearm.
 */
export const isFirearmItemType = (itemType?: string | null): boolean => {
  if (!itemType) return false;
  const t = itemType.toLowerCase();
  return (
    t.includes('firearm') ||
    t.includes('gun') ||
    t.includes('rifle') ||
    t.includes('pistol') ||
    t.includes('handgun') ||
    t.includes('shotgun')
  );
};

export default FirearmSourceDisclosure;
