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
    {
      slug: "emotions-matter-how-you-feel-in-a-space",
      episode: 2,
      title:
        "Emotions Matter — How You Feel in a Space Affects How You Live, Sleep, Think, Work",
      excerpt:
        "Before you notice the furniture or finishes, your body already knows how it feels to be there — and that feeling shapes how you live.",
      publishedAt: "2026-07-07",
    },
    {
      slug: "our-senses-and-spaces",
      episode: 3,
      title: "Our Senses and Spaces",
      subtitle:
        "The quiet design decisions that make a home feel like home.",
      excerpt:
        "The quiet design decisions that make a home feel like home.",
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
