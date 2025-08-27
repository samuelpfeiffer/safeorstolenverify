import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CopyButtonProps {
  text: string;
  onCopy?: () => void;
  variant?: 'outline' | 'ghost' | 'default';
  size?: 'sm' | 'lg' | 'default';
  className?: string;
  showText?: boolean;
  successMessage?: string;
  errorMessage?: string;
}

export const CopyButton: React.FC<CopyButtonProps> = ({
  text,
  onCopy,
  variant = 'outline',
  size = 'sm',
  className = '',
  showText = false,
  successMessage = 'Copied to clipboard!',
  errorMessage = 'Failed to copy. Please try manually.'
}) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      onCopy?.();
      
      toast({
        title: "Success",
        description: successMessage,
      });

      // Reset copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive"
      });
    }
  }, [text, onCopy, toast, successMessage, errorMessage]);

  return (
    <Button
      onClick={handleCopy}
      variant={variant}
      size={size}
      className={`gap-2 ${className}`}
      disabled={copied}
    >
      {copied ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
      {showText && (copied ? 'Copied!' : 'Copy')}
    </Button>
  );
};

// Hook for copy functionality
export const useCopyToClipboard = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = useCallback(async (
    text: string, 
    successMessage = 'Copied to clipboard!'
  ) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast({
        title: "Success",
        description: successMessage,
      });
      setTimeout(() => setCopied(false), 2000);
      return true;
    } catch (error) {
      toast({
        title: "Error",
        description: 'Failed to copy. Please try manually.',
        variant: "destructive"
      });
      return false;
    }
  }, [toast]);

  return { copyToClipboard, copied };
};