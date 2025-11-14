interface VideoEmbedProps {
  url: string;
  title?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1";
}

export const VideoEmbed = ({ url, title = "Video", aspectRatio = "16/9" }: VideoEmbedProps) => {
  // Extract video ID from various URL formats
  const getEmbedUrl = (videoUrl: string) => {
    // YouTube
    if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
      const videoId = videoUrl.includes('youtu.be') 
        ? videoUrl.split('youtu.be/')[1]?.split('?')[0]
        : new URLSearchParams(videoUrl.split('?')[1] || '').get('v');
      return `https://www.youtube.com/embed/${videoId}`;
    }
    
    // Vimeo
    if (videoUrl.includes('vimeo.com')) {
      const videoId = videoUrl.split('vimeo.com/')[1]?.split('?')[0];
      return `https://player.vimeo.com/video/${videoId}`;
    }
    
    // Loom
    if (videoUrl.includes('loom.com')) {
      const videoId = videoUrl.split('share/')[1]?.split('?')[0];
      return `https://www.loom.com/embed/${videoId}`;
    }
    
    // Direct embed URL (already formatted)
    return videoUrl;
  };

  return (
    <div className="my-8">
      <div 
        className="relative w-full overflow-hidden rounded-lg border border-border shadow-lg"
        style={{ aspectRatio }}
      >
        <iframe
          src={getEmbedUrl(url)}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      </div>
      {title && (
        <p className="mt-2 text-sm text-center text-muted-foreground italic">
          {title}
        </p>
      )}
    </div>
  );
};