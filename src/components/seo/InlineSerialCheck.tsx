import { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PublicPoliceSearches } from '@/components/verification/PublicPoliceSearches';
import { ParallelVerificationDisplay } from '@/components/verification/ParallelVerificationDisplay';
import { useParallelVerification } from '@/hooks/useParallelVerification';

const STATE_BY_SLUG: Record<string, string> = { 'alabama': 'AL', 'alaska': 'AK', 'arizona': 'AZ', 'arkansas': 'AR', 'california': 'CA', 'colorado': 'CO', 'connecticut': 'CT', 'delaware': 'DE', 'florida': 'FL', 'georgia': 'GA', 'hawaii': 'HI', 'idaho': 'ID', 'illinois': 'IL', 'indiana': 'IN', 'iowa': 'IA', 'kansas': 'KS', 'kentucky': 'KY', 'louisiana': 'LA', 'maine': 'ME', 'maryland': 'MD', 'massachusetts': 'MA', 'michigan': 'MI', 'minnesota': 'MN', 'mississippi': 'MS', 'missouri': 'MO', 'montana': 'MT', 'nebraska': 'NE', 'nevada': 'NV', 'new-hampshire': 'NH', 'new-jersey': 'NJ', 'new-mexico': 'NM', 'new-york': 'NY', 'north-carolina': 'NC', 'north-dakota': 'ND', 'ohio': 'OH', 'oklahoma': 'OK', 'oregon': 'OR', 'pennsylvania': 'PA', 'rhode-island': 'RI', 'south-carolina': 'SC', 'south-dakota': 'SD', 'tennessee': 'TN', 'texas': 'TX', 'utah': 'UT', 'vermont': 'VT', 'virginia': 'VA', 'washington': 'WA', 'west-virginia': 'WV', 'wisconsin': 'WI', 'wyoming': 'WY', 'washington-dc': 'DC' };
function plateStateFromPath(): string | null {
  if (typeof window === 'undefined') return null;
  const m = window.location.pathname.match(/^\/([a-z-]+)-license-plate-lookup/);
  return m ? STATE_BY_SLUG[m[1]] ?? null : null;
}

/**
 * Search box that runs the check and shows the result on the same page.
 * Does not send the user to /verify.
 */
export function InlineSerialCheck({
  type,
  placeholder = 'Enter the serial number',
  buttonLabel = 'Check it free',
  publicPoliceSearches = false,
}: {
  type?: string;
  placeholder?: string;
  buttonLabel?: string;
  publicPoliceSearches?: boolean;
}) {
  const [value, setValue] = useState('');
  const { verify, isLoading, result } = useParallelVerification();

  const go = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const v = value.trim();
    if (!v) return;
    const st = type === 'plate' ? plateStateFromPath() : null;
    await verify(v, type || undefined);
    if (st) {
      // state is used by plate pages; verify detects type from the value
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={go} className="mx-auto flex w-full max-w-2xl flex-col gap-3 sm:flex-row" role="search">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
          autoComplete="off"
          spellCheck={false}
          className="flex-1 rounded-xl border border-border bg-input px-4 py-3 text-base text-foreground placeholder-muted-foreground focus:border-primary focus:outline-hidden"
        />
        <Button type="submit" size="lg" disabled={!value.trim() || isLoading}>
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          {isLoading ? 'Checking' : buttonLabel}
          {!isLoading && <ArrowRight className="ml-2 h-4 w-4" />}
        </Button>
      </form>
      {isLoading && (
        <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">Checking the records now.</p>
      )}
      {result && (
        <div className="mx-auto mt-6 max-w-2xl">
          <ParallelVerificationDisplay result={result} />
        </div>
      )}
      {publicPoliceSearches && <PublicPoliceSearches serial={value} />}
    </div>
  );
}

export default InlineSerialCheck;
