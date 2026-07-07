import { stopDesigningRoomsParagraphs } from "@/lib/blog/episodes/stop-designing-rooms-start-designing-lifestyle";
import {
  getEpisodeSummary,
  getEpisodeSlugs,
} from "@/lib/blog/manifest";
import type { BlogEpisode } from "@/lib/blog/types";

const episodeBodies: Record<string, BlogEpisode["paragraphs"]> = {
  "stop-designing-rooms-start-designing-lifestyle": stopDesigningRoomsParagraphs,
};

export function getEpisodeBySlug(slug: string): BlogEpisode | undefined {
  const summary = getEpisodeSummary(slug);
  const paragraphs = episodeBodies[slug];

  if (!summary || !paragraphs) {
    return undefined;
  }

  return {
    ...summary,
    paragraphs,
  };
}

export { getEpisodeSlugs };
