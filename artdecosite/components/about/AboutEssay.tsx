import { aboutEssay } from "@/lib/constants/about";

export function AboutEssay() {
  return (
    <section className="bg-mist px-5 pb-16 pt-4 sm:px-6 lg:px-10 lg:pb-24 lg:pt-6 xl:px-12">
      <article className="mx-auto w-full max-w-3xl">
        <header className="mb-10 border-b border-black/10 pb-10 lg:mb-14 lg:pb-12">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px flex-1 bg-navy/15" />
            <span className="text-black/20">◆</span>
            <span className="h-px flex-1 bg-navy/15" />
          </div>
          <h1 className="text-center font-heading text-[clamp(1.5rem,4vw,2.25rem)] font-bold uppercase leading-snug tracking-[0.08em] text-black">
            {aboutEssay.title}
          </h1>
        </header>

        <div className="space-y-6 text-base leading-[1.9] text-black/70 lg:text-[1.05rem] lg:leading-[2]">
          {aboutEssay.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className={
                paragraph.length < 60
                  ? "font-heading text-lg font-medium text-black/85 lg:text-xl"
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
