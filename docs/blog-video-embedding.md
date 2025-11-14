# How to Embed Videos in Blog Posts

## Quick Start

The `VideoEmbed` component has been created to easily add YouTube, Vimeo, and Loom videos to any blog post.

## Usage

### 1. Import the Component

```tsx
import { VideoEmbed } from '@/components/blog/VideoEmbed';
```

### 2. Add Video to Your Blog Post

```tsx
<VideoEmbed 
  url="YOUR_VIDEO_URL"
  title="Optional caption for the video"
/>
```

## Supported Video Platforms

### YouTube
```tsx
// Standard YouTube URL
<VideoEmbed 
  url="https://www.youtube.com/watch?v=VIDEO_ID"
  title="My YouTube Video"
/>

// Short YouTube URL
<VideoEmbed 
  url="https://youtu.be/VIDEO_ID"
  title="My YouTube Video"
/>
```

### Vimeo
```tsx
<VideoEmbed 
  url="https://vimeo.com/VIDEO_ID"
  title="My Vimeo Video"
/>
```

### Loom
```tsx
<VideoEmbed 
  url="https://www.loom.com/share/VIDEO_ID"
  title="My Loom Video"
/>
```

### Direct Embed URL
```tsx
// Already formatted embed URL
<VideoEmbed 
  url="https://www.youtube.com/embed/VIDEO_ID"
  title="Direct Embed"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `url` | `string` | Required | Video URL (YouTube, Vimeo, Loom, or direct embed) |
| `title` | `string` | `"Video"` | Caption displayed below the video |
| `aspectRatio` | `"16/9" \| "4/3" \| "1/1"` | `"16/9"` | Video aspect ratio |

## Examples

### Standard 16:9 YouTube Video
```tsx
<VideoEmbed 
  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  title="How to Check IMEI Number on iPhone"
/>
```

### Square Video (1:1)
```tsx
<VideoEmbed 
  url="https://www.youtube.com/watch?v=VIDEO_ID"
  title="Quick Tip"
  aspectRatio="1/1"
/>
```

### Older 4:3 Video
```tsx
<VideoEmbed 
  url="https://vimeo.com/123456789"
  title="Classic Tutorial"
  aspectRatio="4/3"
/>
```

## Where to Add Videos in Blog Posts

Videos work great in these locations:

### 1. After the Introduction (Recommended)
```tsx
<p>Introduction paragraph...</p>

<VideoEmbed 
  url="YOUR_URL"
  title="Watch the full tutorial"
/>

<h2>Step-by-Step Guide</h2>
```

### 2. In Tutorial Sections
```tsx
<h2>Step 1: Find Your IMEI</h2>
<p>Explanation text...</p>

<VideoEmbed 
  url="YOUR_URL"
  title="Video: How to find your IMEI number"
/>

<h2>Step 2: Enter IMEI</h2>
```

### 3. Before Conclusion
```tsx
<p>Summary text...</p>

<VideoEmbed 
  url="YOUR_URL"
  title="Complete walkthrough"
/>

<h2>Conclusion</h2>
```

## Currently Implemented

The VideoEmbed component has been added to:

- ✅ `HowToCheckIfPhoneStolen.tsx` - Placeholder ready for your YouTube URL

To update with your actual video:

1. Find the line with `YOUR_YOUTUBE_VIDEO_URL_HERE`
2. Replace it with your actual video URL
3. Update the title if needed

## Example: Complete Blog Post Section

```tsx
import { VideoEmbed } from '@/components/blog/VideoEmbed';

export default function MyBlogPost() {
  return (
    <div>
      <h1>How to Verify a Phone</h1>
      
      <p>
        In this guide, we'll show you exactly how to check if a phone 
        is stolen before buying it.
      </p>

      <VideoEmbed 
        url="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
        title="Watch our complete tutorial (3 minutes)"
      />

      <h2>Step 1: Find the IMEI</h2>
      <p>First, dial *#06# on the phone...</p>

      {/* More content */}
    </div>
  );
}
```

## Styling

The VideoEmbed component includes:
- Responsive design (works on mobile and desktop)
- Proper aspect ratio handling
- Border and shadow for visual appeal
- Rounded corners
- Caption styling
- Full-screen support

## Best Practices

1. **Keep videos short** - 2-5 minutes ideal for blog posts
2. **Add descriptive titles** - Help readers know what they'll watch
3. **Place strategically** - After intro or before complex instructions
4. **Don't overuse** - 1-2 videos per blog post maximum
5. **Test on mobile** - Ensure videos play well on all devices

## Troubleshooting

### Video Not Showing
- Check that the URL is correct
- Ensure the video is set to "Public" or "Unlisted" (not Private)
- Verify the URL format matches one of the supported platforms

### Wrong Aspect Ratio
- Adjust the `aspectRatio` prop:
  - `"16/9"` - Modern widescreen (default)
  - `"4/3"` - Older standard
  - `"1/1"` - Square videos

### Caption Not Showing
- Make sure you included the `title` prop
- Check for typos in the prop name
