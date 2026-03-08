import React, { useState } from 'react';
import { Shield, Check, Copy, Download, Link as LinkIcon, Share2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const { toast } = useToast();
  
  const badgeUrl = `https://safeorstolen.com/verified/${verificationId}`;
  const badgeDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

  // Plain text for Facebook Marketplace / Craigslist descriptions
  const plainTextSnippet = `✅ VERIFIED SAFE — This item passed SafeOrStolen's 100+ database check.
View verification: ${badgeUrl}
Checked: ${badgeDate} | ID: ${verificationId.slice(0, 8)}`;

  // HTML for eBay / custom sites
  const htmlSnippet = `<a href="${badgeUrl}" target="_blank" rel="noopener" style="display:inline-block;padding:8px 16px;background:#16a34a;color:#fff;border-radius:8px;text-decoration:none;font-family:sans-serif;font-size:14px;">
  ✓ Verified Safe by SafeOrStolen
</a>`;

  // Markdown for Reddit / forums
  const markdownSnippet = `✅ **VERIFIED SAFE** — [View verification report](${badgeUrl}) | SafeOrStolen.com`;

  // Full embed widget
  const embedCode = `<!-- SafeOrStolen Verified Badge -->
<div style="display:inline-flex;align-items:center;gap:8px;padding:10px 16px;border:2px solid #16a34a;border-radius:12px;background:#f0fdf4;font-family:sans-serif;">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  <div>
    <div style="font-weight:700;color:#16a34a;font-size:13px;">✓ VERIFIED SAFE</div>
    <div style="font-size:11px;color:#666;">Checked ${badgeDate} · <a href="${badgeUrl}" target="_blank" style="color:#16a34a;">SafeOrStolen.com</a></div>
  </div>
</div>`;

  const handleCopy = (text: string, field: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    toast({ title: "Copied!", description: `${label} copied to clipboard` });
    setTimeout(() => setCopiedField(null), 2000);
  };

  const CopyButton = ({ text, field, label }: { text: string; field: string; label: string }) => (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => handleCopy(text, field, label)}
      className="h-7 gap-1"
    >
      {copiedField === field ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
      {copiedField === field ? 'Copied!' : 'Copy'}
    </Button>
  );

  return (
    <Card className="border-2 border-green-500/20">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-green-600 text-base">
          <Shield className="h-5 w-5" />
          Add Verified Badge to Your Listing
        </CardTitle>
        <p className="text-xs text-muted-foreground">
          Copy the code below and paste it into your marketplace listing. Buyers click to see the full verification report.
        </p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Badge Preview */}
        <div className="flex justify-center p-4 bg-muted rounded-lg">
          <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-green-50 dark:bg-green-950/30 rounded-xl border-2 border-green-500 shadow-sm">
            <Shield className="h-5 w-5 text-green-500" />
            <div className="flex flex-col">
              <span className="text-xs font-bold text-green-700 dark:text-green-400">✓ VERIFIED SAFE</span>
              <span className="text-[10px] text-muted-foreground">Checked {badgeDate} · SafeOrStolen.com</span>
            </div>
          </div>
        </div>

        {/* Direct link - always show first */}
        <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
          <LinkIcon className="h-4 w-4 text-muted-foreground flex-shrink-0" />
          <code className="text-xs flex-1 truncate">{badgeUrl}</code>
          <CopyButton text={badgeUrl} field="link" label="Verification link" />
        </div>

        {/* Tabs for different platforms */}
        <Tabs defaultValue="text" className="w-full">
          <TabsList className="grid w-full grid-cols-4 h-8">
            <TabsTrigger value="text" className="text-xs">Text</TabsTrigger>
            <TabsTrigger value="html" className="text-xs">HTML</TabsTrigger>
            <TabsTrigger value="embed" className="text-xs">Widget</TabsTrigger>
            <TabsTrigger value="markdown" className="text-xs">Reddit</TabsTrigger>
          </TabsList>

          <TabsContent value="text" className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-medium text-muted-foreground">Facebook Marketplace · Craigslist · OfferUp</label>
              <CopyButton text={plainTextSnippet} field="text" label="Text snippet" />
            </div>
            <pre className="text-xs bg-muted p-3 rounded-md overflow-x-auto whitespace-pre-wrap">
              <code>{plainTextSnippet}</code>
            </pre>
          </TabsContent>

          <TabsContent value="html" className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-medium text-muted-foreground">eBay · Custom websites</label>
              <CopyButton text={htmlSnippet} field="html" label="HTML code" />
            </div>
            <pre className="text-xs bg-muted p-3 rounded-md overflow-x-auto whitespace-pre-wrap">
              <code>{htmlSnippet}</code>
            </pre>
          </TabsContent>

          <TabsContent value="embed" className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-medium text-muted-foreground">Full widget with styling</label>
              <CopyButton text={embedCode} field="embed" label="Widget code" />
            </div>
            <pre className="text-xs bg-muted p-3 rounded-md overflow-x-auto whitespace-pre-wrap">
              <code>{embedCode}</code>
            </pre>
          </TabsContent>

          <TabsContent value="markdown" className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-medium text-muted-foreground">Reddit · Forums · Discord</label>
              <CopyButton text={markdownSnippet} field="md" label="Markdown" />
            </div>
            <pre className="text-xs bg-muted p-3 rounded-md overflow-x-auto whitespace-pre-wrap">
              <code>{markdownSnippet}</code>
            </pre>
          </TabsContent>
        </Tabs>

        {/* Share buttons */}
        <div className="flex gap-2 pt-2 border-t">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 text-xs gap-1"
            onClick={() => {
              const url = `https://wa.me/?text=${encodeURIComponent(plainTextSnippet)}`;
              window.open(url, '_blank');
            }}
          >
            <Share2 className="h-3 w-3" /> WhatsApp
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex-1 text-xs gap-1"
            onClick={() => {
              const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`✅ This item is verified safe by @SafeOrStolen`)}&url=${encodeURIComponent(badgeUrl)}`;
              window.open(url, '_blank');
            }}
          >
            <Share2 className="h-3 w-3" /> Twitter
          </Button>
        </div>

        {/* Premium upsell */}
        <div className="border-t pt-3">
          <div className="flex items-start gap-2 text-xs text-muted-foreground">
            <Shield className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground mb-1">Pro Tip: Verified listings sell 2x faster</p>
              <p>Buyers trust sellers who verify. Every badge links back to your report — building instant credibility.</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
