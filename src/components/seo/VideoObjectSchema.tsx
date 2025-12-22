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

// Helper to ensure proper ISO 8601 datetime format with timezone
const formatUploadDate = (date: string): string => {
  // If already has 'T' and timezone info, validate and return
  if (date.includes('T') && (date.endsWith('Z') || date.includes('+') || date.includes('-', 10))) {
    return date;
  }
  
  // If has 'T' but no timezone, add Z
  if (date.includes('T')) {
    return date + 'Z';
  }
  
  // Date only format (YYYY-MM-DD) - add time and timezone
  if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return `${date}T00:00:00Z`;
  }
  
  // Fallback: try to parse and format
  try {
    const parsed = new Date(date);
    if (!isNaN(parsed.getTime())) {
      return parsed.toISOString();
    }
  } catch {
    // If parsing fails, add default time and timezone
  }
  
  return `${date}T00:00:00Z`;
};

export const VideoObjectSchema = ({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  duration,
  contentUrl,
  embedUrl
}: VideoObjectSchemaProps) => {
  // Ensure at least one URL is provided - this is required by Google
  if (!contentUrl && !embedUrl) {
    console.warn('VideoObjectSchema: Either contentUrl or embedUrl must be provided');
    return null;
  }
  
  const formattedUploadDate = formatUploadDate(uploadDate);
  
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
  return videos
    .filter(video => video.contentUrl || video.embedUrl) // Filter out videos without URLs
    .map(video => {
      const formattedDate = formatUploadDate(video.uploadDate);
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
