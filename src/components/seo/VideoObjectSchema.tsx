import { Helmet } from 'react-helmet-async';

interface VideoObjectSchemaProps {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string; // ISO 8601 format: PT1M30S
  contentUrl?: string;
  embedUrl?: string;
}

export const VideoObjectSchema = ({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration,
  contentUrl,
  embedUrl
}: VideoObjectSchemaProps) => {
  // Ensure uploadDate has timezone if not already present
  const formattedUploadDate = uploadDate.includes('T') ? uploadDate : `${uploadDate}T00:00:00Z`;
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": name,
    "description": description,
    "thumbnailUrl": thumbnailUrl,
    "uploadDate": formattedUploadDate,
    ...(duration && { "duration": duration }),
    // Google requires either contentUrl or embedUrl - include both when available
    ...(contentUrl && { "contentUrl": contentUrl }),
    ...(embedUrl && { "embedUrl": embedUrl }),
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://safeorstolen.com/logo.png"
      }
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

// Helper to generate schema for multiple videos
export const generateVideoListSchema = (videos: Array<{
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration?: string;
  contentUrl?: string;
  embedUrl?: string;
}>) => {
  return videos.map(video => {
    // Ensure uploadDate has timezone
    const formattedDate = video.uploadDate.includes('T') ? video.uploadDate : `${video.uploadDate}T00:00:00Z`;
    return {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": video.name,
      "description": video.description,
      "thumbnailUrl": video.thumbnailUrl,
      "uploadDate": formattedDate,
      ...(video.duration && { "duration": video.duration }),
      ...(video.contentUrl && { "contentUrl": video.contentUrl }),
      ...(video.embedUrl && { "embedUrl": video.embedUrl }),
      "publisher": {
        "@type": "Organization",
        "name": "SafeOrStolen",
        "logo": {
          "@type": "ImageObject",
          "url": "https://safeorstolen.com/logo.png"
        }
      }
    };
  });
};
