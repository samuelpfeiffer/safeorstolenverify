import React, { useState } from 'react';
import HotGunzWidget from '@/components/integrations/HotGunzWidget';
import { EnhancedSEOHead } from '@/components/seo/EnhancedSEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

const FirearmsCheckPage: React.FC = () => {
  const [style, setStyle] = useState<'style1' | 'style2' | 'style3' | 'style4'>('style4');

  return (
    <div className="min-h-screen bg-sos text-white pt-20">
      <EnhancedSEOHead
        title="Stolen Firearms Check (HotGunz)"
        description="Search the HotGunz stolen firearms database securely via our embedded widget."
        canonical="/firearms-check"
      />
      <div className="container mx-auto container-padding py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Stolen Firearms Check (HotGunz)</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Search the community-sourced stolen firearms database. Choose a widget style that fits your layout.
          </p>
        </div>
        <Card className="bg-card border-border">
          <CardContent className="space-y-4 pt-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-muted-foreground">Choose widget style</div>
              <div className="w-full sm:w-64">
                <Select value={style} onValueChange={(v) => setStyle(v as any)}>
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="Select style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="style1">Style 1</SelectItem>
                    <SelectItem value="style2">Style 2</SelectItem>
                    <SelectItem value="style3">Style 3</SelectItem>
                    <SelectItem value="style4">Style 4 (Transparent)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden border border-border">
              <HotGunzWidget style={style} height={440} />
            </div>
            <p className="text-xs text-muted-foreground">
              This widget is provided by HotGunz. If it fails to load due to network or HTTPS restrictions, visit
              <a className="underline ml-1" href="https://www.hotgunz.com/" target="_blank" rel="noopener noreferrer">hotgunz.com</a>.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FirearmsCheckPage;
