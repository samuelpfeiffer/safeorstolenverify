/**
 * Social Media Meta Tag Optimizer
 * Ensures optimal Open Graph and Twitter Card implementation
 */

interface SocialMediaMetadata {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
  imageAlt?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
}

/**
 * Generates optimized Open Graph meta tags
 */
export const generateOpenGraphTags = (metadata: SocialMediaMetadata) => {
  const {
    title,
    description,
    image = '/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png',
    url,
    type = 'website',
    imageAlt = 'SafeOrStolen - Verify if items are stolen before buying'
  } = metadata;

  const fullImageUrl = image.startsWith('http') 
    ? image 
    : `https://safeorstolen.com${image}`;

  return {
    'og:title': title,
    'og:description': description,
    'og:type': type,
    'og:image': fullImageUrl,
    'og:image:secure_url': fullImageUrl,
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:image:alt': imageAlt,
    'og:image:type': 'image/png',
    'og:url': url || 'https://safeorstolen.com',
    'og:site_name': 'SafeOrStolen',
    'og:locale': 'en_US',
    'og:locale:alternate': ['es_US', 'fr_FR', 'de_DE']
  };
};

/**
 * Generates optimized Twitter Card meta tags
 */
export const generateTwitterCardTags = (metadata: SocialMediaMetadata) => {
  const {
    title,
    description,
    image = '/lovable-uploads/ec9c0592-2bc2-4148-b85a-82ff5342c0f8.png',
    imageAlt = 'SafeOrStolen - Verify if items are stolen before buying',
    twitterCard = 'summary_large_image'
  } = metadata;

  const fullImageUrl = image.startsWith('http') 
    ? image 
    : `https://safeorstolen.com${image}`;

  return {
    'twitter:card': twitterCard,
    'twitter:site': '@safeorstolen',
    'twitter:creator': '@safeorstolen',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': fullImageUrl,
    'twitter:image:alt': imageAlt,
    'twitter:domain': 'safeorstolen.com'
  };
};

/**
 * Optimizes image dimensions for social media
 */
export const getOptimalSocialImageDimensions = (platform: 'og' | 'twitter') => {
  if (platform === 'og') {
    return {
      width: 1200,
      height: 630,
      aspectRatio: '1.91:1',
      minWidth: 600,
      minHeight: 315,
      maxSize: '8MB'
    };
  }
  
  // Twitter
  return {
    summary: {
      width: 120,
      height: 120,
      aspectRatio: '1:1'
    },
    summary_large_image: {
      width: 1200,
      height: 628,
      aspectRatio: '1.91:1',
      minWidth: 300,
      minHeight: 157,
      maxSize: '5MB'
    }
  };
};

/**
 * Validates social media image
 */
export const validateSocialImage = (imageUrl: string, platform: 'og' | 'twitter'): {
  isValid: boolean;
  warnings: string[];
} => {
  const warnings: string[] = [];
  
  if (!imageUrl) {
    warnings.push('No image URL provided');
    return { isValid: false, warnings };
  }

  // Check if HTTPS
  if (imageUrl.startsWith('http://')) {
    warnings.push('Image should use HTTPS protocol');
  }

  // Check file extension
  const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
  const hasValidExtension = validExtensions.some(ext => 
    imageUrl.toLowerCase().includes(ext)
  );
  
  if (!hasValidExtension && !imageUrl.startsWith('data:')) {
    warnings.push('Image should be JPG, PNG, GIF, or WebP format');
  }

  return {
    isValid: warnings.length === 0,
    warnings
  };
};

/**
 * Creates Facebook-optimized meta tags
 */
export const generateFacebookTags = (metadata: SocialMediaMetadata) => {
  return {
    ...generateOpenGraphTags(metadata),
    'fb:app_id': process.env.FACEBOOK_APP_ID || '', // Add if you have one
    'article:publisher': 'https://facebook.com/safeorstolen'
  };
};


/**
 * Generates all social media tags
 */
export const generateAllSocialTags = (metadata: SocialMediaMetadata) => {
  return {
    openGraph: generateOpenGraphTags(metadata),
    twitter: generateTwitterCardTags(metadata),
    facebook: generateFacebookTags(metadata)
  };
};
