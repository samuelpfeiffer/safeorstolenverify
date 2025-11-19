import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Shield, Users, TrendingUp } from 'lucide-react';

const extractVideoId = (url: string): string => {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : '';
};

export const VideoMarketingSection = () => {
  const videoContent = [
    {
      title: "The $13 Billion Problem Explained",
      description: "Understanding the scope of the stolen goods crisis and how it affects innocent consumers",
      youtubeUrl: "https://YouTube.com/shorts/Er_PXY0oMgE?si=nhhHl7uKYXWfJcwZ",
      duration: "0:59",
      category: "Problem Awareness"
    },
    {
      title: "How Safe or Stolen Works",
      description: "See our real-time verification technology in action",
      thumbnail: "/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png", 
      duration: "2:30",
      category: "Platform Demo"
    },
    {
      title: "Customer Success Stories",
      description: "Real users sharing how we've protected them from stolen goods",
      thumbnail: "/lovable-uploads/a8b08d24-e3e1-4c4b-85c9-5093cb107354.png",
      duration: "4:15",
      category: "Testimonials"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-sos to-sos/95">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 bg-sos-lime/20 text-sos-lime border-sos-lime/30">
            <Play className="h-4 w-4 mr-2" />
            Video Content
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            See Our Mission in Action
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Watch how we're tackling the global stolen goods crisis and protecting 
            millions of consumers from unknowingly purchasing stolen items.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {videoContent.map((video, index) => {
            const videoId = video.youtubeUrl ? extractVideoId(video.youtubeUrl) : null;
            const thumbnailSrc = videoId 
              ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
              : video.thumbnail;
            
            const handleVideoClick = () => {
              if (video.youtubeUrl) {
                window.open(video.youtubeUrl, '_blank');
              }
            };

            return (
              <Card 
                key={index} 
                className="bg-white/5 border-sos-orange/20 backdrop-blur-sm group hover:bg-white/10 transition-all duration-300 cursor-pointer"
                onClick={handleVideoClick}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={thumbnailSrc} 
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="bg-black/60 text-white border-none">
                        {video.duration}
                      </Badge>
                    </div>
                    <div className="absolute top-3 left-3">
                      <Badge variant="secondary" className="bg-sos-orange/80 text-white border-none">
                        {video.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sos-orange transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-sos-orange/10 to-sos-lime/10 rounded-2xl p-8 border border-sos-orange/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Learn More?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Explore our complete video library to understand how we're revolutionizing 
              consumer protection in the digital marketplace.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-sos-orange" />
                <span className="text-white font-medium">Consumer Protection</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-sos-lime" />
                <span className="text-white font-medium">User Education</span>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-sos-orange" />
                <span className="text-white font-medium">Market Impact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};