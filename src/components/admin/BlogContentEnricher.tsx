import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

export const BlogContentEnricher = () => {
  const [isEnriching, setIsEnriching] = useState(false);
  const [results, setResults] = useState<any>(null);
  const { toast } = useToast();

  const handleEnrichContent = async () => {
    setIsEnriching(true);
    setResults(null);

    try {
      const { data, error } = await supabase.functions.invoke('enrich-blog-content', {
        body: {}
      });

      if (error) throw error;

      setResults(data);
      
      toast({
        title: "Content Enrichment Complete!",
        description: `Successfully enriched ${data.enrichedCount} blog posts with powerful content.`,
      });
    } catch (error) {
      console.error('Error enriching blog content:', error);
      toast({
        title: "Enrichment Failed",
        description: error.message || "Failed to enrich blog content. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsEnriching(false);
    }
  };

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          AI Blog Content Enricher
        </CardTitle>
        <CardDescription>
          Automatically enhance your blog posts with comprehensive, SEO-optimized content
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col gap-4">
          <Button
            onClick={handleEnrichContent}
            disabled={isEnriching}
            size="lg"
            className="w-full"
          >
            {isEnriching ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Enriching Content...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Enrich Blog Content Now
              </>
            )}
          </Button>

          {results && (
            <div className="space-y-3 mt-4">
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                <CheckCircle2 className="h-5 w-5" />
                <span className="font-semibold">
                  {results.enrichedCount} posts enriched successfully
                </span>
              </div>

              {results.posts && results.posts.length > 0 && (
                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                  <h3 className="font-semibold text-sm mb-2">Enriched Posts:</h3>
                  {results.posts.map((post: any) => (
                    <div key={post.id} className="text-sm space-y-1">
                      <div className="font-medium">{post.title}</div>
                      <div className="text-muted-foreground text-xs">
                        {post.wordCount} words • {post.readingTime} min read
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="bg-primary/5 rounded-lg p-4 text-sm space-y-2">
            <h4 className="font-semibold">What this does:</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Expands short blog posts to 2000-3000 words</li>
              <li>Adds comprehensive sections, examples, and FAQs</li>
              <li>Optimizes for SEO with proper headings and keywords</li>
              <li>Includes actionable tips and best practices</li>
              <li>Creates engaging, authority-building content</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};