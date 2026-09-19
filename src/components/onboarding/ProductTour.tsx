import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const SEEN_KEY = 'sos-product-tour-v1-seen';
const CALLOUT_WIDTH = 336;
const EDGE_GAP = 16;
const TARGET_GAP = 14;

const STEPS = [
  { target: 'search', title: 'Search or ask', description: 'Paste an IMEI, VIN, serial number, or marketplace link here, or just ask a question.' },
  { target: 'quick-actions', title: 'Quick starts', description: 'Or tap one of these to get started.' },
  { target: 'free-checks', title: 'Your first checks are free', description: 'Your first 2 checks are free once you create an account — no credit card needed.' },
  { target: 'history', title: 'Find every check again', description: 'Every check you run is saved in your Dashboard so you can find it again.' },
] as const;

interface Position {
  left: number;
  top: number;
  placement: 'above' | 'below';
}

function findVisibleTarget(name: string) {
  const matches = Array.from(document.querySelectorAll<HTMLElement>(`[data-tour="${name}"]`));
  return matches.find((element) => {
    const rect = element.getBoundingClientRect();
    const style = window.getComputedStyle(element);
    return rect.width > 0 && rect.height > 0 && style.display !== 'none' && style.visibility !== 'hidden';
  }) ?? null;
}

export function ProductTour() {
  const [isOpen, setIsOpen] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [position, setPosition] = useState<Position | null>(null);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const calloutRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const currentStep = STEPS[stepIndex];

  const finish = useCallback(() => {
    try {
      window.localStorage.setItem(SEEN_KEY, 'true');
    } catch {
      // Closing still works when browser storage is unavailable.
    }
    setIsOpen(false);
  }, []);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(SEEN_KEY)) {
        previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        setIsOpen(true);
      }
    } catch {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) {
      previousFocusRef.current?.focus();
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        finish();
        return;
      }
      if (event.key !== 'Tab' || !calloutRef.current) return;
      const controls = Array.from(calloutRef.current.querySelectorAll<HTMLElement>('button, [href], [tabindex]:not([tabindex="-1"])'));
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [finish, isOpen]);

  const updatePosition = useCallback(() => {
    if (!isOpen) return;
    const target = findVisibleTarget(currentStep.target);
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const calloutHeight = calloutRef.current?.offsetHeight ?? 210;
    const availableBelow = window.innerHeight - rect.bottom;
    const placement = availableBelow >= calloutHeight + TARGET_GAP + EDGE_GAP ? 'below' : 'above';
    const maxLeft = Math.max(EDGE_GAP, window.innerWidth - CALLOUT_WIDTH - EDGE_GAP);
    const left = Math.min(Math.max(rect.left + rect.width / 2 - CALLOUT_WIDTH / 2, EDGE_GAP), maxLeft);
    const top = placement === 'below'
      ? Math.min(rect.bottom + TARGET_GAP, window.innerHeight - calloutHeight - EDGE_GAP)
      : Math.max(EDGE_GAP, rect.top - calloutHeight - TARGET_GAP);
    setTargetRect(rect);
    setPosition({ left, top, placement });
  }, [currentStep.target, isOpen]);

  useLayoutEffect(() => {
    if (!isOpen) return;
    findVisibleTarget(currentStep.target)?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    const frame = window.requestAnimationFrame(updatePosition);
    const settleTimer = window.setTimeout(updatePosition, 350);
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(settleTimer);
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [currentStep.target, isOpen, updatePosition]);

  useEffect(() => {
    if (isOpen && position) calloutRef.current?.focus();
  }, [isOpen, position, stepIndex]);

  if (!isOpen || typeof document === 'undefined') return null;
  const isLastStep = stepIndex === STEPS.length - 1;
  const spotlightStyle = targetRect ? {
    left: Math.max(targetRect.left - 6, 4),
    top: Math.max(targetRect.top - 6, 4),
    width: Math.min(targetRect.width + 12, window.innerWidth - 8),
    height: Math.min(targetRect.height + 12, window.innerHeight - 8),
  } : undefined;

  return createPortal(
    <div className="fixed inset-0 z-[100]" role="dialog" aria-modal="true" aria-label="SafeOrStolen product tour">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[1px]" />
      {spotlightStyle && <div aria-hidden="true" className="pointer-events-none fixed rounded-xl border-2 border-primary bg-transparent shadow-[0_0_0_4px_hsl(var(--primary)/0.16),0_0_34px_hsl(var(--primary)/0.48)]" style={spotlightStyle} />}
      <div
        ref={calloutRef}
        tabIndex={-1}
        className={cn('fixed w-[calc(100vw-2rem)] max-w-[336px] rounded-lg border border-primary/60 bg-card p-5 text-card-foreground shadow-2xl outline-hidden', position ? 'opacity-100' : 'opacity-0')}
        style={position ? { left: position.left, top: position.top } : undefined}
      >
        <span aria-hidden="true" className={cn('absolute left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-primary/60 bg-card', position?.placement === 'above' ? '-bottom-1.5 border-b border-r' : '-top-1.5 border-l border-t')} />
        <Button type="button" variant="ghost" size="icon" onClick={finish} className="absolute right-2 top-2 h-8 w-8 text-muted-foreground hover:text-foreground" aria-label="Close product tour">
          <X className="h-4 w-4" />
        </Button>
        <div className="pr-8">
          <p className="mb-2 text-xs font-bold uppercase text-primary">{stepIndex + 1} / {STEPS.length}</p>
          <h2 className="text-lg font-bold text-foreground">{currentStep.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{currentStep.description}</p>
        </div>
        <div className="mt-5 flex justify-end">
          <Button type="button" onClick={() => isLastStep ? finish() : setStepIndex((index) => index + 1)} className="min-w-24 font-semibold">
            {isLastStep ? 'Got it' : 'Next'}
            {!isLastStep && <ArrowRight className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  );
}