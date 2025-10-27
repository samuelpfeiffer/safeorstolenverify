import { memo } from 'react';
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

const UnifiedSearchButtonComponent = ({
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
    default: "h-14 min-h-[56px] min-w-[140px] font-semibold shadow-lg hover:shadow-xl active:scale-[0.98]",
    hero: "h-16 min-h-[64px] px-8 font-bold shadow-xl hover:shadow-2xl text-base active:scale-[0.98]",
    compact: "h-12 min-h-[48px] active:scale-[0.98]",
  };

  const handleClick = () => {
    // Haptic feedback for mobile devices
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }
    onClick();
  };

  return (
    <Button
      onClick={handleClick}
      disabled={isLoading || disabled}
      size={variant === 'hero' ? 'lg' : 'default'}
      aria-label={getButtonText()}
      className={cn(
        variantStyles[variant],
        "transition-all touch-manipulation",
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

// Memoize to prevent unnecessary re-renders
export const UnifiedSearchButton = memo(UnifiedSearchButtonComponent);
