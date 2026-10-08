import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Plate state from a state page's path (/texas-license-plate-lookup → TX), so the plate is searched
// with the state that issued it.
const STATE_BY_SLUG: Record<string, string> = { 'alabama': 'AL', 'alaska': 'AK', 'arizona': 'AZ', 'arkansas': 'AR', 'california': 'CA', 'colorado': 'CO', 'connecticut': 'CT', 'delaware': 'DE', 'florida': 'FL', 'georgia': 'GA', 'hawaii': 'HI', 'idaho': 'ID', 'illinois': 'IL', 'indiana': 'IN', 'iowa': 'IA', 'kansas': 'KS', 'kentucky': 'KY', 'louisiana': 'LA', 'maine': 'ME', 'maryland': 'MD', 'massachusetts': 'MA', 'michigan': 'MI', 'minnesota': 'MN', 'mississippi': 'MS', 'missouri': 'MO', 'montana': 'MT', 'nebraska': 'NE', 'nevada': 'NV', 'new-hampshire': 'NH', 'new-jersey': 'NJ', 'new-mexico': 'NM', 'new-york': 'NY', 'north-carolina': 'NC', 'north-dakota': 'ND', 'ohio': 'OH', 'oklahoma': 'OK', 'oregon': 'OR', 'pennsylvania': 'PA', 'rhode-island': 'RI', 'south-carolina': 'SC', 'south-dakota': 'SD', 'tennessee': 'TN', 'texas': 'TX', 'utah': 'UT', 'vermont': 'VT', 'virginia': 'VA', 'washington': 'WA', 'west-virginia': 'WV', 'wisconsin': 'WI', 'wyoming': 'WY', 'washington-dc': 'DC' };
function plateStateFromPath(): string | null {
  if (typeof window === 'undefined') return null;
  const m = window.location.pathname.match(/^\/([a-z-]+)-license-plate-lookup/);
  return m ? STATE_BY_SLUG[m[1]] ?? null : null;
}

/**
 * Oct 5 2026: a real search box on the landing pages. People searching "free serial number
 * search" expect to type the number on the page they land on, not click through to another one.
 * Sends the value to /verify, which runs the check straight away.
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
    const st = type === 'plate' ? plateStateFromPath() : null;
    window.location.href = `/verify?q=${encodeURIComponent(v)}${type ? `&type=${type}` : ''}${st ? `&state=${st}` : ''}`;
  };
  return (
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
  );
}

export default InlineSerialCheck;
