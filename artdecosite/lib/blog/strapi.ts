import type { BlogEpisode, BlogParagraph, BlogSeries } from "@/lib/blog/types";

const STRAPI_URL = process.env.STRAPI_URL ?? "https://admin.shaineela.com";

type StrapiParagraph = {
  text?: string | null;
  emphasis?: boolean | null;
};

type StrapiEpisode = {
  title?: string | null;
  slug?: string | null;
  episode?: number | null;
  excerpt?: string | null;
  subtitle?: string | null;
  publishedOn?: string | null;
  paragraphs?: StrapiParagraph[] | null;
  series?: StrapiSeries | null;
};

type StrapiSeries = {
  title?: string | null;
  slug?: string | null;
  tagline?: string | null;
  episodes?: StrapiEpisode[] | null;
};

type StrapiList<T> = {
  data?: T[] | null;
};

function strapiUrl(path: string, query: Record<string, string>) {
  const url = new URL(path, STRAPI_URL);

  for (const [key, value] of Object.entries(query)) {
    url.searchParams.set(key, value);
  }

  return url;
}

async function strapiGet<T>(path: string, query: Record<string, string>): Promise<T | null> {
  try {
    const response = await fetch(strapiUrl(path, query), {
      next: { revalidate: 60, tags: ["blog"] },
    });

    if (!response.ok) {
      return null;
    }

    return (await response.json()) as T;
  } catch {
    return null;
  }
}

function toParagraph(paragraph: StrapiParagraph): BlogParagraph | null {
  const text = paragraph.text?.trim();

  if (!text) {
    return null;
  }

  return {
    text,
    ...(paragraph.emphasis ? { emphasis: true } : {}),
  };
}

function toEpisodeSummary(episode: StrapiEpisode) {
  if (!episode.slug || !episode.title || episode.episode == null) {
    return null;
  }

  return {
    slug: episode.slug,
    episode: episode.episode,
    title: episode.title,
    excerpt: episode.excerpt?.trim() ?? "",
    ...(episode.subtitle ? { subtitle: episode.subtitle } : {}),
    ...(episode.publishedOn ? { publishedAt: episode.publishedOn } : {}),
  };
}

function toSeries(series: StrapiSeries): BlogSeries | null {
  if (!series.slug || !series.title) {
    return null;
  }

  const episodes = (series.episodes ?? [])
    .map(toEpisodeSummary)
    .filter((episode) => episode !== null)
    .sort((left, right) => left.episode - right.episode);

  return {
    slug: series.slug,
    title: series.title,
    tagline: series.tagline?.trim() ?? "",
    episodes,
  };
}

export async function getBlogSeries(): Promise<BlogSeries[] | null> {
  const payload = await strapiGet<StrapiList<StrapiSeries>>("/api/series", {
    "populate[episodes][fields][0]": "title",
    "populate[episodes][fields][1]": "slug",
    "populate[episodes][fields][2]": "episode",
    "populate[episodes][fields][3]": "excerpt",
    "populate[episodes][fields][4]": "subtitle",
    "populate[episodes][fields][5]": "publishedOn",
    "pagination[pageSize]": "100",
  });

  if (!payload?.data) {
    return null;
  }

  return payload.data.map(toSeries).filter((series) => series !== null);
}

export async function getEpisodeSlugs(): Promise<string[]> {
  const seriesList = await getBlogSeries();

  if (!seriesList) {
    return [];
  }

  return seriesList.flatMap((series) => series.episodes.map((episode) => episode.slug));
}

export async function getEpisodeBySlug(slug: string): Promise<
  | { status: "ready"; series: BlogSeries; episode: BlogEpisode }
  | { status: "missing" }
  | { status: "unavailable" }
> {
  const payload = await strapiGet<StrapiList<StrapiEpisode>>("/api/blog-episodes", {
    "filters[slug][$eq]": slug,
    "populate[paragraphs]": "true",
    "populate[series][fields][0]": "title",
    "populate[series][fields][1]": "slug",
    "populate[series][fields][2]": "tagline",
    "pagination[pageSize]": "1",
  });

  if (!payload?.data) {
    return { status: "unavailable" };
  }

  const record = payload.data[0];
  const summary = record ? toEpisodeSummary(record) : null;

  if (!record || !summary) {
    return { status: "missing" };
  }

  const paragraphs = (record.paragraphs ?? [])
    .map(toParagraph)
    .filter((paragraph) => paragraph !== null);
  const series = record.series ? toSeries(record.series) : null;

  return {
    status: "ready",
    series: series ?? {
      slug: "design-therapy",
      title: "Design Therapy",
      tagline: "",
      episodes: [],
    },
    episode: {
      ...summary,
      paragraphs,
    },
  };
}
