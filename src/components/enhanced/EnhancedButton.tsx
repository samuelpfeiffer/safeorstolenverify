import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EnhancedButtonProps extends ButtonProps {
  loading?: boolean;
  loadingText?: string;
  icon?: React.ReactNode;
  gradient?: boolean;
}

export const EnhancedButton: React.FC<EnhancedButtonProps> = ({
  children,
  loading = false,
  loadingText = "Loading...",
  icon,
  gradient = false,
  className,
  disabled,
  ...props
}) => {
  return (
    <Button
      {...props}
      disabled={disabled || loading}
      className={cn(
        gradient && "bg-gradient-to-r from-sos-orange to-sos-orange/90 hover:from-sos-orange/90 hover:to-sos-orange",
        "transition-all duration-300 hover:shadow-lg active:scale-95",
        className
      )}
    >
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin mr-2" />
          {loadingText}
        </>
      ) : (
        <>
          {icon && <span className="mr-2">{icon}</span>}
          {children}
        </>
      )}
    </Button>
  );
};