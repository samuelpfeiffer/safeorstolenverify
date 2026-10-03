import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * Oct 2 2026: the site's one official video now lives on YouTube (@SafeOrStolen).
 * Fast "click to play" embed: shows the thumbnail and only loads YouTube's player after a tap,
 * and tells Google about the video (VideoObject) so it can appear in video search results.
 */
export const SAFEORSTOLEN_VIDEO = {
  id: '__YOUTUBE_ID__',
  title: 'SafeOrStolen - Verify any used item before you buy or sell',
  description:
    'Always verify used items to make sure they are not listed stolen. SafeOrStolen lets anyone check any used item by serial number, IMEI, VIN, or license plate before buying or selling.',
  uploadDate: '2026-10-02',
} as const;

// Kept for older imports: every page now shows the same single video.
export const safeOrStolenVideos = [
  { id: 'main', title: SAFEORSTOLEN_VIDEO.title, caption: 'Verify any used item before you buy or sell.', src: '', poster: '' },
] as const;

type Props = { title?: string; caption?: string; className?: string; src?: string; poster?: string; withSchema?: boolean };

export function SafeOrStolenVideo({ title = SAFEORSTOLEN_VIDEO.title, caption, className = '', withSchema = true }: Props) {
  const [playing, setPlaying] = useState(false);
  const id = SAFEORSTOLEN_VIDEO.id;
  // Until the real YouTube video ID is set, show nothing (no broken player).
  const ready = /^[A-Za-z0-9_-]{11}$/.test(id);
  const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: SAFEORSTOLEN_VIDEO.title,
    description: SAFEORSTOLEN_VIDEO.description,
    thumbnailUrl: [thumb],
    uploadDate: SAFEORSTOLEN_VIDEO.uploadDate,
    contentUrl: `https://www.youtube.com/shorts/${id}`,
    embedUrl: `https://www.youtube.com/embed/${id}`,
    publisher: { '@type': 'Organization', name: 'SafeOrStolen', logo: { '@type': 'ImageObject', url: 'https://safeorstolen.com/sos-logo.png' } },
  };
  if (!ready) return null;
  return (
    <figure className={className}>
      {withSchema && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
      )}
      <div className="mx-auto max-w-sm overflow-hidden rounded-xl border border-primary/40 bg-card shadow-lg">
        <div className="relative aspect-[9/16] w-full bg-black">
          {playing ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 h-full w-full"
              aria-label={`Play video: ${title}`}
            >
              <img src={thumb} alt={title} loading="lazy" className="h-full w-full object-cover opacity-90 group-hover:opacity-100" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 shadow-xl transition-transform group-hover:scale-110">
                  <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-primary-foreground" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
                </span>
              </span>
            </button>
          )}
        </div>
      </div>
      {caption ? <figcaption className="mt-3 text-center text-sm text-muted-foreground">{caption}</figcaption> : null}
    </figure>
  );
}

export default SafeOrStolenVideo;
