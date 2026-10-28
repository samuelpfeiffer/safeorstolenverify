import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const STATE_BY_SLUG: Record<string, string> = { 'alabama': 'AL', 'alaska': 'AK', 'arizona': 'AZ', 'arkansas': 'AR', 'california': 'CA', 'colorado': 'CO', 'connecticut': 'CT', 'delaware': 'DE', 'florida': 'FL', 'georgia': 'GA', 'hawaii': 'HI', 'idaho': 'ID', 'illinois': 'IL', 'indiana': 'IN', 'iowa': 'IA', 'kansas': 'KS', 'kentucky': 'KY', 'louisiana': 'LA', 'maine': 'ME', 'maryland': 'MD', 'massachusetts': 'MA', 'michigan': 'MI', 'minnesota': 'MN', 'mississippi': 'MS', 'missouri': 'MO', 'montana': 'MT', 'nebraska': 'NE', 'nevada': 'NV', 'new-hampshire': 'NH', 'new-jersey': 'NJ', 'new-mexico': 'NM', 'new-york': 'NY', 'north-carolina': 'NC', 'north-dakota': 'ND', 'ohio': 'OH', 'oklahoma': 'OK', 'oregon': 'OR', 'pennsylvania': 'PA', 'rhode-island': 'RI', 'south-carolina': 'SC', 'south-dakota': 'SD', 'tennessee': 'TN', 'texas': 'TX', 'utah': 'UT', 'vermont': 'VT', 'virginia': 'VA', 'washington': 'WA', 'west-virginia': 'WV', 'wisconsin': 'WI', 'wyoming': 'WY', 'washington-dc': 'DC' };
function plateStateFromPath(): string | null {
  if (typeof window === 'undefined') return null;
  const m = window.location.pathname.match(/^\/([a-z-]+)-license-plate-lookup/);
  return m ? STATE_BY_SLUG[m[1]] ?? null : null;
}

/**
 * Search box that runs the check and shows the result on the same page.
 * Oct 28 2026 (owner rule): every search runs in the dashboard at /verify.
 */
export function InlineSerialCheck({
  type,
  placeholder = 'Enter the serial number',
  buttonLabel = 'Check it free',
}: {
  type?: string;
  placeholder?: string;
  buttonLabel?: string;
}) {
  const [value, setValue] = useState('');

  const go = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const v = value.trim();
    if (!v) return;
    // Oct 21 2026: keep the item type so the homepage check searches the right records
    // (a gun serial sent without type=firearm skipped the firearm theft reports).
    const t = type ? `&type=${encodeURIComponent(type)}` : '';
    window.location.href = `/verify?q=${encodeURIComponent(v)}${t}`;
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
        <Button type="submit" size="lg" disabled={!value.trim()}>
          {buttonLabel}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}

export default InlineSerialCheck;
