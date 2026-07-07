import { dedupeYouTubeUrls } from "@/lib/utils/youtube";

export type BrandWorkVideo = {
  videoId: string;
  label?: string;
};

export type BrandWork = {
  slug: string;
  name: string;
  videos: readonly BrandWorkVideo[];
};

function videosFromUrls(
  urls: readonly string[],
  labels?: readonly string[],
): BrandWorkVideo[] {
  return dedupeYouTubeUrls(urls).map((videoId, index) => ({
    videoId,
    label: labels?.[index],
  }));
}

export const brandWorks: readonly BrandWork[] = [
  {
    slug: "livspace",
    name: "Livspace",
    videos: videosFromUrls([
      "https://www.youtube.com/watch?v=fjlY6AkoZwo",
    ]),
  },
  {
    slug: "nestasia",
    name: "Nestasia",
    videos: videosFromUrls([
      "https://www.youtube.com/watch?v=nFvRh8KorAY",
      "https://youtu.be/nFvRh8KorAY",
    ]),
  },
  {
    slug: "bella",
    name: "Bella",
    videos: videosFromUrls([
      "https://youtu.be/lIaRJI5IBKQ",
      "https://youtu.be/16RrC9GiRgU",
      "https://youtu.be/9S1SZcTG80M",
    ]),
  },
  {
    slug: "taneira",
    name: "Taneira",
    videos: videosFromUrls([
      "https://www.youtube.com/watch?v=vWYjX3kLV4U",
      "https://youtu.be/vWYjX3kLV4U",
      "https://youtu.be/PJhisq1jLfU",
      "https://www.youtube.com/watch?v=vqeWAfn-Xt8",
    ]),
  },
] as const;
