import React, { useState } from 'react';
import { ExternalLink, Copy, Check, Send, MessageSquare, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

const platforms = {
  reddit: {
    name: 'Reddit',
    color: 'bg-orange-500',
    posts: [
      {
        subreddit: 'r/Flipping',
        title: 'Quick tip: Always verify serial numbers before buying inventory',
        body: `Fellow flippers - learned this the hard way after almost buying a stolen MacBook. Now I always run serial numbers through safeorstolen.com before any purchase. It's free (2 checks) and takes literally 3 seconds. Their app even lets you scan barcodes at garage sales.`,
        url: 'https://reddit.com/r/Flipping/submit'
      },
      {
        subreddit: 'r/povertyfinance',
        title: 'PSA: Free tool to avoid buying stolen goods',
        body: `Been buying used electronics to save money. Almost got burned - the seller got aggressive when I asked to verify the serial number (huge red flag). Found safeorstolen.com which checks if items are reported stolen for free. Saved me $800 and potential legal trouble.`,
        url: 'https://reddit.com/r/povertyfinance/submit'
      },
      {
        subreddit: 'r/personalfinance',
        title: 'The hidden financial risk of buying secondhand',
        body: `If you buy stolen goods, even unknowingly, YOU are liable. Police can seize the item and you lose your money with no recourse. Now I always check serial numbers at safeorstolen.com before any major secondhand purchase. Free and takes 3 seconds.`,
        url: 'https://reddit.com/r/personalfinance/submit'
      }
    ]
  },
  quora: {
    name: 'Quora',
    color: 'bg-red-600',
    posts: [
      {
        question: 'How do I check if a used phone is stolen?',
        answer: `The easiest free way is SafeOrStolen.com:\n\n1. Get the IMEI number - dial *#06# on the phone\n2. Go to safeorstolen.com\n3. Enter the IMEI number\n4. Get instant results in 3 seconds\n\nThey check against carrier blacklists and police databases. You get 2 free checks when you sign up.`,
        url: 'https://quora.com/search?q=how+to+check+if+phone+is+stolen'
      },
      {
        question: 'How do I check if a car is stolen?',
        answer: `Use SafeOrStolen.com - it's free:\n\n1. Find the VIN (dashboard or door jamb)\n2. Enter it at safeorstolen.com\n3. Get results in 3 seconds\n\nThey check NCIC, NICB, and NHTSA records across all 50 states.`,
        url: 'https://quora.com/search?q=how+to+check+if+car+is+stolen'
      }
    ]
  },
  facebook: {
    name: 'Facebook',
    color: 'bg-blue-600',
    posts: [
      {
        group: 'Local Buy/Sell Groups',
        post: `⚠️ PSA for Marketplace Buyers ⚠️\n\nBefore buying phones, laptops, or vehicles, ALWAYS ask for the serial number and check it FREE at SafeOrStolen.com\n\nTakes 3 seconds - saved me from buying a stolen item last week!`,
        url: 'https://facebook.com/groups/feed/'
      }
    ]
  },
  twitter: {
    name: 'Twitter/X',
    color: 'bg-black',
    posts: [
      {
        content: `🧵 How to protect yourself buying used items:\n\n1. ALWAYS ask for serial number before meeting\n2. Check it FREE at SafeOrStolen.com (3 seconds)\n3. If seller refuses, walk away\n\nThis saved me from 3 bad purchases. RT to help others! 🛡️`,
        url: 'https://twitter.com/intent/tweet'
      }
    ]
  }
};

export const MarketingDashboard = () => {
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(id);
    toast.success('Copied to clipboard!');
    setTimeout(() => setCopiedIndex(null), 3000);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Marketing Command Center</h1>
          <p className="text-muted-foreground">
            Copy-paste ready posts for all platforms. Post these NOW to drive traffic.
          </p>
        </div>

        <Tabs defaultValue="reddit">
          <TabsList className="mb-6">
            {Object.entries(platforms).map(([key, platform]) => (
              <TabsTrigger key={key} value={key} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${platform.color}`} />
                {platform.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(platforms).map(([key, platform]) => (
            <TabsContent key={key} value={key} className="space-y-4">
              {key === 'reddit' && platform.posts.map((post: any, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{post.subreddit}</span>
                      <Button asChild size="sm" variant="outline">
                        <a href={post.url} target="_blank" rel="noopener noreferrer">
                          Post Now <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Title:</label>
                      <div className="flex gap-2 mt-1">
                        <code className="flex-1 p-2 bg-muted rounded text-sm">{post.title}</code>
                        <Button 
                          size="icon" 
                          variant="ghost"
                          onClick={() => copyToClipboard(post.title, `${key}-${idx}-title`)}
                        >
                          {copiedIndex === `${key}-${idx}-title` ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">Body:</label>
                      <div className="flex gap-2 mt-1">
                        <pre className="flex-1 p-3 bg-muted rounded text-sm whitespace-pre-wrap">{post.body}</pre>
                        <Button 
                          size="icon" 
                          variant="ghost"
                          onClick={() => copyToClipboard(post.body, `${key}-${idx}-body`)}
                        >
                          {copiedIndex === `${key}-${idx}-body` ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {key === 'quora' && platform.posts.map((post: any, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-lg">{post.question}</span>
                      <Button asChild size="sm" variant="outline">
                        <a href={post.url} target="_blank" rel="noopener noreferrer">
                          Find Question <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <pre className="flex-1 p-3 bg-muted rounded text-sm whitespace-pre-wrap">{post.answer}</pre>
                      <Button 
                        size="icon" 
                        variant="ghost"
                        onClick={() => copyToClipboard(post.answer, `${key}-${idx}`)}
                      >
                        {copiedIndex === `${key}-${idx}` ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {key === 'facebook' && platform.posts.map((post: any, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{post.group}</span>
                      <Button asChild size="sm" variant="outline">
                        <a href={post.url} target="_blank" rel="noopener noreferrer">
                          Go to Groups <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <pre className="flex-1 p-3 bg-muted rounded text-sm whitespace-pre-wrap">{post.post}</pre>
                      <Button 
                        size="icon" 
                        variant="ghost"
                        onClick={() => copyToClipboard(post.post, `${key}-${idx}`)}
                      >
                        {copiedIndex === `${key}-${idx}` ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {key === 'twitter' && platform.posts.map((post: any, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Tweet</span>
                      <Button asChild size="sm" variant="outline">
                        <a href={`${post.url}?text=${encodeURIComponent(post.content)}`} target="_blank" rel="noopener noreferrer">
                          Tweet Now <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <pre className="flex-1 p-3 bg-muted rounded text-sm whitespace-pre-wrap">{post.content}</pre>
                      <Button 
                        size="icon" 
                        variant="ghost"
                        onClick={() => copyToClipboard(post.content, `${key}-${idx}`)}
                      >
                        {copiedIndex === `${key}-${idx}` ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default MarketingDashboard;
