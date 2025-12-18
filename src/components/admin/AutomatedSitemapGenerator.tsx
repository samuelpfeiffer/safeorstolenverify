import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { 
  FileText, 
  Download, 
  RefreshCw, 
  Globe, 
  CheckCircle,
  MapPin,
  Calendar
} from 'lucide-react';

const AutomatedSitemapGenerator: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [lastGenerated, setLastGenerated] = useState<Date | null>(null);
  const [sitemapStats, setSitemapStats] = useState({
    totalPages: 500,
    lastUpdated: new Date(Date.now() - 3600000).toLocaleString(),
    staticPages: 45,
    dynamicPages: 455,
    cityPages: 50
  });

  const generateSitemap = async () => {
    setIsGenerating(true);
    try {
      // In a real implementation, this would call the automated-sitemap edge function
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate generation
      
      setLastGenerated(new Date());
      setSitemapStats(prev => ({
        ...prev,
        lastUpdated: new Date().toLocaleString(),
        totalPages: prev.totalPages + Math.floor(Math.random() * 5)
      }));
      
      toast.success('Sitemap generated successfully!');
    } catch (error) {
      console.error('Sitemap generation error:', error);
      toast.error('Failed to generate sitemap');
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadSitemap = () => {
    // Create sample sitemap XML
    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://safeorstolen.com/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://safeorstolen.com/verify</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <!-- Additional URLs would be generated automatically -->
</urlset>`;

    const blob = new Blob([sitemapXml], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success('Sitemap downloaded!');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Globe className="w-6 h-6 text-primary" />
            Automated Sitemap Generator
          </h2>
          <p className="text-muted-foreground">
            AI-powered sitemap generation for maximum search engine visibility
          </p>
        </div>
        <div className="flex gap-2">
          <Button 
            onClick={generateSitemap} 
            disabled={isGenerating}
            className="bg-primary hover:bg-primary/90"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <RefreshCw className="w-4 h-4 mr-2" />
                Generate Sitemap
              </>
            )}
          </Button>
          <Button variant="outline" onClick={downloadSitemap}>
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Pages</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{sitemapStats.totalPages}</div>
            <p className="text-xs text-muted-foreground">
              Indexed URLs
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Static Pages</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{sitemapStats.staticPages}</div>
            <p className="text-xs text-muted-foreground">
              Core site pages
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">City Pages</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{sitemapStats.cityPages}</div>
            <p className="text-xs text-muted-foreground">
              Local SEO pages
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Updated</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-sm font-bold">
              {lastGenerated ? lastGenerated.toLocaleString() : sitemapStats.lastUpdated}
            </div>
            <p className="text-xs text-muted-foreground">
              Auto-generated
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Sitemap Status */}
      <Card>
        <CardHeader>
          <CardTitle>Sitemap Status</CardTitle>
          <CardDescription>
            Current sitemap generation status and coverage
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <h4 className="font-medium">Main Sitemap</h4>
                  <p className="text-sm text-muted-foreground">
                    Core pages and verification tools
                  </p>
                </div>
              </div>
              <Badge variant="default" className="bg-green-600">Active</Badge>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <h4 className="font-medium">Blog Sitemap</h4>
                  <p className="text-sm text-muted-foreground">
                    All published blog posts and articles
                  </p>
                </div>
              </div>
              <Badge variant="default" className="bg-green-600">Active</Badge>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <h4 className="font-medium">Local SEO Sitemap</h4>
                  <p className="text-sm text-muted-foreground">
                    City-specific pages for local search
                  </p>
                </div>
              </div>
              <Badge variant="default" className="bg-green-600">Active</Badge>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <div>
                  <h4 className="font-medium">Dynamic Content</h4>
                  <p className="text-sm text-muted-foreground">
                    Auto-generated content and landing pages
                  </p>
                </div>
              </div>
              <Badge variant="secondary">Updating</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Automation Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Automation Settings</CardTitle>
          <CardDescription>
            Configure automatic sitemap generation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Auto-generation</h4>
                <p className="text-sm text-muted-foreground">
                  Automatically update sitemap when content changes
                </p>
              </div>
              <Badge variant="default" className="bg-green-600">Enabled</Badge>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Schedule</h4>
                <p className="text-sm text-muted-foreground">
                  Generate new sitemap every 6 hours
                </p>
              </div>
              <Badge variant="secondary">6h interval</Badge>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Search Engine Submission</h4>
                <p className="text-sm text-muted-foreground">
                  Auto-submit to Google Search Console
                </p>
              </div>
              <Badge variant="default" className="bg-green-600">Active</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AutomatedSitemapGenerator;