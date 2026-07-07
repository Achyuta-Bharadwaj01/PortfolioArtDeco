import type { BlogSeries } from "@/lib/blog/types";

export const designTherapySeries = {
  slug: "design-therapy",
  title: "Design Therapy",
  tagline:
    "The world around you is beautiful when the world within you is peaceful",
  episodes: [
    {
      slug: "stop-designing-rooms-start-designing-lifestyle",
      episode: 1,
      title: "Stop Designing Rooms. Start Designing Lifestyle",
      excerpt:
        "A quiet revolution in interior design begins with a simple shift: designing for people, not just for how a space looks.",
      publishedAt: "2026-07-07",
    },
  ],
} satisfies BlogSeries;

export const blogSeries = [designTherapySeries] as const;

export function getPrimaryBlogSeries(): BlogSeries {
  return designTherapySeries;
}

export function getEpisodeSummaries() {
  return designTherapySeries.episodes;
}

export function getEpisodeSlugs(): string[] {
  return designTherapySeries.episodes.map((episode) => episode.slug);
}

export function getEpisodeSummary(slug: string) {
  return designTherapySeries.episodes.find((episode) => episode.slug === slug);
}
