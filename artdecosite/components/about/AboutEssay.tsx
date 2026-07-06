import { aboutEssay } from "@/lib/constants/about";
import {
  EditorialStamp,
  HeraldicCrest,
  OrnamentDivider,
  SketchMural,
} from "@/components/ui/ornaments";

export function AboutEssay() {
  return (
    <section className="relative overflow-hidden bg-mist bg-parchment-texture px-5 pb-16 pt-4 sm:px-6 lg:px-10 lg:pb-24 lg:pt-6 xl:px-12">
      <SketchMural
        variant="botanical"
        tone="mauve"
        className="absolute -left-12 top-8 h-[22rem] w-[26rem] opacity-60 sm:h-[26rem] sm:w-[30rem]"
      />
      <SketchMural
        variant="architectural"
        tone="walnut"
        className="absolute -right-16 bottom-0 hidden h-[20rem] w-[24rem] opacity-50 md:block"
      />
      <EditorialStamp
        size="lg"
        tone="brass"
        className="absolute right-[2%] top-[12%] opacity-40"
      />
      <HeraldicCrest
        size="md"
        tone="cocoa"
        className="absolute bottom-[8%] left-[1%] hidden opacity-45 sm:block"
      />

      <article className="relative z-10 mx-auto w-full max-w-3xl">
        <header className="mb-10 border-b border-cocoa/10 pb-10 lg:mb-14 lg:pb-12">
          <OrnamentDivider className="mb-6" />
          <h1 className="text-center font-heading text-[clamp(1.5rem,4vw,2.25rem)] font-bold uppercase leading-snug tracking-[0.08em] text-black">
            {aboutEssay.title}
          </h1>
        </header>

        <div className="space-y-6 font-body text-base leading-[1.9] text-black/70 lg:text-[1.05rem] lg:leading-[2]">
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
