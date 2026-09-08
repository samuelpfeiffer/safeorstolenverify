import React, { useState } from 'react';
import { Plus, MessageSquare, Trash2, Pencil, Check, X, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { ChatThread } from '@/hooks/useChatThreads';

interface Props {
  threads: ChatThread[];
  activeId: string;
  onSelect: (id: string) => void;
  onNew: () => void;
  onDelete: (id: string) => void;
  onRename: (id: string, title: string) => void;
  onClose?: () => void;
}

export const ConversationSidebar: React.FC<Props> = ({
  threads,
  activeId,
  onSelect,
  onNew,
  onDelete,
  onRename,
  onClose,
}) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draft, setDraft] = useState('');

  const startEdit = (t: ChatThread) => {
    setEditingId(t.id);
    setDraft(t.title);
  };

  const commitEdit = () => {
    if (editingId && draft.trim()) onRename(editingId, draft.trim());
    setEditingId(null);
  };

  return (
    <div className="h-full flex flex-col bg-card/40 border-r border-border/60">
      {/* Header */}
      <div className="px-3 py-3 border-b border-border/60 flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
          <ShieldCheck className="w-4 h-4 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs font-bold text-foreground leading-tight">SafeOrStolen</div>
          <div className="text-[10px] text-muted-foreground leading-tight">AI Verification</div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="lg:hidden p-1.5 text-muted-foreground hover:text-foreground"
            aria-label="Close sidebar"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* New chat */}
      <div className="p-2">
        <Button
          onClick={onNew}
          variant="outline"
          className="w-full justify-start gap-2 h-9 text-sm border-border/60 hover:border-primary/50 hover:bg-primary/5"
        >
          <Plus className="w-4 h-4" />
          New verification
        </Button>
      </div>

      {/* Threads */}
      <div className="flex-1 overflow-y-auto px-2 pb-2">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground px-2 py-1.5">
          Recent
        </div>
        <div className="space-y-0.5">
          {threads.map((t) => {
            const isActive = t.id === activeId;
            const isEditing = editingId === t.id;
            const lastResult = t.results[0];
            return (
              <div
                key={t.id}
                className={cn(
                  'group relative rounded-lg transition-colors',
                  isActive
                    ? 'bg-primary/10 border border-primary/30'
                    : 'hover:bg-card border border-transparent',
                )}
              >
                {isEditing ? (
                  <div className="flex items-center gap-1 p-1.5">
                    <input
                      autoFocus
                      value={draft}
                      onChange={(e) => setDraft(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') commitEdit();
                        if (e.key === 'Escape') setEditingId(null);
                      }}
                      className="flex-1 bg-background border border-border rounded-[0.25rem] px-2 py-1 text-xs"
                    />
                    <button
                      onClick={commitEdit}
                      className="p-1 text-emerald-500 hover:text-emerald-400"
                      aria-label="Save"
                    >
                      <Check className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="p-1 text-muted-foreground hover:text-foreground"
                      aria-label="Cancel"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => onSelect(t.id)}
                    className="w-full text-left flex items-start gap-2 px-2.5 py-2"
                  >
                    <MessageSquare
                      className={cn(
                        'w-3.5 h-3.5 mt-0.5 shrink-0',
                        isActive ? 'text-primary' : 'text-muted-foreground',
                      )}
                    />
                    <div className="flex-1 min-w-0">
                      <div
                        className={cn(
                          'text-xs font-medium truncate',
                          isActive ? 'text-foreground' : 'text-foreground/90',
                        )}
                      >
                        {t.title}
                      </div>
                      {lastResult && (
                        <div className="text-[10px] text-muted-foreground truncate mt-0.5">
                          {lastResult.status === 'safe' && '✓ '}
                          {lastResult.status === 'stolen' && '⚠ '}
                          {lastResult.status === 'lost' && '⚠ '}
                          {lastResult.itemType.toUpperCase()} · {lastResult.identifier}
                        </div>
                      )}
                    </div>

                    {/* Hover actions */}
                    <div className="opacity-0 group-hover:opacity-100 flex items-center gap-0.5 transition-opacity">
                      <span
                        role="button"
                        tabIndex={0}
                        onClick={(e) => {
                          e.stopPropagation();
                          startEdit(t);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.stopPropagation();
                            startEdit(t);
                          }
                        }}
                        className="p-1 text-muted-foreground hover:text-foreground rounded-[0.25rem] cursor-pointer"
                        aria-label="Rename"
                      >
                        <Pencil className="w-3 h-3" />
                      </span>
                      <span
                        role="button"
                        tabIndex={0}
                        onClick={(e) => {
                          e.stopPropagation();
                          onDelete(t.id);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.stopPropagation();
                            onDelete(t.id);
                          }
                        }}
                        className="p-1 text-muted-foreground hover:text-red-500 rounded-[0.25rem] cursor-pointer"
                        aria-label="Delete"
                      >
                        <Trash2 className="w-3 h-3" />
                      </span>
                    </div>
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border/60 p-3">
        <div className="text-[10px] text-muted-foreground leading-relaxed">
          🔒 Conversations stored locally on your device. Sign in to sync &amp; download reports.
        </div>
      </div>
    </div>
  );
};
