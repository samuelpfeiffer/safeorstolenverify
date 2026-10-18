import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

type Story = { id: string; name: string | null; item_type: string; story: string; experience_type: string };

/** Shows only stories Samuel approved. Renders nothing while there are none. */
export const StoryWall: React.FC<{ limit?: number; title?: string }> = ({ limit = 5, title = 'From people who checked first' }) => {
  const [stories, setStories] = useState<Story[]>([]);
  useEffect(() => {
    let active = true;
    (supabase.rpc as any)('get_public_community_stories').then(({ data, error }: { data: Story[] | null; error: unknown }) => {
      if (!active || error || !Array.isArray(data)) return;
      setStories(data.filter((s) => !String(s.experience_type).endsWith(':private')).slice(0, limit));
    });
    return () => { active = false; };
  }, [limit]);

  if (stories.length === 0) return null;
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {stories.map((s) => (
            <figure key={s.id} className="rounded-xl border border-border bg-card p-5">
              <blockquote className="text-sm text-foreground leading-relaxed">“{s.story}”</blockquote>
              <figcaption className="mt-3 text-xs text-muted-foreground">
                {s.name || 'A SafeOrStolen user'} · {s.item_type}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryWall;
