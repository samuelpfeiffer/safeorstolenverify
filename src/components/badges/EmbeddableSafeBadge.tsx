import React, { useState } from 'react';
import { Shield, Check, Copy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface EmbeddableSafeBadgeProps {
  verificationId: string;
  status: 'safe' | 'verified' | 'caution';
  itemName?: string;
}

export const EmbeddableSafeBadge: React.FC<EmbeddableSafeBadgeProps> = ({
  verificationId,
  status,
  itemName = 'Item'
}) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  const badgeUrl = `https://safeorstolen.com/badge/${verificationId}`;
  const embedCode = `<!-- SafeOrStolen Verification Badge -->
<div class="sos-badge" data-verification-id="${verificationId}">
  <a href="${badgeUrl}" target="_blank" rel="noopener">
    <img src="${badgeUrl}/image" alt="Verified Safe by SafeOrStolen" />
  </a>
</div>
<script async src="https://safeorstolen.com/badge.js"></script>`;

  const htmlSnippet = `<a href="${badgeUrl}" target="_blank">
  <img src="${badgeUrl}/image" alt="SafeOrStolen Verified" style="width:150px;" />
</a>`;

  const handleCopyEmbed = () => {
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Embed code copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyHTML = () => {
    navigator.clipboard.writeText(htmlSnippet);
    toast({
      title: "Copied!",
      description: "HTML snippet copied to clipboard",
    });
  };

  return (
    <Card className="border-2 border-green-500/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-green-600">
          <Shield className="h-5 w-5" />
          SafeOrStolen Verified Badge
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Badge Preview */}
        <div className="flex justify-center p-6 bg-muted rounded-lg">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border-2 border-green-500 shadow-lg">
            <Shield className="h-5 w-5 text-green-500" />
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-green-700">VERIFIED SAFE</span>
              <span className="text-xs text-muted-foreground">SafeOrStolen.com</span>
            </div>
            <Check className="h-4 w-4 text-green-500" />
          </div>
        </div>

        {/* Usage Instructions */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Add to Your Listing</h4>
          <p className="text-xs text-muted-foreground">
            Copy and paste this code into your marketplace listing (Facebook Marketplace, eBay, OfferUp, etc.)
          </p>
        </div>

        {/* Embed Code */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium">Full Embed Code (Recommended)</label>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopyEmbed}
              className="h-7"
            >
              <Copy className="h-3 w-3 mr-1" />
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          </div>
          <pre className="text-xs bg-muted p-3 rounded-md overflow-x-auto">
            <code>{embedCode}</code>
          </pre>
        </div>

        {/* Simple HTML */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium">Simple HTML Link</label>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopyHTML}
              className="h-7"
            >
              <Copy className="h-3 w-3 mr-1" />
              Copy
            </Button>
          </div>
          <pre className="text-xs bg-muted p-3 rounded-md overflow-x-auto">
            <code>{htmlSnippet}</code>
          </pre>
        </div>

        {/* Premium Features Upsell */}
        <div className="border-t pt-4">
          <div className="flex items-start gap-2 text-xs text-muted-foreground">
            <Shield className="h-4 w-4 mt-0.5 text-primary" />
            <div>
              <p className="font-semibold text-foreground mb-1">Upgrade for Premium Badges</p>
              <ul className="space-y-1">
                <li>• Animated badges with real-time verification</li>
                <li>• Custom branding with your company logo</li>
                <li>• White-label badges for Business/Enterprise</li>
                <li>• Badge analytics and click tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
