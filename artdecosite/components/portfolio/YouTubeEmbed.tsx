import {
  youTubeEmbedSrc,
  youTubeWatchUrl,
} from "@/lib/utils/youtube";

type YouTubeEmbedProps = {
  videoId: string;
  title: string;
};

export function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
  return (
    <div className="group relative aspect-video w-full overflow-hidden bg-ink/5 ring-1 ring-gold/12 transition-all duration-300 hover:ring-gold/30">
      <iframe
        src={youTubeEmbedSrc(videoId)}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}

export function YouTubeEmbedLink({
  videoId,
  title,
}: YouTubeEmbedProps) {
  return (
    <a
      href={youTubeWatchUrl(videoId)}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-3 inline-flex font-body text-[10px] font-semibold uppercase tracking-[0.32em] text-ink/45 transition-colors hover:text-gold"
    >
      Watch on YouTube
    </a>
  );
}
