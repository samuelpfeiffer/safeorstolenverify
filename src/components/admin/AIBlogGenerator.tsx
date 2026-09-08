import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/components/ui/use-toast';
import { Loader2, Sparkles, FileText, Eye, Download } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import DOMPurify from 'dompurify';

interface GeneratedBlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  meta_description: string;
  categories: string[];
  tags: string[];
  reading_time: number;
  featured_image_description: string;
}

export const AIBlogGenerator: React.FC = () => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedPost, setGeneratedPost] = useState<GeneratedBlogPost | null>(null);
  const [showPreview, setShowPreview] = useState(false);
  
  const [formData, setFormData] = useState({
    topic: '',
    keywords: '',
    contentType: 'informational',
    tone: 'professional'
  });

  const suggestedTopics = [
    'How to Spot Stolen Electronics Before Buying',
    'VIN Number Verification: Complete Guide for Car Buyers',
    'IMEI Check: Protecting Yourself from Stolen Phones',
    '2026 Theft Trends: What Consumers Need to Know',
    'Marketplace Safety: Red Flags When Buying Secondhand',
    'Serial Number Verification for Laptops and Electronics',
    'Bike Theft Prevention and Recovery Tips',
    'Legal Consequences of Buying Stolen Goods',
    'How Businesses Can Protect Against Fraud',
    'The Rise of Digital Theft: Modern Challenges'
  ];

  const handleGenerate = async () => {
    if (!formData.topic.trim()) {
      toast({
        title: "Topic Required",
        description: "Please enter a topic for the blog post.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-blog-generator', {
        body: formData
      });

      if (error) throw error;

      if (data.success) {
        setGeneratedPost(data.blogPost);
        toast({
          title: "Blog Post Generated!",
          description: "Your AI-powered blog post has been created successfully.",
        });
      } else {
        throw new Error(data.error || 'Failed to generate blog post');
      }
    } catch (error) {
      console.error('Error generating blog post:', error);
      toast({
        title: "Generation Failed",
        description: (error instanceof Error ? error.message : undefined) || "Failed to generate blog post. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePublish = async () => {
    if (!generatedPost) return;

    try {
      const { error } = await supabase
        .from('blog_posts')
        .update({ published_at: new Date().toISOString() })
        .eq('id', generatedPost.id);

      if (error) throw error;

      toast({
        title: "Blog Post Published!",
        description: "Your blog post is now live on the website.",
      });
      setGeneratedPost(null);
    } catch (error) {
      console.error('Error publishing blog post:', error);
      toast({
        title: "Publishing Failed",
        description: "Failed to publish blog post. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="h-8 w-8 text-sos-orange" />
        <h1 className="text-3xl font-bold">AI Blog Generator</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Generation Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Create Blog Content
            </CardTitle>
            <CardDescription>
              Generate SEO-optimized blog posts using AI
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="topic">Blog Topic *</Label>
              <Input
                id="topic"
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                placeholder="Enter your blog topic..."
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="keywords">Target Keywords</Label>
              <Input
                id="keywords"
                value={formData.keywords}
                onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
                placeholder="theft prevention, secondhand safety..."
                className="mt-1"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="contentType">Content Type</Label>
                <Select value={formData.contentType} onValueChange={(value) => setFormData({ ...formData, contentType: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="informational">Informational</SelectItem>
                    <SelectItem value="howto">How-to Guide</SelectItem>
                    <SelectItem value="listicle">Listicle</SelectItem>
                    <SelectItem value="news">News/Trends</SelectItem>
                    <SelectItem value="case-study">Case Study</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="tone">Tone</Label>
                <Select value={formData.tone} onValueChange={(value) => setFormData({ ...formData, tone: value })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="friendly">Friendly</SelectItem>
                    <SelectItem value="urgent">Urgent</SelectItem>
                    <SelectItem value="educational">Educational</SelectItem>
                    <SelectItem value="conversational">Conversational</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button 
              onClick={handleGenerate} 
              disabled={isGenerating}
              className="w-full"
              size="lg"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Generate Blog Post
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Suggested Topics */}
        <Card>
          <CardHeader>
            <CardTitle>Suggested Topics</CardTitle>
            <CardDescription>
              Click any topic to use it as a starting point
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {suggestedTopics.map((topic, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full text-left justify-start h-auto p-3"
                  onClick={() => setFormData({ ...formData, topic })}
                >
                  {topic}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Generated Content Preview */}
      {generatedPost && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-green-600" />
                  Generated Blog Post
                </CardTitle>
                <CardDescription>
                  Review and publish your AI-generated content
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setShowPreview(!showPreview)}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  {showPreview ? 'Hide' : 'Preview'}
                </Button>
                <Button onClick={handlePublish} className="bg-green-600 hover:bg-green-700">
                  Publish
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium">Title</Label>
                  <p className="text-sm bg-muted p-2 rounded-[0.25rem]">{generatedPost.title}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium">Reading Time</Label>
                  <p className="text-sm bg-muted p-2 rounded-[0.25rem]">{generatedPost.reading_time} min read</p>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium">Meta Description</Label>
                <p className="text-sm bg-muted p-2 rounded-[0.25rem]">{generatedPost.meta_description}</p>
              </div>

              <div>
                <Label className="text-sm font-medium">Excerpt</Label>
                <p className="text-sm bg-muted p-2 rounded-[0.25rem]">{generatedPost.excerpt}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium">Categories</Label>
                  <div className="flex gap-1 mt-1">
                    {generatedPost.categories.map((category, index) => (
                      <Badge key={index} variant="secondary">{category}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium">Tags</Label>
                  <div className="flex gap-1 mt-1 flex-wrap">
                    {generatedPost.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>

              {showPreview && generatedPost && (
                <div className="border-t pt-4">
                  <Label className="text-sm font-medium">Content Preview</Label>
                  <div 
                    className="prose max-w-none mt-2 p-4 bg-muted rounded-[0.25rem]"
                    dangerouslySetInnerHTML={{ 
                      __html: DOMPurify.sanitize(generatedPost.content, {
                        ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'a', 'blockquote', 'code', 'pre'],
                        ALLOWED_ATTR: ['href', 'target', 'rel', 'class'],
                        ALLOW_DATA_ATTR: false
                      })
                    }}
                  />
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};