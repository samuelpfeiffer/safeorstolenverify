import { memo } from 'react';
import { Input } from '@/components/ui/input';
import { Search, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UnifiedSearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  isLoading?: boolean;
  variant?: 'default' | 'hero' | 'compact';
  className?: string;
  showIcon?: boolean;
  autoFocus?: boolean;
  error?: string;
}

const UnifiedSearchInputComponent = ({
  value,
  onChange,
  onKeyPress,
  placeholder = "Enter IMEI, VIN, or Serial Number...",
  isLoading = false,
  variant = 'default',
  className,
  showIcon = false,
  autoFocus = false,
  error,
}: UnifiedSearchInputProps) => {
  const variantStyles = {
    default: "h-14 min-h-[56px] text-base bg-card border-3 border-primary/60 focus:border-primary focus:ring-4 focus:ring-primary/20 hover:border-primary/80 transition-all shadow-lg hover:shadow-xl",
    hero: "h-16 min-h-[64px] text-lg px-6 bg-card border-4 border-primary focus:border-primary focus:ring-4 focus:ring-primary/30 transition-all font-medium shadow-xl hover:shadow-2xl",
    compact: "h-12 min-h-[48px] border-2 border-primary bg-background/80 focus:bg-background focus:border-primary focus:ring-4 focus:ring-primary/20 shadow-md hover:shadow-lg transition-all",
  };

  return (
    <div className="relative w-full">
      {showIcon && (
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none z-10" />
      )}
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={onKeyPress}
        placeholder={placeholder}
        disabled={isLoading}
        autoComplete="off"
        inputMode="text"
        enterKeyHint="search"
        maxLength={100}
        autoFocus={autoFocus}
        aria-label="Search input for IMEI, VIN, or Serial Number"
        aria-invalid={!!error}
        aria-describedby={error ? "search-error" : undefined}
        className={cn(
          variantStyles[variant],
          showIcon && "pl-12",
          error && "border-destructive focus:border-destructive focus:ring-destructive/20",
          "touch-manipulation", // Improves mobile touch response
          className
        )}
      />
      {error && (
        <div id="search-error" className="absolute -bottom-6 left-0 flex items-center gap-1 text-sm text-destructive">
          <AlertCircle className="h-3 w-3" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

// Memoize to prevent unnecessary re-renders
export const UnifiedSearchInput = memo(UnifiedSearchInputComponent);
