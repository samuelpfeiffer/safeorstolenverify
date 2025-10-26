import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
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
}

export const UnifiedSearchInput = ({
  value,
  onChange,
  onKeyPress,
  placeholder = "Enter IMEI, VIN, or Serial Number...",
  isLoading = false,
  variant = 'default',
  className,
  showIcon = false,
}: UnifiedSearchInputProps) => {
  const variantStyles = {
    default: "h-14 text-base bg-card border-3 border-primary/60 focus:border-primary focus:ring-4 focus:ring-primary/20 hover:border-primary/80 transition-all shadow-lg hover:shadow-xl",
    hero: "h-16 text-lg px-6 bg-card border-4 border-primary focus:border-primary focus:ring-4 focus:ring-primary/30 transition-all font-medium shadow-xl hover:shadow-2xl",
    compact: "h-12 border-2 border-primary bg-background/80 focus:bg-background focus:border-primary focus:ring-4 focus:ring-primary/20 shadow-md hover:shadow-lg transition-all",
  };

  return (
    <div className="relative w-full">
      {showIcon && (
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
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
        className={cn(
          variantStyles[variant],
          showIcon && "pl-12",
          className
        )}
      />
    </div>
  );
};
