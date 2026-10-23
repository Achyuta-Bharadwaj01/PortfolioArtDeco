import type {
  PortfolioDetail,
  PortfolioKind,
} from "@/lib/portfolio/types";

const STRAPI_URL = process.env.STRAPI_URL ?? "https://admin.shaineela.com";

type StrapiMedia = {
  url?: string | null;
  mime?: string | null;
};

type StrapiEntry = {
  title?: string | null;
  slug?: string | null;
  kind?: PortfolioKind | null;
  category?: string | null;
  featured?: boolean | null;
  sortOrder?: number | null;
  cover?: StrapiMedia | null;
  gallery?: StrapiMedia[] | null;
  description?: { text?: string | null }[] | null;
};

type StrapiList<T> = {
  data?: T[] | null;
};

function mediaUrl(file: StrapiMedia | null | undefined) {
  const url = file?.url?.trim();

  if (!url) {
    return null;
  }

  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  return `${STRAPI_URL}${url}`;
}

function toDetail(entry: StrapiEntry): PortfolioDetail | null {
  if (!entry.slug || !entry.title || (entry.kind !== "project" && entry.kind !== "shoot")) {
    return null;
  }

  const cover = mediaUrl(entry.cover);
  const gallery = (entry.gallery ?? [])
    .map((file) => mediaUrl(file))
    .filter((url): url is string => Boolean(url))
    .filter((url) => url !== cover);
  const poster = cover ?? gallery.shift() ?? null;

  if (!poster) {
    return null;
  }

  return {
    slug: entry.slug,
    title: entry.title,
    category: entry.category?.trim() || (entry.kind === "shoot" ? "Brand Photography" : "Interior Design"),
    image: poster,
    href: `/portfolio/${entry.slug}`,
    kind: entry.kind,
    featured: Boolean(entry.featured),
    collectionFolder: entry.slug,
    root: entry.kind === "shoot" ? "shoots" : "Projects",
    poster,
    gallery,
    description: (entry.description ?? [])
      .map((block) => block.text?.trim() ?? "")
      .filter(Boolean),
  };
}

export async function getStrapiPortfolio(): Promise<PortfolioDetail[] | null> {
  try {
    const url = new URL("/api/portfolio-entries", STRAPI_URL);
    url.searchParams.set("populate[cover]", "true");
    url.searchParams.set("populate[gallery]", "true");
    url.searchParams.set("populate[description]", "true");
    url.searchParams.set("pagination[pageSize]", "100");
    url.searchParams.set("sort[0]", "sortOrder:asc");
    url.searchParams.set("sort[1]", "title:asc");

    const response = await fetch(url, {
      next: { revalidate: 60, tags: ["portfolio"] },
    });

    if (!response.ok) {
      return null;
    }

    const payload = (await response.json()) as StrapiList<StrapiEntry>;

    if (!payload.data) {
      return null;
    }

    return payload.data
      .map(toDetail)
      .filter((entry): entry is PortfolioDetail => entry !== null);
  } catch {
    return null;
  }
}
