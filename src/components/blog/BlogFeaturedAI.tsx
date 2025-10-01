import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Sparkles, TrendingUp } from 'lucide-react';

export const BlogFeaturedAI: React.FC = () => {
  return (
    <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/30 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
      
      <CardContent className="p-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center animate-pulse">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  AI-Powered Content Hub
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                </h3>
                <p className="text-sm text-gray-300">Automatically updated daily at 9 AM UTC</p>
              </div>
            </div>
            
            <p className="text-gray-200 mb-6 leading-relaxed">
              Our AI engine continuously generates fresh, SEO-optimized content about verification, fraud prevention, 
              and secondhand market safety. Every article is crafted with the latest trends and insights to help you 
              make safer buying and selling decisions.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-200">Daily Updates</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-gray-200">SEO Optimized</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Brain className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-200">AI-Powered Insights</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Brain className="w-5 h-5 mr-2" />
              View Latest Posts
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
