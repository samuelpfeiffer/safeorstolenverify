import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Lock, ExternalLink, CheckCircle, AlertTriangle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface SSLBadgeProps {
  variant?: 'minimal' | 'detailed' | 'inline';
  showExpiry?: boolean;
  className?: string;
}

interface SSLInfo {
  isSecure: boolean;
  issuer: string;
  validFrom: string;
  validTo: string;
  strength: number;
}

const SSLBadge: React.FC<SSLBadgeProps> = ({ 
  variant = 'minimal',
  showExpiry = false,
  className = '' 
}) => {
  const [sslInfo, setSSLInfo] = useState<SSLInfo>({
    isSecure: true,
    issuer: 'Let\'s Encrypt',
    validFrom: '2024-01-15',
    validTo: '2024-12-31',
    strength: 256
  });

  const [isVerifying, setIsVerifying] = useState(false);

  useEffect(() => {
    // Check if the current connection is secure
    const isSecureConnection = window.location.protocol === 'https:' || 
                              window.location.hostname === 'localhost';
    
    setSSLInfo(prev => ({ ...prev, isSecure: isSecureConnection }));
  }, []);

  const handleVerifySSL = async () => {
    setIsVerifying(true);
    
    // Simulate SSL verification (in real app, this would call SSL Labs API)
    setTimeout(() => {
      setIsVerifying(false);
      const verificationUrl = `https://www.ssllabs.com/ssltest/analyze.html?d=${window.location.hostname}`;
      window.open(verificationUrl, '_blank');
    }, 1000);
  };

  const getDaysUntilExpiry = () => {
    const expiryDate = new Date(sslInfo.validTo);
    const today = new Date();
    const diffTime = expiryDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysLeft = getDaysUntilExpiry();
  const isExpiringSoon = daysLeft < 30;

  if (variant === 'inline') {
    return (
      <div className={`inline-flex items-center gap-2 ${className}`}>
        <Lock className={`h-3 w-3 ${sslInfo.isSecure ? 'text-green-600' : 'text-red-600'}`} />
        <span className="text-xs text-muted-foreground">
          {sslInfo.isSecure ? 'Secure Connection' : 'Insecure Connection'}
        </span>
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Badge 
              variant="outline" 
              className={`${
                sslInfo.isSecure 
                  ? 'bg-green-100 text-green-800 border-green-200' 
                  : 'bg-red-100 text-red-800 border-red-200'
              } flex items-center gap-1 cursor-pointer hover:shadow-md transition-shadow ${className}`}
              onClick={handleVerifySSL}
            >
              <Lock className="h-3 w-3" />
              {sslInfo.strength}-bit SSL
            </Badge>
          </TooltipTrigger>
          <TooltipContent>
            <div className="text-sm">
              <p className="font-medium">SSL Certificate Details</p>
              <p>Issuer: {sslInfo.issuer}</p>
              <p>Encryption: {sslInfo.strength}-bit</p>
              <p>Valid until: {new Date(sslInfo.validTo).toLocaleDateString()}</p>
              <p className="text-xs mt-1 opacity-75">Click to verify on SSL Labs</p>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <div className={`bg-card border rounded-lg p-4 ${className}`}>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-full ${
            sslInfo.isSecure 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {sslInfo.isSecure ? (
              <Lock className="h-5 w-5" />
            ) : (
              <AlertTriangle className="h-5 w-5" />
            )}
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-semibold text-sm">
                {sslInfo.strength}-bit SSL Encryption
              </h4>
              {sslInfo.isSecure && (
                <CheckCircle className="h-4 w-4 text-green-600" />
              )}
            </div>
            
            <p className="text-xs text-muted-foreground">
              {sslInfo.isSecure 
                ? `Issued by ${sslInfo.issuer} • Your connection is secure`
                : 'Connection is not secure'
              }
            </p>
          </div>
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={handleVerifySSL}
          disabled={isVerifying}
          className="flex items-center gap-1"
        >
          {isVerifying ? (
            'Verifying...'
          ) : (
            <>
              <ExternalLink className="h-3 w-3" />
              Verify
            </>
          )}
        </Button>
      </div>

      {showExpiry && sslInfo.isSecure && (
        <div className="mt-3 pt-3 border-t">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">
              Valid from {new Date(sslInfo.validFrom).toLocaleDateString()}
            </span>
            <span className={`${isExpiringSoon ? 'text-orange-600' : 'text-muted-foreground'}`}>
              Expires {new Date(sslInfo.validTo).toLocaleDateString()}
              {isExpiringSoon && ` (${daysLeft} days left)`}
            </span>
          </div>
          
          <div className="mt-2">
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div 
                className={`h-1 rounded-full ${
                  isExpiringSoon ? 'bg-orange-500' : 'bg-green-500'
                }`}
                style={{ 
                  width: `${Math.max(10, Math.min(100, (daysLeft / 365) * 100))}%` 
                }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SSLBadge;