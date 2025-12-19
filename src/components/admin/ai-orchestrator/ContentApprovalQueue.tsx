import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { FileText, CheckCircle, X, Eye, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export const ContentApprovalQueue = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [previewContent, setPreviewContent] = useState<string | null>(null);

  const { data: content, isLoading } = useQuery({
    queryKey: ['ai-content-queue'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('ai_content_queue')
        .select('*')
        .in('status', ['draft', 'pending_review'])
        .order('created_at', { ascending: false })
        .limit(20);
      if (error) throw error;
      return data;
    },
  });

  const updateStatus = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const { error } = await supabase
        .from('ai_content_queue')
        .update({ 
          status, 
          published_at: status === 'published' ? new Date().toISOString() : null 
        })
        .eq('id', id);
      if (error) throw error;
    },
    onSuccess: (_, { status }) => {
      queryClient.invalidateQueries({ queryKey: ['ai-content-queue'] });
      toast({ title: 'Updated', description: `Content ${status}` });
    },
  });

  const getContentTypeIcon = (type: string) => {
    return <FileText className="w-4 h-4" />;
  };

  if (isLoading) {
    return <Card><CardContent className="p-6">Loading content queue...</CardContent></Card>;
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Content Approval Queue ({content?.length || 0})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px]">
            {content?.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">No content pending approval</p>
            ) : (
              <div className="space-y-3">
                {content?.map((item) => (
                  <div key={item.id} className="border rounded-lg p-3">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        {getContentTypeIcon(item.content_type)}
                        <span className="font-medium text-sm">{item.title || 'Untitled'}</span>
                      </div>
                      <Badge variant="outline" className="text-xs capitalize">{item.content_type}</Badge>
                    </div>
                    <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {new Date(item.created_at).toLocaleString()}
                      {item.seo_score && (
                        <Badge variant="secondary" className="text-xs">SEO: {item.seo_score}%</Badge>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setPreviewContent(item.content)}
                      >
                        <Eye className="w-3 h-3 mr-1" />
                        Preview
                      </Button>
                      <Button
                        size="sm"
                        variant="default"
                        onClick={() => updateStatus.mutate({ id: item.id, status: 'published' })}
                      >
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Publish
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => updateStatus.mutate({ id: item.id, status: 'rejected' })}
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>
        </CardContent>
      </Card>

      <Dialog open={!!previewContent} onOpenChange={() => setPreviewContent(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Content Preview</DialogTitle>
          </DialogHeader>
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <pre className="whitespace-pre-wrap text-sm">{previewContent}</pre>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
