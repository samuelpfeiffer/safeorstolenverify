/**
 * Shared Report Page - Public view for shared stolen item reports
 * Accessed via unique share codes
 */

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { supabase } from '@/integrations/supabase/client';
import { 
  AlertTriangle, MapPin, Calendar, Share2, Facebook, Twitter, 
  Link as LinkIcon, Shield, ExternalLink
} from 'lucide-react';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

interface SharedReport {
  id: string;
  share_code: string;
  views: number;
  created_at: string;
  stolen_items: {
    id: string;
    item_type: string;
    brand: string | null;
    model: string | null;
    serial_number: string | null;
    imei: string | null;
    vin: string | null;
    description: string | null;
    date_stolen: string | null;
    location: string | null;
    police_report_number: string | null;
    status: string;
    created_at: string;
  };
}

const SharedReportPage = () => {
  const { shareCode } = useParams<{ shareCode: string }>();
  const { toast } = useToast();
  const [report, setReport] = useState<SharedReport | null>(null);
  const [loading, setLoading] = useState(true);
  const shareUrl = `${window.location.origin}/report/${shareCode}`;

  useEffect(() => {
    if (shareCode) {
      fetchReport();
    }
  }, [shareCode]);

  const fetchReport = async () => {
    try {
      // Use RPC function to fetch by share code (no public RLS on table)
      const { data: reportData, error: reportError } = await supabase
        .rpc('get_shared_report_by_code', { p_share_code: shareCode })
        .single();

      if (reportError) throw reportError;
      if (!reportData) throw new Error('Report not found');

      // Fetch the stolen item separately using the public view
      const { data: itemData } = await supabase
        .from('stolen_items_public' as any)
        .select('*')
        .eq('id', reportData.stolen_item_id)
        .single();

      setReport({ ...reportData, stolen_items: itemData } as any);

      // Increment views via RPC (fire and forget)
      supabase.rpc('get_shared_report_by_code', { p_share_code: shareCode }).then(() => {
        // View count increment handled server-side if needed
      });
    } catch (error) {
      console.error('Error fetching shared report:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleShare = async (platform?: string) => {
    const item = report?.stolen_items;
    const title = `Stolen ${item?.brand || ''} ${item?.model || item?.item_type}`.trim();
    const text = `Help find this stolen item: ${title}`;
    
    if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        toast({
          title: 'Link copied!',
          description: 'Share this link to help find this stolen item.',
        });
      } catch {
        toast({
          title: 'Share this link',
          description: shareUrl,
        });
      }
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Skeleton className="h-8 w-64 mb-4" />
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  if (!report || !report.stolen_items) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card>
          <CardContent className="py-12 text-center">
            <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <h1 className="text-2xl font-bold mb-2">Report Not Found</h1>
            <p className="text-muted-foreground mb-4">
              This shared report may have expired or been removed.
            </p>
            <Link to="/stolen-database">
              <Button>Browse Stolen Items Database</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const item = report.stolen_items;
  const itemTitle = `${item.brand || ''} ${item.model || item.item_type}`.trim();
  const identifier = item.serial_number || item.imei || item.vin;

  return (
    <>
      <PageSEO
        title={`Stolen ${itemTitle} - Help Find This Item | SafeOrStolen`}
        description={`Help find this stolen ${item.item_type}: ${itemTitle}. ${item.description || ''} Location: ${item.location || 'Unknown'}`}
        keywords={`stolen ${item.item_type}, ${item.brand || ''}, missing property, theft report`}
        canonical={`/report/${shareCode}`}
        image="/og-stolen-report.jpg"
      />
      <TopNavigation />
      <div className="container mx-auto px-4 py-8 max-w-4xl pt-24">
        {/* Alert Banner */}
        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0" />
            <div>
              <h2 className="font-semibold text-destructive">Stolen Item Alert</h2>
              <p className="text-sm text-muted-foreground">
                This item has been reported stolen. If you have information, contact local authorities.
              </p>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <Card className="border-destructive/30">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <Badge variant="destructive" className="mb-2">
                  Reported Stolen
                </Badge>
                <CardTitle className="text-2xl">{itemTitle}</CardTitle>
                <p className="text-muted-foreground capitalize mt-1">{item.item_type}</p>
              </div>
              <div className="text-right text-sm text-muted-foreground">
                <p>{report.views} views</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Description */}
            {item.description && (
              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            )}

            {/* Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {item.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>{item.location}</span>
                </div>
              )}
              {item.date_stolen && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span>Stolen: {format(new Date(item.date_stolen), 'MMM d, yyyy')}</span>
                </div>
              )}
            </div>

            {/* Identifier */}
            {identifier && (
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">
                  {item.imei ? 'IMEI Number' : item.vin ? 'VIN' : 'Serial Number'}
                </p>
                <code className="text-lg font-mono font-semibold">{identifier}</code>
              </div>
            )}

            {/* Share Buttons */}
            <div className="pt-4 border-t">
              <h3 className="font-semibold mb-3">Help Spread the Word</h3>
              <div className="flex flex-wrap gap-3">
                <Button onClick={() => handleShare('facebook')}>
                  <Facebook className="w-4 h-4 mr-2" />
                  Share on Facebook
                </Button>
                <Button variant="outline" onClick={() => handleShare('twitter')}>
                  <Twitter className="w-4 h-4 mr-2" />
                  Tweet
                </Button>
                <Button variant="outline" onClick={() => handleShare()}>
                  <LinkIcon className="w-4 h-4 mr-2" />
                  Copy Link
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Verify CTA */}
        <Card className="mt-6 bg-primary/5 border-primary/20">
          <CardContent className="py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-primary" />
                <div>
                  <h4 className="font-semibold">Buying Used Items?</h4>
                  <p className="text-sm text-muted-foreground">
                    Verify any item before purchasing to avoid buying stolen goods.
                  </p>
                </div>
              </div>
              <Link to="/verify">
                <Button>
                  Verify an Item
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default SharedReportPage;
