import React from 'react';
import { cn } from '@/lib/utils';

/**
 * "Complete your check" panel for firearm verification results.
 *
 * SafeOrStolen checks the HotGunz national stolen-firearms registry and analyzes
 * serial number integrity. It does NOT query NCIC, ATF eTrace, or state police
 * systems. This panel tells the buyer, honestly, how to close that gap.
 *
 * Rendered BELOW every firearm result, regardless of status.
 * Informational — deliberately calm, not an alert.
 */
export const FirearmNextSteps: React.FC<{ className?: string }> = ({ className }) => (
  <section
    aria-label="Complete your firearm check"
    className={cn('rounded-xl border border-border bg-card/50 p-5', className)}
  >
    <h3 className="text-foreground font-bold text-base">Complete your check</h3>
    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
      No public database is complete. Here&apos;s how to be certain before you buy.
    </p>

    <ol className="mt-4 space-y-4">
      <li>
        <h4 className="text-foreground font-semibold text-sm">Ask local police to run NCIC</h4>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
          The FBI&apos;s National Crime Information Center is the only complete national stolen-gun
          file, and it&apos;s restricted to law enforcement. Call your local police or sheriff&apos;s
          non-emergency line and ask them to run the serial. Many departments will do this for a
          resident considering a private sale. Call ahead to confirm their process.
        </p>
      </li>

      <li>
        <h4 className="text-foreground font-semibold text-sm">Search your state&apos;s public registry</h4>
        <ul className="mt-1 space-y-1">
          <li>
            <a
              href="https://www.ohioattorneygeneral.gov/stolengun"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              Ohio Stolen Gun Portal
            </a>
          </li>
          <li>
            <a
              href="https://pas.fdle.state.fl.us/pas/restricted/PAS/StolenGun.jsf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              Florida FDLE Stolen Gun Search
            </a>
          </li>
        </ul>
        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
          State registries cover only firearms reported in that state. Coverage varies.
        </p>
      </li>

      <li>
        <h4 className="text-foreground font-semibold text-sm">
          Licensed dealers can now check NCIC directly
        </h4>
        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
          Since August 2025, the Bipartisan Safer Communities Act allows Federal Firearms Licensees
          to voluntarily query the FBI&apos;s NCIC Stolen Gun File before acquiring a firearm. If
          you&apos;re buying through an FFL, ask them to run it.
        </p>
      </li>
    </ol>

    <p className="mt-4 border-t border-border pt-3 text-xs text-muted-foreground leading-relaxed">
      SafeOrStolen checks the HotGunz national registry and analyzes serial integrity. A clean
      result means no match was found in that registry — it is not a clearance.
    </p>
  </section>
);

export default FirearmNextSteps;
