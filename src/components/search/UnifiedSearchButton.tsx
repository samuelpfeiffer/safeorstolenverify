import { Button } from '@/components/ui/button';
import { Search, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UnifiedSearchButtonProps {
  onClick: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  variant?: 'default' | 'hero' | 'compact';
  isAuthenticated?: boolean;
  hasReachedLimit?: boolean;
  isSubscribed?: boolean;
  className?: string;
}

export const UnifiedSearchButton = ({
  onClick,
  isLoading = false,
  disabled = false,
  variant = 'default',
  isAuthenticated = false,
  hasReachedLimit = false,
  isSubscribed = false,
  className,
}: UnifiedSearchButtonProps) => {
  const getButtonText = () => {
    if (isLoading) return 'Verifying...';
    if (!isAuthenticated) return 'Sign Up & Verify Free';
    if (hasReachedLimit && !isSubscribed) return 'Upgrade for More';
    return 'Verify Now';
  };

  const getButtonIcon = () => {
    if (isLoading) {
      return <div className="animate-spin h-5 w-5 border-2 border-current border-t-transparent rounded-full" />;
    }
    if (!isAuthenticated || (hasReachedLimit && !isSubscribed)) {
      return <Lock className="h-5 w-5" />;
    }
    return <Search className="h-5 w-5" />;
  };

  const variantStyles = {
    default: "h-14 min-w-[140px] font-semibold shadow-lg hover:shadow-xl",
    hero: "h-16 px-8 font-bold shadow-xl hover:shadow-2xl text-base",
    compact: "h-12",
  };

  return (
    <Button
      onClick={onClick}
      disabled={isLoading || disabled}
      size={variant === 'hero' ? 'lg' : 'default'}
      className={cn(
        variantStyles[variant],
        "transition-all",
        className
      )}
    >
      <div className="flex items-center gap-2">
        {getButtonIcon()}
        <span>{getButtonText()}</span>
      </div>
    </Button>
  );
};
