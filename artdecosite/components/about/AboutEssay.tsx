import { aboutEssay } from "@/lib/constants/about";
import { BotanicalAccent } from "@/components/ui/BotanicalAccent";

export function AboutEssay() {
  return (
    <section className="relative overflow-hidden bg-cream px-5 pb-16 pt-4 sm:px-6 lg:px-10 lg:pb-24 lg:pt-6 xl:px-12">
      <BotanicalAccent position="bottom-left" className="opacity-45" />
      <article className="mx-auto w-full max-w-3xl">
        <header className="mb-10 border-b border-gold/20 pb-10 lg:mb-14 lg:pb-12">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px flex-1 bg-gold/20" />
            <span className="text-gold/45">◆</span>
            <span className="h-px flex-1 bg-gold/20" />
          </div>
          <h1 className="text-center font-heading text-[clamp(1.5rem,4vw,2.25rem)] font-semibold uppercase leading-snug tracking-[0.08em] text-ink">
            {aboutEssay.title}
          </h1>
        </header>

        <div className="space-y-6 font-body text-base leading-[1.9] text-ink/70 lg:text-[1.05rem] lg:leading-[2]">
          {aboutEssay.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className={
                paragraph.length < 60
                  ? "font-heading text-lg font-medium text-ink/85 lg:text-xl"
                  : undefined
              }
            >
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </section>
  );
}
