import React, { useState } from 'react';
import { Link } from '@/lib/router-compat';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/lib/auth';

/**
 * Oct 18 2026: real customer stories only. Signed-in users can tell us how a check helped.
 * Every story is saved with is_approved = false and only shows on the site after Samuel
 * approves it in the database. Nothing here is ever published automatically.
 */
const ITEM_TYPES = ['Phone', 'Car or truck', 'Gun', 'Tool', 'Bike', 'Game console', 'Laptop or electronics', 'Appliance', 'Other'];
const OUTCOMES = [
  { value: 'clean', label: 'The check came back clean and I bought it' },
  { value: 'warning', label: 'The check found a problem and I walked away' },
  { value: 'seller', label: 'I am a seller and used it to show my item was clean' },
  { value: 'other', label: 'Something else' },
];

export const StoryForm: React.FC<{ compact?: boolean }> = ({ compact }) => {
  const { user } = useAuth();
  const [name, setName] = useState('');
  const [itemType, setItemType] = useState(ITEM_TYPES[0]);
  const [outcome, setOutcome] = useState(OUTCOMES[0].value);
  const [story, setStory] = useState('');
  const [ok, setOk] = useState(false);
  const [state, setState] = useState<'idle' | 'saving' | 'done' | 'error'>('idle');

  if (!user) {
    return (
      <div className="rounded-xl border border-border bg-card p-5 text-sm">
        <p className="font-semibold text-foreground mb-1">Did a check help you?</p>
        <p className="text-muted-foreground">
          <Link to="/auth" className="text-primary hover:underline">Sign in</Link> to tell us what happened. We read every one.
        </p>
      </div>
    );
  }

  if (state === 'done') {
    return (
      <div className="rounded-xl border border-border bg-card p-5 text-sm">
        <p className="font-semibold text-foreground">Thank you!</p>
        <p className="text-muted-foreground mt-1">We got your story. If you said we can share it, it may show on the site after we read it.</p>
      </div>
    );
  }

  const submit = async () => {
    if (story.trim().length < 10) return;
    setState('saving');
    const { error } = await (supabase.from('community_stories') as any).insert({
      user_id: user.id,
      name: name.trim() || null,
      item_type: itemType,
      experience_type: ok ? outcome : `${outcome}:private`,
      story: story.trim().slice(0, 600),
      is_approved: false,
    });
    setState(error ? 'error' : 'done');
  };

  return (
    <div className="rounded-xl border border-border bg-card p-5 space-y-3 text-sm">
      <p className="font-semibold text-foreground">{compact ? 'Tell us how your check helped' : 'Share how a check helped you'}</p>
      <input
        className="w-full rounded-lg border border-border bg-background px-3 py-2"
        placeholder="First name (optional)"
        value={name}
        maxLength={60}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="grid gap-3 sm:grid-cols-2">
        <select className="rounded-lg border border-border bg-background px-3 py-2" value={itemType} onChange={(e) => setItemType(e.target.value)}>
          {ITEM_TYPES.map((t) => <option key={t}>{t}</option>)}
        </select>
        <select className="rounded-lg border border-border bg-background px-3 py-2" value={outcome} onChange={(e) => setOutcome(e.target.value)}>
          {OUTCOMES.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>
      <textarea
        className="w-full rounded-lg border border-border bg-background px-3 py-2 min-h-[90px]"
        placeholder="What were you buying or selling, and what did the check tell you?"
        value={story}
        maxLength={600}
        onChange={(e) => setStory(e.target.value)}
      />
      <label className="flex items-start gap-2 text-muted-foreground">
        <input type="checkbox" className="mt-1" checked={ok} onChange={(e) => setOk(e.target.checked)} />
        <span>SafeOrStolen can show this on its website with my first name.</span>
      </label>
      <button
        onClick={submit}
        disabled={state === 'saving' || story.trim().length < 10}
        className="inline-flex items-center rounded-lg bg-primary px-4 py-2 font-semibold text-primary-foreground disabled:opacity-50"
      >
        {state === 'saving' ? 'Sending…' : 'Send'}
      </button>
      {state === 'error' && <p className="text-destructive">That didn't go through. Please try again.</p>}
    </div>
  );
};

export default StoryForm;
