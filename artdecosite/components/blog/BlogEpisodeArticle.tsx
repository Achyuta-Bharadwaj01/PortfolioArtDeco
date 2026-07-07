import Link from "next/link";
import { BotanicalAccent } from "@/components/ui/BotanicalAccent";
import type { BlogEpisode, BlogSeries } from "@/lib/blog/types";
import { toRomanNumeral } from "@/lib/utils/roman";

type BlogEpisodeArticleProps = {
  series: BlogSeries;
  episode: BlogEpisode;
};

export function BlogEpisodeArticle({ series, episode }: BlogEpisodeArticleProps) {
  return (
    <article className="relative overflow-hidden bg-cream pb-24 pt-8 sm:pt-10 lg:pb-32 lg:pt-12">
      <BotanicalAccent position="top-right" className="opacity-30" />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-5 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-3 font-body text-[10px] font-semibold uppercase tracking-[0.34em] text-ink/50 transition-colors hover:text-gold"
        >
          <span className="h-px w-6 bg-gold/35" />
          Back to {series.title}
        </Link>

        <header className="mt-10 border-b border-gold/15 pb-10 sm:mt-12 sm:pb-12">
          <p className="font-heading text-sm italic text-gold/55">
            Episode {toRomanNumeral(episode.episode)}
          </p>
          <p className="mt-3 font-body text-[10px] font-semibold uppercase tracking-[0.38em] text-gold/65">
            {series.title}
          </p>
          <h1 className="mt-5 font-heading text-3xl font-normal leading-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            {episode.title}
          </h1>
          <p className="mt-5 font-body text-base italic leading-relaxed text-ink/50 sm:text-lg">
            {episode.subtitle ?? series.tagline}
          </p>
        </header>

        <div className="mt-10 space-y-6 sm:mt-12 sm:space-y-7">
          {episode.paragraphs.map((paragraph) => (
            <p
              key={paragraph.text.slice(0, 48)}
              className={
                paragraph.emphasis
                  ? "font-heading text-xl italic leading-relaxed text-ink/78 sm:text-[1.35rem]"
                  : "font-body text-base leading-[1.9] text-ink/68 sm:text-[1.05rem]"
              }
            >
              {paragraph.text}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
