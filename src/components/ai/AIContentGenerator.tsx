import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { Brain, Camera, Video, FileText, Image, Zap, RefreshCw, Download } from 'lucide-react';

interface GeneratedContent {
  id: string;
  type: 'video' | 'photo' | 'text' | 'social';
  title: string;
  url?: string;
  description: string;
  status: 'generating' | 'ready' | 'failed';
  createdAt: Date;
}

export const AIContentGenerator = () => {
  const { toast } = useToast();
  const [content, setContent] = useState<GeneratedContent[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [contentType, setContentType] = useState<'video' | 'photo' | 'text' | 'social'>('photo');
  const [backgroundProcessing, setBackgroundProcessing] = useState(true);

  useEffect(() => {
    // Start background AI processing
    if (backgroundProcessing) {
      startBackgroundProcessing();
    }
  }, [backgroundProcessing]);

  const startBackgroundProcessing = () => {
    // Simulate continuous AI processing
    const interval = setInterval(() => {
      const tasks = [
        'Analyzing market trends for content optimization',
        'Generating SEO-optimized content variations',
        'Creating social media ready assets',
        'Optimizing existing content for better performance',
        'Scanning competitor content for insights'
      ];
      
      const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
      
      toast({
        title: "🤖 AI Working in Background",
        description: randomTask,
        duration: 3000,
      });
    }, 30000); // Every 30 seconds

    return () => clearInterval(interval);
  };

  const generateContent = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Enter a prompt",
        description: "Please describe what you'd like to generate",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    const newContent: GeneratedContent = {
      id: `content_${Date.now()}`,
      type: contentType,
      title: prompt,
      description: `AI-generated ${contentType} content`,
      status: 'generating',
      createdAt: new Date()
    };

    setContent(prev => [newContent, ...prev]);

    try {
      // Simulate content generation
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Update with "generated" content
      setContent(prev => prev.map(item => 
        item.id === newContent.id 
          ? { 
              ...item, 
              status: 'ready',
              url: contentType === 'video' 
                ? 'https://example.com/generated-video.mp4'
                : contentType === 'photo'
                ? 'https://example.com/generated-image.jpg'
                : undefined
            }
          : item
      ));

      toast({
        title: "Content Generated Successfully!",
        description: `Your ${contentType} content is ready for use`,
      });

    } catch (error) {
      setContent(prev => prev.map(item => 
        item.id === newContent.id 
          ? { ...item, status: 'failed' }
          : item
      ));
      
      toast({
        title: "Generation Failed",
        description: "Please try again with a different prompt",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
      setPrompt('');
    }
  };

  const getContentIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4" />;
      case 'photo': return <Camera className="w-4 h-4" />;
      case 'text': return <FileText className="w-4 h-4" />;
      case 'social': return <Image className="w-4 h-4" />;
      default: return <Brain className="w-4 h-4" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'generating':
        return <Badge variant="secondary" className="animate-pulse">Generating...</Badge>;
      case 'ready':
        return <Badge variant="default">Ready</Badge>;
      case 'failed':
        return <Badge variant="destructive">Failed</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold">AI Content Generator</h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Create professional videos, photos, and marketing content with AI. Always running in the background to optimize your content strategy.
        </p>
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-green-600 font-medium">AI Background Processing Active</span>
        </div>
      </div>

      {/* Content Generation Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-purple-600" />
            Generate New Content
          </CardTitle>
          <CardDescription>
            Describe what you'd like to create and let AI generate it for you
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <Label htmlFor="prompt">Content Description</Label>
              <Input
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g., Professional commercial video about phone verification safety"
                disabled={isGenerating}
              />
            </div>
            
            <div>
              <Label>Content Type</Label>
              <Select value={contentType} onValueChange={(value: any) => setContentType(value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="photo">Photo/Image</SelectItem>
                  <SelectItem value="video">Video Commercial</SelectItem>
                  <SelectItem value="text">Marketing Text</SelectItem>
                  <SelectItem value="social">Social Media Post</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-end">
              <Button 
                onClick={generateContent}
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 mr-2" />
                    Generate
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Generation Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Button
          variant="outline"
          onClick={() => {
            setPrompt("Professional video commercial showcasing SafeOrStolen verification process");
            setContentType('video');
          }}
          className="h-20 flex-col space-y-2"
        >
          <Video className="w-6 h-6" />
          <span className="text-sm">Commercial Video</span>
        </Button>
        
        <Button
          variant="outline"
          onClick={() => {
            setPrompt("Hero image showing phones, cars, and electronics being verified");
            setContentType('photo');
          }}
          className="h-20 flex-col space-y-2"
        >
          <Camera className="w-6 h-6" />
          <span className="text-sm">Hero Images</span>
        </Button>
        
        <Button
          variant="outline"
          onClick={() => {
            setPrompt("Social media post about buyer protection and fraud prevention");
            setContentType('social');
          }}
          className="h-20 flex-col space-y-2"
        >
          <Image className="w-6 h-6" />
          <span className="text-sm">Social Posts</span>
        </Button>
        
        <Button
          variant="outline"
          onClick={() => {
            setPrompt("Marketing copy for seller trust and verification benefits");
            setContentType('text');
          }}
          className="h-20 flex-col space-y-2"
        >
          <FileText className="w-6 h-6" />
          <span className="text-sm">Marketing Copy</span>
        </Button>
      </div>

      {/* Generated Content List */}
      {content.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Generated Content</CardTitle>
            <CardDescription>
              Your AI-generated content library
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {content.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    {getContentIcon(item.type)}
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description} • {item.createdAt.toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    {getStatusBadge(item.status)}
                    {item.status === 'ready' && (
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* AI Background Tasks */}
      <Card className="border-2 border-dashed border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700">
            <RefreshCw className="w-5 h-5 animate-spin" />
            AI Background Processing
          </CardTitle>
          <CardDescription>
            AI is continuously working to optimize your content, analyze trends, and improve your marketing strategy
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="space-y-2">
              <h4 className="font-medium">SEO Optimization</h4>
              <p className="text-muted-foreground">Analyzing keywords and optimizing content for search engines</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Trend Analysis</h4>
              <p className="text-muted-foreground">Finding trending topics and content opportunities</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">Performance Tracking</h4>
              <p className="text-muted-foreground">Monitoring content performance and suggesting improvements</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};