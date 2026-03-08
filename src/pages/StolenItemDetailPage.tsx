/**
 * Stolen Item Detail Page - Individual item pages with SEO-friendly URLs
 * Shows full details and enables sharing
 */

import { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { PageSEO } from '@/components/seo/PageSEO';
import { BreadcrumbNavigation } from '@/components/seo/BreadcrumbNavigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { 
  AlertTriangle, MapPin, Calendar, Share2, Facebook, Twitter, 
  Link as LinkIcon, ArrowLeft, Shield, Phone, Car, Bike, Monitor
} from 'lucide-react';
import { format } from 'date-fns';
import TopNavigation from '@/components/TopNavigation';
import Footer from '@/components/Footer';

interface StolenItem {
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
}

const ITEM_TYPE_ICONS: Record<string, React.ElementType> = {
  smartphone: Phone,
  laptop: Monitor,
  vehicle: Car,
  bicycle: Bike,
};

const StolenItemDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const { toast } = useToast();
  const [item, setItem] = useState<StolenItem | null>(null);
  const [loading, setLoading] = useState(true);
  const [shareUrl, setShareUrl] = useState('');

  // Get item ID from state or extract from slug
  const itemIdFromState = location.state?.itemId;

  useEffect(() => {
    fetchItem();
  }, [slug, itemIdFromState]);

  const fetchItem = async () => {
    setLoading(true);
    try {
      let query = supabase.from('stolen_items').select('*');

      if (itemIdFromState) {
        query = query.eq('id', itemIdFromState);
      } else if (slug) {
        // Extract ID from slug (last segment after final dash)
        const idMatch = slug.match(/([a-f0-9]{8})$/);
        if (idMatch) {
          query = query.ilike('id', `${idMatch[1]}%`);
        }
      }

      const { data, error } = await query.single();

      if (error) throw error;
      setItem(data);
      
      // Generate share URL
      const shareCode = data.id.slice(0, 8);
      setShareUrl(`${window.location.origin}/item/${slug}`);
    } catch (error) {
      console.error('Error fetching item:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleShare = async (platform?: string) => {
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

  if (!item) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card>
          <CardContent className="py-12 text-center">
            <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <h1 className="text-2xl font-bold mb-2">Item Not Found</h1>
            <p className="text-muted-foreground mb-4">
              This stolen item report may have been removed or the link is invalid.
            </p>
            <Link to="/stolen-database">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Database
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const IconComponent = ITEM_TYPE_ICONS[item.item_type] || Shield;
  const itemTitle = `${item.brand || ''} ${item.model || item.item_type}`.trim();
  const identifier = item.serial_number || item.imei || item.vin;

  // Schema.org structured data
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `Stolen ${itemTitle}`,
    "description": item.description || `Reported stolen ${item.item_type}`,
    "identifier": identifier,
    "brand": item.brand ? { "@type": "Brand", "name": item.brand } : undefined,
    "model": item.model,
    "category": item.item_type,
  };

  return (
    <>
      <PageSEO
        title={`Stolen ${itemTitle} - ${item.location || 'Unknown Location'} | SafeOrStolen`}
        description={`Reported stolen: ${itemTitle}. ${item.description || 'View details and help recover this stolen item.'} Serial/ID: ${identifier || 'Not provided'}`}
        keywords={`stolen ${item.item_type}, ${item.brand || ''}, ${item.model || ''}, stolen property, theft report`}
        canonical={`/item/${slug}`}
        structuredData={[productSchema]}
        image="/og-stolen-item.jpg"
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BreadcrumbNavigation 
          items={[
            { name: 'Stolen Database', href: '/stolen-database' },
            { name: itemTitle, href: `/item/${slug}` }
          ]}
        />

        {/* Back Link */}
        <Link to="/stolen-database" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Database
        </Link>

        {/* Main Card */}
        <Card className="border-destructive/50">
          <CardHeader className="bg-destructive/5 border-b border-destructive/20">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-destructive" />
                </div>
                <div>
                  <Badge variant="destructive" className="mb-2">
                    <AlertTriangle className="w-3 h-3 mr-1" />
                    Reported Stolen
                  </Badge>
                  <CardTitle className="text-2xl">{itemTitle}</CardTitle>
                  <p className="text-muted-foreground capitalize">{item.item_type}</p>
                </div>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-6 space-y-6">
            {/* Description */}
            {item.description && (
              <div>
                <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  Description
                </h2>
                <p className="text-foreground">{item.description}</p>
              </div>
            )}

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Location */}
              {item.location && (
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    Location
                  </h3>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>{item.location}</span>
                  </div>
                </div>
              )}

              {/* Date Stolen */}
              {item.date_stolen && (
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    Date Stolen
                  </h3>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>{format(new Date(item.date_stolen), 'MMMM d, yyyy')}</span>
                  </div>
                </div>
              )}

              {/* Identifier */}
              {identifier && (
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    {item.imei ? 'IMEI' : item.vin ? 'VIN' : 'Serial Number'}
                  </h3>
                  <code className="bg-muted px-3 py-1.5 rounded font-mono text-sm">
                    {identifier}
                  </code>
                </div>
              )}

              {/* Police Report */}
              {item.police_report_number && (
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    Police Report
                  </h3>
                  <span>{item.police_report_number}</span>
                </div>
              )}
            </div>

            {/* Report Date */}
            <div className="text-sm text-muted-foreground pt-4 border-t">
              Reported to SafeOrStolen on {format(new Date(item.created_at), 'MMMM d, yyyy')}
            </div>

            {/* Share Section */}
            <div className="pt-4 border-t">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                Help Find This Item
              </h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" onClick={() => handleShare('facebook')}>
                  <Facebook className="w-4 h-4 mr-2" />
                  Share on Facebook
                </Button>
                <Button variant="outline" onClick={() => handleShare('twitter')}>
                  <Twitter className="w-4 h-4 mr-2" />
                  Share on Twitter
                </Button>
                <Button variant="outline" onClick={() => handleShare()}>
                  <LinkIcon className="w-4 h-4 mr-2" />
                  Copy Link
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Warning Card */}
        <Card className="mt-6 bg-amber-500/10 border-amber-500/30">
          <CardContent className="py-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground">Important Notice</h4>
                <p className="text-sm text-muted-foreground">
                  If you have seen this item or have information about this theft, 
                  please contact local law enforcement. Do not attempt to recover 
                  stolen property yourself.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Verify CTA */}
        <Card className="mt-6">
          <CardContent className="py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-semibold text-lg">Buying something similar?</h4>
                <p className="text-muted-foreground">
                  Verify any item before purchase to ensure it's not stolen.
                </p>
              </div>
              <Link to="/verify">
                <Button size="lg">
                  <Shield className="w-4 h-4 mr-2" />
                  Verify an Item
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default StolenItemDetailPage;
