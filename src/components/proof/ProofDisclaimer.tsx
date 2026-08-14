import React from 'react';
import { Info } from 'lucide-react';
import { PROOF_DISCLAIMER } from '@/features/proof/constants';
import { cn } from '@/lib/utils';

/** Verbatim, required disclaimer. Do not soften, shorten or reword the text. */
export const ProofDisclaimer: React.FC<{ className?: string }> = ({ className }) => (
  <div
    className={cn(
      'rounded-xl border border-border bg-muted/40 p-4 flex gap-3 items-start',
      className
    )}
  >
    <Info className="w-4 h-4 mt-0.5 shrink-0 text-muted-foreground" aria-hidden="true" />
    <p className="text-xs leading-relaxed text-muted-foreground">{PROOF_DISCLAIMER}</p>
  </div>
);
