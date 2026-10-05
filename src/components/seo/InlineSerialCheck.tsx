import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    window.location.href = `/verify?q=${encodeURIComponent(v)}${type ? `&type=${type}` : ''}`;
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
