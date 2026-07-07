import { emotionsMatterParagraphs } from "@/lib/blog/episodes/emotions-matter-how-you-feel-in-a-space";
import { ourSensesAndSpacesParagraphs } from "@/lib/blog/episodes/our-senses-and-spaces";
import { stopDesigningRoomsParagraphs } from "@/lib/blog/episodes/stop-designing-rooms-start-designing-lifestyle";
import {
  getEpisodeSummary,
  getEpisodeSlugs,
} from "@/lib/blog/manifest";
import type { BlogEpisode } from "@/lib/blog/types";

const episodeBodies: Record<string, BlogEpisode["paragraphs"]> = {
  "stop-designing-rooms-start-designing-lifestyle": stopDesigningRoomsParagraphs,
  "emotions-matter-how-you-feel-in-a-space": emotionsMatterParagraphs,
  "our-senses-and-spaces": ourSensesAndSpacesParagraphs,
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
