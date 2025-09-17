import { useEffect } from 'react';
import { generateRSSFeed, getMainFeedConfig, getMainFeedItems } from '@/utils/rss/rssGenerator';

const RSSFeedPage = () => {
  useEffect(() => {
    // Generate RSS feed
    const config = getMainFeedConfig();
    const items = getMainFeedItems();
    const rssXML = generateRSSFeed(config, items);
    
    // Set content type and serve XML
    const response = new Response(rssXML, {
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
        'X-Robots-Tag': 'noindex'
      }
    });
    
    // For development, log the RSS feed
    if (process.env.NODE_ENV === 'development') {
      console.log('Generated RSS feed with', items.length, 'items');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">RSS Feed</h1>
        <p className="text-muted-foreground mb-4">
          This page generates and serves the RSS feed for SafeOrStolen.
          Visit <code>/feed.xml</code> to view the actual RSS feed.
        </p>
        <div className="bg-card p-6 rounded-lg border">
          <h2 className="text-xl font-semibold mb-4">RSS Feed Information</h2>
          <ul className="space-y-2 text-sm">
            <li>• Latest consumer protection articles</li>
            <li>• New tool announcements and updates</li>
            <li>• Security insights and guides</li>
            <li>• Statistics and research reports</li>
            <li>• Community updates and tips</li>
          </ul>
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <p className="text-sm font-medium mb-2">Subscribe to our RSS feed:</p>
            <code className="text-xs bg-background p-2 rounded border">
              https://safeorstolen.com/feed.xml
            </code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSSFeedPage;