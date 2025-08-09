// Lightweight toast wrapper to avoid React hook issues
// Delegates to sonner and keeps the same import surface
import { toast as sonnerToast } from "@/components/ui/sonner";
import { isValidElement, type ReactNode } from "react";

// Compatible wrapper so existing `toast({ title, description, variant })` calls keep working
export type ShadcnToastArgs = {
  title?: ReactNode;
  description?: ReactNode;
  variant?: "default" | "destructive";
  duration?: number;
};

function compatibleToast(arg: ShadcnToastArgs | ReactNode, opts?: { description?: ReactNode; duration?: number }) {
  // If called like toast("Message", { description })
  if (typeof arg === "string" || typeof arg === "number" || isValidElement(arg)) {
    const message = arg as ReactNode;
    return sonnerToast(message as any, opts as any);
  }

  const { title, description, variant, duration } = (arg || {}) as ShadcnToastArgs;
  const message = title ?? description ?? "";
  const options: any = {};
  if (description) options.description = description as any;
  if (duration) options.duration = duration;

  const fn = variant === "destructive" ? sonnerToast.error : sonnerToast;
  return fn(message as any, options);
}

export const useToast = () => ({ toast: compatibleToast });
export const toast = compatibleToast;
