import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Settings, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useUnifiedAuth } from '@/hooks/useUnifiedAuth';

export const BlogSetupHelper = () => {
  const [isFixing, setIsFixing] = useState(false);
  const [results, setResults] = useState<string>('');
  const { toast } = useToast();
  const { user } = useUnifiedAuth();

  const handleFixBlogPosts = async () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please log in to fix blog posts.",
        variant: "destructive",
      });
      return;
    }

    setIsFixing(true);
    setResults('');

    try {
      // Update all blog posts to have the current user as author
      const { data: updatedPosts, error: updateError } = await supabase
        .from('blog_posts')
        .update({ author_id: user.id })
        .is('author_id', null)
        .select('id, title');

      if (updateError) throw updateError;

      const count = updatedPosts?.length || 0;
      
      setResults(`Fixed ${count} blog posts! Set you as the author for all posts that didn't have an author.`);
      
      toast({
        title: "Blog Setup Complete!",
        description: `Successfully fixed ${count} blog posts.`,
      });

      // Trigger content enrichment after setup
      setTimeout(async () => {
        try {
          await supabase.functions.invoke('enrich-blog-content', { body: {} });
          toast({
            title: "Content Enrichment Started",
            description: "AI is now enhancing your blog posts with powerful content.",
          });
        } catch (enrichError) {
          console.error('Error triggering enrichment:', enrichError);
        }
      }, 2000);

    } catch (error) {
      console.error('Error fixing blog posts:', error);
      toast({
        title: "Setup Failed",
        description: error.message || "Failed to fix blog posts. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsFixing(false);
    }
  };

  return (
    <Card className="border-orange-500/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="h-5 w-5 text-orange-500" />
          Blog Setup Helper
        </CardTitle>
        <CardDescription>
          Fix blog post authorship and trigger content enrichment
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col gap-4">
          <Button
            onClick={handleFixBlogPosts}
            disabled={isFixing}
            size="lg"
            variant="outline"
            className="w-full"
          >
            {isFixing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Fixing Blog Posts...
              </>
            ) : (
              <>
                <Settings className="mr-2 h-4 w-4" />
                Fix & Setup Blog Posts
              </>
            )}
          </Button>

          {results && (
            <div className="flex items-start gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
              <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
              <span className="text-sm">{results}</span>
            </div>
          )}

          <div className="bg-orange-500/5 rounded-lg p-4 text-sm space-y-2">
            <h4 className="font-semibold">What this does:</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Sets you as the author for all existing blog posts</li>
              <li>Ensures all posts are properly associated with your account</li>
              <li>Automatically triggers content enrichment after setup</li>
              <li>Fixes any permission or access issues</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};