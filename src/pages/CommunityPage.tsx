import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { PageSEO } from '@/components/seo/PageSEO';
import { AISearchOptimizer } from '@/components/seo/AISearchOptimizer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { MessageCircle, Shield, AlertTriangle, Trophy } from 'lucide-react';

interface CommunityStory {
  id: string;
  created_at: string;
  name?: string;
  experience_type: 'success' | 'scam' | 'close-call' | 'recovery';
  item_type: 'phone' | 'vehicle' | 'electronics' | 'bike' | 'firearm' | 'other';
  story: string;
}

const experienceTypeMap = {
  success: { label: 'Verified Safe', icon: Shield, color: 'bg-green-500' },
  scam: { label: 'Scam Alert', icon: AlertTriangle, color: 'bg-red-500' },
  'close-call': { label: 'Close Call', icon: AlertTriangle, color: 'bg-yellow-500' },
  recovery: { label: 'Recovery Success', icon: Trophy, color: 'bg-blue-500' }
};

const itemTypeMap = {
  phone: 'Phone/Device',
  vehicle: 'Vehicle',
  electronics: 'Electronics',
  bike: 'Bicycle',
  firearm: 'Firearm',
  other: 'Other'
};

export default function CommunityPage() {
  const [stories, setStories] = useState<CommunityStory[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience_type: 'success' as const,
    item_type: 'phone' as const,
    story: ''
  });
  const [honeypot, setHoneypot] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const { data, error } = await supabase
        .from('community_stories')
        .select('id, created_at, name, experience_type, item_type, story')
        .eq('is_approved', true)
        .order('created_at', { ascending: false })
        .limit(20);
      
      if (error) throw error;
      setStories((data as CommunityStory[]) || []);
    } catch (error) {
      console.error('Error fetching stories:', error);
      toast({
        title: "Error",
        description: "Failed to load community stories",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (honeypot) return;
    
    if (!formData.story.trim()) {
      toast({
        title: "Error",
        description: "Please share your story",
        variant: "destructive"
      });
      return;
    }

    setSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('community_stories')
        .insert({
          name: formData.name || null,
          email: formData.email || null,
          experience_type: formData.experience_type,
          item_type: formData.item_type,
          story: formData.story,
          is_approved: false
        });
      
      if (error) throw error;
      
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        experience_type: 'success',
        item_type: 'phone',
        story: ''
      });
      
      toast({
        title: "Story Submitted!",
        description: "Thank you for sharing. Your story will be reviewed before publication.",
      });
    } catch (error) {
      console.error('Error submitting story:', error);
      toast({
        title: "Error",
        description: "Failed to submit your story. Please try again.",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageSEO
        title="Community Stories - Real User Experiences | Safe Or Stolen"
        description="Real user experiences checking stolen items before purchase. Read scam alerts, recovery stories, and verification success stories from our community."
        keywords="stolen item stories, scam alerts, item recovery, user experiences, IMEI check stories, VIN verification stories, stolen goods community"
        canonical="/community"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Stolen Item Reports & Recovery Stories",
          "description": "User-submitted stolen item verifications and recovery stories",
          "url": "https://safeorstolen.com/community",
          "itemListElement": stories.slice(0, 10).map((story, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "Report",
              "name": `${experienceTypeMap[story.experience_type].label} - ${itemTypeMap[story.item_type]}`,
              "description": story.story.substring(0, 200) + "..."
            }
          }))
        }}
      />
      <AISearchOptimizer 
        page="community" 
        context="user-stories"
        primaryKeywords={['stolen item stories', 'scam alerts', 'recovery stories']}
      />

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Community Stories</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real experiences from people who checked items before buying. Share your story to help others avoid scams and stolen goods.
          </p>
        </div>

        {/* Submit Story Form */}
        <Card className="mb-12 max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Share Your Experience
            </CardTitle>
            <CardDescription>
              Help others by sharing your verification experience. All submissions are reviewed before publication.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="text-center py-8">
                <Shield className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                <p className="text-muted-foreground">Your story has been submitted for review.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field */}
                <input 
                  type="text" 
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name (Optional)</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email (Optional)</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="experience_type">Experience Type</Label>
                    <Select value={formData.experience_type} onValueChange={(value: any) => setFormData({ ...formData, experience_type: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="success">Verified Safe</SelectItem>
                        <SelectItem value="scam">Scam Alert</SelectItem>
                        <SelectItem value="close-call">Close Call</SelectItem>
                        <SelectItem value="recovery">Recovery Success</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="item_type">Item Type</Label>
                    <Select value={formData.item_type} onValueChange={(value: any) => setFormData({ ...formData, item_type: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="phone">Phone/Device</SelectItem>
                        <SelectItem value="vehicle">Vehicle</SelectItem>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="bike">Bicycle</SelectItem>
                        <SelectItem value="firearm">Firearm</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="story">Your Story</Label>
                  <Textarea
                    id="story"
                    value={formData.story}
                    onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                    placeholder="Tell us about your experience checking an item before purchase..."
                    className="min-h-32"
                    required
                  />
                </div>

                <Button type="submit" className="w-full" disabled={submitting}>
                  {submitting ? 'Submitting...' : 'Share Story'}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Stories List */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center">Community Experiences</h2>
          
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
              <p className="mt-2 text-muted-foreground">Loading stories...</p>
            </div>
          ) : stories.length === 0 ? (
            <div className="text-center py-8">
              <MessageCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No stories yet. Be the first to share your experience!</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {stories.map((story) => {
                const experienceType = experienceTypeMap[story.experience_type];
                const Icon = experienceType.icon;
                
                return (
                  <Card key={story.id} className="h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className={`${experienceType.color} text-white`}>
                          <Icon className="h-3 w-3 mr-1" />
                          {experienceType.label}
                        </Badge>
                        <Badge variant="outline">
                          {itemTypeMap[story.item_type]}
                        </Badge>
                      </div>
                      {story.name && (
                        <CardTitle className="text-lg">{story.name}</CardTitle>
                      )}
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">
                        {new Date(story.created_at).toLocaleDateString()}
                      </p>
                      <p className="text-sm leading-relaxed">{story.story}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}