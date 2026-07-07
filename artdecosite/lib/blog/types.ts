export type BlogParagraph = {
  text: string;
  emphasis?: boolean;
};

export type BlogEpisodeSummary = {
  slug: string;
  episode: number;
  title: string;
  excerpt: string;
  publishedAt?: string;
};

export type BlogEpisode = BlogEpisodeSummary & {
  paragraphs: readonly BlogParagraph[];
};

export type BlogSeries = {
  slug: string;
  title: string;
  tagline: string;
  episodes: readonly BlogEpisodeSummary[];
};
