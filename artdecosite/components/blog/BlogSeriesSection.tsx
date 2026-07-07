import Link from "next/link";
import { BotanicalAccent } from "@/components/ui/BotanicalAccent";
import type { BlogEpisodeSummary, BlogSeries } from "@/lib/blog/types";
import { toRomanNumeral } from "@/lib/utils/roman";

function EpisodeCard({ episode }: { episode: BlogEpisodeSummary }) {
  return (
    <article className="group flex h-full flex-col">
      <Link
        href={`/blog/${episode.slug}`}
        className="flex h-full flex-col bg-cream px-7 py-8 ring-1 ring-gold/10 transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_40px_-24px_rgba(35,32,25,0.28)] hover:ring-gold/30 sm:px-8 sm:py-9"
      >
        <span className="font-heading text-sm italic text-gold/45 transition-colors duration-300 group-hover:text-gold/70">
          Episode {toRomanNumeral(episode.episode)}
        </span>

        <h3 className="mt-5 font-heading text-[1.35rem] font-normal leading-snug text-ink transition-colors duration-300 group-hover:text-ink sm:text-2xl">
          {episode.title}
        </h3>

        <p className="mt-5 flex-1 font-body text-[0.9375rem] italic leading-[1.75] text-ink/60 transition-colors duration-300 group-hover:text-ink/72 sm:text-base">
          {episode.excerpt}
        </p>

        <span className="mt-8 inline-flex w-fit font-body text-[10px] font-semibold uppercase tracking-[0.34em] text-ink/55 transition-colors duration-300 group-hover:text-gold">
          <span className="border-b border-ink/25 pb-1 transition-[border-color,color] duration-300 group-hover:border-gold/60">
            Read Episode
          </span>
        </span>
      </Link>
    </article>
  );
}

type BlogSeriesSectionProps = {
  series: BlogSeries;
};

export function BlogSeriesSection({ series }: BlogSeriesSectionProps) {
  return (
    <section className="relative overflow-hidden bg-cream-soft pb-24 pt-10 sm:pt-12 lg:pb-32 lg:pt-16">
      <BotanicalAccent position="top-right" className="opacity-35" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-14 lg:mb-16">
          <p className="font-body text-[10px] font-semibold uppercase tracking-[0.42em] text-gold/70">
            Blog
          </p>
          <h1 className="mt-5 font-heading text-4xl font-normal text-ink sm:text-5xl lg:text-[3.25rem]">
            {series.title}
          </h1>
          <p className="mt-5 font-body text-base italic leading-relaxed text-ink/55 sm:mt-6 sm:text-lg lg:text-xl">
            {series.tagline}
          </p>
        </header>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2 lg:gap-7">
          {series.episodes.map((episode) => (
            <EpisodeCard key={episode.slug} episode={episode} />
          ))}
        </div>
      </div>
    </section>
  );
}
